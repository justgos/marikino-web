import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import './index.scss';
import Nav from '../components/Nav';

const AboutPage = () => {
  return (
    <>
      <Nav page="me" />

      <div className="container">
        <div className="me-photo" />

        <div className="social-icons">
          <a href="https://www.behance.net/marikino" target="_blank" rel="noopener noreferrer" className="icon-be"><div /></a>
          <a href="https://dribbble.com/marikino" target="_blank" rel="noopener noreferrer" className="icon-dribbble"><div /></a>
          <a href="https://www.instagram.com/marikinoo/" target="_blank" rel="noopener noreferrer" className="icon-insta"><div /></a>
          <a href="mailto:kinovych@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-gmail"><div /></a>
        </div>
      </div>
    </>
  );
};

export default AboutPage; 
