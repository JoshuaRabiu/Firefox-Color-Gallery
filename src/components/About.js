import React from 'react';
import '../style/About.css';
import { Link } from 'react-router-dom';
import backArrow from '../images/backArrow.svg';

export const About = () => (
  <div className="about-wrapper">
    <h3>
        <Link to="/"><img className="back-arrow" alt="back arrow" src={backArrow} /></Link> <span />
      About
    </h3>
    <p>
      Firefox Color gallery is a collection themes made with <a href="https://color.firefox.com">Firefox Color</a> that allows users to easily upload themes of their own.
      It was made primarily with React and Node.js's native http module.<br />
      The source code can be found <a href="https://github.com/JoshuaScript/Firefox-color-gallery">here on GitHub</a>.
    </p>
    <h3>
      How does it work?
    </h3>
      <p>
        Under the hood, Firefox Color gallery uses its own instance of Firefox (via <a href="https://seleniumhq.github.io/selenium/docs/api/javascript/index.html">Selenium WebDriver</a>) to take a screenshot of a theme preview. This screenshot is then cropped via the <a href="https://github.com/lovell/sharp">node sharp</a> module. The data for each theme is stored via MongoDB.
      </p>       
    <h3>
        Attributions:
    </h3>
    <ul>
        <li><a href="https://www.flaticon.com/free-icon/left-arrow_61752#term=back%20arrow&page=1&position=17">Back Arrow</a></li>
    </ul>
  </div>
)