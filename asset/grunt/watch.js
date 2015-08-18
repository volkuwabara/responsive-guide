module.exports = {
  // watch ---------------------------------------------------
  // CSS
  css_common: {
    files: [
      './scss/common/*.scss',
      './scss/common/*/*.scss'
    ],
    tasks: ['css_common']
  },
  css_lib: {
    files: [
      './scss/lib/*.scss',
      './scss/lib/*/*.scss'
    ],
    tasks: ['css_lib']
  }
};
