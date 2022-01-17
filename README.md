## Repro of lazy compilation + HMR problem

1. Run `yarn webpack serve`
2. Load http://localhost:8080
3. Run `go('a')` in browser console
4. Edit `a.js`.

Notice "Aborted because ./dynamic-entry.js!lazy-compilation-proxy is not accepted"
