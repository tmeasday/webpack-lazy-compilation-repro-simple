const imports = {
  a: () => import('./a'),
  b: () => import('./b'),
};

window.go = (name) => imports[name]();
