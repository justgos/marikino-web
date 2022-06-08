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

const RasterPage = () => {
  const works = [
    { path: '8march.jpg.jpg', size: [ 1024, 1024 ] },
    { path: 'ARSENALNA.jpg', size: [ 1024, 1024 ] },
    { path: 'Abstract-4.jpg', size: [ 1024, 1024 ] },
    { path: 'Beer-asia.jpg', size: [ 1536, 1024 ] },
    { path: 'Beer_Blue_Degustation.jpg.jpg', size: [ 1536, 1024 ] },
    { path: 'BEER-IPA.jpg', size: [ 1536, 1024 ] },
    { path: 'Blossom.jpg', size: [ 1024, 1024 ] },
    { path: 'Christmas_.jpg', size: [ 1024, 1024 ] },
    { path: 'Christmasanimation.gif', size: [ 1024, 1024 ] },
    { path: 'Dinner-september.jpg', size: [ 1536, 1024 ] },
    { path: 'Coffee.jpg', size: [ 717, 1024 ] },
    { path: 'Degustation-may.jpg', size: [ 1536, 1024 ] },
    { path: 'Christmas_Dinner_.jpg.jpg', size: [ 1536, 1024 ] },
    { path: 'Flowerlady.jpg', size: [ 717, 1024 ] },
    { path: 'Good_wine-fish.jpg', size: [ 1536, 1024 ] },
    { path: 'HakuAnimalistic.gif', size: [ 1024, 1024 ] },
    { path: 'Masha.jpg.jpg', size: [ 1024, 1024 ] },
    { path: 'My_Inner.jpg.jpg', size: [ 1024, 1024 ] },
    { path: 'Silpo-_test.jpg', size: [ 1536, 1024 ] },
    { path: 'New_Year_me.jpg', size: [ 717, 1024 ] },
    { path: 'Pazzle_-final.jpg', size: [ 717, 1024 ] },
    { path: 'Sex_Work.jpg', size: [ 819, 1024 ] },
    { path: 'Pictorial.jpg', size: [ 717, 1024 ] },
    { path: 'Pictorial_-_bag.jpg', size: [ 717, 1024 ] },
    { path: 'Tuna-lunch.jpg', size: [ 1536, 1024 ] },
    { path: 'Untitled_Artwork.jpg', size: [ 1536, 1024 ] },
    { path: 'Wine_school_Spring_Beginner.jpg', size: [ 1536, 1024 ] },
    { path: 'Wineschool-spring.jpg', size: [ 1392, 1024 ] },
    { path: 'Zebra.jpg', size: [ 1024, 1024 ] },
    { path: 'fire.jpg', size: [ 1024, 1024 ] },
    { path: 'goodwine_top10_feb2.jpg', size: [ 1669, 1024 ] },
    { path: 'summer_wine_school.jpg', size: [ 1536, 1024 ] },

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
      <Header />
      <Nav page="raster" />

      <WorkTiles rootPath="/img/raster/" works={works} />

      <Footer />
    </>
  );
};

export default RasterPage; 
