import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import Nav from '../components/Nav';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <>
      <Header />
      <Nav page="me" />

      <div className="container">
        <div className="me-photo" />

        <div className="social-icons">
          <a href="https://www.behance.net/marikino" target="_blank" rel="noopener noreferrer" className="icon-be"><div /></a>
          <a href="https://www.instagram.com/marikinoo/" target="_blank" rel="noopener noreferrer" className="icon-insta"><div /></a>
          <a href="mailto:kinovych@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-gmail"><div /></a>
        </div>

        <div className="bio">
          Hi! <br/>
          My name is Mari Kinovych<br/>
          and I live and work in Kyiv, Ukraine. <br/>
          <br/>
          I enjoy being an illustrator because of the freedom it offers to rediscover oneself with each new illustration. At the same time, I appreciate the occasional technical tasks that may seem mundane but don't require creativity.<br/>
          <br/>
          I work with different clients and tasks due to my wide experience: from advertising to comic. But my all-time favorites are illustrations for some editorial/social media purposes and book covers. 
          After the full-scale invasion of Russia, I devoted the majority of my creative energy to depicting my wartime experiences. Today, I find that projects centered around war-related topics are the most fulfilling for me.<br/>
          <br/>
          Here I gather only a small part of my works but show more on my Instagram page. Some of my clients include: The Economist, The Guardian Weekly, Adweek, Republic, New Statesman, Liberation, MacPaw, Facebook, Harvard Ukrainian Research Institute, Penguin Random House, UN Women ECA, Heinrich Böll Stiftung, Academic Boston Study Press. <br/>
          <br/>
          Apart from work, I enjoy spending time with my dog, cooking (though not daily), practicing yoga, tending to my balcony garden, and devoting my free time to tapestry making. I spend too much time on social media (who doesn't) and want to practice more analog graphics.<br/>
          <br/>
          Hope you are enjoying my illustration space!<br/>
          <br/>
          <div className="heart" />
        </div>
      </div>
    </>
  );
};

export default AboutPage; 
