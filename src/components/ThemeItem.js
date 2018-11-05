import React from 'react';
import '../style/ThemeItem.css'

export const ThemeItem = ({ themeData }) => (
  <div className="card">
    <a target="_blank" rel="noopener noreferrer" href={themeData.themeLink}><img src={themeData.imgURL} className="preview" /></a>
    <p>{themeData.themeName}</p>
    <p>By: {themeData.authorName}</p>
    <a target="_blank" rel="noopener noreferrer" href={themeData.themeLink}><p>Get it here</p></a>
  </div>
);