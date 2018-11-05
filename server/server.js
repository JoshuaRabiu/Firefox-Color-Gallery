const http = require('http');
const url = require('url');
const { Builder, By, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const sharp = require('sharp');
const MongoClient = require('mongodb').MongoClient;
const dbLink = 'mongodb://localhost:27017';
const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');

const updateDb = newEntry => {
  MongoClient.connect(dbLink, async (error, client) => {
    if (error) console.error(error);
    const db = await client.db('firefox-color-gallery-db').collection('Themes');
    await db.insertOne(newEntry, error => (error ? console.error(error) : 0));
    await client.close();
  });
};

const server = http.createServer((request, response) => {
  // CORS, source: https://gist.github.com/balupton/3696140
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Request-Method', '*');
  response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  response.setHeader('Access-Control-Allow-Headers', '*');
  if (request.method === 'OPTIONS') {
    response.writeHead(200);
    response.end();
    return;
  }
});

server.on('request', async (request, response) => {
  if (request.url.slice(1, 7) === 'server') {
    if (request.method === 'GET') {
      MongoClient.connect(dbLink, async (error, client) => {
        if (error) console.error(error);
        const db = await client.db('firefox-color-gallery-db').collection('Themes');
        const urlParam = url.parse(request.url).query;

        if (urlParam === 'dbSize') {
          const { count } = await db.stats();
          await response.write(String(count));
          await response.end();
        } else {
          const start = Number(urlParam);
          let themes = await db.find({}).project({ _id: false }).skip(start).limit(9).sort({ $natural: -1 }).toArray();
          await response.write(JSON.stringify(themes));
          await response.end();
        }
      });
    }
    if (request.method === 'POST') {
      console.log(request.method);
      let body = '';
      request.on('data', chunk => {
        body += chunk.toString();
      });
      request.on('end', async () => {
        (async () => {
          const profile = './3akxsamk.Default User';
          const options = await new firefox.Options().setProfile(profile);
          const driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
          await driver.manage().window().maximize();

          try {
            const themeObj = await JSON.parse(body);
            const { authorName, themeName, themeLink } = themeObj;
            await driver.get(themeLink);
            await driver.sleep(5500);
            await driver.takeScreenshot().then(async (img, error) => {
              if (error) console.error(error);
              let buf = await Buffer.from(img, 'base64');
              const croppedBuf = await sharp(buf).extract({ left: 517, top: 225, width: 548, height: 200 }).toBuffer();
              const croppedB64Img = await croppedBuf.toString('base64');
              await updateDb({
                authorName,
                themeName,
                themeLink,
                imgURL: `data:image/png;base64,${croppedB64Img}`
              });
              await response.writeHead(200, { 'Context-Type': 'text/plain' });
              await response.write('Database updated.');
              await response.end();
            });
          } finally {
            await driver.quit();
          }
        })();
      });
    }
  } else {
      const serve = serveStatic('../build');
      serve(request, response, finalhandler(request, response));
    } 
});

server.on('error', error => console.error(error));
const port = 80 || process.env.PORT;
server.listen(port);
console.log(`Server listening on port ${port}`);
