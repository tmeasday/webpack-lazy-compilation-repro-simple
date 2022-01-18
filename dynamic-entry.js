window.go = (name) => import(`./stories/${name}`);

module.hot.accept('./stories/a', () => console.log('new a'));
module.hot.accept('./stories/b', () => console.log('new a'));
