# Testing React with Smokestack

This repo gives an example of testing React apps with Smokestack.

You can use this to do smoke tests of your React apps in real browsers.

## Usage:

```
npm install
```
Then run:
```
node_modules/.bin/browserify test_react_smokestack  | node_modules/.bin/smokestack
```

An output screenshot image should appear:

```
open 0001.png
```

Note: Example doesn't use JSX, but you can obviously use it. However see https://github.com/ustun/react-without-jsx

For more info about smokestack, see https://github.com/hughsk/smokestack
