import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import './index.scss';
import Nav from '../components/Nav';
import WorkTiles from '../components/WorkTiles';

const SketchPage = () => {
  const works = [
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
  ].map(w => ({
    ...w,
    aspectRatio: w.size[0] / w.size[1],
    idx: -1,
    width: 0,
  }));

  return (
    <>
      <Nav page="sketch" />

      <WorkTiles rootPath="/img/sketch/" works={works} aspectRatioPerRow={2.1} />
    </>
  );
};

export default SketchPage; 
