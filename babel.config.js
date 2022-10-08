module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@services': './src/services',
          '@controllers': './src/controllers',
          '@repositories': './src/repositories',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@validations': './src/validations',
          '@constants': './src/constants',
          '@middlewares': './src/middlewares',
          '@lib': './src/lib',
          '@config': './src/config',
          '@dtos': './src/dtos',
          '@exceptions': './src/exceptions',
        },
      },
    ],
  ],
};
