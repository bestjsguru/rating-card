import { useEffect, useRef, useState, RefObject } from 'react';

export function useContainerWidth<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let observer: ResizeObserver | null = null;

    const checkAndObserve = () => {
      if (ref.current && typeof ResizeObserver !== 'undefined') {
        observer = new ResizeObserver(([entry]) => {
          setWidth(entry.contentRect.width);
        });
        observer.observe(ref.current);
      } else {
        // Try again on next animation frame
        requestAnimationFrame(checkAndObserve);
      }
    };

    checkAndObserve();

    return () => {
      if (observer && ref.current) observer.disconnect();
    };
  }, []);

  return { ref, width } as { ref: RefObject<T>; width: number };
}