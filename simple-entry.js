// import './load';

import(/* webpackMode: "eager" */ './load');
// import { load } from './load';

// load();

module.hot.accept('./load', () => console.log('new load'));
