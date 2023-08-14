/**
 * Zendesk API wrapper for Lotus Themes Extensions v3.14.1
 * https://www.lotusthemes.com
 *
 * Released on 2021-02-28
 * Copyright (c) 2014-2021 Lotus Themes
 */

!function n(o,r,s){function a(i,t){if(!r[i]){if(!o[i]){var e="function"==typeof require&&require;if(!t&&e)return e(i,!0);if(c)return c(i,!0);throw new Error("Cannot find module '"+i+"'")}e=r[i]={exports:{}};o[i][0].call(e.exports,function(t){var e=o[i][1][t];return a(e||t)},e,e.exports,n,o,r,s)}return r[i].exports}for(var c="function"==typeof require&&require,t=0;t<s.length;t++)a(s[t]);return a}({1:[function(t,e,i){var m,n,o,r,s,a=(m=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={},s={compressToBase64:function(t){if(null==t)return"";var e=s._compress(t,6,function(t){return n.charAt(t)});switch(e.length%4){default:case 0:return e;case 1:return e+"===";case 2:return e+"==";case 3:return e+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:s._decompress(e.length,32,function(t){return c(n,e.charAt(t))})},compressToUTF16:function(t){return null==t?"":s._compress(t,15,function(t){return m(t+32)})+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:s._decompress(e.length,16384,function(t){return e.charCodeAt(t)-32})},compressToUint8Array:function(t){for(var e=s.compress(t),i=new Uint8Array(2*e.length),n=0,o=e.length;n<o;n++){var r=e.charCodeAt(n);i[2*n]=r>>>8,i[2*n+1]=r%256}return i},decompressFromUint8Array:function(t){if(null==t)return s.decompress(t);for(var e=new Array(t.length/2),i=0,n=e.length;i<n;i++)e[i]=256*t[2*i]+t[2*i+1];var o=[];return e.forEach(function(t){o.push(m(t))}),s.decompress(o.join(""))},compressToEncodedURIComponent:function(t){return null==t?"":s._compress(t,6,function(t){return o.charAt(t)})},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),s._decompress(e.length,32,function(t){return c(o,e.charAt(t))}))},compress:function(t){return s._compress(t,16,function(t){return m(t)})},_compress:function(t,e,i){if(null==t)return"";for(var n,o,r,s,a={},c={},u="",l=2,f=3,d=2,h=[],p=0,g=0,y=0;y<t.length;y+=1)if(r=t.charAt(y),Object.prototype.hasOwnProperty.call(a,r)||(a[r]=f++,c[r]=!0),s=u+r,Object.prototype.hasOwnProperty.call(a,s))u=s;else{if(Object.prototype.hasOwnProperty.call(c,u)){if(u.charCodeAt(0)<256){for(n=0;n<d;n++)p<<=1,g==e-1?(g=0,h.push(i(p)),p=0):g++;for(o=u.charCodeAt(0),n=0;n<8;n++)p=p<<1|1&o,g==e-1?(g=0,h.push(i(p)),p=0):g++,o>>=1}else{for(o=1,n=0;n<d;n++)p=p<<1|o,g==e-1?(g=0,h.push(i(p)),p=0):g++,o=0;for(o=u.charCodeAt(0),n=0;n<16;n++)p=p<<1|1&o,g==e-1?(g=0,h.push(i(p)),p=0):g++,o>>=1}0==--l&&(l=Math.pow(2,d),d++),delete c[u]}else for(o=a[u],n=0;n<d;n++)p=p<<1|1&o,g==e-1?(g=0,h.push(i(p)),p=0):g++,o>>=1;0==--l&&(l=Math.pow(2,d),d++),a[s]=f++,u=String(r)}if(""!==u){if(Object.prototype.hasOwnProperty.call(c,u)){if(u.charCodeAt(0)<256){for(n=0;n<d;n++)p<<=1,g==e-1?(g=0,h.push(i(p)),p=0):g++;for(o=u.charCodeAt(0),n=0;n<8;n++)p=p<<1|1&o,g==e-1?(g=0,h.push(i(p)),p=0):g++,o>>=1}else{for(o=1,n=0;n<d;n++)p=p<<1|o,g==e-1?(g=0,h.push(i(p)),p=0):g++,o=0;for(o=u.charCodeAt(0),n=0;n<16;n++)p=p<<1|1&o,g==e-1?(g=0,h.push(i(p)),p=0):g++,o>>=1}0==--l&&(l=Math.pow(2,d),d++),delete c[u]}else for(o=a[u],n=0;n<d;n++)p=p<<1|1&o,g==e-1?(g=0,h.push(i(p)),p=0):g++,o>>=1;0==--l&&(l=Math.pow(2,d),d++)}for(o=2,n=0;n<d;n++)p=p<<1|1&o,g==e-1?(g=0,h.push(i(p)),p=0):g++,o>>=1;for(;;){if(p<<=1,g==e-1){h.push(i(p));break}g++}return h.join("")},decompress:function(e){return null==e?"":""==e?null:s._decompress(e.length,32768,function(t){return e.charCodeAt(t)})},_decompress:function(t,e,i){for(var n,o,r,s,a,c,u=[],l=4,f=4,d=3,h="",p=[],g={val:i(0),position:e,index:1},y=0;y<3;y+=1)u[y]=y;for(o=0,s=Math.pow(2,2),a=1;a!=s;)r=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=i(g.index++)),o|=(0<r?1:0)*a,a<<=1;switch(o){case 0:for(o=0,s=Math.pow(2,8),a=1;a!=s;)r=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=i(g.index++)),o|=(0<r?1:0)*a,a<<=1;c=m(o);break;case 1:for(o=0,s=Math.pow(2,16),a=1;a!=s;)r=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=i(g.index++)),o|=(0<r?1:0)*a,a<<=1;c=m(o);break;case 2:return""}for(n=u[3]=c,p.push(c);;){if(g.index>t)return"";for(o=0,s=Math.pow(2,d),a=1;a!=s;)r=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=i(g.index++)),o|=(0<r?1:0)*a,a<<=1;switch(c=o){case 0:for(o=0,s=Math.pow(2,8),a=1;a!=s;)r=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=i(g.index++)),o|=(0<r?1:0)*a,a<<=1;u[f++]=m(o),c=f-1,l--;break;case 1:for(o=0,s=Math.pow(2,16),a=1;a!=s;)r=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=i(g.index++)),o|=(0<r?1:0)*a,a<<=1;u[f++]=m(o),c=f-1,l--;break;case 2:return p.join("")}if(0==l&&(l=Math.pow(2,d),d++),u[c])h=u[c];else{if(c!==f)return null;h=n+n.charAt(0)}p.push(h),u[f++]=n+h.charAt(0),n=h,0==--l&&(l=Math.pow(2,d),d++)}}});function c(t,e){if(!r[t]){r[t]={};for(var i=0;i<t.length;i++)r[t][t.charAt(i)]=i}return r[t][e]}"function"==typeof define&&define.amd?define(function(){return a}):void 0!==e&&null!=e&&(e.exports=a)},{}],2:[function(t,e,i){e.exports={name:"apidata",version:"3.14.1",description:"Zendesk API wrapper for Lotus Themes Extensions",main:"dist/ApiData.min.js",scripts:{gulp:"gulp default",zat:"cd demo && zat theme preview",start:"run-p gulp zat",build:"gulp build",postinstall:"node postinstall.js"},repository:{type:"git",url:"git+ssh://git@gitlab.com/lotusthemes/apidata.git"},keywords:["helpdesk","api"],author:"Aleksandr Zoryn",license:"ISC",bugs:{url:"https://gitlab.com/lotusthemes/apidata/issues"},homepage:"https://gitlab.com/lotusthemes/apidata#README",devDependencies:{"@types/jquery":"^3.5.5","babel-core":"^6.26.3","babel-preset-env":"^1.6.1",babelify:"^8.0.0","browser-sync":"^2.26.3",del:"^3.0.0",eslint:"^5.0.1","eslint-config-recommended":"^3.0.0",gulp:"^3.9.1","gulp-browserify":"^0.5.1","gulp-header-comment":"^0.9.0","gulp-plumber":"^1.1.0","gulp-rename":"^1.2.2","gulp-uglify":"^3.0.0","gulp-watch":"^4.3.11",moment:"^2.29.1","run-sequence":"^2.2.0"},dependencies:{"lz-string":"^1.4.4"}}},{}],3:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t};function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=b(t("lz-string")),s=t("../package.json"),a=t("./constants"),c=t("./utils"),u=b(t("./staticMethods/filterByCategoryId")),l=b(t("./staticMethods/filterBySectionId")),f=b(t("./staticMethods/filterByArticleId")),d=b(t("./staticMethods/filterBySiblingsArticlesId")),h=b(t("./staticMethods/filterBySiblingsSectionsId")),p=b(t("./staticMethods/filterByLabelName")),g=b(t("./staticMethods/toFlatCategoriesTree")),y=b(t("./staticMethods/toCategoriesTree")),m=b(t("./staticMethods/toFlatSectionsTree")),v=b(t("./staticMethods/toSectionsTree")),_=b(t("./staticMethods/sortBy"));function b(t){return t&&t.__esModule?t:{default:t}}var O={debug:!1,cacheLifetime:6e4,hcUrl:null,localStorage:{data:"lotus_data",timeout:"lotus_data_timeout",locale:"lotus_data_locale",requestsCount:"lotus_data_requests"},fetch:["articles","sections","categories"],fetchFromServer:!1,delay:0,sortBy:"position",excludeFields:null,onDataFetched:null},n=(n(w,[{key:"init",value:function(){var t=this.fetchDataFromCache();t&&!this.options.fetchFromServer?(this.data=t.data,this.dataFetchFrom="storage",this.onDataFetched(),t.timeOver&&this.updateData()):(this.dataFetchFrom="server",this.fetchDataFromServer())}},{key:"fetchDataFromServer",value:function(){var e=this;if(this.iterationsCount++,this.promises=[],this.requestsCount)for(var t=0;t<this.requestsCount;t++)this.promisesPush();else this.promisesPush();Promise.all(this.promises).then(function(t){-1!==t.indexOf(!0)?e.checkParentSections()?e.createData():(e.parentSectionsId=[],e.iterationsCount++,e.requestIndex++,e.request(1,e.createData.bind(e))):e.fetchDataFromServer()})}},{key:"promisesPush",value:function(){var e=this;this.promises.push(new Promise(function(t){e.requestIndex++,e.request(e.requestIndex,t)}))}},{key:"createData",value:function(){this.fetchOnlySections&&(this.fetchOnlySections=!1),this.data.articles=this.dataContainer.articles,this.data.categories=this.dataContainer.categories.sort(this.sort.bind(this)),this.data.sections=this.dataContainer.sections.sort(this.sort.bind(this)),this.dataContainer=(0,c.getEmptyDataObject)(),this.excludeFields(),this.onDataFetched(),this.saveToCache()}},{key:"excludeFields",value:function(t){var i=this;if(!t)return this.excludeFields("articles"),this.excludeFields("sections"),void this.excludeFields("categories");this.options.excludeFields&&this.options.excludeFields[t]&&(this.data[t]=this.data[t].map(function(e){return i.options.excludeFields[t].forEach(function(t){e[t]&&delete e[t]}),e}))}},{key:"sort",value:function(t,e){return"title"===this.options.sortBy?t.name>e.name?1:t.name<e.name?-1:0:t[this.options.sortBy]>e[this.options.sortBy]?1:t[this.options.sortBy]<e[this.options.sortBy]?-1:0}},{key:"request",value:function(e,i){var n=this;$.ajax({url:this.getApiUrl(),data:{include:this.fetchOnlySections?"":this.options.fetch.join().replace(/\s+/g,""),locale:this.options.hcUrl?"en-us":a.LOCALE,sort_by:this.fetchOnlySections?"position":this.options.sortBy,per_page:100,page:e,request_id:89999*Math.random()+1e4},cache:!0,success:function(t){if(t.articles&&(n.dataContainer.articles=n.dataContainer.articles.concat(t.articles)),t.categories&&(n.dataContainer.categories=(0,c.mergeArrays)(n.dataContainer.categories,t.categories)),t.sections&&(n.dataContainer.sections=(0,c.mergeArrays)(n.dataContainer.sections,t.sections),n.fetchOnlySections||t.sections.forEach(function(t){t.parent_section_id&&-1===n.parentSectionsId.indexOf(t.parent_section_id)&&n.parentSectionsId.push(t.parent_section_id)})),t.next_page){if(n.requestsCount||(n.requestsCount=t.page_count-t.page),n.fetchOnlySections)return n.request(t.page+1,i);i(!1)}else n.requestTotalIndex||-1!==n.options.fetch.indexOf("articles")&&!t.articles.length||(n.requestTotalIndex=e),i(!0)},error:function(){i(!0)}})}},{key:"getApiUrl",value:function(){var t=this.fetchOnlySections?a.GET_SECTIONS_URL:-1!==this.options.fetch.indexOf("articles")?a.GET_ARTICLES_URL:-1!==this.options.fetch.indexOf("sections")?a.GET_SECTIONS_URL:-1!==this.options.fetch.indexOf("categories")?a.GET_CATEGORIES_URL:a.GET_ARTICLES_URL;return this.options.hcUrl?(0,c.checkHcUrl)(this.options.hcUrl)+t:t}},{key:"checkParentSections",value:function(){var e=this;return this.parentSectionsId.length&&this.dataContainer.sections.forEach(function(t){t=e.parentSectionsId.indexOf(t.id);-1!==t&&e.parentSectionsId.splice(t,1)}),this.fetchOnlySections=!0,0===this.parentSectionsId.length}},{key:"fetchDataFromCache",value:function(){if(this.options.cacheLifetime<1)return null;this.requestsCount=parseInt(localStorage.getItem(this.options.localStorage.requestsCount))||0;var t=localStorage.getItem(this.options.localStorage.timeout),e=t?parseInt(t):null;if(localStorage.getItem(this.options.localStorage.locale)!==(this.options.hcUrl?"en-us":a.LOCALE))return null;var i=null,t=localStorage.getItem(this.options.localStorage.data);return t&&(i=/^\s*[{[]/i.test(t)?JSON.parse(t):(t=r.default.decompressFromUTF16(t),JSON.parse(t))),!e||(new Date).getTime()>e?{data:i,timeOver:!0}:{data:i,timeOver:!1}}},{key:"saveToCache",value:function(){if(0<this.options.cacheLifetime&&(this.data.categories.length||this.data.sections.length||this.data.articles.length))try{localStorage.setItem(this.options.localStorage.data,r.default.compressToUTF16(JSON.stringify(this.data))),localStorage.setItem(this.options.localStorage.timeout,(new Date).getTime()+this.options.cacheLifetime+""),localStorage.setItem(this.options.localStorage.locale,this.options.hcUrl?"en-us":a.LOCALE),localStorage.setItem(this.options.localStorage.requestsCount,this.requestTotalIndex)}catch(t){console.error("ApiData.Error: "+t.message)}}},{key:"onDataFetched",value:function(){var t;this.dataFetched=!0,this.options.debug&&(t=this.updated?"ApiData updated":"ApiData fetched data from "+this.dataFetchFrom,console.log("%c"+t+":\narticles:   "+(this.data.articles.length||0)+"\nsections:   "+(this.data.sections.length||0)+"\ncategories: "+(this.data.categories.length||0)+("server"!==this.dataFetchFrom?"":"\nrequests:   "+this.requestIndex+"\niterations: "+this.iterationsCount)+"\ndelay:      "+this.options.delay+"\ntime:       "+((new Date).getTime()-this.startTime)+"ms","color: #2f8432")),this.$window.trigger(this.updated?a.ON_DATA_UPDATED:a.ON_DATA_FETCHED,[this.data,this.options,this.dataFetchFrom]),this.updated=!1,this.options.onDataFetched&&"function"==typeof this.options.onDataFetched&&this.options.onDataFetched(this.data,this.dataFetchFrom)}},{key:"getData",value:function(i){if(this.dataFetched)return i(this.data);this.$window.on(a.ON_DATA_FETCHED,function(t,e){return i(e)})}},{key:"subscribe",value:function(i){this.getData(i),this.$window.on(""+a.ON_DATA_UPDATED,function(t,e){return i(e)})}},{key:"updateData",value:function(){this.startTime=(new Date).getTime(),this.updated=!0,this.dataFetchFrom="server",this.requestIndex=0,this.iterationsCount=0,this.fetchDataFromServer()}},{key:"deleteData",value:function(){this.data=(0,c.getEmptyDataObject)(),localStorage.removeItem(this.options.localStorage.data),localStorage.removeItem(this.options.localStorage.timeout),localStorage.removeItem(this.options.localStorage.locale),localStorage.removeItem(this.options.localStorage.requestsCount),this.$window.trigger(a.ON_DATA_DELETED,[this.data,this.options])}}],[{key:"filterByCategoryId",value:function(t,e){return(0,u.default)(t,e)}},{key:"filterBySectionId",value:function(t,e){return(0,l.default)(t,e)}},{key:"filterByArticleId",value:function(t,e){return(0,f.default)(t,e)}},{key:"filterBySiblingsSectionsId",value:function(t,e){return(0,h.default)(t,e)}},{key:"filterBySiblingsArticlesId",value:function(t,e){return(0,d.default)(t,e)}},{key:"filterByLabelName",value:function(t,e){return(0,p.default)(t,e)}},{key:"toFlatCategoriesTree",value:function(t){return(0,g.default)(t)}},{key:"toCategoriesTree",value:function(t){return(0,y.default)(t)}},{key:"toFlatSectionsTree",value:function(t){return(0,m.default)(t)}},{key:"toSectionsTree",value:function(t){return(0,v.default)(t)}},{key:"sortBy",value:function(t,e,i){return(0,_.default)(t,e,!!i)}},{key:"version",get:function(){return s.version}}]),w);function w(t){!function(t){if(!(t instanceof w))throw new TypeError("Cannot call a class as a function")}(this),this.options=$.extend({},O,t),window["api_data_"+this.options.localStorage.data]||(window["api_data_"+this.options.localStorage.data]=!0,this.data=(0,c.getEmptyDataObject)(),this.dataContainer=(0,c.getEmptyDataObject)(),this.$window=$(window),this.updated=!1,this.requestIndex=0,this.requestTotalIndex=0,this.requestsCount=0,this.iterationsCount=0,this.dataFetchFrom=null,this.dataFetched=!1,this.parentSectionsId=[],this.fetchOnlySections=!1,this.startTime=(new Date).getTime(),setTimeout(this.init.bind(this),this.options.delay))}i.default=n},{"../package.json":2,"./constants":4,"./staticMethods/filterByArticleId":8,"./staticMethods/filterByCategoryId":9,"./staticMethods/filterByLabelName":10,"./staticMethods/filterBySectionId":11,"./staticMethods/filterBySiblingsArticlesId":12,"./staticMethods/filterBySiblingsSectionsId":13,"./staticMethods/sortBy":14,"./staticMethods/toCategoriesTree":15,"./staticMethods/toFlatCategoriesTree":16,"./staticMethods/toFlatSectionsTree":17,"./staticMethods/toSectionsTree":18,"./utils":19,"lz-string":1}],4:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.ON_DATA_DELETED=i.ON_DATA_UPDATED=i.ON_DATA_FETCHED=i.GET_ARTICLES_URL=i.GET_SECTIONS_URL=i.GET_CATEGORIES_URL=i.LOCALE=void 0;t=t("./utils"),i.LOCALE=(0,t.getLocale)(),i.GET_CATEGORIES_URL="/api/v2/help_center/categories.json",i.GET_SECTIONS_URL="/api/v2/help_center/sections.json",i.GET_ARTICLES_URL="/api/v2/help_center/articles.json",i.ON_DATA_FETCHED="apiDataFetched",i.ON_DATA_UPDATED="apiDataUpdated",i.ON_DATA_DELETED="apiDataDeleted"},{"./utils":19}],5:[function(t,e,i){"use strict";t("./polyfills/Promise"),t("./polyfills/ObjectAssign");var n,o=t("./ApiData"),r=(n=o)&&n.__esModule?n:{default:n},s=t("./constants");window.ApiData=r.default,$(window).on("load",function(){$._data(window,"events")[s.ON_DATA_FETCHED]&&(window.apiData=new r.default)})},{"./ApiData":3,"./constants":4,"./polyfills/ObjectAssign":6,"./polyfills/Promise":7}],6:[function(t,e,i){"use strict";Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t,e){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var i=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var r=Object.keys(Object(o)),s=0,a=r.length;s<a;s++){var c=r[s],u=Object.getOwnPropertyDescriptor(o,c);void 0!==u&&u.enumerable&&(i[c]=o[c])}}return i}})},{}],7:[function(t,e,i){!function(f){"use strict";var t,d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t=function(){function t(e){var i=this.constructor;return this.then(function(t){return i.resolve(e()).then(function(){return t})},function(t){return i.resolve(e()).then(function(){return i.reject(t)})})}var e=setTimeout;function n(){}function r(t){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(t,this)}function o(i,n){for(;3===i._state;)i=i._value;0!==i._state?(i._handled=!0,r._immediateFn(function(){var t,e=1===i._state?n.onFulfilled:n.onRejected;if(null!==e){try{t=e(i._value)}catch(t){return void a(n.promise,t)}s(n.promise,t)}else(1===i._state?s:a)(n.promise,i._value)})):i._deferreds.push(n)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===(void 0===t?"undefined":d(t))||"function"==typeof t)){var i=t.then;if(t instanceof r)return e._state=3,e._value=t,void c(e);if("function"==typeof i)return void l((n=i,o=t,function(){n.apply(o,arguments)}),e)}e._state=1,e._value=t,c(e)}catch(t){a(e,t)}var n,o}function a(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&r._immediateFn(function(){t._handled||r._unhandledRejectionFn(t._value)});for(var e=0,i=t._deferreds.length;e<i;e++)o(t,t._deferreds[e]);t._deferreds=null}function u(t,e,i){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=i}function l(t,e){var i=!1;try{t(function(t){i||(i=!0,s(e,t))},function(t){i||(i=!0,a(e,t))})}catch(t){if(i)return;i=!0,a(e,t)}}r.prototype.catch=function(t){return this.then(null,t)},r.prototype.then=function(t,e){var i=new this.constructor(n);return o(this,new u(t,e,i)),i},r.prototype.finally=t,r.all=function(e){return new r(function(o,r){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var s=Array.prototype.slice.call(e);if(0===s.length)return o([]);var a=s.length;for(var t=0;t<s.length;t++)!function e(i,t){try{if(t&&("object"===(void 0===t?"undefined":d(t))||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void n.call(t,function(t){e(i,t)},r)}s[i]=t,0==--a&&o(s)}catch(t){r(t)}}(t,s[t])})},r.resolve=function(e){return e&&"object"===(void 0===e?"undefined":d(e))&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(i){return new r(function(t,e){e(i)})},r.race=function(o){return new r(function(t,e){for(var i=0,n=o.length;i<n;i++)o[i].then(t,e)})},r._immediateFn="function"==typeof setImmediate?function(t){setImmediate(t)}:function(t){e(t,0)},r._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==f)return f;throw new Error("unable to locate global object")}();"Promise"in i?i.Promise.prototype.finally||(i.Promise.prototype.finally=t):i.Promise=r},("object"!==(void 0===i?"undefined":d(i))||void 0===e)&&"function"==typeof define&&define.amd?define(t):t()}.call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("../utils");i.default=function(t,e){var i=(0,n.getEmptyDataObject)();return i.articles=t.articles.filter(function(t){return(0,n.ifCurrentObject)(t,e)}),i.sections=(0,n.getFilteredArr)(i.articles,t.sections,"section"),i.categories=(0,n.getFilteredArr)(i.sections,t.categories,"category"),i}},{"../utils":19}],9:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("../utils");i.default=function(t,e){var i=(0,n.getEmptyDataObject)();return i.categories=t.categories.filter(function(t){return(0,n.ifCurrentObject)(t,e)}),i.sections=t.sections.filter(function(t){return(0,n.ifCurrentObject)(t,e,"category")}),i.articles=(0,n.getFilteredArr)(i.sections,t.articles,"section"),i}},{"../utils":19}],10:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("../utils");i.default=function(t,i){var e=(0,n.getEmptyDataObject)();return e.articles=t.articles.filter(function(t){if("string"==typeof i)return-1!==t.label_names.indexOf(i);for(var e=0;e<i.length;e++)if(-1!==t.label_names.indexOf(i[e]))return!0;return!1}),e.sections=(0,n.getFilteredArr)(e.articles,t.sections,"section"),e.categories=(0,n.getFilteredArr)(e.sections,t.categories,"category"),e}},{"../utils":19}],11:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("../utils");i.default=function(t,e){var i=(0,n.getEmptyDataObject)();return i.sections=t.sections.filter(function(t){return(0,n.ifCurrentObject)(t,e)}),i.articles=t.articles.filter(function(t){return(0,n.ifCurrentObject)(t,e,"section")}),i.categories=(0,n.getFilteredArr)(i.sections,t.categories,"category"),i}},{"../utils":19}],12:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n,o=t("./filterBySectionId"),r=(n=o)&&n.__esModule?n:{default:n},s=t("../utils");i.default=function(t,e){var i=[];return t.articles.filter(function(t){(0,s.ifCurrentObject)(t,e)&&-1===i.indexOf(t.section_id)&&i.push(t.section_id)}),(0,r.default)(t,i)}},{"../utils":19,"./filterBySectionId":11}],13:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n,o=t("./filterByCategoryId"),r=(n=o)&&n.__esModule?n:{default:n},s=t("../utils");i.default=function(t,e){var i=[];return t.sections.filter(function(t){(0,s.ifCurrentObject)(t,e)&&-1===i.indexOf(t.category_id)&&i.push(t.category_id)}),(0,r.default)(t,i)}},{"../utils":19,"./filterByCategoryId":9}],14:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=t("../utils");function r(t,i,n){var e,o,r=Array.from(t);return r.length&&(t="number"==typeof(e=r[0][i]),o=e&&e.match&&e.match(/^[0-9]+-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z$/),(t||o||"string"==typeof e)&&r.sort(function(t,e){t=o?new Date(t[i]).getTime():t[i],e=o?new Date(e[i]).getTime():e[i];return e<t?n?-1:1:t<e?n?1:-1:0})),r}i.default=function(t,e,i){var n=(0,o.getEmptyDataObject)();return n.categories=r(t.categories,e,i),n.sections=r(t.sections,e,i),n.articles=r(t.articles,e,i),n}},{"../utils":19}],15:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e.categories.map(function(t){return Object.assign({},t,{sections:function t(i,e,n){return i.sections.filter(function(t){return e?t.category_id===e&&!t.parent_section_id:t.parent_section_id===n}).map(function(e){return Object.assign({},e,{articles:i.articles.filter(function(t){return t.section_id===e.id}),sections:t(i,null,e.id)})})}(e,t.id)})})}},{}],16:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return t.categories.map(function(e){return Object.assign({},e,{sections:t.sections.filter(function(t){return t.category_id===e.id}).map(function(e){return Object.assign({},e,{articles:t.articles.filter(function(t){return t.section_id===e.id})})})})})}},{}],17:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return t.sections.map(function(e){return Object.assign({},e,{articles:t.articles.filter(function(t){return t.section_id===e.id})})})}},{}],18:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function t(i,e){return i.sections.filter(function(t){return e?t.parent_section_id===e:!t.parent_section_id}).map(function(e){return Object.assign({},e,{articles:i.articles.filter(function(t){return t.section_id===e.id}),sections:t(i,e.id)})})}(t)}},{}],19:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=i.mergeArrays=function(t,i){for(var e=0;e<i.length;e++)!function(e){t.filter(function(t){return t.id===i[e].id}).length||t.push(i[e])}(e);return t};i.positionSortable=function(t,e){return void 0!==t.position&&void 0!==e.position?t.position>e.position?1:t.position<e.position?-1:0:0},i.checkHcUrl=function(t){return"https://"+t.replace(/(?:http[s]?:)?(?:\/\/)?([^/]+)[\S]*/,"$1")},i.getEmptyDataObject=function(){return{categories:[],sections:[],articles:[]}},i.ifCurrentObject=function(t,e,i){i=i?i+"_":"";return"number"==typeof e?t[i+"id"]===e:-1!==e.indexOf(t[i+"id"])},i.getFilteredArr=function(n,o,r){for(var s=[],t=0;t<n.length;t++)!function(e){var i=!!n[e][r+"_id"],t=o.filter(function(t){return t[i?"id":r+"_id"]===n[e][i?r+"_id":"id"]});s=a(s,t)}(t);return s},i.getLocale=function(){var t=/[?&]locale=([A-Za-z0-9-]+)/i,e=/\/hc\/([A-Za-z0-9-]+)[\S]*/i;return window.location.search&&window.location.search.match(t)?window.location.search.replace(t,"$1"):window.location.pathname.match(e)?window.location.pathname.replace(e,"$1"):"en-us"}},{}]},{},[5]);