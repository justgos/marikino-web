import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import Nav from '../components/Nav';
import WorkTiles from '../components/WorkTiles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ComicPage = () => {
  const works = [
    { path: 'Art_politics.jpg', size: [ 1024, 1024 ] },
    { path: 'Copy of Blackout-all.jpg', size: [ 256, 1024 ] },
    { path: 'Copy of eurovision3in1.jpg', size: [ 341, 1024 ] },
    { path: 'Przekroj_spreadsheet.jpg', size: [ 1455, 1024 ] },
    { path: 'TheEconomist.jpg', size: [ 339, 1024 ] },
  ];

  return (
    <>
      <Header />
      <Nav page="comic" />

      <WorkTiles rootPath="/img/comic/" works={works} aspectRatioPerRow={2.1} />

      <Footer />
    </>
  );
};

export default ComicPage; 
