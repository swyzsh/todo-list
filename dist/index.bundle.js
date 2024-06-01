"use strict";(self.webpackChunktodo_list=self.webpackChunktodo_list||[]).push([[57],{208:(n,t,e)=>{e.d(t,{A:()=>B});var r=e(354),o=e.n(r),a=e(314),i=e.n(a),s=e(417),A=e.n(s),d=new URL(e(176),e.b),c=new URL(e(781),e.b),l=new URL(e(765),e.b),p=i()(o()),C=A()(d),u=A()(c),h=A()(l);p.push([n.id,`:root {\n  --text: #fafafa;\n  --text1: rgba(242, 242, 242, 0.15); \n  --text2: rgba(242, 242, 242, 0.05);\n  --background: #09090b;\n  --backgroundTran: rgba(9, 9, 11, 0.1);\n  --primary: #1c1917;\n  --secondary: ;\n  --accent: #eba0ac;\n}\n\n@font-face {\n  font-family: 'g-thin';\n  src: url(${C});\n}\n@font-face {\n  font-family: 'g-light';\n  src: url(${u});\n}\n@font-face {\n  font-family: 'g-regular';\n  src: url(${h});\n}\n\n.background-blur {\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n}\n\n.backdrop-shadow {\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 22px 70px 4px rgba(0,0,0,0.55),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  color: var(--text);\n  background-color: var(--background);\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n#sidebar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 196px;\n  height: 100vh;\n\n  background-color: var(--backgroundTran);\n  border-right: 2px solid var(--text2);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 36px;\n}\n\n#sidebar .sidebarAction {\n  margin-top: 18px;\n  width: calc(100% - 36px);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#sidebar .sidebarAction div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n#profileImg {\n  width: 30px;\n  height: 30px;\n  border: 1px solid rgba(242, 242, 242, 0.36);\n  border-radius: 30px;\n}\n#profileName {\n  font-family: 'g-regular';\n  font-size: 16px;\n}\n\n#sidebarCloseBtn {\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#sidebarCloseBtn img {\n  width: 28px;\n  height: 28px;\n  margin: 0;\n  padding: 0;\n}\n\n#sidebar .taskbarAction {\n  width: calc(100% - 36px);\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: start; \n  gap: 12px;\n}\n\n#sidebar .taskbarAction button {\n  background-color: var(--backgroundTran);\n  border: 1px solid var(--text1);\n  border-radius: 4px;\n  padding: 8px 16px;\n  width: 160px;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n#sidebar .taskbarAction button:hover {\n  background-color: var(--text1);\n  border: 1px solid var(--text2);\n}\n#sidebar .taskbarAction button:active{\n  background-color: var(--backgroundTran);\n  border: 1px solid var(--text1);\n}\n\n.sidebarIcon svg {\n  margin-bottom: -3px;\n  height: 18px;\n  width: 18px;\n}\n\n.sidebarText {\n  color: var(--text);\n  font-family: 'g-regular';\n  font-size: 14px;\n  text-align: center;\n}\n\n#window {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: calc(100% - 196px);\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.sectionContainer {\n  position: absolute;\n  top: 64px;\n  left: 64px;\n  width: calc(100% - 128px);\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  gap: 16px;\n}\n\n.sectionHeader {\n  font-family: 'g-regular';\n  font-size: 2rem;\n}\n\n.sectionTask {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.taskContainer {\n  display: flex;\n  flex-direction: row;\n  border: 1px solid var(--text1);\n  border-radius: 4px;\n  padding: 8px 16px;\n  gap: 12px;\n}\n.taskActions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n}\n.taskDoneBtn, .taskEditBtn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: var(--backgroundTran);\n  border: 1px solid var(--text1);\n  border-radius: 4px;\n  padding: 8px;\n}\n.taskDoneBtn:hover {\n  background-color: var(--text1);\n  border: 1px solid var(--text2);\n}\n.taskEditBtn:hover {\n  background-color: var(--text1);\n  border: 1px solid var(--text2);\n}\n.taskDoneBtn:active {\n  background-color: var(--backgroundTran);\n  border: 1px solid var(--text1);\n}\n.taskEditBtn:active{\n  background-color: var(--backgroundTran);\n  border: 1px solid var(--text1);\n}\n.taskDoneBtn svg, .taskEditBtn svg {\n  width: 14px;\n  height: 14px;\n}\n.taskDetails {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px 0;\n}\n\n.taskName {\n  font-family: 'g-light';\n  font-size: 1rem;\n}\n\n.taskDesc {\n  font-family: 'g-light';\n  font-size: 0.8rem;\n}\n\n.taskDate {\n  font-family: 'g-light';\n  font-size: 0.8rem;\n  color: var(--accent);\n}\n\n.taskLabel {\n  font-family: 'g-light';\n  font-size: 1rem;\n}\n\n#taskFormContainer {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 32px;\n}\n#taskForm {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n#taskFormClose {\n  position: absolute;\n  top: 32px;\n  right: 32px;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:[":root {\n  --text: #fafafa;\n  --text1: rgba(242, 242, 242, 0.15); \n  --text2: rgba(242, 242, 242, 0.05);\n  --background: #09090b;\n  --backgroundTran: rgba(9, 9, 11, 0.1);\n  --primary: #1c1917;\n  --secondary: ;\n  --accent: #eba0ac;\n}\n\n@font-face {\n  font-family: 'g-thin';\n  src: url('./metadata/fonts/Geist-Thin.otf');\n}\n@font-face {\n  font-family: 'g-light';\n  src: url('./metadata/fonts/Geist-Light.otf');\n}\n@font-face {\n  font-family: 'g-regular';\n  src: url('./metadata/fonts/Geist-Regular.otf');\n}\n\n.background-blur {\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n}\n\n.backdrop-shadow {\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 22px 70px 4px rgba(0,0,0,0.55),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  color: var(--text);\n  background-color: var(--background);\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n#sidebar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 196px;\n  height: 100vh;\n\n  background-color: var(--backgroundTran);\n  border-right: 2px solid var(--text2);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 36px;\n}\n\n#sidebar .sidebarAction {\n  margin-top: 18px;\n  width: calc(100% - 36px);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#sidebar .sidebarAction div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n#profileImg {\n  width: 30px;\n  height: 30px;\n  border: 1px solid rgba(242, 242, 242, 0.36);\n  border-radius: 30px;\n}\n#profileName {\n  font-family: 'g-regular';\n  font-size: 16px;\n}\n\n#sidebarCloseBtn {\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#sidebarCloseBtn img {\n  width: 28px;\n  height: 28px;\n  margin: 0;\n  padding: 0;\n}\n\n#sidebar .taskbarAction {\n  width: calc(100% - 36px);\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: start; \n  gap: 12px;\n}\n\n#sidebar .taskbarAction button {\n  background-color: var(--backgroundTran);\n  border: 1px solid var(--text1);\n  border-radius: 4px;\n  padding: 8px 16px;\n  width: 160px;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n#sidebar .taskbarAction button:hover {\n  background-color: var(--text1);\n  border: 1px solid var(--text2);\n}\n#sidebar .taskbarAction button:active{\n  background-color: var(--backgroundTran);\n  border: 1px solid var(--text1);\n}\n\n.sidebarIcon svg {\n  margin-bottom: -3px;\n  height: 18px;\n  width: 18px;\n}\n\n.sidebarText {\n  color: var(--text);\n  font-family: 'g-regular';\n  font-size: 14px;\n  text-align: center;\n}\n\n#window {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: calc(100% - 196px);\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.sectionContainer {\n  position: absolute;\n  top: 64px;\n  left: 64px;\n  width: calc(100% - 128px);\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  gap: 16px;\n}\n\n.sectionHeader {\n  font-family: 'g-regular';\n  font-size: 2rem;\n}\n\n.sectionTask {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.taskContainer {\n  display: flex;\n  flex-direction: row;\n  border: 1px solid var(--text1);\n  border-radius: 4px;\n  padding: 8px 16px;\n  gap: 12px;\n}\n.taskActions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n}\n.taskDoneBtn, .taskEditBtn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: var(--backgroundTran);\n  border: 1px solid var(--text1);\n  border-radius: 4px;\n  padding: 8px;\n}\n.taskDoneBtn:hover {\n  background-color: var(--text1);\n  border: 1px solid var(--text2);\n}\n.taskEditBtn:hover {\n  background-color: var(--text1);\n  border: 1px solid var(--text2);\n}\n.taskDoneBtn:active {\n  background-color: var(--backgroundTran);\n  border: 1px solid var(--text1);\n}\n.taskEditBtn:active{\n  background-color: var(--backgroundTran);\n  border: 1px solid var(--text1);\n}\n.taskDoneBtn svg, .taskEditBtn svg {\n  width: 14px;\n  height: 14px;\n}\n.taskDetails {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px 0;\n}\n\n.taskName {\n  font-family: 'g-light';\n  font-size: 1rem;\n}\n\n.taskDesc {\n  font-family: 'g-light';\n  font-size: 0.8rem;\n}\n\n.taskDate {\n  font-family: 'g-light';\n  font-size: 0.8rem;\n  color: var(--accent);\n}\n\n.taskLabel {\n  font-family: 'g-light';\n  font-size: 1rem;\n}\n\n#taskFormContainer {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 32px;\n}\n#taskForm {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n#taskFormClose {\n  position: absolute;\n  top: 32px;\n  right: 32px;\n}"],sourceRoot:""}]);const B=p},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var A=n[s],d=r.base?A[0]+r.base:A[0],c=a[d]||0,l="".concat(d," ").concat(c);a[d]=c+1;var p=e(l),C={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)t[p].references++,t[p].updater(C);else{var u=o(C,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:u,references:1})}i.push(l)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var A=r(n,o),d=0;d<a.length;d++){var c=e(a[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=A}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},406:(n,t,e)=>{var r=e(72),o=e.n(r),a=e(825),i=e.n(a),s=e(659),A=e.n(s),d=e(56),c=e.n(d),l=e(540),p=e.n(l),C=e(113),u=e.n(C),h=e(208),B={};B.styleTagTransform=u(),B.setAttributes=c(),B.insert=A().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=p(),o()(h.A,B),h.A&&h.A.locals&&h.A.locals;const f=e.p+"34eb37874537dac935e9.jpg",E=e.p+"8523c2da667fdbd3ec07.svg";let g=[];(function(){const n=document.getElementById("sidebar");n.classList.add("background-blur");const t=document.createElement("div");t.classList.add("sidebarAction");const e=document.createElement("div");let r=document.createElement("img");r.id="profileImg",r.src=f,e.appendChild(r);let o=document.createElement("span");o.id="profileName",o.innerHTML="Swyzsh",e.appendChild(o),t.appendChild(e);const a=document.createElement("div"),i=document.createElement("button");i.id="sidebarCloseBtn";const s=document.createElement("img");s.src=E,i.appendChild(s),a.appendChild(i),t.appendChild(a),n.appendChild(t);const A=document.createElement("div");function d(n,t,e){this.button=document.createElement("button"),this.button.classList.add("background-blur"),this.button.id=n,this.icon=document.createElement("div"),this.icon.innerHTML=t,this.icon.classList.add("sidebarIcon"),this.button.appendChild(this.icon),this.text=document.createElement("span"),this.text.innerHTML=e,this.text.classList.add("sidebarText"),this.button.appendChild(this.text),A.appendChild(this.button)}A.classList.add("taskbarAction"),new d("addTaskBtn",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"> <path d="M12 8V16M16 12L8 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" /></svg>',"Add Task"),new d("searchBtn",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M14 14L16.5 16.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>',"Search"),new d("inboxBtn",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>',"Inbox"),new d("todayBtn",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M3.5 9.36842C3.5 5.89491 3.5 4.15816 4.52513 3.07908C5.55025 2 7.20017 2 10.5 2H13.5C16.7998 2 18.4497 2 19.4749 3.07908C20.5 4.15816 20.5 5.89491 20.5 9.36842V14.6316C20.5 18.1051 20.5 19.8418 19.4749 20.9209C18.4497 22 16.7998 22 13.5 22H10.5C7.20017 22 5.55025 22 4.52513 20.9209C3.5 19.8418 3.5 18.1051 3.5 14.6316V9.36842Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.5 11H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M7 12C7 12 7.5 12 8 13C8 13 9.58824 10.5 11 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.5 17H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M8 2L8.0822 2.4932C8.28174 3.69044 8.38151 4.28906 8.80113 4.64453C9.22075 5 9.82762 5 11.0414 5H12.9586C14.1724 5 14.7793 5 15.1989 4.64453C15.6185 4.28906 15.7183 3.69044 15.9178 2.4932L16 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M8 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>',"Today"),new d("upcomingBtn",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M11.05 22C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.4267 5.62803 21.4957 7.63364 21.4997 11.5V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M21 18.5L13 18.5M21 18.5C21 19.2002 19.0057 20.5085 18.5 21M21 18.5C21 17.7998 19.0057 16.4915 18.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 2V4M6 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 8H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>',"Upcoming"),new d("filterBtn",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><rect x="18" y="18" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="18" y="10.5" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="18" y="3" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="10.5" y="18" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="10.5" y="10.5" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="10.5" y="3" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="3" y="18" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="3" y="10.5" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="3" y="3" width="3" height="3" rx="1" stroke="currentColor" stroke-width="1.5" /></svg>',"Filters & Labels"),n.appendChild(A)})(),document.addEventListener("DOMContentLoaded",(function(){!function(){let n=0;function t(t,e,r,o){var a;const i=new function(n,t,e,r){this.name=n,this.desc=t,this.dueDate=e,this.label=r}(t,e,(a=r,toString(a),`${a.slice(0,2)}-${a.slice(2,4)}-${a.slice(4)}`),o);g.push(i),n++}t("Meditate","do some yoga after waking up","20072024","purple"),t("Read","King Arthur & The Knights of The Round Table","31052024","red"),t("Wash","Bike and Car","03062024","purple"),console.log(`Total Tasks are: ${n}`)}(),function(){const n=document.getElementById("window"),t=document.createElement("div");t.classList.add("sectionContainer");const e=document.createElement("span");e.classList.add("sectionHeader"),e.innerHTML="Inbox",t.appendChild(e);const r=document.createElement("div");r.classList.add("sectionTask"),t.appendChild(r),g.forEach((n=>{const t=document.createElement("div");t.classList.add("taskContainer");const e=document.createElement("div");e.classList.add("taskActions");const o=document.createElement("div");o.classList.add("taskDoneBtn"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M2.5 13.8333L6 17.5L7.02402 16.4272M16.5 6.5L10.437 12.8517" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.5 13.8333L11 17.5L21.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>',e.appendChild(o);const a=document.createElement("div");a.classList.add("taskEditBtn"),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fafafa" fill="none"><path d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M11 20H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>',e.appendChild(a);const i=document.createElement("div");i.classList.add("taskDetails");const s=document.createElement("span");s.classList.add("taskName"),s.innerHTML=n.name;const A=document.createElement("span");A.classList.add("taskDesc"),A.innerHTML=n.desc;const d=document.createElement("span");d.classList.add("taskDate"),d.innerHTML=n.dueDate;const c=document.createElement("span");c.classList.add("taskLabel"),c.innerHTML=n.label,i.appendChild(s),i.appendChild(A),i.appendChild(d),i.appendChild(c),t.appendChild(e),t.appendChild(i),r.appendChild(t)})),n.appendChild(t)}(),document.getElementById("addTaskBtn").addEventListener("click",(function(){!function(){const n=document.createElement("div");n.id="taskFormContainer",n.classList.add("background-blur"),n.style.display="block";const t=document.createElement("form");t.setAttribute("id","taskForm");const e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("name","taskName"),e.setAttribute("placeholder","Task Name"),e.required=!0;const r=document.createElement("textarea");r.setAttribute("name","taskDesc"),r.setAttribute("placeholder","Task Description"),r.required=!1;const o=document.createElement("input");o.setAttribute("type","date"),o.setAttribute("name","taskDueDate"),o.required=!1;const a=document.createElement("select");a.setAttribute("name","taskLabel"),["Red","Purple","Green"].forEach((n=>{const t=document.createElement("option");t.value=n.toLowerCase(),t.textContent=n,a.appendChild(t)}));const i=document.createElement("button");i.setAttribute("type","submit"),i.textContent="Add Task";const s=document.createElement("button");s.id="taskFormClose",s.innerHTML="Exit & Discard",s.addEventListener("click",(function(){n.style.display="none"})),t.appendChild(e),t.appendChild(r),t.appendChild(o),t.appendChild(a),t.appendChild(i),n.appendChild(t),n.appendChild(s),document.body.appendChild(n)}()}));const n=document.getElementById("sidebar");document.getElementById("sidebarCloseBtn").addEventListener("click",(function(){n.style.display="none"}))}))},781:(n,t,e)=>{n.exports=e.p+"6db7e7140575314a6c1d.otf"},765:(n,t,e)=>{n.exports=e.p+"eb741f1170c20db8922f.otf"},176:(n,t,e)=>{n.exports=e.p+"c1f7ba1687ecc0a4de93.otf"}},n=>{n(n.s=406)}]);
//# sourceMappingURL=index.bundle.js.map