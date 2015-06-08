define("omraadet/app",["exports","ember","ember/resolver","ember/load-initializers","omraadet/config/environment"],function(e,t,a,r,n){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),r["default"](d,n["default"].modulePrefix),e["default"]=d}),define("omraadet/controllers/application",["exports"],function(e){"use strict";e["default"]=Ember.Controller.extend({search:null,gmapsMeta:null,searching:!1,queryParams:["q"],placeholder:"f.eks: Oslo",isGeoEnabled:window.navigator.geolocation,_queryGmapsApi:function(e){var t=this;Ember.$.getJSON("https://maps.googleapis.com/maps/api/geocode/json",e,function(e){t.set("searching",!1),t.set("gmapsMeta",e.results[0]),t.transitionToRoute({queryParams:{q:e.results[0].formatted_address}})})},actions:{query:function t(){var e=this,t=e.get("search");t&&(e.set("searching",!0),e._queryGmapsApi({address:t}))},geoQuery:function(){var e=this;e.get("isGeoEnabled")&&(e.set("search",""),e.set("searching",!0),navigator.geolocation.getCurrentPosition(function(t){e._queryGmapsApi({latlng:""+t.coords.latitude+","+t.coords.longitude})}))}}})}),define("omraadet/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("omraadet/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("omraadet/initializers/app-version",["exports","omraadet/config/environment","ember"],function(e,t,a){"use strict";var r=a["default"].String.classify,n=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!n){var i=r(d.toString());a["default"].libraries.register(i,t["default"].APP.version),n=!0}}}}),define("omraadet/initializers/export-application-global",["exports","ember","omraadet/config/environment"],function(e,t,a){"use strict";function r(e,r){var n=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[n]&&(window[n]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("omraadet/router",["exports","ember","omraadet/config/environment"],function(e,t,a){"use strict";var r=t["default"].Router.extend({location:a["default"].locationType});r.map(function(){}),e["default"]=r}),define("omraadet/routes/application",["exports"],function(e){"use strict";e["default"]=Ember.Route.extend({queryParams:{q:{refreshModel:!0}},setupController:function(e){var t=e.get("q");t&&e.set("search",t)},model:function(){return{name:"foo"}}})}),define("omraadet/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","input-group-addon");var r=e.createTextNode("\n                    ");e.appendChild(a,r);var r=e.createElement("i");e.setAttribute(r,"class","fa fa-cog fa-spin"),e.appendChild(a,r);var r=e.createTextNode("\n                ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom;r.detectNamespace(a);var n;return t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(n=this.build(r),this.hasRendered?this.cachedFragment=n:this.hasRendered=!0),this.cachedFragment&&(n=r.cloneNode(this.cachedFragment,!0))):n=this.build(r),n}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("TODO: how to check this?");e.appendChild(t,a);var a=e.createTextNode("\n                ");e.appendChild(t,a);var a=e.createElement("span");e.setAttribute(a,"class","input-group-addon action");var r=e.createTextNode("\n                    ");e.appendChild(a,r);var r=e.createElement("i");e.setAttribute(r,"class","fa fa-map-marker"),e.appendChild(a,r);var r=e.createTextNode("\n                ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,d=n.element;r.detectNamespace(a);var i;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(i=this.build(r),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=r.cloneNode(this.cachedFragment,!0))):i=this.build(r);var o=r.childAt(i,[2]);return d(t,o,e,"action",["geoQuery"],{}),i}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","container text-center");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("header"),n=e.createTextNode("\n        ");e.appendChild(r,n);var n=e.createElement("h1"),d=e.createTextNode("\n            ");e.appendChild(n,d);var d=e.createElement("i");e.setAttribute(d,"class","fa fa-check"),e.appendChild(n,d);var d=e.createTextNode("\n            Sjekk Området\n            ");e.appendChild(n,d);var d=e.createElement("i");e.setAttribute(d,"class","fa fa-globe"),e.appendChild(n,d);var d=e.createTextNode("\n        ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("form");e.setAttribute(r,"class","form center-block");var n=e.createTextNode("\n            ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","input-group");var d=e.createTextNode("\n");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("              ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n                ");e.appendChild(n,d);var d=e.createElement("span");e.setAttribute(d,"class","input-group-addon action");var i=e.createTextNode("\n                    ");e.appendChild(d,i);var i=e.createElement("i");e.setAttribute(i,"class","fa fa-search"),e.appendChild(d,i);var i=e.createTextNode("\n                ");e.appendChild(d,i),e.appendChild(n,d);var d=e.createTextNode("\n              ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("            ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("footer"),n=e.createTextNode("\n        ");e.appendChild(r,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/kenglxn/omraadet");var d=e.createTextNode("\n            ©2015 ");e.appendChild(n,d);var d=e.createElement("i");e.setAttribute(d,"class","fa fa-github-square"),e.appendChild(n,d);var d=e.createTextNode("\n        ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n      |\n        ");e.appendChild(r,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/kenglxn");var d=e.createTextNode("@kenglxn");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n\n\n");return e.appendChild(t,a),t},render:function(a,r,n){var d=r.dom,i=r.hooks,o=i.get,l=i.block,c=i.inline,s=i.element,p=i.content;d.detectNamespace(n);var u;r.useFragmentCache&&d.canClone?(null===this.cachedFragment&&(u=this.build(d),this.hasRendered?this.cachedFragment=u:this.hasRendered=!0),this.cachedFragment&&(u=d.cloneNode(this.cachedFragment,!0))):u=this.build(d);var h=d.childAt(u,[0]),m=d.childAt(h,[3,1]),f=d.childAt(m,[5]),v=d.createMorphAt(m,1,1),C=d.createMorphAt(m,3,3),g=d.createMorphAt(m,7,7),x=d.createMorphAt(h,5,5);return l(r,v,a,"if",[o(r,a,"searching")],{},e,null),c(r,C,a,"input",[],{type:"text",value:o(r,a,"search"),action:"query",on:"enter",placeholder:o(r,a,"placeholder"),"class":"form-control"}),s(r,f,a,"action",["query"],{}),l(r,g,a,"if",[o(r,a,"isGeoEnabled")],{},t,null),p(r,x,a,"outlet"),u}}}())}),define("omraadet/config/environment",["ember"],function(e){var t="omraadet";try{var a=t+"/config/environment",r=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("omraadet/tests/test-helper"):require("omraadet/app")["default"].create({name:"omraadet",version:"0.0.0.e965dd88"});