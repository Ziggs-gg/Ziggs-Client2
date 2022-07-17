import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOMetaTag = ({ mainTitle, pageTitle, description, keywords }) => {
  return (
    <Helmet>
      <title>{`${mainTitle} | ${pageTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default SEOMetaTag;
