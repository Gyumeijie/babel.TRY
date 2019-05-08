## Install

```bash
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

> it's much better to install it **locally** project by project

```bash
$ npm install --save @babel/polyfill
```

> without @babel/polyfill, **compilation phrase** will be successfully, but it will be failed to **run**

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "7",
          "ie": "6"
        },
        "useBuiltIns": "usage",
        "corejs": "3.0.0"
      }
    ]
  ]
}
```

> `useBuiltIns` and `corejs` should be used together

## Compile Files

```bash
$ npx babel index.js
```
