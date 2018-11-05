import React from 'react';
import { changePage } from '../actions';
import '../style/PageButton.css';

export const PageButton = ({ direction }) => (
  <div onClick={() => changePage(direction)} className="direction-wrapper">
    <p>{direction === 'forward' ? 'next' : 'previous'}</p>
  </div>
);
