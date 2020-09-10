import React, { FC, useEffect, useRef, useState, ChangeEvent } from 'react';
// Usage
export const Interval: FC = () => {
  // The counter
  const [count, setCount] = useState<number>(0);
  // Dynamic delay
  const [delay, setDelay] = useState<number>(1000);
  // ON/OFF
  const [isPlaying, setPlaying] = useState<boolean>(false);
  useInterval(
    () => {
      // Your custom logic here
      setCount(count + 1);
    },
    // Delay in milliseconds or null to stop it
    isPlaying ? delay : null
  );
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDelay(Number(event.target.value));
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setPlaying(!isPlaying)}>
        {isPlaying ? 'pause' : 'play'}
      </button>
      <p>
        <label>Delay: </label>
        <input type='number' onChange={handleChange} value={delay} />
      </p>
    </>
  );
};

// Hook
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void | null>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
    console.log('Remember the latest callback\n');
    console.log('Remember the latest callback\n');
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    console.log('Set up the interval\n');

    function tick() {
      if (typeof savedCallback?.current !== 'undefined') {
        savedCallback?.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
