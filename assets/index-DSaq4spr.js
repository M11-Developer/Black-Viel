var Qa=Object.defineProperty;var el=(s,e,t)=>e in s?Qa(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var D=(s,e,t)=>el(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _r="160",tl=0,Ur=1,nl=2,il=0,ma=1,ar=2,dn=3,An=0,Ut=1,Bt=2,En=0,hi=1,Nr=2,Or=3,Fr=4,sl=5,Fn=100,rl=101,ol=102,kr=103,Br=104,al=200,ll=201,cl=202,dl=203,lr=204,cr=205,hl=206,ul=207,fl=208,pl=209,ml=210,gl=211,vl=212,_l=213,xl=214,yl=0,bl=1,Sl=2,fs=3,Ml=4,El=5,wl=6,Tl=7,ga=0,Al=1,Cl=2,wn=0,Rl=1,Ll=2,Pl=3,va=4,Dl=5,Il=6,_a=300,pi=301,mi=302,dr=303,hr=304,bs=306,ur=1e3,jt=1001,fr=1002,Pt=1003,zr=1004,Ls=1005,Gt=1006,Ul=1007,Ui=1008,Tn=1009,Nl=1010,Ol=1011,xr=1012,xa=1013,Sn=1014,Mn=1015,Ni=1016,ya=1017,ba=1018,Bn=1020,Fl=1021,Kt=1023,kl=1024,Bl=1025,zn=1026,gi=1027,zl=1028,Sa=1029,Hl=1030,Ma=1031,Ea=1033,Ps=33776,Ds=33777,Is=33778,Us=33779,Hr=35840,Gr=35841,Vr=35842,Wr=35843,wa=36196,Xr=37492,qr=37496,Yr=37808,$r=37809,jr=37810,Kr=37811,Jr=37812,Zr=37813,Qr=37814,eo=37815,to=37816,no=37817,io=37818,so=37819,ro=37820,oo=37821,Ns=36492,ao=36494,lo=36495,Gl=36283,co=36284,ho=36285,uo=36286,Ta=3e3,Hn=3001,Vl=3200,Wl=3201,Aa=0,Xl=1,Vt="",vt="srgb",fn="srgb-linear",yr="display-p3",Ss="display-p3-linear",ps="linear",et="srgb",ms="rec709",gs="p3",Wn=7680,fo=519,ql=512,Yl=513,$l=514,Ca=515,jl=516,Kl=517,Jl=518,Zl=519,po=35044,mo="300 es",pr=1035,hn=2e3,vs=2001;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let go=1234567;const Pi=Math.PI/180,vi=180/Math.PI;function yi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function br(s,e){return(s%e+e)%e}function Ql(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ec(s,e,t){return s!==e?(t-s)/(e-s):0}function Di(s,e,t){return(1-t)*s+t*e}function tc(s,e,t,n){return Di(s,e,1-Math.exp(-t*n))}function nc(s,e=1){return e-Math.abs(br(s,e*2)-e)}function ic(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function rc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function oc(s,e){return s+Math.random()*(e-s)}function ac(s){return s*(.5-Math.random())}function lc(s){s!==void 0&&(go=s);let e=go+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cc(s){return s*Pi}function dc(s){return s*vi}function mr(s){return(s&s-1)===0&&s!==0}function hc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _s(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function uc(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),p=r((e-n)/2),h=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*d,l*p,l*h,o*c);break;case"YZY":s.set(l*h,o*d,l*p,o*c);break;case"ZXZ":s.set(l*p,l*h,o*d,o*c);break;case"XZX":s.set(o*d,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*d,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Jt={DEG2RAD:Pi,RAD2DEG:vi,generateUUID:yi,clamp:Dt,euclideanModulo:br,mapLinear:Ql,inverseLerp:ec,lerp:Di,damp:tc,pingpong:nc,smoothstep:ic,smootherstep:sc,randInt:rc,randFloat:oc,randFloatSpread:ac,seededRandom:lc,degToRad:cc,radToDeg:dc,isPowerOfTwo:mr,ceilPowerOfTwo:hc,floorPowerOfTwo:_s,setQuaternionFromProperEuler:uc,normalize:Ct,denormalize:ai};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,r,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],h=n[2],m=n[5],g=n[8],v=i[0],f=i[3],u=i[6],S=i[1],x=i[4],T=i[7],P=i[2],A=i[5],C=i[8];return r[0]=a*v+o*S+l*P,r[3]=a*f+o*x+l*A,r[6]=a*u+o*T+l*C,r[1]=c*v+d*S+p*P,r[4]=c*f+d*x+p*A,r[7]=c*u+d*T+p*C,r[2]=h*v+m*S+g*P,r[5]=h*f+m*x+g*A,r[8]=h*u+m*T+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*a-o*c,h=o*l-d*r,m=c*r-a*l,g=t*p+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(i*c-d*n)*v,e[2]=(o*n-i*a)*v,e[3]=h*v,e[4]=(d*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Os.makeScale(e,t)),this}rotate(e){return this.premultiply(Os.makeRotation(-e)),this}translate(e,t){return this.premultiply(Os.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Ge;function Ra(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fc(){const s=xs("canvas");return s.style.display="block",s}const vo={};function Ii(s){s in vo||(vo[s]=!0,console.warn(s))}const _o=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xo=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[fn]:{transfer:ps,primaries:ms,toReference:s=>s,fromReference:s=>s},[vt]:{transfer:et,primaries:ms,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ss]:{transfer:ps,primaries:gs,toReference:s=>s.applyMatrix3(xo),fromReference:s=>s.applyMatrix3(_o)},[yr]:{transfer:et,primaries:gs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(xo),fromReference:s=>s.applyMatrix3(_o).convertLinearToSRGB()}},pc=new Set([fn,Ss]),Ke={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!pc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Hi[e].toReference,i=Hi[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Hi[s].primaries},getTransfer:function(s){return s===Vt?ps:Hi[s].transfer}};function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xn;class La{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=xs("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mc=0;class Pa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ks(i[a].image)):r.push(ks(i[a]))}else r=ks(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ks(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?La.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gc=0;class Nt extends xi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=jt,i=jt,r=Gt,a=Ui,o=Kt,l=Tn,c=Nt.DEFAULT_ANISOTROPY,d=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=yi(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Hn?vt:Vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_a)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ur:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ur:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?Hn:Ta}set encoding(e){Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hn?vt:Vt}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=_a;Nt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],p=l[8],h=l[1],m=l[5],g=l[9],v=l[2],f=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,T=(m+1)/2,P=(u+1)/2,A=(d+h)/4,C=(p+v)/4,W=(g+f)/4;return x>T&&x>P?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=C/n):T>P?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=A/i,r=W/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=C/r,i=W/r),this.set(n,i,r,t),this}let S=Math.sqrt((f-g)*(f-g)+(p-v)*(p-v)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(p-v)/S,this.z=(h-d)/S,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vc extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ii("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hn?vt:Vt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends vc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Da extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _c extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],p=n[i+3];const h=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(p!==v||l!==h||c!==m||d!==g){let f=1-o;const u=l*h+c*m+d*g+p*v,S=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,u*S);f=Math.sin(f*A)/P,o=Math.sin(o*A)/P}const T=o*S;if(l=l*f+h*T,c=c*f+m*T,d=d*f+g*T,p=p*f+v*T,f===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=P,c*=P,d*=P,p*=P}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],p=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+d*p+l*m-c*h,e[t+1]=l*g+d*h+c*p-o*m,e[t+2]=c*g+d*m+o*h-l*p,e[t+3]=d*g-o*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),p=o(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*d*p+c*m*g,this._y=c*m*p-h*d*g,this._z=c*d*g+h*m*p,this._w=c*d*p-h*m*g;break;case"YXZ":this._x=h*d*p+c*m*g,this._y=c*m*p-h*d*g,this._z=c*d*g-h*m*p,this._w=c*d*p+h*m*g;break;case"ZXY":this._x=h*d*p-c*m*g,this._y=c*m*p+h*d*g,this._z=c*d*g+h*m*p,this._w=c*d*p-h*m*g;break;case"ZYX":this._x=h*d*p-c*m*g,this._y=c*m*p+h*d*g,this._z=c*d*g-h*m*p,this._w=c*d*p+h*m*g;break;case"YZX":this._x=h*d*p+c*m*g,this._y=c*m*p+h*d*g,this._z=c*d*g-h*m*p,this._w=c*d*p-h*m*g;break;case"XZY":this._x=h*d*p-c*m*g,this._y=c*m*p-h*d*g,this._z=c*d*g+h*m*p,this._w=c*d*p+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],h=n+o+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-r*l,this._y=i*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),p=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*p+this._w*h,this._x=n*p+this._x*h,this._y=i*p+this._y*h,this._z=r*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class M{constructor(e=0,t=0,n=0){M.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-r*i),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*d,this.y=n+l*d+o*c-r*p,this.z=i+l*p+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bs.copy(this).projectOnVector(e),this.sub(Bs)}reflect(e){return this.sub(Bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new M,yo=new Oi;class Ye{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),Vi.subVectors(this.max,Mi),qn.subVectors(e.a,Mi),Yn.subVectors(e.b,Mi),$n.subVectors(e.c,Mi),mn.subVectors(Yn,qn),gn.subVectors($n,Yn),Ln.subVectors(qn,$n);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Ln.z,Ln.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Ln.z,0,-Ln.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Ln.y,Ln.x,0];return!zs(t,qn,Yn,$n,Vi)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,qn,Yn,$n,Vi))?!1:(Wi.crossVectors(mn,gn),t=[Wi.x,Wi.y,Wi.z],zs(t,qn,Yn,$n,Vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new M,new M,new M,new M,new M,new M,new M,new M],Xt=new M,Gi=new Ye,qn=new M,Yn=new M,$n=new M,mn=new M,gn=new M,Ln=new M,Mi=new M,Vi=new M,Wi=new M,Pn=new M;function zs(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pn.fromArray(s,r);const o=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),l=e.dot(Pn),c=t.dot(Pn),d=n.dot(Pn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const xc=new Ye,Ei=new M,Hs=new M;class Fi{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ei.subVectors(e,this.center);const t=Ei.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ei,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ei.copy(e.center).add(Hs)),this.expandByPoint(Ei.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new M,Gs=new M,Xi=new M,vn=new M,Vs=new M,qi=new M,Ws=new M;class Ms{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gs.copy(e).add(t).multiplyScalar(.5),Xi.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(Gs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Xi),o=vn.dot(this.direction),l=-vn.dot(Xi),c=vn.lengthSq(),d=Math.abs(1-a*a);let p,h,m,g;if(d>0)if(p=a*l-o,h=a*o-l,g=r*d,p>=0)if(h>=-g)if(h<=g){const v=1/d;p*=v,h*=v,m=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=r,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;else h<=-g?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+h*(h+2*l)+c):h<=g?(p=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+h*(h+2*l)+c);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Gs).addScaledVector(Xi,h),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,r){Vs.subVectors(t,e),qi.subVectors(n,e),Ws.crossVectors(Vs,qi);let a=this.direction.dot(Ws),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,e);const l=o*this.direction.dot(qi.crossVectors(vn,qi));if(l<0)return null;const c=o*this.direction.dot(Vs.cross(vn));if(c<0||l+c>a)return null;const d=-o*vn.dot(Ws);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,r,a,o,l,c,d,p,h,m,g,v,f){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,d,p,h,m,g,v,f)}set(e,t,n,i,r,a,o,l,c,d,p,h,m,g,v,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=h,u[3]=m,u[7]=g,u[11]=v,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/jn.setFromMatrixColumn(e,0).length(),r=1/jn.setFromMatrixColumn(e,1).length(),a=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=a*d,m=a*p,g=o*d,v=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*p,g=c*d,v=c*p;t[0]=h+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*p,g=c*d,v=c*p;t[0]=h-v*o,t[4]=-a*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*p,g=o*d,v=o*p;t[0]=l*d,t[4]=g*c-m,t[8]=h*c+v,t[1]=l*p,t[5]=v*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-h*p,t[8]=g*p+m,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*p+g,t[10]=h-v*p}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=h*p+v,t[5]=a*d,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*d,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yc,e,bc)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),_n.crossVectors(n,Ft),_n.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),_n.crossVectors(n,Ft)),_n.normalize(),Yi.crossVectors(Ft,_n),i[0]=_n.x,i[4]=Yi.x,i[8]=Ft.x,i[1]=_n.y,i[5]=Yi.y,i[9]=Ft.y,i[2]=_n.z,i[6]=Yi.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],h=n[9],m=n[13],g=n[2],v=n[6],f=n[10],u=n[14],S=n[3],x=n[7],T=n[11],P=n[15],A=i[0],C=i[4],W=i[8],b=i[12],w=i[1],z=i[5],G=i[9],Q=i[13],L=i[2],U=i[6],H=i[10],$=i[14],X=i[3],Y=i[7],j=i[11],ne=i[15];return r[0]=a*A+o*w+l*L+c*X,r[4]=a*C+o*z+l*U+c*Y,r[8]=a*W+o*G+l*H+c*j,r[12]=a*b+o*Q+l*$+c*ne,r[1]=d*A+p*w+h*L+m*X,r[5]=d*C+p*z+h*U+m*Y,r[9]=d*W+p*G+h*H+m*j,r[13]=d*b+p*Q+h*$+m*ne,r[2]=g*A+v*w+f*L+u*X,r[6]=g*C+v*z+f*U+u*Y,r[10]=g*W+v*G+f*H+u*j,r[14]=g*b+v*Q+f*$+u*ne,r[3]=S*A+x*w+T*L+P*X,r[7]=S*C+x*z+T*U+P*Y,r[11]=S*W+x*G+T*H+P*j,r[15]=S*b+x*Q+T*$+P*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],h=e[10],m=e[14],g=e[3],v=e[7],f=e[11],u=e[15];return g*(+r*l*p-i*c*p-r*o*h+n*c*h+i*o*m-n*l*m)+v*(+t*l*m-t*c*h+r*a*h-i*a*m+i*c*d-r*l*d)+f*(+t*c*p-t*o*m-r*a*p+n*a*m+r*o*d-n*c*d)+u*(-i*o*d-t*l*p+t*o*h+i*a*p-n*a*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],h=e[10],m=e[11],g=e[12],v=e[13],f=e[14],u=e[15],S=p*f*c-v*h*c+v*l*m-o*f*m-p*l*u+o*h*u,x=g*h*c-d*f*c-g*l*m+a*f*m+d*l*u-a*h*u,T=d*v*c-g*p*c+g*o*m-a*v*m-d*o*u+a*p*u,P=g*p*l-d*v*l-g*o*h+a*v*h+d*o*f-a*p*f,A=t*S+n*x+i*T+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=S*C,e[1]=(v*h*r-p*f*r-v*i*m+n*f*m+p*i*u-n*h*u)*C,e[2]=(o*f*r-v*l*r+v*i*c-n*f*c-o*i*u+n*l*u)*C,e[3]=(p*l*r-o*h*r-p*i*c+n*h*c+o*i*m-n*l*m)*C,e[4]=x*C,e[5]=(d*f*r-g*h*r+g*i*m-t*f*m-d*i*u+t*h*u)*C,e[6]=(g*l*r-a*f*r-g*i*c+t*f*c+a*i*u-t*l*u)*C,e[7]=(a*h*r-d*l*r+d*i*c-t*h*c-a*i*m+t*l*m)*C,e[8]=T*C,e[9]=(g*p*r-d*v*r-g*n*m+t*v*m+d*n*u-t*p*u)*C,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*u+t*o*u)*C,e[11]=(d*o*r-a*p*r-d*n*c+t*p*c+a*n*m-t*o*m)*C,e[12]=P*C,e[13]=(d*v*i-g*p*i+g*n*h-t*v*h-d*n*f+t*p*f)*C,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*f-t*o*f)*C,e[15]=(a*p*i-d*o*i+d*n*l-t*p*l-a*n*h+t*o*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,p=o+o,h=r*c,m=r*d,g=r*p,v=a*d,f=a*p,u=o*p,S=l*c,x=l*d,T=l*p,P=n.x,A=n.y,C=n.z;return i[0]=(1-(v+u))*P,i[1]=(m+T)*P,i[2]=(g-x)*P,i[3]=0,i[4]=(m-T)*A,i[5]=(1-(h+u))*A,i[6]=(f+S)*A,i[7]=0,i[8]=(g+x)*C,i[9]=(f-S)*C,i[10]=(1-(h+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=jn.set(i[0],i[1],i[2]).length();const a=jn.set(i[4],i[5],i[6]).length(),o=jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);const c=1/r,d=1/a,p=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=d,qt.elements[5]*=d,qt.elements[6]*=d,qt.elements[8]*=p,qt.elements[9]*=p,qt.elements[10]*=p,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=hn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),p=(t+e)/(t-e),h=(n+i)/(n-i);let m,g;if(o===hn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===vs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=hn){const l=this.elements,c=1/(t-e),d=1/(n-i),p=1/(a-r),h=(t+e)*c,m=(n+i)*d;let g,v;if(o===hn)g=(a+r)*p,v=-2*p;else if(o===vs)g=r*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const jn=new M,qt=new tt,yc=new M(0,0,0),bc=new M(1,1,1),_n=new M,Yi=new M,Ft=new M,bo=new tt,So=new Oi;class Zt{constructor(e=0,t=0,n=0,i=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],p=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return So.setFromEuler(this),this.setFromQuaternion(So,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class Sr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sc=0;const Mo=new M,Kn=new Oi,an=new tt,$i=new M,wi=new M,Mc=new M,Ec=new Oi,Eo=new M(1,0,0),wo=new M(0,1,0),To=new M(0,0,1),wc={type:"added"},Tc={type:"removed"};class _t extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new M,t=new Zt,n=new Oi,i=new M(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ge}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(wo,e)}rotateZ(e){return this.rotateOnAxis(To,e)}translateOnAxis(e,t){return Mo.copy(e).applyQuaternion(this.quaternion),this.position.add(Mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(wo,e)}translateZ(e){return this.translateOnAxis(To,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$i.copy(e):$i.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(wi,$i,this.up):an.lookAt($i,wi,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(an),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Mc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Ec,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),p=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new M(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new M,ln=new M,Xs=new M,cn=new M,Jn=new M,Zn=new M,Ao=new M,qs=new M,Ys=new M,$s=new M;let ji=!1;class $t{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),ln.subVectors(n,t),Xs.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(ln),l=Yt.dot(Xs),c=ln.dot(ln),d=ln.dot(Xs),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;const h=1/p,m=(c*l-o*d)*h,g=(a*d-o*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,i,r,a,o,l){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),ln.subVectors(e,t),Yt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Yt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Jn.subVectors(i,n),Zn.subVectors(r,n),qs.subVectors(e,n);const l=Jn.dot(qs),c=Zn.dot(qs);if(l<=0&&c<=0)return t.copy(n);Ys.subVectors(e,i);const d=Jn.dot(Ys),p=Zn.dot(Ys);if(d>=0&&p<=d)return t.copy(i);const h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Jn,a);$s.subVectors(e,r);const m=Jn.dot($s),g=Zn.dot($s);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Zn,o);const f=d*g-m*p;if(f<=0&&p-d>=0&&m-g>=0)return Ao.subVectors(r,i),o=(p-d)/(p-d+(m-g)),t.copy(i).addScaledVector(Ao,o);const u=1/(f+v+h);return a=v*u,o=h*u,t.copy(n).addScaledVector(Jn,a).addScaledVector(Zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ia={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function js(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=br(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=js(a,r,e+1/3),this.g=js(a,r,e),this.b=js(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=Ia[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Ke.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Dt(Mt.r*255,0,255))*65536+Math.round(Dt(Mt.g*255,0,255))*256+Math.round(Dt(Mt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,i=Mt.g,r=Mt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case n:l=(i-r)/p+(i<r?6:0);break;case i:l=(r-n)/p+2;break;case r:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=vt){Ke.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,i=Mt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(Ki);const n=Di(xn.h,Ki.h,t),i=Di(xn.s,Ki.s,t),r=Di(xn.l,Ki.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new We;We.NAMES=Ia;let Ac=0;class ki extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=hi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lr,this.blendDst=cr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lr&&(n.blendSrc=this.blendSrc),this.blendDst!==cr&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class un extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new M,Ji=new Be;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=po,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==po&&(e.usage=this.usage),e}}class Ua extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Na extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cc=0;const Ht=new tt,Ks=new _t,Qn=new M,kt=new Ye,Ti=new Ye,pt=new M;class nn extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ra(e)?Na:Ua)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(kt.min,Ti.min),kt.expandByPoint(pt),pt.addVectors(kt.max,Ti.max),kt.expandByPoint(pt)):(kt.expandByPoint(Ti.min),kt.expandByPoint(Ti.max))}kt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)pt.fromBufferAttribute(o,c),l&&(Qn.fromBufferAttribute(e,c),pt.add(Qn)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<o;w++)c[w]=new M,d[w]=new M;const p=new M,h=new M,m=new M,g=new Be,v=new Be,f=new Be,u=new M,S=new M;function x(w,z,G){p.fromArray(i,w*3),h.fromArray(i,z*3),m.fromArray(i,G*3),g.fromArray(a,w*2),v.fromArray(a,z*2),f.fromArray(a,G*2),h.sub(p),m.sub(p),v.sub(g),f.sub(g);const Q=1/(v.x*f.y-f.x*v.y);isFinite(Q)&&(u.copy(h).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(Q),S.copy(m).multiplyScalar(v.x).addScaledVector(h,-f.x).multiplyScalar(Q),c[w].add(u),c[z].add(u),c[G].add(u),d[w].add(S),d[z].add(S),d[G].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,z=T.length;w<z;++w){const G=T[w],Q=G.start,L=G.count;for(let U=Q,H=Q+L;U<H;U+=3)x(n[U+0],n[U+1],n[U+2])}const P=new M,A=new M,C=new M,W=new M;function b(w){C.fromArray(r,w*3),W.copy(C);const z=c[w];P.copy(z),P.sub(C.multiplyScalar(C.dot(z))).normalize(),A.crossVectors(W,z);const Q=A.dot(d[w])<0?-1:1;l[w*4]=P.x,l[w*4+1]=P.y,l[w*4+2]=P.z,l[w*4+3]=Q}for(let w=0,z=T.length;w<z;++w){const G=T[w],Q=G.start,L=G.count;for(let U=Q,H=Q+L;U<H;U+=3)b(n[U+0]),b(n[U+1]),b(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new M,r=new M,a=new M,o=new M,l=new M,c=new M,d=new M,p=new M;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),f=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),d.subVectors(a,r),p.subVectors(i,r),d.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),p.subVectors(i,r),d.cross(p),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,h=new c.constructor(l.length*d);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*d;for(let u=0;u<d;u++)h[g++]=c[m++]}return new Qt(h,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){const h=c[d],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],p=r[c];for(let h=0,m=p.length;h<m;h++)d.push(p[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Co=new tt,Dn=new Ms,Zi=new Fi,Ro=new M,ei=new M,ti=new M,ni=new M,Js=new M,Qi=new M,es=new Be,ts=new Be,ns=new Be,Lo=new M,Po=new M,Do=new M,is=new M,ss=new M;class q extends _t{constructor(e=new nn,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Qi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],p=r[l];d!==0&&(Js.fromBufferAttribute(p,e),a?Qi.addScaledVector(Js,d):Qi.addScaledVector(Js.sub(t),d))}t.add(Qi)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),Dn.copy(e.ray).recast(e.near),!(Zi.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(Zi,Ro)===null||Dn.origin.distanceToSquared(Ro)>(e.far-e.near)**2))&&(Co.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(Co),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const f=h[g],u=a[f.materialIndex],S=Math.max(f.start,m.start),x=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let T=S,P=x;T<P;T+=3){const A=o.getX(T),C=o.getX(T+1),W=o.getX(T+2);i=rs(this,u,e,n,c,d,p,A,C,W),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let f=g,u=v;f<u;f+=3){const S=o.getX(f),x=o.getX(f+1),T=o.getX(f+2);i=rs(this,a,e,n,c,d,p,S,x,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const f=h[g],u=a[f.materialIndex],S=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=S,P=x;T<P;T+=3){const A=T,C=T+1,W=T+2;i=rs(this,u,e,n,c,d,p,A,C,W),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,u=v;f<u;f+=3){const S=f,x=f+1,T=f+2;i=rs(this,a,e,n,c,d,p,S,x,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Rc(s,e,t,n,i,r,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===An,o),l===null)return null;ss.copy(o),ss.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ss);return c<t.near||c>t.far?null:{distance:c,point:ss.clone(),object:s}}function rs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ei),s.getVertexPosition(l,ti),s.getVertexPosition(c,ni);const d=Rc(s,e,t,n,ei,ti,ni,is);if(d){i&&(es.fromBufferAttribute(i,o),ts.fromBufferAttribute(i,l),ns.fromBufferAttribute(i,c),d.uv=$t.getInterpolation(is,ei,ti,ni,es,ts,ns,new Be)),r&&(es.fromBufferAttribute(r,o),ts.fromBufferAttribute(r,l),ns.fromBufferAttribute(r,c),d.uv1=$t.getInterpolation(is,ei,ti,ni,es,ts,ns,new Be),d.uv2=d.uv1),a&&(Lo.fromBufferAttribute(a,o),Po.fromBufferAttribute(a,l),Do.fromBufferAttribute(a,c),d.normal=$t.getInterpolation(is,ei,ti,ni,Lo,Po,Do,new M),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new M,materialIndex:0};$t.getNormal(ei,ti,ni,p.normal),d.face=p}return d}class ge extends nn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],p=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(p,2));function g(v,f,u,S,x,T,P,A,C,W,b){const w=T/C,z=P/W,G=T/2,Q=P/2,L=A/2,U=C+1,H=W+1;let $=0,X=0;const Y=new M;for(let j=0;j<H;j++){const ne=j*z-Q;for(let ie=0;ie<U;ie++){const V=ie*w-G;Y[v]=V*S,Y[f]=ne*x,Y[u]=L,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[f]=0,Y[u]=A>0?1:-1,d.push(Y.x,Y.y,Y.z),p.push(ie/C),p.push(1-j/W),$+=1}}for(let j=0;j<W;j++)for(let ne=0;ne<C;ne++){const ie=h+ne+U*j,V=h+ne+U*(j+1),K=h+(ne+1)+U*(j+1),ce=h+(ne+1)+U*j;l.push(ie,V,ce),l.push(V,K,ce),X+=6}o.addGroup(m,X,b),m+=X,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ge(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){const e={};for(let t=0;t<s.length;t++){const n=_i(s[t]);for(const i in n)e[i]=n[i]}return e}function Lc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Oa(s){return s.getRenderTarget()===null?s.outputColorSpace:Ke.workingColorSpace}const Pc={clone:_i,merge:Rt};var Dc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ic=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dc,this.fragmentShader=Ic,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Lc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fa extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class It extends Fa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vi*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ii=-90,si=1;class Uc extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new It(ii,si,e,t);i.layers=this.layers,this.add(i);const r=new It(ii,si,e,t);r.layers=this.layers,this.add(r);const a=new It(ii,si,e,t);a.layers=this.layers,this.add(a);const o=new It(ii,si,e,t);o.layers=this.layers,this.add(o);const l=new It(ii,si,e,t);l.layers=this.layers,this.add(l);const c=new It(ii,si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(p,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ka extends Nt{constructor(e,t,n,i,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,i,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nc extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ii("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hn?vt:Vt),this.texture=new ka(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ge(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:En});r.uniforms.tEquirect.value=t;const a=new q(i,r),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Gt),new Uc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Zs=new M,Oc=new M,Fc=new Ge;class Nn{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zs.subVectors(n,t).cross(Oc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fc.getNormalMatrix(e),i=this.coplanarPoint(Zs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Fi,os=new M;class Mr{constructor(e=new Nn,t=new Nn,n=new Nn,i=new Nn,r=new Nn,a=new Nn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],p=i[6],h=i[7],m=i[8],g=i[9],v=i[10],f=i[11],u=i[12],S=i[13],x=i[14],T=i[15];if(n[0].setComponents(l-r,h-c,f-m,T-u).normalize(),n[1].setComponents(l+r,h+c,f+m,T+u).normalize(),n[2].setComponents(l+a,h+d,f+g,T+S).normalize(),n[3].setComponents(l-a,h-d,f-g,T-S).normalize(),n[4].setComponents(l-o,h-p,f-v,T-x).normalize(),t===hn)n[5].setComponents(l+o,h+p,f+v,T+x).normalize();else if(t===vs)n[5].setComponents(o,p,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(os.x=i.normal.x>0?e.max.x:e.min.x,os.y=i.normal.y>0?e.max.y:e.min.y,os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ba(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function kc(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const p=c.array,h=c.usage,m=p.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,p,h),c.onUploadCallback();let v;if(p instanceof Float32Array)v=s.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=s.SHORT;else if(p instanceof Uint32Array)v=s.UNSIGNED_INT;else if(p instanceof Int32Array)v=s.INT;else if(p instanceof Int8Array)v=s.BYTE;else if(p instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,d,p){const h=d.array,m=d._updateRange,g=d.updateRanges;if(s.bindBuffer(p,c),m.count===-1&&g.length===0&&s.bufferSubData(p,0,h),g.length!==0){for(let v=0,f=g.length;v<f;v++){const u=g[v];t?s.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):s.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):s.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(s.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=n.get(c);if(p===void 0)n.set(c,i(c,d));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,c,d),p.version=c.version}}return{get:a,remove:o,update:l}}class yt extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,p=e/o,h=t/l,m=[],g=[],v=[],f=[];for(let u=0;u<d;u++){const S=u*h-a;for(let x=0;x<c;x++){const T=x*p-r;g.push(T,-S,0),v.push(0,0,1),f.push(x/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){const x=S+c*u,T=S+c*(u+1),P=S+1+c*(u+1),A=S+1+c*u;m.push(x,T,A),m.push(T,P,A)}this.setIndex(m),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zc=`#ifdef USE_ALPHAHASH
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
#endif`,Hc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xc=`#ifdef USE_AOMAP
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
#endif`,qc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yc=`#ifdef USE_BATCHING
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
#endif`,$c=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zc=`#ifdef USE_IRIDESCENCE
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
#endif`,Qc=`#ifdef USE_BUMPMAP
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
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ld=`#define PI 3.141592653589793
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
} // validated`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dd=`vec3 transformedNormal = objectNormal;
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
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`
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
}`,vd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Td=`#ifdef USE_GRADIENTMAP
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
}`,Ad=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
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
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fd=`PhysicalMaterial material;
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
#endif`,kd=`struct PhysicalMaterial {
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
}`,Bd=`
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
#endif`,zd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jd=`#if defined( USE_POINTS_UV )
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
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qd=`#ifdef USE_MORPHNORMALS
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
#endif`,eh=`#ifdef USE_MORPHTARGETS
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
#endif`,th=`#ifdef USE_MORPHTARGETS
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
#endif`,nh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ih=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ah=`#ifdef USE_NORMALMAP
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
#endif`,lh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ph=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_h=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mh=`float getShadowMask() {
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
}`,Eh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wh=`#ifdef USE_SKINNING
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
#endif`,Th=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ah=`#ifdef USE_SKINNING
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
#endif`,Ch=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ph=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dh=`#ifdef USE_TRANSMISSION
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
#endif`,Ih=`#ifdef USE_TRANSMISSION
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
#endif`,Uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bh=`uniform sampler2D t2D;
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
}`,zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wh=`#include <common>
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
}`,Xh=`#if DEPTH_PACKING == 3200
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
}`,qh=`#define DISTANCE
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
}`,Yh=`#define DISTANCE
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
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kh=`uniform float scale;
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
}`,Jh=`uniform vec3 diffuse;
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
}`,Zh=`#include <common>
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
}`,Qh=`uniform vec3 diffuse;
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
}`,eu=`#define LAMBERT
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
}`,tu=`#define LAMBERT
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
}`,nu=`#define MATCAP
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
}`,iu=`#define MATCAP
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
}`,su=`#define NORMAL
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
}`,ru=`#define NORMAL
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
}`,ou=`#define PHONG
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
}`,au=`#define PHONG
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
}`,lu=`#define STANDARD
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
}`,cu=`#define STANDARD
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
}`,du=`#define TOON
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
}`,hu=`#define TOON
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
}`,uu=`uniform float size;
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
}`,fu=`uniform vec3 diffuse;
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
}`,pu=`#include <common>
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
}`,mu=`uniform vec3 color;
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
}`,gu=`uniform float rotation;
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
}`,vu=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:Bc,alphahash_pars_fragment:zc,alphamap_fragment:Hc,alphamap_pars_fragment:Gc,alphatest_fragment:Vc,alphatest_pars_fragment:Wc,aomap_fragment:Xc,aomap_pars_fragment:qc,batching_pars_vertex:Yc,batching_vertex:$c,begin_vertex:jc,beginnormal_vertex:Kc,bsdfs:Jc,iridescence_fragment:Zc,bumpmap_pars_fragment:Qc,clipping_planes_fragment:ed,clipping_planes_pars_fragment:td,clipping_planes_pars_vertex:nd,clipping_planes_vertex:id,color_fragment:sd,color_pars_fragment:rd,color_pars_vertex:od,color_vertex:ad,common:ld,cube_uv_reflection_fragment:cd,defaultnormal_vertex:dd,displacementmap_pars_vertex:hd,displacementmap_vertex:ud,emissivemap_fragment:fd,emissivemap_pars_fragment:pd,colorspace_fragment:md,colorspace_pars_fragment:gd,envmap_fragment:vd,envmap_common_pars_fragment:_d,envmap_pars_fragment:xd,envmap_pars_vertex:yd,envmap_physical_pars_fragment:Dd,envmap_vertex:bd,fog_vertex:Sd,fog_pars_vertex:Md,fog_fragment:Ed,fog_pars_fragment:wd,gradientmap_pars_fragment:Td,lightmap_fragment:Ad,lightmap_pars_fragment:Cd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Ld,lights_pars_begin:Pd,lights_toon_fragment:Id,lights_toon_pars_fragment:Ud,lights_phong_fragment:Nd,lights_phong_pars_fragment:Od,lights_physical_fragment:Fd,lights_physical_pars_fragment:kd,lights_fragment_begin:Bd,lights_fragment_maps:zd,lights_fragment_end:Hd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:$d,map_particle_pars_fragment:jd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Jd,morphcolor_vertex:Zd,morphnormal_vertex:Qd,morphtarget_pars_vertex:eh,morphtarget_vertex:th,normal_fragment_begin:nh,normal_fragment_maps:ih,normal_pars_fragment:sh,normal_pars_vertex:rh,normal_vertex:oh,normalmap_pars_fragment:ah,clearcoat_normal_fragment_begin:lh,clearcoat_normal_fragment_maps:ch,clearcoat_pars_fragment:dh,iridescence_pars_fragment:hh,opaque_fragment:uh,packing:fh,premultiplied_alpha_fragment:ph,project_vertex:mh,dithering_fragment:gh,dithering_pars_fragment:vh,roughnessmap_fragment:_h,roughnessmap_pars_fragment:xh,shadowmap_pars_fragment:yh,shadowmap_pars_vertex:bh,shadowmap_vertex:Sh,shadowmask_pars_fragment:Mh,skinbase_vertex:Eh,skinning_pars_vertex:wh,skinning_vertex:Th,skinnormal_vertex:Ah,specularmap_fragment:Ch,specularmap_pars_fragment:Rh,tonemapping_fragment:Lh,tonemapping_pars_fragment:Ph,transmission_fragment:Dh,transmission_pars_fragment:Ih,uv_pars_fragment:Uh,uv_pars_vertex:Nh,uv_vertex:Oh,worldpos_vertex:Fh,background_vert:kh,background_frag:Bh,backgroundCube_vert:zh,backgroundCube_frag:Hh,cube_vert:Gh,cube_frag:Vh,depth_vert:Wh,depth_frag:Xh,distanceRGBA_vert:qh,distanceRGBA_frag:Yh,equirect_vert:$h,equirect_frag:jh,linedashed_vert:Kh,linedashed_frag:Jh,meshbasic_vert:Zh,meshbasic_frag:Qh,meshlambert_vert:eu,meshlambert_frag:tu,meshmatcap_vert:nu,meshmatcap_frag:iu,meshnormal_vert:su,meshnormal_frag:ru,meshphong_vert:ou,meshphong_frag:au,meshphysical_vert:lu,meshphysical_frag:cu,meshtoon_vert:du,meshtoon_frag:hu,points_vert:uu,points_frag:fu,shadow_vert:pu,shadow_frag:mu,sprite_vert:gu,sprite_frag:vu},re={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},tn={basic:{uniforms:Rt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Rt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new We(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Rt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Rt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Rt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new We(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Rt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Rt([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Rt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Rt([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Rt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Rt([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Rt([re.common,re.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Rt([re.lights,re.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};tn.physical={uniforms:Rt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const as={r:0,b:0,g:0};function _u(s,e,t,n,i,r,a){const o=new We(0);let l=r===!0?0:1,c,d,p=null,h=0,m=null;function g(f,u){let S=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),S=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===bs)?(d===void 0&&(d=new q(new ge(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:_i(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Ke.getTransfer(x.colorSpace)!==et,(p!==x||h!==x.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,p=x,h=x.version,m=s.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new q(new yt(2,2),new Vn({name:"BackgroundMaterial",uniforms:_i(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||h!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,p=x,h=x.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,u){f.getRGB(as,Oa(s)),n.buffers.color.setClear(as.r,as.g,as.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(f,u=1){o.set(f),l=u,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(o,l)},render:g}}function xu(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null);let c=l,d=!1;function p(L,U,H,$,X){let Y=!1;if(a){const j=v($,H,U);c!==j&&(c=j,m(c.object)),Y=u(L,$,H,X),Y&&S(L,$,H,X)}else{const j=U.wireframe===!0;(c.geometry!==$.id||c.program!==H.id||c.wireframe!==j)&&(c.geometry=$.id,c.program=H.id,c.wireframe=j,Y=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(Y||d)&&(d=!1,W(L,U,H,$),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function v(L,U,H){const $=H.wireframe===!0;let X=o[L.id];X===void 0&&(X={},o[L.id]=X);let Y=X[U.id];Y===void 0&&(Y={},X[U.id]=Y);let j=Y[$];return j===void 0&&(j=f(h()),Y[$]=j),j}function f(L){const U=[],H=[],$=[];for(let X=0;X<i;X++)U[X]=0,H[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:$,object:L,attributes:{},index:null}}function u(L,U,H,$){const X=c.attributes,Y=U.attributes;let j=0;const ne=H.getAttributes();for(const ie in ne)if(ne[ie].location>=0){const K=X[ie];let ce=Y[ie];if(ce===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;j++}return c.attributesNum!==j||c.index!==$}function S(L,U,H,$){const X={},Y=U.attributes;let j=0;const ne=H.getAttributes();for(const ie in ne)if(ne[ie].location>=0){let K=Y[ie];K===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),X[ie]=ce,j++}c.attributes=X,c.attributesNum=j,c.index=$}function x(){const L=c.newAttributes;for(let U=0,H=L.length;U<H;U++)L[U]=0}function T(L){P(L,0)}function P(L,U){const H=c.newAttributes,$=c.enabledAttributes,X=c.attributeDivisors;H[L]=1,$[L]===0&&(s.enableVertexAttribArray(L),$[L]=1),X[L]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),X[L]=U)}function A(){const L=c.newAttributes,U=c.enabledAttributes;for(let H=0,$=U.length;H<$;H++)U[H]!==L[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function C(L,U,H,$,X,Y,j){j===!0?s.vertexAttribIPointer(L,U,H,X,Y):s.vertexAttribPointer(L,U,H,$,X,Y)}function W(L,U,H,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=$.attributes,Y=H.getAttributes(),j=U.defaultAttributeValues;for(const ne in Y){const ie=Y[ne];if(ie.location>=0){let V=X[ne];if(V===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const K=V.normalized,ce=V.itemSize,_e=t.get(V);if(_e===void 0)continue;const ve=_e.buffer,Pe=_e.type,Ie=_e.bytesPerElement,we=n.isWebGL2===!0&&(Pe===s.INT||Pe===s.UNSIGNED_INT||V.gpuType===xa);if(V.isInterleavedBufferAttribute){const Xe=V.data,N=Xe.stride,wt=V.offset;if(Xe.isInstancedInterleavedBuffer){for(let ye=0;ye<ie.locationSize;ye++)P(ie.location+ye,Xe.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ye=0;ye<ie.locationSize;ye++)T(ie.location+ye);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let ye=0;ye<ie.locationSize;ye++)C(ie.location+ye,ce/ie.locationSize,Pe,K,N*Ie,(wt+ce/ie.locationSize*ye)*Ie,we)}else{if(V.isInstancedBufferAttribute){for(let Xe=0;Xe<ie.locationSize;Xe++)P(ie.location+Xe,V.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Xe=0;Xe<ie.locationSize;Xe++)T(ie.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Xe=0;Xe<ie.locationSize;Xe++)C(ie.location+Xe,ce/ie.locationSize,Pe,K,ce*Ie,ce/ie.locationSize*Xe*Ie,we)}}else if(j!==void 0){const K=j[ne];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ie.location,K);break;case 3:s.vertexAttrib3fv(ie.location,K);break;case 4:s.vertexAttrib4fv(ie.location,K);break;default:s.vertexAttrib1fv(ie.location,K)}}}}A()}function b(){G();for(const L in o){const U=o[L];for(const H in U){const $=U[H];for(const X in $)g($[X].object),delete $[X];delete U[H]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const U=o[L.id];for(const H in U){const $=U[H];for(const X in $)g($[X].object),delete $[X];delete U[H]}delete o[L.id]}function z(L){for(const U in o){const H=o[U];if(H[L.id]===void 0)continue;const $=H[L.id];for(const X in $)g($[X].object),delete $[X];delete H[L.id]}}function G(){Q(),d=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:G,resetDefaultState:Q,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:T,disableUnusedAttributes:A}}function yu(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}function o(d,p){s.drawArrays(r,d,p),t.update(p,r,1)}function l(d,p,h){if(h===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,d,p,h),t.update(p,r,h)}function c(d,p,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(d[g],p[g]);else{m.multiDrawArraysWEBGL(r,d,0,p,0,h);let g=0;for(let v=0;v<h;v++)g+=p[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function bu(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,T=a||e.has("OES_texture_float"),P=x&&T,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:A}}function Su(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Nn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||n!==0||i;return i=h,n=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=d(p,h,0)},this.setState=function(p,h,m){const g=p.clippingPlanes,v=p.clipIntersection,f=p.clipShadows,u=s.get(p);if(!i||g===null||g.length===0||r&&!f)r?d(null):c();else{const S=r?0:n,x=S*4;let T=u.clippingState||null;l.value=T,T=d(g,h,x,m);for(let P=0;P!==x;++P)T[P]=t[P];u.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,h,m,g){const v=p!==null?p.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const u=m+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<u)&&(f=new Float32Array(u));for(let x=0,T=m;x!==v;++x,T+=4)a.copy(p[x]).applyMatrix4(S,o),a.normal.toArray(f,T),f[T+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Mu(s){let e=new WeakMap;function t(a,o){return o===dr?a.mapping=pi:o===hr&&(a.mapping=mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===dr||o===hr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nc(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class za extends Fa{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const li=4,Io=[.125,.215,.35,.446,.526,.582],kn=20,Qs=new za,Uo=new We;let er=null,tr=0,nr=0;const On=(1+Math.sqrt(5))/2,ri=1/On,No=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,On,ri),new M(0,On,-ri),new M(ri,0,On),new M(-ri,0,On),new M(On,ri,0),new M(-On,ri,0)];class Oo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){er=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(er,tr,nr),e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),er=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Ni,format:Kt,colorSpace:fn,depthBuffer:!1},i=Fo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eu(r)),this._blurMaterial=wu(r,e,t)}return i}_compileMaterial(e){const t=new q(this._lodPlanes[0],e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,n,i){const o=new It(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,h=d.toneMapping;d.getClearColor(Uo),d.toneMapping=wn,d.autoClear=!1;const m=new un({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new q(new ge,m);let v=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,v=!0):(m.color.copy(Uo),v=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):S===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;ls(i,S*x,u>2?x:0,x,x),d.setRenderTarget(i),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=p,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ko());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new q(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=No[(i-1)%No.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new q(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*kn-1),v=r/g,f=isFinite(r)?1+Math.floor(d*v):kn;f>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${kn}`);const u=[];let S=0;for(let C=0;C<kn;++C){const W=C/v,b=Math.exp(-W*W/2);u.push(b),C===0?S+=b:C<f&&(S+=2*b)}for(let C=0;C<u.length;C++)u[C]=u[C]/S;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const T=this._sizeLods[i],P=3*T*(i>x-li?i-x+li:0),A=4*(this._cubeSize-T);ls(t,P,A,3*T,2*T),l.setRenderTarget(t),l.render(p,Qs)}}function Eu(s){const e=[],t=[],n=[];let i=s;const r=s-li+1+Io.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-li?l=Io[a-s+li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,g=6,v=3,f=2,u=1,S=new Float32Array(v*g*m),x=new Float32Array(f*g*m),T=new Float32Array(u*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,W=A>2?0:-1,b=[C,W,0,C+2/3,W,0,C+2/3,W+1,0,C,W,0,C+2/3,W+1,0,C,W+1,0];S.set(b,v*g*A),x.set(h,f*g*A);const w=[A,A,A,A,A,A];T.set(w,u*g*A)}const P=new nn;P.setAttribute("position",new Qt(S,v)),P.setAttribute("uv",new Qt(x,f)),P.setAttribute("faceIndex",new Qt(T,u)),e.push(P),i>li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fo(s,e,t){const n=new Gn(s,e,t);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function wu(s,e,t){const n=new Float32Array(kn),i=new M(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Er(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function ko(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Er(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Bo(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Er(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Er(){return`

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
	`}function Tu(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===dr||l===hr,d=l===pi||l===mi;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new Oo(s)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(c&&p&&p.height>0||d&&p&&i(p)){t===null&&(t=new Oo(s));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Au(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cu(s,e,t,n){const i={},r=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let f=0,u=v.length;f<u;f++)e.remove(v[f])}h.removeEventListener("dispose",a),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const g in h)e.update(h[g],s.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const v=m[g];for(let f=0,u=v.length;f<u;f++)e.update(v[f],s.ARRAY_BUFFER)}}function c(p){const h=[],m=p.index,g=p.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let x=0,T=S.length;x<T;x+=3){const P=S[x+0],A=S[x+1],C=S[x+2];h.push(P,A,A,C,C,P)}}else if(g!==void 0){const S=g.array;v=g.version;for(let x=0,T=S.length/3-1;x<T;x+=3){const P=x+0,A=x+1,C=x+2;h.push(P,A,A,C,C,P)}}else return;const f=new(Ra(h)?Na:Ua)(h,1);f.version=v;const u=r.get(p);u&&e.remove(u),r.set(p,f)}function d(p){const h=r.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Ru(s,e,t,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,g){s.drawElements(r,g,o,m*l),t.update(g,r,1)}function p(m,g,v){if(v===0)return;let f,u;if(i)f=s,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](r,g,o,m*l,v),t.update(g,r,v)}function h(m,g,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<v;u++)this.render(m[u]/l,g[u]);else{f.multiDrawElementsWEBGL(r,g,0,o,m,0,v);let u=0;for(let S=0;S<v;S++)u+=g[S];t.update(u,r,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=p,this.renderMultiDraw=h}function Lu(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pu(s,e){return s[0]-e[0]}function Du(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Iu(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new nt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,p){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let f=r.get(d);if(f===void 0||f.count!==v){let U=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",U)};var m=U;f!==void 0&&f.texture.dispose();const x=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],W=d.morphAttributes.color||[];let b=0;x===!0&&(b=1),T===!0&&(b=2),P===!0&&(b=3);let w=d.attributes.position.count*b,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const G=new Float32Array(w*z*4*v),Q=new Da(G,w,z,v);Q.type=Mn,Q.needsUpdate=!0;const L=b*4;for(let H=0;H<v;H++){const $=A[H],X=C[H],Y=W[H],j=w*z*4*H;for(let ne=0;ne<$.count;ne++){const ie=ne*L;x===!0&&(a.fromBufferAttribute($,ne),G[j+ie+0]=a.x,G[j+ie+1]=a.y,G[j+ie+2]=a.z,G[j+ie+3]=0),T===!0&&(a.fromBufferAttribute(X,ne),G[j+ie+4]=a.x,G[j+ie+5]=a.y,G[j+ie+6]=a.z,G[j+ie+7]=0),P===!0&&(a.fromBufferAttribute(Y,ne),G[j+ie+8]=a.x,G[j+ie+9]=a.y,G[j+ie+10]=a.z,G[j+ie+11]=Y.itemSize===4?a.w:1)}}f={count:v,texture:Q,size:new Be(w,z)},r.set(d,f),d.addEventListener("dispose",U)}let u=0;for(let x=0;x<h.length;x++)u+=h[x];const S=d.morphTargetsRelative?1:1-u;p.getUniforms().setValue(s,"morphTargetBaseInfluence",S),p.getUniforms().setValue(s,"morphTargetInfluences",h),p.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=h===void 0?0:h.length;let v=n[d.id];if(v===void 0||v.length!==g){v=[];for(let T=0;T<g;T++)v[T]=[T,0];n[d.id]=v}for(let T=0;T<g;T++){const P=v[T];P[0]=T,P[1]=h[T]}v.sort(Du);for(let T=0;T<8;T++)T<g&&v[T][1]?(o[T][0]=v[T][0],o[T][1]=v[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(Pu);const f=d.morphAttributes.position,u=d.morphAttributes.normal;let S=0;for(let T=0;T<8;T++){const P=o[T],A=P[0],C=P[1];A!==Number.MAX_SAFE_INTEGER&&C?(f&&d.getAttribute("morphTarget"+T)!==f[A]&&d.setAttribute("morphTarget"+T,f[A]),u&&d.getAttribute("morphNormal"+T)!==u[A]&&d.setAttribute("morphNormal"+T,u[A]),i[T]=C,S+=C):(f&&d.hasAttribute("morphTarget"+T)===!0&&d.deleteAttribute("morphTarget"+T),u&&d.hasAttribute("morphNormal"+T)===!0&&d.deleteAttribute("morphNormal"+T),i[T]=0)}const x=d.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",x),p.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Uu(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,p=e.get(l,d);if(i.get(p)!==c&&(e.update(p),i.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return p}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Ha extends Nt{constructor(e,t,n,i,r,a,o,l,c,d){if(d=d!==void 0?d:zn,d!==zn&&d!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===zn&&(n=Sn),n===void 0&&d===gi&&(n=Bn),super(null,i,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ga=new Nt,Va=new Ha(1,1);Va.compareFunction=Ca;const Wa=new Da,Xa=new _c,qa=new ka,zo=[],Ho=[],Go=new Float32Array(16),Vo=new Float32Array(9),Wo=new Float32Array(4);function bi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=zo[i];if(r===void 0&&(r=new Float32Array(i),zo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Es(s,e){let t=Ho[e];t===void 0&&(t=new Int32Array(e),Ho[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Nu(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ou(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2fv(this.addr,e),ht(t,e)}}function Fu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;s.uniform3fv(this.addr,e),ht(t,e)}}function ku(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4fv(this.addr,e),ht(t,e)}}function Bu(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,n))return;Wo.set(n),s.uniformMatrix2fv(this.addr,!1,Wo),ht(t,n)}}function zu(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,n))return;Vo.set(n),s.uniformMatrix3fv(this.addr,!1,Vo),ht(t,n)}}function Hu(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,n))return;Go.set(n),s.uniformMatrix4fv(this.addr,!1,Go),ht(t,n)}}function Gu(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Vu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2iv(this.addr,e),ht(t,e)}}function Wu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3iv(this.addr,e),ht(t,e)}}function Xu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4iv(this.addr,e),ht(t,e)}}function qu(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Yu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2uiv(this.addr,e),ht(t,e)}}function $u(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3uiv(this.addr,e),ht(t,e)}}function ju(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4uiv(this.addr,e),ht(t,e)}}function Ku(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Va:Ga;t.setTexture2D(e||r,i)}function Ju(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xa,i)}function Zu(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qa,i)}function Qu(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wa,i)}function ef(s){switch(s){case 5126:return Nu;case 35664:return Ou;case 35665:return Fu;case 35666:return ku;case 35674:return Bu;case 35675:return zu;case 35676:return Hu;case 5124:case 35670:return Gu;case 35667:case 35671:return Vu;case 35668:case 35672:return Wu;case 35669:case 35673:return Xu;case 5125:return qu;case 36294:return Yu;case 36295:return $u;case 36296:return ju;case 35678:case 36198:case 36298:case 36306:case 35682:return Ku;case 35679:case 36299:case 36307:return Ju;case 35680:case 36300:case 36308:case 36293:return Zu;case 36289:case 36303:case 36311:case 36292:return Qu}}function tf(s,e){s.uniform1fv(this.addr,e)}function nf(s,e){const t=bi(e,this.size,2);s.uniform2fv(this.addr,t)}function sf(s,e){const t=bi(e,this.size,3);s.uniform3fv(this.addr,t)}function rf(s,e){const t=bi(e,this.size,4);s.uniform4fv(this.addr,t)}function of(s,e){const t=bi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function af(s,e){const t=bi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function lf(s,e){const t=bi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function cf(s,e){s.uniform1iv(this.addr,e)}function df(s,e){s.uniform2iv(this.addr,e)}function hf(s,e){s.uniform3iv(this.addr,e)}function uf(s,e){s.uniform4iv(this.addr,e)}function ff(s,e){s.uniform1uiv(this.addr,e)}function pf(s,e){s.uniform2uiv(this.addr,e)}function mf(s,e){s.uniform3uiv(this.addr,e)}function gf(s,e){s.uniform4uiv(this.addr,e)}function vf(s,e,t){const n=this.cache,i=e.length,r=Es(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ga,r[a])}function _f(s,e,t){const n=this.cache,i=e.length,r=Es(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Xa,r[a])}function xf(s,e,t){const n=this.cache,i=e.length,r=Es(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||qa,r[a])}function yf(s,e,t){const n=this.cache,i=e.length,r=Es(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Wa,r[a])}function bf(s){switch(s){case 5126:return tf;case 35664:return nf;case 35665:return sf;case 35666:return rf;case 35674:return of;case 35675:return af;case 35676:return lf;case 5124:case 35670:return cf;case 35667:case 35671:return df;case 35668:case 35672:return hf;case 35669:case 35673:return uf;case 5125:return ff;case 36294:return pf;case 36295:return mf;case 36296:return gf;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return yf}}class Sf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ef(t.type)}}class Mf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bf(t.type)}}class Ef{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ir=/(\w+)(\])?(\[|\.)?/g;function Xo(s,e){s.seq.push(e),s.map[e.id]=e}function wf(s,e,t){const n=s.name,i=n.length;for(ir.lastIndex=0;;){const r=ir.exec(n),a=ir.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Xo(t,c===void 0?new Sf(o,s,e):new Mf(o,s,e));break}else{let p=t.map[o];p===void 0&&(p=new Ef(o),Xo(t,p)),t=p}}}class hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);wf(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function qo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Tf=37297;let Af=0;function Cf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Rf(s){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s);let n;switch(e===t?n="":e===gs&&t===ms?n="LinearDisplayP3ToLinearSRGB":e===ms&&t===gs&&(n="LinearSRGBToLinearDisplayP3"),s){case fn:case Ss:return[n,"LinearTransferOETF"];case vt:case yr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Yo(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Cf(s.getShaderSource(e),a)}else return i}function Lf(s,e){const t=Rf(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pf(s,e){let t;switch(e){case Rl:t="Linear";break;case Ll:t="Reinhard";break;case Pl:t="OptimizedCineon";break;case va:t="ACESFilmic";break;case Il:t="AgX";break;case Dl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Df(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ci).join(`
`)}function If(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ci).join(`
`)}function Uf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nf(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ci(s){return s!==""}function $o(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Of=/^[ \t]*#include +<([\w\d./]+)>/gm;function gr(s){return s.replace(Of,kf)}const Ff=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kf(s,e){let t=Ne[e];if(t===void 0){const n=Ff.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gr(t)}const Bf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ko(s){return s.replace(Bf,zf)}function zf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hf(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ma?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ar?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gf(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Wf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ga:e="ENVMAP_BLENDING_MULTIPLY";break;case Al:e="ENVMAP_BLENDING_MIX";break;case Cl:e="ENVMAP_BLENDING_ADD";break}return e}function Xf(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qf(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Hf(t),c=Gf(t),d=Vf(t),p=Wf(t),h=Xf(t),m=t.isWebGL2?"":Df(t),g=If(t),v=Uf(r),f=i.createProgram();let u,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ci).join(`
`),u.length>0&&(u+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ci).join(`
`),S.length>0&&(S+=`
`)):(u=[Jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ci).join(`
`),S=[m,Jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==wn?Pf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Lf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ci).join(`
`)),a=gr(a),a=$o(a,t),a=jo(a,t),o=gr(o),o=$o(o,t),o=jo(o,t),a=Ko(a),o=Ko(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const T=x+u+a,P=x+S+o,A=qo(i,i.VERTEX_SHADER,T),C=qo(i,i.FRAGMENT_SHADER,P);i.attachShader(f,A),i.attachShader(f,C),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function W(G){if(s.debug.checkShaderErrors){const Q=i.getProgramInfoLog(f).trim(),L=i.getShaderInfoLog(A).trim(),U=i.getShaderInfoLog(C).trim();let H=!0,$=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,A,C);else{const X=Yo(i,A,"vertex"),Y=Yo(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+X+`
`+Y)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(L===""||U==="")&&($=!1);$&&(G.diagnostics={runnable:H,programLog:Q,vertexShader:{log:L,prefix:u},fragmentShader:{log:U,prefix:S}})}i.deleteShader(A),i.deleteShader(C),b=new hs(i,f),w=Nf(i,f)}let b;this.getUniforms=function(){return b===void 0&&W(this),b};let w;this.getAttributes=function(){return w===void 0&&W(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(f,Tf)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Af++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=C,this}let Yf=0;class $f{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jf(e),t.set(e,n)),n}}class jf{constructor(e){this.id=Yf++,this.code=e,this.usedTimes=0}}function Kf(s,e,t,n,i,r,a){const o=new Sr,l=new $f,c=[],d=i.isWebGL2,p=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function f(b,w,z,G,Q){const L=G.fog,U=Q.geometry,H=b.isMeshStandardMaterial?G.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),X=$&&$.mapping===bs?$.image.height:null,Y=g[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ne=j!==void 0?j.length:0;let ie=0;U.morphAttributes.position!==void 0&&(ie=1),U.morphAttributes.normal!==void 0&&(ie=2),U.morphAttributes.color!==void 0&&(ie=3);let V,K,ce,_e;if(Y){const Tt=tn[Y];V=Tt.vertexShader,K=Tt.fragmentShader}else V=b.vertexShader,K=b.fragmentShader,l.update(b),ce=l.getVertexShaderID(b),_e=l.getFragmentShaderID(b);const ve=s.getRenderTarget(),Pe=Q.isInstancedMesh===!0,Ie=Q.isBatchedMesh===!0,we=!!b.map,Xe=!!b.matcap,N=!!$,wt=!!b.aoMap,ye=!!b.lightMap,Re=!!b.bumpMap,fe=!!b.normalMap,it=!!b.displacementMap,Oe=!!b.emissiveMap,E=!!b.metalnessMap,_=!!b.roughnessMap,F=b.anisotropy>0,ee=b.clearcoat>0,Z=b.iridescence>0,te=b.sheen>0,pe=b.transmission>0,le=F&&!!b.anisotropyMap,he=ee&&!!b.clearcoatMap,Ee=ee&&!!b.clearcoatNormalMap,Fe=ee&&!!b.clearcoatRoughnessMap,J=Z&&!!b.iridescenceMap,je=Z&&!!b.iridescenceThicknessMap,Ve=te&&!!b.sheenColorMap,Ce=te&&!!b.sheenRoughnessMap,xe=!!b.specularMap,ue=!!b.specularColorMap,Ue=!!b.specularIntensityMap,$e=pe&&!!b.transmissionMap,rt=pe&&!!b.thicknessMap,ze=!!b.gradientMap,se=!!b.alphaMap,R=b.alphaTest>0,oe=!!b.alphaHash,ae=!!b.extensions,Te=!!U.attributes.uv1,be=!!U.attributes.uv2,Je=!!U.attributes.uv3;let Ze=wn;return b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ze=s.toneMapping),{isWebGL2:d,shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:V,fragmentShader:K,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ie,instancing:Pe,instancingColor:Pe&&Q.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:fn,map:we,matcap:Xe,envMap:N,envMapMode:N&&$.mapping,envMapCubeUVHeight:X,aoMap:wt,lightMap:ye,bumpMap:Re,normalMap:fe,displacementMap:h&&it,emissiveMap:Oe,normalMapObjectSpace:fe&&b.normalMapType===Xl,normalMapTangentSpace:fe&&b.normalMapType===Aa,metalnessMap:E,roughnessMap:_,anisotropy:F,anisotropyMap:le,clearcoat:ee,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Fe,iridescence:Z,iridescenceMap:J,iridescenceThicknessMap:je,sheen:te,sheenColorMap:Ve,sheenRoughnessMap:Ce,specularMap:xe,specularColorMap:ue,specularIntensityMap:Ue,transmission:pe,transmissionMap:$e,thicknessMap:rt,gradientMap:ze,opaque:b.transparent===!1&&b.blending===hi,alphaMap:se,alphaTest:R,alphaHash:oe,combine:b.combine,mapUv:we&&v(b.map.channel),aoMapUv:wt&&v(b.aoMap.channel),lightMapUv:ye&&v(b.lightMap.channel),bumpMapUv:Re&&v(b.bumpMap.channel),normalMapUv:fe&&v(b.normalMap.channel),displacementMapUv:it&&v(b.displacementMap.channel),emissiveMapUv:Oe&&v(b.emissiveMap.channel),metalnessMapUv:E&&v(b.metalnessMap.channel),roughnessMapUv:_&&v(b.roughnessMap.channel),anisotropyMapUv:le&&v(b.anisotropyMap.channel),clearcoatMapUv:he&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:je&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(b.sheenRoughnessMap.channel),specularMapUv:xe&&v(b.specularMap.channel),specularColorMapUv:ue&&v(b.specularColorMap.channel),specularIntensityMapUv:Ue&&v(b.specularIntensityMap.channel),transmissionMapUv:$e&&v(b.transmissionMap.channel),thicknessMapUv:rt&&v(b.thicknessMap.channel),alphaMapUv:se&&v(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(fe||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:be,vertexUv3s:Je,pointsUvs:Q.isPoints===!0&&!!U.attributes.uv&&(we||se),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:Q.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ze,useLegacyLights:s._useLegacyLights,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bt,flipSided:b.side===Ut,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ae&&b.extensions.derivatives===!0,extensionFragDepth:ae&&b.extensions.fragDepth===!0,extensionDrawBuffers:ae&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function u(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)w.push(z),w.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(S(w,b),x(w,b),w.push(s.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function S(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function T(b){const w=g[b.type];let z;if(w){const G=tn[w];z=Pc.clone(G.uniforms)}else z=b.uniforms;return z}function P(b,w){let z;for(let G=0,Q=c.length;G<Q;G++){const L=c[G];if(L.cacheKey===w){z=L,++z.usedTimes;break}}return z===void 0&&(z=new qf(s,w,b,r),c.push(z)),z}function A(b){if(--b.usedTimes===0){const w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function W(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:T,acquireProgram:P,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:W}}function Jf(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(p,h,m,g,v,f){let u=s[e];return u===void 0?(u={id:p.id,object:p,geometry:h,material:m,groupOrder:g,renderOrder:p.renderOrder,z:v,group:f},s[e]=u):(u.id=p.id,u.object=p,u.geometry=h,u.material=m,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=v,u.group=f),e++,u}function o(p,h,m,g,v,f){const u=a(p,h,m,g,v,f);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):t.push(u)}function l(p,h,m,g,v,f){const u=a(p,h,m,g,v,f);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):t.unshift(u)}function c(p,h){t.length>1&&t.sort(p||Zf),n.length>1&&n.sort(h||Zo),i.length>1&&i.sort(h||Zo)}function d(){for(let p=e,h=s.length;p<h;p++){const m=s[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:d,sort:c}}function Qf(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Qo,s.set(n,[a])):i>=r.length?(a=new Qo,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ep(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new We};break;case"SpotLight":t={position:new M,direction:new M,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new M,halfWidth:new M,halfHeight:new M};break}return s[e.id]=t,t}}}function tp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let np=0;function ip(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sp(s,e){const t=new ep,n=tp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new M);const r=new M,a=new tt,o=new tt;function l(d,p){let h=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let v=0,f=0,u=0,S=0,x=0,T=0,P=0,A=0,C=0,W=0,b=0;d.sort(ip);const w=p===!0?Math.PI:1;for(let G=0,Q=d.length;G<Q;G++){const L=d[G],U=L.color,H=L.intensity,$=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*H*w,m+=U.g*H*w,g+=U.b*H*w;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],H);b++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const j=L.shadow,ne=n.get(L);ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,i.directionalShadow[v]=ne,i.directionalShadowMap[v]=X,i.directionalShadowMatrix[v]=L.shadow.matrix,T++}i.directional[v]=Y,v++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(U).multiplyScalar(H*w),Y.distance=$,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[u]=Y;const j=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,j.updateMatrices(L),L.castShadow&&W++),i.spotLightMatrix[u]=j.matrix,L.castShadow){const ne=n.get(L);ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,i.spotShadow[u]=ne,i.spotShadowMap[u]=X,A++}u++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(U).multiplyScalar(H),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=Y,S++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*w),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const j=L.shadow,ne=n.get(L);ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,ne.shadowCameraNear=j.camera.near,ne.shadowCameraFar=j.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=X,i.pointShadowMatrix[f]=L.shadow.matrix,P++}i.point[f]=Y,f++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(H*w),Y.groundColor.copy(L.groundColor).multiplyScalar(H*w),i.hemi[x]=Y,x++}}S>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==v||z.pointLength!==f||z.spotLength!==u||z.rectAreaLength!==S||z.hemiLength!==x||z.numDirectionalShadows!==T||z.numPointShadows!==P||z.numSpotShadows!==A||z.numSpotMaps!==C||z.numLightProbes!==b)&&(i.directional.length=v,i.spot.length=u,i.rectArea.length=S,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=A+C-W,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=W,i.numLightProbes=b,z.directionalLength=v,z.pointLength=f,z.spotLength=u,z.rectAreaLength=S,z.hemiLength=x,z.numDirectionalShadows=T,z.numPointShadows=P,z.numSpotShadows=A,z.numSpotMaps=C,z.numLightProbes=b,i.version=np++)}function c(d,p){let h=0,m=0,g=0,v=0,f=0;const u=p.matrixWorldInverse;for(let S=0,x=d.length;S<x;S++){const T=d[S];if(T.isDirectionalLight){const P=i.directional[h];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(u),h++}else if(T.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(u),g++}else if(T.isRectAreaLight){const P=i.rectArea[v];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(u),o.identity(),a.copy(T.matrixWorld),a.premultiply(u),o.extractRotation(a),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){const P=i.hemi[f];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:i}}function ea(s,e){const t=new sp(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(p){n.push(p)}function o(p){i.push(p)}function l(p){t.setup(n,p)}function c(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function rp(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new ea(s,e),t.set(r,[l])):a>=o.length?(l=new ea(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class op extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ap extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cp=`uniform sampler2D shadow_pass;
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
}`;function dp(s,e,t){let n=new Mr;const i=new Be,r=new Be,a=new nt,o=new op({depthPacking:Wl}),l=new ap,c={},d=t.maxTextureSize,p={[An]:Ut,[Ut]:An,[Bt]:Bt},h=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:lp,fragmentShader:cp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new q(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let u=this.type;this.render=function(A,C,W){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),w=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),G=s.state;G.setBlending(En),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Q=u!==dn&&this.type===dn,L=u===dn&&this.type!==dn;for(let U=0,H=A.length;U<H;U++){const $=A[U],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const Y=X.getFrameExtents();if(i.multiply(Y),r.copy(X.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/Y.x),i.x=r.x*Y.x,X.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/Y.y),i.y=r.y*Y.y,X.mapSize.y=r.y)),X.map===null||Q===!0||L===!0){const ne=this.type!==dn?{minFilter:Pt,magFilter:Pt}:{};X.map!==null&&X.map.dispose(),X.map=new Gn(i.x,i.y,ne),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const j=X.getViewportCount();for(let ne=0;ne<j;ne++){const ie=X.getViewport(ne);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),G.viewport(a),X.updateMatrices($,ne),n=X.getFrustum(),T(C,W,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===dn&&S(X,W),X.needsUpdate=!1}u=this.type,f.needsUpdate=!1,s.setRenderTarget(b,w,z)};function S(A,C){const W=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,W,h,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,W,m,v,null)}function x(A,C,W,b){let w=null;const z=W.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)w=z;else if(w=W.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=w.uuid,Q=C.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let U=L[Q];U===void 0&&(U=w.clone(),L[Q]=U,C.addEventListener("dispose",P)),w=U}if(w.visible=C.visible,w.wireframe=C.wireframe,b===dn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:p[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const G=s.properties.get(w);G.light=W}return w}function T(A,C,W,b,w){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),L=A.material;if(Array.isArray(L)){const U=Q.groups;for(let H=0,$=U.length;H<$;H++){const X=U[H],Y=L[X.materialIndex];if(Y&&Y.visible){const j=x(A,Y,b,w);A.onBeforeShadow(s,A,C,W,Q,j,X),s.renderBufferDirect(W,null,Q,j,A,X),A.onAfterShadow(s,A,C,W,Q,j,X)}}}else if(L.visible){const U=x(A,L,b,w);A.onBeforeShadow(s,A,C,W,Q,U,null),s.renderBufferDirect(W,null,Q,U,A,null),A.onAfterShadow(s,A,C,W,Q,U,null)}}const G=A.children;for(let Q=0,L=G.length;Q<L;Q++)T(G[Q],C,W,b,w)}function P(A){A.target.removeEventListener("dispose",P);for(const W in c){const b=c[W],w=A.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function hp(s,e,t){const n=t.isWebGL2;function i(){let R=!1;const oe=new nt;let ae=null;const Te=new nt(0,0,0,0);return{setMask:function(be){ae!==be&&!R&&(s.colorMask(be,be,be,be),ae=be)},setLocked:function(be){R=be},setClear:function(be,Je,Ze,ut,Tt){Tt===!0&&(be*=ut,Je*=ut,Ze*=ut),oe.set(be,Je,Ze,ut),Te.equals(oe)===!1&&(s.clearColor(be,Je,Ze,ut),Te.copy(oe))},reset:function(){R=!1,ae=null,Te.set(-1,0,0,0)}}}function r(){let R=!1,oe=null,ae=null,Te=null;return{setTest:function(be){be?Ie(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(be){oe!==be&&!R&&(s.depthMask(be),oe=be)},setFunc:function(be){if(ae!==be){switch(be){case yl:s.depthFunc(s.NEVER);break;case bl:s.depthFunc(s.ALWAYS);break;case Sl:s.depthFunc(s.LESS);break;case fs:s.depthFunc(s.LEQUAL);break;case Ml:s.depthFunc(s.EQUAL);break;case El:s.depthFunc(s.GEQUAL);break;case wl:s.depthFunc(s.GREATER);break;case Tl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ae=be}},setLocked:function(be){R=be},setClear:function(be){Te!==be&&(s.clearDepth(be),Te=be)},reset:function(){R=!1,oe=null,ae=null,Te=null}}}function a(){let R=!1,oe=null,ae=null,Te=null,be=null,Je=null,Ze=null,ut=null,Tt=null;return{setTest:function(Qe){R||(Qe?Ie(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Qe){oe!==Qe&&!R&&(s.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,At,en){(ae!==Qe||Te!==At||be!==en)&&(s.stencilFunc(Qe,At,en),ae=Qe,Te=At,be=en)},setOp:function(Qe,At,en){(Je!==Qe||Ze!==At||ut!==en)&&(s.stencilOp(Qe,At,en),Je=Qe,Ze=At,ut=en)},setLocked:function(Qe){R=Qe},setClear:function(Qe){Tt!==Qe&&(s.clearStencil(Qe),Tt=Qe)},reset:function(){R=!1,oe=null,ae=null,Te=null,be=null,Je=null,Ze=null,ut=null,Tt=null}}}const o=new i,l=new r,c=new a,d=new WeakMap,p=new WeakMap;let h={},m={},g=new WeakMap,v=[],f=null,u=!1,S=null,x=null,T=null,P=null,A=null,C=null,W=null,b=new We(0,0,0),w=0,z=!1,G=null,Q=null,L=null,U=null,H=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=Y>=2);let ne=null,ie={};const V=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ce=new nt().fromArray(V),_e=new nt().fromArray(K);function ve(R,oe,ae,Te){const be=new Uint8Array(4),Je=s.createTexture();s.bindTexture(R,Je),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<ae;Ze++)n&&(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)?s.texImage3D(oe,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(oe+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Je}const Pe={};Pe[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),Pe[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pe[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(s.DEPTH_TEST),l.setFunc(fs),Oe(!1),E(Ur),Ie(s.CULL_FACE),fe(En);function Ie(R){h[R]!==!0&&(s.enable(R),h[R]=!0)}function we(R){h[R]!==!1&&(s.disable(R),h[R]=!1)}function Xe(R,oe){return m[R]!==oe?(s.bindFramebuffer(R,oe),m[R]=oe,n&&(R===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=oe),R===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=oe)),!0):!1}function N(R,oe){let ae=v,Te=!1;if(R)if(ae=g.get(oe),ae===void 0&&(ae=[],g.set(oe,ae)),R.isWebGLMultipleRenderTargets){const be=R.texture;if(ae.length!==be.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Je=0,Ze=be.length;Je<Ze;Je++)ae[Je]=s.COLOR_ATTACHMENT0+Je;ae.length=be.length,Te=!0}}else ae[0]!==s.COLOR_ATTACHMENT0&&(ae[0]=s.COLOR_ATTACHMENT0,Te=!0);else ae[0]!==s.BACK&&(ae[0]=s.BACK,Te=!0);Te&&(t.isWebGL2?s.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function wt(R){return f!==R?(s.useProgram(R),f=R,!0):!1}const ye={[Fn]:s.FUNC_ADD,[rl]:s.FUNC_SUBTRACT,[ol]:s.FUNC_REVERSE_SUBTRACT};if(n)ye[kr]=s.MIN,ye[Br]=s.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ye[kr]=R.MIN_EXT,ye[Br]=R.MAX_EXT)}const Re={[al]:s.ZERO,[ll]:s.ONE,[cl]:s.SRC_COLOR,[lr]:s.SRC_ALPHA,[ml]:s.SRC_ALPHA_SATURATE,[fl]:s.DST_COLOR,[hl]:s.DST_ALPHA,[dl]:s.ONE_MINUS_SRC_COLOR,[cr]:s.ONE_MINUS_SRC_ALPHA,[pl]:s.ONE_MINUS_DST_COLOR,[ul]:s.ONE_MINUS_DST_ALPHA,[gl]:s.CONSTANT_COLOR,[vl]:s.ONE_MINUS_CONSTANT_COLOR,[_l]:s.CONSTANT_ALPHA,[xl]:s.ONE_MINUS_CONSTANT_ALPHA};function fe(R,oe,ae,Te,be,Je,Ze,ut,Tt,Qe){if(R===En){u===!0&&(we(s.BLEND),u=!1);return}if(u===!1&&(Ie(s.BLEND),u=!0),R!==sl){if(R!==S||Qe!==z){if((x!==Fn||A!==Fn)&&(s.blendEquation(s.FUNC_ADD),x=Fn,A=Fn),Qe)switch(R){case hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nr:s.blendFunc(s.ONE,s.ONE);break;case Or:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Or:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}T=null,P=null,C=null,W=null,b.set(0,0,0),w=0,S=R,z=Qe}return}be=be||oe,Je=Je||ae,Ze=Ze||Te,(oe!==x||be!==A)&&(s.blendEquationSeparate(ye[oe],ye[be]),x=oe,A=be),(ae!==T||Te!==P||Je!==C||Ze!==W)&&(s.blendFuncSeparate(Re[ae],Re[Te],Re[Je],Re[Ze]),T=ae,P=Te,C=Je,W=Ze),(ut.equals(b)===!1||Tt!==w)&&(s.blendColor(ut.r,ut.g,ut.b,Tt),b.copy(ut),w=Tt),S=R,z=!1}function it(R,oe){R.side===Bt?we(s.CULL_FACE):Ie(s.CULL_FACE);let ae=R.side===Ut;oe&&(ae=!ae),Oe(ae),R.blending===hi&&R.transparent===!1?fe(En):fe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Te=R.stencilWrite;c.setTest(Te),Te&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),F(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ie(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(R){G!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),G=R)}function E(R){R!==tl?(Ie(s.CULL_FACE),R!==Q&&(R===Ur?s.cullFace(s.BACK):R===nl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),Q=R}function _(R){R!==L&&(X&&s.lineWidth(R),L=R)}function F(R,oe,ae){R?(Ie(s.POLYGON_OFFSET_FILL),(U!==oe||H!==ae)&&(s.polygonOffset(oe,ae),U=oe,H=ae)):we(s.POLYGON_OFFSET_FILL)}function ee(R){R?Ie(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Z(R){R===void 0&&(R=s.TEXTURE0+$-1),ne!==R&&(s.activeTexture(R),ne=R)}function te(R,oe,ae){ae===void 0&&(ne===null?ae=s.TEXTURE0+$-1:ae=ne);let Te=ie[ae];Te===void 0&&(Te={type:void 0,texture:void 0},ie[ae]=Te),(Te.type!==R||Te.texture!==oe)&&(ne!==ae&&(s.activeTexture(ae),ne=ae),s.bindTexture(R,oe||Pe[R]),Te.type=R,Te.texture=oe)}function pe(){const R=ie[ne];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ve(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(R){ce.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),ce.copy(R))}function $e(R){_e.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function rt(R,oe){let ae=p.get(oe);ae===void 0&&(ae=new WeakMap,p.set(oe,ae));let Te=ae.get(R);Te===void 0&&(Te=s.getUniformBlockIndex(oe,R.name),ae.set(R,Te))}function ze(R,oe){const Te=p.get(oe).get(R);d.get(oe)!==Te&&(s.uniformBlockBinding(oe,Te,R.__bindingPointIndex),d.set(oe,Te))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ne=null,ie={},m={},g=new WeakMap,v=[],f=null,u=!1,S=null,x=null,T=null,P=null,A=null,C=null,W=null,b=new We(0,0,0),w=0,z=!1,G=null,Q=null,L=null,U=null,H=null,ce.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ie,disable:we,bindFramebuffer:Xe,drawBuffers:N,useProgram:wt,setBlending:fe,setMaterial:it,setFlipSided:Oe,setCullFace:E,setLineWidth:_,setPolygonOffset:F,setScissorTest:ee,activeTexture:Z,bindTexture:te,unbindTexture:pe,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:xe,texImage3D:ue,updateUBOMapping:rt,uniformBlockBinding:ze,texStorage2D:Ve,texStorage3D:Ce,texSubImage2D:Ee,texSubImage3D:Fe,compressedTexSubImage2D:J,compressedTexSubImage3D:je,scissor:Ue,viewport:$e,reset:se}}function up(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):xs("canvas")}function v(E,_,F,ee){let Z=1;if((E.width>ee||E.height>ee)&&(Z=ee/Math.max(E.width,E.height)),Z<1||_===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const te=_?_s:Math.floor,pe=te(Z*E.width),le=te(Z*E.height);p===void 0&&(p=g(pe,le));const he=F?g(pe,le):p;return he.width=pe,he.height=le,he.getContext("2d").drawImage(E,0,0,pe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+pe+"x"+le+")."),he}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return mr(E.width)&&mr(E.height)}function u(E){return o?!1:E.wrapS!==jt||E.wrapT!==jt||E.minFilter!==Pt&&E.minFilter!==Gt}function S(E,_){return E.generateMipmaps&&_&&E.minFilter!==Pt&&E.minFilter!==Gt}function x(E){s.generateMipmap(E)}function T(E,_,F,ee,Z=!1){if(o===!1)return _;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=_;if(_===s.RED&&(F===s.FLOAT&&(te=s.R32F),F===s.HALF_FLOAT&&(te=s.R16F),F===s.UNSIGNED_BYTE&&(te=s.R8)),_===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(te=s.R8UI),F===s.UNSIGNED_SHORT&&(te=s.R16UI),F===s.UNSIGNED_INT&&(te=s.R32UI),F===s.BYTE&&(te=s.R8I),F===s.SHORT&&(te=s.R16I),F===s.INT&&(te=s.R32I)),_===s.RG&&(F===s.FLOAT&&(te=s.RG32F),F===s.HALF_FLOAT&&(te=s.RG16F),F===s.UNSIGNED_BYTE&&(te=s.RG8)),_===s.RGBA){const pe=Z?ps:Ke.getTransfer(ee);F===s.FLOAT&&(te=s.RGBA32F),F===s.HALF_FLOAT&&(te=s.RGBA16F),F===s.UNSIGNED_BYTE&&(te=pe===et?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function P(E,_,F){return S(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==Pt&&E.minFilter!==Gt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){return E===Pt||E===zr||E===Ls?s.NEAREST:s.LINEAR}function C(E){const _=E.target;_.removeEventListener("dispose",C),b(_),_.isVideoTexture&&d.delete(_)}function W(E){const _=E.target;_.removeEventListener("dispose",W),z(_)}function b(E){const _=n.get(E);if(_.__webglInit===void 0)return;const F=E.source,ee=h.get(F);if(ee){const Z=ee[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(E),Object.keys(ee).length===0&&h.delete(F)}n.remove(E)}function w(E){const _=n.get(E);s.deleteTexture(_.__webglTexture);const F=E.source,ee=h.get(F);delete ee[_.__cacheKey],a.memory.textures--}function z(E){const _=E.texture,F=n.get(E),ee=n.get(_);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let te=0;te<F.__webglFramebuffer[Z].length;te++)s.deleteFramebuffer(F.__webglFramebuffer[Z][te]);else s.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)s.deleteFramebuffer(F.__webglFramebuffer[Z]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Z=0,te=_.length;Z<te;Z++){const pe=n.get(_[Z]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(_[Z])}n.remove(_),n.remove(E)}let G=0;function Q(){G=0}function L(){const E=G;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),G+=1,E}function U(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function H(E,_){const F=n.get(E);if(E.isVideoTexture&&it(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(F,E,_);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+_)}function $(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ce(F,E,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+_)}function X(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ce(F,E,_);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+_)}function Y(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){_e(F,E,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+_)}const j={[ur]:s.REPEAT,[jt]:s.CLAMP_TO_EDGE,[fr]:s.MIRRORED_REPEAT},ne={[Pt]:s.NEAREST,[zr]:s.NEAREST_MIPMAP_NEAREST,[Ls]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[Ul]:s.LINEAR_MIPMAP_NEAREST,[Ui]:s.LINEAR_MIPMAP_LINEAR},ie={[ql]:s.NEVER,[Zl]:s.ALWAYS,[Yl]:s.LESS,[Ca]:s.LEQUAL,[$l]:s.EQUAL,[Jl]:s.GEQUAL,[jl]:s.GREATER,[Kl]:s.NOTEQUAL};function V(E,_,F){if(F?(s.texParameteri(E,s.TEXTURE_WRAP_S,j[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,j[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,j[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ne[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ne[_.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(_.wrapS!==jt||_.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,A(_.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==Pt&&_.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ie[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Pt||_.minFilter!==Ls&&_.minFilter!==Ui||_.type===Mn&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Ni&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(s.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function K(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",C));const ee=_.source;let Z=h.get(ee);Z===void 0&&(Z={},h.set(ee,Z));const te=U(_);if(te!==E.__cacheKey){Z[te]===void 0&&(Z[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[te].usedTimes++;const pe=Z[E.__cacheKey];pe!==void 0&&(Z[E.__cacheKey].usedTimes--,pe.usedTimes===0&&w(_)),E.__cacheKey=te,E.__webglTexture=Z[te].texture}return F}function ce(E,_,F){let ee=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=s.TEXTURE_3D);const Z=K(E,_),te=_.source;t.bindTexture(ee,E.__webglTexture,s.TEXTURE0+F);const pe=n.get(te);if(te.version!==pe.__version||Z===!0){t.activeTexture(s.TEXTURE0+F);const le=Ke.getPrimaries(Ke.workingColorSpace),he=_.colorSpace===Vt?null:Ke.getPrimaries(_.colorSpace),Ee=_.colorSpace===Vt||le===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Fe=u(_)&&f(_.image)===!1;let J=v(_.image,Fe,!1,i.maxTextureSize);J=Oe(_,J);const je=f(J)||o,Ve=r.convert(_.format,_.colorSpace);let Ce=r.convert(_.type),xe=T(_.internalFormat,Ve,Ce,_.colorSpace,_.isVideoTexture);V(ee,_,je);let ue;const Ue=_.mipmaps,$e=o&&_.isVideoTexture!==!0&&xe!==wa,rt=pe.__version===void 0||Z===!0,ze=P(_,J,je);if(_.isDepthTexture)xe=s.DEPTH_COMPONENT,o?_.type===Mn?xe=s.DEPTH_COMPONENT32F:_.type===Sn?xe=s.DEPTH_COMPONENT24:_.type===Bn?xe=s.DEPTH24_STENCIL8:xe=s.DEPTH_COMPONENT16:_.type===Mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===zn&&xe===s.DEPTH_COMPONENT&&_.type!==xr&&_.type!==Sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Sn,Ce=r.convert(_.type)),_.format===gi&&xe===s.DEPTH_COMPONENT&&(xe=s.DEPTH_STENCIL,_.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Bn,Ce=r.convert(_.type))),rt&&($e?t.texStorage2D(s.TEXTURE_2D,1,xe,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,xe,J.width,J.height,0,Ve,Ce,null));else if(_.isDataTexture)if(Ue.length>0&&je){$e&&rt&&t.texStorage2D(s.TEXTURE_2D,ze,xe,Ue[0].width,Ue[0].height);for(let se=0,R=Ue.length;se<R;se++)ue=Ue[se],$e?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ve,Ce,ue.data):t.texImage2D(s.TEXTURE_2D,se,xe,ue.width,ue.height,0,Ve,Ce,ue.data);_.generateMipmaps=!1}else $e?(rt&&t.texStorage2D(s.TEXTURE_2D,ze,xe,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Ve,Ce,J.data)):t.texImage2D(s.TEXTURE_2D,0,xe,J.width,J.height,0,Ve,Ce,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,xe,Ue[0].width,Ue[0].height,J.depth);for(let se=0,R=Ue.length;se<R;se++)ue=Ue[se],_.format!==Kt?Ve!==null?$e?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,J.depth,Ve,ue.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,xe,ue.width,ue.height,J.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,J.depth,Ve,Ce,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,xe,ue.width,ue.height,J.depth,0,Ve,Ce,ue.data)}else{$e&&rt&&t.texStorage2D(s.TEXTURE_2D,ze,xe,Ue[0].width,Ue[0].height);for(let se=0,R=Ue.length;se<R;se++)ue=Ue[se],_.format!==Kt?Ve!==null?$e?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ve,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,se,xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ve,Ce,ue.data):t.texImage2D(s.TEXTURE_2D,se,xe,ue.width,ue.height,0,Ve,Ce,ue.data)}else if(_.isDataArrayTexture)$e?(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,xe,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ve,Ce,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,J.width,J.height,J.depth,0,Ve,Ce,J.data);else if(_.isData3DTexture)$e?(rt&&t.texStorage3D(s.TEXTURE_3D,ze,xe,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ve,Ce,J.data)):t.texImage3D(s.TEXTURE_3D,0,xe,J.width,J.height,J.depth,0,Ve,Ce,J.data);else if(_.isFramebufferTexture){if(rt)if($e)t.texStorage2D(s.TEXTURE_2D,ze,xe,J.width,J.height);else{let se=J.width,R=J.height;for(let oe=0;oe<ze;oe++)t.texImage2D(s.TEXTURE_2D,oe,xe,se,R,0,Ve,Ce,null),se>>=1,R>>=1}}else if(Ue.length>0&&je){$e&&rt&&t.texStorage2D(s.TEXTURE_2D,ze,xe,Ue[0].width,Ue[0].height);for(let se=0,R=Ue.length;se<R;se++)ue=Ue[se],$e?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ve,Ce,ue):t.texImage2D(s.TEXTURE_2D,se,xe,Ve,Ce,ue);_.generateMipmaps=!1}else $e?(rt&&t.texStorage2D(s.TEXTURE_2D,ze,xe,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,Ce,J)):t.texImage2D(s.TEXTURE_2D,0,xe,Ve,Ce,J);S(_,je)&&x(ee),pe.__version=te.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function _e(E,_,F){if(_.image.length!==6)return;const ee=K(E,_),Z=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+F);const te=n.get(Z);if(Z.version!==te.__version||ee===!0){t.activeTexture(s.TEXTURE0+F);const pe=Ke.getPrimaries(Ke.workingColorSpace),le=_.colorSpace===Vt?null:Ke.getPrimaries(_.colorSpace),he=_.colorSpace===Vt||pe===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,Fe=_.image[0]&&_.image[0].isDataTexture,J=[];for(let se=0;se<6;se++)!Ee&&!Fe?J[se]=v(_.image[se],!1,!0,i.maxCubemapSize):J[se]=Fe?_.image[se].image:_.image[se],J[se]=Oe(_,J[se]);const je=J[0],Ve=f(je)||o,Ce=r.convert(_.format,_.colorSpace),xe=r.convert(_.type),ue=T(_.internalFormat,Ce,xe,_.colorSpace),Ue=o&&_.isVideoTexture!==!0,$e=te.__version===void 0||ee===!0;let rt=P(_,je,Ve);V(s.TEXTURE_CUBE_MAP,_,Ve);let ze;if(Ee){Ue&&$e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,ue,je.width,je.height);for(let se=0;se<6;se++){ze=J[se].mipmaps;for(let R=0;R<ze.length;R++){const oe=ze[R];_.format!==Kt?Ce!==null?Ue?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,R,0,0,oe.width,oe.height,Ce,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,R,ue,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,R,0,0,oe.width,oe.height,Ce,xe,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,R,ue,oe.width,oe.height,0,Ce,xe,oe.data)}}}else{ze=_.mipmaps,Ue&&$e&&(ze.length>0&&rt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,ue,J[0].width,J[0].height));for(let se=0;se<6;se++)if(Fe){Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,J[se].width,J[se].height,Ce,xe,J[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,J[se].width,J[se].height,0,Ce,xe,J[se].data);for(let R=0;R<ze.length;R++){const ae=ze[R].image[se].image;Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,R+1,0,0,ae.width,ae.height,Ce,xe,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,R+1,ue,ae.width,ae.height,0,Ce,xe,ae.data)}}else{Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce,xe,J[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,Ce,xe,J[se]);for(let R=0;R<ze.length;R++){const oe=ze[R];Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,R+1,0,0,Ce,xe,oe.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,R+1,ue,Ce,xe,oe.image[se])}}}S(_,Ve)&&x(s.TEXTURE_CUBE_MAP),te.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ve(E,_,F,ee,Z,te){const pe=r.convert(F.format,F.colorSpace),le=r.convert(F.type),he=T(F.internalFormat,pe,le,F.colorSpace);if(!n.get(_).__hasExternalTextures){const Fe=Math.max(1,_.width>>te),J=Math.max(1,_.height>>te);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,te,he,Fe,J,_.depth,0,pe,le,null):t.texImage2D(Z,te,he,Fe,J,0,pe,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),fe(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Z,n.get(F).__webglTexture,0,Re(_)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,Z,n.get(F).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(E,_,F){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let ee=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||fe(_)){const Z=_.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Mn?ee=s.DEPTH_COMPONENT32F:Z.type===Sn&&(ee=s.DEPTH_COMPONENT24));const te=Re(_);fe(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,ee,_.width,_.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,ee,_.width,_.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,_.width,_.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){const ee=Re(_);F&&fe(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,_.width,_.height):fe(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const ee=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Z=0;Z<ee.length;Z++){const te=ee[Z],pe=r.convert(te.format,te.colorSpace),le=r.convert(te.type),he=T(te.internalFormat,pe,le,te.colorSpace),Ee=Re(_);F&&fe(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,he,_.width,_.height):fe(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,he,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,he,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H(_.depthTexture,0);const ee=n.get(_.depthTexture).__webglTexture,Z=Re(_);if(_.depthTexture.format===zn)fe(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(_.depthTexture.format===gi)fe(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function we(E){const _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]=s.createRenderbuffer(),Pe(_.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=s.createRenderbuffer(),Pe(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(E,_,F){const ee=n.get(E);_!==void 0&&ve(ee.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&we(E)}function N(E){const _=E.texture,F=n.get(E),ee=n.get(_);E.addEventListener("dispose",W),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=_.version,a.memory.textures++);const Z=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,pe=f(E)||o;if(Z){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let he=0;he<_.mipmaps.length;he++)F.__webglFramebuffer[le][he]=s.createFramebuffer()}else F.__webglFramebuffer[le]=s.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)F.__webglFramebuffer[le]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){const le=E.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Fe=n.get(le[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&fe(E)===!1){const le=te?_:[_];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){const Ee=le[he];F.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[he]);const Fe=r.convert(Ee.format,Ee.colorSpace),J=r.convert(Ee.type),je=T(Ee.internalFormat,Fe,J,Ee.colorSpace,E.isXRRenderTarget===!0),Ve=Re(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,je,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,F.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),V(s.TEXTURE_CUBE_MAP,_,pe);for(let le=0;le<6;le++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)ve(F.__webglFramebuffer[le][he],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else ve(F.__webglFramebuffer[le],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);S(_,pe)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const le=E.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Fe=le[he],J=n.get(Fe);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),V(s.TEXTURE_2D,Fe,pe),ve(F.__webglFramebuffer,E,Fe,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),S(Fe,pe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?le=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),V(le,_,pe),o&&_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)ve(F.__webglFramebuffer[he],E,_,s.COLOR_ATTACHMENT0,le,he);else ve(F.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,le,0);S(_,pe)&&x(le),t.unbindTexture()}E.depthBuffer&&we(E)}function wt(E){const _=f(E)||o,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,Z=F.length;ee<Z;ee++){const te=F[ee];if(S(te,_)){const pe=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(te).__webglTexture;t.bindTexture(pe,le),x(pe),t.unbindTexture()}}}function ye(E){if(o&&E.samples>0&&fe(E)===!1){const _=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,ee=E.height;let Z=s.COLOR_BUFFER_BIT;const te=[],pe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(E),he=E.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){te.push(s.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&te.push(pe);const Fe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Fe===!1&&(E.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Fe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[pe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[pe])),he){const J=n.get(_[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,F,ee,0,0,F,ee,Z,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Fe=n.get(_[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Re(E){return Math.min(i.maxSamples,E.samples)}function fe(E){const _=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function it(E){const _=a.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function Oe(E,_){const F=E.colorSpace,ee=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===pr||F!==fn&&F!==Vt&&(Ke.getTransfer(F)===et?o===!1?e.has("EXT_sRGB")===!0&&ee===Kt?(E.format=pr,E.minFilter=Gt,E.generateMipmaps=!1):_=La.sRGBToLinear(_):(ee!==Kt||Z!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}this.allocateTextureUnit=L,this.resetTextureUnits=Q,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=Xe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=fe}function fp(s,e,t){const n=t.isWebGL2;function i(r,a=Vt){let o;const l=Ke.getTransfer(a);if(r===Tn)return s.UNSIGNED_BYTE;if(r===ya)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ba)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Nl)return s.BYTE;if(r===Ol)return s.SHORT;if(r===xr)return s.UNSIGNED_SHORT;if(r===xa)return s.INT;if(r===Sn)return s.UNSIGNED_INT;if(r===Mn)return s.FLOAT;if(r===Ni)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Fl)return s.ALPHA;if(r===Kt)return s.RGBA;if(r===kl)return s.LUMINANCE;if(r===Bl)return s.LUMINANCE_ALPHA;if(r===zn)return s.DEPTH_COMPONENT;if(r===gi)return s.DEPTH_STENCIL;if(r===pr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===zl)return s.RED;if(r===Sa)return s.RED_INTEGER;if(r===Hl)return s.RG;if(r===Ma)return s.RG_INTEGER;if(r===Ea)return s.RGBA_INTEGER;if(r===Ps||r===Ds||r===Is||r===Us)if(l===et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ps)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ps)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ds)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Is)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Us)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hr||r===Gr||r===Vr||r===Wr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Hr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wa)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xr||r===qr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Xr)return l===et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===qr)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yr||r===$r||r===jr||r===Kr||r===Jr||r===Zr||r===Qr||r===eo||r===to||r===no||r===io||r===so||r===ro||r===oo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Yr)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$r)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jr)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kr)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jr)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zr)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qr)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===to)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===no)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===io)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===so)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ro)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oo)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ns||r===ao||r===lo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ns)return l===et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ao)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gl||r===co||r===ho||r===uo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ns)return o.COMPRESSED_RED_RGTC1_EXT;if(r===co)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ho)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bn?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class pp extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mp={type:"move"};class sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,n),u=this._getHandJoint(c,v);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gp extends xi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,h=null,m=null,g=null;const v=t.getContextAttributes();let f=null,u=null;const S=[],x=[],T=new Be;let P=null;const A=new It;A.layers.enable(1),A.viewport=new nt;const C=new It;C.layers.enable(2),C.viewport=new nt;const W=[A,C],b=new pp;b.layers.enable(1),b.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=S[V];return K===void 0&&(K=new sr,S[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=S[V];return K===void 0&&(K=new sr,S[V]=K),K.getGripSpace()},this.getHand=function(V){let K=S[V];return K===void 0&&(K=new sr,S[V]=K),K.getHandSpace()};function G(V){const K=x.indexOf(V.inputSource);if(K===-1)return;const ce=S[K];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||a),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function Q(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",L);for(let V=0;V<S.length;V++){const K=x[V];K!==null&&(x[V]=null,S[V].disconnect(K))}w=null,z=null,e.setRenderTarget(f),m=null,h=null,p=null,i=null,u=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Gn(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,ce=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?gi:zn,ce=v.stencil?Bn:Sn);const ve={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};p=new XRWebGLBinding(i,t),h=p.createProjectionLayer(ve),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Gn(h.textureWidth,h.textureHeight,{format:Kt,type:Tn,depthTexture:new Ha(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(V){for(let K=0;K<V.removed.length;K++){const ce=V.removed[K],_e=x.indexOf(ce);_e>=0&&(x[_e]=null,S[_e].disconnect(ce))}for(let K=0;K<V.added.length;K++){const ce=V.added[K];let _e=x.indexOf(ce);if(_e===-1){for(let Pe=0;Pe<S.length;Pe++)if(Pe>=x.length){x.push(ce),_e=Pe;break}else if(x[Pe]===null){x[Pe]=ce,_e=Pe;break}if(_e===-1)break}const ve=S[_e];ve&&ve.connect(ce)}}const U=new M,H=new M;function $(V,K,ce){U.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(ce.matrixWorld);const _e=U.distanceTo(H),ve=K.projectionMatrix.elements,Pe=ce.projectionMatrix.elements,Ie=ve[14]/(ve[10]-1),we=ve[14]/(ve[10]+1),Xe=(ve[9]+1)/ve[5],N=(ve[9]-1)/ve[5],wt=(ve[8]-1)/ve[0],ye=(Pe[8]+1)/Pe[0],Re=Ie*wt,fe=Ie*ye,it=_e/(-wt+ye),Oe=it*-wt;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Oe),V.translateZ(it),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const E=Ie+it,_=we+it,F=Re-Oe,ee=fe+(_e-Oe),Z=Xe*we/_*E,te=N*we/_*E;V.projectionMatrix.makePerspective(F,ee,Z,te,E,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;b.near=C.near=A.near=V.near,b.far=C.far=A.far=V.far,(w!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,z=b.far);const K=V.parent,ce=b.cameras;X(b,K);for(let _e=0;_e<ce.length;_e++)X(ce[_e],K);ce.length===2?$(b,A,C):b.projectionMatrix.copy(A.projectionMatrix),Y(V,b,K)};function Y(V,K,ce){ce===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=vi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let j=null;function ne(V,K){if(d=K.getViewerPose(c||a),g=K,d!==null){const ce=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let _e=!1;ce.length!==b.cameras.length&&(b.cameras.length=0,_e=!0);for(let ve=0;ve<ce.length;ve++){const Pe=ce[ve];let Ie=null;if(m!==null)Ie=m.getViewport(Pe);else{const Xe=p.getViewSubImage(h,Pe);Ie=Xe.viewport,ve===0&&(e.setRenderTargetTextures(u,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(u))}let we=W[ve];we===void 0&&(we=new It,we.layers.enable(ve),we.viewport=new nt,W[ve]=we),we.matrix.fromArray(Pe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Pe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ve===0&&(b.matrix.copy(we.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),_e===!0&&b.cameras.push(we)}}for(let ce=0;ce<S.length;ce++){const _e=x[ce],ve=S[ce];_e!==null&&ve!==void 0&&ve.update(_e,K,c||a)}j&&j(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const ie=new Ba;ie.setAnimationLoop(ne),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}}function vp(s,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Oa(s)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function i(f,u,S,x,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(f,u):u.isMeshToonMaterial?(r(f,u),p(f,u)):u.isMeshPhongMaterial?(r(f,u),d(f,u)):u.isMeshStandardMaterial?(r(f,u),h(f,u),u.isMeshPhysicalMaterial&&m(f,u,T)):u.isMeshMatcapMaterial?(r(f,u),g(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),v(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,S,x):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Ut&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Ut&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const S=e.get(u).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,S,x){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*S,f.scale.value=x*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function h(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,S){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ut&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function v(f,u){const S=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _p(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){const T=x.program;n.uniformBlockBinding(S,T)}function c(S,x){let T=i[S.id];T===void 0&&(g(S),T=d(S),i[S.id]=T,S.addEventListener("dispose",f));const P=x.program;n.updateUBOMapping(S,P);const A=e.render.frame;r[S.id]!==A&&(h(S),r[S.id]=A)}function d(S){const x=p();S.__bindingPointIndex=x;const T=s.createBuffer(),P=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,T),T}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const x=i[S.id],T=S.uniforms,P=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,C=T.length;A<C;A++){const W=Array.isArray(T[A])?T[A]:[T[A]];for(let b=0,w=W.length;b<w;b++){const z=W[b];if(m(z,A,b,P)===!0){const G=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let L=0;for(let U=0;U<Q.length;U++){const H=Q[U],$=v(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+L,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,x,T,P){const A=S.value,C=x+"_"+T;if(P[C]===void 0)return typeof A=="number"||typeof A=="boolean"?P[C]=A:P[C]=A.clone(),!0;{const W=P[C];if(typeof A=="number"||typeof A=="boolean"){if(W!==A)return P[C]=A,!0}else if(W.equals(A)===!1)return W.copy(A),!0}return!1}function g(S){const x=S.uniforms;let T=0;const P=16;for(let C=0,W=x.length;C<W;C++){const b=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,z=b.length;w<z;w++){const G=b[w],Q=Array.isArray(G.value)?G.value:[G.value];for(let L=0,U=Q.length;L<U;L++){const H=Q[L],$=v(H),X=T%P;X!==0&&P-X<$.boundary&&(T+=P-X),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=$.storage}}}const A=T%P;return A>0&&(T+=P-A),S.__size=T,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function f(S){const x=S.target;x.removeEventListener("dispose",f);const T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function u(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:u}}class Ya{constructor(e={}){const{canvas:t=fc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const u=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const x=this;let T=!1,P=0,A=0,C=null,W=-1,b=null;const w=new nt,z=new nt;let G=null;const Q=new We(0);let L=0,U=t.width,H=t.height,$=1,X=null,Y=null;const j=new nt(0,0,U,H),ne=new nt(0,0,U,H);let ie=!1;const V=new Mr;let K=!1,ce=!1,_e=null;const ve=new tt,Pe=new Be,Ie=new M,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return C===null?$:1}let N=n;function wt(y,I){for(let k=0;k<y.length;k++){const B=y[k],O=t.getContext(B,I);if(O!==null)return O}return null}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_r}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",oe,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),N=wt(I,y),N===null)throw wt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ye,Re,fe,it,Oe,E,_,F,ee,Z,te,pe,le,he,Ee,Fe,J,je,Ve,Ce,xe,ue,Ue,$e;function rt(){ye=new Au(N),Re=new bu(N,ye,e),ye.init(Re),ue=new fp(N,ye,Re),fe=new hp(N,ye,Re),it=new Lu(N),Oe=new Jf,E=new up(N,ye,fe,Oe,Re,ue,it),_=new Mu(x),F=new Tu(x),ee=new kc(N,Re),Ue=new xu(N,ye,ee,Re),Z=new Cu(N,ee,it,Ue),te=new Uu(N,Z,ee,it),Ve=new Iu(N,Re,E),Fe=new Su(Oe),pe=new Kf(x,_,F,ye,Re,Ue,Fe),le=new vp(x,Oe),he=new Qf,Ee=new rp(ye,Re),je=new _u(x,_,F,fe,te,h,l),J=new dp(x,te,Re),$e=new _p(N,it,Re,fe),Ce=new yu(N,ye,it,Re),xe=new Ru(N,ye,it,Re),it.programs=pe.programs,x.capabilities=Re,x.extensions=ye,x.properties=Oe,x.renderLists=he,x.shadowMap=J,x.state=fe,x.info=it}rt();const ze=new gp(x,N);this.xr=ze,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(U,H,!1))},this.getSize=function(y){return y.set(U,H)},this.setSize=function(y,I,k=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=y,H=I,t.width=Math.floor(y*$),t.height=Math.floor(I*$),k===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(U*$,H*$).floor()},this.setDrawingBufferSize=function(y,I,k){U=y,H=I,$=k,t.width=Math.floor(y*k),t.height=Math.floor(I*k),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(j)},this.setViewport=function(y,I,k,B){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,I,k,B),fe.viewport(w.copy(j).multiplyScalar($).floor())},this.getScissor=function(y){return y.copy(ne)},this.setScissor=function(y,I,k,B){y.isVector4?ne.set(y.x,y.y,y.z,y.w):ne.set(y,I,k,B),fe.scissor(z.copy(ne).multiplyScalar($).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(y){fe.setScissorTest(ie=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){Y=y},this.getClearColor=function(y){return y.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(y=!0,I=!0,k=!0){let B=0;if(y){let O=!1;if(C!==null){const de=C.texture.format;O=de===Ea||de===Ma||de===Sa}if(O){const de=C.texture.type,me=de===Tn||de===Sn||de===xr||de===Bn||de===ya||de===ba,Me=je.getClearColor(),Ae=je.getClearAlpha(),ke=Me.r,Le=Me.g,De=Me.b;me?(m[0]=ke,m[1]=Le,m[2]=De,m[3]=Ae,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=ke,g[1]=Le,g[2]=De,g[3]=Ae,N.clearBufferiv(N.COLOR,0,g))}else B|=N.COLOR_BUFFER_BIT}I&&(B|=N.DEPTH_BUFFER_BIT),k&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),he.dispose(),Ee.dispose(),Oe.dispose(),_.dispose(),F.dispose(),te.dispose(),Ue.dispose(),$e.dispose(),pe.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Tt),ze.removeEventListener("sessionend",Qe),_e&&(_e.dispose(),_e=null),At.stop()};function se(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=it.autoReset,I=J.enabled,k=J.autoUpdate,B=J.needsUpdate,O=J.type;rt(),it.autoReset=y,J.enabled=I,J.autoUpdate=k,J.needsUpdate=B,J.type=O}function oe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ae(y){const I=y.target;I.removeEventListener("dispose",ae),Te(I)}function Te(y){be(y),Oe.remove(y)}function be(y){const I=Oe.get(y).programs;I!==void 0&&(I.forEach(function(k){pe.releaseProgram(k)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,k,B,O,de){I===null&&(I=we);const me=O.isMesh&&O.matrixWorld.determinant()<0,Me=ja(y,I,k,B,O);fe.setMaterial(B,me);let Ae=k.index,ke=1;if(B.wireframe===!0){if(Ae=Z.getWireframeAttribute(k),Ae===void 0)return;ke=2}const Le=k.drawRange,De=k.attributes.position;let lt=Le.start*ke,Ot=(Le.start+Le.count)*ke;de!==null&&(lt=Math.max(lt,de.start*ke),Ot=Math.min(Ot,(de.start+de.count)*ke)),Ae!==null?(lt=Math.max(lt,0),Ot=Math.min(Ot,Ae.count)):De!=null&&(lt=Math.max(lt,0),Ot=Math.min(Ot,De.count));const ft=Ot-lt;if(ft<0||ft===1/0)return;Ue.setup(O,B,Me,k,Ae);let sn,st=Ce;if(Ae!==null&&(sn=ee.get(Ae),st=xe,st.setIndex(sn)),O.isMesh)B.wireframe===!0?(fe.setLineWidth(B.wireframeLinewidth*Xe()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(O.isLine){let He=B.linewidth;He===void 0&&(He=1),fe.setLineWidth(He*Xe()),O.isLineSegments?st.setMode(N.LINES):O.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else O.isPoints?st.setMode(N.POINTS):O.isSprite&&st.setMode(N.TRIANGLES);if(O.isBatchedMesh)st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)st.renderInstances(lt,ft,O.count);else if(k.isInstancedBufferGeometry){const He=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ts=Math.min(k.instanceCount,He);st.renderInstances(lt,ft,Ts)}else st.render(lt,ft)};function Je(y,I,k){y.transparent===!0&&y.side===Bt&&y.forceSinglePass===!1?(y.side=Ut,y.needsUpdate=!0,zi(y,I,k),y.side=An,y.needsUpdate=!0,zi(y,I,k),y.side=Bt):zi(y,I,k)}this.compile=function(y,I,k=null){k===null&&(k=y),f=Ee.get(k),f.init(),S.push(f),k.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),y!==k&&y.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(x._useLegacyLights);const B=new Set;return y.traverse(function(O){const de=O.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){const Me=de[me];Je(Me,k,O),B.add(Me)}else Je(de,k,O),B.add(de)}),S.pop(),f=null,B},this.compileAsync=function(y,I,k=null){const B=this.compile(y,I,k);return new Promise(O=>{function de(){if(B.forEach(function(me){Oe.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){O(y);return}setTimeout(de,10)}ye.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ze=null;function ut(y){Ze&&Ze(y)}function Tt(){At.stop()}function Qe(){At.start()}const At=new Ba;At.setAnimationLoop(ut),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(y){Ze=y,ze.setAnimationLoop(y),y===null?At.stop():At.start()},ze.addEventListener("sessionstart",Tt),ze.addEventListener("sessionend",Qe),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(I),I=ze.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,I,C),f=Ee.get(y,S.length),f.init(),S.push(f),ve.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(ve),ce=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,ce),v=he.get(y,u.length),v.init(),u.push(v),en(y,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(X,Y),this.info.render.frame++,K===!0&&Fe.beginShadows();const k=f.state.shadowsArray;if(J.render(k,y,I),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(v,y),f.setupLights(x._useLegacyLights),I.isArrayCamera){const B=I.cameras;for(let O=0,de=B.length;O<de;O++){const me=B[O];Cr(v,y,me,me.viewport)}}else Cr(v,y,I);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(x,y,I),Ue.resetDefaultState(),W=-1,b=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function en(y,I,k,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||V.intersectsSprite(y)){B&&Ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ve);const me=te.update(y),Me=y.material;Me.visible&&v.push(y,me,Me,k,Ie.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||V.intersectsObject(y))){const me=te.update(y),Me=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ie.copy(y.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ie.copy(me.boundingSphere.center)),Ie.applyMatrix4(y.matrixWorld).applyMatrix4(ve)),Array.isArray(Me)){const Ae=me.groups;for(let ke=0,Le=Ae.length;ke<Le;ke++){const De=Ae[ke],lt=Me[De.materialIndex];lt&&lt.visible&&v.push(y,me,lt,k,Ie.z,De)}}else Me.visible&&v.push(y,me,Me,k,Ie.z,null)}}const de=y.children;for(let me=0,Me=de.length;me<Me;me++)en(de[me],I,k,B)}function Cr(y,I,k,B){const O=y.opaque,de=y.transmissive,me=y.transparent;f.setupLightsView(k),K===!0&&Fe.setGlobalState(x.clippingPlanes,k),de.length>0&&$a(O,de,I,k),B&&fe.viewport(w.copy(B)),O.length>0&&Bi(O,I,k),de.length>0&&Bi(de,I,k),me.length>0&&Bi(me,I,k),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function $a(y,I,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const de=Re.isWebGL2;_e===null&&(_e=new Gn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Ni:Tn,minFilter:Ui,samples:de?4:0})),x.getDrawingBufferSize(Pe),de?_e.setSize(Pe.x,Pe.y):_e.setSize(_s(Pe.x),_s(Pe.y));const me=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(Q),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Me=x.toneMapping;x.toneMapping=wn,Bi(y,k,B),E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e);let Ae=!1;for(let ke=0,Le=I.length;ke<Le;ke++){const De=I[ke],lt=De.object,Ot=De.geometry,ft=De.material,sn=De.group;if(ft.side===Bt&&lt.layers.test(B.layers)){const st=ft.side;ft.side=Ut,ft.needsUpdate=!0,Rr(lt,k,B,Ot,ft,sn),ft.side=st,ft.needsUpdate=!0,Ae=!0}}Ae===!0&&(E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e)),x.setRenderTarget(me),x.setClearColor(Q,L),x.toneMapping=Me}function Bi(y,I,k){const B=I.isScene===!0?I.overrideMaterial:null;for(let O=0,de=y.length;O<de;O++){const me=y[O],Me=me.object,Ae=me.geometry,ke=B===null?me.material:B,Le=me.group;Me.layers.test(k.layers)&&Rr(Me,I,k,Ae,ke,Le)}}function Rr(y,I,k,B,O,de){y.onBeforeRender(x,I,k,B,O,de),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(x,I,k,B,y,de),O.transparent===!0&&O.side===Bt&&O.forceSinglePass===!1?(O.side=Ut,O.needsUpdate=!0,x.renderBufferDirect(k,I,B,O,y,de),O.side=An,O.needsUpdate=!0,x.renderBufferDirect(k,I,B,O,y,de),O.side=Bt):x.renderBufferDirect(k,I,B,O,y,de),y.onAfterRender(x,I,k,B,O,de)}function zi(y,I,k){I.isScene!==!0&&(I=we);const B=Oe.get(y),O=f.state.lights,de=f.state.shadowsArray,me=O.state.version,Me=pe.getParameters(y,O.state,de,I,k),Ae=pe.getProgramCacheKey(Me);let ke=B.programs;B.environment=y.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(y.isMeshStandardMaterial?F:_).get(y.envMap||B.environment),ke===void 0&&(y.addEventListener("dispose",ae),ke=new Map,B.programs=ke);let Le=ke.get(Ae);if(Le!==void 0){if(B.currentProgram===Le&&B.lightsStateVersion===me)return Pr(y,Me),Le}else Me.uniforms=pe.getUniforms(y),y.onBuild(k,Me,x),y.onBeforeCompile(Me,x),Le=pe.acquireProgram(Me,Ae),ke.set(Ae,Le),B.uniforms=Me.uniforms;const De=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(De.clippingPlanes=Fe.uniform),Pr(y,Me),B.needsLights=Ja(y),B.lightsStateVersion=me,B.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Le,B.uniformsList=null,Le}function Lr(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=hs.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Pr(y,I){const k=Oe.get(y);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function ja(y,I,k,B,O){I.isScene!==!0&&(I=we),E.resetTextureUnits();const de=I.fog,me=B.isMeshStandardMaterial?I.environment:null,Me=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fn,Ae=(B.isMeshStandardMaterial?F:_).get(B.envMap||me),ke=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),De=!!k.morphAttributes.position,lt=!!k.morphAttributes.normal,Ot=!!k.morphAttributes.color;let ft=wn;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ft=x.toneMapping);const sn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=sn!==void 0?sn.length:0,He=Oe.get(B),Ts=f.state.lights;if(K===!0&&(ce===!0||y!==b)){const zt=y===b&&B.id===W;Fe.setState(B,y,zt)}let ot=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ts.state.version||He.outputColorSpace!==Me||O.isBatchedMesh&&He.batching===!1||!O.isBatchedMesh&&He.batching===!0||O.isInstancedMesh&&He.instancing===!1||!O.isInstancedMesh&&He.instancing===!0||O.isSkinnedMesh&&He.skinning===!1||!O.isSkinnedMesh&&He.skinning===!0||O.isInstancedMesh&&He.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&He.instancingColor===!1&&O.instanceColor!==null||He.envMap!==Ae||B.fog===!0&&He.fog!==de||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Fe.numPlanes||He.numIntersection!==Fe.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Le||He.morphTargets!==De||He.morphNormals!==lt||He.morphColors!==Ot||He.toneMapping!==ft||Re.isWebGL2===!0&&He.morphTargetsCount!==st)&&(ot=!0):(ot=!0,He.__version=B.version);let Cn=He.currentProgram;ot===!0&&(Cn=zi(B,I,O));let Dr=!1,Si=!1,As=!1;const bt=Cn.getUniforms(),Rn=He.uniforms;if(fe.useProgram(Cn.program)&&(Dr=!0,Si=!0,As=!0),B.id!==W&&(W=B.id,Si=!0),Dr||b!==y){bt.setValue(N,"projectionMatrix",y.projectionMatrix),bt.setValue(N,"viewMatrix",y.matrixWorldInverse);const zt=bt.map.cameraPosition;zt!==void 0&&zt.setValue(N,Ie.setFromMatrixPosition(y.matrixWorld)),Re.logarithmicDepthBuffer&&bt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&bt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Si=!0,As=!0)}if(O.isSkinnedMesh){bt.setOptional(N,O,"bindMatrix"),bt.setOptional(N,O,"bindMatrixInverse");const zt=O.skeleton;zt&&(Re.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),bt.setValue(N,"boneTexture",zt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(bt.setOptional(N,O,"batchingTexture"),bt.setValue(N,"batchingTexture",O._matricesTexture,E));const Cs=k.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0&&Re.isWebGL2===!0)&&Ve.update(O,k,Cn),(Si||He.receiveShadow!==O.receiveShadow)&&(He.receiveShadow=O.receiveShadow,bt.setValue(N,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Rn.envMap.value=Ae,Rn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Si&&(bt.setValue(N,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Ka(Rn,As),de&&B.fog===!0&&le.refreshFogUniforms(Rn,de),le.refreshMaterialUniforms(Rn,B,$,H,_e),hs.upload(N,Lr(He),Rn,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(hs.upload(N,Lr(He),Rn,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&bt.setValue(N,"center",O.center),bt.setValue(N,"modelViewMatrix",O.modelViewMatrix),bt.setValue(N,"normalMatrix",O.normalMatrix),bt.setValue(N,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const zt=B.uniformsGroups;for(let Rs=0,Za=zt.length;Rs<Za;Rs++)if(Re.isWebGL2){const Ir=zt[Rs];$e.update(Ir,Cn),$e.bind(Ir,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function Ka(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Ja(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,I,k){Oe.get(y.texture).__webglTexture=I,Oe.get(y.depthTexture).__webglTexture=k;const B=Oe.get(y);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){const k=Oe.get(y);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,k=0){C=y,P=I,A=k;let B=!0,O=null,de=!1,me=!1;if(y){const Ae=Oe.get(y);Ae.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(N.FRAMEBUFFER,null),B=!1):Ae.__webglFramebuffer===void 0?E.setupRenderTarget(y):Ae.__hasExternalTextures&&E.rebindTextures(y,Oe.get(y.texture).__webglTexture,Oe.get(y.depthTexture).__webglTexture);const ke=y.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(me=!0);const Le=Oe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?O=Le[I][k]:O=Le[I],de=!0):Re.isWebGL2&&y.samples>0&&E.useMultisampledRTT(y)===!1?O=Oe.get(y).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[k]:O=Le,w.copy(y.viewport),z.copy(y.scissor),G=y.scissorTest}else w.copy(j).multiplyScalar($).floor(),z.copy(ne).multiplyScalar($).floor(),G=ie;if(fe.bindFramebuffer(N.FRAMEBUFFER,O)&&Re.drawBuffers&&B&&fe.drawBuffers(y,O),fe.viewport(w),fe.scissor(z),fe.setScissorTest(G),de){const Ae=Oe.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,k)}else if(me){const Ae=Oe.get(y.texture),ke=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,k||0,ke)}W=-1},this.readRenderTargetPixels=function(y,I,k,B,O,de,me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){fe.bindFramebuffer(N.FRAMEBUFFER,Me);try{const Ae=y.texture,ke=Ae.format,Le=Ae.type;if(ke!==Kt&&ue.convert(ke)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===Ni&&(ye.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Le!==Tn&&ue.convert(Le)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Mn&&(Re.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&k>=0&&k<=y.height-O&&N.readPixels(I,k,B,O,ue.convert(ke),ue.convert(Le),de)}finally{const Ae=C!==null?Oe.get(C).__webglFramebuffer:null;fe.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(y,I,k=0){const B=Math.pow(2,-k),O=Math.floor(I.image.width*B),de=Math.floor(I.image.height*B);E.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,y.x,y.y,O,de),fe.unbindTexture()},this.copyTextureToTexture=function(y,I,k,B=0){const O=I.image.width,de=I.image.height,me=ue.convert(k.format),Me=ue.convert(k.type);E.setTexture2D(k,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,y.x,y.y,O,de,me,Me,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,me,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,B,y.x,y.y,me,Me,I.image),B===0&&k.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(y,I,k,B,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=y.max.x-y.min.x+1,me=y.max.y-y.min.y+1,Me=y.max.z-y.min.z+1,Ae=ue.convert(B.format),ke=ue.convert(B.type);let Le;if(B.isData3DTexture)E.setTexture3D(B,0),Le=N.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)E.setTexture2DArray(B,0),Le=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const De=N.getParameter(N.UNPACK_ROW_LENGTH),lt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ot=N.getParameter(N.UNPACK_SKIP_PIXELS),ft=N.getParameter(N.UNPACK_SKIP_ROWS),sn=N.getParameter(N.UNPACK_SKIP_IMAGES),st=k.isCompressedTexture?k.mipmaps[O]:k.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,st.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,y.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,y.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,y.min.z),k.isDataTexture||k.isData3DTexture?N.texSubImage3D(Le,O,I.x,I.y,I.z,de,me,Me,Ae,ke,st.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Le,O,I.x,I.y,I.z,de,me,Me,Ae,st.data)):N.texSubImage3D(Le,O,I.x,I.y,I.z,de,me,Me,Ae,ke,st),N.pixelStorei(N.UNPACK_ROW_LENGTH,De),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),N.pixelStorei(N.UNPACK_SKIP_ROWS,ft),N.pixelStorei(N.UNPACK_SKIP_IMAGES,sn),O===0&&B.generateMipmaps&&N.generateMipmap(Le),fe.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),fe.unbindTexture()},this.resetState=function(){P=0,A=0,C=null,fe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yr?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Ss?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?Hn:Ta}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hn?vt:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xp extends Ya{}xp.prototype.isWebGL1Renderer=!0;class ys{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new ys(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yp extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ta extends Qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const oi=new tt,na=new tt,cs=[],ia=new Ye,bp=new tt,Ai=new q,Ci=new Fi;class Sp extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ta(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ye),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oi),ia.copy(e.boundingBox).applyMatrix4(oi),this.boundingBox.union(ia)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oi),Ci.copy(e.boundingSphere).applyMatrix4(oi),this.boundingSphere.union(Ci)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ai.geometry=this.geometry,Ai.material=this.material,Ai.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ci.copy(this.boundingSphere),Ci.applyMatrix4(n),e.ray.intersectsSphere(Ci)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,oi),na.multiplyMatrices(n,oi),Ai.matrixWorld=na,Ai.raycast(e,cs);for(let a=0,o=cs.length;a<o;a++){const l=cs[a];l.instanceId=r,l.object=this,t.push(l)}cs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ta(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends Nt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wr extends nn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new M,d=new Be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){const m=n+p/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mt extends nn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],p=[],h=[],m=[];let g=0;const v=[],f=n/2;let u=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(m,2));function S(){const T=new M,P=new M;let A=0;const C=(t-e)/n;for(let W=0;W<=r;W++){const b=[],w=W/r,z=w*(t-e)+e;for(let G=0;G<=i;G++){const Q=G/i,L=Q*l+o,U=Math.sin(L),H=Math.cos(L);P.x=z*U,P.y=-w*n+f,P.z=z*H,p.push(P.x,P.y,P.z),T.set(U,C,H).normalize(),h.push(T.x,T.y,T.z),m.push(Q,1-w),b.push(g++)}v.push(b)}for(let W=0;W<i;W++)for(let b=0;b<r;b++){const w=v[b][W],z=v[b+1][W],G=v[b+1][W+1],Q=v[b][W+1];d.push(w,z,Q),d.push(z,G,Q),A+=6}c.addGroup(u,A,0),u+=A}function x(T){const P=g,A=new Be,C=new M;let W=0;const b=T===!0?e:t,w=T===!0?1:-1;for(let G=1;G<=i;G++)p.push(0,f*w,0),h.push(0,w,0),m.push(.5,.5),g++;const z=g;for(let G=0;G<=i;G++){const L=G/i*l+o,U=Math.cos(L),H=Math.sin(L);C.x=b*H,C.y=f*w,C.z=b*U,p.push(C.x,C.y,C.z),h.push(0,w,0),A.x=U*.5+.5,A.y=H*.5*w+.5,m.push(A.x,A.y),g++}for(let G=0;G<i;G++){const Q=P+G,L=z+G;T===!0?d.push(L,L+1,Q):d.push(L+1,L,Q),W+=3}c.addGroup(u,W,T===!0?1:2),u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tr extends mt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Tr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pn extends nn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],p=new M,h=new M,m=[],g=[],v=[],f=[];for(let u=0;u<=n;u++){const S=[],x=u/n;let T=0;u===0&&a===0?T=.5/t:u===n&&l===Math.PI&&(T=-.5/t);for(let P=0;P<=t;P++){const A=P/t;p.x=-e*Math.cos(i+A*r)*Math.sin(a+x*o),p.y=e*Math.cos(a+x*o),p.z=e*Math.sin(i+A*r)*Math.sin(a+x*o),g.push(p.x,p.y,p.z),h.copy(p).normalize(),v.push(h.x,h.y,h.z),f.push(A+T,1-x),S.push(c++)}d.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){const x=d[u][S+1],T=d[u][S],P=d[u+1][S],A=d[u+1][S+1];(u!==0||a>0)&&m.push(x,T,A),(u!==n-1||l<Math.PI)&&m.push(T,P,A)}this.setIndex(m),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Se extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ws extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const rr=new tt,sa=new M,ra=new M;class Ar{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sa.setFromMatrixPosition(e.matrixWorld),t.position.copy(sa),ra.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ra),t.updateMatrixWorld(),rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mp extends Ar{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ep extends ws{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const oa=new tt,Ri=new M,or=new M;class wp extends Ar{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ri.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ri),or.copy(n.position),or.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(or),n.updateMatrixWorld(),i.makeTranslation(-Ri.x,-Ri.y,-Ri.z),oa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa)}}class bn extends ws{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tp extends Ar{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aa extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Tp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ap extends ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=la(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=la();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function la(){return(typeof performance>"u"?Date:performance).now()}class Rp{constructor(e,t,n=0,i=1/0){this.ray=new Ms(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return vr(e,this,n,t),n.sort(ca),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)vr(e[i],this,n,t);return n.sort(ca),n}}function ca(s,e){return s.distance-e.distance}function vr(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)vr(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_r}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_r);const Li="blackveil_save_v1",da="blackveil_settings_v1",ha=1;class Lp{save(e){try{const t=this.load(),n={version:ha,timestamp:Date.now(),player:{health:100,position:{x:0,y:0,z:0},rotation:0,weapons:["m9_tactical"],currentWeapon:0,ammo:{"9mm":90},...t?.player||{},...e.player||{}},progression:{level:1,xp:0,skillPoints:0,skills:{},currency:0,...t?.progression||{},...e.progression||{}},missions:{activeMissionId:"ch1_m1_entry",completed:[],objectives:{},flags:{},...t?.missions||{},...e.missions||{}},world:{discoveredLocations:[],collectedLore:[],factionRep:{VANGUARD:0,ASHEN:10,HELIX:-20,VEIL:-50},powerStates:{},...t?.world||{},...e.world||{}},settings:{quality:"auto",sensitivity:1,language:"en",volumes:{master:1,music:.7,sfx:.9,voice:1,ambience:.8,ui:.8},fpsLimit:60,...t?.settings||{},...e.settings||{}},inventory:{items:[],equipped:{},...t?.inventory||{},...e.inventory||{}}};return localStorage.setItem(Li,JSON.stringify(n)),!0}catch(t){return console.error("[Save] Failed",t),!1}}load(){try{const e=localStorage.getItem(Li);if(!e)return null;const t=JSON.parse(e);return t.version!==ha&&console.warn("[Save] Version mismatch, migrating"),t}catch(e){return console.error("[Save] Corrupt",e),null}}saveSettings(e){localStorage.setItem(da,JSON.stringify(e))}loadSettings(){try{return JSON.parse(localStorage.getItem(da)||"null")}catch{return null}}hasSave(){return!!localStorage.getItem(Li)}deleteSave(){localStorage.removeItem(Li)}exportSave(){return localStorage.getItem(Li)}}const gt=new Lp,ua={quality:"auto",resolutionScale:1,textureQuality:1,shadowQuality:1,effectsQuality:1,viewDistance:1,fpsLimit:60,masterVolume:1,musicVolume:.7,sfxVolume:.9,voiceVolume:1,ambienceVolume:.8,uiVolume:.8,cameraSensitivity:1,aimSensitivity:1,invertY:!1,gyroEnabled:!1,gyroSensitivity:1,vibration:!0,subtitles:!0,subtitleSize:1,language:"en",touchOpacity:.85,controlLayout:null};class Pp{constructor(){D(this,"settings");D(this,"listeners",new Set);const e=gt.loadSettings();this.settings={...ua,...e||{}}}get(e){return this.settings[e]}set(e,t){this.settings[e]=t,this.persist()}update(e){Object.assign(this.settings,e),this.persist()}persist(){gt.saveSettings(this.settings),this.listeners.forEach(e=>e(this.settings))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}reset(){this.settings={...ua},this.persist()}}const qe=new Pp;class Dp{constructor(e){D(this,"renderer");D(this,"scene");D(this,"camera");D(this,"quality","auto");D(this,"resolutionScale",1);D(this,"stats",{fps:60,frameTime:16,drawCalls:0,triangles:0,geometries:0,textures:0});D(this,"frameTimes",[]);D(this,"lastFpsUpdate",0);D(this,"adaptiveQualityLevel",2);D(this,"canvas");this.canvas=e,this.renderer=new Ya({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=vt,this.renderer.toneMapping=va,this.renderer.toneMappingExposure=1.1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ar,this.scene=new yp,this.scene.background=new We(328968),this.scene.fog=new ys(657940,.012),this.camera=new It(65,window.innerWidth/window.innerHeight,.1,800),this.camera.position.set(0,2,6),this.quality=qe.get("quality"),qe.onChange(t=>this.applySettings(t.quality,t.resolutionScale)),window.addEventListener("resize",()=>this.resize()),this.resize(),this.applySettings(this.quality,qe.get("resolutionScale"))}applySettings(e,t){this.quality=e,this.resolutionScale=t;let n=e;e==="auto"&&(n=["low","medium","high","ultra"][this.adaptiveQualityLevel]);const i=n==="low",r=n==="medium",a=n==="high",o=n==="ultra";this.renderer.shadowMap.enabled=!i,this.renderer.shadowMap.type=o?ar:il,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio*t*(i?.7:o?1:.9),2)),this.scene.fog instanceof ys&&(this.scene.fog.density=i?.018:r?.014:a?.012:.01)}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}beginFrame(){}endFrame(e){this.frameTimes.push(e),this.frameTimes.length>60&&this.frameTimes.shift();const t=performance.now();if(t-this.lastFpsUpdate>500){const n=this.frameTimes.reduce((i,r)=>i+r,0)/this.frameTimes.length;this.stats.frameTime=n*1e3,this.stats.fps=1e3/this.stats.frameTime,this.stats.drawCalls=this.renderer.info.render.calls,this.stats.triangles=this.renderer.info.render.triangles,this.stats.geometries=this.renderer.info.memory.geometries,this.stats.textures=this.renderer.info.memory.textures,this.lastFpsUpdate=t,this.quality==="auto"&&(this.stats.fps<28&&this.adaptiveQualityLevel>0?(this.adaptiveQualityLevel--,this.applySettings("auto",this.resolutionScale)):this.stats.fps>58&&this.adaptiveQualityLevel<3&&(this.adaptiveQualityLevel++,this.applySettings("auto",this.resolutionScale)))}}getStats(){return{...this.stats}}getAdaptiveLevel(){return this.adaptiveQualityLevel}render(){this.renderer.render(this.scene,this.camera)}setBackground(e){this.scene.background=new We(e)}dispose(){this.renderer.dispose()}}class Ip{constructor(e){D(this,"state",{move:new Be,look:new Be,sprint:!1,crouch:!1,jump:!1,fire:!1,aim:!1,reload:!1,interact:!1,melee:!1,switchWeapon:0,slide:!1,inventory:!1,map:!1,pause:!1});D(this,"keys",new Set);D(this,"touchJoysticks",{move:new Be,look:new Be});D(this,"mouseDown",!1);D(this,"pointerLocked",!1);this.canvas=e,this.bindKeyboard(),this.bindMouse(),this.bindTouch(),this.bindGamepadPoll()}bindKeyboard(){window.addEventListener("keydown",e=>{this.keys.add(e.code.toLowerCase()),e.code==="KeyR"&&(this.state.reload=!0),e.code==="KeyF"&&(this.state.interact=!0),e.code==="KeyE"&&(this.state.interact=!0),e.code==="Space"&&(this.state.jump=!0),(e.code==="ControlLeft"||e.code==="KeyC")&&(this.state.crouch=!0),e.code==="ShiftLeft"&&(this.state.sprint=!0),e.code==="KeyV"&&(this.state.melee=!0),e.code==="Tab"&&(this.state.inventory=!0),e.code==="KeyM"&&(this.state.map=!0),e.code==="Escape"&&(this.state.pause=!0),e.code==="Digit1"&&(this.state.switchWeapon=-1),e.code==="Digit2"&&(this.state.switchWeapon=1)}),window.addEventListener("keyup",e=>{this.keys.delete(e.code.toLowerCase()),e.code==="KeyR"&&(this.state.reload=!1),(e.code==="KeyF"||e.code==="KeyE")&&(this.state.interact=!1),e.code==="Space"&&(this.state.jump=!1),(e.code==="ControlLeft"||e.code==="KeyC")&&(this.state.crouch=!1),e.code==="ShiftLeft"&&(this.state.sprint=!1),e.code==="KeyV"&&(this.state.melee=!1),e.code==="Tab"&&(this.state.inventory=!1),e.code==="KeyM"&&(this.state.map=!1),e.code==="Escape"&&(this.state.pause=!1),(e.code==="Digit1"||e.code==="Digit2")&&(this.state.switchWeapon=0)})}bindMouse(){this.canvas.addEventListener("mousedown",e=>{e.button===0&&(this.state.fire=!0),e.button===2&&(this.state.aim=!0),this.mouseDown=!0}),window.addEventListener("mouseup",e=>{e.button===0&&(this.state.fire=!1),e.button===2&&(this.state.aim=!1),this.mouseDown=!1}),this.canvas.addEventListener("mousemove",e=>{document.pointerLockElement===this.canvas&&(this.state.look.x=e.movementX*.002,this.state.look.y=e.movementY*.002)}),this.canvas.addEventListener("wheel",e=>{this.state.switchWeapon=Math.sign(e.deltaY),setTimeout(()=>this.state.switchWeapon=0,100)}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault())}bindTouch(){}bindGamepadPoll(){}setMoveVector(e,t){this.touchJoysticks.move.set(e,t)}setLookVector(e,t){this.touchJoysticks.look.set(e,t)}update(){const e=new Be;(this.keys.has("keyw")||this.keys.has("arrowup"))&&(e.y+=1),(this.keys.has("keys")||this.keys.has("arrowdown"))&&(e.y-=1),(this.keys.has("keya")||this.keys.has("arrowleft"))&&(e.x-=1),(this.keys.has("keyd")||this.keys.has("arrowright"))&&(e.x+=1),e.lengthSq()>0&&e.normalize(),this.touchJoysticks.move.lengthSq()>.01?this.state.move.copy(this.touchJoysticks.move):this.state.move.copy(e),this.touchJoysticks.look.lengthSq()>.001&&this.state.look.copy(this.touchJoysticks.look);const t=navigator.getGamepads();for(const n of t){if(!n)continue;const i=.2,r=Math.abs(n.axes[0])>i?n.axes[0]:0,a=Math.abs(n.axes[1])>i?-n.axes[1]:0;(r||a)&&this.state.move.set(r,a);const o=Math.abs(n.axes[2])>i?n.axes[2]:0,l=Math.abs(n.axes[3])>i?n.axes[3]:0;(o||l)&&this.state.look.set(o*.05,l*.05),n.buttons[0]?.pressed&&(this.state.jump=!0),n.buttons[1]?.pressed&&(this.state.crouch=!0),n.buttons[2]?.pressed&&(this.state.reload=!0),n.buttons[3]?.pressed&&(this.state.interact=!0),n.buttons[5]?.pressed&&(this.state.fire=!0),n.buttons[4]?.pressed&&(this.state.aim=!0)}}consumeLook(){const e=this.state.look.clone();return this.state.look.set(0,0),e}resetTransient(){this.state.switchWeapon=0}}class Up{constructor(){D(this,"ctx",null);D(this,"masterGain",null);D(this,"gains",new Map);D(this,"sounds",new Map);D(this,"activeSources",new Set);D(this,"musicState","exploration");D(this,"musicOscillators",[]);this.initContextOnInteraction()}initContextOnInteraction(){const e=()=>{if(!this.ctx){try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.connect(this.ctx.destination),["master","music","sfx","voice","ambience","ui"].forEach(t=>{const n=this.ctx.createGain();n.connect(t==="master"?this.ctx.destination:this.masterGain),this.gains.set(t,n)}),this.updateVolumes(),qe.onChange(()=>this.updateVolumes()),this.startProceduralAmbience(),console.log("[Audio] Context initialized")}catch(t){console.warn("[Audio] Failed to init",t)}window.removeEventListener("click",e),window.removeEventListener("keydown",e),window.removeEventListener("touchstart",e)}};window.addEventListener("click",e,{once:!1}),window.addEventListener("keydown",e,{once:!1}),window.addEventListener("touchstart",e,{once:!1})}updateVolumes(){if(!this.ctx)return;const e=qe.settings;this.gains.get("master").gain.value=e.masterVolume,this.gains.get("music").gain.value=e.musicVolume,this.gains.get("sfx").gain.value=e.sfxVolume,this.gains.get("voice").gain.value=e.voiceVolume,this.gains.get("ambience").gain.value=e.ambienceVolume,this.gains.get("ui").gain.value=e.uiVolume}startProceduralAmbience(){if(this.ctx)try{const e=this.ctx,t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),i=n.getChannelData(0);for(let o=0;o<t;o++)i[o]=(Math.random()*2-1)*.02*Math.sin(o*1e-4);const r=e.createBufferSource();r.buffer=n,r.loop=!0;const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=400,r.connect(a),a.connect(this.gains.get("ambience")),r.start()}catch{}}playProceduralSound(e,t){if(!(!this.ctx||!this.masterGain))try{const n=this.ctx,i=n.createOscillator(),r=n.createGain(),a=n.createBiquadFilter();let o=440,l=.1,c=.3;switch(e){case"pistol":o=180,l=.15,c=.6;break;case"rifle":o=120,l=.12,c=.7;break;case"smg":o=200,l=.08,c=.5;break;case"shotgun":o=80,l=.25,c=.8;break;case"sniper":o=90,l=.3,c=.9;break;case"footstep":o=60,l=.05,c=.15;break;case"reload":o=300,l=.4,c=.3;break;case"hit":o=150,l=.1,c=.5;break;case"ui_click":o=800,l=.08,c=.2;break;case"terminal":o=600,l=.15,c=.25;break;case"door":o=100,l=.5,c=.4;break;default:o=440,l=.1,c=.3}if(i.type=e.includes("shot")||e==="rifle"||e==="pistol"?"square":"sine",i.frequency.value=o,e.includes("shot")||e==="rifle"||e==="pistol"||e==="smg"||e==="shotgun"||e==="sniper"){const d=n.sampleRate*l,p=n.createBuffer(1,d,n.sampleRate),h=p.getChannelData(0);for(let g=0;g<d;g++)h[g]=(Math.random()*2-1)*Math.pow(1-g/d,2)*c;const m=n.createBufferSource();m.buffer=p,m.connect(a),a.type="bandpass",a.frequency.value=o*2,a.connect(this.gains.get("sfx")),m.start();return}r.gain.setValueAtTime(c,n.currentTime),r.gain.exponentialRampToValueAtTime(.001,n.currentTime+l),i.connect(a),a.connect(r),r.connect(this.gains.get(e.startsWith("ui")?"ui":"sfx")),i.start(),i.stop(n.currentTime+l)}catch(n){console.warn("[Audio] play failed",n)}}setMusicState(e){if(this.musicState=e,!!this.ctx){this.musicOscillators.forEach(t=>{try{t.stop()}catch{}}),this.musicOscillators=[];try{const t=this.ctx,n=e==="combat"?55:e==="stealth"?40:e==="tension"?48:36;for(let i=0;i<2;i++){const r=t.createOscillator(),a=t.createGain();r.type="sawtooth",r.frequency.value=n*(i+1)*.5,a.gain.value=e==="combat"?.06:.02;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=e==="combat"?800:400,r.connect(o),o.connect(a),a.connect(this.gains.get("music")),r.start(),this.musicOscillators.push(r)}}catch{}}}playUI(e){const t={click:"ui_click",hover:"ui_click",open:"terminal",close:"door",error:"hit"};this.playProceduralSound(t[e]||"ui_click")}setListenerPosition(e,t){if(!this.ctx?.listener)return;const n=this.ctx.listener;"positionX"in n?(n.positionX.value=e.x,n.positionY.value=e.y,n.positionZ.value=e.z):n.setPosition(e.x,e.y,e.z)}}const at=new Up;class Np{constructor(e){D(this,"position",new M(0,1.8,0));D(this,"velocity",new M);D(this,"rotation",new Zt(0,0,0,"YXZ"));D(this,"yaw",0);D(this,"pitch",0);D(this,"stance","stand");D(this,"moveState","idle");D(this,"isGrounded",!0);D(this,"isAiming",!1);D(this,"isSprinting",!1);D(this,"isCrouching",!1);D(this,"isSliding",!1);D(this,"stats",{health:100,maxHealth:100,armor:50,stamina:100,maxStamina:100});D(this,"walkSpeed",2.4);D(this,"jogSpeed",4.5);D(this,"sprintSpeed",7);D(this,"crouchSpeed",1.8);D(this,"slideSpeed",8.5);D(this,"jumpForce",5.8);D(this,"gravity",-15);D(this,"coyoteTime",.18);D(this,"coyoteTimer",0);D(this,"footstepTimer",0);D(this,"slideTimer",0);D(this,"vaultCooldown",0);D(this,"colliders",[]);D(this,"radius",.45);D(this,"heightStand",1.8);D(this,"heightCrouch",1.1);D(this,"heightSlide",.7);D(this,"mesh");D(this,"cameraTarget",new M);D(this,"wasGrounded",!0);this.input=e,this.mesh=new Wt}setColliders(e){this.colliders=e}checkCollision(e,t){const n=new Ye(new M(e.x-this.radius,e.y,e.z-this.radius),new M(e.x+this.radius,e.y+t,e.z+this.radius));for(const i of this.colliders)if(n.intersectsBox(i))return i;return null}canVault(){const e=new M(0,0,-1).applyAxisAngle(new M(0,1,0),this.yaw),t=this.position.clone().add(e.clone().multiplyScalar(.9));t.y+=.5;const n=this.checkCollision(t,1);if(n){const i=n.max.y-this.position.y;if(i>.3&&i<1.6){const r=t.clone();if(r.y+=i+.3,!this.checkCollision(r,.8))return{can:!0,height:i,box:n}}}return{can:!1,height:0}}moveWithCollision(e,t){const n=this.isSliding?this.heightSlide:this.stance==="crouch"?this.heightCrouch:this.heightStand;let i=this.position.clone().add(new M(e.x,0,0));this.checkCollision(i,n)?this.velocity.x*=.3:this.position.x=i.x,i=this.position.clone().add(new M(0,0,e.z)),this.checkCollision(i,n)?this.velocity.z*=.3:this.position.z=i.z,i=this.position.clone().add(new M(0,e.y,0));const r=this.checkCollision(i,n);r?e.y<0?(this.isGrounded=!0,this.position.y=r.max.y+.05,this.velocity.y=0):this.velocity.y=0:this.position.y=i.y}update(e,t){this.input.update(),this.vaultCooldown=Math.max(0,this.vaultCooldown-e);const n=this.input.consumeLook(),i=this.isAiming?.5:1;this.yaw-=n.x*i,this.pitch+=n.y*i,this.pitch=Jt.clamp(this.pitch,-1.45,1.45);const r=this.input.state.crouch;r&&this.isSprinting&&this.isGrounded&&this.velocity.length()>3.5&&!this.isSliding&&this.slideTimer<=0&&(this.isSliding=!0,this.slideTimer=.8,this.moveState="slide",at.playProceduralSound("footstep")),this.isSliding?(this.slideTimer-=e,this.stance="crouch",this.isCrouching=!0,(this.slideTimer<=0||this.velocity.length()<1.5)&&(this.isSliding=!1,this.stance=r?"crouch":"stand",this.isCrouching=r)):(this.stance=r?"crouch":"stand",this.isCrouching=r),this.isSprinting=this.input.state.sprint&&this.input.state.move.length()>.5&&!this.isCrouching&&!this.isSliding&&this.stats.stamina>5,this.isAiming=this.input.state.aim;const o=this.input.state.move,l=new M(0,0,-1).applyAxisAngle(new M(0,1,0),this.yaw),c=new M(1,0,0).applyAxisAngle(new M(0,1,0),this.yaw),d=new M;d.addScaledVector(l,o.y),d.addScaledVector(c,o.x),d.lengthSq()>0&&d.normalize();let p=0;this.isSliding?(p=this.slideSpeed*(this.slideTimer/.8),d.copy(l)):o.lengthSq()>.01&&(this.isSprinting?p=this.sprintSpeed:this.isCrouching?p=this.crouchSpeed:o.length()>.9?p=this.jogSpeed:p=this.walkSpeed,this.isAiming&&(p*=.52));const h=this.isGrounded?this.isSliding?2:20:7,m=d.multiplyScalar(p);if(this.isSliding?(this.velocity.x=Jt.lerp(this.velocity.x,m.x*1.2,h*e),this.velocity.z=Jt.lerp(this.velocity.z,m.z*1.2,h*e)):(this.velocity.x=Jt.lerp(this.velocity.x,m.x,h*e),this.velocity.z=Jt.lerp(this.velocity.z,m.z,h*e)),this.isGrounded||(this.velocity.y+=this.gravity*e),this.input.state.jump){if(this.isSliding)this.isSliding=!1,this.velocity.y=this.jumpForce*.9,this.velocity.x*=1.15,this.velocity.z*=1.15,this.isGrounded=!1,this.moveState="jump",at.playProceduralSound("footstep");else if(this.isGrounded||this.coyoteTimer>0){const x=this.canVault();x.can&&this.vaultCooldown<=0&&o.length()>.3?(this.position.y+=x.height+.2,this.velocity.y=2.5,this.velocity.x+=l.x*2.5,this.velocity.z+=l.z*2.5,this.moveState=x.height>1?"mantle":"vault",this.vaultCooldown=.6,at.playProceduralSound("footstep"),console.log("[Player] Vault",x.height.toFixed(2))):(this.velocity.y=this.jumpForce,this.isGrounded=!1,this.coyoteTimer=0,this.moveState="jump",at.playProceduralSound("footstep"))}}this.isGrounded?this.coyoteTimer=this.coyoteTime:this.coyoteTimer-=e;let g=!1;const v=new Ye(new M(this.position.x-this.radius*.8,this.position.y-.25,this.position.z-this.radius*.8),new M(this.position.x+this.radius*.8,this.position.y+.15,this.position.z+this.radius*.8));for(const x of this.colliders)if(v.intersectsBox(x)&&this.velocity.y<=.2){g=!0;break}if(this.position.y<=.06&&(g=!0,this.position.y=.06),!this.wasGrounded&&g){const x=Math.abs(this.velocity.y);x>8?(at.playProceduralSound("hit"),x>12&&this.takeDamage((x-12)*4)):at.playProceduralSound("footstep"),x>3&&(this.moveState="landing")}this.wasGrounded=this.isGrounded,this.isGrounded=g,g&&this.velocity.y<0&&(this.velocity.y=0);const f=this.velocity.clone().multiplyScalar(e);this.moveWithCollision(f,e),this.isSprinting?(this.stats.stamina=Math.max(0,this.stats.stamina-24*e),this.stats.stamina===0&&(this.isSprinting=!1)):this.stats.stamina=Math.min(this.stats.maxStamina,this.stats.stamina+20*e);const u=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.z*this.velocity.z);this.isGrounded?this.isSliding?this.moveState="slide":u<.15?this.moveState="idle":this.isSprinting?this.moveState="sprint":this.isCrouching?this.moveState="crouch_walk":u>3.8?this.moveState="jog":this.moveState="walk":this.moveState=this.velocity.y>.5?"jump":"fall",u>.5&&this.isGrounded&&!this.isSliding&&(this.footstepTimer-=e*u,this.footstepTimer<=0&&(this.footstepTimer=this.isSprinting?.3:this.isCrouching?.68:.42,(!this.isCrouching||Math.random()>.45)&&at.playProceduralSound("footstep"))),this.mesh.position.copy(this.position),this.mesh.rotation.y=this.yaw;const S=this.isSliding?.5:this.stance==="crouch"?.95:1.68;this.cameraTarget.set(this.position.x,this.position.y+S,this.position.z)}getCameraTarget(){return this.cameraTarget.clone()}takeDamage(e){let t=e;if(this.stats.armor>0){const n=Math.min(this.stats.armor,t*.62);this.stats.armor-=n,t-=n}return this.stats.health=Math.max(0,this.stats.health-t),at.playProceduralSound("hit"),this.stats.health<=0}heal(e){this.stats.health=Math.min(this.stats.maxHealth,this.stats.health+e)}addArmor(e){this.stats.armor=Math.min(100,this.stats.armor+e)}getPosition(){return this.position.clone()}}class Op{constructor(e,t){D(this,"target",new M);D(this,"desiredPosition",new M);D(this,"currentPosition",new M);D(this,"offset",new M(0,1.8,4.2));D(this,"shoulder",.4);D(this,"fovNormal",65);D(this,"fovAim",42);D(this,"shakeIntensity",0);D(this,"shakeDecay",0);D(this,"collisionRadius",.3);this.camera=e,this.colliders=t}setColliders(e){this.colliders=e}setShoulder(e){this.shoulder=e==="right"?.4:-.4}addShake(e,t=4){this.shakeIntensity=Math.max(this.shakeIntensity,e),this.shakeDecay=t}update(e,t,n,i,r,a){this.target.lerp(t,12*e);const o=r?1.1:a?3.2:4.2,l=a?.2:.4,c=new tt().makeRotationFromEuler(new Zt(i,n,0,"YXZ")),d=new M(0,0,o).applyMatrix4(c),p=new M(1,0,0).applyMatrix4(c).multiplyScalar(this.shoulder),h=new M(0,l,0);this.desiredPosition.copy(this.target).add(d).add(p).add(h);const m=this.desiredPosition.clone().sub(this.target),g=m.length();m.normalize();let v=g;const f=this.target.clone();for(const T of this.colliders){const A=new Ms(f,m).intersectBox(T,new M);if(A){const C=A.distanceTo(f);C<v&&C>.3&&(v=C-this.collisionRadius)}}const u=Math.max(.5,v);this.desiredPosition.copy(this.target).add(m.multiplyScalar(u)),this.currentPosition.lerp(this.desiredPosition,(r?18:8)*e),this.camera.position.copy(this.currentPosition);const S=this.target.clone();if(r){const T=new M(0,-.1,-8).applyMatrix4(c);S.add(T)}this.camera.lookAt(S);const x=r?this.fovAim:this.fovNormal;if(this.camera.fov=Jt.lerp(this.camera.fov,x,8*e),this.camera.updateProjectionMatrix(),this.shakeIntensity>.001){const T=(Math.random()-.5)*this.shakeIntensity,P=(Math.random()-.5)*this.shakeIntensity;this.camera.position.x+=T,this.camera.position.y+=P,this.shakeIntensity=Math.max(0,this.shakeIntensity-this.shakeDecay*e)}}getCamera(){return this.camera}}const Un={materials:{concrete:{roughness:.9,metalness:.05,color:9079429},asphalt:{roughness:.85,metalness:.02,color:1710622},metal:{roughness:.4,metalness:.8,color:6974066},paintedMetal:{roughness:.5,metalness:.3,color:2767434},glass:{roughness:.05,metalness:.1,color:8956620},fabric:{roughness:.95,metalness:0,color:2763314},tactical:{roughness:.7,metalness:.1,color:2962477}}};class Fp{constructor(e=10){D(this,"cellSize");D(this,"map");this.cellSize=e,this.map=new Map}key(e,t){return`${Math.floor(e/this.cellSize)},${Math.floor(t/this.cellSize)}`}insert(e){const t=this.key(e.min.x,e.min.z),n=this.key(e.max.x,e.max.z),[i,r]=t.split(",").map(Number),[a,o]=n.split(",").map(Number);for(let l=i;l<=a;l++)for(let c=r;c<=o;c++){const d=`${l},${c}`;this.map.has(d)||this.map.set(d,[]),this.map.get(d).push(e)}}query(e,t){const n=[],i=this.key(e.x-t,e.z-t),r=this.key(e.x+t,e.z+t),[a,o]=i.split(",").map(Number),[l,c]=r.split(",").map(Number),d=new Set;for(let p=a;p<=l;p++)for(let h=o;h<=c;h++){const m=this.map.get(`${p},${h}`);if(m)for(const g of m)d.has(g)||(d.add(g),n.push(g))}return n}clear(){this.map.clear()}}class kp{constructor(){D(this,"group",new Wt);D(this,"colliders",[]);D(this,"stations",[]);this.build()}build(){const e=new ge(10,.3,8),t=new Se({color:2763310,roughness:.9}),n=new q(e,t);n.position.set(0,0,0),n.receiveShadow=!0,this.group.add(n);const i=new Se({color:3816002,roughness:.85}),r=[{pos:[0,1.5,-4],size:[10,3,.3]},{pos:[0,1.5,4],size:[10,3,.3]},{pos:[-5,1.5,0],size:[.3,3,8]},{pos:[5,1.5,0],size:[.3,3,8]}];for(const m of r){const g=new ge(m.size[0],m.size[1],m.size[2]),v=new q(g,i);v.position.set(m.pos[0],m.pos[1],m.pos[2]),v.castShadow=!0,v.receiveShadow=!0,this.group.add(v),this.colliders.push(new Ye(new M(m.pos[0]-m.size[0]/2,m.pos[1]-m.size[1]/2,m.pos[2]-m.size[2]/2),new M(m.pos[0]+m.size[0]/2,m.pos[1]+m.size[1]/2,m.pos[2]+m.size[2]/2)))}this.createStation("weapons",-3.5,.6,-2.5,4876938),this.createStation("map",0,.6,-3.2,6989567),this.createStation("missions",3.5,.6,-2.5,10980346),this.createStation("upgrades",-3.5,.6,2.5,5111706),this.createStation("story",3.5,.6,2.5,16755268);const a=new bn(16755302,1.5,12);a.position.set(0,2.5,0),this.group.add(a);const o=new yt(1.2,.8),l=new Se({color:58879,emissive:43775,emissiveIntensity:.4,roughness:.2}),c=new q(o,l);c.position.set(0,1.5,-3.84),this.group.add(c);const d=new ge(2,.4,3),p=new Se({color:2767402,roughness:.9}),h=new q(d,p);h.position.set(0,.2,1.5),this.group.add(h);for(let m=0;m<5;m++){const g=new yt(.4,.5),v=document.createElement("canvas");v.width=128,v.height=160;const f=v.getContext("2d");f.fillStyle=m%2===0?"#fffaaa":"#aaffff",f.fillRect(0,0,128,160),f.fillStyle="#000",f.font="10px monospace",f.fillText(`NOTE ${m+1}`,10,20),f.font="8px monospace",f.fillText("Mara was here",10,40),f.fillText("Blackout != accident",10,55);const u=new fi(v),S=new Se({map:u,roughness:.9}),x=new q(g,S);x.position.set(-4.84,1.2+m*.3,-1+Math.random()*.5),x.rotation.y=Math.PI/2,x.rotation.z=(Math.random()-.5)*.2,this.group.add(x)}}createStation(e,t,n,i,r){const a=new ge(1,.8,.6),o=new Se({color:r,emissive:r,emissiveIntensity:.2,roughness:.6}),l=new q(a,o);l.position.set(t,n,i),l.castShadow=!0,this.group.add(l),this.stations.push({type:e,pos:new M(t,n,i),mesh:l});const c=new yt(.8,.2),d=document.createElement("canvas");d.width=256,d.height=64;const p=d.getContext("2d");p.fillStyle="#000000",p.fillRect(0,0,256,64),p.fillStyle="#ffffff",p.font="bold 20px monospace",p.textAlign="center",p.fillText(e.toUpperCase(),128,38);const h=new fi(d),m=new un({map:h,transparent:!0,side:Bt}),g=new q(c,m);g.position.set(t,n+.7,i),this.group.add(g)}getColliders(){return this.colliders}getStations(){return this.stations}setPosition(e,t,n){this.group.position.set(e,t,n)}interactWithStation(e){switch(e){case"weapons":return"WEAPONS STATION — Modify and upgrade arsenal";case"map":return"MAP TABLE — Veyra Sector 7 tactical overview";case"missions":return"MISSION BOARD — Active operations and intel";case"upgrades":return"UPGRADE BENCH — Enhance gear with scavenged materials";case"story":return"INVESTIGATION WALL — Mara's notes and Blackout evidence";default:return`STATION: ${e}`}}}class Bp{constructor(e){D(this,"group",new Wt);D(this,"colliders",[]);D(this,"spatialHash",new Fp(12));D(this,"districts",[]);D(this,"materials",new Map);D(this,"instancedMeshes",[]);D(this,"safehouse",null);D(this,"lights",[]);this.scene=e,this.scene.add(this.group),this.createMaterials()}createMaterials(){const e=(t,n)=>{const i=new Se({color:n.color??8947848,roughness:n.roughness??.8,metalness:n.metalness??.1});return this.materials.set(t,i),i};e("concrete",Un.materials.concrete),e("asphalt",Un.materials.asphalt),e("metal",Un.materials.metal),e("paintedMetal",Un.materials.paintedMetal),e("glass",Un.materials.glass),e("fabric",Un.materials.fabric),e("tactical",Un.materials.tactical),e("emergency",{color:16720384,roughness:.6,metalness:.2}),e("neon",{color:58879,roughness:.2,metalness:.5}),e("rust",{color:9062954,roughness:.9,metalness:.1}),e("wood",{color:4864554,roughness:.85,metalness:0})}addCollider(e){this.colliders.push(e),this.spatialHash.insert(e)}async buildDistrict(){for(;this.group.children.length;)this.group.remove(this.group.children[0]);this.colliders=[],this.spatialHash.clear(),this.districts=[],this.lights.forEach(r=>this.scene.remove(r)),this.lights=[];const e=new yt(500,500,10,10),t=this.materials.get("asphalt"),n=new q(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0;const i=e.attributes.position;for(let r=0;r<i.count;r++)i.setZ(r,(Math.random()-.5)*.15);i.needsUpdate=!0,this.group.add(n),this.addCollider(new Ye(new M(-250,-2,-250),new M(250,0,250))),this.createCentralStreet(),this.createResidentialBlock(),this.createCorporateBuilding(),this.createIndustrialYard(),this.createUnderground(),this.createRooftops(),this.createHiddenLocation(),this.createSafehouse(),this.createAdditionalProps(),this.setupLighting(),this.addEnvironmentalStorytelling(),console.log(`[World] Built ${this.colliders.length} colliders, ${this.group.children.length} meshes, ${this.districts.length} districts`)}createCentralStreet(){const e={id:"central",name:"Central Street",bounds:new Ye(new M(-60,0,-110),new M(60,35,25)),powerState:"partial"};this.districts.push(e);const t=[{x:-24,z:-68,w:14,d:18,h:30},{x:26,z:-72,w:16,d:14,h:36},{x:-30,z:-35,w:12,d:20,h:24},{x:28,z:-28,w:14,d:16,h:28},{x:-20,z:-6,w:18,d:12,h:20},{x:22,z:2,w:20,d:14,h:22},{x:-45,z:-50,w:10,d:10,h:16},{x:45,z:-55,w:10,d:10,h:18}];for(const g of t)this.createSimpleBuilding(g.x,g.z,g.w,g.d,g.h);for(let g=0;g<12;g++){const v=(Math.random()-.5)*50,f=-90+Math.random()*80;this.createBarrier(v,f),g%3===0&&this.createDebris(v+(Math.random()-.5)*3,f+(Math.random()-.5)*3)}const n=new mt(.1,.12,6,8),i=this.materials.get("metal"),r=16,a=new Sp(n,i,r);let o=0;for(let g=0;g<r;g++){const v=(g%2===0?-13:13)+(Math.random()-.5)*2,f=-95+g*11,u=new tt().makeTranslation(v,3,f);a.setMatrixAt(o++,u)}a.instanceMatrix.needsUpdate=!0,a.castShadow=!0,this.group.add(a);const l=new yt(.3,6),c=new Se({color:16777215,roughness:.9});for(let g=0;g<28;g++){const v=new q(l,c);v.rotation.x=-Math.PI/2,v.position.set(0,.02,-100+g*6),this.group.add(v)}const d=new ge(4,.2,120),p=this.materials.get("concrete"),h=new q(d,p);h.position.set(-8,.1,-35),this.group.add(h);const m=new q(d,p);m.position.set(8,.1,-35),this.group.add(m)}createResidentialBlock(){const e={id:"residential",name:"Abandoned Residential",bounds:new Ye(new M(-75,0,-10),new M(-10,25,65)),powerState:"blackout"};this.districts.push(e);const t=-38,n=22,i=6;for(let o=0;o<i;o++){const l=o*3.2,c=new ge(30,.3,22),d=new q(c,this.materials.get("concrete"));if(d.position.set(t,l,n),d.receiveShadow=!0,this.group.add(d),o>0&&this.addCollider(new Ye(new M(t-15,l-.2,n-11),new M(t+15,l+.2,n+11))),o<i-1){const p=this.materials.get("concrete"),h=[{pos:[t,l+1.6,n-11],size:[30,3.2,.4]},{pos:[t,l+1.6,n+11],size:[30,3.2,.4]},{pos:[t-15,l+1.6,n],size:[.4,3.2,22]},{pos:[t+15,l+1.6,n],size:[.4,3.2,22]}];for(const m of h){const g=new ge(m.size[0],m.size[1],m.size[2]),v=new q(g,p);v.position.set(m.pos[0],m.pos[1],m.pos[2]),v.castShadow=!0,v.receiveShadow=!0,this.group.add(v),this.addCollider(new Ye(new M(m.pos[0]-m.size[0]/2,m.pos[1]-m.size[1]/2,m.pos[2]-m.size[2]/2),new M(m.pos[0]+m.size[0]/2,m.pos[1]+m.size[1]/2,m.pos[2]+m.size[2]/2)))}for(let m=-12;m<=12;m+=3.5){const g=new yt(1.2,1.6),v=new Se({color:3359829,transparent:!0,opacity:Math.random()>.6?.12:.04,emissive:Math.random()>.82?16755268:0,emissiveIntensity:Math.random()>.82?.15:0}),f=new q(g,v);if(f.position.set(t+m,l+1.6,n+11.21),this.group.add(f),Math.random()>.85){const u=new bn(16755302,.6,8);u.position.set(t+m,l+1.6,n+9),this.scene.add(u),this.lights.push(u)}}if(o===2||o===3)for(let m=0;m<3;m++){const g=new ge(.8,.6,.5),v=new Se({color:4864554,roughness:.9}),f=new q(g,v);f.position.set(t+(Math.random()-.5)*10,l+.5,n+(Math.random()-.5)*6),this.group.add(f)}}}const r=new ge(3.5,20,4.5),a=new q(r,this.materials.get("metal"));a.position.set(t+11,10,n-6),this.group.add(a),this.addCollider(new Ye(new M(t+9.25,0,n-8.25),new M(t+12.75,20,n-3.75)));for(let o=1;o<i-1;o++){const l=new ge(4,.2,2),c=new q(l,this.materials.get("concrete"));c.position.set(t-8,o*3.2,n+12),this.group.add(c)}}createCorporateBuilding(){const e={id:"corporate",name:"Helix Tower",bounds:new Ye(new M(-20,0,40),new M(30,60,90)),powerState:"powered"};this.districts.push(e);const t=5,n=68,i=52,r=new ge(26,i,24),a=new Se({color:1710626,roughness:.25,metalness:.75}),o=new q(r,a);o.position.set(t,i/2,n),o.castShadow=!0,o.receiveShadow=!0,this.group.add(o),this.addCollider(new Ye(new M(t-13,0,n-12),new M(t+13,i,n+12)));for(let u=4;u<i;u+=2.8)for(let S=-11;S<=11;S+=2.4){const x=Math.random()>.7,T=new yt(2,2.4),P=new Se({color:x?11193599:3359829,transparent:!0,opacity:x?.25:.08,emissive:x?8956620:0,emissiveIntensity:x?.2:0,roughness:.05,metalness:.3}),A=new q(T,P);A.position.set(t+S,u,n+12.1),this.group.add(A)}const l=new yt(6,2),c=document.createElement("canvas");c.width=512,c.height=170;const d=c.getContext("2d");d.fillStyle="#0a0a0f",d.fillRect(0,0,512,170),d.fillStyle="#00e5ff",d.font="bold 64px Orbitron",d.textAlign="center",d.fillText("HELIX",256,100),d.font="16px JetBrains Mono",d.fillStyle="#8a8a9a",d.fillText("CORPORATE TOWER • SECTOR 7",256,130);const p=new fi(c),h=new Se({map:p,emissive:43775,emissiveIntensity:.3}),m=new q(l,h);m.position.set(t,8,n-12.1),m.rotation.y=Math.PI,this.group.add(m);const g=new ge(7,4.5,2.5),v=this.materials.get("metal"),f=new q(g,v);f.position.set(t,2.25,n-13.5),this.group.add(f);for(let u=-1;u<=1;u++){const S=new mt(.25,.25,1,8),x=new q(S,this.materials.get("paintedMetal"));x.position.set(t+u*2,.5,n-16),this.group.add(x),this.addCollider(new Ye(new M(t+u*2-.25,0,n-16.25),new M(t+u*2+.25,1,n-15.75)))}}createIndustrialYard(){const e={id:"industrial",name:"Industrial Yard",bounds:new Ye(new M(20,0,-55),new M(85,20,15)),powerState:"partial"};this.districts.push(e);for(let l=0;l<4;l++){const c=42+l*16,d=-22,p=new ge(14,9,18),h=new Se({color:3815998,roughness:.85,metalness:.15}),m=new q(p,h);m.position.set(c,4.5,d),m.castShadow=!0,this.group.add(m),this.addCollider(new Ye(new M(c-7,0,d-9),new M(c+7,9,d+9)));const g=new ge(4,5,.3),v=new q(g,this.materials.get("metal"));v.position.set(c,2.5,d+9.2),this.group.add(v)}const t=[9054762,2775690,4872746,9079338,5913130];for(let l=0;l<16;l++){const c=32+l%5*6.8,d=-38+Math.floor(l/5)*6.8,p=new ge(6,2.6,2.6),h=new Se({color:t[l%t.length],roughness:.7,metalness:.3}),m=new q(p,h);m.position.set(c,1.3,d),m.castShadow=!0,m.rotation.y=(Math.random()-.5)*.1,this.group.add(m),this.addCollider(new Ye(new M(c-3,0,d-1.3),new M(c+3,2.6,d+1.3)))}const n=new ge(9,4.5,7),i=this.materials.get("paintedMetal"),r=new q(n,i);r.position.set(58,2.25,-4),this.group.add(r),this.addCollider(new Ye(new M(53.5,0,-7.5),new M(62.5,4.5,-.5)));for(let l=0;l<3;l++){const c=new mt(.15,.18,8,8),d=new q(c,this.materials.get("metal"));d.position.set(55+l*8,4,-12),this.group.add(d)}const a=new ge(3,2,2),o=new Se({color:4868682,roughness:.7,metalness:.5});for(let l=0;l<4;l++){const c=new q(a,o);c.position.set(40+l*3,1,-8),this.group.add(c)}}createUnderground(){const e={id:"underground",name:"Service Tunnels",bounds:new Ye(new M(-45,-8,-95),new M(45,0,85)),powerState:"blackout"};this.districts.push(e);const t=180,n=new mt(3.8,3.8,t,20,1,!0),i=new Se({color:2763310,roughness:.95,side:Bt}),r=new q(n,i);r.rotation.z=Math.PI/2,r.position.set(0,-3.2,-10),this.group.add(r);const a=new ge(t,.5,7),o=new q(a,this.materials.get("concrete"));o.position.set(0,-5.8,-10),this.group.add(o);for(let p=-80;p<=80;p+=18){const h=new bn(16755268,.8,12);h.position.set(p,-1.5,-10),this.scene.add(h),this.lights.push(h)}const l=new mt(.2,.2,t,8);l.rotateZ(Math.PI/2);const c=new Se({color:4868682,roughness:.6,metalness:.5}),d=new q(l,c);d.position.set(0,-.5,-8),this.group.add(d)}createRooftops(){const e=[{x:-24,z:-68,h:30},{x:26,z:-72,h:36},{x:-38,z:22,h:19.2},{x:5,z:68,h:52},{x:42,z:-22,h:9}];for(const c of e){const d=new ge(13,1.1,.45),p=this.materials.get("concrete"),h=new q(d,p);h.position.set(c.x,c.h+.55,c.z-5.5),this.group.add(h);const m=new q(d,p);m.position.set(c.x,c.h+.55,c.z+5.5),this.group.add(m);const g=new ge(.45,1.1,11),v=new q(g,p);v.position.set(c.x-6.25,c.h+.55,c.z),this.group.add(v);const f=new q(g,p);f.position.set(c.x+6.25,c.h+.55,c.z),this.group.add(f);const u=new ge(1.5,1,1),S=new q(u,this.materials.get("metal"));S.position.set(c.x+3,c.h+.5,c.z+2),this.group.add(S)}const t=new ge(9,.35,1.3),n=new Se({color:4864554,roughness:.85}),i=new q(t,n);i.position.set(-10,30,-68),this.group.add(i);const r=new q(t,n);r.position.set(2,22,-35),r.rotation.y=.4,this.group.add(r);const a=new mt(.02,.02,30,4);a.rotateZ(Math.PI/2);const o=new Se({color:1118481,roughness:.9}),l=new q(a,o);l.position.set(-5,32,-50),this.group.add(l)}createHiddenLocation(){const e=new ge(7,3.5,7),t=new Se({color:1710622,roughness:.95}),n=new q(e,t);n.position.set(-48,.5,-78),this.group.add(n),this.addCollider(new Ye(new M(-51.5,0,-81.5),new M(-44.5,3.5,-74.5)));const i=new ge(.9,.6,.7),r=new Se({color:65416,emissive:65416,emissiveIntensity:.7}),a=new q(i,r);a.position.set(-48,1.2,-78),this.group.add(a);const o=new bn(65416,1,6);o.position.set(-48,1.5,-78),this.scene.add(o),this.lights.push(o)}createSafehouse(){this.safehouse=new kp,this.safehouse.setPosition(-58,0,15),this.group.add(this.safehouse.group),this.safehouse.getColliders().forEach(t=>{const n=new Ye(t.min.clone().add(new M(-58,0,15)),t.max.clone().add(new M(-58,0,15)));this.addCollider(n)});const e={id:"safehouse",name:"Safehouse",bounds:new Ye(new M(-63,0,11),new M(-53,4,19)),powerState:"powered"};this.districts.push(e)}createAdditionalProps(){for(let e=0;e<20;e++)this.createDebris((Math.random()-.5)*100,-80+Math.random()*120);for(let e=0;e<6;e++){const t=new mt(.4,.4,.9,8),n=new Se({color:2763306,roughness:.8}),i=new q(t,n);i.position.set((Math.random()-.5)*60,.45,-70+Math.random()*90),this.group.add(i),this.addCollider(new Ye(new M(i.position.x-.4,0,i.position.z-.4),new M(i.position.x+.4,.9,i.position.z+.4)))}}createSimpleBuilding(e,t,n,i,r){const a=new ge(n,r,i),o=new Se({color:2763314,roughness:.8,metalness:.15}),l=new q(a,o);l.position.set(e,r/2,t),l.castShadow=!0,l.receiveShadow=!0,this.group.add(l),this.addCollider(new Ye(new M(e-n/2,0,t-i/2),new M(e+n/2,r,t+i/2)));for(let c=3;c<r-1;c+=2.5)for(let d=-n/2+1;d<n/2-.5;d+=2.2){const p=new yt(.9,1.2),h=Math.random()>.72,m=new Se({color:h?8956620:3359829,transparent:!0,opacity:h?.18:.05,emissive:h?16755268:0,emissiveIntensity:h?.12:0}),g=new q(p,m);g.position.set(e+d,c,t+i/2+.06),this.group.add(g)}if(Math.random()>.5){const c=new mt(.05,.05,3,6),d=new q(c,this.materials.get("metal"));d.position.set(e+(Math.random()-.5)*n*.5,r+1.5,t+(Math.random()-.5)*i*.5),this.group.add(d)}}createBarrier(e,t){const n=new ge(2.2,1.1,.45),i=new Se({color:11184810,roughness:.7}),r=new q(n,i);r.position.set(e,.55,t),r.rotation.y=Math.random()*.6-.3,r.castShadow=!0,this.group.add(r),this.addCollider(new Ye(new M(e-1.1,0,t-.25),new M(e+1.1,1.1,t+.25)))}createDebris(e,t){const n=new ge(.3+Math.random()*.5,.1+Math.random()*.3,.3+Math.random()*.5),i=new Se({color:4868682,roughness:.9}),r=new q(n,i);r.position.set(e,.05,t),r.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),this.group.add(r)}setupLighting(){const e=new Ap(4210768,.65);this.scene.add(e),this.lights.push(e);const t=new aa(11193599,.9);t.position.set(50,70,25),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=1,t.shadow.camera.far=200,t.shadow.camera.left=-100,t.shadow.camera.right=100,t.shadow.camera.top=100,t.shadow.camera.bottom=-100,t.shadow.bias=-1e-4,this.scene.add(t),this.lights.push(t);const n=16755268;for(let l=0;l<8;l++){const c=new bn(n,2.2,28);c.position.set(l%2===0?-13:13,5.8,-90+l*13),c.castShadow=!0,c.shadow.mapSize.set(512,512),this.scene.add(c),this.lights.push(c)}const i=new bn(16720384,1.8,18);i.position.set(58,4.5,-4),this.scene.add(i),this.lights.push(i);const r=new bn(58879,1.2,35);r.position.set(5,28,68),this.scene.add(r),this.lights.push(r);const a=new bn(16755302,1.5,15);a.position.set(-58,3,15),this.scene.add(a),this.lights.push(a);const o=new aa(8947967,.15);o.position.set(-40,60,-20),this.scene.add(o),this.lights.push(o)}addEnvironmentalStorytelling(){const e=new yt(2.2,1.4),t=document.createElement("canvas");t.width=256,t.height=152;const n=t.getContext("2d");n.fillStyle="#ffcc00",n.fillRect(0,0,256,152),n.fillStyle="#000",n.font="bold 22px monospace",n.fillText("EVACUATION",20,38),n.font="13px monospace",n.fillText("SECTOR 7 - MANDATORY",20,68),n.fillText("FOLLOW HELIX PROTOCOL",20,88),n.fillStyle="#aa0000",n.font="bold 11px monospace",n.fillText("BLACKOUT ZONE — AUTHORIZED ONLY",20,115);const i=new fi(t),r=new Se({map:i,roughness:.8}),a=new q(e,r);a.position.set(-12,2.6,-58),a.rotation.y=.35,this.group.add(a);const o=[{x:4,z:-48,rot:.2,color:2763322},{x:-6,z:-32,rot:-.3,color:3811882},{x:18,z:-18,rot:.5,color:2767402}];for(const f of o){const u=new ge(4.8,1.5,2.2),S=new Se({color:f.color,roughness:.6,metalness:.4}),x=new q(u,S);x.position.set(f.x,.75,f.z),x.rotation.y=f.rot,x.castShadow=!0,this.group.add(x),this.addCollider(new Ye(new M(f.x-2.4,0,f.z-1.1),new M(f.x+2.4,1.5,f.z+1.1)));const T=new yt(1,.6),P=new Se({color:0,roughness:.9}),A=new q(T,P);A.position.set(f.x,1.1,f.z),A.rotation.y=f.rot,this.group.add(A)}const l=new yt(3,1.5),c=document.createElement("canvas");c.width=256,c.height=128;const d=c.getContext("2d");d.fillStyle="rgba(0,0,0,0)",d.fillRect(0,0,256,128),d.fillStyle="#ff4d6a",d.font="bold 32px Orbitron",d.fillText("ASHEN",20,60),d.fillStyle="#ffffff",d.font="14px JetBrains Mono",d.fillText("WE REMEMBER",20,85);const p=new fi(c),h=new Se({map:p,transparent:!0,roughness:.9}),m=new q(l,h);m.position.set(-24,2,-67.9),m.rotation.y=0,this.group.add(m);const g=new ge(.6,.8,.4),v=new q(g,this.materials.get("metal"));v.position.set(-10,3.5,-45),this.group.add(v)}getDistrictAt(e){for(const t of this.districts)if(t.bounds.containsPoint(e))return t;return null}setPowerState(e,t){const n=this.districts.find(i=>i.id===e);n&&(n.powerState=t)}dispose(){this.scene.remove(this.group),this.lights.forEach(e=>this.scene.remove(e))}}class zp{constructor(){D(this,"group",new Wt);D(this,"mixer",null);D(this,"parts",new Map);this.buildMesh()}buildMesh(){const e=new Se({color:2962477,roughness:.7,metalness:.1}),t=new Se({color:13215369,roughness:.8}),n=new Se({color:1710622,roughness:.5,metalness:.3}),i=new Se({color:3815998,roughness:.6,metalness:.2}),r=new ge(.6,.75,.35),a=new q(r,e);a.position.y=1.1,a.castShadow=!0,this.group.add(a),this.parts.set("torso",a);const o=new ge(.68,.6,.42),l=new q(o,i);l.position.y=1.15,l.castShadow=!0,this.group.add(l);const c=new pn(.22,12,12),d=new q(c,t);d.position.y=1.7,d.castShadow=!0,this.group.add(d),this.parts.set("head",d);const p=new mt(.24,.26,.12,12),h=new q(p,n);h.position.y=1.82,this.group.add(h);const m=new mt(.09,.09,.6,8),g=new q(m,e);g.position.set(-.42,1.1,0),g.rotation.z=-.1,g.castShadow=!0,this.group.add(g);const v=new q(m,e);v.position.set(.42,1.1,0),v.rotation.z=.1,v.castShadow=!0,this.group.add(v),this.parts.set("rightArm",v);const f=new mt(.13,.12,.85,8),u=new q(f,e);u.position.set(-.18,.42,0),u.castShadow=!0,this.group.add(u);const S=new q(f,e);S.position.set(.18,.42,0),S.castShadow=!0,this.group.add(S);const x=new ge(.5,.6,.25),T=new q(x,n);T.position.set(0,1.1,-.3),T.castShadow=!0,this.group.add(T);const P=new ge(.12,.25,.18),A=new q(P,n);A.position.set(.38,.55,.05),this.group.add(A);const C=new Wt;C.position.set(.5,1,.15),C.name="weaponSocket",this.group.add(C);const W=new pn(.11,8,8),b=new Se({color:1118481,roughness:.9}),w=new q(W,b);w.position.set(-.42,.75,0),this.group.add(w);const z=new q(W,b);z.position.set(.42,.75,0),this.group.add(z);const G=new ge(.18,.12,.32),Q=new Se({color:657930,roughness:.8}),L=new q(G,Q);L.position.set(-.18,.06,.05),this.group.add(L);const U=new q(G,Q);U.position.set(.18,.06,.05),this.group.add(U),this.group.traverse(H=>{H.isMesh&&(H.frustumCulled=!1)})}getWeaponSocket(){return this.group.getObjectByName("weaponSocket")}update(e,t,n){const i=performance.now()*.001,r=this.parts.get("rightArm");r&&(t==="sprint"?r.rotation.x=Math.sin(i*8)*.6:t==="walk"||t==="jog"?r.rotation.x=Math.sin(i*5)*.4:r.rotation.x=Jt.lerp(r.rotation.x,0,e*5)),t==="idle"?this.group.position.y=Math.sin(i*1.2)*.015:this.group.position.y=Jt.lerp(this.group.position.y,0,e*8)}setPosition(e){this.group.position.copy(e)}setRotation(e){this.group.rotation.y=e}}class Hp{constructor(e){D(this,"group",new Wt);D(this,"config");D(this,"health");D(this,"head");D(this,"body");this.config=e,this.health=e.health,this.buildMesh()}buildMesh(){const e=new Se({color:this.config.color,roughness:.7,metalness:.2}),t=new Se({color:1118484,roughness:.6}),n=new ge(.55*this.config.scale,.7*this.config.scale,.32*this.config.scale);this.body=new q(n,e),this.body.position.y=1*this.config.scale,this.body.castShadow=!0,this.group.add(this.body);const i=new pn(.2*this.config.scale,10,10);if(this.head=new q(i,new Se({color:9075306,roughness:.8})),this.head.position.y=1.55*this.config.scale,this.group.add(this.head),this.config.id==="heavy"){const f=new ge(.7,.5,.45),u=new q(f,t);u.position.y=1.1,this.group.add(u);const S=new pn(.26,10,10),x=new q(S,t);x.position.y=1.58,this.group.add(x)}else if(this.config.id==="sniper"){const f=new q(new ge(.6,.8,.4),new Se({color:3820074,roughness:.95}));f.position.y=1,this.group.add(f)}const r=new mt(.08,.08,.55,6),a=new q(r,e);a.position.set(-.38,1,0),this.group.add(a);const o=new q(r,e);o.position.set(.38,1,0),this.group.add(o);const l=new mt(.11,.1,.8,6),c=new q(l,e);c.position.set(-.15,.4,0),this.group.add(c);const d=new q(l,e);d.position.set(.15,.4,0),this.group.add(d);const p=new ge(.08,.08,.7),h=new q(p,t);h.position.set(.45,1,.3),this.group.add(h);const m=new yt(.2,.2),g=new un({color:this.config.color,side:Bt}),v=new q(m,g);v.position.set(0,2.1,0),v.name="indicator",this.group.add(v)}takeDamage(e,t=!1){const n=t?e*2.2:e;return this.health-=n,this.body.material.emissive.setHex(5570560),setTimeout(()=>{this.body.material.emissive.setHex(0)},80),this.health<=0}setPosition(e){this.group.position.copy(e)}getPosition(){return this.group.position.clone()}lookAt(e){const t=e.clone().sub(this.group.position);if(t.y=0,t.lengthSq()>.01){const n=Math.atan2(t.x,t.z);this.group.rotation.y=n}}dispose(e){e.remove(this.group)}}const us=[{id:"m9_tactical",name:"M9 Tactical",category:"pistol",damage:28,fireRate:420,magazine:15,reserve:90,reloadTime:1.4,range:35,recoil:.35,spread:.02,projectile:"hitscan",fireModes:["semi"],attachments:["suppressor_pistol","red_dot_micro"],sound:"pistol",description:"Standard sidearm. Reliable, quiet with suppressor."},{id:"vec_9",name:"VEC-9",category:"smg",damage:19,fireRate:850,magazine:32,reserve:160,reloadTime:1.8,range:40,recoil:.45,spread:.06,projectile:"hitscan",fireModes:["auto","burst"],attachments:["suppressor_smg","holo_sight","grip_vertical"],sound:"smg",description:"High rate CQB weapon. Melts armor up close."},{id:"ar_41",name:"AR-41 Vanguard",category:"rifle",damage:36,fireRate:650,magazine:30,reserve:150,reloadTime:2.1,range:85,recoil:.6,spread:.03,projectile:"hitscan",fireModes:["auto","semi"],attachments:["acog","suppressor_rifle","grip_angled","extended_mag"],sound:"rifle",description:"Workhorse rifle. Balanced for Veyra operations."},{id:"sg_breach",name:"Breacher-12",category:"shotgun",damage:14,fireRate:120,magazine:8,reserve:32,reloadTime:3.2,range:18,recoil:1.2,spread:.18,projectile:"hitscan",fireModes:["semi"],attachments:[],sound:"shotgun",description:"Door kicker. Devastating in tight corridors."},{id:"sr_phantom",name:"Phantom SR",category:"sniper",damage:110,fireRate:45,magazine:5,reserve:20,reloadTime:2.8,range:220,recoil:1.8,spread:.005,projectile:"projectile",fireModes:["semi"],attachments:["scope_8x","suppressor_sniper"],sound:"sniper",description:"Long eye of Veyra. One shot changes everything."},{id:"knife_tactical",name:"Tactical Blade",category:"melee",damage:75,fireRate:90,magazine:1,reserve:0,reloadTime:0,range:2.2,recoil:0,spread:0,projectile:"hitscan",fireModes:["semi"],attachments:[],sound:"melee",description:"Silent. Final. The city teaches you to be quiet."}];class Gp{constructor(){D(this,"weapons",[]);D(this,"currentIndex",0);D(this,"lastFireTime",0);D(this,"isReloading",!1);D(this,"reloadTimer",0);D(this,"recoil",0);D(this,"spread",0)}createWeaponMesh(e){const t=new Wt,n=new Se({color:1710622,roughness:.5,metalness:.6}),i=new Se({color:4868686,roughness:.3,metalness:.8});let r;switch(e.category){case"pistol":r=new ge(.08,.08,.28);break;case"smg":r=new ge(.1,.12,.45);break;case"rifle":r=new ge(.1,.14,.65);break;case"shotgun":r=new ge(.12,.14,.7);break;case"sniper":r=new ge(.11,.15,.95);break;case"melee":r=new ge(.04,.04,.35);break;default:r=new ge(.1,.1,.5)}const a=new q(r,n);a.castShadow=!0,t.add(a);const o=new mt(.02,.02,.3,6);o.rotateX(Math.PI/2);const l=new q(o,i);if(l.position.z=r.parameters.depth/2+.15,t.add(l),e.category!=="melee"){const h=new ge(.04,.06,.12),m=new q(h,i);m.position.set(0,.1,-.05),t.add(m)}const c=new Tr(.06,.18,6),d=new un({color:16755268,transparent:!0,opacity:0}),p=new q(c,d);return p.rotation.x=Math.PI/2,p.position.z=r.parameters.depth/2+.35,p.name="muzzleFlash",t.add(p),t}addWeapon(e){const t=us.find(i=>i.id===e);if(!t||this.weapons.find(i=>i.config.id===e))return null;const n={config:t,ammoInMag:t.magazine,reserve:t.reserve,attachments:[],mesh:this.createWeaponMesh(t)};return this.weapons.push(n),n}getCurrent(){return this.weapons[this.currentIndex]??null}switchWeapon(e){this.weapons.length<=1||(this.currentIndex=(this.currentIndex+e+this.weapons.length)%this.weapons.length,at.playProceduralSound("reload"))}setWeaponIndex(e){e>=0&&e<this.weapons.length&&(this.currentIndex=e,at.playProceduralSound("reload"))}canFire(){const e=this.getCurrent();return!e||this.isReloading?!1:e.config.category==="melee"?performance.now()-this.lastFireTime>6e4/e.config.fireRate:e.ammoInMag>0&&performance.now()-this.lastFireTime>6e4/e.config.fireRate}fire(e,t){const n=this.getCurrent();if(!n||!this.canFire())return null;this.lastFireTime=performance.now(),n.config.category!=="melee"&&n.ammoInMag--,this.recoil=Math.min(1.5,this.recoil+n.config.recoil*.25),this.spread=Math.min(.25,this.spread+n.config.spread*.6);const i=n.mesh.getObjectByName("muzzleFlash");return i&&(i.material.opacity=.9,setTimeout(()=>{i.material.opacity=0},40)),at.playProceduralSound(n.config.sound),{hit:!1,damage:n.config.damage}}startReload(){const e=this.getCurrent();return!e||this.isReloading||e.ammoInMag===e.config.magazine||e.reserve<=0?!1:(this.isReloading=!0,this.reloadTimer=e.config.reloadTime,at.playProceduralSound("reload"),!0)}update(e){if(this.isReloading&&(this.reloadTimer-=e,this.reloadTimer<=0)){const t=this.getCurrent();if(t){const n=t.config.magazine-t.ammoInMag,i=Math.min(n,t.reserve);t.ammoInMag+=i,t.reserve-=i}this.isReloading=!1}this.recoil=Math.max(0,this.recoil-e*2.5),this.spread=Math.max(0,this.spread-e*1.8)}getRecoil(){return this.recoil}getSpread(){return this.spread}getIsReloading(){return this.isReloading}addAmmo(e,t){for(const n of this.weapons)n.config.category!=="melee"&&(n.reserve+=t)}}class Vp{constructor(e,t,n){D(this,"state","patrol");D(this,"memory",{lastKnownPlayerPos:null,lastSeenTime:0,lastHeardPos:null,deadTeammates:0,suspiciousLocations:[],threatLevel:0});D(this,"position");D(this,"patrolPoints",[]);D(this,"patrolIndex",0);D(this,"detection",0);D(this,"stateTimer",0);D(this,"velocity",new M);D(this,"targetPos",null);D(this,"fireCooldown",0);D(this,"squadId",null);this.character=e,this.config=t,this.position=n.clone(),this.character.setPosition(n),this.generatePatrol(n)}generatePatrol(e){for(let t=0;t<4;t++){const n=t/4*Math.PI*2+Math.random()*.5,i=6+Math.random()*10;this.patrolPoints.push(new M(e.x+Math.cos(n)*i,e.y,e.z+Math.sin(n)*i))}}setSquad(e){this.squadId=e}update(e,t,n,i,r,a){this.stateTimer+=e,this.fireCooldown=Math.max(0,this.fireCooldown-e);const o=t.clone().sub(this.position),l=o.length(),c=this.canSeePlayer(t,r,l),d=this.canHearPlayer(t,i,l);if(c){const h=i.isCrouching?.5:i.isSprinting?1.5:1,m=Jt.clamp(1-l/this.config.detectionRange,0,1),g=this.isInFOV(o)?1:.2;this.detection+=e*1.8*h*g*(.3+m),this.memory.lastKnownPlayerPos=t.clone(),this.memory.lastSeenTime=performance.now()}else this.detection-=e*.6,d&&(this.detection+=e*.8,this.memory.lastHeardPos=t.clone(),this.memory.lastKnownPlayerPos||(this.memory.lastKnownPlayerPos=t.clone()));this.detection=Jt.clamp(this.detection,0,1);const p=this.state;switch(this.detection>=.95?(this.state="combat",this.memory.threatLevel=1):this.detection>=.65?this.state!=="combat"&&(this.state="alerted"):this.detection>=.35?((this.state==="patrol"||this.state==="idle")&&(this.state="suspicious"),this.state==="suspicious"&&this.stateTimer>2&&(this.state="investigating")):((this.state==="alerted"||this.state==="combat")&&(this.state="searching",this.stateTimer=0),this.state==="searching"&&this.stateTimer>8&&(this.state="lost",this.stateTimer=0),this.state==="lost"&&this.stateTimer>4&&(this.state="patrol",this.memory.lastKnownPlayerPos=null)),p!==this.state&&(this.stateTimer=0),this.state){case"patrol":this.updatePatrol(e);break;case"suspicious":this.updateSuspicious(e);break;case"investigating":this.updateInvestigate(e);break;case"alerted":this.updateAlerted(e,t);break;case"combat":this.updateCombat(e,t,a);break;case"searching":this.updateSearching(e);break;case"lost":this.velocity.set(0,0,0);break}if(this.position.add(this.velocity.clone().multiplyScalar(e)),this.position.y=0,this.character.setPosition(this.position),this.targetPos||this.memory.lastKnownPlayerPos){const h=this.state==="combat"||this.state==="alerted"?t:this.targetPos||this.memory.lastKnownPlayerPos;this.character.lookAt(h)}}canSeePlayer(e,t,n){if(n>this.config.detectionRange||!this.isInFOV(e.clone().sub(this.position)))return!1;const i=e.clone().sub(this.position);i.y=0;const r=i.length();i.normalize();const a=new Ms(this.position.clone().add(new M(0,1.2,0)),i);for(const o of t){const l=a.intersectBox(o,new M);if(l&&l.distanceTo(this.position)<r-.5)return!1}return!0}canHearPlayer(e,t,n){let i=this.config.hearingRange;return t.isShooting&&(i*=3),t.isSprinting&&(i*=1.5),t.isCrouching&&(i*=.4),n<i}isInFOV(e){return e.y=0,e.lengthSq()<.01?!0:new M(0,0,-1).applyAxisAngle(new M(0,1,0),this.character.group.rotation.y).angleTo(e.clone().normalize())<Jt.degToRad(this.config.fov*.5)}updatePatrol(e){if(this.patrolPoints.length===0)return;const n=this.patrolPoints[this.patrolIndex].clone().sub(this.position);n.y=0,n.length()<1.2?(this.patrolIndex=(this.patrolIndex+1)%this.patrolPoints.length,this.velocity.set(0,0,0),Math.random()<.3&&(this.state="idle",setTimeout(()=>{this.state==="idle"&&(this.state="patrol")},2e3+Math.random()*3e3))):(n.normalize().multiplyScalar(this.config.speed*.5),this.velocity.lerp(n,e*3))}updateSuspicious(e){this.velocity.lerp(new M(0,0,0),e*2),this.character.group.rotation.y+=Math.sin(this.stateTimer*.8)*e*.5}updateInvestigate(e){const t=this.memory.lastHeardPos||this.memory.lastKnownPlayerPos;if(!t){this.state="patrol";return}const n=t.clone().sub(this.position);n.y=0,n.length()<1.5?(this.state="suspicious",this.memory.suspiciousLocations.push(t.clone())):(n.normalize().multiplyScalar(this.config.speed*.7),this.velocity.lerp(n,e*4),this.targetPos=t)}updateAlerted(e,t){const n=this.memory.lastKnownPlayerPos||t,i=n.clone().sub(this.position);if(i.length()>12)i.normalize().multiplyScalar(this.config.speed*.9),this.velocity.lerp(i,e*4);else{const a=new M(-i.z,0,i.x).normalize().multiplyScalar(Math.sin(this.stateTimer*1.2)*2);this.velocity.lerp(a,e*3)}this.targetPos=n}updateCombat(e,t,n){const i=t.clone().sub(this.position),r=i.length();if(n.length>1&&this.config.id!=="heavy"&&this.config.id!=="sniper"&&Math.random()<.01){const a=new M(-i.z,0,i.x).normalize(),o=t.clone().add(a.multiplyScalar((Math.random()>.5?1:-1)*8));this.targetPos=o,i.copy(o).sub(this.position)}if(this.config.id==="sniper")if(r<25){const a=this.position.clone().sub(t).normalize().multiplyScalar(this.config.speed);this.velocity.lerp(a,e*3)}else this.velocity.lerp(new M(0,0,0),e*3);else this.config.id==="hunter"?r>3?(i.normalize().multiplyScalar(this.config.speed*1.1),this.velocity.lerp(i,e*5)):this.velocity.set(0,0,0):r>15?(i.normalize().multiplyScalar(this.config.speed),this.velocity.lerp(i,e*4)):r<6?(i.normalize().multiplyScalar(-this.config.speed*.7),this.velocity.lerp(i,e*4)):this.velocity.lerp(new M(0,0,0),e*4)}updateSearching(e){const t=this.memory.lastKnownPlayerPos;if(!t){this.state="patrol";return}const n=t.clone().sub(this.position);if(n.y=0,n.length()<2){const i=this.stateTimer*.8,r=2+this.stateTimer*.5,a=t.clone().add(new M(Math.cos(i)*r,0,Math.sin(i)*r)),o=a.clone().sub(this.position);o.normalize().multiplyScalar(this.config.speed*.6),this.velocity.lerp(o,e*2),this.targetPos=a}else n.normalize().multiplyScalar(this.config.speed*.7),this.velocity.lerp(n,e*3),this.targetPos=t}canShoot(){return this.state==="combat"&&this.fireCooldown<=0&&this.detection>.8}onShoot(){this.fireCooldown=this.config.id==="sniper"?2.2:this.config.id==="heavy"?.18:.5}getDetectionLevel(){return this.detection}isAlive(){return this.character.health>0}}class Wp{constructor(){D(this,"enemies",[]);D(this,"spawnPressure",0);D(this,"lastReinforcement",0)}addEnemy(e){this.enemies.push(e)}removeEnemy(e){this.enemies=this.enemies.filter(t=>t!==e)}update(e,t){this.enemies.filter(i=>i.state==="combat").length>4?this.spawnPressure=Math.max(0,this.spawnPressure-e*.2):this.spawnPressure=Math.min(1,this.spawnPressure+e*.05),this.enemies=this.enemies.filter(i=>i.isAlive())}getEnemies(){return this.enemies}getCombatCount(){return this.enemies.filter(e=>e.state==="combat").length}}const Xp=[{id:"security",name:"Helix Security",faction:"HELIX",health:100,armor:20,damage:22,speed:3.2,detectionRange:28,hearingRange:14,fov:110,behavior:"patrol_guard",weapons:["vec_9","m9_tactical"],loot:["ammo_9mm","med_small"],description:"Standard armed unit. Holds position, calls backup.",color:2763310,scale:1},{id:"scout",name:"Ashen Scout",faction:"ASHEN",health:75,armor:0,damage:18,speed:5,detectionRange:32,hearingRange:18,fov:130,behavior:"flank_recon",weapons:["vec_9"],loot:["scrap","intel"],description:"Fast reconnaissance. Will flank and report.",color:5917234,scale:.95},{id:"heavy",name:"Vanguard Heavy",faction:"VANGUARD",health:220,armor:80,damage:38,speed:2.1,detectionRange:22,hearingRange:10,fov:90,behavior:"suppression_advance",weapons:["ar_41","sg_breach"],loot:["armor_plate","ammo_rifle"],description:"Armored unit. Soaks damage, pins you down.",color:3820122,scale:1.15},{id:"sniper",name:"Veil Marksman",faction:"VEIL",health:85,armor:10,damage:95,speed:2.8,detectionRange:65,hearingRange:8,fov:45,behavior:"long_range_hold",weapons:["sr_phantom"],loot:["ammo_sniper","intel_encrypted"],description:"Long-range threat. Relocates after shot.",color:3811914,scale:1},{id:"hunter",name:"Hunter",faction:"ASHEN",health:120,armor:15,damage:42,speed:4.6,detectionRange:20,hearingRange:22,fov:140,behavior:"aggressive_close",weapons:["sg_breach","knife_tactical"],loot:["scrap_rare"],description:"Aggressive close-range unit. Hunts in packs.",color:4864554,scale:1.05},{id:"commander",name:"Helix Commander",faction:"HELIX",health:150,armor:50,damage:30,speed:3,detectionRange:35,hearingRange:16,fov:120,behavior:"tactical_leader",weapons:["ar_41","m9_tactical"],loot:["keycard","intel_command"],description:"Tactical leader. Buffs nearby units, calls reinforcements.",color:1710626,scale:1.08}],fa={en:{"game.title":"BLACK VEIL","game.tagline":"THE CITY FORGOT. YOU DIDN'T.","menu.continue":"CONTINUE","menu.new_game":"NEW GAME","menu.load_game":"LOAD GAME","menu.missions":"MISSIONS","menu.inventory":"INVENTORY","menu.map":"MAP","menu.settings":"SETTINGS","menu.credits":"CREDITS","menu.exit":"EXIT","hud.health":"HEALTH","hud.armor":"ARMOR","hud.ammo":"AMMO","hud.objective":"OBJECTIVE","hud.stealth.hidden":"HIDDEN","hud.stealth.detected":"DETECTED","hud.stealth.combat":"COMBAT","hud.stealth.suspicious":"SUSPICIOUS","action.interact":"INTERACT","action.reload":"RELOAD","action.switch":"SWITCH","action.jump":"JUMP","action.crouch":"CROUCH","settings.graphics":"GRAPHICS","settings.audio":"AUDIO","settings.controls":"CONTROLS","settings.language":"LANGUAGE","settings.quality.low":"LOW","settings.quality.medium":"MEDIUM","settings.quality.high":"HIGH","settings.quality.ultra":"ULTRA","settings.quality.auto":"AUTO","mission.active":"ACTIVE MISSION","inventory.weapons":"WEAPONS","inventory.ammo":"AMMO","inventory.consumables":"CONSUMABLES","inventory.equip":"EQUIP","loading.tips.0":"Veyra went dark three years ago. Power, comms, transport — gone in 17 minutes.","loading.tips.1":"Helix Corp controlled 73% of Veyra infrastructure before the Blackout. Now they control the ruins.","loading.tips.2":"The Ashen network survives in shadows. They remember what the city forgot.","loading.tips.3":"Sound travels. Your footsteps can betray you. Move slow, stay hidden.","loading.tips.4":"Verticality is survival. Rooftops, maintenance shafts, underground — the city has layers.","faction.vanguard":"VANGUARD","faction.ashen":"ASHEN","faction.helix":"HELIX CORP","faction.veil":"VEIL","story.ch1.title":"CHAPTER 1: GHOSTS","credits.title":"CREDITS","credits.primary":"PRIMARY CREATOR","credits.youtube":"YouTube","credits.github":"GitHub","credits.tiktok":"TikTok","credits.contact":"Contact"},ar:{"game.title":"الحجاب الأسود","game.tagline":"المدينة نسيت. أنت لم تنس.","menu.continue":"متابعة","menu.new_game":"لعبة جديدة","menu.load_game":"تحميل اللعبة","menu.missions":"المهام","menu.inventory":"المخزون","menu.map":"الخريطة","menu.settings":"الإعدادات","menu.credits":"الاعتمادات","menu.exit":"خروج","hud.health":"الصحة","hud.armor":"الدرع","hud.ammo":"الذخيرة","hud.objective":"الهدف","hud.stealth.hidden":"مخفي","hud.stealth.detected":"مكتشف","hud.stealth.combat":"قتال","hud.stealth.suspicious":"مشبوه","action.interact":"تفاعل","action.reload":"إعادة تحميل","action.switch":"تبديل","action.jump":"قفز","action.crouch":"انحناء","settings.graphics":"الرسومات","settings.audio":"الصوت","settings.controls":"التحكم","settings.language":"اللغة","settings.quality.low":"منخفض","settings.quality.medium":"متوسط","settings.quality.high":"مرتفع","settings.quality.ultra":"فائق","settings.quality.auto":"تلقائي","mission.active":"المهمة النشطة","inventory.weapons":"الأسلحة","inventory.ammo":"الذخيرة","inventory.consumables":"المواد الاستهلاكية","inventory.equip":"تجهيز","loading.tips.0":"أظلمت فيرا قبل ثلاث سنوات. الطاقة، الاتصالات، النقل - اختفت في 17 دقيقة.","loading.tips.1":"سيطرت شركة هيليكس على 73٪ من البنية التحتية قبل الانقطاع. الآن تسيطر على الأنقاض.","loading.tips.2":"شبكة آشين تنجو في الظلال. يتذكرون ما نسيته المدينة.","loading.tips.3":"الصوت ينتقل. خطواتك يمكن أن تخونك. تحرك ببطء، ابق مخفيا.","loading.tips.4":"العمودية هي البقاء. أسطح المنازل، أعمدة الصيانة، تحت الأرض - المدينة لها طبقات.","faction.vanguard":"فانجارد","faction.ashen":"آشين","faction.helix":"هيليكس كورب","faction.veil":"فيل","story.ch1.title":"الفصل 1: الأشباح","credits.title":"الاعتمادات","credits.primary":"المنشئ الأساسي","credits.youtube":"يوتيوب","credits.github":"جيثب","credits.tiktok":"تيك توك","credits.contact":"اتصل"}};class qp{constructor(){D(this,"current","en");D(this,"listeners",new Set);const e=localStorage.getItem("bv_lang");e&&(e==="en"||e==="ar")?this.current=e:navigator.language.toLowerCase().startsWith("ar")&&(this.current="ar"),this.applyDir()}get lang(){return this.current}get isRTL(){return this.current==="ar"}t(e){return fa[this.current][e]??fa.en[e]??e}setLanguage(e){this.current=e,localStorage.setItem("bv_lang",e),this.applyDir(),this.listeners.forEach(t=>t(e))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}applyDir(){document.documentElement.lang=this.current,document.documentElement.dir=this.isRTL?"rtl":"ltr",document.body.style.fontFamily=this.isRTL?"'Noto Sans Arabic','Inter',sans-serif":"'Inter',sans-serif"}}const yn=new qp,Yp=[{id:"ch1_m1_entry",title:"Ghosts of Veyra",chapter:1,description:"Enter the dead city. Find the northern checkpoint.",longDescription:"Three years after the Blackout, you return to Veyra. Your sister Mara was last seen near Sector 7. The city is sealed, but you know a way in through the old service tunnel. Find the northern checkpoint and make contact with the Ashen network.",objectives:[{id:"reach_checkpoint",title:"Reach Northern Checkpoint",description:"Navigate through Central Street to the checkpoint",type:"reach",targetPos:{x:0,y:0,z:-80},required:1,current:0},{id:"avoid_patrols",title:"Avoid Detection",description:"Reach checkpoint without alerting Helix",type:"stealth",optional:!0},{id:"collect_intel",title:"Gather Intel",description:"Find 3 pieces of evidence about Mara",type:"collect",required:3,current:0}],rewards:{xp:500,currency:250,items:["m9_tactical"]},location:"Central Street",difficulty:"normal",nextMission:"ch1_m2_power"},{id:"ch1_m2_power",title:"Lights Out",chapter:1,description:"Restore partial power to the residential block.",longDescription:"The Ashen contact, Kael, tells you Mara was investigating the power grid failure. The residential block is in blackout - Helix locked it down. Restore power from the industrial yard substation to access her apartment.",objectives:[{id:"reach_substation",title:"Reach Substation",description:"Navigate to industrial yard",type:"reach",targetPos:{x:45,y:0,z:-20}},{id:"restore_power",title:"Restore Power Grid",description:"Activate 2 transformers and main breaker",type:"restore",required:3,current:0},{id:"defend_position",title:"Hold Position",description:"Defend substation during reboot sequence",type:"eliminate",required:6,current:0}],rewards:{xp:750,currency:400,items:["vec_9","flashlight"]},location:"Industrial Yard",difficulty:"normal",nextMission:"ch1_m3_apartment"},{id:"ch1_m3_apartment",title:"The Apartment",chapter:1,description:"Investigate Mara's apartment in the residential block.",longDescription:"Power restored. Mara's apartment is on the 4th floor, 7B. Kael warns: Helix swept the building yesterday. Something spooked them. Find what Mara left behind. The answer to the Blackout might be in her logs.",objectives:[{id:"infiltrate_building",title:"Infiltrate Residential Block",description:"Enter through rooftop or main entrance",type:"reach",targetPos:{x:-35,y:0,z:20}},{id:"find_apartment",title:"Locate Apartment 7B",description:"Search 4th floor",type:"investigate"},{id:"recover_logs",title:"Recover Data Drive",description:"Find Mara's encrypted drive",type:"collect",required:1},{id:"escape",title:"Escape",description:"Exfil via underground or rooftops",type:"extract"}],rewards:{xp:1e3,currency:600,items:["ar_41"]},location:"Residential Block",difficulty:"hard",nextMission:"ch1_m4_helix"},{id:"ch1_m4_helix",title:"Helix Tower",chapter:1,description:"Infiltrate Helix corporate building. Uncover the truth.",longDescription:"Mara's drive points to Helix Tower. Level 23, Server Room Delta. Project codename: BLACK VEIL. The Blackout wasn't failure. It was a test. Someone is still operating inside Veyra. You need to see it yourself.",objectives:[{id:"enter_tower",title:"Infiltrate Helix Tower",description:"Bypass security, avoid cameras",type:"stealth"},{id:"disable_security",title:"Disable Security Grid",description:"Hack 2 terminals to disable cameras",type:"interact",required:2},{id:"reach_server",title:"Reach Server Room Delta",description:"Level 23",type:"reach",targetPos:{x:0,y:23,z:60}},{id:"download_data",title:"Download Project Files",description:"Hold position while download completes",type:"restore",required:1}],rewards:{xp:1500,currency:1e3,items:["sr_phantom"]},location:"Corporate District",difficulty:"hard"}];class $p{constructor(){D(this,"missions",new Map);D(this,"activeMission",null);D(this,"objectiveProgress",new Map);D(this,"completedObjectives",new Set);D(this,"listeners",new Set);Yp.forEach(n=>this.missions.set(n.id,JSON.parse(JSON.stringify(n))));const e=gt.load(),t=e?.missions.activeMissionId||"ch1_m1_entry";this.activeMission=this.missions.get(t)||this.missions.get("ch1_m1_entry"),e?.missions.objectives&&Object.entries(e.missions.objectives).forEach(([n,i])=>{i&&this.completedObjectives.add(n)})}getActive(){return this.activeMission}getAll(){return Array.from(this.missions.values())}setActive(e){const t=this.missions.get(e);t&&(this.activeMission=t,this.emit(),gt.save({missions:{activeMissionId:e,completed:[],objectives:{},flags:{}}}))}updateObjective(e,t=1){if(!this.activeMission)return;const n=this.activeMission.objectives.find(a=>a.id===e);if(!n)return;const r=(this.objectiveProgress.get(e)||n.current||0)+t;this.objectiveProgress.set(e,r),n.current=r,n.required&&r>=n.required?(this.completedObjectives.add(e),n.completed=!0):!n.required&&r>=1&&(this.completedObjectives.add(e),n.completed=!0),this.emit(),this.checkMissionComplete(),gt.save({missions:{activeMissionId:this.activeMission.id,completed:[],objectives:Object.fromEntries(this.completedObjectives.entries()),flags:{}}})}completeObjective(e){this.updateObjective(e,999)}checkMissionComplete(){if(!this.activeMission)return;this.activeMission.objectives.filter(n=>!n.optional).every(n=>this.completedObjectives.has(n.id))&&(console.log(`[Mission] ${this.activeMission.title} completed`),this.activeMission.nextMission&&setTimeout(()=>this.setActive(this.activeMission.nextMission),2e3))}getProgress(){if(!this.activeMission)return{completed:0,total:0,percent:0};const e=this.activeMission.objectives.filter(n=>!n.optional).length,t=this.activeMission.objectives.filter(n=>!n.optional&&this.completedObjectives.has(n.id)).length;return{completed:t,total:e,percent:e?t/e:0}}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){this.listeners.forEach(e=>e(this.activeMission))}getObjectiveByPos(e,t=6){if(!this.activeMission)return null;for(const n of this.activeMission.objectives)if(n.targetPos&&!this.completedObjectives.has(n.id)){const i=n.targetPos.x-e.x,r=n.targetPos.z-e.z;if(Math.sqrt(i*i+r*r)<t)return n}return null}}const Lt=new $p,jp=[{id:"first_blood",title:"First Blood",description:"Eliminate your first hostile",icon:"◬",category:"combat",progress:0,maxProgress:1,unlocked:!1,xpReward:100},{id:"ghost",title:"Ghost of Veyra",description:"Complete a mission without being detected",icon:"⬔",category:"stealth",progress:0,maxProgress:1,unlocked:!1,xpReward:500},{id:"explorer",title:"Urban Explorer",description:"Discover all districts in Sector 7",icon:"⬡",category:"exploration",progress:0,maxProgress:7,unlocked:!1,xpReward:300},{id:"intel",title:"Truth Seeker",description:"Collect 10 pieces of intel about the Blackout",icon:"◍",category:"story",progress:0,maxProgress:10,unlocked:!1,xpReward:400},{id:"marksman",title:"Marksman",description:"Get 5 headshots",icon:"◎",category:"combat",progress:0,maxProgress:5,unlocked:!1,xpReward:250},{id:"hidden_cache",title:"Hidden Truth",description:"Find the hidden cache in Central",icon:"⬔",category:"exploration",progress:0,maxProgress:1,unlocked:!1,xpReward:350,hidden:!0},{id:"chapter1",title:"Ghosts of Veyra",description:"Complete Chapter 1",icon:"◬",category:"story",progress:0,maxProgress:1,unlocked:!1,xpReward:1e3},{id:"pacifist",title:"Shadow",description:"Complete a mission with 0 kills",icon:"⬔",category:"stealth",progress:0,maxProgress:1,unlocked:!1,xpReward:600,hidden:!0}];class Kp{constructor(){D(this,"achievements",new Map);D(this,"listeners",new Set);D(this,"stats",{kills:0,headshots:0,intelCollected:0,districtsDiscovered:new Set,missionsCompleted:0,stealthMissions:0,deaths:0,distanceTraveled:0,timePlayed:0});jp.forEach(e=>this.achievements.set(e.id,{...e})),this.load()}load(){try{const e=localStorage.getItem("bv_achievements");if(e){const n=JSON.parse(e);for(const[i,r]of Object.entries(n)){const a=this.achievements.get(i);a&&(a.progress=r.progress,a.unlocked=r.unlocked,a.unlockedAt=r.unlockedAt)}}const t=localStorage.getItem("bv_stats");if(t){const n=JSON.parse(t);this.stats={...this.stats,...n,districtsDiscovered:new Set(n.districtsDiscovered||[])}}}catch{}}save(){try{const e={};for(const[t,n]of this.achievements)e[t]={progress:n.progress,unlocked:n.unlocked,unlockedAt:n.unlockedAt};localStorage.setItem("bv_achievements",JSON.stringify(e)),localStorage.setItem("bv_stats",JSON.stringify({...this.stats,districtsDiscovered:Array.from(this.stats.districtsDiscovered)}))}catch{}}updateProgress(e,t=1){const n=this.achievements.get(e);!n||n.unlocked||(n.progress=Math.min(n.maxProgress,n.progress+t),n.progress>=n.maxProgress&&!n.unlocked&&this.unlock(e),this.save())}unlock(e){const t=this.achievements.get(e);!t||t.unlocked||(t.unlocked=!0,t.unlockedAt=Date.now(),t.progress=t.maxProgress,console.log(`[Achievement] Unlocked: ${t.title}`),this.listeners.forEach(n=>n(t)),this.save(),window.dispatchEvent(new CustomEvent("bv:achievement",{detail:t})))}addKill(e=!1){this.stats.kills++,e&&(this.stats.headshots++,this.updateProgress("marksman",1)),this.stats.kills===1&&this.unlock("first_blood"),this.save()}addIntel(){this.stats.intelCollected++,this.updateProgress("intel",1),this.save()}discoverDistrict(e){this.stats.districtsDiscovered.has(e)||(this.stats.districtsDiscovered.add(e),this.updateProgress("explorer",1),this.save())}completeMission(e=!1,t=0){this.stats.missionsCompleted++,e&&(this.stats.stealthMissions++,this.updateProgress("ghost",1)),t===0&&this.stats.missionsCompleted>0&&this.updateProgress("pacifist",1),this.stats.missionsCompleted>=4&&this.unlock("chapter1"),this.save()}findHiddenCache(){this.unlock("hidden_cache")}getAchievements(){return Array.from(this.achievements.values())}getStats(){return{...this.stats,districtsDiscovered:Array.from(this.stats.districtsDiscovered),totalDiscovered:this.stats.districtsDiscovered.size}}onUnlock(e){return this.listeners.add(e),()=>this.listeners.delete(e)}}const xt=new Kp,Jp={intro_kael:{id:"intro_kael",title:"Contact",start:"line1",lines:{line1:{id:"line1",speaker:"Kael",text:"You actually came back. I thought Veyra had taken everyone with any sense.",textAr:"لقد عدت فعلاً. ظننت أن فيرا أخذت كل من لديه عقل.",emotion:"neutral",next:"line2"},line2:{id:"line2",speaker:"Player",text:"Mara is here. I know it. Where was she last seen?",textAr:"مارا هنا. أعلم ذلك. أين شوهدت آخر مرة؟",emotion:"urgent",next:"line3"},line3:{id:"line3",speaker:"Kael",text:"Sector 7, near the old checkpoint. She was investigating the power grid. Said the Blackout wasn't random — it was a pattern.",textAr:"القطاع 7، بالقرب من نقطة التفتيش القديمة. كانت تحقق في شبكة الطاقة. قالت إن الانقطاع لم يكن عشوائياً — كان نمطاً.",emotion:"whisper",next:"choice1"},choice1:{id:"choice1",speaker:"Kael",text:"Helix locked down the residential block after she disappeared. If you want to find her apartment, you'll need to restore power from the industrial yard. You in?",textAr:"أغلقت هيليكس المبنى السكني بعد اختفائها. إذا كنت تريد العثور على شقتها، ستحتاج إلى استعادة الطاقة من الساحة الصناعية. هل أنت معنا؟",emotion:"neutral",choices:[{id:"yes",text:"I'm in. Tell me where.",textAr:"أنا معكم. أخبرني أين.",next:"line_yes",flags:{accepted_mission:!0}},{id:"more",text:"What did Mara find?",textAr:"ماذا وجدت مارا؟",next:"line_more"}]},line_yes:{id:"line_yes",speaker:"Kael",text:"Substation in the industrial yard. Two transformers and a main breaker. Helix patrols it now. Stay quiet, stay alive.",textAr:"محطة فرعية في الساحة الصناعية. محولان وقاطع رئيسي. تقوم هيليكس بدوريات هناك الآن. ابق هادئاً، ابق على قيد الحياة.",emotion:"urgent",next:"end"},line_more:{id:"line_more",speaker:"Kael",text:"She found logs. Helix was running something called BLACK VEIL during the Blackout. Not a failure — a test. 17 minutes. Too clean. Someone wanted Veyra dark.",textAr:"وجدت سجلات. كانت هيليكس تدير شيئاً يسمى الحجاب الأسود أثناء الانقطاع. ليس فشلاً — اختباراً. 17 دقيقة. نظيف جداً. شخص ما أراد فيرا مظلمة.",emotion:"whisper",next:"line_yes"},end:{id:"end",speaker:"Kael",text:"Good luck. The city forgot. You didn't.",textAr:"حظاً موفقاً. المدينة نسيت. أنت لم تنس.",emotion:"neutral"}}},helix_logs:{id:"helix_logs",title:"Helix Logs",start:"log1",lines:{log1:{id:"log1",speaker:"Helix Log",text:"[17:03:22] BLACK VEIL initiated. Grid sectors 1-7 disengaged.",textAr:"[17:03:22] تم بدء الحجاب الأسود. تم فصل قطاعات الشبكة 1-7.",emotion:"neutral",next:"log2"},log2:{id:"log2",speaker:"Helix Log",text:"[17:08:45] Comms blackout confirmed. Civilian evacuation protocol failed — intentional.",textAr:"[17:08:45] تم تأكيد انقطاع الاتصالات. فشل بروتوكول إخلاء المدنيين — متعمد.",emotion:"neutral",next:"log3"},log3:{id:"log3",speaker:"Helix Log",text:"[17:20:11] Veyra population: 2.1M → 0.3M estimated. Asset acquisition complete.",textAr:"[17:20:11] سكان فيرا: 2.1 مليون → 0.3 مليون تقديري. اكتمل الاستحواذ على الأصول.",emotion:"neutral",next:"log4"},log4:{id:"log4",speaker:"Mara",text:"If you find this — they didn't have a failure. They had a plan. BLACK VEIL is still active. Level 23, Helix Tower. Server Room Delta.",textAr:"إذا وجدت هذا — لم يكن لديهم فشل. كان لديهم خطة. الحجاب الأسود لا يزال نشطاً. المستوى 23، برج هيليكس. غرفة الخادم دلتا.",emotion:"urgent"}}}};class Zp{constructor(){D(this,"currentDialogue",null);D(this,"currentLineId",null);D(this,"isActive",!1);D(this,"history",[]);D(this,"flags",{});D(this,"listeners",new Set);this.loadFlags()}loadFlags(){try{const e=localStorage.getItem("bv_dialogue_flags");e&&(this.flags=JSON.parse(e))}catch{}}saveFlags(){try{localStorage.setItem("bv_dialogue_flags",JSON.stringify(this.flags))}catch{}}startDialogue(e){const t=Jp[e];return t?(this.currentDialogue=t,this.currentLineId=t.start,this.isActive=!0,this.showCurrentLine(),console.log(`[Dialogue] Started: ${e}`),!0):(console.warn(`[Dialogue] Not found: ${e}`),!1)}showCurrentLine(){if(!this.currentDialogue||!this.currentLineId){this.endDialogue();return}const e=this.currentDialogue.lines[this.currentLineId];if(!e){this.endDialogue();return}if(e.condition&&!this.flags[e.condition]){e.next?(this.currentLineId=e.next,this.showCurrentLine()):this.endDialogue();return}this.history.push(e),e.flags&&(Object.assign(this.flags,e.flags),this.saveFlags());const t=e.choices||null;if(this.listeners.forEach(n=>n(e,t)),!t&&e.next){const n=e.duration||e.text.length*50+1e3;setTimeout(()=>{this.isActive&&this.currentLineId===e.id&&(this.currentLineId=e.next,this.showCurrentLine())},Math.min(n,5e3))}else!t&&!e.next&&setTimeout(()=>this.endDialogue(),e.duration||3e3)}choose(e){if(!this.currentDialogue||!this.currentLineId)return;const t=this.currentDialogue.lines[this.currentLineId];if(!t.choices)return;const n=t.choices.find(i=>i.id===e);n&&(n.flags&&(Object.assign(this.flags,n.flags),this.saveFlags()),n.reputation&&console.log("[Dialogue] Reputation change:",n.reputation),this.currentLineId=n.next,this.showCurrentLine())}next(){if(!this.currentDialogue||!this.currentLineId)return;const e=this.currentDialogue.lines[this.currentLineId];e.choices||(e.next?(this.currentLineId=e.next,this.showCurrentLine()):this.endDialogue())}endDialogue(){this.isActive=!1,this.currentDialogue=null,this.currentLineId=null,this.listeners.forEach(e=>e(null,null)),console.log("[Dialogue] Ended")}isInDialogue(){return this.isActive}getCurrentLine(){return!this.currentDialogue||!this.currentLineId?null:this.currentDialogue.lines[this.currentLineId]||null}onLine(e){return this.listeners.add(e),()=>this.listeners.delete(e)}getFlag(e){return this.flags[e]}setFlag(e,t){this.flags[e]=t,this.saveFlags()}getHistory(){return[...this.history]}}const di=new Zp;class Qp{constructor(){D(this,"root");D(this,"hudEl",null);D(this,"menuEl",null);D(this,"currentScreen","menu");D(this,"isMenuOpen",!0);D(this,"dialogueEl",null);this.root=document.getElementById("ui-root"),this.createStyles(),this.setupDialogueListener()}createStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}setupDialogueListener(){window.addEventListener("bv:dialogueLine",e=>{const{line:t,choices:n}=e.detail;this.showDialogue(t,n)}),window.addEventListener("bv:dialogueEnd",()=>{this.hideDialogue()}),window.addEventListener("bv:achievement",e=>{this.showAchievementPopup(e.detail)})}showDialogue(e,t){this.currentScreen="dialogue",this.dialogueEl&&this.dialogueEl.remove();const n=document.createElement("div");n.className="ui-layer bv-dialogue";const i=yn.isRTL,r=i&&e.textAr?e.textAr:e.text;if(n.innerHTML=`
      <div class="bv-dialogue-box">
        <div class="bv-dialogue-speaker">${e.speaker} ${e.emotion?`• ${e.emotion.toUpperCase()}`:""}</div>
        <div class="bv-dialogue-text" dir="${i?"rtl":"ltr"}" style="font-family:${i?"'Noto Sans Arabic', sans-serif":"'Inter', sans-serif"}">${r}</div>
        ${t?`<div class="bv-dialogue-choices">${t.map(a=>{const o=i&&a.textAr?a.textAr:a.text;return`<button class="bv-dialogue-choice" data-choice="${a.id}" dir="${i?"rtl":"ltr"}">${o}</button>`}).join("")}</div>`:`<div style="margin-top:12px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; text-align:right;">[SPACE] Continue • [F] Next</div>`}
      </div>
    `,this.root.appendChild(n),this.dialogueEl=n,n.querySelectorAll("[data-choice]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.choice;di.choose(o)})}),!t){const a=()=>di.next();n.addEventListener("click",a);const o=l=>{(l.code==="Space"||l.code==="KeyF"||l.code==="Enter")&&(a(),window.removeEventListener("keydown",o))};window.addEventListener("keydown",o,{once:!0})}}hideDialogue(){this.dialogueEl&&(this.dialogueEl.remove(),this.dialogueEl=null),this.currentScreen==="dialogue"&&(this.currentScreen="hud")}showAchievementPopup(e){const t=document.createElement("div");t.className="bv-achievement-popup",t.innerHTML=`
      <div style="display:flex; gap:12px; align-items:center;">
        <div style="width:40px; height:40px; background:rgba(77,255,154,0.15); border:1px solid rgba(77,255,154,0.3); display:flex; align-items:center; justify-content:center; font-size:20px; border-radius:6px;">${e.icon}</div>
        <div>
          <div style="font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.15em; color:#4dff9a;">ACHIEVEMENT UNLOCKED</div>
          <div style="font-size:13px; color:#fff; margin-top:2px; font-weight:600;">${e.title}</div>
          <div style="font-size:11px; color:#8a8a9a; margin-top:2px;">${e.description}</div>
        </div>
      </div>
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),100),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),400)},4e3)}showMenu(){this.currentScreen="menu",this.isMenuOpen=!0,this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-menu";const t=gt.hasSave(),n=xt.getAchievements(),i=n.filter(o=>o.unlocked).length;e.innerHTML=`
      <div class="bv-menu-bg"></div>
      <div class="bv-menu-content">
        <div class="bv-menu-left">
          <div class="bv-logo">${yn.t("game.title")}</div>
          <div class="bv-tagline">${yn.t("game.tagline")}</div>
          <div class="bv-menu-items">
            ${t?`<div class="bv-menu-item primary" data-action="continue">▶ ${yn.t("menu.continue")}</div>`:""}
            <div class="bv-menu-item ${t?"":"primary"}" data-action="new">${t?yn.t("menu.new_game"):"▶ ENTER VEYRA"}</div>
            <div class="bv-menu-item" data-action="missions">MISSIONS • ${Lt.getAll().length}</div>
            <div class="bv-menu-item" data-action="inventory">INVENTORY • ${us.length} WEAPONS</div>
            <div class="bv-menu-item" data-action="achievements">ACHIEVEMENTS • ${i}/${n.length}</div>
            <div class="bv-menu-item" data-action="map">MAP • SECTOR 7</div>
            <div class="bv-menu-item" data-action="settings">${yn.t("menu.settings")}</div>
            <div class="bv-menu-item" data-action="credits">${yn.t("menu.credits")}</div>
            <div class="bv-menu-item" data-action="launcher" style="border-color:rgba(77,255,154,0.2); color:#4dff9a;">🚀 ONE-CLICK LAUNCHER</div>
            <div class="bv-menu-item" data-action="install" id="install-btn" style="display:none">📲 INSTALL GAME</div>
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
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${xt.getStats().kills}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">KILLS</div>
              </div>
              <div style="flex:1; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:8px; border-radius:4px; text-align:center;">
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${xt.getStats().intelCollected}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">INTEL</div>
              </div>
              <div style="flex:1; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:8px; border-radius:4px; text-align:center;">
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${xt.getStats().totalDiscovered}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">DISCOVERED</div>
              </div>
            </div>
          </div>
          <div class="bv-version" style="margin-top:20px;">BLACK VEIL v1.0.0 • BUILD 430e42e • M11 DEV • ELECTRON + PWA • ONE-CLICK LAUNCHER</div>
        </div>
      </div>
    `,this.root.appendChild(e),this.menuEl=e,e.querySelectorAll("[data-action]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.action;this.handleMenuAction(l)})});let r=null;window.addEventListener("beforeinstallprompt",o=>{o.preventDefault(),r=o;const l=document.getElementById("install-btn");l&&(l.style.display="block")});const a=document.getElementById("install-btn");a&&a.addEventListener("click",async()=>{r&&(r.prompt(),await r.userChoice,r=null,a.style.display="none")})}handleMenuAction(e){switch(e){case"continue":case"new":this.showHUD(),window.dispatchEvent(new CustomEvent("bv:startGame",{detail:{isNew:e==="new"}}));break;case"missions":this.showMissions();break;case"inventory":this.showInventory();break;case"achievements":this.showAchievements();break;case"map":this.showMap();break;case"settings":this.showSettings();break;case"credits":this.showCredits();break;case"launcher":this.showLauncherInfo();break}}showHUD(){this.currentScreen="hud",this.isMenuOpen=!1,this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-hud",e.innerHTML=`
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
    `,this.root.appendChild(e),this.hudEl=e,e.querySelector("#hud-map-btn")?.addEventListener("click",()=>this.showMap()),e.querySelector("#hud-inv-btn")?.addEventListener("click",()=>this.showInventory()),e.querySelector("#hud-photo-btn")?.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("bv:togglePhoto"))),e.querySelector("#hud-menu-btn")?.addEventListener("click",()=>this.showMenu()),Lt.onChange(n=>{if(!n)return;const i=document.getElementById("hud-obj-title"),r=document.getElementById("hud-obj-text"),a=document.getElementById("hud-obj-bar");if(i&&(i.textContent=n.title.toUpperCase()),r){const l=n.objectives.find(c=>!c.completed);r.textContent=l?l.title:"Mission Complete"}const o=Lt.getProgress();a&&(a.style.width=`${o.percent*100}%`)});const t=Lt.getActive();if(t){const n=document.getElementById("hud-obj-title"),i=document.getElementById("hud-obj-text");if(n&&(n.textContent=t.title.toUpperCase()),i){const r=t.objectives.find(a=>!a.completed);i.textContent=r?r.title:t.description}}}updateHUD(e){if(this.currentScreen!=="hud"&&this.currentScreen!=="dialogue")return;const t=document.getElementById("hud-health"),n=document.getElementById("hud-armor"),i=document.getElementById("hud-ammo-current"),r=document.getElementById("hud-ammo-reserve"),a=document.getElementById("hud-stealth"),o=document.getElementById("hud-stealth-text"),l=document.getElementById("hud-fps"),c=document.getElementById("hud-interact"),d=document.getElementById("hud-crosshair");t&&(t.style.width=`${e.health}%`),n&&(n.style.width=`${e.armor}%`),i&&(i.textContent=`${e.ammoCurrent}`),r&&(r.textContent=`/ ${e.ammoReserve} • ${e.weaponName}`),a&&(a.textContent=e.stealth,a.className=`bv-hud-stealth ${e.stealth!=="HIDDEN"?"visible":""}`,a.style.color=e.stealth==="COMBAT"?"#ff4d6a":e.stealth==="DETECTED"?"#ffb84d":"#4dff9a"),o&&(o.textContent=e.stealth),l&&(l.textContent=`${Math.round(e.fps)} FPS • ${e.frameTime.toFixed(1)}ms • ${e.quality} • P:Photo`),c&&(e.interact?(c.style.display="block",c.textContent=`[F] ${e.interact}`):c.style.display="none"),d&&(d.className=`bv-hud-crosshair ${e.isAiming?"aiming":""}`,d.style.opacity=e.isAiming?"0.9":"0.6")}showMissions(){this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-panel",e.style.padding="24px",e.style.overflowY="auto";const t=Lt.getAll();e.innerHTML=`
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
        <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; margin-bottom:10px; letter-spacing:0.1em;">WEAPONS • ${us.length} AVAILABLE • CLICK TO EQUIP</div>
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
    `,this.root.appendChild(e),e.querySelector("#inv-back")?.addEventListener("click",()=>this.showHUD()),window.dispatchEvent(new CustomEvent("bv:requestInventory"));const t=n=>{const{weapons:i,currentIndex:r,achievements:a,stats:o}=n.detail,l=e.querySelector("#inv-weapons"),c=e.querySelector("#inv-grid"),d=e.querySelector("#inv-stats"),p=e.querySelector("#inv-achievements");l.innerHTML=i.map((h,m)=>`
        <div class="bv-inv-item ${m===r?"equipped":""}" data-idx="${m}">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-family:Orbitron; font-size:11px; color:#fff; letter-spacing:0.05em;">${h.config.name}</div>
            <div style="font-size:9px; color:${m===r?"#6aa6ff":"#5a5a6a"};">${m===r?"● EQUIPPED":"○"}</div>
          </div>
          <div style="font-size:10px; color:#8a8a9a; margin-top:3px;">${h.config.category.toUpperCase()} • ${h.ammoInMag}/${h.reserve} • ${h.config.fireRate} RPM</div>
          <div style="font-size:9px; color:#5a5a6a; margin-top:3px; line-height:1.3;">${h.config.description}</div>
          <div style="margin-top:6px; height:2px; background:rgba(255,255,255,0.08); overflow:hidden; border-radius:1px;"><div style="height:100%; width:${h.ammoInMag/h.config.magazine*100}%; background:${h.ammoInMag<5?"#ff4d6a":"#6aa6ff"};"></div></div>
        </div>
      `).join(""),l.querySelectorAll("[data-idx]").forEach(h=>{h.addEventListener("click",()=>{const m=parseInt(h.dataset.idx);window.dispatchEvent(new CustomEvent("bv:equipWeapon",{detail:{index:m}})),this.showHUD()})}),c.innerHTML=i.map((h,m)=>`
        <div class="bv-inv-item ${m===r?"equipped":""}" data-idx="${m}">
          <div style="height:70px; background:rgba(255,255,255,0.02); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; border-radius:4px;">
            <div style="font-size:24px;">${h.config.category==="pistol"?"◬":h.config.category==="smg"?"⬔":h.config.category==="rifle"?"⬡":h.config.category==="shotgun"?"◍":h.config.category==="sniper"?"◎":"◫"}</div>
            <div style="font-family:Orbitron; font-size:8px; color:#5a5a6a;">${h.config.category.toUpperCase()}</div>
          </div>
          <div style="padding:8px 0 0 0;">
            <div style="font-size:11px; color:#fff; font-weight:600;">${h.config.name}</div>
            <div style="font-size:9px; color:#6aa6ff; margin-top:2px;">DMG ${h.config.damage} • RNG ${h.config.range}m • ${h.config.magazine} MAG</div>
            <div style="font-size:8px; color:#5a5a6a; margin-top:2px;">${h.config.fireModes.join("/").toUpperCase()}</div>
          </div>
        </div>
      `).join(""),c.querySelectorAll("[data-idx]").forEach(h=>{h.addEventListener("click",()=>{const m=parseInt(h.dataset.idx);window.dispatchEvent(new CustomEvent("bv:equipWeapon",{detail:{index:m}})),this.showHUD()})}),o&&(d.innerHTML=`
          Kills: <span style="color:#fff">${o.kills}</span> (Headshots: ${o.headshots})<br>
          Intel: <span style="color:#fff">${o.intelCollected}</span> • Districts: <span style="color:#fff">${o.totalDiscovered}/7</span><br>
          Missions: <span style="color:#fff">${o.missionsCompleted}</span> • Stealth: <span style="color:#fff">${o.stealthMissions}</span><br>
          Currency: <span style="color:#4dff9a">${gt.load()?.progression.currency||0} CR</span><br>
          Level: <span style="color:#6aa6ff">${gt.load()?.progression.level||1}</span> • XP: ${gt.load()?.progression.xp||0}
        `),a&&(p.innerHTML=`
          <div style="font-family:'Orbitron',monospace; font-size:10px; letter-spacing:0.15em; color:#4dff9a; margin-bottom:10px;">ACHIEVEMENTS • ${a.filter(h=>h.unlocked).length}/${a.length}</div>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px,1fr)); gap:8px;">
            ${a.map(h=>`
              <div style="background:${h.unlocked?"rgba(77,255,154,0.08)":"rgba(255,255,255,0.02)"}; border:1px solid ${h.unlocked?"rgba(77,255,154,0.2)":"rgba(255,255,255,0.06)"}; padding:8px 10px; border-radius:4px; opacity:${h.unlocked?1:.6};">
                <div style="display:flex; gap:8px; align-items:center;">
                  <div style="font-size:16px;">${h.icon}</div>
                  <div>
                    <div style="font-size:10px; color:${h.unlocked?"#4dff9a":"#fff"}; font-weight:600;">${h.title} ${h.unlocked?"✓":""}</div>
                    <div style="font-size:8px; color:#8a8a9a; margin-top:1px;">${h.description}</div>
                    <div style="margin-top:4px; height:2px; background:rgba(255,255,255,0.08); border-radius:1px;"><div style="height:100%; width:${h.progress/h.maxProgress*100}%; background:${h.unlocked?"#4dff9a":"#6aa6ff"};"></div></div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        `)};window.addEventListener("bv:inventoryData",t,{once:!0})}showAchievements(){this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-panel",e.style.padding="24px",e.style.overflowY="auto";const t=xt.getAchievements(),n=xt.getStats();e.innerHTML=`
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
          Level: ${gt.load()?.progression.level||1} • XP: ${gt.load()?.progression.xp||0}<br>
          Currency: ${gt.load()?.progression.currency||0} CR<br>
          Weapons: ${us.length} available<br>
          Save: ${gt.hasSave()?"Present":"None"}
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
        <h3 style="font-family:Orbitron; font-size:12px; letter-spacing:0.15em; color:#fff; margin-bottom:14px;">LOCATIONS • ${xt.getStats().totalDiscovered}/7 DISCOVERED</h3>
        <div id="map-locations" style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;"></div>
        <div style="background:rgba(106,166,255,0.06); border:1px solid rgba(106,166,255,0.12); padding:10px; border-radius:4px;">
          <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#6aa6ff; margin-bottom:4px;">SAFEHOUSE</div>
          <div style="font-size:11px; color:#e8e8ec;">-58, 15 — Ashen Hub</div>
          <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">Weapons • Map • Missions • Upgrades • Story</div>
        </div>
      </div>
    `,this.root.appendChild(e),e.querySelector("#map-back")?.addEventListener("click",()=>this.showHUD());const t=e.querySelector("#map-canvas-el"),n=t.getContext("2d");(()=>{t.width=t.clientWidth*window.devicePixelRatio,t.height=t.clientHeight*window.devicePixelRatio})();let r=0,a=0,o=1.3,l=!1,c=0,d=0;const p=[{name:"Central Street",x:0,z:-40,type:"street",discovered:!0,desc:"High-density urban, Helix patrols"},{name:"Residential Block",x:-38,z:22,type:"residential",discovered:!0,desc:"Apartments, Mara 7B, blackout"},{name:"Helix Tower",x:5,z:68,type:"corporate",discovered:!1,desc:"Corporate, security heavy, powered"},{name:"Industrial Yard",x:48,z:-20,type:"industrial",discovered:!0,desc:"Warehouses, containers, substation"},{name:"Safehouse",x:-58,z:15,type:"safehouse",discovered:!0,desc:"Ashen hub, your base"},{name:"Northern Checkpoint",x:0,z:-82,type:"objective",discovered:!0,desc:"Entry point, mission objective"},{name:"Substation",x:58,z:-4,type:"objective",discovered:!1,desc:"Power grid, restore for residential"},{name:"Hidden Cache",x:-48,z:-78,type:"secret",discovered:!1,desc:"Secret, Phantom SR"},{name:"Security Grid",x:5,z:58,type:"security",discovered:!1,desc:"Cameras, hack terminals"}],h=e.querySelector("#map-locations");h.innerHTML=p.map(f=>`
      <div style="padding:9px 10px; background:${f.discovered?"rgba(106,166,255,0.08)":"rgba(255,255,255,0.02)"}; border:1px solid ${f.discovered?"rgba(106,166,255,0.2)":"rgba(255,255,255,0.06)"}; border-radius:4px; cursor:pointer;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="font-size:11px; color:${f.discovered?"#fff":"#5a5a6a"}; font-weight:600;">${f.name}</div>
          <div style="font-size:8px; color:${f.discovered?"#4dff9a":"#5a5a6a"};">${f.discovered?"●":"○"}</div>
        </div>
        <div style="font-size:9px; color:#6a6a7a; margin-top:2px;">${f.type.toUpperCase()} • ${f.desc}</div>
      </div>
    `).join("");let m={x:0,z:0};window.addEventListener("bv:playerPos",f=>{m=f.detail});const g=()=>{if(!n)return;n.clearRect(0,0,t.width,t.height),n.save(),n.scale(window.devicePixelRatio,window.devicePixelRatio);const f=t.clientWidth,u=t.clientHeight;n.translate(f/2+r,u/2+a),n.scale(o,o),n.strokeStyle="rgba(255,255,255,0.035)",n.lineWidth=1;for(let S=-250;S<=250;S+=20)n.beginPath(),n.moveTo(S,-250),n.lineTo(S,250),n.stroke();for(let S=-250;S<=250;S+=20)n.beginPath(),n.moveTo(-250,S),n.lineTo(250,S),n.stroke();n.strokeStyle="rgba(106,166,255,0.08)",n.lineWidth=2,n.strokeRect(-60,-110,120,135),n.strokeRect(-75,-10,65,75),n.strokeRect(-20,40,50,50),p.forEach(S=>{let x="rgba(255,255,255,0.03)",T="rgba(255,255,255,0.08)",P=10;S.type==="objective"?(x="rgba(77,255,154,0.15)",T="rgba(77,255,154,0.4)",P=8):S.type==="secret"?(x="rgba(255,184,77,0.12)",T="rgba(255,184,77,0.35)",P=7):S.type==="safehouse"?(x="rgba(255,170,68,0.15)",T="rgba(255,170,68,0.4)",P=9):S.type==="security"?(x="rgba(0,229,255,0.12)",T="rgba(0,229,255,0.35)",P=7):S.discovered&&(x="rgba(106,166,255,0.06)",T="rgba(106,166,255,0.18)"),n.fillStyle=x,n.strokeStyle=T,n.lineWidth=S.discovered?1.5:1,n.beginPath(),n.arc(S.x,S.z,P,0,Math.PI*2),n.fill(),n.stroke(),S.discovered&&(n.fillStyle="#ffffff",n.font="bold 8px monospace",n.textAlign="center",n.fillText(S.name.split(" ")[0],S.x,S.z-P-6))}),n.fillStyle="#6aa6ff",n.shadowColor="#6aa6ff",n.shadowBlur=8,n.beginPath(),n.arc(m.x,m.z,4.5,0,Math.PI*2),n.fill(),n.shadowBlur=0,n.strokeStyle="#ffffff",n.lineWidth=1.5,n.stroke(),n.restore(),this.currentScreen==="map"&&requestAnimationFrame(g)};g(),t.addEventListener("mousedown",f=>{l=!0,c=f.clientX,d=f.clientY}),window.addEventListener("mouseup",()=>l=!1),window.addEventListener("mousemove",f=>{l&&(r+=f.clientX-c,a+=f.clientY-d,c=f.clientX,d=f.clientY)}),t.addEventListener("wheel",f=>{f.preventDefault(),o=Math.max(.35,Math.min(5,o*(f.deltaY<0?1.12:.88)))},{passive:!1});let v=0;t.addEventListener("touchstart",f=>{f.touches.length===1&&(l=!0,c=f.touches[0].clientX,d=f.touches[0].clientY),f.touches.length===2&&(v=Math.hypot(f.touches[0].clientX-f.touches[1].clientX,f.touches[0].clientY-f.touches[1].clientY))}),t.addEventListener("touchmove",f=>{if(f.preventDefault(),f.touches.length===1&&l&&(r+=f.touches[0].clientX-c,a+=f.touches[0].clientY-d,c=f.touches[0].clientX,d=f.touches[0].clientY),f.touches.length===2){const u=Math.hypot(f.touches[0].clientX-f.touches[1].clientX,f.touches[0].clientY-f.touches[1].clientY);v&&(o=Math.max(.35,Math.min(5,o*(u/v)))),v=u}},{passive:!1}),t.addEventListener("touchend",()=>{l=!1,v=0})}showSettings(){this.currentScreen="settings",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-settings";const t=qe.settings;e.innerHTML=`
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
    `,this.root.appendChild(e),e.querySelector("#settings-back")?.addEventListener("click",()=>this.showMenu()),e.querySelector("#set-quality")?.addEventListener("change",n=>qe.set("quality",n.target.value)),e.querySelector("#set-fps")?.addEventListener("change",n=>qe.set("fpsLimit",parseInt(n.target.value))),e.querySelector("#set-res")?.addEventListener("input",n=>qe.set("resolutionScale",parseFloat(n.target.value))),e.querySelector("#set-master")?.addEventListener("input",n=>qe.set("masterVolume",parseFloat(n.target.value))),e.querySelector("#set-music")?.addEventListener("input",n=>qe.set("musicVolume",parseFloat(n.target.value))),e.querySelector("#set-sfx")?.addEventListener("input",n=>qe.set("sfxVolume",parseFloat(n.target.value))),e.querySelector("#set-cam")?.addEventListener("input",n=>qe.set("cameraSensitivity",parseFloat(n.target.value))),e.querySelector("#set-aim")?.addEventListener("input",n=>qe.set("aimSensitivity",parseFloat(n.target.value))),e.querySelector("#set-gyro")?.addEventListener("click",n=>{const i=!qe.get("gyroEnabled");qe.set("gyroEnabled",i),n.target.textContent=i?"ENABLED":"DISABLED"}),e.querySelector("#set-touch")?.addEventListener("input",n=>qe.set("touchOpacity",parseFloat(n.target.value))),e.querySelector("#set-lang")?.addEventListener("change",n=>{const i=n.target.value;qe.set("language",i),yn.setLanguage(i),this.showSettings()}),e.querySelector("#set-sub")?.addEventListener("click",n=>{const i=!qe.get("subtitles");qe.set("subtitles",i),n.target.textContent=i?"ON":"OFF"}),e.querySelector("#settings-reset")?.addEventListener("click",()=>{qe.reset(),this.showSettings()}),e.querySelector("#settings-fullscreen")?.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}),e.querySelector("#set-layout")?.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("bv:editLayout")),this.showHUD()}),e.querySelector("#photo-btn")?.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("bv:togglePhoto")),this.showHUD()}),e.querySelector("#settings-launcher")?.addEventListener("click",()=>{window.open("start.html","_blank")})}showLauncherInfo(){this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-panel",e.style.padding="24px",e.style.overflowY="auto",e.innerHTML=`
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
    `,this.root.appendChild(e),e.querySelector("#credits-back")?.addEventListener("click",()=>this.showMenu())}showNotification(e,t=3500){const n=document.createElement("div");n.style.cssText="position:fixed; top:80px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.88); border:1px solid rgba(106,166,255,0.35); color:#fff; padding:12px 22px; font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:0.08em; z-index:100; pointer-events:none; transition:opacity 0.3s ease; border-radius:20px; backdrop-filter:blur(12px); max-width:90vw; text-align:center;",n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),300)},t)}isInMenu(){return this.isMenuOpen}}class em{constructor(e){D(this,"container");D(this,"moveJoystick");D(this,"lookArea");D(this,"buttons",new Map);D(this,"moveActive",!1);D(this,"moveStart",{x:0,y:0});D(this,"moveVector",{x:0,y:0});D(this,"lookActive",!1);D(this,"lookStart",{x:0,y:0});D(this,"editMode",!1);this.input=e,this.container=document.createElement("div"),this.container.id="touch-controls",this.container.style.cssText="position:fixed; inset:0; pointer-events:none; z-index:5; touch-action:none;",document.body.appendChild(this.container),this.createStyles(),this.moveJoystick=document.createElement("div"),this.moveJoystick.className="touch-joystick move",this.moveJoystick.innerHTML='<div class="joystick-base"><div class="joystick-stick"></div></div>',this.container.appendChild(this.moveJoystick),this.lookArea=document.createElement("div"),this.lookArea.className="touch-look-area",this.container.appendChild(this.lookArea),this.createActionButtons(),this.bindEvents(),this.applyOpacity(),qe.onChange(t=>{this.applyOpacity(),t.controlLayout&&this.applyLayout(t.controlLayout)})}createStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}createActionButtons(){const e=[{id:"fire",label:"FIRE",class:"fire"},{id:"aim",label:"AIM",class:"aim"},{id:"reload",label:"R",class:"reload"},{id:"jump",label:"JUMP",class:"jump"},{id:"crouch",label:"CROUCH",class:"crouch"},{id:"interact",label:"INTERACT",class:"interact"},{id:"switch",label:"SWAP",class:"switch"},{id:"melee",label:"MELEE",class:"melee"}];for(const t of e){const n=document.createElement("div");n.className=`touch-btn ${t.class}`,n.dataset.id=t.id,n.textContent=t.label,this.container.appendChild(n),this.buttons.set(t.id,n)}}bindEvents(){const e=this.moveJoystick.querySelector(".joystick-base"),t=this.moveJoystick.querySelector(".joystick-stick"),n=(a,o)=>{this.moveActive=!0,this.moveStart={x:a,y:o}},i=(a,o)=>{if(!this.moveActive)return;const l=a-this.moveStart.x,c=o-this.moveStart.y,d=Math.sqrt(l*l+c*c),p=48,h=Math.min(d,p),m=Math.atan2(c,l),g=Math.cos(m)*h,v=Math.sin(m)*h;t.style.transform=`translate(${g}px, ${v}px)`,this.moveVector={x:g/p,y:-v/p},this.input.setMoveVector(this.moveVector.x,this.moveVector.y)},r=()=>{this.moveActive=!1,t.style.transform="translate(0,0)",this.moveVector={x:0,y:0},this.input.setMoveVector(0,0)};e.addEventListener("touchstart",a=>{a.preventDefault(),n(a.touches[0].clientX,a.touches[0].clientY)},{passive:!1}),e.addEventListener("touchmove",a=>{a.preventDefault(),i(a.touches[0].clientX,a.touches[0].clientY)},{passive:!1}),e.addEventListener("touchend",a=>{a.preventDefault(),r()},{passive:!1}),e.addEventListener("mousedown",a=>{n(a.clientX,a.clientY)}),window.addEventListener("mousemove",a=>{this.moveActive&&i(a.clientX,a.clientY)}),window.addEventListener("mouseup",()=>{this.moveActive&&r()}),this.lookArea.addEventListener("touchstart",a=>{a.preventDefault(),this.lookActive=!0,this.lookStart={x:a.touches[0].clientX,y:a.touches[0].clientY}},{passive:!1}),this.lookArea.addEventListener("touchmove",a=>{if(a.preventDefault(),!this.lookActive)return;const o=a.touches[0].clientX-this.lookStart.x,l=a.touches[0].clientY-this.lookStart.y,c=qe.get("cameraSensitivity")*.003;this.input.setLookVector(-o*c,-l*c),this.lookStart={x:a.touches[0].clientX,y:a.touches[0].clientY}},{passive:!1}),this.lookArea.addEventListener("touchend",a=>{a.preventDefault(),this.lookActive=!1},{passive:!1}),this.buttons.forEach((a,o)=>{const l=c=>{switch(o){case"fire":this.input.state.fire=c;break;case"aim":this.input.state.aim=c;break;case"reload":c&&(this.input.state.reload=!0);break;case"jump":c&&(this.input.state.jump=!0);break;case"crouch":this.input.state.crouch=c;break;case"interact":this.input.state.interact=c;break;case"switch":c&&(this.input.state.switchWeapon=1);break;case"melee":c&&(this.input.state.melee=!0);break}};a.addEventListener("touchstart",c=>{c.preventDefault(),l(!0)},{passive:!1}),a.addEventListener("touchend",c=>{c.preventDefault(),l(!1),(o==="reload"||o==="jump"||o==="melee"||o==="switch")&&setTimeout(()=>l(!1),100)},{passive:!1}),a.addEventListener("mousedown",()=>l(!0)),a.addEventListener("mouseup",()=>l(!1))}),window.addEventListener("bv:editLayout",()=>this.enterEditMode()),this.initGyro()}initGyro(){if(!("DeviceOrientationEvent"in window))return;let e=qe.get("gyroEnabled");qe.onChange(n=>e=n.gyroEnabled),window.addEventListener("deviceorientation",n=>{if(!e||n.beta===null||n.gamma===null)return;const i=qe.get("gyroSensitivity")*5e-4,r=(n.gamma||0)*i,a=(n.beta||0)*i*.5;(Math.abs(r)>1e-4||Math.abs(a)>1e-4)&&this.input.setLookVector(r,a)});const t=document.createElement("button");t.textContent="ENABLE GYRO",t.className="bv-button",t.style.cssText="position:fixed; bottom:100px; left:50%; transform:translateX(-50%); z-index:20; display:none; pointer-events:auto;",document.body.appendChild(t),t.addEventListener("click",async()=>{try{const n=DeviceOrientationEvent;n.requestPermission&&await n.requestPermission()==="granted"&&(qe.set("gyroEnabled",!0),t.style.display="none")}catch{}}),typeof DeviceOrientationEvent.requestPermission=="function"&&(t.style.display="block")}applyOpacity(){const e=qe.get("touchOpacity");this.container.style.opacity=`${e}`}applyLayout(e){if(e)for(const[t,n]of Object.entries(e)){const i=this.buttons.get(t);if(i&&n&&typeof n=="object"){const r=n;r.x!==void 0&&(i.style.left=r.x+"px"),r.y!==void 0&&(i.style.top=r.y+"px"),r.right!==void 0&&(i.style.right=r.right+"px"),r.bottom!==void 0&&(i.style.bottom=r.bottom+"px")}}}enterEditMode(){if(this.editMode)return;this.editMode=!0,this.container.classList.add("touch-controls-edit");const e=document.createElement("div");e.className="touch-edit-panel",e.innerHTML=`
      <span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#fff;">DRAG BUTTONS TO REPOSITION • PINCH TO RESIZE</span>
      <div style="display:flex; gap:8px;">
        <button class="bv-button" id="edit-reset" style="padding:6px 12px; font-size:10px;">RESET</button>
        <button class="bv-button" id="edit-save" style="padding:6px 12px; font-size:10px;">SAVE</button>
      </div>
    `,document.body.appendChild(e);let t=null,n={x:0,y:0};const i=o=>{o.style.pointerEvents="auto";const l=(c,d)=>{t=o;const p=o.getBoundingClientRect();n={x:c-p.left,y:d-p.top}};o.addEventListener("touchstart",c=>{c.preventDefault(),l(c.touches[0].clientX,c.touches[0].clientY)},{passive:!1}),o.addEventListener("mousedown",c=>l(c.clientX,c.clientY))};this.buttons.forEach(i),i(this.moveJoystick);const r=(o,l)=>{t&&(t.style.left=o-n.x+"px",t.style.top=l-n.y+"px",t.style.right="auto",t.style.bottom="auto")},a=()=>{t=null};window.addEventListener("touchmove",o=>{t&&(o.preventDefault(),r(o.touches[0].clientX,o.touches[0].clientY))},{passive:!1}),window.addEventListener("mousemove",o=>{t&&r(o.clientX,o.clientY)}),window.addEventListener("touchend",a),window.addEventListener("mouseup",a),e.querySelector("#edit-reset")?.addEventListener("click",()=>{qe.set("controlLayout",null),location.reload()}),e.querySelector("#edit-save")?.addEventListener("click",()=>{const o={};this.buttons.forEach((c,d)=>{const p=c.getBoundingClientRect();o[d]={x:p.left,y:p.top}});const l=this.moveJoystick.getBoundingClientRect();o.move={x:l.left,y:l.top},qe.set("controlLayout",o),e.remove(),this.container.classList.remove("touch-controls-edit"),this.editMode=!1})}setVisible(e){this.container.style.display=e?"block":"none"}}class tm{constructor(){D(this,"tasks",new Map);D(this,"listeners",new Set)}register(e,t,n=1){this.tasks.set(e,{id:e,progress:0,total:n,label:t}),this.emit()}update(e,t){const n=this.tasks.get(e);n&&(n.progress=t,this.emit())}complete(e){const t=this.tasks.get(e);t&&(t.progress=t.total,this.emit())}getProgress(){if(this.tasks.size===0)return 0;let e=0,t=0;for(const n of this.tasks.values())e+=n.progress,t+=n.total;return t?e/t:0}getCurrentLabel(){let e="";for(const t of this.tasks.values())t.progress<t.total&&(e=t.label);return e||"READY"}onProgress(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){const e=this.getProgress(),t=this.getCurrentLabel();this.listeners.forEach(n=>n(e,t))}async loadTextureFromCanvas(e,t,n){const i=document.createElement("canvas");i.width=e,i.height=t;const r=i.getContext("2d");return n(r),i}}const ds=new tm;class nm{constructor(e){D(this,"scene");D(this,"pool",[]);D(this,"active",[]);D(this,"decalPool",[]);D(this,"decals",[]);this.scene=e;for(let t=0;t<30;t++){const n=new pn(.05,6,6),i=new un({color:16777215,transparent:!0,opacity:0}),r=new q(n,i);this.pool.push(r)}}spawn(e){let t;if(this.pool.length>0)t=this.pool.pop();else{const r=new pn(.05,6,6),a=new un({color:16777215,transparent:!0,opacity:0});t=new q(r,a)}const n=e.color??16755268;t.material.color.setHex(n),t.material.opacity=.9,t.position.copy(e.position),t.scale.setScalar(e.scale??1),t.visible=!0,this.scene.add(t);const i=e.direction?e.direction.clone().multiplyScalar(2+Math.random()*3):void 0;return e.type==="spark"&&i&&(i.y+=Math.random()*2),this.active.push({mesh:t,life:e.lifetime??(e.type==="muzzle"?.08:e.type==="impact"?.15:.6),maxLife:e.lifetime??.6,velocity:i}),(e.type==="bulletHole"||e.type==="impact")&&this.spawnDecal(e.position,e.direction,e.color),t}spawnDecal(e,t,n){if(this.decals.length>80){const o=this.decals.shift();o&&this.scene.remove(o)}const i=new wr(.08+Math.random()*.05,8),r=new un({color:n??3355443,transparent:!0,opacity:.7,side:Bt,depthWrite:!1}),a=new q(i,r);if(a.position.copy(e),t){const o=e.clone().add(t);a.lookAt(o),a.position.add(t.clone().multiplyScalar(.01))}a.rotation.z=Math.random()*Math.PI*2,this.scene.add(a),this.decals.push(a),setTimeout(()=>{r.opacity=0,setTimeout(()=>{this.scene.remove(a);const o=this.decals.indexOf(a);o>=0&&this.decals.splice(o,1)},1e3)},3e4)}spawnMuzzleFlash(e,t){this.spawn({type:"muzzle",position:e,direction:t,color:16763972,scale:1.5,lifetime:.06});for(let n=0;n<3;n++){const i=t.clone().add(new M((Math.random()-.5)*.5,(Math.random()-.5)*.5,(Math.random()-.5)*.5)).normalize();this.spawn({type:"spark",position:e.clone(),direction:i,color:16755268,scale:.3+Math.random()*.4,lifetime:.2+Math.random()*.3})}}spawnImpact(e,t,n="concrete"){const i={concrete:11184810,metal:16755268,flesh:16731498};if(this.spawn({type:"impact",position:e,direction:t,color:i[n],scale:1,lifetime:.15}),this.spawn({type:"bulletHole",position:e,direction:t,color:2236962,scale:1,lifetime:0}),n==="concrete")for(let r=0;r<4;r++){const a=t.clone().add(new M(Math.random()-.5,Math.random()-.5,Math.random()-.5)).normalize();this.spawn({type:"dust",position:e.clone(),direction:a,color:8947848,scale:.5+Math.random(),lifetime:.6+Math.random()*.6})}if(n==="metal")for(let r=0;r<6;r++){const a=t.clone().add(new M(Math.random()-.5,Math.random()-.5,Math.random()-.5)).normalize();this.spawn({type:"spark",position:e.clone(),direction:a,color:16755268,scale:.4,lifetime:.3})}}update(e){for(let t=this.active.length-1;t>=0;t--){const n=this.active[t];n.life-=e,n.velocity&&(n.mesh.position.add(n.velocity.clone().multiplyScalar(e)),n.velocity.y-=4*e,n.velocity.multiplyScalar(.98));const i=n.life/n.maxLife;n.mesh.material.opacity=i*.9,n.mesh.scale.multiplyScalar(.995),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.material.opacity=0,this.pool.push(n.mesh),this.active.splice(t,1))}}clear(){for(const e of this.active)this.scene.remove(e.mesh);this.active=[];for(const e of this.decals)this.scene.remove(e);this.decals=[]}}class im{constructor(e){D(this,"cameras",[]);D(this,"terminals",[]);D(this,"scene");D(this,"alarmLevel","normal");D(this,"alarmTimer",0);this.scene=e}addCamera(e,t,n){const i=new Wt,r=new ge(.3,.2,.4),a=new Se({color:1710622,roughness:.6,metalness:.4}),o=new q(r,a);i.add(o);const l=new mt(.08,.08,.15,12);l.rotateX(Math.PI/2);const c=new Se({color:1118481,roughness:.2,metalness:.8}),d=new q(l,c);d.position.z=.25,i.add(d);const p=new pn(.03,6,6),h=new Se({color:16711680,emissive:16711680,emissiveIntensity:.8}),m=new q(p,h);m.position.set(.12,.08,.15),m.name="led",i.add(m),i.position.copy(e),i.rotation.copy(t),this.scene.add(i);const g=new Ep(16729156,.5,15,Math.PI/6,.5,1);g.position.copy(e),g.target.position.copy(e.clone().add(new M(0,0,-5).applyEuler(t))),this.scene.add(g),this.scene.add(g.target);const v={id:n,position:e.clone(),rotation:t.clone(),fov:60,range:18,isActive:!0,isAlerted:!1,mesh:i,light:g};return this.cameras.push(v),v}addTerminal(e,t,n){const i=new ge(.6,1.2,.4),r=new Se({color:2767434,emissive:43775,emissiveIntensity:.2,roughness:.6}),a=new q(i,r);a.position.copy(e),a.castShadow=!0,this.scene.add(a);const o=new yt(.5,.35),l=document.createElement("canvas");l.width=256,l.height=160;const c=l.getContext("2d");c.fillStyle="#001122",c.fillRect(0,0,256,160),c.fillStyle="#00ff88",c.font="12px monospace",c.fillText("HELIX SECURE",10,20),c.fillStyle="#ffaa00",c.fillText("CAMERAS: "+t.length,10,40),c.fillStyle="#ffffff",c.font="10px monospace",c.fillText("[F] HACK",10,140);const d=new fi(l),p=new un({map:d}),h=new q(o,p);h.position.set(0,.15,.21),a.add(h);const m={id:n,position:e.clone(),controls:t,isHacked:!1,mesh:a};return this.terminals.push(m),m}update(e,t,n){this.alarmLevel!=="normal"&&(this.alarmTimer-=e,this.alarmTimer<=0&&this.setAlarmLevel("normal"));for(const i of this.cameras){if(!i.isActive)continue;i.mesh.rotation.y+=Math.sin(Date.now()*3e-4+i.position.x)*e*.3;const r=t.clone().sub(i.position),a=r.length();if(a<i.range){if(new M(0,0,-1).applyEuler(i.mesh.rotation).angleTo(r.clone().normalize())<i.fov*Math.PI/180*.5&&a*(n?.6:1)<i.range*.8){i.isAlerted=!0;const d=i.mesh.getObjectByName("led");d&&(d.material.color.setHex(16711680),d.material.emissive.setHex(16711680)),i.light&&(i.light.color.setHex(16711680),i.light.intensity=1.2),this.triggerAlarm("alert")}}else if(i.isAlerted&&a>i.range*1.5){i.isAlerted=!1;const o=i.mesh.getObjectByName("led");o&&(o.material.color.setHex(65280),o.material.emissive.setHex(65280)),i.light&&(i.light.color.setHex(4521796),i.light.intensity=.3)}}}hackTerminal(e){const t=this.terminals.find(n=>n.id===e);if(!t||t.isHacked)return!1;t.isHacked=!0,t.mesh.material.emissive.setHex(5111706),t.mesh.material.emissiveIntensity=.5;for(const n of t.controls){const i=this.cameras.find(r=>r.id===n);if(i){i.isActive=!1,i.isAlerted=!1;const r=i.mesh.getObjectByName("led");r&&(r.material.color.setHex(3355443),r.material.emissive.setHex(0)),i.light&&(i.light.intensity=0),i.mesh.traverse(a=>{a.isMesh&&(a.material.transparent=!0,a.material.opacity=.3)})}}return!0}triggerAlarm(e){const t=["normal","suspicious","alert","lockdown","reinforcements"],n=t.indexOf(this.alarmLevel);return t.indexOf(e)>n?(this.alarmLevel=e,this.alarmTimer=e==="alert"?20:e==="lockdown"?40:e==="reinforcements"?60:15,console.log(`[Security] Alarm level: ${e}`),!0):!1}setAlarmLevel(e){this.alarmLevel=e,e==="normal"&&(this.alarmTimer=0)}getAlarmLevel(){return this.alarmLevel}getCameras(){return this.cameras}getTerminals(){return this.terminals}getNearestTerminal(e,t=4){let n=null,i=t;for(const r of this.terminals){const a=r.position.distanceTo(e);a<i&&!r.isHacked&&(i=a,n=r)}return n}}class sm{constructor(e){D(this,"renderer");D(this,"input");D(this,"playerController");D(this,"cameraSystem");D(this,"world");D(this,"playerCharacter");D(this,"weaponSystem");D(this,"ui");D(this,"touchControls");D(this,"aiDirector");D(this,"vfxSystem");D(this,"securitySystem");D(this,"enemies",[]);D(this,"clock",new Cp);D(this,"isRunning",!1);D(this,"isGameStarted",!1);D(this,"interactables",[]);D(this,"loot",[]);D(this,"raycaster",new Rp);D(this,"lastShootState",!1);D(this,"stealthState","HIDDEN");D(this,"playerPosHistory",[]);D(this,"timePlayed",0);D(this,"photoMode",!1);D(this,"animate",()=>{if(!this.isRunning)return;requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.033);if(this.timePlayed+=e,this.renderer.beginFrame(),this.isGameStarted&&!this.photoMode){this.playerController.update(e,this.renderer.camera),this.playerCharacter.group.position.copy(this.playerController.position),this.playerCharacter.group.rotation.y=this.playerController.yaw,this.playerCharacter.update(e,this.playerController.moveState,this.playerController.yaw),this.cameraSystem.update(e,this.playerController.getCameraTarget(),this.playerController.yaw,this.playerController.pitch,this.playerController.isAiming,this.playerController.isCrouching),this.weaponSystem.update(e),this.handleShooting(e);const t=this.playerController.getPosition(),n={isCrouching:this.playerController.isCrouching,isSprinting:this.playerController.isSprinting,isShooting:this.lastShootState};for(const r of this.enemies)if(r.update(e,t,this.playerController.velocity,n,this.world.colliders,this.enemies),r.canShoot()){r.onShoot();const a=r.position.distanceTo(t);if(a<r.config.detectionRange&&Math.random()<.65){const o=Math.max(.08,1-a/45);if(Math.random()<o*.32){const l=this.playerController.takeDamage(r.config.damage*.16);this.cameraSystem.addShake(.35,8),this.vfxSystem.spawnImpact(t.clone().add(new M(0,1.2,0)),new M(0,0,1),"flesh"),l&&(this.ui.showNotification("DOWNED — RESTARTING AT SAFEHOUSE",3500),xt.getStats().deaths++,setTimeout(()=>{this.playerController.position.set(-58,.1,15),this.playerController.stats.health=100,this.playerController.stats.armor=30},2e3))}}}this.aiDirector.update(e,t),this.securitySystem.update(e,t,this.playerController.isCrouching),this.vfxSystem.update(e),this.updateLootAnimation(e),this.updateMissions(),this.updateStealthState();const i=this.weaponSystem.getCurrent();this.ui.updateHUD({health:this.playerController.stats.health,armor:this.playerController.stats.armor,ammoCurrent:i?.ammoInMag??0,ammoReserve:i?.reserve??0,weaponName:i?.config.name??"UNARMED",stealth:this.stealthState,fps:this.renderer.getStats().fps,frameTime:this.renderer.getStats().frameTime,quality:qe.get("quality").toUpperCase()+(qe.get("quality")==="auto"?`:${["LOW","MED","HIGH","ULTRA"][this.renderer.getAdaptiveLevel()]}`:""),interact:this.checkInteractionPrompt(),isAiming:this.playerController.isAiming}),window.dispatchEvent(new CustomEvent("bv:playerPos",{detail:{x:t.x,z:t.z}})),this.playerPosHistory.push(t.clone()),this.playerPosHistory.length>100&&this.playerPosHistory.shift(),at.setListenerPosition(t,new M(0,0,-1).applyAxisAngle(new M(0,1,0),this.playerController.yaw))}else if(this.photoMode){const t=this.input.consumeLook();t.lengthSq()>0&&(this.renderer.camera.rotation.y-=t.x,this.renderer.camera.rotation.x+=t.y);const n=this.input.state.move;if(n.lengthSq()>0){const i=new M(0,0,-1).applyQuaternion(this.renderer.camera.quaternion),r=new M(1,0,0).applyQuaternion(this.renderer.camera.quaternion);this.renderer.camera.position.addScaledVector(i,n.y*.15),this.renderer.camera.position.addScaledVector(r,n.x*.15)}}this.renderer.render(),this.renderer.endFrame(e),this.input.resetTransient()});this.canvas=e,this.renderer=new Dp(e),this.input=new Ip(e),this.playerController=new Np(this.input),this.world=new Bp(this.renderer.scene),this.playerCharacter=new zp,this.weaponSystem=new Gp,this.cameraSystem=new Op(this.renderer.camera,this.world.colliders),this.ui=new Qp,this.touchControls=new em(this.input),this.aiDirector=new Wp,this.vfxSystem=new nm(this.renderer.scene),this.securitySystem=new im(this.renderer.scene),this.setupEventListeners(),this.initLoading()}setupEventListeners(){window.addEventListener("bv:startGame",e=>{e.detail?.isNew&&(gt.deleteSave(),localStorage.removeItem("bv_achievements"),localStorage.removeItem("bv_stats"),localStorage.removeItem("bv_dialogue_flags")),this.startGame()}),window.addEventListener("bv:requestInventory",()=>{window.dispatchEvent(new CustomEvent("bv:inventoryData",{detail:{weapons:this.weaponSystem.weapons,currentIndex:this.weaponSystem.currentIndex,achievements:xt.getAchievements(),stats:xt.getStats()}}))}),window.addEventListener("bv:equipWeapon",e=>{this.weaponSystem.setWeaponIndex(e.detail.index),this.updateWeaponMesh()}),window.addEventListener("keydown",e=>{this.isGameStarted&&(e.code==="KeyF"&&this.tryInteract(),e.code==="KeyR"&&this.weaponSystem.startReload(),e.code==="KeyP"&&this.togglePhotoMode(),e.code==="KeyT"&&e.ctrlKey&&(e.preventDefault(),di.startDialogue("intro_kael")))}),document.addEventListener("dblclick",()=>{!document.fullscreenElement&&!this.ui.isInMenu()&&document.documentElement.requestFullscreen().catch(()=>{})}),window.addEventListener("bv:achievement",e=>{const t=e.detail;this.ui.showNotification(`🏆 ${t.title}: ${t.description} (+${t.xpReward} XP)`,4e3),at.playProceduralSound("ui_click")}),di.onLine((e,t)=>{e?window.dispatchEvent(new CustomEvent("bv:dialogueLine",{detail:{line:e,choices:t}})):window.dispatchEvent(new CustomEvent("bv:dialogueEnd"))}),window.addEventListener("bv:togglePhoto",()=>this.togglePhotoMode())}async initLoading(){const e=document.getElementById("loading-bar"),t=document.getElementById("loading-status"),n=document.getElementById("loading-screen"),i=document.getElementById("loading-tip"),r=["Veyra went dark three years ago. Power, comms, transport — gone in 17 minutes. Official story: infrastructure failure. The evidence says otherwise.","Helix Corp controlled 73% of Veyra infrastructure before the Blackout. Now they control the ruins.","The Ashen network survives in shadows. They remember what the city forgot.","Sound travels. Your footsteps can betray you. Move slow, stay hidden.","Verticality is survival. Rooftops, maintenance shafts, underground — the city has layers.","Project BLACK VEIL wasn't a failure. It was a test. 17 minutes. Too clean.","Your sister Mara knew. Now she's missing. Level 23, Helix Tower, Server Room Delta.","Security cameras have blind spots. Find the terminals. Hack the grid.","Safehouse at -58, 15 — Ashen turned an apartment into a hub. Weapons, map, missions.","Headshots do 2.2x damage. But sometimes silence is deadlier than bullets."],a=[{id:"world",label:"BUILDING VEYRA DISTRICTS — 7 zones, safehouse, security grid",duration:700},{id:"player",label:"INITIALIZING OPERATIVE — tactical rig, parkour, stamina",duration:350},{id:"weapons",label:"LOADING ARSENAL — 6 weapons, attachments, VFX",duration:450},{id:"ai",label:"SIMULATING HOSTILES — 6 archetypes, squad AI, director",duration:600},{id:"security",label:"ARMING SECURITY — cameras, terminals, alarm escalation",duration:300},{id:"vfx",label:"CALIBRATING VFX — bullet holes, sparks, dust, decals",duration:250},{id:"audio",label:"CALIBRATING AUDIO — procedural SFX, adaptive music, radio",duration:250},{id:"achievements",label:"LOADING PROGRESSION — achievements, stats, dialogue",duration:200},{id:"final",label:"ENTERING BLACKOUT ZONE — Sector 7 awaits",duration:350}];let o=0;const l=setInterval(()=>{o=(o+1)%r.length,i&&(i.style.opacity="0",setTimeout(()=>{i.textContent=r[o],i.style.opacity="0.7"},300))},3e3);for(const c of a)ds.register(c.id,c.label),t&&(t.textContent=c.label),await new Promise(d=>{let p=0;const h=setInterval(()=>{p+=.06,p>=1?(clearInterval(h),ds.complete(c.id),d()):ds.update(c.id,p);const m=ds.getProgress();e&&(e.style.width=`${m*100}%`)},c.duration/18)});clearInterval(l),await this.world.buildDistrict(),this.playerController.setColliders(this.world.colliders),this.cameraSystem.setColliders(this.world.colliders),this.renderer.scene.add(this.playerCharacter.group),this.weaponSystem.addWeapon("m9_tactical"),this.weaponSystem.addWeapon("vec_9"),this.updateWeaponMesh(),this.spawnEnemies(),this.setupSecurity(),this.setupInteractables(),setTimeout(()=>{n&&(n.style.opacity="0",setTimeout(()=>n.style.display="none",600)),this.ui.showMenu(),at.setMusicState("exploration"),localStorage.getItem("bv_launcher_shown")||setTimeout(()=>{this.ui.showNotification("💡 TIP: Use Black-Veil.bat (Windows) or Black-Veil.sh (Linux/Mac) or node launch.mjs for one-click launch",5e3),localStorage.setItem("bv_launcher_shown","1")},1e3)},600)}updateWeaponMesh(){const e=this.playerCharacter.getWeaponSocket();for(;e.children.length;)e.remove(e.children[0]);const t=this.weaponSystem.getCurrent();t&&(t.mesh.position.set(0,0,0),t.mesh.rotation.set(0,0,0),t.config.category==="pistol"?(t.mesh.position.set(.05,-.05,.15),t.mesh.rotation.y=-.1):t.config.category==="smg"||t.config.category==="rifle"?(t.mesh.position.set(.08,-.08,.25),t.mesh.rotation.y=-.05):t.config.category==="sniper"?t.mesh.position.set(.1,-.1,.4):t.config.category==="shotgun"?t.mesh.position.set(.08,-.08,.3):t.config.category==="melee"&&(t.mesh.position.set(.15,-.1,.1),t.mesh.rotation.z=-.5),e.add(t.mesh))}spawnEnemies(){const e=[{x:-8,z:-58,type:"security"},{x:14,z:-52,type:"scout"},{x:-22,z:-22,type:"security"},{x:32,z:-32,type:"heavy"},{x:52,z:-12,type:"security"},{x:62,z:-28,type:"hunter"},{x:-38,z:38,type:"scout"},{x:12,z:52,type:"commander"},{x:2,z:72,type:"sniper"},{x:-18,z:-48,type:"hunter"},{x:48,z:-38,type:"security"},{x:-50,z:-30,type:"scout"}];for(const t of e){const n=Xp.find(a=>a.id===t.type),i=new Hp(n),r=new Vp(i,n,new M(t.x,0,t.z));this.enemies.push(r),this.aiDirector.addEnemy(r),this.renderer.scene.add(i.group)}}setupSecurity(){this.securitySystem.addCamera(new M(5,5,55),new Zt(0,Math.PI,0),"cam_corp_1"),this.securitySystem.addCamera(new M(5,8,75),new Zt(-.2,0,0),"cam_corp_2"),this.securitySystem.addCamera(new M(58,5,-8),new Zt(0,-Math.PI/2,0),"cam_ind_1"),this.securitySystem.addCamera(new M(42,5,-18),new Zt(0,Math.PI/2,0),"cam_ind_2"),this.securitySystem.addCamera(new M(0,5,-75),new Zt(0,0,0),"cam_checkpoint"),this.securitySystem.addTerminal(new M(6,0,58),["cam_corp_1","cam_corp_2"],"term_corp"),this.securitySystem.addTerminal(new M(54,0,-6),["cam_ind_1","cam_ind_2"],"term_ind"),this.securitySystem.addTerminal(new M(2,0,-78),["cam_checkpoint"],"term_checkpoint");for(const e of this.securitySystem.getTerminals())this.interactables.push({pos:e.position.clone(),type:"security_terminal",id:e.id,mesh:e.mesh,data:e})}setupInteractables(){const e=(n,i,r,a,o=.6)=>{const l=new ge(.9,1.3,.7),c=new Se({color:r==="terminal"?58879:r==="door"?9071162:r==="safehouse"?16755268:5111706,emissive:r==="terminal"?43775:r==="safehouse"?16755268:0,emissiveIntensity:r==="terminal"||r==="safehouse"?.35:0}),d=new q(l,c);d.position.set(n,o,i),d.castShadow=!0,this.renderer.scene.add(d),this.interactables.push({pos:new M(n,0,i),type:r,id:a,mesh:d})};e(0,-82,"checkpoint","reach_checkpoint"),e(58,-4,"terminal","restore_power"),e(54,-4,"terminal","restore_power"),e(58,-1,"breaker","restore_power"),e(-38,24,"door","infiltrate_building"),e(-36,26,"loot","recover_logs"),e(-58,15,"safehouse","safehouse_hub",.6);const t=(n,i,r,a=.15)=>{const o=new ge(.55,.35,.45);let l=16755200;r==="intel"&&(l=58879),r==="cache"&&(l=65416),r==="med"&&(l=16731498);const c=new Se({color:l,emissive:l,emissiveIntensity:.25}),d=new q(o,c);d.position.set(n,a,i),d.castShadow=!0,d.userData.baseY=a,this.renderer.scene.add(d),this.loot.push({pos:new M(n,0,i),type:r,mesh:d})};t(-12,-62,"intel"),t(7,-42,"intel"),t(-28,-18,"intel"),t(42,-18,"ammo"),t(-48,-78,"cache"),t(-56,13,"intel"),t(10,68,"intel"),t(35,-35,"med"),t(-22,-70,"ammo"),t(62,-10,"intel")}startGame(){if(this.isGameStarted){this.isRunning=!0,this.clock.start(),this.animate(),this.touchControls.setVisible(!0),this.ui.showHUD();return}this.isGameStarted=!0,this.isRunning=!0,this.touchControls.setVisible(!0),this.clock.start(),this.animate(),console.log("[Game] Started — BLACK VEIL v1.0.0"),localStorage.getItem("bv_intro_played")||setTimeout(()=>{di.startDialogue("intro_kael"),localStorage.setItem("bv_intro_played","1")},1500),xt.discoverDistrict("central")}togglePhotoMode(){if(this.photoMode=!this.photoMode,this.photoMode){this.ui.showNotification("📷 PHOTO MODE — Press P to exit, Hide UI, Move camera",3e3);const e=document.querySelector(".bv-hud");e&&(e.style.display="none");const t=document.getElementById("touch-controls");t&&(t.style.display="none")}else{this.ui.showNotification("📷 Photo Mode OFF",2e3);const e=document.querySelector(".bv-hud");e&&(e.style.display="block");const t=document.getElementById("touch-controls");t&&(t.style.display="block"),this.ui.showHUD()}}tryInteract(){const e=this.playerController.getPosition(),t=this.securitySystem.getNearestTerminal(e,4);if(t&&this.securitySystem.hackTerminal(t.id)){at.playProceduralSound("terminal"),this.ui.showNotification(`SECURITY DISABLED — ${t.controls.length} cameras offline`,3e3),Lt.updateObjective("disable_security"),xt.updateProgress("explorer",1),this.vfxSystem.spawn({type:"spark",position:t.position.clone().add(new M(0,.8,0)),color:65416,scale:1.2,lifetime:.8});return}for(const n of[...this.interactables])if(e.distanceTo(n.pos)<3.2){if(console.log(`[Interact] ${n.type} ${n.id}`),at.playProceduralSound("terminal"),Lt.updateObjective(n.id),n.type==="safehouse"){const r=this.world.safehouse?.interactWithStation("weapons")||"SAFEHOUSE — Welcome back, operative";this.ui.showNotification(r,3e3),this.playerController.heal(30),gt.save({player:{health:this.playerController.stats.health}}),this.vfxSystem.spawn({type:"dust",position:n.pos.clone().add(new M(0,.5,0)),color:16755302,scale:1.5,lifetime:1});break}if(this.ui.showNotification(`INTERACTED: ${n.type.toUpperCase()}`,2e3),n.type==="terminal"||n.type==="breaker"){const r=n.mesh.material;r.color.setHex(5111706),r.emissive.setHex(5111706),r.emissiveIntensity=.6,this.vfxSystem.spawnMuzzleFlash(n.pos.clone().add(new M(0,.8,0)),new M(0,1,0)),setTimeout(()=>{this.renderer.scene.remove(n.mesh),this.interactables=this.interactables.filter(a=>a!==n)},600)}(n.type==="loot"||n.id==="recover_logs")&&(this.weaponSystem.addWeapon("ar_41"),this.updateWeaponMesh(),gt.save({progression:{currency:150}}),di.startDialogue("helix_logs"),this.vfxSystem.spawn({type:"impact",position:n.pos.clone(),color:58879,scale:1.5,lifetime:.5}));break}for(const n of[...this.loot])if(e.distanceTo(n.pos)<2.2){this.renderer.scene.remove(n.mesh),this.loot=this.loot.filter(r=>r!==n),this.vfxSystem.spawn({type:"dust",position:n.pos.clone().add(new M(0,.3,0)),color:16755200,scale:1,lifetime:.8}),n.type==="ammo"?(this.weaponSystem.addAmmo("rifle",35),this.ui.showNotification("AMMO +35",2e3)):n.type==="intel"?(Lt.updateObjective("collect_intel"),xt.addIntel(),this.ui.showNotification("INTEL COLLECTED — Truth about Blackout",2500),xt.getStats().intelCollected>=3&&(this.weaponSystem.addWeapon("sg_breach"),this.updateWeaponMesh())):n.type==="cache"?(this.weaponSystem.addWeapon("sr_phantom"),this.updateWeaponMesh(),xt.findHiddenCache(),this.ui.showNotification("🏆 HIDDEN CACHE: PHANTOM SR UNLOCKED + Secret Intel",4e3)):n.type==="med"&&(this.playerController.heal(40),this.ui.showNotification("MEDKIT +40 HP",2e3)),at.playProceduralSound("ui_click");break}}checkInteractionPrompt(){const e=this.playerController.getPosition(),t=this.securitySystem.getNearestTerminal(e,4);if(t)return`HACK ${t.id.toUpperCase()}`;for(const n of this.interactables)if(e.distanceTo(n.pos)<3.2)return n.type==="safehouse"?"ENTER SAFEHOUSE":n.type.toUpperCase();for(const n of this.loot)if(e.distanceTo(n.pos)<2.2)return`COLLECT ${n.type.toUpperCase()}`;return null}handleShooting(e){const t=this.input.state.fire&&this.weaponSystem.canFire();if(t){const n=this.playerController.getPosition().clone();n.y+=1.45;const i=new M(0,0,-1).applyAxisAngle(new M(0,1,0),this.playerController.yaw);i.y+=this.playerController.pitch*.15;const r=this.weaponSystem.getSpread();i.x+=(Math.random()-.5)*r,i.y+=(Math.random()-.5)*r,i.z+=(Math.random()-.5)*r,i.normalize();const a=this.weaponSystem.fire(n,i);if(a){this.cameraSystem.addShake(a.damage*.006,7),this.vfxSystem.spawnMuzzleFlash(n.clone().add(i.clone().multiplyScalar(.8)),i.clone()),this.raycaster.set(n,i);const o=this.weaponSystem.getCurrent();let l=!1;for(const c of[...this.enemies]){const d=c.character.getPosition(),h=d.clone().sub(n).dot(i);if(h>0&&h<o.config.range){const m=n.clone().add(i.clone().multiplyScalar(h));if(m.distanceTo(d.clone().add(new M(0,1,0)))<.85){const v=d.clone().add(new M(0,1.55,0)),f=m.distanceTo(v)<.35,u=c.character.takeDamage(a.damage,f);this.vfxSystem.spawnImpact(m,i.clone().multiplyScalar(-1),"flesh"),u?(this.renderer.scene.remove(c.character.group),this.aiDirector.removeEnemy(c),this.enemies=this.enemies.filter(S=>S!==c),Lt.updateObjective("defend_position"),xt.addKill(f),this.ui.showNotification(f?"💀 HEADSHOT":"ENEMY DOWN",1500),gt.save({progression:{xp:f?75:50}}),this.vfxSystem.spawn({type:"blood",position:d.clone().add(new M(0,1,0)),color:16720418,scale:1.5,lifetime:.8})):this.ui.showNotification(f?"HEADSHOT!":"HIT",600),l=!0;break}}}if(!l){n.clone().add(i.clone().multiplyScalar(o.config.range*.6));for(const c of this.world.colliders){const d=c.getCenter(new M),h=d.clone().sub(n).dot(i);if(h>0&&h<o.config.range){const m=n.clone().add(i.clone().multiplyScalar(h));if(c.containsPoint(m)){const g=m.clone().sub(d).normalize();this.vfxSystem.spawnImpact(m,g,"concrete"),l=!0;break}}}if(!l){const c=n.clone().add(i.clone().multiplyScalar(12));this.vfxSystem.spawn({type:"dust",position:c,color:6710886,scale:.5,lifetime:.4})}}}}if(this.input.state.reload&&this.weaponSystem.startReload()&&this.ui.showNotification("RELOADING...",1e3),this.input.state.switchWeapon!==0){this.weaponSystem.switchWeapon(this.input.state.switchWeapon),this.updateWeaponMesh();const n=this.weaponSystem.getCurrent();n&&this.ui.showNotification(`EQUIPPED: ${n.config.name}`,1500)}this.lastShootState=t}updateStealthState(){const e=this.aiDirector.getCombatCount(),t=this.enemies.length>0?Math.max(0,...this.enemies.map(r=>r.getDetectionLevel())):0,n=this.securitySystem.getAlarmLevel();let i="HIDDEN";e>0||n==="reinforcements"||n==="lockdown"?i="COMBAT":t>.7||n==="alert"?i="DETECTED":t>.3||n==="suspicious"?i="SUSPICIOUS":i="HIDDEN",i!==this.stealthState&&(this.stealthState=i,i==="COMBAT"?at.setMusicState("combat"):i==="DETECTED"?at.setMusicState("tension"):i==="SUSPICIOUS"?at.setMusicState("stealth"):at.setMusicState("exploration"))}updateMissions(){const e=this.playerController.getPosition(),t=Lt.getObjectiveByPos({x:e.x,y:e.y,z:e.z},5.5);if(t){Lt.updateObjective(t.id),this.ui.showNotification(`OBJECTIVE: ${t.title}`,2500);const n=this.world.getDistrictAt(e);n&&xt.discoverDistrict(n.id)}}updateLootAnimation(e){const t=performance.now()*.001;for(const n of this.loot)n.mesh.position.y=n.mesh.userData.baseY+Math.sin(t*2+n.pos.x)*.15,n.mesh.rotation.y+=e*.8}dispose(){this.isRunning=!1,this.renderer.dispose(),this.world.dispose(),this.vfxSystem.clear()}}console.log("%c BLACK VEIL ","background:#0a0a0f; color:#6aa6ff; font-size:20px; font-family:monospace; padding:8px 16px; border:1px solid #6aa6ff;");console.log("%c THE CITY FORGOT. YOU DIDN'T. ","color:#8a8a9a; font-family:monospace;");function pa(){const s=document.getElementById("game-canvas");if(!s){console.error("Canvas not found");return}const e={webgl:(()=>{try{const i=document.createElement("canvas");return!!window.WebGL2RenderingContext&&!!i.getContext("webgl2")}catch{return!1}})(),webgpu:"gpu"in navigator,touch:"ontouchstart"in window,storage:(()=>{try{return localStorage.setItem("test","1"),localStorage.removeItem("test"),!0}catch{return!1}})(),fullscreen:!!document.documentElement.requestFullscreen,gamepad:"getGamepads"in navigator,gyro:"DeviceOrientationEvent"in window};if(console.log("[Capabilities]",e),!e.webgl){document.getElementById("loading-status").textContent="WEBGL2 NOT SUPPORTED - PLEASE USE MODERN BROWSER";return}document.addEventListener("contextmenu",i=>i.preventDefault()),document.addEventListener("touchmove",i=>{i.target.closest("#ui-root, #touch-controls")||i.preventDefault()},{passive:!1}),document.addEventListener("visibilitychange",()=>{document.hidden&&console.log("[Game] Hidden - pausing audio")});const t=()=>{const i=document.getElementById("orientation-warning");i&&(window.innerHeight>window.innerWidth&&window.innerWidth<768?i.style.display="flex":i.style.display="none")};window.addEventListener("resize",t),t();const n=new sm(s);window.BLACK_VEIL=n,window.BV_SAVE=gt,"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",i=>{i.data.type==="UPDATE_AVAILABLE"&&console.log("[PWA] Update available")}),window.addEventListener("error",i=>{console.error("[Global Error]",i.error)}),window.addEventListener("unhandledrejection",i=>{console.error("[Unhandled Rejection]",i.reason)}),console.log("[Black Veil] Initialized - Awaiting player")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",pa):pa();
