## Repro of lazy compilation + HMR problem

0. Vary import technique in `simple-entry.js`
1. Run `yarn webpack serve`
2. Load http://localhost:8080
3. Edit `load.js`

Notice only `import()` successfully HMRs, but also fails if you include an irrelevant `import`.
