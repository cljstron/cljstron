goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../ADE4A11.js", ['cljs.nodejs'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../app/electron.js", ['app.electron'], ['cljs.core', 'cljs.nodejs', 'clojure.string']);
goog.addDependency("../app/main.js", ['app.main'], ['cljs.core', 'cljs.nodejs', 'app.electron']);
goog.addDependency("../boot/cljs/main473.js", ['boot.cljs.main473'], ['app.main', 'cljs.core']);
goog.addDependency("../BCE03FE.js", ['cljs.nodejscli'], ['cljs.core', 'cljs.nodejs']);
