import React from 'react';
import '../style/Upload.css';
import { postTheme, setAuthorName, setThemeName, setThemeLink } from '../actions';
import { Loader } from './Loader';
import { Link } from 'react-router-dom';
import backArrow from '../images/backArrow.svg'

export const Upload = ({ isLinkInvalid, authorNameExists, themeNameExists, loadingStatus }) => {
  return (
    <div className="upload-wrapper">
    <Link to="/"><img className="back-arrow" alt="back arrow" src={backArrow} /></Link>
      <h2>Upload A Theme</h2>
      <p>
        Paste link to theme: <input onChange={e =>  setThemeLink(e)}  />
      </p>
      <p className="err-msg">
        {isLinkInvalid === `yes` ? `This doesn't look like a valid Firefox Color link.` : null}
      </p>
      <p>
        Author Name: <input maxLength={53} onChange={e => setAuthorName(e)} />
        <p className="err-msg">{authorNameExists === 'empty author name' ? 'Author Name cannot be empty.' : null}</p>
      </p>
      <p>
        Theme Name: <input maxLength={56} onChange={e => setThemeName(e)} />
        <p className="err-msg">{themeNameExists === 'theme name is empty' ? 'Theme Name cannot be empty.' : null}</p>
      </p>
      <label onClick={postTheme} className="submit"><p>Submit</p></label>
      {loadingStatus === true
        ? <Loader isUploading={true} />
        : null
      }
    </div>
  );
};
