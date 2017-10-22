# CLJStron (ClojureScript's Electron)
## Project
A library to manage and develop `electron` applications in `ClojureScript`... and `Clojure`?
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
  * Compiler agnostic. Compiler is a module. Idea, to be able to integrate every language compiling in `JavaScriopt`.
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
**_Project is now a WIP in pre-alpha stage as of 22th of October 2017_**. :mask:

It is only as for now a simple experimental `electron` app used as a sandbox.
### Version
  * [`@ivanpierre/app@1.0.13`](https://www.npmjs.com/package/@ivanpierre/app) first beta version will be moved to `cljstron` on NPM as `cljstron@0.0.1-beta1`.
  * GitHub repository: https://github.com/cljstron/cljs-node-electron-boot. First beta version will be moved to `cljstron/CLJStron` repository with release `0.0.1-beta1`.
## Dependencies (as for now)
### NPM
  * [`electron@1.8.1`](https://github.com/electron/electron) It's necessary to compile the project. Why? because of the compiler... :unamused:.
  * [`shadow-cljs@2.0.34`](https://github.com/thheller/shadow-cljs) The compiler for now, but this will be in a module afterward (compiler agnostic). Root compilation will be a raw `lein` project.
### Clojars
  * [`[camel-snake-kebab "0.4.0"]`](https://github.com/qerub/camel-snake-kebab) It's used to manage `snake-case`d and `camelCase`d keys. I will change to the `camel-case` library included in `electron` package, or not... :wink:
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
    * latest version of `npm` : `'npm i -g "npm@latest"'`
    * `shadow-cljs` : `'npm i -g "shadow-cljs"'`
    * `electron` : `'npm i -g "electron@1.8.1"'`
### Installing project
Go in a developpement directory or create it.

create and download the project directory :

`'git clone https://github.com/cljstron/cljs-node-electron-boot.git'`

You should be in the project directory :

`'cd cljs-node-electron-boot'`

And download the needed libraries :

`'npm i --save'`
### Compiling project
Compile the `main`and `renderer` applications in development mode:

  * `'shadow-cljs compile main'`
  * `'shadow-cljs compile renderer'`

If you've got errors... you're at work... :grin: Go to the [`Editing the project`](#editing-the-project) part. And try to figure out why, by reading the error messages.

_I'll try to only push working versions, but I'm on a `mac` now, so `Windows` and `Linux` releases have not been tested_.

You can also put an issue on the [`project's GitHub repository issues page`](https://github.com/cljstron/cljs-node-electron-boot/issues).
### Lanching the project
It's just :

`'electron .'` or `'npm start'`

Normally you have an open window with infos on the versions of your `eclipse` environment.

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

ou même qui ne le supporte pas. Personellement j'utilise [`Visual Sudio Code`](https://github.com/cljstron/cljs-node-electron-boot/issues) avec les packages `Clojure` (I test for now), `ParInfer`, `Rainbow Brackets` (buggy), and I use the `Integrated Terminal` to lauch compilation as I wait for the `REPL`, `Compilation` and `Reboot On Edit` modules.
### Application structure
    ├== -> generated code     ├**  -> downloaded libraries     
    [directory]               ├++  -> compiled libraries and runtime in development mode
                                      all integrated in generated code on production
    .
    ├── README.md                      This page
    ├── [docs]                         Documentation directory
    │   └── Home.md                    Junk file
    ├── LICENSE                        Licence file
    │
    ├── cljs.edn                       Futur project file for cljsjs "Lumo"
    ├── clojure.clj                    Futur project file for leiningen
    ├── project.boot                   Futur project file for boot
    ├── shadow-cljs.edn                The working project file for shadow-cljs
    ├── package.json                   Project file for the application as npm package
    │
    ├** package-lock.json              Control file for the loaded npm packages
    ├** [node_modules]                 Repository of the npm packages
    │
    ├++ [target]                       Compiled AOT, cache and runtime of main application libraries
    ├── [resources]                    Public HTML root directory for the renderer
    │   ├── [css]                      CSS directory
    │   ├── index.html                 Template for an empty HTML page
    │   ├== [js]                       Compiled AOT, cache an executables for renderer
    │   │   ├++ [cljs_runtime]         Library and runtime for renderer
    │   │   ├++ manifest.json          Manifest of library and runtime
    │   │   └== simple.js              The compiled main program for the renderer
    │   └== main.js                    The compiled main program of the application
    └── [src]                          Sources root
        └── [cljstron]                 Root of the project
            ├── [library]              Library of helper functions for electron
            │   ├── [main]             Root for helper function for main application
            │   │   ├── interop.cljs   A file to translate recursively JS->CLJS structures (unused)
            │   │   └── window.cljs    Helper for windows management, containers of renderers
            │   ├── [common]           Root for helper function for both applications
            │   └── [renderer]         Root for helper function for renderer application
            ├── [main]                 Main application sources
            │   └── main.cljs          Entry point for main. Open the window
            └── [renderer]             Renderer application sources
                └── simple.cljs        Entry point for renderer. (in fact a module)
                
A last thing... the doc for `electron` is [`here`](https://electron.atom.io/docs/). It may help... :innocent:
