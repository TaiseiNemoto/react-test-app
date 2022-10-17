import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { useClockHandDeg } from '../../hooks/useClockHandDeg';

export const AnalogueClock = () => {
  const [now, setNow] = useState(new Date());
  console.log(now);

  useEffect(() => {
    const intervalId = setInterval(function () {
      setNow(new Date());
    }, 1000);
    return function () {
      clearInterval(intervalId);
    };
  }, []);

  const { degHour, degMin, degSec } = useClockHandDeg();
  const degStyles = {
    hHand: css`
      rotate: ${degHour}deg;
    `,

    mHand: css`
      rotate: ${degMin}deg;
    `,

    sHand: css`
      rotate: ${degSec}deg;
    `,
  };
  console.log(degSec);

  return (
    <div className='AnalogueClock' css={styles.clockBase}>
      <div className='h-hand' css={[styles.hHand, degStyles.hHand]}></div>
      <div className='m-hand' css={[styles.mHand, degStyles.mHand]}></div>
      <div className='s-hand' css={[styles.sHand, degStyles.sHand]}></div>
    </div>
  );
};

const commonStyle = {
  handCommon: css`
    position: absolute;
    transform-origin: bottom;
    border-radius: 40%;
  `,
};

const styles = {
  clockBase: css`
    width: 500px;
    height: 500px;
    background: #ddf6ff;
    position: relative;
    border-radius: 50%;
    margin: auto;
  `,

  hHand: css`
    ${commonStyle.handCommon}
    width: 16px;
    height: 160px;
    background: #999;
    top: calc(50% - 160px);
    left: calc(50% - 8px);
    rotate: var(0);
  `,

  mHand: css`
    ${commonStyle.handCommon}
    width: 10px;
    height: 220px;
    background: #999;
    top: calc(50% - 220px);
    left: calc(50% - 5px);
    rotate: var(0);
  `,

  sHand: css`
    ${commonStyle.handCommon}
    width: 4px;
    height: 200px;
    background: #0bd;
    top: calc(50% - 200px);
    left: calc(50% - 2px);
    rotate: var(0);

    &::after {
      border-radius: 50%;
      display: block;
      content: '';
      width: 30px;
      height: 30px;
      background: #0bd;
      position: absolute;
      bottom: -15px;
      left: -15px;
    }
  `,
};
