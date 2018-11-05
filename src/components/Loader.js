import React from 'react';
import '../style/Loader.css'
// Forked from: https://codepen.io/francoislesenne/pen/aIuko
export const Loader = ({ isUploading }) => (
  <section className="loader-wrapper">
    <span className="loader loader-quart"> </span><p>{isUploading ? 'Uploading theme...will redirect upon completion.' : 'Loading...'}</p>
  </section>
);
