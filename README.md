# CLJStron (ClojureScript's Electron)
## Project
A library to manage and develop `electron` applications in `ClojureScript`... and `Clojure`?

**_Warning project is a WIP in pre-alpha state :wink:_**
## Goals
  * Library for `main` and `renderer` parts of `electron`.
  * Offer standard operations on `electron`.
  * Use a maximum of _declarative programming_, sending modified states instead of function mutating the state. This will enable to manage a react-like management in the `main` process and so to be able to figwhell in `node.js` and `Clojure` app
  * Offer loading external modules into application.
  * Centralized configuration storage (`.cljstron`). Storage management is a module.
  * Usable as a `NPM` library.
  * Usable as a `ClojureScript` library (through `clojars`).
  * Usable as an `electron` application, with configuration of one's `IDE` through tool modules that should be composable:
    * Editors
    * REPLs
    * State managements
    * Sandboxes (`DevCards`, ...)
    * Project management
    * Compilers
    * Linters
    * Configuration tools
    * Packagers
    * ...
  * Monitoring of an external `electron` project. (module(s)?)
  * Compiler agnostic. Compiler is a module. Idea, to be able to integrate every language compiling in `JavaScript`.
  * Editor agnostic. Editor should be a module.
  * Modules are language agnostic. The library and modules have a clear `JavaScript` `API` for inter-operation.
  * A `Java` (minimum 8) version of the `main` process : .
    * As a `JavaScript` container for `electron` main process.
    * As a `Clojure` `electron` (`CLJtron`) and a `ClojureScript` `electron` (`CLJJStron`) module to encapsulate corresponding `IPC` communication with `electron`.
  * A `native-react` module (`CLJSNATIVEtron`), as `node.js` is now on the electronic devices. This will too have it's own `IPC` communication management.
  * Projects should be (_if possible_) completely and transparently moved from an environment to another and work seamlessly, one with any other one, with the same code:
    * Desktop application
    * Desktop client
    * `Clojure` server
    * `node.js` server
    * Browser client
    * Mobile `node.js` main
    * Mobile client
    * One Page Application (`OPA`)
    * Standalone server
    * ... :sweat:
## State of project
**_Project is now a WIP in pre-alpha stage as of 4th of November 2017_**. :mask:

