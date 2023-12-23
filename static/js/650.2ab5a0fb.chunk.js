"use strict";(self.webpackChunkwebapp=self.webpackChunkwebapp||[]).push([[650,84,297],{7084:(e,a,s)=>{s.r(a),s.d(a,{default:()=>r});s(2791),s(3508);var t=s(184);const r=function(e){const{title:a}=e;return(0,t.jsx)("div",{className:"header",children:a})}},1650:(e,a,s)=>{s.r(a),s.d(a,{default:()=>p});var t=s(2791),r=s(7022),c=s(9743),n=s(3360),l=s(6444),o=s(4075),d=s.n(o),i=s(7084),f=s(126),m=s(1297),x=s(2150),u=s(184);const b={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}},p=e=>{var a;const s=(0,t.useContext)(l.Ni),{header:o}=e,[p,v]=(0,t.useState)(null),[y,h]=(0,t.useState)(!1);(0,t.useEffect)((()=>{fetch(f.Z.projects,{method:"GET"}).then((e=>e.json())).then((e=>v(e))).catch((e=>e))}),[]);const N=y&&p?p.length:6;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.default,{title:o}),(0,u.jsx)("div",{className:"wip-header",children:"(Work in progress)"}),p?(0,u.jsx)("div",{className:"section-content-container",children:(0,u.jsxs)(r.Z,{style:b.containerStyle,children:[(0,u.jsx)(c.Z,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(a=p.projects)||void 0===a?void 0:a.slice(0,N).map((e=>(0,u.jsx)(d(),{children:(0,u.jsx)(m.default,{project:e})},e.title)))}),!y&&(0,u.jsx)(n.Z,{style:b.showMoreStyle,variant:s.bsSecondaryVariant,onClick:()=>h(!0),children:"show more"})]})}):(0,u.jsx)(x.default,{})]})}},1297:(e,a,s)=>{s.r(a),s.d(a,{default:()=>L});var t=s(2791),r=s(2677),c=s(1694),n=s.n(c),l=s(162),o=s(184);const d=t.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r="div",...c}=e;return t=(0,l.vE)(t,"card-body"),(0,o.jsx)(r,{ref:a,className:n()(s,t),...c})}));d.displayName="CardBody";const i=d,f=t.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r="div",...c}=e;return t=(0,l.vE)(t,"card-footer"),(0,o.jsx)(r,{ref:a,className:n()(s,t),...c})}));f.displayName="CardFooter";const m=f;var x=s(6040);const u=t.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:c="div",...d}=e;const i=(0,l.vE)(s,"card-header"),f=(0,t.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,o.jsx)(x.Z.Provider,{value:f,children:(0,o.jsx)(c,{ref:a,...d,className:n()(r,i)})})}));u.displayName="CardHeader";const b=u,p=t.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,variant:r,as:c="img",...d}=e;const i=(0,l.vE)(s,"card-img");return(0,o.jsx)(c,{ref:a,className:n()(r?"".concat(i,"-").concat(r):i,t),...d})}));p.displayName="CardImg";const v=p,y=t.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r="div",...c}=e;return t=(0,l.vE)(t,"card-img-overlay"),(0,o.jsx)(r,{ref:a,className:n()(s,t),...c})}));y.displayName="CardImgOverlay";const h=y,N=t.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r="a",...c}=e;return t=(0,l.vE)(t,"card-link"),(0,o.jsx)(r,{ref:a,className:n()(s,t),...c})}));N.displayName="CardLink";const j=N;var g=s(7472);const w=(0,g.Z)("h6"),S=t.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r=w,...c}=e;return t=(0,l.vE)(t,"card-subtitle"),(0,o.jsx)(r,{ref:a,className:n()(s,t),...c})}));S.displayName="CardSubtitle";const C=S,P=t.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r="p",...c}=e;return t=(0,l.vE)(t,"card-text"),(0,o.jsx)(r,{ref:a,className:n()(s,t),...c})}));P.displayName="CardText";const E=P,k=(0,g.Z)("h5"),R=t.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r=k,...c}=e;return t=(0,l.vE)(t,"card-title"),(0,o.jsx)(r,{ref:a,className:n()(s,t),...c})}));R.displayName="CardTitle";const T=R,B=t.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,bg:r,text:c,border:d,body:f=!1,children:m,as:x="div",...u}=e;const b=(0,l.vE)(s,"card");return(0,o.jsx)(x,{ref:a,...u,className:n()(t,b,r&&"bg-".concat(r),c&&"text-".concat(c),d&&"border-".concat(d)),children:f?(0,o.jsx)(i,{children:m}):m})}));B.displayName="Card";const Z=Object.assign(B,{Img:v,Title:T,Subtitle:C,Body:i,Link:j,Text:E,Header:b,Footer:m,ImgOverlay:h});var F=s(3360);const I=t.forwardRef(((e,a)=>{let{bsPrefix:s,bg:t="primary",pill:r=!1,text:c,className:d,as:i="span",...f}=e;const m=(0,l.vE)(s,"badge");return(0,o.jsx)(i,{ref:a,...f,className:n()(d,m,r&&"rounded-pill",c&&"text-".concat(c),t&&"bg-".concat(t))})}));I.displayName="Badge";const V=I;var z=s(6444),G=s(6895);const H={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},L=e=>{var a;const s=(0,t.useContext)(z.Ni),{project:c}=e;return(0,o.jsx)(r.Z,{children:(0,o.jsxs)(Z,{style:{...H.cardStyle,backgroundColor:s.cardBackground,borderColor:s.cardBorderColor},text:s.bsSecondaryVariant,children:[(0,o.jsx)(Z.Img,{variant:"top",src:null===c||void 0===c?void 0:c.image}),(0,o.jsxs)(Z.Body,{children:[(0,o.jsx)(Z.Title,{style:H.cardTitleStyle,children:c.title}),(0,o.jsx)(Z.Text,{style:H.cardTextStyle,children:(n=c.bodyText,(0,o.jsx)(G.D,{children:n}))})]}),(0,o.jsx)(Z.Body,{children:null===c||void 0===c||null===(a=c.links)||void 0===a?void 0:a.map((e=>(0,o.jsx)(F.Z,{style:H.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank"),children:e.text},e.href)))}),c.tags&&(0,o.jsx)(Z.Footer,{style:{backgroundColor:s.cardFooterBackground},children:c.tags.map((e=>(0,o.jsx)(V,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:H.badgeStyle,children:e},e)))})]})});var n}},3360:(e,a,s)=>{s.d(a,{Z:()=>i});var t=s(1694),r=s.n(t),c=s(2791),n=s(5341),l=s(162),o=s(184);const d=c.forwardRef(((e,a)=>{let{as:s,bsPrefix:t,variant:c="primary",size:d,active:i=!1,disabled:f=!1,className:m,...x}=e;const u=(0,l.vE)(t,"btn"),[b,{tagName:p}]=(0,n.FT)({tagName:s,disabled:f,...x}),v=p;return(0,o.jsx)(v,{...b,...x,ref:a,disabled:f,className:r()(m,u,i&&"active",c&&"".concat(u,"-").concat(c),d&&"".concat(u,"-").concat(d),x.href&&f&&"disabled")})}));d.displayName="Button";const i=d},2677:(e,a,s)=>{s.d(a,{Z:()=>d});var t=s(1694),r=s.n(t),c=s(2791),n=s(162),l=s(184);const o=c.forwardRef(((e,a)=>{const[{className:s,...t},{as:c="div",bsPrefix:o,spans:d}]=function(e){let{as:a,bsPrefix:s,className:t,...c}=e;s=(0,n.vE)(s,"col");const l=(0,n.pi)(),o=(0,n.zG)(),d=[],i=[];return l.forEach((e=>{const a=c[e];let t,r,n;delete c[e],"object"===typeof a&&null!=a?({span:t,offset:r,order:n}=a):t=a;const l=e!==o?"-".concat(e):"";t&&d.push(!0===t?"".concat(s).concat(l):"".concat(s).concat(l,"-").concat(t)),null!=n&&i.push("order".concat(l,"-").concat(n)),null!=r&&i.push("offset".concat(l,"-").concat(r))})),[{...c,className:r()(t,...d,...i)},{as:a,bsPrefix:s,spans:d}]}(e);return(0,l.jsx)(c,{...t,ref:a,className:r()(s,!d.length&&o)})}));o.displayName="Col";const d=o},9743:(e,a,s)=>{s.d(a,{Z:()=>d});var t=s(1694),r=s.n(t),c=s(2791),n=s(162),l=s(184);const o=c.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,as:c="div",...o}=e;const d=(0,n.vE)(s,"row"),i=(0,n.pi)(),f=(0,n.zG)(),m="".concat(d,"-cols"),x=[];return i.forEach((e=>{const a=o[e];let s;delete o[e],null!=a&&"object"===typeof a?({cols:s}=a):s=a;const t=e!==f?"-".concat(e):"";null!=s&&x.push("".concat(m).concat(t,"-").concat(s))})),(0,l.jsx)(c,{ref:a,...o,className:r()(t,d,...x)})}));o.displayName="Row";const d=o}}]);
//# sourceMappingURL=650.2ab5a0fb.chunk.js.map