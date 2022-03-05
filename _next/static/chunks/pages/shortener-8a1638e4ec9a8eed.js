(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{4270:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shortener",function(){return t(9389)}])},9389:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(5893),i=t(7294),a=t(1954),o=t(5611),l=t(7058);var s=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)};s.ALLOWED_PROTOCOL="https://",s.ENDPOINT="https://t.ly/api/v1/link/shorten",s.HEADERS={"Content-Type":"application/json"};var c=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)};c.SHORTENER_URL="^((ftp?:|https?:)//(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})$";var u=t(9234),d=t(3764),f=t(537),h=t(796),p=t(7671),b=t(8451),v=t(4888),g=t.n(v),m=function(){var e=(0,l.$)().t,n=(0,o.e1)().addToast,t=(0,i.useState)(""),v=t[0],m=t[1],y=(0,i.useState)(""),x=y[0],w=y[1],O=!new RegExp(c.SHORTENER_URL).test(s.ALLOWED_PROTOCOL+v);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:g().shortenerContainer+" container",children:[(0,r.jsx)("div",{children:(0,r.jsx)(d.Z,{header:{icon:"ic:twotone-add-link",iconInline:!0,iconFilterStyle:!1,title:"shortener.title"}})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(h.Z,{input:{label:"shortener.fileds.urlToShort.label",placeholder:u.M.URL,labelLeft:s.ALLOWED_PROTOCOL,type:p.n$.text,size:p.fz.xlarge,clearable:!0,value:v,tabIndex:1,onChange:function(e){m(e.target.value)},onDelete:function(e){m(""),w("")}}})}),(0,r.jsx)("div",{children:(0,r.jsx)(h.Z,{input:{id:"shortedUrlId",label:"shortener.fileds.shortedUrl.label",placeholder:"shortener.fileds.shortedUrl.placeholder",type:p.n$.text,size:p.fz.xlarge,clearable:!1,disabled:!0,value:x,tabIndex:2,onChange:function(e){w(e.target.value)}}})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"actions",children:[(0,r.jsx)(f.Z,{button:{label:"shortener.actions.short.label",title:O?"shortener.actions.short.disabledTitle":"shortener.actions.short.title",color:b.r.primary,tabIndex:2,disabled:O,icon:(0,r.jsx)(a.JO,{icon:"ic:twotone-add-link",inline:!0}),onPress:function(){var e=s.ALLOWED_PROTOCOL+v;if(new RegExp(c.SHORTENER_URL).test(e)){m(v.toLocaleLowerCase());var n={method:"POST",headers:s.HEADERS,body:JSON.stringify({long_url:e})};fetch(s.ENDPOINT,n).then((function(e){return e.json()})).then((function(e){w(e.short_url)})).catch((function(e){console.log(e)}))}else console.log("FORMAT ERROR")}}}),(0,r.jsx)(f.Z,{button:{label:"shortener.actions.copy.label",title:0===x.toString().trim().length?"shortener.actions.copy.disabledTitle":"shortener.actions.copy.title",color:b.r.primary,tabIndex:2,disabled:0===x.toString().trim().length,icon:(0,r.jsx)(a.JO,{icon:"ic:twotone-copy-all"}),onPress:function(){navigator.clipboard.writeText(x).then((function(){n(e("shortener.messages.addClipboardSucces"),{appearance:"success"})}),(function(){n(e("shortener.messages.addClipboardError"),{appearance:"error"})}))}}})]})})]})})}},537:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(5893),i=(t(7294),t(7058)),a=t(8451);function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s="unnamed",c=function e(n,t,r,i,a,l,s,c,u,d,f){o(this,e),this.label=n,this.color=t,this.onPress=r,this.title=i,this.type=a,this.className=l,this.tabIndex=s,this.accesKeys=c,this.disabled=u,this.disable=d,this.icon=f},u=function(){function e(){o(this,e)}var n,t,r;return n=e,r=[{key:"mapObject",value:function(e){var n,t,r,i,o,l,u,d,f;return new c(e.label&&e.label.length>0?e.label:s,null!==(n=e.color)&&void 0!==n?n:a.r.primary,e.onPress,null!==(r=null!==(t=e.title)&&void 0!==t?t:e.label)&&void 0!==r?r:s,null!==(i=e.type)&&void 0!==i?i:a.L.button,null!==(o=e.className)&&void 0!==o?o:"",null!==(l=e.tabIndex)&&void 0!==l?l:-1,e.accesKeys,null!==(u=e.disabled)&&void 0!==u&&u,null!==(d=e.disable)&&void 0!==d?d:void 0,null!==(f=e.icon)&&void 0!==f?f:void 0)}}],(t=null)&&l(n.prototype,t),r&&l(n,r),e}(),d=t(5118),f=t.n(d),h=function(e){var n,t=e.button,a=(0,i.$)().t,o=null!==(n=(t=u.mapObject(t)).title)&&void 0!==n?n:"",l=t.label,s=(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{type:t.type,className:"ripple button "+t.className+" "+f().button,"data-disabled":t.disabled,"data-color":t.color,"data-tip":a(o),title:a(o),tabIndex:t.tabIndex,disabled:t.disabled,onClick:t.onPress,children:(0,r.jsx)("span",{children:a(l)})})}),c=(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("button",{type:t.type,className:"ripple button "+t.className+" "+f().button,"data-disabled":t.disabled,"data-color":t.color,"data-tip":a(o),title:a(o),tabIndex:t.tabIndex,disabled:t.disabled,onClick:t.onPress,children:[(0,r.jsxs)("span",{children:[" ",t.icon]}),(0,r.jsx)("span",{children:a(l)})]})});return t.icon?c:s}},796:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(5893),i=t(7294),a=t(1954),o=t(7058),l=t(7671);function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function e(n,t,r,i,a,o,l,c,u,d,f,h,p,b,v,g,m,y){s(this,e),this.label=n,this.type=t,this.id=r,this.value=i,this.placeholder=a,this.labelLeft=o,this.size=l,this.customSize=c,this.readOnly=u,this.disabled=d,this.required=f,this.tabIndex=h,this.clearable=p,this.onFocus=b,this.onBlur=v,this.onChange=g,this.onDelete=m,this.error=y},d=function(){function e(){s(this,e)}var n,t,r;return n=e,r=[{key:"mapObject",value:function(e,n){var t,r,i,a,o,s,c,d,f,h,p,b,v;return new u(e.label&&e.label.length>0?e.label:"unnamed",null!==(t=e.type)&&void 0!==t?t:l.n$.text,null!==(r=e.id)&&void 0!==r?r:e.label.trim().toLowerCase(),null!==(i=e.value)&&void 0!==i?i:"",null!==(a=e.placeholder)&&void 0!==a?a:"...",null!==(o=e.labelLeft)&&void 0!==o?o:"",null!==(s=e.size)&&void 0!==s?s:l.fz.medium,null!==(c=e.customSize)&&void 0!==c?c:void 0,null!==(d=e.readOnly)&&void 0!==d&&d,null!==(f=e.disabled)&&void 0!==f&&f,null!==(h=e.required)&&void 0!==h&&h,null!==(p=e.tabIndex)&&void 0!==p?p:0,null!==(b=e.clearable)&&void 0!==b&&b,e.onFocus,e.onBlur,e.onChange,e.onDelete,e.required?n("app.errors.required"):null!==(v=e.error)&&void 0!==v?v:"")}}],(t=null)&&c(n.prototype,t),r&&c(n,r),e}(),f=t(4557),h=t.n(f),p=function(e){var n,t=e.input,s=(0,i.useState)(!1),c=s[0],u=s[1],f=(0,o.$)().t,p=(t=d.mapObject(t,f)).label,b=null!==(n=t.placeholder)&&void 0!==n?n:"",v=function(e){switch(e.type){case l.z7.blur:null===t||void 0===t||t.onBlur,""===t.value&&u(!0);break;case l.z7.focus:null===t||void 0===t||t.onFocus,u(!1);break;case l.z7.change:t.onChange(e)}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:h().inputContainer,children:[(0,r.jsx)("span",{"data-show":c,children:t.error}),(0,r.jsx)("span",{"data-index":t.tabIndex,children:t.tabIndex}),(0,r.jsx)("input",{id:t.id,type:"text",autoComplete:"off",placeholder:f(b),value:t.value,readOnly:t.readOnly,disabled:t.disabled,tabIndex:t.tabIndex,onBlur:v,onFocus:v,onChange:v}),(0,r.jsx)("label",{htmlFor:t.id,children:f(p)}),function(){if(t.clearable)return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{role:"button","aria-label":"Clear input",onClick:t.onDelete,children:(0,r.jsx)(a.JO,{icon:"uim:times-circle"})})})}()]})})}},3764:function(e,n,t){"use strict";var r=t(5893),i=(t(7294),t(1954)),a=t(7058),o=t(2320),l=t.n(o);n.Z=function(e){var n=e.header,t=(0,a.$)().t,o=n.title;return(0,r.jsxs)("div",{className:l().title,children:[(0,r.jsx)(i.JO,{icon:n.icon,inline:n.iconInline,"data-filter":n.iconFilterStyle}),(0,r.jsx)("span",{children:t(o)})]})}},9234:function(e,n,t){"use strict";t.d(n,{M:function(){return r}});var r=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)};r.URL="app.eg.url",r.TEXT="app.eg.text",r.WIFI="app.eg.wifi"},8451:function(e,n,t){"use strict";var r,i;t.d(n,{L:function(){return r},r:function(){return i}}),function(e){e.button="button",e.submit="submit",e.reset="reset"}(r||(r={})),function(e){e.primary="primary",e.secondary="secondary",e.danger="danger"}(i||(i={}))},7671:function(e,n,t){"use strict";var r,i,a,o;t.d(n,{n$:function(){return r},fz:function(){return i},z7:function(){return o}}),function(e){e.button="button",e.checkbox="checkbox",e.color="color",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.file="file",e.hidden="hidden",e.image="image",e.month="month",e.number="number",e.password="password",e.radio="radio",e.range="range",e.reset="reset",e.search="search",e.submit="submit",e.tel="tel",e.text="text",e.time="time",e.url="url",e.week="week"}(r||(r={})),function(e){e.xsmall="xs",e.small="sm",e.medium="md",e.large="lg",e.xlarge="xl"}(i||(i={})),function(e){e.input="input",e.textarea="textarea"}(a||(a={})),function(e){e.focus="focus",e.blur="blur",e.change="change"}(o||(o={}))},4888:function(e){e.exports={shortenerContainer:"shortener_shortenerContainer__01vL4"}},5118:function(e){e.exports={button:"button_button__TRpxX"}},4557:function(e){e.exports={inputContainer:"input_inputContainer__uZqbV"}},2320:function(e){e.exports={title:"module-header_title__iGf01"}},7058:function(e,n,t){"use strict";t.d(n,{$:function(){return g}});var r=t(3878);var i=t(1563),a=t(5267);function o(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(s){l=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(l)throw i}}return a}}(e,n)||(0,i.Z)(e,n)||(0,a.Z)()}var l=t(4942),s=t(7294),c=t(8718);function u(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var d={};function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&d[n[0]]||("string"===typeof n[0]&&(d[n[0]]=new Date),u.apply(void 0,n))}function h(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function p(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return f("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],i=!!n.options&&n.options.fallbackLng,a=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!o(r,e)||i&&!o(a,e))))}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,s.useContext)(c.OO)||{},i=r.i18n,a=r.defaultNS,l=t||i||(0,c.nI)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new c.zv),!l){f("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}l.options.react&&void 0!==l.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=v(v(v({},(0,c.JP)()),l.options.react),n),g=b.useSuspense,m=b.keyPrefix,y=e||a||l.options&&l.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(y);var x=(l.isInitialized||l.initializedStoreOnce)&&y.every((function(e){return p(e,l,b)}));function w(){return l.getFixedT(null,"fallback"===b.nsMode?y:y[0],m)}var O=(0,s.useState)(w),j=o(O,2),C=j[0],E=j[1],_=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=b.bindI18n,n=b.bindI18nStore;function t(){_.current&&E(w)}return _.current=!0,x||g||h(l,y,(function(){_.current&&E(w)})),e&&l&&l.on(e,t),n&&l&&l.store.on(n,t),function(){_.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,t)})),n&&l&&n.split(" ").forEach((function(e){return l.store.off(e,t)}))}}),[l,y.join()]);var I=(0,s.useRef)(!0);(0,s.useEffect)((function(){_.current&&!I.current&&E(w),I.current=!1}),[l]);var N=[C,l,x];if(N.t=C,N.i18n=l,N.ready=x,x)return N;if(!x&&!g)return N;throw new Promise((function(e){h(l,y,(function(){e()}))}))}}},function(e){e.O(0,[774,888,179],(function(){return n=4270,e(e.s=n);var n}));var n=e.O();_N_E=n}]);