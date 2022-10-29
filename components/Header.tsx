import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import classNames from 'classnames';

interface Props {
  //
}

const Header = ({  } : Props) => {
  const pageTitle = 'Mari Kinovych — illustrator';
  const pageDesc = 'No pressure, just pics.';
  const pageThumb = '/img/social-me.jpg';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {/* Social media embedding info */}
        <meta name="title" content={pageTitle}/>
        <meta name="description" content={pageDesc}/>
        <link rel="image_src" href={pageThumb}/>
        <meta property="og:title" content={pageTitle}/>
        <meta property="og:description" content={pageDesc}/>
        <meta property="og:image" content={pageThumb}/>
        <meta property="twitter:title" content={pageTitle}/>
        <meta property="twitter:description" content={pageDesc}/>
        <meta property="twitter:image" content={pageThumb}/>
      </Head>
    </>
  );
};

export default Header;
