(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9603,5789],{67570:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return N},default:function(){return search}});var n=r(67294),a=r(16873),i=r(59499),o=r(85893);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var c={facetsActive:[]},s=(0,n.createContext)(void 0);function facetsReducer(e,t){if("updateFacetsActive"===t.type)return _objectSpread(_objectSpread({},e),{},{facetsActive:t.facetsActive})}function FacetsProvider(e){var t=e.initialState,r=e.children,a=(0,n.useReducer)(facetsReducer,void 0===t?c:t),i=a[0],u=a[1];return(0,o.jsx)(s.Provider,{value:{facetsDispatch:u,facetsState:i},children:r})}function useFacetsState(){var e=(0,n.useContext)(s);if(void 0===e)throw Error("useFacetsState must be used within a FacetsProvider");return e}var u=r(73245),l=r(16835),d=r(92854),f=(0,d.zo)("span",{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:"-$gr1",right:"$gr2",width:"$gr3",height:"$gr3",fontSize:"$gr1",color:"var(--accent-1)",backgroundColor:"var(--accent-12)",borderRadius:"50%"}),p=(0,d.zo)(u.Dialog.Trigger,{position:"relative",right:"0",boxShadow:"none",transition:"$canopySlideIn"}),h=(0,d.zo)("div",{display:"flex",position:"fixed",left:"0",zIndex:"5",width:"100%",variants:{isScrolling:{true:(0,i.Z)({},"".concat(p),{right:"50%",transform:"translate(50%)",backfaceVisibility:"hidden",webkitFontSmoothing:"subpixel-antialiased",boxShadow:"var(--shadow-5)"})}}}),g=r(15407),v=r(65014),y=r(62469),b=r(25049),hooks_useElementPosition=function(e){var t=(0,n.useState)(0),r=t[0],a=t[1];return(0,n.useEffect)(function(){var updatePosition=function(){a(window.pageYOffset),e.current&&a(window.pageYOffset-(null==e?void 0:e.current.offsetTop))};return window.addEventListener("scroll",updatePosition),updatePosition(),function(){return window.removeEventListener("scroll",updatePosition)}},[e]),r},Activate=function(){var e=n.useState(!1),t=(0,l.Z)(e,2),r=t[0],i=t[1],c=n.useRef(null),s=hooks_useElementPosition(c),d=Array.from(useFacetsState().facetsState.facetsActive.keys()).filter(function(e){return"q"!==e}).length;return(0,n.useEffect)(function(){return i(s>b.J9-100)},[s,b.J9]),(0,o.jsx)(h,{isScrolling:r,ref:c,children:(0,o.jsx)(a.Z,{containerType:"wide",children:(0,o.jsx)(u.Flex,{justify:"end",children:(0,o.jsx)(p,{children:(0,o.jsxs)(g.O,{size:"3",children:[(0,v.EK)("searchFilter")," ",(0,o.jsx)(y.hsZ,{}),d>0&&(0,o.jsx)(f,{children:d})]})})})})})},j=r(39802),m=(0,d.zo)("div",{display:"flex",flexDirection:"column",flexWrap:"nowrap",width:"100%",overflow:"scroll"}),x=r(77058),S=(0,d.zo)(j.xz,{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:"$gr2 0",backgroundColor:"transparent",border:"none",cursor:"pointer",borderTop:"1px solid var(--gray-4)",fontSize:"$gr3","> span":{display:"flex",alignItems:"center",gap:"$gr1"},"&:hover, &:focus":{color:"var(--accent-11)"},svg:{transition:"$canopyAll",transform:"rotate(-90deg)",color:"var(--gray-10)"},"&[aria-expanded='true']":{color:"var(--gray-12) !important",fontWeight:"800",svg:{color:"var(--gray-12) !important",transform:"rotate(0deg)"}}}),w=(0,d.zo)(j.VY,{padding:"$gr1 0 $gr4"}),O=(0,d.zo)(j.h4,{}),P=(0,d.zo)(j.ck,{"&:first-child":(0,i.Z)({},"".concat(S),{border:"none"})}),_=r(46069),E=(0,d.zo)("label",{transition:"$canopyAll",cursor:"pointer",fontWeight:"500",variants:{isChecked:{true:{color:"var(--gray-12) !important",fontWeight:"700"}}},"&:hover, &:focus":{color:"var(--accent-11)"},span:{color:"var(--gray-10) !important",fontSize:"$gr1"}}),F=(0,d.zo)(_.fC,{position:"relative",zIndex:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"$gr3",height:"$gr3",margin:"0 $gr1 0 0",background:"var(--gray-3)",boxShadow:"inset var(--shadow-2)",border:"none",borderRadius:"50%",cursor:"pointer",transition:"$canopyAll",flexShrink:"0","&::before":{position:"absolute",width:"100%",height:"100%",content:"",background:"linear-gradient(-45deg, var(--accent-11), var(--accent-8))",opacity:"0",borderRadius:"50%",transition:"$canopyAll",zIndex:"0"},"&[aria-checked='true']":{"&::before":{opacity:"1"}}}),k=(0,d.zo)(_.z$,{position:"absolute",zIndex:"1",color:"var(--accent-1)",textShadow:"1px 1px 2px var(--accent-a12)"}),C=(0,d.zo)("span",{display:"flex",margin:"0 0 $gr1",color:"var(--gray-11)",fontSize:"$gr2","&:last-child":{margin:"0"}}),Option=function(e){var t=e.active,r=e.facet,n=e.identifier,a=e.option,i=useFacetsState(),c=i.facetsDispatch,s=i.facetsState.facetsActive;return(0,o.jsxs)(C,{children:[(0,o.jsx)(F,{value:a.value,id:n,checked:t,onCheckedChange:function(e){s.delete(r),e&&s.append(r,a.slug),c({type:"updateFacetsActive",facetsActive:s})},children:(0,o.jsx)(k,{asChild:!0,children:(0,o.jsx)(y.nQG,{})})}),(0,o.jsxs)(E,{htmlFor:n,isChecked:t,children:[a.value," ",(0,o.jsxs)("span",{children:["(",a.doc_count,")"]})]})]})},Facet=function(e){var t=e.label,r=e.slug,a=e.values,i=useFacetsState().facetsState.facetsActive,c=null==i?void 0:i.toString(),s={slug:"",value:(0,v.EK)("searchFilterAny")},u=(0,n.useState)({slug:"",value:(0,v.EK)("searchFilterAny")}),l=u[0],d=u[1];return(0,n.useEffect)(function(){var e,t=null==i?void 0:i.get(r);d(t?{slug:t,value:null===(e=a.find(function(e){return e.slug===t}))||void 0===e?void 0:e.value}:s)},[i,c,r,a]),(0,o.jsxs)(P,{value:r,children:[(0,o.jsx)(O,{asChild:!0,children:(0,o.jsxs)(S,{children:[(0,o.jsxs)("span",{children:[t," ",(0,o.jsx)(y.v4q,{})]}),(0,o.jsx)("span",{children:l.value})]})}),(0,o.jsx)(w,{children:a.map(function(e,t){var n="".concat(r,"-").concat(e.slug,"-").concat(t);return(0,o.jsx)(Option,{active:l.slug===e.slug,facet:r,identifier:n,option:e},n)})})]})},$=r(11163);function Modal_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Modal_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Modal_ownKeys(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Modal_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Modal=function(){var e=useFacetsState(),t=e.facetsState,r=e.facetsDispatch,a=t.facetsActive,i=(0,$.useRouter)(),handleViewResults=function(){i.push({pathname:"/search",query:a.toString()})};return(0,o.jsx)(u.Dialog.Content,{children:(0,o.jsxs)(m,{children:[(0,o.jsx)(u.Flex,{mb:"3",align:"center",justify:"between",asChild:!0,children:(0,o.jsxs)("header",{children:[(0,o.jsx)(u.Dialog.Title,{as:"h3",mb:"0",size:"4",children:(0,o.jsx)("span",{children:(0,v.EK)("searchFilter")})}),(0,o.jsx)(u.Dialog.Close,{"aria-label":(0,v.EK)("searchFilterClose"),children:(0,o.jsx)(u.IconButton,{variant:"soft",size:"2",style:{cursor:"pointer"},children:(0,o.jsx)(y.Pxu,{})})})]})}),(0,o.jsx)("div",{children:(0,o.jsx)(j.fC,{type:"single",collapsible:!0,children:x.map(function(e){return(0,n.createElement)(Facet,Modal_objectSpread(Modal_objectSpread({},e),{},{key:e.slug}))})})}),(0,o.jsx)(u.Flex,{mt:"5",style:{justifyContent:"space-between"},asChild:!0,children:(0,o.jsxs)("footer",{children:[(0,o.jsx)(u.Dialog.Close,{children:(0,o.jsx)(g.O,{variant:"soft",onClick:function(){x.forEach(function(e){return a.delete(e.slug)}),r({type:"updateFacetsActive",facetsActive:a}),handleViewResults()},children:(0,v.EK)("searchFilterClear")})}),(0,o.jsx)(u.Dialog.Close,{children:(0,o.jsx)(g.O,{onClick:handleViewResults,children:(0,v.EK)("searchFilterSubmit")})})]})})]})})},R=r(37642),Facets=function(){var e=useFacetsState().facetsDispatch,t=(0,R.MQ)().canopyState.searchParams;return(0,n.useEffect)(function(){e({type:"updateFacetsActive",facetsActive:t})},[t,e]),(0,o.jsxs)(u.Dialog.Root,{children:[(0,o.jsx)(Activate,{}),(0,o.jsx)(Modal,{})]})},Facets_Facets=function(){return(0,o.jsx)(FacetsProvider,{children:(0,o.jsx)(Facets,{})})},D=r(62947),z=(0,d.zo)("div",{height:"$gr5",padding:"$gr4 0 $gr2","@sm":{height:"$gr5",padding:"$gr3 0 $gr2"},"#canopy-search-summary":{position:"relative",display:"block",fontSize:"$gr3",color:"var(--gray-11)",fontWeight:"500",padding:"$gr2 0","@sm":{fontSize:"$gr3"}}}),A=r(92929),Z=r(27812),getPartOf=function(e){var t=new URL(e);return t.searchParams.delete("page"),[{id:t,type:"Collection"}]},K=r(63981),q=r(633),I=r(96486),M=r.n(I),T=r(44921),getDocuments=function(e,t){var r=new T.Z.Document(t);K.forEach(function(e){return r.add(e)});var n=r.search(e).reduce(function(e,t){return(0,Z.Z)(new Set([].concat((0,Z.Z)(e),(0,Z.Z)(t.result))))},[]);return n.length>0?n:[]},getResults=function(e,t,r,n){var a,i=t?getDocuments(t,n):K.map(function(e){return e.id}),o=0===r.length?q:(a=r.map(function(e){var t=x.find(function(t){return t.slug===e.label}).values.find(function(t){return t.slug===e.value});return null==t?void 0:t.docs}),q.filter(function(e){return M().intersection.apply(M(),(0,Z.Z)(a)).includes(e.index)}));return i.filter(function(e){return o.some(function(t){return t.index===e})}).map(function(t){var r;return{id:(r=o.find(function(e){return e.index===t})).id,type:"Manifest",label:r.label,thumbnail:r.thumbnail,homepage:[{id:"".concat(e,"/works/").concat(r.slug),type:"Text",label:r.label}]}})};function request_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function request_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?request_ownKeys(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):request_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var searchRequest=function(e){var t,r=e.params,n=e.baseUrl,a=e.flexSearch,i=x.map(function(e){return e.slug}).filter(function(e){return r.has(e)}).map(function(e){var t=r.get(e);return{label:e,value:t}}),o=null==r?void 0:r.get("q"),c=null==r?void 0:r.get("page"),s=new URL("".concat(n,"/search"));s.search=null==r?void 0:r.toString();var u=getResults(n,o,i,a),l=Array.from(Array(Math.ceil(u.length/10)).keys()).map(function(e){var t=u.slice(10*e,10*(e+1)).map(function(e){return e.id});return{page:e+1,items:t}}),d=c?(t=parseInt(c),l.find(function(e){return e.page===t}).items.map(function(e){return u.find(function(t){return t.id===e})})):l.map(function(e){var t=new URL(s);return t.searchParams.append("page",e.page),{id:t.toString(),type:"Collection",label:{none:["Page ".concat(e.page," (").concat(e.items.length," Total)")]}}});return request_objectSpread(request_objectSpread({"@context":"https://iiif.io/api/presentation/3/context.json",id:s.toString(),type:"Collection",label:{none:[o||"All Results"]},items:d},c?{summary:{none:["".concat(u.length,"}")]}}:{summary:{none:["".concat(u.length)]}}),c&&{partOf:getPartOf(s)})},hooks_usePageResults=function(e,t,r){var a=(0,n.useState)([]),i=a[0],o=a[1],c=(0,n.useState)(!1),s=c[0],u=c[1],l=(0,n.useState)(!0),d=l[0],f=l[1],p=(0,n.useState)(!1),h=p[0],g=p[1],v=(0,R.MQ)().canopyState.config,reset=function(){o([]),u(!1),f(!0),g(!1)};return(0,n.useEffect)(function(){return reset()},[r]),(0,n.useEffect)(function(){if(f(!0),u(!1),(null==e?void 0:e.length)>0&&e[t]){var r,n=searchRequest({params:new URL(e[t]).searchParams,baseUrl:null==v?void 0:v.baseUrl,flexSearch:null==v?void 0:null===(r=v.search)||void 0===r?void 0:r.flexSearch}).items;o(function(e){return[].concat((0,Z.Z)(e),(0,Z.Z)(n))}),g(e.length>t),f(!1)}},[v,e,t]),{data:i,error:s,loading:d,more:h}},Results=function(e){var t=e.pages,r=e.query,a=(0,n.useState)(0),i=a[0],c=a[1],s=hooks_usePageResults(t,i,r),u=s.data,l=s.loading,d=s.more;(0,n.useEffect)(function(){return c(0)},[r]);var f=(0,n.useRef)(),p=(0,n.useCallback)(function(e){!l&&(f.current&&f.current.disconnect(),f.current=new IntersectionObserver(function(e){e[0].isIntersecting&&d&&c(function(e){return e+1})}),e&&f.current.observe(e))},[l,d]);return(0,o.jsx)(A.Z,{children:u.map(function(e,t){return u.length===t+1?(0,o.jsx)("span",{ref:u.length===t+1?p:void 0,children:(0,o.jsx)(A.Z.Item,{item:e})},e.id):(0,o.jsx)("span",{children:(0,o.jsx)(A.Z.Item,{item:e})},e.id)})})},U=r(11830),L=r(39332),N=!0,search=function(){var e=(0,L.useSearchParams)(),t=(0,n.useState)([]),r=t[0],i=t[1],c=(0,n.useState)(),s=c[0],l=c[1],d=n.useRef(null),f=(0,R.MQ)(),p=f.canopyDispatch,h=f.canopyState,g=h.config,y=h.searchSummary;return(0,n.useEffect)(function(){i([]),l(new URLSearchParams(e.toString()))},[e]),(0,n.useEffect)(function(){if(void 0!==s){p({searchParams:s,type:"updateSearchParams"});var e,t=null==g?void 0:null===(e=g.search)||void 0===e?void 0:e.flexSearch,r=searchRequest({params:s,baseUrl:null==g?void 0:g.baseUrl,flexSearch:t}),n=r.items,a=r.summary;i(n.map(function(e){return e.id})),a&&p({type:"updateSearchSummary",searchSummary:a})}},[s,g]),(0,o.jsxs)(D.Z,{children:[(0,o.jsxs)(z,{ref:d,children:[(0,o.jsx)(Facets_Facets,{}),(0,o.jsx)(a.Z,{containerType:"wide",children:y&&(0,o.jsxs)(u.Text,{id:"canopy-search-summary",children:[(0,o.jsx)(U.Summary,{summary:y})," ",(0,v.EK)("searchResults")]})})]}),(0,o.jsx)(a.Z,{containerType:"wide",children:(0,o.jsx)(Results,{pages:r,query:s})})]})}},8266:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(67570)}])},15789:function(){}},function(e){e.O(0,[9412,7409,3662,1971,1339,1119,3281,7257,6925,9774,2888,179],function(){return e(e.s=8266)}),_N_E=e.O()}]);