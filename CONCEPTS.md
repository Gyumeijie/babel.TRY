# babel
Babel is a generic multi-purpose compiler for javascript: it **parses**, **transforms** and **generates** transformed code. Here are the main things Babel can do for you:
- Transform syntax
- Polyfill features that are missing in your target environment (through @babel/polyfill)
- Source code transformations (code modifications)

More than that it is a collection of modules that can be used for many different forms of static analysis.

> Static analysis is the process of analyzing code without executing it. (Analysis of code while executing it is known as dynamic analysis). The purpose of static analysis varies greatly. It can be used for linting, compiling, code highlighting, code transformation, optimization, minification, and much more.

You can use Babel to build many different types of tools that can help you be more productive and write better programs.
##### # babel-core
- This is the **parse** and **output** parts
- It does not do any transformation
- **All** transformations will use your local `configuration files`
> Create a `.babelrc` config in your project root and enable some plugins. This file is how you configure Babel to do what you want.

##### # babel plugin
- Transform the code you wrote
- `babel syntax / transform plugins`: parse and transform es2015+ syntax (like arrow functions) to convert it to es5
- `babel-plugins-stage-x` (from stage-0 to stage-4): transform future javascript syntax which is not in the JS specs yet, starting at stage-0 (just an idea) down to stage-4 (will land in the babel-plugins soon)
> Note: not all babel plugins are used to transform syntax, they can do many other types of transformation, which include stripping flow type, removing debugger or logger, doing some minification work and so on.

##### # preset vs plugin
A preset includes a specific set of plugins.
```json
{
  "presets": [],
  "plugins": []
}
```

##### #  @babel/polyfill
Simply put, a **polyfill** is a piece of code that **replicates a native api** hat does not exist in the current runtime. Allowing you to use APIs such as `Array.from` before they are available.

Babel uses the excellent `core-js` as its polyfill, along with a customized `regenerator runtime` for getting generators and async functions working. 

This will emulate a full ES2015+ environment (***no < Stage 4 proposals***).  And This means you can use:
- **new built-ins** like Promise or WeakMap
- **static methods** like Array.from or Object.assign 
- **instance methods** like Array.prototype.includes 
-  **generator** functions 

The `@babel/polyfill@7.0.0` dependents on:
```json
  "dependencies": {
    "core-js": "^2.5.7",
    "regenerator-runtime": "^0.11.1"
  }
```

##### # @babel/runtime
`@babel/runtime` is a library that contain's Babel modular **runtime helpers** and a version of **regenerator-runtime**.

The `@babel/runtime@7.1.2` dependents on:
```json
  "dependencies": {
    "regenerator-runtime": "^0.12.0"
  }
```
With `@babel/plugin-transform-runtime`,  we can use: 
-  **generator** functions 

##### # @babel/runtime-corejs2
`@babel/runtime-corejs2` is a library that contain's Babel modular **runtime helpers** and a version of **regenerator-runtime** as well as **core-js**.

The `@babel/runtime-corejs2@7.1.2` dependents on:
```json
  "dependencies": {
    "core-js": "^2.5.7",
    "regenerator-runtime": "^0.12.0"
  }
```
With `@babel/plugin-transform-runtime`,  we can use:
- **new built-ins** like Promise or WeakMap
- **static methods** like Array.from or Object.assign 
-  **generator** functions 

##### # @babel/runtime vs @babel/runtime-corejs2
@babel/runtime-corejs2 can be used instead of a polyfill for any **non-instance methods**. It will replace things like `Promise` or `Symbol` with the library functions in `core-js`.

##### # @babel/runtime-corejs2 vs @babel/polyfill
The **polyfill** defines global methods and pollutes the global scope, and works with instance methods; whereas the **runtime** transforms your code to make the same functionnality available and thus does not pollute global scope , but does not work with instance methods.

> We can use the library functions in `core-js` in different ways: defining global methods(pollutes the global scope) or only being used internally( does not pollute global scope).

##### #  babel-preset-env
`babel-preset-env` is a smart preset that allows you to use the latest JavaScript without needing to micromanage which `syntax` transforms (and optionally, browser `polyfills`) are needed by your target **environment(s)**. 

- With no configuration, it will load all the plugins (including es2015, es2016 and es2017) required to transpile es2015+ to es5
- With a `target` option, it loads only the plugins required to run on a specific target

##### # why don't use @babel/polyfill in a library
If you use `@babel/polyfill` and the built-ins it provides such as `Promise`, `Set` and `Map`, those will **pollute the global scope**. While this might be ok for an app or a command line tool, it becomes a problem if your code is a library which you intend to publish for others to use or if you can't exactly control the environment in which your code will run.
