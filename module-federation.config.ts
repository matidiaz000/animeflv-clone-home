import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: process.env.NAME,
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
  },
});
