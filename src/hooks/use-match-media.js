import { useState, useLayoutEffect } from 'react';

const queries = [
  '(max-width: 767.9px)',
  '(min-width: 768px) and (max-width: 1199.9px)',
  '(min-width: 1200px)',
];
//   mediaQueryLists and getValues put inside hook
const mediaQueryLists = queries.map(query => matchMedia(query));

const getValues = () => mediaQueryLists.map(list => list.matches);

export const useMatchMedia = () => {
  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach(list => list.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach(list =>
        list.removeEventListener('change', handler)
      );
  }, []);

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
