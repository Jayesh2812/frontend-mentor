(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3043)}])},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,s=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(o){s=!0,a=o}finally{try{t||null==c.return||c.return()}finally{if(s)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var s,a=(s=r(7294))&&s.__esModule?s:{default:s},i=r(6273),c=r(387),o=r(7190);var l={};function d(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var s=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(s?"%"+s:"")]=!0}}var u=function(e){var n,r=!1!==e.prefetch,s=c.useRouter(),u=a.default.useMemo((function(){var n=t(i.resolveHref(s,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?i.resolveHref(s,e.as):a||r}}),[s,e.href,e.as]),h=u.href,f=u.as,m=e.children,v=e.replace,_=e.shallow,x=e.scroll,p=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var j=(n=a.default.Children.only(m))&&"object"===typeof n&&n.ref,N=t(o.useIntersection({rootMargin:"200px"}),2),g=N[0],k=N[1],y=a.default.useCallback((function(e){g(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,g]);a.default.useEffect((function(){var e=k&&r&&i.isLocalURL(h),n="undefined"!==typeof p?p:s&&s.locale,t=l[h+"%"+f+(n?"%"+n:"")];e&&!t&&d(s,h,f,{locale:n})}),[f,h,k,p,r,s]);var b={ref:y,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,s,a,c,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[s?"replace":"push"](r,t,{shallow:a,locale:o,scroll:c}))}(e,s,h,f,v,_,x,p)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(h)&&d(s,h,f,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof p?p:s&&s.locale,L=s&&s.isLocaleDomain&&i.getDomainLocale(f,w,s&&s.locales,s&&s.domainLocales);b.href=L||i.addBasePath(i.addLocale(f,w,s&&s.defaultLocale))}return a.default.cloneElement(n,b)};n.default=u},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,s=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(o){s=!0,a=o}finally{try{t||null==c.return||c.return()}finally{if(s)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,o=s.useRef(),l=t(s.useState(!1),2),d=l[0],u=l[1],h=s.useCallback((function(e){o.current&&(o.current(),o.current=void 0),r||d||e&&e.tagName&&(o.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:s,elements:t}),r}(r),s=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(s))}}(e,(function(e){return e&&u(e)}),{rootMargin:n}))}),[r,n,d]);return s.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return u(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[h,d]};var s=r(7294),a=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},3043:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return T}});var t=r(5893),s=r(1664),a=r(7294),i=r(8417),c=r.n(i);var o=function(){return(0,t.jsxs)("section",{className:c()["hero-home"],children:[(0,t.jsx)("h1",{className:c()["hero-title"],children:"More than just shorter links"}),(0,t.jsx)("h2",{className:c()["hero-description"],children:"Build your brand\u2019s recognition and get detailed insights on how your links are performing."}),(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:c()["cta-btn"],children:"Get Started"})})]})},l=r(5666),d=r.n(l);var u=function(e){return function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return(r=r.map((function(e){return e.split(" ")})).flat()).map((function(n){return e[n]})).join(" ")}},h=r(7912),f=r.n(h),m=r(1308),v=r(763);function _(e,n,r,t,s,a,i){try{var c=e[a](i),o=c.value}catch(l){return void r(l)}c.done?n(o):Promise.resolve(o).then(t,s)}var x=function(){var e=(0,a.useState)(""),n=e[0],r=e[1],s=(0,a.useState)(""),i=s[0],c=s[1],o=(0,m.Z)(),l=(o.state,o.dispatch),h=o.ACTIONS,x=(0,v.Z)().copy,p=u(f()),j=(0,a.useRef)();return(0,t.jsx)("section",{className:p("main-activity"),children:(0,t.jsxs)("div",{className:p("shorten-wrapper"),children:[(0,t.jsx)("input",{ref:j,type:"text",name:"",id:"",className:f()["actual-url"],value:n,onChange:function(e){return r(e.target.value)},placeholder:"Shorten a link here..."}),(0,t.jsx)("button",{className:p("shorten-btn"),onClick:function(e){return n=d().mark((function n(){return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=5;break}return c("Please add a link"),j.current.classList.add(p("input-error")),j.current.focus(),n.abrupt("return");case 5:fetch("https://api.shrtco.de/v2/shorten?url=".concat(e)).then((function(e){return e.json()})).then((function(n){if(n.ok){var r=n.result.full_short_link;x(r),c("Shortened link copied"),l({type:h.ADD,payload:{actualLink:e,shortenedLink:r}})}else c(n.error)}));case 6:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,s){var a=n.apply(e,r);function i(e){_(a,t,s,i,c,"next",e)}function c(e){_(a,t,s,i,c,"throw",e)}i(void 0)}))};var n}(n),children:"Shorten It!"}),(0,t.jsx)("span",{className:f()["error-msg"],children:(0,t.jsxs)("em",{children:[" ",i," "]})})]})})},p=r(4660),j=r.n(p);var N=function(){var e=(0,a.useState)([]),n=(e[0],e[1],u(j())),r=(0,m.Z)(),s=r.state,i=(r.dispatch,r.ACTIONS,(0,v.Z)()),c=i.copy;return i.paste,(0,t.jsx)("section",{className:n("previous-links"),children:s&&s.map((function(e){var r,s=e.actualLink,a=e.shortenedLink;return(0,t.jsxs)("div",{className:n("previous-link"),children:[(0,t.jsx)("h2",{className:j()["actual-link"],children:s}),(0,t.jsx)("h2",{className:j()["shortened-link"],children:a}),(0,t.jsx)("button",{className:n("btn copy-btn"),onClick:(r=a,function(e){e.target.innerHTML="Copied!",e.target.classList.add(n("copied-btn")),c(r),setTimeout((function(){e.target.innerHTML="Copy",e.target.classList.remove(n("copied-btn"))}),1e3)}),children:"Copy"})]},a)}))})},g=r(4710),k=r.n(g);var y=function(){var e=u(k());return(0,t.jsxs)("section",{className:e("statistics"),children:[(0,t.jsx)("h2",{className:e("section-title"),children:"Advanced Statistics"}),(0,t.jsx)("h3",{className:e("section-description"),children:"Track how your links are performing across the web with our advanced statistics dashboard."}),(0,t.jsxs)("div",{className:e("cards"),children:[(0,t.jsxs)("div",{className:e("card"),children:[(0,t.jsx)("h4",{className:e("card-title"),children:"Brand Recognition"}),(0,t.jsx)("p",{className:e("card-description"),children:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content."})]}),(0,t.jsxs)("div",{className:e("card"),children:[(0,t.jsx)("h4",{className:e("card-title"),children:"Detailed Records"}),(0,t.jsx)("p",{className:e("card-description"),children:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."})]}),(0,t.jsxs)("div",{className:e("card"),children:[(0,t.jsx)("h4",{className:e("card-title"),children:" Fully Customizable"}),(0,t.jsx)("p",{className:e("card-description"),children:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})]})]})]})},b=r(991),w=r.n(b);var L=function(){return(0,t.jsx)("header",{children:(0,t.jsxs)("nav",{className:w().navbar,children:[(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:w().logo,children:(0,t.jsx)("img",{src:"images/logo.svg"})})}),(0,t.jsx)("div",{tabIndex:1,className:w().burger,onClick:function(e){return e.target.classList.toggle(w().active)},onFocus:function(e){return e.target.classList.add(w().active)},onBlur:function(e){return e.target.classList.remove(w().active)}}),(0,t.jsxs)("ul",{className:w().navLinks,children:[(0,t.jsx)("li",{className:w().navItem,children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{className:w().navLink,children:"Features"})})}),(0,t.jsx)("li",{className:w().navItem,children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{className:w().navLink,children:"Pricing"})})}),(0,t.jsx)("li",{className:w().navItem,children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{className:w().navLink,children:"Resources"})})}),(0,t.jsx)("li",{className:"".concat(w().navItem," ").concat(w().login),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{className:w().navLink,children:"Login"})})}),(0,t.jsx)("li",{className:"".concat(w().navItem," ").concat(w().signup),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{className:w().navLink,children:"Sign Up"})})})]})]})})},C=r(1327),F=r.n(C),S=function(e){var n=e.className;return(0,t.jsx)("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:(0,t.jsx)("path",{fill:"#FFF",d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})})},I=function(e){var n=e.className;return(0,t.jsx)("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:(0,t.jsx)("path",{fill:"#FFF",d:"M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"})})},M=function(e){var n=e.className;return(0,t.jsx)("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"20",children:(0,t.jsx)("path",{fill:"#FFF",d:"M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"})})},H=function(e){var n=e.className;return(0,t.jsx)("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:(0,t.jsx)("path",{fill:"#FFF",d:"M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"})})};var A=function(){var e=u(F());return(0,t.jsxs)("footer",{className:e("footer"),children:[(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:F().logo,children:(0,t.jsx)("img",{src:"images/logo-white.svg"})})}),(0,t.jsxs)("ul",{className:e("footer-links"),children:[(0,t.jsx)("h3",{className:e("footer-links-title"),children:"Features"}),(0,t.jsx)("li",{className:e("footer-item"),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:e("footer-link"),children:"Link Shortening"})})}),(0,t.jsx)("li",{className:e("footer-item"),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:e("footer-link"),children:"Branded Links"})})}),(0,t.jsx)("li",{className:e("footer-item"),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:e("footer-link"),children:"Analytics"})})})]}),(0,t.jsxs)("ul",{className:e("footer-links"),children:[(0,t.jsx)("h3",{className:e("footer-links-title"),children:"Resources"}),(0,t.jsx)("li",{className:e("footer-item"),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:e("footer-link"),children:"Blog"})})}),(0,t.jsx)("li",{className:e("footer-item"),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:e("footer-link"),children:"Developers"})})}),(0,t.jsx)("li",{className:e("footer-item"),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:e("footer-link"),children:"Support"})})})]}),(0,t.jsxs)("ul",{className:e("footer-links"),children:[(0,t.jsx)("h3",{className:e("footer-links-title"),children:"Company"}),(0,t.jsx)("li",{className:e("footer-item"),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:e("footer-link"),children:"About"})})}),(0,t.jsx)("li",{className:e("footer-item"),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:e("footer-link"),children:"Our Team"})})}),(0,t.jsx)("li",{className:e("footer-item"),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:e("footer-link"),children:"Careers"})})}),(0,t.jsx)("li",{className:e("footer-item"),children:(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:e("footer-link"),children:"Contact"})})})]}),(0,t.jsxs)("div",{className:e("social-media"),children:[(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",children:(0,t.jsx)(I,{className:e("social-media-icon")})})}),(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",children:(0,t.jsx)(M,{className:e("social-media-icon")})})}),(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",children:(0,t.jsx)(H,{className:e("social-media-icon")})})}),(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",children:(0,t.jsx)(S,{className:e("social-media-icon")})})})]})]})},E=r(6330),z=r.n(E);var R=function(){var e=u(z());return(0,t.jsxs)("section",{className:e("cta-section"),children:[(0,t.jsx)("h2",{className:e("message"),children:"Boost your links today"}),(0,t.jsx)(s.default,{href:"",children:(0,t.jsx)("a",{href:"",className:e("cta-btn btn"),children:"Get Started"})})]})};var T=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L,{}),(0,t.jsx)(o,{}),(0,t.jsx)(x,{}),(0,t.jsx)(N,{}),(0,t.jsx)(y,{}),(0,t.jsx)(R,{}),(0,t.jsx)(A,{})]})}},6330:function(e){e.exports={"cta-section":"Cta_cta-section__AI53J",message:"Cta_message__yVn4Y","cta-btn":"Cta_cta-btn__rFuih"}},1327:function(e){e.exports={footer:"Footer_footer___O5Nl","footer-links":"Footer_footer-links__KTKzb","footer-links-title":"Footer_footer-links-title__5OwmA","footer-item":"Footer_footer-item__7w5Fp","footer-link":"Footer_footer-link__XFqEo","social-media":"Footer_social-media__dnfk7","social-media-icon":"Footer_social-media-icon__7g7Eg"}},8417:function(e){e.exports={"hero-home":"HeroHome_hero-home__eXiC7","hero-title":"HeroHome_hero-title__apHiA","hero-description":"HeroHome_hero-description__4anm_","cta-btn":"HeroHome_cta-btn__4_xWT"}},4660:function(e){e.exports={"previous-links":"LinkHistory_previous-links__Nzu5s","previous-link":"LinkHistory_previous-link__Ko34L","actual-link":"LinkHistory_actual-link__0gn0_","shortened-link":"LinkHistory_shortened-link__qyzlP","copy-btn":"LinkHistory_copy-btn__xMaJy","copied-btn":"LinkHistory_copied-btn__WdI_m"}},991:function(e){e.exports={navbar:"Navbar_navbar__wU2Rq",logo:"Navbar_logo__KLj8B",burger:"Navbar_burger__h1nVJ",active:"Navbar_active__5L8wg",navLinks:"Navbar_navLinks__lEXRL",navItem:"Navbar_navItem__wTm68",navLink:"Navbar_navLink__1tVFh",login:"Navbar_login__jJFoz",signup:"Navbar_signup__sZFci"}},7912:function(e){e.exports={"main-activity":"Shorten_main-activity__0btUK","shorten-wrapper":"Shorten_shorten-wrapper__ARsyP","actual-url":"Shorten_actual-url__XD6Xg","input-error":"Shorten_input-error__P_Xi7","shorten-btn":"Shorten_shorten-btn__4BPVz","error-msg":"Shorten_error-msg__qdMU_"}},4710:function(e){e.exports={statistics:"Statistics_statistics___33Ik","section-title":"Statistics_section-title__0URez","section-description":"Statistics_section-description__MVqh8",cards:"Statistics_cards___qwIj",card:"Statistics_card__smxOI","card-title":"Statistics_card-title__UwwaG","card-description":"Statistics_card-description__Nywz8"}},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=3685,e(e.s=n);var n}));var n=e.O();_N_E=n}]);