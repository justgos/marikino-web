import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import './index.scss';
import Nav from '../components/Nav';
import WorkTiles from '../components/WorkTiles';

const RasterPage = () => {
  const works = [
    { path: 'Greyhair.jpg', size: [ 2048, 2048 ] },
    { path: 'New_Year.jpg', size: [ 1595, 1570 ] },
    { path: 'Weekend.jpg', size: [ 2048, 2048 ] },
    { path: 'Wineschool-Odessa.jpg', size: [ 2355, 1570 ] },
    { path: 'alinabrokolina.jpg', size: [ 1500, 1500 ] },
    { path: 'bananatea.jpg', size: [ 1500, 1500 ] },
    { path: 'arsenal.jpg', size: [ 2000, 2000 ] },
    { path: 'bottleman.jpg', size: [ 1500, 1500 ] },
    { path: 'calvados.jpg', size: [ 2355, 1570 ] },
    { path: 'goodwine_tiger.jpg', size: [ 2377, 1900 ] },
    { path: 'fire.jpg', size: [ 1500, 1500 ] },
    { path: 'hair.jpg', size: [ 2000, 2000 ] },
    { path: 'italy.jpg', size: [ 1500, 1500 ] },
    { path: 'iphone.jpg', size: [ 2000, 2000 ] },
    { path: 'medium.jpg', size: [ 2700, 1080 ] },
    { path: 'nothing-special.jpg', size: [ 2032, 2700 ] },
    { path: 'relationshit.jpg', size: [ 1920, 1005 ] },
    { path: 'tvitter.jpg', size: [ 3000, 3000 ] },
    { path: 'water-plastic.jpg', size: [ 1500, 1500 ] },
  ];

  return (
    <>
      <Nav page="raster" />

      <WorkTiles rootPath="/img/raster/" works={works} />
    </>
  );
};

export default RasterPage; 
