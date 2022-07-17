import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOMetaTag = ({ mainTitle, pageTitle, description, keywords }) => {
  return (
    <Helmet>
      <title>{`${mainTitle} | ${pageTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="VERSUS.PS" />
      <meta
        property="og:description"
        content="여기를 눌러 링크를 확인하세요."
      />
      <meta property="og:image" content="/images/VERSUSPS_Symbol.png" />
      <meta property="og:url" content="versus.ps/" />
      <meta property="og:site_name" content="VERSUS.PS" />
    </Helmet>
  );
};

export default SEOMetaTag;
