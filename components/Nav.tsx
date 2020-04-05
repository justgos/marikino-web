import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import classNames from 'classnames';

interface Props {
  page? : string;
}

const Nav = ({ page } : Props) => {
  const [ open, setOpen ] = useState(false);

  const menuItems = [
    { value: 'raster', label: 'raster' },
    { value: 'vector', label: 'vector' },
    { value: 'sketch', label: 'sketch' },
    { value: 'me', label: 'me' },
  ];

  return (
    <>
      <nav className={classNames({ open })}>
        <div className="container">      
          <div className="open-nav" onClick={evt => setOpen(!open)} />

          <Link href={`/`}>
            <a><div className="logo" /></a>
          </Link>

          <div className="floater">
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
