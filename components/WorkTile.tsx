import React, { useRef, useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import _ from 'lodash';
import { jsx, css } from '@emotion/core';

import { IWorkTile, ImageGap } from './WorkTiles';

interface Props extends IWorkTile {
  //
};

const WorkTile = ({ path, size, aspectRatio, idx, width } : Props) => {
  const baseImgRef = useRef<HTMLDivElement>(null);
  const [ active, setActive ] = useState(false);
  const [ zoomed, setZoomed ] = useState(false);
  
  const ESCAPE_KEY = 27;
  const zoomDuration = 250;
  function zoomOutOnEscape(evt : KeyboardEvent) {
    if(evt.keyCode === ESCAPE_KEY)
      zoomOut();
  };
  const zoomIn = () => {
    // if(active)
    //   return;
    setActive(true);
    setTimeout(() => setZoomed(true), 10);
    document.addEventListener("keydown", zoomOutOnEscape);
  };
  
  const zoomOut = () => {
    // if(!active)
    //   return;
    setZoomed(false);
    setTimeout(() => setActive(false), zoomDuration);
    document.removeEventListener("keydown", zoomOutOnEscape);
  };

  return (
    <>
      <div
        ref={baseImgRef}
        className="work"
        css={css`
          width: ${width['desktop'] * 100}%;
          padding-top: ${1.0 / aspectRatio * 100 * width['desktop']}%;
          background-image: url(${path});
          margin-left: ${idx === 0 ? 0 : ImageGap}px;
          visibility: ${active ? 'hidden' : 'visible'};

          @media (max-width: 1366px) {
            width: ${width['laptop'] * 100}%;
            padding-top: ${1.0 / aspectRatio * 100 * width['laptop']}%;
          }
          
          @media (max-width: 1200px) {
            width: ${width['tablet'] * 100}%;
            padding-top: ${1.0 / aspectRatio * 100 * width['tablet']}%;
          }

          @media (max-width: 768px) {
            width: 100%;
            padding-top: ${1.0 / aspectRatio * 100}%;
            margin-left: 0;
            visibility: visible;
            pointer-events: none;
          }
        `}
        onClick={evt => zoomIn()}
      />
      {active &&
      <>
        <div
          className={classNames("zoomed-work-background")}
          onClick={evt => zoomOut()}
          css={css`
            transition: all ${zoomDuration / 1000}s ease-in-out;
            opacity: ${zoomed ? 0.9 : 0.0};

            @media (max-width: 768px) {
              display: none;
            }
          `}
        />
        <div
          className={classNames("zoomed-work", { zoomed })}
          onClick={evt => zoomOut()}
          css={css`
            transition: all ${zoomDuration / 1000}s ease-in-out;
            left: ${zoomed ? '50%' : `${((baseImgRef.current?.getBoundingClientRect().left || 0) + (baseImgRef.current?.getBoundingClientRect().width || 0) / 2)}px`};
            top: ${zoomed ? '50%' : `${((baseImgRef.current?.getBoundingClientRect().top || 0) + (baseImgRef.current?.getBoundingClientRect().height || 0) / 2)}px`};
            transform: translate(-50%, -50%);
            width: ${zoomed ? '90vw' : `${(baseImgRef.current?.getBoundingClientRect().width || 0)}px`};
            height: ${zoomed ? '90vh' : `${(baseImgRef.current?.getBoundingClientRect().height || 0)}px`};
            background-image: url(${path});

            @media (max-width: 1600px) {
              width: ${zoomed ? '95vw' : `${(baseImgRef.current?.getBoundingClientRect().width || 0)}px`};
              height: ${zoomed ? '95vh' : `${(baseImgRef.current?.getBoundingClientRect().height || 0)}px`};
            }

            @media (max-width: 768px) {
              display: none;
              width: 100%;
              height: 90%;
            }
          `}
        />
      </>
      }
    </>
  );
};

export default WorkTile; 
