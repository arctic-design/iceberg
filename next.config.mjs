//@ts-check
import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';
import { createDefaultTheme } from '@arctic-kit/snow';
import { composePlugins, withNx } from '@nx/next';

const defaultTheme = createDefaultTheme();
const darkTheme = createDefaultTheme(true);

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

const composedPlugins = composePlugins(...plugins)(nextConfig);

const theme = extendTheme({
  // for color schemes
  colorSchemes: {
    light: defaultTheme,
    dark: darkTheme,
  },
  getSelector: (colorScheme) =>
    colorScheme ? `.theme-${colorScheme}` : ':root',
  cssVarPrefix: 'snow',
});

export default withPigment(composedPlugins, {
  theme,
});
