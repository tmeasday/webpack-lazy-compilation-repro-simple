const imports = {
  a: () => import('./stories/a'),
  b: () => import('./stories/b'),
};

export const importFn = (name) => imports[name]();
