import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import './index.scss';
import Nav from '../components/Nav';
import WorkTiles from '../components/WorkTiles';

const VectorPage = () => {
  const works = [
    { path: 'babushka.jpg', size: [ 2000, 2000 ] },
    { path: 'city_2colors.jpg', size: [ 2000, 1500 ] },
    { path: 'certificate_v1.jpg', size: [ 1612, 906 ] },
    { path: 'Visa-vsisvoi-logo-1_white.jpg', size: [ 2048, 2048 ] },
    { path: 'Visa-vsisvoi-illustration2.jpg', size: [ 2048, 2048 ] },
    { path: 'carpet_pattern.jpg', size: [ 2664, 1998 ] },
    { path: 'knygolove.jpg', size: [ 5001, 5001 ] },
    { path: 'cheek_2.jpg', size: [ 1604, 1203 ] },
    { path: 'hand.jpg', size: [ 2000, 1500 ] },
    { path: 'gifty_girl.jpg', size: [ 1500, 1500 ] },
    { path: 'workshop.jpg', size: [ 2000, 2000 ]  },
    { path: 'krupa2020_illustrations_all-in-1.jpg', size: [ 2000, 1286 ] },
    { path: 'krupa_illustrations_1.jpg', size: [ 1500, 1500 ] },
    { path: 'krupa_illustrations_2.jpg', size: [ 1500, 1500 ] },
    { path: 'krupa_illustrations_3.jpg', size: [ 1500, 1500 ] },
  ].map(w => ({
    ...w,
    aspectRatio: w.size[0] / w.size[1],
    idx: -1,
    width: 0,
  }));

  return (
    <>
      <Nav page="vector" />

      <WorkTiles rootPath="/img/vector/" works={works} />
    </>
  );
};

export default VectorPage; 
