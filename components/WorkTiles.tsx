import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

interface Work {
  path : string;
  size : number[];
  aspectRatio : number;
  idx : number;
  width : number;
};

interface Props {
  rootPath : string;
  works : Work[];
  aspectRatioPerRow? : number;
};

const WorkTiles = ({ rootPath, works, aspectRatioPerRow = 3.0 } : Props) => {
  const tiledWorks : any[] = [];
  let currentRow : any[] = [];
  
  works.forEach((work, i) => {
    let currentRowAspectRatioSum = currentRow.reduce((a, b) => a + b.aspectRatio, 0);
    if(i === works.length - 1)
      currentRow.push(work);
    if(currentRowAspectRatioSum + work.aspectRatio > aspectRatioPerRow || i === works.length - 1) {
      // The row is complete
      currentRowAspectRatioSum = currentRow.reduce((a, b) => a + b.aspectRatio, 0)
      tiledWorks.push(...currentRow.map((w, j) => ({
        ...w,
        idx: j,
        width: w.aspectRatio / currentRowAspectRatioSum,
      })));
      currentRow = [];
    }
    if(i < works.length - 1) {
      currentRow.push(work);
    }
  });

  return (
    <>
      <div className="container works-container">
        {tiledWorks.map((work, i) =>
          <div
            key={i}
            className="work"
            css={css`
              width: calc(${work.width * 100}% - ${work.idx === 0 ? 0 : 20}px);
              padding-top: ${1.0 / work.aspectRatio * 100 * work.width}%;
              background-image: url(${rootPath + work.path});
              margin-left: ${work.idx === 0 ? 0 : 20}px;

              @media (max-width: 767px) {
                width: 100%;
                padding-top: ${1.0 / work.aspectRatio * 100}%;
                margin-left: 0;
              }
            `}
          />
        )}
      </div>
    </>
  );
};

export default WorkTiles; 
