import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface Props {
  page? : string;
}

const Nav = ({ page } : Props) => {
  const menuItems = [
    { value: 'raster', label: 'raster' },
    { value: 'vector', label: 'vector' },
    { value: 'sketch', label: 'sketch' },
    { value: 'me', label: 'me' },
  ];

  return (
    <nav>
      <div className="container">
        <div className="floater">
          <Link href={`/`}>
            <a><div className="logo" /></a>
          </Link>

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
  );
};

export default Nav;
