(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[661],{5414:function(e,t,n){"use strict";n.d(t,{q:function(){return me}});var r,o,i,a,c=n(5697),u=n.n(c),l=n(4839),s=n.n(l),f=n(3302),p=n.n(f),d=n(7294),h=n(6494),m=n.n(h),b="bodyAttributes",g="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",x="http-equiv",k="innerHTML",C="itemprop",S="name",A="property",O="rel",j="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",R="defer",M="encodeSpecialCharacters",N="onChangeClientState",z="titleTemplate",H=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),_=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,v.TITLE),n=Q(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,L);return t||r||void 0},V=function(e){return Q(e,N)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===O&&"canonical"===e[n].toLowerCase()||u===O&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==k&&c!==T&&c!==C||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(v.BODY,r),ue(v.HTML,o),ce(f,p);var d={baseTag:le(v.BASE,n),linkTags:le(v.LINK,i),metaTags:le(v.META,a),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(v.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,o=fe(n,r),[d.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===k||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===k||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(g,o,r),link:pe(v.LINK,i,r),meta:pe(v.META,a,r),noscript:pe(v.NOSCRIPT,c,r),script:pe(v.SCRIPT,u,r),style:pe(v.STYLE,l,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},he=s()((function(e){return{baseTag:$([E,P],e),bodyAttributes:Z(b,e),defer:Q(e,R),encode:Q(e,M),htmlAttributes:Z(g,e),linkTags:J(v.LINK,[O,E],e),metaTags:J(v.META,[S,w,x,A,C],e),noscriptTags:J(v.NOSCRIPT,[k],e),onChangeClientState:V(e),scriptTags:J(v.SCRIPT,[j,k],e),styleTags:J(v.STYLE,[T],e),title:G(e),titleAttributes:Z(y,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),me=(o=he,a=i=function(e){function t(){return q(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case v.BODY:return U({},o,{bodyAttributes:U({},i)});case v.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind},3302:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},967:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),o=n(5444),i=function(){var e=(0,r.useState)(!0),t=e[0],n=e[1],i=(0,r.useCallback)((function(){var e=window.pageYOffset,t=window.innerHeight;n(!(e>=t))}),[]);(0,r.useEffect)((function(){if("/"===window.location.pathname)return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[i]),(0,r.useEffect)((function(){"/"===window.location.pathname?n(!0):n(!1)}),[]);var a=t?{paddingTop:"2.5vh",paddingBottom:"2.5vh",position:"absolute",top:"90vh",left:"0",transition:"top .2s",color:"white",minWidth:"400px"}:{transition:"color .2s",backgroundColor:"rgba(255, 255, 255, 0.5)",borderBottom:"#e9e9e9 1px solid",zIndex:"3",backdropFilter:" blur(5px)",paddingTop:"2.5vh",paddingBottom:"2.5vh",position:"fixed",top:0,left:0,minWidth:"400px"},c=t?{top:"0",filter:"opacity(.6) drop-shadow(0 0 0 white)",position:"absolute",width:"26px",height:"26px",color:"white",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/103412811-4ba46f80-4bba-11eb-94b9-454fc8d16d8d.png)",backgroundSize:"contain",backgroundRepeat:"no-repeat"}:{position:"absolute",width:"26px",height:"26px",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/103412811-4ba46f80-4bba-11eb-94b9-454fc8d16d8d.png)",backgroundSize:"contain",top:"0",backgroundRepeat:"no-repeat"},u=t?{lineHeight:"1",position:"absolute",width:"90px",left:"30px",color:"white",fontSize:"27px"}:{lineHeight:"1",fontSize:"27px",position:"absolute",color:"black",width:"90px",left:"30px"},l=t?{float:"left",marginRight:"1rem",textDecoration:"none",color:"white",transition:"color .1s linear"}:{float:"left",marginRight:"1rem",textDecoration:"none",color:"black",transition:"color .1s linear"};return r.createElement("header",{style:a},r.createElement("div",null,r.createElement(o.rU,{to:"/",style:{position:"relative",textDecoration:"none"}},r.createElement("div",{style:c}),r.createElement("div",{className:"header-title",style:u},r.createElement("span",null,"Ho'space")))),r.createElement("div",{style:{width:"261px",margin:"0",padding:"0",listStyle:"none",float:"right"}},r.createElement("li",null,r.createElement(o.rU,{className:"header-link",style:l,to:"/about/"},"About")),r.createElement("li",null,r.createElement(o.rU,{className:"header-link",style:l,to:"/projects/"},"Projects")),r.createElement("li",null,r.createElement(o.rU,{className:"header-link",style:l,to:"/blog/"},"Blog")),r.createElement("li",null,r.createElement(o.rU,{className:"header-link",style:l,to:"/contact/"},"Contact"))))},a=function(){return r.createElement("footer",{style:{fontSize:"12px",position:"absolute",bottom:"0",backgroundColor:"#e9e9e9",height:"60px"}},r.createElement("div",{style:{fontWeight:"600",float:"left"}},"Follow me in "),r.createElement("a",{href:"https://github.com/Ho-s"},r.createElement("div",{style:{margin:"0 2px 0px 20px",float:"left",width:"15px",height:"15px",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/103414512-a1304a80-4bc1-11eb-93ee-b4bd31af9e57.png)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}),r.createElement("div",{style:{fontWeight:"600",color:"black",float:"left"}},"Github")),r.createElement("a",{href:"mailto:kjcoco13@gmail.com"},r.createElement("div",{style:{margin:"0 2px 0px 20px",float:"left",width:"15px",height:"15px",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/103415271-bd81b680-4bc4-11eb-8ddc-08f84d52f406.png)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}),r.createElement("div",{style:{fontWeight:"600",color:"black",float:"left"}},"Gmail")),r.createElement("a",{href:"https://www.facebook.com/byungho.joo.5/"},r.createElement("div",{style:{margin:"0 2px 0px 20px",float:"left",width:"15px",height:"15px",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/104439445-76d48900-55d4-11eb-823e-5d1d60b92497.png)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}),r.createElement("div",{style:{fontWeight:"600",color:"black",float:"left"}},"Facebook")),r.createElement("div",{style:{marginTop:"30px"}},"© 2021 Ho' Space. Powered by graphql & Gatsby."))},c=function(e){var t=e.children,n=(0,r.useState)("-40px"),o=n[0],c=n[1],u=(0,r.useState)(!0),l=u[0],s=u[1];(0,r.useEffect)((function(){var e=function(){s(!1)};return window.addEventListener("load",e()),function(){window.removeEventListener("load",e())}}),[l]);var f=(0,r.useCallback)((function(){var e=window.pageYOffset,t=window.innerHeight;c(e>=t/2?"30px":"-40px")}),[]);(0,r.useEffect)((function(){return window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}}),[f]);return r.createElement(r.Fragment,null,l&&r.createElement("div",{style:{position:"fixed",width:"100vw",height:"100vh",backgroundColor:"white",zIndex:"4",top:0}},r.createElement("div",{style:{margin:"calc(50vh - 200px) auto",width:"400px",height:"400px",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/104911800-c3520700-59ce-11eb-8448-35ab98a92bc6.gif)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})),r.createElement(i,null),r.createElement("div",{style:{margin:"0 auto",minWidth:"330px",maxWidth:"990px",padding:"0 1.0875rem 1.45rem",marginTop:"10vh"}},r.createElement("main",{style:{}},t)),r.createElement("button",{onClick:function(){window.scrollTo(0,0)},className:"toTheTop",style:{bottom:o,border:"none",zIndex:"3",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/104469041-7ef3ef00-55fb-11eb-873f-3d13378914e9.png)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"20px",cursor:"pointer",textAlign:"center",position:"fixed",transition:"all linear .2s",right:"30px",width:"38px",height:"38px",backgroundColor:"#e9e9e9",borderRadius:"38px",fontSize:0,outline:"none"}},"-"),r.createElement(a,null))}},6179:function(e,t,n){"use strict";var r=n(7294),o=n(5414),i=n(5444);function a(e){var t,n,a=e.description,c=e.lang,u=e.meta,l=e.title,s=(0,i.K2)("63159454").site,f=a||s.siteMetadata.description,p=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(o.q,{htmlAttributes:{lang:c},title:l,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:f},{property:"og:title",content:l},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:l},{name:"twitter:description",content:f}].concat(u)})}a.defaultProps={lang:"en",meta:[],description:""},t.Z=a}}]);
//# sourceMappingURL=181ba68079bc4ad569754be1b7b740091c9e2bbb-139b412e20c42b69a985.js.map