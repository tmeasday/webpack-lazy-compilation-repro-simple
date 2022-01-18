// Also fails if you include this irrelevant static import
// import './null';

// HMR works
import('./load');

// HMR fails
// import './load';

// HMR fails
// import(/* webpackMode: "eager" */ './load');

module.hot.accept('./load', () => console.log('new load'));
