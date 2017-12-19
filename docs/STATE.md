**_Warning project is a WIP in pre-alpha state :wink:_**
# State of project
**_Project is now a WIP in pre-alpha stage as of 4th of November 2017_**. :mask:

It is only as for now a simple experimental `electron` app used as a sandbox.
### Version
  * [`@cljstron/cljstron@0.0.6`](https://www.npmjs.com/package/@cljstron/cljstron).
  * GitHub repository: https://github.com/cljstron/cljstron. No release for now.
### Changes & ToDo's
You can find history of changes @ [`CHANGES.md`](CHANGES.md) from 4 nov 2017.

You can find the todo's @ [`TODO.md`](TODO.md) for currect state.
## Dependencies (as for now)
### NPM
  * [`shadow-cljs@2.0.117`](https://github.com/thheller/shadow-cljs) The compiler for now, but this will be in a module afterward
(compiler agnostic). Root compilation will be a raw `lein` project.
  * [`electron@1.7.10`](https://electronjs.org/docs) `electron` library.
### Clojars
  * [`[camel-snake-kebab "0.4.0"]`](https://github.com/qerub/camel-snake-kebab) It's used to manage `snake-case`d and `camelCase`d keys.
  * [`[cljs-node-io "0.5.0"]`]() To have slurp and spit, and other standard I/O functions of Clojure in node ClojureScript.
  * [`[org.clojure/tools.reader "1.1.0"]`]() To read EDN files.
