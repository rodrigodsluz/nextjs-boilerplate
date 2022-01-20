import { useState, useEffect } from 'react';

const useMediaQuery = (_query: string) => {
  const [matches, setMatches] = useState(false);

  const query = /^(?:@media )?(.+)/.exec(_query)?.[1] ?? _query;

  useEffect(() => {
    const listener = () => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    };

    listener();

    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
