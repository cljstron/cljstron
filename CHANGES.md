# CHANGES in CLJStron

### 21 Nov 2017
  * [ ] Start opening `electron` from node code as a thread.
  * [ ] Start managing leiningen's `project.clj`.
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
