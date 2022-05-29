module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: process.env.E2E ? [['istanbul', { extension: ['.ts', '.vue'] }]] : [],
};
