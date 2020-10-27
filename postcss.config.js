module.exports = {
<<<<<<< HEAD
  plugins: [require('postcss-import'), require('tailwindcss'), require('postcss-preset-env')({ stage: 1 })],
=======
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({ stage: 1 })
  ],
>>>>>>> 3e2611b9480202e3f5676fa0af66de40bcdec36c
};
