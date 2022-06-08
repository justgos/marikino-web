import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import './index.scss';
import Nav from '../components/Nav';
import WorkTiles from '../components/WorkTiles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VectorPage = () => {
  const works = [
    { path: 'amnesty.gif', size: [ 1024, 1024 ] },
    { path: 'Chile_Wine.jpg', size: [ 1536, 1024 ] },
    { path: 'Dinner_Party.jpg', size: [ 1532, 1024 ] },
    { path: 'FB-back_to_school-5.jpg', size: [ 2577, 1024 ] },
    { path: 'Screenshot 2021-03-09 at 10.21.54.jpg', size: [ 1096, 1024 ] },
    { path: 'Screenshot 2021-11-14 at 21.24.59.jpg', size: [ 1024, 1024 ] },
    { path: 'Serfer_1.jpg', size: [ 1024, 1024 ] },
    { path: 'maccafe.gif', size: [ 1024, 1024 ] },

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
  ];

  return (
    <>
      <Header />
      <Nav page="vector" />

      <WorkTiles rootPath="/img/vector/" works={works} />

      <Footer />
    </>
  );
};

export default VectorPage; 
