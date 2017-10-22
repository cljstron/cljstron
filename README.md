# CLJStron (ClojureScript's Electron)
## Project
A library to manage and develop `electron` applications in ClojureScript... and Clojure?

## Goals
  * Library for `main` and `renderer` parts of `electron`.
  * Offer standard operations on `electron`.
  * Offer loading external modules into application.
  * Centralized configuration storage (.cljstron). Storage management is a module.
  * Usable as a NPM library.
  * Usable as a ClojureScript library (through Clojars).
  * Usable as an `electron` application, including base modules to configure one's IDE tool.
  * Monitoring of an external `electron` project. (module(s)?)
  * Compiler agnostic. Compiler is a module. Idea, to be able to integrate every language compiling in JavaScriopt.
  * Editor agnostic. Editor should be a module.
  * Modules are language agnostic. The library and modules have a clear JavaScript API for inter-operation.
  * A Java (minimum 8) version of the `main` process : .
    * As a JavaScript container for `electron` main process.
    * As a Clojure `electron` (`CLJtron`) and a ClojureScript `electron` (`CLJJStron`) module to encapsulate corresponding IPC communication with `electron`.
  * A native-react module (`CLJSNATIVEtron`), as node.js is now on the electronic devices. This will too have it's own IPC communication management.
  * Projects should be (if possible) completely and transparently moved from an environment to another and work seamlessly one with any other one with the same code: desktop application, desktop client, Java server, node.js server, browser client, mobile node.js main, mobile client, etc. :sweat:

## State of project
*_Project is now a WIP in pre-alpha stage as of 22th of October 2017_*. :mask:

It is only as for now a simple experimental `electron` app used as a sandbox.

### Version
  * [`@ivanpierre/app@1.0.13`](https://www.npmjs.com/package/@ivanpierre/app) first beta version will be moved to `cljstron` on NPM as `cljstron@0.0.1-beta1`.
  * GitHub repository: https://github.com/cljstron/cljs-node-electron-boot. First beta version will be moved to `cljstron/CLJStron` repository with release 0.0.1-beta1.

## Dependencies (as for now)
### NPM
  * [`electron@1.8.1`](https://github.com/electron/electron) It's necessary to compile the project. Why? because of the compiler... :unamused:.
  * [`shadow-cljs@2.0.34`](https://github.com/thheller/shadow-cljs) The compiler for now, but this will be in a module afterward (compiler agnostic). Root compilation will be a raw `lein` project.

### Clojars
  * [`[camel-snake-kebab "0.4.0"]`](https://github.com/qerub/camel-snake-kebab) It's used to manage snake-cased and camelCase. I will change to the CameCase library included in `electron` package, or not... :wink:
