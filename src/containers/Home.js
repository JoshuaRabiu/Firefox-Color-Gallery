import React from 'react';
import { connect } from 'react-redux';
import { Upload } from '../components/Upload';
import { Gallery } from '../components/Gallery';

const Home =  ({ themeData, isLinkInvalid, authorNameExists, themeNameExists, showUpload=false, loadingStatus, counter, totalPages }) => {
  if (showUpload === true) {
    return <Upload isLinkInvalid={isLinkInvalid} authorNameExists={authorNameExists} themeNameExists={themeNameExists} loadingStatus={loadingStatus}/>
  }
  return <Gallery themeData={themeData} counter={counter} totalPages={totalPages} loadingStatus={loadingStatus}/>
  
}

const mapStateToProps = state => {
  return {
    isLinkInvalid: state.isLinkInvalid,
    authorName: state.authorName,
    themeName: state.themeName,
    themeLink: state.themeLink,
    themeData: state.themeData,
    authorNameExists: state.authorNameExists,
    themeNameExists: state.themeNameExists,
    loadingStatus: state.loadingStatus,
    counter: state.counter,
    totalPages: state.totalPages
  }
}

export default connect(mapStateToProps)(Home);
