import React from 'react';
import { Loader } from './Loader';
import { ThemeItem } from './ThemeItem';
import { loadThemes } from '../actions';
import '../style/ThemeList.css';

loadThemes();

export const ThemeList = ({ themeData }) => {
  if (themeData) {
    const len = themeData.length;
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(<ThemeItem themeData={themeData[i]} />);
    }
    return <div className="list-container">{arr}</div>;
  }
  return <Loader />;
};
