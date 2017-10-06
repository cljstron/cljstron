goog.provide('cljselec.renderer.test');
goog.require('cljs.core');
goog.require('module$node_modules$electron$index');
goog.require('cljselec.electron.renderer');
goog.require('cljselec.electron.common');
cljs.core.enable_console_print_BANG_();
cljselec.renderer.test.start = (function cljselec$renderer$test$start(){
return console.log("renderer - start");
});
cljselec.renderer.test.init = (function cljselec$renderer$test$init(){
console.log("renderer - init");

return cljselec.renderer.test.start();
});
cljselec.renderer.test.stop = (function cljselec$renderer$test$stop(){
return console.log("renderer - stop");
});

//# sourceMappingURL=cljselec.renderer.test.js.map
