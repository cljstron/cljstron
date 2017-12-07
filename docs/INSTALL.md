# Installation
As it's an alpha release, I suppose you already know how to install programs and the configuration of your computer... :yum:

*WARNING, not always up to date. I'll try to make it readable.*


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
    * latest version of `npm`  :  `npm i -g "npm@latest"`
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
Compile the `main`and `generate` applications in development mode:

  * `shadow-cljs compile main` Main application with a dumb window. `electron .` or `npm start`
  * `shadow-cljs compile generate` Generate compilation files and package.json. `node generate`

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
