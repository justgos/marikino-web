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
    { path: 'Art_politics.jpg', size: [ 2048, 2048 ] },
    { path: 'Copy of Blackout-all.jpg', size: [ 512, 2048 ] },
    { path: 'Copy of eurovision3in1.jpg', size: [ 683, 2048 ] },
    { path: 'Przekroj_spreadsheet.jpg', size: [ 2909, 2048 ] },
    { path: 'TheEconomist.jpg', size: [ 678, 2048 ] },
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
