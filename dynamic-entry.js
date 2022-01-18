import { importFn } from './dynamic-importFn';

window.go = importFn;

module.hot.accept('./dynamic-importFn', () => console.log('new importFn'));
// module.hot.accept('./dynamic-importFn!lazy-compilation-proxy', () =>
//   console.log('new importFn [lazy]')
// );
