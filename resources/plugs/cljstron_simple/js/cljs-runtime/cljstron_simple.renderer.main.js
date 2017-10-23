goog.provide('cljstron_simple.renderer.main');
goog.require('cljs.core');
cljstron_simple.renderer.main.start = (function cljstron_simple$renderer$main$start(){
console.log("simple - start");

return "returned by start";
});
goog.exportSymbol('cljstron_simple.renderer.main.start', cljstron_simple.renderer.main.start);
cljstron_simple.renderer.main.init = (function cljstron_simple$renderer$main$init(){
console.log("simple - init");

return cljstron_simple.renderer.main.start();
});
goog.exportSymbol('cljstron_simple.renderer.main.init', cljstron_simple.renderer.main.init);
cljstron_simple.renderer.main.stop = (function cljstron_simple$renderer$main$stop(){
return console.log("simple - stop");
});
goog.exportSymbol('cljstron_simple.renderer.main.stop', cljstron_simple.renderer.main.stop);

//# sourceMappingURL=cljstron_simple.renderer.main.js.map
