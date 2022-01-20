const devicesSize = {
  mobileSmall: 320,
  mobileMedium: 414,
  mobileLarge: 600,
  tablet: 767,
  desktop: 1023,
};

const getMediaQuery = (
  deviceName: string,
  condition: string,
  resolutionLimit = 0,
): string => {
  const breakpointsArray: Array<Array<string>> = Object.keys(
    devicesSize,
  ).map(key => [key, devicesSize[key]]);

  const [mediaQuery] = breakpointsArray.reduce((accumulator, [name, size]) => {
    if (deviceName === name) {
      return [
        ...accumulator,
        `@media (${condition}: ${size + resolutionLimit}px)`,
      ];
    }

    return accumulator;
  }, []);

  return (
    mediaQuery || `@media (${condition}: ${deviceName + resolutionLimit}px)`
  );
};

const lowerThan = (deviceName: string, condition = 'max-width') =>
  getMediaQuery(deviceName, condition, 0);

const higherThan = (deviceName: string, condition = 'min-width') =>
  getMediaQuery(deviceName, condition, 1);

const between = (
  deviceName1: string,
  deviceName2: string,
  condition = 'min-width',
  condition2 = 'max-width',
) =>
  `@media (${condition}:${deviceName1}px) and (${condition2}:${deviceName2}px)`;

const breakpoints = {
  lowerThan,
  higherThan,
  between,
};

export default breakpoints;
