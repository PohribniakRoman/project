module.exports = api => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    plugins: [
      '@babel/plugin-transform-runtime',
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@app': './src/App.tsx',
            '@api': './src/api',
            '@components': './src/components',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@images': './src/assets/images/index',
            '@svg': './src/assets/svg',
            '@store': './src/store',
          },
        },
      ],
    ],
    exclude: ['**/*.png', '**/*.jpg', '**/*.gif'],
  };
};
