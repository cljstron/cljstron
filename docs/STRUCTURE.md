# Library structure
## Links signification
    ├== -> generated code
    ├** -> downloaded libraries, all integrated in generated code on production
    ├++ -> compiled libraries and runtime in development
    ├## -> generated files from config (CLJStron-generate)
    ├oo -> optional (for developpement phase)
    [directory]
    ['parametered directory'] defined in app.edn

## File structure of project
### Documentation
    ├── README.md                       Main README
    ├── [docs]                          Documentation directory
    |   ├── GOALS.md                    Preview of intended goals of the project
    |   ├── STATE.md                    Current state of the project
    |   ├── TODO.md                     Work to do in short term
    |   ├── CHANGES.md                  History of changes
    |   ├── INSTALL.md                  How to use, compile, edit, debug the project
    │   └── STRUCTURE.md                Project directory description
    ├── LICENSE                         License file
### Configuration Files and MakeFiles
    ├── app.org.edn                     Application base descriptor
    ├── app.edn                         Application descriptor
    ├## cljs.edn                        Futur project file for cljsjs "Lumo"
    ├## clojure.clj                     Futur project file for leiningen
    ├## build.boot                      Futur project file for boot
    ├## shadow-cljs.edn                 The working project file for shadow-cljs
### NPM
    ├── package.json                    Definition of the npm package
    ├** package-lock.json               Control file for the loaded npm packages
    ├** [node_modules]                  Repository of the npm packages
### Runtime Data
    ├++ ['target']                      Compiled AOT, cache and runtime for main application libraries
### Developpement Stuff
    ├oo [plugs]                         Plugs to be tested only in dev mode same structure as node modules
    │  ├oo ['@user plugs']              User plug @user name directory (can have multiple plugs)
    │  │   └oo ['plug name']            User plug repository
    │  └oo ['plug name']                Non user plug repository (can have multiple plugs)
### Resources For Library
    ├── ['resources']                   Public HTML root directory for the renderer
    │   ├── [css]                       CSS directory for application
    │   ├== [js]                        Compiled AOT, cache an executables for renderer
    │   │   ├++ [cljs-runtime]          Library and runtime for renderer
    │   │   ├++ manifest.json           Manifest of libraries and runtime
    │   │   └== lib.js                  The compiled library for the renderer
    │   ├── index.html                  Empty page to create content from javascript
### Resources For Dev And Debug
    │   └== main.js                     The compiled main program of the application
### Sources
    └── ['src']                         Sources root
        ├── [cljstron]                  Root of cljstron library
        │   ├── [browser]               Root for helper function for main application
        │   │   └── window.cljs         Windows management, containers of renderers
        │   ├── [common]                Root for helper function for both applications
        │   │   ├── cljjs.cljs          Translate recursively JS->CLJS structures
        │   │   ├── app.cljs            App management. Require, launch
        │   │   ├── plug.cljs           Plugs management. Require, launch
        │   │   └── util.cljs           Some utility functions
        │   └── [renderer]              Root for helper function for renderer application
### Sources For Dev And Debug
        └oo [main]                      Optional main entry point. Activate plugs
            └oo main.cljs               Main entry point for developpement phase

A last thing... the doc for `electron` is [`here`](https://electron.atom.io/docs/). It may help... :innocent:
