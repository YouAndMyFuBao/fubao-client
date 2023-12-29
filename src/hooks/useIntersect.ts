import { useCallback, useEffect, useRef } from 'react';

const useIntersect = (
  onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
  options?: IntersectionObserverInit,
) => {
  const targetRef = useRef(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [callback, options]);

  return targetRef;
};

export default useIntersect;
