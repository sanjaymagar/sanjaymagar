/* eslint-disable @typescript-eslint/ban-types */
import React, { useRef, useEffect, RefObject } from 'react';
// Usage
export const EventListener = () => {
  // Define button ref
  const buttonRef = useRef<HTMLButtonElement>(null);
  const onScroll = (event: Event) => {
    console.log('window scrolled!', event);
  };
  const onClick = (event: Event) => {
    console.log('button clicked!', event);
  };
  // example with window based event
  useEventListener('scroll', onScroll);
  // example with element based event
  useEventListener('click', onClick, buttonRef);
  return (
    <div style={{ minHeight: '200vh' }}>
      <button ref={buttonRef}>Click me</button>
    </div>
  );
};

// Hook
export const useEventListener = <T extends HTMLElement = HTMLDivElement>(
  eventName: string,
  handler: Function,
  element?: RefObject<T>
) => {
  // Create a ref that stores handler
  const savedHandler = useRef<Function>();
  // Update ref.current value if handler changes.
  // Pass it in useEffect for to prevent re-run every render
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const targetElement: T | Window = element?.current || window;
      if (!(targetElement && targetElement.addEventListener)) {
        return;
      }
      // Create event listener that calls handler function stored in ref
      const eventListener = (event: Event) => {
        if (!!savedHandler.current) {
          savedHandler.current(event);
        }
      };
      targetElement.addEventListener(eventName, eventListener);
      // Remove event listener on cleanup
      return () => {
        targetElement.removeEventListener(eventName, eventListener);
      };
    },
    // Re-run if eventName or element changes
    [eventName, element]
  );
};
