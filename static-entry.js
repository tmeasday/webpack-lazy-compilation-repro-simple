import { importFn } from './static-importFn';

window.go = importFn;

module.hot.accept('./static-importFn', () => console.log('new importFn'));
