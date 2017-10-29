#!/usr/bin/env node
(function(){

var SHADOW_IMPORT_PATH = "/Users/ivan/Developer/cljstron/cljstron/target/shadow-cljs/builds/generate/dev/out/cljs-runtime";
var SHADOW_ENV = {};
try {require('source-map-support').install();} catch (e) {console.warn('no "source-map-support" (run "npm install source-map-support --save-dev" to get it)');}

SHADOW_ENV.CLOSURE_NO_DEPS = true;

SHADOW_ENV.CLOSURE_DEFINES = {"goog.DEBUG":true};

var SHADOW_ROOTS = ["goog"];

var goog = SHADOW_ENV.goog = {};

// SHADOW_ENV becomes goog.global which may access some of these
SHADOW_ENV.setTimeout = global.setTimeout;
SHADOW_ENV.clearTimeout = global.clearTimeout;
SHADOW_ENV.setInterval = global.setInterval;
SHADOW_ENV.clearInterval = global.clearInterval;
SHADOW_ENV.setImmediate = global.setImmediate;
SHADOW_ENV.clearImmediate = global.clearImmediate;

SHADOW_ENV.SHADOW_IMPORTED = {};

var PATH = require("path");
var VM = require("vm");
var FS = require("fs");

// extract [root] for all goog.provide('[root].something');
// we need to pull them into local scope for every eval
var SHADOW_EXTRACT_ROOTS = function(js) {
  var re = /goog.provide\(([^)]+)\);/g
  var match = null;
  while (match = re.exec(js)) {
    var provide = match[1];
    var end = provide.indexOf('.');
    if (end == -1) {
      end = provide.length - 1;
    }

    // skip first char as match will be "cljs.core" or 'cljs.core' but always with quotes
    // end at either the first dot or end of provide-1 for one-segement namespaces
    var root = provide.substring(1, end);

    if (!SHADOW_ROOTS.includes(root)) {
      SHADOW_ENV[root] = {};
      SHADOW_ROOTS.push(root);
    }
  }
};

var SHADOW_PROVIDE = function(name) {
  return goog.exportPath_(name, undefined, SHADOW_ENV);
};

var SHADOW_REQUIRE = function(name) {
  return true;
};

var SHADOW_WRAP = function(js) {
  var code = "(function (require, module, __filename, __dirname, SHADOW_ENV) {\n";
  // this is part of goog/base.js and for some reason the only global var not on goog or goog.global
  code += "var COMPILED = false;\n"

  SHADOW_ROOTS.forEach(function(root) {
    code += "var " + root + "=SHADOW_ENV." + root + ";\n";
  });

  code += js;

  code += "\n});";
  return code;
};

var SHADOW_WRAP_OFFSET = function() {
  // -1 because we have one more lines than original (the wrapper above)
  return (2 + SHADOW_ROOTS.length) * -1;
};

var SHADOW_IMPORT = SHADOW_ENV.SHADOW_IMPORT = function(src) {
  if (SHADOW_ENV.CLOSURE_DEFINES["shadow.debug"]) {
    console.info("SHADOW load:", src);
  }

  SHADOW_ENV.SHADOW_IMPORTED[src] = true;

  // NODE_INCLUDE_PATH points to an absolute path, injected by shadow/cljs/node.clj
  var filePath = SHADOW_IMPORT_PATH + '/' + src;

  var js = FS.readFileSync(filePath);

  SHADOW_EXTRACT_ROOTS(js);
  var code = SHADOW_WRAP(js);

  var fn = VM.runInThisContext(code,
    {filename: filePath,
     lineOffset: SHADOW_WRAP_OFFSET(),
     displayErrors: true
     });

  // the comment is for source-map-support which unfortunately shows the wrong piece of code but the stack is correct
  try {
  /* ignore this, look at stacktrace */ fn.call(SHADOW_ENV, require, module, __filename, __dirname, SHADOW_ENV);
  } catch (e) {
    console.error("SHADOW import error", filePath);
    throw e;
  }

  return true;
};

SHADOW_ENV.NODE_EVAL = function(js, smJson) {
  var prefix = "return (";
  var code = SHADOW_WRAP(prefix + js + ");");
  if (smJson) {
    code += "\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,";
    code += new Buffer(smJson).toString('base64');
  }

  // console.log(code);

  var fn = VM.runInThisContext(code,
    {filename: "<eval>",
     lineOffset: SHADOW_WRAP_OFFSET(),
     columnOffset: prefix.length,
     displayErrors: true
     });
  return fn.call(SHADOW_ENV, require, module, __filename, __dirname, SHADOW_ENV);
};

SHADOW_IMPORT("goog.base.js");
goog.provide = SHADOW_PROVIDE;
goog.require = SHADOW_REQUIRE;
SHADOW_IMPORT("goog.debug.error.js");
SHADOW_IMPORT("goog.dom.nodetype.js");
SHADOW_IMPORT("goog.string.string.js");
SHADOW_IMPORT("goog.asserts.asserts.js");
SHADOW_IMPORT("goog.reflect.reflect.js");
SHADOW_IMPORT("goog.math.long.js");
SHADOW_IMPORT("goog.math.integer.js");
SHADOW_IMPORT("goog.object.object.js");
SHADOW_IMPORT("goog.array.array.js");
SHADOW_IMPORT("goog.structs.structs.js");
SHADOW_IMPORT("goog.functions.functions.js");
SHADOW_IMPORT("goog.math.math.js");
SHADOW_IMPORT("goog.iter.iter.js");
SHADOW_IMPORT("goog.structs.map.js");
SHADOW_IMPORT("goog.uri.utils.js");
SHADOW_IMPORT("goog.uri.uri.js");
SHADOW_IMPORT("goog.string.stringbuffer.js");
SHADOW_IMPORT("cljs.core.js");
SHADOW_IMPORT("cljs.nodejs.js");
SHADOW_IMPORT("com.cognitect.transit.util.js");
SHADOW_IMPORT("com.cognitect.transit.delimiters.js");
SHADOW_IMPORT("com.cognitect.transit.caching.js");
SHADOW_IMPORT("com.cognitect.transit.eq.js");
SHADOW_IMPORT("com.cognitect.transit.types.js");
SHADOW_IMPORT("com.cognitect.transit.impl.decoder.js");
SHADOW_IMPORT("com.cognitect.transit.impl.reader.js");
SHADOW_IMPORT("com.cognitect.transit.handlers.js");
SHADOW_IMPORT("com.cognitect.transit.impl.writer.js");
SHADOW_IMPORT("com.cognitect.transit.js");
SHADOW_IMPORT("cognitect.transit.js");
SHADOW_IMPORT("clojure.string.js");
SHADOW_IMPORT("cljs.tools.reader.impl.utils.js");
SHADOW_IMPORT("cljs.tools.reader.reader_types.js");
SHADOW_IMPORT("cljs.tools.reader.impl.inspect.js");
SHADOW_IMPORT("cljs.tools.reader.impl.errors.js");
SHADOW_IMPORT("cljs.tools.reader.impl.commons.js");
SHADOW_IMPORT("cljs.tools.reader.js");
SHADOW_IMPORT("cljs.tools.reader.edn.js");
SHADOW_IMPORT("cljs.core.async.impl.protocols.js");
SHADOW_IMPORT("cljs.core.async.impl.buffers.js");
SHADOW_IMPORT("goog.debug.entrypointregistry.js");
SHADOW_IMPORT("goog.dom.htmlelement.js");
SHADOW_IMPORT("goog.dom.tagname.js");
SHADOW_IMPORT("goog.labs.useragent.util.js");
SHADOW_IMPORT("goog.labs.useragent.browser.js");
SHADOW_IMPORT("goog.labs.useragent.engine.js");
SHADOW_IMPORT("goog.async.nexttick.js");
SHADOW_IMPORT("cljs.core.async.impl.dispatch.js");
SHADOW_IMPORT("cljs.core.async.impl.channels.js");
SHADOW_IMPORT("cljs.core.async.impl.timers.js");
SHADOW_IMPORT("cljs.core.async.impl.ioc_helpers.js");
SHADOW_IMPORT("cljs.core.async.js");
SHADOW_IMPORT("cljs_node_io.protocols.js");
SHADOW_IMPORT("cljs_node_io.streams.js");
SHADOW_IMPORT("cljs_node_io.fs.js");
SHADOW_IMPORT("cljs_node_io.file.js");
SHADOW_IMPORT("cljs_node_io.core.js");
SHADOW_IMPORT("cljs.pprint.js");
SHADOW_IMPORT("cljs.reader.js");
SHADOW_IMPORT("cljstron.common.interop.js");
SHADOW_IMPORT("main.generate.js");
SHADOW_IMPORT("shadow.module.main.append.js");
var shadow = SHADOW_ENV.shadow || {};
var cljs = SHADOW_ENV.cljs || {};
var main = SHADOW_ENV.main;

})();