It is only as for now a simple experimental `electron` app used as a sandbox.
### Version
  * [`@cljstron/cljstron@0.0.3`](https://www.npmjs.com/package/@cljstron/cljstron).
  * GitHub repository: https://github.com/cljstron/cljstron. No release for now.
### Changes
You can find history of changes @ [`CHANGES.md`](CHANGES.md) from 4 nov 2017.
## Dependencies (as for now)
### NPM
  * [`shadow-cljs@2.0.59`](https://github.com/thheller/shadow-cljs) The compiler for now, but this will be in a module afterward (compiler agnostic). Root compilation will be a raw `lein` project.
### Clojars
  * [`[camel-snake-kebab "0.4.0"]`](https://github.com/qerub/camel-snake-kebab) It's used to manage `snake-case`d and `camelCase`d keys.
## Installation
As it's an alpha release, I suppose you already know how to install programs and the configuration of your computer... :yum:

### Prerequisites
  * [`leinigen`](https://leiningen.org/#install)
  * [`git`](https://git-scm.com/downloads)
    * If you're on a mac, you'll probably will have to install XCode which is in the Apple Store.
    * hint : if when you use git you have message about XCode, that's it... :grin:
    * If you install it you'll have to aggree to the licence aggrement : type `'sudo xcodebuild -license'`, give your password, hit the space key, or enter, until you're at the end of the licence, type `aggree` [ENTER], and you're done.
  * [`node.js`](https://nodejs.org/en/) that includes `npm`, the package manager. You can also use the `yarn` manager if it's your favorite tool. I figure out you know how to translate the following npm commands... :innocent:
  * Not mandatory but useful, a node version selector [`nvm`](https://github.com/creationix/nvm#install-script) so you can play with the lastest `node.js` version.
    * if you do it, change version before proceeding...
  * with `npm` install :
    * latest version of `npm` : `npm i -g "npm@latest"`
    * `shadow-cljs` : `npm i -g "shadow-cljs"`
    * `electron` : `npm i -g "electron@1.8.1"`
### Installing project
Go in a developpement directory or create it.

create and download the project directory :

`git clone https://github.com/cljstron/cljstron.git`

You should be in the project directory :

`cd cljstron`

And download the needed libraries :

`npm install`
### Compiling project
Compile the `main`and `renderer` applications in development mode:

  * `shadow-cljs compile main`
  * `shadow-cljs compile renderer`

If you've got errors... you're at work... :grin: Go to the [`Editing the project`](#editing-the-project) part. And try to figure out why, by reading the error messages.

_I'll try to only push working versions, but I'm on a `mac` now, so `Windows` and `Linux` releases have not been tested_.

You can also put an issue on the [`project's GitHub repository issues page`](https://github.com/cljstron/cljs-node-electron-boot/issues).
### Lanching the project
It's just :

`electron .` or `npm start`

Normally you have an open window with infos on the versions of your `electron` environment.

For `mac` users, closing the windows doesn't stop the program, you have to go to the menu and close the application. Bad `mac` habit, but you can change it, see editing code.
### Editing the project
You can use whatever editor that support `Clojure` and `ClojureScript`
  * EMACS
  * Atom
  * Eclipse
  * Vi
  * LightTable
  * NightCode
  * Sublime
  * IntelliJ
  * ...

or even with no support. I use [`Visual Sudio Code`](https://github.com/cljstron/cljs-node-electron-boot/issues) with0 `Clojure` (I test for now), `ParInfer`, `Rainbow Brackets` (buggy) packages, and I use the `Integrated Terminal` to lauch compilation as I wait for the `REPL`, `Compilation` and `Reboot On Edit` modules.
## Library structure
### Links signification
    ├== -> generated code
    ├** -> downloaded libraries, all integrated in generated code on production
    ├++ -> compiled libraries and runtime in development
    ├## -> generated files from config (CLJStron-generate)
    ├oo -> optional (for developpement phase)
    [directory]
    ['parametered directory'] defined in app.edn

### File structure of project
#### Documentation
    ├── README.md                       This page
    ├── CHANGES.md                      History of changes
    ├── [docs]                          Documentation directory
    │   └── Home.md                     Junk file
    ├── LICENSE                         Licence file
#### Configuration Files and MakeFiles
    ├── app.org.edn                     Application base descriptor
    ├── app.edn                         Application descriptor
    ├## cljs.edn                        Futur project file for cljsjs "Lumo"
    ├## clojure.clj                     Futur project file for leiningen
    ├## build.boot                      Futur project file for boot
    ├## shadow-cljs.edn                 The working project file for shadow-cljs
#### NPM
    ├── package.json                    Definition of the npm package
    ├** package-lock.json               Control file for the loaded npm packages
    ├** [node_modules]                  Repository of the npm packages
#### Runtime Data
    ├++ ['target']                      Compiled AOT, cache and runtime for main application libraries
#### Developpement Stuff
    ├oo [plugs]                         Plugs to be tested only in dev mode same structure as node modules
    │  ├oo ['@user plugs']              User plug @user name directory (can have multiple plugs)
    │  │   └oo ['plug name']            User plug repository
    │  └oo ['plug name']                Non user plug repository (can have multiple plugs)
#### Resources For Library
    ├── ['resources']                   Public HTML root directory for the renderer
    │   ├── [css]                       CSS directory for application
    │   │   └== [js]                    Compiled AOT, cache an executables for renderer
    │   │        ├++ [cljs-runtime]     Library and runtime for renderer
    │   │        ├++ manifest.json      Manifest of libraries and runtime
    │   │        └== lib.js             The compiled library for the renderer
    │   ├── index.html                  Empty page to create content from javascript
    │   ├== lib.js                      The compiled library for main
#### Resources For Dev And Debug
    │   └== main.js                     The compiled main program of the application
#### Sources
    └── ['src']                         Sources root
        ├── [cljstron]                  Root of cljstron library
        │   ├── [main]                  Root for helper function for main application
        │   │   ├── interop.cljs        Translate recursively JS->CLJS structures (unused)
        │   │   ├── app.cljs            App management. Require, launch
        │   │   ├── plug.cljs           Plugs management. Require, launch
        │   │   └── browser-window.cljs Windows management, containers of renderers
        │   ├── [common]                Root for helper function for both applications
        │   └── [renderer]              Root for helper function for renderer application
#### Sources For Dev And Debug
        └oo [main]                      Optional main entry point. Activate plugs
            └oo main.cljs               Main entry point for developpement phase

A last thing... the doc for `electron` is [`here`](https://electron.atom.io/docs/). It may help... :innocent:
