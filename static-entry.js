const imports = {
  a: () => import('./a'),
  b: () => import('./b'),
};

window.go = (name) => imports[name]();

module.hot.accept('./a', () => console.log('new a'));
module.hot.accept('./b', () => console.log('new a'));
