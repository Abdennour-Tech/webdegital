import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement = HTMLElement>(options: IntersectionObserverInit = { threshold: 0.1 }, triggerOnce = true) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          observer.disconnect();
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options, triggerOnce]);

  return { ref, isInView };
}
