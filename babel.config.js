module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@domain': './src/core/domain/*'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
