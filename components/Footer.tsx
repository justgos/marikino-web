import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import classNames from 'classnames';

interface Props {
  //
}

const Footer = ({  } : Props) => {
  return (
    <>
      <footer>
        <div className="container">
          &copy; Copyright 2022, Mari Kinovych. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
