window.all = async () => {
  import('./a');
  await new Promise((r) => setTimeout(r, 0));
  import('./b');
  await new Promise((r) => setTimeout(r, 0));
  import('./c');
};
