# BMUX

## ROADMAP
[_] barebones alpha
    [_] tabs / sessions
    [_] paning
        [_] create
        [_] delete
        [_] move panes
        [_] recursive tabs?
    [_] navigation
        [_] url
        [_] history
        [_] refresh
        [_] omnisearch
    [_] on pages
        [_] search
        [_] href clickthrough
    [_] standard browser context click
        [_] copy
        [_] paste
        [_] open in new tab
    [_] devtools
        [_] per-pane devtools
        [_] inspect
[_] barebones beta
    [_] session management
        [_] auto grouping
        [_] group CRUD
        [_] session saving
    [_] pane management
        [_] configurable user agent
        [_] injectable css/js
    [_] hotkeys


## Install

```bash
$ npm install
```

## Run

Run this two commands __simultaneously__ in different console tabs.

```bash
$ npm run hot-server
$ npm run start-hot
```

*Note: requires a node version >= 4 and an npm version >= 2.*

#### Toggle Chrome DevTools

- OS X: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

*See [electron-debug](https://github.com/sindresorhus/electron-debug) for more information.*

#### Toggle Redux DevTools
- All platforms: <kbd>Ctrl+H</kbd>

*See [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) for more information.*


## Package

```bash
$ npm run package
```

To package apps for all platforms:

```bash
$ npm run package-all
```

#### Options

- --name, -n: Application name (default: ElectronReact)
- --version, -v: Electron version (default: latest version)
- --asar, -a: [asar](https://github.com/atom/asar) support (default: false)
- --icon, -i: Application icon
- --all: pack for all platforms

Use `electron-packager` to pack your app with `--all` options for darwin (osx), linux and win32 (windows) platform. After build, you will find them in `release` folder. Otherwise, you will only find one for your os.

`test`, `tools`, `release` folder and devDependencies in `package.json` will be ignored by default.

#### Default Ignore modules

We add some module's `peerDependencies` to ignore option as default for application size reduction.

- `babel-core` is required by `babel-loader` and its size is ~19 MB
- `node-libs-browser` is required by `webpack` and its size is ~3MB.

> **Note:** If you want to use any above modules in runtime, for example: `require('babel/register')`, you should move them form `devDependencies` to `dependencies`.

