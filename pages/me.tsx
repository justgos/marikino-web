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
          <a href="https://dribbble.com/marikino" target="_blank" rel="noopener noreferrer" className="icon-dribbble"><div /></a>
          <a href="https://www.facebook.com/mari.kinovych" target="_blank" rel="noopener noreferrer" className="icon-fb"><div /></a>
          <a href="mailto:kinovych@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-gmail"><div /></a>
        </div>

        <div className="bio">
          Hi! My name is Mari Kinovych,<br/>
          I live and work in Kyiv, Ukraine and this website is my attempt to become a proper freelancer. <br/>
          <br/>
          I love to be an illustrator because of this kind of freedom when you can be different with every new illustration, but also I love some boring technical tasks where you don't need to be creative.<br/>
          <br/>
          I work with different clients and tasks due to my wide experience: from lettering to illustrations for explainer videos. But my all-time favorites are illustrations for some editorial/social media purposes and books. <br/>
          <br/>
          Here I gather only a small part of my works but show more process and commercial cases on my Behance page.<br/>
          <br/>
          Besides work, I have a lot of fun with my dog, like to cook (but not every day), do yoga, plant my balcony with succulents and find pleasure in watching paintings of Old Masters. I spend too much time on social media and want to practice more analog graphics.<br/>
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
