import React, { useMemo, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { area, curveBasis, randomNormal } from 'd3';
import { times, uniqueId } from 'lodash';

import { useInterval } from '../../../../utils';

import './Wave.scss';

const gradients = [
  ['#f2f2f7', '#9980FA', '#f2f2f7'],
  ['#f2f2f7', '#12CBC4', '#f2f2f7'],
  ['#f2f2f7', '#FFC312', '#f2f2f7'],
];

const numberOfWiggles = 20;
const heightOfWave = 30;

const getPath = () =>
  area()
    .x(([x]: number[]) => x)
    .y0(([_, y]: number[]) => -y)
    .y1(([_, __, y1]: number[]) => y1)
    .curve(curveBasis)(
    // @ts-ignore
    times(numberOfWiggles, (i: number) => [
      i, // x
      Math.max(
        0,
        (heightOfWave / 2) * (1 / (Math.abs(i - numberOfWiggles / 2) || 1)) +
          randomNormal(0, 8)() +
          3
      ), // y0
      Math.min(
        0,
        (-heightOfWave / 2) * (1 / (Math.abs(i - numberOfWiggles / 2) || 1)) +
          randomNormal(0, 8)() -
          3
      ), // y1
    ])
  );

const springConfig = {
  duration: 3000,
};

const Wave = () => {
  const gradientIds = useMemo(
    () => times(3, () => `Wave__gradient--id-${uniqueId()}`),
    []
  );

  const [path1, setPath1] = useState(getPath);
  const [path2, setPath2] = useState(getPath);
  const [path3, setPath3] = useState(getPath);

  useInterval(() => {
    setPath1(getPath());
    setPath2(getPath());
    setPath3(getPath());
  }, 3000);

  const spring1 = useSpring({ config: springConfig, d: path1 });
  const spring2 = useSpring({ config: springConfig, d: path2 });
  const spring3 = useSpring({ config: springConfig, d: path3 });

  return (
    <div className='Wave'>
      <svg
        className='Wave__svg'
        viewBox={[0, -heightOfWave / 2, numberOfWiggles - 1, heightOfWave].join(
          ' '
        )}
        preserveAspectRatio='none'>
        <defs>
          {gradients.map((colors, gradientIndex) => (
            <linearGradient key={gradientIndex} id={gradientIds[gradientIndex]}>
              {colors.map((color, colorIndex) => (
                <stop
                  key={[gradientIndex, colorIndex].join('-')}
                  stopColor={color}
                  offset={`${(colorIndex / (colors.length - 1)) * 100}%`}
                />
              ))}
            </linearGradient>
          ))}
        </defs>
        <animated.path
          className='Wave__path'
          {...spring1}
          fill={`url(#${gradientIds[0]})`}
        />
        <animated.path
          className='Wave__path'
          {...spring2}
          fill={`url(#${gradientIds[1]})`}
        />
        <animated.path
          className='Wave__path'
          {...spring3}
          fill={`url(#${gradientIds[2]})`}
        />
      </svg>
    </div>
  );
};

export default Wave;
