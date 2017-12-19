# CHANGES in CLJStron
### 18 Dec 2017
  * [X] Replace `(inline "...")` in generation of file
### 12 Dec 2017
  * [X] config.cljs improve loop-fn to accept key change of maps in body.
  * [X] config.cljs manage passing loop state across eval functions.
  * [X] config.cljs modify change- and update- functions to eval- as we are unmutable.
  * [X] config.cljs function (merge {}, #{} or [])
### 27 Nov 2017
  * [X] config.cljs (symbol) concatenates strings into a symbol
### 24 Nov 2017
  * [X] Manage Lein's `project.clj`, phase one.
### 22 Nov 2017
  * [X] Released 0.0.5-alpha
### 21 Nov 2017
  * [X] Start managing leiningen's `project.clj`.
  * [X] manage non-electron end of process.
  * [X] Supress `plug.cljs`.
  * [X] Aborted, bad idea: Start opening `electron` from node code as a thread.
  * [X] `app.cljs` -> `config.cljs`
  * [X] Added `TODO.md`.
  * [X] Added commands `run`, `help`, `generate`. No command -> `run`.
  * [X] `main.cljs` manages arguments: {command {args*}}.
  * [X] Suppress `generate.cljs`.
  * [X] Corrected a double opening of main window.
  * [X] Refactoring done, ok for `shadow-cljs.edn`.
### 8 Nov 2017
  * [X] Refactoring of `app.cljs`.
### 5 Nov 2017
  * [X] `generate.js` create `package.json` and `shadow-cljs.edn`.
  * [X] added and tested function `(:loop)` and `(:symbol)`.
  * [X] Added a level keyword to clean all sets at the end of app data transformation.
  * [X] Suppress traces.
  * [X] adding bin for generate.
### 4 Nov 2017
  * [X] Added this file.
  * [X] Added `app.edn` and `app.org.edn`.
  * [X] Testing `cljstron/main/app.cljs`.
  * [X] Change main to open a base window w/o plug.
  * [X] Adapt `README.md` to new version, especially File structure.
