goog.provide('app.renderer');
goog.require('cljs.core');
app.renderer.start = (function app$renderer$start(){
return console.log("renderer - start");
});
app.renderer.init = (function app$renderer$init(){
console.log("renderer - init");

return app.renderer.start();
});
app.renderer.stop = (function app$renderer$stop(){
return console.log("renderer - stop");
});

//# sourceMappingURL=app.renderer.js.map
