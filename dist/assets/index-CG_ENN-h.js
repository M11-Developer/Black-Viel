var jo=Object.defineProperty;var $o=(i,e,t)=>e in i?jo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var I=(i,e,t)=>$o(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fr="160",Ko=0,Rr=1,Jo=2,Zo=0,oo=1,nr=2,an=3,Sn=0,At=1,Wt=2,xn=0,ai=1,Cr=2,Lr=3,Pr=4,Qo=5,Dn=100,ec=101,tc=102,Dr=103,Ir=104,nc=200,ic=201,sc=202,rc=203,ir=204,sr=205,ac=206,oc=207,cc=208,lc=209,hc=210,dc=211,uc=212,fc=213,pc=214,mc=0,gc=1,vc=2,cs=3,_c=4,xc=5,yc=6,Mc=7,co=0,Sc=1,Ec=2,yn=0,bc=1,wc=2,Tc=3,lo=4,Ac=5,Rc=6,ho=300,ci=301,li=302,rr=303,ar=304,gs=306,or=1e3,Xt=1001,cr=1002,wt=1003,Ur=1004,bs=1005,Ot=1006,Cc=1007,Ri=1008,Mn=1009,Lc=1010,Pc=1011,pr=1012,uo=1013,vn=1014,_n=1015,Ci=1016,fo=1017,po=1018,Un=1020,Dc=1021,qt=1023,Ic=1024,Uc=1025,Nn=1026,hi=1027,Nc=1028,mo=1029,Oc=1030,go=1031,vo=1033,ws=33776,Ts=33777,As=33778,Rs=33779,Nr=35840,Or=35841,Fr=35842,Br=35843,_o=36196,zr=37492,kr=37496,Gr=37808,Hr=37809,Vr=37810,Wr=37811,Xr=37812,qr=37813,Yr=37814,jr=37815,$r=37816,Kr=37817,Jr=37818,Zr=37819,Qr=37820,ea=37821,Cs=36492,ta=36494,na=36495,Fc=36283,ia=36284,sa=36285,ra=36286,xo=3e3,On=3001,Bc=3200,zc=3201,yo=0,kc=1,Ft="",pt="srgb",ln="srgb-linear",mr="display-p3",vs="display-p3-linear",ls="linear",et="srgb",hs="rec709",ds="p3",kn=7680,aa=519,Gc=512,Hc=513,Vc=514,Mo=515,Wc=516,Xc=517,qc=518,Yc=519,oa=35044,ca="300 es",lr=1035,on=2e3,us=2001;class ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let la=1234567;const wi=Math.PI/180,Li=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function gr(i,e){return(i%e+e)%e}function jc(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $c(i,e,t){return i!==e?(t-i)/(e-i):0}function Ti(i,e,t){return(1-t)*i+t*e}function Kc(i,e,t,n){return Ti(i,e,1-Math.exp(-t*n))}function Jc(i,e=1){return e-Math.abs(gr(i,e*2)-e)}function Zc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function el(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tl(i,e){return i+Math.random()*(e-i)}function nl(i){return i*(.5-Math.random())}function il(i){i!==void 0&&(la=i);let e=la+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sl(i){return i*wi}function rl(i){return i*Li}function hr(i){return(i&i-1)===0&&i!==0}function al(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ol(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),p=o((e-n)/2),m=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*v,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*v,a*l);break;case"ZYZ":i.set(c*v,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const cn={DEG2RAD:wi,RAD2DEG:Li,generateUUID:fi,clamp:Tt,euclideanModulo:gr,mapLinear:jc,inverseLerp:$c,lerp:Ti,damp:Kc,pingpong:Jc,smoothstep:Zc,smootherstep:Qc,randInt:el,randFloat:tl,randFloatSpread:nl,seededRandom:il,degToRad:sl,radToDeg:rl,isPowerOfTwo:hr,ceilPowerOfTwo:al,floorPowerOfTwo:fs,setQuaternionFromProperEuler:ol,normalize:St,denormalize:ii};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,s,r,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],m=n[5],v=n[8],g=s[0],f=s[3],d=s[6],E=s[1],M=s[4],w=s[7],P=s[2],R=s[5],A=s[8];return r[0]=o*g+a*E+c*P,r[3]=o*f+a*M+c*R,r[6]=o*d+a*w+c*A,r[1]=l*g+h*E+u*P,r[4]=l*f+h*M+u*R,r[7]=l*d+h*w+u*A,r[2]=p*g+m*E+v*P,r[5]=p*f+m*M+v*R,r[8]=p*d+m*w+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,p=a*c-h*r,m=l*r-o*c,v=t*u+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=u*g,e[1]=(s*l-h*n)*g,e[2]=(a*n-s*o)*g,e[3]=p*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ls.makeScale(e,t)),this}rotate(e){return this.premultiply(Ls.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new ke;function So(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cl(){const i=ps("canvas");return i.style.display="block",i}const ha={};function Ai(i){i in ha||(ha[i]=!0,console.warn(i))}const da=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ua=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fi={[ln]:{transfer:ls,primaries:hs,toReference:i=>i,fromReference:i=>i},[pt]:{transfer:et,primaries:hs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vs]:{transfer:ls,primaries:ds,toReference:i=>i.applyMatrix3(ua),fromReference:i=>i.applyMatrix3(da)},[mr]:{transfer:et,primaries:ds,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ua),fromReference:i=>i.applyMatrix3(da).convertLinearToSRGB()}},ll=new Set([ln,vs]),$e={enabled:!0,_workingColorSpace:ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ll.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Fi[e].toReference,s=Fi[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Fi[i].primaries},getTransfer:function(i){return i===Ft?ls:Fi[i].transfer}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class Eo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=ps("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hl=0;class bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ds(s[o].image)):r.push(Ds(s[o]))}else r=Ds(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ds(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dl=0;class Rt extends ui{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Xt,s=Xt,r=Ot,o=Ri,a=qt,c=Mn,l=Rt.DEFAULT_ANISOTROPY,h=Ft){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dl++}),this.uuid=fi(),this.name="",this.source=new bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===On?pt:Ft),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ho)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?On:xo}set encoding(e){Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===On?pt:Ft}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=ho;Rt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],m=c[5],v=c[9],g=c[2],f=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(v+f)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,w=(m+1)/2,P=(d+1)/2,R=(h+p)/4,A=(u+g)/4,W=(v+f)/4;return M>w&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=A/n):w>P?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=R/s,r=W/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=W/r),this.set(n,s,r,t),this}let E=Math.sqrt((f-v)*(f-v)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(f-v)/E,this.y=(u-g)/E,this.z=(p-h)/E,this.w=Math.acos((l+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ul extends ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ai("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===On?pt:Ft),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wo extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const p=r[o+0],m=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(u!==g||c!==p||l!==m||h!==v){let f=1-a;const d=c*p+l*m+h*v+u*g,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const P=Math.sqrt(M),R=Math.atan2(P,d*E);f=Math.sin(f*R)/P,a=Math.sin(a*R)/P}const w=a*E;if(c=c*f+p*w,l=l*f+m*w,h=h*f+v*w,u=u*f+g*w,f===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+h*u+c*m-l*p,e[t+1]=c*v+h*p+l*u-a*m,e[t+2]=l*v+h*m+a*p-c*u,e[t+3]=h*v-a*u-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),m=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"YXZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"ZXY":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"ZYX":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"YZX":this._x=p*h*u+l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u-p*m*v;break;case"XZY":this._x=p*h*u-l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Is.copy(this).projectOnVector(e),this.sub(Is)}reflect(e){return this.sub(Is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Is=new T,fa=new Pi;class Ke{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zt):zt.fromBufferAttribute(r,o),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(e.matrixWorld),this.union(Bi)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),zi.subVectors(this.max,vi),Hn.subVectors(e.a,vi),Vn.subVectors(e.b,vi),Wn.subVectors(e.c,vi),dn.subVectors(Vn,Hn),un.subVectors(Wn,Vn),wn.subVectors(Hn,Wn);let t=[0,-dn.z,dn.y,0,-un.z,un.y,0,-wn.z,wn.y,dn.z,0,-dn.x,un.z,0,-un.x,wn.z,0,-wn.x,-dn.y,dn.x,0,-un.y,un.x,0,-wn.y,wn.x,0];return!Us(t,Hn,Vn,Wn,zi)||(t=[1,0,0,0,1,0,0,0,1],!Us(t,Hn,Vn,Wn,zi))?!1:(ki.crossVectors(dn,un),t=[ki.x,ki.y,ki.z],Us(t,Hn,Vn,Wn,zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new T,new T,new T,new T,new T,new T,new T,new T],zt=new T,Bi=new Ke,Hn=new T,Vn=new T,Wn=new T,dn=new T,un=new T,wn=new T,vi=new T,zi=new T,ki=new T,Tn=new T;function Us(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Tn.fromArray(i,r);const a=s.x*Math.abs(Tn.x)+s.y*Math.abs(Tn.y)+s.z*Math.abs(Tn.z),c=e.dot(Tn),l=t.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const pl=new Ke,_i=new T,Ns=new T;class Di{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pl.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const t=_i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_i,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ns.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(Ns)),this.expandByPoint(_i.copy(e.center).sub(Ns))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new T,Os=new T,Gi=new T,fn=new T,Fs=new T,Hi=new T,Bs=new T;class _s{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Os.copy(e).add(t).multiplyScalar(.5),Gi.copy(t).sub(e).normalize(),fn.copy(this.origin).sub(Os);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Gi),a=fn.dot(this.direction),c=-fn.dot(Gi),l=fn.lengthSq(),h=Math.abs(1-o*o);let u,p,m,v;if(h>0)if(u=o*c-a,p=o*a-c,v=r*h,u>=0)if(p>=-v)if(p<=v){const g=1/h;u*=g,p*=g,m=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p<=-v?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l):p<=v?(u=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Os).addScaledVector(Gi,p),m}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const n=tn.dot(this.direction),s=tn.dot(tn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,n,s,r){Fs.subVectors(t,e),Hi.subVectors(n,e),Bs.crossVectors(Fs,Hi);let o=this.direction.dot(Bs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,e);const c=a*this.direction.dot(Hi.crossVectors(fn,Hi));if(c<0)return null;const l=a*this.direction.dot(Fs.cross(fn));if(l<0||c+l>o)return null;const h=-a*fn.dot(Bs);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,s,r,o,a,c,l,h,u,p,m,v,g,f){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,p,m,v,g,f)}set(e,t,n,s,r,o,a,c,l,h,u,p,m,v,g,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=v,d[11]=g,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Xn.setFromMatrixColumn(e,0).length(),r=1/Xn.setFromMatrixColumn(e,1).length(),o=1/Xn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=o*h,m=o*u,v=a*h,g=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+v*l,t[5]=p-g*l,t[9]=-a*c,t[2]=g-p*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*h,m=c*u,v=l*h,g=l*u;t[0]=p+g*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-v,t[6]=g+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*h,m=c*u,v=l*h,g=l*u;t[0]=p-g*a,t[4]=-o*u,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*h,t[9]=g-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*h,m=o*u,v=a*h,g=a*u;t[0]=c*h,t[4]=v*l-m,t[8]=p*l+g,t[1]=c*u,t[5]=g*l+p,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,m=o*l,v=a*c,g=a*l;t[0]=c*h,t[4]=g-p*u,t[8]=v*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+v,t[10]=p-g*u}else if(e.order==="XZY"){const p=o*c,m=o*l,v=a*c,g=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+g,t[5]=o*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=a*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ml,e,gl)}lookAt(e,t,n){const s=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),pn.crossVectors(n,Lt),pn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),pn.crossVectors(n,Lt)),pn.normalize(),Vi.crossVectors(Lt,pn),s[0]=pn.x,s[4]=Vi.x,s[8]=Lt.x,s[1]=pn.y,s[5]=Vi.y,s[9]=Lt.y,s[2]=pn.z,s[6]=Vi.z,s[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],m=n[13],v=n[2],g=n[6],f=n[10],d=n[14],E=n[3],M=n[7],w=n[11],P=n[15],R=s[0],A=s[4],W=s[8],y=s[12],b=s[1],k=s[5],H=s[9],Z=s[13],L=s[2],U=s[6],G=s[10],Y=s[14],X=s[3],q=s[7],j=s[11],te=s[15];return r[0]=o*R+a*b+c*L+l*X,r[4]=o*A+a*k+c*U+l*q,r[8]=o*W+a*H+c*G+l*j,r[12]=o*y+a*Z+c*Y+l*te,r[1]=h*R+u*b+p*L+m*X,r[5]=h*A+u*k+p*U+m*q,r[9]=h*W+u*H+p*G+m*j,r[13]=h*y+u*Z+p*Y+m*te,r[2]=v*R+g*b+f*L+d*X,r[6]=v*A+g*k+f*U+d*q,r[10]=v*W+g*H+f*G+d*j,r[14]=v*y+g*Z+f*Y+d*te,r[3]=E*R+M*b+w*L+P*X,r[7]=E*A+M*k+w*U+P*q,r[11]=E*W+M*H+w*G+P*j,r[15]=E*y+M*Z+w*Y+P*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],m=e[14],v=e[3],g=e[7],f=e[11],d=e[15];return v*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*m-n*c*m)+g*(+t*c*m-t*l*p+r*o*p-s*o*m+s*l*h-r*c*h)+f*(+t*l*u-t*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*p+s*o*u-n*o*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],m=e[11],v=e[12],g=e[13],f=e[14],d=e[15],E=u*f*l-g*p*l+g*c*m-a*f*m-u*c*d+a*p*d,M=v*p*l-h*f*l-v*c*m+o*f*m+h*c*d-o*p*d,w=h*g*l-v*u*l+v*a*m-o*g*m-h*a*d+o*u*d,P=v*u*c-h*g*c-v*a*p+o*g*p+h*a*f-o*u*f,R=t*E+n*M+s*w+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(g*p*r-u*f*r-g*s*m+n*f*m+u*s*d-n*p*d)*A,e[2]=(a*f*r-g*c*r+g*s*l-n*f*l-a*s*d+n*c*d)*A,e[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*m-n*c*m)*A,e[4]=M*A,e[5]=(h*f*r-v*p*r+v*s*m-t*f*m-h*s*d+t*p*d)*A,e[6]=(v*c*r-o*f*r-v*s*l+t*f*l+o*s*d-t*c*d)*A,e[7]=(o*p*r-h*c*r+h*s*l-t*p*l-o*s*m+t*c*m)*A,e[8]=w*A,e[9]=(v*u*r-h*g*r-v*n*m+t*g*m+h*n*d-t*u*d)*A,e[10]=(o*g*r-v*a*r+v*n*l-t*g*l-o*n*d+t*a*d)*A,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*m-t*a*m)*A,e[12]=P*A,e[13]=(h*g*s-v*u*s+v*n*p-t*g*p-h*n*f+t*u*f)*A,e[14]=(v*a*s-o*g*s-v*n*c+t*g*c+o*n*f-t*a*f)*A,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*p+t*a*p)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,p=r*l,m=r*h,v=r*u,g=o*h,f=o*u,d=a*u,E=c*l,M=c*h,w=c*u,P=n.x,R=n.y,A=n.z;return s[0]=(1-(g+d))*P,s[1]=(m+w)*P,s[2]=(v-M)*P,s[3]=0,s[4]=(m-w)*R,s[5]=(1-(p+d))*R,s[6]=(f+E)*R,s[7]=0,s[8]=(v+M)*A,s[9]=(f-E)*A,s[10]=(1-(p+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Xn.set(s[0],s[1],s[2]).length();const o=Xn.set(s[4],s[5],s[6]).length(),a=Xn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kt.copy(this);const l=1/r,h=1/o,u=1/a;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=h,kt.elements[5]*=h,kt.elements[6]*=h,kt.elements[8]*=u,kt.elements[9]*=u,kt.elements[10]*=u,t.setFromRotationMatrix(kt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=on){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s);let m,v;if(a===on)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===us)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=on){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),p=(t+e)*l,m=(n+s)*h;let v,g;if(a===on)v=(o+r)*u,g=-2*u;else if(a===us)v=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xn=new T,kt=new tt,ml=new T(0,0,0),gl=new T(1,1,1),pn=new T,Vi=new T,Lt=new T,pa=new tt,ma=new Pi;class pi{constructor(e=0,t=0,n=0,s=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ma.setFromEuler(this),this.setFromQuaternion(ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class vr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vl=0;const ga=new T,qn=new Pi,nn=new tt,Wi=new T,xi=new T,_l=new T,xl=new Pi,va=new T(1,0,0),_a=new T(0,1,0),xa=new T(0,0,1),yl={type:"added"},Ml={type:"removed"};class _t extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vl++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new T,t=new pi,n=new Pi,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new ke}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(va,e)}rotateY(e){return this.rotateOnAxis(_a,e)}rotateZ(e){return this.rotateOnAxis(xa,e)}translateOnAxis(e,t){return ga.copy(e).applyQuaternion(this.quaternion),this.position.add(ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(va,e)}translateY(e){return this.translateOnAxis(_a,e)}translateZ(e){return this.translateOnAxis(xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wi.copy(e):Wi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(xi,Wi,this.up):nn.lookAt(Wi,xi,this.up),this.quaternion.setFromRotationMatrix(nn),s&&(nn.extractRotation(s.matrixWorld),qn.setFromRotationMatrix(nn),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ml)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,_l),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,xl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}_t.DEFAULT_UP=new T(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new T,sn=new T,zs=new T,rn=new T,Yn=new T,jn=new T,ya=new T,ks=new T,Gs=new T,Hs=new T;let Xi=!1;class Ht{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gt.subVectors(e,t),s.cross(Gt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gt.subVectors(s,t),sn.subVectors(n,t),zs.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(sn),c=Gt.dot(zs),l=sn.dot(sn),h=sn.dot(zs),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(l*c-a*h)*p,v=(o*h-a*c)*p;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(e,t,n,s,r,o,a,c){return Xi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xi=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,rn.x),c.addScaledVector(o,rn.y),c.addScaledVector(a,rn.z),c)}static isFrontFacing(e,t,n,s){return Gt.subVectors(n,t),sn.subVectors(e,t),Gt.cross(sn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Gt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Xi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xi=!0),Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Yn.subVectors(s,n),jn.subVectors(r,n),ks.subVectors(e,n);const c=Yn.dot(ks),l=jn.dot(ks);if(c<=0&&l<=0)return t.copy(n);Gs.subVectors(e,s);const h=Yn.dot(Gs),u=jn.dot(Gs);if(h>=0&&u<=h)return t.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Yn,o);Hs.subVectors(e,r);const m=Yn.dot(Hs),v=jn.dot(Hs);if(v>=0&&m<=v)return t.copy(r);const g=m*l-c*v;if(g<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(jn,a);const f=h*v-m*u;if(f<=0&&u-h>=0&&m-v>=0)return ya.subVectors(r,s),a=(u-h)/(u-h+(m-v)),t.copy(s).addScaledVector(ya,a);const d=1/(f+g+p);return o=g*d,a=p*d,t.copy(n).addScaledVector(Yn,o).addScaledVector(jn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const To={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Vs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=gr(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vs(o,r,e+1/3),this.g=Vs(o,r,e),this.b=Vs(o,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=To[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return $e.fromWorkingColorSpace(vt.copy(this),e),Math.round(Tt(vt.r*255,0,255))*65536+Math.round(Tt(vt.g*255,0,255))*256+Math.round(Tt(vt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,s=vt.g,r=vt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=pt){$e.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,s=vt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mn),this.setHSL(mn.h+e,mn.s+t,mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(qi);const n=Ti(mn.h,qi.h,t),s=Ti(mn.s,qi.s,t),r=Ti(mn.l,qi.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ve;Ve.NAMES=To;let Sl=0;class Ii extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=ai,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ir,this.blendDst=sr,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ir&&(n.blendSrc=this.blendSrc),this.blendDst!==sr&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ui extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new T,Yi=new Ge;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yi.fromBufferAttribute(this,t),Yi.applyMatrix3(e),this.setXY(t,Yi.x,Yi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oa&&(e.usage=this.usage),e}}class Ao extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ro extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let El=0;const Nt=new tt,Ws=new _t,$n=new T,Pt=new Ke,yi=new Ke,ft=new T;class hn extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:El++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(So(e)?Ro:Ao)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Ws.lookAt(e),Ws.updateMatrix(),this.applyMatrix4(Ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ke);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Pt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];yi.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Pt.min,yi.min),Pt.expandByPoint(ft),ft.addVectors(Pt.max,yi.max),Pt.expandByPoint(ft)):(Pt.expandByPoint(yi.min),Pt.expandByPoint(yi.max))}Pt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ft.fromBufferAttribute(a,l),c&&($n.fromBufferAttribute(e,l),ft.add($n)),s=Math.max(s,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new T,h[b]=new T;const u=new T,p=new T,m=new T,v=new Ge,g=new Ge,f=new Ge,d=new T,E=new T;function M(b,k,H){u.fromArray(s,b*3),p.fromArray(s,k*3),m.fromArray(s,H*3),v.fromArray(o,b*2),g.fromArray(o,k*2),f.fromArray(o,H*2),p.sub(u),m.sub(u),g.sub(v),f.sub(v);const Z=1/(g.x*f.y-f.x*g.y);isFinite(Z)&&(d.copy(p).multiplyScalar(f.y).addScaledVector(m,-g.y).multiplyScalar(Z),E.copy(m).multiplyScalar(g.x).addScaledVector(p,-f.x).multiplyScalar(Z),l[b].add(d),l[k].add(d),l[H].add(d),h[b].add(E),h[k].add(E),h[H].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let b=0,k=w.length;b<k;++b){const H=w[b],Z=H.start,L=H.count;for(let U=Z,G=Z+L;U<G;U+=3)M(n[U+0],n[U+1],n[U+2])}const P=new T,R=new T,A=new T,W=new T;function y(b){A.fromArray(r,b*3),W.copy(A);const k=l[b];P.copy(k),P.sub(A.multiplyScalar(A.dot(k))).normalize(),R.crossVectors(W,k);const Z=R.dot(h[b])<0?-1:1;c[b*4]=P.x,c[b*4+1]=P.y,c[b*4+2]=P.z,c[b*4+3]=Z}for(let b=0,k=w.length;b<k;++b){const H=w[b],Z=H.start,L=H.count;for(let U=Z,G=Z+L;U<G;U+=3)y(n[U+0]),y(n[U+1]),y(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),g=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h);let m=0,v=0;for(let g=0,f=c.length;g<f;g++){a.isInterleavedBufferAttribute?m=c[g]*a.data.stride+a.offset:m=c[g]*h;for(let d=0;d<h;d++)p[v++]=l[m++]}return new Yt(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const p=l[h],m=e(p,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ma=new tt,An=new _s,ji=new Di,Sa=new T,Kn=new T,Jn=new T,Zn=new T,Xs=new T,$i=new T,Ki=new Ge,Ji=new Ge,Zi=new Ge,Ea=new T,ba=new T,wa=new T,Qi=new T,es=new T;class he extends _t{constructor(e=new hn,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$i.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Xs.fromBufferAttribute(u,e),o?$i.addScaledVector(Xs,h):$i.addScaledVector(Xs.sub(t),h))}t.add($i)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),An.copy(e.ray).recast(e.near),!(ji.containsPoint(An.origin)===!1&&(An.intersectSphere(ji,Sa)===null||An.origin.distanceToSquared(Sa)>(e.far-e.near)**2))&&(Ma.copy(r).invert(),An.copy(e.ray).applyMatrix4(Ma),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const f=p[v],d=o[f.materialIndex],E=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let w=E,P=M;w<P;w+=3){const R=a.getX(w),A=a.getX(w+1),W=a.getX(w+2);s=ts(this,d,e,n,l,h,u,R,A,W),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let f=v,d=g;f<d;f+=3){const E=a.getX(f),M=a.getX(f+1),w=a.getX(f+2);s=ts(this,o,e,n,l,h,u,E,M,w),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,g=p.length;v<g;v++){const f=p[v],d=o[f.materialIndex],E=Math.max(f.start,m.start),M=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let w=E,P=M;w<P;w+=3){const R=w,A=w+1,W=w+2;s=ts(this,d,e,n,l,h,u,R,A,W),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let f=v,d=g;f<d;f+=3){const E=f,M=f+1,w=f+2;s=ts(this,o,e,n,l,h,u,E,M,w),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function bl(i,e,t,n,s,r,o,a){let c;if(e.side===At?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Sn,a),c===null)return null;es.copy(a),es.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(es);return l<t.near||l>t.far?null:{distance:l,point:es.clone(),object:i}}function ts(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Kn),i.getVertexPosition(c,Jn),i.getVertexPosition(l,Zn);const h=bl(i,e,t,n,Kn,Jn,Zn,Qi);if(h){s&&(Ki.fromBufferAttribute(s,a),Ji.fromBufferAttribute(s,c),Zi.fromBufferAttribute(s,l),h.uv=Ht.getInterpolation(Qi,Kn,Jn,Zn,Ki,Ji,Zi,new Ge)),r&&(Ki.fromBufferAttribute(r,a),Ji.fromBufferAttribute(r,c),Zi.fromBufferAttribute(r,l),h.uv1=Ht.getInterpolation(Qi,Kn,Jn,Zn,Ki,Ji,Zi,new Ge),h.uv2=h.uv1),o&&(Ea.fromBufferAttribute(o,a),ba.fromBufferAttribute(o,c),wa.fromBufferAttribute(o,l),h.normal=Ht.getInterpolation(Qi,Kn,Jn,Zn,Ea,ba,wa,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new T,materialIndex:0};Ht.getNormal(Kn,Jn,Zn,u.normal),h.face=u}return h}class Ue extends hn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let p=0,m=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function v(g,f,d,E,M,w,P,R,A,W,y){const b=w/A,k=P/W,H=w/2,Z=P/2,L=R/2,U=A+1,G=W+1;let Y=0,X=0;const q=new T;for(let j=0;j<G;j++){const te=j*k-Z;for(let ne=0;ne<U;ne++){const V=ne*b-H;q[g]=V*E,q[f]=te*M,q[d]=L,l.push(q.x,q.y,q.z),q[g]=0,q[f]=0,q[d]=R>0?1:-1,h.push(q.x,q.y,q.z),u.push(ne/A),u.push(1-j/W),Y+=1}}for(let j=0;j<W;j++)for(let te=0;te<A;te++){const ne=p+te+U*j,V=p+te+U*(j+1),$=p+(te+1)+U*(j+1),ce=p+(te+1)+U*j;c.push(ne,V,ce),c.push(V,$,ce),X+=6}a.addGroup(m,X,y),m+=X,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ue(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=di(i[t]);for(const s in n)e[s]=n[s]}return e}function wl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Co(i){return i.getRenderTarget()===null?i.outputColorSpace:$e.workingColorSpace}const Tl={clone:di,merge:Et};var Al=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Al,this.fragmentShader=Rl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=wl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lo extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=on}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Lo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Li*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qn=-90,ei=1;class Cl extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dt(Qn,ei,e,t);s.layers=this.layers,this.add(s);const r=new Dt(Qn,ei,e,t);r.layers=this.layers,this.add(r);const o=new Dt(Qn,ei,e,t);o.layers=this.layers,this.add(o);const a=new Dt(Qn,ei,e,t);a.layers=this.layers,this.add(a);const c=new Dt(Qn,ei,e,t);c.layers=this.layers,this.add(c);const l=new Dt(Qn,ei,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Po extends Rt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ll extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ai("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===On?pt:Ft),this.texture=new Po(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:xn});r.uniforms.tEquirect.value=t;const o=new he(s,r),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Ot),new Cl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const qs=new T,Pl=new T,Dl=new ke;class Ln{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=qs.subVectors(n,t).cross(Pl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dl.getNormalMatrix(e),s=this.coplanarPoint(qs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Di,ns=new T;class _r{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],m=s[8],v=s[9],g=s[10],f=s[11],d=s[12],E=s[13],M=s[14],w=s[15];if(n[0].setComponents(c-r,p-l,f-m,w-d).normalize(),n[1].setComponents(c+r,p+l,f+m,w+d).normalize(),n[2].setComponents(c+o,p+h,f+v,w+E).normalize(),n[3].setComponents(c-o,p-h,f-v,w-E).normalize(),n[4].setComponents(c-a,p-u,f-g,w-M).normalize(),t===on)n[5].setComponents(c+a,p+u,f+g,w+M).normalize();else if(t===us)n[5].setComponents(a,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ns.x=s.normal.x>0?e.max.x:e.min.x,ns.y=s.normal.y>0?e.max.y:e.min.y,ns.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Do(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Il(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,h){const u=l.array,p=l.usage,m=u.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,u,p),l.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){const p=h.array,m=h._updateRange,v=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&v.length===0&&i.bufferSubData(u,0,p),v.length!==0){for(let g=0,f=v.length;g<f;g++){const d=v[g];t?i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class Kt extends hn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,p=t/c,m=[],v=[],g=[],f=[];for(let d=0;d<h;d++){const E=d*p-o;for(let M=0;M<l;M++){const w=M*u-r;v.push(w,-E,0),g.push(0,0,1),f.push(M/a),f.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){const M=E+l*d,w=E+l*(d+1),P=E+1+l*(d+1),R=E+1+l*d;m.push(M,w,R),m.push(w,P,R)}this.setIndex(m),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(g,3)),this.setAttribute("uv",new It(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ul=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nl=`#ifdef USE_ALPHAHASH
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
#endif`,Ol=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kl=`#ifdef USE_AOMAP
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
#endif`,Gl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hl=`#ifdef USE_BATCHING
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
#endif`,Vl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ql=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yl=`#ifdef USE_IRIDESCENCE
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
#endif`,jl=`#ifdef USE_BUMPMAP
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
#endif`,$l=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ql=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ih=`#define PI 3.141592653589793
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
} // validated`,sh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rh=`vec3 transformedNormal = objectNormal;
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
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",dh=`
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
}`,uh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mh=`#ifdef USE_GRADIENTMAP
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
}`,Sh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Eh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Th=`uniform bool receiveShadow;
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
#endif`,Ah=`#ifdef USE_ENVMAP
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
#endif`,Rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dh=`PhysicalMaterial material;
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
#endif`,Ih=`struct PhysicalMaterial {
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
}`,Uh=`
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
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wh=`#if defined( USE_POINTS_UV )
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
#endif`,Xh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jh=`#ifdef USE_MORPHNORMALS
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
#endif`,$h=`#ifdef USE_MORPHTARGETS
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
#endif`,Kh=`#ifdef USE_MORPHTARGETS
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
#endif`,Jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nd=`#ifdef USE_NORMALMAP
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
#endif`,id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_d=`float getShadowMask() {
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
}`,xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,Md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,Ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Td=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ad=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#ifdef USE_TRANSMISSION
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Id=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
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
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`#include <common>
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
}`,kd=`#if DEPTH_PACKING == 3200
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
}`,Gd=`#define DISTANCE
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
}`,Hd=`#define DISTANCE
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`uniform float scale;
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
}`,qd=`uniform vec3 diffuse;
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
}`,Yd=`#include <common>
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
}`,jd=`uniform vec3 diffuse;
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
}`,$d=`#define LAMBERT
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
}`,Kd=`#define LAMBERT
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
}`,Jd=`#define MATCAP
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
}`,Zd=`#define MATCAP
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
}`,Qd=`#define NORMAL
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
}`,eu=`#define NORMAL
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
}`,tu=`#define PHONG
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
}`,nu=`#define PHONG
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
}`,iu=`#define STANDARD
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
}`,su=`#define STANDARD
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
}`,ru=`#define TOON
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
}`,au=`#define TOON
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
}`,ou=`uniform float size;
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
}`,cu=`uniform vec3 diffuse;
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
}`,lu=`#include <common>
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
}`,hu=`uniform vec3 color;
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
}`,du=`uniform float rotation;
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
}`,uu=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:Ul,alphahash_pars_fragment:Nl,alphamap_fragment:Ol,alphamap_pars_fragment:Fl,alphatest_fragment:Bl,alphatest_pars_fragment:zl,aomap_fragment:kl,aomap_pars_fragment:Gl,batching_pars_vertex:Hl,batching_vertex:Vl,begin_vertex:Wl,beginnormal_vertex:Xl,bsdfs:ql,iridescence_fragment:Yl,bumpmap_pars_fragment:jl,clipping_planes_fragment:$l,clipping_planes_pars_fragment:Kl,clipping_planes_pars_vertex:Jl,clipping_planes_vertex:Zl,color_fragment:Ql,color_pars_fragment:eh,color_pars_vertex:th,color_vertex:nh,common:ih,cube_uv_reflection_fragment:sh,defaultnormal_vertex:rh,displacementmap_pars_vertex:ah,displacementmap_vertex:oh,emissivemap_fragment:ch,emissivemap_pars_fragment:lh,colorspace_fragment:hh,colorspace_pars_fragment:dh,envmap_fragment:uh,envmap_common_pars_fragment:fh,envmap_pars_fragment:ph,envmap_pars_vertex:mh,envmap_physical_pars_fragment:Ah,envmap_vertex:gh,fog_vertex:vh,fog_pars_vertex:_h,fog_fragment:xh,fog_pars_fragment:yh,gradientmap_pars_fragment:Mh,lightmap_fragment:Sh,lightmap_pars_fragment:Eh,lights_lambert_fragment:bh,lights_lambert_pars_fragment:wh,lights_pars_begin:Th,lights_toon_fragment:Rh,lights_toon_pars_fragment:Ch,lights_phong_fragment:Lh,lights_phong_pars_fragment:Ph,lights_physical_fragment:Dh,lights_physical_pars_fragment:Ih,lights_fragment_begin:Uh,lights_fragment_maps:Nh,lights_fragment_end:Oh,logdepthbuf_fragment:Fh,logdepthbuf_pars_fragment:Bh,logdepthbuf_pars_vertex:zh,logdepthbuf_vertex:kh,map_fragment:Gh,map_pars_fragment:Hh,map_particle_fragment:Vh,map_particle_pars_fragment:Wh,metalnessmap_fragment:Xh,metalnessmap_pars_fragment:qh,morphcolor_vertex:Yh,morphnormal_vertex:jh,morphtarget_pars_vertex:$h,morphtarget_vertex:Kh,normal_fragment_begin:Jh,normal_fragment_maps:Zh,normal_pars_fragment:Qh,normal_pars_vertex:ed,normal_vertex:td,normalmap_pars_fragment:nd,clearcoat_normal_fragment_begin:id,clearcoat_normal_fragment_maps:sd,clearcoat_pars_fragment:rd,iridescence_pars_fragment:ad,opaque_fragment:od,packing:cd,premultiplied_alpha_fragment:ld,project_vertex:hd,dithering_fragment:dd,dithering_pars_fragment:ud,roughnessmap_fragment:fd,roughnessmap_pars_fragment:pd,shadowmap_pars_fragment:md,shadowmap_pars_vertex:gd,shadowmap_vertex:vd,shadowmask_pars_fragment:_d,skinbase_vertex:xd,skinning_pars_vertex:yd,skinning_vertex:Md,skinnormal_vertex:Sd,specularmap_fragment:Ed,specularmap_pars_fragment:bd,tonemapping_fragment:wd,tonemapping_pars_fragment:Td,transmission_fragment:Ad,transmission_pars_fragment:Rd,uv_pars_fragment:Cd,uv_pars_vertex:Ld,uv_vertex:Pd,worldpos_vertex:Dd,background_vert:Id,background_frag:Ud,backgroundCube_vert:Nd,backgroundCube_frag:Od,cube_vert:Fd,cube_frag:Bd,depth_vert:zd,depth_frag:kd,distanceRGBA_vert:Gd,distanceRGBA_frag:Hd,equirect_vert:Vd,equirect_frag:Wd,linedashed_vert:Xd,linedashed_frag:qd,meshbasic_vert:Yd,meshbasic_frag:jd,meshlambert_vert:$d,meshlambert_frag:Kd,meshmatcap_vert:Jd,meshmatcap_frag:Zd,meshnormal_vert:Qd,meshnormal_frag:eu,meshphong_vert:tu,meshphong_frag:nu,meshphysical_vert:iu,meshphysical_frag:su,meshtoon_vert:ru,meshtoon_frag:au,points_vert:ou,points_frag:cu,shadow_vert:lu,shadow_frag:hu,sprite_vert:du,sprite_frag:uu},se={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Jt={basic:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Et([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Et([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Et([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Et([se.points,se.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Et([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Et([se.common,se.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Et([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Et([se.sprite,se.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Et([se.common,se.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Et([se.lights,se.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Jt.physical={uniforms:Et([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const is={r:0,b:0,g:0};function fu(i,e,t,n,s,r,o){const a=new Ve(0);let c=r===!0?0:1,l,h,u=null,p=0,m=null;function v(f,d){let E=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?g(a,c):M&&M.isColor&&(g(M,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===gs)?(h===void 0&&(h=new he(new Ue(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:di(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=$e.getTransfer(M.colorSpace)!==et,(u!==M||p!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,p=M.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new he(new Kt(2,2),new Bn({name:"BackgroundMaterial",uniforms:di(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,p=M.version,m=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function g(f,d){f.getRGB(is,Co(i)),n.buffers.color.setClear(is.r,is.g,is.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(f,d=1){a.set(f),c=d,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,g(a,c)},render:v}}function pu(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=f(null);let l=c,h=!1;function u(L,U,G,Y,X){let q=!1;if(o){const j=g(Y,G,U);l!==j&&(l=j,m(l.object)),q=d(L,Y,G,X),q&&E(L,Y,G,X)}else{const j=U.wireframe===!0;(l.geometry!==Y.id||l.program!==G.id||l.wireframe!==j)&&(l.geometry=Y.id,l.program=G.id,l.wireframe=j,q=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,W(L,U,G,Y),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function v(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,U,G){const Y=G.wireframe===!0;let X=a[L.id];X===void 0&&(X={},a[L.id]=X);let q=X[U.id];q===void 0&&(q={},X[U.id]=q);let j=q[Y];return j===void 0&&(j=f(p()),q[Y]=j),j}function f(L){const U=[],G=[],Y=[];for(let X=0;X<s;X++)U[X]=0,G[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:Y,object:L,attributes:{},index:null}}function d(L,U,G,Y){const X=l.attributes,q=U.attributes;let j=0;const te=G.getAttributes();for(const ne in te)if(te[ne].location>=0){const $=X[ne];let ce=q[ne];if(ce===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),$===void 0||$.attribute!==ce||ce&&$.data!==ce.data)return!0;j++}return l.attributesNum!==j||l.index!==Y}function E(L,U,G,Y){const X={},q=U.attributes;let j=0;const te=G.getAttributes();for(const ne in te)if(te[ne].location>=0){let $=q[ne];$===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const ce={};ce.attribute=$,$&&$.data&&(ce.data=$.data),X[ne]=ce,j++}l.attributes=X,l.attributesNum=j,l.index=Y}function M(){const L=l.newAttributes;for(let U=0,G=L.length;U<G;U++)L[U]=0}function w(L){P(L,0)}function P(L,U){const G=l.newAttributes,Y=l.enabledAttributes,X=l.attributeDivisors;G[L]=1,Y[L]===0&&(i.enableVertexAttribArray(L),Y[L]=1),X[L]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),X[L]=U)}function R(){const L=l.newAttributes,U=l.enabledAttributes;for(let G=0,Y=U.length;G<Y;G++)U[G]!==L[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function A(L,U,G,Y,X,q,j){j===!0?i.vertexAttribIPointer(L,U,G,X,q):i.vertexAttribPointer(L,U,G,Y,X,q)}function W(L,U,G,Y){if(n.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=Y.attributes,q=G.getAttributes(),j=U.defaultAttributeValues;for(const te in q){const ne=q[te];if(ne.location>=0){let V=X[te];if(V===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const $=V.normalized,ce=V.itemSize,ve=t.get(V);if(ve===void 0)continue;const ge=ve.buffer,Ce=ve.type,Pe=ve.bytesPerElement,Ee=n.isWebGL2===!0&&(Ce===i.INT||Ce===i.UNSIGNED_INT||V.gpuType===uo);if(V.isInterleavedBufferAttribute){const We=V.data,N=We.stride,xt=V.offset;if(We.isInstancedInterleavedBuffer){for(let xe=0;xe<ne.locationSize;xe++)P(ne.location+xe,We.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let xe=0;xe<ne.locationSize;xe++)w(ne.location+xe);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let xe=0;xe<ne.locationSize;xe++)A(ne.location+xe,ce/ne.locationSize,Ce,$,N*Pe,(xt+ce/ne.locationSize*xe)*Pe,Ee)}else{if(V.isInstancedBufferAttribute){for(let We=0;We<ne.locationSize;We++)P(ne.location+We,V.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let We=0;We<ne.locationSize;We++)w(ne.location+We);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let We=0;We<ne.locationSize;We++)A(ne.location+We,ce/ne.locationSize,Ce,$,ce*Pe,ce/ne.locationSize*We*Pe,Ee)}}else if(j!==void 0){const $=j[te];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(ne.location,$);break;case 3:i.vertexAttrib3fv(ne.location,$);break;case 4:i.vertexAttrib4fv(ne.location,$);break;default:i.vertexAttrib1fv(ne.location,$)}}}}R()}function y(){H();for(const L in a){const U=a[L];for(const G in U){const Y=U[G];for(const X in Y)v(Y[X].object),delete Y[X];delete U[G]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;const U=a[L.id];for(const G in U){const Y=U[G];for(const X in Y)v(Y[X].object),delete Y[X];delete U[G]}delete a[L.id]}function k(L){for(const U in a){const G=a[U];if(G[L.id]===void 0)continue;const Y=G[L.id];for(const X in Y)v(Y[X].object),delete Y[X];delete G[L.id]}}function H(){Z(),h=!0,l!==c&&(l=c,m(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:H,resetDefaultState:Z,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:k,initAttributes:M,enableAttribute:w,disableUnusedAttributes:R}}function mu(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,p){if(p===0)return;let m,v;if(s)m=i,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](r,h,u,p),t.update(u,r,p)}function l(h,u,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<p;v++)this.render(h[v],u[v]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,p);let v=0;for(let g=0;g<p;g++)v+=u[g];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function gu(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,w=o||e.has("OES_texture_float"),P=M&&w,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:R}}function vu(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ln,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){const v=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,d=i.get(u);if(!s||v===null||v.length===0||r&&!f)r?h(null):l();else{const E=r?0:n,M=E*4;let w=d.clippingState||null;c.value=w,w=h(v,p,M,m);for(let P=0;P!==M;++P)w[P]=t[P];d.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,v){const g=u!==null?u.length:0;let f=null;if(g!==0){if(f=c.value,v!==!0||f===null){const d=m+g*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<d)&&(f=new Float32Array(d));for(let M=0,w=m;M!==g;++M,w+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(f,w),f[w+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function _u(i){let e=new WeakMap;function t(o,a){return a===rr?o.mapping=ci:a===ar&&(o.mapping=li),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===rr||a===ar)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ll(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Io extends Lo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,Ta=[.125,.215,.35,.446,.526,.582],In=20,Ys=new Io,Aa=new Ve;let js=null,$s=0,Ks=0;const Pn=(1+Math.sqrt(5))/2,ti=1/Pn,Ra=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Pn,ti),new T(0,Pn,-ti),new T(ti,0,Pn),new T(-ti,0,Pn),new T(Pn,ti,0),new T(-Pn,ti,0)];class Ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){js=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Da(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(js,$s,Ks),e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),js=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Ci,format:qt,colorSpace:ln,depthBuffer:!1},s=La(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=La(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xu(r)),this._blurMaterial=yu(r,e,t)}return s}_compileMaterial(e){const t=new he(this._lodPlanes[0],e);this._renderer.compile(t,Ys)}_sceneToCubeUV(e,t,n,s){const a=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Aa),h.toneMapping=yn,h.autoClear=!1;const m=new Ui({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),v=new he(new Ue,m);let g=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,g=!0):(m.color.copy(Aa),g=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):E===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const M=this._cubeSize;ss(s,E*M,d>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ci||e.mapping===li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Da()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new he(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ss(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ys)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ra[(s-1)%Ra.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new he(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*In-1),g=r/v,f=isFinite(r)?1+Math.floor(h*g):In;f>In&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${In}`);const d=[];let E=0;for(let A=0;A<In;++A){const W=A/g,y=Math.exp(-W*W/2);d.push(y),A===0?E+=y:A<f&&(E+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=v,p.mipInt.value=M-n;const w=this._sizeLods[s],P=3*w*(s>M-si?s-M+si:0),R=4*(this._cubeSize-w);ss(t,P,R,3*w,2*w),c.setRenderTarget(t),c.render(u,Ys)}}function xu(i){const e=[],t=[],n=[];let s=i;const r=i-si+1+Ta.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-si?c=Ta[o-i+si-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,g=3,f=2,d=1,E=new Float32Array(g*v*m),M=new Float32Array(f*v*m),w=new Float32Array(d*v*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,W=R>2?0:-1,y=[A,W,0,A+2/3,W,0,A+2/3,W+1,0,A,W,0,A+2/3,W+1,0,A,W+1,0];E.set(y,g*v*R),M.set(p,f*v*R);const b=[R,R,R,R,R,R];w.set(b,d*v*R)}const P=new hn;P.setAttribute("position",new Yt(E,g)),P.setAttribute("uv",new Yt(M,f)),P.setAttribute("faceIndex",new Yt(w,d)),e.push(P),s>si&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function La(i,e,t){const n=new Fn(i,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function yu(i,e,t){const n=new Float32Array(In),s=new T(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xr(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Pa(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xr(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Da(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function xr(){return`

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
	`}function Mu(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===rr||c===ar,h=c===ci||c===li;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ca(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Ca(i));const p=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Su(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Eu(i,e,t,n){const s={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const g=p.morphAttributes[v];for(let f=0,d=g.length;f<d;f++)e.remove(g[f])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function c(u){const p=u.attributes;for(const v in p)e.update(p[v],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const v in m){const g=m[v];for(let f=0,d=g.length;f<d;f++)e.update(g[f],i.ARRAY_BUFFER)}}function l(u){const p=[],m=u.index,v=u.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let M=0,w=E.length;M<w;M+=3){const P=E[M+0],R=E[M+1],A=E[M+2];p.push(P,R,R,A,A,P)}}else if(v!==void 0){const E=v.array;g=v.version;for(let M=0,w=E.length/3-1;M<w;M+=3){const P=M+0,R=M+1,A=M+2;p.push(P,R,R,A,A,P)}}else return;const f=new(So(p)?Ro:Ao)(p,1);f.version=g;const d=r.get(u);d&&e.remove(d),r.set(u,f)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function bu(i,e,t,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,v){i.drawElements(r,v,a,m*c),t.update(v,r,1)}function u(m,v,g){if(g===0)return;let f,d;if(s)f=i,d="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,v,a,m*c,g),t.update(v,r,g)}function p(m,v,g){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<g;d++)this.render(m[d]/c,v[d]);else{f.multiDrawElementsWEBGL(r,v,0,a,m,0,g);let d=0;for(let E=0;E<g;E++)d+=v[E];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function wu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Tu(i,e){return i[0]-e[0]}function Au(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ru(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let f=r.get(h);if(f===void 0||f.count!==g){let U=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var m=U;f!==void 0&&f.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],W=h.morphAttributes.color||[];let y=0;M===!0&&(y=1),w===!0&&(y=2),P===!0&&(y=3);let b=h.attributes.position.count*y,k=1;b>e.maxTextureSize&&(k=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const H=new Float32Array(b*k*4*g),Z=new wo(H,b,k,g);Z.type=_n,Z.needsUpdate=!0;const L=y*4;for(let G=0;G<g;G++){const Y=R[G],X=A[G],q=W[G],j=b*k*4*G;for(let te=0;te<Y.count;te++){const ne=te*L;M===!0&&(o.fromBufferAttribute(Y,te),H[j+ne+0]=o.x,H[j+ne+1]=o.y,H[j+ne+2]=o.z,H[j+ne+3]=0),w===!0&&(o.fromBufferAttribute(X,te),H[j+ne+4]=o.x,H[j+ne+5]=o.y,H[j+ne+6]=o.z,H[j+ne+7]=0),P===!0&&(o.fromBufferAttribute(q,te),H[j+ne+8]=o.x,H[j+ne+9]=o.y,H[j+ne+10]=o.z,H[j+ne+11]=q.itemSize===4?o.w:1)}}f={count:g,texture:Z,size:new Ge(b,k)},r.set(h,f),h.addEventListener("dispose",U)}let d=0;for(let M=0;M<p.length;M++)d+=p[M];const E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const v=p===void 0?0:p.length;let g=n[h.id];if(g===void 0||g.length!==v){g=[];for(let w=0;w<v;w++)g[w]=[w,0];n[h.id]=g}for(let w=0;w<v;w++){const P=g[w];P[0]=w,P[1]=p[w]}g.sort(Au);for(let w=0;w<8;w++)w<v&&g[w][1]?(a[w][0]=g[w][0],a[w][1]=g[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(Tu);const f=h.morphAttributes.position,d=h.morphAttributes.normal;let E=0;for(let w=0;w<8;w++){const P=a[w],R=P[0],A=P[1];R!==Number.MAX_SAFE_INTEGER&&A?(f&&h.getAttribute("morphTarget"+w)!==f[R]&&h.setAttribute("morphTarget"+w,f[R]),d&&h.getAttribute("morphNormal"+w)!==d[R]&&h.setAttribute("morphNormal"+w,d[R]),s[w]=A,E+=A):(f&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),d&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),s[w]=0)}const M=h.morphTargetsRelative?1:1-E;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Cu(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Uo extends Rt{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Nn,h!==Nn&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Nn&&(n=vn),n===void 0&&h===hi&&(n=Un),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=c!==void 0?c:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const No=new Rt,Oo=new Uo(1,1);Oo.compareFunction=Mo;const Fo=new wo,Bo=new fl,zo=new Po,Ia=[],Ua=[],Na=new Float32Array(16),Oa=new Float32Array(9),Fa=new Float32Array(4);function mi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ia[s];if(r===void 0&&(r=new Float32Array(s),Ia[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xs(i,e){let t=Ua[e];t===void 0&&(t=new Int32Array(e),Ua[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function Du(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function Iu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function Uu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(lt(t,n))return;Fa.set(n),i.uniformMatrix2fv(this.addr,!1,Fa),ht(t,n)}}function Nu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(lt(t,n))return;Oa.set(n),i.uniformMatrix3fv(this.addr,!1,Oa),ht(t,n)}}function Ou(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(lt(t,n))return;Na.set(n),i.uniformMatrix4fv(this.addr,!1,Na),ht(t,n)}}function Fu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function zu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function ku(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function Gu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function Vu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function Wu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function Xu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Oo:No;t.setTexture2D(e||r,s)}function qu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bo,s)}function Yu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zo,s)}function ju(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fo,s)}function $u(i){switch(i){case 5126:return Lu;case 35664:return Pu;case 35665:return Du;case 35666:return Iu;case 35674:return Uu;case 35675:return Nu;case 35676:return Ou;case 5124:case 35670:return Fu;case 35667:case 35671:return Bu;case 35668:case 35672:return zu;case 35669:case 35673:return ku;case 5125:return Gu;case 36294:return Hu;case 36295:return Vu;case 36296:return Wu;case 35678:case 36198:case 36298:case 36306:case 35682:return Xu;case 35679:case 36299:case 36307:return qu;case 35680:case 36300:case 36308:case 36293:return Yu;case 36289:case 36303:case 36311:case 36292:return ju}}function Ku(i,e){i.uniform1fv(this.addr,e)}function Ju(i,e){const t=mi(e,this.size,2);i.uniform2fv(this.addr,t)}function Zu(i,e){const t=mi(e,this.size,3);i.uniform3fv(this.addr,t)}function Qu(i,e){const t=mi(e,this.size,4);i.uniform4fv(this.addr,t)}function ef(i,e){const t=mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tf(i,e){const t=mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nf(i,e){const t=mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sf(i,e){i.uniform1iv(this.addr,e)}function rf(i,e){i.uniform2iv(this.addr,e)}function af(i,e){i.uniform3iv(this.addr,e)}function of(i,e){i.uniform4iv(this.addr,e)}function cf(i,e){i.uniform1uiv(this.addr,e)}function lf(i,e){i.uniform2uiv(this.addr,e)}function hf(i,e){i.uniform3uiv(this.addr,e)}function df(i,e){i.uniform4uiv(this.addr,e)}function uf(i,e,t){const n=this.cache,s=e.length,r=xs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||No,r[o])}function ff(i,e,t){const n=this.cache,s=e.length,r=xs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Bo,r[o])}function pf(i,e,t){const n=this.cache,s=e.length,r=xs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||zo,r[o])}function mf(i,e,t){const n=this.cache,s=e.length,r=xs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fo,r[o])}function gf(i){switch(i){case 5126:return Ku;case 35664:return Ju;case 35665:return Zu;case 35666:return Qu;case 35674:return ef;case 35675:return tf;case 35676:return nf;case 5124:case 35670:return sf;case 35667:case 35671:return rf;case 35668:case 35672:return af;case 35669:case 35673:return of;case 5125:return cf;case 36294:return lf;case 36295:return hf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return mf}}class vf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$u(t.type)}}class _f{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gf(t.type)}}class xf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Js=/(\w+)(\])?(\[|\.)?/g;function Ba(i,e){i.seq.push(e),i.map[e.id]=e}function yf(i,e,t){const n=i.name,s=n.length;for(Js.lastIndex=0;;){const r=Js.exec(n),o=Js.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ba(t,l===void 0?new vf(a,i,e):new _f(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new xf(a),Ba(t,u)),t=u}}}class os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);yf(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function za(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Mf=37297;let Sf=0;function Ef(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function bf(i){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(i);let n;switch(e===t?n="":e===ds&&t===hs?n="LinearDisplayP3ToLinearSRGB":e===hs&&t===ds&&(n="LinearSRGBToLinearDisplayP3"),i){case ln:case vs:return[n,"LinearTransferOETF"];case pt:case mr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ka(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ef(i.getShaderSource(e),o)}else return s}function wf(i,e){const t=bf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Tf(i,e){let t;switch(e){case bc:t="Linear";break;case wc:t="Reinhard";break;case Tc:t="OptimizedCineon";break;case lo:t="ACESFilmic";break;case Rc:t="AgX";break;case Ac:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Af(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ri).join(`
`)}function Rf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ri).join(`
`)}function Cf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ri(i){return i!==""}function Ga(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ha(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pf=/^[ \t]*#include +<([\w\d./]+)>/gm;function dr(i){return i.replace(Pf,If)}const Df=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function If(i,e){let t=Ie[e];if(t===void 0){const n=Df.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dr(t)}const Uf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Va(i){return i.replace(Uf,Nf)}function Nf(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wa(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Of(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function Ff(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ci:case li:e="ENVMAP_TYPE_CUBE";break;case gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:e="ENVMAP_MODE_REFRACTION";break}return e}function zf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case co:e="ENVMAP_BLENDING_MULTIPLY";break;case Sc:e="ENVMAP_BLENDING_MIX";break;case Ec:e="ENVMAP_BLENDING_ADD";break}return e}function kf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gf(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Of(t),l=Ff(t),h=Bf(t),u=zf(t),p=kf(t),m=t.isWebGL2?"":Af(t),v=Rf(t),g=Cf(r),f=s.createProgram();let d,E,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ri).join(`
`),d.length>0&&(d+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ri).join(`
`),E.length>0&&(E+=`
`)):(d=[Wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ri).join(`
`),E=[m,Wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==yn?Tf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,wf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ri).join(`
`)),o=dr(o),o=Ga(o,t),o=Ha(o,t),a=dr(a),a=Ga(a,t),a=Ha(a,t),o=Va(o),a=Va(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const w=M+d+o,P=M+E+a,R=za(s,s.VERTEX_SHADER,w),A=za(s,s.FRAGMENT_SHADER,P);s.attachShader(f,R),s.attachShader(f,A),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function W(H){if(i.debug.checkShaderErrors){const Z=s.getProgramInfoLog(f).trim(),L=s.getShaderInfoLog(R).trim(),U=s.getShaderInfoLog(A).trim();let G=!0,Y=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,R,A);else{const X=ka(s,R,"vertex"),q=ka(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+X+`
`+q)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||U==="")&&(Y=!1);Y&&(H.diagnostics={runnable:G,programLog:Z,vertexShader:{log:L,prefix:d},fragmentShader:{log:U,prefix:E}})}s.deleteShader(R),s.deleteShader(A),y=new os(s,f),b=Lf(s,f)}let y;this.getUniforms=function(){return y===void 0&&W(this),y};let b;this.getAttributes=function(){return b===void 0&&W(this),b};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(f,Mf)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=A,this}let Hf=0;class Vf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wf(e),t.set(e,n)),n}}class Wf{constructor(e){this.id=Hf++,this.code=e,this.usedTimes=0}}function Xf(i,e,t,n,s,r,o){const a=new vr,c=new Vf,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function f(y,b,k,H,Z){const L=H.fog,U=Z.geometry,G=y.isMeshStandardMaterial?H.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),X=Y&&Y.mapping===gs?Y.image.height:null,q=v[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,te=j!==void 0?j.length:0;let ne=0;U.morphAttributes.position!==void 0&&(ne=1),U.morphAttributes.normal!==void 0&&(ne=2),U.morphAttributes.color!==void 0&&(ne=3);let V,$,ce,ve;if(q){const yt=Jt[q];V=yt.vertexShader,$=yt.fragmentShader}else V=y.vertexShader,$=y.fragmentShader,c.update(y),ce=c.getVertexShaderID(y),ve=c.getFragmentShaderID(y);const ge=i.getRenderTarget(),Ce=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,Ee=!!y.map,We=!!y.matcap,N=!!Y,xt=!!y.aoMap,xe=!!y.lightMap,Ae=!!y.bumpMap,fe=!!y.normalMap,it=!!y.displacementMap,Ne=!!y.emissiveMap,S=!!y.metalnessMap,_=!!y.roughnessMap,F=y.anisotropy>0,Q=y.clearcoat>0,J=y.iridescence>0,ee=y.sheen>0,pe=y.transmission>0,oe=F&&!!y.anisotropyMap,de=Q&&!!y.clearcoatMap,Se=Q&&!!y.clearcoatNormalMap,Oe=Q&&!!y.clearcoatRoughnessMap,K=J&&!!y.iridescenceMap,je=J&&!!y.iridescenceThicknessMap,He=ee&&!!y.sheenColorMap,Te=ee&&!!y.sheenRoughnessMap,_e=!!y.specularMap,ue=!!y.specularColorMap,De=!!y.specularIntensityMap,Ye=pe&&!!y.transmissionMap,rt=pe&&!!y.thicknessMap,Be=!!y.gradientMap,ie=!!y.alphaMap,C=y.alphaTest>0,re=!!y.alphaHash,ae=!!y.extensions,be=!!U.attributes.uv1,ye=!!U.attributes.uv2,Je=!!U.attributes.uv3;let Ze=yn;return y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ze=i.toneMapping),{isWebGL2:h,shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:$,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Pe,instancing:Ce,instancingColor:Ce&&Z.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ln,map:Ee,matcap:We,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:X,aoMap:xt,lightMap:xe,bumpMap:Ae,normalMap:fe,displacementMap:p&&it,emissiveMap:Ne,normalMapObjectSpace:fe&&y.normalMapType===kc,normalMapTangentSpace:fe&&y.normalMapType===yo,metalnessMap:S,roughnessMap:_,anisotropy:F,anisotropyMap:oe,clearcoat:Q,clearcoatMap:de,clearcoatNormalMap:Se,clearcoatRoughnessMap:Oe,iridescence:J,iridescenceMap:K,iridescenceThicknessMap:je,sheen:ee,sheenColorMap:He,sheenRoughnessMap:Te,specularMap:_e,specularColorMap:ue,specularIntensityMap:De,transmission:pe,transmissionMap:Ye,thicknessMap:rt,gradientMap:Be,opaque:y.transparent===!1&&y.blending===ai,alphaMap:ie,alphaTest:C,alphaHash:re,combine:y.combine,mapUv:Ee&&g(y.map.channel),aoMapUv:xt&&g(y.aoMap.channel),lightMapUv:xe&&g(y.lightMap.channel),bumpMapUv:Ae&&g(y.bumpMap.channel),normalMapUv:fe&&g(y.normalMap.channel),displacementMapUv:it&&g(y.displacementMap.channel),emissiveMapUv:Ne&&g(y.emissiveMap.channel),metalnessMapUv:S&&g(y.metalnessMap.channel),roughnessMapUv:_&&g(y.roughnessMap.channel),anisotropyMapUv:oe&&g(y.anisotropyMap.channel),clearcoatMapUv:de&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:je&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(y.sheenRoughnessMap.channel),specularMapUv:_e&&g(y.specularMap.channel),specularColorMapUv:ue&&g(y.specularColorMap.channel),specularIntensityMapUv:De&&g(y.specularIntensityMap.channel),transmissionMapUv:Ye&&g(y.transmissionMap.channel),thicknessMapUv:rt&&g(y.thicknessMap.channel),alphaMapUv:ie&&g(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(fe||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:ye,vertexUv3s:Je,pointsUvs:Z.isPoints===!0&&!!U.attributes.uv&&(Ee||ie),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&$e.getTransfer(y.map.colorSpace)===et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wt,flipSided:y.side===At,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ae&&y.extensions.derivatives===!0,extensionFragDepth:ae&&y.extensions.fragDepth===!0,extensionDrawBuffers:ae&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)b.push(k),b.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(E(b,y),M(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function E(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function w(y){const b=v[y.type];let k;if(b){const H=Jt[b];k=Tl.clone(H.uniforms)}else k=y.uniforms;return k}function P(y,b){let k;for(let H=0,Z=l.length;H<Z;H++){const L=l[H];if(L.cacheKey===b){k=L,++k.usedTimes;break}}return k===void 0&&(k=new Gf(i,b,y,r),l.push(k)),k}function R(y){if(--y.usedTimes===0){const b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),y.destroy()}}function A(y){c.remove(y)}function W(){c.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:w,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:l,dispose:W}}function qf(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qa(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,m,v,g,f){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:v,renderOrder:u.renderOrder,z:g,group:f},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=g,d.group=f),e++,d}function a(u,p,m,v,g,f){const d=o(u,p,m,v,g,f);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function c(u,p,m,v,g,f){const d=o(u,p,m,v,g,f);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,p){t.length>1&&t.sort(u||Yf),n.length>1&&n.sort(p||Xa),s.length>1&&s.sort(p||Xa)}function h(){for(let u=e,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function jf(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new qa,i.set(n,[o])):s>=r.length?(o=new qa,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $f(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Ve};break;case"SpotLight":t={position:new T,direction:new T,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function Kf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Jf=0;function Zf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qf(i,e){const t=new $f,n=Kf(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new T);const r=new T,o=new tt,a=new tt;function c(h,u){let p=0,m=0,v=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let g=0,f=0,d=0,E=0,M=0,w=0,P=0,R=0,A=0,W=0,y=0;h.sort(Zf);const b=u===!0?Math.PI:1;for(let H=0,Z=h.length;H<Z;H++){const L=h[H],U=L.color,G=L.intensity,Y=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=U.r*G*b,m+=U.g*G*b,v+=U.b*G*b;else if(L.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(L.sh.coefficients[q],G);y++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const j=L.shadow,te=n.get(L);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,s.directionalShadow[g]=te,s.directionalShadowMap[g]=X,s.directionalShadowMatrix[g]=L.shadow.matrix,w++}s.directional[g]=q,g++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(U).multiplyScalar(G*b),q.distance=Y,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,s.spot[d]=q;const j=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,j.updateMatrices(L),L.castShadow&&W++),s.spotLightMatrix[d]=j.matrix,L.castShadow){const te=n.get(L);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,s.spotShadow[d]=te,s.spotShadowMap[d]=X,R++}d++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(U).multiplyScalar(G),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),s.rectArea[E]=q,E++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*b),q.distance=L.distance,q.decay=L.decay,L.castShadow){const j=L.shadow,te=n.get(L);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,s.pointShadow[f]=te,s.pointShadowMap[f]=X,s.pointShadowMatrix[f]=L.shadow.matrix,P++}s.point[f]=q,f++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(G*b),q.groundColor.copy(L.groundColor).multiplyScalar(G*b),s.hemi[M]=q,M++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=v;const k=s.hash;(k.directionalLength!==g||k.pointLength!==f||k.spotLength!==d||k.rectAreaLength!==E||k.hemiLength!==M||k.numDirectionalShadows!==w||k.numPointShadows!==P||k.numSpotShadows!==R||k.numSpotMaps!==A||k.numLightProbes!==y)&&(s.directional.length=g,s.spot.length=d,s.rectArea.length=E,s.point.length=f,s.hemi.length=M,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=R+A-W,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=y,k.directionalLength=g,k.pointLength=f,k.spotLength=d,k.rectAreaLength=E,k.hemiLength=M,k.numDirectionalShadows=w,k.numPointShadows=P,k.numSpotShadows=R,k.numSpotMaps=A,k.numLightProbes=y,s.version=Jf++)}function l(h,u){let p=0,m=0,v=0,g=0,f=0;const d=u.matrixWorldInverse;for(let E=0,M=h.length;E<M;E++){const w=h[E];if(w.isDirectionalLight){const P=s.directional[p];P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),p++}else if(w.isSpotLight){const P=s.spot[v];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),v++}else if(w.isRectAreaLight){const P=s.rectArea[g];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(w.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const P=s.point[m];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(d),m++}else if(w.isHemisphereLight){const P=s.hemi[f];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(d),f++}}}return{setup:c,setupView:l,state:s}}function Ya(i,e){const t=new Qf(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ep(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Ya(i,e),t.set(r,[c])):o>=a.length?(c=new Ya(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class tp extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class np extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ip=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sp=`uniform sampler2D shadow_pass;
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
}`;function rp(i,e,t){let n=new _r;const s=new Ge,r=new Ge,o=new nt,a=new tp({depthPacking:zc}),c=new np,l={},h=t.maxTextureSize,u={[Sn]:At,[At]:Sn,[Wt]:Wt},p=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:ip,fragmentShader:sp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new hn;v.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new he(v,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let d=this.type;this.render=function(R,A,W){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),b=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),H=i.state;H.setBlending(xn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Z=d!==an&&this.type===an,L=d===an&&this.type!==an;for(let U=0,G=R.length;U<G;U++){const Y=R[U],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const q=X.getFrameExtents();if(s.multiply(q),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,X.mapSize.y=r.y)),X.map===null||Z===!0||L===!0){const te=this.type!==an?{minFilter:wt,magFilter:wt}:{};X.map!==null&&X.map.dispose(),X.map=new Fn(s.x,s.y,te),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const j=X.getViewportCount();for(let te=0;te<j;te++){const ne=X.getViewport(te);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),H.viewport(o),X.updateMatrices(Y,te),n=X.getFrustum(),w(A,W,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===an&&E(X,W),X.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(y,b,k)};function E(R,A){const W=e.update(g);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fn(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,W,p,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,W,m,g,null)}function M(R,A,W,y){let b=null;const k=W.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)b=k;else if(b=W.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=b.uuid,Z=A.uuid;let L=l[H];L===void 0&&(L={},l[H]=L);let U=L[Z];U===void 0&&(U=b.clone(),L[Z]=U,A.addEventListener("dispose",P)),b=U}if(b.visible=A.visible,b.wireframe=A.wireframe,y===an?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,W.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=i.properties.get(b);H.light=W}return b}function w(R,A,W,y,b){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===an)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld);const Z=e.update(R),L=R.material;if(Array.isArray(L)){const U=Z.groups;for(let G=0,Y=U.length;G<Y;G++){const X=U[G],q=L[X.materialIndex];if(q&&q.visible){const j=M(R,q,y,b);R.onBeforeShadow(i,R,A,W,Z,j,X),i.renderBufferDirect(W,null,Z,j,R,X),R.onAfterShadow(i,R,A,W,Z,j,X)}}}else if(L.visible){const U=M(R,L,y,b);R.onBeforeShadow(i,R,A,W,Z,U,null),i.renderBufferDirect(W,null,Z,U,R,null),R.onAfterShadow(i,R,A,W,Z,U,null)}}const H=R.children;for(let Z=0,L=H.length;Z<L;Z++)w(H[Z],A,W,y,b)}function P(R){R.target.removeEventListener("dispose",P);for(const W in l){const y=l[W],b=R.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function ap(i,e,t){const n=t.isWebGL2;function s(){let C=!1;const re=new nt;let ae=null;const be=new nt(0,0,0,0);return{setMask:function(ye){ae!==ye&&!C&&(i.colorMask(ye,ye,ye,ye),ae=ye)},setLocked:function(ye){C=ye},setClear:function(ye,Je,Ze,dt,yt){yt===!0&&(ye*=dt,Je*=dt,Ze*=dt),re.set(ye,Je,Ze,dt),be.equals(re)===!1&&(i.clearColor(ye,Je,Ze,dt),be.copy(re))},reset:function(){C=!1,ae=null,be.set(-1,0,0,0)}}}function r(){let C=!1,re=null,ae=null,be=null;return{setTest:function(ye){ye?Pe(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(ye){re!==ye&&!C&&(i.depthMask(ye),re=ye)},setFunc:function(ye){if(ae!==ye){switch(ye){case mc:i.depthFunc(i.NEVER);break;case gc:i.depthFunc(i.ALWAYS);break;case vc:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case _c:i.depthFunc(i.EQUAL);break;case xc:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=ye}},setLocked:function(ye){C=ye},setClear:function(ye){be!==ye&&(i.clearDepth(ye),be=ye)},reset:function(){C=!1,re=null,ae=null,be=null}}}function o(){let C=!1,re=null,ae=null,be=null,ye=null,Je=null,Ze=null,dt=null,yt=null;return{setTest:function(Qe){C||(Qe?Pe(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Qe){re!==Qe&&!C&&(i.stencilMask(Qe),re=Qe)},setFunc:function(Qe,Mt,$t){(ae!==Qe||be!==Mt||ye!==$t)&&(i.stencilFunc(Qe,Mt,$t),ae=Qe,be=Mt,ye=$t)},setOp:function(Qe,Mt,$t){(Je!==Qe||Ze!==Mt||dt!==$t)&&(i.stencilOp(Qe,Mt,$t),Je=Qe,Ze=Mt,dt=$t)},setLocked:function(Qe){C=Qe},setClear:function(Qe){yt!==Qe&&(i.clearStencil(Qe),yt=Qe)},reset:function(){C=!1,re=null,ae=null,be=null,ye=null,Je=null,Ze=null,dt=null,yt=null}}}const a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let p={},m={},v=new WeakMap,g=[],f=null,d=!1,E=null,M=null,w=null,P=null,R=null,A=null,W=null,y=new Ve(0,0,0),b=0,k=!1,H=null,Z=null,L=null,U=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=q>=2);let te=null,ne={};const V=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),ce=new nt().fromArray(V),ve=new nt().fromArray($);function ge(C,re,ae,be){const ye=new Uint8Array(4),Je=i.createTexture();i.bindTexture(C,Je),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ae;Ze++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(re,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(re+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return Je}const Ce={};Ce[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pe(i.DEPTH_TEST),c.setFunc(cs),Ne(!1),S(Rr),Pe(i.CULL_FACE),fe(xn);function Pe(C){p[C]!==!0&&(i.enable(C),p[C]=!0)}function Ee(C){p[C]!==!1&&(i.disable(C),p[C]=!1)}function We(C,re){return m[C]!==re?(i.bindFramebuffer(C,re),m[C]=re,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=re),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=re)),!0):!1}function N(C,re){let ae=g,be=!1;if(C)if(ae=v.get(re),ae===void 0&&(ae=[],v.set(re,ae)),C.isWebGLMultipleRenderTargets){const ye=C.texture;if(ae.length!==ye.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Je=0,Ze=ye.length;Je<Ze;Je++)ae[Je]=i.COLOR_ATTACHMENT0+Je;ae.length=ye.length,be=!0}}else ae[0]!==i.COLOR_ATTACHMENT0&&(ae[0]=i.COLOR_ATTACHMENT0,be=!0);else ae[0]!==i.BACK&&(ae[0]=i.BACK,be=!0);be&&(t.isWebGL2?i.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function xt(C){return f!==C?(i.useProgram(C),f=C,!0):!1}const xe={[Dn]:i.FUNC_ADD,[ec]:i.FUNC_SUBTRACT,[tc]:i.FUNC_REVERSE_SUBTRACT};if(n)xe[Dr]=i.MIN,xe[Ir]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(xe[Dr]=C.MIN_EXT,xe[Ir]=C.MAX_EXT)}const Ae={[nc]:i.ZERO,[ic]:i.ONE,[sc]:i.SRC_COLOR,[ir]:i.SRC_ALPHA,[hc]:i.SRC_ALPHA_SATURATE,[cc]:i.DST_COLOR,[ac]:i.DST_ALPHA,[rc]:i.ONE_MINUS_SRC_COLOR,[sr]:i.ONE_MINUS_SRC_ALPHA,[lc]:i.ONE_MINUS_DST_COLOR,[oc]:i.ONE_MINUS_DST_ALPHA,[dc]:i.CONSTANT_COLOR,[uc]:i.ONE_MINUS_CONSTANT_COLOR,[fc]:i.CONSTANT_ALPHA,[pc]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(C,re,ae,be,ye,Je,Ze,dt,yt,Qe){if(C===xn){d===!0&&(Ee(i.BLEND),d=!1);return}if(d===!1&&(Pe(i.BLEND),d=!0),C!==Qo){if(C!==E||Qe!==k){if((M!==Dn||R!==Dn)&&(i.blendEquation(i.FUNC_ADD),M=Dn,R=Dn),Qe)switch(C){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cr:i.blendFunc(i.ONE,i.ONE);break;case Lr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,P=null,A=null,W=null,y.set(0,0,0),b=0,E=C,k=Qe}return}ye=ye||re,Je=Je||ae,Ze=Ze||be,(re!==M||ye!==R)&&(i.blendEquationSeparate(xe[re],xe[ye]),M=re,R=ye),(ae!==w||be!==P||Je!==A||Ze!==W)&&(i.blendFuncSeparate(Ae[ae],Ae[be],Ae[Je],Ae[Ze]),w=ae,P=be,A=Je,W=Ze),(dt.equals(y)===!1||yt!==b)&&(i.blendColor(dt.r,dt.g,dt.b,yt),y.copy(dt),b=yt),E=C,k=!1}function it(C,re){C.side===Wt?Ee(i.CULL_FACE):Pe(i.CULL_FACE);let ae=C.side===At;re&&(ae=!ae),Ne(ae),C.blending===ai&&C.transparent===!1?fe(xn):fe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const be=C.stencilWrite;l.setTest(be),be&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(C){H!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),H=C)}function S(C){C!==Ko?(Pe(i.CULL_FACE),C!==Z&&(C===Rr?i.cullFace(i.BACK):C===Jo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),Z=C}function _(C){C!==L&&(X&&i.lineWidth(C),L=C)}function F(C,re,ae){C?(Pe(i.POLYGON_OFFSET_FILL),(U!==re||G!==ae)&&(i.polygonOffset(re,ae),U=re,G=ae)):Ee(i.POLYGON_OFFSET_FILL)}function Q(C){C?Pe(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function J(C){C===void 0&&(C=i.TEXTURE0+Y-1),te!==C&&(i.activeTexture(C),te=C)}function ee(C,re,ae){ae===void 0&&(te===null?ae=i.TEXTURE0+Y-1:ae=te);let be=ne[ae];be===void 0&&(be={type:void 0,texture:void 0},ne[ae]=be),(be.type!==C||be.texture!==re)&&(te!==ae&&(i.activeTexture(ae),te=ae),i.bindTexture(C,re||Ce[C]),be.type=C,be.texture=re)}function pe(){const C=ne[te];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function je(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(C){ce.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ce.copy(C))}function Ye(C){ve.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function rt(C,re){let ae=u.get(re);ae===void 0&&(ae=new WeakMap,u.set(re,ae));let be=ae.get(C);be===void 0&&(be=i.getUniformBlockIndex(re,C.name),ae.set(C,be))}function Be(C,re){const be=u.get(re).get(C);h.get(re)!==be&&(i.uniformBlockBinding(re,be,C.__bindingPointIndex),h.set(re,be))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},te=null,ne={},m={},v=new WeakMap,g=[],f=null,d=!1,E=null,M=null,w=null,P=null,R=null,A=null,W=null,y=new Ve(0,0,0),b=0,k=!1,H=null,Z=null,L=null,U=null,G=null,ce.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Pe,disable:Ee,bindFramebuffer:We,drawBuffers:N,useProgram:xt,setBlending:fe,setMaterial:it,setFlipSided:Ne,setCullFace:S,setLineWidth:_,setPolygonOffset:F,setScissorTest:Q,activeTexture:J,bindTexture:ee,unbindTexture:pe,compressedTexImage2D:oe,compressedTexImage3D:de,texImage2D:_e,texImage3D:ue,updateUBOMapping:rt,uniformBlockBinding:Be,texStorage2D:He,texStorage3D:Te,texSubImage2D:Se,texSubImage3D:Oe,compressedTexSubImage2D:K,compressedTexSubImage3D:je,scissor:De,viewport:Ye,reset:ie}}function op(i,e,t,n,s,r,o){const a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,_){return m?new OffscreenCanvas(S,_):ps("canvas")}function g(S,_,F,Q){let J=1;if((S.width>Q||S.height>Q)&&(J=Q/Math.max(S.width,S.height)),J<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ee=_?fs:Math.floor,pe=ee(J*S.width),oe=ee(J*S.height);u===void 0&&(u=v(pe,oe));const de=F?v(pe,oe):u;return de.width=pe,de.height=oe,de.getContext("2d").drawImage(S,0,0,pe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+pe+"x"+oe+")."),de}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function f(S){return hr(S.width)&&hr(S.height)}function d(S){return a?!1:S.wrapS!==Xt||S.wrapT!==Xt||S.minFilter!==wt&&S.minFilter!==Ot}function E(S,_){return S.generateMipmaps&&_&&S.minFilter!==wt&&S.minFilter!==Ot}function M(S){i.generateMipmap(S)}function w(S,_,F,Q,J=!1){if(a===!1)return _;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ee=_;if(_===i.RED&&(F===i.FLOAT&&(ee=i.R32F),F===i.HALF_FLOAT&&(ee=i.R16F),F===i.UNSIGNED_BYTE&&(ee=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ee=i.R8UI),F===i.UNSIGNED_SHORT&&(ee=i.R16UI),F===i.UNSIGNED_INT&&(ee=i.R32UI),F===i.BYTE&&(ee=i.R8I),F===i.SHORT&&(ee=i.R16I),F===i.INT&&(ee=i.R32I)),_===i.RG&&(F===i.FLOAT&&(ee=i.RG32F),F===i.HALF_FLOAT&&(ee=i.RG16F),F===i.UNSIGNED_BYTE&&(ee=i.RG8)),_===i.RGBA){const pe=J?ls:$e.getTransfer(Q);F===i.FLOAT&&(ee=i.RGBA32F),F===i.HALF_FLOAT&&(ee=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ee=pe===et?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function P(S,_,F){return E(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==wt&&S.minFilter!==Ot?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){return S===wt||S===Ur||S===bs?i.NEAREST:i.LINEAR}function A(S){const _=S.target;_.removeEventListener("dispose",A),y(_),_.isVideoTexture&&h.delete(_)}function W(S){const _=S.target;_.removeEventListener("dispose",W),k(_)}function y(S){const _=n.get(S);if(_.__webglInit===void 0)return;const F=S.source,Q=p.get(F);if(Q){const J=Q[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(S),Object.keys(Q).length===0&&p.delete(F)}n.remove(S)}function b(S){const _=n.get(S);i.deleteTexture(_.__webglTexture);const F=S.source,Q=p.get(F);delete Q[_.__cacheKey],o.memory.textures--}function k(S){const _=S.texture,F=n.get(S),Q=n.get(_);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let ee=0;ee<F.__webglFramebuffer[J].length;ee++)i.deleteFramebuffer(F.__webglFramebuffer[J][ee]);else i.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)i.deleteFramebuffer(F.__webglFramebuffer[J]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let J=0,ee=_.length;J<ee;J++){const pe=n.get(_[J]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(_[J])}n.remove(_),n.remove(S)}let H=0;function Z(){H=0}function L(){const S=H;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),H+=1,S}function U(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function G(S,_){const F=n.get(S);if(S.isVideoTexture&&it(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(F,S,_);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function Y(S,_){const F=n.get(S);if(S.version>0&&F.__version!==S.version){ce(F,S,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function X(S,_){const F=n.get(S);if(S.version>0&&F.__version!==S.version){ce(F,S,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function q(S,_){const F=n.get(S);if(S.version>0&&F.__version!==S.version){ve(F,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const j={[or]:i.REPEAT,[Xt]:i.CLAMP_TO_EDGE,[cr]:i.MIRRORED_REPEAT},te={[wt]:i.NEAREST,[Ur]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[Cc]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},ne={[Gc]:i.NEVER,[Yc]:i.ALWAYS,[Hc]:i.LESS,[Mo]:i.LEQUAL,[Vc]:i.EQUAL,[qc]:i.GEQUAL,[Wc]:i.GREATER,[Xc]:i.NOTEQUAL};function V(S,_,F){if(F?(i.texParameteri(S,i.TEXTURE_WRAP_S,j[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,j[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,j[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,te[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,te[_.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==Xt||_.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,R(_.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,R(_.minFilter)),_.minFilter!==wt&&_.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ne[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===wt||_.minFilter!==bs&&_.minFilter!==Ri||_.type===_n&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Ci&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(S,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function $(S,_){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",A));const Q=_.source;let J=p.get(Q);J===void 0&&(J={},p.set(Q,J));const ee=U(_);if(ee!==S.__cacheKey){J[ee]===void 0&&(J[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[ee].usedTimes++;const pe=J[S.__cacheKey];pe!==void 0&&(J[S.__cacheKey].usedTimes--,pe.usedTimes===0&&b(_)),S.__cacheKey=ee,S.__webglTexture=J[ee].texture}return F}function ce(S,_,F){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);const J=$(S,_),ee=_.source;t.bindTexture(Q,S.__webglTexture,i.TEXTURE0+F);const pe=n.get(ee);if(ee.version!==pe.__version||J===!0){t.activeTexture(i.TEXTURE0+F);const oe=$e.getPrimaries($e.workingColorSpace),de=_.colorSpace===Ft?null:$e.getPrimaries(_.colorSpace),Se=_.colorSpace===Ft||oe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Oe=d(_)&&f(_.image)===!1;let K=g(_.image,Oe,!1,s.maxTextureSize);K=Ne(_,K);const je=f(K)||a,He=r.convert(_.format,_.colorSpace);let Te=r.convert(_.type),_e=w(_.internalFormat,He,Te,_.colorSpace,_.isVideoTexture);V(Q,_,je);let ue;const De=_.mipmaps,Ye=a&&_.isVideoTexture!==!0&&_e!==_o,rt=pe.__version===void 0||J===!0,Be=P(_,K,je);if(_.isDepthTexture)_e=i.DEPTH_COMPONENT,a?_.type===_n?_e=i.DEPTH_COMPONENT32F:_.type===vn?_e=i.DEPTH_COMPONENT24:_.type===Un?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:_.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Nn&&_e===i.DEPTH_COMPONENT&&_.type!==pr&&_.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=vn,Te=r.convert(_.type)),_.format===hi&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,_.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Un,Te=r.convert(_.type))),rt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,_e,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,_e,K.width,K.height,0,He,Te,null));else if(_.isDataTexture)if(De.length>0&&je){Ye&&rt&&t.texStorage2D(i.TEXTURE_2D,Be,_e,De[0].width,De[0].height);for(let ie=0,C=De.length;ie<C;ie++)ue=De[ie],Ye?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ue.width,ue.height,He,Te,ue.data):t.texImage2D(i.TEXTURE_2D,ie,_e,ue.width,ue.height,0,He,Te,ue.data);_.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(i.TEXTURE_2D,Be,_e,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,He,Te,K.data)):t.texImage2D(i.TEXTURE_2D,0,_e,K.width,K.height,0,He,Te,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ye&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,_e,De[0].width,De[0].height,K.depth);for(let ie=0,C=De.length;ie<C;ie++)ue=De[ie],_.format!==qt?He!==null?Ye?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,K.depth,He,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,_e,ue.width,ue.height,K.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,K.depth,He,Te,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,_e,ue.width,ue.height,K.depth,0,He,Te,ue.data)}else{Ye&&rt&&t.texStorage2D(i.TEXTURE_2D,Be,_e,De[0].width,De[0].height);for(let ie=0,C=De.length;ie<C;ie++)ue=De[ie],_.format!==qt?He!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,ue.width,ue.height,He,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ue.width,ue.height,He,Te,ue.data):t.texImage2D(i.TEXTURE_2D,ie,_e,ue.width,ue.height,0,He,Te,ue.data)}else if(_.isDataArrayTexture)Ye?(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,_e,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,He,Te,K.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,K.width,K.height,K.depth,0,He,Te,K.data);else if(_.isData3DTexture)Ye?(rt&&t.texStorage3D(i.TEXTURE_3D,Be,_e,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,He,Te,K.data)):t.texImage3D(i.TEXTURE_3D,0,_e,K.width,K.height,K.depth,0,He,Te,K.data);else if(_.isFramebufferTexture){if(rt)if(Ye)t.texStorage2D(i.TEXTURE_2D,Be,_e,K.width,K.height);else{let ie=K.width,C=K.height;for(let re=0;re<Be;re++)t.texImage2D(i.TEXTURE_2D,re,_e,ie,C,0,He,Te,null),ie>>=1,C>>=1}}else if(De.length>0&&je){Ye&&rt&&t.texStorage2D(i.TEXTURE_2D,Be,_e,De[0].width,De[0].height);for(let ie=0,C=De.length;ie<C;ie++)ue=De[ie],Ye?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,He,Te,ue):t.texImage2D(i.TEXTURE_2D,ie,_e,He,Te,ue);_.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(i.TEXTURE_2D,Be,_e,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,Te,K)):t.texImage2D(i.TEXTURE_2D,0,_e,He,Te,K);E(_,je)&&M(Q),pe.__version=ee.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ve(S,_,F){if(_.image.length!==6)return;const Q=$(S,_),J=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+F);const ee=n.get(J);if(J.version!==ee.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);const pe=$e.getPrimaries($e.workingColorSpace),oe=_.colorSpace===Ft?null:$e.getPrimaries(_.colorSpace),de=_.colorSpace===Ft||pe===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,Oe=_.image[0]&&_.image[0].isDataTexture,K=[];for(let ie=0;ie<6;ie++)!Se&&!Oe?K[ie]=g(_.image[ie],!1,!0,s.maxCubemapSize):K[ie]=Oe?_.image[ie].image:_.image[ie],K[ie]=Ne(_,K[ie]);const je=K[0],He=f(je)||a,Te=r.convert(_.format,_.colorSpace),_e=r.convert(_.type),ue=w(_.internalFormat,Te,_e,_.colorSpace),De=a&&_.isVideoTexture!==!0,Ye=ee.__version===void 0||Q===!0;let rt=P(_,je,He);V(i.TEXTURE_CUBE_MAP,_,He);let Be;if(Se){De&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,rt,ue,je.width,je.height);for(let ie=0;ie<6;ie++){Be=K[ie].mipmaps;for(let C=0;C<Be.length;C++){const re=Be[C];_.format!==qt?Te!==null?De?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,re.width,re.height,Te,re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,re.width,re.height,Te,_e,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,ue,re.width,re.height,0,Te,_e,re.data)}}}else{Be=_.mipmaps,De&&Ye&&(Be.length>0&&rt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,rt,ue,K[0].width,K[0].height));for(let ie=0;ie<6;ie++)if(Oe){De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,K[ie].width,K[ie].height,Te,_e,K[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ue,K[ie].width,K[ie].height,0,Te,_e,K[ie].data);for(let C=0;C<Be.length;C++){const ae=Be[C].image[ie].image;De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,ae.width,ae.height,Te,_e,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,ue,ae.width,ae.height,0,Te,_e,ae.data)}}else{De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Te,_e,K[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ue,Te,_e,K[ie]);for(let C=0;C<Be.length;C++){const re=Be[C];De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,Te,_e,re.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,ue,Te,_e,re.image[ie])}}}E(_,He)&&M(i.TEXTURE_CUBE_MAP),ee.__version=J.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ge(S,_,F,Q,J,ee){const pe=r.convert(F.format,F.colorSpace),oe=r.convert(F.type),de=w(F.internalFormat,pe,oe,F.colorSpace);if(!n.get(_).__hasExternalTextures){const Oe=Math.max(1,_.width>>ee),K=Math.max(1,_.height>>ee);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,de,Oe,K,_.depth,0,pe,oe,null):t.texImage2D(J,ee,de,Oe,K,0,pe,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),fe(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,n.get(F).__webglTexture,0,Ae(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,n.get(F).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(S,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||fe(_)){const J=_.depthTexture;J&&J.isDepthTexture&&(J.type===_n?Q=i.DEPTH_COMPONENT32F:J.type===vn&&(Q=i.DEPTH_COMPONENT24));const ee=Ae(_);fe(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Q,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Q,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){const Q=Ae(_);F&&fe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,_.width,_.height):fe(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const Q=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let J=0;J<Q.length;J++){const ee=Q[J],pe=r.convert(ee.format,ee.colorSpace),oe=r.convert(ee.type),de=w(ee.internalFormat,pe,oe,ee.colorSpace),Se=Ae(_);F&&fe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,de,_.width,_.height):fe(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,de,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,de,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G(_.depthTexture,0);const Q=n.get(_.depthTexture).__webglTexture,J=Ae(_);if(_.depthTexture.format===Nn)fe(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(_.depthTexture.format===hi)fe(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ee(S){const _=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(_.__webglFramebuffer,S)}else if(F){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]=i.createRenderbuffer(),Ce(_.__webglDepthbuffer[Q],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Ce(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(S,_,F){const Q=n.get(S);_!==void 0&&ge(Q.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ee(S)}function N(S){const _=S.texture,F=n.get(S),Q=n.get(_);S.addEventListener("dispose",W),S.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,o.memory.textures++);const J=S.isWebGLCubeRenderTarget===!0,ee=S.isWebGLMultipleRenderTargets===!0,pe=f(S)||a;if(J){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let de=0;de<_.mipmaps.length;de++)F.__webglFramebuffer[oe][de]=i.createFramebuffer()}else F.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)F.__webglFramebuffer[oe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ee)if(s.drawBuffers){const oe=S.texture;for(let de=0,Se=oe.length;de<Se;de++){const Oe=n.get(oe[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&fe(S)===!1){const oe=ee?_:[_];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const Se=oe[de];F.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[de]);const Oe=r.convert(Se.format,Se.colorSpace),K=r.convert(Se.type),je=w(Se.internalFormat,Oe,K,Se.colorSpace,S.isXRRenderTarget===!0),He=Ae(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,je,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,F.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),V(i.TEXTURE_CUBE_MAP,_,pe);for(let oe=0;oe<6;oe++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)ge(F.__webglFramebuffer[oe][de],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else ge(F.__webglFramebuffer[oe],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);E(_,pe)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const oe=S.texture;for(let de=0,Se=oe.length;de<Se;de++){const Oe=oe[de],K=n.get(Oe);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),V(i.TEXTURE_2D,Oe,pe),ge(F.__webglFramebuffer,S,Oe,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),E(Oe,pe)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?oe=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Q.__webglTexture),V(oe,_,pe),a&&_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)ge(F.__webglFramebuffer[de],S,_,i.COLOR_ATTACHMENT0,oe,de);else ge(F.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,oe,0);E(_,pe)&&M(oe),t.unbindTexture()}S.depthBuffer&&Ee(S)}function xt(S){const _=f(S)||a,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0,J=F.length;Q<J;Q++){const ee=F[Q];if(E(ee,_)){const pe=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(ee).__webglTexture;t.bindTexture(pe,oe),M(pe),t.unbindTexture()}}}function xe(S){if(a&&S.samples>0&&fe(S)===!1){const _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,Q=S.height;let J=i.COLOR_BUFFER_BIT;const ee=[],pe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(S),de=S.isWebGLMultipleRenderTargets===!0;if(de)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){ee.push(i.COLOR_ATTACHMENT0+Se),S.depthBuffer&&ee.push(pe);const Oe=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Oe===!1&&(S.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[Se]),Oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),de){const K=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,F,Q,0,0,F,Q,J,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,oe.__webglColorRenderbuffer[Se]);const Oe=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ae(S){return Math.min(s.maxSamples,S.samples)}function fe(S){const _=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function it(S){const _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function Ne(S,_){const F=S.colorSpace,Q=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===lr||F!==ln&&F!==Ft&&($e.getTransfer(F)===et?a===!1?e.has("EXT_sRGB")===!0&&Q===qt?(S.format=lr,S.minFilter=Ot,S.generateMipmaps=!1):_=Eo.sRGBToLinear(_):(Q!==qt||J!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=We,this.setupRenderTarget=N,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=fe}function cp(i,e,t){const n=t.isWebGL2;function s(r,o=Ft){let a;const c=$e.getTransfer(o);if(r===Mn)return i.UNSIGNED_BYTE;if(r===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(r===po)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Lc)return i.BYTE;if(r===Pc)return i.SHORT;if(r===pr)return i.UNSIGNED_SHORT;if(r===uo)return i.INT;if(r===vn)return i.UNSIGNED_INT;if(r===_n)return i.FLOAT;if(r===Ci)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Dc)return i.ALPHA;if(r===qt)return i.RGBA;if(r===Ic)return i.LUMINANCE;if(r===Uc)return i.LUMINANCE_ALPHA;if(r===Nn)return i.DEPTH_COMPONENT;if(r===hi)return i.DEPTH_STENCIL;if(r===lr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nc)return i.RED;if(r===mo)return i.RED_INTEGER;if(r===Oc)return i.RG;if(r===go)return i.RG_INTEGER;if(r===vo)return i.RGBA_INTEGER;if(r===ws||r===Ts||r===As||r===Rs)if(c===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ws)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===As)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ws)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ts)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===As)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nr||r===Or||r===Fr||r===Br)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Nr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Or)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Br)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_o)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===zr||r===kr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===zr)return c===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===kr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gr||r===Hr||r===Vr||r===Wr||r===Xr||r===qr||r===Yr||r===jr||r===$r||r===Kr||r===Jr||r===Zr||r===Qr||r===ea)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Gr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$r)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ea)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cs||r===ta||r===na)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Cs)return c===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ta)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===na)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fc||r===ia||r===sa||r===ra)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Cs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ia)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ra)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Un?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class lp extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hp={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const f=t.getJointPose(g,n),d=this._getHandJoint(l,g);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&p>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class dp extends ui{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,m=null,v=null;const g=t.getContextAttributes();let f=null,d=null;const E=[],M=[],w=new Ge;let P=null;const R=new Dt;R.layers.enable(1),R.viewport=new nt;const A=new Dt;A.layers.enable(2),A.viewport=new nt;const W=[R,A],y=new lp;y.layers.enable(1),y.layers.enable(2);let b=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=E[V];return $===void 0&&($=new Zs,E[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=E[V];return $===void 0&&($=new Zs,E[V]=$),$.getGripSpace()},this.getHand=function(V){let $=E[V];return $===void 0&&($=new Zs,E[V]=$),$.getHandSpace()};function H(V){const $=M.indexOf(V.inputSource);if($===-1)return;const ce=E[$];ce!==void 0&&(ce.update(V.inputSource,V.frame,l||o),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function Z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",L);for(let V=0;V<E.length;V++){const $=M[V];$!==null&&(M[V]=null,E[V].disconnect($))}b=null,k=null,e.setRenderTarget(f),m=null,p=null,u=null,s=null,d=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Fn(m.framebufferWidth,m.framebufferHeight,{format:qt,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,ce=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?hi:Nn,ce=g.stencil?Un:vn);const ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(ge),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Fn(p.textureWidth,p.textureHeight,{format:qt,type:Mn,depthTexture:new Uo(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ce=e.properties.get(d);Ce.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(V){for(let $=0;$<V.removed.length;$++){const ce=V.removed[$],ve=M.indexOf(ce);ve>=0&&(M[ve]=null,E[ve].disconnect(ce))}for(let $=0;$<V.added.length;$++){const ce=V.added[$];let ve=M.indexOf(ce);if(ve===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=M.length){M.push(ce),ve=Ce;break}else if(M[Ce]===null){M[Ce]=ce,ve=Ce;break}if(ve===-1)break}const ge=E[ve];ge&&ge.connect(ce)}}const U=new T,G=new T;function Y(V,$,ce){U.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(ce.matrixWorld);const ve=U.distanceTo(G),ge=$.projectionMatrix.elements,Ce=ce.projectionMatrix.elements,Pe=ge[14]/(ge[10]-1),Ee=ge[14]/(ge[10]+1),We=(ge[9]+1)/ge[5],N=(ge[9]-1)/ge[5],xt=(ge[8]-1)/ge[0],xe=(Ce[8]+1)/Ce[0],Ae=Pe*xt,fe=Pe*xe,it=ve/(-xt+xe),Ne=it*-xt;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ne),V.translateZ(it),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const S=Pe+it,_=Ee+it,F=Ae-Ne,Q=fe+(ve-Ne),J=We*Ee/_*S,ee=N*Ee/_*S;V.projectionMatrix.makePerspective(F,Q,J,ee,S,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;y.near=A.near=R.near=V.near,y.far=A.far=R.far=V.far,(b!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,k=y.far);const $=V.parent,ce=y.cameras;X(y,$);for(let ve=0;ve<ce.length;ve++)X(ce[ve],$);ce.length===2?Y(y,R,A):y.projectionMatrix.copy(R.projectionMatrix),q(V,y,$)};function q(V,$,ce){ce===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Li*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(V){c=V,p!==null&&(p.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let j=null;function te(V,$){if(h=$.getViewerPose(l||o),v=$,h!==null){const ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ve=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,ve=!0);for(let ge=0;ge<ce.length;ge++){const Ce=ce[ge];let Pe=null;if(m!==null)Pe=m.getViewport(Ce);else{const We=u.getViewSubImage(p,Ce);Pe=We.viewport,ge===0&&(e.setRenderTargetTextures(d,We.colorTexture,p.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(d))}let Ee=W[ge];Ee===void 0&&(Ee=new Dt,Ee.layers.enable(ge),Ee.viewport=new nt,W[ge]=Ee),Ee.matrix.fromArray(Ce.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Ce.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ge===0&&(y.matrix.copy(Ee.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ve===!0&&y.cameras.push(Ee)}}for(let ce=0;ce<E.length;ce++){const ve=M[ce],ge=E[ce];ve!==null&&ge!==void 0&&ge.update(ve,$,l||o)}j&&j(V,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),v=null}const ne=new Do;ne.setAnimationLoop(te),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}}function up(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Co(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,E,M,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,w)):d.isMeshMatcapMaterial?(r(f,d),v(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),g(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?c(f,d,E,M):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===At&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===At&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const E=e.get(d).envMap;if(E&&(f.envMap.value=E,f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function c(f,d,E,M){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*E,f.scale.value=M*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),e.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,E){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===At&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,d){d.matcap&&(f.matcap.value=d.matcap)}function g(f,d){const E=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fp(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,M){const w=M.program;n.uniformBlockBinding(E,w)}function l(E,M){let w=s[E.id];w===void 0&&(v(E),w=h(E),s[E.id]=w,E.addEventListener("dispose",f));const P=M.program;n.updateUBOMapping(E,P);const R=e.render.frame;r[E.id]!==R&&(p(E),r[E.id]=R)}function h(E){const M=u();E.__bindingPointIndex=M;const w=i.createBuffer(),P=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const M=s[E.id],w=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,A=w.length;R<A;R++){const W=Array.isArray(w[R])?w[R]:[w[R]];for(let y=0,b=W.length;y<b;y++){const k=W[y];if(m(k,R,y,P)===!0){const H=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let U=0;U<Z.length;U++){const G=Z[U],Y=g(G);typeof G=="number"||typeof G=="boolean"?(k.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+L,k.__data)):G.isMatrix3?(k.__data[0]=G.elements[0],k.__data[1]=G.elements[1],k.__data[2]=G.elements[2],k.__data[3]=0,k.__data[4]=G.elements[3],k.__data[5]=G.elements[4],k.__data[6]=G.elements[5],k.__data[7]=0,k.__data[8]=G.elements[6],k.__data[9]=G.elements[7],k.__data[10]=G.elements[8],k.__data[11]=0):(G.toArray(k.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,M,w,P){const R=E.value,A=M+"_"+w;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const W=P[A];if(typeof R=="number"||typeof R=="boolean"){if(W!==R)return P[A]=R,!0}else if(W.equals(R)===!1)return W.copy(R),!0}return!1}function v(E){const M=E.uniforms;let w=0;const P=16;for(let A=0,W=M.length;A<W;A++){const y=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,k=y.length;b<k;b++){const H=y[b],Z=Array.isArray(H.value)?H.value:[H.value];for(let L=0,U=Z.length;L<U;L++){const G=Z[L],Y=g(G),X=w%P;X!==0&&P-X<Y.boundary&&(w+=P-X),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=Y.storage}}}const R=w%P;return R>0&&(w+=P-R),E.__size=w,E.__cache={},this}function g(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function f(E){const M=E.target;M.removeEventListener("dispose",f);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class ko{constructor(e={}){const{canvas:t=cl(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,f=null;const d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;const M=this;let w=!1,P=0,R=0,A=null,W=-1,y=null;const b=new nt,k=new nt;let H=null;const Z=new Ve(0);let L=0,U=t.width,G=t.height,Y=1,X=null,q=null;const j=new nt(0,0,U,G),te=new nt(0,0,U,G);let ne=!1;const V=new _r;let $=!1,ce=!1,ve=null;const ge=new tt,Ce=new Ge,Pe=new T,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return A===null?Y:1}let N=n;function xt(x,D){for(let B=0;B<x.length;B++){const z=x[B],O=t.getContext(z,D);if(O!==null)return O}return null}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fr}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",re,!1),N===null){const D=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&D.shift(),N=xt(D,x),N===null)throw xt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let xe,Ae,fe,it,Ne,S,_,F,Q,J,ee,pe,oe,de,Se,Oe,K,je,He,Te,_e,ue,De,Ye;function rt(){xe=new Su(N),Ae=new gu(N,xe,e),xe.init(Ae),ue=new cp(N,xe,Ae),fe=new ap(N,xe,Ae),it=new wu(N),Ne=new qf,S=new op(N,xe,fe,Ne,Ae,ue,it),_=new _u(M),F=new Mu(M),Q=new Il(N,Ae),De=new pu(N,xe,Q,Ae),J=new Eu(N,Q,it,De),ee=new Cu(N,J,Q,it),He=new Ru(N,Ae,S),Oe=new vu(Ne),pe=new Xf(M,_,F,xe,Ae,De,Oe),oe=new up(M,Ne),de=new jf,Se=new ep(xe,Ae),je=new fu(M,_,F,fe,ee,p,c),K=new rp(M,ee,Ae),Ye=new fp(N,it,Ae,fe),Te=new mu(N,xe,it,Ae),_e=new bu(N,xe,it,Ae),it.programs=pe.programs,M.capabilities=Ae,M.extensions=xe,M.properties=Ne,M.renderLists=de,M.shadowMap=K,M.state=fe,M.info=it}rt();const Be=new dp(M,N);this.xr=Be,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=xe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=xe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(U,G,!1))},this.getSize=function(x){return x.set(U,G)},this.setSize=function(x,D,B=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=x,G=D,t.width=Math.floor(x*Y),t.height=Math.floor(D*Y),B===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(U*Y,G*Y).floor()},this.setDrawingBufferSize=function(x,D,B){U=x,G=D,Y=B,t.width=Math.floor(x*B),t.height=Math.floor(D*B),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(b)},this.getViewport=function(x){return x.copy(j)},this.setViewport=function(x,D,B,z){x.isVector4?j.set(x.x,x.y,x.z,x.w):j.set(x,D,B,z),fe.viewport(b.copy(j).multiplyScalar(Y).floor())},this.getScissor=function(x){return x.copy(te)},this.setScissor=function(x,D,B,z){x.isVector4?te.set(x.x,x.y,x.z,x.w):te.set(x,D,B,z),fe.scissor(k.copy(te).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(x){fe.setScissorTest(ne=x)},this.setOpaqueSort=function(x){X=x},this.setTransparentSort=function(x){q=x},this.getClearColor=function(x){return x.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(x=!0,D=!0,B=!0){let z=0;if(x){let O=!1;if(A!==null){const le=A.texture.format;O=le===vo||le===go||le===mo}if(O){const le=A.texture.type,me=le===Mn||le===vn||le===pr||le===Un||le===fo||le===po,Me=je.getClearColor(),we=je.getClearAlpha(),Fe=Me.r,Re=Me.g,Le=Me.b;me?(m[0]=Fe,m[1]=Re,m[2]=Le,m[3]=we,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=Fe,v[1]=Re,v[2]=Le,v[3]=we,N.clearBufferiv(N.COLOR,0,v))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",re,!1),de.dispose(),Se.dispose(),Ne.dispose(),_.dispose(),F.dispose(),ee.dispose(),De.dispose(),Ye.dispose(),pe.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",yt),Be.removeEventListener("sessionend",Qe),ve&&(ve.dispose(),ve=null),Mt.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const x=it.autoReset,D=K.enabled,B=K.autoUpdate,z=K.needsUpdate,O=K.type;rt(),it.autoReset=x,K.enabled=D,K.autoUpdate=B,K.needsUpdate=z,K.type=O}function re(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ae(x){const D=x.target;D.removeEventListener("dispose",ae),be(D)}function be(x){ye(x),Ne.remove(x)}function ye(x){const D=Ne.get(x).programs;D!==void 0&&(D.forEach(function(B){pe.releaseProgram(B)}),x.isShaderMaterial&&pe.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,B,z,O,le){D===null&&(D=Ee);const me=O.isMesh&&O.matrixWorld.determinant()<0,Me=Wo(x,D,B,z,O);fe.setMaterial(z,me);let we=B.index,Fe=1;if(z.wireframe===!0){if(we=J.getWireframeAttribute(B),we===void 0)return;Fe=2}const Re=B.drawRange,Le=B.attributes.position;let ot=Re.start*Fe,Ct=(Re.start+Re.count)*Fe;le!==null&&(ot=Math.max(ot,le.start*Fe),Ct=Math.min(Ct,(le.start+le.count)*Fe)),we!==null?(ot=Math.max(ot,0),Ct=Math.min(Ct,we.count)):Le!=null&&(ot=Math.max(ot,0),Ct=Math.min(Ct,Le.count));const ut=Ct-ot;if(ut<0||ut===1/0)return;De.setup(O,z,Me,B,we);let Qt,st=Te;if(we!==null&&(Qt=Q.get(we),st=_e,st.setIndex(Qt)),O.isMesh)z.wireframe===!0?(fe.setLineWidth(z.wireframeLinewidth*We()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(O.isLine){let ze=z.linewidth;ze===void 0&&(ze=1),fe.setLineWidth(ze*We()),O.isLineSegments?st.setMode(N.LINES):O.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else O.isPoints?st.setMode(N.POINTS):O.isSprite&&st.setMode(N.TRIANGLES);if(O.isBatchedMesh)st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)st.renderInstances(ot,ut,O.count);else if(B.isInstancedBufferGeometry){const ze=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ys=Math.min(B.instanceCount,ze);st.renderInstances(ot,ut,ys)}else st.render(ot,ut)};function Je(x,D,B){x.transparent===!0&&x.side===Wt&&x.forceSinglePass===!1?(x.side=At,x.needsUpdate=!0,Oi(x,D,B),x.side=Sn,x.needsUpdate=!0,Oi(x,D,B),x.side=Wt):Oi(x,D,B)}this.compile=function(x,D,B=null){B===null&&(B=x),f=Se.get(B),f.init(),E.push(f),B.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),x!==B&&x.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(M._useLegacyLights);const z=new Set;return x.traverse(function(O){const le=O.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Me=le[me];Je(Me,B,O),z.add(Me)}else Je(le,B,O),z.add(le)}),E.pop(),f=null,z},this.compileAsync=function(x,D,B=null){const z=this.compile(x,D,B);return new Promise(O=>{function le(){if(z.forEach(function(me){Ne.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){O(x);return}setTimeout(le,10)}xe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ze=null;function dt(x){Ze&&Ze(x)}function yt(){Mt.stop()}function Qe(){Mt.start()}const Mt=new Do;Mt.setAnimationLoop(dt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(x){Ze=x,Be.setAnimationLoop(x),x===null?Mt.stop():Mt.start()},Be.addEventListener("sessionstart",yt),Be.addEventListener("sessionend",Qe),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(D),D=Be.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,D,A),f=Se.get(x,E.length),f.init(),E.push(f),ge.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(ge),ce=this.localClippingEnabled,$=Oe.init(this.clippingPlanes,ce),g=de.get(x,d.length),g.init(),d.push(g),$t(x,D,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(X,q),this.info.render.frame++,$===!0&&Oe.beginShadows();const B=f.state.shadowsArray;if(K.render(B,x,D),$===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(g,x),f.setupLights(M._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let O=0,le=z.length;O<le;O++){const me=z[O];Sr(g,x,me,me.viewport)}}else Sr(g,x,D);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(M,x,D),De.resetDefaultState(),W=-1,y=null,E.pop(),E.length>0?f=E[E.length-1]:f=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function $t(x,D,B,z){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||V.intersectsSprite(x)){z&&Pe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ge);const me=ee.update(x),Me=x.material;Me.visible&&g.push(x,me,Me,B,Pe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||V.intersectsObject(x))){const me=ee.update(x),Me=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Pe.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Pe.copy(me.boundingSphere.center)),Pe.applyMatrix4(x.matrixWorld).applyMatrix4(ge)),Array.isArray(Me)){const we=me.groups;for(let Fe=0,Re=we.length;Fe<Re;Fe++){const Le=we[Fe],ot=Me[Le.materialIndex];ot&&ot.visible&&g.push(x,me,ot,B,Pe.z,Le)}}else Me.visible&&g.push(x,me,Me,B,Pe.z,null)}}const le=x.children;for(let me=0,Me=le.length;me<Me;me++)$t(le[me],D,B,z)}function Sr(x,D,B,z){const O=x.opaque,le=x.transmissive,me=x.transparent;f.setupLightsView(B),$===!0&&Oe.setGlobalState(M.clippingPlanes,B),le.length>0&&Vo(O,le,D,B),z&&fe.viewport(b.copy(z)),O.length>0&&Ni(O,D,B),le.length>0&&Ni(le,D,B),me.length>0&&Ni(me,D,B),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Vo(x,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const le=Ae.isWebGL2;ve===null&&(ve=new Fn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Ci:Mn,minFilter:Ri,samples:le?4:0})),M.getDrawingBufferSize(Ce),le?ve.setSize(Ce.x,Ce.y):ve.setSize(fs(Ce.x),fs(Ce.y));const me=M.getRenderTarget();M.setRenderTarget(ve),M.getClearColor(Z),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const Me=M.toneMapping;M.toneMapping=yn,Ni(x,B,z),S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve);let we=!1;for(let Fe=0,Re=D.length;Fe<Re;Fe++){const Le=D[Fe],ot=Le.object,Ct=Le.geometry,ut=Le.material,Qt=Le.group;if(ut.side===Wt&&ot.layers.test(z.layers)){const st=ut.side;ut.side=At,ut.needsUpdate=!0,Er(ot,B,z,Ct,ut,Qt),ut.side=st,ut.needsUpdate=!0,we=!0}}we===!0&&(S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve)),M.setRenderTarget(me),M.setClearColor(Z,L),M.toneMapping=Me}function Ni(x,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let O=0,le=x.length;O<le;O++){const me=x[O],Me=me.object,we=me.geometry,Fe=z===null?me.material:z,Re=me.group;Me.layers.test(B.layers)&&Er(Me,D,B,we,Fe,Re)}}function Er(x,D,B,z,O,le){x.onBeforeRender(M,D,B,z,O,le),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(M,D,B,z,x,le),O.transparent===!0&&O.side===Wt&&O.forceSinglePass===!1?(O.side=At,O.needsUpdate=!0,M.renderBufferDirect(B,D,z,O,x,le),O.side=Sn,O.needsUpdate=!0,M.renderBufferDirect(B,D,z,O,x,le),O.side=Wt):M.renderBufferDirect(B,D,z,O,x,le),x.onAfterRender(M,D,B,z,O,le)}function Oi(x,D,B){D.isScene!==!0&&(D=Ee);const z=Ne.get(x),O=f.state.lights,le=f.state.shadowsArray,me=O.state.version,Me=pe.getParameters(x,O.state,le,D,B),we=pe.getProgramCacheKey(Me);let Fe=z.programs;z.environment=x.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(x.isMeshStandardMaterial?F:_).get(x.envMap||z.environment),Fe===void 0&&(x.addEventListener("dispose",ae),Fe=new Map,z.programs=Fe);let Re=Fe.get(we);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===me)return wr(x,Me),Re}else Me.uniforms=pe.getUniforms(x),x.onBuild(B,Me,M),x.onBeforeCompile(Me,M),Re=pe.acquireProgram(Me,we),Fe.set(we,Re),z.uniforms=Me.uniforms;const Le=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Le.clippingPlanes=Oe.uniform),wr(x,Me),z.needsLights=qo(x),z.lightsStateVersion=me,z.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function br(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=os.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function wr(x,D){const B=Ne.get(x);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Wo(x,D,B,z,O){D.isScene!==!0&&(D=Ee),S.resetTextureUnits();const le=D.fog,me=z.isMeshStandardMaterial?D.environment:null,Me=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ln,we=(z.isMeshStandardMaterial?F:_).get(z.envMap||me),Fe=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Le=!!B.morphAttributes.position,ot=!!B.morphAttributes.normal,Ct=!!B.morphAttributes.color;let ut=yn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ut=M.toneMapping);const Qt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,st=Qt!==void 0?Qt.length:0,ze=Ne.get(z),ys=f.state.lights;if($===!0&&(ce===!0||x!==y)){const Ut=x===y&&z.id===W;Oe.setState(z,x,Ut)}let at=!1;z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ys.state.version||ze.outputColorSpace!==Me||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||ze.envMap!==we||z.fog===!0&&ze.fog!==le||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Oe.numPlanes||ze.numIntersection!==Oe.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==Re||ze.morphTargets!==Le||ze.morphNormals!==ot||ze.morphColors!==Ct||ze.toneMapping!==ut||Ae.isWebGL2===!0&&ze.morphTargetsCount!==st)&&(at=!0):(at=!0,ze.__version=z.version);let En=ze.currentProgram;at===!0&&(En=Oi(z,D,O));let Tr=!1,gi=!1,Ms=!1;const mt=En.getUniforms(),bn=ze.uniforms;if(fe.useProgram(En.program)&&(Tr=!0,gi=!0,Ms=!0),z.id!==W&&(W=z.id,gi=!0),Tr||y!==x){mt.setValue(N,"projectionMatrix",x.projectionMatrix),mt.setValue(N,"viewMatrix",x.matrixWorldInverse);const Ut=mt.map.cameraPosition;Ut!==void 0&&Ut.setValue(N,Pe.setFromMatrixPosition(x.matrixWorld)),Ae.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&mt.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,gi=!0,Ms=!0)}if(O.isSkinnedMesh){mt.setOptional(N,O,"bindMatrix"),mt.setOptional(N,O,"bindMatrixInverse");const Ut=O.skeleton;Ut&&(Ae.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),mt.setValue(N,"boneTexture",Ut.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(mt.setOptional(N,O,"batchingTexture"),mt.setValue(N,"batchingTexture",O._matricesTexture,S));const Ss=B.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0&&Ae.isWebGL2===!0)&&He.update(O,B,En),(gi||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,mt.setValue(N,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(bn.envMap.value=we,bn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),gi&&(mt.setValue(N,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&Xo(bn,Ms),le&&z.fog===!0&&oe.refreshFogUniforms(bn,le),oe.refreshMaterialUniforms(bn,z,Y,G,ve),os.upload(N,br(ze),bn,S)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(os.upload(N,br(ze),bn,S),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&mt.setValue(N,"center",O.center),mt.setValue(N,"modelViewMatrix",O.modelViewMatrix),mt.setValue(N,"normalMatrix",O.normalMatrix),mt.setValue(N,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ut=z.uniformsGroups;for(let Es=0,Yo=Ut.length;Es<Yo;Es++)if(Ae.isWebGL2){const Ar=Ut[Es];Ye.update(Ar,En),Ye.bind(Ar,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function Xo(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function qo(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,D,B){Ne.get(x.texture).__webglTexture=D,Ne.get(x.depthTexture).__webglTexture=B;const z=Ne.get(x);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,D){const B=Ne.get(x);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,B=0){A=x,P=D,R=B;let z=!0,O=null,le=!1,me=!1;if(x){const we=Ne.get(x);we.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):we.__webglFramebuffer===void 0?S.setupRenderTarget(x):we.__hasExternalTextures&&S.rebindTextures(x,Ne.get(x.texture).__webglTexture,Ne.get(x.depthTexture).__webglTexture);const Fe=x.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);const Re=Ne.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?O=Re[D][B]:O=Re[D],le=!0):Ae.isWebGL2&&x.samples>0&&S.useMultisampledRTT(x)===!1?O=Ne.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[B]:O=Re,b.copy(x.viewport),k.copy(x.scissor),H=x.scissorTest}else b.copy(j).multiplyScalar(Y).floor(),k.copy(te).multiplyScalar(Y).floor(),H=ne;if(fe.bindFramebuffer(N.FRAMEBUFFER,O)&&Ae.drawBuffers&&z&&fe.drawBuffers(x,O),fe.viewport(b),fe.scissor(k),fe.setScissorTest(H),le){const we=Ne.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,we.__webglTexture,B)}else if(me){const we=Ne.get(x.texture),Fe=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.__webglTexture,B||0,Fe)}W=-1},this.readRenderTargetPixels=function(x,D,B,z,O,le,me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ne.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){fe.bindFramebuffer(N.FRAMEBUFFER,Me);try{const we=x.texture,Fe=we.format,Re=we.type;if(Fe!==qt&&ue.convert(Fe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===Ci&&(xe.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Re!==Mn&&ue.convert(Re)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===_n&&(Ae.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-z&&B>=0&&B<=x.height-O&&N.readPixels(D,B,z,O,ue.convert(Fe),ue.convert(Re),le)}finally{const we=A!==null?Ne.get(A).__webglFramebuffer:null;fe.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(x,D,B=0){const z=Math.pow(2,-B),O=Math.floor(D.image.width*z),le=Math.floor(D.image.height*z);S.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,x.x,x.y,O,le),fe.unbindTexture()},this.copyTextureToTexture=function(x,D,B,z=0){const O=D.image.width,le=D.image.height,me=ue.convert(B.format),Me=ue.convert(B.type);S.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,x.x,x.y,O,le,me,Me,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,x.x,x.y,D.mipmaps[0].width,D.mipmaps[0].height,me,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,x.x,x.y,me,Me,D.image),z===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(x,D,B,z,O=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=x.max.x-x.min.x+1,me=x.max.y-x.min.y+1,Me=x.max.z-x.min.z+1,we=ue.convert(z.format),Fe=ue.convert(z.type);let Re;if(z.isData3DTexture)S.setTexture3D(z,0),Re=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)S.setTexture2DArray(z,0),Re=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Le=N.getParameter(N.UNPACK_ROW_LENGTH),ot=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ct=N.getParameter(N.UNPACK_SKIP_PIXELS),ut=N.getParameter(N.UNPACK_SKIP_ROWS),Qt=N.getParameter(N.UNPACK_SKIP_IMAGES),st=B.isCompressedTexture?B.mipmaps[O]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,st.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,x.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,x.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,x.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Re,O,D.x,D.y,D.z,le,me,Me,we,Fe,st.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Re,O,D.x,D.y,D.z,le,me,Me,we,st.data)):N.texSubImage3D(Re,O,D.x,D.y,D.z,le,me,Me,we,Fe,st),N.pixelStorei(N.UNPACK_ROW_LENGTH,Le),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ct),N.pixelStorei(N.UNPACK_SKIP_ROWS,ut),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt),O===0&&z.generateMipmaps&&N.generateMipmap(Re),fe.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?S.setTextureCube(x,0):x.isData3DTexture?S.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?S.setTexture2DArray(x,0):S.setTexture2D(x,0),fe.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,fe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===mr?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===vs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?On:xo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===On?pt:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pp extends ko{}pp.prototype.isWebGL1Renderer=!0;class ms{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new ms(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mp extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ja extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ni=new tt,$a=new tt,rs=[],Ka=new Ke,gp=new tt,Mi=new he,Si=new Di;class vp extends he{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ja(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ke),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ni),Ka.copy(e.boundingBox).applyMatrix4(ni),this.boundingBox.union(Ka)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ni),Si.copy(e.boundingSphere).applyMatrix4(ni),this.boundingSphere.union(Si)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Mi.geometry=this.geometry,Mi.material=this.material,Mi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Si.copy(this.boundingSphere),Si.applyMatrix4(n),e.ray.intersectsSphere(Si)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ni),$a.multiplyMatrices(n,ni),Mi.matrixWorld=$a,Mi.raycast(e,rs);for(let o=0,a=rs.length;o<a;o++){const c=rs[o];c.instanceId=r,c.object=this,t.push(c)}rs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ja(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class _p extends Rt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jt extends hn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],m=[];let v=0;const g=[],f=n/2;let d=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(p,3)),this.setAttribute("uv",new It(m,2));function E(){const w=new T,P=new T;let R=0;const A=(t-e)/n;for(let W=0;W<=r;W++){const y=[],b=W/r,k=b*(t-e)+e;for(let H=0;H<=s;H++){const Z=H/s,L=Z*c+a,U=Math.sin(L),G=Math.cos(L);P.x=k*U,P.y=-b*n+f,P.z=k*G,u.push(P.x,P.y,P.z),w.set(U,A,G).normalize(),p.push(w.x,w.y,w.z),m.push(Z,1-b),y.push(v++)}g.push(y)}for(let W=0;W<s;W++)for(let y=0;y<r;y++){const b=g[y][W],k=g[y+1][W],H=g[y+1][W+1],Z=g[y][W+1];h.push(b,k,Z),h.push(k,H,Z),R+=6}l.addGroup(d,R,0),d+=R}function M(w){const P=v,R=new Ge,A=new T;let W=0;const y=w===!0?e:t,b=w===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,f*b,0),p.push(0,b,0),m.push(.5,.5),v++;const k=v;for(let H=0;H<=s;H++){const L=H/s*c+a,U=Math.cos(L),G=Math.sin(L);A.x=y*G,A.y=f*b,A.z=y*U,u.push(A.x,A.y,A.z),p.push(0,b,0),R.x=U*.5+.5,R.y=G*.5*b+.5,m.push(R.x,R.y),v++}for(let H=0;H<s;H++){const Z=P+H,L=k+H;w===!0?h.push(L,L+1,Z):h.push(L+1,L,Z),W+=3}l.addGroup(d,W,w===!0?1:2),d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yr extends jt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new yr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zn extends hn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new T,p=new T,m=[],v=[],g=[],f=[];for(let d=0;d<=n;d++){const E=[],M=d/n;let w=0;d===0&&o===0?w=.5/t:d===n&&c===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){const R=P/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+M*a),v.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),f.push(R+w,1-M),E.push(l++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){const M=h[d][E+1],w=h[d][E],P=h[d+1][E],R=h[d+1][E+1];(d!==0||o>0)&&m.push(M,w,R),(d!==n-1||c<Math.PI)&&m.push(w,P,R)}this.setIndex(m),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(g,3)),this.setAttribute("uv",new It(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qe extends Ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mr extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Qs=new tt,Ja=new T,Za=new T;class Go{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ja.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ja),Za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Za),t.updateMatrixWorld(),Qs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qa=new tt,Ei=new T,er=new T;class xp extends Go{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ei.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ei),er.copy(n.position),er.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(er),n.updateMatrixWorld(),s.makeTranslation(-Ei.x,-Ei.y,-Ei.z),Qa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa)}}class tr extends Mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yp extends Go{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mp extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new yp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sp extends Mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ep{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=eo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function eo(){return(typeof performance>"u"?Date:performance).now()}class bp{constructor(e,t,n=0,s=1/0){this.ray=new _s(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ur(e,this,n,t),n.sort(to),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ur(e[s],this,n,t);return n.sort(to),n}}function to(i,e){return i.distance-e.distance}function ur(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)ur(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fr);const bi="blackveil_save_v1",no="blackveil_settings_v1",io=1;class wp{save(e){try{const t=this.load(),n={version:io,timestamp:Date.now(),player:{health:100,position:{x:0,y:0,z:0},rotation:0,weapons:["m9_tactical"],currentWeapon:0,ammo:{"9mm":90},...t?.player||{},...e.player||{}},progression:{level:1,xp:0,skillPoints:0,skills:{},currency:0,...t?.progression||{},...e.progression||{}},missions:{activeMissionId:"ch1_m1_entry",completed:[],objectives:{},flags:{},...t?.missions||{},...e.missions||{}},world:{discoveredLocations:[],collectedLore:[],factionRep:{VANGUARD:0,ASHEN:10,HELIX:-20,VEIL:-50},powerStates:{},...t?.world||{},...e.world||{}},settings:{quality:"auto",sensitivity:1,language:"en",volumes:{master:1,music:.7,sfx:.9,voice:1,ambience:.8,ui:.8},fpsLimit:60,...t?.settings||{},...e.settings||{}},inventory:{items:[],equipped:{},...t?.inventory||{},...e.inventory||{}}};return localStorage.setItem(bi,JSON.stringify(n)),!0}catch(t){return console.error("[Save] Failed",t),!1}}load(){try{const e=localStorage.getItem(bi);if(!e)return null;const t=JSON.parse(e);return t.version!==io&&console.warn("[Save] Version mismatch, migrating"),t}catch(e){return console.error("[Save] Corrupt",e),null}}saveSettings(e){localStorage.setItem(no,JSON.stringify(e))}loadSettings(){try{return JSON.parse(localStorage.getItem(no)||"null")}catch{return null}}hasSave(){return!!localStorage.getItem(bi)}deleteSave(){localStorage.removeItem(bi)}exportSave(){return localStorage.getItem(bi)}}const Bt=new wp,so={quality:"auto",resolutionScale:1,textureQuality:1,shadowQuality:1,effectsQuality:1,viewDistance:1,fpsLimit:60,masterVolume:1,musicVolume:.7,sfxVolume:.9,voiceVolume:1,ambienceVolume:.8,uiVolume:.8,cameraSensitivity:1,aimSensitivity:1,invertY:!1,gyroEnabled:!1,gyroSensitivity:1,vibration:!0,subtitles:!0,subtitleSize:1,language:"en",touchOpacity:.85,controlLayout:null};class Tp{constructor(){I(this,"settings");I(this,"listeners",new Set);const e=Bt.loadSettings();this.settings={...so,...e||{}}}get(e){return this.settings[e]}set(e,t){this.settings[e]=t,this.persist()}update(e){Object.assign(this.settings,e),this.persist()}persist(){Bt.saveSettings(this.settings),this.listeners.forEach(e=>e(this.settings))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}reset(){this.settings={...so},this.persist()}}const Xe=new Tp;class Ap{constructor(e){I(this,"renderer");I(this,"scene");I(this,"camera");I(this,"quality","auto");I(this,"resolutionScale",1);I(this,"stats",{fps:60,frameTime:16,drawCalls:0,triangles:0,geometries:0,textures:0});I(this,"frameTimes",[]);I(this,"lastFpsUpdate",0);I(this,"adaptiveQualityLevel",2);I(this,"canvas");this.canvas=e,this.renderer=new ko({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=pt,this.renderer.toneMapping=lo,this.renderer.toneMappingExposure=1.1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nr,this.scene=new mp,this.scene.background=new Ve(328968),this.scene.fog=new ms(657940,.012),this.camera=new Dt(65,window.innerWidth/window.innerHeight,.1,800),this.camera.position.set(0,2,6),this.quality=Xe.get("quality"),Xe.onChange(t=>this.applySettings(t.quality,t.resolutionScale)),window.addEventListener("resize",()=>this.resize()),this.resize(),this.applySettings(this.quality,Xe.get("resolutionScale"))}applySettings(e,t){this.quality=e,this.resolutionScale=t;let n=e;e==="auto"&&(n=["low","medium","high","ultra"][this.adaptiveQualityLevel]);const s=n==="low",r=n==="medium",o=n==="high",a=n==="ultra";this.renderer.shadowMap.enabled=!s,this.renderer.shadowMap.type=a?nr:Zo,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio*t*(s?.7:a?1:.9),2)),this.scene.fog instanceof ms&&(this.scene.fog.density=s?.018:r?.014:o?.012:.01)}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}beginFrame(){}endFrame(e){this.frameTimes.push(e),this.frameTimes.length>60&&this.frameTimes.shift();const t=performance.now();if(t-this.lastFpsUpdate>500){const n=this.frameTimes.reduce((s,r)=>s+r,0)/this.frameTimes.length;this.stats.frameTime=n*1e3,this.stats.fps=1e3/this.stats.frameTime,this.stats.drawCalls=this.renderer.info.render.calls,this.stats.triangles=this.renderer.info.render.triangles,this.stats.geometries=this.renderer.info.memory.geometries,this.stats.textures=this.renderer.info.memory.textures,this.lastFpsUpdate=t,this.quality==="auto"&&(this.stats.fps<28&&this.adaptiveQualityLevel>0?(this.adaptiveQualityLevel--,this.applySettings("auto",this.resolutionScale)):this.stats.fps>58&&this.adaptiveQualityLevel<3&&(this.adaptiveQualityLevel++,this.applySettings("auto",this.resolutionScale)))}}getStats(){return{...this.stats}}getAdaptiveLevel(){return this.adaptiveQualityLevel}render(){this.renderer.render(this.scene,this.camera)}setBackground(e){this.scene.background=new Ve(e)}dispose(){this.renderer.dispose()}}class Rp{constructor(e){I(this,"state",{move:new Ge,look:new Ge,sprint:!1,crouch:!1,jump:!1,fire:!1,aim:!1,reload:!1,interact:!1,melee:!1,switchWeapon:0,slide:!1,inventory:!1,map:!1,pause:!1});I(this,"keys",new Set);I(this,"touchJoysticks",{move:new Ge,look:new Ge});I(this,"mouseDown",!1);I(this,"pointerLocked",!1);this.canvas=e,this.bindKeyboard(),this.bindMouse(),this.bindTouch(),this.bindGamepadPoll()}bindKeyboard(){window.addEventListener("keydown",e=>{this.keys.add(e.code.toLowerCase()),e.code==="KeyR"&&(this.state.reload=!0),e.code==="KeyF"&&(this.state.interact=!0),e.code==="KeyE"&&(this.state.interact=!0),e.code==="Space"&&(this.state.jump=!0),(e.code==="ControlLeft"||e.code==="KeyC")&&(this.state.crouch=!0),e.code==="ShiftLeft"&&(this.state.sprint=!0),e.code==="KeyV"&&(this.state.melee=!0),e.code==="Tab"&&(this.state.inventory=!0),e.code==="KeyM"&&(this.state.map=!0),e.code==="Escape"&&(this.state.pause=!0),e.code==="Digit1"&&(this.state.switchWeapon=-1),e.code==="Digit2"&&(this.state.switchWeapon=1)}),window.addEventListener("keyup",e=>{this.keys.delete(e.code.toLowerCase()),e.code==="KeyR"&&(this.state.reload=!1),(e.code==="KeyF"||e.code==="KeyE")&&(this.state.interact=!1),e.code==="Space"&&(this.state.jump=!1),(e.code==="ControlLeft"||e.code==="KeyC")&&(this.state.crouch=!1),e.code==="ShiftLeft"&&(this.state.sprint=!1),e.code==="KeyV"&&(this.state.melee=!1),e.code==="Tab"&&(this.state.inventory=!1),e.code==="KeyM"&&(this.state.map=!1),e.code==="Escape"&&(this.state.pause=!1),(e.code==="Digit1"||e.code==="Digit2")&&(this.state.switchWeapon=0)})}bindMouse(){this.canvas.addEventListener("mousedown",e=>{e.button===0&&(this.state.fire=!0),e.button===2&&(this.state.aim=!0),this.mouseDown=!0}),window.addEventListener("mouseup",e=>{e.button===0&&(this.state.fire=!1),e.button===2&&(this.state.aim=!1),this.mouseDown=!1}),this.canvas.addEventListener("mousemove",e=>{document.pointerLockElement===this.canvas&&(this.state.look.x=e.movementX*.002,this.state.look.y=e.movementY*.002)}),this.canvas.addEventListener("wheel",e=>{this.state.switchWeapon=Math.sign(e.deltaY),setTimeout(()=>this.state.switchWeapon=0,100)}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault())}bindTouch(){}bindGamepadPoll(){}setMoveVector(e,t){this.touchJoysticks.move.set(e,t)}setLookVector(e,t){this.touchJoysticks.look.set(e,t)}update(){const e=new Ge;(this.keys.has("keyw")||this.keys.has("arrowup"))&&(e.y+=1),(this.keys.has("keys")||this.keys.has("arrowdown"))&&(e.y-=1),(this.keys.has("keya")||this.keys.has("arrowleft"))&&(e.x-=1),(this.keys.has("keyd")||this.keys.has("arrowright"))&&(e.x+=1),e.lengthSq()>0&&e.normalize(),this.touchJoysticks.move.lengthSq()>.01?this.state.move.copy(this.touchJoysticks.move):this.state.move.copy(e),this.touchJoysticks.look.lengthSq()>.001&&this.state.look.copy(this.touchJoysticks.look);const t=navigator.getGamepads();for(const n of t){if(!n)continue;const s=.2,r=Math.abs(n.axes[0])>s?n.axes[0]:0,o=Math.abs(n.axes[1])>s?-n.axes[1]:0;(r||o)&&this.state.move.set(r,o);const a=Math.abs(n.axes[2])>s?n.axes[2]:0,c=Math.abs(n.axes[3])>s?n.axes[3]:0;(a||c)&&this.state.look.set(a*.05,c*.05),n.buttons[0]?.pressed&&(this.state.jump=!0),n.buttons[1]?.pressed&&(this.state.crouch=!0),n.buttons[2]?.pressed&&(this.state.reload=!0),n.buttons[3]?.pressed&&(this.state.interact=!0),n.buttons[5]?.pressed&&(this.state.fire=!0),n.buttons[4]?.pressed&&(this.state.aim=!0)}}consumeLook(){const e=this.state.look.clone();return this.state.look.set(0,0),e}resetTransient(){this.state.switchWeapon=0}}class Cp{constructor(){I(this,"ctx",null);I(this,"masterGain",null);I(this,"gains",new Map);I(this,"sounds",new Map);I(this,"activeSources",new Set);I(this,"musicState","exploration");I(this,"musicOscillators",[]);this.initContextOnInteraction()}initContextOnInteraction(){const e=()=>{if(!this.ctx){try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.connect(this.ctx.destination),["master","music","sfx","voice","ambience","ui"].forEach(t=>{const n=this.ctx.createGain();n.connect(t==="master"?this.ctx.destination:this.masterGain),this.gains.set(t,n)}),this.updateVolumes(),Xe.onChange(()=>this.updateVolumes()),this.startProceduralAmbience(),console.log("[Audio] Context initialized")}catch(t){console.warn("[Audio] Failed to init",t)}window.removeEventListener("click",e),window.removeEventListener("keydown",e),window.removeEventListener("touchstart",e)}};window.addEventListener("click",e,{once:!1}),window.addEventListener("keydown",e,{once:!1}),window.addEventListener("touchstart",e,{once:!1})}updateVolumes(){if(!this.ctx)return;const e=Xe.settings;this.gains.get("master").gain.value=e.masterVolume,this.gains.get("music").gain.value=e.musicVolume,this.gains.get("sfx").gain.value=e.sfxVolume,this.gains.get("voice").gain.value=e.voiceVolume,this.gains.get("ambience").gain.value=e.ambienceVolume,this.gains.get("ui").gain.value=e.uiVolume}startProceduralAmbience(){if(this.ctx)try{const e=this.ctx,t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),s=n.getChannelData(0);for(let a=0;a<t;a++)s[a]=(Math.random()*2-1)*.02*Math.sin(a*1e-4);const r=e.createBufferSource();r.buffer=n,r.loop=!0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=400,r.connect(o),o.connect(this.gains.get("ambience")),r.start()}catch{}}playProceduralSound(e,t){if(!(!this.ctx||!this.masterGain))try{const n=this.ctx,s=n.createOscillator(),r=n.createGain(),o=n.createBiquadFilter();let a=440,c=.1,l=.3;switch(e){case"pistol":a=180,c=.15,l=.6;break;case"rifle":a=120,c=.12,l=.7;break;case"smg":a=200,c=.08,l=.5;break;case"shotgun":a=80,c=.25,l=.8;break;case"sniper":a=90,c=.3,l=.9;break;case"footstep":a=60,c=.05,l=.15;break;case"reload":a=300,c=.4,l=.3;break;case"hit":a=150,c=.1,l=.5;break;case"ui_click":a=800,c=.08,l=.2;break;case"terminal":a=600,c=.15,l=.25;break;case"door":a=100,c=.5,l=.4;break;default:a=440,c=.1,l=.3}if(s.type=e.includes("shot")||e==="rifle"||e==="pistol"?"square":"sine",s.frequency.value=a,e.includes("shot")||e==="rifle"||e==="pistol"||e==="smg"||e==="shotgun"||e==="sniper"){const h=n.sampleRate*c,u=n.createBuffer(1,h,n.sampleRate),p=u.getChannelData(0);for(let v=0;v<h;v++)p[v]=(Math.random()*2-1)*Math.pow(1-v/h,2)*l;const m=n.createBufferSource();m.buffer=u,m.connect(o),o.type="bandpass",o.frequency.value=a*2,o.connect(this.gains.get("sfx")),m.start();return}r.gain.setValueAtTime(l,n.currentTime),r.gain.exponentialRampToValueAtTime(.001,n.currentTime+c),s.connect(o),o.connect(r),r.connect(this.gains.get(e.startsWith("ui")?"ui":"sfx")),s.start(),s.stop(n.currentTime+c)}catch(n){console.warn("[Audio] play failed",n)}}setMusicState(e){if(this.musicState=e,!!this.ctx){this.musicOscillators.forEach(t=>{try{t.stop()}catch{}}),this.musicOscillators=[];try{const t=this.ctx,n=e==="combat"?55:e==="stealth"?40:e==="tension"?48:36;for(let s=0;s<2;s++){const r=t.createOscillator(),o=t.createGain();r.type="sawtooth",r.frequency.value=n*(s+1)*.5,o.gain.value=e==="combat"?.06:.02;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=e==="combat"?800:400,r.connect(a),a.connect(o),o.connect(this.gains.get("music")),r.start(),this.musicOscillators.push(r)}}catch{}}}playUI(e){const t={click:"ui_click",hover:"ui_click",open:"terminal",close:"door",error:"hit"};this.playProceduralSound(t[e]||"ui_click")}setListenerPosition(e,t){if(!this.ctx?.listener)return;const n=this.ctx.listener;"positionX"in n?(n.positionX.value=e.x,n.positionY.value=e.y,n.positionZ.value=e.z):n.setPosition(e.x,e.y,e.z)}}const bt=new Cp;class Lp{constructor(e){I(this,"position",new T(0,1.8,0));I(this,"velocity",new T);I(this,"rotation",new pi(0,0,0,"YXZ"));I(this,"yaw",0);I(this,"pitch",0);I(this,"stance","stand");I(this,"moveState","idle");I(this,"isGrounded",!0);I(this,"isAiming",!1);I(this,"isSprinting",!1);I(this,"isCrouching",!1);I(this,"stats",{health:100,maxHealth:100,armor:50,stamina:100,maxStamina:100});I(this,"walkSpeed",2.2);I(this,"jogSpeed",4.2);I(this,"sprintSpeed",6.5);I(this,"crouchSpeed",1.6);I(this,"jumpForce",5.5);I(this,"gravity",-14);I(this,"coyoteTime",.15);I(this,"coyoteTimer",0);I(this,"footstepTimer",0);I(this,"colliders",[]);I(this,"playerBox",new Ke);I(this,"radius",.45);I(this,"heightStand",1.8);I(this,"heightCrouch",1.1);I(this,"mesh");I(this,"cameraTarget",new T);this.input=e,this.mesh=new Zt}setColliders(e){this.colliders=e}checkCollision(e,t){const n=new Ke(new T(e.x-this.radius,e.y,e.z-this.radius),new T(e.x+this.radius,e.y+t,e.z+this.radius));for(const s of this.colliders)if(n.intersectsBox(s))return!0;return!1}moveWithCollision(e,t){let n=this.position.clone().add(new T(e.x,0,0));this.checkCollision(n,this.stance==="crouch"?this.heightCrouch:this.heightStand)?this.velocity.x=0:this.position.x=n.x,n=this.position.clone().add(new T(0,0,e.z)),this.checkCollision(n,this.stance==="crouch"?this.heightCrouch:this.heightStand)?this.velocity.z=0:this.position.z=n.z,n=this.position.clone().add(new T(0,e.y,0)),this.checkCollision(n,this.stance==="crouch"?this.heightCrouch:this.heightStand)?e.y<0?(this.isGrounded=!0,this.velocity.y=0):this.velocity.y=0:this.position.y=n.y}update(e,t){this.input.update();const n=this.input.consumeLook();this.yaw-=n.x*(this.isAiming?.6:1),this.pitch+=n.y*(this.isAiming?.6:1),this.pitch=cn.clamp(this.pitch,-1.4,1.4),this.input.state.crouch&&(this.isCrouching=this.isCrouching?this.isCrouching:!0);const s=this.input.state.crouch;this.stance=s?"crouch":"stand",this.isCrouching=s,this.isSprinting=this.input.state.sprint&&this.input.state.move.length()>.5&&!this.isCrouching&&this.stats.stamina>5,this.isAiming=this.input.state.aim;const r=this.input.state.move,o=new T(0,0,-1).applyAxisAngle(new T(0,1,0),this.yaw),a=new T(1,0,0).applyAxisAngle(new T(0,1,0),this.yaw),c=new T;c.addScaledVector(o,r.y),c.addScaledVector(a,r.x),c.lengthSq()>0&&c.normalize();let l=0;r.lengthSq()>.01&&(this.isSprinting?l=this.sprintSpeed:this.isCrouching?l=this.crouchSpeed:r.length()>.9?l=this.jogSpeed:l=this.walkSpeed,this.isAiming&&(l*=.55));const h=this.isGrounded?18:6,u=c.multiplyScalar(l);this.velocity.x=cn.lerp(this.velocity.x,u.x,h*e),this.velocity.z=cn.lerp(this.velocity.z,u.z,h*e),this.isGrounded||(this.velocity.y+=this.gravity*e),this.input.state.jump&&(this.isGrounded||this.coyoteTimer>0)&&(this.velocity.y=this.jumpForce,this.isGrounded=!1,this.coyoteTimer=0,this.moveState="jump",bt.playProceduralSound("footstep")),this.isGrounded?this.coyoteTimer=this.coyoteTime:this.coyoteTimer-=e;const p=this.position.clone();p.y-=.1;let m=!1;const v=new Ke(new T(this.position.x-this.radius*.8,this.position.y-.2,this.position.z-this.radius*.8),new T(this.position.x+this.radius*.8,this.position.y+.1,this.position.z+this.radius*.8));for(const E of this.colliders)if(v.intersectsBox(E)&&this.velocity.y<=.1){m=!0;break}this.position.y<=.05&&(m=!0,this.position.y=.05),this.isGrounded=m,m&&this.velocity.y<0&&(this.velocity.y=0);const g=this.velocity.clone().multiplyScalar(e);this.moveWithCollision(g,e),this.isSprinting?(this.stats.stamina=Math.max(0,this.stats.stamina-22*e),this.stats.stamina===0&&(this.isSprinting=!1)):this.stats.stamina=Math.min(this.stats.maxStamina,this.stats.stamina+18*e);const f=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.z*this.velocity.z);this.isGrounded?f<.1?this.moveState="idle":this.isSprinting?this.moveState="sprint":this.isCrouching?this.moveState="crouch_walk":f>3.5?this.moveState="jog":this.moveState="walk":this.moveState=this.velocity.y>0?"jump":"fall",f>.5&&this.isGrounded&&(this.footstepTimer-=e*f,this.footstepTimer<=0&&(this.footstepTimer=this.isSprinting?.32:this.isCrouching?.7:.45,(!this.isCrouching||Math.random()>.5)&&bt.playProceduralSound("footstep"))),this.mesh.position.copy(this.position),this.mesh.rotation.y=this.yaw;const d=this.stance==="crouch"?.9:1.65;this.cameraTarget.set(this.position.x,this.position.y+d,this.position.z)}getCameraTarget(){return this.cameraTarget.clone()}takeDamage(e){let t=e;if(this.stats.armor>0){const n=Math.min(this.stats.armor,t*.6);this.stats.armor-=n,t-=n}return this.stats.health=Math.max(0,this.stats.health-t),bt.playProceduralSound("hit"),this.stats.health<=0}heal(e){this.stats.health=Math.min(this.stats.maxHealth,this.stats.health+e)}getPosition(){return this.position.clone()}}class Pp{constructor(e,t){I(this,"target",new T);I(this,"desiredPosition",new T);I(this,"currentPosition",new T);I(this,"offset",new T(0,1.8,4.2));I(this,"shoulder",.4);I(this,"fovNormal",65);I(this,"fovAim",42);I(this,"shakeIntensity",0);I(this,"shakeDecay",0);I(this,"collisionRadius",.3);this.camera=e,this.colliders=t}setColliders(e){this.colliders=e}setShoulder(e){this.shoulder=e==="right"?.4:-.4}addShake(e,t=4){this.shakeIntensity=Math.max(this.shakeIntensity,e),this.shakeDecay=t}update(e,t,n,s,r,o){this.target.lerp(t,12*e);const a=r?1.1:o?3.2:4.2,c=o?.2:.4,l=new tt().makeRotationFromEuler(new pi(s,n,0,"YXZ")),h=new T(0,0,a).applyMatrix4(l),u=new T(1,0,0).applyMatrix4(l).multiplyScalar(this.shoulder),p=new T(0,c,0);this.desiredPosition.copy(this.target).add(h).add(u).add(p);const m=this.desiredPosition.clone().sub(this.target),v=m.length();m.normalize();let g=v;const f=this.target.clone();for(const w of this.colliders){const R=new _s(f,m).intersectBox(w,new T);if(R){const A=R.distanceTo(f);A<g&&A>.3&&(g=A-this.collisionRadius)}}const d=Math.max(.5,g);this.desiredPosition.copy(this.target).add(m.multiplyScalar(d)),this.currentPosition.lerp(this.desiredPosition,(r?18:8)*e),this.camera.position.copy(this.currentPosition);const E=this.target.clone();if(r){const w=new T(0,-.1,-8).applyMatrix4(l);E.add(w)}this.camera.lookAt(E);const M=r?this.fovAim:this.fovNormal;if(this.camera.fov=cn.lerp(this.camera.fov,M,8*e),this.camera.updateProjectionMatrix(),this.shakeIntensity>.001){const w=(Math.random()-.5)*this.shakeIntensity,P=(Math.random()-.5)*this.shakeIntensity;this.camera.position.x+=w,this.camera.position.y+=P,this.shakeIntensity=Math.max(0,this.shakeIntensity-this.shakeDecay*e)}}getCamera(){return this.camera}}const Cn={materials:{concrete:{roughness:.9,metalness:.05,color:9079429},asphalt:{roughness:.85,metalness:.02,color:1710622},metal:{roughness:.4,metalness:.8,color:6974066},paintedMetal:{roughness:.5,metalness:.3,color:2767434},glass:{roughness:.05,metalness:.1,color:8956620},fabric:{roughness:.95,metalness:0,color:2763314},tactical:{roughness:.7,metalness:.1,color:2962477}}};class Dp{constructor(e=10){I(this,"cellSize");I(this,"map");this.cellSize=e,this.map=new Map}key(e,t){return`${Math.floor(e/this.cellSize)},${Math.floor(t/this.cellSize)}`}insert(e){const t=this.key(e.min.x,e.min.z),n=this.key(e.max.x,e.max.z),[s,r]=t.split(",").map(Number),[o,a]=n.split(",").map(Number);for(let c=s;c<=o;c++)for(let l=r;l<=a;l++){const h=`${c},${l}`;this.map.has(h)||this.map.set(h,[]),this.map.get(h).push(e)}}query(e,t){const n=[],s=this.key(e.x-t,e.z-t),r=this.key(e.x+t,e.z+t),[o,a]=s.split(",").map(Number),[c,l]=r.split(",").map(Number),h=new Set;for(let u=o;u<=c;u++)for(let p=a;p<=l;p++){const m=this.map.get(`${u},${p}`);if(m)for(const v of m)h.has(v)||(h.add(v),n.push(v))}return n}clear(){this.map.clear()}}class Ip{constructor(e){I(this,"group",new Zt);I(this,"colliders",[]);I(this,"spatialHash",new Dp(12));I(this,"districts",[]);I(this,"materials",new Map);I(this,"instancedMeshes",[]);this.scene=e,this.scene.add(this.group),this.createMaterials()}createMaterials(){const e=(t,n)=>{const s=new qe({color:n.color??8947848,roughness:n.roughness??.8,metalness:n.metalness??.1});return this.materials.set(t,s),s};e("concrete",Cn.materials.concrete),e("asphalt",Cn.materials.asphalt),e("metal",Cn.materials.metal),e("paintedMetal",Cn.materials.paintedMetal),e("glass",Cn.materials.glass),e("fabric",Cn.materials.fabric),e("tactical",Cn.materials.tactical),e("emergency",{color:16720384,roughness:.6,metalness:.2}),e("neon",{color:58879,roughness:.2,metalness:.5})}addCollider(e){this.colliders.push(e),this.spatialHash.insert(e)}async buildDistrict(){for(;this.group.children.length;)this.group.remove(this.group.children[0]);this.colliders=[],this.spatialHash.clear(),this.districts=[];const e=new Kt(400,400),t=this.materials.get("asphalt"),n=new he(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.group.add(n),this.addCollider(new Ke(new T(-200,-2,-200),new T(200,0,200))),this.createCentralStreet(),this.createResidentialBlock(),this.createCorporateBuilding(),this.createIndustrialYard(),this.createUnderground(),this.createRooftops(),this.createHiddenLocation(),this.setupLighting(),this.addEnvironmentalStorytelling(),console.log(`[World] Built ${this.colliders.length} colliders, ${this.group.children.length} meshes`)}createCentralStreet(){const e={id:"central",name:"Central Street",bounds:new Ke(new T(-50,0,-100),new T(50,30,20)),powerState:"partial"};this.districts.push(e);const t=[{x:-22,z:-60,w:12,d:16,h:28},{x:24,z:-65,w:14,d:12,h:32},{x:-28,z:-30,w:10,d:18,h:22},{x:26,z:-25,w:12,d:14,h:26},{x:-18,z:-5,w:16,d:10,h:18},{x:20,z:0,w:18,d:12,h:20}];for(const h of t)this.createSimpleBuilding(h.x,h.z,h.w,h.d,h.h);for(let h=0;h<8;h++){const u=(Math.random()-.5)*40,p=-80+Math.random()*70;this.createBarrier(u,p)}const n=new jt(.1,.12,6,8),s=this.materials.get("metal"),r=12,o=new vp(n,s,r);let a=0;for(let h=0;h<r;h++){const u=(h%2===0?-12:12)+(Math.random()-.5)*2,p=-85+h*12,m=new tt().makeTranslation(u,3,p);o.setMatrixAt(a++,m)}o.instanceMatrix.needsUpdate=!0,o.castShadow=!0,this.group.add(o);const c=new Kt(.3,6),l=new qe({color:16777215,roughness:.9});for(let h=0;h<20;h++){const u=new he(c,l);u.rotation.x=-Math.PI/2,u.position.set(0,.02,-90+h*6),this.group.add(u)}}createResidentialBlock(){const e={id:"residential",name:"Abandoned Residential",bounds:new Ke(new T(-70,0,-10),new T(-10,25,60)),powerState:"blackout"};this.districts.push(e);const t=-35,n=20,s=5;for(let a=0;a<s;a++){const c=a*3.2,l=new Ue(28,.3,20),h=new he(l,this.materials.get("concrete"));if(h.position.set(t,c,n),h.receiveShadow=!0,this.group.add(h),a>0&&this.addCollider(new Ke(new T(t-14,c-.2,n-10),new T(t+14,c+.2,n+10))),a<s-1){const u=this.materials.get("concrete"),p=[{pos:[t,c+1.6,n-10],size:[28,3.2,.4]},{pos:[t,c+1.6,n+10],size:[28,3.2,.4]},{pos:[t-14,c+1.6,n],size:[.4,3.2,20]},{pos:[t+14,c+1.6,n],size:[.4,3.2,20]}];for(const m of p){const v=new Ue(m.size[0],m.size[1],m.size[2]),g=new he(v,u);g.position.set(m.pos[0],m.pos[1],m.pos[2]),g.castShadow=!0,g.receiveShadow=!0,this.group.add(g),this.addCollider(new Ke(new T(m.pos[0]-m.size[0]/2,m.pos[1]-m.size[1]/2,m.pos[2]-m.size[2]/2),new T(m.pos[0]+m.size[0]/2,m.pos[1]+m.size[1]/2,m.pos[2]+m.size[2]/2)))}for(let m=-10;m<=10;m+=4){const v=new Kt(1.2,1.6),g=this.materials.get("glass"),f=new he(v,g);f.position.set(t+m,c+1.6,n+10.21),this.group.add(f)}}}const r=new Ue(3,16,4),o=new he(r,this.materials.get("metal"));o.position.set(t+10,8,n-6),this.group.add(o),this.addCollider(new Ke(new T(t+8.5,0,n-8),new T(t+11.5,16,n-4)))}createCorporateBuilding(){const e={id:"corporate",name:"Helix Tower",bounds:new Ke(new T(-20,0,40),new T(30,60,90)),powerState:"powered"};this.districts.push(e);const t=5,n=65,s=48,r=new Ue(24,s,22),o=new qe({color:1710626,roughness:.3,metalness:.7}),a=new he(r,o);a.position.set(t,s/2,n),a.castShadow=!0,a.receiveShadow=!0,this.group.add(a),this.addCollider(new Ke(new T(t-12,0,n-11),new T(t+12,s,n+11)));for(let u=4;u<s;u+=3)for(let p=-10;p<=10;p+=2.5){const m=new Kt(2,2.5),v=new qe({color:8956620,transparent:!0,opacity:.15,roughness:.05,metalness:.2}),g=new he(m,v);g.position.set(t+p,u,n+11.1),this.group.add(g)}const c=new Ue(6,4,2),l=this.materials.get("metal"),h=new he(c,l);h.position.set(t,2,n-12),this.group.add(h)}createIndustrialYard(){const e={id:"industrial",name:"Industrial Yard",bounds:new Ke(new T(20,0,-50),new T(80,20,10)),powerState:"partial"};this.districts.push(e);for(let o=0;o<3;o++){const a=45+o*18,c=-20,l=new Ue(14,8,18),h=new qe({color:3815998,roughness:.8,metalness:.2}),u=new he(l,h);u.position.set(a,4,c),u.castShadow=!0,this.group.add(u),this.addCollider(new Ke(new T(a-7,0,c-9),new T(a+7,8,c+9)))}const t=[9054762,2775690,4872746,9079338];for(let o=0;o<12;o++){const a=35+o%4*6.5,c=-35+Math.floor(o/4)*6.5,l=new Ue(6,2.6,2.6),h=new qe({color:t[o%t.length],roughness:.7,metalness:.3}),u=new he(l,h);u.position.set(a,1.3,c),u.castShadow=!0,this.group.add(u),this.addCollider(new Ke(new T(a-3,0,c-1.3),new T(a+3,2.6,c+1.3)))}const n=new Ue(8,4,6),s=this.materials.get("paintedMetal"),r=new he(n,s);r.position.set(55,2,-5),this.group.add(r),this.addCollider(new Ke(new T(51,0,-8),new T(59,4,-2)))}createUnderground(){const e={id:"underground",name:"Service Tunnels",bounds:new Ke(new T(-40,-8,-90),new T(40,0,80)),powerState:"blackout"};this.districts.push(e);const t=160,n=new jt(3.5,3.5,t,16,1,!0),s=new qe({color:2763310,roughness:.9,side:Wt}),r=new he(n,s);r.rotation.z=Math.PI/2,r.position.set(0,-3,-10),this.group.add(r);const o=new Ue(t,.4,6),a=new he(o,this.materials.get("concrete"));a.position.set(0,-5.5,-10),this.group.add(a)}createRooftops(){const e=[{x:-22,z:-60,h:28},{x:24,z:-65,h:32},{x:-35,z:20,h:16},{x:5,z:65,h:48}];for(const r of e){const o=new Ue(12,1,.4),a=this.materials.get("concrete"),c=new he(o,a);c.position.set(r.x,r.h+.5,r.z-5),this.group.add(c);const l=new he(o,a);l.position.set(r.x,r.h+.5,r.z+5),this.group.add(l)}const t=new Ue(8,.3,1.2),n=new qe({color:4864554,roughness:.8}),s=new he(t,n);s.position.set(-10,28,-60),this.group.add(s)}createHiddenLocation(){const e=new Ue(6,3,6),t=new qe({color:1710622,roughness:.9}),n=new he(e,t);n.position.set(-45,.5,-75),this.group.add(n),this.addCollider(new Ke(new T(-48,0,-78),new T(-42,3,-72)));const s=new Ue(.8,.5,.6),r=new qe({color:65416,emissive:65416,emissiveIntensity:.6}),o=new he(s,r);o.position.set(-45,1,-75),this.group.add(o)}createSimpleBuilding(e,t,n,s,r){const o=new Ue(n,r,s),a=new qe({color:2763314,roughness:.8,metalness:.15}),c=new he(o,a);c.position.set(e,r/2,t),c.castShadow=!0,c.receiveShadow=!0,this.group.add(c),this.addCollider(new Ke(new T(e-n/2,0,t-s/2),new T(e+n/2,r,t+s/2)));for(let l=3;l<r-1;l+=2.5)for(let h=-n/2+1;h<n/2-.5;h+=2){const u=new Kt(.9,1.2),p=new qe({color:3359829,transparent:!0,opacity:Math.random()>.7?.15:.05,emissive:Math.random()>.85?16755268:0,emissiveIntensity:Math.random()>.85?.2:0}),m=new he(u,p);m.position.set(e+h,l,t+s/2+.06),this.group.add(m)}}createBarrier(e,t){const n=new Ue(2,1,.4),s=new qe({color:11184810,roughness:.7}),r=new he(n,s);r.position.set(e,.5,t),r.rotation.y=Math.random()*.5,r.castShadow=!0,this.group.add(r),this.addCollider(new Ke(new T(e-1,0,t-.2),new T(e+1,1,t+.2)))}setupLighting(){const e=new Sp(4210768,.6);this.scene.add(e);const t=new Mp(11193599,.8);t.position.set(40,60,20),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.near=1,t.shadow.camera.far=150,t.shadow.camera.left=-80,t.shadow.camera.right=80,t.shadow.camera.top=80,t.shadow.camera.bottom=-80,this.scene.add(t);const n=16755268;for(let o=0;o<6;o++){const a=new tr(n,2,25);a.position.set(o%2===0?-12:12,5.5,-80+o*14),this.scene.add(a)}const s=new tr(16720384,1.5,15);s.position.set(55,4,-5),this.scene.add(s);const r=new tr(58879,1,30);r.position.set(5,24,65),this.scene.add(r)}addEnvironmentalStorytelling(){const e=new Kt(2,1.2),t=document.createElement("canvas");t.width=256,t.height=152;const n=t.getContext("2d");n.fillStyle="#ffcc00",n.fillRect(0,0,256,152),n.fillStyle="#000",n.font="bold 24px monospace",n.fillText("EVACUATION",20,40),n.font="14px monospace",n.fillText("SECTOR 7 - MANDATORY",20,70),n.fillText("FOLLOW HELIX PROTOCOL",20,90);const s=new _p(t),r=new qe({map:s,roughness:.8}),o=new he(e,r);o.position.set(-10,2.5,-55),o.rotation.y=.3,this.group.add(o);const a=new Ue(4.5,1.4,2),c=new qe({color:2763322,roughness:.6,metalness:.4}),l=new he(a,c);l.position.set(3,.7,-45),l.rotation.y=.2,l.castShadow=!0,this.group.add(l),this.addCollider(new Ke(new T(.75,0,-46),new T(5.25,1.4,-44)))}getDistrictAt(e){for(const t of this.districts)if(t.bounds.containsPoint(e))return t;return null}setPowerState(e,t){const n=this.districts.find(s=>s.id===e);n&&(n.powerState=t)}dispose(){this.scene.remove(this.group)}}class Up{constructor(){I(this,"group",new Zt);I(this,"mixer",null);I(this,"parts",new Map);this.buildMesh()}buildMesh(){const e=new qe({color:2962477,roughness:.7,metalness:.1}),t=new qe({color:13215369,roughness:.8}),n=new qe({color:1710622,roughness:.5,metalness:.3}),s=new qe({color:3815998,roughness:.6,metalness:.2}),r=new Ue(.6,.75,.35),o=new he(r,e);o.position.y=1.1,o.castShadow=!0,this.group.add(o),this.parts.set("torso",o);const a=new Ue(.68,.6,.42),c=new he(a,s);c.position.y=1.15,c.castShadow=!0,this.group.add(c);const l=new zn(.22,12,12),h=new he(l,t);h.position.y=1.7,h.castShadow=!0,this.group.add(h),this.parts.set("head",h);const u=new jt(.24,.26,.12,12),p=new he(u,n);p.position.y=1.82,this.group.add(p);const m=new jt(.09,.09,.6,8),v=new he(m,e);v.position.set(-.42,1.1,0),v.rotation.z=-.1,v.castShadow=!0,this.group.add(v);const g=new he(m,e);g.position.set(.42,1.1,0),g.rotation.z=.1,g.castShadow=!0,this.group.add(g),this.parts.set("rightArm",g);const f=new jt(.13,.12,.85,8),d=new he(f,e);d.position.set(-.18,.42,0),d.castShadow=!0,this.group.add(d);const E=new he(f,e);E.position.set(.18,.42,0),E.castShadow=!0,this.group.add(E);const M=new Ue(.5,.6,.25),w=new he(M,n);w.position.set(0,1.1,-.3),w.castShadow=!0,this.group.add(w);const P=new Ue(.12,.25,.18),R=new he(P,n);R.position.set(.38,.55,.05),this.group.add(R);const A=new Zt;A.position.set(.5,1,.15),A.name="weaponSocket",this.group.add(A);const W=new zn(.11,8,8),y=new qe({color:1118481,roughness:.9}),b=new he(W,y);b.position.set(-.42,.75,0),this.group.add(b);const k=new he(W,y);k.position.set(.42,.75,0),this.group.add(k);const H=new Ue(.18,.12,.32),Z=new qe({color:657930,roughness:.8}),L=new he(H,Z);L.position.set(-.18,.06,.05),this.group.add(L);const U=new he(H,Z);U.position.set(.18,.06,.05),this.group.add(U),this.group.traverse(G=>{G.isMesh&&(G.frustumCulled=!1)})}getWeaponSocket(){return this.group.getObjectByName("weaponSocket")}update(e,t,n){const s=performance.now()*.001,r=this.parts.get("rightArm");r&&(t==="sprint"?r.rotation.x=Math.sin(s*8)*.6:t==="walk"||t==="jog"?r.rotation.x=Math.sin(s*5)*.4:r.rotation.x=cn.lerp(r.rotation.x,0,e*5)),t==="idle"?this.group.position.y=Math.sin(s*1.2)*.015:this.group.position.y=cn.lerp(this.group.position.y,0,e*8)}setPosition(e){this.group.position.copy(e)}setRotation(e){this.group.rotation.y=e}}class Np{constructor(e){I(this,"group",new Zt);I(this,"config");I(this,"health");I(this,"head");I(this,"body");this.config=e,this.health=e.health,this.buildMesh()}buildMesh(){const e=new qe({color:this.config.color,roughness:.7,metalness:.2}),t=new qe({color:1118484,roughness:.6}),n=new Ue(.55*this.config.scale,.7*this.config.scale,.32*this.config.scale);this.body=new he(n,e),this.body.position.y=1*this.config.scale,this.body.castShadow=!0,this.group.add(this.body);const s=new zn(.2*this.config.scale,10,10);if(this.head=new he(s,new qe({color:9075306,roughness:.8})),this.head.position.y=1.55*this.config.scale,this.group.add(this.head),this.config.id==="heavy"){const f=new Ue(.7,.5,.45),d=new he(f,t);d.position.y=1.1,this.group.add(d);const E=new zn(.26,10,10),M=new he(E,t);M.position.y=1.58,this.group.add(M)}else if(this.config.id==="sniper"){const f=new he(new Ue(.6,.8,.4),new qe({color:3820074,roughness:.95}));f.position.y=1,this.group.add(f)}const r=new jt(.08,.08,.55,6),o=new he(r,e);o.position.set(-.38,1,0),this.group.add(o);const a=new he(r,e);a.position.set(.38,1,0),this.group.add(a);const c=new jt(.11,.1,.8,6),l=new he(c,e);l.position.set(-.15,.4,0),this.group.add(l);const h=new he(c,e);h.position.set(.15,.4,0),this.group.add(h);const u=new Ue(.08,.08,.7),p=new he(u,t);p.position.set(.45,1,.3),this.group.add(p);const m=new Kt(.2,.2),v=new Ui({color:this.config.color,side:Wt}),g=new he(m,v);g.position.set(0,2.1,0),g.name="indicator",this.group.add(g)}takeDamage(e,t=!1){const n=t?e*2.2:e;return this.health-=n,this.body.material.emissive.setHex(5570560),setTimeout(()=>{this.body.material.emissive.setHex(0)},80),this.health<=0}setPosition(e){this.group.position.copy(e)}getPosition(){return this.group.position.clone()}lookAt(e){const t=e.clone().sub(this.group.position);if(t.y=0,t.lengthSq()>.01){const n=Math.atan2(t.x,t.z);this.group.rotation.y=n}}dispose(e){e.remove(this.group)}}const Ho=[{id:"m9_tactical",name:"M9 Tactical",category:"pistol",damage:28,fireRate:420,magazine:15,reserve:90,reloadTime:1.4,range:35,recoil:.35,spread:.02,projectile:"hitscan",fireModes:["semi"],attachments:["suppressor_pistol","red_dot_micro"],sound:"pistol",description:"Standard sidearm. Reliable, quiet with suppressor."},{id:"vec_9",name:"VEC-9",category:"smg",damage:19,fireRate:850,magazine:32,reserve:160,reloadTime:1.8,range:40,recoil:.45,spread:.06,projectile:"hitscan",fireModes:["auto","burst"],attachments:["suppressor_smg","holo_sight","grip_vertical"],sound:"smg",description:"High rate CQB weapon. Melts armor up close."},{id:"ar_41",name:"AR-41 Vanguard",category:"rifle",damage:36,fireRate:650,magazine:30,reserve:150,reloadTime:2.1,range:85,recoil:.6,spread:.03,projectile:"hitscan",fireModes:["auto","semi"],attachments:["acog","suppressor_rifle","grip_angled","extended_mag"],sound:"rifle",description:"Workhorse rifle. Balanced for Veyra operations."},{id:"sg_breach",name:"Breacher-12",category:"shotgun",damage:14,fireRate:120,magazine:8,reserve:32,reloadTime:3.2,range:18,recoil:1.2,spread:.18,projectile:"hitscan",fireModes:["semi"],attachments:[],sound:"shotgun",description:"Door kicker. Devastating in tight corridors."},{id:"sr_phantom",name:"Phantom SR",category:"sniper",damage:110,fireRate:45,magazine:5,reserve:20,reloadTime:2.8,range:220,recoil:1.8,spread:.005,projectile:"projectile",fireModes:["semi"],attachments:["scope_8x","suppressor_sniper"],sound:"sniper",description:"Long eye of Veyra. One shot changes everything."},{id:"knife_tactical",name:"Tactical Blade",category:"melee",damage:75,fireRate:90,magazine:1,reserve:0,reloadTime:0,range:2.2,recoil:0,spread:0,projectile:"hitscan",fireModes:["semi"],attachments:[],sound:"melee",description:"Silent. Final. The city teaches you to be quiet."}];class Op{constructor(){I(this,"weapons",[]);I(this,"currentIndex",0);I(this,"lastFireTime",0);I(this,"isReloading",!1);I(this,"reloadTimer",0);I(this,"recoil",0);I(this,"spread",0)}createWeaponMesh(e){const t=new Zt,n=new qe({color:1710622,roughness:.5,metalness:.6}),s=new qe({color:4868686,roughness:.3,metalness:.8});let r;switch(e.category){case"pistol":r=new Ue(.08,.08,.28);break;case"smg":r=new Ue(.1,.12,.45);break;case"rifle":r=new Ue(.1,.14,.65);break;case"shotgun":r=new Ue(.12,.14,.7);break;case"sniper":r=new Ue(.11,.15,.95);break;case"melee":r=new Ue(.04,.04,.35);break;default:r=new Ue(.1,.1,.5)}const o=new he(r,n);o.castShadow=!0,t.add(o);const a=new jt(.02,.02,.3,6);a.rotateX(Math.PI/2);const c=new he(a,s);if(c.position.z=r.parameters.depth/2+.15,t.add(c),e.category!=="melee"){const p=new Ue(.04,.06,.12),m=new he(p,s);m.position.set(0,.1,-.05),t.add(m)}const l=new yr(.06,.18,6),h=new Ui({color:16755268,transparent:!0,opacity:0}),u=new he(l,h);return u.rotation.x=Math.PI/2,u.position.z=r.parameters.depth/2+.35,u.name="muzzleFlash",t.add(u),t}addWeapon(e){const t=Ho.find(s=>s.id===e);if(!t||this.weapons.find(s=>s.config.id===e))return null;const n={config:t,ammoInMag:t.magazine,reserve:t.reserve,attachments:[],mesh:this.createWeaponMesh(t)};return this.weapons.push(n),n}getCurrent(){return this.weapons[this.currentIndex]??null}switchWeapon(e){this.weapons.length<=1||(this.currentIndex=(this.currentIndex+e+this.weapons.length)%this.weapons.length,bt.playProceduralSound("reload"))}setWeaponIndex(e){e>=0&&e<this.weapons.length&&(this.currentIndex=e,bt.playProceduralSound("reload"))}canFire(){const e=this.getCurrent();return!e||this.isReloading?!1:e.config.category==="melee"?performance.now()-this.lastFireTime>6e4/e.config.fireRate:e.ammoInMag>0&&performance.now()-this.lastFireTime>6e4/e.config.fireRate}fire(e,t){const n=this.getCurrent();if(!n||!this.canFire())return null;this.lastFireTime=performance.now(),n.config.category!=="melee"&&n.ammoInMag--,this.recoil=Math.min(1.5,this.recoil+n.config.recoil*.25),this.spread=Math.min(.25,this.spread+n.config.spread*.6);const s=n.mesh.getObjectByName("muzzleFlash");return s&&(s.material.opacity=.9,setTimeout(()=>{s.material.opacity=0},40)),bt.playProceduralSound(n.config.sound),{hit:!1,damage:n.config.damage}}startReload(){const e=this.getCurrent();return!e||this.isReloading||e.ammoInMag===e.config.magazine||e.reserve<=0?!1:(this.isReloading=!0,this.reloadTimer=e.config.reloadTime,bt.playProceduralSound("reload"),!0)}update(e){if(this.isReloading&&(this.reloadTimer-=e,this.reloadTimer<=0)){const t=this.getCurrent();if(t){const n=t.config.magazine-t.ammoInMag,s=Math.min(n,t.reserve);t.ammoInMag+=s,t.reserve-=s}this.isReloading=!1}this.recoil=Math.max(0,this.recoil-e*2.5),this.spread=Math.max(0,this.spread-e*1.8)}getRecoil(){return this.recoil}getSpread(){return this.spread}getIsReloading(){return this.isReloading}addAmmo(e,t){for(const n of this.weapons)n.config.category!=="melee"&&(n.reserve+=t)}}class Fp{constructor(e,t,n){I(this,"state","patrol");I(this,"memory",{lastKnownPlayerPos:null,lastSeenTime:0,lastHeardPos:null,deadTeammates:0,suspiciousLocations:[],threatLevel:0});I(this,"position");I(this,"patrolPoints",[]);I(this,"patrolIndex",0);I(this,"detection",0);I(this,"stateTimer",0);I(this,"velocity",new T);I(this,"targetPos",null);I(this,"fireCooldown",0);I(this,"squadId",null);this.character=e,this.config=t,this.position=n.clone(),this.character.setPosition(n),this.generatePatrol(n)}generatePatrol(e){for(let t=0;t<4;t++){const n=t/4*Math.PI*2+Math.random()*.5,s=6+Math.random()*10;this.patrolPoints.push(new T(e.x+Math.cos(n)*s,e.y,e.z+Math.sin(n)*s))}}setSquad(e){this.squadId=e}update(e,t,n,s,r,o){this.stateTimer+=e,this.fireCooldown=Math.max(0,this.fireCooldown-e);const a=t.clone().sub(this.position),c=a.length(),l=this.canSeePlayer(t,r,c),h=this.canHearPlayer(t,s,c);if(l){const p=s.isCrouching?.5:s.isSprinting?1.5:1,m=cn.clamp(1-c/this.config.detectionRange,0,1),v=this.isInFOV(a)?1:.2;this.detection+=e*1.8*p*v*(.3+m),this.memory.lastKnownPlayerPos=t.clone(),this.memory.lastSeenTime=performance.now()}else this.detection-=e*.6,h&&(this.detection+=e*.8,this.memory.lastHeardPos=t.clone(),this.memory.lastKnownPlayerPos||(this.memory.lastKnownPlayerPos=t.clone()));this.detection=cn.clamp(this.detection,0,1);const u=this.state;switch(this.detection>=.95?(this.state="combat",this.memory.threatLevel=1):this.detection>=.65?this.state!=="combat"&&(this.state="alerted"):this.detection>=.35?((this.state==="patrol"||this.state==="idle")&&(this.state="suspicious"),this.state==="suspicious"&&this.stateTimer>2&&(this.state="investigating")):((this.state==="alerted"||this.state==="combat")&&(this.state="searching",this.stateTimer=0),this.state==="searching"&&this.stateTimer>8&&(this.state="lost",this.stateTimer=0),this.state==="lost"&&this.stateTimer>4&&(this.state="patrol",this.memory.lastKnownPlayerPos=null)),u!==this.state&&(this.stateTimer=0),this.state){case"patrol":this.updatePatrol(e);break;case"suspicious":this.updateSuspicious(e);break;case"investigating":this.updateInvestigate(e);break;case"alerted":this.updateAlerted(e,t);break;case"combat":this.updateCombat(e,t,o);break;case"searching":this.updateSearching(e);break;case"lost":this.velocity.set(0,0,0);break}if(this.position.add(this.velocity.clone().multiplyScalar(e)),this.position.y=0,this.character.setPosition(this.position),this.targetPos||this.memory.lastKnownPlayerPos){const p=this.state==="combat"||this.state==="alerted"?t:this.targetPos||this.memory.lastKnownPlayerPos;this.character.lookAt(p)}}canSeePlayer(e,t,n){if(n>this.config.detectionRange||!this.isInFOV(e.clone().sub(this.position)))return!1;const s=e.clone().sub(this.position);s.y=0;const r=s.length();s.normalize();const o=new _s(this.position.clone().add(new T(0,1.2,0)),s);for(const a of t){const c=o.intersectBox(a,new T);if(c&&c.distanceTo(this.position)<r-.5)return!1}return!0}canHearPlayer(e,t,n){let s=this.config.hearingRange;return t.isShooting&&(s*=3),t.isSprinting&&(s*=1.5),t.isCrouching&&(s*=.4),n<s}isInFOV(e){return e.y=0,e.lengthSq()<.01?!0:new T(0,0,-1).applyAxisAngle(new T(0,1,0),this.character.group.rotation.y).angleTo(e.clone().normalize())<cn.degToRad(this.config.fov*.5)}updatePatrol(e){if(this.patrolPoints.length===0)return;const n=this.patrolPoints[this.patrolIndex].clone().sub(this.position);n.y=0,n.length()<1.2?(this.patrolIndex=(this.patrolIndex+1)%this.patrolPoints.length,this.velocity.set(0,0,0),Math.random()<.3&&(this.state="idle",setTimeout(()=>{this.state==="idle"&&(this.state="patrol")},2e3+Math.random()*3e3))):(n.normalize().multiplyScalar(this.config.speed*.5),this.velocity.lerp(n,e*3))}updateSuspicious(e){this.velocity.lerp(new T(0,0,0),e*2),this.character.group.rotation.y+=Math.sin(this.stateTimer*.8)*e*.5}updateInvestigate(e){const t=this.memory.lastHeardPos||this.memory.lastKnownPlayerPos;if(!t){this.state="patrol";return}const n=t.clone().sub(this.position);n.y=0,n.length()<1.5?(this.state="suspicious",this.memory.suspiciousLocations.push(t.clone())):(n.normalize().multiplyScalar(this.config.speed*.7),this.velocity.lerp(n,e*4),this.targetPos=t)}updateAlerted(e,t){const n=this.memory.lastKnownPlayerPos||t,s=n.clone().sub(this.position);if(s.length()>12)s.normalize().multiplyScalar(this.config.speed*.9),this.velocity.lerp(s,e*4);else{const o=new T(-s.z,0,s.x).normalize().multiplyScalar(Math.sin(this.stateTimer*1.2)*2);this.velocity.lerp(o,e*3)}this.targetPos=n}updateCombat(e,t,n){const s=t.clone().sub(this.position),r=s.length();if(n.length>1&&this.config.id!=="heavy"&&this.config.id!=="sniper"&&Math.random()<.01){const o=new T(-s.z,0,s.x).normalize(),a=t.clone().add(o.multiplyScalar((Math.random()>.5?1:-1)*8));this.targetPos=a,s.copy(a).sub(this.position)}if(this.config.id==="sniper")if(r<25){const o=this.position.clone().sub(t).normalize().multiplyScalar(this.config.speed);this.velocity.lerp(o,e*3)}else this.velocity.lerp(new T(0,0,0),e*3);else this.config.id==="hunter"?r>3?(s.normalize().multiplyScalar(this.config.speed*1.1),this.velocity.lerp(s,e*5)):this.velocity.set(0,0,0):r>15?(s.normalize().multiplyScalar(this.config.speed),this.velocity.lerp(s,e*4)):r<6?(s.normalize().multiplyScalar(-this.config.speed*.7),this.velocity.lerp(s,e*4)):this.velocity.lerp(new T(0,0,0),e*4)}updateSearching(e){const t=this.memory.lastKnownPlayerPos;if(!t){this.state="patrol";return}const n=t.clone().sub(this.position);if(n.y=0,n.length()<2){const s=this.stateTimer*.8,r=2+this.stateTimer*.5,o=t.clone().add(new T(Math.cos(s)*r,0,Math.sin(s)*r)),a=o.clone().sub(this.position);a.normalize().multiplyScalar(this.config.speed*.6),this.velocity.lerp(a,e*2),this.targetPos=o}else n.normalize().multiplyScalar(this.config.speed*.7),this.velocity.lerp(n,e*3),this.targetPos=t}canShoot(){return this.state==="combat"&&this.fireCooldown<=0&&this.detection>.8}onShoot(){this.fireCooldown=this.config.id==="sniper"?2.2:this.config.id==="heavy"?.18:.5}getDetectionLevel(){return this.detection}isAlive(){return this.character.health>0}}class Bp{constructor(){I(this,"enemies",[]);I(this,"spawnPressure",0);I(this,"lastReinforcement",0)}addEnemy(e){this.enemies.push(e)}removeEnemy(e){this.enemies=this.enemies.filter(t=>t!==e)}update(e,t){this.enemies.filter(s=>s.state==="combat").length>4?this.spawnPressure=Math.max(0,this.spawnPressure-e*.2):this.spawnPressure=Math.min(1,this.spawnPressure+e*.05),this.enemies=this.enemies.filter(s=>s.isAlive())}getEnemies(){return this.enemies}getCombatCount(){return this.enemies.filter(e=>e.state==="combat").length}}const zp=[{id:"security",name:"Helix Security",faction:"HELIX",health:100,armor:20,damage:22,speed:3.2,detectionRange:28,hearingRange:14,fov:110,behavior:"patrol_guard",weapons:["vec_9","m9_tactical"],loot:["ammo_9mm","med_small"],description:"Standard armed unit. Holds position, calls backup.",color:2763310,scale:1},{id:"scout",name:"Ashen Scout",faction:"ASHEN",health:75,armor:0,damage:18,speed:5,detectionRange:32,hearingRange:18,fov:130,behavior:"flank_recon",weapons:["vec_9"],loot:["scrap","intel"],description:"Fast reconnaissance. Will flank and report.",color:5917234,scale:.95},{id:"heavy",name:"Vanguard Heavy",faction:"VANGUARD",health:220,armor:80,damage:38,speed:2.1,detectionRange:22,hearingRange:10,fov:90,behavior:"suppression_advance",weapons:["ar_41","sg_breach"],loot:["armor_plate","ammo_rifle"],description:"Armored unit. Soaks damage, pins you down.",color:3820122,scale:1.15},{id:"sniper",name:"Veil Marksman",faction:"VEIL",health:85,armor:10,damage:95,speed:2.8,detectionRange:65,hearingRange:8,fov:45,behavior:"long_range_hold",weapons:["sr_phantom"],loot:["ammo_sniper","intel_encrypted"],description:"Long-range threat. Relocates after shot.",color:3811914,scale:1},{id:"hunter",name:"Hunter",faction:"ASHEN",health:120,armor:15,damage:42,speed:4.6,detectionRange:20,hearingRange:22,fov:140,behavior:"aggressive_close",weapons:["sg_breach","knife_tactical"],loot:["scrap_rare"],description:"Aggressive close-range unit. Hunts in packs.",color:4864554,scale:1.05},{id:"commander",name:"Helix Commander",faction:"HELIX",health:150,armor:50,damage:30,speed:3,detectionRange:35,hearingRange:16,fov:120,behavior:"tactical_leader",weapons:["ar_41","m9_tactical"],loot:["keycard","intel_command"],description:"Tactical leader. Buffs nearby units, calls reinforcements.",color:1710626,scale:1.08}],ro={en:{"game.title":"BLACK VEIL","game.tagline":"THE CITY FORGOT. YOU DIDN'T.","menu.continue":"CONTINUE","menu.new_game":"NEW GAME","menu.load_game":"LOAD GAME","menu.missions":"MISSIONS","menu.inventory":"INVENTORY","menu.map":"MAP","menu.settings":"SETTINGS","menu.credits":"CREDITS","menu.exit":"EXIT","hud.health":"HEALTH","hud.armor":"ARMOR","hud.ammo":"AMMO","hud.objective":"OBJECTIVE","hud.stealth.hidden":"HIDDEN","hud.stealth.detected":"DETECTED","hud.stealth.combat":"COMBAT","hud.stealth.suspicious":"SUSPICIOUS","action.interact":"INTERACT","action.reload":"RELOAD","action.switch":"SWITCH","action.jump":"JUMP","action.crouch":"CROUCH","settings.graphics":"GRAPHICS","settings.audio":"AUDIO","settings.controls":"CONTROLS","settings.language":"LANGUAGE","settings.quality.low":"LOW","settings.quality.medium":"MEDIUM","settings.quality.high":"HIGH","settings.quality.ultra":"ULTRA","settings.quality.auto":"AUTO","mission.active":"ACTIVE MISSION","inventory.weapons":"WEAPONS","inventory.ammo":"AMMO","inventory.consumables":"CONSUMABLES","inventory.equip":"EQUIP","loading.tips.0":"Veyra went dark three years ago. Power, comms, transport — gone in 17 minutes.","loading.tips.1":"Helix Corp controlled 73% of Veyra infrastructure before the Blackout. Now they control the ruins.","loading.tips.2":"The Ashen network survives in shadows. They remember what the city forgot.","loading.tips.3":"Sound travels. Your footsteps can betray you. Move slow, stay hidden.","loading.tips.4":"Verticality is survival. Rooftops, maintenance shafts, underground — the city has layers.","faction.vanguard":"VANGUARD","faction.ashen":"ASHEN","faction.helix":"HELIX CORP","faction.veil":"VEIL","story.ch1.title":"CHAPTER 1: GHOSTS","credits.title":"CREDITS","credits.primary":"PRIMARY CREATOR","credits.youtube":"YouTube","credits.github":"GitHub","credits.tiktok":"TikTok","credits.contact":"Contact"},ar:{"game.title":"الحجاب الأسود","game.tagline":"المدينة نسيت. أنت لم تنس.","menu.continue":"متابعة","menu.new_game":"لعبة جديدة","menu.load_game":"تحميل اللعبة","menu.missions":"المهام","menu.inventory":"المخزون","menu.map":"الخريطة","menu.settings":"الإعدادات","menu.credits":"الاعتمادات","menu.exit":"خروج","hud.health":"الصحة","hud.armor":"الدرع","hud.ammo":"الذخيرة","hud.objective":"الهدف","hud.stealth.hidden":"مخفي","hud.stealth.detected":"مكتشف","hud.stealth.combat":"قتال","hud.stealth.suspicious":"مشبوه","action.interact":"تفاعل","action.reload":"إعادة تحميل","action.switch":"تبديل","action.jump":"قفز","action.crouch":"انحناء","settings.graphics":"الرسومات","settings.audio":"الصوت","settings.controls":"التحكم","settings.language":"اللغة","settings.quality.low":"منخفض","settings.quality.medium":"متوسط","settings.quality.high":"مرتفع","settings.quality.ultra":"فائق","settings.quality.auto":"تلقائي","mission.active":"المهمة النشطة","inventory.weapons":"الأسلحة","inventory.ammo":"الذخيرة","inventory.consumables":"المواد الاستهلاكية","inventory.equip":"تجهيز","loading.tips.0":"أظلمت فيرا قبل ثلاث سنوات. الطاقة، الاتصالات، النقل - اختفت في 17 دقيقة.","loading.tips.1":"سيطرت شركة هيليكس على 73٪ من البنية التحتية قبل الانقطاع. الآن تسيطر على الأنقاض.","loading.tips.2":"شبكة آشين تنجو في الظلال. يتذكرون ما نسيته المدينة.","loading.tips.3":"الصوت ينتقل. خطواتك يمكن أن تخونك. تحرك ببطء، ابق مخفيا.","loading.tips.4":"العمودية هي البقاء. أسطح المنازل، أعمدة الصيانة، تحت الأرض - المدينة لها طبقات.","faction.vanguard":"فانجارد","faction.ashen":"آشين","faction.helix":"هيليكس كورب","faction.veil":"فيل","story.ch1.title":"الفصل 1: الأشباح","credits.title":"الاعتمادات","credits.primary":"المنشئ الأساسي","credits.youtube":"يوتيوب","credits.github":"جيثب","credits.tiktok":"تيك توك","credits.contact":"اتصل"}};class kp{constructor(){I(this,"current","en");I(this,"listeners",new Set);const e=localStorage.getItem("bv_lang");e&&(e==="en"||e==="ar")?this.current=e:navigator.language.toLowerCase().startsWith("ar")&&(this.current="ar"),this.applyDir()}get lang(){return this.current}get isRTL(){return this.current==="ar"}t(e){return ro[this.current][e]??ro.en[e]??e}setLanguage(e){this.current=e,localStorage.setItem("bv_lang",e),this.applyDir(),this.listeners.forEach(t=>t(e))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}applyDir(){document.documentElement.lang=this.current,document.documentElement.dir=this.isRTL?"rtl":"ltr",document.body.style.fontFamily=this.isRTL?"'Noto Sans Arabic','Inter',sans-serif":"'Inter',sans-serif"}}const gn=new kp,Gp=[{id:"ch1_m1_entry",title:"Ghosts of Veyra",chapter:1,description:"Enter the dead city. Find the northern checkpoint.",longDescription:"Three years after the Blackout, you return to Veyra. Your sister Mara was last seen near Sector 7. The city is sealed, but you know a way in through the old service tunnel. Find the northern checkpoint and make contact with the Ashen network.",objectives:[{id:"reach_checkpoint",title:"Reach Northern Checkpoint",description:"Navigate through Central Street to the checkpoint",type:"reach",targetPos:{x:0,y:0,z:-80},required:1,current:0},{id:"avoid_patrols",title:"Avoid Detection",description:"Reach checkpoint without alerting Helix",type:"stealth",optional:!0},{id:"collect_intel",title:"Gather Intel",description:"Find 3 pieces of evidence about Mara",type:"collect",required:3,current:0}],rewards:{xp:500,currency:250,items:["m9_tactical"]},location:"Central Street",difficulty:"normal",nextMission:"ch1_m2_power"},{id:"ch1_m2_power",title:"Lights Out",chapter:1,description:"Restore partial power to the residential block.",longDescription:"The Ashen contact, Kael, tells you Mara was investigating the power grid failure. The residential block is in blackout - Helix locked it down. Restore power from the industrial yard substation to access her apartment.",objectives:[{id:"reach_substation",title:"Reach Substation",description:"Navigate to industrial yard",type:"reach",targetPos:{x:45,y:0,z:-20}},{id:"restore_power",title:"Restore Power Grid",description:"Activate 2 transformers and main breaker",type:"restore",required:3,current:0},{id:"defend_position",title:"Hold Position",description:"Defend substation during reboot sequence",type:"eliminate",required:6,current:0}],rewards:{xp:750,currency:400,items:["vec_9","flashlight"]},location:"Industrial Yard",difficulty:"normal",nextMission:"ch1_m3_apartment"},{id:"ch1_m3_apartment",title:"The Apartment",chapter:1,description:"Investigate Mara's apartment in the residential block.",longDescription:"Power restored. Mara's apartment is on the 4th floor, 7B. Kael warns: Helix swept the building yesterday. Something spooked them. Find what Mara left behind. The answer to the Blackout might be in her logs.",objectives:[{id:"infiltrate_building",title:"Infiltrate Residential Block",description:"Enter through rooftop or main entrance",type:"reach",targetPos:{x:-35,y:0,z:20}},{id:"find_apartment",title:"Locate Apartment 7B",description:"Search 4th floor",type:"investigate"},{id:"recover_logs",title:"Recover Data Drive",description:"Find Mara's encrypted drive",type:"collect",required:1},{id:"escape",title:"Escape",description:"Exfil via underground or rooftops",type:"extract"}],rewards:{xp:1e3,currency:600,items:["ar_41"]},location:"Residential Block",difficulty:"hard",nextMission:"ch1_m4_helix"},{id:"ch1_m4_helix",title:"Helix Tower",chapter:1,description:"Infiltrate Helix corporate building. Uncover the truth.",longDescription:"Mara's drive points to Helix Tower. Level 23, Server Room Delta. Project codename: BLACK VEIL. The Blackout wasn't failure. It was a test. Someone is still operating inside Veyra. You need to see it yourself.",objectives:[{id:"enter_tower",title:"Infiltrate Helix Tower",description:"Bypass security, avoid cameras",type:"stealth"},{id:"disable_security",title:"Disable Security Grid",description:"Hack 2 terminals to disable cameras",type:"interact",required:2},{id:"reach_server",title:"Reach Server Room Delta",description:"Level 23",type:"reach",targetPos:{x:0,y:23,z:60}},{id:"download_data",title:"Download Project Files",description:"Hold position while download completes",type:"restore",required:1}],rewards:{xp:1500,currency:1e3,items:["sr_phantom"]},location:"Corporate District",difficulty:"hard"}];class Hp{constructor(){I(this,"missions",new Map);I(this,"activeMission",null);I(this,"objectiveProgress",new Map);I(this,"completedObjectives",new Set);I(this,"listeners",new Set);Gp.forEach(n=>this.missions.set(n.id,JSON.parse(JSON.stringify(n))));const e=Bt.load(),t=e?.missions.activeMissionId||"ch1_m1_entry";this.activeMission=this.missions.get(t)||this.missions.get("ch1_m1_entry"),e?.missions.objectives&&Object.entries(e.missions.objectives).forEach(([n,s])=>{s&&this.completedObjectives.add(n)})}getActive(){return this.activeMission}getAll(){return Array.from(this.missions.values())}setActive(e){const t=this.missions.get(e);t&&(this.activeMission=t,this.emit(),Bt.save({missions:{activeMissionId:e,completed:[],objectives:{},flags:{}}}))}updateObjective(e,t=1){if(!this.activeMission)return;const n=this.activeMission.objectives.find(o=>o.id===e);if(!n)return;const r=(this.objectiveProgress.get(e)||n.current||0)+t;this.objectiveProgress.set(e,r),n.current=r,n.required&&r>=n.required?(this.completedObjectives.add(e),n.completed=!0):!n.required&&r>=1&&(this.completedObjectives.add(e),n.completed=!0),this.emit(),this.checkMissionComplete(),Bt.save({missions:{activeMissionId:this.activeMission.id,completed:[],objectives:Object.fromEntries(this.completedObjectives.entries()),flags:{}}})}completeObjective(e){this.updateObjective(e,999)}checkMissionComplete(){if(!this.activeMission)return;this.activeMission.objectives.filter(n=>!n.optional).every(n=>this.completedObjectives.has(n.id))&&(console.log(`[Mission] ${this.activeMission.title} completed`),this.activeMission.nextMission&&setTimeout(()=>this.setActive(this.activeMission.nextMission),2e3))}getProgress(){if(!this.activeMission)return{completed:0,total:0,percent:0};const e=this.activeMission.objectives.filter(n=>!n.optional).length,t=this.activeMission.objectives.filter(n=>!n.optional&&this.completedObjectives.has(n.id)).length;return{completed:t,total:e,percent:e?t/e:0}}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){this.listeners.forEach(e=>e(this.activeMission))}getObjectiveByPos(e,t=6){if(!this.activeMission)return null;for(const n of this.activeMission.objectives)if(n.targetPos&&!this.completedObjectives.has(n.id)){const s=n.targetPos.x-e.x,r=n.targetPos.z-e.z;if(Math.sqrt(s*s+r*r)<t)return n}return null}}const Vt=new Hp;class Vp{constructor(){I(this,"root");I(this,"hudEl",null);I(this,"menuEl",null);I(this,"currentScreen","menu");I(this,"isMenuOpen",!0);this.root=document.getElementById("ui-root"),this.createStyles()}createStyles(){const e=document.createElement("style");e.textContent=`
      #ui-root { position:fixed; inset:0; pointer-events:none; z-index:10; font-family:'Inter',sans-serif; }
      .ui-layer { position:absolute; inset:0; pointer-events:auto; }
      .bv-menu { background:radial-gradient(120% 120% at 20% 20%, rgba(20,20,32,0.95) 0%, rgba(10,10,15,0.98) 40%, rgba(5,5,8,0.99) 100%); backdrop-filter:blur(24px); display:flex; flex-direction:column; }
      .bv-menu-bg { position:absolute; inset:0; overflow:hidden; opacity:0.15; }
      .bv-menu-bg::before { content:''; position:absolute; inset:-50%; background:repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(106,166,255,0.03) 2px, rgba(106,166,255,0.03) 4px); animation:scan 8s linear infinite; }
      @keyframes scan { 0%{transform:translateY(0)} 100%{transform:translateY(4px)} }
      .bv-menu-content { position:relative; z-index:1; flex:1; display:flex; }
      .bv-menu-left { width: min(420px, 90vw); padding: 32px 24px; display:flex; flex-direction:column; justify-content:center; border-right:1px solid rgba(255,255,255,0.06); }
      .bv-logo { font-family:'Orbitron',monospace; font-weight:900; font-size:clamp(28px,5vw,48px); letter-spacing:0.22em; color:#fff; line-height:0.9; margin-bottom:8px; text-shadow:0 0 30px rgba(106,166,255,0.5); }
      .bv-tagline { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.35em; color:#6a6a7a; text-transform:uppercase; margin-bottom:48px; }
      .bv-menu-items { display:flex; flex-direction:column; gap:4px; }
      .bv-menu-item { font-family:'Orbitron',monospace; font-size:14px; letter-spacing:0.15em; color:#8a8a9a; padding:14px 20px; cursor:pointer; transition:all 0.2s ease; border:1px solid transparent; background:rgba(255,255,255,0.02); position:relative; overflow:hidden; }
      .bv-menu-item::before { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:#6aa6ff; transform:scaleY(0); transition:transform 0.2s ease; }
      .bv-menu-item:hover { color:#fff; background:rgba(106,166,255,0.08); border-color:rgba(106,166,255,0.2); transform:translateX(4px); }
      .bv-menu-item:hover::before { transform:scaleY(1); }
      .bv-menu-item.primary { color:#fff; background:linear-gradient(90deg, rgba(106,166,255,0.15), rgba(167,139,250,0.1)); border-color:rgba(106,166,255,0.3); }
      .bv-menu-item.primary:hover { background:linear-gradient(90deg, rgba(106,166,255,0.25), rgba(167,139,250,0.18)); box-shadow:0 0 20px rgba(106,166,255,0.2); }
      .bv-menu-right { flex:1; padding:32px; display:flex; flex-direction:column; justify-content:flex-end; align-items:flex-end; text-align:right; }
      .bv-version { font-family:'JetBrains Mono',monospace; font-size:10px; color:#4a4a5a; letter-spacing:0.1em; }
      .bv-hud { position:absolute; inset:0; pointer-events:none; }
      .bv-hud-top { position:absolute; top:0; left:0; right:0; padding:16px 20px; display:flex; justify-content:space-between; align-items:flex-start; }
      .bv-hud-objective { background:rgba(0,0,0,0.6); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.08); padding:12px 16px; min-width:260px; }
      .bv-hud-objective-title { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:6px; }
      .bv-hud-objective-text { font-size:13px; color:#e8e8ec; line-height:1.4; }
      .bv-hud-objective-progress { height:2px; background:rgba(255,255,255,0.1); margin-top:8px; overflow:hidden; }
      .bv-hud-objective-bar { height:100%; background:linear-gradient(90deg,#6aa6ff,#a78bfa); transition:width 0.3s ease; }
      .bv-hud-bottom { position:absolute; bottom:0; left:0; right:0; padding:16px 20px; display:flex; justify-content:space-between; align-items:flex-end; }
      .bv-hud-health { display:flex; gap:16px; align-items:center; }
      .bv-health-bar { width:140px; height:4px; background:rgba(255,255,255,0.1); position:relative; overflow:hidden; }
      .bv-health-fill { height:100%; background:linear-gradient(90deg,#4dff9a,#6aa6ff); transition:width 0.2s ease; }
      .bv-armor-fill { height:100%; background:linear-gradient(90deg,#6aa6ff,#a78bfa); transition:width 0.2s ease; }
      .bv-hud-ammo { text-align:right; }
      .bv-ammo-count { font-family:'Orbitron',monospace; font-size:28px; font-weight:600; color:#fff; line-height:1; }
      .bv-ammo-reserve { font-family:'JetBrains Mono',monospace; font-size:12px; color:#8a8a9a; }
      .bv-hud-stealth { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(0,0,0,0.7); border:1px solid rgba(255,255,255,0.1); padding:8px 16px; font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.15em; color:#fff; opacity:0; transition:opacity 0.3s ease; }
      .bv-hud-stealth.visible { opacity:1; }
      .bv-hud-crosshair { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:24px; height:24px; pointer-events:none; }
      .bv-hud-crosshair::before, .bv-hud-crosshair::after { content:''; position:absolute; background:rgba(255,255,255,0.8); }
      .bv-hud-crosshair::before { width:1px; height:12px; left:50%; top:50%; transform:translate(-50%,-50%); }
      .bv-hud-crosshair::after { width:12px; height:1px; left:50%; top:50%; transform:translate(-50%,-50%); }
      .bv-hud-crosshair.aiming { width:8px; height:8px; }
      .bv-hud-interact { position:absolute; bottom:140px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.8); border:1px solid rgba(106,166,255,0.3); padding:10px 20px; font-family:'JetBrains Mono',monospace; font-size:12px; color:#fff; letter-spacing:0.1em; }
      .bv-panel { background:rgba(10,10,15,0.96); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); }
      .bv-button { font-family:'Orbitron',monospace; font-size:12px; letter-spacing:0.15em; padding:12px 24px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#e8e8ec; cursor:pointer; transition:all 0.2s ease; }
      .bv-button:hover { background:rgba(106,166,255,0.15); border-color:rgba(106,166,255,0.3); color:#fff; }
      .bv-credits { position:absolute; inset:0; background:radial-gradient(100% 100% at 50% 0%, #141420 0%, #0a0a0f 60%, #050508 100%); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:32px; text-align:center; overflow-y:auto; }
      .bv-credits h1 { font-family:'Orbitron',monospace; font-size:32px; letter-spacing:0.2em; color:#fff; margin-bottom:8px; }
      .bv-credits h2 { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.3em; color:#6a6a7a; margin-bottom:32px; }
      .bv-credit-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:24px; margin:12px 0; width:min(480px,90vw); text-align:left; }
      .bv-credit-card h3 { font-family:'Orbitron',monospace; font-size:12px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:12px; }
      .bv-credit-link { display:flex; align-items:center; gap:12px; padding:10px 0; color:#e8e8ec; text-decoration:none; font-size:14px; transition:color 0.2s; }
      .bv-credit-link:hover { color:#6aa6ff; }
      .bv-credit-link.primary { font-weight:700; color:#fff; background:linear-gradient(90deg, rgba(106,166,255,0.15), transparent); padding:12px; border-left:2px solid #6aa6ff; }
      .bv-map { position:absolute; inset:0; background:rgba(5,5,8,0.96); display:flex; }
      .bv-map-canvas { flex:1; background:#0a0a0f; position:relative; overflow:hidden; }
      .bv-map-sidebar { width:320px; background:rgba(15,15,20,0.98); border-left:1px solid rgba(255,255,255,0.08); padding:20px; overflow-y:auto; }
      .bv-inventory { position:absolute; inset:0; background:rgba(5,5,8,0.96); display:flex; padding:20px; gap:20px; }
      .bv-inv-grid { flex:1; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px,1fr)); gap:12px; align-content:start; }
      .bv-inv-item { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px; cursor:pointer; transition:all 0.2s; }
      .bv-inv-item:hover { border-color:rgba(106,166,255,0.4); background:rgba(106,166,255,0.08); }
      .bv-inv-item.equipped { border-color:#6aa6ff; background:rgba(106,166,255,0.12); }
      .bv-settings { position:absolute; inset:0; background:rgba(5,5,8,0.96); padding:24px; overflow-y:auto; }
      .bv-settings-section { margin-bottom:32px; }
      .bv-settings-section h3 { font-family:'Orbitron',monospace; font-size:13px; letter-spacing:0.15em; color:#6aa6ff; margin-bottom:16px; }
      .bv-setting-row { display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.06); }
      .bv-fps { position:absolute; top:8px; left:8px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; background:rgba(0,0,0,0.6); padding:4px 8px; pointer-events:none; }
      @media (max-width:768px) { .bv-menu-content { flex-direction:column; } .bv-menu-left { width:100%; border-right:none; border-bottom:1px solid rgba(255,255,255,0.06); } .bv-hud-top { flex-direction:column; gap:12px; } }
    `,document.head.appendChild(e)}showMenu(){this.currentScreen="menu",this.isMenuOpen=!0,this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-menu",e.innerHTML=`
      <div class="bv-menu-bg"></div>
      <div class="bv-menu-content">
        <div class="bv-menu-left">
          <div class="bv-logo">${gn.t("game.title")}</div>
          <div class="bv-tagline">${gn.t("game.tagline")}</div>
          <div class="bv-menu-items">
            <div class="bv-menu-item primary" data-action="continue">${gn.t("menu.continue")}</div>
            <div class="bv-menu-item" data-action="new">${gn.t("menu.new_game")}</div>
            <div class="bv-menu-item" data-action="missions">${gn.t("menu.missions")}</div>
            <div class="bv-menu-item" data-action="settings">${gn.t("menu.settings")}</div>
            <div class="bv-menu-item" data-action="credits">${gn.t("menu.credits")}</div>
            <div class="bv-menu-item" data-action="install" id="install-btn" style="display:none">INSTALL GAME</div>
          </div>
        </div>
        <div class="bv-menu-right">
          <div style="max-width:360px; text-align:left; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:20px; backdrop-filter:blur(12px);">
            <div style="font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:12px;">// SECTOR 7 INTEL</div>
            <div style="font-size:13px; line-height:1.6; color:#9a9aaa;">
              Veyra Blackout - Day 1095<br><br>
              The city didn't die. It was killed. Power grid failure was too clean, too coordinated. Someone wanted Veyra dark.<br><br>
              <span style="color:#e8e8ec;">Your sister knew. Now she's missing.</span><br><br>
              <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#5a5a6a;">> ENTER THE DEAD CITY<br>> SURVIVE ITS PEOPLE<br>> UNCOVER ITS SECRETS</span>
            </div>
          </div>
          <div class="bv-version" style="margin-top:24px;">BLACK VEIL v1.0.0 • BUILD 430e42e • M11 DEV</div>
        </div>
      </div>
    `,this.root.appendChild(e),this.menuEl=e,e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{const r=s.dataset.action;this.handleMenuAction(r)})});let t=null;window.addEventListener("beforeinstallprompt",s=>{s.preventDefault(),t=s;const r=document.getElementById("install-btn");r&&(r.style.display="block")});const n=document.getElementById("install-btn");n&&n.addEventListener("click",async()=>{t&&(t.prompt(),await t.userChoice,t=null,n.style.display="none")})}handleMenuAction(e){switch(e){case"continue":case"new":this.showHUD(),window.dispatchEvent(new CustomEvent("bv:startGame",{detail:{isNew:e==="new"}}));break;case"missions":this.showMissions();break;case"settings":this.showSettings();break;case"credits":this.showCredits();break}}showHUD(){this.currentScreen="hud",this.isMenuOpen=!1,this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-hud",e.innerHTML=`
      <div class="bv-hud-top">
        <div class="bv-hud-objective" id="hud-objective">
          <div class="bv-hud-objective-title" id="hud-obj-title">ACTIVE MISSION</div>
          <div class="bv-hud-objective-text" id="hud-obj-text">Reach Northern Checkpoint</div>
          <div class="bv-hud-objective-progress"><div class="bv-hud-objective-bar" id="hud-obj-bar" style="width:0%"></div></div>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="bv-button" id="hud-map-btn" style="pointer-events:auto; padding:8px 12px; font-size:10px;">MAP [M]</button>
          <button class="bv-button" id="hud-inv-btn" style="pointer-events:auto; padding:8px 12px; font-size:10px;">INV [TAB]</button>
          <button class="bv-button" id="hud-menu-btn" style="pointer-events:auto; padding:8px 12px; font-size:10px;">MENU [ESC]</button>
        </div>
      </div>
      <div class="bv-hud-bottom">
        <div class="bv-hud-health">
          <div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; letter-spacing:0.15em; margin-bottom:4px;">HEALTH</div>
            <div class="bv-health-bar"><div class="bv-health-fill" id="hud-health" style="width:100%"></div></div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; letter-spacing:0.15em; margin-top:6px;">ARMOR</div>
            <div class="bv-health-bar"><div class="bv-armor-fill" id="hud-armor" style="width:50%"></div></div>
          </div>
          <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#8a8a9a; margin-left:8px;">
            <div id="hud-stealth-text">HIDDEN</div>
            <div id="hud-faction" style="color:#6aa6ff; margin-top:2px;">ASHEN • NEUTRAL</div>
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
    `,this.root.appendChild(e),this.hudEl=e,e.querySelector("#hud-map-btn")?.addEventListener("click",()=>this.showMap()),e.querySelector("#hud-inv-btn")?.addEventListener("click",()=>this.showInventory()),e.querySelector("#hud-menu-btn")?.addEventListener("click",()=>this.showMenu()),Vt.onChange(n=>{if(!n)return;const s=document.getElementById("hud-obj-title"),r=document.getElementById("hud-obj-text"),o=document.getElementById("hud-obj-bar");if(s&&(s.textContent=n.title.toUpperCase()),r){const c=n.objectives.find(l=>!l.completed);r.textContent=c?c.title:"Mission Complete"}const a=Vt.getProgress();o&&(o.style.width=`${a.percent*100}%`)});const t=Vt.getActive();if(t){const n=document.getElementById("hud-obj-title"),s=document.getElementById("hud-obj-text");if(n&&(n.textContent=t.title.toUpperCase()),s){const r=t.objectives.find(o=>!o.completed);s.textContent=r?r.title:t.description}}}updateHUD(e){if(this.currentScreen!=="hud")return;const t=document.getElementById("hud-health"),n=document.getElementById("hud-armor"),s=document.getElementById("hud-ammo-current"),r=document.getElementById("hud-ammo-reserve"),o=document.getElementById("hud-stealth"),a=document.getElementById("hud-stealth-text"),c=document.getElementById("hud-fps"),l=document.getElementById("hud-interact"),h=document.getElementById("hud-crosshair");t&&(t.style.width=`${e.health}%`),n&&(n.style.width=`${e.armor}%`),s&&(s.textContent=`${e.ammoCurrent}`),r&&(r.textContent=`/ ${e.ammoReserve} • ${e.weaponName}`),o&&(o.textContent=e.stealth,o.className=`bv-hud-stealth ${e.stealth!=="HIDDEN"?"visible":""}`,o.style.color=e.stealth==="COMBAT"?"#ff4d6a":e.stealth==="DETECTED"?"#ffb84d":"#4dff9a"),a&&(a.textContent=e.stealth),c&&(c.textContent=`${Math.round(e.fps)} FPS • ${e.frameTime.toFixed(1)}ms • ${e.quality}`),l&&(e.interact?(l.style.display="block",l.textContent=`[F] ${e.interact}`):l.style.display="none"),h&&(h.className=`bv-hud-crosshair ${e.isAiming?"aiming":""}`,h.style.opacity=e.isAiming?"0.9":"0.6")}showMissions(){this.currentScreen="hud",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-panel",e.style.padding="24px",e.style.overflowY="auto";const t=Vt.getAll();e.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
        <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">MISSIONS</h2>
        <button class="bv-button" id="missions-back">BACK</button>
      </div>
      <div style="display:grid; gap:16px;">
        ${t.map(n=>`
          <div class="bv-credit-card" data-mission="${n.id}" style="cursor:pointer; ${Vt.getActive()?.id===n.id?"border-color:#6aa6ff; background:rgba(106,166,255,0.08);":""}">
            <h3>${n.title} • CH${n.chapter}</h3>
            <div style="font-size:13px; color:#9a9aaa; line-height:1.5; margin:8px 0;">${n.description}</div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a;">${n.location} • ${n.difficulty.toUpperCase()} • ${n.rewards.xp} XP</div>
            <div style="margin-top:12px;">
              ${n.objectives.map(s=>`<div style="font-size:11px; color:${s.completed?"#4dff9a":"#8a8a9a"}; margin:2px 0;">${s.completed?"✓":"○"} ${s.title}</div>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `,this.root.appendChild(e),e.querySelector("#missions-back")?.addEventListener("click",()=>this.showMenu()),e.querySelectorAll("[data-mission]").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.mission;Vt.setActive(s),this.showMenu()})})}showInventory(){this.currentScreen="inventory",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-inventory",e.innerHTML=`
      <div style="width:320px; background:rgba(15,15,20,0.98); border:1px solid rgba(255,255,255,0.08); padding:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <h2 style="font-family:Orbitron; font-size:16px; letter-spacing:0.15em; color:#fff;">INVENTORY</h2>
          <button class="bv-button" id="inv-back" style="padding:6px 12px; font-size:10px;">BACK</button>
        </div>
        <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; margin-bottom:12px;">WEAPONS • ${Ho.length} AVAILABLE</div>
        <div id="inv-weapons" style="display:flex; flex-direction:column; gap:8px;"></div>
        <div style="margin-top:24px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.06);">
          <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; margin-bottom:8px;">STATS</div>
          <div style="font-size:12px; color:#8a8a9a; line-height:1.8;">
            Missions: ${Bt.load()?.missions.completed.length||0}<br>
            Currency: ${Bt.load()?.progression.currency||0} CR<br>
            Level: ${Bt.load()?.progression.level||1}
          </div>
        </div>
      </div>
      <div class="bv-inv-grid" id="inv-grid"></div>
    `,this.root.appendChild(e),e.querySelector("#inv-back")?.addEventListener("click",()=>this.showHUD());const t=e.querySelector("#inv-weapons"),n=e.querySelector("#inv-grid");window.dispatchEvent(new CustomEvent("bv:requestInventory"));const s=r=>{const{weapons:o,currentIndex:a}=r.detail;t.innerHTML=o.map((c,l)=>`
        <div class="bv-inv-item ${l===a?"equipped":""}" data-idx="${l}">
          <div style="font-family:Orbitron; font-size:12px; color:#fff; letter-spacing:0.05em;">${c.config.name}</div>
          <div style="font-size:11px; color:#8a8a9a; margin-top:4px;">${c.config.category.toUpperCase()} • ${c.ammoInMag}/${c.reserve}</div>
          <div style="font-size:10px; color:#5a5a6a; margin-top:4px;">${c.config.description}</div>
        </div>
      `).join(""),t.querySelectorAll("[data-idx]").forEach(c=>{c.addEventListener("click",()=>{const l=parseInt(c.dataset.idx);window.dispatchEvent(new CustomEvent("bv:equipWeapon",{detail:{index:l}})),this.showHUD()})}),n.innerHTML=o.map(c=>`
        <div class="bv-inv-item">
          <div style="height:60px; background:rgba(255,255,255,0.02); display:flex; align-items:center; justify-content:center; font-family:Orbitron; font-size:10px; color:#5a5a6a;">${c.config.category}</div>
          <div style="padding:8px 0 0 0;">
            <div style="font-size:12px; color:#fff;">${c.config.name}</div>
            <div style="font-size:10px; color:#6aa6ff;">DMG ${c.config.damage} • RNG ${c.config.range}m</div>
          </div>
        </div>
      `).join("")};window.addEventListener("bv:inventoryData",s,{once:!0})}showMap(){this.currentScreen="map",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-map",e.innerHTML=`
      <div class="bv-map-canvas" id="map-canvas">
        <canvas id="map-canvas-el" style="width:100%; height:100%;"></canvas>
        <div style="position:absolute; top:16px; left:16px; background:rgba(0,0,0,0.7); padding:8px 12px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#6aa6ff; letter-spacing:0.15em;">VEYRA SECTOR 7 • MAP</div>
        <button class="bv-button" id="map-back" style="position:absolute; top:16px; right:16px; pointer-events:auto;">BACK</button>
        <div style="position:absolute; bottom:16px; left:16px; background:rgba(0,0,0,0.7); padding:8px 12px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#8a8a9a;">
          SCROLL TO ZOOM • DRAG TO PAN<br>
          <span style="color:#6aa6ff;">■</span> PLAYER • <span style="color:#ff4d6a;">■</span> ENEMY • <span style="color:#4dff9a;">■</span> OBJECTIVE
        </div>
      </div>
      <div class="bv-map-sidebar">
        <h3 style="font-family:Orbitron; font-size:13px; letter-spacing:0.15em; color:#fff; margin-bottom:16px;">LOCATIONS</h3>
        <div id="map-locations" style="display:flex; flex-direction:column; gap:8px;"></div>
      </div>
    `,this.root.appendChild(e),e.querySelector("#map-back")?.addEventListener("click",()=>this.showHUD());const t=e.querySelector("#map-canvas-el"),n=t.getContext("2d");(()=>{t.width=t.clientWidth*window.devicePixelRatio,t.height=t.clientHeight*window.devicePixelRatio})();let r=0,o=0,a=1.2,c=!1,l=0,h=0;const u=[{name:"Central Street",x:0,z:-40,type:"street",discovered:!0},{name:"Residential Block",x:-35,z:20,type:"residential",discovered:!0},{name:"Helix Tower",x:5,z:65,type:"corporate",discovered:!1},{name:"Industrial Yard",x:45,z:-20,type:"industrial",discovered:!0},{name:"Northern Checkpoint",x:0,z:-80,type:"objective",discovered:!0},{name:"Substation",x:55,z:-5,type:"objective",discovered:!1},{name:"Hidden Cache",x:-45,z:-75,type:"secret",discovered:!1}],p=e.querySelector("#map-locations");p.innerHTML=u.map(f=>`
      <div style="padding:10px; background:${f.discovered?"rgba(106,166,255,0.08)":"rgba(255,255,255,0.02)"}; border:1px solid ${f.discovered?"rgba(106,166,255,0.2)":"rgba(255,255,255,0.06)"}; cursor:pointer;">
        <div style="font-size:12px; color:${f.discovered?"#fff":"#5a5a6a"};">${f.name}</div>
        <div style="font-size:10px; color:#6a6a7a; margin-top:2px;">${f.type.toUpperCase()} • ${f.discovered?"DISCOVERED":"UNDISCOVERED"}</div>
      </div>
    `).join("");let m={x:0,z:0};window.addEventListener("bv:playerPos",f=>{m=f.detail});const v=()=>{n.clearRect(0,0,t.width,t.height),n.save(),n.scale(window.devicePixelRatio,window.devicePixelRatio);const f=t.clientWidth,d=t.clientHeight;n.translate(f/2+r,d/2+o),n.scale(a,a),n.strokeStyle="rgba(255,255,255,0.04)",n.lineWidth=1;for(let E=-200;E<=200;E+=20)n.beginPath(),n.moveTo(E,-200),n.lineTo(E,200),n.stroke();for(let E=-200;E<=200;E+=20)n.beginPath(),n.moveTo(-200,E),n.lineTo(200,E),n.stroke();n.fillStyle="rgba(106,166,255,0.05)",n.strokeStyle="rgba(106,166,255,0.15)",u.forEach(E=>{E.type==="objective"?(n.fillStyle="rgba(77,255,154,0.15)",n.strokeStyle="rgba(77,255,154,0.4)"):E.type==="secret"?(n.fillStyle="rgba(255,184,77,0.1)",n.strokeStyle="rgba(255,184,77,0.3)"):(n.fillStyle="rgba(255,255,255,0.03)",n.strokeStyle="rgba(255,255,255,0.08)"),n.beginPath(),n.arc(E.x,E.z,E.type==="objective"?8:12,0,Math.PI*2),n.fill(),n.stroke()}),n.fillStyle="#6aa6ff",n.beginPath(),n.arc(m.x,m.z,4,0,Math.PI*2),n.fill(),n.strokeStyle="#fff",n.lineWidth=2,n.stroke(),n.restore(),requestAnimationFrame(v)};v(),t.addEventListener("mousedown",f=>{c=!0,l=f.clientX,h=f.clientY}),window.addEventListener("mouseup",()=>c=!1),window.addEventListener("mousemove",f=>{c&&(r+=f.clientX-l,o+=f.clientY-h,l=f.clientX,h=f.clientY)}),t.addEventListener("wheel",f=>{f.preventDefault(),a=Math.max(.4,Math.min(4,a*(f.deltaY<0?1.1:.9)))},{passive:!1});let g=0;t.addEventListener("touchstart",f=>{f.touches.length===1&&(c=!0,l=f.touches[0].clientX,h=f.touches[0].clientY),f.touches.length===2&&(g=Math.hypot(f.touches[0].clientX-f.touches[1].clientX,f.touches[0].clientY-f.touches[1].clientY))}),t.addEventListener("touchmove",f=>{if(f.preventDefault(),f.touches.length===1&&c&&(r+=f.touches[0].clientX-l,o+=f.touches[0].clientY-h,l=f.touches[0].clientX,h=f.touches[0].clientY),f.touches.length===2){const d=Math.hypot(f.touches[0].clientX-f.touches[1].clientX,f.touches[0].clientY-f.touches[1].clientY);g&&(a=Math.max(.4,Math.min(4,a*(d/g)))),g=d}},{passive:!1}),t.addEventListener("touchend",()=>{c=!1,g=0})}showSettings(){this.currentScreen="settings",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-settings";const t=Xe.settings;e.innerHTML=`
      <div style="max-width:720px; margin:0 auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:32px;">
          <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">SETTINGS</h2>
          <button class="bv-button" id="settings-back">BACK</button>
        </div>

        <div class="bv-settings-section">
          <h3>GRAPHICS</h3>
          <div class="bv-setting-row"><span>Quality</span><select id="set-quality" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="low" ${t.quality==="low"?"selected":""}>LOW</option><option value="medium" ${t.quality==="medium"?"selected":""}>MEDIUM</option><option value="high" ${t.quality==="high"?"selected":""}>HIGH</option><option value="ultra" ${t.quality==="ultra"?"selected":""}>ULTRA</option><option value="auto" ${t.quality==="auto"?"selected":""}>AUTO</option></select></div>
          <div class="bv-setting-row"><span>FPS Limit</span><select id="set-fps" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="30" ${t.fpsLimit===30?"selected":""}>30</option><option value="40" ${t.fpsLimit===40?"selected":""}>40</option><option value="60" ${t.fpsLimit===60?"selected":""}>60</option><option value="90" ${t.fpsLimit===90?"selected":""}>90</option><option value="0" ${t.fpsLimit===0?"selected":""}>AUTO</option></select></div>
          <div class="bv-setting-row"><span>Resolution Scale</span><input type="range" id="set-res" min="0.5" max="1.5" step="0.1" value="${t.resolutionScale}" style="pointer-events:auto; width:160px;"></div>
        </div>

        <div class="bv-settings-section">
          <h3>AUDIO</h3>
          <div class="bv-setting-row"><span>Master</span><input type="range" id="set-master" min="0" max="1" step="0.05" value="${t.masterVolume}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Music</span><input type="range" id="set-music" min="0" max="1" step="0.05" value="${t.musicVolume}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>SFX</span><input type="range" id="set-sfx" min="0" max="1" step="0.05" value="${t.sfxVolume}" style="pointer-events:auto; width:160px;"></div>
        </div>

        <div class="bv-settings-section">
          <h3>CONTROLS</h3>
          <div class="bv-setting-row"><span>Camera Sensitivity</span><input type="range" id="set-cam" min="0.2" max="2.5" step="0.1" value="${t.cameraSensitivity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Aim Sensitivity</span><input type="range" id="set-aim" min="0.2" max="2.5" step="0.1" value="${t.aimSensitivity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Gyro Aiming</span><button id="set-gyro" class="bv-button" style="pointer-events:auto; padding:6px 12px;">${t.gyroEnabled?"ENABLED":"DISABLED"}</button></div>
          <div class="bv-setting-row"><span>Touch Opacity</span><input type="range" id="set-touch" min="0.2" max="1" step="0.05" value="${t.touchOpacity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Control Layout</span><button id="set-layout" class="bv-button" style="pointer-events:auto; padding:6px 12px;">EDIT LAYOUT</button></div>
        </div>

        <div class="bv-settings-section">
          <h3>LANGUAGE / ACCESSIBILITY</h3>
          <div class="bv-setting-row"><span>Language</span><select id="set-lang" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="en" ${t.language==="en"?"selected":""}>ENGLISH</option><option value="ar" ${t.language==="ar"?"selected":""}>العربية</option></select></div>
          <div class="bv-setting-row"><span>Subtitles</span><button id="set-sub" class="bv-button" style="pointer-events:auto; padding:6px 12px;">${t.subtitles?"ON":"OFF"}</button></div>
          <div class="bv-setting-row"><span>Subtitle Size</span><input type="range" id="set-subsize" min="0.8" max="1.6" step="0.1" value="${t.subtitleSize}" style="pointer-events:auto; width:160px;"></div>
        </div>

        <div style="margin-top:32px; display:flex; gap:12px;">
          <button class="bv-button" id="settings-reset">RESET TO DEFAULT</button>
          <button class="bv-button" id="settings-fullscreen">FULLSCREEN</button>
        </div>
      </div>
    `,this.root.appendChild(e),e.querySelector("#settings-back")?.addEventListener("click",()=>this.showMenu()),e.querySelector("#set-quality")?.addEventListener("change",n=>Xe.set("quality",n.target.value)),e.querySelector("#set-fps")?.addEventListener("change",n=>Xe.set("fpsLimit",parseInt(n.target.value))),e.querySelector("#set-res")?.addEventListener("input",n=>Xe.set("resolutionScale",parseFloat(n.target.value))),e.querySelector("#set-master")?.addEventListener("input",n=>Xe.set("masterVolume",parseFloat(n.target.value))),e.querySelector("#set-music")?.addEventListener("input",n=>Xe.set("musicVolume",parseFloat(n.target.value))),e.querySelector("#set-sfx")?.addEventListener("input",n=>Xe.set("sfxVolume",parseFloat(n.target.value))),e.querySelector("#set-cam")?.addEventListener("input",n=>Xe.set("cameraSensitivity",parseFloat(n.target.value))),e.querySelector("#set-aim")?.addEventListener("input",n=>Xe.set("aimSensitivity",parseFloat(n.target.value))),e.querySelector("#set-gyro")?.addEventListener("click",n=>{const s=!Xe.get("gyroEnabled");Xe.set("gyroEnabled",s),n.target.textContent=s?"ENABLED":"DISABLED"}),e.querySelector("#set-touch")?.addEventListener("input",n=>Xe.set("touchOpacity",parseFloat(n.target.value))),e.querySelector("#set-lang")?.addEventListener("change",n=>{const s=n.target.value;Xe.set("language",s),gn.setLanguage(s),this.showSettings()}),e.querySelector("#set-sub")?.addEventListener("click",n=>{const s=!Xe.get("subtitles");Xe.set("subtitles",s),n.target.textContent=s?"ON":"OFF"}),e.querySelector("#settings-reset")?.addEventListener("click",()=>{Xe.reset(),this.showSettings()}),e.querySelector("#settings-fullscreen")?.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}),e.querySelector("#set-layout")?.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("bv:editLayout")),this.showHUD()})}showCredits(){this.currentScreen="credits",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-credits",e.innerHTML=`
      <h1>BLACK VEIL</h1>
      <h2>THE CITY FORGOT. YOU DIDN'T.</h2>

      <div class="bv-credit-card">
        <h3>GAME DESIGN / DEVELOPMENT</h3>
        <div style="font-size:14px; color:#e8e8ec; line-height:1.6;">
          A cinematic 3D third-person tactical stealth action game built as a premium web experience.<br>
          Engine: Three.js + TypeScript + Vite<br>
          Architecture: Modular AAA pipeline
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
          Contact: ma7292537@gmail.com
        </div>
      </div>

      <div class="bv-credit-card">
        <h3>WORLD / LORE</h3>
        <div style="font-size:13px; color:#9a9aaa; line-height:1.6;">
          Veyra Megacity — 3 years after The Blackout. A coordinated technological failure erased power, comms, transport. Millions vanished. Official story: cascading infrastructure failure. Truth: Project BLACK VEIL.<br><br>
          Factions: Vanguard (ex-military), Ashen (survivors), Helix Corp (security), Veil (shadow org).<br><br>
          Protagonist returns searching for Mara — sister, engineer, last seen near Sector 7. What she found could rewrite the Blackout.
        </div>
      </div>

      <div class="bv-credit-card">
        <h3>TECHNICAL ACHIEVEMENTS</h3>
        <div style="font-size:12px; color:#8a8a9a; line-height:1.8; font-family:'JetBrains Mono',monospace;">
          ✓ True 3D — player, enemies, buildings, props as 3D objects<br>
          ✓ Procedural city kit — modular buildings, interiors, rooftops<br>
          ✓ Third-person controller — walk/jog/sprint/crouch/jump/vault/mantle<br>
          ✓ Camera system — collision avoidance, shoulder switch, aim zoom<br>
          ✓ Combat — 6 weapons, attachments, recoil, spread, reload<br>
          ✓ AI — 6 archetypes, FSM, perception, squad, director<br>
          ✓ Stealth — visibility, sound, detection stages<br>
          ✓ Missions — data-driven, multi-approach, Chapter 1<br>
          ✓ World — 5 districts + hidden, power states, storytelling<br>
          ✓ Audio — procedural, positional, adaptive music<br>
          ✓ Mobile — touch joysticks, gyro, control editor, safe-area<br>
          ✓ PWA — manifest, service worker, install flow<br>
          ✓ Localization — EN/AR RTL, translation system<br>
          ✓ Performance — adaptive quality, FPS monitoring, LOD
        </div>
      </div>

      <button class="bv-button" id="credits-back" style="margin-top:24px; pointer-events:auto;">BACK TO MENU</button>
      <div style="margin-top:24px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#4a4a5a;">BLACK VEIL • BUILT WITH CARE • NO FAKE FEATURES • REAL 3D • REAL GAMEPLAY</div>
    `,this.root.appendChild(e),e.querySelector("#credits-back")?.addEventListener("click",()=>this.showMenu())}showNotification(e,t=3e3){const n=document.createElement("div");n.style.cssText="position:fixed; top:80px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.85); border:1px solid rgba(106,166,255,0.3); color:#fff; padding:10px 20px; font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:0.1em; z-index:100; pointer-events:none; transition:opacity 0.3s ease;",n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),300)},t)}isInMenu(){return this.isMenuOpen}}class Wp{constructor(e){I(this,"container");I(this,"moveJoystick");I(this,"lookArea");I(this,"buttons",new Map);I(this,"moveActive",!1);I(this,"moveStart",{x:0,y:0});I(this,"moveVector",{x:0,y:0});I(this,"lookActive",!1);I(this,"lookStart",{x:0,y:0});I(this,"editMode",!1);this.input=e,this.container=document.createElement("div"),this.container.id="touch-controls",this.container.style.cssText="position:fixed; inset:0; pointer-events:none; z-index:5; touch-action:none;",document.body.appendChild(this.container),this.createStyles(),this.moveJoystick=document.createElement("div"),this.moveJoystick.className="touch-joystick move",this.moveJoystick.innerHTML='<div class="joystick-base"><div class="joystick-stick"></div></div>',this.container.appendChild(this.moveJoystick),this.lookArea=document.createElement("div"),this.lookArea.className="touch-look-area",this.container.appendChild(this.lookArea),this.createActionButtons(),this.bindEvents(),this.applyOpacity(),Xe.onChange(t=>{this.applyOpacity(),t.controlLayout&&this.applyLayout(t.controlLayout)})}createStyles(){const e=document.createElement("style");e.textContent=`
      #touch-controls { display:none; }
      @media (pointer:coarse) { #touch-controls { display:block; } }
      .touch-joystick { position:absolute; width:120px; height:120px; pointer-events:auto; }
      .touch-joystick.move { left:20px; bottom:20px; }
      .joystick-base { width:100%; height:100%; border-radius:50%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); backdrop-filter:blur(8px); position:relative; }
      .joystick-stick { position:absolute; left:50%; top:50%; width:48px; height:48px; margin:-24px 0 0 -24px; border-radius:50%; background:rgba(106,166,255,0.25); border:1px solid rgba(106,166,255,0.4); transition:transform 0.05s linear; }
      .touch-look-area { position:absolute; right:0; top:0; width:50%; height:100%; pointer-events:auto; }
      .touch-btn { position:absolute; pointer-events:auto; width:56px; height:56px; border-radius:12px; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.12); backdrop-filter:blur(12px); display:flex; align-items:center; justify-content:center; font-family:'JetBrains Mono',monospace; font-size:10px; color:#fff; letter-spacing:0.05em; user-select:none; touch-action:none; transition:all 0.1s ease; }
      .touch-btn:active { background:rgba(106,166,255,0.3); border-color:rgba(106,166,255,0.5); transform:scale(0.92); }
      .touch-btn.fire { width:72px; height:72px; border-radius:50%; background:rgba(255,77,106,0.2); border-color:rgba(255,77,106,0.4); right:20px; bottom:20px; font-size:12px; }
      .touch-btn.aim { right:110px; bottom:32px; }
      .touch-btn.reload { right:20px; bottom:110px; width:48px; height:48px; }
      .touch-btn.jump { right:80px; bottom:110px; width:48px; height:48px; }
      .touch-btn.crouch { right:20px; bottom:170px; width:48px; height:48px; }
      .touch-btn.interact { left:50%; bottom:20px; transform:translateX(-50%); width:88px; height:40px; border-radius:20px; }
      .touch-btn.switch { right:140px; bottom:170px; width:44px; height:44px; font-size:9px; }
      .touch-btn.melee { right:190px; bottom:32px; width:48px; height:48px; }
      .touch-controls-edit .touch-btn { border:1px dashed #6aa6ff; background:rgba(106,166,255,0.15); }
      .touch-edit-panel { position:fixed; top:0; left:0; right:0; background:rgba(0,0,0,0.9); padding:12px 16px; display:flex; justify-content:space-between; align-items:center; z-index:20; pointer-events:auto; }
    `,document.head.appendChild(e)}createActionButtons(){const e=[{id:"fire",label:"FIRE",class:"fire"},{id:"aim",label:"AIM",class:"aim"},{id:"reload",label:"R",class:"reload"},{id:"jump",label:"JUMP",class:"jump"},{id:"crouch",label:"CROUCH",class:"crouch"},{id:"interact",label:"INTERACT",class:"interact"},{id:"switch",label:"SWAP",class:"switch"},{id:"melee",label:"MELEE",class:"melee"}];for(const t of e){const n=document.createElement("div");n.className=`touch-btn ${t.class}`,n.dataset.id=t.id,n.textContent=t.label,this.container.appendChild(n),this.buttons.set(t.id,n)}}bindEvents(){const e=this.moveJoystick.querySelector(".joystick-base"),t=this.moveJoystick.querySelector(".joystick-stick"),n=(o,a)=>{this.moveActive=!0,this.moveStart={x:o,y:a}},s=(o,a)=>{if(!this.moveActive)return;const c=o-this.moveStart.x,l=a-this.moveStart.y,h=Math.sqrt(c*c+l*l),u=48,p=Math.min(h,u),m=Math.atan2(l,c),v=Math.cos(m)*p,g=Math.sin(m)*p;t.style.transform=`translate(${v}px, ${g}px)`,this.moveVector={x:v/u,y:-g/u},this.input.setMoveVector(this.moveVector.x,this.moveVector.y)},r=()=>{this.moveActive=!1,t.style.transform="translate(0,0)",this.moveVector={x:0,y:0},this.input.setMoveVector(0,0)};e.addEventListener("touchstart",o=>{o.preventDefault(),n(o.touches[0].clientX,o.touches[0].clientY)},{passive:!1}),e.addEventListener("touchmove",o=>{o.preventDefault(),s(o.touches[0].clientX,o.touches[0].clientY)},{passive:!1}),e.addEventListener("touchend",o=>{o.preventDefault(),r()},{passive:!1}),e.addEventListener("mousedown",o=>{n(o.clientX,o.clientY)}),window.addEventListener("mousemove",o=>{this.moveActive&&s(o.clientX,o.clientY)}),window.addEventListener("mouseup",()=>{this.moveActive&&r()}),this.lookArea.addEventListener("touchstart",o=>{o.preventDefault(),this.lookActive=!0,this.lookStart={x:o.touches[0].clientX,y:o.touches[0].clientY}},{passive:!1}),this.lookArea.addEventListener("touchmove",o=>{if(o.preventDefault(),!this.lookActive)return;const a=o.touches[0].clientX-this.lookStart.x,c=o.touches[0].clientY-this.lookStart.y,l=Xe.get("cameraSensitivity")*.003;this.input.setLookVector(-a*l,-c*l),this.lookStart={x:o.touches[0].clientX,y:o.touches[0].clientY}},{passive:!1}),this.lookArea.addEventListener("touchend",o=>{o.preventDefault(),this.lookActive=!1},{passive:!1}),this.buttons.forEach((o,a)=>{const c=l=>{switch(a){case"fire":this.input.state.fire=l;break;case"aim":this.input.state.aim=l;break;case"reload":l&&(this.input.state.reload=!0);break;case"jump":l&&(this.input.state.jump=!0);break;case"crouch":this.input.state.crouch=l;break;case"interact":this.input.state.interact=l;break;case"switch":l&&(this.input.state.switchWeapon=1);break;case"melee":l&&(this.input.state.melee=!0);break}};o.addEventListener("touchstart",l=>{l.preventDefault(),c(!0)},{passive:!1}),o.addEventListener("touchend",l=>{l.preventDefault(),c(!1),(a==="reload"||a==="jump"||a==="melee"||a==="switch")&&setTimeout(()=>c(!1),100)},{passive:!1}),o.addEventListener("mousedown",()=>c(!0)),o.addEventListener("mouseup",()=>c(!1))}),window.addEventListener("bv:editLayout",()=>this.enterEditMode()),this.initGyro()}initGyro(){if(!("DeviceOrientationEvent"in window))return;let e=Xe.get("gyroEnabled");Xe.onChange(n=>e=n.gyroEnabled),window.addEventListener("deviceorientation",n=>{if(!e||n.beta===null||n.gamma===null)return;const s=Xe.get("gyroSensitivity")*5e-4,r=(n.gamma||0)*s,o=(n.beta||0)*s*.5;(Math.abs(r)>1e-4||Math.abs(o)>1e-4)&&this.input.setLookVector(r,o)});const t=document.createElement("button");t.textContent="ENABLE GYRO",t.className="bv-button",t.style.cssText="position:fixed; bottom:100px; left:50%; transform:translateX(-50%); z-index:20; display:none; pointer-events:auto;",document.body.appendChild(t),t.addEventListener("click",async()=>{try{const n=DeviceOrientationEvent;n.requestPermission&&await n.requestPermission()==="granted"&&(Xe.set("gyroEnabled",!0),t.style.display="none")}catch{}}),typeof DeviceOrientationEvent.requestPermission=="function"&&(t.style.display="block")}applyOpacity(){const e=Xe.get("touchOpacity");this.container.style.opacity=`${e}`}applyLayout(e){if(e)for(const[t,n]of Object.entries(e)){const s=this.buttons.get(t);if(s&&n&&typeof n=="object"){const r=n;r.x!==void 0&&(s.style.left=r.x+"px"),r.y!==void 0&&(s.style.top=r.y+"px"),r.right!==void 0&&(s.style.right=r.right+"px"),r.bottom!==void 0&&(s.style.bottom=r.bottom+"px")}}}enterEditMode(){if(this.editMode)return;this.editMode=!0,this.container.classList.add("touch-controls-edit");const e=document.createElement("div");e.className="touch-edit-panel",e.innerHTML=`
      <span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#fff;">DRAG BUTTONS TO REPOSITION • PINCH TO RESIZE</span>
      <div style="display:flex; gap:8px;">
        <button class="bv-button" id="edit-reset" style="padding:6px 12px; font-size:10px;">RESET</button>
        <button class="bv-button" id="edit-save" style="padding:6px 12px; font-size:10px;">SAVE</button>
      </div>
    `,document.body.appendChild(e);let t=null,n={x:0,y:0};const s=a=>{a.style.pointerEvents="auto";const c=(l,h)=>{t=a;const u=a.getBoundingClientRect();n={x:l-u.left,y:h-u.top}};a.addEventListener("touchstart",l=>{l.preventDefault(),c(l.touches[0].clientX,l.touches[0].clientY)},{passive:!1}),a.addEventListener("mousedown",l=>c(l.clientX,l.clientY))};this.buttons.forEach(s),s(this.moveJoystick);const r=(a,c)=>{t&&(t.style.left=a-n.x+"px",t.style.top=c-n.y+"px",t.style.right="auto",t.style.bottom="auto")},o=()=>{t=null};window.addEventListener("touchmove",a=>{t&&(a.preventDefault(),r(a.touches[0].clientX,a.touches[0].clientY))},{passive:!1}),window.addEventListener("mousemove",a=>{t&&r(a.clientX,a.clientY)}),window.addEventListener("touchend",o),window.addEventListener("mouseup",o),e.querySelector("#edit-reset")?.addEventListener("click",()=>{Xe.set("controlLayout",null),location.reload()}),e.querySelector("#edit-save")?.addEventListener("click",()=>{const a={};this.buttons.forEach((l,h)=>{const u=l.getBoundingClientRect();a[h]={x:u.left,y:u.top}});const c=this.moveJoystick.getBoundingClientRect();a.move={x:c.left,y:c.top},Xe.set("controlLayout",a),e.remove(),this.container.classList.remove("touch-controls-edit"),this.editMode=!1})}setVisible(e){this.container.style.display=e?"block":"none"}}class Xp{constructor(){I(this,"tasks",new Map);I(this,"listeners",new Set)}register(e,t,n=1){this.tasks.set(e,{id:e,progress:0,total:n,label:t}),this.emit()}update(e,t){const n=this.tasks.get(e);n&&(n.progress=t,this.emit())}complete(e){const t=this.tasks.get(e);t&&(t.progress=t.total,this.emit())}getProgress(){if(this.tasks.size===0)return 0;let e=0,t=0;for(const n of this.tasks.values())e+=n.progress,t+=n.total;return t?e/t:0}getCurrentLabel(){let e="";for(const t of this.tasks.values())t.progress<t.total&&(e=t.label);return e||"READY"}onProgress(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){const e=this.getProgress(),t=this.getCurrentLabel();this.listeners.forEach(n=>n(e,t))}async loadTextureFromCanvas(e,t,n){const s=document.createElement("canvas");s.width=e,s.height=t;const r=s.getContext("2d");return n(r),s}}const as=new Xp;class qp{constructor(e){I(this,"renderer");I(this,"input");I(this,"playerController");I(this,"cameraSystem");I(this,"world");I(this,"playerCharacter");I(this,"weaponSystem");I(this,"ui");I(this,"touchControls");I(this,"aiDirector");I(this,"enemies",[]);I(this,"clock",new Ep);I(this,"isRunning",!1);I(this,"isGameStarted",!1);I(this,"interactables",[]);I(this,"loot",[]);I(this,"raycaster",new bp);I(this,"lastShootState",!1);I(this,"stealthState","HIDDEN");I(this,"playerPosHistory",[]);I(this,"animate",()=>{if(!this.isRunning)return;requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.033);if(Xe.get("fpsLimit"),this.renderer.beginFrame(),this.isGameStarted){this.playerController.update(e,this.renderer.camera),this.playerCharacter.group.position.copy(this.playerController.position),this.playerCharacter.group.rotation.y=this.playerController.yaw,this.playerCharacter.update(e,this.playerController.moveState,this.playerController.yaw),this.cameraSystem.update(e,this.playerController.getCameraTarget(),this.playerController.yaw,this.playerController.pitch,this.playerController.isAiming,this.playerController.isCrouching),this.weaponSystem.update(e),this.handleShooting(e);const t=this.playerController.getPosition(),n={isCrouching:this.playerController.isCrouching,isSprinting:this.playerController.isSprinting,isShooting:this.lastShootState};for(const r of this.enemies)if(r.update(e,t,this.playerController.velocity,n,this.world.colliders,this.enemies),r.canShoot()){r.onShoot();const o=r.position.distanceTo(t);if(o<r.config.detectionRange&&Math.random()<.6){const a=Math.max(.1,1-o/40);if(Math.random()<a*.3){const c=this.playerController.takeDamage(r.config.damage*.15);this.cameraSystem.addShake(.3,8),c&&(this.ui.showNotification("DOWNED — RESTARTING AT CHECKPOINT",3e3),setTimeout(()=>{this.playerController.position.set(0,.1,0),this.playerController.stats.health=100},2e3))}}}this.aiDirector.update(e,t),this.updateMissions(),this.updateStealthState();const s=this.weaponSystem.getCurrent();this.ui.updateHUD({health:this.playerController.stats.health,armor:this.playerController.stats.armor,ammoCurrent:s?.ammoInMag??0,ammoReserve:s?.reserve??0,weaponName:s?.config.name??"UNARMED",stealth:this.stealthState,fps:this.renderer.getStats().fps,frameTime:this.renderer.getStats().frameTime,quality:Xe.get("quality").toUpperCase()+(Xe.get("quality")==="auto"?`:${["LOW","MED","HIGH","ULTRA"][this.renderer.getAdaptiveLevel()]}`:""),interact:this.checkInteractionPrompt(),isAiming:this.playerController.isAiming}),window.dispatchEvent(new CustomEvent("bv:playerPos",{detail:{x:t.x,z:t.z}})),this.playerPosHistory.push(t.clone()),this.playerPosHistory.length>100&&this.playerPosHistory.shift(),bt.setListenerPosition(t,new T(0,0,-1).applyAxisAngle(new T(0,1,0),this.playerController.yaw))}this.renderer.render(),this.renderer.endFrame(e),this.input.resetTransient()});this.canvas=e,this.renderer=new Ap(e),this.input=new Rp(e),this.playerController=new Lp(this.input),this.world=new Ip(this.renderer.scene),this.playerCharacter=new Up,this.weaponSystem=new Op,this.cameraSystem=new Pp(this.renderer.camera,this.world.colliders),this.ui=new Vp,this.touchControls=new Wp(this.input),this.aiDirector=new Bp,this.setupEventListeners(),this.initLoading()}setupEventListeners(){window.addEventListener("bv:startGame",e=>{e.detail?.isNew&&Bt.deleteSave(),this.startGame()}),window.addEventListener("bv:requestInventory",()=>{window.dispatchEvent(new CustomEvent("bv:inventoryData",{detail:{weapons:this.weaponSystem.weapons,currentIndex:this.weaponSystem.currentIndex}}))}),window.addEventListener("bv:equipWeapon",e=>{this.weaponSystem.setWeaponIndex(e.detail.index),this.updateWeaponMesh()}),window.addEventListener("keydown",e=>{e.code==="KeyF"&&this.isGameStarted&&this.tryInteract(),e.code==="KeyR"&&this.isGameStarted&&this.weaponSystem.startReload()}),document.addEventListener("dblclick",()=>{document.fullscreenElement||document.documentElement.requestFullscreen().catch(()=>{})})}async initLoading(){const e=document.getElementById("loading-bar"),t=document.getElementById("loading-status"),n=document.getElementById("loading-screen"),s=[{id:"world",label:"BUILDING VEYRA DISTRICTS",duration:600},{id:"player",label:"INITIALIZING OPERATIVE",duration:300},{id:"weapons",label:"LOADING ARSENAL",duration:400},{id:"ai",label:"SIMULATING HOSTILES",duration:500},{id:"audio",label:"CALIBRATING AUDIO",duration:200},{id:"final",label:"ENTERING BLACKOUT ZONE",duration:300}];for(const r of s)as.register(r.id,r.label),t.textContent=r.label,await new Promise(o=>{let a=0;const c=setInterval(()=>{a+=.05,a>=1?(clearInterval(c),as.complete(r.id),o()):as.update(r.id,a);const l=as.getProgress();e&&(e.style.width=`${l*100}%`)},r.duration/20)});await this.world.buildDistrict(),this.playerController.setColliders(this.world.colliders),this.cameraSystem.setColliders(this.world.colliders),this.renderer.scene.add(this.playerCharacter.group),this.weaponSystem.addWeapon("m9_tactical"),this.weaponSystem.addWeapon("vec_9"),this.updateWeaponMesh(),this.spawnEnemies(),this.setupInteractables(),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.style.display="none",600),this.ui.showMenu(),bt.setMusicState("exploration")},500)}updateWeaponMesh(){const e=this.playerCharacter.getWeaponSocket();for(;e.children.length;)e.remove(e.children[0]);const t=this.weaponSystem.getCurrent();t&&(t.mesh.position.set(0,0,0),t.mesh.rotation.set(0,0,0),t.config.category==="pistol"?(t.mesh.position.set(.05,-.05,.15),t.mesh.rotation.y=-.1):t.config.category==="smg"||t.config.category==="rifle"?(t.mesh.position.set(.08,-.08,.25),t.mesh.rotation.y=-.05):t.config.category==="sniper"?t.mesh.position.set(.1,-.1,.4):t.config.category==="shotgun"&&t.mesh.position.set(.08,-.08,.3),e.add(t.mesh))}spawnEnemies(){const e=[{x:-8,z:-55,type:"security"},{x:12,z:-50,type:"scout"},{x:-20,z:-20,type:"security"},{x:30,z:-30,type:"heavy"},{x:50,z:-10,type:"security"},{x:60,z:-25,type:"hunter"},{x:-35,z:35,type:"scout"},{x:10,z:50,type:"commander"},{x:0,z:70,type:"sniper"}];for(const t of e){const n=zp.find(o=>o.id===t.type),s=new Np(n),r=new Fp(s,n,new T(t.x,0,t.z));this.enemies.push(r),this.aiDirector.addEnemy(r),this.renderer.scene.add(s.group)}}setupInteractables(){const e=(n,s,r,o)=>{const a=new Ue(.8,1.2,.6),c=new qe({color:r==="terminal"?58879:r==="door"?9071162:5111706,emissive:r==="terminal"?43775:0,emissiveIntensity:r==="terminal"?.3:0}),l=new he(a,c);l.position.set(n,.6,s),l.castShadow=!0,this.renderer.scene.add(l),this.interactables.push({pos:new T(n,0,s),type:r,id:o,mesh:l})};e(0,-80,"checkpoint","reach_checkpoint"),e(55,-5,"terminal","restore_power"),e(51,-5,"terminal","restore_power"),e(55,-2,"breaker","restore_power"),e(-35,20,"door","infiltrate_building"),e(-33,22,"loot","recover_logs");const t=(n,s,r)=>{const o=new Ue(.5,.3,.4),a=new qe({color:16755200,emissive:16755200,emissiveIntensity:.2}),c=new he(o,a);c.position.set(n,.15,s),this.renderer.scene.add(c),this.loot.push({pos:new T(n,0,s),type:r,mesh:c})};t(-10,-60,"intel"),t(5,-40,"intel"),t(-25,-15,"intel"),t(40,-15,"ammo"),t(-45,-75,"cache")}startGame(){this.isGameStarted||(this.isGameStarted=!0,this.isRunning=!0,this.touchControls.setVisible(!0),this.clock.start(),this.animate(),console.log("[Game] Started"))}tryInteract(){const e=this.playerController.getPosition();for(const t of this.interactables)if(e.distanceTo(t.pos)<3){console.log(`[Interact] ${t.type} ${t.id}`),bt.playProceduralSound("terminal"),Vt.updateObjective(t.id),this.ui.showNotification(`INTERACTED: ${t.type.toUpperCase()}`,2e3),(t.type==="terminal"||t.type==="breaker")&&(t.mesh.material=new qe({color:5111706,emissive:5111706,emissiveIntensity:.5}),setTimeout(()=>{this.renderer.scene.remove(t.mesh),this.interactables=this.interactables.filter(s=>s!==t)},500)),(t.type==="loot"||t.id==="recover_logs")&&(this.weaponSystem.addWeapon("ar_41"),this.updateWeaponMesh(),Bt.save({progression:{currency:100}}));break}for(const t of this.loot)if(e.distanceTo(t.pos)<2){this.renderer.scene.remove(t.mesh),this.loot=this.loot.filter(s=>s!==t),t.type==="ammo"?(this.weaponSystem.addAmmo("rifle",30),this.ui.showNotification("AMMO +30",2e3)):t.type==="intel"?(Vt.updateObjective("collect_intel"),this.ui.showNotification("INTEL COLLECTED",2e3)):t.type==="cache"&&(this.weaponSystem.addWeapon("sr_phantom"),this.updateWeaponMesh(),this.ui.showNotification("HIDDEN CACHE: PHANTOM SR UNLOCKED",3e3)),bt.playProceduralSound("ui_click");break}}checkInteractionPrompt(){const e=this.playerController.getPosition();for(const t of this.interactables)if(e.distanceTo(t.pos)<3)return t.type.toUpperCase();for(const t of this.loot)if(e.distanceTo(t.pos)<2)return`COLLECT ${t.type.toUpperCase()}`;return null}handleShooting(e){const t=this.input.state.fire&&this.weaponSystem.canFire();if(t){const n=this.playerController.getPosition().clone();n.y+=1.4;const s=new T(0,0,-1).applyAxisAngle(new T(0,1,0),this.playerController.yaw),r=this.weaponSystem.getSpread();s.x+=(Math.random()-.5)*r,s.y+=(Math.random()-.5)*r,s.z+=(Math.random()-.5)*r,s.normalize();const o=this.weaponSystem.fire(n,s);if(o){this.cameraSystem.addShake(o.damage*.005,6),this.raycaster.set(n,s),this.enemies.map(u=>u.character.group);for(const u of this.enemies){const p=u.character.getPosition(),v=p.clone().sub(n).dot(s);if(v>0&&v<this.weaponSystem.getCurrent().config.range){const g=n.clone().add(s.clone().multiplyScalar(v));if(g.distanceTo(p.clone().add(new T(0,1,0)))<.8){const d=Math.abs(g.y-(p.y+1.55))<.3;u.character.takeDamage(o.damage,d)&&(this.renderer.scene.remove(u.character.group),this.aiDirector.removeEnemy(u),this.enemies=this.enemies.filter(M=>M!==u),Vt.updateObjective("defend_position"),this.ui.showNotification(d?"HEADSHOT":"ENEMY DOWN",1500),Bt.save({progression:{xp:50}}));break}}}const a=n.clone().add(s.clone().multiplyScalar(20)),c=new zn(.08,6,6),l=new Ui({color:16755268,transparent:!0,opacity:.8}),h=new he(c,l);h.position.copy(a),this.renderer.scene.add(h),setTimeout(()=>this.renderer.scene.remove(h),120)}}this.input.state.reload&&this.weaponSystem.startReload(),this.input.state.switchWeapon!==0&&(this.weaponSystem.switchWeapon(this.input.state.switchWeapon),this.updateWeaponMesh()),this.lastShootState=t}updateStealthState(){const e=this.aiDirector.getCombatCount(),t=Math.max(0,...this.enemies.map(s=>s.getDetectionLevel()),0);let n="HIDDEN";e>0?n="COMBAT":t>.7?n="DETECTED":t>.3?n="SUSPICIOUS":n="HIDDEN",n!==this.stealthState&&(this.stealthState=n,n==="COMBAT"?bt.setMusicState("combat"):n==="DETECTED"?bt.setMusicState("tension"):n==="SUSPICIOUS"?bt.setMusicState("stealth"):bt.setMusicState("exploration"))}updateMissions(){const e=this.playerController.getPosition(),t=Vt.getObjectiveByPos({x:e.x,y:e.y,z:e.z},5);t&&(Vt.updateObjective(t.id),this.ui.showNotification(`OBJECTIVE: ${t.title}`,2500))}dispose(){this.isRunning=!1,this.renderer.dispose(),this.world.dispose()}}console.log("%c BLACK VEIL ","background:#0a0a0f; color:#6aa6ff; font-size:20px; font-family:monospace; padding:8px 16px; border:1px solid #6aa6ff;");console.log("%c THE CITY FORGOT. YOU DIDN'T. ","color:#8a8a9a; font-family:monospace;");function ao(){const i=document.getElementById("game-canvas");if(!i){console.error("Canvas not found");return}const e={webgl:(()=>{try{const s=document.createElement("canvas");return!!window.WebGL2RenderingContext&&!!s.getContext("webgl2")}catch{return!1}})(),webgpu:"gpu"in navigator,touch:"ontouchstart"in window,storage:(()=>{try{return localStorage.setItem("test","1"),localStorage.removeItem("test"),!0}catch{return!1}})(),fullscreen:!!document.documentElement.requestFullscreen,gamepad:"getGamepads"in navigator,gyro:"DeviceOrientationEvent"in window};if(console.log("[Capabilities]",e),!e.webgl){document.getElementById("loading-status").textContent="WEBGL2 NOT SUPPORTED - PLEASE USE MODERN BROWSER";return}document.addEventListener("contextmenu",s=>s.preventDefault()),document.addEventListener("touchmove",s=>{s.target.closest("#ui-root, #touch-controls")||s.preventDefault()},{passive:!1}),document.addEventListener("visibilitychange",()=>{document.hidden&&console.log("[Game] Hidden - pausing audio")});const t=()=>{const s=document.getElementById("orientation-warning");s&&(window.innerHeight>window.innerWidth&&window.innerWidth<768?s.style.display="flex":s.style.display="none")};window.addEventListener("resize",t),t();const n=new qp(i);window.BLACK_VEIL=n,window.BV_SAVE=Bt,"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",s=>{s.data.type==="UPDATE_AVAILABLE"&&console.log("[PWA] Update available")}),window.addEventListener("error",s=>{console.error("[Global Error]",s.error)}),window.addEventListener("unhandledrejection",s=>{console.error("[Unhandled Rejection]",s.reason)}),console.log("[Black Veil] Initialized - Awaiting player")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ao):ao();
