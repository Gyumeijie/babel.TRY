## Install

```bash
$ npm install --save-dev @babel/core @babel/cli
```

> it's much better to install it **locally** project by project

```bash
$ npm install --save-dev @babel/plugin-transform-typescript
```

```json
{
  "plugins": ["@babel/plugin-transform-typescript"]
}
```

or

```bash
$ npm install --save-dev @babel/preset-typescript
```

```json
{
  "presets": [
    "@babel/preset-typescript",
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        }
      }
    ]
  ]
}
```

> The `preset` will only load `transformation plugins` for features that are not available in our target browsers.

## Compile Files

```bash
$ npx babel index.ts
```
