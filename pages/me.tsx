import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import './index.scss';
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
          Hi! My name is Mari Kinovych, and I am an illustrator.<br/>
          I live and work in Kyiv, Ukraine.<br/>
          <br/>
          This is my second attempt to become a proper freelancer. Before this I worked as an illustrator in motion design studio, where I loved to draw in vector and found out how to work with animation at all.<br/>
          <br/>
          I love my job and consider myself a happy person, though it doesn't mean that I am not frustrated sometimes. I like this kind of freedom, when you can be different with every new illustration, but also I love some boring technical tasks where you don't need to be creative.<br/>
          <br/>
          I work with different clients and tasks. My favorites are illustrations for some editorial/social media purposes and books. My commercial projects are on <a href="https://www.behance.net/marikino" target="_blank" rel="noopener noreferrer">behance</a>.<br/>
          <br/>
          Besides work I have a lot fun with my dog, like to cook (but not everyday), do yoga, plant my balcony with succulents and find pleasure in watching paintings of Old Masters. I spend too much time in social media and want to practice more analogue graphics, but not today &gt;&lt;<br/>
          <br/>
          Hope you are enjoying my illustration space!<br/>
          <br/>
          <div style={{ width: '100%', textAlign: 'center' }}>❤</div>
        </div>
      </div>
    </>
  );
};

export default AboutPage; 
