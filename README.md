## Repro of lazy compilation + HMR problem

1. `yarn webpack serve`
2. Open browser, ensure "preserve log" is on
3. Run `all()`
4. Notice logs:

```
GET http://localhost:8080/main.01ce74ce55d820aed88a.hot-update.json 404 (Not Found)
[HMR] Cannot find update. Need to do a full reload!
[HMR] (Probably because of restarting the webpack-dev-server)
```
