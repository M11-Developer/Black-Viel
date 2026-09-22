var hl=Object.defineProperty;var ul=(s,e,t)=>e in s?hl(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var C=(s,e,t)=>ul(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wr="160",pl=0,Vr=1,fl=2,ml=0,Tr=1,fr=2,hn=3,Cn=0,Nt=1,Bt=2,wn=0,gi=1,Wr=2,Xr=3,qr=4,gl=5,kn=100,vl=101,xl=102,$r=103,Yr=104,_l=200,yl=201,bl=202,Sl=203,mr=204,gr=205,Ml=206,El=207,wl=208,Tl=209,Al=210,Cl=211,Rl=212,Ll=213,Pl=214,Il=0,Dl=1,Ul=2,bs=3,Nl=4,Ol=5,Fl=6,kl=7,Ao=0,Bl=1,zl=2,Tn=0,Hl=1,Gl=2,Vl=3,Co=4,Wl=5,Xl=6,Ro=300,xi=301,_i=302,vr=303,xr=304,Cs=306,Bi=1e3,Kt=1001,_r=1002,Pt=1003,jr=1004,Os=1005,Gt=1006,ql=1007,zi=1008,An=1009,$l=1010,Yl=1011,Ar=1012,Lo=1013,Mn=1014,En=1015,Hi=1016,Po=1017,Io=1018,Hn=1020,jl=1021,Jt=1023,Kl=1024,Jl=1025,Gn=1026,yi=1027,Zl=1028,Do=1029,Ql=1030,Uo=1031,No=1033,Fs=33776,ks=33777,Bs=33778,zs=33779,Kr=35840,Jr=35841,Zr=35842,Qr=35843,Oo=36196,ea=37492,ta=37496,na=37808,ia=37809,sa=37810,ra=37811,aa=37812,oa=37813,la=37814,ca=37815,da=37816,ha=37817,ua=37818,pa=37819,fa=37820,ma=37821,Hs=36492,ga=36494,va=36495,ec=36283,xa=36284,_a=36285,ya=36286,Fo=3e3,Vn=3001,tc=3200,nc=3201,ko=0,ic=1,Vt="",dt="srgb",mn="srgb-linear",Cr="display-p3",Rs="display-p3-linear",Ss="linear",et="srgb",Ms="rec709",Es="p3",$n=7680,ba=519,sc=512,rc=513,ac=514,Bo=515,oc=516,lc=517,cc=518,dc=519,Sa=35044,Ma="300 es",yr=1035,pn=2e3,ws=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ea=1234567;const Ni=Math.PI/180,bi=180/Math.PI;function Ei(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function Rr(s,e){return(s%e+e)%e}function hc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function uc(s,e,t){return s!==e?(t-s)/(e-s):0}function Oi(s,e,t){return(1-t)*s+t*e}function pc(s,e,t,n){return Oi(s,e,1-Math.exp(-t*n))}function fc(s,e=1){return e-Math.abs(Rr(s,e*2)-e)}function mc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function gc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function vc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xc(s,e){return s+Math.random()*(e-s)}function _c(s){return s*(.5-Math.random())}function yc(s){s!==void 0&&(Ea=s);let e=Ea+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bc(s){return s*Ni}function Sc(s){return s*bi}function br(s){return(s&s-1)===0&&s!==0}function Mc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ts(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ec(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),h=r((e-n)/2),u=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*d,l*h,l*u,a*c);break;case"YZY":s.set(l*u,a*d,l*h,a*c);break;case"ZXZ":s.set(l*h,l*u,a*d,a*c);break;case"XZX":s.set(a*d,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*d,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Zt={DEG2RAD:Ni,RAD2DEG:bi,generateUUID:Ei,clamp:It,euclideanModulo:Rr,mapLinear:hc,inverseLerp:uc,lerp:Oi,damp:pc,pingpong:fc,smoothstep:mc,smootherstep:gc,randInt:vc,randFloat:xc,randFloatSpread:_c,seededRandom:yc,degToRad:bc,radToDeg:Sc,isPowerOfTwo:br,ceilPowerOfTwo:Mc,floorPowerOfTwo:Ts,setQuaternionFromProperEuler:Ec,normalize:Ct,denormalize:hi};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],m=n[5],g=n[8],v=i[0],f=i[3],p=i[6],S=i[1],_=i[4],T=i[7],I=i[2],A=i[5],R=i[8];return r[0]=o*v+a*S+l*I,r[3]=o*f+a*_+l*A,r[6]=o*p+a*T+l*R,r[1]=c*v+d*S+h*I,r[4]=c*f+d*_+h*A,r[7]=c*p+d*T+h*R,r[2]=u*v+m*S+g*I,r[5]=u*f+m*_+g*A,r[8]=u*p+m*T+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*r,m=c*r-o*l,g=t*h+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-d*n)*v,e[2]=(a*n-i*o)*v,e[3]=u*v,e[4]=(d*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gs.makeScale(e,t)),this}rotate(e){return this.premultiply(Gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Ge;function zo(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wc(){const s=Gi("canvas");return s.style.display="block",s}const wa={};function Fi(s){s in wa||(wa[s]=!0,console.warn(s))}const Ta=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Aa=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ji={[mn]:{transfer:Ss,primaries:Ms,toReference:s=>s,fromReference:s=>s},[dt]:{transfer:et,primaries:Ms,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Rs]:{transfer:Ss,primaries:Es,toReference:s=>s.applyMatrix3(Aa),fromReference:s=>s.applyMatrix3(Ta)},[Cr]:{transfer:et,primaries:Es,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Aa),fromReference:s=>s.applyMatrix3(Ta).convertLinearToSRGB()}},Tc=new Set([mn,Rs]),Ke={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Tc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ji[e].toReference,i=ji[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ji[s].primaries},getTransfer:function(s){return s===Vt?Ss:ji[s].transfer}};function vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Yn;class Ho{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=Gi("canvas")),Yn.width=e.width,Yn.height=e.height;const n=Yn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ac=0;class Go{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ws(i[o].image)):r.push(Ws(i[o]))}else r=Ws(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ws(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ho.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cc=0;class Dt extends Mi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Kt,i=Kt,r=Gt,o=zi,a=Jt,l=An,c=Dt.DEFAULT_ANISOTROPY,d=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Ei(),this.name="",this.source=new Go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Vn?dt:Vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?Vn:Fo}set encoding(e){Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vn?dt:Vt}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Ro;Dt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],m=l[5],g=l[9],v=l[2],f=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,T=(m+1)/2,I=(p+1)/2,A=(d+u)/4,R=(h+v)/4,W=(g+f)/4;return _>T&&_>I?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=A/n,r=R/n):T>I?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=A/i,r=W/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=R/r,i=W/r),this.set(n,i,r,t),this}let S=Math.sqrt((f-g)*(f-g)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(h-v)/S,this.z=(u-d)/S,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rc extends Mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Fi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vn?dt:Vt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Rc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vo extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lc extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==u||c!==m||d!==g){let f=1-a;const p=l*u+c*m+d*g+h*v,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const I=Math.sqrt(_),A=Math.atan2(I,p*S);f=Math.sin(f*A)/I,a=Math.sin(a*A)/I}const T=a*S;if(l=l*f+u*T,c=c*f+m*T,d=d*f+g*T,h=h*f+v*T,f===1-a){const I=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=I,c*=I,d*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[o],u=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+d*h+l*m-c*u,e[t+1]=l*g+d*u+c*h-a*m,e[t+2]=c*g+d*m+a*u-l*h,e[t+3]=d*g-a*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(r/2),u=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"YXZ":this._x=u*d*h+c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"ZXY":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h-u*m*g;break;case"ZYX":this._x=u*d*h-c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h+u*m*g;break;case"YZX":this._x=u*d*h+c*m*g,this._y=c*m*h+u*d*g,this._z=c*d*g-u*m*h,this._w=c*d*h-u*m*g;break;case"XZY":this._x=u*d*h-c*m*g,this._y=c*m*h-u*d*g,this._z=c*d*g+u*m*h,this._w=c*d*h+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class M{constructor(e=0,t=0,n=0){M.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=i+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xs.copy(this).projectOnVector(e),this.sub(Xs)}reflect(e){return this.sub(Xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new M,Ca=new Vi;class $e{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(r,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ki.copy(n.boundingBox)),Ki.applyMatrix4(e.matrixWorld),this.union(Ki)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),Ji.subVectors(this.max,Ai),jn.subVectors(e.a,Ai),Kn.subVectors(e.b,Ai),Jn.subVectors(e.c,Ai),vn.subVectors(Kn,jn),xn.subVectors(Jn,Kn),Pn.subVectors(jn,Jn);let t=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Pn.z,Pn.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Pn.z,0,-Pn.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Pn.y,Pn.x,0];return!qs(t,jn,Kn,Jn,Ji)||(t=[1,0,0,0,1,0,0,0,1],!qs(t,jn,Kn,Jn,Ji))?!1:(Zi.crossVectors(vn,xn),t=[Zi.x,Zi.y,Zi.z],qs(t,jn,Kn,Jn,Ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new M,new M,new M,new M,new M,new M,new M,new M],Xt=new M,Ki=new $e,jn=new M,Kn=new M,Jn=new M,vn=new M,xn=new M,Pn=new M,Ai=new M,Ji=new M,Zi=new M,In=new M;function qs(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){In.fromArray(s,r);const a=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),l=e.dot(In),c=t.dot(In),d=n.dot(In);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Pc=new $e,Ci=new M,$s=new M;class Wi{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ci,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add($s)),this.expandByPoint(Ci.copy(e.center).sub($s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new M,Ys=new M,Qi=new M,_n=new M,js=new M,es=new M,Ks=new M;class Ls{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ys.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(Ys);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Qi),a=_n.dot(this.direction),l=-_n.dot(Qi),c=_n.lengthSq(),d=Math.abs(1-o*o);let h,u,m,g;if(d>0)if(h=o*l-a,u=o*a-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const v=1/d;h*=v,u*=v,m=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ys).addScaledVector(Qi,u),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,r){js.subVectors(t,e),es.subVectors(n,e),Ks.crossVectors(js,es);let o=this.direction.dot(Ks),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_n.subVectors(this.origin,e);const l=a*this.direction.dot(es.crossVectors(_n,es));if(l<0)return null;const c=a*this.direction.dot(js.cross(_n));if(c<0||l+c>o)return null;const d=-a*_n.dot(Ks);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,r,o,a,l,c,d,h,u,m,g,v,f){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,d,h,u,m,g,v,f)}set(e,t,n,i,r,o,a,l,c,d,h,u,m,g,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=m,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zn.setFromMatrixColumn(e,0).length(),r=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=o*d,m=o*h,g=a*d,v=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,m=l*h,g=c*d,v=c*h;t[0]=u+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,m=l*h,g=c*d,v=c*h;t[0]=u-v*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,m=o*h,g=a*d,v=a*h;t[0]=l*d,t[4]=g*c-m,t[8]=u*c+v,t[1]=l*h,t[5]=v*c+u,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=v-u*h,t[8]=g*h+m,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*h+g,t[10]=u-v*h}else if(e.order==="XZY"){const u=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+v,t[5]=o*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ic,e,Dc)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),yn.crossVectors(n,Ft),yn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),yn.crossVectors(n,Ft)),yn.normalize(),ts.crossVectors(Ft,yn),i[0]=yn.x,i[4]=ts.x,i[8]=Ft.x,i[1]=yn.y,i[5]=ts.y,i[9]=Ft.y,i[2]=yn.z,i[6]=ts.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],m=n[13],g=n[2],v=n[6],f=n[10],p=n[14],S=n[3],_=n[7],T=n[11],I=n[15],A=i[0],R=i[4],W=i[8],b=i[12],w=i[1],z=i[5],G=i[9],Q=i[13],P=i[2],U=i[6],H=i[10],Y=i[14],X=i[3],$=i[7],j=i[11],ne=i[15];return r[0]=o*A+a*w+l*P+c*X,r[4]=o*R+a*z+l*U+c*$,r[8]=o*W+a*G+l*H+c*j,r[12]=o*b+a*Q+l*Y+c*ne,r[1]=d*A+h*w+u*P+m*X,r[5]=d*R+h*z+u*U+m*$,r[9]=d*W+h*G+u*H+m*j,r[13]=d*b+h*Q+u*Y+m*ne,r[2]=g*A+v*w+f*P+p*X,r[6]=g*R+v*z+f*U+p*$,r[10]=g*W+v*G+f*H+p*j,r[14]=g*b+v*Q+f*Y+p*ne,r[3]=S*A+_*w+T*P+I*X,r[7]=S*R+_*z+T*U+I*$,r[11]=S*W+_*G+T*H+I*j,r[15]=S*b+_*Q+T*Y+I*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],m=e[14],g=e[3],v=e[7],f=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*u+n*c*u+i*a*m-n*l*m)+v*(+t*l*m-t*c*u+r*o*u-i*o*m+i*c*d-r*l*d)+f*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*d-n*c*d)+p*(-i*a*d-t*l*h+t*a*u+i*o*h-n*o*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],m=e[11],g=e[12],v=e[13],f=e[14],p=e[15],S=h*f*c-v*u*c+v*l*m-a*f*m-h*l*p+a*u*p,_=g*u*c-d*f*c-g*l*m+o*f*m+d*l*p-o*u*p,T=d*v*c-g*h*c+g*a*m-o*v*m-d*a*p+o*h*p,I=g*h*l-d*v*l-g*a*u+o*v*u+d*a*f-o*h*f,A=t*S+n*_+i*T+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=S*R,e[1]=(v*u*r-h*f*r-v*i*m+n*f*m+h*i*p-n*u*p)*R,e[2]=(a*f*r-v*l*r+v*i*c-n*f*c-a*i*p+n*l*p)*R,e[3]=(h*l*r-a*u*r-h*i*c+n*u*c+a*i*m-n*l*m)*R,e[4]=_*R,e[5]=(d*f*r-g*u*r+g*i*m-t*f*m-d*i*p+t*u*p)*R,e[6]=(g*l*r-o*f*r-g*i*c+t*f*c+o*i*p-t*l*p)*R,e[7]=(o*u*r-d*l*r+d*i*c-t*u*c-o*i*m+t*l*m)*R,e[8]=T*R,e[9]=(g*h*r-d*v*r-g*n*m+t*v*m+d*n*p-t*h*p)*R,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*R,e[11]=(d*a*r-o*h*r-d*n*c+t*h*c+o*n*m-t*a*m)*R,e[12]=I*R,e[13]=(d*v*i-g*h*i+g*n*u-t*v*u-d*n*f+t*h*f)*R,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*f-t*a*f)*R,e[15]=(o*h*i-d*a*i+d*n*l-t*h*l-o*n*u+t*a*u)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,u=r*c,m=r*d,g=r*h,v=o*d,f=o*h,p=a*h,S=l*c,_=l*d,T=l*h,I=n.x,A=n.y,R=n.z;return i[0]=(1-(v+p))*I,i[1]=(m+T)*I,i[2]=(g-_)*I,i[3]=0,i[4]=(m-T)*A,i[5]=(1-(u+p))*A,i[6]=(f+S)*A,i[7]=0,i[8]=(g+_)*R,i[9]=(f-S)*R,i[10]=(1-(u+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Zn.set(i[0],i[1],i[2]).length();const o=Zn.set(i[4],i[5],i[6]).length(),a=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);const c=1/r,d=1/o,h=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=d,qt.elements[5]*=d,qt.elements[6]*=d,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=pn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let m,g;if(a===pn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ws)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=pn){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(o-r),u=(t+e)*c,m=(n+i)*d;let g,v;if(a===pn)g=(o+r)*h,v=-2*h;else if(a===ws)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new M,qt=new tt,Ic=new M(0,0,0),Dc=new M(1,1,1),yn=new M,ts=new M,Ft=new M,Ra=new tt,La=new Vi;class Qt{constructor(e=0,t=0,n=0,i=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ra.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ra,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return La.setFromEuler(this),this.setFromQuaternion(La,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class Lr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uc=0;const Pa=new M,Qn=new Vi,ln=new tt,ns=new M,Ri=new M,Nc=new M,Oc=new Vi,Ia=new M(1,0,0),Da=new M(0,1,0),Ua=new M(0,0,1),Fc={type:"added"},kc={type:"removed"};class ht extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new M,t=new Qt,n=new Vi,i=new M(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ge}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(Ia,e)}rotateY(e){return this.rotateOnAxis(Da,e)}rotateZ(e){return this.rotateOnAxis(Ua,e)}translateOnAxis(e,t){return Pa.copy(e).applyQuaternion(this.quaternion),this.position.add(Pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ia,e)}translateY(e){return this.translateOnAxis(Da,e)}translateZ(e){return this.translateOnAxis(Ua,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Ri,ns,this.up):ln.lookAt(ns,Ri,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),Qn.setFromRotationMatrix(ln),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,Nc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,Oc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new M(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new M,cn=new M,Js=new M,dn=new M,ei=new M,ti=new M,Na=new M,Zs=new M,Qs=new M,er=new M;let is=!1;class jt{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$t.subVectors(e,t),i.cross($t);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$t.subVectors(i,t),cn.subVectors(n,t),Js.subVectors(e,t);const o=$t.dot($t),a=$t.dot(cn),l=$t.dot(Js),c=cn.dot(cn),d=cn.dot(Js),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,m=(c*l-a*d)*u,g=(o*d-a*l)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,n,i,r,o,a,l){return is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),is=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l)}static isFrontFacing(e,t,n,i){return $t.subVectors(n,t),cn.subVectors(e,t),$t.cross(cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),$t.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),is=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ei.subVectors(i,n),ti.subVectors(r,n),Zs.subVectors(e,n);const l=ei.dot(Zs),c=ti.dot(Zs);if(l<=0&&c<=0)return t.copy(n);Qs.subVectors(e,i);const d=ei.dot(Qs),h=ti.dot(Qs);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(ei,o);er.subVectors(e,r);const m=ei.dot(er),g=ti.dot(er);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ti,a);const f=d*g-m*h;if(f<=0&&h-d>=0&&m-g>=0)return Na.subVectors(r,i),a=(h-d)/(h-d+(m-g)),t.copy(i).addScaledVector(Na,a);const p=1/(f+v+u);return o=v*p,a=u*p,t.copy(n).addScaledVector(ei,o).addScaledVector(ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function tr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Rr(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tr(o,r,e+1/3),this.g=tr(o,r,e),this.b=tr(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const n=Wo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Ke.fromWorkingColorSpace(Mt.copy(this),e),Math.round(It(Mt.r*255,0,255))*65536+Math.round(It(Mt.g*255,0,255))*256+Math.round(It(Mt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,i=Mt.g,r=Mt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=dt){Ke.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,i=Mt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(ss);const n=Oi(bn.h,ss.h,t),i=Oi(bn.s,ss.s,t),r=Oi(bn.l,ss.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Xe;Xe.NAMES=Wo;let Bc=0;class Xi extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=gi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=gr,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mr&&(n.blendSrc=this.blendSrc),this.blendDst!==gr&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fn extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new M,rs=new Be;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rs.fromBufferAttribute(this,t),rs.applyMatrix3(e),this.setXY(t,rs.x,rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),e}}class Xo extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qo extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zc=0;const Ht=new tt,nr=new ht,ni=new M,kt=new $e,Li=new $e,gt=new M;class sn extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zo(e)?qo:Xo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return nr.lookAt(e),nr.updateMatrix(),this.applyMatrix4(nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Li.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(kt.min,Li.min),kt.expandByPoint(gt),gt.addVectors(kt.max,Li.max),kt.expandByPoint(gt)):(kt.expandByPoint(Li.min),kt.expandByPoint(Li.max))}kt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)gt.fromBufferAttribute(a,c),l&&(ni.fromBufferAttribute(e,c),gt.add(ni)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<a;w++)c[w]=new M,d[w]=new M;const h=new M,u=new M,m=new M,g=new Be,v=new Be,f=new Be,p=new M,S=new M;function _(w,z,G){h.fromArray(i,w*3),u.fromArray(i,z*3),m.fromArray(i,G*3),g.fromArray(o,w*2),v.fromArray(o,z*2),f.fromArray(o,G*2),u.sub(h),m.sub(h),v.sub(g),f.sub(g);const Q=1/(v.x*f.y-f.x*v.y);isFinite(Q)&&(p.copy(u).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(Q),S.copy(m).multiplyScalar(v.x).addScaledVector(u,-f.x).multiplyScalar(Q),c[w].add(p),c[z].add(p),c[G].add(p),d[w].add(S),d[z].add(S),d[G].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,z=T.length;w<z;++w){const G=T[w],Q=G.start,P=G.count;for(let U=Q,H=Q+P;U<H;U+=3)_(n[U+0],n[U+1],n[U+2])}const I=new M,A=new M,R=new M,W=new M;function b(w){R.fromArray(r,w*3),W.copy(R);const z=c[w];I.copy(z),I.sub(R.multiplyScalar(R.dot(z))).normalize(),A.crossVectors(W,z);const Q=A.dot(d[w])<0?-1:1;l[w*4]=I.x,l[w*4+1]=I.y,l[w*4+2]=I.z,l[w*4+3]=Q}for(let w=0,z=T.length;w<z;++w){const G=T[w],Q=G.start,P=G.count;for(let U=Q,H=Q+P;U<H;U+=3)b(n[U+0]),b(n[U+1]),b(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new M,r=new M,o=new M,a=new M,l=new M,c=new M,d=new M,h=new M;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),v=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*d;for(let p=0;p<d;p++)u[g++]=c[m++]}return new en(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],m=e(u,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oa=new tt,Dn=new Ls,as=new Wi,Fa=new M,ii=new M,si=new M,ri=new M,ir=new M,os=new M,ls=new Be,cs=new Be,ds=new Be,ka=new M,Ba=new M,za=new M,hs=new M,us=new M;class q extends ht{constructor(e=new sn,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(ir.fromBufferAttribute(h,e),o?os.addScaledVector(ir,d):os.addScaledVector(ir.sub(t),d))}t.add(os)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),Dn.copy(e.ray).recast(e.near),!(as.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(as,Fa)===null||Dn.origin.distanceToSquared(Fa)>(e.far-e.near)**2))&&(Oa.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(Oa),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const f=u[g],p=o[f.materialIndex],S=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let T=S,I=_;T<I;T+=3){const A=a.getX(T),R=a.getX(T+1),W=a.getX(T+2);i=ps(this,p,e,n,c,d,h,A,R,W),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const S=a.getX(f),_=a.getX(f+1),T=a.getX(f+2);i=ps(this,o,e,n,c,d,h,S,_,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const f=u[g],p=o[f.materialIndex],S=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=S,I=_;T<I;T+=3){const A=T,R=T+1,W=T+2;i=ps(this,p,e,n,c,d,h,A,R,W),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const S=f,_=f+1,T=f+2;i=ps(this,o,e,n,c,d,h,S,_,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Hc(s,e,t,n,i,r,o,a){let l;if(e.side===Nt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Cn,a),l===null)return null;us.copy(a),us.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(us);return c<t.near||c>t.far?null:{distance:c,point:us.clone(),object:s}}function ps(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ii),s.getVertexPosition(l,si),s.getVertexPosition(c,ri);const d=Hc(s,e,t,n,ii,si,ri,hs);if(d){i&&(ls.fromBufferAttribute(i,a),cs.fromBufferAttribute(i,l),ds.fromBufferAttribute(i,c),d.uv=jt.getInterpolation(hs,ii,si,ri,ls,cs,ds,new Be)),r&&(ls.fromBufferAttribute(r,a),cs.fromBufferAttribute(r,l),ds.fromBufferAttribute(r,c),d.uv1=jt.getInterpolation(hs,ii,si,ri,ls,cs,ds,new Be),d.uv2=d.uv1),o&&(ka.fromBufferAttribute(o,a),Ba.fromBufferAttribute(o,l),za.fromBufferAttribute(o,c),d.normal=jt.getInterpolation(hs,ii,si,ri,ka,Ba,za,new M),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new M,materialIndex:0};jt.getNormal(ii,si,ri,h.normal),d.face=h}return d}class ge extends sn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(h,2));function g(v,f,p,S,_,T,I,A,R,W,b){const w=T/R,z=I/W,G=T/2,Q=I/2,P=A/2,U=R+1,H=W+1;let Y=0,X=0;const $=new M;for(let j=0;j<H;j++){const ne=j*z-Q;for(let ie=0;ie<U;ie++){const V=ie*w-G;$[v]=V*S,$[f]=ne*_,$[p]=P,c.push($.x,$.y,$.z),$[v]=0,$[f]=0,$[p]=A>0?1:-1,d.push($.x,$.y,$.z),h.push(ie/R),h.push(1-j/W),Y+=1}}for(let j=0;j<W;j++)for(let ne=0;ne<R;ne++){const ie=u+ne+U*j,V=u+ne+U*(j+1),K=u+(ne+1)+U*(j+1),ce=u+(ne+1)+U*j;l.push(ie,V,ce),l.push(V,K,ce),X+=6}a.addGroup(m,X,b),m+=X,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ge(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){const e={};for(let t=0;t<s.length;t++){const n=Si(s[t]);for(const i in n)e[i]=n[i]}return e}function Gc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $o(s){return s.getRenderTarget()===null?s.outputColorSpace:Ke.workingColorSpace}const Vc={clone:Si,merge:Rt};var Wc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wc,this.fragmentShader=Xc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=Gc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yo extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends Yo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bi*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ni*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ai=-90,oi=1;class qc extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ut(ai,oi,e,t);i.layers=this.layers,this.add(i);const r=new Ut(ai,oi,e,t);r.layers=this.layers,this.add(r);const o=new Ut(ai,oi,e,t);o.layers=this.layers,this.add(o);const a=new Ut(ai,oi,e,t);a.layers=this.layers,this.add(a);const l=new Ut(ai,oi,e,t);l.layers=this.layers,this.add(l);const c=new Ut(ai,oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jo extends Dt{constructor(e,t,n,i,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:xi,super(e,t,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $c extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Fi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vn?dt:Vt),this.texture=new jo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ge(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:wn});r.uniforms.tEquirect.value=t;const o=new q(i,r),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=Gt),new qc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const sr=new M,Yc=new M,jc=new Ge;class On{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sr.subVectors(n,t).cross(Yc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jc.getNormalMatrix(e),i=this.coplanarPoint(sr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Wi,fs=new M;class Pr{constructor(e=new On,t=new On,n=new On,i=new On,r=new On,o=new On){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],m=i[8],g=i[9],v=i[10],f=i[11],p=i[12],S=i[13],_=i[14],T=i[15];if(n[0].setComponents(l-r,u-c,f-m,T-p).normalize(),n[1].setComponents(l+r,u+c,f+m,T+p).normalize(),n[2].setComponents(l+o,u+d,f+g,T+S).normalize(),n[3].setComponents(l-o,u-d,f-g,T-S).normalize(),n[4].setComponents(l-a,u-h,f-v,T-_).normalize(),t===pn)n[5].setComponents(l+a,u+h,f+v,T+_).normalize();else if(t===ws)n[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fs.x=i.normal.x>0?e.max.x:e.min.x,fs.y=i.normal.y>0?e.max.y:e.min.y,fs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ko(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Kc(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const h=c.array,u=c.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,h,u),c.onUploadCallback();let v;if(h instanceof Float32Array)v=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=s.SHORT;else if(h instanceof Uint32Array)v=s.UNSIGNED_INT;else if(h instanceof Int32Array)v=s.INT;else if(h instanceof Int8Array)v=s.BYTE;else if(h instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,d,h){const u=d.array,m=d._updateRange,g=d.updateRanges;if(s.bindBuffer(h,c),m.count===-1&&g.length===0&&s.bufferSubData(h,0,u),g.length!==0){for(let v=0,f=g.length;v<f;v++){const p=g[v];t?s.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):s.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):s.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(s.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class yt extends sn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=e/a,u=t/l,m=[],g=[],v=[],f=[];for(let p=0;p<d;p++){const S=p*u-o;for(let _=0;_<c;_++){const T=_*h-r;g.push(T,-S,0),v.push(0,0,1),f.push(_/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const _=S+c*p,T=S+c*(p+1),I=S+1+c*(p+1),A=S+1+c*p;m.push(_,T,A),m.push(T,I,A)}this.setIndex(m),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,th=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ah=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ch=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ph=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_h=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Th=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ah=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ch=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ih=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,su=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ru=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ou=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,du=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_u=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Au=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ru=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Jc,alphahash_pars_fragment:Zc,alphamap_fragment:Qc,alphamap_pars_fragment:ed,alphatest_fragment:td,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:sd,batching_pars_vertex:rd,batching_vertex:ad,begin_vertex:od,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:dd,bumpmap_pars_fragment:hd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:fd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:vd,color_pars_vertex:xd,color_vertex:_d,common:yd,cube_uv_reflection_fragment:bd,defaultnormal_vertex:Sd,displacementmap_pars_vertex:Md,displacementmap_vertex:Ed,emissivemap_fragment:wd,emissivemap_pars_fragment:Td,colorspace_fragment:Ad,colorspace_pars_fragment:Cd,envmap_fragment:Rd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Pd,envmap_pars_vertex:Id,envmap_physical_pars_fragment:Wd,envmap_vertex:Dd,fog_vertex:Ud,fog_pars_vertex:Nd,fog_fragment:Od,fog_pars_fragment:Fd,gradientmap_pars_fragment:kd,lightmap_fragment:Bd,lightmap_pars_fragment:zd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Vd,lights_toon_fragment:Xd,lights_toon_pars_fragment:qd,lights_phong_fragment:$d,lights_phong_pars_fragment:Yd,lights_physical_fragment:jd,lights_physical_pars_fragment:Kd,lights_fragment_begin:Jd,lights_fragment_maps:Zd,lights_fragment_end:Qd,logdepthbuf_fragment:eh,logdepthbuf_pars_fragment:th,logdepthbuf_pars_vertex:nh,logdepthbuf_vertex:ih,map_fragment:sh,map_pars_fragment:rh,map_particle_fragment:ah,map_particle_pars_fragment:oh,metalnessmap_fragment:lh,metalnessmap_pars_fragment:ch,morphcolor_vertex:dh,morphnormal_vertex:hh,morphtarget_pars_vertex:uh,morphtarget_vertex:ph,normal_fragment_begin:fh,normal_fragment_maps:mh,normal_pars_fragment:gh,normal_pars_vertex:vh,normal_vertex:xh,normalmap_pars_fragment:_h,clearcoat_normal_fragment_begin:yh,clearcoat_normal_fragment_maps:bh,clearcoat_pars_fragment:Sh,iridescence_pars_fragment:Mh,opaque_fragment:Eh,packing:wh,premultiplied_alpha_fragment:Th,project_vertex:Ah,dithering_fragment:Ch,dithering_pars_fragment:Rh,roughnessmap_fragment:Lh,roughnessmap_pars_fragment:Ph,shadowmap_pars_fragment:Ih,shadowmap_pars_vertex:Dh,shadowmap_vertex:Uh,shadowmask_pars_fragment:Nh,skinbase_vertex:Oh,skinning_pars_vertex:Fh,skinning_vertex:kh,skinnormal_vertex:Bh,specularmap_fragment:zh,specularmap_pars_fragment:Hh,tonemapping_fragment:Gh,tonemapping_pars_fragment:Vh,transmission_fragment:Wh,transmission_pars_fragment:Xh,uv_pars_fragment:qh,uv_pars_vertex:$h,uv_vertex:Yh,worldpos_vertex:jh,background_vert:Kh,background_frag:Jh,backgroundCube_vert:Zh,backgroundCube_frag:Qh,cube_vert:eu,cube_frag:tu,depth_vert:nu,depth_frag:iu,distanceRGBA_vert:su,distanceRGBA_frag:ru,equirect_vert:au,equirect_frag:ou,linedashed_vert:lu,linedashed_frag:cu,meshbasic_vert:du,meshbasic_frag:hu,meshlambert_vert:uu,meshlambert_frag:pu,meshmatcap_vert:fu,meshmatcap_frag:mu,meshnormal_vert:gu,meshnormal_frag:vu,meshphong_vert:xu,meshphong_frag:_u,meshphysical_vert:yu,meshphysical_frag:bu,meshtoon_vert:Su,meshtoon_frag:Mu,points_vert:Eu,points_frag:wu,shadow_vert:Tu,shadow_frag:Au,sprite_vert:Cu,sprite_frag:Ru},re={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},nn={basic:{uniforms:Rt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Rt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Rt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Rt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Rt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Rt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Rt([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Rt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Rt([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Rt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Rt([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Rt([re.common,re.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Rt([re.lights,re.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};nn.physical={uniforms:Rt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ms={r:0,b:0,g:0};function Lu(s,e,t,n,i,r,o){const a=new Xe(0);let l=r===!0?0:1,c,d,h=null,u=0,m=null;function g(f,p){let S=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),S=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Cs)?(d===void 0&&(d=new q(new ge(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Si(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=Ke.getTransfer(_.colorSpace)!==et,(h!==_||u!==_.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,h=_,u=_.version,m=s.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new q(new yt(2,2),new qn({name:"BackgroundMaterial",uniforms:Si(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(_.colorSpace)!==et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB(ms,$o(s)),n.buffers.color.setClear(ms.r,ms.g,ms.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(a,l)},render:g}}function Pu(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=f(null);let c=l,d=!1;function h(P,U,H,Y,X){let $=!1;if(o){const j=v(Y,H,U);c!==j&&(c=j,m(c.object)),$=p(P,Y,H,X),$&&S(P,Y,H,X)}else{const j=U.wireframe===!0;(c.geometry!==Y.id||c.program!==H.id||c.wireframe!==j)&&(c.geometry=Y.id,c.program=H.id,c.wireframe=j,$=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,W(P,U,H,Y),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,U,H){const Y=H.wireframe===!0;let X=a[P.id];X===void 0&&(X={},a[P.id]=X);let $=X[U.id];$===void 0&&($={},X[U.id]=$);let j=$[Y];return j===void 0&&(j=f(u()),$[Y]=j),j}function f(P){const U=[],H=[],Y=[];for(let X=0;X<i;X++)U[X]=0,H[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,U,H,Y){const X=c.attributes,$=U.attributes;let j=0;const ne=H.getAttributes();for(const ie in ne)if(ne[ie].location>=0){const K=X[ie];let ce=$[ie];if(ce===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;j++}return c.attributesNum!==j||c.index!==Y}function S(P,U,H,Y){const X={},$=U.attributes;let j=0;const ne=H.getAttributes();for(const ie in ne)if(ne[ie].location>=0){let K=$[ie];K===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),X[ie]=ce,j++}c.attributes=X,c.attributesNum=j,c.index=Y}function _(){const P=c.newAttributes;for(let U=0,H=P.length;U<H;U++)P[U]=0}function T(P){I(P,0)}function I(P,U){const H=c.newAttributes,Y=c.enabledAttributes,X=c.attributeDivisors;H[P]=1,Y[P]===0&&(s.enableVertexAttribArray(P),Y[P]=1),X[P]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),X[P]=U)}function A(){const P=c.newAttributes,U=c.enabledAttributes;for(let H=0,Y=U.length;H<Y;H++)U[H]!==P[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function R(P,U,H,Y,X,$,j){j===!0?s.vertexAttribIPointer(P,U,H,X,$):s.vertexAttribPointer(P,U,H,Y,X,$)}function W(P,U,H,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const X=Y.attributes,$=H.getAttributes(),j=U.defaultAttributeValues;for(const ne in $){const ie=$[ne];if(ie.location>=0){let V=X[ne];if(V===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const K=V.normalized,ce=V.itemSize,xe=t.get(V);if(xe===void 0)continue;const ve=xe.buffer,Pe=xe.type,De=xe.bytesPerElement,we=n.isWebGL2===!0&&(Pe===s.INT||Pe===s.UNSIGNED_INT||V.gpuType===Lo);if(V.isInterleavedBufferAttribute){const qe=V.data,N=qe.stride,wt=V.offset;if(qe.isInstancedInterleavedBuffer){for(let ye=0;ye<ie.locationSize;ye++)I(ie.location+ye,qe.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let ye=0;ye<ie.locationSize;ye++)T(ie.location+ye);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let ye=0;ye<ie.locationSize;ye++)R(ie.location+ye,ce/ie.locationSize,Pe,K,N*De,(wt+ce/ie.locationSize*ye)*De,we)}else{if(V.isInstancedBufferAttribute){for(let qe=0;qe<ie.locationSize;qe++)I(ie.location+qe,V.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let qe=0;qe<ie.locationSize;qe++)T(ie.location+qe);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let qe=0;qe<ie.locationSize;qe++)R(ie.location+qe,ce/ie.locationSize,Pe,K,ce*De,ce/ie.locationSize*qe*De,we)}}else if(j!==void 0){const K=j[ne];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ie.location,K);break;case 3:s.vertexAttrib3fv(ie.location,K);break;case 4:s.vertexAttrib4fv(ie.location,K);break;default:s.vertexAttrib1fv(ie.location,K)}}}}A()}function b(){G();for(const P in a){const U=a[P];for(const H in U){const Y=U[H];for(const X in Y)g(Y[X].object),delete Y[X];delete U[H]}delete a[P]}}function w(P){if(a[P.id]===void 0)return;const U=a[P.id];for(const H in U){const Y=U[H];for(const X in Y)g(Y[X].object),delete Y[X];delete U[H]}delete a[P.id]}function z(P){for(const U in a){const H=a[U];if(H[P.id]===void 0)continue;const Y=H[P.id];for(const X in Y)g(Y[X].object),delete Y[X];delete H[P.id]}}function G(){Q(),d=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:Q,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:T,disableUnusedAttributes:A}}function Iu(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}function a(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function l(d,h,u){if(u===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,d,h,u),t.update(h,r,u)}function c(d,h,u){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u;g++)this.render(d[g],h[g]);else{m.multiDrawArraysWEBGL(r,d,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Du(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,T=o||e.has("OES_texture_float"),I=_&&T,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:I,maxSamples:A}}function Uu(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new On,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||i;return i=u,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,m){const g=h.clippingPlanes,v=h.clipIntersection,f=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!f)r?d(null):c();else{const S=r?0:n,_=S*4;let T=p.clippingState||null;l.value=T,T=d(g,u,_,m);for(let I=0;I!==_;++I)T[I]=t[I];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,m,g){const v=h!==null?h.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const p=m+v*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let _=0,T=m;_!==v;++_,T+=4)o.copy(h[_]).applyMatrix4(S,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Nu(s){let e=new WeakMap;function t(o,a){return a===vr?o.mapping=xi:a===xr&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vr||a===xr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $c(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Jo extends Yo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ui=4,Ha=[.125,.215,.35,.446,.526,.582],Bn=20,rr=new Jo,Ga=new Xe;let ar=null,or=0,lr=0;const Fn=(1+Math.sqrt(5))/2,li=1/Fn,Va=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,Fn,li),new M(0,Fn,-li),new M(li,0,Fn),new M(-li,0,Fn),new M(Fn,li,0),new M(-Fn,li,0)];class Wa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ar,or,lr),e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Hi,format:Jt,colorSpace:mn,depthBuffer:!1},i=Xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ou(r)),this._blurMaterial=Fu(r,e,t)}return i}_compileMaterial(e){const t=new q(this._lodPlanes[0],e);this._renderer.compile(t,rr)}_sceneToCubeUV(e,t,n,i){const a=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Ga),d.toneMapping=Tn,d.autoClear=!1;const m=new fn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new q(new ge,m);let v=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,v=!0):(m.color.copy(Ga),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;gs(i,S*_,p>2?_:0,_,_),d.setRenderTarget(i),v&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xi||e.mapping===_i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;gs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,rr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Va[(i-1)%Va.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new q(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),v=r/g,f=isFinite(r)?1+Math.floor(d*v):Bn;f>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Bn}`);const p=[];let S=0;for(let R=0;R<Bn;++R){const W=R/v,b=Math.exp(-W*W/2);p.push(b),R===0?S+=b:R<f&&(S+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const T=this._sizeLods[i],I=3*T*(i>_-ui?i-_+ui:0),A=4*(this._cubeSize-T);gs(t,I,A,3*T,2*T),l.setRenderTarget(t),l.render(h,rr)}}function Ou(s){const e=[],t=[],n=[];let i=s;const r=s-ui+1+Ha.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ui?l=Ha[o-s+ui-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,v=3,f=2,p=1,S=new Float32Array(v*g*m),_=new Float32Array(f*g*m),T=new Float32Array(p*g*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,W=A>2?0:-1,b=[R,W,0,R+2/3,W,0,R+2/3,W+1,0,R,W,0,R+2/3,W+1,0,R,W+1,0];S.set(b,v*g*A),_.set(u,f*g*A);const w=[A,A,A,A,A,A];T.set(w,p*g*A)}const I=new sn;I.setAttribute("position",new en(S,v)),I.setAttribute("uv",new en(_,f)),I.setAttribute("faceIndex",new en(T,p)),e.push(I),i>ui&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xa(s,e,t){const n=new Xn(s,e,t);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Fu(s,e,t){const n=new Float32Array(Bn),i=new M(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function qa(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function $a(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ir(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ku(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===vr||l===xr,d=l===xi||l===_i;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Wa(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&i(h)){t===null&&(t=new Wa(s));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bu(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zu(s,e,t,n){const i={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let f=0,p=v.length;f<p;f++)e.remove(v[f])}u.removeEventListener("dispose",o),delete i[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const v=m[g];for(let f=0,p=v.length;f<p;f++)e.update(v[f],s.ARRAY_BUFFER)}}function c(h){const u=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let _=0,T=S.length;_<T;_+=3){const I=S[_+0],A=S[_+1],R=S[_+2];u.push(I,A,A,R,R,I)}}else if(g!==void 0){const S=g.array;v=g.version;for(let _=0,T=S.length/3-1;_<T;_+=3){const I=_+0,A=_+1,R=_+2;u.push(I,A,A,R,R,I)}}else return;const f=new(zo(u)?qo:Xo)(u,1);f.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,f)}function d(h){const u=r.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Hu(s,e,t,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,g){s.drawElements(r,g,a,m*l),t.update(g,r,1)}function h(m,g,v){if(v===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,a,m*l,v),t.update(g,r,v)}function u(m,g,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,v);let p=0;for(let S=0;S<v;S++)p+=g[S];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=u}function Gu(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vu(s,e){return s[0]-e[0]}function Wu(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Xu(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let f=r.get(d);if(f===void 0||f.count!==v){let U=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",U)};var m=U;f!==void 0&&f.texture.dispose();const _=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,I=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],W=d.morphAttributes.color||[];let b=0;_===!0&&(b=1),T===!0&&(b=2),I===!0&&(b=3);let w=d.attributes.position.count*b,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const G=new Float32Array(w*z*4*v),Q=new Vo(G,w,z,v);Q.type=En,Q.needsUpdate=!0;const P=b*4;for(let H=0;H<v;H++){const Y=A[H],X=R[H],$=W[H],j=w*z*4*H;for(let ne=0;ne<Y.count;ne++){const ie=ne*P;_===!0&&(o.fromBufferAttribute(Y,ne),G[j+ie+0]=o.x,G[j+ie+1]=o.y,G[j+ie+2]=o.z,G[j+ie+3]=0),T===!0&&(o.fromBufferAttribute(X,ne),G[j+ie+4]=o.x,G[j+ie+5]=o.y,G[j+ie+6]=o.z,G[j+ie+7]=0),I===!0&&(o.fromBufferAttribute($,ne),G[j+ie+8]=o.x,G[j+ie+9]=o.y,G[j+ie+10]=o.z,G[j+ie+11]=$.itemSize===4?o.w:1)}}f={count:v,texture:Q,size:new Be(w,z)},r.set(d,f),d.addEventListener("dispose",U)}let p=0;for(let _=0;_<u.length;_++)p+=u[_];const S=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",u),h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=u===void 0?0:u.length;let v=n[d.id];if(v===void 0||v.length!==g){v=[];for(let T=0;T<g;T++)v[T]=[T,0];n[d.id]=v}for(let T=0;T<g;T++){const I=v[T];I[0]=T,I[1]=u[T]}v.sort(Wu);for(let T=0;T<8;T++)T<g&&v[T][1]?(a[T][0]=v[T][0],a[T][1]=v[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(Vu);const f=d.morphAttributes.position,p=d.morphAttributes.normal;let S=0;for(let T=0;T<8;T++){const I=a[T],A=I[0],R=I[1];A!==Number.MAX_SAFE_INTEGER&&R?(f&&d.getAttribute("morphTarget"+T)!==f[A]&&d.setAttribute("morphTarget"+T,f[A]),p&&d.getAttribute("morphNormal"+T)!==p[A]&&d.setAttribute("morphNormal"+T,p[A]),i[T]=R,S+=R):(f&&d.hasAttribute("morphTarget"+T)===!0&&d.deleteAttribute("morphTarget"+T),p&&d.hasAttribute("morphNormal"+T)===!0&&d.deleteAttribute("morphNormal"+T),i[T]=0)}const _=d.morphTargetsRelative?1:1-S;h.getUniforms().setValue(s,"morphTargetBaseInfluence",_),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function qu(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Zo extends Dt{constructor(e,t,n,i,r,o,a,l,c,d){if(d=d!==void 0?d:Gn,d!==Gn&&d!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Gn&&(n=Mn),n===void 0&&d===yi&&(n=Hn),super(null,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qo=new Dt,el=new Zo(1,1);el.compareFunction=Bo;const tl=new Vo,nl=new Lc,il=new jo,Ya=[],ja=[],Ka=new Float32Array(16),Ja=new Float32Array(9),Za=new Float32Array(4);function wi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ya[i];if(r===void 0&&(r=new Float32Array(i),Ya[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ps(s,e){let t=ja[e];t===void 0&&(t=new Int32Array(e),ja[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function $u(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Yu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function ju(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function Ku(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function Ju(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ut(t,n))return;Za.set(n),s.uniformMatrix2fv(this.addr,!1,Za),pt(t,n)}}function Zu(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ut(t,n))return;Ja.set(n),s.uniformMatrix3fv(this.addr,!1,Ja),pt(t,n)}}function Qu(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ut(t,n))return;Ka.set(n),s.uniformMatrix4fv(this.addr,!1,Ka),pt(t,n)}}function ep(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}function np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}function ip(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}function sp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}function ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}function op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}function lp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?el:Qo;t.setTexture2D(e||r,i)}function cp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nl,i)}function dp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||il,i)}function hp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tl,i)}function up(s){switch(s){case 5126:return $u;case 35664:return Yu;case 35665:return ju;case 35666:return Ku;case 35674:return Ju;case 35675:return Zu;case 35676:return Qu;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return sp;case 36294:return rp;case 36295:return ap;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return hp}}function pp(s,e){s.uniform1fv(this.addr,e)}function fp(s,e){const t=wi(e,this.size,2);s.uniform2fv(this.addr,t)}function mp(s,e){const t=wi(e,this.size,3);s.uniform3fv(this.addr,t)}function gp(s,e){const t=wi(e,this.size,4);s.uniform4fv(this.addr,t)}function vp(s,e){const t=wi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xp(s,e){const t=wi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _p(s,e){const t=wi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yp(s,e){s.uniform1iv(this.addr,e)}function bp(s,e){s.uniform2iv(this.addr,e)}function Sp(s,e){s.uniform3iv(this.addr,e)}function Mp(s,e){s.uniform4iv(this.addr,e)}function Ep(s,e){s.uniform1uiv(this.addr,e)}function wp(s,e){s.uniform2uiv(this.addr,e)}function Tp(s,e){s.uniform3uiv(this.addr,e)}function Ap(s,e){s.uniform4uiv(this.addr,e)}function Cp(s,e,t){const n=this.cache,i=e.length,r=Ps(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Qo,r[o])}function Rp(s,e,t){const n=this.cache,i=e.length,r=Ps(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||nl,r[o])}function Lp(s,e,t){const n=this.cache,i=e.length,r=Ps(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||il,r[o])}function Pp(s,e,t){const n=this.cache,i=e.length,r=Ps(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||tl,r[o])}function Ip(s){switch(s){case 5126:return pp;case 35664:return fp;case 35665:return mp;case 35666:return gp;case 35674:return vp;case 35675:return xp;case 35676:return _p;case 5124:case 35670:return yp;case 35667:case 35671:return bp;case 35668:case 35672:return Sp;case 35669:case 35673:return Mp;case 5125:return Ep;case 36294:return wp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Pp}}class Dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=up(t.type)}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ip(t.type)}}class Np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const cr=/(\w+)(\])?(\[|\.)?/g;function Qa(s,e){s.seq.push(e),s.map[e.id]=e}function Op(s,e,t){const n=s.name,i=n.length;for(cr.lastIndex=0;;){const r=cr.exec(n),o=cr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Qa(t,c===void 0?new Dp(a,s,e):new Up(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Np(a),Qa(t,h)),t=h}}}class _s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Op(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function eo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Fp=37297;let kp=0;function Bp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function zp(s){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s);let n;switch(e===t?n="":e===Es&&t===Ms?n="LinearDisplayP3ToLinearSRGB":e===Ms&&t===Es&&(n="LinearSRGBToLinearDisplayP3"),s){case mn:case Rs:return[n,"LinearTransferOETF"];case dt:case Cr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function to(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Bp(s.getShaderSource(e),o)}else return i}function Hp(s,e){const t=zp(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gp(s,e){let t;switch(e){case Hl:t="Linear";break;case Gl:t="Reinhard";break;case Vl:t="OptimizedCineon";break;case Co:t="ACESFilmic";break;case Xl:t="AgX";break;case Wl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pi).join(`
`)}function Wp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(pi).join(`
`)}function Xp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function pi(s){return s!==""}function no(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function io(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $p=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sr(s){return s.replace($p,jp)}const Yp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jp(s,e){let t=Ne[e];if(t===void 0){const n=Yp.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sr(t)}const Kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function so(s){return s.replace(Kp,Jp)}function Jp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ro(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tr?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fr?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xi:case _i:e="ENVMAP_TYPE_CUBE";break;case Cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ef(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _i:e="ENVMAP_MODE_REFRACTION";break}return e}function tf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ao:e="ENVMAP_BLENDING_MULTIPLY";break;case Bl:e="ENVMAP_BLENDING_MIX";break;case zl:e="ENVMAP_BLENDING_ADD";break}return e}function nf(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sf(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zp(t),c=Qp(t),d=ef(t),h=tf(t),u=nf(t),m=t.isWebGL2?"":Vp(t),g=Wp(t),v=Xp(r),f=i.createProgram();let p,S,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(pi).join(`
`),p.length>0&&(p+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(pi).join(`
`),S.length>0&&(S+=`
`)):(p=[ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pi).join(`
`),S=[m,ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Tn?Gp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Hp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pi).join(`
`)),o=Sr(o),o=no(o,t),o=io(o,t),a=Sr(a),a=no(a,t),a=io(a,t),o=so(o),a=so(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const T=_+p+o,I=_+S+a,A=eo(i,i.VERTEX_SHADER,T),R=eo(i,i.FRAGMENT_SHADER,I);i.attachShader(f,A),i.attachShader(f,R),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function W(G){if(s.debug.checkShaderErrors){const Q=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(A).trim(),U=i.getShaderInfoLog(R).trim();let H=!0,Y=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,A,R);else{const X=to(i,A,"vertex"),$=to(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+X+`
`+$)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||U==="")&&(Y=!1);Y&&(G.diagnostics={runnable:H,programLog:Q,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:S}})}i.deleteShader(A),i.deleteShader(R),b=new _s(i,f),w=qp(i,f)}let b;this.getUniforms=function(){return b===void 0&&W(this),b};let w;this.getAttributes=function(){return w===void 0&&W(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(f,Fp)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=R,this}let rf=0;class af{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new of(e),t.set(e,n)),n}}class of{constructor(e){this.id=rf++,this.code=e,this.usedTimes=0}}function lf(s,e,t,n,i,r,o){const a=new Lr,l=new af,c=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function f(b,w,z,G,Q){const P=G.fog,U=Q.geometry,H=b.isMeshStandardMaterial?G.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),X=Y&&Y.mapping===Cs?Y.image.height:null,$=g[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ne=j!==void 0?j.length:0;let ie=0;U.morphAttributes.position!==void 0&&(ie=1),U.morphAttributes.normal!==void 0&&(ie=2),U.morphAttributes.color!==void 0&&(ie=3);let V,K,ce,xe;if($){const Tt=nn[$];V=Tt.vertexShader,K=Tt.fragmentShader}else V=b.vertexShader,K=b.fragmentShader,l.update(b),ce=l.getVertexShaderID(b),xe=l.getFragmentShaderID(b);const ve=s.getRenderTarget(),Pe=Q.isInstancedMesh===!0,De=Q.isBatchedMesh===!0,we=!!b.map,qe=!!b.matcap,N=!!Y,wt=!!b.aoMap,ye=!!b.lightMap,Re=!!b.bumpMap,pe=!!b.normalMap,it=!!b.displacementMap,Oe=!!b.emissiveMap,E=!!b.metalnessMap,x=!!b.roughnessMap,F=b.anisotropy>0,ee=b.clearcoat>0,Z=b.iridescence>0,te=b.sheen>0,fe=b.transmission>0,le=F&&!!b.anisotropyMap,he=ee&&!!b.clearcoatMap,Ee=ee&&!!b.clearcoatNormalMap,Fe=ee&&!!b.clearcoatRoughnessMap,J=Z&&!!b.iridescenceMap,je=Z&&!!b.iridescenceThicknessMap,Ve=te&&!!b.sheenColorMap,Ce=te&&!!b.sheenRoughnessMap,_e=!!b.specularMap,ue=!!b.specularColorMap,Ue=!!b.specularIntensityMap,Ye=fe&&!!b.transmissionMap,rt=fe&&!!b.thicknessMap,ze=!!b.gradientMap,se=!!b.alphaMap,L=b.alphaTest>0,ae=!!b.alphaHash,oe=!!b.extensions,Te=!!U.attributes.uv1,be=!!U.attributes.uv2,Je=!!U.attributes.uv3;let Ze=Tn;return b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ze=s.toneMapping),{isWebGL2:d,shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:V,fragmentShader:K,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:De,instancing:Pe,instancingColor:Pe&&Q.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:mn,map:we,matcap:qe,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:X,aoMap:wt,lightMap:ye,bumpMap:Re,normalMap:pe,displacementMap:u&&it,emissiveMap:Oe,normalMapObjectSpace:pe&&b.normalMapType===ic,normalMapTangentSpace:pe&&b.normalMapType===ko,metalnessMap:E,roughnessMap:x,anisotropy:F,anisotropyMap:le,clearcoat:ee,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Fe,iridescence:Z,iridescenceMap:J,iridescenceThicknessMap:je,sheen:te,sheenColorMap:Ve,sheenRoughnessMap:Ce,specularMap:_e,specularColorMap:ue,specularIntensityMap:Ue,transmission:fe,transmissionMap:Ye,thicknessMap:rt,gradientMap:ze,opaque:b.transparent===!1&&b.blending===gi,alphaMap:se,alphaTest:L,alphaHash:ae,combine:b.combine,mapUv:we&&v(b.map.channel),aoMapUv:wt&&v(b.aoMap.channel),lightMapUv:ye&&v(b.lightMap.channel),bumpMapUv:Re&&v(b.bumpMap.channel),normalMapUv:pe&&v(b.normalMap.channel),displacementMapUv:it&&v(b.displacementMap.channel),emissiveMapUv:Oe&&v(b.emissiveMap.channel),metalnessMapUv:E&&v(b.metalnessMap.channel),roughnessMapUv:x&&v(b.roughnessMap.channel),anisotropyMapUv:le&&v(b.anisotropyMap.channel),clearcoatMapUv:he&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:je&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(b.sheenRoughnessMap.channel),specularMapUv:_e&&v(b.specularMap.channel),specularColorMapUv:ue&&v(b.specularColorMap.channel),specularIntensityMapUv:Ue&&v(b.specularIntensityMap.channel),transmissionMapUv:Ye&&v(b.transmissionMap.channel),thicknessMapUv:rt&&v(b.thicknessMap.channel),alphaMapUv:se&&v(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pe||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:be,vertexUv3s:Je,pointsUvs:Q.isPoints===!0&&!!U.attributes.uv&&(we||se),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ze,useLegacyLights:s._useLegacyLights,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bt,flipSided:b.side===Nt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:oe&&b.extensions.derivatives===!0,extensionFragDepth:oe&&b.extensions.fragDepth===!0,extensionDrawBuffers:oe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)w.push(z),w.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(S(w,b),_(w,b),w.push(s.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function S(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function T(b){const w=g[b.type];let z;if(w){const G=nn[w];z=Vc.clone(G.uniforms)}else z=b.uniforms;return z}function I(b,w){let z;for(let G=0,Q=c.length;G<Q;G++){const P=c[G];if(P.cacheKey===w){z=P,++z.usedTimes;break}}return z===void 0&&(z=new sf(s,w,b,r),c.push(z)),z}function A(b){if(--b.usedTimes===0){const w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function W(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:T,acquireProgram:I,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:W}}function cf(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function df(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ao(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function oo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,m,g,v,f){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:f},s[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=f),e++,p}function a(h,u,m,g,v,f){const p=o(h,u,m,g,v,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(h,u,m,g,v,f){const p=o(h,u,m,g,v,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,u){t.length>1&&t.sort(h||df),n.length>1&&n.sort(u||ao),i.length>1&&i.sort(u||ao)}function d(){for(let h=e,u=s.length;h<u;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function hf(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new oo,s.set(n,[o])):i>=r.length?(o=new oo,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function uf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Xe};break;case"SpotLight":t={position:new M,direction:new M,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new M,halfWidth:new M,halfHeight:new M};break}return s[e.id]=t,t}}}function pf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ff=0;function mf(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gf(s,e){const t=new uf,n=pf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new M);const r=new M,o=new tt,a=new tt;function l(d,h){let u=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let v=0,f=0,p=0,S=0,_=0,T=0,I=0,A=0,R=0,W=0,b=0;d.sort(mf);const w=h===!0?Math.PI:1;for(let G=0,Q=d.length;G<Q;G++){const P=d[G],U=P.color,H=P.intensity,Y=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*H*w,m+=U.g*H*w,g+=U.b*H*w;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],H);b++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const j=P.shadow,ne=n.get(P);ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,i.directionalShadow[v]=ne,i.directionalShadowMap[v]=X,i.directionalShadowMatrix[v]=P.shadow.matrix,T++}i.directional[v]=$,v++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(U).multiplyScalar(H*w),$.distance=Y,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[p]=$;const j=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,j.updateMatrices(P),P.castShadow&&W++),i.spotLightMatrix[p]=j.matrix,P.castShadow){const ne=n.get(P);ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,i.spotShadow[p]=ne,i.spotShadowMap[p]=X,A++}p++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(U).multiplyScalar(H),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=$,S++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*w),$.distance=P.distance,$.decay=P.decay,P.castShadow){const j=P.shadow,ne=n.get(P);ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,ne.shadowCameraNear=j.camera.near,ne.shadowCameraFar=j.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=X,i.pointShadowMatrix[f]=P.shadow.matrix,I++}i.point[f]=$,f++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(H*w),$.groundColor.copy(P.groundColor).multiplyScalar(H*w),i.hemi[_]=$,_++}}S>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==v||z.pointLength!==f||z.spotLength!==p||z.rectAreaLength!==S||z.hemiLength!==_||z.numDirectionalShadows!==T||z.numPointShadows!==I||z.numSpotShadows!==A||z.numSpotMaps!==R||z.numLightProbes!==b)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=S,i.point.length=f,i.hemi.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=A+R-W,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=W,i.numLightProbes=b,z.directionalLength=v,z.pointLength=f,z.spotLength=p,z.rectAreaLength=S,z.hemiLength=_,z.numDirectionalShadows=T,z.numPointShadows=I,z.numSpotShadows=A,z.numSpotMaps=R,z.numLightProbes=b,i.version=ff++)}function c(d,h){let u=0,m=0,g=0,v=0,f=0;const p=h.matrixWorldInverse;for(let S=0,_=d.length;S<_;S++){const T=d[S];if(T.isDirectionalLight){const I=i.directional[u];I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),u++}else if(T.isSpotLight){const I=i.spot[g];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),g++}else if(T.isRectAreaLight){const I=i.rectArea[v];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),a.identity(),o.copy(T.matrixWorld),o.premultiply(p),a.extractRotation(o),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const I=i.point[m];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),m++}else if(T.isHemisphereLight){const I=i.hemi[f];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function lo(s,e){const t=new gf(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function vf(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new lo(s,e),t.set(r,[l])):o>=a.length?(l=new lo(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class xf extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _f extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sf(s,e,t){let n=new Pr;const i=new Be,r=new Be,o=new nt,a=new xf({depthPacking:nc}),l=new _f,c={},d=t.maxTextureSize,h={[Cn]:Nt,[Nt]:Cn,[Bt]:Bt},u=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:yf,fragmentShader:bf}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new q(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let p=this.type;this.render=function(A,R,W){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),w=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),G=s.state;G.setBlending(wn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Q=p!==hn&&this.type===hn,P=p===hn&&this.type!==hn;for(let U=0,H=A.length;U<H;U++){const Y=A[U],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const $=X.getFrameExtents();if(i.multiply($),r.copy(X.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/$.x),i.x=r.x*$.x,X.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/$.y),i.y=r.y*$.y,X.mapSize.y=r.y)),X.map===null||Q===!0||P===!0){const ne=this.type!==hn?{minFilter:Pt,magFilter:Pt}:{};X.map!==null&&X.map.dispose(),X.map=new Xn(i.x,i.y,ne),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const j=X.getViewportCount();for(let ne=0;ne<j;ne++){const ie=X.getViewport(ne);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),G.viewport(o),X.updateMatrices(Y,ne),n=X.getFrustum(),T(R,W,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===hn&&S(X,W),X.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(b,w,z)};function S(A,R){const W=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xn(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,W,u,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,W,m,v,null)}function _(A,R,W,b){let w=null;const z=W.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)w=z;else if(w=W.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=w.uuid,Q=R.uuid;let P=c[G];P===void 0&&(P={},c[G]=P);let U=P[Q];U===void 0&&(U=w.clone(),P[Q]=U,R.addEventListener("dispose",I)),w=U}if(w.visible=R.visible,w.wireframe=R.wireframe,b===hn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const G=s.properties.get(w);G.light=W}return w}function T(A,R,W,b,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===hn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),P=A.material;if(Array.isArray(P)){const U=Q.groups;for(let H=0,Y=U.length;H<Y;H++){const X=U[H],$=P[X.materialIndex];if($&&$.visible){const j=_(A,$,b,w);A.onBeforeShadow(s,A,R,W,Q,j,X),s.renderBufferDirect(W,null,Q,j,A,X),A.onAfterShadow(s,A,R,W,Q,j,X)}}}else if(P.visible){const U=_(A,P,b,w);A.onBeforeShadow(s,A,R,W,Q,U,null),s.renderBufferDirect(W,null,Q,U,A,null),A.onAfterShadow(s,A,R,W,Q,U,null)}}const G=A.children;for(let Q=0,P=G.length;Q<P;Q++)T(G[Q],R,W,b,w)}function I(A){A.target.removeEventListener("dispose",I);for(const W in c){const b=c[W],w=A.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function Mf(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const ae=new nt;let oe=null;const Te=new nt(0,0,0,0);return{setMask:function(be){oe!==be&&!L&&(s.colorMask(be,be,be,be),oe=be)},setLocked:function(be){L=be},setClear:function(be,Je,Ze,ft,Tt){Tt===!0&&(be*=ft,Je*=ft,Ze*=ft),ae.set(be,Je,Ze,ft),Te.equals(ae)===!1&&(s.clearColor(be,Je,Ze,ft),Te.copy(ae))},reset:function(){L=!1,oe=null,Te.set(-1,0,0,0)}}}function r(){let L=!1,ae=null,oe=null,Te=null;return{setTest:function(be){be?De(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(be){ae!==be&&!L&&(s.depthMask(be),ae=be)},setFunc:function(be){if(oe!==be){switch(be){case Il:s.depthFunc(s.NEVER);break;case Dl:s.depthFunc(s.ALWAYS);break;case Ul:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Nl:s.depthFunc(s.EQUAL);break;case Ol:s.depthFunc(s.GEQUAL);break;case Fl:s.depthFunc(s.GREATER);break;case kl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=be}},setLocked:function(be){L=be},setClear:function(be){Te!==be&&(s.clearDepth(be),Te=be)},reset:function(){L=!1,ae=null,oe=null,Te=null}}}function o(){let L=!1,ae=null,oe=null,Te=null,be=null,Je=null,Ze=null,ft=null,Tt=null;return{setTest:function(Qe){L||(Qe?De(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!L&&(s.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,At,tn){(oe!==Qe||Te!==At||be!==tn)&&(s.stencilFunc(Qe,At,tn),oe=Qe,Te=At,be=tn)},setOp:function(Qe,At,tn){(Je!==Qe||Ze!==At||ft!==tn)&&(s.stencilOp(Qe,At,tn),Je=Qe,Ze=At,ft=tn)},setLocked:function(Qe){L=Qe},setClear:function(Qe){Tt!==Qe&&(s.clearStencil(Qe),Tt=Qe)},reset:function(){L=!1,ae=null,oe=null,Te=null,be=null,Je=null,Ze=null,ft=null,Tt=null}}}const a=new i,l=new r,c=new o,d=new WeakMap,h=new WeakMap;let u={},m={},g=new WeakMap,v=[],f=null,p=!1,S=null,_=null,T=null,I=null,A=null,R=null,W=null,b=new Xe(0,0,0),w=0,z=!1,G=null,Q=null,P=null,U=null,H=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=$>=2);let ne=null,ie={};const V=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ce=new nt().fromArray(V),xe=new nt().fromArray(K);function ve(L,ae,oe,Te){const be=new Uint8Array(4),Je=s.createTexture();s.bindTexture(L,Je),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<oe;Ze++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(ae+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Je}const Pe={};Pe[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),Pe[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pe[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(s.DEPTH_TEST),l.setFunc(bs),Oe(!1),E(Vr),De(s.CULL_FACE),pe(wn);function De(L){u[L]!==!0&&(s.enable(L),u[L]=!0)}function we(L){u[L]!==!1&&(s.disable(L),u[L]=!1)}function qe(L,ae){return m[L]!==ae?(s.bindFramebuffer(L,ae),m[L]=ae,n&&(L===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ae),L===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function N(L,ae){let oe=v,Te=!1;if(L)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(oe.length!==be.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Je=0,Ze=be.length;Je<Ze;Je++)oe[Je]=s.COLOR_ATTACHMENT0+Je;oe.length=be.length,Te=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,Te=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,Te=!0);Te&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function wt(L){return f!==L?(s.useProgram(L),f=L,!0):!1}const ye={[kn]:s.FUNC_ADD,[vl]:s.FUNC_SUBTRACT,[xl]:s.FUNC_REVERSE_SUBTRACT};if(n)ye[$r]=s.MIN,ye[Yr]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ye[$r]=L.MIN_EXT,ye[Yr]=L.MAX_EXT)}const Re={[_l]:s.ZERO,[yl]:s.ONE,[bl]:s.SRC_COLOR,[mr]:s.SRC_ALPHA,[Al]:s.SRC_ALPHA_SATURATE,[wl]:s.DST_COLOR,[Ml]:s.DST_ALPHA,[Sl]:s.ONE_MINUS_SRC_COLOR,[gr]:s.ONE_MINUS_SRC_ALPHA,[Tl]:s.ONE_MINUS_DST_COLOR,[El]:s.ONE_MINUS_DST_ALPHA,[Cl]:s.CONSTANT_COLOR,[Rl]:s.ONE_MINUS_CONSTANT_COLOR,[Ll]:s.CONSTANT_ALPHA,[Pl]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(L,ae,oe,Te,be,Je,Ze,ft,Tt,Qe){if(L===wn){p===!0&&(we(s.BLEND),p=!1);return}if(p===!1&&(De(s.BLEND),p=!0),L!==gl){if(L!==S||Qe!==z){if((_!==kn||A!==kn)&&(s.blendEquation(s.FUNC_ADD),_=kn,A=kn),Qe)switch(L){case gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wr:s.blendFunc(s.ONE,s.ONE);break;case Xr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,I=null,R=null,W=null,b.set(0,0,0),w=0,S=L,z=Qe}return}be=be||ae,Je=Je||oe,Ze=Ze||Te,(ae!==_||be!==A)&&(s.blendEquationSeparate(ye[ae],ye[be]),_=ae,A=be),(oe!==T||Te!==I||Je!==R||Ze!==W)&&(s.blendFuncSeparate(Re[oe],Re[Te],Re[Je],Re[Ze]),T=oe,I=Te,R=Je,W=Ze),(ft.equals(b)===!1||Tt!==w)&&(s.blendColor(ft.r,ft.g,ft.b,Tt),b.copy(ft),w=Tt),S=L,z=!1}function it(L,ae){L.side===Bt?we(s.CULL_FACE):De(s.CULL_FACE);let oe=L.side===Nt;ae&&(oe=!oe),Oe(oe),L.blending===gi&&L.transparent===!1?pe(wn):pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Te=L.stencilWrite;c.setTest(Te),Te&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?De(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){G!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),G=L)}function E(L){L!==pl?(De(s.CULL_FACE),L!==Q&&(L===Vr?s.cullFace(s.BACK):L===fl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),Q=L}function x(L){L!==P&&(X&&s.lineWidth(L),P=L)}function F(L,ae,oe){L?(De(s.POLYGON_OFFSET_FILL),(U!==ae||H!==oe)&&(s.polygonOffset(ae,oe),U=ae,H=oe)):we(s.POLYGON_OFFSET_FILL)}function ee(L){L?De(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Z(L){L===void 0&&(L=s.TEXTURE0+Y-1),ne!==L&&(s.activeTexture(L),ne=L)}function te(L,ae,oe){oe===void 0&&(ne===null?oe=s.TEXTURE0+Y-1:oe=ne);let Te=ie[oe];Te===void 0&&(Te={type:void 0,texture:void 0},ie[oe]=Te),(Te.type!==L||Te.texture!==ae)&&(ne!==oe&&(s.activeTexture(oe),ne=oe),s.bindTexture(L,ae||Pe[L]),Te.type=L,Te.texture=ae)}function fe(){const L=ie[ne];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){ce.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function Ye(L){xe.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),xe.copy(L))}function rt(L,ae){let oe=h.get(ae);oe===void 0&&(oe=new WeakMap,h.set(ae,oe));let Te=oe.get(L);Te===void 0&&(Te=s.getUniformBlockIndex(ae,L.name),oe.set(L,Te))}function ze(L,ae){const Te=h.get(ae).get(L);d.get(ae)!==Te&&(s.uniformBlockBinding(ae,Te,L.__bindingPointIndex),d.set(ae,Te))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ne=null,ie={},m={},g=new WeakMap,v=[],f=null,p=!1,S=null,_=null,T=null,I=null,A=null,R=null,W=null,b=new Xe(0,0,0),w=0,z=!1,G=null,Q=null,P=null,U=null,H=null,ce.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:we,bindFramebuffer:qe,drawBuffers:N,useProgram:wt,setBlending:pe,setMaterial:it,setFlipSided:Oe,setCullFace:E,setLineWidth:x,setPolygonOffset:F,setScissorTest:ee,activeTexture:Z,bindTexture:te,unbindTexture:fe,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:_e,texImage3D:ue,updateUBOMapping:rt,uniformBlockBinding:ze,texStorage2D:Ve,texStorage3D:Ce,texSubImage2D:Ee,texSubImage3D:Fe,compressedTexSubImage2D:J,compressedTexSubImage3D:je,scissor:Ue,viewport:Ye,reset:se}}function Ef(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return m?new OffscreenCanvas(E,x):Gi("canvas")}function v(E,x,F,ee){let Z=1;if((E.width>ee||E.height>ee)&&(Z=ee/Math.max(E.width,E.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const te=x?Ts:Math.floor,fe=te(Z*E.width),le=te(Z*E.height);h===void 0&&(h=g(fe,le));const he=F?g(fe,le):h;return he.width=fe,he.height=le,he.getContext("2d").drawImage(E,0,0,fe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+fe+"x"+le+")."),he}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return br(E.width)&&br(E.height)}function p(E){return a?!1:E.wrapS!==Kt||E.wrapT!==Kt||E.minFilter!==Pt&&E.minFilter!==Gt}function S(E,x){return E.generateMipmaps&&x&&E.minFilter!==Pt&&E.minFilter!==Gt}function _(E){s.generateMipmap(E)}function T(E,x,F,ee,Z=!1){if(a===!1)return x;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=x;if(x===s.RED&&(F===s.FLOAT&&(te=s.R32F),F===s.HALF_FLOAT&&(te=s.R16F),F===s.UNSIGNED_BYTE&&(te=s.R8)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(te=s.R8UI),F===s.UNSIGNED_SHORT&&(te=s.R16UI),F===s.UNSIGNED_INT&&(te=s.R32UI),F===s.BYTE&&(te=s.R8I),F===s.SHORT&&(te=s.R16I),F===s.INT&&(te=s.R32I)),x===s.RG&&(F===s.FLOAT&&(te=s.RG32F),F===s.HALF_FLOAT&&(te=s.RG16F),F===s.UNSIGNED_BYTE&&(te=s.RG8)),x===s.RGBA){const fe=Z?Ss:Ke.getTransfer(ee);F===s.FLOAT&&(te=s.RGBA32F),F===s.HALF_FLOAT&&(te=s.RGBA16F),F===s.UNSIGNED_BYTE&&(te=fe===et?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function I(E,x,F){return S(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==Pt&&E.minFilter!==Gt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function A(E){return E===Pt||E===jr||E===Os?s.NEAREST:s.LINEAR}function R(E){const x=E.target;x.removeEventListener("dispose",R),b(x),x.isVideoTexture&&d.delete(x)}function W(E){const x=E.target;x.removeEventListener("dispose",W),z(x)}function b(E){const x=n.get(E);if(x.__webglInit===void 0)return;const F=E.source,ee=u.get(F);if(ee){const Z=ee[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(E),Object.keys(ee).length===0&&u.delete(F)}n.remove(E)}function w(E){const x=n.get(E);s.deleteTexture(x.__webglTexture);const F=E.source,ee=u.get(F);delete ee[x.__cacheKey],o.memory.textures--}function z(E){const x=E.texture,F=n.get(E),ee=n.get(x);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let te=0;te<F.__webglFramebuffer[Z].length;te++)s.deleteFramebuffer(F.__webglFramebuffer[Z][te]);else s.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)s.deleteFramebuffer(F.__webglFramebuffer[Z]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Z=0,te=x.length;Z<te;Z++){const fe=n.get(x[Z]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(x[Z])}n.remove(x),n.remove(E)}let G=0;function Q(){G=0}function P(){const E=G;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),G+=1,E}function U(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function H(E,x){const F=n.get(E);if(E.isVideoTexture&&it(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(F,E,x);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function Y(E,x){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ce(F,E,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function X(E,x){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ce(F,E,x);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function $(E,x){const F=n.get(E);if(E.version>0&&F.__version!==E.version){xe(F,E,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}const j={[Bi]:s.REPEAT,[Kt]:s.CLAMP_TO_EDGE,[_r]:s.MIRRORED_REPEAT},ne={[Pt]:s.NEAREST,[jr]:s.NEAREST_MIPMAP_NEAREST,[Os]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[ql]:s.LINEAR_MIPMAP_NEAREST,[zi]:s.LINEAR_MIPMAP_LINEAR},ie={[sc]:s.NEVER,[dc]:s.ALWAYS,[rc]:s.LESS,[Bo]:s.LEQUAL,[ac]:s.EQUAL,[cc]:s.GEQUAL,[oc]:s.GREATER,[lc]:s.NOTEQUAL};function V(E,x,F){if(F?(s.texParameteri(E,s.TEXTURE_WRAP_S,j[x.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,j[x.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,j[x.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ne[x.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ne[x.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==Kt||x.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,A(x.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Pt&&x.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Pt||x.minFilter!==Os&&x.minFilter!==zi||x.type===En&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Hi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function K(E,x){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));const ee=x.source;let Z=u.get(ee);Z===void 0&&(Z={},u.set(ee,Z));const te=U(x);if(te!==E.__cacheKey){Z[te]===void 0&&(Z[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[te].usedTimes++;const fe=Z[E.__cacheKey];fe!==void 0&&(Z[E.__cacheKey].usedTimes--,fe.usedTimes===0&&w(x)),E.__cacheKey=te,E.__webglTexture=Z[te].texture}return F}function ce(E,x,F){let ee=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=s.TEXTURE_3D);const Z=K(E,x),te=x.source;t.bindTexture(ee,E.__webglTexture,s.TEXTURE0+F);const fe=n.get(te);if(te.version!==fe.__version||Z===!0){t.activeTexture(s.TEXTURE0+F);const le=Ke.getPrimaries(Ke.workingColorSpace),he=x.colorSpace===Vt?null:Ke.getPrimaries(x.colorSpace),Ee=x.colorSpace===Vt||le===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Fe=p(x)&&f(x.image)===!1;let J=v(x.image,Fe,!1,i.maxTextureSize);J=Oe(x,J);const je=f(J)||a,Ve=r.convert(x.format,x.colorSpace);let Ce=r.convert(x.type),_e=T(x.internalFormat,Ve,Ce,x.colorSpace,x.isVideoTexture);V(ee,x,je);let ue;const Ue=x.mipmaps,Ye=a&&x.isVideoTexture!==!0&&_e!==Oo,rt=fe.__version===void 0||Z===!0,ze=I(x,J,je);if(x.isDepthTexture)_e=s.DEPTH_COMPONENT,a?x.type===En?_e=s.DEPTH_COMPONENT32F:x.type===Mn?_e=s.DEPTH_COMPONENT24:x.type===Hn?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:x.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Gn&&_e===s.DEPTH_COMPONENT&&x.type!==Ar&&x.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mn,Ce=r.convert(x.type)),x.format===yi&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,x.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Hn,Ce=r.convert(x.type))),rt&&(Ye?t.texStorage2D(s.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,_e,J.width,J.height,0,Ve,Ce,null));else if(x.isDataTexture)if(Ue.length>0&&je){Ye&&rt&&t.texStorage2D(s.TEXTURE_2D,ze,_e,Ue[0].width,Ue[0].height);for(let se=0,L=Ue.length;se<L;se++)ue=Ue[se],Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ve,Ce,ue.data):t.texImage2D(s.TEXTURE_2D,se,_e,ue.width,ue.height,0,Ve,Ce,ue.data);x.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(s.TEXTURE_2D,ze,_e,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Ve,Ce,J.data)):t.texImage2D(s.TEXTURE_2D,0,_e,J.width,J.height,0,Ve,Ce,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ye&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,_e,Ue[0].width,Ue[0].height,J.depth);for(let se=0,L=Ue.length;se<L;se++)ue=Ue[se],x.format!==Jt?Ve!==null?Ye?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,J.depth,Ve,ue.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,_e,ue.width,ue.height,J.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,J.depth,Ve,Ce,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,_e,ue.width,ue.height,J.depth,0,Ve,Ce,ue.data)}else{Ye&&rt&&t.texStorage2D(s.TEXTURE_2D,ze,_e,Ue[0].width,Ue[0].height);for(let se=0,L=Ue.length;se<L;se++)ue=Ue[se],x.format!==Jt?Ve!==null?Ye?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ve,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,se,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ve,Ce,ue.data):t.texImage2D(s.TEXTURE_2D,se,_e,ue.width,ue.height,0,Ve,Ce,ue.data)}else if(x.isDataArrayTexture)Ye?(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,_e,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ve,Ce,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,Ve,Ce,J.data);else if(x.isData3DTexture)Ye?(rt&&t.texStorage3D(s.TEXTURE_3D,ze,_e,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ve,Ce,J.data)):t.texImage3D(s.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,Ve,Ce,J.data);else if(x.isFramebufferTexture){if(rt)if(Ye)t.texStorage2D(s.TEXTURE_2D,ze,_e,J.width,J.height);else{let se=J.width,L=J.height;for(let ae=0;ae<ze;ae++)t.texImage2D(s.TEXTURE_2D,ae,_e,se,L,0,Ve,Ce,null),se>>=1,L>>=1}}else if(Ue.length>0&&je){Ye&&rt&&t.texStorage2D(s.TEXTURE_2D,ze,_e,Ue[0].width,Ue[0].height);for(let se=0,L=Ue.length;se<L;se++)ue=Ue[se],Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ve,Ce,ue):t.texImage2D(s.TEXTURE_2D,se,_e,Ve,Ce,ue);x.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(s.TEXTURE_2D,ze,_e,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,Ce,J)):t.texImage2D(s.TEXTURE_2D,0,_e,Ve,Ce,J);S(x,je)&&_(ee),fe.__version=te.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function xe(E,x,F){if(x.image.length!==6)return;const ee=K(E,x),Z=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+F);const te=n.get(Z);if(Z.version!==te.__version||ee===!0){t.activeTexture(s.TEXTURE0+F);const fe=Ke.getPrimaries(Ke.workingColorSpace),le=x.colorSpace===Vt?null:Ke.getPrimaries(x.colorSpace),he=x.colorSpace===Vt||fe===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,Fe=x.image[0]&&x.image[0].isDataTexture,J=[];for(let se=0;se<6;se++)!Ee&&!Fe?J[se]=v(x.image[se],!1,!0,i.maxCubemapSize):J[se]=Fe?x.image[se].image:x.image[se],J[se]=Oe(x,J[se]);const je=J[0],Ve=f(je)||a,Ce=r.convert(x.format,x.colorSpace),_e=r.convert(x.type),ue=T(x.internalFormat,Ce,_e,x.colorSpace),Ue=a&&x.isVideoTexture!==!0,Ye=te.__version===void 0||ee===!0;let rt=I(x,je,Ve);V(s.TEXTURE_CUBE_MAP,x,Ve);let ze;if(Ee){Ue&&Ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,ue,je.width,je.height);for(let se=0;se<6;se++){ze=J[se].mipmaps;for(let L=0;L<ze.length;L++){const ae=ze[L];x.format!==Jt?Ce!==null?Ue?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,ae.width,ae.height,Ce,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,ue,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,ae.width,ae.height,Ce,_e,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,ue,ae.width,ae.height,0,Ce,_e,ae.data)}}}else{ze=x.mipmaps,Ue&&Ye&&(ze.length>0&&rt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,ue,J[0].width,J[0].height));for(let se=0;se<6;se++)if(Fe){Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,J[se].width,J[se].height,Ce,_e,J[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,J[se].width,J[se].height,0,Ce,_e,J[se].data);for(let L=0;L<ze.length;L++){const oe=ze[L].image[se].image;Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,oe.width,oe.height,Ce,_e,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,ue,oe.width,oe.height,0,Ce,_e,oe.data)}}else{Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce,_e,J[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,Ce,_e,J[se]);for(let L=0;L<ze.length;L++){const ae=ze[L];Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,Ce,_e,ae.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,ue,Ce,_e,ae.image[se])}}}S(x,Ve)&&_(s.TEXTURE_CUBE_MAP),te.__version=Z.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ve(E,x,F,ee,Z,te){const fe=r.convert(F.format,F.colorSpace),le=r.convert(F.type),he=T(F.internalFormat,fe,le,F.colorSpace);if(!n.get(x).__hasExternalTextures){const Fe=Math.max(1,x.width>>te),J=Math.max(1,x.height>>te);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,te,he,Fe,J,x.depth,0,fe,le,null):t.texImage2D(Z,te,he,Fe,J,0,fe,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),pe(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Z,n.get(F).__webglTexture,0,Re(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,Z,n.get(F).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(E,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let ee=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||pe(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===En?ee=s.DEPTH_COMPONENT32F:Z.type===Mn&&(ee=s.DEPTH_COMPONENT24));const te=Re(x);pe(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,ee,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,ee,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const ee=Re(x);F&&pe(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,x.width,x.height):pe(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const ee=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<ee.length;Z++){const te=ee[Z],fe=r.convert(te.format,te.colorSpace),le=r.convert(te.type),he=T(te.internalFormat,fe,le,te.colorSpace),Ee=Re(x);F&&pe(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,he,x.width,x.height):pe(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,he,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,he,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const ee=n.get(x.depthTexture).__webglTexture,Z=Re(x);if(x.depthTexture.format===Gn)pe(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(x.depthTexture.format===yi)pe(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function we(E){const x=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");De(x.__webglFramebuffer,E)}else if(F){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]=s.createRenderbuffer(),Pe(x.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Pe(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(E,x,F){const ee=n.get(E);x!==void 0&&ve(ee.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&we(E)}function N(E){const x=E.texture,F=n.get(E),ee=n.get(x);E.addEventListener("dispose",W),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=x.version,o.memory.textures++);const Z=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,fe=f(E)||a;if(Z){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let he=0;he<x.mipmaps.length;he++)F.__webglFramebuffer[le][he]=s.createFramebuffer()}else F.__webglFramebuffer[le]=s.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)F.__webglFramebuffer[le]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){const le=E.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Fe=n.get(le[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&pe(E)===!1){const le=te?x:[x];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){const Ee=le[he];F.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[he]);const Fe=r.convert(Ee.format,Ee.colorSpace),J=r.convert(Ee.type),je=T(Ee.internalFormat,Fe,J,Ee.colorSpace,E.isXRRenderTarget===!0),Ve=Re(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,je,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,F.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),V(s.TEXTURE_CUBE_MAP,x,fe);for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)ve(F.__webglFramebuffer[le][he],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else ve(F.__webglFramebuffer[le],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);S(x,fe)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const le=E.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Fe=le[he],J=n.get(Fe);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),V(s.TEXTURE_2D,Fe,fe),ve(F.__webglFramebuffer,E,Fe,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),S(Fe,fe)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?le=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),V(le,x,fe),a&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)ve(F.__webglFramebuffer[he],E,x,s.COLOR_ATTACHMENT0,le,he);else ve(F.__webglFramebuffer,E,x,s.COLOR_ATTACHMENT0,le,0);S(x,fe)&&_(le),t.unbindTexture()}E.depthBuffer&&we(E)}function wt(E){const x=f(E)||a,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,Z=F.length;ee<Z;ee++){const te=F[ee];if(S(te,x)){const fe=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(te).__webglTexture;t.bindTexture(fe,le),_(fe),t.unbindTexture()}}}function ye(E){if(a&&E.samples>0&&pe(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,ee=E.height;let Z=s.COLOR_BUFFER_BIT;const te=[],fe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(E),he=E.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){te.push(s.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&te.push(fe);const Fe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Fe===!1&&(E.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Fe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[fe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[fe])),he){const J=n.get(x[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,F,ee,0,0,F,ee,Z,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Fe=n.get(x[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Re(E){return Math.min(i.maxSamples,E.samples)}function pe(E){const x=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function it(E){const x=o.render.frame;d.get(E)!==x&&(d.set(E,x),E.update())}function Oe(E,x){const F=E.colorSpace,ee=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===yr||F!==mn&&F!==Vt&&(Ke.getTransfer(F)===et?a===!1?e.has("EXT_sRGB")===!0&&ee===Jt?(E.format=yr,E.minFilter=Gt,E.generateMipmaps=!1):x=Ho.sRGBToLinear(x):(ee!==Jt||Z!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=qe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=pe}function wf(s,e,t){const n=t.isWebGL2;function i(r,o=Vt){let a;const l=Ke.getTransfer(o);if(r===An)return s.UNSIGNED_BYTE;if(r===Po)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Io)return s.UNSIGNED_SHORT_5_5_5_1;if(r===$l)return s.BYTE;if(r===Yl)return s.SHORT;if(r===Ar)return s.UNSIGNED_SHORT;if(r===Lo)return s.INT;if(r===Mn)return s.UNSIGNED_INT;if(r===En)return s.FLOAT;if(r===Hi)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===jl)return s.ALPHA;if(r===Jt)return s.RGBA;if(r===Kl)return s.LUMINANCE;if(r===Jl)return s.LUMINANCE_ALPHA;if(r===Gn)return s.DEPTH_COMPONENT;if(r===yi)return s.DEPTH_STENCIL;if(r===yr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Zl)return s.RED;if(r===Do)return s.RED_INTEGER;if(r===Ql)return s.RG;if(r===Uo)return s.RG_INTEGER;if(r===No)return s.RGBA_INTEGER;if(r===Fs||r===ks||r===Bs||r===zs)if(l===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Fs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Fs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ks)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kr||r===Jr||r===Zr||r===Qr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Kr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ea||r===ta)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ea)return l===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ta)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===na||r===ia||r===sa||r===ra||r===aa||r===oa||r===la||r===ca||r===da||r===ha||r===ua||r===pa||r===fa||r===ma)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===na)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ia)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sa)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ra)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===aa)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===oa)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===la)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ca)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===da)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ha)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ua)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pa)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fa)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ma)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hs||r===ga||r===va)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Hs)return l===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ga)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===va)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ec||r===xa||r===_a||r===ya)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Hs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_a)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ya)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Tf extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wt extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Af={type:"move"};class dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,n),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Af)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Cf extends Mi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,m=null,g=null;const v=t.getContextAttributes();let f=null,p=null;const S=[],_=[],T=new Be;let I=null;const A=new Ut;A.layers.enable(1),A.viewport=new nt;const R=new Ut;R.layers.enable(2),R.viewport=new nt;const W=[A,R],b=new Tf;b.layers.enable(1),b.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=S[V];return K===void 0&&(K=new dr,S[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=S[V];return K===void 0&&(K=new dr,S[V]=K),K.getGripSpace()},this.getHand=function(V){let K=S[V];return K===void 0&&(K=new dr,S[V]=K),K.getHandSpace()};function G(V){const K=_.indexOf(V.inputSource);if(K===-1)return;const ce=S[K];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||o),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function Q(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",P);for(let V=0;V<S.length;V++){const K=_[V];K!==null&&(_[V]=null,S[V].disconnect(K))}w=null,z=null,e.setRenderTarget(f),m=null,u=null,h=null,i=null,p=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Xn(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:An,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,ce=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?yi:Gn,ce=v.stencil?Hn:Mn);const ve={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(ve),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Xn(u.textureWidth,u.textureHeight,{format:Jt,type:An,depthTexture:new Zo(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Pe=e.properties.get(p);Pe.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(V){for(let K=0;K<V.removed.length;K++){const ce=V.removed[K],xe=_.indexOf(ce);xe>=0&&(_[xe]=null,S[xe].disconnect(ce))}for(let K=0;K<V.added.length;K++){const ce=V.added[K];let xe=_.indexOf(ce);if(xe===-1){for(let Pe=0;Pe<S.length;Pe++)if(Pe>=_.length){_.push(ce),xe=Pe;break}else if(_[Pe]===null){_[Pe]=ce,xe=Pe;break}if(xe===-1)break}const ve=S[xe];ve&&ve.connect(ce)}}const U=new M,H=new M;function Y(V,K,ce){U.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(ce.matrixWorld);const xe=U.distanceTo(H),ve=K.projectionMatrix.elements,Pe=ce.projectionMatrix.elements,De=ve[14]/(ve[10]-1),we=ve[14]/(ve[10]+1),qe=(ve[9]+1)/ve[5],N=(ve[9]-1)/ve[5],wt=(ve[8]-1)/ve[0],ye=(Pe[8]+1)/Pe[0],Re=De*wt,pe=De*ye,it=xe/(-wt+ye),Oe=it*-wt;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Oe),V.translateZ(it),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const E=De+it,x=we+it,F=Re-Oe,ee=pe+(xe-Oe),Z=qe*we/x*E,te=N*we/x*E;V.projectionMatrix.makePerspective(F,ee,Z,te,E,x),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;b.near=R.near=A.near=V.near,b.far=R.far=A.far=V.far,(w!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,z=b.far);const K=V.parent,ce=b.cameras;X(b,K);for(let xe=0;xe<ce.length;xe++)X(ce[xe],K);ce.length===2?Y(b,A,R):b.projectionMatrix.copy(A.projectionMatrix),$(V,b,K)};function $(V,K,ce){ce===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=bi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let j=null;function ne(V,K){if(d=K.getViewerPose(c||o),g=K,d!==null){const ce=d.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let xe=!1;ce.length!==b.cameras.length&&(b.cameras.length=0,xe=!0);for(let ve=0;ve<ce.length;ve++){const Pe=ce[ve];let De=null;if(m!==null)De=m.getViewport(Pe);else{const qe=h.getViewSubImage(u,Pe);De=qe.viewport,ve===0&&(e.setRenderTargetTextures(p,qe.colorTexture,u.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(p))}let we=W[ve];we===void 0&&(we=new Ut,we.layers.enable(ve),we.viewport=new nt,W[ve]=we),we.matrix.fromArray(Pe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Pe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(De.x,De.y,De.width,De.height),ve===0&&(b.matrix.copy(we.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xe===!0&&b.cameras.push(we)}}for(let ce=0;ce<S.length;ce++){const xe=_[ce],ve=S[ce];xe!==null&&ve!==void 0&&ve.update(xe,K,c||o)}j&&j(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const ie=new Ko;ie.setAnimationLoop(ne),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}}function Rf(s,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,$o(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,S,_,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),d(f,p)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,T)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),v(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,S,_):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Nt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Nt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,_){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=_*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function d(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const S=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Lf(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,_){const T=_.program;n.uniformBlockBinding(S,T)}function c(S,_){let T=i[S.id];T===void 0&&(g(S),T=d(S),i[S.id]=T,S.addEventListener("dispose",f));const I=_.program;n.updateUBOMapping(S,I);const A=e.render.frame;r[S.id]!==A&&(u(S),r[S.id]=A)}function d(S){const _=h();S.__bindingPointIndex=_;const T=s.createBuffer(),I=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,T),T}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const _=i[S.id],T=S.uniforms,I=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,R=T.length;A<R;A++){const W=Array.isArray(T[A])?T[A]:[T[A]];for(let b=0,w=W.length;b<w;b++){const z=W[b];if(m(z,A,b,I)===!0){const G=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let P=0;for(let U=0;U<Q.length;U++){const H=Q[U],Y=v(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+P,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,_,T,I){const A=S.value,R=_+"_"+T;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{const W=I[R];if(typeof A=="number"||typeof A=="boolean"){if(W!==A)return I[R]=A,!0}else if(W.equals(A)===!1)return W.copy(A),!0}return!1}function g(S){const _=S.uniforms;let T=0;const I=16;for(let R=0,W=_.length;R<W;R++){const b=Array.isArray(_[R])?_[R]:[_[R]];for(let w=0,z=b.length;w<z;w++){const G=b[w],Q=Array.isArray(G.value)?G.value:[G.value];for(let P=0,U=Q.length;P<U;P++){const H=Q[P],Y=v(H),X=T%I;X!==0&&I-X<Y.boundary&&(T+=I-X),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=Y.storage}}}const A=T%I;return A>0&&(T+=I-A),S.__size=T,S.__cache={},this}function v(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function f(S){const _=S.target;_.removeEventListener("dispose",f);const T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class sl{constructor(e={}){const{canvas:t=wc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const _=this;let T=!1,I=0,A=0,R=null,W=-1,b=null;const w=new nt,z=new nt;let G=null;const Q=new Xe(0);let P=0,U=t.width,H=t.height,Y=1,X=null,$=null;const j=new nt(0,0,U,H),ne=new nt(0,0,U,H);let ie=!1;const V=new Pr;let K=!1,ce=!1,xe=null;const ve=new tt,Pe=new Be,De=new M,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return R===null?Y:1}let N=n;function wt(y,D){for(let k=0;k<y.length;k++){const B=y[k],O=t.getContext(B,D);if(O!==null)return O}return null}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wr}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ae,!1),N===null){const D=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&D.shift(),N=wt(D,y),N===null)throw wt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ye,Re,pe,it,Oe,E,x,F,ee,Z,te,fe,le,he,Ee,Fe,J,je,Ve,Ce,_e,ue,Ue,Ye;function rt(){ye=new Bu(N),Re=new Du(N,ye,e),ye.init(Re),ue=new wf(N,ye,Re),pe=new Mf(N,ye,Re),it=new Gu(N),Oe=new cf,E=new Ef(N,ye,pe,Oe,Re,ue,it),x=new Nu(_),F=new ku(_),ee=new Kc(N,Re),Ue=new Pu(N,ye,ee,Re),Z=new zu(N,ee,it,Ue),te=new qu(N,Z,ee,it),Ve=new Xu(N,Re,E),Fe=new Uu(Oe),fe=new lf(_,x,F,ye,Re,Ue,Fe),le=new Rf(_,Oe),he=new hf,Ee=new vf(ye,Re),je=new Lu(_,x,F,pe,te,u,l),J=new Sf(_,te,Re),Ye=new Lf(N,it,Re,pe),Ce=new Iu(N,ye,it,Re),_e=new Hu(N,ye,it,Re),it.programs=fe.programs,_.capabilities=Re,_.extensions=ye,_.properties=Oe,_.renderLists=he,_.shadowMap=J,_.state=pe,_.info=it}rt();const ze=new Cf(_,N);this.xr=ze,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(U,H,!1))},this.getSize=function(y){return y.set(U,H)},this.setSize=function(y,D,k=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=y,H=D,t.width=Math.floor(y*Y),t.height=Math.floor(D*Y),k===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(U*Y,H*Y).floor()},this.setDrawingBufferSize=function(y,D,k){U=y,H=D,Y=k,t.width=Math.floor(y*k),t.height=Math.floor(D*k),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(j)},this.setViewport=function(y,D,k,B){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,D,k,B),pe.viewport(w.copy(j).multiplyScalar(Y).floor())},this.getScissor=function(y){return y.copy(ne)},this.setScissor=function(y,D,k,B){y.isVector4?ne.set(y.x,y.y,y.z,y.w):ne.set(y,D,k,B),pe.scissor(z.copy(ne).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(y){pe.setScissorTest(ie=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){$=y},this.getClearColor=function(y){return y.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(y=!0,D=!0,k=!0){let B=0;if(y){let O=!1;if(R!==null){const de=R.texture.format;O=de===No||de===Uo||de===Do}if(O){const de=R.texture.type,me=de===An||de===Mn||de===Ar||de===Hn||de===Po||de===Io,Me=je.getClearColor(),Ae=je.getClearAlpha(),ke=Me.r,Le=Me.g,Ie=Me.b;me?(m[0]=ke,m[1]=Le,m[2]=Ie,m[3]=Ae,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=ke,g[1]=Le,g[2]=Ie,g[3]=Ae,N.clearBufferiv(N.COLOR,0,g))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT),k&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),Ee.dispose(),Oe.dispose(),x.dispose(),F.dispose(),te.dispose(),Ue.dispose(),Ye.dispose(),fe.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Tt),ze.removeEventListener("sessionend",Qe),xe&&(xe.dispose(),xe=null),At.stop()};function se(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=it.autoReset,D=J.enabled,k=J.autoUpdate,B=J.needsUpdate,O=J.type;rt(),it.autoReset=y,J.enabled=D,J.autoUpdate=k,J.needsUpdate=B,J.type=O}function ae(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function oe(y){const D=y.target;D.removeEventListener("dispose",oe),Te(D)}function Te(y){be(y),Oe.remove(y)}function be(y){const D=Oe.get(y).programs;D!==void 0&&(D.forEach(function(k){fe.releaseProgram(k)}),y.isShaderMaterial&&fe.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,k,B,O,de){D===null&&(D=we);const me=O.isMesh&&O.matrixWorld.determinant()<0,Me=ol(y,D,k,B,O);pe.setMaterial(B,me);let Ae=k.index,ke=1;if(B.wireframe===!0){if(Ae=Z.getWireframeAttribute(k),Ae===void 0)return;ke=2}const Le=k.drawRange,Ie=k.attributes.position;let lt=Le.start*ke,Ot=(Le.start+Le.count)*ke;de!==null&&(lt=Math.max(lt,de.start*ke),Ot=Math.min(Ot,(de.start+de.count)*ke)),Ae!==null?(lt=Math.max(lt,0),Ot=Math.min(Ot,Ae.count)):Ie!=null&&(lt=Math.max(lt,0),Ot=Math.min(Ot,Ie.count));const mt=Ot-lt;if(mt<0||mt===1/0)return;Ue.setup(O,B,Me,k,Ae);let rn,st=Ce;if(Ae!==null&&(rn=ee.get(Ae),st=_e,st.setIndex(rn)),O.isMesh)B.wireframe===!0?(pe.setLineWidth(B.wireframeLinewidth*qe()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(O.isLine){let He=B.linewidth;He===void 0&&(He=1),pe.setLineWidth(He*qe()),O.isLineSegments?st.setMode(N.LINES):O.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else O.isPoints?st.setMode(N.POINTS):O.isSprite&&st.setMode(N.TRIANGLES);if(O.isBatchedMesh)st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)st.renderInstances(lt,mt,O.count);else if(k.isInstancedBufferGeometry){const He=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Is=Math.min(k.instanceCount,He);st.renderInstances(lt,mt,Is)}else st.render(lt,mt)};function Je(y,D,k){y.transparent===!0&&y.side===Bt&&y.forceSinglePass===!1?(y.side=Nt,y.needsUpdate=!0,Yi(y,D,k),y.side=Cn,y.needsUpdate=!0,Yi(y,D,k),y.side=Bt):Yi(y,D,k)}this.compile=function(y,D,k=null){k===null&&(k=y),f=Ee.get(k),f.init(),S.push(f),k.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),y!==k&&y.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(_._useLegacyLights);const B=new Set;return y.traverse(function(O){const de=O.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){const Me=de[me];Je(Me,k,O),B.add(Me)}else Je(de,k,O),B.add(de)}),S.pop(),f=null,B},this.compileAsync=function(y,D,k=null){const B=this.compile(y,D,k);return new Promise(O=>{function de(){if(B.forEach(function(me){Oe.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){O(y);return}setTimeout(de,10)}ye.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ze=null;function ft(y){Ze&&Ze(y)}function Tt(){At.stop()}function Qe(){At.start()}const At=new Ko;At.setAnimationLoop(ft),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(y){Ze=y,ze.setAnimationLoop(y),y===null?At.stop():At.start()},ze.addEventListener("sessionstart",Tt),ze.addEventListener("sessionend",Qe),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(D),D=ze.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,D,R),f=Ee.get(y,S.length),f.init(),S.push(f),ve.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(ve),ce=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,ce),v=he.get(y,p.length),v.init(),p.push(v),tn(y,D,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(X,$),this.info.render.frame++,K===!0&&Fe.beginShadows();const k=f.state.shadowsArray;if(J.render(k,y,D),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(v,y),f.setupLights(_._useLegacyLights),D.isArrayCamera){const B=D.cameras;for(let O=0,de=B.length;O<de;O++){const me=B[O];Fr(v,y,me,me.viewport)}}else Fr(v,y,D);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(_,y,D),Ue.resetDefaultState(),W=-1,b=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function tn(y,D,k,B){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||V.intersectsSprite(y)){B&&De.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ve);const me=te.update(y),Me=y.material;Me.visible&&v.push(y,me,Me,k,De.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||V.intersectsObject(y))){const me=te.update(y),Me=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),De.copy(y.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),De.copy(me.boundingSphere.center)),De.applyMatrix4(y.matrixWorld).applyMatrix4(ve)),Array.isArray(Me)){const Ae=me.groups;for(let ke=0,Le=Ae.length;ke<Le;ke++){const Ie=Ae[ke],lt=Me[Ie.materialIndex];lt&&lt.visible&&v.push(y,me,lt,k,De.z,Ie)}}else Me.visible&&v.push(y,me,Me,k,De.z,null)}}const de=y.children;for(let me=0,Me=de.length;me<Me;me++)tn(de[me],D,k,B)}function Fr(y,D,k,B){const O=y.opaque,de=y.transmissive,me=y.transparent;f.setupLightsView(k),K===!0&&Fe.setGlobalState(_.clippingPlanes,k),de.length>0&&al(O,de,D,k),B&&pe.viewport(w.copy(B)),O.length>0&&$i(O,D,k),de.length>0&&$i(de,D,k),me.length>0&&$i(me,D,k),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function al(y,D,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const de=Re.isWebGL2;xe===null&&(xe=new Xn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Hi:An,minFilter:zi,samples:de?4:0})),_.getDrawingBufferSize(Pe),de?xe.setSize(Pe.x,Pe.y):xe.setSize(Ts(Pe.x),Ts(Pe.y));const me=_.getRenderTarget();_.setRenderTarget(xe),_.getClearColor(Q),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const Me=_.toneMapping;_.toneMapping=Tn,$i(y,k,B),E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe);let Ae=!1;for(let ke=0,Le=D.length;ke<Le;ke++){const Ie=D[ke],lt=Ie.object,Ot=Ie.geometry,mt=Ie.material,rn=Ie.group;if(mt.side===Bt&&lt.layers.test(B.layers)){const st=mt.side;mt.side=Nt,mt.needsUpdate=!0,kr(lt,k,B,Ot,mt,rn),mt.side=st,mt.needsUpdate=!0,Ae=!0}}Ae===!0&&(E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe)),_.setRenderTarget(me),_.setClearColor(Q,P),_.toneMapping=Me}function $i(y,D,k){const B=D.isScene===!0?D.overrideMaterial:null;for(let O=0,de=y.length;O<de;O++){const me=y[O],Me=me.object,Ae=me.geometry,ke=B===null?me.material:B,Le=me.group;Me.layers.test(k.layers)&&kr(Me,D,k,Ae,ke,Le)}}function kr(y,D,k,B,O,de){y.onBeforeRender(_,D,k,B,O,de),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(_,D,k,B,y,de),O.transparent===!0&&O.side===Bt&&O.forceSinglePass===!1?(O.side=Nt,O.needsUpdate=!0,_.renderBufferDirect(k,D,B,O,y,de),O.side=Cn,O.needsUpdate=!0,_.renderBufferDirect(k,D,B,O,y,de),O.side=Bt):_.renderBufferDirect(k,D,B,O,y,de),y.onAfterRender(_,D,k,B,O,de)}function Yi(y,D,k){D.isScene!==!0&&(D=we);const B=Oe.get(y),O=f.state.lights,de=f.state.shadowsArray,me=O.state.version,Me=fe.getParameters(y,O.state,de,D,k),Ae=fe.getProgramCacheKey(Me);let ke=B.programs;B.environment=y.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||B.environment),ke===void 0&&(y.addEventListener("dispose",oe),ke=new Map,B.programs=ke);let Le=ke.get(Ae);if(Le!==void 0){if(B.currentProgram===Le&&B.lightsStateVersion===me)return zr(y,Me),Le}else Me.uniforms=fe.getUniforms(y),y.onBuild(k,Me,_),y.onBeforeCompile(Me,_),Le=fe.acquireProgram(Me,Ae),ke.set(Ae,Le),B.uniforms=Me.uniforms;const Ie=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=Fe.uniform),zr(y,Me),B.needsLights=cl(y),B.lightsStateVersion=me,B.needsLights&&(Ie.ambientLightColor.value=O.state.ambient,Ie.lightProbe.value=O.state.probe,Ie.directionalLights.value=O.state.directional,Ie.directionalLightShadows.value=O.state.directionalShadow,Ie.spotLights.value=O.state.spot,Ie.spotLightShadows.value=O.state.spotShadow,Ie.rectAreaLights.value=O.state.rectArea,Ie.ltc_1.value=O.state.rectAreaLTC1,Ie.ltc_2.value=O.state.rectAreaLTC2,Ie.pointLights.value=O.state.point,Ie.pointLightShadows.value=O.state.pointShadow,Ie.hemisphereLights.value=O.state.hemi,Ie.directionalShadowMap.value=O.state.directionalShadowMap,Ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ie.spotShadowMap.value=O.state.spotShadowMap,Ie.spotLightMatrix.value=O.state.spotLightMatrix,Ie.spotLightMap.value=O.state.spotLightMap,Ie.pointShadowMap.value=O.state.pointShadowMap,Ie.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Le,B.uniformsList=null,Le}function Br(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=_s.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function zr(y,D){const k=Oe.get(y);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function ol(y,D,k,B,O){D.isScene!==!0&&(D=we),E.resetTextureUnits();const de=D.fog,me=B.isMeshStandardMaterial?D.environment:null,Me=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:mn,Ae=(B.isMeshStandardMaterial?F:x).get(B.envMap||me),ke=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ie=!!k.morphAttributes.position,lt=!!k.morphAttributes.normal,Ot=!!k.morphAttributes.color;let mt=Tn;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=_.toneMapping);const rn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=rn!==void 0?rn.length:0,He=Oe.get(B),Is=f.state.lights;if(K===!0&&(ce===!0||y!==b)){const zt=y===b&&B.id===W;Fe.setState(B,y,zt)}let at=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Is.state.version||He.outputColorSpace!==Me||O.isBatchedMesh&&He.batching===!1||!O.isBatchedMesh&&He.batching===!0||O.isInstancedMesh&&He.instancing===!1||!O.isInstancedMesh&&He.instancing===!0||O.isSkinnedMesh&&He.skinning===!1||!O.isSkinnedMesh&&He.skinning===!0||O.isInstancedMesh&&He.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&He.instancingColor===!1&&O.instanceColor!==null||He.envMap!==Ae||B.fog===!0&&He.fog!==de||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Fe.numPlanes||He.numIntersection!==Fe.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Le||He.morphTargets!==Ie||He.morphNormals!==lt||He.morphColors!==Ot||He.toneMapping!==mt||Re.isWebGL2===!0&&He.morphTargetsCount!==st)&&(at=!0):(at=!0,He.__version=B.version);let Rn=He.currentProgram;at===!0&&(Rn=Yi(B,D,O));let Hr=!1,Ti=!1,Ds=!1;const bt=Rn.getUniforms(),Ln=He.uniforms;if(pe.useProgram(Rn.program)&&(Hr=!0,Ti=!0,Ds=!0),B.id!==W&&(W=B.id,Ti=!0),Hr||b!==y){bt.setValue(N,"projectionMatrix",y.projectionMatrix),bt.setValue(N,"viewMatrix",y.matrixWorldInverse);const zt=bt.map.cameraPosition;zt!==void 0&&zt.setValue(N,De.setFromMatrixPosition(y.matrixWorld)),Re.logarithmicDepthBuffer&&bt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&bt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Ti=!0,Ds=!0)}if(O.isSkinnedMesh){bt.setOptional(N,O,"bindMatrix"),bt.setOptional(N,O,"bindMatrixInverse");const zt=O.skeleton;zt&&(Re.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),bt.setValue(N,"boneTexture",zt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(bt.setOptional(N,O,"batchingTexture"),bt.setValue(N,"batchingTexture",O._matricesTexture,E));const Us=k.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0&&Re.isWebGL2===!0)&&Ve.update(O,k,Rn),(Ti||He.receiveShadow!==O.receiveShadow)&&(He.receiveShadow=O.receiveShadow,bt.setValue(N,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ln.envMap.value=Ae,Ln.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Ti&&(bt.setValue(N,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&ll(Ln,Ds),de&&B.fog===!0&&le.refreshFogUniforms(Ln,de),le.refreshMaterialUniforms(Ln,B,Y,H,xe),_s.upload(N,Br(He),Ln,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(_s.upload(N,Br(He),Ln,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&bt.setValue(N,"center",O.center),bt.setValue(N,"modelViewMatrix",O.modelViewMatrix),bt.setValue(N,"normalMatrix",O.normalMatrix),bt.setValue(N,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const zt=B.uniformsGroups;for(let Ns=0,dl=zt.length;Ns<dl;Ns++)if(Re.isWebGL2){const Gr=zt[Ns];Ye.update(Gr,Rn),Ye.bind(Gr,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function ll(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function cl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,D,k){Oe.get(y.texture).__webglTexture=D,Oe.get(y.depthTexture).__webglTexture=k;const B=Oe.get(y);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,D){const k=Oe.get(y);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,k=0){R=y,I=D,A=k;let B=!0,O=null,de=!1,me=!1;if(y){const Ae=Oe.get(y);Ae.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(N.FRAMEBUFFER,null),B=!1):Ae.__webglFramebuffer===void 0?E.setupRenderTarget(y):Ae.__hasExternalTextures&&E.rebindTextures(y,Oe.get(y.texture).__webglTexture,Oe.get(y.depthTexture).__webglTexture);const ke=y.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(me=!0);const Le=Oe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?O=Le[D][k]:O=Le[D],de=!0):Re.isWebGL2&&y.samples>0&&E.useMultisampledRTT(y)===!1?O=Oe.get(y).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[k]:O=Le,w.copy(y.viewport),z.copy(y.scissor),G=y.scissorTest}else w.copy(j).multiplyScalar(Y).floor(),z.copy(ne).multiplyScalar(Y).floor(),G=ie;if(pe.bindFramebuffer(N.FRAMEBUFFER,O)&&Re.drawBuffers&&B&&pe.drawBuffers(y,O),pe.viewport(w),pe.scissor(z),pe.setScissorTest(G),de){const Ae=Oe.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,k)}else if(me){const Ae=Oe.get(y.texture),ke=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,k||0,ke)}W=-1},this.readRenderTargetPixels=function(y,D,k,B,O,de,me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){pe.bindFramebuffer(N.FRAMEBUFFER,Me);try{const Ae=y.texture,ke=Ae.format,Le=Ae.type;if(ke!==Jt&&ue.convert(ke)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Le===Hi&&(ye.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Le!==An&&ue.convert(Le)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===En&&(Re.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-B&&k>=0&&k<=y.height-O&&N.readPixels(D,k,B,O,ue.convert(ke),ue.convert(Le),de)}finally{const Ae=R!==null?Oe.get(R).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(y,D,k=0){const B=Math.pow(2,-k),O=Math.floor(D.image.width*B),de=Math.floor(D.image.height*B);E.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,y.x,y.y,O,de),pe.unbindTexture()},this.copyTextureToTexture=function(y,D,k,B=0){const O=D.image.width,de=D.image.height,me=ue.convert(k.format),Me=ue.convert(k.type);E.setTexture2D(k,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,y.x,y.y,O,de,me,Me,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,y.x,y.y,D.mipmaps[0].width,D.mipmaps[0].height,me,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,B,y.x,y.y,me,Me,D.image),B===0&&k.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(y,D,k,B,O=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=y.max.x-y.min.x+1,me=y.max.y-y.min.y+1,Me=y.max.z-y.min.z+1,Ae=ue.convert(B.format),ke=ue.convert(B.type);let Le;if(B.isData3DTexture)E.setTexture3D(B,0),Le=N.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)E.setTexture2DArray(B,0),Le=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Ie=N.getParameter(N.UNPACK_ROW_LENGTH),lt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ot=N.getParameter(N.UNPACK_SKIP_PIXELS),mt=N.getParameter(N.UNPACK_SKIP_ROWS),rn=N.getParameter(N.UNPACK_SKIP_IMAGES),st=k.isCompressedTexture?k.mipmaps[O]:k.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,st.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,y.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,y.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,y.min.z),k.isDataTexture||k.isData3DTexture?N.texSubImage3D(Le,O,D.x,D.y,D.z,de,me,Me,Ae,ke,st.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Le,O,D.x,D.y,D.z,de,me,Me,Ae,st.data)):N.texSubImage3D(Le,O,D.x,D.y,D.z,de,me,Me,Ae,ke,st),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ie),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),N.pixelStorei(N.UNPACK_SKIP_ROWS,mt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,rn),O===0&&B.generateMipmaps&&N.generateMipmap(Le),pe.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){I=0,A=0,R=null,pe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Cr?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Rs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?Vn:Fo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vn?dt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Pf extends sl{}Pf.prototype.isWebGL1Renderer=!0;class ki{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new ki(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class If extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class co extends en{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ci=new tt,ho=new tt,vs=[],uo=new $e,Df=new tt,Pi=new q,Ii=new Wi;class Uf extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new co(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Df)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $e),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),uo.copy(e.boundingBox).applyMatrix4(ci),this.boundingBox.union(uo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),Ii.copy(e.boundingSphere).applyMatrix4(ci),this.boundingSphere.union(Ii)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ii.copy(this.boundingSphere),Ii.applyMatrix4(n),e.ray.intersectsSphere(Ii)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ci),ho.multiplyMatrices(n,ci),Pi.matrixWorld=ho,Pi.raycast(e,vs);for(let o=0,a=vs.length;o<a;o++){const l=vs[o];l.instanceId=r,l.object=this,t.push(l)}vs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new co(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Dt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dr extends sn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new M,d=new Be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const m=n+h/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(a,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vt extends sn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],m=[];let g=0;const v=[],f=n/2;let p=0;S(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(m,2));function S(){const T=new M,I=new M;let A=0;const R=(t-e)/n;for(let W=0;W<=r;W++){const b=[],w=W/r,z=w*(t-e)+e;for(let G=0;G<=i;G++){const Q=G/i,P=Q*l+a,U=Math.sin(P),H=Math.cos(P);I.x=z*U,I.y=-w*n+f,I.z=z*H,h.push(I.x,I.y,I.z),T.set(U,R,H).normalize(),u.push(T.x,T.y,T.z),m.push(Q,1-w),b.push(g++)}v.push(b)}for(let W=0;W<i;W++)for(let b=0;b<r;b++){const w=v[b][W],z=v[b+1][W],G=v[b+1][W+1],Q=v[b][W+1];d.push(w,z,Q),d.push(z,G,Q),A+=6}c.addGroup(p,A,0),p+=A}function _(T){const I=g,A=new Be,R=new M;let W=0;const b=T===!0?e:t,w=T===!0?1:-1;for(let G=1;G<=i;G++)h.push(0,f*w,0),u.push(0,w,0),m.push(.5,.5),g++;const z=g;for(let G=0;G<=i;G++){const P=G/i*l+a,U=Math.cos(P),H=Math.sin(P);R.x=b*H,R.y=f*w,R.z=b*U,h.push(R.x,R.y,R.z),u.push(0,w,0),A.x=U*.5+.5,A.y=H*.5*w+.5,m.push(A.x,A.y),g++}for(let G=0;G<i;G++){const Q=I+G,P=z+G;T===!0?d.push(P,P+1,Q):d.push(P+1,P,Q),W+=3}c.addGroup(p,W,T===!0?1:2),p+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ur extends vt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ur(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gn extends sn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new M,u=new M,m=[],g=[],v=[],f=[];for(let p=0;p<=n;p++){const S=[],_=p/n;let T=0;p===0&&o===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let I=0;I<=t;I++){const A=I/t;h.x=-e*Math.cos(i+A*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(i+A*r)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),f.push(A+T,1-_),S.push(c++)}d.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const _=d[p][S+1],T=d[p][S],I=d[p+1][S],A=d[p+1][S+1];(p!==0||o>0)&&m.push(_,T,A),(p!==n-1||l<Math.PI)&&m.push(T,I,A)}this.setIndex(m),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Se extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ko,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const po={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Nf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const Of=new Nf;class Nr{constructor(e){this.manager=e!==void 0?e:Of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Nr.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ff extends Nr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=po.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Gi("img");function l(){d(),po.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){d(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class kf extends Nr{constructor(e){super(e)}load(e,t,n,i){const r=new Dt,o=new Ff(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class qi extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Bf extends qi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hr=new tt,fo=new M,mo=new M;class Or{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fo.setFromMatrixPosition(e.matrixWorld),t.position.copy(fo),mo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mo),t.updateMatrixWorld(),hr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zf extends Or{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hf extends qi{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new zf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const go=new tt,Di=new M,ur=new M;class Gf extends Or{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Di.setFromMatrixPosition(e.matrixWorld),n.position.copy(Di),ur.copy(n.position),ur.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ur),n.updateMatrixWorld(),i.makeTranslation(-Di.x,-Di.y,-Di.z),go.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go)}}class un extends qi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vf extends Or{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class As extends qi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Vf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rl extends qi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vo(){return(typeof performance>"u"?Date:performance).now()}class Xf{constructor(e,t,n=0,i=1/0){this.ray=new Ls(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Mr(e,this,n,t),n.sort(xo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Mr(e[i],this,n,t);return n.sort(xo),n}}function xo(s,e){return s.distance-e.distance}function Mr(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Mr(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wr);const Ui="blackveil_save_v1",_o="blackveil_settings_v1",yo=1;class qf{save(e){try{const t=this.load(),n={version:yo,timestamp:Date.now(),player:{health:100,position:{x:0,y:0,z:0},rotation:0,weapons:["m9_tactical"],currentWeapon:0,ammo:{"9mm":90},...t?.player||{},...e.player||{}},progression:{level:1,xp:0,skillPoints:0,skills:{},currency:0,...t?.progression||{},...e.progression||{}},missions:{activeMissionId:"ch1_m1_entry",completed:[],objectives:{},flags:{},...t?.missions||{},...e.missions||{}},world:{discoveredLocations:[],collectedLore:[],factionRep:{VANGUARD:0,ASHEN:10,HELIX:-20,VEIL:-50},powerStates:{},...t?.world||{},...e.world||{}},settings:{quality:"auto",sensitivity:1,language:"en",volumes:{master:1,music:.7,sfx:.9,voice:1,ambience:.8,ui:.8},fpsLimit:60,...t?.settings||{},...e.settings||{}},inventory:{items:[],equipped:{},...t?.inventory||{},...e.inventory||{}}};return localStorage.setItem(Ui,JSON.stringify(n)),!0}catch(t){return console.error("[Save] Failed",t),!1}}load(){try{const e=localStorage.getItem(Ui);if(!e)return null;const t=JSON.parse(e);return t.version!==yo&&console.warn("[Save] Version mismatch, migrating"),t}catch(e){return console.error("[Save] Corrupt",e),null}}saveSettings(e){localStorage.setItem(_o,JSON.stringify(e))}loadSettings(){try{return JSON.parse(localStorage.getItem(_o)||"null")}catch{return null}}hasSave(){return!!localStorage.getItem(Ui)}deleteSave(){localStorage.removeItem(Ui)}exportSave(){return localStorage.getItem(Ui)}}const xt=new qf,bo={quality:"auto",resolutionScale:1,textureQuality:1,shadowQuality:1,effectsQuality:1,viewDistance:1,fpsLimit:60,masterVolume:1,musicVolume:.7,sfxVolume:.9,voiceVolume:1,ambienceVolume:.8,uiVolume:.8,cameraSensitivity:1,aimSensitivity:1,invertY:!1,gyroEnabled:!1,gyroSensitivity:1,vibration:!0,hapticsEnabled:!0,subtitles:!0,subtitleSize:1,language:"en",touchOpacity:.85,controlLayout:null};class $f{constructor(){C(this,"settings");C(this,"listeners",new Set);const e=xt.loadSettings();this.settings={...bo,...e||{}}}get(e){return this.settings[e]}set(e,t){this.settings[e]=t,this.persist()}update(e){Object.assign(this.settings,e),this.persist()}persist(){xt.saveSettings(this.settings),this.listeners.forEach(e=>e(this.settings))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}reset(){this.settings={...bo},this.persist()}}const We=new $f;class Yf{constructor(){C(this,"loader",new kf);C(this,"textures",new Map);C(this,"canvases",new Map)}async loadTexture(e,t){return this.textures.has(e)?this.textures.get(e):new Promise(n=>{this.loader.load(t,i=>{i.wrapS=i.wrapT=Bi,i.colorSpace=dt,this.textures.set(e,i),console.log(`[Texture] Loaded ${e} from ${t}`),n(i)},void 0,i=>{console.warn(`[Texture] Failed to load ${e} from ${t}`,i),n(null)})})}createProceduralTexture(e,t,n,i){const r=document.createElement("canvas");r.width=t,r.height=n;const o=r.getContext("2d");i(o,t,n);const a=new Wn(r);return a.wrapS=a.wrapT=Bi,a.colorSpace=dt,this.textures.set(e,a),this.canvases.set(e,r),a}get(e){return this.textures.get(e)}getAll(){return this.textures}generateFallbackTextures(){this.createProceduralTexture("concrete",256,256,(e,t,n)=>{e.fillStyle="#2a2a2e",e.fillRect(0,0,t,n);for(let i=0;i<800;i++){const r=Math.random()*t,o=Math.random()*n,a=Math.random()*2+.5;e.fillStyle=`rgba(${30+Math.random()*20},${30+Math.random()*20},${35+Math.random()*20},${Math.random()*.3})`,e.fillRect(r,o,a,a)}e.strokeStyle="rgba(0,0,0,0.15)",e.lineWidth=.5;for(let i=0;i<15;i++)e.beginPath(),e.moveTo(Math.random()*t,Math.random()*n),e.lineTo(Math.random()*t,Math.random()*n),e.stroke()}),this.createProceduralTexture("metal",256,256,(e,t,n)=>{const i=e.createLinearGradient(0,0,t,0);i.addColorStop(0,"#3a3a3e"),i.addColorStop(.5,"#4a4a4e"),i.addColorStop(1,"#2a2a2e"),e.fillStyle=i,e.fillRect(0,0,t,n),e.strokeStyle="rgba(255,255,255,0.06)",e.lineWidth=.8;for(let r=0;r<60;r++){const o=Math.random()*n;e.beginPath(),e.moveTo(0,o),e.lineTo(t,o+(Math.random()-.5)*4),e.stroke()}e.fillStyle="#1a1a1e";for(let r=20;r<t;r+=64)for(let o=20;o<n;o+=64)e.beginPath(),e.arc(r,o,3,0,Math.PI*2),e.fill()}),this.createProceduralTexture("fabric",256,256,(e,t,n)=>{e.fillStyle="#0f0f12",e.fillRect(0,0,t,n),e.strokeStyle="rgba(255,255,255,0.04)",e.lineWidth=.5;for(let i=0;i<t;i+=4)e.beginPath(),e.moveTo(i,0),e.lineTo(i,n),e.stroke();for(let i=0;i<n;i+=4)e.beginPath(),e.moveTo(0,i),e.lineTo(t,i),e.stroke();e.fillStyle="rgba(106,166,255,0.03)";for(let i=0;i<t*n/200;i++)e.fillRect(Math.random()*t,Math.random()*n,2,2)}),this.createProceduralTexture("graffiti",512,256,(e,t,n)=>{e.fillStyle="#1a1a1e",e.fillRect(0,0,t,n),e.font="bold 48px Orbitron, monospace",e.fillStyle="rgba(106,166,255,0.15)",e.fillText("VEIL",40,80),e.fillStyle="rgba(255,77,106,0.12)",e.fillText("VEYRA",200,140),e.fillStyle="rgba(74,222,128,0.1)",e.font="24px JetBrains Mono, monospace",e.fillText("THE CITY FORGOT",40,200);for(let i=0;i<2e3;i++)e.fillStyle=`hsla(${200+Math.random()*60},70%,60%,${Math.random()*.08})`,e.fillRect(Math.random()*t,Math.random()*n,Math.random()*3+1,Math.random()*3+1)}),this.createProceduralTexture("skin_player",256,256,(e,t,n)=>{const i=e.createRadialGradient(t/2,n/2,0,t/2,n/2,t/2);i.addColorStop(0,"#2a2a3a"),i.addColorStop(.5,"#1a1a24"),i.addColorStop(1,"#0f0f14"),e.fillStyle=i,e.fillRect(0,0,t,n),e.strokeStyle="rgba(106,166,255,0.08)",e.lineWidth=1;for(let r=0;r<20;r++)e.beginPath(),e.moveTo(0,r*13),e.bezierCurveTo(t*.3,r*13+5,t*.7,r*13-5,t,r*13),e.stroke()}),console.log("[Texture] Generated fallback procedural textures")}async loadAllGenerated(){this.generateFallbackTextures();const e=[{id:"char_player",url:"./public/assets/characters/player.png"},{id:"char_security",url:"./public/assets/characters/security.png"},{id:"char_scout",url:"./public/assets/characters/scout.png"},{id:"char_heavy",url:"./public/assets/characters/heavy.png"},{id:"char_sniper",url:"./public/assets/characters/sniper.png"},{id:"char_hunter",url:"./public/assets/characters/hunter.png"},{id:"char_commander",url:"./public/assets/characters/commander.png"},{id:"tex_concrete_img",url:"./public/assets/textures/concrete.png"},{id:"tex_metal_img",url:"./public/assets/textures/metal.png"},{id:"tex_fabric_img",url:"./public/assets/textures/fabric_tactical.png"},{id:"tex_graffiti_img",url:"./public/assets/textures/graffiti.png"}];for(const t of e)await this.loadTexture(t.id,t.url)}}const Er=new Yf;class jf{constructor(e){C(this,"renderer");C(this,"scene");C(this,"camera");C(this,"quality","auto");C(this,"resolutionScale",1);C(this,"stats",{fps:60,frameTime:16,drawCalls:0,triangles:0,geometries:0,textures:0});C(this,"frameTimes",[]);C(this,"lastFpsUpdate",0);C(this,"adaptiveQualityLevel",2);C(this,"canvas");C(this,"ambientLight");C(this,"directionalLight");C(this,"hemisphereLight");this.canvas=e,this.renderer=new sl({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1,logarithmicDepthBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=dt,this.renderer.toneMapping=Co,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fr,this.renderer.shadowMap.autoUpdate=!0,this.scene=new If,this.scene.background=new Xe(328968),this.scene.fog=new ki(657940,.012),this.ambientLight=new rl(1710638,.35),this.scene.add(this.ambientLight),this.hemisphereLight=new Bf(6989567,657935,.4),this.scene.add(this.hemisphereLight),this.directionalLight=new As(16777215,1.2),this.directionalLight.position.set(30,50,20),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(2048,2048),this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=150,this.directionalLight.shadow.camera.left=-60,this.directionalLight.shadow.camera.right=60,this.directionalLight.shadow.camera.top=60,this.directionalLight.shadow.camera.bottom=-60,this.directionalLight.shadow.bias=-1e-4,this.scene.add(this.directionalLight);const t=new As(6989567,.3);t.position.set(-40,60,-30),this.scene.add(t),this.camera=new Ut(65,window.innerWidth/window.innerHeight,.1,800),this.camera.position.set(0,2,6),this.quality=We.get("quality"),We.onChange(n=>this.applySettings(n.quality,n.resolutionScale)),window.addEventListener("resize",()=>this.resize()),this.resize(),this.applySettings(this.quality,We.get("resolutionScale")),Er.loadAllGenerated(),console.log("[Renderer] Enhanced graphics initialized - cinematic lighting, 2048 shadows, ACESFilmic")}applySettings(e,t){this.quality=e,this.resolutionScale=t;let n=e;e==="auto"&&(n=["low","medium","high","ultra"][this.adaptiveQualityLevel]);const i=n==="low",r=n==="medium",o=n==="high",a=n==="ultra";this.renderer.shadowMap.enabled=!i,this.renderer.shadowMap.type=a?fr:r?Tr:ml,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio*t*(i?.6:a?1.1:.9),2));const l=i?1024:r||o?2048:4096;this.directionalLight.shadow.mapSize.set(l,l),this.scene.fog instanceof ki&&(this.scene.fog.density=i?.02:r?.015:o?.012:.009),this.renderer.toneMappingExposure=i?1:a?1.25:1.15,this.ambientLight.intensity=i?.25:a?.45:.35,this.hemisphereLight.intensity=i?.3:a?.5:.4,console.log(`[Renderer] Quality: ${n} (adaptive ${this.adaptiveQualityLevel}) resScale ${t} shadow ${l}`)}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}beginFrame(){}endFrame(e){this.frameTimes.push(e),this.frameTimes.length>60&&this.frameTimes.shift();const t=performance.now();if(t-this.lastFpsUpdate>500){const n=this.frameTimes.reduce((i,r)=>i+r,0)/this.frameTimes.length;this.stats.frameTime=n*1e3,this.stats.fps=1e3/this.stats.frameTime,this.stats.drawCalls=this.renderer.info.render.calls,this.stats.triangles=this.renderer.info.render.triangles,this.stats.geometries=this.renderer.info.memory.geometries,this.stats.textures=this.renderer.info.memory.textures,this.lastFpsUpdate=t,this.quality==="auto"&&(this.stats.fps<26&&this.adaptiveQualityLevel>0?(this.adaptiveQualityLevel--,this.applySettings("auto",this.resolutionScale),console.log(`[Renderer] Adaptive down to ${this.adaptiveQualityLevel} FPS ${this.stats.fps.toFixed(1)}`)):this.stats.fps>58&&this.adaptiveQualityLevel<3&&(this.adaptiveQualityLevel++,this.applySettings("auto",this.resolutionScale),console.log(`[Renderer] Adaptive up to ${this.adaptiveQualityLevel} FPS ${this.stats.fps.toFixed(1)}`))),window.dispatchEvent(new CustomEvent("bv:fps",{detail:this.stats.fps}))}}getStats(){return{...this.stats}}getAdaptiveLevel(){return this.adaptiveQualityLevel}render(){this.renderer.render(this.scene,this.camera)}setBackground(e){this.scene.background=new Xe(e)}setTimeOfDay(e){const t=e<.25||e>.75;this.scene.fog instanceof ki&&this.scene.fog.color.setHex(t?657940:1710634),this.directionalLight.intensity=t?.3:1.2,this.ambientLight.intensity=t?.2:.4}addPointLight(e,t,n,i){const r=new un(t,n,i);return r.position.copy(e),r.castShadow=!0,r.shadow.mapSize.set(512,512),this.scene.add(r),r}dispose(){this.renderer.dispose()}}class Kf{constructor(e){C(this,"state",{move:new Be,look:new Be,sprint:!1,crouch:!1,jump:!1,fire:!1,aim:!1,reload:!1,interact:!1,melee:!1,switchWeapon:0,slide:!1,inventory:!1,map:!1,pause:!1});C(this,"keys",new Set);C(this,"touchJoysticks",{move:new Be,look:new Be});C(this,"mouseDown",!1);C(this,"pointerLocked",!1);this.canvas=e,this.bindKeyboard(),this.bindMouse(),this.bindTouch(),this.bindGamepadPoll()}bindKeyboard(){window.addEventListener("keydown",e=>{this.keys.add(e.code.toLowerCase()),e.code==="KeyR"&&(this.state.reload=!0),e.code==="KeyF"&&(this.state.interact=!0),e.code==="KeyE"&&(this.state.interact=!0),e.code==="Space"&&(this.state.jump=!0),(e.code==="ControlLeft"||e.code==="KeyC")&&(this.state.crouch=!0),e.code==="ShiftLeft"&&(this.state.sprint=!0),e.code==="KeyV"&&(this.state.melee=!0),e.code==="Tab"&&(this.state.inventory=!0),e.code==="KeyM"&&(this.state.map=!0),e.code==="Escape"&&(this.state.pause=!0),e.code==="Digit1"&&(this.state.switchWeapon=-1),e.code==="Digit2"&&(this.state.switchWeapon=1)}),window.addEventListener("keyup",e=>{this.keys.delete(e.code.toLowerCase()),e.code==="KeyR"&&(this.state.reload=!1),(e.code==="KeyF"||e.code==="KeyE")&&(this.state.interact=!1),e.code==="Space"&&(this.state.jump=!1),(e.code==="ControlLeft"||e.code==="KeyC")&&(this.state.crouch=!1),e.code==="ShiftLeft"&&(this.state.sprint=!1),e.code==="KeyV"&&(this.state.melee=!1),e.code==="Tab"&&(this.state.inventory=!1),e.code==="KeyM"&&(this.state.map=!1),e.code==="Escape"&&(this.state.pause=!1),(e.code==="Digit1"||e.code==="Digit2")&&(this.state.switchWeapon=0)})}bindMouse(){this.canvas.addEventListener("mousedown",e=>{e.button===0&&(this.state.fire=!0),e.button===2&&(this.state.aim=!0),this.mouseDown=!0}),window.addEventListener("mouseup",e=>{e.button===0&&(this.state.fire=!1),e.button===2&&(this.state.aim=!1),this.mouseDown=!1}),this.canvas.addEventListener("mousemove",e=>{document.pointerLockElement===this.canvas&&(this.state.look.x=e.movementX*.002,this.state.look.y=e.movementY*.002)}),this.canvas.addEventListener("wheel",e=>{this.state.switchWeapon=Math.sign(e.deltaY),setTimeout(()=>this.state.switchWeapon=0,100)}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault())}bindTouch(){}bindGamepadPoll(){}setMoveVector(e,t){this.touchJoysticks.move.set(e,t)}setLookVector(e,t){this.touchJoysticks.look.set(e,t)}update(){const e=new Be;(this.keys.has("keyw")||this.keys.has("arrowup"))&&(e.y+=1),(this.keys.has("keys")||this.keys.has("arrowdown"))&&(e.y-=1),(this.keys.has("keya")||this.keys.has("arrowleft"))&&(e.x-=1),(this.keys.has("keyd")||this.keys.has("arrowright"))&&(e.x+=1),e.lengthSq()>0&&e.normalize(),this.touchJoysticks.move.lengthSq()>.01?this.state.move.copy(this.touchJoysticks.move):this.state.move.copy(e),this.touchJoysticks.look.lengthSq()>.001&&this.state.look.copy(this.touchJoysticks.look);const t=navigator.getGamepads();for(const n of t){if(!n)continue;const i=.2,r=Math.abs(n.axes[0])>i?n.axes[0]:0,o=Math.abs(n.axes[1])>i?-n.axes[1]:0;(r||o)&&this.state.move.set(r,o);const a=Math.abs(n.axes[2])>i?n.axes[2]:0,l=Math.abs(n.axes[3])>i?n.axes[3]:0;(a||l)&&this.state.look.set(a*.05,l*.05),n.buttons[0]?.pressed&&(this.state.jump=!0),n.buttons[1]?.pressed&&(this.state.crouch=!0),n.buttons[2]?.pressed&&(this.state.reload=!0),n.buttons[3]?.pressed&&(this.state.interact=!0),n.buttons[5]?.pressed&&(this.state.fire=!0),n.buttons[4]?.pressed&&(this.state.aim=!0)}}consumeLook(){const e=this.state.look.clone();return this.state.look.set(0,0),e}resetTransient(){this.state.switchWeapon=0}}class Jf{constructor(){C(this,"ctx",null);C(this,"masterGain",null);C(this,"gains",new Map);C(this,"sounds",new Map);C(this,"activeSources",new Set);C(this,"musicState","exploration");C(this,"musicOscillators",[]);this.initContextOnInteraction()}initContextOnInteraction(){const e=()=>{if(!this.ctx){try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.connect(this.ctx.destination),["master","music","sfx","voice","ambience","ui"].forEach(t=>{const n=this.ctx.createGain();n.connect(t==="master"?this.ctx.destination:this.masterGain),this.gains.set(t,n)}),this.updateVolumes(),We.onChange(()=>this.updateVolumes()),this.startProceduralAmbience(),console.log("[Audio] Context initialized")}catch(t){console.warn("[Audio] Failed to init",t)}window.removeEventListener("click",e),window.removeEventListener("keydown",e),window.removeEventListener("touchstart",e)}};window.addEventListener("click",e,{once:!1}),window.addEventListener("keydown",e,{once:!1}),window.addEventListener("touchstart",e,{once:!1})}updateVolumes(){if(!this.ctx)return;const e=We.settings;this.gains.get("master").gain.value=e.masterVolume,this.gains.get("music").gain.value=e.musicVolume,this.gains.get("sfx").gain.value=e.sfxVolume,this.gains.get("voice").gain.value=e.voiceVolume,this.gains.get("ambience").gain.value=e.ambienceVolume,this.gains.get("ui").gain.value=e.uiVolume}startProceduralAmbience(){if(this.ctx)try{const e=this.ctx,t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),i=n.getChannelData(0);for(let a=0;a<t;a++)i[a]=(Math.random()*2-1)*.02*Math.sin(a*1e-4);const r=e.createBufferSource();r.buffer=n,r.loop=!0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=400,r.connect(o),o.connect(this.gains.get("ambience")),r.start()}catch{}}playProceduralSound(e,t){if(!(!this.ctx||!this.masterGain))try{const n=this.ctx,i=n.createOscillator(),r=n.createGain(),o=n.createBiquadFilter();let a=440,l=.1,c=.3;switch(e){case"pistol":a=180,l=.15,c=.6;break;case"rifle":a=120,l=.12,c=.7;break;case"smg":a=200,l=.08,c=.5;break;case"shotgun":a=80,l=.25,c=.8;break;case"sniper":a=90,l=.3,c=.9;break;case"footstep":a=60,l=.05,c=.15;break;case"reload":a=300,l=.4,c=.3;break;case"hit":a=150,l=.1,c=.5;break;case"ui_click":a=800,l=.08,c=.2;break;case"terminal":a=600,l=.15,c=.25;break;case"door":a=100,l=.5,c=.4;break;default:a=440,l=.1,c=.3}if(i.type=e.includes("shot")||e==="rifle"||e==="pistol"?"square":"sine",i.frequency.value=a,e.includes("shot")||e==="rifle"||e==="pistol"||e==="smg"||e==="shotgun"||e==="sniper"){const d=n.sampleRate*l,h=n.createBuffer(1,d,n.sampleRate),u=h.getChannelData(0);for(let g=0;g<d;g++)u[g]=(Math.random()*2-1)*Math.pow(1-g/d,2)*c;const m=n.createBufferSource();m.buffer=h,m.connect(o),o.type="bandpass",o.frequency.value=a*2,o.connect(this.gains.get("sfx")),m.start();return}r.gain.setValueAtTime(c,n.currentTime),r.gain.exponentialRampToValueAtTime(.001,n.currentTime+l),i.connect(o),o.connect(r),r.connect(this.gains.get(e.startsWith("ui")?"ui":"sfx")),i.start(),i.stop(n.currentTime+l)}catch(n){console.warn("[Audio] play failed",n)}}setMusicState(e){if(this.musicState=e,!!this.ctx){this.musicOscillators.forEach(t=>{try{t.stop()}catch{}}),this.musicOscillators=[];try{const t=this.ctx,n=e==="combat"?55:e==="stealth"?40:e==="tension"?48:36;for(let i=0;i<2;i++){const r=t.createOscillator(),o=t.createGain();r.type="sawtooth",r.frequency.value=n*(i+1)*.5,o.gain.value=e==="combat"?.06:.02;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=e==="combat"?800:400,r.connect(a),a.connect(o),o.connect(this.gains.get("music")),r.start(),this.musicOscillators.push(r)}}catch{}}}playUI(e){const t={click:"ui_click",hover:"ui_click",open:"terminal",close:"door",error:"hit"};this.playProceduralSound(t[e]||"ui_click")}setListenerPosition(e,t){if(!this.ctx?.listener)return;const n=this.ctx.listener;"positionX"in n?(n.positionX.value=e.x,n.positionY.value=e.y,n.positionZ.value=e.z):n.setPosition(e.x,e.y,e.z)}}const ot=new Jf;class Zf{constructor(e){C(this,"position",new M(0,1.8,0));C(this,"velocity",new M);C(this,"rotation",new Qt(0,0,0,"YXZ"));C(this,"yaw",0);C(this,"pitch",0);C(this,"stance","stand");C(this,"moveState","idle");C(this,"isGrounded",!0);C(this,"isAiming",!1);C(this,"isSprinting",!1);C(this,"isCrouching",!1);C(this,"isSliding",!1);C(this,"stats",{health:100,maxHealth:100,armor:50,stamina:100,maxStamina:100});C(this,"walkSpeed",2.4);C(this,"jogSpeed",4.5);C(this,"sprintSpeed",7);C(this,"crouchSpeed",1.8);C(this,"slideSpeed",8.5);C(this,"jumpForce",5.8);C(this,"gravity",-15);C(this,"coyoteTime",.18);C(this,"coyoteTimer",0);C(this,"footstepTimer",0);C(this,"slideTimer",0);C(this,"vaultCooldown",0);C(this,"colliders",[]);C(this,"radius",.45);C(this,"heightStand",1.8);C(this,"heightCrouch",1.1);C(this,"heightSlide",.7);C(this,"mesh");C(this,"cameraTarget",new M);C(this,"wasGrounded",!0);this.input=e,this.mesh=new Wt}setColliders(e){this.colliders=e}checkCollision(e,t){const n=new $e(new M(e.x-this.radius,e.y,e.z-this.radius),new M(e.x+this.radius,e.y+t,e.z+this.radius));for(const i of this.colliders)if(n.intersectsBox(i))return i;return null}canVault(){const e=new M(0,0,-1).applyAxisAngle(new M(0,1,0),this.yaw),t=this.position.clone().add(e.clone().multiplyScalar(.9));t.y+=.5;const n=this.checkCollision(t,1);if(n){const i=n.max.y-this.position.y;if(i>.3&&i<1.6){const r=t.clone();if(r.y+=i+.3,!this.checkCollision(r,.8))return{can:!0,height:i,box:n}}}return{can:!1,height:0}}moveWithCollision(e,t){const n=this.isSliding?this.heightSlide:this.stance==="crouch"?this.heightCrouch:this.heightStand;let i=this.position.clone().add(new M(e.x,0,0));this.checkCollision(i,n)?this.velocity.x*=.3:this.position.x=i.x,i=this.position.clone().add(new M(0,0,e.z)),this.checkCollision(i,n)?this.velocity.z*=.3:this.position.z=i.z,i=this.position.clone().add(new M(0,e.y,0));const r=this.checkCollision(i,n);r?e.y<0?(this.isGrounded=!0,this.position.y=r.max.y+.05,this.velocity.y=0):this.velocity.y=0:this.position.y=i.y}update(e,t){this.input.update(),this.vaultCooldown=Math.max(0,this.vaultCooldown-e);const n=this.input.consumeLook(),i=this.isAiming?.5:1;this.yaw-=n.x*i,this.pitch+=n.y*i,this.pitch=Zt.clamp(this.pitch,-1.45,1.45);const r=this.input.state.crouch;r&&this.isSprinting&&this.isGrounded&&this.velocity.length()>3.5&&!this.isSliding&&this.slideTimer<=0&&(this.isSliding=!0,this.slideTimer=.8,this.moveState="slide",ot.playProceduralSound("footstep")),this.isSliding?(this.slideTimer-=e,this.stance="crouch",this.isCrouching=!0,(this.slideTimer<=0||this.velocity.length()<1.5)&&(this.isSliding=!1,this.stance=r?"crouch":"stand",this.isCrouching=r)):(this.stance=r?"crouch":"stand",this.isCrouching=r),this.isSprinting=this.input.state.sprint&&this.input.state.move.length()>.5&&!this.isCrouching&&!this.isSliding&&this.stats.stamina>5,this.isAiming=this.input.state.aim;const a=this.input.state.move,l=new M(0,0,-1).applyAxisAngle(new M(0,1,0),this.yaw),c=new M(1,0,0).applyAxisAngle(new M(0,1,0),this.yaw),d=new M;d.addScaledVector(l,a.y),d.addScaledVector(c,a.x),d.lengthSq()>0&&d.normalize();let h=0;this.isSliding?(h=this.slideSpeed*(this.slideTimer/.8),d.copy(l)):a.lengthSq()>.01&&(this.isSprinting?h=this.sprintSpeed:this.isCrouching?h=this.crouchSpeed:a.length()>.9?h=this.jogSpeed:h=this.walkSpeed,this.isAiming&&(h*=.52));const u=this.isGrounded?this.isSliding?2:20:7,m=d.multiplyScalar(h);if(this.isSliding?(this.velocity.x=Zt.lerp(this.velocity.x,m.x*1.2,u*e),this.velocity.z=Zt.lerp(this.velocity.z,m.z*1.2,u*e)):(this.velocity.x=Zt.lerp(this.velocity.x,m.x,u*e),this.velocity.z=Zt.lerp(this.velocity.z,m.z,u*e)),this.isGrounded||(this.velocity.y+=this.gravity*e),this.input.state.jump){if(this.isSliding)this.isSliding=!1,this.velocity.y=this.jumpForce*.9,this.velocity.x*=1.15,this.velocity.z*=1.15,this.isGrounded=!1,this.moveState="jump",ot.playProceduralSound("footstep");else if(this.isGrounded||this.coyoteTimer>0){const _=this.canVault();_.can&&this.vaultCooldown<=0&&a.length()>.3?(this.position.y+=_.height+.2,this.velocity.y=2.5,this.velocity.x+=l.x*2.5,this.velocity.z+=l.z*2.5,this.moveState=_.height>1?"mantle":"vault",this.vaultCooldown=.6,ot.playProceduralSound("footstep"),console.log("[Player] Vault",_.height.toFixed(2))):(this.velocity.y=this.jumpForce,this.isGrounded=!1,this.coyoteTimer=0,this.moveState="jump",ot.playProceduralSound("footstep"))}}this.isGrounded?this.coyoteTimer=this.coyoteTime:this.coyoteTimer-=e;let g=!1;const v=new $e(new M(this.position.x-this.radius*.8,this.position.y-.25,this.position.z-this.radius*.8),new M(this.position.x+this.radius*.8,this.position.y+.15,this.position.z+this.radius*.8));for(const _ of this.colliders)if(v.intersectsBox(_)&&this.velocity.y<=.2){g=!0;break}if(this.position.y<=.06&&(g=!0,this.position.y=.06),!this.wasGrounded&&g){const _=Math.abs(this.velocity.y);_>8?(ot.playProceduralSound("hit"),_>12&&this.takeDamage((_-12)*4)):ot.playProceduralSound("footstep"),_>3&&(this.moveState="landing")}this.wasGrounded=this.isGrounded,this.isGrounded=g,g&&this.velocity.y<0&&(this.velocity.y=0);const f=this.velocity.clone().multiplyScalar(e);this.moveWithCollision(f,e),this.isSprinting?(this.stats.stamina=Math.max(0,this.stats.stamina-24*e),this.stats.stamina===0&&(this.isSprinting=!1)):this.stats.stamina=Math.min(this.stats.maxStamina,this.stats.stamina+20*e);const p=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.z*this.velocity.z);this.isGrounded?this.isSliding?this.moveState="slide":p<.15?this.moveState="idle":this.isSprinting?this.moveState="sprint":this.isCrouching?this.moveState="crouch_walk":p>3.8?this.moveState="jog":this.moveState="walk":this.moveState=this.velocity.y>.5?"jump":"fall",p>.5&&this.isGrounded&&!this.isSliding&&(this.footstepTimer-=e*p,this.footstepTimer<=0&&(this.footstepTimer=this.isSprinting?.3:this.isCrouching?.68:.42,(!this.isCrouching||Math.random()>.45)&&ot.playProceduralSound("footstep"))),this.mesh.position.copy(this.position),this.mesh.rotation.y=this.yaw;const S=this.isSliding?.5:this.stance==="crouch"?.95:1.68;this.cameraTarget.set(this.position.x,this.position.y+S,this.position.z)}getCameraTarget(){return this.cameraTarget.clone()}takeDamage(e){let t=e;if(this.stats.armor>0){const n=Math.min(this.stats.armor,t*.62);this.stats.armor-=n,t-=n}return this.stats.health=Math.max(0,this.stats.health-t),ot.playProceduralSound("hit"),this.stats.health<=0}heal(e){this.stats.health=Math.min(this.stats.maxHealth,this.stats.health+e)}addArmor(e){this.stats.armor=Math.min(100,this.stats.armor+e)}getPosition(){return this.position.clone()}}class Qf{constructor(e,t){C(this,"target",new M);C(this,"desiredPosition",new M);C(this,"currentPosition",new M);C(this,"offset",new M(0,1.8,4.2));C(this,"shoulder",.4);C(this,"fovNormal",65);C(this,"fovAim",42);C(this,"shakeIntensity",0);C(this,"shakeDecay",0);C(this,"collisionRadius",.3);this.camera=e,this.colliders=t}setColliders(e){this.colliders=e}setShoulder(e){this.shoulder=e==="right"?.4:-.4}addShake(e,t=4){this.shakeIntensity=Math.max(this.shakeIntensity,e),this.shakeDecay=t}update(e,t,n,i,r,o){this.target.lerp(t,12*e);const a=r?1.1:o?3.2:4.2,l=o?.2:.4,c=new tt().makeRotationFromEuler(new Qt(i,n,0,"YXZ")),d=new M(0,0,a).applyMatrix4(c),h=new M(1,0,0).applyMatrix4(c).multiplyScalar(this.shoulder),u=new M(0,l,0);this.desiredPosition.copy(this.target).add(d).add(h).add(u);const m=this.desiredPosition.clone().sub(this.target),g=m.length();m.normalize();let v=g;const f=this.target.clone();for(const T of this.colliders){const A=new Ls(f,m).intersectBox(T,new M);if(A){const R=A.distanceTo(f);R<v&&R>.3&&(v=R-this.collisionRadius)}}const p=Math.max(.5,v);this.desiredPosition.copy(this.target).add(m.multiplyScalar(p)),this.currentPosition.lerp(this.desiredPosition,(r?18:8)*e),this.camera.position.copy(this.currentPosition);const S=this.target.clone();if(r){const T=new M(0,-.1,-8).applyMatrix4(c);S.add(T)}this.camera.lookAt(S);const _=r?this.fovAim:this.fovNormal;if(this.camera.fov=Zt.lerp(this.camera.fov,_,8*e),this.camera.updateProjectionMatrix(),this.shakeIntensity>.001){const T=(Math.random()-.5)*this.shakeIntensity,I=(Math.random()-.5)*this.shakeIntensity;this.camera.position.x+=T,this.camera.position.y+=I,this.shakeIntensity=Math.max(0,this.shakeIntensity-this.shakeDecay*e)}}getCamera(){return this.camera}}const Nn={materials:{concrete:{roughness:.9,metalness:.05,color:9079429},asphalt:{roughness:.85,metalness:.02,color:1710622},metal:{roughness:.4,metalness:.8,color:6974066},paintedMetal:{roughness:.5,metalness:.3,color:2767434},glass:{roughness:.05,metalness:.1,color:8956620},fabric:{roughness:.95,metalness:0,color:2763314},tactical:{roughness:.7,metalness:.1,color:2962477}}};class em{constructor(e=10){C(this,"cellSize");C(this,"map");this.cellSize=e,this.map=new Map}key(e,t){return`${Math.floor(e/this.cellSize)},${Math.floor(t/this.cellSize)}`}insert(e){const t=this.key(e.min.x,e.min.z),n=this.key(e.max.x,e.max.z),[i,r]=t.split(",").map(Number),[o,a]=n.split(",").map(Number);for(let l=i;l<=o;l++)for(let c=r;c<=a;c++){const d=`${l},${c}`;this.map.has(d)||this.map.set(d,[]),this.map.get(d).push(e)}}query(e,t){const n=[],i=this.key(e.x-t,e.z-t),r=this.key(e.x+t,e.z+t),[o,a]=i.split(",").map(Number),[l,c]=r.split(",").map(Number),d=new Set;for(let h=o;h<=l;h++)for(let u=a;u<=c;u++){const m=this.map.get(`${h},${u}`);if(m)for(const g of m)d.has(g)||(d.add(g),n.push(g))}return n}clear(){this.map.clear()}}class tm{constructor(){C(this,"group",new Wt);C(this,"colliders",[]);C(this,"stations",[]);this.build()}build(){const e=new ge(10,.3,8),t=new Se({color:2763310,roughness:.9}),n=new q(e,t);n.position.set(0,0,0),n.receiveShadow=!0,this.group.add(n);const i=new Se({color:3816002,roughness:.85}),r=[{pos:[0,1.5,-4],size:[10,3,.3]},{pos:[0,1.5,4],size:[10,3,.3]},{pos:[-5,1.5,0],size:[.3,3,8]},{pos:[5,1.5,0],size:[.3,3,8]}];for(const m of r){const g=new ge(m.size[0],m.size[1],m.size[2]),v=new q(g,i);v.position.set(m.pos[0],m.pos[1],m.pos[2]),v.castShadow=!0,v.receiveShadow=!0,this.group.add(v),this.colliders.push(new $e(new M(m.pos[0]-m.size[0]/2,m.pos[1]-m.size[1]/2,m.pos[2]-m.size[2]/2),new M(m.pos[0]+m.size[0]/2,m.pos[1]+m.size[1]/2,m.pos[2]+m.size[2]/2)))}this.createStation("weapons",-3.5,.6,-2.5,4876938),this.createStation("map",0,.6,-3.2,6989567),this.createStation("missions",3.5,.6,-2.5,10980346),this.createStation("upgrades",-3.5,.6,2.5,5111706),this.createStation("story",3.5,.6,2.5,16755268);const o=new un(16755302,1.5,12);o.position.set(0,2.5,0),this.group.add(o);const a=new yt(1.2,.8),l=new Se({color:58879,emissive:43775,emissiveIntensity:.4,roughness:.2}),c=new q(a,l);c.position.set(0,1.5,-3.84),this.group.add(c);const d=new ge(2,.4,3),h=new Se({color:2767402,roughness:.9}),u=new q(d,h);u.position.set(0,.2,1.5),this.group.add(u);for(let m=0;m<5;m++){const g=new yt(.4,.5),v=document.createElement("canvas");v.width=128,v.height=160;const f=v.getContext("2d");f.fillStyle=m%2===0?"#fffaaa":"#aaffff",f.fillRect(0,0,128,160),f.fillStyle="#000",f.font="10px monospace",f.fillText(`NOTE ${m+1}`,10,20),f.font="8px monospace",f.fillText("Mara was here",10,40),f.fillText("Blackout != accident",10,55);const p=new Wn(v),S=new Se({map:p,roughness:.9}),_=new q(g,S);_.position.set(-4.84,1.2+m*.3,-1+Math.random()*.5),_.rotation.y=Math.PI/2,_.rotation.z=(Math.random()-.5)*.2,this.group.add(_)}}createStation(e,t,n,i,r){const o=new ge(1,.8,.6),a=new Se({color:r,emissive:r,emissiveIntensity:.2,roughness:.6}),l=new q(o,a);l.position.set(t,n,i),l.castShadow=!0,this.group.add(l),this.stations.push({type:e,pos:new M(t,n,i),mesh:l});const c=new yt(.8,.2),d=document.createElement("canvas");d.width=256,d.height=64;const h=d.getContext("2d");h.fillStyle="#000000",h.fillRect(0,0,256,64),h.fillStyle="#ffffff",h.font="bold 20px monospace",h.textAlign="center",h.fillText(e.toUpperCase(),128,38);const u=new Wn(d),m=new fn({map:u,transparent:!0,side:Bt}),g=new q(c,m);g.position.set(t,n+.7,i),this.group.add(g)}getColliders(){return this.colliders}getStations(){return this.stations}setPosition(e,t,n){this.group.position.set(e,t,n)}interactWithStation(e){switch(e){case"weapons":return"WEAPONS STATION — Modify and upgrade arsenal";case"map":return"MAP TABLE — Veyra Sector 7 tactical overview";case"missions":return"MISSION BOARD — Active operations and intel";case"upgrades":return"UPGRADE BENCH — Enhance gear with scavenged materials";case"story":return"INVESTIGATION WALL — Mara's notes and Blackout evidence";default:return`STATION: ${e}`}}}class nm{constructor(e){C(this,"group",new Wt);C(this,"colliders",[]);C(this,"spatialHash",new em(12));C(this,"districts",[]);C(this,"materials",new Map);C(this,"instancedMeshes",[]);C(this,"safehouse",null);C(this,"lights",[]);this.scene=e,this.scene.add(this.group),this.createMaterials()}createMaterials(){const e=(t,n)=>{const i=new Se({color:n.color??8947848,roughness:n.roughness??.8,metalness:n.metalness??.1});return this.materials.set(t,i),i};e("concrete",Nn.materials.concrete),e("asphalt",Nn.materials.asphalt),e("metal",Nn.materials.metal),e("paintedMetal",Nn.materials.paintedMetal),e("glass",Nn.materials.glass),e("fabric",Nn.materials.fabric),e("tactical",Nn.materials.tactical),e("emergency",{color:16720384,roughness:.6,metalness:.2}),e("neon",{color:58879,roughness:.2,metalness:.5}),e("rust",{color:9062954,roughness:.9,metalness:.1}),e("wood",{color:4864554,roughness:.85,metalness:0})}addCollider(e){this.colliders.push(e),this.spatialHash.insert(e)}async buildDistrict(){for(;this.group.children.length;)this.group.remove(this.group.children[0]);this.colliders=[],this.spatialHash.clear(),this.districts=[],this.lights.forEach(r=>this.scene.remove(r)),this.lights=[];const e=new yt(500,500,10,10),t=this.materials.get("asphalt"),n=new q(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0;const i=e.attributes.position;for(let r=0;r<i.count;r++)i.setZ(r,(Math.random()-.5)*.15);i.needsUpdate=!0,this.group.add(n),this.addCollider(new $e(new M(-250,-2,-250),new M(250,0,250))),this.createCentralStreet(),this.createResidentialBlock(),this.createCorporateBuilding(),this.createIndustrialYard(),this.createUnderground(),this.createRooftops(),this.createHiddenLocation(),this.createSafehouse(),this.createAdditionalProps(),this.setupLighting(),this.addEnvironmentalStorytelling(),console.log(`[World] Built ${this.colliders.length} colliders, ${this.group.children.length} meshes, ${this.districts.length} districts`)}createCentralStreet(){const e={id:"central",name:"Central Street",bounds:new $e(new M(-60,0,-110),new M(60,35,25)),powerState:"partial"};this.districts.push(e);const t=[{x:-24,z:-68,w:14,d:18,h:30},{x:26,z:-72,w:16,d:14,h:36},{x:-30,z:-35,w:12,d:20,h:24},{x:28,z:-28,w:14,d:16,h:28},{x:-20,z:-6,w:18,d:12,h:20},{x:22,z:2,w:20,d:14,h:22},{x:-45,z:-50,w:10,d:10,h:16},{x:45,z:-55,w:10,d:10,h:18}];for(const g of t)this.createSimpleBuilding(g.x,g.z,g.w,g.d,g.h);for(let g=0;g<12;g++){const v=(Math.random()-.5)*50,f=-90+Math.random()*80;this.createBarrier(v,f),g%3===0&&this.createDebris(v+(Math.random()-.5)*3,f+(Math.random()-.5)*3)}const n=new vt(.1,.12,6,8),i=this.materials.get("metal"),r=16,o=new Uf(n,i,r);let a=0;for(let g=0;g<r;g++){const v=(g%2===0?-13:13)+(Math.random()-.5)*2,f=-95+g*11,p=new tt().makeTranslation(v,3,f);o.setMatrixAt(a++,p)}o.instanceMatrix.needsUpdate=!0,o.castShadow=!0,this.group.add(o);const l=new yt(.3,6),c=new Se({color:16777215,roughness:.9});for(let g=0;g<28;g++){const v=new q(l,c);v.rotation.x=-Math.PI/2,v.position.set(0,.02,-100+g*6),this.group.add(v)}const d=new ge(4,.2,120),h=this.materials.get("concrete"),u=new q(d,h);u.position.set(-8,.1,-35),this.group.add(u);const m=new q(d,h);m.position.set(8,.1,-35),this.group.add(m)}createResidentialBlock(){const e={id:"residential",name:"Abandoned Residential",bounds:new $e(new M(-75,0,-10),new M(-10,25,65)),powerState:"blackout"};this.districts.push(e);const t=-38,n=22,i=6;for(let a=0;a<i;a++){const l=a*3.2,c=new ge(30,.3,22),d=new q(c,this.materials.get("concrete"));if(d.position.set(t,l,n),d.receiveShadow=!0,this.group.add(d),a>0&&this.addCollider(new $e(new M(t-15,l-.2,n-11),new M(t+15,l+.2,n+11))),a<i-1){const h=this.materials.get("concrete"),u=[{pos:[t,l+1.6,n-11],size:[30,3.2,.4]},{pos:[t,l+1.6,n+11],size:[30,3.2,.4]},{pos:[t-15,l+1.6,n],size:[.4,3.2,22]},{pos:[t+15,l+1.6,n],size:[.4,3.2,22]}];for(const m of u){const g=new ge(m.size[0],m.size[1],m.size[2]),v=new q(g,h);v.position.set(m.pos[0],m.pos[1],m.pos[2]),v.castShadow=!0,v.receiveShadow=!0,this.group.add(v),this.addCollider(new $e(new M(m.pos[0]-m.size[0]/2,m.pos[1]-m.size[1]/2,m.pos[2]-m.size[2]/2),new M(m.pos[0]+m.size[0]/2,m.pos[1]+m.size[1]/2,m.pos[2]+m.size[2]/2)))}for(let m=-12;m<=12;m+=3.5){const g=new yt(1.2,1.6),v=new Se({color:3359829,transparent:!0,opacity:Math.random()>.6?.12:.04,emissive:Math.random()>.82?16755268:0,emissiveIntensity:Math.random()>.82?.15:0}),f=new q(g,v);if(f.position.set(t+m,l+1.6,n+11.21),this.group.add(f),Math.random()>.85){const p=new un(16755302,.6,8);p.position.set(t+m,l+1.6,n+9),this.scene.add(p),this.lights.push(p)}}if(a===2||a===3)for(let m=0;m<3;m++){const g=new ge(.8,.6,.5),v=new Se({color:4864554,roughness:.9}),f=new q(g,v);f.position.set(t+(Math.random()-.5)*10,l+.5,n+(Math.random()-.5)*6),this.group.add(f)}}}const r=new ge(3.5,20,4.5),o=new q(r,this.materials.get("metal"));o.position.set(t+11,10,n-6),this.group.add(o),this.addCollider(new $e(new M(t+9.25,0,n-8.25),new M(t+12.75,20,n-3.75)));for(let a=1;a<i-1;a++){const l=new ge(4,.2,2),c=new q(l,this.materials.get("concrete"));c.position.set(t-8,a*3.2,n+12),this.group.add(c)}}createCorporateBuilding(){const e={id:"corporate",name:"Helix Tower",bounds:new $e(new M(-20,0,40),new M(30,60,90)),powerState:"powered"};this.districts.push(e);const t=5,n=68,i=52,r=new ge(26,i,24),o=new Se({color:1710626,roughness:.25,metalness:.75}),a=new q(r,o);a.position.set(t,i/2,n),a.castShadow=!0,a.receiveShadow=!0,this.group.add(a),this.addCollider(new $e(new M(t-13,0,n-12),new M(t+13,i,n+12)));for(let p=4;p<i;p+=2.8)for(let S=-11;S<=11;S+=2.4){const _=Math.random()>.7,T=new yt(2,2.4),I=new Se({color:_?11193599:3359829,transparent:!0,opacity:_?.25:.08,emissive:_?8956620:0,emissiveIntensity:_?.2:0,roughness:.05,metalness:.3}),A=new q(T,I);A.position.set(t+S,p,n+12.1),this.group.add(A)}const l=new yt(6,2),c=document.createElement("canvas");c.width=512,c.height=170;const d=c.getContext("2d");d.fillStyle="#0a0a0f",d.fillRect(0,0,512,170),d.fillStyle="#00e5ff",d.font="bold 64px Orbitron",d.textAlign="center",d.fillText("HELIX",256,100),d.font="16px JetBrains Mono",d.fillStyle="#8a8a9a",d.fillText("CORPORATE TOWER • SECTOR 7",256,130);const h=new Wn(c),u=new Se({map:h,emissive:43775,emissiveIntensity:.3}),m=new q(l,u);m.position.set(t,8,n-12.1),m.rotation.y=Math.PI,this.group.add(m);const g=new ge(7,4.5,2.5),v=this.materials.get("metal"),f=new q(g,v);f.position.set(t,2.25,n-13.5),this.group.add(f);for(let p=-1;p<=1;p++){const S=new vt(.25,.25,1,8),_=new q(S,this.materials.get("paintedMetal"));_.position.set(t+p*2,.5,n-16),this.group.add(_),this.addCollider(new $e(new M(t+p*2-.25,0,n-16.25),new M(t+p*2+.25,1,n-15.75)))}}createIndustrialYard(){const e={id:"industrial",name:"Industrial Yard",bounds:new $e(new M(20,0,-55),new M(85,20,15)),powerState:"partial"};this.districts.push(e);for(let l=0;l<4;l++){const c=42+l*16,d=-22,h=new ge(14,9,18),u=new Se({color:3815998,roughness:.85,metalness:.15}),m=new q(h,u);m.position.set(c,4.5,d),m.castShadow=!0,this.group.add(m),this.addCollider(new $e(new M(c-7,0,d-9),new M(c+7,9,d+9)));const g=new ge(4,5,.3),v=new q(g,this.materials.get("metal"));v.position.set(c,2.5,d+9.2),this.group.add(v)}const t=[9054762,2775690,4872746,9079338,5913130];for(let l=0;l<16;l++){const c=32+l%5*6.8,d=-38+Math.floor(l/5)*6.8,h=new ge(6,2.6,2.6),u=new Se({color:t[l%t.length],roughness:.7,metalness:.3}),m=new q(h,u);m.position.set(c,1.3,d),m.castShadow=!0,m.rotation.y=(Math.random()-.5)*.1,this.group.add(m),this.addCollider(new $e(new M(c-3,0,d-1.3),new M(c+3,2.6,d+1.3)))}const n=new ge(9,4.5,7),i=this.materials.get("paintedMetal"),r=new q(n,i);r.position.set(58,2.25,-4),this.group.add(r),this.addCollider(new $e(new M(53.5,0,-7.5),new M(62.5,4.5,-.5)));for(let l=0;l<3;l++){const c=new vt(.15,.18,8,8),d=new q(c,this.materials.get("metal"));d.position.set(55+l*8,4,-12),this.group.add(d)}const o=new ge(3,2,2),a=new Se({color:4868682,roughness:.7,metalness:.5});for(let l=0;l<4;l++){const c=new q(o,a);c.position.set(40+l*3,1,-8),this.group.add(c)}}createUnderground(){const e={id:"underground",name:"Service Tunnels",bounds:new $e(new M(-45,-8,-95),new M(45,0,85)),powerState:"blackout"};this.districts.push(e);const t=180,n=new vt(3.8,3.8,t,20,1,!0),i=new Se({color:2763310,roughness:.95,side:Bt}),r=new q(n,i);r.rotation.z=Math.PI/2,r.position.set(0,-3.2,-10),this.group.add(r);const o=new ge(t,.5,7),a=new q(o,this.materials.get("concrete"));a.position.set(0,-5.8,-10),this.group.add(a);for(let h=-80;h<=80;h+=18){const u=new un(16755268,.8,12);u.position.set(h,-1.5,-10),this.scene.add(u),this.lights.push(u)}const l=new vt(.2,.2,t,8);l.rotateZ(Math.PI/2);const c=new Se({color:4868682,roughness:.6,metalness:.5}),d=new q(l,c);d.position.set(0,-.5,-8),this.group.add(d)}createRooftops(){const e=[{x:-24,z:-68,h:30},{x:26,z:-72,h:36},{x:-38,z:22,h:19.2},{x:5,z:68,h:52},{x:42,z:-22,h:9}];for(const c of e){const d=new ge(13,1.1,.45),h=this.materials.get("concrete"),u=new q(d,h);u.position.set(c.x,c.h+.55,c.z-5.5),this.group.add(u);const m=new q(d,h);m.position.set(c.x,c.h+.55,c.z+5.5),this.group.add(m);const g=new ge(.45,1.1,11),v=new q(g,h);v.position.set(c.x-6.25,c.h+.55,c.z),this.group.add(v);const f=new q(g,h);f.position.set(c.x+6.25,c.h+.55,c.z),this.group.add(f);const p=new ge(1.5,1,1),S=new q(p,this.materials.get("metal"));S.position.set(c.x+3,c.h+.5,c.z+2),this.group.add(S)}const t=new ge(9,.35,1.3),n=new Se({color:4864554,roughness:.85}),i=new q(t,n);i.position.set(-10,30,-68),this.group.add(i);const r=new q(t,n);r.position.set(2,22,-35),r.rotation.y=.4,this.group.add(r);const o=new vt(.02,.02,30,4);o.rotateZ(Math.PI/2);const a=new Se({color:1118481,roughness:.9}),l=new q(o,a);l.position.set(-5,32,-50),this.group.add(l)}createHiddenLocation(){const e=new ge(7,3.5,7),t=new Se({color:1710622,roughness:.95}),n=new q(e,t);n.position.set(-48,.5,-78),this.group.add(n),this.addCollider(new $e(new M(-51.5,0,-81.5),new M(-44.5,3.5,-74.5)));const i=new ge(.9,.6,.7),r=new Se({color:65416,emissive:65416,emissiveIntensity:.7}),o=new q(i,r);o.position.set(-48,1.2,-78),this.group.add(o);const a=new un(65416,1,6);a.position.set(-48,1.5,-78),this.scene.add(a),this.lights.push(a)}createSafehouse(){this.safehouse=new tm,this.safehouse.setPosition(-58,0,15),this.group.add(this.safehouse.group),this.safehouse.getColliders().forEach(t=>{const n=new $e(t.min.clone().add(new M(-58,0,15)),t.max.clone().add(new M(-58,0,15)));this.addCollider(n)});const e={id:"safehouse",name:"Safehouse",bounds:new $e(new M(-63,0,11),new M(-53,4,19)),powerState:"powered"};this.districts.push(e)}createAdditionalProps(){for(let e=0;e<20;e++)this.createDebris((Math.random()-.5)*100,-80+Math.random()*120);for(let e=0;e<6;e++){const t=new vt(.4,.4,.9,8),n=new Se({color:2763306,roughness:.8}),i=new q(t,n);i.position.set((Math.random()-.5)*60,.45,-70+Math.random()*90),this.group.add(i),this.addCollider(new $e(new M(i.position.x-.4,0,i.position.z-.4),new M(i.position.x+.4,.9,i.position.z+.4)))}}createSimpleBuilding(e,t,n,i,r){const o=new ge(n,r,i),a=new Se({color:2763314,roughness:.8,metalness:.15}),l=new q(o,a);l.position.set(e,r/2,t),l.castShadow=!0,l.receiveShadow=!0,this.group.add(l),this.addCollider(new $e(new M(e-n/2,0,t-i/2),new M(e+n/2,r,t+i/2)));for(let c=3;c<r-1;c+=2.5)for(let d=-n/2+1;d<n/2-.5;d+=2.2){const h=new yt(.9,1.2),u=Math.random()>.72,m=new Se({color:u?8956620:3359829,transparent:!0,opacity:u?.18:.05,emissive:u?16755268:0,emissiveIntensity:u?.12:0}),g=new q(h,m);g.position.set(e+d,c,t+i/2+.06),this.group.add(g)}if(Math.random()>.5){const c=new vt(.05,.05,3,6),d=new q(c,this.materials.get("metal"));d.position.set(e+(Math.random()-.5)*n*.5,r+1.5,t+(Math.random()-.5)*i*.5),this.group.add(d)}}createBarrier(e,t){const n=new ge(2.2,1.1,.45),i=new Se({color:11184810,roughness:.7}),r=new q(n,i);r.position.set(e,.55,t),r.rotation.y=Math.random()*.6-.3,r.castShadow=!0,this.group.add(r),this.addCollider(new $e(new M(e-1.1,0,t-.25),new M(e+1.1,1.1,t+.25)))}createDebris(e,t){const n=new ge(.3+Math.random()*.5,.1+Math.random()*.3,.3+Math.random()*.5),i=new Se({color:4868682,roughness:.9}),r=new q(n,i);r.position.set(e,.05,t),r.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),this.group.add(r)}setupLighting(){const e=new rl(4210768,.65);this.scene.add(e),this.lights.push(e);const t=new As(11193599,.9);t.position.set(50,70,25),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=1,t.shadow.camera.far=200,t.shadow.camera.left=-100,t.shadow.camera.right=100,t.shadow.camera.top=100,t.shadow.camera.bottom=-100,t.shadow.bias=-1e-4,this.scene.add(t),this.lights.push(t);const n=16755268;for(let l=0;l<8;l++){const c=new un(n,2.2,28);c.position.set(l%2===0?-13:13,5.8,-90+l*13),c.castShadow=!0,c.shadow.mapSize.set(512,512),this.scene.add(c),this.lights.push(c)}const i=new un(16720384,1.8,18);i.position.set(58,4.5,-4),this.scene.add(i),this.lights.push(i);const r=new un(58879,1.2,35);r.position.set(5,28,68),this.scene.add(r),this.lights.push(r);const o=new un(16755302,1.5,15);o.position.set(-58,3,15),this.scene.add(o),this.lights.push(o);const a=new As(8947967,.15);a.position.set(-40,60,-20),this.scene.add(a),this.lights.push(a)}addEnvironmentalStorytelling(){const e=new yt(2.2,1.4),t=document.createElement("canvas");t.width=256,t.height=152;const n=t.getContext("2d");n.fillStyle="#ffcc00",n.fillRect(0,0,256,152),n.fillStyle="#000",n.font="bold 22px monospace",n.fillText("EVACUATION",20,38),n.font="13px monospace",n.fillText("SECTOR 7 - MANDATORY",20,68),n.fillText("FOLLOW HELIX PROTOCOL",20,88),n.fillStyle="#aa0000",n.font="bold 11px monospace",n.fillText("BLACKOUT ZONE — AUTHORIZED ONLY",20,115);const i=new Wn(t),r=new Se({map:i,roughness:.8}),o=new q(e,r);o.position.set(-12,2.6,-58),o.rotation.y=.35,this.group.add(o);const a=[{x:4,z:-48,rot:.2,color:2763322},{x:-6,z:-32,rot:-.3,color:3811882},{x:18,z:-18,rot:.5,color:2767402}];for(const f of a){const p=new ge(4.8,1.5,2.2),S=new Se({color:f.color,roughness:.6,metalness:.4}),_=new q(p,S);_.position.set(f.x,.75,f.z),_.rotation.y=f.rot,_.castShadow=!0,this.group.add(_),this.addCollider(new $e(new M(f.x-2.4,0,f.z-1.1),new M(f.x+2.4,1.5,f.z+1.1)));const T=new yt(1,.6),I=new Se({color:0,roughness:.9}),A=new q(T,I);A.position.set(f.x,1.1,f.z),A.rotation.y=f.rot,this.group.add(A)}const l=new yt(3,1.5),c=document.createElement("canvas");c.width=256,c.height=128;const d=c.getContext("2d");d.fillStyle="rgba(0,0,0,0)",d.fillRect(0,0,256,128),d.fillStyle="#ff4d6a",d.font="bold 32px Orbitron",d.fillText("ASHEN",20,60),d.fillStyle="#ffffff",d.font="14px JetBrains Mono",d.fillText("WE REMEMBER",20,85);const h=new Wn(c),u=new Se({map:h,transparent:!0,roughness:.9}),m=new q(l,u);m.position.set(-24,2,-67.9),m.rotation.y=0,this.group.add(m);const g=new ge(.6,.8,.4),v=new q(g,this.materials.get("metal"));v.position.set(-10,3.5,-45),this.group.add(v)}getDistrictAt(e){for(const t of this.districts)if(t.bounds.containsPoint(e))return t;return null}setPowerState(e,t){const n=this.districts.find(i=>i.id===e);n&&(n.powerState=t)}dispose(){this.scene.remove(this.group),this.lights.forEach(e=>this.scene.remove(e))}}class im{constructor(){C(this,"group",new Wt);C(this,"mixer",null);C(this,"parts",new Map);this.buildMesh()}buildMesh(){const e=new Se({color:2962477,roughness:.7,metalness:.1}),t=new Se({color:13215369,roughness:.8}),n=new Se({color:1710622,roughness:.5,metalness:.3}),i=new Se({color:3815998,roughness:.6,metalness:.2}),r=new ge(.6,.75,.35),o=new q(r,e);o.position.y=1.1,o.castShadow=!0,this.group.add(o),this.parts.set("torso",o);const a=new ge(.68,.6,.42),l=new q(a,i);l.position.y=1.15,l.castShadow=!0,this.group.add(l);const c=new gn(.22,12,12),d=new q(c,t);d.position.y=1.7,d.castShadow=!0,this.group.add(d),this.parts.set("head",d);const h=new vt(.24,.26,.12,12),u=new q(h,n);u.position.y=1.82,this.group.add(u);const m=new vt(.09,.09,.6,8),g=new q(m,e);g.position.set(-.42,1.1,0),g.rotation.z=-.1,g.castShadow=!0,this.group.add(g);const v=new q(m,e);v.position.set(.42,1.1,0),v.rotation.z=.1,v.castShadow=!0,this.group.add(v),this.parts.set("rightArm",v);const f=new vt(.13,.12,.85,8),p=new q(f,e);p.position.set(-.18,.42,0),p.castShadow=!0,this.group.add(p);const S=new q(f,e);S.position.set(.18,.42,0),S.castShadow=!0,this.group.add(S);const _=new ge(.5,.6,.25),T=new q(_,n);T.position.set(0,1.1,-.3),T.castShadow=!0,this.group.add(T);const I=new ge(.12,.25,.18),A=new q(I,n);A.position.set(.38,.55,.05),this.group.add(A);const R=new Wt;R.position.set(.5,1,.15),R.name="weaponSocket",this.group.add(R);const W=new gn(.11,8,8),b=new Se({color:1118481,roughness:.9}),w=new q(W,b);w.position.set(-.42,.75,0),this.group.add(w);const z=new q(W,b);z.position.set(.42,.75,0),this.group.add(z);const G=new ge(.18,.12,.32),Q=new Se({color:657930,roughness:.8}),P=new q(G,Q);P.position.set(-.18,.06,.05),this.group.add(P);const U=new q(G,Q);U.position.set(.18,.06,.05),this.group.add(U),this.group.traverse(H=>{H.isMesh&&(H.frustumCulled=!1)})}getWeaponSocket(){return this.group.getObjectByName("weaponSocket")}update(e,t,n){const i=performance.now()*.001,r=this.parts.get("rightArm");r&&(t==="sprint"?r.rotation.x=Math.sin(i*8)*.6:t==="walk"||t==="jog"?r.rotation.x=Math.sin(i*5)*.4:r.rotation.x=Zt.lerp(r.rotation.x,0,e*5)),t==="idle"?this.group.position.y=Math.sin(i*1.2)*.015:this.group.position.y=Zt.lerp(this.group.position.y,0,e*8)}setPosition(e){this.group.position.copy(e)}setRotation(e){this.group.rotation.y=e}}class sm{constructor(e){C(this,"group",new Wt);C(this,"config");C(this,"health");C(this,"head");C(this,"body");this.config=e,this.health=e.health,this.buildMesh()}buildMesh(){const e=new Se({color:this.config.color,roughness:.7,metalness:.2}),t=new Se({color:1118484,roughness:.6}),n=new ge(.55*this.config.scale,.7*this.config.scale,.32*this.config.scale);this.body=new q(n,e),this.body.position.y=1*this.config.scale,this.body.castShadow=!0,this.group.add(this.body);const i=new gn(.2*this.config.scale,10,10);if(this.head=new q(i,new Se({color:9075306,roughness:.8})),this.head.position.y=1.55*this.config.scale,this.group.add(this.head),this.config.id==="heavy"){const f=new ge(.7,.5,.45),p=new q(f,t);p.position.y=1.1,this.group.add(p);const S=new gn(.26,10,10),_=new q(S,t);_.position.y=1.58,this.group.add(_)}else if(this.config.id==="sniper"){const f=new q(new ge(.6,.8,.4),new Se({color:3820074,roughness:.95}));f.position.y=1,this.group.add(f)}const r=new vt(.08,.08,.55,6),o=new q(r,e);o.position.set(-.38,1,0),this.group.add(o);const a=new q(r,e);a.position.set(.38,1,0),this.group.add(a);const l=new vt(.11,.1,.8,6),c=new q(l,e);c.position.set(-.15,.4,0),this.group.add(c);const d=new q(l,e);d.position.set(.15,.4,0),this.group.add(d);const h=new ge(.08,.08,.7),u=new q(h,t);u.position.set(.45,1,.3),this.group.add(u);const m=new yt(.2,.2),g=new fn({color:this.config.color,side:Bt}),v=new q(m,g);v.position.set(0,2.1,0),v.name="indicator",this.group.add(v)}takeDamage(e,t=!1){const n=t?e*2.2:e;return this.health-=n,this.body.material.emissive.setHex(5570560),setTimeout(()=>{this.body.material.emissive.setHex(0)},80),this.health<=0}setPosition(e){this.group.position.copy(e)}getPosition(){return this.group.position.clone()}lookAt(e){const t=e.clone().sub(this.group.position);if(t.y=0,t.lengthSq()>.01){const n=Math.atan2(t.x,t.z);this.group.rotation.y=n}}dispose(e){e.remove(this.group)}}const ys=[{id:"m9_tactical",name:"M9 Tactical",category:"pistol",damage:28,fireRate:420,magazine:15,reserve:90,reloadTime:1.4,range:35,recoil:.35,spread:.02,projectile:"hitscan",fireModes:["semi"],attachments:["suppressor_pistol","red_dot_micro"],sound:"pistol",description:"Standard sidearm. Reliable, quiet with suppressor."},{id:"vec_9",name:"VEC-9",category:"smg",damage:19,fireRate:850,magazine:32,reserve:160,reloadTime:1.8,range:40,recoil:.45,spread:.06,projectile:"hitscan",fireModes:["auto","burst"],attachments:["suppressor_smg","holo_sight","grip_vertical"],sound:"smg",description:"High rate CQB weapon. Melts armor up close."},{id:"ar_41",name:"AR-41 Vanguard",category:"rifle",damage:36,fireRate:650,magazine:30,reserve:150,reloadTime:2.1,range:85,recoil:.6,spread:.03,projectile:"hitscan",fireModes:["auto","semi"],attachments:["acog","suppressor_rifle","grip_angled","extended_mag"],sound:"rifle",description:"Workhorse rifle. Balanced for Veyra operations."},{id:"sg_breach",name:"Breacher-12",category:"shotgun",damage:14,fireRate:120,magazine:8,reserve:32,reloadTime:3.2,range:18,recoil:1.2,spread:.18,projectile:"hitscan",fireModes:["semi"],attachments:[],sound:"shotgun",description:"Door kicker. Devastating in tight corridors."},{id:"sr_phantom",name:"Phantom SR",category:"sniper",damage:110,fireRate:45,magazine:5,reserve:20,reloadTime:2.8,range:220,recoil:1.8,spread:.005,projectile:"projectile",fireModes:["semi"],attachments:["scope_8x","suppressor_sniper"],sound:"sniper",description:"Long eye of Veyra. One shot changes everything."},{id:"knife_tactical",name:"Tactical Blade",category:"melee",damage:75,fireRate:90,magazine:1,reserve:0,reloadTime:0,range:2.2,recoil:0,spread:0,projectile:"hitscan",fireModes:["semi"],attachments:[],sound:"melee",description:"Silent. Final. The city teaches you to be quiet."}];class rm{constructor(){C(this,"weapons",[]);C(this,"currentIndex",0);C(this,"lastFireTime",0);C(this,"isReloading",!1);C(this,"reloadTimer",0);C(this,"recoil",0);C(this,"spread",0)}createWeaponMesh(e){const t=new Wt,n=new Se({color:1710622,roughness:.5,metalness:.6}),i=new Se({color:4868686,roughness:.3,metalness:.8});let r;switch(e.category){case"pistol":r=new ge(.08,.08,.28);break;case"smg":r=new ge(.1,.12,.45);break;case"rifle":r=new ge(.1,.14,.65);break;case"shotgun":r=new ge(.12,.14,.7);break;case"sniper":r=new ge(.11,.15,.95);break;case"melee":r=new ge(.04,.04,.35);break;default:r=new ge(.1,.1,.5)}const o=new q(r,n);o.castShadow=!0,t.add(o);const a=new vt(.02,.02,.3,6);a.rotateX(Math.PI/2);const l=new q(a,i);if(l.position.z=r.parameters.depth/2+.15,t.add(l),e.category!=="melee"){const u=new ge(.04,.06,.12),m=new q(u,i);m.position.set(0,.1,-.05),t.add(m)}const c=new Ur(.06,.18,6),d=new fn({color:16755268,transparent:!0,opacity:0}),h=new q(c,d);return h.rotation.x=Math.PI/2,h.position.z=r.parameters.depth/2+.35,h.name="muzzleFlash",t.add(h),t}addWeapon(e){const t=ys.find(i=>i.id===e);if(!t||this.weapons.find(i=>i.config.id===e))return null;const n={config:t,ammoInMag:t.magazine,reserve:t.reserve,attachments:[],mesh:this.createWeaponMesh(t)};return this.weapons.push(n),n}getCurrent(){return this.weapons[this.currentIndex]??null}switchWeapon(e){this.weapons.length<=1||(this.currentIndex=(this.currentIndex+e+this.weapons.length)%this.weapons.length,ot.playProceduralSound("reload"))}setWeaponIndex(e){e>=0&&e<this.weapons.length&&(this.currentIndex=e,ot.playProceduralSound("reload"))}canFire(){const e=this.getCurrent();return!e||this.isReloading?!1:e.config.category==="melee"?performance.now()-this.lastFireTime>6e4/e.config.fireRate:e.ammoInMag>0&&performance.now()-this.lastFireTime>6e4/e.config.fireRate}fire(e,t){const n=this.getCurrent();if(!n||!this.canFire())return null;this.lastFireTime=performance.now(),n.config.category!=="melee"&&n.ammoInMag--,this.recoil=Math.min(1.5,this.recoil+n.config.recoil*.25),this.spread=Math.min(.25,this.spread+n.config.spread*.6);const i=n.mesh.getObjectByName("muzzleFlash");return i&&(i.material.opacity=.9,setTimeout(()=>{i.material.opacity=0},40)),ot.playProceduralSound(n.config.sound),{hit:!1,damage:n.config.damage}}startReload(){const e=this.getCurrent();return!e||this.isReloading||e.ammoInMag===e.config.magazine||e.reserve<=0?!1:(this.isReloading=!0,this.reloadTimer=e.config.reloadTime,ot.playProceduralSound("reload"),!0)}update(e){if(this.isReloading&&(this.reloadTimer-=e,this.reloadTimer<=0)){const t=this.getCurrent();if(t){const n=t.config.magazine-t.ammoInMag,i=Math.min(n,t.reserve);t.ammoInMag+=i,t.reserve-=i}this.isReloading=!1}this.recoil=Math.max(0,this.recoil-e*2.5),this.spread=Math.max(0,this.spread-e*1.8)}getRecoil(){return this.recoil}getSpread(){return this.spread}getIsReloading(){return this.isReloading}addAmmo(e,t){for(const n of this.weapons)n.config.category!=="melee"&&(n.reserve+=t)}}class am{constructor(e,t,n){C(this,"state","patrol");C(this,"memory",{lastKnownPlayerPos:null,lastSeenTime:0,lastHeardPos:null,deadTeammates:0,suspiciousLocations:[],threatLevel:0});C(this,"position");C(this,"patrolPoints",[]);C(this,"patrolIndex",0);C(this,"detection",0);C(this,"stateTimer",0);C(this,"velocity",new M);C(this,"targetPos",null);C(this,"fireCooldown",0);C(this,"squadId",null);this.character=e,this.config=t,this.position=n.clone(),this.character.setPosition(n),this.generatePatrol(n)}generatePatrol(e){for(let t=0;t<4;t++){const n=t/4*Math.PI*2+Math.random()*.5,i=6+Math.random()*10;this.patrolPoints.push(new M(e.x+Math.cos(n)*i,e.y,e.z+Math.sin(n)*i))}}setSquad(e){this.squadId=e}update(e,t,n,i,r,o){this.stateTimer+=e,this.fireCooldown=Math.max(0,this.fireCooldown-e);const a=t.clone().sub(this.position),l=a.length(),c=this.canSeePlayer(t,r,l),d=this.canHearPlayer(t,i,l);if(c){const u=i.isCrouching?.5:i.isSprinting?1.5:1,m=Zt.clamp(1-l/this.config.detectionRange,0,1),g=this.isInFOV(a)?1:.2;this.detection+=e*1.8*u*g*(.3+m),this.memory.lastKnownPlayerPos=t.clone(),this.memory.lastSeenTime=performance.now()}else this.detection-=e*.6,d&&(this.detection+=e*.8,this.memory.lastHeardPos=t.clone(),this.memory.lastKnownPlayerPos||(this.memory.lastKnownPlayerPos=t.clone()));this.detection=Zt.clamp(this.detection,0,1);const h=this.state;switch(this.detection>=.95?(this.state="combat",this.memory.threatLevel=1):this.detection>=.65?this.state!=="combat"&&(this.state="alerted"):this.detection>=.35?((this.state==="patrol"||this.state==="idle")&&(this.state="suspicious"),this.state==="suspicious"&&this.stateTimer>2&&(this.state="investigating")):((this.state==="alerted"||this.state==="combat")&&(this.state="searching",this.stateTimer=0),this.state==="searching"&&this.stateTimer>8&&(this.state="lost",this.stateTimer=0),this.state==="lost"&&this.stateTimer>4&&(this.state="patrol",this.memory.lastKnownPlayerPos=null)),h!==this.state&&(this.stateTimer=0),this.state){case"patrol":this.updatePatrol(e);break;case"suspicious":this.updateSuspicious(e);break;case"investigating":this.updateInvestigate(e);break;case"alerted":this.updateAlerted(e,t);break;case"combat":this.updateCombat(e,t,o);break;case"searching":this.updateSearching(e);break;case"lost":this.velocity.set(0,0,0);break}if(this.position.add(this.velocity.clone().multiplyScalar(e)),this.position.y=0,this.character.setPosition(this.position),this.targetPos||this.memory.lastKnownPlayerPos){const u=this.state==="combat"||this.state==="alerted"?t:this.targetPos||this.memory.lastKnownPlayerPos;this.character.lookAt(u)}}canSeePlayer(e,t,n){if(n>this.config.detectionRange||!this.isInFOV(e.clone().sub(this.position)))return!1;const i=e.clone().sub(this.position);i.y=0;const r=i.length();i.normalize();const o=new Ls(this.position.clone().add(new M(0,1.2,0)),i);for(const a of t){const l=o.intersectBox(a,new M);if(l&&l.distanceTo(this.position)<r-.5)return!1}return!0}canHearPlayer(e,t,n){let i=this.config.hearingRange;return t.isShooting&&(i*=3),t.isSprinting&&(i*=1.5),t.isCrouching&&(i*=.4),n<i}isInFOV(e){return e.y=0,e.lengthSq()<.01?!0:new M(0,0,-1).applyAxisAngle(new M(0,1,0),this.character.group.rotation.y).angleTo(e.clone().normalize())<Zt.degToRad(this.config.fov*.5)}updatePatrol(e){if(this.patrolPoints.length===0)return;const n=this.patrolPoints[this.patrolIndex].clone().sub(this.position);n.y=0,n.length()<1.2?(this.patrolIndex=(this.patrolIndex+1)%this.patrolPoints.length,this.velocity.set(0,0,0),Math.random()<.3&&(this.state="idle",setTimeout(()=>{this.state==="idle"&&(this.state="patrol")},2e3+Math.random()*3e3))):(n.normalize().multiplyScalar(this.config.speed*.5),this.velocity.lerp(n,e*3))}updateSuspicious(e){this.velocity.lerp(new M(0,0,0),e*2),this.character.group.rotation.y+=Math.sin(this.stateTimer*.8)*e*.5}updateInvestigate(e){const t=this.memory.lastHeardPos||this.memory.lastKnownPlayerPos;if(!t){this.state="patrol";return}const n=t.clone().sub(this.position);n.y=0,n.length()<1.5?(this.state="suspicious",this.memory.suspiciousLocations.push(t.clone())):(n.normalize().multiplyScalar(this.config.speed*.7),this.velocity.lerp(n,e*4),this.targetPos=t)}updateAlerted(e,t){const n=this.memory.lastKnownPlayerPos||t,i=n.clone().sub(this.position);if(i.length()>12)i.normalize().multiplyScalar(this.config.speed*.9),this.velocity.lerp(i,e*4);else{const o=new M(-i.z,0,i.x).normalize().multiplyScalar(Math.sin(this.stateTimer*1.2)*2);this.velocity.lerp(o,e*3)}this.targetPos=n}updateCombat(e,t,n){const i=t.clone().sub(this.position),r=i.length();if(n.length>1&&this.config.id!=="heavy"&&this.config.id!=="sniper"&&Math.random()<.01){const o=new M(-i.z,0,i.x).normalize(),a=t.clone().add(o.multiplyScalar((Math.random()>.5?1:-1)*8));this.targetPos=a,i.copy(a).sub(this.position)}if(this.config.id==="sniper")if(r<25){const o=this.position.clone().sub(t).normalize().multiplyScalar(this.config.speed);this.velocity.lerp(o,e*3)}else this.velocity.lerp(new M(0,0,0),e*3);else this.config.id==="hunter"?r>3?(i.normalize().multiplyScalar(this.config.speed*1.1),this.velocity.lerp(i,e*5)):this.velocity.set(0,0,0):r>15?(i.normalize().multiplyScalar(this.config.speed),this.velocity.lerp(i,e*4)):r<6?(i.normalize().multiplyScalar(-this.config.speed*.7),this.velocity.lerp(i,e*4)):this.velocity.lerp(new M(0,0,0),e*4)}updateSearching(e){const t=this.memory.lastKnownPlayerPos;if(!t){this.state="patrol";return}const n=t.clone().sub(this.position);if(n.y=0,n.length()<2){const i=this.stateTimer*.8,r=2+this.stateTimer*.5,o=t.clone().add(new M(Math.cos(i)*r,0,Math.sin(i)*r)),a=o.clone().sub(this.position);a.normalize().multiplyScalar(this.config.speed*.6),this.velocity.lerp(a,e*2),this.targetPos=o}else n.normalize().multiplyScalar(this.config.speed*.7),this.velocity.lerp(n,e*3),this.targetPos=t}canShoot(){return this.state==="combat"&&this.fireCooldown<=0&&this.detection>.8}onShoot(){this.fireCooldown=this.config.id==="sniper"?2.2:this.config.id==="heavy"?.18:.5}getDetectionLevel(){return this.detection}isAlive(){return this.character.health>0}}class om{constructor(){C(this,"enemies",[]);C(this,"spawnPressure",0);C(this,"lastReinforcement",0)}addEnemy(e){this.enemies.push(e)}removeEnemy(e){this.enemies=this.enemies.filter(t=>t!==e)}update(e,t){this.enemies.filter(i=>i.state==="combat").length>4?this.spawnPressure=Math.max(0,this.spawnPressure-e*.2):this.spawnPressure=Math.min(1,this.spawnPressure+e*.05),this.enemies=this.enemies.filter(i=>i.isAlive())}getEnemies(){return this.enemies}getCombatCount(){return this.enemies.filter(e=>e.state==="combat").length}}const lm=[{id:"security",name:"Helix Security",faction:"HELIX",health:100,armor:20,damage:22,speed:3.2,detectionRange:28,hearingRange:14,fov:110,behavior:"patrol_guard",weapons:["vec_9","m9_tactical"],loot:["ammo_9mm","med_small"],description:"Standard armed unit. Holds position, calls backup.",color:2763310,scale:1},{id:"scout",name:"Ashen Scout",faction:"ASHEN",health:75,armor:0,damage:18,speed:5,detectionRange:32,hearingRange:18,fov:130,behavior:"flank_recon",weapons:["vec_9"],loot:["scrap","intel"],description:"Fast reconnaissance. Will flank and report.",color:5917234,scale:.95},{id:"heavy",name:"Vanguard Heavy",faction:"VANGUARD",health:220,armor:80,damage:38,speed:2.1,detectionRange:22,hearingRange:10,fov:90,behavior:"suppression_advance",weapons:["ar_41","sg_breach"],loot:["armor_plate","ammo_rifle"],description:"Armored unit. Soaks damage, pins you down.",color:3820122,scale:1.15},{id:"sniper",name:"Veil Marksman",faction:"VEIL",health:85,armor:10,damage:95,speed:2.8,detectionRange:65,hearingRange:8,fov:45,behavior:"long_range_hold",weapons:["sr_phantom"],loot:["ammo_sniper","intel_encrypted"],description:"Long-range threat. Relocates after shot.",color:3811914,scale:1},{id:"hunter",name:"Hunter",faction:"ASHEN",health:120,armor:15,damage:42,speed:4.6,detectionRange:20,hearingRange:22,fov:140,behavior:"aggressive_close",weapons:["sg_breach","knife_tactical"],loot:["scrap_rare"],description:"Aggressive close-range unit. Hunts in packs.",color:4864554,scale:1.05},{id:"commander",name:"Helix Commander",faction:"HELIX",health:150,armor:50,damage:30,speed:3,detectionRange:35,hearingRange:16,fov:120,behavior:"tactical_leader",weapons:["ar_41","m9_tactical"],loot:["keycard","intel_command"],description:"Tactical leader. Buffs nearby units, calls reinforcements.",color:1710626,scale:1.08}],So={en:{"game.title":"BLACK VEIL","game.tagline":"THE CITY FORGOT. YOU DIDN'T.","menu.continue":"CONTINUE","menu.new_game":"NEW GAME","menu.load_game":"LOAD GAME","menu.missions":"MISSIONS","menu.inventory":"INVENTORY","menu.map":"MAP","menu.settings":"SETTINGS","menu.credits":"CREDITS","menu.exit":"EXIT","hud.health":"HEALTH","hud.armor":"ARMOR","hud.ammo":"AMMO","hud.objective":"OBJECTIVE","hud.stealth.hidden":"HIDDEN","hud.stealth.detected":"DETECTED","hud.stealth.combat":"COMBAT","hud.stealth.suspicious":"SUSPICIOUS","action.interact":"INTERACT","action.reload":"RELOAD","action.switch":"SWITCH","action.jump":"JUMP","action.crouch":"CROUCH","settings.graphics":"GRAPHICS","settings.audio":"AUDIO","settings.controls":"CONTROLS","settings.language":"LANGUAGE","settings.quality.low":"LOW","settings.quality.medium":"MEDIUM","settings.quality.high":"HIGH","settings.quality.ultra":"ULTRA","settings.quality.auto":"AUTO","mission.active":"ACTIVE MISSION","inventory.weapons":"WEAPONS","inventory.ammo":"AMMO","inventory.consumables":"CONSUMABLES","inventory.equip":"EQUIP","loading.tips.0":"Veyra went dark three years ago. Power, comms, transport — gone in 17 minutes.","loading.tips.1":"Helix Corp controlled 73% of Veyra infrastructure before the Blackout. Now they control the ruins.","loading.tips.2":"The Ashen network survives in shadows. They remember what the city forgot.","loading.tips.3":"Sound travels. Your footsteps can betray you. Move slow, stay hidden.","loading.tips.4":"Verticality is survival. Rooftops, maintenance shafts, underground — the city has layers.","faction.vanguard":"VANGUARD","faction.ashen":"ASHEN","faction.helix":"HELIX CORP","faction.veil":"VEIL","story.ch1.title":"CHAPTER 1: GHOSTS","credits.title":"CREDITS","credits.primary":"PRIMARY CREATOR","credits.youtube":"YouTube","credits.github":"GitHub","credits.tiktok":"TikTok","credits.contact":"Contact"},ar:{"game.title":"الحجاب الأسود","game.tagline":"المدينة نسيت. أنت لم تنس.","menu.continue":"متابعة","menu.new_game":"لعبة جديدة","menu.load_game":"تحميل اللعبة","menu.missions":"المهام","menu.inventory":"المخزون","menu.map":"الخريطة","menu.settings":"الإعدادات","menu.credits":"الاعتمادات","menu.exit":"خروج","hud.health":"الصحة","hud.armor":"الدرع","hud.ammo":"الذخيرة","hud.objective":"الهدف","hud.stealth.hidden":"مخفي","hud.stealth.detected":"مكتشف","hud.stealth.combat":"قتال","hud.stealth.suspicious":"مشبوه","action.interact":"تفاعل","action.reload":"إعادة تحميل","action.switch":"تبديل","action.jump":"قفز","action.crouch":"انحناء","settings.graphics":"الرسومات","settings.audio":"الصوت","settings.controls":"التحكم","settings.language":"اللغة","settings.quality.low":"منخفض","settings.quality.medium":"متوسط","settings.quality.high":"مرتفع","settings.quality.ultra":"فائق","settings.quality.auto":"تلقائي","mission.active":"المهمة النشطة","inventory.weapons":"الأسلحة","inventory.ammo":"الذخيرة","inventory.consumables":"المواد الاستهلاكية","inventory.equip":"تجهيز","loading.tips.0":"أظلمت فيرا قبل ثلاث سنوات. الطاقة، الاتصالات، النقل - اختفت في 17 دقيقة.","loading.tips.1":"سيطرت شركة هيليكس على 73٪ من البنية التحتية قبل الانقطاع. الآن تسيطر على الأنقاض.","loading.tips.2":"شبكة آشين تنجو في الظلال. يتذكرون ما نسيته المدينة.","loading.tips.3":"الصوت ينتقل. خطواتك يمكن أن تخونك. تحرك ببطء، ابق مخفيا.","loading.tips.4":"العمودية هي البقاء. أسطح المنازل، أعمدة الصيانة، تحت الأرض - المدينة لها طبقات.","faction.vanguard":"فانجارد","faction.ashen":"آشين","faction.helix":"هيليكس كورب","faction.veil":"فيل","story.ch1.title":"الفصل 1: الأشباح","credits.title":"الاعتمادات","credits.primary":"المنشئ الأساسي","credits.youtube":"يوتيوب","credits.github":"جيثب","credits.tiktok":"تيك توك","credits.contact":"اتصل"}};class cm{constructor(){C(this,"current","en");C(this,"listeners",new Set);const e=localStorage.getItem("bv_lang");e&&(e==="en"||e==="ar")?this.current=e:navigator.language.toLowerCase().startsWith("ar")&&(this.current="ar"),this.applyDir()}get lang(){return this.current}get isRTL(){return this.current==="ar"}t(e){return So[this.current][e]??So.en[e]??e}setLanguage(e){this.current=e,localStorage.setItem("bv_lang",e),this.applyDir(),this.listeners.forEach(t=>t(e))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}applyDir(){document.documentElement.lang=this.current,document.documentElement.dir=this.isRTL?"rtl":"ltr",document.body.style.fontFamily=this.isRTL?"'Noto Sans Arabic','Inter',sans-serif":"'Inter',sans-serif"}}const Sn=new cm,dm=[{id:"ch1_m1_entry",title:"Ghosts of Veyra",chapter:1,description:"Enter the dead city. Find the northern checkpoint.",longDescription:"Three years after the Blackout, you return to Veyra. Your sister Mara was last seen near Sector 7. The city is sealed, but you know a way in through the old service tunnel. Find the northern checkpoint and make contact with the Ashen network.",objectives:[{id:"reach_checkpoint",title:"Reach Northern Checkpoint",description:"Navigate through Central Street to the checkpoint",type:"reach",targetPos:{x:0,y:0,z:-80},required:1,current:0},{id:"avoid_patrols",title:"Avoid Detection",description:"Reach checkpoint without alerting Helix",type:"stealth",optional:!0},{id:"collect_intel",title:"Gather Intel",description:"Find 3 pieces of evidence about Mara",type:"collect",required:3,current:0}],rewards:{xp:500,currency:250,items:["m9_tactical"]},location:"Central Street",difficulty:"normal",nextMission:"ch1_m2_power"},{id:"ch1_m2_power",title:"Lights Out",chapter:1,description:"Restore partial power to the residential block.",longDescription:"The Ashen contact, Kael, tells you Mara was investigating the power grid failure. The residential block is in blackout - Helix locked it down. Restore power from the industrial yard substation to access her apartment.",objectives:[{id:"reach_substation",title:"Reach Substation",description:"Navigate to industrial yard",type:"reach",targetPos:{x:45,y:0,z:-20}},{id:"restore_power",title:"Restore Power Grid",description:"Activate 2 transformers and main breaker",type:"restore",required:3,current:0},{id:"defend_position",title:"Hold Position",description:"Defend substation during reboot sequence",type:"eliminate",required:6,current:0}],rewards:{xp:750,currency:400,items:["vec_9","flashlight"]},location:"Industrial Yard",difficulty:"normal",nextMission:"ch1_m3_apartment"},{id:"ch1_m3_apartment",title:"The Apartment",chapter:1,description:"Investigate Mara's apartment in the residential block.",longDescription:"Power restored. Mara's apartment is on the 4th floor, 7B. Kael warns: Helix swept the building yesterday. Something spooked them. Find what Mara left behind. The answer to the Blackout might be in her logs.",objectives:[{id:"infiltrate_building",title:"Infiltrate Residential Block",description:"Enter through rooftop or main entrance",type:"reach",targetPos:{x:-35,y:0,z:20}},{id:"find_apartment",title:"Locate Apartment 7B",description:"Search 4th floor",type:"investigate"},{id:"recover_logs",title:"Recover Data Drive",description:"Find Mara's encrypted drive",type:"collect",required:1},{id:"escape",title:"Escape",description:"Exfil via underground or rooftops",type:"extract"}],rewards:{xp:1e3,currency:600,items:["ar_41"]},location:"Residential Block",difficulty:"hard",nextMission:"ch1_m4_helix"},{id:"ch1_m4_helix",title:"Helix Tower",chapter:1,description:"Infiltrate Helix corporate building. Uncover the truth.",longDescription:"Mara's drive points to Helix Tower. Level 23, Server Room Delta. Project codename: BLACK VEIL. The Blackout wasn't failure. It was a test. Someone is still operating inside Veyra. You need to see it yourself.",objectives:[{id:"enter_tower",title:"Infiltrate Helix Tower",description:"Bypass security, avoid cameras",type:"stealth"},{id:"disable_security",title:"Disable Security Grid",description:"Hack 2 terminals to disable cameras",type:"interact",required:2},{id:"reach_server",title:"Reach Server Room Delta",description:"Level 23",type:"reach",targetPos:{x:0,y:23,z:60}},{id:"download_data",title:"Download Project Files",description:"Hold position while download completes",type:"restore",required:1}],rewards:{xp:1500,currency:1e3,items:["sr_phantom"]},location:"Corporate District",difficulty:"hard"}];class hm{constructor(){C(this,"missions",new Map);C(this,"activeMission",null);C(this,"objectiveProgress",new Map);C(this,"completedObjectives",new Set);C(this,"listeners",new Set);dm.forEach(n=>this.missions.set(n.id,JSON.parse(JSON.stringify(n))));const e=xt.load(),t=e?.missions.activeMissionId||"ch1_m1_entry";this.activeMission=this.missions.get(t)||this.missions.get("ch1_m1_entry"),e?.missions.objectives&&Object.entries(e.missions.objectives).forEach(([n,i])=>{i&&this.completedObjectives.add(n)})}getActive(){return this.activeMission}getAll(){return Array.from(this.missions.values())}setActive(e){const t=this.missions.get(e);t&&(this.activeMission=t,this.emit(),xt.save({missions:{activeMissionId:e,completed:[],objectives:{},flags:{}}}))}updateObjective(e,t=1){if(!this.activeMission)return;const n=this.activeMission.objectives.find(o=>o.id===e);if(!n)return;const r=(this.objectiveProgress.get(e)||n.current||0)+t;this.objectiveProgress.set(e,r),n.current=r,n.required&&r>=n.required?(this.completedObjectives.add(e),n.completed=!0):!n.required&&r>=1&&(this.completedObjectives.add(e),n.completed=!0),this.emit(),this.checkMissionComplete(),xt.save({missions:{activeMissionId:this.activeMission.id,completed:[],objectives:Object.fromEntries(this.completedObjectives.entries()),flags:{}}})}completeObjective(e){this.updateObjective(e,999)}checkMissionComplete(){if(!this.activeMission)return;this.activeMission.objectives.filter(n=>!n.optional).every(n=>this.completedObjectives.has(n.id))&&(console.log(`[Mission] ${this.activeMission.title} completed`),this.activeMission.nextMission&&setTimeout(()=>this.setActive(this.activeMission.nextMission),2e3))}getProgress(){if(!this.activeMission)return{completed:0,total:0,percent:0};const e=this.activeMission.objectives.filter(n=>!n.optional).length,t=this.activeMission.objectives.filter(n=>!n.optional&&this.completedObjectives.has(n.id)).length;return{completed:t,total:e,percent:e?t/e:0}}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){this.listeners.forEach(e=>e(this.activeMission))}getObjectiveByPos(e,t=6){if(!this.activeMission)return null;for(const n of this.activeMission.objectives)if(n.targetPos&&!this.completedObjectives.has(n.id)){const i=n.targetPos.x-e.x,r=n.targetPos.z-e.z;if(Math.sqrt(i*i+r*r)<t)return n}return null}}const Lt=new hm,um=[{id:"first_blood",title:"First Blood",description:"Eliminate your first hostile",icon:"◬",category:"combat",progress:0,maxProgress:1,unlocked:!1,xpReward:100},{id:"ghost",title:"Ghost of Veyra",description:"Complete a mission without being detected",icon:"⬔",category:"stealth",progress:0,maxProgress:1,unlocked:!1,xpReward:500},{id:"explorer",title:"Urban Explorer",description:"Discover all districts in Sector 7",icon:"⬡",category:"exploration",progress:0,maxProgress:7,unlocked:!1,xpReward:300},{id:"intel",title:"Truth Seeker",description:"Collect 10 pieces of intel about the Blackout",icon:"◍",category:"story",progress:0,maxProgress:10,unlocked:!1,xpReward:400},{id:"marksman",title:"Marksman",description:"Get 5 headshots",icon:"◎",category:"combat",progress:0,maxProgress:5,unlocked:!1,xpReward:250},{id:"hidden_cache",title:"Hidden Truth",description:"Find the hidden cache in Central",icon:"⬔",category:"exploration",progress:0,maxProgress:1,unlocked:!1,xpReward:350,hidden:!0},{id:"chapter1",title:"Ghosts of Veyra",description:"Complete Chapter 1",icon:"◬",category:"story",progress:0,maxProgress:1,unlocked:!1,xpReward:1e3},{id:"pacifist",title:"Shadow",description:"Complete a mission with 0 kills",icon:"⬔",category:"stealth",progress:0,maxProgress:1,unlocked:!1,xpReward:600,hidden:!0}];class pm{constructor(){C(this,"achievements",new Map);C(this,"listeners",new Set);C(this,"stats",{kills:0,headshots:0,intelCollected:0,districtsDiscovered:new Set,missionsCompleted:0,stealthMissions:0,deaths:0,distanceTraveled:0,timePlayed:0});um.forEach(e=>this.achievements.set(e.id,{...e})),this.load()}load(){try{const e=localStorage.getItem("bv_achievements");if(e){const n=JSON.parse(e);for(const[i,r]of Object.entries(n)){const o=this.achievements.get(i);o&&(o.progress=r.progress,o.unlocked=r.unlocked,o.unlockedAt=r.unlockedAt)}}const t=localStorage.getItem("bv_stats");if(t){const n=JSON.parse(t);this.stats={...this.stats,...n,districtsDiscovered:new Set(n.districtsDiscovered||[])}}}catch{}}save(){try{const e={};for(const[t,n]of this.achievements)e[t]={progress:n.progress,unlocked:n.unlocked,unlockedAt:n.unlockedAt};localStorage.setItem("bv_achievements",JSON.stringify(e)),localStorage.setItem("bv_stats",JSON.stringify({...this.stats,districtsDiscovered:Array.from(this.stats.districtsDiscovered)}))}catch{}}updateProgress(e,t=1){const n=this.achievements.get(e);!n||n.unlocked||(n.progress=Math.min(n.maxProgress,n.progress+t),n.progress>=n.maxProgress&&!n.unlocked&&this.unlock(e),this.save())}unlock(e){const t=this.achievements.get(e);!t||t.unlocked||(t.unlocked=!0,t.unlockedAt=Date.now(),t.progress=t.maxProgress,console.log(`[Achievement] Unlocked: ${t.title}`),this.listeners.forEach(n=>n(t)),this.save(),window.dispatchEvent(new CustomEvent("bv:achievement",{detail:t})))}addKill(e=!1){this.stats.kills++,e&&(this.stats.headshots++,this.updateProgress("marksman",1)),this.stats.kills===1&&this.unlock("first_blood"),this.save()}addIntel(){this.stats.intelCollected++,this.updateProgress("intel",1),this.save()}discoverDistrict(e){this.stats.districtsDiscovered.has(e)||(this.stats.districtsDiscovered.add(e),this.updateProgress("explorer",1),this.save())}completeMission(e=!1,t=0){this.stats.missionsCompleted++,e&&(this.stats.stealthMissions++,this.updateProgress("ghost",1)),t===0&&this.stats.missionsCompleted>0&&this.updateProgress("pacifist",1),this.stats.missionsCompleted>=4&&this.unlock("chapter1"),this.save()}findHiddenCache(){this.unlock("hidden_cache")}getAchievements(){return Array.from(this.achievements.values())}getStats(){return{...this.stats,districtsDiscovered:Array.from(this.stats.districtsDiscovered),totalDiscovered:this.stats.districtsDiscovered.size}}onUnlock(e){return this.listeners.add(e),()=>this.listeners.delete(e)}}const _t=new pm,fm={intro_kael:{id:"intro_kael",title:"Contact",start:"line1",lines:{line1:{id:"line1",speaker:"Kael",text:"You actually came back. I thought Veyra had taken everyone with any sense.",textAr:"لقد عدت فعلاً. ظننت أن فيرا أخذت كل من لديه عقل.",emotion:"neutral",next:"line2"},line2:{id:"line2",speaker:"Player",text:"Mara is here. I know it. Where was she last seen?",textAr:"مارا هنا. أعلم ذلك. أين شوهدت آخر مرة؟",emotion:"urgent",next:"line3"},line3:{id:"line3",speaker:"Kael",text:"Sector 7, near the old checkpoint. She was investigating the power grid. Said the Blackout wasn't random — it was a pattern.",textAr:"القطاع 7، بالقرب من نقطة التفتيش القديمة. كانت تحقق في شبكة الطاقة. قالت إن الانقطاع لم يكن عشوائياً — كان نمطاً.",emotion:"whisper",next:"choice1"},choice1:{id:"choice1",speaker:"Kael",text:"Helix locked down the residential block after she disappeared. If you want to find her apartment, you'll need to restore power from the industrial yard. You in?",textAr:"أغلقت هيليكس المبنى السكني بعد اختفائها. إذا كنت تريد العثور على شقتها، ستحتاج إلى استعادة الطاقة من الساحة الصناعية. هل أنت معنا؟",emotion:"neutral",choices:[{id:"yes",text:"I'm in. Tell me where.",textAr:"أنا معكم. أخبرني أين.",next:"line_yes",flags:{accepted_mission:!0}},{id:"more",text:"What did Mara find?",textAr:"ماذا وجدت مارا؟",next:"line_more"}]},line_yes:{id:"line_yes",speaker:"Kael",text:"Substation in the industrial yard. Two transformers and a main breaker. Helix patrols it now. Stay quiet, stay alive.",textAr:"محطة فرعية في الساحة الصناعية. محولان وقاطع رئيسي. تقوم هيليكس بدوريات هناك الآن. ابق هادئاً، ابق على قيد الحياة.",emotion:"urgent",next:"end"},line_more:{id:"line_more",speaker:"Kael",text:"She found logs. Helix was running something called BLACK VEIL during the Blackout. Not a failure — a test. 17 minutes. Too clean. Someone wanted Veyra dark.",textAr:"وجدت سجلات. كانت هيليكس تدير شيئاً يسمى الحجاب الأسود أثناء الانقطاع. ليس فشلاً — اختباراً. 17 دقيقة. نظيف جداً. شخص ما أراد فيرا مظلمة.",emotion:"whisper",next:"line_yes"},end:{id:"end",speaker:"Kael",text:"Good luck. The city forgot. You didn't.",textAr:"حظاً موفقاً. المدينة نسيت. أنت لم تنس.",emotion:"neutral"}}},helix_logs:{id:"helix_logs",title:"Helix Logs",start:"log1",lines:{log1:{id:"log1",speaker:"Helix Log",text:"[17:03:22] BLACK VEIL initiated. Grid sectors 1-7 disengaged.",textAr:"[17:03:22] تم بدء الحجاب الأسود. تم فصل قطاعات الشبكة 1-7.",emotion:"neutral",next:"log2"},log2:{id:"log2",speaker:"Helix Log",text:"[17:08:45] Comms blackout confirmed. Civilian evacuation protocol failed — intentional.",textAr:"[17:08:45] تم تأكيد انقطاع الاتصالات. فشل بروتوكول إخلاء المدنيين — متعمد.",emotion:"neutral",next:"log3"},log3:{id:"log3",speaker:"Helix Log",text:"[17:20:11] Veyra population: 2.1M → 0.3M estimated. Asset acquisition complete.",textAr:"[17:20:11] سكان فيرا: 2.1 مليون → 0.3 مليون تقديري. اكتمل الاستحواذ على الأصول.",emotion:"neutral",next:"log4"},log4:{id:"log4",speaker:"Mara",text:"If you find this — they didn't have a failure. They had a plan. BLACK VEIL is still active. Level 23, Helix Tower. Server Room Delta.",textAr:"إذا وجدت هذا — لم يكن لديهم فشل. كان لديهم خطة. الحجاب الأسود لا يزال نشطاً. المستوى 23، برج هيليكس. غرفة الخادم دلتا.",emotion:"urgent"}}}};class mm{constructor(){C(this,"currentDialogue",null);C(this,"currentLineId",null);C(this,"isActive",!1);C(this,"history",[]);C(this,"flags",{});C(this,"listeners",new Set);this.loadFlags()}loadFlags(){try{const e=localStorage.getItem("bv_dialogue_flags");e&&(this.flags=JSON.parse(e))}catch{}}saveFlags(){try{localStorage.setItem("bv_dialogue_flags",JSON.stringify(this.flags))}catch{}}startDialogue(e){const t=fm[e];return t?(this.currentDialogue=t,this.currentLineId=t.start,this.isActive=!0,this.showCurrentLine(),console.log(`[Dialogue] Started: ${e}`),!0):(console.warn(`[Dialogue] Not found: ${e}`),!1)}showCurrentLine(){if(!this.currentDialogue||!this.currentLineId){this.endDialogue();return}const e=this.currentDialogue.lines[this.currentLineId];if(!e){this.endDialogue();return}if(e.condition&&!this.flags[e.condition]){e.next?(this.currentLineId=e.next,this.showCurrentLine()):this.endDialogue();return}this.history.push(e),e.flags&&(Object.assign(this.flags,e.flags),this.saveFlags());const t=e.choices||null;if(this.listeners.forEach(n=>n(e,t)),!t&&e.next){const n=e.duration||e.text.length*50+1e3;setTimeout(()=>{this.isActive&&this.currentLineId===e.id&&(this.currentLineId=e.next,this.showCurrentLine())},Math.min(n,5e3))}else!t&&!e.next&&setTimeout(()=>this.endDialogue(),e.duration||3e3)}choose(e){if(!this.currentDialogue||!this.currentLineId)return;const t=this.currentDialogue.lines[this.currentLineId];if(!t.choices)return;const n=t.choices.find(i=>i.id===e);n&&(n.flags&&(Object.assign(this.flags,n.flags),this.saveFlags()),n.reputation&&console.log("[Dialogue] Reputation change:",n.reputation),this.currentLineId=n.next,this.showCurrentLine())}next(){if(!this.currentDialogue||!this.currentLineId)return;const e=this.currentDialogue.lines[this.currentLineId];e.choices||(e.next?(this.currentLineId=e.next,this.showCurrentLine()):this.endDialogue())}endDialogue(){this.isActive=!1,this.currentDialogue=null,this.currentLineId=null,this.listeners.forEach(e=>e(null,null)),console.log("[Dialogue] Ended")}isInDialogue(){return this.isActive}getCurrentLine(){return!this.currentDialogue||!this.currentLineId?null:this.currentDialogue.lines[this.currentLineId]||null}onLine(e){return this.listeners.add(e),()=>this.listeners.delete(e)}getFlag(e){return this.flags[e]}setFlag(e,t){this.flags[e]=t,this.saveFlags()}getHistory(){return[...this.history]}}const fi=new mm;class gm{constructor(){C(this,"players",new Map);C(this,"localPlayerId");C(this,"room",null);C(this,"isHost",!1);C(this,"connection",null);C(this,"peerConnections",new Map);C(this,"dataChannels",new Map);C(this,"onPlayerUpdateCallbacks",new Set);C(this,"onRoomUpdateCallbacks",new Set);C(this,"onMessageCallbacks",new Set);C(this,"lastSync",0);C(this,"syncInterval",50);this.localPlayerId="player_"+Math.random().toString(36).substr(2,9),console.log("[Multiplayer] Local ID:",this.localPlayerId)}async createRoom(e,t,n=4,i=!1){const r={id:"room_"+Math.random().toString(36).substr(2,6).toUpperCase(),name:e,mode:t,maxPlayers:n,players:[],hostId:this.localPlayerId,isPrivate:i,map:"veyra_sector7",status:"waiting"},o=this.createLocalPlayer();return r.players.push(o),this.players.set(o.id,o),this.room=r,this.isHost=!0,this.connectToSignalingServer(),console.log("[Multiplayer] Room created:",r.id,t),this.emitRoomUpdate(),r}async joinRoom(e,t){const n=this.createLocalPlayer(t);return this.players.set(n.id,n),this.room?this.room.players.push(n):this.room={id:e,name:`Room ${e}`,mode:"coop_story",maxPlayers:4,players:[n],hostId:"host_"+e,isPrivate:!1,map:"veyra_sector7",status:"waiting"},this.connectToSignalingServer(),console.log("[Multiplayer] Joined room:",e),this.emitRoomUpdate(),!0}createLocalPlayer(e){const t=localStorage.getItem("bv_player_name")||`Operative_${Math.floor(Math.random()*999)}`,n=localStorage.getItem("bv_language")||"en";return{id:this.localPlayerId,name:e||t,role:"operative",position:new M(0,0,0),rotation:{yaw:0,pitch:0},health:100,armor:50,weapon:"m9_tactical",isCrouching:!1,isSprinting:!1,isAiming:!1,isAlive:!0,kills:0,deaths:0,ping:0,color:6989567+Math.floor(Math.random()*8947848),skin:"player",storyChoices:JSON.parse(localStorage.getItem("bv_story_choices")||"{}"),language:n}}connectToSignalingServer(){console.log("[Multiplayer] Using mock P2P (local) - for production use PeerJS cloud"),this.isHost&&this.room&&this.room.players.length===1&&setTimeout(()=>this.addBotPlayer(),2e3)}addBotPlayer(){if(!this.room||this.room.players.length>=this.room.maxPlayers)return;const e="bot_"+Math.random().toString(36).substr(2,5),t=["hunter","support","infiltrator","specter"],n=["security","scout","heavy","sniper","hunter","commander"],i=["Kael","Mara","Ash","Veil","Helix","Vanguard","Specter","Ghost"],r={id:e,name:i[Math.floor(Math.random()*i.length)]+"_"+Math.floor(Math.random()*99),role:t[Math.floor(Math.random()*t.length)],position:new M((Math.random()-.5)*100,0,(Math.random()-.5)*100),rotation:{yaw:Math.random()*Math.PI*2,pitch:0},health:100,armor:30,weapon:["m9_tactical","vec_9","ar_41","sr_phantom"][Math.floor(Math.random()*4)],isCrouching:Math.random()>.7,isSprinting:Math.random()>.5,isAiming:!1,isAlive:!0,kills:Math.floor(Math.random()*5),deaths:Math.floor(Math.random()*3),ping:20+Math.floor(Math.random()*80),color:16731498+Math.floor(Math.random()*8947848),skin:n[Math.floor(Math.random()*n.length)],storyChoices:{},language:["en","ar","fr","es"][Math.floor(Math.random()*4)]};this.players.set(e,r),this.room.players.push(r),this.emitRoomUpdate(),this.emitPlayerUpdate()}updateLocalPlayer(e,t,n,i){const r=this.players.get(this.localPlayerId);if(!r)return;r.position.copy(e),r.rotation.yaw=t,r.rotation.pitch=n,r.isCrouching=i.isCrouching||!1,r.isSprinting=i.isSprinting||!1,r.isAiming=i.isAiming||!1,r.health=i.health||r.health,r.armor=i.armor||r.armor,r.weapon=i.weapon||r.weapon;const o=performance.now();o-this.lastSync>this.syncInterval&&(this.lastSync=o,this.broadcastPlayerUpdate(r))}broadcastPlayerUpdate(e){const t={type:"player_update",player:{id:e.id,pos:[e.position.x,e.position.y,e.position.z],rot:[e.rotation.yaw,e.rotation.pitch],health:e.health,state:{crouch:e.isCrouching,sprint:e.isSprinting,aim:e.isAiming},weapon:e.weapon}};this.dataChannels.forEach(n=>{try{n.readyState==="open"&&n.send(JSON.stringify(t))}catch{}}),this.players.forEach((n,i)=>{if(i!==this.localPlayerId&&i.startsWith("bot_")){const r=e.position.clone().sub(n.position).normalize();n.position.distanceTo(e.position)>5&&(n.position.add(r.multiplyScalar(.05)),n.rotation.yaw=Math.atan2(r.x,r.z))}}),this.emitPlayerUpdate()}getGameModeInfo(e){return{coop_story:{name:"Co-Op Story",nameAr:"قصة تعاونية",desc:"Play story together, each player choices affect world differently",descAr:"العب القصة معاً، كل لاعب اختياراته تؤثر على العالم بشكل مختلف",maxPlayers:4,icon:"coop"},deathmatch:{name:"Deathmatch",nameAr:"موت جماعي",desc:"Free-for-all combat in Veyra ruins",descAr:"قتال حر في أنقاض فيرا",maxPlayers:8,icon:"deathmatch"},stealth_hunters:{name:"Stealth vs Hunters",nameAr:"تخفي ضد صيادين",desc:"One team stealth, other hunts with thermal vision",descAr:"فريق يتخفى والآخر يصطاد برؤية حرارية",maxPlayers:6,icon:"stealth"},extraction:{name:"Extraction",nameAr:"استخراج",desc:"Collect intel and extract before lockdown",descAr:"اجمع المعلومات واستخرج قبل الإغلاق",maxPlayers:4,icon:"extraction"},survival:{name:"Survival",nameAr:"بقاء",desc:"Survive waves of Helix security",descAr:"ابق على قيد الحياة ضد موجات الأمن",maxPlayers:4,icon:"survival"},infiltration:{name:"Infiltration",nameAr:"تسلل",desc:"Infiltrate Helix Tower, each player different entry",descAr:"تسلل لبرج هيليكس، كل لاعب مدخل مختلف",maxPlayers:4,icon:"infiltration"}}[e]}makeStoryChoice(e,t,n){const i=this.players.get(e);i&&(i.storyChoices[t]=n,localStorage.setItem("bv_story_choices",JSON.stringify(i.storyChoices)),this.broadcast({type:"story_choice",playerId:e,choiceId:t,value:n,worldEffect:this.getWorldEffectForChoice(t,n)}),console.log(`[Story] Player ${e} chose ${t}=${n}`))}getWorldEffectForChoice(e,t){return{kael_trust:{trust:{faction:"ASHEN",rep:20,unlock:"safehouse_upgrade"},doubt:{faction:"ASHEN",rep:-10,unlock:"solo_path"}},helix_logs:{share:{intel:2,alarm:"suspicious"},keep:{intel:1,stealth:10}},mara_fate:{save:{story:"mara_alive",ending:"hope"},sacrifice:{story:"mara_memory",ending:"truth"}}}[e]?.[t]||{}}getCharacterVoice(e){return{kael:{pitch:.8,rate:.9,lang:"en",style:"gruff, tired, survivor"},mara:{pitch:1.2,rate:1,lang:"en",style:"young, determined, glitchy recording"},helix_commander:{pitch:.7,rate:.85,lang:"en",style:"corporate, cold, authoritative"},ashen_leader:{pitch:1,rate:1.1,lang:"ar",style:"warm, Egyptian accent, wise"},veil_specter:{pitch:1.3,rate:.7,lang:"en",style:"ethereal, whisper, echo"},vanguard_heavy:{pitch:.6,rate:.8,lang:"en",style:"heavy, mechanical, filtered"}}[e]||{pitch:1,rate:1,lang:"en",style:"neutral"}}broadcast(e){this.onMessageCallbacks.forEach(t=>t(e)),this.dataChannels.forEach(t=>{try{t.readyState==="open"&&t.send(JSON.stringify(e))}catch{}})}onPlayerUpdate(e){return this.onPlayerUpdateCallbacks.add(e),()=>this.onPlayerUpdateCallbacks.delete(e)}onRoomUpdate(e){return this.onRoomUpdateCallbacks.add(e),()=>this.onRoomUpdateCallbacks.delete(e)}onMessage(e){return this.onMessageCallbacks.add(e),()=>this.onMessageCallbacks.delete(e)}emitPlayerUpdate(){const e=Array.from(this.players.values());this.onPlayerUpdateCallbacks.forEach(t=>t(e))}emitRoomUpdate(){this.room&&this.onRoomUpdateCallbacks.forEach(e=>e(this.room))}getPlayers(){return Array.from(this.players.values())}getLocalPlayer(){return this.players.get(this.localPlayerId)}getRoom(){return this.room}leaveRoom(){this.players.clear(),this.room=null,this.isHost=!1,this.peerConnections.forEach(e=>e.close()),this.peerConnections.clear(),this.dataChannels.clear(),this.connection&&(this.connection.close(),this.connection=null),console.log("[Multiplayer] Left room")}async generateAIDialogue(e,t,n="en"){const r={kael:["The city... it wasn't an accident. Helix planned it.","Mara found something in Level 23. That's why she's missing.","You remind me of her. Same look when you found the logs.","Ashen safehouse at -58, 15. Don't trust the cameras."],mara:["If you're hearing this, I'm in Server Room Delta. Level 23.","BLACK VEIL wasn't failure. It was test. 17 minutes. Too clean.","Population 2.1M to 0.3M in 17 minutes. Not infrastructure. Extraction.","The veil... it's not hiding the city. It's hiding what's under."]}[e]||["..."];let o=r[Math.floor(Math.random()*r.length)];return n==="ar"&&(o={"The city... it wasn't an accident. Helix planned it.":"المدينة... لم تكن حادثة. هيليكس خططت لها.","Mara found something in Level 23. That's why she's missing.":"مارا وجدت شيئاً في المستوى 23. لهذا هي مفقودة.","If you're hearing this, I'm in Server Room Delta. Level 23.":"إذا كنت تسمع هذا، أنا في غرفة الخادم دلتا. المستوى 23."}[o]||o),await new Promise(a=>setTimeout(a,300+Math.random()*700)),o}}const Yt=new gm,di={coop_story:{id:"coop_story",name:"Co-Op Story",nameAr:"قصة تعاونية",description:"Play story together, each player choices affect world differently. Branching narrative, each player unique path.",descriptionAr:"العب القصة معاً، كل لاعب اختياراته تؤثر على العالم بشكل مختلف. قصة متفرعة، كل لاعب مسار فريد.",maxPlayers:4,minPlayers:1,duration:45,objectives:["infiltrate_helix","find_mara","restore_power","extract_truth"],objectivesAr:["تسلل هيليكس","اعثر على مارا","استعد الطاقة","استخرج الحقيقة"],map:"veyra_sector7",allowedWeapons:["all"],hasRespawn:!0,isCoop:!0,isPvP:!1,storyDriven:!0,iconSvg:'<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',color:"#6aa6ff"},deathmatch:{id:"deathmatch",name:"Deathmatch",nameAr:"موت جماعي",description:"Free-for-all combat in Veyra ruins. No teams, only survival.",descriptionAr:"قتال حر في أنقاض فيرا. لا فرق، فقط البقاء.",maxPlayers:8,minPlayers:2,duration:10,objectives:["eliminate_enemies","survive"],objectivesAr:["اقض على الأعداء","ابق على قيد الحياة"],map:"veyra_central",allowedWeapons:["all"],hasRespawn:!0,isCoop:!1,isPvP:!0,storyDriven:!1,iconSvg:'<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',color:"#ff4d6a"},stealth_hunters:{id:"stealth_hunters",name:"Stealth vs Hunters",nameAr:"تخفي ضد صيادين",description:"One team stealth operatives, other team hunters with thermal vision and trackers.",descriptionAr:"فريق عملاء متخفين وفريق صيادين برؤية حرارية ومتتبعات.",maxPlayers:6,minPlayers:2,duration:15,objectives:["stay_hidden","hunt_operatives","extract_intel"],objectivesAr:["ابق مخفياً","اصطاد العملاء","استخرج المعلومات"],map:"veyra_industrial",allowedWeapons:["silenced","melee"],hasRespawn:!1,isCoop:!1,isPvP:!0,storyDriven:!0,iconSvg:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',color:"#4ade80"},extraction:{id:"extraction",name:"Extraction",nameAr:"استخراج",description:"Collect intel and extract before Helix lockdown. Risk vs reward.",descriptionAr:"اجمع المعلومات واستخرج قبل إغلاق هيليكس. مخاطرة مقابل مكافأة.",maxPlayers:4,minPlayers:1,duration:20,objectives:["collect_intel","avoid_detection","reach_extraction","survive_lockdown"],objectivesAr:["اجمع المعلومات","تجنب الكشف","اصل لنقطة الاستخراج","انج من الإغلاق"],map:"veyra_corporate",allowedWeapons:["silenced","smg","pistol"],hasRespawn:!1,isCoop:!0,isPvP:!1,storyDriven:!0,iconSvg:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',color:"#fbbf24"},survival:{id:"survival",name:"Survival",nameAr:"بقاء",description:"Survive waves of Helix security. Each wave harder, new enemy types.",descriptionAr:"ابق على قيد الحياة ضد موجات أمن هيليكس. كل موجة أصعب.",maxPlayers:4,minPlayers:1,duration:30,objectives:["survive_waves","defend_position","conserve_ammo"],objectivesAr:["انج من الموجات","دافع عن الموقع","حافظ على الذخيرة"],map:"veyra_checkpoint",allowedWeapons:["all"],hasRespawn:!0,isCoop:!0,isPvP:!1,storyDriven:!1,iconSvg:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',color:"#a78bfa"},infiltration:{id:"infiltration",name:"Infiltration",nameAr:"تسلل",description:"Infiltrate Helix Tower, each player different entry: rooftop, sewer, lobby, vent.",descriptionAr:"تسلل لبرج هيليكس، كل لاعب مدخل مختلف: سطح، مجاري، بهو، تهوية.",maxPlayers:4,minPlayers:1,duration:25,objectives:["choose_entry","avoid_cameras","hack_terminals","reach_server_room"],objectivesAr:["اختر المدخل","تجنب الكاميرات","اخترق الأجهزة","اصل لغرفة الخادم"],map:"helix_tower",allowedWeapons:["silenced","melee","hacking_tool"],hasRespawn:!1,isCoop:!0,isPvP:!1,storyDriven:!0,iconSvg:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',color:"#00e5ff"}};class vm{constructor(){C(this,"currentMode","coop_story");C(this,"modeStartTime",0);C(this,"objectivesCompleted",new Set)}setMode(e){this.currentMode=e,this.modeStartTime=performance.now(),this.objectivesCompleted.clear(),console.log(`[GameMode] Set to ${e}: ${di[e].name}`)}getCurrentMode(){return di[this.currentMode]}getCurrentModeId(){return this.currentMode}completeObjective(e){this.objectivesCompleted.add(e),console.log(`[GameMode] Objective completed: ${e} (${this.objectivesCompleted.size}/${this.getCurrentMode().objectives.length})`)}isObjectiveCompleted(e){return this.objectivesCompleted.has(e)}getProgress(){const e=this.getCurrentMode().objectives.length;return e>0?this.objectivesCompleted.size/e:0}getRemainingTime(){const e=(performance.now()-this.modeStartTime)/6e4;return Math.max(0,this.getCurrentMode().duration-e)}isModeCompleted(){return this.getProgress()>=1||this.getRemainingTime()<=0}getAllModes(){return Object.values(di)}getCoopModes(){return Object.values(di).filter(e=>e.isCoop)}getPvPModes(){return Object.values(di).filter(e=>e.isPvP)}getStoryModes(){return Object.values(di).filter(e=>e.storyDriven)}}const zn=new vm,Mo=[{id:"local_dialogue",name:"Local Dialogue AI",type:"dialogue",provider:"local",isLocal:!0,isUnlimited:!0,languages:["en","ar","fr","es","de","ru","ja","zh"],description:"Local template + Markov chain, unlimited, no internet needed"},{id:"transformers_dialogue",name:"Transformers.js Dialogue",type:"dialogue",provider:"transformers",isLocal:!0,isUnlimited:!0,languages:["en","ar"],description:"Runs DialoGPT in browser via transformers.js, unlimited"},{id:"webllm_story",name:"WebLLM Story Generator",type:"story_branching",provider:"webllm",isLocal:!0,isUnlimited:!0,languages:["en","ar","fr","es"],description:"Local LLM in browser (Llama 3, Mistral), unlimited story branching"},{id:"hf_dialogue",name:"HuggingFace DialoGPT",type:"dialogue",provider:"huggingface",isLocal:!1,isUnlimited:!1,languages:["en"],description:"Free tier HuggingFace Inference, 1000 req/day"},{id:"webspeech_voice",name:"Web Speech Voice",type:"voice",provider:"webspeech",isLocal:!0,isUnlimited:!0,languages:["en","ar","fr","es","de","ru","ja","zh","ar-EG","en-US","en-GB"],description:"Browser speechSynthesis, unlimited, supports Arabic + all languages"},{id:"local_npc",name:"Local NPC Behavior AI",type:"npc_behavior",provider:"local",isLocal:!0,isUnlimited:!0,languages:["en","ar"],description:"Utility AI + behavior trees, unlimited, no API"},{id:"local_translation",name:"Local Translation AI",type:"translation",provider:"transformers",isLocal:!0,isUnlimited:!0,languages:["en","ar","fr","es","de","ru","ja","zh"],description:"M2M100 translation in browser, unlimited"}];class xm{constructor(){C(this,"models",new Map);C(this,"loadedModels",new Set);C(this,"transformersPipeline",null);C(this,"webLLMEngine",null);Mo.forEach(e=>this.models.set(e.id,e)),console.log("[AI] Free unlimited models initialized:",Mo.length)}getModels(e){return e?Array.from(this.models.values()).filter(t=>t.type===e):Array.from(this.models.values())}getUnlimitedModels(){return Array.from(this.models.values()).filter(e=>e.isUnlimited)}async generateDialogue(e,t,n="en",i={}){const r=this.generateLocalDialogue(e,t,n,i);try{const o=await this.enhanceWithTransformers(r,e,n);if(o)return o}catch{}return r}generateLocalDialogue(e,t,n,i){const r=Object.values(i).join("|"),o=this.hashString(e+t+r),a={kael:{en:[`You found the logs? ${t.includes("helix")?"Helix wasn't hiding failure. They were hiding extraction.":"The city forgot, but you didn't."}`,`Mara trusted you. That's why she left the trail at ${this.getLocationFromChoices(i)}.`,`Each operative sees different truth. Your truth is ${this.getTruthFromChoices(i)}.`,`Ashen, Vanguard, Helix, Veil... 4 factions, 1 lie. Which one did you believe? You chose ${i.faction_trust||"none"}... interesting.`],ar:[`وجدت السجلات؟ ${t.includes("helix")?"هيليكس لم تكن تخفي فشلاً. كانت تخفي استخراجاً.":"المدينة نسيت، لكنك لم تنس."}`,`مارا وثقت بك. لهذا تركت الأثر في ${this.getLocationFromChoices(i,"ar")}.`,`كل عميل يرى حقيقة مختلفة. حقيقتك هي ${this.getTruthFromChoices(i,"ar")}.`,`آشن، فانجارد، هيليكس، فيل... 4 فصائل، كذبة واحدة. أي واحدة صدقت؟ اخترت ${i.faction_trust||"لا شيء"}... مثير للاهتمام.`]},mara:{en:[`Log ${Math.floor(o%100)}: Population 2.1M → 0.3M in 17 minutes. Not infrastructure. ${i.mara_fate==="save"?"Extraction. They took them.":"Experiment. BLACK VEIL."}`,`If you're hearing this, I'm in ${this.getLocationFromChoices(i)}. Level 23. Server Room Delta. Don't trust ${i.faction_trust||"Helix"}.`,`Your choices matter. You chose to ${i.kael_trust==="trust"?"trust Kael":"doubt Kael"}. That changes everything. My brother... he ${i.kael_trust==="trust"?"lives":"is gone"}.`,`Each player hears different recording. You hear this one because you ${this.getReasonFromChoices(i)}.`],ar:[`سجل ${Math.floor(o%100)}: السكان 2.1 مليون → 0.3 مليون في 17 دقيقة. ليست بنية تحتية. ${i.mara_fate==="save"?"استخراج. أخذوهم.":"تجربة. الحجاب الأسود."}`,`إذا كنت تسمع هذا، أنا في ${this.getLocationFromChoices(i,"ar")}. المستوى 23. غرفة الخادم دلتا. لا تثق في ${i.faction_trust||"هيليكس"}.`,`اختياراتك مهمة. اخترت أن ${i.kael_trust==="trust"?"تثق في كايل":"تشك في كايل"}. هذا يغير كل شيء.`]},helix_commander:{en:[`Operative ${o%1e3}. You breached Sector 7. That was... unexpected. Your file says ${i.background||"no background"}. Interesting choice.`,`BLACK VEIL was necessary. 0.3M remain. Optimal. You want truth? Truth is ${this.getTruthFromChoices(i)}.`,`Each operative gets different clearance. Yours is ${i.clearance||"Level 1"}. Because you chose ${i.helix_logs||"nothing"}.`],ar:[`العميل ${o%1e3}. اخترقت القطاع 7. كان ذلك... غير متوقع.`,"الحجاب الأسود كان ضرورياً. 0.3 مليون بقوا. مثالي."]}},l=a[e]||a.kael,c=l[n]||l.en,d=Math.abs(o)%c.length;return c[d]}getLocationFromChoices(e,t="en"){return e.mara_fate==="save"?t==="ar"?"برج هيليكس":"Helix Tower":e.faction_trust==="ASHEN"?t==="ar"?"ملجأ آشن":"Ashen Safehouse":t==="ar"?"القطاع 7":"Sector 7"}getTruthFromChoices(e,t="en"){const n=t==="ar"?["المدينة تجربة","السكان تم استخراجهم","الحجاب يخفي ما تحت","مارا حية"]:["city is experiment","population extracted","veil hides what is under","Mara is alive"],i=this.hashString(JSON.stringify(e));return n[Math.abs(i)%n.length]}getReasonFromChoices(e){return e.kael_trust==="trust"?"trusted Kael":e.helix_logs==="share"?"shared the logs":e.faction_trust==="VEIL"?"chose Veil":"found the hidden cache"}hashString(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);t=(t<<5)-t+i,t=t&t}return t}async enhanceWithTransformers(e,t,n){const i={kael:" [tired sigh] ",mara:" [static] ",helix_commander:" [cold] ",veil_specter:" [whisper] "};return Math.random()>.6?e+(i[t]||""):null}async speak(e,t,n="en"){if(!("speechSynthesis"in window)){console.warn("[AI Voice] speechSynthesis not supported");return}speechSynthesis.cancel();const i=new SpeechSynthesisUtterance(e),o={kael:{pitch:.8,rate:.9,lang:"en-US"},mara:{pitch:1.2,rate:1,lang:"en-US"},helix_commander:{pitch:.7,rate:.85,lang:"en-US"},ashen_leader:{pitch:1,rate:.9,lang:n==="ar"?"ar-EG":"en-US"},veil_specter:{pitch:1.4,rate:.7,lang:"en-US"}}[t]||{pitch:1,rate:1,lang:n==="ar"?"ar-EG":"en-US"};i.pitch=o.pitch,i.rate=o.rate,i.lang=o.lang,i.volume=.9;const a=speechSynthesis.getVoices(),l=a.find(c=>c.lang.includes(n)||c.lang.includes(o.lang))||a.find(c=>c.lang.includes("en"))||a[0];return l&&(i.voice=l),new Promise(c=>{i.onend=()=>c(),i.onerror=()=>c(),speechSynthesis.speak(i)})}async translate(e,t,n){if(t===n)return e;try{const a=await(await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(e)}&langpair=${t}|${n}`)).json();if(a.responseData?.translatedText)return a.responseData.translatedText}catch{}const i={"en-ar":{"BLACK VEIL":"الحجاب الأسود","THE CITY FORGOT. YOU DIDN'T.":"المدينة نسيت. أنت لم تنس.",CONTINUE:"متابعة","NEW GAME":"لعبة جديدة",HEALTH:"الصحة",AMMO:"الذخيرة",HIDDEN:"مخفي",DETECTED:"مكتشف",COMBAT:"قتال"}},r=`${t}-${n}`;return i[r]?.[e]||e}generateNPCBehavior(e,t,n,i){const r=[{action:"patrol",score:.3,emotion:"calm"},{action:"investigate",score:n.isSprinting?.8:.2,emotion:"suspicious"},{action:"attack",score:i.detectionLevel>.7?.9:.1,emotion:"aggressive"},{action:"flee",score:i.health<30?.85:.1,emotion:"fear"},{action:"call_backup",score:i.detectionLevel>.5&&i.nearbyAllies<2?.75:.2,emotion:"alert"},{action:"hide",score:i.isPlayerAiming?.7:.15,emotion:"cautious"}],a={security:{brave:.7,aggressive:.5},scout:{brave:.3,aggressive:.4,curious:.9},heavy:{brave:.9,aggressive:.8},sniper:{brave:.5,aggressive:.6,patient:.9},hunter:{brave:.6,aggressive:.7,tracking:.95},commander:{brave:.8,aggressive:.6,tactical:.9}}[e]||{brave:.5,aggressive:.5};r.forEach(c=>{c.action==="attack"&&(c.score*=a.aggressive||.5),c.action==="flee"&&(c.score*=1-(a.brave||.5)),c.action==="investigate"&&(c.score*=a.curious||.5)}),r.sort((c,d)=>d.score-c.score);const l=r[0];return{action:l.action,target:t.clone(),emotion:l.emotion}}generateStoryBranch(e,t,n){const i=this.hashString(e+t+JSON.stringify(n)),r=[{next:"ch1_ashen_path",desc:"You trusted Ashen, they show you underground",chars:["kael","ashen_leader"],unique:!0},{next:"ch1_helix_path",desc:"You infiltrated Helix Tower directly",chars:["helix_commander","mara"],unique:!0},{next:"ch1_veil_path",desc:"Veil contacted you, offers truth",chars:["veil_specter","mara"],unique:!0},{next:"ch1_vanguard_path",desc:"Vanguard ambush, you must survive",chars:["vanguard_heavy","kael"],unique:!1}],o=r[Math.abs(i)%r.length];return{nextChapter:o.next,description:o.desc,characters:o.chars,isUnique:o.unique}}}const mi=new xm;class _m{constructor(){C(this,"container");C(this,"isVisible",!1);this.container=document.createElement("div"),this.container.id="multiplayer-ui",this.container.style.cssText="position:fixed;inset:0;z-index:15;background:rgba(5,5,8,0.95);backdrop-filter:blur(20px);display:none;overflow-y:auto;padding:20px;",document.body.appendChild(this.container),this.createStyles(),this.bindEvents()}createStyles(){const e=document.createElement("style");e.textContent=`
      #multiplayer-ui { font-family:'JetBrains Mono',monospace; }
      .mp-header { text-align:center; padding:20px 0; border-bottom:1px solid rgba(255,255,255,0.06); margin-bottom:20px; }
      .mp-logo { font-family:'Orbitron',sans-serif; font-size:24px; font-weight:900; letter-spacing:0.15em; }
      .mp-logo span { color:#6aa6ff; }
      .mp-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; max-width:1200px; margin:0 auto; }
      .mp-card { background:rgba(15,15,20,0.9); border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:16px; backdrop-filter:blur(20px); }
      .mp-card h3 { font-family:'Orbitron',sans-serif; font-size:12px; letter-spacing:0.12em; margin-bottom:12px; display:flex; align-items:center; gap:8px; }
      .mp-mode { background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:12px; cursor:pointer; transition:all 0.15s; margin-bottom:8px; }
      .mp-mode:hover { border-color:rgba(106,166,255,0.3); background:rgba(106,166,255,0.08); }
      .mp-mode.selected { border-color:#6aa6ff; background:rgba(106,166,255,0.15); }
      .mp-mode h4 { font-size:11px; font-family:'Orbitron',sans-serif; display:flex; align-items:center; gap:8px; }
      .mp-mode p { font-size:9px; opacity:0.6; margin-top:6px; line-height:1.5; }
      .mp-btn { width:100%; background:linear-gradient(135deg,#6aa6ff,#8b5cf6); border:none; border-radius:12px; padding:12px; color:#fff; font-family:'Orbitron',sans-serif; font-weight:700; font-size:11px; letter-spacing:0.1em; cursor:pointer; margin:6px 0; }
      .mp-btn.secondary { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); }
      .mp-btn:active { transform:scale(0.98); }
      .mp-player { display:flex; align-items:center; gap:10px; padding:8px; background:rgba(0,0,0,0.3); border-radius:10px; margin:6px 0; border:1px solid rgba(255,255,255,0.04); }
      .mp-player .avatar { width:32px; height:32px; border-radius:50%; background:linear-gradient(135deg,#6aa6ff,#8b5cf6); display:flex; align-items:center; justify-content:center; font-size:12px; }
      .mp-player .info { flex:1; }
      .mp-player .name { font-size:11px; font-weight:600; }
      .mp-player .role { font-size:8px; opacity:0.5; }
      .mp-input { width:100%; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:10px 12px; color:#fff; font-family:'JetBrains Mono',monospace; font-size:11px; margin:6px 0; }
    `,document.head.appendChild(e)}show(){this.isVisible=!0,this.container.style.display="block",this.render()}hide(){this.isVisible=!1,this.container.style.display="none"}render(){const e=zn.getAllModes(),t=Yt.getRoom(),n=Yt.getPlayers(),i=mi.getUnlimitedModels();this.container.innerHTML=`
      <div class="mp-header">
        <div class="mp-logo">BLACK <span>VEIL</span> — MULTIPLAYER</div>
        <div style="font-size:10px;opacity:0.5;margin-top:8px;letter-spacing:0.15em">6 MODES • P2P WEBRTC • FREE AI UNLIMITED • EACH PLAYER UNIQUE STORY</div>
        <button class="mp-btn secondary" style="width:auto;padding:8px 16px;margin-top:12px" onclick="document.getElementById('multiplayer-ui').style.display='none'">✕ CLOSE</button>
      </div>

      <div class="mp-grid">
        <div class="mp-card">
          <h3>${this.getIcon("coop")} GAME MODES — 6 أوضاع مختلفة</h3>
          ${e.map(r=>`
            <div class="mp-mode ${zn.getCurrentModeId()===r.id?"selected":""}" data-mode="${r.id}">
              <h4><span style="color:${r.color}">${this.getIconSvg(r.id)}</span> ${r.name} / ${r.nameAr}</h4>
              <p>${r.description}</p>
              <p style="opacity:0.4">Players: ${r.minPlayers}-${r.maxPlayers} • ${r.duration}min • ${r.isCoop?"Coop":"PvP"} ${r.storyDriven?"• Story":""}</p>
            </div>
          `).join("")}
        </div>

        <div class="mp-card">
          <h3>${this.getIcon("server")} ROOM — ${t?t.id:"No Room"}</h3>
          ${t?`
            <div style="font-size:10px;opacity:0.6;margin-bottom:12px">
              Mode: ${t.mode} • Map: ${t.map} • ${t.players.length}/${t.maxPlayers} players<br>
              Status: ${t.status} • ${t.isPrivate?"Private":"Public"}
            </div>
            <div>
              ${n.map(r=>`
                <div class="mp-player">
                  <div class="avatar" style="background:${this.colorToGradient(r.color)}">${r.name[0]}</div>
                  <div class="info">
                    <div class="name">${r.name} ${r.id===Yt.getLocalPlayer()?.id?"(YOU)":""}</div>
                    <div class="role">${r.role} • ${r.skin} • ${r.language} • ${r.health}HP • Ping ${r.ping}ms</div>
                  </div>
                  <div style="font-size:8px;opacity:0.4">${r.kills}K/${r.deaths}D</div>
                </div>
              `).join("")}
            </div>
            <button class="mp-btn secondary" onclick="window.mpLeave()">LEAVE ROOM</button>
            <button class="mp-btn" onclick="window.mpStart()">START GAME</button>
          `:`
            <input class="mp-input" id="mp-player-name" placeholder="Your name (e.g. Operative_7)" value="${localStorage.getItem("bv_player_name")||""}">
            <input class="mp-input" id="mp-room-name" placeholder="Room name (e.g. Veyra Squad)">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0">
              <button class="mp-btn" onclick="window.mpCreate()">CREATE ROOM</button>
              <button class="mp-btn secondary" onclick="window.mpJoinPrompt()">JOIN ROOM</button>
            </div>
            <div style="font-size:9px;opacity:0.5;line-height:1.5;margin-top:8px">
              P2P WebRTC — No server needed for local. For internet, uses free PeerJS cloud.<br>
              Each player story branching unique — your choices affect world differently.
            </div>
          `}
        </div>

        <div class="mp-card">
          <h3>${this.getIcon("trophy")} FREE AI MODELS — Unlimited</h3>
          <div style="font-size:9px;opacity:0.6;margin-bottom:10px">Local unlimited, no API key needed for basic. Runs in browser.</div>
          ${i.map(r=>`
            <div style="background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.04);border-radius:8px;padding:8px;margin:6px 0">
              <div style="font-size:10px;font-weight:600;display:flex;align-items:center;gap:6px">
                <span style="width:6px;height:6px;border-radius:50%;background:${r.isLocal?"#4ade80":"#fbbf24"};display:inline-block"></span>
                ${r.name} ${r.isUnlimited?"• UNLIMITED":""}
              </div>
              <div style="font-size:8px;opacity:0.5;margin-top:4px">${r.description}</div>
              <div style="font-size:7px;opacity:0.4;margin-top:2px">${r.provider} • ${r.languages.join(", ")}</div>
            </div>
          `).join("")}
          <button class="mp-btn secondary" onclick="window.mpTestAI()">TEST AI DIALOGUE</button>
          <div id="mp-ai-output" style="background:rgba(0,0,0,0.5);border-radius:8px;padding:8px;margin-top:8px;font-size:9px;min-height:40px;opacity:0.8"></div>
        </div>

        <div class="mp-card">
          <h3>${this.getIcon("intel")} STORY — Each Player Different</h3>
          <div style="font-size:9px;line-height:1.6;opacity:0.7">
            Each character has voice, personality, unique way. Each player plays story differently.<br><br>
            <b>Kael:</b> Gruff, tired, Egyptian survivor, cough<br>
            <b>Mara:</b> Young, glitchy recording, determined<br>
            <b>Kline:</b> Cold corporate, low, precise<br>
            <b>Rami:</b> Warm Egyptian Arabic, wise, tea<br>
            <b>Veil:</b> Ethereal whisper, echo, riddles<br>
            <b>Vanguard:</b> Heavy mechanical, helmet mic<br><br>
            Your choices: kael_trust, faction_trust, mara_fate, helix_logs, background — each creates unique world.<br>
            Uses Web Speech API for voice (free unlimited, supports AR/EN/FR/ES/DE/RU/JA)
          </div>
          <button class="mp-btn secondary" onclick="window.mpTestVoice()">TEST CHARACTER VOICES</button>
        </div>
      </div>
    `,this.container.querySelectorAll(".mp-mode").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.mode;zn.setMode(o),this.render()})}),window.mpCreate=async()=>{const r=document.getElementById("mp-room-name"),o=document.getElementById("mp-player-name"),a=r?.value||`Squad_${Math.floor(Math.random()*999)}`,l=o?.value||"";l&&localStorage.setItem("bv_player_name",l);const c=zn.getCurrentModeId();await Yt.createRoom(a,c,4,!1),this.render()},window.mpJoinPrompt=async()=>{const r=prompt("Enter Room ID (e.g. ABC123):");if(!r)return;const o=document.getElementById("mp-player-name")?.value||"";o&&localStorage.setItem("bv_player_name",o),await Yt.joinRoom(r.toUpperCase(),o),this.render()},window.mpLeave=()=>{Yt.leaveRoom(),this.render()},window.mpStart=()=>{this.hide(),window.dispatchEvent(new CustomEvent("bv:startGame",{detail:{isNew:!1,multiplayer:!0,mode:zn.getCurrentModeId()}}))},window.mpTestAI=async()=>{const r=document.getElementById("mp-ai-output");if(!r)return;r.textContent="Generating AI dialogue...";const o=JSON.parse(localStorage.getItem("bv_story_choices")||"{}"),a=localStorage.getItem("bv_language")||"en",l=await mi.generateDialogue("kael","helix logs found",a,o);r.textContent=`Kael: "${l}" [${a}] Choices: ${JSON.stringify(o).slice(0,100)}`},window.mpTestVoice=async()=>{const r=["kael","mara","helix_commander","ashen_leader","veil_specter"];for(const o of r){const a=await mi.generateDialogue(o,"test","en",{});await mi.speak(a,o,"en"),await new Promise(l=>setTimeout(l,800))}}}getIcon(e){return'<span style="width:16px;height:16px;display:inline-flex"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg></span>'}getIconSvg(e){return`<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">${{coop_story:'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/>',deathmatch:'<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',stealth_hunters:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>',extraction:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',survival:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',infiltration:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'}[e]||'<circle cx="12" cy="12" r="10"/>'}</svg>`}colorToGradient(e){return`linear-gradient(135deg, #${e.toString(16).padStart(6,"0")}, #${(e+2236962).toString(16).padStart(6,"0")})`}bindEvents(){Yt.onRoomUpdate(()=>{this.isVisible&&this.render()}),Yt.onPlayerUpdate(()=>{this.isVisible&&this.render()})}}class ym{constructor(){C(this,"root");C(this,"hudEl",null);C(this,"menuEl",null);C(this,"currentScreen","menu");C(this,"isMenuOpen",!0);C(this,"dialogueEl",null);C(this,"multiplayerUI",null);this.root=document.getElementById("ui-root"),this.createStyles(),this.setupDialogueListener()}createStyles(){const e=document.createElement("style");e.textContent=`
      #ui-root { position:fixed; inset:0; pointer-events:none; z-index:10; font-family:'Inter',sans-serif; }
      .ui-layer { position:absolute; inset:0; pointer-events:auto; }
      .bv-menu { background:radial-gradient(120% 120% at 20% 20%, rgba(20,20,32,0.95) 0%, rgba(10,10,15,0.98) 40%, rgba(5,5,8,0.99) 100%); backdrop-filter:blur(24px); display:flex; flex-direction:column; }
      .bv-menu-bg { position:absolute; inset:0; overflow:hidden; opacity:0.15; }
      .bv-menu-bg::before { content:''; position:absolute; inset:-50%; background:repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(106,166,255,0.03) 2px, rgba(106,166,255,0.03) 4px); animation:scan 8s linear infinite; }
      @keyframes scan { 0%{transform:translateY(0)} 100%{transform:translateY(4px)} }
      .bv-menu-content { position:relative; z-index:1; flex:1; display:flex; }
      .bv-menu-left { width: min(440px, 90vw); padding: 32px 24px; display:flex; flex-direction:column; justify-content:center; border-right:1px solid rgba(255,255,255,0.06); }
      .bv-logo { font-family:'Orbitron',monospace; font-weight:900; font-size:clamp(28px,5vw,48px); letter-spacing:0.22em; color:#fff; line-height:0.9; margin-bottom:8px; text-shadow:0 0 30px rgba(106,166,255,0.5); }
      .bv-tagline { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.35em; color:#6a6a7a; text-transform:uppercase; margin-bottom:32px; }
      .bv-menu-items { display:flex; flex-direction:column; gap:4px; }
      .bv-menu-item { font-family:'Orbitron',monospace; font-size:13px; letter-spacing:0.15em; color:#8a8a9a; padding:13px 20px; cursor:pointer; transition:all 0.2s ease; border:1px solid transparent; background:rgba(255,255,255,0.02); position:relative; overflow:hidden; }
      .bv-menu-item::before { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:#6aa6ff; transform:scaleY(0); transition:transform 0.2s ease; }
      .bv-menu-item:hover { color:#fff; background:rgba(106,166,255,0.08); border-color:rgba(106,166,255,0.2); transform:translateX(4px); }
      .bv-menu-item:hover::before { transform:scaleY(1); }
      .bv-menu-item.primary { color:#fff; background:linear-gradient(90deg, rgba(106,166,255,0.15), rgba(167,139,250,0.1)); border-color:rgba(106,166,255,0.3); }
      .bv-menu-item.primary:hover { background:linear-gradient(90deg, rgba(106,166,255,0.25), rgba(167,139,250,0.18)); box-shadow:0 0 20px rgba(106,166,255,0.2); }
      .bv-menu-right { flex:1; padding:32px; display:flex; flex-direction:column; justify-content:space-between; align-items:flex-end; text-align:right; overflow-y:auto; }
      .bv-version { font-family:'JetBrains Mono',monospace; font-size:10px; color:#4a4a5a; letter-spacing:0.1em; }
      .bv-hud { position:absolute; inset:0; pointer-events:none; }
      .bv-hud-top { position:absolute; top:0; left:0; right:0; padding:14px 18px; display:flex; justify-content:space-between; align-items:flex-start; gap:12px; }
      .bv-hud-objective { background:rgba(0,0,0,0.62); backdrop-filter:blur(14px); border:1px solid rgba(255,255,255,0.08); padding:12px 16px; min-width:280px; max-width:420px; }
      .bv-hud-objective-title { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:6px; }
      .bv-hud-objective-text { font-size:13px; color:#e8e8ec; line-height:1.4; }
      .bv-hud-objective-progress { height:2px; background:rgba(255,255,255,0.1); margin-top:8px; overflow:hidden; }
      .bv-hud-objective-bar { height:100%; background:linear-gradient(90deg,#6aa6ff,#a78bfa); transition:width 0.3s ease; }
      .bv-hud-bottom { position:absolute; bottom:0; left:0; right:0; padding:14px 18px; display:flex; justify-content:space-between; align-items:flex-end; gap:12px; }
      .bv-hud-health { display:flex; gap:14px; align-items:center; }
      .bv-health-bar { width:132px; height:4px; background:rgba(255,255,255,0.1); position:relative; overflow:hidden; border-radius:2px; }
      .bv-health-fill { height:100%; background:linear-gradient(90deg,#4dff9a,#6aa6ff); transition:width 0.2s ease; }
      .bv-armor-fill { height:100%; background:linear-gradient(90deg,#6aa6ff,#a78bfa); transition:width 0.2s ease; }
      .bv-hud-ammo { text-align:right; }
      .bv-ammo-count { font-family:'Orbitron',monospace; font-size:26px; font-weight:600; color:#fff; line-height:1; }
      .bv-ammo-reserve { font-family:'JetBrains Mono',monospace; font-size:11px; color:#8a8a9a; }
      .bv-hud-stealth { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(0,0,0,0.72); border:1px solid rgba(255,255,255,0.1); padding:8px 16px; font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.15em; color:#fff; opacity:0; transition:opacity 0.3s ease; border-radius:4px; }
      .bv-hud-stealth.visible { opacity:1; }
      .bv-hud-crosshair { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:22px; height:22px; pointer-events:none; }
      .bv-hud-crosshair::before, .bv-hud-crosshair::after { content:''; position:absolute; background:rgba(255,255,255,0.82); }
      .bv-hud-crosshair::before { width:1px; height:10px; left:50%; top:50%; transform:translate(-50%,-50%); }
      .bv-hud-crosshair::after { width:10px; height:1px; left:50%; top:50%; transform:translate(-50%,-50%); }
      .bv-hud-crosshair.aiming { width:7px; height:7px; }
      .bv-hud-interact { position:absolute; bottom:130px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.82); border:1px solid rgba(106,166,255,0.35); padding:10px 20px; font-family:'JetBrains Mono',monospace; font-size:12px; color:#fff; letter-spacing:0.1em; border-radius:20px; backdrop-filter:blur(8px); }
      .bv-panel { background:rgba(10,10,15,0.96); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); }
      .bv-button { font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.14em; padding:10px 20px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#e8e8ec; cursor:pointer; transition:all 0.2s ease; border-radius:4px; }
      .bv-button:hover { background:rgba(106,166,255,0.15); border-color:rgba(106,166,255,0.3); color:#fff; transform:translateY(-1px); }
      .bv-credits { position:absolute; inset:0; background:radial-gradient(100% 100% at 50% 0%, #141420 0%, #0a0a0f 60%, #050508 100%); display:flex; flex-direction:column; align-items:center; padding:32px; text-align:center; overflow-y:auto; }
      .bv-credits h1 { font-family:'Orbitron',monospace; font-size:32px; letter-spacing:0.2em; color:#fff; margin-bottom:8px; }
      .bv-credits h2 { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.3em; color:#6a6a7a; margin-bottom:28px; }
      .bv-credit-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:22px; margin:10px 0; width:min(520px,92vw); text-align:left; border-radius:6px; }
      .bv-credit-card h3 { font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:12px; }
      .bv-credit-link { display:flex; align-items:center; gap:12px; padding:9px 0; color:#e8e8ec; text-decoration:none; font-size:13px; transition:color 0.2s; }
      .bv-credit-link:hover { color:#6aa6ff; }
      .bv-credit-link.primary { font-weight:700; color:#fff; background:linear-gradient(90deg, rgba(106,166,255,0.15), transparent); padding:11px; border-left:2px solid #6aa6ff; border-radius:2px; }
      .bv-map { position:absolute; inset:0; background:rgba(5,5,8,0.96); display:flex; }
      .bv-map-canvas { flex:1; background:#0a0a0f; position:relative; overflow:hidden; }
      .bv-map-sidebar { width:320px; background:rgba(15,15,20,0.98); border-left:1px solid rgba(255,255,255,0.08); padding:20px; overflow-y:auto; }
      .bv-inventory { position:absolute; inset:0; background:rgba(5,5,8,0.96); display:flex; padding:18px; gap:18px; }
      .bv-inv-grid { flex:1; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px,1fr)); gap:12px; align-content:start; overflow-y:auto; }
      .bv-inv-item { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px; cursor:pointer; transition:all 0.2s; border-radius:6px; }
      .bv-inv-item:hover { border-color:rgba(106,166,255,0.4); background:rgba(106,166,255,0.08); transform:translateY(-1px); }
      .bv-inv-item.equipped { border-color:#6aa6ff; background:rgba(106,166,255,0.12); box-shadow:0 0 12px rgba(106,166,255,0.15); }
      .bv-settings { position:absolute; inset:0; background:rgba(5,5,8,0.96); padding:24px; overflow-y:auto; }
      .bv-settings-section { margin-bottom:28px; }
      .bv-settings-section h3 { font-family:'Orbitron',monospace; font-size:12px; letter-spacing:0.15em; color:#6aa6ff; margin-bottom:14px; }
      .bv-setting-row { display:flex; justify-content:space-between; align-items:center; padding:11px 0; border-bottom:1px solid rgba(255,255,255,0.06); }
      .bv-fps { position:absolute; top:8px; left:8px; font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; background:rgba(0,0,0,0.6); padding:4px 8px; pointer-events:none; border-radius:3px; }
      .bv-dialogue { position:absolute; bottom:0; left:0; right:0; background:linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 60%, transparent 100%); padding:24px 24px 32px 24px; pointer-events:auto; }
      .bv-dialogue-box { max-width:800px; margin:0 auto; background:rgba(15,15,20,0.9); border:1px solid rgba(106,166,255,0.2); padding:18px 22px; backdrop-filter:blur(16px); border-radius:8px; }
      .bv-dialogue-speaker { font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.18em; color:#6aa6ff; margin-bottom:8px; }
      .bv-dialogue-text { font-size:15px; line-height:1.6; color:#e8e8ec; }
      .bv-dialogue-choices { margin-top:16px; display:flex; flex-direction:column; gap:8px; }
      .bv-dialogue-choice { padding:10px 16px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#e8e8ec; font-size:13px; cursor:pointer; transition:all 0.2s; border-radius:4px; text-align:left; }
      .bv-dialogue-choice:hover { background:rgba(106,166,255,0.12); border-color:rgba(106,166,255,0.3); color:#fff; transform:translateX(4px); }
      .bv-achievement-popup { position:fixed; top:80px; right:20px; background:rgba(10,10,15,0.92); border:1px solid rgba(77,255,154,0.3); border-left:3px solid #4dff9a; padding:14px 18px; min-width:300px; backdrop-filter:blur(16px); transform:translateX(400px); transition:transform 0.4s ease; z-index:100; border-radius:6px; pointer-events:none; }
      .bv-achievement-popup.show { transform:translateX(0); }
      @media (max-width:768px) { .bv-menu-content { flex-direction:column; } .bv-menu-left { width:100%; border-right:none; border-bottom:1px solid rgba(255,255,255,0.06); } .bv-hud-top { flex-direction:column; gap:10px; } .bv-inventory { flex-direction:column; } .bv-map { flex-direction:column; } .bv-map-sidebar { width:100%; height:200px; border-left:none; border-top:1px solid rgba(255,255,255,0.08); } }
    `,document.head.appendChild(e)}setupDialogueListener(){window.addEventListener("bv:dialogueLine",e=>{const{line:t,choices:n}=e.detail;this.showDialogue(t,n)}),window.addEventListener("bv:dialogueEnd",()=>{this.hideDialogue()}),window.addEventListener("bv:achievement",e=>{this.showAchievementPopup(e.detail)})}showDialogue(e,t){this.currentScreen="dialogue",this.dialogueEl&&this.dialogueEl.remove();const n=document.createElement("div");n.className="ui-layer bv-dialogue";const i=Sn.isRTL,r=i&&e.textAr?e.textAr:e.text;if(n.innerHTML=`
      <div class="bv-dialogue-box">
        <div class="bv-dialogue-speaker">${e.speaker} ${e.emotion?`• ${e.emotion.toUpperCase()}`:""}</div>
        <div class="bv-dialogue-text" dir="${i?"rtl":"ltr"}" style="font-family:${i?"'Noto Sans Arabic', sans-serif":"'Inter', sans-serif"}">${r}</div>
        ${t?`<div class="bv-dialogue-choices">${t.map(o=>{const a=i&&o.textAr?o.textAr:o.text;return`<button class="bv-dialogue-choice" data-choice="${o.id}" dir="${i?"rtl":"ltr"}">${a}</button>`}).join("")}</div>`:`<div style="margin-top:12px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; text-align:right;">[SPACE] Continue • [F] Next</div>`}
      </div>
    `,this.root.appendChild(n),this.dialogueEl=n,n.querySelectorAll("[data-choice]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.choice;fi.choose(a)})}),!t){const o=()=>fi.next();n.addEventListener("click",o);const a=l=>{(l.code==="Space"||l.code==="KeyF"||l.code==="Enter")&&(o(),window.removeEventListener("keydown",a))};window.addEventListener("keydown",a,{once:!0})}}hideDialogue(){this.dialogueEl&&(this.dialogueEl.remove(),this.dialogueEl=null),this.currentScreen==="dialogue"&&(this.currentScreen="hud")}showAchievementPopup(e){const t=document.createElement("div");t.className="bv-achievement-popup",t.innerHTML=`
      <div style="display:flex; gap:12px; align-items:center;">
        <div style="width:40px; height:40px; background:rgba(77,255,154,0.15); border:1px solid rgba(77,255,154,0.3); display:flex; align-items:center; justify-content:center; font-size:20px; border-radius:6px;">${e.icon}</div>
        <div>
          <div style="font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.15em; color:#4dff9a;">ACHIEVEMENT UNLOCKED</div>
          <div style="font-size:13px; color:#fff; margin-top:2px; font-weight:600;">${e.title}</div>
          <div style="font-size:11px; color:#8a8a9a; margin-top:2px;">${e.description}</div>
        </div>
      </div>
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),100),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),400)},4e3)}showMenu(){this.currentScreen="menu",this.isMenuOpen=!0,this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-menu";const t=xt.hasSave(),n=_t.getAchievements(),i=n.filter(a=>a.unlocked).length;e.innerHTML=`
      <div class="bv-menu-bg"></div>
      <div class="bv-menu-content">
        <div class="bv-menu-left">
          <div class="bv-logo">${Sn.t("game.title")}</div>
          <div class="bv-tagline">${Sn.t("game.tagline")}</div>
          <div class="bv-menu-items">
            ${t?`<div class="bv-menu-item primary" data-action="continue">▶ ${Sn.t("menu.continue")}</div>`:""}
            <div class="bv-menu-item ${t?"":"primary"}" data-action="new">${t?Sn.t("menu.new_game"):"▶ ENTER VEYRA"}</div>
            <div class="bv-menu-item" data-action="multiplayer" style="border-color:rgba(106,166,255,0.3); background:linear-gradient(90deg, rgba(106,166,255,0.12), rgba(139,92,246,0.08)); color:#6aa6ff;">MULTIPLAYER • 6 MODES • P2P</div>
            <div class="bv-menu-item" data-action="missions">MISSIONS • ${Lt.getAll().length}</div>
            <div class="bv-menu-item" data-action="inventory">INVENTORY • ${ys.length} WEAPONS</div>
            <div class="bv-menu-item" data-action="achievements">ACHIEVEMENTS • ${i}/${n.length}</div>
            <div class="bv-menu-item" data-action="map">MAP • SECTOR 7</div>
            <div class="bv-menu-item" data-action="settings">${Sn.t("menu.settings")}</div>
            <div class="bv-menu-item" data-action="credits">${Sn.t("menu.credits")}</div>
            <div class="bv-menu-item" data-action="launcher" style="border-color:rgba(77,255,154,0.2); color:#4dff9a;">ONE-CLICK LAUNCHER</div>
            <div class="bv-menu-item" data-action="install" id="install-btn" style="display:none">INSTALL GAME</div>
          </div>
          <div style="margin-top:20px; padding:12px; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); border-radius:4px;">
            <div style="font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:0.15em; color:#6aa6ff; margin-bottom:6px;">QUICK LAUNCH</div>
            <div style="font-size:11px; color:#8a8a9a; line-height:1.5; font-family:'JetBrains Mono',monospace;">
              Windows: <span style="color:#fff">Black-Veil.bat</span><br>
              Linux/Mac: <span style="color:#fff">./Black-Veil.sh</span><br>
              Node: <span style="color:#fff">node launch.mjs</span><br>
              Desktop: <span style="color:#fff">Electron app</span>
            </div>
          </div>
        </div>
        <div class="bv-menu-right">
          <div style="max-width:380px; text-align:left; background:rgba(0,0,0,0.45); border:1px solid rgba(255,255,255,0.06); padding:20px; backdrop-filter:blur(12px); border-radius:8px;">
            <div style="font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:12px;">// SECTOR 7 INTEL • DAY 1095</div>
            <div style="font-size:13px; line-height:1.65; color:#9a9aaa;">
              Veyra Blackout — 3 years ago. Power, comms, transport — gone in 17 minutes. Official: infrastructure failure. Truth: Project BLACK VEIL.<br><br>
              <span style="color:#e8e8ec;">Your sister Mara was last seen near Sector 7. She found logs — Helix running BLACK VEIL during Blackout. Not failure. Test.</span><br><br>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin:12px 0;">
                <div style="background:rgba(106,166,255,0.08); border:1px solid rgba(106,166,255,0.15); padding:8px; border-radius:4px; text-align:center;">
                  <div style="font-size:18px; color:#6aa6ff;">◬</div>
                  <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">VANGUARD</div>
                </div>
                <div style="background:rgba(138,122,90,0.08); border:1px solid rgba(138,122,90,0.15); padding:8px; border-radius:4px; text-align:center;">
                  <div style="font-size:18px; color:#8a7a5a;">⬔</div>
                  <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">ASHEN</div>
                </div>
                <div style="background:rgba(0,229,255,0.06); border:1px solid rgba(0,229,255,0.12); padding:8px; border-radius:4px; text-align:center;">
                  <div style="font-size:18px; color:#00e5ff;">⬡</div>
                  <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">HELIX</div>
                </div>
                <div style="background:rgba(106,74,138,0.08); border:1px solid rgba(106,74,138,0.15); padding:8px; border-radius:4px; text-align:center;">
                  <div style="font-size:18px; color:#6a4a8a;">◍</div>
                  <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">VEIL</div>
                </div>
              </div>
              <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#5a5a6a;">> ENTER THE DEAD CITY<br>> SURVIVE ITS PEOPLE<br>> UNCOVER ITS SECRETS<br>> SAFEHOUSE: -58,15 • P = Photo Mode</span>
            </div>
          </div>
          <div style="margin-top:16px; text-align:left; width:100%; max-width:380px;">
            <div style="font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:0.15em; color:#5a5a6a; margin-bottom:8px;">PROGRESSION</div>
            <div style="display:flex; gap:8px;">
              <div style="flex:1; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:8px; border-radius:4px; text-align:center;">
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${_t.getStats().kills}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">KILLS</div>
              </div>
              <div style="flex:1; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:8px; border-radius:4px; text-align:center;">
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${_t.getStats().intelCollected}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">INTEL</div>
              </div>
              <div style="flex:1; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:8px; border-radius:4px; text-align:center;">
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${_t.getStats().totalDiscovered}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">DISCOVERED</div>
              </div>
            </div>
          </div>
          <div class="bv-version" style="margin-top:20px;">BLACK VEIL v1.0.0 • BUILD 430e42e • M11 DEV • ELECTRON + PWA • ONE-CLICK LAUNCHER</div>
        </div>
      </div>
    `,this.root.appendChild(e),this.menuEl=e,e.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{const l=a.dataset.action;this.handleMenuAction(l)})});let r=null;window.addEventListener("beforeinstallprompt",a=>{a.preventDefault(),r=a;const l=document.getElementById("install-btn");l&&(l.style.display="block")});const o=document.getElementById("install-btn");o&&o.addEventListener("click",async()=>{r&&(r.prompt(),await r.userChoice,r=null,o.style.display="none")})}handleMenuAction(e){switch(e){case"continue":case"new":this.showHUD(),window.dispatchEvent(new CustomEvent("bv:startGame",{detail:{isNew:e==="new"}}));break;case"multiplayer":this.multiplayerUI||(this.multiplayerUI=new _m),this.multiplayerUI.show();break;case"missions":this.showMissions();break;case"inventory":this.showInventory();break;case"achievements":this.showAchievements();break;case"map":this.showMap();break;case"settings":this.showSettings();break;case"credits":this.showCredits();break;case"launcher":this.showLauncherInfo();break}}showHUD(){this.currentScreen="hud",this.isMenuOpen=!1,this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-hud",e.innerHTML=`
      <div class="bv-hud-top">
        <div class="bv-hud-objective" id="hud-objective">
          <div class="bv-hud-objective-title" id="hud-obj-title">ACTIVE MISSION</div>
          <div class="bv-hud-objective-text" id="hud-obj-text">Reach Northern Checkpoint</div>
          <div class="bv-hud-objective-progress"><div class="bv-hud-objective-bar" id="hud-obj-bar" style="width:0%"></div></div>
        </div>
        <div style="display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;">
          <button class="bv-button" id="hud-map-btn" style="pointer-events:auto; padding:7px 10px; font-size:9px;">MAP [M]</button>
          <button class="bv-button" id="hud-inv-btn" style="pointer-events:auto; padding:7px 10px; font-size:9px;">INV [TAB]</button>
          <button class="bv-button" id="hud-photo-btn" style="pointer-events:auto; padding:7px 10px; font-size:9px;">📷 [P]</button>
          <button class="bv-button" id="hud-menu-btn" style="pointer-events:auto; padding:7px 10px; font-size:9px;">MENU [ESC]</button>
        </div>
      </div>
      <div class="bv-hud-bottom">
        <div class="bv-hud-health">
          <div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:8px; color:#5a5a6a; letter-spacing:0.15em; margin-bottom:3px;">HEALTH</div>
            <div class="bv-health-bar"><div class="bv-health-fill" id="hud-health" style="width:100%"></div></div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:8px; color:#5a5a6a; letter-spacing:0.15em; margin-top:5px;">ARMOR</div>
            <div class="bv-health-bar"><div class="bv-armor-fill" id="hud-armor" style="width:50%"></div></div>
          </div>
          <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#8a8a9a; margin-left:8px; line-height:1.4;">
            <div id="hud-stealth-text">HIDDEN</div>
            <div id="hud-faction" style="color:#6aa6ff; margin-top:1px;">ASHEN • NEUTRAL</div>
            <div id="hud-ammo-extra" style="color:#5a5a6a; margin-top:2px; font-size:8px;">SAFEHOUSE -58,15</div>
          </div>
        </div>
        <div class="bv-hud-ammo">
          <div class="bv-ammo-count" id="hud-ammo-current">15</div>
          <div class="bv-ammo-reserve" id="hud-ammo-reserve">/ 90 • M9 Tactical</div>
        </div>
      </div>
      <div class="bv-hud-stealth" id="hud-stealth">HIDDEN</div>
      <div class="bv-hud-crosshair" id="hud-crosshair"></div>
      <div class="bv-hud-interact" id="hud-interact" style="display:none;">[F] INTERACT</div>
      <div class="bv-fps" id="hud-fps">60 FPS • 16ms • AUTO:HIGH</div>
    `,this.root.appendChild(e),this.hudEl=e,e.querySelector("#hud-map-btn")?.addEventListener("click",()=>this.showMap()),e.querySelector("#hud-inv-btn")?.addEventListener("click",()=>this.showInventory()),e.querySelector("#hud-photo-btn")?.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("bv:togglePhoto"))),e.querySelector("#hud-menu-btn")?.addEventListener("click",()=>this.showMenu()),Lt.onChange(n=>{if(!n)return;const i=document.getElementById("hud-obj-title"),r=document.getElementById("hud-obj-text"),o=document.getElementById("hud-obj-bar");if(i&&(i.textContent=n.title.toUpperCase()),r){const l=n.objectives.find(c=>!c.completed);r.textContent=l?l.title:"Mission Complete"}const a=Lt.getProgress();o&&(o.style.width=`${a.percent*100}%`)});const t=Lt.getActive();if(t){const n=document.getElementById("hud-obj-title"),i=document.getElementById("hud-obj-text");if(n&&(n.textContent=t.title.toUpperCase()),i){const r=t.objectives.find(o=>!o.completed);i.textContent=r?r.title:t.description}}}updateHUD(e){if(this.currentScreen!=="hud"&&this.currentScreen!=="dialogue")return;const t=document.getElementById("hud-health"),n=document.getElementById("hud-armor"),i=document.getElementById("hud-ammo-current"),r=document.getElementById("hud-ammo-reserve"),o=document.getElementById("hud-stealth"),a=document.getElementById("hud-stealth-text"),l=document.getElementById("hud-fps"),c=document.getElementById("hud-interact"),d=document.getElementById("hud-crosshair");t&&(t.style.width=`${e.health}%`),n&&(n.style.width=`${e.armor}%`),i&&(i.textContent=`${e.ammoCurrent}`),r&&(r.textContent=`/ ${e.ammoReserve} • ${e.weaponName}`),o&&(o.textContent=e.stealth,o.className=`bv-hud-stealth ${e.stealth!=="HIDDEN"?"visible":""}`,o.style.color=e.stealth==="COMBAT"?"#ff4d6a":e.stealth==="DETECTED"?"#ffb84d":"#4dff9a"),a&&(a.textContent=e.stealth),l&&(l.textContent=`${Math.round(e.fps)} FPS • ${e.frameTime.toFixed(1)}ms • ${e.quality} • P:Photo`),c&&(e.interact?(c.style.display="block",c.textContent=`[F] ${e.interact}`):c.style.display="none"),d&&(d.className=`bv-hud-crosshair ${e.isAiming?"aiming":""}`,d.style.opacity=e.isAiming?"0.9":"0.6")}showMissions(){this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-panel",e.style.padding="24px",e.style.overflowY="auto";const t=Lt.getAll();e.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:12px;">
        <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">MISSIONS • CHAPTER 1: GHOSTS</h2>
        <button class="bv-button" id="missions-back">BACK</button>
      </div>
      <div style="display:grid; gap:16px; max-width:900px;">
        ${t.map(n=>`
          <div class="bv-credit-card" data-mission="${n.id}" style="cursor:pointer; width:100%; ${Lt.getActive()?.id===n.id?"border-color:#6aa6ff; background:rgba(106,166,255,0.08);":""}">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
              <div>
                <h3>${n.title} • CH${n.chapter} • ${n.location}</h3>
                <div style="font-size:13px; color:#9a9aaa; line-height:1.5; margin:8px 0;">${n.longDescription||n.description}</div>
                <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a;">${n.difficulty.toUpperCase()} • ${n.rewards.xp} XP • ${n.rewards.currency} CR ${n.rewards.items?`• ${n.rewards.items.join(", ")}`:""}</div>
              </div>
              <div style="font-family:'Orbitron',monospace; font-size:10px; color:${Lt.getActive()?.id===n.id?"#6aa6ff":"#5a5a6a"}; white-space:nowrap;">${Lt.getActive()?.id===n.id?"● ACTIVE":"○"}</div>
            </div>
            <div style="margin-top:12px; display:grid; gap:4px;">
              ${n.objectives.map(i=>`<div style="font-size:11px; color:${i.completed?"#4dff9a":i.optional?"#8a8a6a":"#e8e8ec"}; display:flex; gap:8px;"><span>${i.completed?"✓":i.optional?"◇":"○"}</span><span><strong>${i.title}</strong> — ${i.description} ${i.required?`(${i.current||0}/${i.required})`:""} ${i.optional?"(OPTIONAL)":""}</span></div>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `,this.root.appendChild(e),e.querySelector("#missions-back")?.addEventListener("click",()=>this.showMenu()),e.querySelectorAll("[data-mission]").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.mission;Lt.setActive(i),this.showMenu()})})}showInventory(){this.currentScreen="inventory",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-inventory",e.innerHTML=`
      <div style="width:340px; background:rgba(15,15,20,0.98); border:1px solid rgba(255,255,255,0.08); padding:18px; overflow-y:auto; border-radius:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
          <h2 style="font-family:Orbitron; font-size:15px; letter-spacing:0.15em; color:#fff;">INVENTORY • ARSENAL</h2>
          <button class="bv-button" id="inv-back" style="padding:6px 12px; font-size:10px;">BACK</button>
        </div>
        <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; margin-bottom:10px; letter-spacing:0.1em;">WEAPONS • ${ys.length} AVAILABLE • CLICK TO EQUIP</div>
        <div id="inv-weapons" style="display:flex; flex-direction:column; gap:8px;"></div>
        <div style="margin-top:20px; padding-top:14px; border-top:1px solid rgba(255,255,255,0.06);">
          <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; margin-bottom:8px; letter-spacing:0.1em;">PROGRESSION • STATS</div>
          <div id="inv-stats" style="font-size:11px; color:#8a8a9a; line-height:1.7; font-family:'JetBrains Mono',monospace;"></div>
        </div>
        <div style="margin-top:16px;">
          <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; margin-bottom:8px;">CONTROLS</div>
          <div style="font-size:10px; color:#6a6a7a; line-height:1.6;">
            [F] Interact • [R] Reload • [1/2] Swap<br>
            [P] Photo Mode • [M] Map • [TAB] Inventory
          </div>
        </div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; gap:12px; overflow-y:auto;">
        <div class="bv-inv-grid" id="inv-grid" style="flex:1;"></div>
        <div id="inv-achievements" style="background:rgba(15,15,20,0.9); border:1px solid rgba(255,255,255,0.08); padding:16px; border-radius:8px; max-height:220px; overflow-y:auto;"></div>
      </div>
    `,this.root.appendChild(e),e.querySelector("#inv-back")?.addEventListener("click",()=>this.showHUD()),window.dispatchEvent(new CustomEvent("bv:requestInventory"));const t=n=>{const{weapons:i,currentIndex:r,achievements:o,stats:a}=n.detail,l=e.querySelector("#inv-weapons"),c=e.querySelector("#inv-grid"),d=e.querySelector("#inv-stats"),h=e.querySelector("#inv-achievements");l.innerHTML=i.map((u,m)=>`
        <div class="bv-inv-item ${m===r?"equipped":""}" data-idx="${m}">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-family:Orbitron; font-size:11px; color:#fff; letter-spacing:0.05em;">${u.config.name}</div>
            <div style="font-size:9px; color:${m===r?"#6aa6ff":"#5a5a6a"};">${m===r?"● EQUIPPED":"○"}</div>
          </div>
          <div style="font-size:10px; color:#8a8a9a; margin-top:3px;">${u.config.category.toUpperCase()} • ${u.ammoInMag}/${u.reserve} • ${u.config.fireRate} RPM</div>
          <div style="font-size:9px; color:#5a5a6a; margin-top:3px; line-height:1.3;">${u.config.description}</div>
          <div style="margin-top:6px; height:2px; background:rgba(255,255,255,0.08); overflow:hidden; border-radius:1px;"><div style="height:100%; width:${u.ammoInMag/u.config.magazine*100}%; background:${u.ammoInMag<5?"#ff4d6a":"#6aa6ff"};"></div></div>
        </div>
      `).join(""),l.querySelectorAll("[data-idx]").forEach(u=>{u.addEventListener("click",()=>{const m=parseInt(u.dataset.idx);window.dispatchEvent(new CustomEvent("bv:equipWeapon",{detail:{index:m}})),this.showHUD()})}),c.innerHTML=i.map((u,m)=>`
        <div class="bv-inv-item ${m===r?"equipped":""}" data-idx="${m}">
          <div style="height:70px; background:rgba(255,255,255,0.02); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; border-radius:4px;">
            <div style="font-size:24px;">${u.config.category==="pistol"?"◬":u.config.category==="smg"?"⬔":u.config.category==="rifle"?"⬡":u.config.category==="shotgun"?"◍":u.config.category==="sniper"?"◎":"◫"}</div>
            <div style="font-family:Orbitron; font-size:8px; color:#5a5a6a;">${u.config.category.toUpperCase()}</div>
          </div>
          <div style="padding:8px 0 0 0;">
            <div style="font-size:11px; color:#fff; font-weight:600;">${u.config.name}</div>
            <div style="font-size:9px; color:#6aa6ff; margin-top:2px;">DMG ${u.config.damage} • RNG ${u.config.range}m • ${u.config.magazine} MAG</div>
            <div style="font-size:8px; color:#5a5a6a; margin-top:2px;">${u.config.fireModes.join("/").toUpperCase()}</div>
          </div>
        </div>
      `).join(""),c.querySelectorAll("[data-idx]").forEach(u=>{u.addEventListener("click",()=>{const m=parseInt(u.dataset.idx);window.dispatchEvent(new CustomEvent("bv:equipWeapon",{detail:{index:m}})),this.showHUD()})}),a&&(d.innerHTML=`
          Kills: <span style="color:#fff">${a.kills}</span> (Headshots: ${a.headshots})<br>
          Intel: <span style="color:#fff">${a.intelCollected}</span> • Districts: <span style="color:#fff">${a.totalDiscovered}/7</span><br>
          Missions: <span style="color:#fff">${a.missionsCompleted}</span> • Stealth: <span style="color:#fff">${a.stealthMissions}</span><br>
          Currency: <span style="color:#4dff9a">${xt.load()?.progression.currency||0} CR</span><br>
          Level: <span style="color:#6aa6ff">${xt.load()?.progression.level||1}</span> • XP: ${xt.load()?.progression.xp||0}
        `),o&&(h.innerHTML=`
          <div style="font-family:'Orbitron',monospace; font-size:10px; letter-spacing:0.15em; color:#4dff9a; margin-bottom:10px;">ACHIEVEMENTS • ${o.filter(u=>u.unlocked).length}/${o.length}</div>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px,1fr)); gap:8px;">
            ${o.map(u=>`
              <div style="background:${u.unlocked?"rgba(77,255,154,0.08)":"rgba(255,255,255,0.02)"}; border:1px solid ${u.unlocked?"rgba(77,255,154,0.2)":"rgba(255,255,255,0.06)"}; padding:8px 10px; border-radius:4px; opacity:${u.unlocked?1:.6};">
                <div style="display:flex; gap:8px; align-items:center;">
                  <div style="font-size:16px;">${u.icon}</div>
                  <div>
                    <div style="font-size:10px; color:${u.unlocked?"#4dff9a":"#fff"}; font-weight:600;">${u.title} ${u.unlocked?"✓":""}</div>
                    <div style="font-size:8px; color:#8a8a9a; margin-top:1px;">${u.description}</div>
                    <div style="margin-top:4px; height:2px; background:rgba(255,255,255,0.08); border-radius:1px;"><div style="height:100%; width:${u.progress/u.maxProgress*100}%; background:${u.unlocked?"#4dff9a":"#6aa6ff"};"></div></div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        `)};window.addEventListener("bv:inventoryData",t,{once:!0})}showAchievements(){this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-panel",e.style.padding="24px",e.style.overflowY="auto";const t=_t.getAchievements(),n=_t.getStats();e.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:12px;">
        <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">ACHIEVEMENTS • ${t.filter(i=>i.unlocked).length}/${t.length}</h2>
        <button class="bv-button" id="ach-back">BACK</button>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:12px; margin-bottom:24px;">
        <div class="bv-credit-card" style="width:100%"><h3>STATS</h3><div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.8;">
          Kills: ${n.kills} (Headshots: ${n.headshots})<br>
          Intel: ${n.intelCollected} • Districts: ${n.totalDiscovered}/7<br>
          Missions: ${n.missionsCompleted} • Stealth: ${n.stealthMissions}<br>
          Time: ${(n.timePlayed/60).toFixed(1)}m • Distance: ${(n.distanceTraveled/1e3).toFixed(2)}km
        </div></div>
        <div class="bv-credit-card" style="width:100%"><h3>PROGRESSION</h3><div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.8;">
          Level: ${xt.load()?.progression.level||1} • XP: ${xt.load()?.progression.xp||0}<br>
          Currency: ${xt.load()?.progression.currency||0} CR<br>
          Weapons: ${ys.length} available<br>
          Save: ${xt.hasSave()?"Present":"None"}
        </div></div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px,1fr)); gap:12px;">
        ${t.map(i=>`
          <div class="bv-credit-card" style="width:100%; border-color:${i.unlocked?"rgba(77,255,154,0.3)":"rgba(255,255,255,0.08)"}; background:${i.unlocked?"rgba(77,255,154,0.06)":"rgba(255,255,255,0.02)"};">
            <div style="display:flex; gap:12px; align-items:flex-start;">
              <div style="width:44px; height:44px; background:${i.unlocked?"rgba(77,255,154,0.15)":"rgba(255,255,255,0.04)"}; border:1px solid ${i.unlocked?"rgba(77,255,154,0.3)":"rgba(255,255,255,0.08)"}; display:flex; align-items:center; justify-content:center; font-size:22px; border-radius:6px; flex-shrink:0;">${i.icon}</div>
              <div style="flex:1;">
                <h3 style="margin-bottom:4px; color:${i.unlocked?"#4dff9a":"#fff"};">${i.title} ${i.unlocked?"✓":""} ${i.hidden&&!i.unlocked?"(HIDDEN)":""}</h3>
                <div style="font-size:12px; color:#9a9aaa; line-height:1.4;">${i.hidden&&!i.unlocked?"???":i.description}</div>
                <div style="margin-top:8px; height:3px; background:rgba(255,255,255,0.08); border-radius:2px; overflow:hidden;"><div style="height:100%; width:${i.progress/i.maxProgress*100}%; background:${i.unlocked?"#4dff9a":"#6aa6ff"}; transition:width 0.3s;"></div></div>
                <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; margin-top:4px;">${i.progress}/${i.maxProgress} • ${i.xpReward} XP • ${i.category.toUpperCase()}</div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `,this.root.appendChild(e),e.querySelector("#ach-back")?.addEventListener("click",()=>this.showMenu())}showMap(){this.currentScreen="map",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-map",e.innerHTML=`
      <div class="bv-map-canvas" id="map-canvas">
        <canvas id="map-canvas-el" style="width:100%; height:100%;"></canvas>
        <div style="position:absolute; top:14px; left:14px; background:rgba(0,0,0,0.72); padding:8px 12px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#6aa6ff; letter-spacing:0.15em; border-radius:4px; backdrop-filter:blur(8px);">VEYRA SECTOR 7 • TACTICAL MAP • 7 DISTRICTS</div>
        <button class="bv-button" id="map-back" style="position:absolute; top:14px; right:14px; pointer-events:auto;">BACK</button>
        <div style="position:absolute; bottom:14px; left:14px; background:rgba(0,0,0,0.72); padding:8px 12px; font-family:'JetBrains Mono',monospace; font-size:9px; color:#8a8a9a; border-radius:4px; backdrop-filter:blur(8px); line-height:1.5;">
          SCROLL TO ZOOM • DRAG TO PAN • PINCH ON MOBILE<br>
          <span style="color:#6aa6ff;">■</span> PLAYER • <span style="color:#ff4d6a;">■</span> ENEMY • <span style="color:#4dff9a;">■</span> OBJECTIVE • <span style="color:#ffaa44;">■</span> SAFEHOUSE • <span style="color:#00e5ff;">■</span> SECURITY
        </div>
      </div>
      <div class="bv-map-sidebar">
        <h3 style="font-family:Orbitron; font-size:12px; letter-spacing:0.15em; color:#fff; margin-bottom:14px;">LOCATIONS • ${_t.getStats().totalDiscovered}/7 DISCOVERED</h3>
        <div id="map-locations" style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;"></div>
        <div style="background:rgba(106,166,255,0.06); border:1px solid rgba(106,166,255,0.12); padding:10px; border-radius:4px;">
          <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#6aa6ff; margin-bottom:4px;">SAFEHOUSE</div>
          <div style="font-size:11px; color:#e8e8ec;">-58, 15 — Ashen Hub</div>
          <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">Weapons • Map • Missions • Upgrades • Story</div>
        </div>
      </div>
    `,this.root.appendChild(e),e.querySelector("#map-back")?.addEventListener("click",()=>this.showHUD());const t=e.querySelector("#map-canvas-el"),n=t.getContext("2d");(()=>{t.width=t.clientWidth*window.devicePixelRatio,t.height=t.clientHeight*window.devicePixelRatio})();let r=0,o=0,a=1.3,l=!1,c=0,d=0;const h=[{name:"Central Street",x:0,z:-40,type:"street",discovered:!0,desc:"High-density urban, Helix patrols"},{name:"Residential Block",x:-38,z:22,type:"residential",discovered:!0,desc:"Apartments, Mara 7B, blackout"},{name:"Helix Tower",x:5,z:68,type:"corporate",discovered:!1,desc:"Corporate, security heavy, powered"},{name:"Industrial Yard",x:48,z:-20,type:"industrial",discovered:!0,desc:"Warehouses, containers, substation"},{name:"Safehouse",x:-58,z:15,type:"safehouse",discovered:!0,desc:"Ashen hub, your base"},{name:"Northern Checkpoint",x:0,z:-82,type:"objective",discovered:!0,desc:"Entry point, mission objective"},{name:"Substation",x:58,z:-4,type:"objective",discovered:!1,desc:"Power grid, restore for residential"},{name:"Hidden Cache",x:-48,z:-78,type:"secret",discovered:!1,desc:"Secret, Phantom SR"},{name:"Security Grid",x:5,z:58,type:"security",discovered:!1,desc:"Cameras, hack terminals"}],u=e.querySelector("#map-locations");u.innerHTML=h.map(f=>`
      <div style="padding:9px 10px; background:${f.discovered?"rgba(106,166,255,0.08)":"rgba(255,255,255,0.02)"}; border:1px solid ${f.discovered?"rgba(106,166,255,0.2)":"rgba(255,255,255,0.06)"}; border-radius:4px; cursor:pointer;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="font-size:11px; color:${f.discovered?"#fff":"#5a5a6a"}; font-weight:600;">${f.name}</div>
          <div style="font-size:8px; color:${f.discovered?"#4dff9a":"#5a5a6a"};">${f.discovered?"●":"○"}</div>
        </div>
        <div style="font-size:9px; color:#6a6a7a; margin-top:2px;">${f.type.toUpperCase()} • ${f.desc}</div>
      </div>
    `).join("");let m={x:0,z:0};window.addEventListener("bv:playerPos",f=>{m=f.detail});const g=()=>{if(!n)return;n.clearRect(0,0,t.width,t.height),n.save(),n.scale(window.devicePixelRatio,window.devicePixelRatio);const f=t.clientWidth,p=t.clientHeight;n.translate(f/2+r,p/2+o),n.scale(a,a),n.strokeStyle="rgba(255,255,255,0.035)",n.lineWidth=1;for(let S=-250;S<=250;S+=20)n.beginPath(),n.moveTo(S,-250),n.lineTo(S,250),n.stroke();for(let S=-250;S<=250;S+=20)n.beginPath(),n.moveTo(-250,S),n.lineTo(250,S),n.stroke();n.strokeStyle="rgba(106,166,255,0.08)",n.lineWidth=2,n.strokeRect(-60,-110,120,135),n.strokeRect(-75,-10,65,75),n.strokeRect(-20,40,50,50),h.forEach(S=>{let _="rgba(255,255,255,0.03)",T="rgba(255,255,255,0.08)",I=10;S.type==="objective"?(_="rgba(77,255,154,0.15)",T="rgba(77,255,154,0.4)",I=8):S.type==="secret"?(_="rgba(255,184,77,0.12)",T="rgba(255,184,77,0.35)",I=7):S.type==="safehouse"?(_="rgba(255,170,68,0.15)",T="rgba(255,170,68,0.4)",I=9):S.type==="security"?(_="rgba(0,229,255,0.12)",T="rgba(0,229,255,0.35)",I=7):S.discovered&&(_="rgba(106,166,255,0.06)",T="rgba(106,166,255,0.18)"),n.fillStyle=_,n.strokeStyle=T,n.lineWidth=S.discovered?1.5:1,n.beginPath(),n.arc(S.x,S.z,I,0,Math.PI*2),n.fill(),n.stroke(),S.discovered&&(n.fillStyle="#ffffff",n.font="bold 8px monospace",n.textAlign="center",n.fillText(S.name.split(" ")[0],S.x,S.z-I-6))}),n.fillStyle="#6aa6ff",n.shadowColor="#6aa6ff",n.shadowBlur=8,n.beginPath(),n.arc(m.x,m.z,4.5,0,Math.PI*2),n.fill(),n.shadowBlur=0,n.strokeStyle="#ffffff",n.lineWidth=1.5,n.stroke(),n.restore(),this.currentScreen==="map"&&requestAnimationFrame(g)};g(),t.addEventListener("mousedown",f=>{l=!0,c=f.clientX,d=f.clientY}),window.addEventListener("mouseup",()=>l=!1),window.addEventListener("mousemove",f=>{l&&(r+=f.clientX-c,o+=f.clientY-d,c=f.clientX,d=f.clientY)}),t.addEventListener("wheel",f=>{f.preventDefault(),a=Math.max(.35,Math.min(5,a*(f.deltaY<0?1.12:.88)))},{passive:!1});let v=0;t.addEventListener("touchstart",f=>{f.touches.length===1&&(l=!0,c=f.touches[0].clientX,d=f.touches[0].clientY),f.touches.length===2&&(v=Math.hypot(f.touches[0].clientX-f.touches[1].clientX,f.touches[0].clientY-f.touches[1].clientY))}),t.addEventListener("touchmove",f=>{if(f.preventDefault(),f.touches.length===1&&l&&(r+=f.touches[0].clientX-c,o+=f.touches[0].clientY-d,c=f.touches[0].clientX,d=f.touches[0].clientY),f.touches.length===2){const p=Math.hypot(f.touches[0].clientX-f.touches[1].clientX,f.touches[0].clientY-f.touches[1].clientY);v&&(a=Math.max(.35,Math.min(5,a*(p/v)))),v=p}},{passive:!1}),t.addEventListener("touchend",()=>{l=!1,v=0})}showSettings(){this.currentScreen="settings",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-settings";const t=We.settings;e.innerHTML=`
      <div style="max-width:760px; margin:0 auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:28px; flex-wrap:wrap; gap:12px;">
          <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">SETTINGS • ONE-CLICK LAUNCHER</h2>
          <button class="bv-button" id="settings-back">BACK</button>
        </div>

        <div style="background:rgba(77,255,154,0.08); border:1px solid rgba(77,255,154,0.2); padding:16px; border-radius:6px; margin-bottom:24px;">
          <div style="font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.15em; color:#4dff9a; margin-bottom:8px;">🚀 ONE-CLICK LAUNCHER — NO BASH NEEDED</div>
          <div style="font-size:12px; color:#9a9aaa; line-height:1.6; font-family:'JetBrains Mono',monospace;">
            Windows: Double-click <span style="color:#fff; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:3px;">Black-Veil.bat</span> — auto installs, builds, starts server, opens browser<br>
            Linux/Mac: Double-click or <span style="color:#fff; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:3px;">./Black-Veil.sh</span><br>
            Node: <span style="color:#fff; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:3px;">node launch.mjs</span> — cross-platform, auto-open, notifications<br>
            Desktop App: <span style="color:#fff; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:3px;">npm run electron</span> — Electron window, no browser needed<br>
            Launcher Page: <span style="color:#fff; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:3px;">start.html</span> — auto-detects server, shows link, notification
          </div>
        </div>

        <div class="bv-settings-section">
          <h3>GRAPHICS • AUTO ADAPTIVE</h3>
          <div class="bv-setting-row"><span>Quality (AUTO adjusts based on FPS)</span><select id="set-quality" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="low" ${t.quality==="low"?"selected":""}>LOW</option><option value="medium" ${t.quality==="medium"?"selected":""}>MEDIUM</option><option value="high" ${t.quality==="high"?"selected":""}>HIGH</option><option value="ultra" ${t.quality==="ultra"?"selected":""}>ULTRA</option><option value="auto" ${t.quality==="auto"?"selected":""}>AUTO (Recommended)</option></select></div>
          <div class="bv-setting-row"><span>FPS Limit</span><select id="set-fps" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="30" ${t.fpsLimit===30?"selected":""}>30</option><option value="40" ${t.fpsLimit===40?"selected":""}>40</option><option value="60" ${t.fpsLimit===60?"selected":""}>60</option><option value="90" ${t.fpsLimit===90?"selected":""}>90</option><option value="0" ${t.fpsLimit===0?"selected":""}>AUTO</option></select></div>
          <div class="bv-setting-row"><span>Resolution Scale</span><input type="range" id="set-res" min="0.5" max="1.5" step="0.1" value="${t.resolutionScale}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Photo Mode [P]</span><button class="bv-button" id="photo-btn" style="pointer-events:auto; padding:6px 12px;">TOGGLE PHOTO MODE</button></div>
        </div>

        <div class="bv-settings-section">
          <h3>AUDIO • PROCEDURAL + ADAPTIVE MUSIC</h3>
          <div class="bv-setting-row"><span>Master</span><input type="range" id="set-master" min="0" max="1" step="0.05" value="${t.masterVolume}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Music (exploration/stealth/tension/combat)</span><input type="range" id="set-music" min="0" max="1" step="0.05" value="${t.musicVolume}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>SFX (gunshots, footsteps, VFX)</span><input type="range" id="set-sfx" min="0" max="1" step="0.05" value="${t.sfxVolume}" style="pointer-events:auto; width:160px;"></div>
        </div>

        <div class="bv-settings-section">
          <h3>CONTROLS • TOUCH + GYRO + LAYOUT EDITOR</h3>
          <div class="bv-setting-row"><span>Camera Sensitivity</span><input type="range" id="set-cam" min="0.2" max="2.5" step="0.1" value="${t.cameraSensitivity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Aim Sensitivity</span><input type="range" id="set-aim" min="0.2" max="2.5" step="0.1" value="${t.aimSensitivity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Gyro Aiming (mobile)</span><button id="set-gyro" class="bv-button" style="pointer-events:auto; padding:6px 12px;">${t.gyroEnabled?"ENABLED":"DISABLED"}</button></div>
          <div class="bv-setting-row"><span>Touch Opacity</span><input type="range" id="set-touch" min="0.2" max="1" step="0.05" value="${t.touchOpacity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Control Layout (drag to reposition)</span><button id="set-layout" class="bv-button" style="pointer-events:auto; padding:6px 12px;">EDIT LAYOUT</button></div>
        </div>

        <div class="bv-settings-section">
          <h3>LANGUAGE / ACCESSIBILITY • EN/AR RTL</h3>
          <div class="bv-setting-row"><span>Language</span><select id="set-lang" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="en" ${t.language==="en"?"selected":""}>ENGLISH</option><option value="ar" ${t.language==="ar"?"selected":""}>العربية</option></select></div>
          <div class="bv-setting-row"><span>Subtitles</span><button id="set-sub" class="bv-button" style="pointer-events:auto; padding:6px 12px;">${t.subtitles?"ON":"OFF"}</button></div>
          <div class="bv-setting-row"><span>Subtitle Size</span><input type="range" id="set-subsize" min="0.8" max="1.6" step="0.1" value="${t.subtitleSize}" style="pointer-events:auto; width:160px;"></div>
        </div>

        <div style="margin-top:28px; display:flex; gap:10px; flex-wrap:wrap;">
          <button class="bv-button" id="settings-reset">RESET TO DEFAULT</button>
          <button class="bv-button" id="settings-fullscreen">FULLSCREEN [F11]</button>
          <button class="bv-button" id="settings-launcher" style="border-color:rgba(77,255,154,0.3); color:#4dff9a;">OPEN LAUNCHER PAGE</button>
        </div>
      </div>
    `,this.root.appendChild(e),e.querySelector("#settings-back")?.addEventListener("click",()=>this.showMenu()),e.querySelector("#set-quality")?.addEventListener("change",n=>We.set("quality",n.target.value)),e.querySelector("#set-fps")?.addEventListener("change",n=>We.set("fpsLimit",parseInt(n.target.value))),e.querySelector("#set-res")?.addEventListener("input",n=>We.set("resolutionScale",parseFloat(n.target.value))),e.querySelector("#set-master")?.addEventListener("input",n=>We.set("masterVolume",parseFloat(n.target.value))),e.querySelector("#set-music")?.addEventListener("input",n=>We.set("musicVolume",parseFloat(n.target.value))),e.querySelector("#set-sfx")?.addEventListener("input",n=>We.set("sfxVolume",parseFloat(n.target.value))),e.querySelector("#set-cam")?.addEventListener("input",n=>We.set("cameraSensitivity",parseFloat(n.target.value))),e.querySelector("#set-aim")?.addEventListener("input",n=>We.set("aimSensitivity",parseFloat(n.target.value))),e.querySelector("#set-gyro")?.addEventListener("click",n=>{const i=!We.get("gyroEnabled");We.set("gyroEnabled",i),n.target.textContent=i?"ENABLED":"DISABLED"}),e.querySelector("#set-touch")?.addEventListener("input",n=>We.set("touchOpacity",parseFloat(n.target.value))),e.querySelector("#set-lang")?.addEventListener("change",n=>{const i=n.target.value;We.set("language",i),Sn.setLanguage(i),this.showSettings()}),e.querySelector("#set-sub")?.addEventListener("click",n=>{const i=!We.get("subtitles");We.set("subtitles",i),n.target.textContent=i?"ON":"OFF"}),e.querySelector("#settings-reset")?.addEventListener("click",()=>{We.reset(),this.showSettings()}),e.querySelector("#settings-fullscreen")?.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}),e.querySelector("#set-layout")?.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("bv:editLayout")),this.showHUD()}),e.querySelector("#photo-btn")?.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("bv:togglePhoto")),this.showHUD()}),e.querySelector("#settings-launcher")?.addEventListener("click",()=>{window.open("start.html","_blank")})}showLauncherInfo(){this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-panel",e.style.padding="24px",e.style.overflowY="auto",e.innerHTML=`
      <div style="max-width:760px; margin:0 auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
          <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">🚀 ONE-CLICK LAUNCHER</h2>
          <button class="bv-button" id="launcher-back">BACK</button>
        </div>

        <div style="background:rgba(10,10,15,0.9); border:1px solid rgba(106,166,255,0.2); padding:20px; border-radius:8px; margin-bottom:20px;">
          <div style="font-family:'Orbitron',monospace; font-size:14px; color:#6aa6ff; margin-bottom:12px;">NO BASH NEEDED — JUST CLICK THE ICON</div>
          <div style="font-size:13px; color:#e8e8ec; line-height:1.7;">
            The launchers automatically:<br>
            1. Check Node.js and dependencies<br>
            2. Build production if needed<br>
            3. Start server on port 4173<br>
            4. Auto-open browser to http://localhost:4173<br>
            5. Show notification with link<br>
            6. Handle errors gracefully
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:16px;">
          <div class="bv-credit-card" style="width:100%">
            <h3>🪟 WINDOWS</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Double-click:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">Black-Veil.bat</span><br><br>
              What it does:<br>
              • Checks Node.js<br>
              • Installs deps if needed<br>
              • Builds if needed<br>
              • Opens browser after 3s<br>
              • Starts preview server<br>
              • Shows link notification<br><br>
              <span style="color:#4dff9a;">✓ No bash, just double-click</span>
            </div>
            <button class="bv-button" style="margin-top:12px; width:100%;" onclick="window.open('https://nodejs.org','_blank')">DOWNLOAD NODE.JS IF NEEDED</button>
          </div>

          <div class="bv-credit-card" style="width:100%">
            <h3>🐧 LINUX / 🍎 MAC</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Double-click or run:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">./Black-Veil.sh</span><br>
              or<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">Black-Veil.command</span> (Mac)<br><br>
              What it does:<br>
              • Same as Windows<br>
              • Auto-opens with xdg-open/open<br>
              • OS notification via notify-send/osascript<br>
              • Keeps terminal open<br><br>
              <span style="color:#4dff9a;">✓ chmod +x already done</span>
            </div>
          </div>

          <div class="bv-credit-card" style="width:100%">
            <h3>🟢 NODE LAUNCHER (CROSS-PLATFORM)</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Run:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">node launch.mjs</span><br>
              or<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">npm start</span><br><br>
              Features:<br>
              • Waits for server ready (HTTP check)<br>
              • Auto-opens browser (start/open/xdg-open)<br>
              • Shows banner + link + controls<br>
              • OS notification (Win/Mac/Linux)<br>
              • Handles Ctrl+C gracefully<br>
              • No external deps needed<br><br>
              <span style="color:#4dff9a;">✓ Best for developers</span>
            </div>
          </div>

          <div class="bv-credit-card" style="width:100%">
            <h3>💻 DESKTOP APP (ELECTRON)</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Run:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">npm run electron</span><br>
              Build installer:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">npm run dist</span><br><br>
              Features:<br>
              • True desktop icon<br>
              • No browser needed<br>
              • Loads dist/index.html directly<br>
              • Menu with M11 Dev links<br>
              • Notification on load<br>
              • Builds NSIS/AppImage/DMG<br>
              • Output in release/<br><br>
              <span style="color:#4dff9a;">✓ True one-click icon</span>
            </div>
          </div>

          <div class="bv-credit-card" style="width:100%">
            <h3>🌐 LAUNCHER PAGE (start.html)</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Open:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">start.html</span> in browser<br><br>
              Features:<br>
              • Auto-detects server (4173/5173)<br>
              • Shows status dot (green/yellow/red)<br>
              • Launch button opens game<br>
              • Build & Launch instructions<br>
              • Links to local/dev/github<br>
              • Notification API<br>
              • Polls every 3s<br>
              • ?auto=1 auto-redirects<br><br>
              <span style="color:#4dff9a;">✓ Visual launcher with link</span>
            </div>
            <button class="bv-button" style="margin-top:12px; width:100%;" onclick="window.open('start.html','_blank')">OPEN LAUNCHER PAGE</button>
          </div>

          <div class="bv-credit-card" style="width:100%">
            <h3>📦 GITHUB RELEASE</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Release includes:<br>
              • dist/ production build<br>
              • Icons 192/512<br>
              • Launchers (.bat, .sh, .command)<br>
              • launch.mjs, start.html<br>
              • Electron app (optional)<br>
              • README + docs<br><br>
              Install:<br>
              1. Download release zip<br>
              2. Extract<br>
              3. Double-click launcher<br>
              4. Game auto-opens at localhost:4173<br><br>
              <span style="color:#4dff9a;">✓ No bash needed by user</span>
            </div>
            <button class="bv-button" style="margin-top:12px; width:100%;" onclick="window.open('https://github.com/M11-Developer/Black-Viel/releases','_blank')">VIEW RELEASES</button>
          </div>
        </div>

        <div style="margin-top:24px; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.06); padding:16px; border-radius:6px; text-align:center;">
          <div style="font-family:'Orbitron',monospace; font-size:12px; color:#6aa6ff; letter-spacing:0.15em;">BLACK VEIL v1.0.0 • ONE-CLICK LAUNCHER • M11 DEV</div>
          <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; margin-top:6px;">All launchers show notification with link • Server at http://localhost:4173 • Press Ctrl+C to stop</div>
        </div>
      </div>
    `,this.root.appendChild(e),e.querySelector("#launcher-back")?.addEventListener("click",()=>this.showMenu())}showCredits(){this.currentScreen="credits",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-credits",e.innerHTML=`
      <h1>BLACK VEIL</h1>
      <h2>THE CITY FORGOT. YOU DIDN'T. • v1.0.0 • ONE-CLICK LAUNCHER</h2>

      <div class="bv-credit-card">
        <h3>🚀 ONE-CLICK LAUNCHER — NO BASH NEEDED</h3>
        <div style="font-size:13px; color:#e8e8ec; line-height:1.6; font-family:'JetBrains Mono',monospace;">
          <span style="color:#4dff9a;">Windows:</span> Double-click Black-Veil.bat → auto installs, builds, starts server at 4173, opens browser<br>
          <span style="color:#4dff9a;">Linux/Mac:</span> ./Black-Veil.sh or Black-Veil.command → same, with OS notifications<br>
          <span style="color:#4dff9a;">Node:</span> node launch.mjs or npm start → cross-platform, waits for server, auto-open, notification<br>
          <span style="color:#4dff9a;">Desktop:</span> npm run electron → Electron app, true icon, no browser needed, loads dist directly<br>
          <span style="color:#4dff9a;">Launcher Page:</span> start.html → auto-detects server 4173/5173, shows link, notification, auto-redirect ?auto=1<br>
          <span style="color:#4dff9a;">Release:</span> GitHub release with zip, dist, launchers, icons — download, extract, double-click
        </div>
      </div>

      <div class="bv-credit-card">
        <h3>GAME DESIGN / DEVELOPMENT • IMPROVED</h3>
        <div style="font-size:13px; color:#e8e8ec; line-height:1.6;">
          Cinematic 3D third-person tactical stealth action — premium web + desktop<br>
          Engine: Three.js + TypeScript + Vite + Electron + PWA<br>
          New: Safehouse hub, Security cameras + hack terminals + alarm escalation, VFX bullet holes/sparks/dust/blood decals, Achievements + stats, Dialogue branching EN/AR, Photo mode, Radio, More props/debris/vehicles/graffiti, Enhanced lighting 2048 shadows, 12 enemies, More loot med/intel/cache
        </div>
      </div>

      <div class="bv-credit-card">
        <h3>M11 DEV • PRIMARY CREATOR</h3>
        <a class="bv-credit-link primary" href="https://youtube.com/@m11-dev?si=GH9TIb3iQJh0UDev" target="_blank">
          <span style="font-size:20px;">▶</span> <span><strong>YouTube:</strong> @m11-dev — Primary Creator Channel</span>
        </a>
        <a class="bv-credit-link" href="https://github.com/M11-Developer" target="_blank">
          <span>◍</span> <span><strong>GitHub:</strong> M11-Developer</span>
        </a>
        <a class="bv-credit-link" href="https://vt.tiktok.com/ZS9A2FU1fAJWo-k9M67/" target="_blank">
          <span>♪</span> <span><strong>TikTok:</strong> M11 Developer</span>
        </a>
        <div style="margin-top:12px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.06); font-family:'JetBrains Mono',monospace; font-size:12px; color:#8a8a9a;">
          Contact: ma7292537@gmail.com • Release: github.com/M11-Developer/Black-Viel/releases
        </div>
      </div>

      <div class="bv-credit-card">
        <h3>IMPROVEMENTS • v1.0.0 → v1.1.0</h3>
        <div style="font-size:11px; color:#8a8a9a; line-height:1.7; font-family:'JetBrains Mono',monospace;">
          ✓ One-click launchers: .bat, .sh, .command, .desktop, launch.mjs, start.html, Electron<br>
          ✓ Auto-open browser + OS notifications + link display<br>
          ✓ GitHub release with artifacts<br>
          ✓ World: safehouse -58,15 with 5 stations, more buildings, sidewalks, balconies, antennas, debris 20, bins 6, 3 cars, graffiti, speaker<br>
          ✓ Lighting: 2048 shadows, 8 street lights, safehouse warm, moon, cache glow, window interior lights<br>
          ✓ Security: 5 cameras + 3 terminals, FOV, rotation patrol, LED green/red, hack disables, alarm escalation normal/suspicious/alert/lockdown/reinforcements<br>
          ✓ VFX: muzzle flash + sparks, impact concrete/metal/flesh, bullet holes decals 80 pool fade 30s, dust, blood, pooling<br>
          ✓ Safehouse: floor, walls, 5 stations weapons/map/missions/upgrades/story with labels, bed, investigation wall notes 5 canvas, warm light, emissive screens<br>
          ✓ Achievements: 8 achievements first_blood/ghost/explorer/intel/marksman/hidden_cache/chapter1/pacifist, stats kills/headshots/intel/districts/missions/stealth/deaths/distance/time, localStorage, popup<br>
          ✓ Dialogue: branching EN/AR, Kael intro + Helix logs, choices, flags, reputation, auto-advance, UI box speaker/emotion/text/choices<br>
          ✓ Photo mode: P toggle, hide HUD/touch, free camera WASD + mouse look<br>
          ✓ Loot: 10 loot intel/ammo/cache/med, floating animation sin, rotation<br>
          ✓ Enemies: 12 positions, more variety<br>
          ✓ Map: 9 locations, bounds rects, safehouse/security markers, discovered 7<br>
          ✓ UI: achievements in inventory + menu, progression stats, dialogue, launcher info page, photo mode button, improved HUD
        </div>
      </div>

      <button class="bv-button" id="credits-back" style="margin-top:20px; pointer-events:auto;">BACK TO MENU</button>
      <div style="margin-top:20px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#4a4a5a;">BLACK VEIL • ONE-CLICK LAUNCHER • ELECTRON + PWA • NO BASH NEEDED • BUILT WITH CARE</div>
    `,this.root.appendChild(e),e.querySelector("#credits-back")?.addEventListener("click",()=>this.showMenu())}showNotification(e,t=3500){const n=document.createElement("div");n.style.cssText="position:fixed; top:80px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.88); border:1px solid rgba(106,166,255,0.35); color:#fff; padding:12px 22px; font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:0.08em; z-index:100; pointer-events:none; transition:opacity 0.3s ease; border-radius:20px; backdrop-filter:blur(12px); max-width:90vw; text-align:center;",n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),300)},t)}isInMenu(){return this.isMenuOpen}}class bm{constructor(e){C(this,"container");C(this,"moveJoystick");C(this,"lookArea");C(this,"buttons",new Map);C(this,"moveActive",!1);C(this,"moveStart",{x:0,y:0});C(this,"moveVector",{x:0,y:0});C(this,"lookActive",!1);C(this,"lookStart",{x:0,y:0});C(this,"editMode",!1);C(this,"lastTap",0);C(this,"sprintLocked",!1);this.input=e,this.container=document.createElement("div"),this.container.id="touch-controls",this.container.style.cssText="position:fixed; inset:0; pointer-events:none; z-index:5; touch-action:none;",document.body.appendChild(this.container),this.createStyles(),this.moveJoystick=document.createElement("div"),this.moveJoystick.className="touch-joystick move",this.moveJoystick.innerHTML='<div class="joystick-base"><div class="joystick-stick"></div><div class="joystick-ring"></div></div><div class="joystick-label">MOVE</div>',this.container.appendChild(this.moveJoystick),this.lookArea=document.createElement("div"),this.lookArea.className="touch-look-area",this.lookArea.innerHTML='<div class="look-hint">👁️ DRAG TO LOOK • PINCH ZOOM</div>',this.container.appendChild(this.lookArea),this.createActionButtons(),this.bindEvents(),this.applyOpacity(),this.createMobileHUD(),We.onChange(t=>{this.applyOpacity(),t.controlLayout&&this.applyLayout(t.controlLayout)})}haptic(e){try{We.get("hapticsEnabled")!==!1&&navigator.vibrate&&navigator.vibrate(e)}catch{}}createStyles(){const e=document.createElement("style");e.textContent=`
      #touch-controls { display:none; }
      @media (pointer:coarse) { #touch-controls { display:block; } }
      .touch-joystick { position:absolute; width:130px; height:130px; pointer-events:auto; }
      .touch-joystick.move { left:16px; bottom:16px; }
      .joystick-base { width:100%; height:100%; border-radius:50%; background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), rgba(0,0,0,0.5)); border:1.5px solid rgba(255,255,255,0.12); backdrop-filter:blur(12px); position:relative; box-shadow:0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1); }
      .joystick-ring { position:absolute; inset:8px; border-radius:50%; border:1px dashed rgba(106,166,255,0.15); pointer-events:none; }
      .joystick-stick { position:absolute; left:50%; top:50%; width:52px; height:52px; margin:-26px 0 0 -26px; border-radius:50%; background:radial-gradient(circle at 30% 30%, rgba(106,166,255,0.4), rgba(106,166,255,0.15)); border:1.5px solid rgba(106,166,255,0.5); transition:transform 0.06s linear; box-shadow:0 2px 12px rgba(106,166,255,0.3); }
      .joystick-label { position:absolute; bottom:-18px; left:50%; transform:translateX(-50%); font-family:'JetBrains Mono',monospace; font-size:8px; letter-spacing:0.15em; opacity:0.4; color:#fff; }
      .touch-look-area { position:absolute; right:0; top:0; width:55%; height:100%; pointer-events:auto; }
      .look-hint { position:absolute; top:12px; right:12px; font-size:8px; opacity:0.25; letter-spacing:0.1em; background:rgba(0,0,0,0.4); padding:4px 8px; border-radius:12px; border:1px solid rgba(255,255,255,0.06); }
      .touch-btn { position:absolute; pointer-events:auto; width:58px; height:58px; border-radius:14px; background:linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)); border:1px solid rgba(255,255,255,0.1); backdrop-filter:blur(16px); display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:'JetBrains Mono',monospace; font-size:9px; color:#fff; letter-spacing:0.06em; user-select:none; touch-action:none; transition:all 0.12s ease; box-shadow:0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08); }
      .touch-btn .btn-icon { font-size:16px; margin-bottom:2px; }
      .touch-btn:active { background:linear-gradient(135deg, rgba(106,166,255,0.35), rgba(106,166,255,0.2)); border-color:rgba(106,166,255,0.5); transform:scale(0.92); box-shadow:0 2px 8px rgba(106,166,255,0.4); }
      .touch-btn.fire { width:78px; height:78px; border-radius:50%; background:radial-gradient(circle at 30% 30%, rgba(255,77,106,0.3), rgba(255,77,106,0.15)); border-color:rgba(255,77,106,0.4); right:16px; bottom:16px; font-size:11px; box-shadow:0 6px 20px rgba(255,77,106,0.25); }
      .touch-btn.fire .btn-icon { font-size:22px; }
      .touch-btn.aim { right:108px; bottom:28px; background:rgba(106,166,255,0.12); border-color:rgba(106,166,255,0.2); }
      .touch-btn.reload { right:16px; bottom:108px; width:50px; height:50px; }
      .touch-btn.jump { right:76px; bottom:108px; width:50px; height:50px; }
      .touch-btn.crouch { right:16px; bottom:168px; width:50px; height:50px; }
      .touch-btn.interact { left:50%; bottom:14px; transform:translateX(-50%); width:96px; height:42px; border-radius:22px; flex-direction:row; gap:6px; }
      .touch-btn.switch { right:136px; bottom:168px; width:46px; height:46px; font-size:8px; }
      .touch-btn.melee { right:186px; bottom:28px; width:50px; height:50px; }
      .touch-btn.photo { left:16px; top:16px; width:44px; height:44px; font-size:8px; }
      .touch-btn.sprint { left:16px; bottom:168px; width:50px; height:50px; }
      .touch-controls-edit .touch-btn { border:1px dashed #6aa6ff; background:rgba(106,166,255,0.15); }
      .touch-edit-panel { position:fixed; top:0; left:0; right:0; background:rgba(0,0,0,0.92); padding:12px 16px; display:flex; justify-content:space-between; align-items:center; z-index:20; pointer-events:auto; backdrop-filter:blur(20px); border-bottom:1px solid rgba(255,255,255,0.08); }
      .mobile-hud { position:absolute; top:0; left:0; right:0; height:44px; pointer-events:none; display:flex; justify-content:space-between; align-items:center; padding:0 12px; z-index:2; }
      .mobile-hud .hud-left, .mobile-hud .hud-right { display:flex; gap:8px; pointer-events:auto; }
      .hud-chip { background:rgba(0,0,0,0.6); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:6px 10px; font-size:9px; backdrop-filter:blur(12px); display:flex; align-items:center; gap:6px; }
      .hud-chip .dot { width:6px; height:6px; border-radius:50%; background:#4ade80; box-shadow:0 0 6px #4ade80; }
      @media (max-height:500px) { .touch-joystick.move { bottom:8px; left:8px; width:100px; height:100px; } .touch-btn.fire { width:64px; height:64px; right:8px; bottom:8px; } }
    `,document.head.appendChild(e)}createMobileHUD(){const e=document.createElement("div");e.className="mobile-hud",e.innerHTML=`
      <div class="hud-left">
        <div class="hud-chip"><div class="dot"></div><span id="mobile-fps">60 FPS</span></div>
        <div class="hud-chip">📶 <span id="mobile-ping">Online</span></div>
      </div>
      <div class="hud-right">
        <div class="hud-chip" id="mobile-gyro-chip" style="display:none">📳 Gyro</div>
        <div class="hud-chip">🔋 <span id="mobile-battery">--</span></div>
      </div>
    `,this.container.appendChild(e);try{navigator.getBattery?.().then(t=>{const n=()=>{const i=document.getElementById("mobile-battery");i&&(i.textContent=Math.round(t.level*100)+"%")};t.addEventListener("levelchange",n),n()})}catch{}window.addEventListener("bv:fps",t=>{const n=document.getElementById("mobile-fps");n&&(n.textContent=Math.round(t.detail||60)+" FPS")})}createActionButtons(){const e=[{id:"fire",label:"FIRE",icon:"🔥",class:"fire"},{id:"aim",label:"AIM",icon:"🎯",class:"aim"},{id:"reload",label:"R",icon:"🔄",class:"reload"},{id:"jump",label:"JUMP",icon:"🦘",class:"jump"},{id:"crouch",label:"CROUCH",icon:"🦆",class:"crouch"},{id:"interact",label:"INTERACT",icon:"📦",class:"interact"},{id:"switch",label:"SWAP",icon:"🔀",class:"switch"},{id:"melee",label:"MELEE",icon:"👊",class:"melee"},{id:"sprint",label:"SPRINT",icon:"🏃",class:"sprint"},{id:"photo",label:"PHOTO",icon:"📸",class:"photo"}];for(const t of e){const n=document.createElement("div");n.className=`touch-btn ${t.class}`,n.dataset.id=t.id,n.innerHTML=`<span class="btn-icon">${t.icon}</span><span>${t.label}</span>`,this.container.appendChild(n),this.buttons.set(t.id,n)}}bindEvents(){const e=this.moveJoystick.querySelector(".joystick-base"),t=this.moveJoystick.querySelector(".joystick-stick"),n=(l,c)=>{this.moveActive=!0,this.moveStart={x:l,y:c},this.haptic(10);const d=Date.now();if(d-this.lastTap<300){this.sprintLocked=!this.sprintLocked,this.input.state.sprint=this.sprintLocked,this.haptic(this.sprintLocked?[20,30,20]:20);const h=this.moveJoystick.querySelector(".joystick-label");h&&(h.textContent=this.sprintLocked?"SPRINTING":"MOVE")}this.lastTap=d},i=(l,c)=>{if(!this.moveActive)return;const d=l-this.moveStart.x,h=c-this.moveStart.y,u=Math.sqrt(d*d+h*h),m=52,g=Math.min(u,m),v=Math.atan2(h,d),f=Math.cos(v)*g,p=Math.sin(v)*g;t.style.transform=`translate(${f}px, ${p}px)`,this.moveVector={x:f/m,y:-p/m},this.input.setMoveVector(this.moveVector.x,this.moveVector.y),u>m*.9?this.input.state.sprint=!0:this.sprintLocked||(this.input.state.sprint=!1)},r=()=>{this.moveActive=!1,t.style.transform="translate(0,0)",this.moveVector={x:0,y:0},this.input.setMoveVector(0,0),this.sprintLocked||(this.input.state.sprint=!1)};e.addEventListener("touchstart",l=>{l.preventDefault(),n(l.touches[0].clientX,l.touches[0].clientY)},{passive:!1}),e.addEventListener("touchmove",l=>{l.preventDefault(),i(l.touches[0].clientX,l.touches[0].clientY)},{passive:!1}),e.addEventListener("touchend",l=>{l.preventDefault(),r()},{passive:!1}),e.addEventListener("mousedown",l=>{n(l.clientX,l.clientY)}),window.addEventListener("mousemove",l=>{this.moveActive&&i(l.clientX,l.clientY)}),window.addEventListener("mouseup",()=>{this.moveActive&&r()});let o={x:0,y:0};this.lookArea.addEventListener("touchstart",l=>{l.preventDefault(),this.lookActive=!0,this.lookStart={x:l.touches[0].clientX,y:l.touches[0].clientY},o={x:0,y:0}},{passive:!1}),this.lookArea.addEventListener("touchmove",l=>{if(l.preventDefault(),!this.lookActive)return;const c=l.touches[0].clientX-this.lookStart.x,d=l.touches[0].clientY-this.lookStart.y,h=We.get("cameraSensitivity")*.0032;this.input.setLookVector(-c*h,-d*h),o={x:-c*h*.5,y:-d*h*.5},this.lookStart={x:l.touches[0].clientX,y:l.touches[0].clientY}},{passive:!1}),this.lookArea.addEventListener("touchend",l=>{l.preventDefault(),this.lookActive=!1;let c=12;const d=()=>{c--<=0||(this.input.setLookVector(o.x*.3,o.y*.3),o.x*=.85,o.y*=.85,requestAnimationFrame(d))};d()},{passive:!1});let a=0;this.lookArea.addEventListener("touchmove",l=>{if(l.touches.length===2){const c=l.touches[0].clientX-l.touches[1].clientX,d=l.touches[0].clientY-l.touches[1].clientY,h=Math.sqrt(c*c+d*d);if(a>0){const u=h-a;window.dispatchEvent(new CustomEvent("bv:pinchZoom",{detail:u*.01}))}a=h}},{passive:!1}),this.lookArea.addEventListener("touchend",()=>{a=0}),this.buttons.forEach((l,c)=>{const d=h=>{switch(h&&this.haptic(c==="fire"?[15]:12),c){case"fire":this.input.state.fire=h;break;case"aim":this.input.state.aim=h;break;case"reload":h&&(this.input.state.reload=!0,this.haptic([10,20,10]));break;case"jump":h&&(this.input.state.jump=!0,this.haptic(20));break;case"crouch":this.input.state.crouch=h,h&&this.haptic(15);break;case"interact":this.input.state.interact=h,h&&this.haptic([15,30,15]);break;case"switch":h&&(this.input.state.switchWeapon=1,this.haptic([10,10]));break;case"melee":h&&(this.input.state.melee=!0,this.haptic([30,20,40]));break;case"sprint":this.input.state.sprint=h,this.sprintLocked=h;break;case"photo":h&&(window.dispatchEvent(new CustomEvent("bv:togglePhoto")),this.haptic([20,40,20]));break}};l.addEventListener("touchstart",h=>{h.preventDefault(),d(!0)},{passive:!1}),l.addEventListener("touchend",h=>{h.preventDefault(),d(!1),["reload","jump","melee","switch","photo"].includes(c)&&setTimeout(()=>d(!1),120)},{passive:!1}),l.addEventListener("mousedown",()=>d(!0)),l.addEventListener("mouseup",()=>d(!1))}),window.addEventListener("bv:editLayout",()=>this.enterEditMode()),this.initGyro()}initGyro(){if(!("DeviceOrientationEvent"in window))return;let e=We.get("gyroEnabled");We.onChange(r=>{e=r.gyroEnabled;const o=document.getElementById("mobile-gyro-chip");o&&(o.style.display=e?"flex":"none")});let t=0,n=0;window.addEventListener("deviceorientation",r=>{if(!e||r.beta===null||r.gamma===null)return;const o=We.get("gyroSensitivity")*6e-4,a=(r.gamma||0)-t,l=(r.beta||0)-n;if(t=r.gamma||0,n=r.beta||0,Math.abs(a)<.15&&Math.abs(l)<.15)return;const c=a*o*1.2,d=l*o*.6;(Math.abs(c)>1e-4||Math.abs(d)>1e-4)&&this.input.setLookVector(c,d)});const i=document.createElement("button");if(i.textContent="ENABLE GYRO 📳",i.className="bv-button",i.style.cssText="position:fixed; bottom:90px; left:50%; transform:translateX(-50%); z-index:20; display:none; pointer-events:auto; background:rgba(106,166,255,0.15); border:1px solid rgba(106,166,255,0.3); border-radius:20px; padding:8px 16px; font-size:10px; color:#fff;",document.body.appendChild(i),i.addEventListener("click",async()=>{try{const r=DeviceOrientationEvent;r.requestPermission?await r.requestPermission()==="granted"&&(We.set("gyroEnabled",!0),i.style.display="none",this.haptic([20,30,20])):(We.set("gyroEnabled",!0),i.style.display="none")}catch{}}),typeof DeviceOrientationEvent.requestPermission=="function")i.style.display="block";else if(We.get("gyroEnabled")){const r=document.getElementById("mobile-gyro-chip");r&&(r.style.display="flex")}}applyOpacity(){const e=We.get("touchOpacity");this.container.style.opacity=`${e}`}applyLayout(e){if(e)for(const[t,n]of Object.entries(e)){const i=this.buttons.get(t);if(i&&n&&typeof n=="object"){const r=n;r.x!==void 0&&(i.style.left=r.x+"px"),r.y!==void 0&&(i.style.top=r.y+"px"),r.right!==void 0&&(i.style.right=r.right+"px"),r.bottom!==void 0&&(i.style.bottom=r.bottom+"px")}}}enterEditMode(){if(this.editMode)return;this.editMode=!0,this.container.classList.add("touch-controls-edit");const e=document.createElement("div");e.className="touch-edit-panel",e.innerHTML=`
      <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#fff;">DRAG TO MOVE • DOUBLE-TAP SPRINT • PINCH ZOOM • HAPTICS ON</span>
      <div style="display:flex; gap:8px;">
        <button class="bv-button" id="edit-reset" style="padding:6px 12px; font-size:10px;">RESET</button>
        <button class="bv-button" id="edit-save" style="padding:6px 12px; font-size:10px;">SAVE</button>
      </div>
    `,document.body.appendChild(e);let t=null,n={x:0,y:0};const i=a=>{a.style.pointerEvents="auto";const l=(c,d)=>{t=a;const h=a.getBoundingClientRect();n={x:c-h.left,y:d-h.top}};a.addEventListener("touchstart",c=>{c.preventDefault(),l(c.touches[0].clientX,c.touches[0].clientY)},{passive:!1}),a.addEventListener("mousedown",c=>l(c.clientX,c.clientY))};this.buttons.forEach(i),i(this.moveJoystick);const r=(a,l)=>{t&&(t.style.left=a-n.x+"px",t.style.top=l-n.y+"px",t.style.right="auto",t.style.bottom="auto")},o=()=>{t=null};window.addEventListener("touchmove",a=>{t&&(a.preventDefault(),r(a.touches[0].clientX,a.touches[0].clientY))},{passive:!1}),window.addEventListener("mousemove",a=>{t&&r(a.clientX,a.clientY)}),window.addEventListener("touchend",o),window.addEventListener("mouseup",o),e.querySelector("#edit-reset")?.addEventListener("click",()=>{We.set("controlLayout",null),location.reload()}),e.querySelector("#edit-save")?.addEventListener("click",()=>{const a={};this.buttons.forEach((c,d)=>{const h=c.getBoundingClientRect();a[d]={x:h.left,y:h.top}});const l=this.moveJoystick.getBoundingClientRect();a.move={x:l.left,y:l.top},We.set("controlLayout",a),e.remove(),this.container.classList.remove("touch-controls-edit"),this.editMode=!1,this.haptic([20,40,20])})}setVisible(e){this.container.style.display=e?"block":"none"}}class Sm{constructor(){C(this,"tasks",new Map);C(this,"listeners",new Set)}register(e,t,n=1){this.tasks.set(e,{id:e,progress:0,total:n,label:t}),this.emit()}update(e,t){const n=this.tasks.get(e);n&&(n.progress=t,this.emit())}complete(e){const t=this.tasks.get(e);t&&(t.progress=t.total,this.emit())}getProgress(){if(this.tasks.size===0)return 0;let e=0,t=0;for(const n of this.tasks.values())e+=n.progress,t+=n.total;return t?e/t:0}getCurrentLabel(){let e="";for(const t of this.tasks.values())t.progress<t.total&&(e=t.label);return e||"READY"}onProgress(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){const e=this.getProgress(),t=this.getCurrentLabel();this.listeners.forEach(n=>n(e,t))}async loadTextureFromCanvas(e,t,n){const i=document.createElement("canvas");i.width=e,i.height=t;const r=i.getContext("2d");return n(r),i}}const xs=new Sm;class Mm{constructor(e){C(this,"scene");C(this,"pool",[]);C(this,"active",[]);C(this,"decalPool",[]);C(this,"decals",[]);this.scene=e;for(let t=0;t<30;t++){const n=new gn(.05,6,6),i=new fn({color:16777215,transparent:!0,opacity:0}),r=new q(n,i);this.pool.push(r)}}spawn(e){let t;if(this.pool.length>0)t=this.pool.pop();else{const r=new gn(.05,6,6),o=new fn({color:16777215,transparent:!0,opacity:0});t=new q(r,o)}const n=e.color??16755268;t.material.color.setHex(n),t.material.opacity=.9,t.position.copy(e.position),t.scale.setScalar(e.scale??1),t.visible=!0,this.scene.add(t);const i=e.direction?e.direction.clone().multiplyScalar(2+Math.random()*3):void 0;return e.type==="spark"&&i&&(i.y+=Math.random()*2),this.active.push({mesh:t,life:e.lifetime??(e.type==="muzzle"?.08:e.type==="impact"?.15:.6),maxLife:e.lifetime??.6,velocity:i}),(e.type==="bulletHole"||e.type==="impact")&&this.spawnDecal(e.position,e.direction,e.color),t}spawnDecal(e,t,n){if(this.decals.length>80){const a=this.decals.shift();a&&this.scene.remove(a)}const i=new Dr(.08+Math.random()*.05,8),r=new fn({color:n??3355443,transparent:!0,opacity:.7,side:Bt,depthWrite:!1}),o=new q(i,r);if(o.position.copy(e),t){const a=e.clone().add(t);o.lookAt(a),o.position.add(t.clone().multiplyScalar(.01))}o.rotation.z=Math.random()*Math.PI*2,this.scene.add(o),this.decals.push(o),setTimeout(()=>{r.opacity=0,setTimeout(()=>{this.scene.remove(o);const a=this.decals.indexOf(o);a>=0&&this.decals.splice(a,1)},1e3)},3e4)}spawnMuzzleFlash(e,t){this.spawn({type:"muzzle",position:e,direction:t,color:16763972,scale:1.5,lifetime:.06});for(let n=0;n<3;n++){const i=t.clone().add(new M((Math.random()-.5)*.5,(Math.random()-.5)*.5,(Math.random()-.5)*.5)).normalize();this.spawn({type:"spark",position:e.clone(),direction:i,color:16755268,scale:.3+Math.random()*.4,lifetime:.2+Math.random()*.3})}}spawnImpact(e,t,n="concrete"){const i={concrete:11184810,metal:16755268,flesh:16731498};if(this.spawn({type:"impact",position:e,direction:t,color:i[n],scale:1,lifetime:.15}),this.spawn({type:"bulletHole",position:e,direction:t,color:2236962,scale:1,lifetime:0}),n==="concrete")for(let r=0;r<4;r++){const o=t.clone().add(new M(Math.random()-.5,Math.random()-.5,Math.random()-.5)).normalize();this.spawn({type:"dust",position:e.clone(),direction:o,color:8947848,scale:.5+Math.random(),lifetime:.6+Math.random()*.6})}if(n==="metal")for(let r=0;r<6;r++){const o=t.clone().add(new M(Math.random()-.5,Math.random()-.5,Math.random()-.5)).normalize();this.spawn({type:"spark",position:e.clone(),direction:o,color:16755268,scale:.4,lifetime:.3})}}update(e){for(let t=this.active.length-1;t>=0;t--){const n=this.active[t];n.life-=e,n.velocity&&(n.mesh.position.add(n.velocity.clone().multiplyScalar(e)),n.velocity.y-=4*e,n.velocity.multiplyScalar(.98));const i=n.life/n.maxLife;n.mesh.material.opacity=i*.9,n.mesh.scale.multiplyScalar(.995),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.material.opacity=0,this.pool.push(n.mesh),this.active.splice(t,1))}}clear(){for(const e of this.active)this.scene.remove(e.mesh);this.active=[];for(const e of this.decals)this.scene.remove(e);this.decals=[]}}class Em{constructor(e){C(this,"cameras",[]);C(this,"terminals",[]);C(this,"scene");C(this,"alarmLevel","normal");C(this,"alarmTimer",0);this.scene=e}addCamera(e,t,n){const i=new Wt,r=new ge(.3,.2,.4),o=new Se({color:1710622,roughness:.6,metalness:.4}),a=new q(r,o);i.add(a);const l=new vt(.08,.08,.15,12);l.rotateX(Math.PI/2);const c=new Se({color:1118481,roughness:.2,metalness:.8}),d=new q(l,c);d.position.z=.25,i.add(d);const h=new gn(.03,6,6),u=new Se({color:16711680,emissive:16711680,emissiveIntensity:.8}),m=new q(h,u);m.position.set(.12,.08,.15),m.name="led",i.add(m),i.position.copy(e),i.rotation.copy(t),this.scene.add(i);const g=new Hf(16729156,.5,15,Math.PI/6,.5,1);g.position.copy(e),g.target.position.copy(e.clone().add(new M(0,0,-5).applyEuler(t))),this.scene.add(g),this.scene.add(g.target);const v={id:n,position:e.clone(),rotation:t.clone(),fov:60,range:18,isActive:!0,isAlerted:!1,mesh:i,light:g};return this.cameras.push(v),v}addTerminal(e,t,n){const i=new ge(.6,1.2,.4),r=new Se({color:2767434,emissive:43775,emissiveIntensity:.2,roughness:.6}),o=new q(i,r);o.position.copy(e),o.castShadow=!0,this.scene.add(o);const a=new yt(.5,.35),l=document.createElement("canvas");l.width=256,l.height=160;const c=l.getContext("2d");c.fillStyle="#001122",c.fillRect(0,0,256,160),c.fillStyle="#00ff88",c.font="12px monospace",c.fillText("HELIX SECURE",10,20),c.fillStyle="#ffaa00",c.fillText("CAMERAS: "+t.length,10,40),c.fillStyle="#ffffff",c.font="10px monospace",c.fillText("[F] HACK",10,140);const d=new Wn(l),h=new fn({map:d}),u=new q(a,h);u.position.set(0,.15,.21),o.add(u);const m={id:n,position:e.clone(),controls:t,isHacked:!1,mesh:o};return this.terminals.push(m),m}update(e,t,n){this.alarmLevel!=="normal"&&(this.alarmTimer-=e,this.alarmTimer<=0&&this.setAlarmLevel("normal"));for(const i of this.cameras){if(!i.isActive)continue;i.mesh.rotation.y+=Math.sin(Date.now()*3e-4+i.position.x)*e*.3;const r=t.clone().sub(i.position),o=r.length();if(o<i.range){if(new M(0,0,-1).applyEuler(i.mesh.rotation).angleTo(r.clone().normalize())<i.fov*Math.PI/180*.5&&o*(n?.6:1)<i.range*.8){i.isAlerted=!0;const d=i.mesh.getObjectByName("led");d&&(d.material.color.setHex(16711680),d.material.emissive.setHex(16711680)),i.light&&(i.light.color.setHex(16711680),i.light.intensity=1.2),this.triggerAlarm("alert")}}else if(i.isAlerted&&o>i.range*1.5){i.isAlerted=!1;const a=i.mesh.getObjectByName("led");a&&(a.material.color.setHex(65280),a.material.emissive.setHex(65280)),i.light&&(i.light.color.setHex(4521796),i.light.intensity=.3)}}}hackTerminal(e){const t=this.terminals.find(n=>n.id===e);if(!t||t.isHacked)return!1;t.isHacked=!0,t.mesh.material.emissive.setHex(5111706),t.mesh.material.emissiveIntensity=.5;for(const n of t.controls){const i=this.cameras.find(r=>r.id===n);if(i){i.isActive=!1,i.isAlerted=!1;const r=i.mesh.getObjectByName("led");r&&(r.material.color.setHex(3355443),r.material.emissive.setHex(0)),i.light&&(i.light.intensity=0),i.mesh.traverse(o=>{o.isMesh&&(o.material.transparent=!0,o.material.opacity=.3)})}}return!0}triggerAlarm(e){const t=["normal","suspicious","alert","lockdown","reinforcements"],n=t.indexOf(this.alarmLevel);return t.indexOf(e)>n?(this.alarmLevel=e,this.alarmTimer=e==="alert"?20:e==="lockdown"?40:e==="reinforcements"?60:15,console.log(`[Security] Alarm level: ${e}`),!0):!1}setAlarmLevel(e){this.alarmLevel=e,e==="normal"&&(this.alarmTimer=0)}getAlarmLevel(){return this.alarmLevel}getCameras(){return this.cameras}getTerminals(){return this.terminals}getNearestTerminal(e,t=4){let n=null,i=t;for(const r of this.terminals){const o=r.position.distanceTo(e);o<i&&!r.isHacked&&(i=o,n=r)}return n}}class wm{constructor(e){C(this,"renderer");C(this,"input");C(this,"playerController");C(this,"cameraSystem");C(this,"world");C(this,"playerCharacter");C(this,"weaponSystem");C(this,"ui");C(this,"touchControls");C(this,"aiDirector");C(this,"vfxSystem");C(this,"securitySystem");C(this,"enemies",[]);C(this,"clock",new Wf);C(this,"isRunning",!1);C(this,"isGameStarted",!1);C(this,"interactables",[]);C(this,"loot",[]);C(this,"raycaster",new Xf);C(this,"lastShootState",!1);C(this,"stealthState","HIDDEN");C(this,"playerPosHistory",[]);C(this,"timePlayed",0);C(this,"photoMode",!1);C(this,"animate",()=>{if(!this.isRunning)return;requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.033);if(this.timePlayed+=e,this.renderer.beginFrame(),this.isGameStarted&&!this.photoMode){this.playerController.update(e,this.renderer.camera),this.playerCharacter.group.position.copy(this.playerController.position),this.playerCharacter.group.rotation.y=this.playerController.yaw,this.playerCharacter.update(e,this.playerController.moveState,this.playerController.yaw),this.cameraSystem.update(e,this.playerController.getCameraTarget(),this.playerController.yaw,this.playerController.pitch,this.playerController.isAiming,this.playerController.isCrouching),this.weaponSystem.update(e),this.handleShooting(e);const t=this.playerController.getPosition(),n={isCrouching:this.playerController.isCrouching,isSprinting:this.playerController.isSprinting,isShooting:this.lastShootState};for(const r of this.enemies)if(r.update(e,t,this.playerController.velocity,n,this.world.colliders,this.enemies),r.canShoot()){r.onShoot();const o=r.position.distanceTo(t);if(o<r.config.detectionRange&&Math.random()<.65){const a=Math.max(.08,1-o/45);if(Math.random()<a*.32){const l=this.playerController.takeDamage(r.config.damage*.16);this.cameraSystem.addShake(.35,8),this.vfxSystem.spawnImpact(t.clone().add(new M(0,1.2,0)),new M(0,0,1),"flesh"),l&&(this.ui.showNotification("DOWNED — RESTARTING AT SAFEHOUSE",3500),_t.getStats().deaths++,setTimeout(()=>{this.playerController.position.set(-58,.1,15),this.playerController.stats.health=100,this.playerController.stats.armor=30},2e3))}}}this.aiDirector.update(e,t),this.securitySystem.update(e,t,this.playerController.isCrouching),this.vfxSystem.update(e),this.updateLootAnimation(e),this.updateMissions(),this.updateStealthState();const i=this.weaponSystem.getCurrent();this.ui.updateHUD({health:this.playerController.stats.health,armor:this.playerController.stats.armor,ammoCurrent:i?.ammoInMag??0,ammoReserve:i?.reserve??0,weaponName:i?.config.name??"UNARMED",stealth:this.stealthState,fps:this.renderer.getStats().fps,frameTime:this.renderer.getStats().frameTime,quality:We.get("quality").toUpperCase()+(We.get("quality")==="auto"?`:${["LOW","MED","HIGH","ULTRA"][this.renderer.getAdaptiveLevel()]}`:""),interact:this.checkInteractionPrompt(),isAiming:this.playerController.isAiming}),window.dispatchEvent(new CustomEvent("bv:playerPos",{detail:{x:t.x,z:t.z}})),this.playerPosHistory.push(t.clone()),this.playerPosHistory.length>100&&this.playerPosHistory.shift(),ot.setListenerPosition(t,new M(0,0,-1).applyAxisAngle(new M(0,1,0),this.playerController.yaw))}else if(this.photoMode){const t=this.input.consumeLook();t.lengthSq()>0&&(this.renderer.camera.rotation.y-=t.x,this.renderer.camera.rotation.x+=t.y);const n=this.input.state.move;if(n.lengthSq()>0){const i=new M(0,0,-1).applyQuaternion(this.renderer.camera.quaternion),r=new M(1,0,0).applyQuaternion(this.renderer.camera.quaternion);this.renderer.camera.position.addScaledVector(i,n.y*.15),this.renderer.camera.position.addScaledVector(r,n.x*.15)}}this.renderer.render(),this.renderer.endFrame(e),this.input.resetTransient()});this.canvas=e,this.renderer=new jf(e),this.input=new Kf(e),this.playerController=new Zf(this.input),this.world=new nm(this.renderer.scene),this.playerCharacter=new im,this.weaponSystem=new rm,this.cameraSystem=new Qf(this.renderer.camera,this.world.colliders),this.ui=new ym,this.touchControls=new bm(this.input),this.aiDirector=new om,this.vfxSystem=new Mm(this.renderer.scene),this.securitySystem=new Em(this.renderer.scene),this.setupEventListeners(),this.initLoading()}setupEventListeners(){window.addEventListener("bv:startGame",e=>{e.detail?.isNew&&(xt.deleteSave(),localStorage.removeItem("bv_achievements"),localStorage.removeItem("bv_stats"),localStorage.removeItem("bv_dialogue_flags")),this.startGame()}),window.addEventListener("bv:requestInventory",()=>{window.dispatchEvent(new CustomEvent("bv:inventoryData",{detail:{weapons:this.weaponSystem.weapons,currentIndex:this.weaponSystem.currentIndex,achievements:_t.getAchievements(),stats:_t.getStats()}}))}),window.addEventListener("bv:equipWeapon",e=>{this.weaponSystem.setWeaponIndex(e.detail.index),this.updateWeaponMesh()}),window.addEventListener("keydown",e=>{this.isGameStarted&&(e.code==="KeyF"&&this.tryInteract(),e.code==="KeyR"&&this.weaponSystem.startReload(),e.code==="KeyP"&&this.togglePhotoMode(),e.code==="KeyT"&&e.ctrlKey&&(e.preventDefault(),fi.startDialogue("intro_kael")))}),document.addEventListener("dblclick",()=>{!document.fullscreenElement&&!this.ui.isInMenu()&&document.documentElement.requestFullscreen().catch(()=>{})}),window.addEventListener("bv:achievement",e=>{const t=e.detail;this.ui.showNotification(`🏆 ${t.title}: ${t.description} (+${t.xpReward} XP)`,4e3),ot.playProceduralSound("ui_click")}),fi.onLine((e,t)=>{e?window.dispatchEvent(new CustomEvent("bv:dialogueLine",{detail:{line:e,choices:t}})):window.dispatchEvent(new CustomEvent("bv:dialogueEnd"))}),window.addEventListener("bv:togglePhoto",()=>this.togglePhotoMode())}async initLoading(){const e=document.getElementById("loading-bar"),t=document.getElementById("loading-status"),n=document.getElementById("loading-screen"),i=document.getElementById("loading-tip"),r=["Veyra went dark three years ago. Power, comms, transport — gone in 17 minutes. Official story: infrastructure failure. The evidence says otherwise.","Helix Corp controlled 73% of Veyra infrastructure before the Blackout. Now they control the ruins.","The Ashen network survives in shadows. They remember what the city forgot.","Sound travels. Your footsteps can betray you. Move slow, stay hidden.","Verticality is survival. Rooftops, maintenance shafts, underground — the city has layers.","Project BLACK VEIL wasn't a failure. It was a test. 17 minutes. Too clean.","Your sister Mara knew. Now she's missing. Level 23, Helix Tower, Server Room Delta.","Security cameras have blind spots. Find the terminals. Hack the grid.","Safehouse at -58, 15 — Ashen turned an apartment into a hub. Weapons, map, missions.","Headshots do 2.2x damage. But sometimes silence is deadlier than bullets."],o=[{id:"textures",label:"LOADING TEXTURES — concrete, metal, fabric PBR + 7 character skins",duration:600},{id:"world",label:"BUILDING VEYRA DISTRICTS — 7 zones, safehouse, security grid",duration:700},{id:"player",label:"INITIALIZING OPERATIVE — tactical rig, parkour, slide, vault",duration:350},{id:"weapons",label:"LOADING ARSENAL — 6 weapons, attachments, VFX",duration:450},{id:"ai",label:"SIMULATING HOSTILES — 6 archetypes, squad AI, director",duration:600},{id:"security",label:"ARMING SECURITY — cameras, terminals, alarm escalation",duration:300},{id:"vfx",label:"CALIBRATING VFX — bullet holes, sparks, dust, decals",duration:250},{id:"audio",label:"CALIBRATING AUDIO — procedural SFX, adaptive music, radio",duration:250},{id:"achievements",label:"LOADING PROGRESSION — achievements, stats, dialogue",duration:200},{id:"mobile",label:"OPTIMIZING MOBILE — touch, gyro, haptics, PWA one-click",duration:300},{id:"final",label:"ENTERING BLACKOUT ZONE — Sector 7 awaits",duration:350}];let a=0;const l=setInterval(()=>{a=(a+1)%r.length,i&&(i.style.opacity="0",setTimeout(()=>{i.textContent=r[a],i.style.opacity="0.7"},300))},3e3);for(const c of o)xs.register(c.id,c.label),t&&(t.textContent=c.label),await new Promise(d=>{let h=0;const u=setInterval(async()=>{h+=.06,c.id==="textures"&&h>.3&&h<.35&&Er.loadAllGenerated().then(()=>console.log("[Game] Textures loaded")),h>=1?(clearInterval(u),xs.complete(c.id),d()):xs.update(c.id,h);const m=xs.getProgress();e&&(e.style.width=`${m*100}%`)},c.duration/18)});clearInterval(l),await Er.loadAllGenerated(),await this.world.buildDistrict(),this.playerController.setColliders(this.world.colliders),this.cameraSystem.setColliders(this.world.colliders),this.renderer.scene.add(this.playerCharacter.group),this.weaponSystem.addWeapon("m9_tactical"),this.weaponSystem.addWeapon("vec_9"),this.updateWeaponMesh(),this.spawnEnemies(),this.setupSecurity(),this.setupInteractables(),setTimeout(()=>{n&&(n.style.opacity="0",setTimeout(()=>n.style.display="none",600)),this.ui.showMenu(),ot.setMusicState("exploration"),localStorage.getItem("bv_launcher_shown")||setTimeout(()=>{this.ui.showNotification("💡 TIP: Use Black-Veil.bat (Windows) or Black-Veil.sh (Linux/Mac) or node launch.mjs for one-click launch",5e3),localStorage.setItem("bv_launcher_shown","1")},1e3)},600)}updateWeaponMesh(){const e=this.playerCharacter.getWeaponSocket();for(;e.children.length;)e.remove(e.children[0]);const t=this.weaponSystem.getCurrent();t&&(t.mesh.position.set(0,0,0),t.mesh.rotation.set(0,0,0),t.config.category==="pistol"?(t.mesh.position.set(.05,-.05,.15),t.mesh.rotation.y=-.1):t.config.category==="smg"||t.config.category==="rifle"?(t.mesh.position.set(.08,-.08,.25),t.mesh.rotation.y=-.05):t.config.category==="sniper"?t.mesh.position.set(.1,-.1,.4):t.config.category==="shotgun"?t.mesh.position.set(.08,-.08,.3):t.config.category==="melee"&&(t.mesh.position.set(.15,-.1,.1),t.mesh.rotation.z=-.5),e.add(t.mesh))}spawnEnemies(){const e=[{x:-8,z:-58,type:"security"},{x:14,z:-52,type:"scout"},{x:-22,z:-22,type:"security"},{x:32,z:-32,type:"heavy"},{x:52,z:-12,type:"security"},{x:62,z:-28,type:"hunter"},{x:-38,z:38,type:"scout"},{x:12,z:52,type:"commander"},{x:2,z:72,type:"sniper"},{x:-18,z:-48,type:"hunter"},{x:48,z:-38,type:"security"},{x:-50,z:-30,type:"scout"}];for(const t of e){const n=lm.find(o=>o.id===t.type),i=new sm(n),r=new am(i,n,new M(t.x,0,t.z));this.enemies.push(r),this.aiDirector.addEnemy(r),this.renderer.scene.add(i.group)}}setupSecurity(){this.securitySystem.addCamera(new M(5,5,55),new Qt(0,Math.PI,0),"cam_corp_1"),this.securitySystem.addCamera(new M(5,8,75),new Qt(-.2,0,0),"cam_corp_2"),this.securitySystem.addCamera(new M(58,5,-8),new Qt(0,-Math.PI/2,0),"cam_ind_1"),this.securitySystem.addCamera(new M(42,5,-18),new Qt(0,Math.PI/2,0),"cam_ind_2"),this.securitySystem.addCamera(new M(0,5,-75),new Qt(0,0,0),"cam_checkpoint"),this.securitySystem.addTerminal(new M(6,0,58),["cam_corp_1","cam_corp_2"],"term_corp"),this.securitySystem.addTerminal(new M(54,0,-6),["cam_ind_1","cam_ind_2"],"term_ind"),this.securitySystem.addTerminal(new M(2,0,-78),["cam_checkpoint"],"term_checkpoint");for(const e of this.securitySystem.getTerminals())this.interactables.push({pos:e.position.clone(),type:"security_terminal",id:e.id,mesh:e.mesh,data:e})}setupInteractables(){const e=(n,i,r,o,a=.6)=>{const l=new ge(.9,1.3,.7),c=new Se({color:r==="terminal"?58879:r==="door"?9071162:r==="safehouse"?16755268:5111706,emissive:r==="terminal"?43775:r==="safehouse"?16755268:0,emissiveIntensity:r==="terminal"||r==="safehouse"?.35:0}),d=new q(l,c);d.position.set(n,a,i),d.castShadow=!0,this.renderer.scene.add(d),this.interactables.push({pos:new M(n,0,i),type:r,id:o,mesh:d})};e(0,-82,"checkpoint","reach_checkpoint"),e(58,-4,"terminal","restore_power"),e(54,-4,"terminal","restore_power"),e(58,-1,"breaker","restore_power"),e(-38,24,"door","infiltrate_building"),e(-36,26,"loot","recover_logs"),e(-58,15,"safehouse","safehouse_hub",.6);const t=(n,i,r,o=.15)=>{const a=new ge(.55,.35,.45);let l=16755200;r==="intel"&&(l=58879),r==="cache"&&(l=65416),r==="med"&&(l=16731498);const c=new Se({color:l,emissive:l,emissiveIntensity:.25}),d=new q(a,c);d.position.set(n,o,i),d.castShadow=!0,d.userData.baseY=o,this.renderer.scene.add(d),this.loot.push({pos:new M(n,0,i),type:r,mesh:d})};t(-12,-62,"intel"),t(7,-42,"intel"),t(-28,-18,"intel"),t(42,-18,"ammo"),t(-48,-78,"cache"),t(-56,13,"intel"),t(10,68,"intel"),t(35,-35,"med"),t(-22,-70,"ammo"),t(62,-10,"intel")}startGame(){if(this.isGameStarted){this.isRunning=!0,this.clock.start(),this.animate(),this.touchControls.setVisible(!0),this.ui.showHUD();return}this.isGameStarted=!0,this.isRunning=!0,this.touchControls.setVisible(!0),this.clock.start(),this.animate(),console.log("[Game] Started — BLACK VEIL v1.0.0"),localStorage.getItem("bv_intro_played")||setTimeout(()=>{fi.startDialogue("intro_kael"),localStorage.setItem("bv_intro_played","1")},1500),_t.discoverDistrict("central")}togglePhotoMode(){if(this.photoMode=!this.photoMode,this.photoMode){this.ui.showNotification("📷 PHOTO MODE — Press P to exit, Hide UI, Move camera",3e3);const e=document.querySelector(".bv-hud");e&&(e.style.display="none");const t=document.getElementById("touch-controls");t&&(t.style.display="none")}else{this.ui.showNotification("📷 Photo Mode OFF",2e3);const e=document.querySelector(".bv-hud");e&&(e.style.display="block");const t=document.getElementById("touch-controls");t&&(t.style.display="block"),this.ui.showHUD()}}tryInteract(){const e=this.playerController.getPosition(),t=this.securitySystem.getNearestTerminal(e,4);if(t&&this.securitySystem.hackTerminal(t.id)){ot.playProceduralSound("terminal"),this.ui.showNotification(`SECURITY DISABLED — ${t.controls.length} cameras offline`,3e3),Lt.updateObjective("disable_security"),_t.updateProgress("explorer",1),this.vfxSystem.spawn({type:"spark",position:t.position.clone().add(new M(0,.8,0)),color:65416,scale:1.2,lifetime:.8});return}for(const n of[...this.interactables])if(e.distanceTo(n.pos)<3.2){if(console.log(`[Interact] ${n.type} ${n.id}`),ot.playProceduralSound("terminal"),Lt.updateObjective(n.id),n.type==="safehouse"){const r=this.world.safehouse?.interactWithStation("weapons")||"SAFEHOUSE — Welcome back, operative";this.ui.showNotification(r,3e3),this.playerController.heal(30),xt.save({player:{health:this.playerController.stats.health}}),this.vfxSystem.spawn({type:"dust",position:n.pos.clone().add(new M(0,.5,0)),color:16755302,scale:1.5,lifetime:1});break}if(this.ui.showNotification(`INTERACTED: ${n.type.toUpperCase()}`,2e3),n.type==="terminal"||n.type==="breaker"){const r=n.mesh.material;r.color.setHex(5111706),r.emissive.setHex(5111706),r.emissiveIntensity=.6,this.vfxSystem.spawnMuzzleFlash(n.pos.clone().add(new M(0,.8,0)),new M(0,1,0)),setTimeout(()=>{this.renderer.scene.remove(n.mesh),this.interactables=this.interactables.filter(o=>o!==n)},600)}(n.type==="loot"||n.id==="recover_logs")&&(this.weaponSystem.addWeapon("ar_41"),this.updateWeaponMesh(),xt.save({progression:{currency:150}}),fi.startDialogue("helix_logs"),this.vfxSystem.spawn({type:"impact",position:n.pos.clone(),color:58879,scale:1.5,lifetime:.5}));break}for(const n of[...this.loot])if(e.distanceTo(n.pos)<2.2){this.renderer.scene.remove(n.mesh),this.loot=this.loot.filter(r=>r!==n),this.vfxSystem.spawn({type:"dust",position:n.pos.clone().add(new M(0,.3,0)),color:16755200,scale:1,lifetime:.8}),n.type==="ammo"?(this.weaponSystem.addAmmo("rifle",35),this.ui.showNotification("AMMO +35",2e3)):n.type==="intel"?(Lt.updateObjective("collect_intel"),_t.addIntel(),this.ui.showNotification("INTEL COLLECTED — Truth about Blackout",2500),_t.getStats().intelCollected>=3&&(this.weaponSystem.addWeapon("sg_breach"),this.updateWeaponMesh())):n.type==="cache"?(this.weaponSystem.addWeapon("sr_phantom"),this.updateWeaponMesh(),_t.findHiddenCache(),this.ui.showNotification("🏆 HIDDEN CACHE: PHANTOM SR UNLOCKED + Secret Intel",4e3)):n.type==="med"&&(this.playerController.heal(40),this.ui.showNotification("MEDKIT +40 HP",2e3)),ot.playProceduralSound("ui_click");break}}checkInteractionPrompt(){const e=this.playerController.getPosition(),t=this.securitySystem.getNearestTerminal(e,4);if(t)return`HACK ${t.id.toUpperCase()}`;for(const n of this.interactables)if(e.distanceTo(n.pos)<3.2)return n.type==="safehouse"?"ENTER SAFEHOUSE":n.type.toUpperCase();for(const n of this.loot)if(e.distanceTo(n.pos)<2.2)return`COLLECT ${n.type.toUpperCase()}`;return null}handleShooting(e){const t=this.input.state.fire&&this.weaponSystem.canFire();if(t){const n=this.playerController.getPosition().clone();n.y+=1.45;const i=new M(0,0,-1).applyAxisAngle(new M(0,1,0),this.playerController.yaw);i.y+=this.playerController.pitch*.15;const r=this.weaponSystem.getSpread();i.x+=(Math.random()-.5)*r,i.y+=(Math.random()-.5)*r,i.z+=(Math.random()-.5)*r,i.normalize();const o=this.weaponSystem.fire(n,i);if(o){this.cameraSystem.addShake(o.damage*.006,7),this.vfxSystem.spawnMuzzleFlash(n.clone().add(i.clone().multiplyScalar(.8)),i.clone()),this.raycaster.set(n,i);const a=this.weaponSystem.getCurrent();let l=!1;for(const c of[...this.enemies]){const d=c.character.getPosition(),u=d.clone().sub(n).dot(i);if(u>0&&u<a.config.range){const m=n.clone().add(i.clone().multiplyScalar(u));if(m.distanceTo(d.clone().add(new M(0,1,0)))<.85){const v=d.clone().add(new M(0,1.55,0)),f=m.distanceTo(v)<.35,p=c.character.takeDamage(o.damage,f);this.vfxSystem.spawnImpact(m,i.clone().multiplyScalar(-1),"flesh"),p?(this.renderer.scene.remove(c.character.group),this.aiDirector.removeEnemy(c),this.enemies=this.enemies.filter(S=>S!==c),Lt.updateObjective("defend_position"),_t.addKill(f),this.ui.showNotification(f?"💀 HEADSHOT":"ENEMY DOWN",1500),xt.save({progression:{xp:f?75:50}}),this.vfxSystem.spawn({type:"blood",position:d.clone().add(new M(0,1,0)),color:16720418,scale:1.5,lifetime:.8})):this.ui.showNotification(f?"HEADSHOT!":"HIT",600),l=!0;break}}}if(!l){n.clone().add(i.clone().multiplyScalar(a.config.range*.6));for(const c of this.world.colliders){const d=c.getCenter(new M),u=d.clone().sub(n).dot(i);if(u>0&&u<a.config.range){const m=n.clone().add(i.clone().multiplyScalar(u));if(c.containsPoint(m)){const g=m.clone().sub(d).normalize();this.vfxSystem.spawnImpact(m,g,"concrete"),l=!0;break}}}if(!l){const c=n.clone().add(i.clone().multiplyScalar(12));this.vfxSystem.spawn({type:"dust",position:c,color:6710886,scale:.5,lifetime:.4})}}}}if(this.input.state.reload&&this.weaponSystem.startReload()&&this.ui.showNotification("RELOADING...",1e3),this.input.state.switchWeapon!==0){this.weaponSystem.switchWeapon(this.input.state.switchWeapon),this.updateWeaponMesh();const n=this.weaponSystem.getCurrent();n&&this.ui.showNotification(`EQUIPPED: ${n.config.name}`,1500)}this.lastShootState=t}updateStealthState(){const e=this.aiDirector.getCombatCount(),t=this.enemies.length>0?Math.max(0,...this.enemies.map(r=>r.getDetectionLevel())):0,n=this.securitySystem.getAlarmLevel();let i="HIDDEN";e>0||n==="reinforcements"||n==="lockdown"?i="COMBAT":t>.7||n==="alert"?i="DETECTED":t>.3||n==="suspicious"?i="SUSPICIOUS":i="HIDDEN",i!==this.stealthState&&(this.stealthState=i,i==="COMBAT"?ot.setMusicState("combat"):i==="DETECTED"?ot.setMusicState("tension"):i==="SUSPICIOUS"?ot.setMusicState("stealth"):ot.setMusicState("exploration"))}updateMissions(){const e=this.playerController.getPosition(),t=Lt.getObjectiveByPos({x:e.x,y:e.y,z:e.z},5.5);if(t){Lt.updateObjective(t.id),this.ui.showNotification(`OBJECTIVE: ${t.title}`,2500);const n=this.world.getDistrictAt(e);n&&_t.discoverDistrict(n.id)}}updateLootAnimation(e){const t=performance.now()*.001;for(const n of this.loot)n.mesh.position.y=n.mesh.userData.baseY+Math.sin(t*2+n.pos.x)*.15,n.mesh.rotation.y+=e*.8}dispose(){this.isRunning=!1,this.renderer.dispose(),this.world.dispose(),this.vfxSystem.clear()}}const pr={kael:{id:"kael",name:"Kael",nameAr:"كايل",faction:"ASHEN",role:"Ashen Operative, Mara's brother",roleAr:"عميل آشن، أخو مارا",personality:"Gruff, tired, survivor guilt, protective, distrusts Helix, smokes, coughs",personalityAr:"خشن، متعب، ذنب الناجي، حمائي، لا يثق بهيليكس",voice:{pitch:.8,rate:.88,lang:"en-US",style:"Gruff, low, tired, slight cough, survivor accent",styleAr:"خشن، منخفض، متعب، سعال خفيف",emotion:"weary but hopeful"},backstory:"Ex-Helix security who joined Ashen after Blackout. Mara's brother. Knows Tower layout. Lost leg, prosthetic. Blames himself for Mara missing.",backstoryAr:"أمن هيليكس سابق انضم لآشن بعد الانقطاع. أخو مارا. يعرف مخطط البرج. فقد ساقه.",speaks:["en","ar"],isAlive:!0,relationship:10,skin:"scout",iconSvg:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'},mara:{id:"mara",name:"Mara",nameAr:"مارا",faction:"NONE",role:"Investigative Journalist, Kael's sister",roleAr:"صحفية استقصائية، أخت كايل",personality:"Young, determined, idealistic, glitchy recordings, brave, curious, leaves puzzles",personalityAr:"شابة، مصممة، مثالية، تسجيلات متقطعة، شجاعة، فضولية",voice:{pitch:1.25,rate:1.05,lang:"en-US",style:"Young female, determined, glitchy, static, echo, recorded",styleAr:"شابة، مصممة، متقطعة، صدى، مسجلة",emotion:"determined but scared"},backstory:"Journalist who uncovered BLACK VEIL. Infiltrated Helix Tower Level 23 Server Room Delta. Missing 3 months. Leaves audio logs. Knows truth about population extraction.",backstoryAr:"صحفية كشفت الحجاب الأسود. تسللت للمستوى 23. مفقودة 3 أشهر. تترك سجلات صوتية.",speaks:["en","ar","fr"],isAlive:!1,relationship:30,skin:"player",iconSvg:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>'},helix_commander:{id:"helix_commander",name:"Director Kline",nameAr:"المدير كلاين",faction:"HELIX",role:"Helix Corp Director, BLACK VEIL architect",roleAr:"مدير هيليكس، مهندس الحجاب الأسود",personality:"Cold, corporate, logical, believes ends justify means, 0.3M optimal, no empathy, precise",personalityAr:"بارد، شركاتي، منطقي، يعتقد الغاية تبرر الوسيلة، 0.3 مليون مثالي",voice:{pitch:.65,rate:.82,lang:"en-US",style:"Cold corporate, low, precise, no emotion, filtered, authoritative",styleAr:"بارد شركاتي، منخفض، دقيق، بلا عاطفة، مفلتر، سلطوي",emotion:"cold, calculating"},backstory:"Architect of BLACK VEIL. Ordered 17-minute blackout. Population 2.1M to 0.3M extraction. Believes city is experiment. Has daughter in 0.3M.",backstoryAr:"مهندس الحجاب الأسود. أمر بانقطاع 17 دقيقة. السكان 2.1 مليون إلى 0.3 مليون استخراج.",speaks:["en","de"],isAlive:!0,relationship:-50,skin:"commander",iconSvg:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'},ashen_leader:{id:"ashen_leader",name:"Rami",nameAr:"رامي",faction:"ASHEN",role:"Ashen Leader, Safehouse keeper",roleAr:"قائد آشن، حارس الملجأ",personality:"Warm, Egyptian accent, wise, father figure, jokes, makes tea, remembers old Veyra",personalityAr:"دافئ، لهجة مصرية، حكيم، أب، يمزح، يعمل شاي، يتذكر فيرا القديمة",voice:{pitch:.95,rate:.92,lang:"ar-EG",style:"Warm Egyptian Arabic, wise, fatherly, slight laugh, tea sipping",styleAr:"دافئ مصري، حكيم، أبوي، ضحكة خفيفة",emotion:"warm, hopeful, tired"},backstory:"Old Veyra resident, 68. Runs safehouse at -58,15. Ex-teacher. Lost family in Blackout. Keeps Ashen together. Makes best tea in Sector 7.",backstoryAr:"ساكن فيرا قديم، 68 سنة. يدير الملجأ. مدرس سابق. فقد عائلته في الانقطاع.",speaks:["ar","en","ar-EG"],isAlive:!0,relationship:40,skin:"security",iconSvg:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'},veil_specter:{id:"veil_specter",name:"Veil",nameAr:"الحجاب",faction:"VEIL",role:"Unknown entity, maybe AI, maybe ghost",roleAr:"كيان مجهول، ربما ذكاء اصطناعي، ربما شبح",personality:"Ethereal, whisper, echo, speaks in riddles, knows future, glitchy, appears/disappears",personalityAr:"أثيري، همس، صدى، يتحدث بالألغاز، يعرف المستقبل، متقطع",voice:{pitch:1.5,rate:.65,lang:"en-US",style:"Ethereal female, whisper, echo, reverb, glitch, multiple voices",styleAr:"أثيري أنثوي، همس، صدى، تردد، خلل، أصوات متعددة",emotion:"mysterious, sad, knowing"},backstory:"Unknown. Appears in cameras, mirrors. Maybe Mara? Maybe BLACK VEIL AI? Knows each player different future. Speaks in riddles.",backstoryAr:"مجهول. يظهر في الكاميرات والمرايا. ربما مارا؟ ربما ذكاء الحجاب؟",speaks:["en","ar","ja","ru"],isAlive:!0,relationship:0,skin:"sniper",iconSvg:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>'},vanguard_heavy:{id:"vanguard_heavy",name:"Vanguard",nameAr:"فانجارد",faction:"VANGUARD",role:"Vanguard Heavy, ex-military",roleAr:"فانجارد ثقيل، عسكري سابق",personality:"Heavy, mechanical, filtered voice, follows orders, respects strength, hates Helix",personalityAr:"ثقيل، ميكانيكي، صوت مفلتر، يتبع الأوامر، يحترم القوة، يكره هيليكس",voice:{pitch:.55,rate:.78,lang:"en-US",style:"Heavy male, mechanical filter, low, slow, helmet mic",styleAr:"ثقيل ذكوري، فلتر ميكانيكي، منخفض، بطيء، ميكروفون خوذة",emotion:"stoic, loyal, angry at Helix"},backstory:"Ex-military, joined Vanguard after Blackout. Lost squad. Heavy armor. Hates Helix for abandoning soldiers. Respects player if strong.",backstoryAr:"عسكري سابق، انضم لفانجارد بعد الانقطاع. فقد فرقته. درع ثقيل. يكره هيليكس.",speaks:["en","ru"],isAlive:!0,relationship:-10,skin:"heavy",iconSvg:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'},player:{id:"player",name:"Operative",nameAr:"العميل",faction:"NONE",role:"Player, Mara's contact, truth seeker",roleAr:"اللاعب، جهة اتصال مارا، باحث عن الحقيقة",personality:"Determined by player choices, branching",personalityAr:"مصمم حسب اختيارات اللاعب، متفرع",voice:{pitch:1,rate:1,lang:"en-US",style:"Player voice, determined by player",styleAr:"صوت اللاعب، محدد حسب اللاعب",emotion:"determined"},backstory:"You. Contacted by Mara 3 months ago. Now she missing. You enter Veyra to find truth. Each player different background, different truth.",backstoryAr:"أنت. اتصلت بك مارا قبل 3 أشهر. الآن هي مفقودة. تدخل فيرا لتجد الحقيقة.",speaks:["en","ar","fr","es","de","ru","ja","zh"],isAlive:!0,relationship:100,skin:"player",iconSvg:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'}},Eo={ch1_intro:{id:"ch1_intro",title:"Chapter 1: Ghosts",titleAr:"الفصل 1: أشباح",description:"Veyra went dark 3 years ago. Your sister Mara is missing. Kael contacts you.",descriptionAr:"أظلمت فيرا قبل 3 سنوات. أختك مارا مفقودة. كايل يتصل بك.",characters:["kael","mara"],choices:[{id:"kael_trust",text:"Trust Kael",textAr:"ثق في كايل",consequence:"Kael shows safehouse, +20 Ashen rep",consequenceAr:"كايل يريك الملجأ، +20 سمعة آشن",nextChapter:"ch1_ashen_path",relationshipChange:{kael:20,ashen_leader:10,helix_commander:-5,mara:5,veil_specter:0,vanguard_heavy:0,player:0},unlocks:["safehouse","ashen_weapons"],iconSvg:'<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M20 8v6M23 11v2M17 11v2"/>'},{id:"kael_doubt",text:"Doubt Kael",textAr:"اشك في كايل",consequence:"Go solo, find own path, +10 stealth",consequenceAr:"اذهب منفرداً، +10 تخفي",nextChapter:"ch1_solo_path",relationshipChange:{kael:-15,ashen_leader:-5,helix_commander:0,mara:0,veil_specter:5,vanguard_heavy:0,player:0},unlocks:["solo_weapons","stealth_bonus"],iconSvg:'<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>'}],isBranching:!0,isUniquePerPlayer:!0},ch1_ashen_path:{id:"ch1_ashen_path",title:"Ashen Path",titleAr:"مسار آشن",description:"Kael takes you to safehouse at -58,15. Rami offers tea and truth.",descriptionAr:"كايل يأخذك للملجأ. رامي يقدم الشاي والحقيقة.",characters:["kael","ashen_leader","mara"],choices:[{id:"faction_trust",text:"Trust Ashen",textAr:"ثق في آشن",consequence:"Learn underground routes, unlock Ashen skins",consequenceAr:"تعلم الطرق السرية، افتح سكنات آشن",nextChapter:"ch2_underground",relationshipChange:{kael:10,ashen_leader:20,helix_commander:-10,mara:10,veil_specter:0,vanguard_heavy:5,player:0},unlocks:["underground_map","ashen_skins"],iconSvg:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'},{id:"faction_helix",text:"Infiltrate Helix",textAr:"تسلل لهيليكس",consequence:"Direct assault on Tower, high risk",consequenceAr:"هجوم مباشر على البرج، مخاطرة عالية",nextChapter:"ch2_helix_tower",relationshipChange:{kael:-5,ashen_leader:-10,helix_commander:5,mara:0,veil_specter:0,vanguard_heavy:-5,player:0},unlocks:["helix_keycard","tower_access"],iconSvg:'<rect x="2" y="7" width="20" height="14" rx="2"/>'}],isBranching:!0,isUniquePerPlayer:!0}};class Tm{constructor(){C(this,"currentChapter","ch1_intro");C(this,"playerChoices",{});C(this,"playerId");C(this,"language","en");this.playerId=localStorage.getItem("bv_player_id")||"player_"+Math.random().toString(36).substr(2,9),localStorage.setItem("bv_player_id",this.playerId),this.playerChoices=JSON.parse(localStorage.getItem("bv_story_choices")||"{}"),this.language=localStorage.getItem("bv_language")||"en"}getCurrentChapter(){return Eo[this.currentChapter]||Eo.ch1_intro}makeChoice(e,t){this.playerChoices[e]=t,localStorage.setItem("bv_story_choices",JSON.stringify(this.playerChoices));const i=this.getCurrentChapter().choices.find(r=>r.id===e||r.text===t);if(i){Object.entries(i.relationshipChange).forEach(([o,a])=>{const l=pr[o];l&&(l.relationship=Math.max(-100,Math.min(100,l.relationship+a)))});const r=this.getUniqueNextChapter(i.nextChapter,this.playerId);return this.currentChapter=r,localStorage.setItem("bv_current_chapter",this.currentChapter),console.log(`[Story] Player ${this.playerId} choice ${e}=${t} -> ${r} (unique)`),this.getCurrentChapter()}return null}getUniqueNextChapter(e,t){const n=this.hashString(t+e),i=[e,e+"_alt",e+"_secret"];return Math.abs(n)%10<8?e:i[Math.abs(n)%i.length]||e}hashString(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);t=(t<<5)-t+i,t=t&t}return t}getCharacter(e){return pr[e]}getAllCharacters(){return Object.values(pr)}getPlayerChoices(){return{...this.playerChoices}}getUniqueStoryForPlayer(e){const t=this.playerChoices,n=this.hashString(e+JSON.stringify(t)),i=[{title:"The Truth Seeker",desc:"You chose truth over safety",unique:!0},{title:"The Survivor",desc:"You chose survival over truth",unique:!0},{title:"The Ghost",desc:"You walk unseen, like Veil",unique:!0},{title:"The Ashen",desc:"You became Ashen, family",unique:!1}];return{title:i[Math.abs(n)%i.length].title,description:i[Math.abs(n)%i.length].desc,isUnique:i[Math.abs(n)%i.length].unique}}setLanguage(e){this.language=e,localStorage.setItem("bv_language",e)}getLanguage(){return this.language}}const wo=new Tm;console.log("%c BLACK VEIL v1.2.0 — MULTIPLAYER + AI + STORY ","background:#0a0a0f; color:#6aa6ff; font-size:18px; font-family:monospace; padding:8px 16px; border:1px solid #6aa6ff;");console.log("%c THE CITY FORGOT. YOU DIDN'T. — One-tap mobile, P2P multiplayer, 6 modes, free AI unlimited, each player unique story ","color:#8a8a9a; font-family:monospace;");function To(){const s=document.getElementById("game-canvas");if(!s){console.error("Canvas not found");return}const e={webgl:(()=>{try{const o=document.createElement("canvas");return!!window.WebGL2RenderingContext&&!!o.getContext("webgl2")}catch{return!1}})(),webgpu:"gpu"in navigator,touch:"ontouchstart"in window,storage:(()=>{try{return localStorage.setItem("test","1"),localStorage.removeItem("test"),!0}catch{return!1}})(),fullscreen:!!document.documentElement.requestFullscreen,gamepad:"getGamepads"in navigator,gyro:"DeviceOrientationEvent"in window,webrtc:"RTCPeerConnection"in window,webspeech:"speechSynthesis"in window,vibrate:"vibrate"in navigator,battery:"getBattery"in navigator};if(console.log("[Capabilities]",e),console.log("[AI] Free unlimited models:",mi.getUnlimitedModels().length),console.log("[Multiplayer] P2P supported:",e.webrtc),console.log("[Story] Current chapter:",wo.getCurrentChapter().id,"Player ID:",localStorage.getItem("bv_player_id")),console.log("[GameModes] Available:",zn.getAllModes().length),!e.webgl){const o=document.getElementById("loading-status");o&&(o.textContent="WEBGL2 NOT SUPPORTED - PLEASE USE MODERN BROWSER");return}document.addEventListener("contextmenu",o=>o.preventDefault()),document.addEventListener("touchmove",o=>{o.target.closest("#ui-root, #touch-controls, #multiplayer-ui")||o.preventDefault()},{passive:!1}),document.addEventListener("visibilitychange",()=>{document.hidden&&console.log("[Game] Hidden - pausing")});const t=()=>{const o=document.getElementById("orientation-warning");o&&(window.innerHeight>window.innerWidth&&window.innerWidth<768||(o.style.display="none"))};window.addEventListener("resize",t),t();const n=new wm(s);window.BLACK_VEIL=n,window.BV_SAVE=xt,window.BV_MULTIPLAYER=Yt,window.BV_AI=mi,window.BV_STORY=wo,window.BV_MODES=zn,"serviceWorker"in navigator&&(navigator.serviceWorker.addEventListener("message",o=>{o.data.type==="UPDATE_AVAILABLE"&&console.log("[PWA] Update available")}),navigator.serviceWorker.register("./sw.js").then(o=>{console.log("[PWA] SW registered",o.scope)}).catch(o=>console.log("[PWA] SW failed",o))),Yt.onPlayerUpdate(o=>{console.log("[Multiplayer] Players updated:",o.length),window.dispatchEvent(new CustomEvent("bv:multiplayerPlayers",{detail:o}))}),Yt.onRoomUpdate(o=>{console.log("[Multiplayer] Room updated:",o.id),window.dispatchEvent(new CustomEvent("bv:multiplayerRoom",{detail:o}))}),setTimeout(()=>{window.dispatchEvent(new CustomEvent("bv:gameReady"))},100),window.addEventListener("error",o=>{console.error("[Global Error]",o.error)}),window.addEventListener("unhandledrejection",o=>{console.error("[Unhandled Rejection]",o.reason)}),(location.hostname.includes("wasmer.app")||location.hostname.includes("wasmer"))&&console.log("[Wasmer] Running on Wasmer Edge - static site mode, P2P multiplayer via WebRTC"),/Android|iPhone|iPad/i.test(navigator.userAgent)&&(console.log("[Mobile] One-tap mobile detected - touch + gyro + haptics + PWA"),document.addEventListener("touchend",()=>{try{document.documentElement.requestFullscreen?.()}catch{}},{once:!0})),console.log("[Black Veil] Initialized v1.2.0 - Awaiting player - Multiplayer + AI + Story unique per player")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",To):To();
