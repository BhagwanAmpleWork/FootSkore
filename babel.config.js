module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: true,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@navigation': ['./src/navigation'],
          '@components': ['./src/components'],
          '@image': ['./src/assets/image'],
          '@screen': ['./src/screen'],
          '@assets': ['./src/assets'],
          '@theme': ['./src/theme'],
        },
      },
    ],
  ],
};
