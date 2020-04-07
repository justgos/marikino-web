import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { jsx, css } from '@emotion/core';

import './index.scss';
import Header from '../components/Header';

const IndexPage = () => {
  const [ eyeState, setEyeState ] = useState({
    left: false,
    right: false,
    _: 1.0 as number,
  });
  function updateAccel(x? : number, y? : number, dx? : number, dy? : number, dz? : number) {
    if(x == null || y == null || dx == null || dy == null)
      return;
    
    const sumThreshold = 1.2;
    const newEyeState = { ...eyeState, _: 1.0 };
    if(Math.abs(dx) > Math.abs(dy) && dx > sumThreshold && (!eyeState.left || eyeState.right)) {
      // console.log('updateAccel left', dx, dy)
      newEyeState.left = true;
      newEyeState.right = false;
    }
    if(Math.abs(dx) > Math.abs(dy) && dx < -sumThreshold && (eyeState.left || !eyeState.right)) {
      // console.log('updateAccel right', dx, dy)
      newEyeState.left = false;
      newEyeState.right = true;
    }

    if(dy < -sumThreshold && (!eyeState.left || !eyeState.right)) {
      // console.log('updateAccel up', dx, dy)
      newEyeState.left = true;
      newEyeState.right = true;
    }
    if((dy > sumThreshold)) {  //  || (dy > -sumThreshold && Math.abs(x) < threshold)  //  && (eyeState.left || eyeState.right)
      // console.log('updateAccel down', dx, dy)
      newEyeState.left = false;
      newEyeState.right = false;
      newEyeState._ = 2.0;
    }

    if(newEyeState.left !== eyeState.left || newEyeState.right !== eyeState.right || newEyeState._ !== eyeState._)
      setEyeState(newEyeState);
  }

  const accelState = useMemo(() => ({
    landscape : false,
    x: 0,
    y: 0,
    z: 0,
    dx: 0,
    dy: 0,
    dz: 0,
    dxSum: 0,
    dySum: 0,
  }), []);
  const handleOrientation = (event : any) => {
    const { orientation } = window
    accelState.landscape = orientation === 90 || orientation === -90;
  }
  const handleAcceleration = (event : DeviceMotionEvent) => {
    const { landscape } = accelState
    const { useGravity, multiplier } = { useGravity: true, multiplier: 1.0 };
    const acceleration = useGravity ? event.accelerationIncludingGravity : event.acceleration
    const rotation = event.rotationRate || null
    const { x, y, z } = acceleration || { x: 0, y: 0, z: 0 };
    // console.log('handleAcceleration', x, y, z)
    if(x == null || y == null || z == null)
      return;

    accelState.dx = (landscape ? y : x) * multiplier - accelState.x;
    accelState.dy = (landscape ? x : y) * multiplier - accelState.y;
    accelState.dz = z * multiplier - accelState.x;
    accelState.x = (landscape ? y : x) * multiplier;
    accelState.y = (landscape ? x : y) * multiplier;
    accelState.z = z * multiplier;
    accelState.dxSum = accelState.dxSum * 0.9 + accelState.dx;
    accelState.dySum = accelState.dySum * 0.9 + accelState.dy;
    updateAccel(accelState.x, accelState.y, accelState.dxSum, accelState.dySum, accelState.dz);
  }

  useEffect(() => {
    window.addEventListener('devicemotion', handleAcceleration)
    window.addEventListener('orientationchange', handleOrientation)

    return () => {
      window.removeEventListener('devicemotion', handleAcceleration);
      window.removeEventListener('orientationchange', handleOrientation);
    };
  }, []);
  // console.log('eyeState', eyeState)

  // console.log('window.DeviceMotionEvent', typeof window !== 'undefined' && window.DeviceMotionEvent)
  
  return (
    <>
      <Header />
      <div className="index-container">
        <div className="eye-container">
          <Link href="/me"><a>
            <div className="logo" />
          </a></Link>

          <Link href="/raster"><a>
            <div
              className={classNames("eye-raster", { active: eyeState.left })}
            >
              <div
                className="hint"
                css={css`
                  display: none;

                  @media (max-width: 1200px) {
                    // display: ${(typeof window !== 'undefined' && window.DeviceMotionEvent) ? 'none' : 'block'};
                  }
                `}
              >
                raster
              </div>
            </div>
          </a></Link>
          <Link href="/vector"><a>
            <div
              className={classNames("eye-vector", { active: eyeState.right })}
            >
              <div
                className="hint"
                css={css`
                  display: none;

                  @media (max-width: 1200px) {
                    // display: ${(typeof window !== 'undefined' && window.DeviceMotionEvent) ? 'none' : 'block'};
                  }
                `}
              >
                vector
              </div>
            </div>
          </a></Link>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
