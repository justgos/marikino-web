import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import classNames from 'classnames';
import { jsx, css } from '@emotion/core';

interface Props {
  page? : string;
}

const Nav = ({ page } : Props) => {
  const [ open, setOpen ] = useState(false);
  const distStart = 80;
  const distEnd = 10;
  const [ distTop, setDistTop ] = useState(distStart);

  const menuItems = [
    { value: 'raster', label: 'raster' },
    { value: 'vector', label: 'vector' },
    { value: 'sketch', label: 'sketch' },
    { value: 'me', label: 'me' },
  ];

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // const scrollThreshold = 200;
    const moveInterval = 500;
    const dist = distStart + (distEnd - distStart) * Math.min(scrollTop / moveInterval, 1.0);
    // console.log('dist', dist)
    if(dist != distTop)
      setDistTop(dist);
    // if(scrollTop >= scrollThreshold && !lone)
    //   setLone(true);
    // if(scrollTop < scrollThreshold && lone)
    //   setLone(false);
  };
  // console.log('distTop', distTop)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [distTop]);

  return (
    <>
      <nav className={classNames({ open })}>
        <div className="container">      
          <div className="open-nav" onClick={evt => setOpen(!open)} />

          <Link href={`/`}>
            <a><div className="logo" /></a>
          </Link>

          <div
            className={classNames("floater")}
            css={css`
              top: ${distTop}px;

              @include media("<=tablet") {
                top: 0;
              }
            `}
          >
            <div className="close-nav" onClick={evt => setOpen(!open)} />
            
            <ul>
              {menuItems.map((item, i) =>
                <li key={i}>
                  <Link href={`/${item.value}`}>
                    <a className={classNames({ active: item.value === page })}><span>{item.label}</span></a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
