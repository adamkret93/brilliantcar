(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3CGx":function(t,e,r){t.exports={infoForm:"InfoForm-module--infoForm---DzLg",infoFormDanger:"InfoForm-module--infoForm--danger--32FjH",infoFormSuccess:"InfoForm-module--infoForm--success--1rtkd"}},"8MT8":function(t,e,r){t.exports={container:"Spinner-module--container--38wV_",Loader:"Spinner-module--Loader--zA6kg",load2:"Spinner-module--load2--2Gspa"}},Cc89:function(t,e,r){"use strict";r("KKXr");var n=r("q1tI"),a=r.n(n),o=r("Sde4"),i=r.n(o);e.a=function(t){var e=t.title,r=t.desc,n=t.side,o=e.split(" "),c="";return o.length>1?c=o.map((function(t,e){return e===o.length-1?a.a.createElement("span",{key:e},t):t+" "})):c+=o[0],a.a.createElement("div",{className:i.a.header__wrapper+" container"},a.a.createElement("header",{className:i.a.header},a.a.createElement("h1",{className:i.a.header__title},c)),r?a.a.createElement("div",{className:i.a.header__descript+" "+i.a["header__descript"+n]},r):null)}},IDOG:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),a=r.n(n),o=r("CGcg"),i=r("Cc89"),c=r("vrFN"),l=(r("VRzm"),r("Btvt"),r("f3/d"),r("91GP"),r("kD0k")),u=r.n(l),s=(r("ls82"),r("YzSj")),h=r.n(s),f=r("NYmM"),m=r.n(f),d=r("W0DN"),p=r.n(d),y=r("dxEo"),v=r.n(y),g=r("8MT8"),_=r.n(g),w=function(){return a.a.createElement("div",{className:_.a.Loader},"Loading...")},E=r("3CGx"),b=r.n(E),x=function(t){var e=t.text,r=t.type;return a.a.createElement("div",{className:b.a.infoForm+" "+("error"===r?b.a.infoFormDanger:b.a.infoFormSuccess)},e)};function L(t,e,r,n,a,o,i){try{var c=t[o](i),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,a)}var k=function(t){return t.email?/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(t.email)?t.message?t.message.length<5?"Wiadomość jest za krótka.":t.agree?null:"Zgoda na przetwarzanie danych jest wymagana.":"Treść wiadomości jest wymagana.":"Adres e-mail jest nie poprawny.":"Adres e-mail jest wymagany."},j=function(){var t=Object(n.useState)({text:null,type:null}),e=t[0],r=t[1],o=Object(n.useState)(!1),i=o[0],c=o[1],l=Object(n.useState)({email:"",message:"",agree:!1}),s=l[0],f=l[1],d=function(){var t,e=(t=u.a.mark((function t(e){var n,a,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),c(!0),!(n=k(s))){t.next=7;break}return c(!1),r({text:n,type:"error"}),t.abrupt("return");case 7:return t.prev=7,a={email:s.email,message:s.message},t.next=11,fetch("/contactForm.php",{method:"POST",cache:"no-cache",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"client",body:JSON.stringify(a)});case 11:return o=t.sent,t.next=14,o.json();case 14:t.sent.sent?(c(!1),r({text:"Dziękujemy! Wiadomość została wysłana.",type:"success"})):(c(!1),r({text:"Błąd połączenia. Spróbuj ponownie.",type:"error"})),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(7),c(!1),r({text:"Błąd połączenia. Spróbuj ponownie.",type:"error"});case 22:case"end":return t.stop()}}),t,null,[[7,18]])})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){L(o,n,a,i,c,"next",t)}function c(t){L(o,n,a,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}(),y=function(t){var e;f(Object.assign({},s,((e={})[t.target.name]=t.target.value,e)))},g=a.a.createElement("form",{onSubmit:d},a.a.createElement("label",{className:h.a.form__label+" "+h.a.form__labelEmail},"Podaj adres e-mail:",a.a.createElement("span",null,"*"),a.a.createElement("input",{placeholder:"Adres e-mail",name:"email","aria-label":"email",type:"email",value:s.email,onChange:y})),a.a.createElement("label",{className:h.a.form__label},"Treść wiadomości:",a.a.createElement("textarea",{placeholder:"Treść wiadomości",name:"message","aria-label":"message",value:s.message,onChange:y})),a.a.createElement("label",{className:h.a.form__label+" "+h.a.form__labelAgree},a.a.createElement("input",{type:"checkbox",name:"agree","aria-label":"agree",checked:s.agree,onChange:function(){f((function(t){return Object.assign({},s,{agree:!t.agree})}))}}),"Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w Formularzu kontaktowym. Administratorem danych jest Brilliant Car Studio Detailingu Arkadiusz Widła, Michał Partyka s.c., ul. Jurajska 20, 32-085 Modlnica. Podane dane będa przetworzone w celu udzielenia odpowiedzi na przesłane zapytanie."),a.a.createElement("button",{type:"submit",className:h.a.form__submit},"Wyślij"));return i&&(g=a.a.createElement(w,null)),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:h.a.contact+" container"},a.a.createElement("div",{className:h.a.contact__info},a.a.createElement("p",{className:h.a.contact__name},"Brilliant Car - Studio Detailingu"),a.a.createElement("p",{className:h.a.contact__adress},a.a.createElement("img",{className:h.a.contact__img,src:m.a,alt:"location"}),"ul. Jurajska 20, ",a.a.createElement("br",null),"32-085 Modlnica"),a.a.createElement("a",{className:h.a.contact__tel,href:"tel:+48 721 000 010"},a.a.createElement("img",{className:h.a.contact__img,src:p.a,alt:"telphone"}),"+48 721 000 010"),a.a.createElement("a",{className:h.a.contact__email,href:"mailto:brilliantcarstudio@gmail.com"},a.a.createElement("img",{className:h.a.contact__img,src:v.a,alt:"e-mail"}),"brilliantcarstudio@gmail.com")),a.a.createElement("div",{className:h.a.contact__form},a.a.createElement("h3",{className:h.a.form__title},"Formularz kontaktowy"),e.text?a.a.createElement("div",null," ",a.a.createElement(x,{text:e.text,type:e.type})," "):null,g)),a.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.8325557498247!2d19.87129111571971!3d50.12685517943206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13. 1!3m3!1m2!1s0x471659a3653c3795%3A0xeffcff508d9351f3!2sBrilliant%20Car%20Studio%20Detailingu!5e0!3m2!1spl!2spl!4v1589983455108!5m2!1spl!2spl",width:"1920",height:"600",title:"companyLocation",frameBorder:"0",style:{border:0,maxWidth:"100%"},allowFullScreen:"","aria-hidden":"false"}))};e.default=function(){var t=a.a.createElement(a.a.Fragment,null,"Jeżeli masz jakieś pytania, ",a.a.createElement("strong",null,"zadzwoń")," lub napisz bezpośrednio na ",a.a.createElement("strong",null,"adress e-mail"),", bądz poprzez ",a.a.createElement("strong",null,"formularz kontaktowy")," znajdujący sie poniżej.",a.a.createElement("br",null)," Chętnie rozwiejemy wszelkie wątpliwości.");return a.a.createElement(o.a,{background:!0,bgSide:"left"},a.a.createElement(c.a,{title:"Kontakt"}),a.a.createElement(i.a,{title:"Kontakt",desc:t,side:"Right"}),a.a.createElement(j,null))}},RJWs:function(t,e,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof s?e:s,o=Object.create(a.prototype),i=new b(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u={};function s(){}function h(){}function f(){}var m={};m[a]=function(){return this};var d=Object.getPrototypeOf,p=d&&d(d(x([])));p&&p!==e&&r.call(p,a)&&(m=p);var y=f.prototype=s.prototype=Object.create(m);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=y.constructor=f,f.constructor=h,f[i]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},v(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new g(c(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},v(y),y[i]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},Sde4:function(t,e,r){t.exports={container:"header-module--container--2ZSD-",header__wrapper:"header-module--header__wrapper--1i48C",header:"header-module--header--mYaeK",header__title:"header-module--header__title--xy-zu",header__descript:"header-module--header__descript--2Vhm0",header__descriptLeft:"header-module--header__descript--left--37cUr",header__descriptRight:"header-module--header__descript--right--1hj-X"}},YzSj:function(t,e,r){t.exports={container:"Contact-module--container--212KD",contact:"Contact-module--contact--3MkAq",contact__info:"Contact-module--contact__info--1ot0m",contact__form:"Contact-module--contact__form--1gjhg",contact__name:"Contact-module--contact__name--1PaQi",contact__adress:"Contact-module--contact__adress--3ZV7e",contact__tel:"Contact-module--contact__tel--1Fsgs",contact__email:"Contact-module--contact__email--2KH_H",contact__img:"Contact-module--contact__img--1k5uT",form__title:"Contact-module--form__title--1771r",form__label:"Contact-module--form__label--F6mw0",form__labelEmail:"Contact-module--form__label--email--1FZOG",form__labelAgree:"Contact-module--form__label--agree--3Px1P",form__submit:"Contact-module--form__submit--3kobt"}},kD0k:function(t,e,r){t.exports=r("RJWs")},ls82:function(t,e,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof s?e:s,o=Object.create(a.prototype),i=new b(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u={};function s(){}function h(){}function f(){}var m={};m[a]=function(){return this};var d=Object.getPrototypeOf,p=d&&d(d(x([])));p&&p!==e&&r.call(p,a)&&(m=p);var y=f.prototype=s.prototype=Object.create(m);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t){var e;this._invoke=function(n,a){function o(){return new Promise((function(e,o){!function e(n,a,o,i){var c=l(t[n],t,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,o,i)}),(function(t){e("throw",t,o,i)})):Promise.resolve(s).then((function(t){u.value=t,o(u)}),(function(t){return e("throw",t,o,i)}))}i(c.arg)}(n,a,e,o)}))}return e=e?e.then(o,o):o()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=y.constructor=f,f.constructor=h,f[i]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},v(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,a){var o=new g(c(e,r,n,a));return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},v(y),y[i]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=component---src-pages-kontakt-js-4dd249d308ffecc49c97.js.map