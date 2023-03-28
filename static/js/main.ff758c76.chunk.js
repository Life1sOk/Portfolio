(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(n,e,t){"use strict";t.d(e,"a",function(){return l}),t.d(e,"c",function(){return c}),t.d(e,"e",function(){return s}),t.d(e,"d",function(){return d}),t.d(e,"b",function(){return u});var a=t(0),i=t.n(a),r=t(8),o=t(6),l=[{id:0,icon:i.a.createElement(o.c,null),color:"#FF6D00",side:"front"},{id:1,icon:i.a.createElement(r.a,null),color:"#039BE5",side:"back"},{id:2,icon:i.a.createElement(o.d,null),color:"#FFD600",side:"left"},{id:3,icon:i.a.createElement(o.g,null),color:"#1976D2",side:"top"},{id:4,icon:i.a.createElement(r.b,null),color:"#80DEEA",side:"rigth"},{id:5,icon:i.a.createElement(o.e,null),color:"#7E57C2",side:"bottom"}],c=[{name:"HTML5",icon:i.a.createElement(o.c,null),time:.3},{name:"CSS3",icon:i.a.createElement(r.a,null),time:.6},{name:"JavaScript",icon:i.a.createElement(o.d,null),time:.9}],s=[{id:0,name:"React.js",icon:i.a.createElement(r.b,null),time:1.2},{id:2,name:"Redux",icon:i.a.createElement(o.e,null),time:1.5},{id:1,name:"Sass",icon:i.a.createElement(r.d,null),time:1.8},{id:3,name:"TypeScript",icon:i.a.createElement(o.g,null),time:2.1},{id:4,name:"Styled c.",icon:i.a.createElement(o.f,null),time:2.4}],d=[{id:1,name:"Firebase",icon:i.a.createElement(o.b,null),time:2.7}],u=(r.e,o.a,[{title:"About"},{title:"Tools"},{title:"Projects"},{title:"Contacts"}])},14:function(n,e,t){"use strict";var a,i=t(0),r=t.n(i),o=t(4),l=t(5).a.div(a||(a=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n\n    background-color: grey;\n    border-radius: 10px;\n"])));e.a=function(){return r.a.createElement(l,null)}},18:function(n,e,t){n.exports=t.p+"static/media/logo.14d9a85a.png"},22:function(n,e,t){n.exports=t(36)},33:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(17),o=t.n(r),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}var s,d,u,m,p,f,h,x,g,b,w,v=t(9),E=t(1),y=function(n){var e=n.children;return i.a.createElement(i.a.Fragment,null,e,i.a.createElement(E.a,null))},k=t(7),j=t(18),O=t.n(j),S=t(13),A=t(14),z=t(4),N=t(5),H=N.a.ol(s||(s=Object(z.a)(["\n    display: flex;\n    flex-direction: ",";\n    align-items: center;\n    justify-content: center;\n    gap: 22px;\n\n    ",";\n"])),function(n){return n.isAside?"column":"row"},function(n){return n.isAside?"\n        min-width: 299px;\n        width: 100%;\n        height: 100%;\n        background-color: var(--background);\n    ":null}),T=N.a.div(d||(d=Object(z.a)(["\n    width: 111px;\n    height: 44px;\n    margin: 0 22px;\n"]))),W=N.a.li(u||(u=Object(z.a)(["\n\n    .number {\n        margin-right: 3px;\n        color: var(--light-yellow);\n    }\n\n    ",";\n\n    :hover {\n        cursor: pointer;\n        border-bottom: 1px solid rgba(255,255,255,1);\n\n        .link {\n            color: var(--white);\n        }\n    }\n"])),function(n){return n.isAside?"\n        min-width: 255px;\n\n        font-size: 18px;\n        padding: 10px;\n        border-bottom: 1px solid transparent;\n\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n\n        .link {\n            color: var(--font-color);\n            font-size: 22px;\n        }\n    ":"\n        font-size: 11px;\n        padding: 5px 5px 8px 5px;\n        border-bottom: 1px solid rgba(255,255,255,.2);\n\n        .link {\n            font-size: 14px;\n            color: var(--font-color);\n        }\n    "}),Y=function(n){var e=n.isAside,t=n.scrollHandler;return i.a.createElement(H,{isAside:e},S.b.map(function(n,a){return i.a.createElement(W,{key:a,isAside:e,onClick:function(){return t(n.title)}},i.a.createElement("span",{className:"number"},"0".concat(a+1,". ")),i.a.createElement("span",{className:"link"},n.title))}),i.a.createElement(T,null,i.a.createElement(A.a,null)))},C=N.a.button(m||(m=Object(z.a)(["\n  height: 32px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0px;\n  z-index: 10;\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n\n  &:focus {\n    outline: none;\n  }\n  \n  & div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: white;\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    transform-origin: 1px;\n    transition: transform 0.4s ease-in-out;\n  }\n\n  & .line1 {\n    transform: ","\n  }\n\n  & .line2 {\n    transform: ","\n  }\n\n  & .line3 {\n    transform: ","\n  }\n"])),function(n){return n.open?"rotate(45deg)":"none"},function(n){return n.open?"scaleY(0)":"none"},function(n){return n.open?"rotate(-45deg)":"none"}),F=function(n){var e=n.openToggle,t=n.open;return i.a.createElement(C,{open:t,className:"burger",onClick:e,title:"burger"},i.a.createElement("div",{className:"line1"}),i.a.createElement("div",{className:"line2"}),i.a.createElement("div",{className:"line3"}))},R=N.a.div(p||(p=Object(z.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 101;\n\n    width: 100vw;\n    height: 100vh;\n\n    transform: ",";\n    transition: transform 0.4s ease-in-out;\n\n    @media only screen and (min-width: 474px) {\n        width: min(75vw, 400px);\n    };\n\n    @media only screen and (min-width: 848px) {\n        display: none;\n    };\n"])),function(n){return n.status?"translateX(0)":"translateX(100%)"}),L=N.a.div(f||(f=Object(z.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n\n    width: 100vw;\n    height: 100vh;\n    background-color: black;\n    opacity: .4;\n    z-index: 26;\n\n    @media only screen and (min-width: 848px) {\n        display: none;\n    };\n"]))),D=function(n){var e=n.isOpen,t=n.openHandler,r=n.children;return Object(a.useEffect)(function(){window.document.body.style.overflowY=e?"hidden":"scroll"},[e]),i.a.createElement(i.a.Fragment,null,e&&i.a.createElement(L,{onClick:t}),i.a.createElement(R,{status:e},r))},P=N.a.nav(h||(h=Object(z.a)(["\n    position: sticky;\n    top: 0;\n    z-index: 22;\n\n    width: 100%;\n    background-color: var(--background);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 1s;\n\n\n    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);\n    -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);\n    -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);\n\n    animation-name: animationNav;\n    animation-duration: 1s;\n    animation-direction: alternate;\n\n    @keyframes animationNav {\n        from {\n            transform: translateY(-100%);\n        }\n\n        to {\n            transform: translateY(0);\n        }\n    };\n"]))),B=N.a.div(x||(x=Object(z.a)(["\n    min-width: 320px;\n    max-width: 1299.98px;\n    width: 100%;\n    height: 65.5px;\n    padding: 0 44px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    @media only screen and (max-width: 599px) {\n       padding: 0 22px;\n    };\n"]))),J=N.a.img(g||(g=Object(z.a)(["\n    width: 160px;\n\n    @media only screen and (max-width: 848px) {\n        width: 130px;\n        position: relative;\n        z-index: 105;\n    };\n"]))),U=N.a.div(b||(b=Object(z.a)(["\n    display: none;\n\n    @media only screen and (max-width: 848px) {\n        display: initial;\n        position: relative;\n        z-index: 105;\n    };\n"]))),M=N.a.div(w||(w=Object(z.a)(["\n    display: initial;\n\n    @media only screen and (max-width: 848px) {\n        display: none;\n    };\n"]))),X=function(n){var e=n.scrollHandler,t=Object(a.useState)(!1),r=Object(k.a)(t,2),o=r[0],l=r[1],c=Object(a.useRef)(null),s=function(){return l(!o)};return Object(a.useEffect)(function(){var n=window.pageYOffset,e=function(){var e=window.pageYOffset;n>e&&(c.current.style.transform="translateY(0)"),n<e&&e>20&&(c.current.style.transform="translateY(-100%)"),n=e};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]),i.a.createElement(P,{ref:c},i.a.createElement(B,null,i.a.createElement(D,{isOpen:o,openHandler:s},i.a.createElement(Y,{isAside:!0,scrollHandler:e})),i.a.createElement(J,{src:O.a,alt:"mylogo"}),i.a.createElement(U,null,i.a.createElement(F,{open:o,openToggle:s})),i.a.createElement(M,null,i.a.createElement(Y,{isAside:!1,scrollHandler:e}))))},I=Object(a.lazy)(function(){return Promise.all([t.e(3),t.e(1)]).then(t.bind(null,42))}),$=function(){var n=Object(a.useRef)(null);return i.a.createElement(E.d,null,i.a.createElement(E.b,{path:"/",element:i.a.createElement(y,null,i.a.createElement(X,{scrollHandler:function(e){n.current.scrollToSection(e)}}))},i.a.createElement(E.b,{index:!0,element:i.a.createElement(a.Suspense,null,i.a.createElement(I,{ref:n}))})))},q=(t(33),function(){return i.a.createElement(v.a,null,i.a.createElement($,null))});o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(q,null))),function(n){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/portfolio","/service-worker.js");l?(function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):c(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):c(e,n)})}}()}},[[22,4,2]]]);
//# sourceMappingURL=main.ff758c76.chunk.js.map