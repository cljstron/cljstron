goog.provide('renderer.test');
goog.require('cljs.core');
goog.require('module$node_modules$electron$index');
goog.require('electron.renderer');
goog.require('electron.common');
cljs.core.enable_console_print_BANG_();
renderer.test.start = (function renderer$test$start(){
return console.log("renderer - start");
});
renderer.test.init = (function renderer$test$init(){
console.log("renderer - init");

return renderer.test.start();
});
renderer.test.stop = (function renderer$test$stop(){
return console.log("renderer - stop");
});

//# sourceMappingURL=renderer.test.js.map
