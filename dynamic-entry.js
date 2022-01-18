window.go = (name) =>
  /* webpackChunkName: "[request]" */
  /* webpackInclude: /(a|b).js$/ */
  import(`./${name}`);

module.hot.accept('./a', () => console.log('new a'));
module.hot.accept('./b', () => console.log('new a'));
