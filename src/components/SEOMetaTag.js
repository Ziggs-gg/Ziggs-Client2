import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOMetaTag = ({ mainTitle, pageTitle }) => {
  return (
    <Helmet>
      <title>{`${mainTitle} | ${pageTitle}`}</title>
    </Helmet>
  );
};

export default SEOMetaTag;
