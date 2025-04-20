import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { dependencies } from './package.json';

export default createModuleFederationConfig({
  name: 'home',
  filename: "remoteEntry.js",
  exposes: {
    '.': './src/App.tsx',
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      eager: true,
    },
  }
});
