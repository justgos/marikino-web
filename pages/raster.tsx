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
    { path: 'mari_kinovych_ukraine.jpg', size: [ 726, 1024 ] },
    { path: 'UKRAINEfrisson.jpg', size: [ 1454, 1024 ] },
    { path: 'Refugee.jpg', size: [ 726, 1024 ] },
    { path: 'War_Feeling.jpg', size: [ 783, 1024 ] },
    { path: 'Vinnytsía.jpg', size: [ 1024, 1024 ] },
    { path: 'Maidan.jpg', size: [ 731, 1024 ] },
    { path: 'Rage.jpg', size: [ 1024, 1024 ] },
    { path: 'Tote_bag.jpg', size: [ 796, 1024 ] },
    { path: 'Russian_world-fossil.jpg', size: [ 813, 1024 ] },
    { path: 'Mariupol.jpg', size: [ 1024, 1024 ] },
    { path: 'Ukrainians.jpg', size: [ 1024, 1024 ] },
    { path: 'Scarecrow.jpg', size: [ 724, 1024 ] },
    { path: 'For_Republik.jpg', size: [ 1024, 1024 ] },
    { path: 'Force.jpg', size: [ 1024, 1024 ] },
    { path: '_Kherson.jpg', size: [ 1024, 1024 ] },
    { path: 'mari_kinovych_pigeon.jpg', size: [ 814, 1024 ] },
    { path: 'war.jpg', size: [ 1024, 1024 ] },
    { path: '_150.jpg', size: [ 724, 1024 ] },
    { path: 'War_Diary.jpg', size: [ 1024, 1024 ] },
    { path: 'coverard.jpg', size: [ 1024, 1024 ] },
    { path: 'Home.jpg', size: [ 1024, 1024 ] },

    { path: 'News.jpg', size: [ 1024, 1024 ] },
    { path: 'ARSENALNA.jpg', size: [ 1024, 1024 ] },
    { path: 'Autumn.jpg', size: [ 1024, 1024 ] },
    { path: 'sexy_dog.jpg', size: [ 1024, 1024 ] },
    { path: '8march.jpg.jpg', size: [ 1024, 1024 ] },
    { path: 'Main.jpg', size: [ 1752, 1024 ] },
    { path: 'Water_Flower.jpg', size: [ 1024, 1024 ] },
    { path: 'Stilllife.jpg', size: [ 1024, 1024 ] },
    { path: 'Neprosti_3.jpg', size: [ 1024, 1024 ] },
    
    { path: 'Social_Distancing_.jpg', size: [ 1024, 1024 ] },
    { path: 'Abstract-4.jpg', size: [ 1024, 1024 ] },
    { path: 'Vase.jpg', size: [ 1024, 1024 ] },
    { path: 'Kyiv_Zelen_Bud.jpg', size: [ 1024, 1024 ] },
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
    { path: 'Pazzle_-final.jpg', size: [ 717, 1024 ] },
    { path: 'HakuAnimalistic.gif', size: [ 1024, 1024 ] },
    { path: 'Masha.jpg.jpg', size: [ 1024, 1024 ] },
    { path: 'New_Year_me.jpg', size: [ 717, 1024 ] },
    { path: 'My_Inner.jpg.jpg', size: [ 1024, 1024 ] },
    { path: 'Silpo-_test.jpg', size: [ 1536, 1024 ] },
    { path: 'Pictorial.jpg', size: [ 717, 1024 ] },
    { path: 'Tuna-lunch.jpg', size: [ 1536, 1024 ] },
    { path: 'Pictorial_-_bag.jpg', size: [ 717, 1024 ] },
    { path: 'Untitled_Artwork.jpg', size: [ 1536, 1024 ] },
    { path: 'Wine_school_Spring_Beginner.jpg', size: [ 1536, 1024 ] },
    { path: 'Wineschool-spring.jpg', size: [ 1392, 1024 ] },
    { path: 'Zebra.jpg', size: [ 1024, 1024 ] },
    { path: 'fire.jpg', size: [ 1024, 1024 ] },
    { path: 'goodwine_top10_feb2.jpg', size: [ 1669, 1024 ] },
    { path: 'summer_wine_school.jpg', size: [ 1536, 1024 ] },

    { path: 'Greyhair.jpg', size: [ 2048, 2048 ] },
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
