import React, {
  FC,
  useRef,
  useEffect,
  RefObject,
  MutableRefObject,
} from 'react';
// Usage
export const OnClick: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = () => {
    // Your custom logic here
    console.log('clicked outside');
  };
  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside');
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <div
      ref={ref}
      onClick={handleClickInside}
      style={{ width: 200, height: 200, background: 'cyan' }}
    />
  );
};

// Hook
type Event = MouseEvent | TouchEvent;
function useOnClickOutside<T extends HTMLElement = HTMLDivElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      handler(event);
    };
    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);
    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
    // Reload only if ref or handler changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref as MutableRefObject<T>, handler]);
}
