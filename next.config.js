import NextFederationPlugin from '@module-federation/nextjs-mf';

export function webpack(config, options) {
  if (!options.isServer) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './nextjs-remote-page': './src/pages/index.tsx',
        },
        shared: {
          react: {
            requiredVersion: false,
            singleton: true,
          },
        },
      })
    );
  }
  return config;
}
export const reactStrictMode = true;