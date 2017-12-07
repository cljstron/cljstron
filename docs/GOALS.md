# Goals
Some of the goals, in a non-specific order. Just some ideas thrown here.

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
