(self.webpackChunkeastdocs=self.webpackChunkeastdocs||[]).push([[666],{1243:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});n(6540);var s=n(4164),a=n(7559),o=n(1754),i=n(9169),l=n(8774),r=n(1312),c=n(6025),d=n(4848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(l.A,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function f(e){let{children:t,active:n,index:a,addMicrodata:o}=e;return(0,d.jsxs)("li",{...o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function x(){const e=(0,o.OF)(),t=(0,i.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(f,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(b,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},1606:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ct});var s=n(6540),a=n(1003),o=n(9532),i=n(4848);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new o.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,i.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(4581),h=n(6929);function p(){const{metadata:e}=c();return(0,i.jsx)(h.A,{previous:e.previous,next:e.next})}var b=n(1878),f=n(4267),x=n(7559),g=n(1312),v=n(8774);const j={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function N(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,i.jsxs)(v.A,{href:t,title:a,className:(0,u.A)(j.tag,s?j.tagWithCount:j.tagRegular),children:[n,s&&(0,i.jsx)("span",{children:s})]})}const A={tags:"tags_jXut",tag:"tag_QGVx"};function C(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(g.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.A)(A.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:A.tag,children:(0,i.jsx)(N,{...e})},e.permalink)))})]})}const k={iconEdit:"iconEdit_Z9Sw"};function L(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(k.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function y(e){let{editUrl:t}=e;return(0,i.jsxs)(v.A,{to:t,className:x.G.common.editThisPage,children:[(0,i.jsx)(L,{}),(0,i.jsx)(g.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var _=n(4586);function B(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,_.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,_.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function T(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=B({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,i.jsx)(g.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function w(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(g.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function E(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:x.G.common.lastUpdated,children:[(0,i.jsx)(g.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,i.jsx)(T,{lastUpdatedAt:t}):"",byUser:n?(0,i.jsx)(w,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const H={lastUpdated:"lastUpdated_JAkA"};function M(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,i.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,i.jsx)("div",{className:"col",children:n&&(0,i.jsx)(y,{editUrl:n})}),(0,i.jsx)("div",{className:(0,u.A)("col",H.lastUpdated),children:(s||a)&&(0,i.jsx)(E,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}function I(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,o=a.length>0,l=!!(t||n||s);return o||l?(0,i.jsxs)("footer",{className:(0,u.A)(x.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,i.jsx)("div",{className:(0,u.A)("row margin-top--sm",x.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(C,{tags:a})})}),l&&(0,i.jsx)(M,{className:(0,u.A)("margin-top--sm",x.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var S=n(1422),U=n(6342);function V(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function O(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=O({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function R(e){const t=e.getBoundingClientRect();return t.top===t.bottom?R(e.parentNode):t}function P(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>R(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(R(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function D(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,U.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function G(e){const t=(0,s.useRef)(void 0),n=D();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),r=P(l,{anchorTopOffset:n.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function W(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,i.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(v.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,i.jsx)(W,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const $=s.memo(W);function F(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:r,...c}=e;const d=(0,U.p)(),u=l??d.tableOfContents.minHeadingLevel,m=r??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>O({toc:V(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return G((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,i.jsx)($,{toc:h,className:n,linkClassName:a,...c})}const z={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function q(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",z.tocCollapsibleButton,!t&&z.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(g.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const Z={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Y(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:l}=(0,S.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.A)(Z.tocCollapsible,!o&&Z.tocCollapsibleExpanded,n),children:[(0,i.jsx)(q,{collapsed:o,onClick:l}),(0,i.jsx)(S.N,{lazy:!0,className:Z.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(F,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const J={tocMobile:"tocMobile_ITEo"};function K(){const{toc:e,frontMatter:t}=c();return(0,i.jsx)(Y,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(x.G.docs.docTocMobile,J.tocMobile)})}const Q={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},X="table-of-contents__link toc-highlight",ee="table-of-contents__link--active";function te(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,u.A)(Q.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(F,{...n,linkClassName:X,linkActiveClassName:ee})})}function ne(){const{toc:e,frontMatter:t}=c();return(0,i.jsx)(te,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:x.G.docs.docTocDesktop})}var se=n(1107),ae=n(8453),oe=n(5260),ie=n(2303),le=n(5293);function re(){const{prism:e}=(0,U.p)(),{colorMode:t}=(0,le.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var ce=n(8426),de=n.n(ce);const ue=/title=(?<quote>["'])(?<title>.*?)\1/,me=/\{(?<range>[\d,-]+)\}/,he={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},pe={...he,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},be=Object.keys(he);function fe(e,t){const n=e.map((e=>{const{start:n,end:s}=pe[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function xe(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&me.test(o)){const e=o.match(me).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=de()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return fe(["js","jsBlock"],t);case"jsx":case"tsx":return fe(["js","jsBlock","jsx"],t);case"html":return fe(["js","jsBlock","html"],t);case"python":case"py":case"bash":return fe(["bash"],t);case"markdown":case"md":return fe(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return fe(["tex"],t);case"lua":case"haskell":case"sql":return fe(["lua"],t);case"wasm":return fe(["wasm"],t);case"vb":case"vba":case"visual-basic":return fe(["vb","rem"],t);case"vbnet":return fe(["vbnet","rem"],t);case"batch":return fe(["rem"],t);case"basic":return fe(["rem","f90"],t);case"fsharp":return fe(["js","ml"],t);case"ocaml":case"sml":return fe(["ml"],t);case"fortran":return fe(["f90"],t);case"cobol":return fe(["cobol"],t);default:return fe(be,t)}}(s,a),l=n.split("\n"),r=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),c=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<l.length;){const e=l[h].match(i);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));c[t]?r[c[t]].range+=`${h},`:d[t]?r[d[t]].start=h:u[t]&&(r[u[t]].range+=`${r[u[t]].start}-${h-1},`),l.splice(h,1)}n=l.join("\n");const m={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;de()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const ge={codeBlockContainer:"codeBlockContainer_Ckt0"};function ve(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(re());return(0,i.jsx)(t,{...n,style:s,className:(0,u.A)(n.className,ge.codeBlockContainer,x.G.common.codeBlock)})}const je={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Ne(e){let{children:t,className:n}=e;return(0,i.jsx)(ve,{as:"pre",tabIndex:0,className:(0,u.A)(je.codeBlockStandalone,"thin-scrollbar",n),children:(0,i.jsx)("code",{className:je.codeBlockLines,children:t})})}const Ae={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Ce(e,t){const[n,a]=(0,s.useState)(),i=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=Ae);const a=(0,o._q)(t),i=(0,o.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,i),()=>t.disconnect()}),[e,a,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var ke=n(1765);const Le={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function ye(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=a({line:t,className:(0,u.A)(n,s&&Le.codeLine)}),r=t.map(((e,t)=>(0,i.jsx)("span",{...o({token:e})},t)));return(0,i.jsxs)("span",{...l,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:Le.codeLineNumber}),(0,i.jsx)("span",{className:Le.codeLineContent,children:r})]}):r,(0,i.jsx)("br",{})]})}function _e(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Be(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const Te={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function we(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),l=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection(),o=a.rangeCount>0&&a.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),s&&s.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,i.jsx)("button",{type:"button","aria-label":a?(0,g.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,g.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,g.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.A)("clean-btn",n,Te.copyButton,a&&Te.copyButtonCopied),onClick:r,children:(0,i.jsxs)("span",{className:Te.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(_e,{className:Te.copyButtonIcon}),(0,i.jsx)(Be,{className:Te.copyButtonSuccessIcon})]})})}function Ee(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const He={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Me(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,g.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:n,className:(0,u.A)("clean-btn",t,s&&He.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,i.jsx)(Ee,{className:He.wordWrapButtonIcon,"aria-hidden":"true"})})}function Ie(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:l,language:r}=e;const{prism:{defaultLanguage:c,magicComments:d}}=(0,U.p)(),m=function(e){return e?.toLowerCase()}(r??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??c),h=re(),p=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),l=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return Ce(o,l),(0,s.useEffect)((()=>{l()}),[e,l]),(0,s.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),b=function(e){return e?.match(ue)?.groups.title??""}(a)||o,{lineClassNames:f,code:x}=xe(t,{metastring:a,language:m,magicComments:d}),g=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,i.jsxs)(ve,{as:"div",className:(0,u.A)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`),children:[b&&(0,i.jsx)("div",{className:je.codeBlockTitle,children:b}),(0,i.jsxs)("div",{className:je.codeBlockContent,children:[(0,i.jsx)(ke.f4,{theme:h,code:x,language:m??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,u.A)(t,je.codeBlock,"thin-scrollbar"),style:n,children:(0,i.jsx)("code",{className:(0,u.A)(je.codeBlockLines,g&&je.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,i.jsx)(ye,{line:e,getLineProps:a,getTokenProps:o,classNames:f[t],showLineNumbers:g},t)))})})}}),(0,i.jsxs)("div",{className:je.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,i.jsx)(Me,{className:je.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,i.jsx)(we,{className:je.codeButton,code:x})]})]})]})}function Se(e){let{children:t,...n}=e;const a=(0,ie.A)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof o?Ie:Ne;return(0,i.jsx)(l,{...n,children:o},String(a))}function Ue(e){return(0,i.jsx)("code",{...e})}var Ve=n(3427);const Oe={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function Re(e){return!!e&&("SUMMARY"===e.tagName||Re(e.parentElement))}function Pe(e,t){return!!e&&(e===t||Pe(e.parentElement,t))}function De(e){let{summary:t,children:n,...a}=e;(0,Ve.A)().collectAnchor(a.id);const o=(0,ie.A)(),l=(0,s.useRef)(null),{collapsed:r,setCollapsed:c}=(0,S.u)({initialState:!a.open}),[d,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:t??"Details"});return(0,i.jsxs)("details",{...a,ref:l,open:d,"data-collapsed":r,className:(0,u.A)(Oe.details,o&&Oe.isBrowser,a.className),onMouseDown:e=>{Re(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Re(t)&&Pe(t,l.current)&&(e.preventDefault(),r?(c(!1),m(!0)):c(!0))},children:[h,(0,i.jsx)(S.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)},children:(0,i.jsx)("div",{className:Oe.collapsibleContent,children:n})})]})}const Ge={details:"details_b_Ee"},We="alert alert--info";function $e(e){let{...t}=e;return(0,i.jsx)(De,{...t,className:(0,u.A)(We,Ge.details,t.className)})}function Fe(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,i.jsx)(i.Fragment,{children:t.filter((e=>e!==n))});return(0,i.jsx)($e,{...e,summary:n,children:a})}function ze(e){return(0,i.jsx)(se.A,{...e})}const qe={containsTaskList:"containsTaskList_mC6p"};function Ze(e){if(void 0!==e)return(0,u.A)(e,e?.includes("contains-task-list")&&qe.containsTaskList)}const Ye={img:"img_ev3q"};var Je=n(611),Ke=n(418);const Qe={Head:oe.A,details:Fe,Details:Fe,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,i.jsx)(Ue,{...e}):(0,i.jsx)(Se,{...e})},a:function(e){return(0,i.jsx)(v.A,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:Ze(e.className)})},li:function(e){return(0,Ve.A)().collectAnchor(e.id),(0,i.jsx)("li",{...e})},img:function(e){return(0,i.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.A)(t,Ye.img))});var t},h1:e=>(0,i.jsx)(ze,{as:"h1",...e}),h2:e=>(0,i.jsx)(ze,{as:"h2",...e}),h3:e=>(0,i.jsx)(ze,{as:"h3",...e}),h4:e=>(0,i.jsx)(ze,{as:"h4",...e}),h5:e=>(0,i.jsx)(ze,{as:"h5",...e}),h6:e=>(0,i.jsx)(ze,{as:"h6",...e}),admonition:Je.A,mermaid:Ke.A};function Xe(e){let{children:t}=e;return(0,i.jsx)(ae.x,{components:Qe,children:t})}function et(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.A)(x.G.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(se.A,{as:"h1",children:n})}),(0,i.jsx)(Xe,{children:t})]})}var tt=n(1243);function nt(){return(0,i.jsx)(g.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function st(){return(0,i.jsx)(g.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function at(){return(0,i.jsx)(oe.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function ot(e){let{className:t}=e;return(0,i.jsx)(Je.A,{type:"caution",title:(0,i.jsx)(nt,{}),className:(0,u.A)(t,x.G.common.unlistedBanner),children:(0,i.jsx)(st,{})})}function it(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(at,{}),(0,i.jsx)(ot,{...e})]})}const lt={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function rt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(K,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(ne,{})}}(),{metadata:{unlisted:s}}=c();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&lt.docItemCol),children:[s&&(0,i.jsx)(it,{}),(0,i.jsx)(b.A,{}),(0,i.jsxs)("div",{className:lt.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(tt.A,{}),(0,i.jsx)(f.A,{}),n.mobile,(0,i.jsx)(et,{children:t}),(0,i.jsx)(I,{})]}),(0,i.jsx)(p,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ct(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(r,{content:e.content,children:(0,i.jsxs)(a.e3,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(rt,{children:(0,i.jsx)(n,{})})]})})}},6929:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(6540);var s=n(1312),a=n(4164),o=n(8774),i=n(4848);function l(e){const{permalink:t,title:n,subLabel:s,isNext:l}=e;return(0,i.jsxs)(o.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}function r(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(l,{...t,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(l,{...n,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(6540);var s=n(4164),a=n(1312),o=n(7559),i=n(2252),l=n(4848);function r(e){let{className:t}=e;const n=(0,i.r)();return n.badge?(0,l.jsx)("span",{className:(0,s.A)(t,o.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});n(6540);var s=n(4164),a=n(4586),o=n(8774),i=n(1312),l=n(4070),r=n(7559),c=n(5597),d=n(2252),u=n(4848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(o.A,{to:n,onClick:s,children:(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,a.A)(),{pluginId:i}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(i),{latestDocSuggestion:m,latestVersionSuggestion:b}=(0,l.HW)(i),f=m??(x=b).docs.find((e=>e.id===x.mainDocId));var x;return(0,u.jsxs)("div",{className:(0,s.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:o,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:b.label,to:f.path,onClick:()=>d(b.name)})})]})}function f(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(b,{className:t,versionMetadata:n}):null}},8473:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});var s=n(6540),a=n(4848);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),i=n?.props.children;return{mdxAdmonitionTitle:i,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>l});var s=n(6540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);