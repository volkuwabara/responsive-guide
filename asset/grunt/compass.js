module.exports = {
  // compile ---------------------------------------------------
  default: {
    options: {
      sassDir    : './scss',
      cssDir     : '../public/css',
      outputStyle: 'expanded',
      noLineComments : true
    }
  },
  css_common: {
    options: {
      sassDir    : './scss/common',
      cssDir     : '../public/css/common',
      outputStyle: 'expanded',
      noLineComments : true
    }
  }
};
