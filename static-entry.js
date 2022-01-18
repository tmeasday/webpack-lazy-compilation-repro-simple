const imports = {
  a: () => import('./stories/a'),
  b: () => import('./stories/b'),
};

window.go = (name) => imports[name]();

module.hot.accept('./stories/a', () => console.log('new a'));
module.hot.accept('./stories/b', () => console.log('new a'));
