#!/usr/bin/env node
if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

var path = require("path");
try {
    require("source-map-support").install();
} catch(err) {
}
require(path.join(path.resolve("."),"main.out","goog","bootstrap","nodejs.js"));
require(path.join(path.resolve("."),"main.out","cljs_deps.js"));
goog.global.CLOSURE_UNCOMPILED_DEFINES = {"app.main.dev_QMARK_":true,"cljs.core._STAR_target_STAR_":"nodejs"};
goog.require("boot.cljs.main473");
goog.require("cljs.nodejscli");
