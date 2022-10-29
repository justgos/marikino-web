import React, { useMemo } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import WorkTile from './WorkTile';

interface IWork {
  path : string;
  size : number[];
};

export interface IWorkTile {
  path : string;
  size : number[];
  aspectRatio : number;
  idx : number;
  width : { [device : string] : number };
};

interface Props {
  rootPath : string;
  works : IWork[];
  aspectRatioPerRow? : number;
};

export const ContainerWidths : { [device : string] : number } = {
  'desktop': 1140,
  'laptop': 900,
  'tablet': 700,
};
export const ImageGap = 20;

const WorkTiles = ({ rootPath, works, aspectRatioPerRow = 3.0 } : Props) => {
  const workTiles : IWorkTile[] = useMemo(
    () => works.map(w => ({
      ...w,
      aspectRatio: w.size[0] / w.size[1],
      idx: -1,
      width: {},
      path: rootPath + encodeURI(w.path),
    })),
    [rootPath, works]
  );

  const tiledWorks : any[] = [];
  let currentRow : any[] = [];
  
  workTiles.forEach((work, i) => {
    let currentRowAspectRatioSum = currentRow.reduce((a, b) => a + b.aspectRatio, 0);
    if(i === workTiles.length - 1)
      currentRow.push(work);
    if(currentRowAspectRatioSum + work.aspectRatio > aspectRatioPerRow || i === workTiles.length - 1) {
      // The row is complete
      currentRowAspectRatioSum = currentRow.reduce((a, b) => a + b.aspectRatio, 0)
      tiledWorks.push(...currentRow.map((w, j) => ({
        ...w,
        idx: j,
        width: Object.keys(ContainerWidths)
          .map(device => [ device, w.aspectRatio / currentRowAspectRatioSum * ContainerWidths[device] / (ContainerWidths[device] + (currentRow.length - 1) * (ImageGap + 2)) ])
          .reduce((obj : any, x) => ({ ...obj, [x[0]]: x[1] }), {}),
      })));
      currentRow = [];
    }
    if(i < workTiles.length - 1) {
      currentRow.push(work);
    }
  });

  return (
    <>
      <div className="container works-container">
        {tiledWorks.map((work, i) =>
          <WorkTile
            key={i}
            {...work}
          />
        )}
      </div>
    </>
  );
};

export default WorkTiles; 
