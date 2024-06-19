import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import Nav from '../components/Nav';
import WorkTiles from '../components/WorkTiles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RasterPage = () => {
  const works = [
    { path: '8march.jpg.jpg', size: [ 1024, 1024 ] },
    
    // { path: 'waking_up.jpg', size: [ 724, 1024 ] },

    { path: 'February.jpg', size: [ 1453, 1024 ] },
    { path: '1.jpg', size: [ 841, 1024 ] },
    { path: '2.jpg', size: [ 841, 1024 ] },
    { path: '0613_COV_CANNES_LO [FINAL].jpg', size: [ 857, 1024 ] },
    { path: 'December-January.jpg', size: [ 1453, 1024 ] },
    { path: 'June.jpg', size: [ 1453, 1024 ] },
    
    { path: 'Leleky.jpg', size: [ 677, 1024 ] },
    { path: 'Liberation.jpg', size: [ 1085, 1024 ] },
    { path: 'mari_kinovych_ukraine.jpg', size: [ 726, 1024 ] },
    { path: 'Life_On_Edge-Kinovych.jpg', size: [ 724, 1024 ] },
    { path: 'March.jpg', size: [ 1453, 1024 ] },
    { path: 'Marikino-Taras.jpg', size: [ 1434, 1024 ] },
    { path: 'May.jpg', size: [ 1453, 1024 ] },
    { path: 'Oreli-print.jpg', size: [ 1072, 1024 ] },
    { path: 'Pinflower.jpg', size: [ 738, 1024 ] },
    { path: 'coverard.jpg', size: [ 1024, 1024 ] },
    
    { path: 'Poltava.jpg', size: [ 683, 1024 ] },
    { path: 'Ukrainian_spaces.jpg', size: [ 1024, 1024 ] },
    { path: 'Tree.jpg', size: [ 738, 1024 ] },
    

    { path: 'War_Feeling.jpg', size: [ 783, 1024 ] },
    { path: 'UKRAINEfrisson.jpg', size: [ 1454, 1024 ] },
    { path: 'Refugee.jpg', size: [ 726, 1024 ] },
    
    
    { path: 'Maidan.jpg', size: [ 731, 1024 ] },
    { path: 'Sample.jpg', size: [ 1024, 1024 ] },
    { path: 'Ukrainians.jpg', size: [ 1024, 1024 ] },
    
  
    { path: 'Mariupol.jpg', size: [ 1024, 1024 ] },
    
    { path: 'mari_kinovych_pigeon.jpg', size: [ 814, 1024 ] },
    { path: 'For_Republik.jpg', size: [ 1024, 1024 ] },
    
    
    { path: 'Beer_Blue_Degustation.jpg.jpg', size: [ 1536, 1024 ] },
    { path: 'Podcast_Cover.jpg', size: [ 1024, 1024 ] },
    
    
    { path: 'Neprosti_3.jpg', size: [ 1024, 1024 ] },
    { path: 'Felix_Austria_1.jpg', size: [ 1024, 1024 ] },
    { path: 'sexy_dog.jpg', size: [ 1024, 1024 ] },
    { path: 'Social_Distancing_.jpg', size: [ 1024, 1024 ] },
  
    // { path: 'Vase.jpg', size: [ 1024, 1024 ] },
    { path: 'Beer-asia.jpg', size: [ 1536, 1024 ] },
    
    { path: 'Christmasanimation.gif', size: [ 1024, 1024 ] },
    { path: 'Christmas_.jpg', size: [ 1024, 1024 ] },
    { path: 'Dinner-september.jpg', size: [ 1536, 1024 ] },
    { path: 'Coffee.jpg', size: [ 717, 1024 ] },
    { path: 'Degustation-may.jpg', size: [ 1536, 1024 ] },
    { path: 'Christmas_Dinner_.jpg.jpg', size: [ 1536, 1024 ] },
    { path: 'Good_wine-fish.jpg', size: [ 1536, 1024 ] },
    { path: 'Pazzle_-final.jpg', size: [ 717, 1024 ] },
    { path: 'HakuAnimalistic.gif', size: [ 1024, 1024 ] },
    { path: 'My_Inner.jpg.jpg', size: [ 1024, 1024 ] },
    
  
    { path: 'Pictorial.jpg', size: [ 717, 1024 ] },
    
    { path: 'New_Year_me.jpg', size: [ 717, 1024 ] },
    { path: 'Silpo-_test.jpg', size: [ 1536, 1024 ] },
    
    { path: 'Tuna-lunch.jpg', size: [ 1536, 1024 ] },
    { path: 'Pictorial_-_bag.jpg', size: [ 717, 1024 ] },
    { path: 'Wine_school_Spring_Beginner.jpg', size: [ 1536, 1024 ] },
    { path: 'Wineschool-spring.jpg', size: [ 1392, 1024 ] },
    { path: 'summer_wine_school.jpg', size: [ 1536, 1024 ] },
    { path: 'alinabrokolina.jpg', size: [ 1500, 1500 ] },
    { path: 'New_Year.jpg', size: [ 1595, 1570 ] },

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
