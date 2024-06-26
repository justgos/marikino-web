import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import Nav from '../components/Nav';
import WorkTiles from '../components/WorkTiles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SketchPage = () => {
  const works = [
    { path: 'Chernihiv.jpg', size: [ 1024, 1024 ] },
    { path: 'cornflower.jpg', size: [ 1024, 1024 ] },
    { path: 'Kryvyi.jpg', size: [ 1608, 1024 ] },
    { path: 'Kyiv2.jpg', size: [ 1466, 1024 ] },
    { path: 'Pavlograd-2.jpg', size: [ 1466, 1024 ] },
    { path: 'Sketch.jpg', size: [ 1301, 1024 ] },
    { path: 'mari_kinovych_save_dogs.jpg', size: [ 726, 1024 ] },

    { path: '2020symbol.jpg', size: [ 1024, 1024 ] },
    { path: 'Braces.jpg', size: [ 1024, 1024 ] },
    { path: 'Hakusketch.jpg', size: [ 1024, 1024 ] },
    { path: 'Scones.jpg', size: [ 1024, 1024 ] },
    { path: 'self-portrait.jpg', size: [ 1024, 1024 ] },
    { path: 'Pause_.jpg', size: [ 2048, 2048 ] },
    { path: 'abstract_3-1.jpg', size: [ 1500, 1500 ] },
    { path: 'selfcare.jpg', size: [ 1500, 1500 ] },
    { path: 'abc.jpg', size: [ 1500, 1500 ] },
    { path: 'smelly-cat.jpg', size: [ 1500, 1500 ] },
    { path: 'Present.jpg', size: [ 2352, 2333 ] },
    { path: 'bufet.jpg', size: [ 2000, 2000 ] },
    { path: 'What_s_In_The_Box.jpg', size: [ 2048, 2048 ] },
    { path: 'tarakan.jpg', size: [ 1200, 1200 ] },
    { path: 'watermaloon.jpg', size: [ 1500, 1500 ] },
    { path: 'wok.jpg', size: [ 2048, 2048 ] },
    { path: 'Productivity_.jpg', size: [ 2048, 2048 ] },
  ];

  return (
    <>
      <Header />
      <Nav page="sketch" />

      <WorkTiles rootPath="/img/sketch/" works={works} aspectRatioPerRow={2.1} />

      <Footer />
    </>
  );
};

export default SketchPage; 
