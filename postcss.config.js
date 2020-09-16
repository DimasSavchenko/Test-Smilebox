'use strict';

module.exports = (ctx) => ({
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': {},
    autoprefixer: true,
    cssnano: ctx.env === 'production' ? {} : false,
  },
});
