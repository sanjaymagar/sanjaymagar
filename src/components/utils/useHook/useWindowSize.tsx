import React, { useEffect, useState, useCallback } from 'react';
// Usage
export const WindowSize = () => {
  const windowSize = useWindowSize();
  return (
    <p>
      The current window dimensions are:{' '}
      <code>{JSON.stringify(windowSize)}</code>
    </p>
  );
};
// Hook
interface WindowSize {
  width?: number;
  height?: number;
}
const useWindowSize = (): WindowSize => {
  const isClient = typeof window === 'object';
  // Memoize window size function
  const getSize = useCallback(
    (): WindowSize => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }),
    [isClient]
  );
  const [windowSize, setWindowSize] = useState<WindowSize>(getSize);
  useEffect(
    () => {
      function handleResize() {
        if (isClient) {
          setWindowSize(getSize());
        }
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    },
    // Empty array ensures that effect is only run on mount and unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return windowSize;
};
