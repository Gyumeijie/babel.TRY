## Install

```bash
$ npm install --save-dev @babel/core @babel/cli @babel/preset-react @babel/preset-env
```

```javascript
{
  "presets": [
    [
      // React ----> javascript
      "@babel/preset-react",
      {
        "pragma": "dom", // default pragma is React.createElement
        "pragmaFrag": "DomFrag", // default is React.Fragment
        "throwIfNamespace": false // defaults to true
      }
    ],
    [
      // ES2015+ ----> backwards compatible version of javascript
      "@babel/preset-env",
      {
        "targets": {
          "node": "3"
        }
      }
    ]
  ]
}
```

## Compile Files

```bash
$ npx babel index.js
```
