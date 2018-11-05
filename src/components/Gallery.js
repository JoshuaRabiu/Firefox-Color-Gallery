import React from 'react';
import { ThemeList } from './ThemeList';
import '../style/Gallery.css';
import { Loader } from './Loader';
import { PageButton } from './PageButton';


export const Gallery = ({ themeData, counter, totalPages, loadingStatus }) => {
  const currentPage = counter / 9 + 1;
  
  if (loadingStatus === true) {
    return <div><Loader /></div>
  }

  return (
  <div>
    <ThemeList themeData={themeData} />
    <span className="page-counter">
      {counter === 0 ? null : <PageButton direction="back" />}
      <p>Page {totalPages === null ? `${currentPage} of ...` : `${currentPage} of ${totalPages}`}</p >
      {currentPage === totalPages ? null : <PageButton direction="forward"/>}
    </span>
  </div>
  )
};
