(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();var dl=Object.defineProperty,ul=(a,e,t)=>e in a?dl(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,C=(a,e,t)=>ul(a,typeof e!="symbol"?e+"":e,t);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const En="160",pl=0,Vn=1,ml=2,fl=0,Tn=1,mn=2,ci=3,Ti=0,Ut=1,Ot=2,Mi=0,mr=1,Wn=2,jn=3,Xn=4,gl=5,Oi=100,vl=101,_l=102,qn=103,Yn=104,xl=200,yl=201,bl=202,Sl=203,fn=204,gn=205,Ml=206,wl=207,El=208,Tl=209,Al=210,Cl=211,Rl=212,Ll=213,Pl=214,Il=0,Ul=1,Dl=2,xa=3,Nl=4,Ol=5,kl=6,zl=7,Ao=0,Fl=1,Bl=2,wi=0,Hl=1,Gl=2,Vl=3,Co=4,Wl=5,jl=6,Ro=300,gr=301,vr=302,vn=303,_n=304,Ta=306,kr=1e3,$t=1001,xn=1002,Rt=1003,$n=1004,Na=1005,Ht=1006,Xl=1007,zr=1008,Ei=1009,ql=1010,Yl=1011,An=1012,Lo=1013,bi=1014,Si=1015,Fr=1016,Po=1017,Io=1018,Fi=1020,$l=1021,Kt=1023,Kl=1024,Jl=1025,Bi=1026,_r=1027,Zl=1028,Uo=1029,Ql=1030,Do=1031,No=1033,Oa=33776,ka=33777,za=33778,Fa=33779,Kn=35840,Jn=35841,Zn=35842,Qn=35843,Oo=36196,es=37492,ts=37496,is=37808,rs=37809,as=37810,ns=37811,ss=37812,os=37813,ls=37814,cs=37815,hs=37816,ds=37817,us=37818,ps=37819,ms=37820,fs=37821,Ba=36492,gs=36494,vs=36495,ec=36283,_s=36284,xs=36285,ys=36286,ko=3e3,Hi=3001,tc=3200,ic=3201,zo=0,rc=1,Gt="",ct="srgb",pi="srgb-linear",Cn="display-p3",Aa="display-p3-linear",ya="linear",et="srgb",ba="rec709",Sa="p3",ji=7680,bs=519,ac=512,nc=513,sc=514,Fo=515,oc=516,lc=517,cc=518,hc=519,Ss=35044,Ms="300 es",yn=1035,di=2e3,Ma=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ws=1234567;const Ur=Math.PI/180,xr=180/Math.PI;function Sr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[a&255]+bt[a>>8&255]+bt[a>>16&255]+bt[a>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Lt(a,e,t){return Math.max(e,Math.min(t,a))}function Rn(a,e){return(a%e+e)%e}function dc(a,e,t,i,r){return i+(a-e)*(r-i)/(t-e)}function uc(a,e,t){return a!==e?(t-a)/(e-a):0}function Dr(a,e,t){return(1-t)*a+t*e}function pc(a,e,t,i){return Dr(a,e,1-Math.exp(-t*i))}function mc(a,e=1){return e-Math.abs(Rn(a,e*2)-e)}function fc(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function gc(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function vc(a,e){return a+Math.floor(Math.random()*(e-a+1))}function _c(a,e){return a+Math.random()*(e-a)}function xc(a){return a*(.5-Math.random())}function yc(a){a!==void 0&&(ws=a);let e=ws+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bc(a){return a*Ur}function Sc(a){return a*xr}function bn(a){return(a&a-1)===0&&a!==0}function Mc(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function wa(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function wc(a,e,t,i,r){const n=Math.cos,o=Math.sin,s=n(t/2),l=o(t/2),c=n((e+i)/2),h=o((e+i)/2),d=n((e-i)/2),u=o((e-i)/2),m=n((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":a.set(s*h,l*d,l*u,s*c);break;case"YZY":a.set(l*u,s*h,l*d,s*c);break;case"ZXZ":a.set(l*d,l*u,s*h,s*c);break;case"XZX":a.set(s*h,l*v,l*m,s*c);break;case"YXY":a.set(l*m,s*h,l*v,s*c);break;case"ZYZ":a.set(l*v,l*m,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Tt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Jt={DEG2RAD:Ur,RAD2DEG:xr,generateUUID:Sr,clamp:Lt,euclideanModulo:Rn,mapLinear:dc,inverseLerp:uc,lerp:Dr,damp:pc,pingpong:mc,smoothstep:fc,smootherstep:gc,randInt:vc,randFloat:_c,randFloatSpread:xc,seededRandom:yc,degToRad:bc,radToDeg:Sc,isPowerOfTwo:bn,ceilPowerOfTwo:Mc,floorPowerOfTwo:wa,setQuaternionFromProperEuler:wc,normalize:Tt,denormalize:cr};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*r+e.x,this.y=n*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,n,o,s,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,n,o,s,l,c)}set(e,t,i,r,n,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=n,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],v=i[8],g=r[0],f=r[3],p=r[6],w=r[1],_=r[4],T=r[7],I=r[2],A=r[5],R=r[8];return n[0]=o*g+s*w+l*I,n[3]=o*f+s*_+l*A,n[6]=o*p+s*T+l*R,n[1]=c*g+h*w+d*I,n[4]=c*f+h*_+d*A,n[7]=c*p+h*T+d*R,n[2]=u*g+m*w+v*I,n[5]=u*f+m*_+v*A,n[8]=u*p+m*T+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-i*n*h+i*s*l+r*n*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=h*o-s*c,u=s*l-h*n,m=c*n-o*l,v=t*d+i*u+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-h*i)*g,e[2]=(s*i-r*o)*g,e[3]=u*g,e[4]=(h*t-r*l)*g,e[5]=(r*n-s*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*n)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,o,s){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new He;function Bo(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Br(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ec(){const a=Br("canvas");return a.style.display="block",a}const Es={};function Nr(a){a in Es||(Es[a]=!0,console.warn(a))}const Ts=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),As=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qr={[pi]:{transfer:ya,primaries:ba,toReference:a=>a,fromReference:a=>a},[ct]:{transfer:et,primaries:ba,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Aa]:{transfer:ya,primaries:Sa,toReference:a=>a.applyMatrix3(As),fromReference:a=>a.applyMatrix3(Ts)},[Cn]:{transfer:et,primaries:Sa,toReference:a=>a.convertSRGBToLinear().applyMatrix3(As),fromReference:a=>a.applyMatrix3(Ts).convertLinearToSRGB()}},Tc=new Set([pi,Aa]),Ke={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Tc.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const i=qr[e].toReference,r=qr[t].fromReference;return r(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return qr[a].primaries},getTransfer:function(a){return a===Gt?ya:qr[a].transfer}};function fr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ga(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Xi;class Ho{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=Br("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let o=0;o<n.length;o++)n[o]=fr(n[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ac=0;class Go{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?n.push(Va(r[o].image)):n.push(Va(r[o]))}else n=Va(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function Va(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ho.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cc=0;class Pt extends br{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=$t,r=$t,n=Ht,o=zr,s=Kt,l=Ei,c=Pt.DEFAULT_ANISOTROPY,h=Gt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Sr(),this.name="",this.source=new Go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hi?ct:Gt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case xn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case xn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Hi:ko}set encoding(e){Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hi?ct:Gt}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Ro;Pt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const o=e.elements,s=o[0],l=o[4],c=o[8],h=o[1],d=o[5],u=o[9],m=o[2],v=o[6],g=o[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(u-v)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(u+v)<.1&&Math.abs(s+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(s+1)/2,w=(d+1)/2,_=(g+1)/2,T=(l+h)/4,I=(c+m)/4,A=(u+v)/4;return p>w&&p>_?p<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(p),r=T/i,n=I/i):w>_?w<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(w),i=T/r,n=A/r):_<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(_),i=I/n,r=A/n),this.set(i,r,n,t),this}let f=Math.sqrt((v-u)*(v-u)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(v-u)/f,this.y=(c-m)/f,this.z=(h-l)/f,this.w=Math.acos((s+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rc extends br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hi?ct:Gt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Rc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vo extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lc extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,o,s){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const u=n[o+0],m=n[o+1],v=n[o+2],g=n[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(s===1){e[t+0]=u,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==u||c!==m||h!==v){let f=1-s;const p=l*u+c*m+h*v+d*g,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const I=Math.sqrt(_),A=Math.atan2(I,p*w);f=Math.sin(f*A)/I,s=Math.sin(s*A)/I}const T=s*w;if(l=l*f+u*T,c=c*f+m*T,h=h*f+v*T,d=d*f+g*T,f===1-s){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,n,o){const s=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=n[o],u=n[o+1],m=n[o+2],v=n[o+3];return e[t]=s*v+h*d+l*m-c*u,e[t+1]=l*v+h*u+c*d-s*m,e[t+2]=c*v+h*m+s*u-l*d,e[t+3]=h*v-s*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,n=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(r/2),d=s(n/2),u=l(i/2),m=l(r/2),v=l(n/2);switch(o){case"XYZ":this._x=u*h*d+c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d-u*m*v;break;case"YXZ":this._x=u*h*d+c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d+u*m*v;break;case"ZXY":this._x=u*h*d-c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d-u*m*v;break;case"ZYX":this._x=u*h*d-c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d+u*m*v;break;case"YZX":this._x=u*h*d+c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d-u*m*v;break;case"XZY":this._x=u*h*d-c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d+u*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+s+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(n-c)*m,this._z=(o-r)*m}else if(i>s&&i>d){const m=2*Math.sqrt(1+i-s-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(n+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-i-d);this._w=(n-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-s);this._w=(o-r)/m,this._x=(n+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*s+r*c-n*l,this._y=r*h+o*l+n*s-i*c,this._z=n*h+o*c+i*l-r*s,this._w=o*h-i*s-r*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=n,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*n+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=n*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,i=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),h=2*(s*t-n*r),d=2*(n*i-o*t);return this.x=t+l*c+o*d-s*h,this.y=i+l*h+s*c-n*d,this.z=r+l*d+n*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-n*s,this.y=n*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new S,Cs=new Hr;class qe{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=n.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(n,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const r=e.children;for(let n=0,o=r.length;n<o;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),$r.subVectors(this.max,Er),qi.subVectors(e.a,Er),Yi.subVectors(e.b,Er),$i.subVectors(e.c,Er),fi.subVectors(Yi,qi),gi.subVectors($i,Yi),Ri.subVectors(qi,$i);let t=[0,-fi.z,fi.y,0,-gi.z,gi.y,0,-Ri.z,Ri.y,fi.z,0,-fi.x,gi.z,0,-gi.x,Ri.z,0,-Ri.x,-fi.y,fi.x,0,-gi.y,gi.x,0,-Ri.y,Ri.x,0];return!ja(t,qi,Yi,$i,$r)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,qi,Yi,$i,$r))?!1:(Kr.crossVectors(fi,gi),t=[Kr.x,Kr.y,Kr.z],ja(t,qi,Yi,$i,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new S,new S,new S,new S,new S,new S,new S,new S],Wt=new S,Yr=new qe,qi=new S,Yi=new S,$i=new S,fi=new S,gi=new S,Ri=new S,Er=new S,$r=new S,Kr=new S,Li=new S;function ja(a,e,t,i,r){for(let n=0,o=a.length-3;n<=o;n+=3){Li.fromArray(a,n);const s=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),h=i.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const Pc=new qe,Tr=new S,Xa=new S;class Gr{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Pc.setFromPoints(e).getCenter(i);let r=0;for(let n=0,o=e.length;n<o;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Tr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Xa)),this.expandByPoint(Tr.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new S,qa=new S,Jr=new S,vi=new S,Ya=new S,Zr=new S,$a=new S;class Ca{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qa.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(qa);const n=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),s=vi.dot(this.direction),l=-vi.dot(Jr),c=vi.lengthSq(),h=Math.abs(1-o*o);let d,u,m,v;if(h>0)if(d=o*l-s,u=o*s-l,v=n*h,d>=0)if(u>=-v)if(u<=v){const g=1/h;d*=g,u*=g,m=d*(d+o*u+2*s)+u*(o*d+u+2*l)+c}else u=n,d=Math.max(0,-(o*u+s)),m=-d*d+u*(u+2*l)+c;else u=-n,d=Math.max(0,-(o*u+s)),m=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-o*n+s)),u=d>0?-n:Math.min(Math.max(-n,-l),n),m=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-n,-l),n),m=u*(u+2*l)+c):(d=Math.max(0,-(o*n+s)),u=d>0?n:Math.min(Math.max(-n,-l),n),m=-d*d+u*(u+2*l)+c);else u=o>0?-n:n,d=Math.max(0,-(o*u+s)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(qa).addScaledVector(Jr,u),m}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,n=e.radius*e.radius;if(r>n)return null;const o=Math.sqrt(n-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(n=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(n=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||n>r||((n>i||isNaN(i))&&(i=n),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(s=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,r,n){Ya.subVectors(t,e),Zr.subVectors(i,e),$a.crossVectors(Ya,Zr);let o=this.direction.dot($a),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=s*this.direction.dot(Zr.crossVectors(vi,Zr));if(l<0)return null;const c=s*this.direction.dot(Ya.cross(vi));if(c<0||l+c>o)return null;const h=-s*vi.dot($a);return h<0?null:this.at(h/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,i,r,n,o,s,l,c,h,d,u,m,v,g,f){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,n,o,s,l,c,h,d,u,m,v,g,f)}set(e,t,i,r,n,o,s,l,c,h,d,u,m,v,g,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=n,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=v,p[11]=g,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),n=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const u=o*h,m=o*d,v=s*h,g=s*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=u-g*c,t[9]=-s*l,t[2]=g-u*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,m=l*d,v=c*h,g=c*d;t[0]=u+g*s,t[4]=v*s-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-s,t[2]=m*s-v,t[6]=g+u*s,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,m=l*d,v=c*h,g=c*d;t[0]=u-g*s,t[4]=-o*d,t[8]=v+m*s,t[1]=m+v*s,t[5]=o*h,t[9]=g-u*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,m=o*d,v=s*h,g=s*d;t[0]=l*h,t[4]=v*c-m,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=m*c-v,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,v=s*l,g=s*c;t[0]=l*h,t[4]=g-u*d,t[8]=v*d+m,t[1]=d,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*d+v,t[10]=u-g*d}else if(e.order==="XZY"){const u=o*l,m=o*c,v=s*l,g=s*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=o*h,t[9]=m*d-v,t[2]=v*d-m,t[6]=s*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ic,e,Uc)}lookAt(e,t,i){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),_i.crossVectors(i,Dt),_i.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),_i.crossVectors(i,Dt)),_i.normalize(),Qr.crossVectors(Dt,_i),r[0]=_i.x,r[4]=Qr.x,r[8]=Dt.x,r[1]=_i.y,r[5]=Qr.y,r[9]=Dt.y,r[2]=_i.z,r[6]=Qr.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],v=i[2],g=i[6],f=i[10],p=i[14],w=i[3],_=i[7],T=i[11],I=i[15],A=r[0],R=r[4],j=r[8],b=r[12],E=r[1],G=r[5],B=r[9],ie=r[13],P=r[2],O=r[6],V=r[10],q=r[14],X=r[3],W=r[7],Q=r[11],te=r[15];return n[0]=o*A+s*E+l*P+c*X,n[4]=o*R+s*G+l*O+c*W,n[8]=o*j+s*B+l*V+c*Q,n[12]=o*b+s*ie+l*q+c*te,n[1]=h*A+d*E+u*P+m*X,n[5]=h*R+d*G+u*O+m*W,n[9]=h*j+d*B+u*V+m*Q,n[13]=h*b+d*ie+u*q+m*te,n[2]=v*A+g*E+f*P+p*X,n[6]=v*R+g*G+f*O+p*W,n[10]=v*j+g*B+f*V+p*Q,n[14]=v*b+g*ie+f*q+p*te,n[3]=w*A+_*E+T*P+I*X,n[7]=w*R+_*G+T*O+I*W,n[11]=w*j+_*B+T*V+I*Q,n[15]=w*b+_*ie+T*q+I*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],v=e[3],g=e[7],f=e[11],p=e[15];return v*(+n*l*d-r*c*d-n*s*u+i*c*u+r*s*m-i*l*m)+g*(+t*l*m-t*c*u+n*o*u-r*o*m+r*c*h-n*l*h)+f*(+t*c*d-t*s*m-n*o*d+i*o*m+n*s*h-i*c*h)+p*(-r*s*h-t*l*d+t*s*u+r*o*d-i*o*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],v=e[12],g=e[13],f=e[14],p=e[15],w=d*f*c-g*u*c+g*l*m-s*f*m-d*l*p+s*u*p,_=v*u*c-h*f*c-v*l*m+o*f*m+h*l*p-o*u*p,T=h*g*c-v*d*c+v*s*m-o*g*m-h*s*p+o*d*p,I=v*d*l-h*g*l-v*s*u+o*g*u+h*s*f-o*d*f,A=t*w+i*_+r*T+n*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=w*R,e[1]=(g*u*n-d*f*n-g*r*m+i*f*m+d*r*p-i*u*p)*R,e[2]=(s*f*n-g*l*n+g*r*c-i*f*c-s*r*p+i*l*p)*R,e[3]=(d*l*n-s*u*n-d*r*c+i*u*c+s*r*m-i*l*m)*R,e[4]=_*R,e[5]=(h*f*n-v*u*n+v*r*m-t*f*m-h*r*p+t*u*p)*R,e[6]=(v*l*n-o*f*n-v*r*c+t*f*c+o*r*p-t*l*p)*R,e[7]=(o*u*n-h*l*n+h*r*c-t*u*c-o*r*m+t*l*m)*R,e[8]=T*R,e[9]=(v*d*n-h*g*n-v*i*m+t*g*m+h*i*p-t*d*p)*R,e[10]=(o*g*n-v*s*n+v*i*c-t*g*c-o*i*p+t*s*p)*R,e[11]=(h*s*n-o*d*n-h*i*c+t*d*c+o*i*m-t*s*m)*R,e[12]=I*R,e[13]=(h*g*r-v*d*r+v*i*u-t*g*u-h*i*f+t*d*f)*R,e[14]=(v*s*r-o*g*r-v*i*l+t*g*l+o*i*f-t*s*f)*R,e[15]=(o*d*r-h*s*r+h*i*l-t*d*l-o*i*u+t*s*u)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,o=e.x,s=e.y,l=e.z,c=n*o,h=n*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,h*s+i,h*l-r*o,0,c*l-r*s,h*l+r*o,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,o){return this.set(1,i,n,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,o=t._y,s=t._z,l=t._w,c=n+n,h=o+o,d=s+s,u=n*c,m=n*h,v=n*d,g=o*h,f=o*d,p=s*d,w=l*c,_=l*h,T=l*d,I=i.x,A=i.y,R=i.z;return r[0]=(1-(g+p))*I,r[1]=(m+T)*I,r[2]=(v-_)*I,r[3]=0,r[4]=(m-T)*A,r[5]=(1-(u+p))*A,r[6]=(f+w)*A,r[7]=0,r[8]=(v+_)*R,r[9]=(f-w)*R,r[10]=(1-(u+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Ki.set(r[0],r[1],r[2]).length();const o=Ki.set(r[4],r[5],r[6]).length(),s=Ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);const l=1/n,c=1/o,h=1/s;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=c,jt.elements[5]*=c,jt.elements[6]*=c,jt.elements[8]*=h,jt.elements[9]*=h,jt.elements[10]*=h,t.setFromRotationMatrix(jt),i.x=n,i.y=o,i.z=s,this}makePerspective(e,t,i,r,n,o,s=di){const l=this.elements,c=2*n/(t-e),h=2*n/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r);let m,v;if(s===di)m=-(o+n)/(o-n),v=-2*o*n/(o-n);else if(s===Ma)m=-o/(o-n),v=-o*n/(o-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,n,o,s=di){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(o-n),u=(t+e)*c,m=(i+r)*h;let v,g;if(s===di)v=(o+n)*d,g=-2*d;else if(s===Ma)v=n*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new S,jt=new tt,Ic=new S(0,0,0),Uc=new S(1,1,1),_i=new S,Qr=new S,Dt=new S,Rs=new tt,Ls=new Hr;class Zt{constructor(e=0,t=0,i=0,r=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],o=r[4],s=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rs,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ls.setFromEuler(this),this.setFromQuaternion(Ls,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class Ln{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dc=0;const Ps=new S,Ji=new Hr,si=new tt,ea=new S,Ar=new S,Nc=new S,Oc=new Hr,Is=new S(1,0,0),Us=new S(0,1,0),Ds=new S(0,0,1),kc={type:"added"},zc={type:"removed"};class dt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new S,t=new Zt,i=new Hr,r=new S(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new He}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ln,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Is,e)}rotateY(e){return this.rotateOnAxis(Us,e)}rotateZ(e){return this.rotateOnAxis(Ds,e)}translateOnAxis(e,t){return Ps.copy(e).applyQuaternion(this.quaternion),this.position.add(Ps.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Is,e)}translateY(e){return this.translateOnAxis(Us,e)}translateZ(e){return this.translateOnAxis(Ds,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ea.copy(e):ea.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ar,ea,this.up):si.lookAt(ea,Ar,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(si),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let n=0,o=r.length;n<o;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Nc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Oc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,o=r.length;n<o;n++){const s=r[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function n(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];n(e.shapes,d)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(n(e.materials,this.material[l]));r.material=s}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(n(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),v=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dt.DEFAULT_UP=new S(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new S,oi=new S,Ka=new S,li=new S,Zi=new S,Qi=new S,Ns=new S,Ja=new S,Za=new S,Qa=new S;let ta=!1;class Yt{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Xt.subVectors(r,t),oi.subVectors(i,t),Ka.subVectors(e,t);const o=Xt.dot(Xt),s=Xt.dot(oi),l=Xt.dot(Ka),c=oi.dot(oi),h=oi.dot(Ka),d=o*c-s*s;if(d===0)return n.set(0,0,0),null;const u=1/d,m=(c*l-s*h)*u,v=(o*h-s*l)*u;return n.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,t,i,r,n,o,s,l){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),this.getInterpolation(e,t,i,r,n,o,s,l)}static getInterpolation(e,t,i,r,n,o,s,l){return this.getBarycoord(e,t,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,li.x),l.addScaledVector(o,li.y),l.addScaledVector(s,li.z),l)}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),oi.subVectors(e,t),Xt.cross(oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Xt.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}getInterpolation(e,t,i,r,n){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let o,s;Zi.subVectors(r,i),Qi.subVectors(n,i),Ja.subVectors(e,i);const l=Zi.dot(Ja),c=Qi.dot(Ja);if(l<=0&&c<=0)return t.copy(i);Za.subVectors(e,r);const h=Zi.dot(Za),d=Qi.dot(Za);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Zi,o);Qa.subVectors(e,n);const m=Zi.dot(Qa),v=Qi.dot(Qa);if(v>=0&&m<=v)return t.copy(n);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return s=c/(c-v),t.copy(i).addScaledVector(Qi,s);const f=h*v-m*d;if(f<=0&&d-h>=0&&m-v>=0)return Ns.subVectors(n,r),s=(d-h)/(d-h+(m-v)),t.copy(r).addScaledVector(Ns,s);const p=1/(f+g+u);return o=g*p,s=u*p,t.copy(i).addScaledVector(Zi,o).addScaledVector(Qi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},ia={h:0,s:0,l:0};function en(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Rn(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=en(o,n,e+1/3),this.g=en(o,n,e),this.b=en(o,n,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=ct){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],o=n.length;if(o===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const i=Wo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Ke.fromWorkingColorSpace(St.copy(this),e),Math.round(Lt(St.r*255,0,255))*65536+Math.round(Lt(St.g*255,0,255))*256+Math.round(Lt(St.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,n=St.b,o=Math.max(i,r,n),s=Math.min(i,r,n);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const d=o-s;switch(c=h<=.5?d/(o+s):d/(2-o-s),o){case i:l=(r-n)/d+(r<n?6:0);break;case r:l=(n-i)/d+2;break;case n:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=ct){Ke.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(ia);const i=Dr(xi.h,ia.h,t),r=Dr(xi.s,ia.s,t),n=Dr(xi.l,ia.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new je;je.NAMES=Wo;let Fc=0;class Vr extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=mr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fn,this.blendDst=gn,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fn&&(i.blendSrc=this.blendSrc),this.blendDst!==gn&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bs&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const o=[];for(const s in n){const l=n[s];delete l.metadata,o.push(l)}return o}if(t){const n=r(e.textures),o=r(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ui extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new S,ra=new ze;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ss,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ss&&(e.usage=this.usage),e}}class jo extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xo extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bc=0;const Bt=new tt,tn=new dt,er=new S,Nt=new qe,Cr=new qe,mt=new S;class ii extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bo(e)?Xo:jo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new He().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return tn.lookAt(e),tn.updateMatrix(),this.applyMatrix4(tn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];Nt.setFromBufferAttribute(n),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const s=t[n];Cr.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(Nt.min,Cr.min),Nt.expandByPoint(mt),mt.addVectors(Nt.max,Cr.max),Nt.expandByPoint(mt)):(Nt.expandByPoint(Cr.min),Nt.expandByPoint(Cr.max))}Nt.getCenter(i);let r=0;for(let n=0,o=e.count;n<o;n++)mt.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let n=0,o=t.length;n<o;n++){const s=t[n],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)mt.fromBufferAttribute(s,c),l&&(er.fromBufferAttribute(e,c),mt.add(er)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<s;E++)c[E]=new S,h[E]=new S;const d=new S,u=new S,m=new S,v=new ze,g=new ze,f=new ze,p=new S,w=new S;function _(E,G,B){d.fromArray(r,E*3),u.fromArray(r,G*3),m.fromArray(r,B*3),v.fromArray(o,E*2),g.fromArray(o,G*2),f.fromArray(o,B*2),u.sub(d),m.sub(d),g.sub(v),f.sub(v);const ie=1/(g.x*f.y-f.x*g.y);isFinite(ie)&&(p.copy(u).multiplyScalar(f.y).addScaledVector(m,-g.y).multiplyScalar(ie),w.copy(m).multiplyScalar(g.x).addScaledVector(u,-f.x).multiplyScalar(ie),c[E].add(p),c[G].add(p),c[B].add(p),h[E].add(w),h[G].add(w),h[B].add(w))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let E=0,G=T.length;E<G;++E){const B=T[E],ie=B.start,P=B.count;for(let O=ie,V=ie+P;O<V;O+=3)_(i[O+0],i[O+1],i[O+2])}const I=new S,A=new S,R=new S,j=new S;function b(E){R.fromArray(n,E*3),j.copy(R);const G=c[E];I.copy(G),I.sub(R.multiplyScalar(R.dot(G))).normalize(),A.crossVectors(j,G);const B=A.dot(h[E])<0?-1:1;l[E*4]=I.x,l[E*4+1]=I.y,l[E*4+2]=I.z,l[E*4+3]=B}for(let E=0,G=T.length;E<G;++E){const B=T[E],ie=B.start,P=B.count;for(let O=ie,V=ie+P;O<V;O+=3)b(i[O+0]),b(i[O+1]),b(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new S,n=new S,o=new S,s=new S,l=new S,c=new S,h=new S,d=new S;if(e)for(let u=0,m=e.count;u<m;u+=3){const v=e.getX(u+0),g=e.getX(u+1),f=e.getX(u+2);r.fromBufferAttribute(t,v),n.fromBufferAttribute(t,g),o.fromBufferAttribute(t,f),h.subVectors(o,n),d.subVectors(r,n),h.cross(d),s.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,f),s.add(h),l.add(h),c.add(h),i.setXYZ(v,s.x,s.y,s.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),n.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,n),d.subVectors(r,n),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,d=s.normalized,u=new c.constructor(l.length*h);let m=0,v=0;for(let g=0,f=l.length;g<f;g++){s.isInterleavedBufferAttribute?m=l[g]*s.data.stride+s.offset:m=l[g]*h;for(let p=0;p<h;p++)u[v++]=c[m++]}return new Qt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const n=this.morphAttributes;for(const s in n){const l=[],c=n[s];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=e(u,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],d=n[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Os=new tt,Pi=new Ca,aa=new Gr,ks=new S,tr=new S,ir=new S,rr=new S,rn=new S,na=new S,sa=new ze,oa=new ze,la=new ze,zs=new S,Fs=new S,Bs=new S,ca=new S,ha=new S;class Y extends dt{constructor(e=new ii,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(n&&s){na.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const h=s[l],d=n[l];h!==0&&(rn.fromBufferAttribute(d,e),o?na.addScaledVector(rn,h):na.addScaledVector(rn.sub(t),h))}t.add(na)}return t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(n),Pi.copy(e.ray).recast(e.near),!(aa.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(aa,ks)===null||Pi.origin.distanceToSquared(ks)>(e.far-e.near)**2))&&(Os.copy(n).invert(),Pi.copy(e.ray).applyMatrix4(Os),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let r;const n=this.geometry,o=this.material,s=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv1,d=n.attributes.normal,u=n.groups,m=n.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,g=u.length;v<g;v++){const f=u[v],p=o[f.materialIndex],w=Math.max(f.start,m.start),_=Math.min(s.count,Math.min(f.start+f.count,m.start+m.count));for(let T=w,I=_;T<I;T+=3){const A=s.getX(T),R=s.getX(T+1),j=s.getX(T+2);r=da(this,p,e,i,c,h,d,A,R,j),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(s.count,m.start+m.count);for(let f=v,p=g;f<p;f+=3){const w=s.getX(f),_=s.getX(f+1),T=s.getX(f+2);r=da(this,o,e,i,c,h,d,w,_,T),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=u.length;v<g;v++){const f=u[v],p=o[f.materialIndex],w=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=w,I=_;T<I;T+=3){const A=T,R=T+1,j=T+2;r=da(this,p,e,i,c,h,d,A,R,j),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=v,p=g;f<p;f+=3){const w=f,_=f+1,T=f+2;r=da(this,o,e,i,c,h,d,w,_,T),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Hc(a,e,t,i,r,n,o,s){let l;if(e.side===Ut?l=i.intersectTriangle(o,n,r,!0,s):l=i.intersectTriangle(r,n,o,e.side===Ti,s),l===null)return null;ha.copy(s),ha.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:a}}function da(a,e,t,i,r,n,o,s,l,c){a.getVertexPosition(s,tr),a.getVertexPosition(l,ir),a.getVertexPosition(c,rr);const h=Hc(a,e,t,i,tr,ir,rr,ca);if(h){r&&(sa.fromBufferAttribute(r,s),oa.fromBufferAttribute(r,l),la.fromBufferAttribute(r,c),h.uv=Yt.getInterpolation(ca,tr,ir,rr,sa,oa,la,new ze)),n&&(sa.fromBufferAttribute(n,s),oa.fromBufferAttribute(n,l),la.fromBufferAttribute(n,c),h.uv1=Yt.getInterpolation(ca,tr,ir,rr,sa,oa,la,new ze),h.uv2=h.uv1),o&&(zs.fromBufferAttribute(o,s),Fs.fromBufferAttribute(o,l),Bs.fromBufferAttribute(o,c),h.normal=Yt.getInterpolation(ca,tr,ir,rr,zs,Fs,Bs,new S),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new S,materialIndex:0};Yt.getNormal(tr,ir,rr,d.normal),h.face=d}return h}class fe extends ii{constructor(e=1,t=1,i=1,r=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:o};const s=this;r=Math.floor(r),n=Math.floor(n),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,m=0;v("z","y","x",-1,-1,i,t,e,o,n,0),v("z","y","x",1,-1,i,t,-e,o,n,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,n,4),v("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(d,2));function v(g,f,p,w,_,T,I,A,R,j,b){const E=T/R,G=I/j,B=T/2,ie=I/2,P=A/2,O=R+1,V=j+1;let q=0,X=0;const W=new S;for(let Q=0;Q<V;Q++){const te=Q*G-ie;for(let ce=0;ce<O;ce++){const H=ce*E-B;W[g]=H*w,W[f]=te*_,W[p]=P,c.push(W.x,W.y,W.z),W[g]=0,W[f]=0,W[p]=A>0?1:-1,h.push(W.x,W.y,W.z),d.push(ce/R),d.push(1-Q/j),q+=1}}for(let Q=0;Q<j;Q++)for(let te=0;te<R;te++){const ce=u+te+O*Q,H=u+te+O*(Q+1),$=u+(te+1)+O*(Q+1),ue=u+(te+1)+O*Q;l.push(ce,H,ue),l.push(H,$,ue),X+=6}s.addGroup(m,X,b),m+=X,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(a){const e={};for(let t=0;t<a.length;t++){const i=yr(a[t]);for(const r in i)e[r]=i[r]}return e}function Gc(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function qo(a){return a.getRenderTarget()===null?a.outputColorSpace:Ke.workingColorSpace}const Vc={clone:yr,merge:At};var Wc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wc,this.fragmentShader=jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Gc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yo extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class It extends Yo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;n+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,nr=1;class Xc extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new It(ar,nr,e,t);r.layers=this.layers,this.add(r);const n=new It(ar,nr,e,t);n.layers=this.layers,this.add(n);const o=new It(ar,nr,e,t);o.layers=this.layers,this.add(o);const s=new It(ar,nr,e,t);s.layers=this.layers,this.add(s);const l=new It(ar,nr,e,t);l.layers=this.layers,this.add(l);const c=new It(ar,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,n,o,s,l]=t;for(const c of t)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,o,s,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,n),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class $o extends Pt{constructor(e,t,i,r,n,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,i,r,n,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qc extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hi?ct:Gt),this.texture=new $o(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fe(5,5,5),n=new Wi({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:Mi});n.uniforms.tEquirect.value=t;const o=new Y(r,n),s=t.minFilter;return t.minFilter===zr&&(t.minFilter=Ht),new Xc(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(n)}}const an=new S,Yc=new S,$c=new He;class Di{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=an.subVectors(i,t).cross(Yc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(an),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$c.getNormalMatrix(e),r=this.coplanarPoint(an).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Gr,ua=new S;class Pn{constructor(e=new Di,t=new Di,i=new Di,r=new Di,n=new Di,o=new Di){this.planes=[e,t,i,r,n,o]}set(e,t,i,r,n,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(n),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di){const i=this.planes,r=e.elements,n=r[0],o=r[1],s=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],m=r[8],v=r[9],g=r[10],f=r[11],p=r[12],w=r[13],_=r[14],T=r[15];if(i[0].setComponents(l-n,u-c,f-m,T-p).normalize(),i[1].setComponents(l+n,u+c,f+m,T+p).normalize(),i[2].setComponents(l+o,u+h,f+v,T+w).normalize(),i[3].setComponents(l-o,u-h,f-v,T-w).normalize(),i[4].setComponents(l-s,u-d,f-g,T-_).normalize(),t===di)i[5].setComponents(l+s,u+d,f+g,T+_).normalize();else if(t===Ma)i[5].setComponents(s,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ua.x=r.normal.x>0?e.max.x:e.min.x,ua.y=r.normal.y>0?e.max.y:e.min.y,ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ko(){let a=null,e=!1,t=null,i=null;function r(n,o){t(n,o),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){a=n}}}function Kc(a,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,u=c.usage,m=d.byteLength,v=a.createBuffer();a.bindBuffer(h,v),a.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=a.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=a.SHORT;else if(d instanceof Uint32Array)g=a.UNSIGNED_INT;else if(d instanceof Int32Array)g=a.INT;else if(d instanceof Int8Array)g=a.BYTE;else if(d instanceof Uint8Array)g=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,h,d){const u=h.array,m=h._updateRange,v=h.updateRanges;if(a.bindBuffer(d,c),m.count===-1&&v.length===0&&a.bufferSubData(d,0,u),v.length!==0){for(let g=0,f=v.length;g<f;g++){const p=v[g];t?a.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):a.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(t?a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(a.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,h),d.version=c.version}}return{get:o,remove:s,update:l}}class _t extends ii{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,h=l+1,d=e/s,u=t/l,m=[],v=[],g=[],f=[];for(let p=0;p<h;p++){const w=p*u-o;for(let _=0;_<c;_++){const T=_*d-n;v.push(T,-w,0),g.push(0,0,1),f.push(_/s),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<s;w++){const _=w+c*p,T=w+c*(p+1),I=w+1+c*(p+1),A=w+1+c*p;m.push(_,T,A),m.push(T,I,A)}this.setIndex(m),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(g,3)),this.setAttribute("uv",new Mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jc=`#ifdef USE_ALPHAHASH
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
#endif`,eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,th=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rh=`#ifdef USE_AOMAP
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
#endif`,ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nh=`#ifdef USE_BATCHING
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
#endif`,sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ch=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hh=`#ifdef USE_IRIDESCENCE
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
#endif`,dh=`#ifdef USE_BUMPMAP
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
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yh=`#define PI 3.141592653589793
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
} // validated`,bh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sh=`vec3 transformedNormal = objectNormal;
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
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ch=`
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
}`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zh=`#ifdef USE_GRADIENTMAP
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
}`,Fh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vh=`uniform bool receiveShadow;
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
#endif`,Wh=`#ifdef USE_ENVMAP
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
#endif`,jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
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
#endif`,Kh=`struct PhysicalMaterial {
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
}`,Jh=`
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
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,od=`#if defined( USE_POINTS_UV )
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
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
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
#endif`,ud=`#ifdef USE_MORPHTARGETS
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
#endif`,pd=`#ifdef USE_MORPHTARGETS
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
#endif`,md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xd=`#ifdef USE_NORMALMAP
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
#endif`,yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nd=`float getShadowMask() {
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
}`,Od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kd=`#ifdef USE_SKINNING
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
#endif`,zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iu=`#include <common>
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
}`,ru=`#if DEPTH_PACKING == 3200
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
}`,au=`#define DISTANCE
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
}`,nu=`#define DISTANCE
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
}`,su=`varying vec3 vWorldDirection;
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
}`,hu=`#include <common>
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
}`,du=`uniform vec3 diffuse;
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
}`,mu=`#define MATCAP
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
}`,fu=`#define MATCAP
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
}`,_u=`#define PHONG
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
}`,xu=`#define PHONG
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
}`,wu=`uniform float size;
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
}`,Eu=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Jc,alphahash_pars_fragment:Zc,alphamap_fragment:Qc,alphamap_pars_fragment:eh,alphatest_fragment:th,alphatest_pars_fragment:ih,aomap_fragment:rh,aomap_pars_fragment:ah,batching_pars_vertex:nh,batching_vertex:sh,begin_vertex:oh,beginnormal_vertex:lh,bsdfs:ch,iridescence_fragment:hh,bumpmap_pars_fragment:dh,clipping_planes_fragment:uh,clipping_planes_pars_fragment:ph,clipping_planes_pars_vertex:mh,clipping_planes_vertex:fh,color_fragment:gh,color_pars_fragment:vh,color_pars_vertex:_h,color_vertex:xh,common:yh,cube_uv_reflection_fragment:bh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:Mh,displacementmap_vertex:wh,emissivemap_fragment:Eh,emissivemap_pars_fragment:Th,colorspace_fragment:Ah,colorspace_pars_fragment:Ch,envmap_fragment:Rh,envmap_common_pars_fragment:Lh,envmap_pars_fragment:Ph,envmap_pars_vertex:Ih,envmap_physical_pars_fragment:Wh,envmap_vertex:Uh,fog_vertex:Dh,fog_pars_vertex:Nh,fog_fragment:Oh,fog_pars_fragment:kh,gradientmap_pars_fragment:zh,lightmap_fragment:Fh,lightmap_pars_fragment:Bh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:Gh,lights_pars_begin:Vh,lights_toon_fragment:jh,lights_toon_pars_fragment:Xh,lights_phong_fragment:qh,lights_phong_pars_fragment:Yh,lights_physical_fragment:$h,lights_physical_pars_fragment:Kh,lights_fragment_begin:Jh,lights_fragment_maps:Zh,lights_fragment_end:Qh,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:id,logdepthbuf_vertex:rd,map_fragment:ad,map_pars_fragment:nd,map_particle_fragment:sd,map_particle_pars_fragment:od,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphcolor_vertex:hd,morphnormal_vertex:dd,morphtarget_pars_vertex:ud,morphtarget_vertex:pd,normal_fragment_begin:md,normal_fragment_maps:fd,normal_pars_fragment:gd,normal_pars_vertex:vd,normal_vertex:_d,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:bd,clearcoat_pars_fragment:Sd,iridescence_pars_fragment:Md,opaque_fragment:wd,packing:Ed,premultiplied_alpha_fragment:Td,project_vertex:Ad,dithering_fragment:Cd,dithering_pars_fragment:Rd,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Ud,shadowmap_vertex:Dd,shadowmask_pars_fragment:Nd,skinbase_vertex:Od,skinning_pars_vertex:kd,skinning_vertex:zd,skinnormal_vertex:Fd,specularmap_fragment:Bd,specularmap_pars_fragment:Hd,tonemapping_fragment:Gd,tonemapping_pars_fragment:Vd,transmission_fragment:Wd,transmission_pars_fragment:jd,uv_pars_fragment:Xd,uv_pars_vertex:qd,uv_vertex:Yd,worldpos_vertex:$d,background_vert:Kd,background_frag:Jd,backgroundCube_vert:Zd,backgroundCube_frag:Qd,cube_vert:eu,cube_frag:tu,depth_vert:iu,depth_frag:ru,distanceRGBA_vert:au,distanceRGBA_frag:nu,equirect_vert:su,equirect_frag:ou,linedashed_vert:lu,linedashed_frag:cu,meshbasic_vert:hu,meshbasic_frag:du,meshlambert_vert:uu,meshlambert_frag:pu,meshmatcap_vert:mu,meshmatcap_frag:fu,meshnormal_vert:gu,meshnormal_frag:vu,meshphong_vert:_u,meshphong_frag:xu,meshphysical_vert:yu,meshphysical_frag:bu,meshtoon_vert:Su,meshtoon_frag:Mu,points_vert:wu,points_frag:Eu,shadow_vert:Tu,shadow_frag:Au,sprite_vert:Cu,sprite_frag:Ru},ne={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ti={basic:{uniforms:At([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:At([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new je(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:At([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:At([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:At([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new je(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:At([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:At([ne.points,ne.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:At([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:At([ne.common,ne.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:At([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:At([ne.sprite,ne.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:At([ne.common,ne.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:At([ne.lights,ne.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};ti.physical={uniforms:At([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const pa={r:0,b:0,g:0};function Lu(a,e,t,i,r,n,o){const s=new je(0);let l=n===!0?0:1,c,h,d=null,u=0,m=null;function v(f,p){let w=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?g(s,l):_&&_.isColor&&(g(_,1),w=!0);const T=a.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(a.autoClear||w)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ta)?(h===void 0&&(h=new Y(new fe(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:yr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(_.colorSpace)!==et,(d!==_||u!==_.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,m=a.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Y(new _t(2,2),new Wi({name:"BackgroundMaterial",uniforms:yr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(_.colorSpace)!==et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,m=a.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function g(f,p){f.getRGB(pa,qo(a)),i.buffers.color.setClear(pa.r,pa.g,pa.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(f,p=1){s.set(f),l=p,g(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,g(s,l)},render:v}}function Pu(a,e,t,i){const r=a.getParameter(a.MAX_VERTEX_ATTRIBS),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||n!==null,s={},l=f(null);let c=l,h=!1;function d(P,O,V,q,X){let W=!1;if(o){const Q=g(q,V,O);c!==Q&&(c=Q,m(c.object)),W=p(P,q,V,X),W&&w(P,q,V,X)}else{const Q=O.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==Q)&&(c.geometry=q.id,c.program=V.id,c.wireframe=Q,W=!0)}X!==null&&t.update(X,a.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,j(P,O,V,q),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function u(){return i.isWebGL2?a.createVertexArray():n.createVertexArrayOES()}function m(P){return i.isWebGL2?a.bindVertexArray(P):n.bindVertexArrayOES(P)}function v(P){return i.isWebGL2?a.deleteVertexArray(P):n.deleteVertexArrayOES(P)}function g(P,O,V){const q=V.wireframe===!0;let X=s[P.id];X===void 0&&(X={},s[P.id]=X);let W=X[O.id];W===void 0&&(W={},X[O.id]=W);let Q=W[q];return Q===void 0&&(Q=f(u()),W[q]=Q),Q}function f(P){const O=[],V=[],q=[];for(let X=0;X<r;X++)O[X]=0,V[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,O,V,q){const X=c.attributes,W=O.attributes;let Q=0;const te=V.getAttributes();for(const ce in te)if(te[ce].location>=0){const H=X[ce];let $=W[ce];if($===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),H===void 0||H.attribute!==$||$&&H.data!==$.data)return!0;Q++}return c.attributesNum!==Q||c.index!==q}function w(P,O,V,q){const X={},W=O.attributes;let Q=0;const te=V.getAttributes();for(const ce in te)if(te[ce].location>=0){let H=W[ce];H===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));const $={};$.attribute=H,H&&H.data&&($.data=H.data),X[ce]=$,Q++}c.attributes=X,c.attributesNum=Q,c.index=q}function _(){const P=c.newAttributes;for(let O=0,V=P.length;O<V;O++)P[O]=0}function T(P){I(P,0)}function I(P,O){const V=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;V[P]=1,q[P]===0&&(a.enableVertexAttribArray(P),q[P]=1),X[P]!==O&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),X[P]=O)}function A(){const P=c.newAttributes,O=c.enabledAttributes;for(let V=0,q=O.length;V<q;V++)O[V]!==P[V]&&(a.disableVertexAttribArray(V),O[V]=0)}function R(P,O,V,q,X,W,Q){Q===!0?a.vertexAttribIPointer(P,O,V,X,W):a.vertexAttribPointer(P,O,V,q,X,W)}function j(P,O,V,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const X=q.attributes,W=V.getAttributes(),Q=O.defaultAttributeValues;for(const te in W){const ce=W[te];if(ce.location>=0){let H=X[te];if(H===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){const $=H.normalized,ue=H.itemSize,ve=t.get(H);if(ve===void 0)continue;const ge=ve.buffer,Le=ve.type,Pe=ve.bytesPerElement,Ee=i.isWebGL2===!0&&(Le===a.INT||Le===a.UNSIGNED_INT||H.gpuType===Lo);if(H.isInterleavedBufferAttribute){const Xe=H.data,k=Xe.stride,wt=H.offset;if(Xe.isInstancedInterleavedBuffer){for(let ye=0;ye<ce.locationSize;ye++)I(ce.location+ye,Xe.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ye=0;ye<ce.locationSize;ye++)T(ce.location+ye);a.bindBuffer(a.ARRAY_BUFFER,ge);for(let ye=0;ye<ce.locationSize;ye++)R(ce.location+ye,ue/ce.locationSize,Le,$,k*Pe,(wt+ue/ce.locationSize*ye)*Pe,Ee)}else{if(H.isInstancedBufferAttribute){for(let Xe=0;Xe<ce.locationSize;Xe++)I(ce.location+Xe,H.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Xe=0;Xe<ce.locationSize;Xe++)T(ce.location+Xe);a.bindBuffer(a.ARRAY_BUFFER,ge);for(let Xe=0;Xe<ce.locationSize;Xe++)R(ce.location+Xe,ue/ce.locationSize,Le,$,ue*Pe,ue/ce.locationSize*Xe*Pe,Ee)}}else if(Q!==void 0){const $=Q[te];if($!==void 0)switch($.length){case 2:a.vertexAttrib2fv(ce.location,$);break;case 3:a.vertexAttrib3fv(ce.location,$);break;case 4:a.vertexAttrib4fv(ce.location,$);break;default:a.vertexAttrib1fv(ce.location,$)}}}}A()}function b(){B();for(const P in s){const O=s[P];for(const V in O){const q=O[V];for(const X in q)v(q[X].object),delete q[X];delete O[V]}delete s[P]}}function E(P){if(s[P.id]===void 0)return;const O=s[P.id];for(const V in O){const q=O[V];for(const X in q)v(q[X].object),delete q[X];delete O[V]}delete s[P.id]}function G(P){for(const O in s){const V=s[O];if(V[P.id]===void 0)continue;const q=V[P.id];for(const X in q)v(q[X].object),delete q[X];delete V[P.id]}}function B(){ie(),h=!0,c!==l&&(c=l,m(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:ie,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:G,initAttributes:_,enableAttribute:T,disableUnusedAttributes:A}}function Iu(a,e,t,i){const r=i.isWebGL2;let n;function o(h){n=h}function s(h,d){a.drawArrays(n,h,d),t.update(d,n,1)}function l(h,d,u){if(u===0)return;let m,v;if(r)m=a,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](n,h,d,u),t.update(d,n,u)}function c(h,d,u){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u;v++)this.render(h[v],d[v]);else{m.multiDrawArraysWEBGL(n,h,0,d,0,u);let v=0;for(let g=0;g<u;g++)v+=d[g];t.update(v,n,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function Uu(a,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=n(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),u=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),f=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),w=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,T=o||e.has("OES_texture_float"),I=_&&T,A=o?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:I,maxSamples:A}}function Du(a){const e=this;let t=null,i=0,r=!1,n=!1;const o=new Di,s=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||i!==0||r;return r=u,i=d.length,m},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const v=d.clippingPlanes,g=d.clipIntersection,f=d.clipShadows,p=a.get(d);if(!r||v===null||v.length===0||n&&!f)n?h(null):c();else{const w=n?0:i,_=w*4;let T=p.clippingState||null;l.value=T,T=h(v,u,_,m);for(let I=0;I!==_;++I)T[I]=t[I];p.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,v){const g=d!==null?d.length:0;let f=null;if(g!==0){if(f=l.value,v!==!0||f===null){const p=m+g*4,w=u.matrixWorldInverse;s.getNormalMatrix(w),(f===null||f.length<p)&&(f=new Float32Array(p));for(let _=0,T=m;_!==g;++_,T+=4)o.copy(d[_]).applyMatrix4(w,s),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function Nu(a){let e=new WeakMap;function t(o,s){return s===vn?o.mapping=gr:s===_n&&(o.mapping=vr),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===vn||s===_n)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qc(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class Jo extends Yo{constructor(e=-1,t=1,i=1,r=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,o=n+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(n,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hr=4,Hs=[.125,.215,.35,.446,.526,.582],ki=20,nn=new Jo,Gs=new je;let sn=null,on=0,ln=0;const Ni=(1+Math.sqrt(5))/2,sr=1/Ni,Vs=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Ni,sr),new S(0,Ni,-sr),new S(sr,0,Ni),new S(-sr,0,Ni),new S(Ni,sr,0),new S(-Ni,sr,0)];class Ws{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){sn=this._renderer.getRenderTarget(),on=this._renderer.getActiveCubeFace(),ln=this._renderer.getActiveMipmapLevel(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sn,on,ln),e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sn=this._renderer.getRenderTarget(),on=this._renderer.getActiveCubeFace(),ln=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Fr,format:Kt,colorSpace:pi,depthBuffer:!1},r=js(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=js(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ou(n)),this._blurMaterial=ku(n,e,t)}return r}_compileMaterial(e){const t=new Y(this._lodPlanes[0],e);this._renderer.compile(t,nn)}_sceneToCubeUV(e,t,i,r){const n=new It(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Gs),l.toneMapping=wi,l.autoClear=!1;const d=new ui({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),u=new Y(new fe,d);let m=!1;const v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,m=!0):(d.color.copy(Gs),m=!0);for(let g=0;g<6;g++){const f=g%3;f===0?(n.up.set(0,o[g],0),n.lookAt(s[g],0,0)):f===1?(n.up.set(0,0,o[g]),n.lookAt(0,s[g],0)):(n.up.set(0,o[g],0),n.lookAt(0,0,s[g]));const p=this._cubeSize;ma(r,f*p,g>2?p:0,p,p),l.setRenderTarget(r),m&&l.render(u,n),l.render(e,n)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===gr||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xs());const n=r?this._cubemapMaterial:this._equirectMaterial,o=new Y(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;const l=this._cubeSize;ma(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,nn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vs[(r-1)%Vs.length];this._blur(e,r-1,r,n,o)}t.autoClear=i}_blur(e,t,i,r,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",n),this._halfBlur(o,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Y(this._lodPlanes[r],c),u=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(n)?Math.PI/(2*m):2*Math.PI/(2*ki-1),g=n/v,f=isFinite(n)?1+Math.floor(h*g):ki;f>ki&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ki}`);const p=[];let w=0;for(let R=0;R<ki;++R){const j=R/g,b=Math.exp(-j*j/2);p.push(b),R===0?w+=b:R<f&&(w+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const T=this._sizeLods[r],I=3*T*(r>_-hr?r-_+hr:0),A=4*(this._cubeSize-T);ma(t,I,A,3*T,2*T),l.setRenderTarget(t),l.render(d,nn)}}function Ou(a){const e=[],t=[],i=[];let r=a;const n=a-hr+1+Hs.length;for(let o=0;o<n;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>a-hr?l=Hs[o-a+hr-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,g=3,f=2,p=1,w=new Float32Array(g*v*m),_=new Float32Array(f*v*m),T=new Float32Array(p*v*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,j=A>2?0:-1,b=[R,j,0,R+2/3,j,0,R+2/3,j+1,0,R,j,0,R+2/3,j+1,0,R,j+1,0];w.set(b,g*v*A),_.set(u,f*v*A);const E=[A,A,A,A,A,A];T.set(E,p*v*A)}const I=new ii;I.setAttribute("position",new Qt(w,g)),I.setAttribute("uv",new Qt(_,f)),I.setAttribute("faceIndex",new Qt(T,p)),e.push(I),r>hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function js(a,e,t){const i=new Vi(a,e,t);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ma(a,e,t,i,r){a.viewport.set(e,t,i,r),a.scissor.set(e,t,i,r)}function ku(a,e,t){const i=new Float32Array(ki),r=new S(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:In(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Xs(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:In(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function qs(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:In(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function In(){return`

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
	`}function zu(a){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===vn||l===_n,h=l===gr||l===vr;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new Ws(a)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Ws(a));const u=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,u),s.addEventListener("dispose",n),u.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function n(s){const l=s.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Fu(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bu(a,e,t,i){const r={},n=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);for(const v in u.morphAttributes){const g=u.morphAttributes[v];for(let f=0,p=g.length;f<p;f++)e.remove(g[f])}u.removeEventListener("dispose",o),delete r[u.id];const m=n.get(u);m&&(e.remove(m),n.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function s(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const v in u)e.update(u[v],a.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let f=0,p=g.length;f<p;f++)e.update(g[f],a.ARRAY_BUFFER)}}function c(d){const u=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const w=m.array;g=m.version;for(let _=0,T=w.length;_<T;_+=3){const I=w[_+0],A=w[_+1],R=w[_+2];u.push(I,A,A,R,R,I)}}else if(v!==void 0){const w=v.array;g=v.version;for(let _=0,T=w.length/3-1;_<T;_+=3){const I=_+0,A=_+1,R=_+2;u.push(I,A,A,R,R,I)}}else return;const f=new(Bo(u)?Xo:jo)(u,1);f.version=g;const p=n.get(d);p&&e.remove(p),n.set(d,f)}function h(d){const u=n.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return n.get(d)}return{get:s,update:l,getWireframeAttribute:h}}function Hu(a,e,t,i){const r=i.isWebGL2;let n;function o(m){n=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function h(m,v){a.drawElements(n,v,s,m*l),t.update(v,n,1)}function d(m,v,g){if(g===0)return;let f,p;if(r)f=a,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](n,v,s,m*l,g),t.update(v,n,g)}function u(m,v,g){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<g;p++)this.render(m[p]/l,v[p]);else{f.multiDrawElementsWEBGL(n,v,0,s,m,0,g);let p=0;for(let w=0;w<g;w++)p+=v[w];t.update(p,n,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Gu(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,s){switch(t.calls++,o){case a.TRIANGLES:t.triangles+=s*(n/3);break;case a.LINES:t.lines+=s*(n/2);break;case a.LINE_STRIP:t.lines+=s*(n-1);break;case a.LINE_LOOP:t.lines+=s*n;break;case a.POINTS:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Vu(a,e){return a[0]-e[0]}function Wu(a,e){return Math.abs(e[1])-Math.abs(a[1])}function ju(a,e,t){const i={},r=new Float32Array(8),n=new WeakMap,o=new it,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0;let g=n.get(h);if(g===void 0||g.count!==v){let w=function(){ie.dispose(),n.delete(h),h.removeEventListener("dispose",w)};g!==void 0&&g.texture.dispose();const _=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],j=h.morphAttributes.color||[];let b=0;_===!0&&(b=1),T===!0&&(b=2),I===!0&&(b=3);let E=h.attributes.position.count*b,G=1;E>e.maxTextureSize&&(G=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const B=new Float32Array(E*G*4*v),ie=new Vo(B,E,G,v);ie.type=Si,ie.needsUpdate=!0;const P=b*4;for(let O=0;O<v;O++){const V=A[O],q=R[O],X=j[O],W=E*G*4*O;for(let Q=0;Q<V.count;Q++){const te=Q*P;_===!0&&(o.fromBufferAttribute(V,Q),B[W+te+0]=o.x,B[W+te+1]=o.y,B[W+te+2]=o.z,B[W+te+3]=0),T===!0&&(o.fromBufferAttribute(q,Q),B[W+te+4]=o.x,B[W+te+5]=o.y,B[W+te+6]=o.z,B[W+te+7]=0),I===!0&&(o.fromBufferAttribute(X,Q),B[W+te+8]=o.x,B[W+te+9]=o.y,B[W+te+10]=o.z,B[W+te+11]=X.itemSize===4?o.w:1)}}g={count:v,texture:ie,size:new ze(E,G)},n.set(h,g),h.addEventListener("dispose",w)}let f=0;for(let w=0;w<u.length;w++)f+=u[w];const p=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(a,"morphTargetBaseInfluence",p),d.getUniforms().setValue(a,"morphTargetInfluences",u),d.getUniforms().setValue(a,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}else{const m=u===void 0?0:u.length;let v=i[h.id];if(v===void 0||v.length!==m){v=[];for(let _=0;_<m;_++)v[_]=[_,0];i[h.id]=v}for(let _=0;_<m;_++){const T=v[_];T[0]=_,T[1]=u[_]}v.sort(Wu);for(let _=0;_<8;_++)_<m&&v[_][1]?(s[_][0]=v[_][0],s[_][1]=v[_][1]):(s[_][0]=Number.MAX_SAFE_INTEGER,s[_][1]=0);s.sort(Vu);const g=h.morphAttributes.position,f=h.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const T=s[_],I=T[0],A=T[1];I!==Number.MAX_SAFE_INTEGER&&A?(g&&h.getAttribute("morphTarget"+_)!==g[I]&&h.setAttribute("morphTarget"+_,g[I]),f&&h.getAttribute("morphNormal"+_)!==f[I]&&h.setAttribute("morphNormal"+_,f[I]),r[_]=A,p+=A):(g&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),f&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}const w=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(a,"morphTargetBaseInfluence",w),d.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:l}}function Xu(a,e,t,i){let r=new WeakMap;function n(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:o}}class Zo extends Pt{constructor(e,t,i,r,n,o,s,l,c,h){if(h=h!==void 0?h:Bi,h!==Bi&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Bi&&(i=bi),i===void 0&&h===_r&&(i=Fi),super(null,r,n,o,s,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qo=new Pt,el=new Zo(1,1);el.compareFunction=Fo;const tl=new Vo,il=new Lc,rl=new $o,Ys=[],$s=[],Ks=new Float32Array(16),Js=new Float32Array(9),Zs=new Float32Array(4);function Mr(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let n=Ys[r];if(n===void 0&&(n=new Float32Array(r),Ys[r]=n),e!==0){i.toArray(n,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(n,s)}return n}function ut(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function pt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Ra(a,e){let t=$s[e];t===void 0&&(t=new Int32Array(e),$s[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function qu(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Yu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;a.uniform2fv(this.addr,e),pt(t,e)}}function $u(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;a.uniform3fv(this.addr,e),pt(t,e)}}function Ku(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;a.uniform4fv(this.addr,e),pt(t,e)}}function Ju(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ut(t,i))return;Zs.set(i),a.uniformMatrix2fv(this.addr,!1,Zs),pt(t,i)}}function Zu(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ut(t,i))return;Js.set(i),a.uniformMatrix3fv(this.addr,!1,Js),pt(t,i)}}function Qu(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ut(t,i))return;Ks.set(i),a.uniformMatrix4fv(this.addr,!1,Ks),pt(t,i)}}function ep(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function tp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;a.uniform2iv(this.addr,e),pt(t,e)}}function ip(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;a.uniform3iv(this.addr,e),pt(t,e)}}function rp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;a.uniform4iv(this.addr,e),pt(t,e)}}function ap(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function np(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;a.uniform2uiv(this.addr,e),pt(t,e)}}function sp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;a.uniform3uiv(this.addr,e),pt(t,e)}}function op(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;a.uniform4uiv(this.addr,e),pt(t,e)}}function lp(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r);const n=this.type===a.SAMPLER_2D_SHADOW?el:Qo;t.setTexture2D(e||n,r)}function cp(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||il,r)}function hp(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rl,r)}function dp(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||tl,r)}function up(a){switch(a){case 5126:return qu;case 35664:return Yu;case 35665:return $u;case 35666:return Ku;case 35674:return Ju;case 35675:return Zu;case 35676:return Qu;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return ap;case 36294:return np;case 36295:return sp;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(a,e){a.uniform1fv(this.addr,e)}function mp(a,e){const t=Mr(e,this.size,2);a.uniform2fv(this.addr,t)}function fp(a,e){const t=Mr(e,this.size,3);a.uniform3fv(this.addr,t)}function gp(a,e){const t=Mr(e,this.size,4);a.uniform4fv(this.addr,t)}function vp(a,e){const t=Mr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function _p(a,e){const t=Mr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function xp(a,e){const t=Mr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function yp(a,e){a.uniform1iv(this.addr,e)}function bp(a,e){a.uniform2iv(this.addr,e)}function Sp(a,e){a.uniform3iv(this.addr,e)}function Mp(a,e){a.uniform4iv(this.addr,e)}function wp(a,e){a.uniform1uiv(this.addr,e)}function Ep(a,e){a.uniform2uiv(this.addr,e)}function Tp(a,e){a.uniform3uiv(this.addr,e)}function Ap(a,e){a.uniform4uiv(this.addr,e)}function Cp(a,e,t){const i=this.cache,r=e.length,n=Ra(t,r);ut(i,n)||(a.uniform1iv(this.addr,n),pt(i,n));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Qo,n[o])}function Rp(a,e,t){const i=this.cache,r=e.length,n=Ra(t,r);ut(i,n)||(a.uniform1iv(this.addr,n),pt(i,n));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||il,n[o])}function Lp(a,e,t){const i=this.cache,r=e.length,n=Ra(t,r);ut(i,n)||(a.uniform1iv(this.addr,n),pt(i,n));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||rl,n[o])}function Pp(a,e,t){const i=this.cache,r=e.length,n=Ra(t,r);ut(i,n)||(a.uniform1iv(this.addr,n),pt(i,n));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||tl,n[o])}function Ip(a){switch(a){case 5126:return pp;case 35664:return mp;case 35665:return fp;case 35666:return gp;case 35674:return vp;case 35675:return _p;case 35676:return xp;case 5124:case 35670:return yp;case 35667:case 35671:return bp;case 35668:case 35672:return Sp;case 35669:case 35673:return Mp;case 5125:return wp;case 36294:return Ep;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Pp}}class Up{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=up(t.type)}}class Dp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ip(t.type)}}class Np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,o=r.length;n!==o;++n){const s=r[n];s.setValue(e,t[s.id],i)}}}const cn=/(\w+)(\])?(\[|\.)?/g;function Qs(a,e){a.seq.push(e),a.map[e.id]=e}function Op(a,e,t){const i=a.name,r=i.length;for(cn.lastIndex=0;;){const n=cn.exec(i),o=cn.lastIndex;let s=n[1];const l=n[2]==="]",c=n[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Qs(t,c===void 0?new Up(s,a,e):new Dp(s,a,e));break}else{let h=t.map[s];h===void 0&&(h=new Np(s),Qs(t,h)),t=h}}}class va{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),o=e.getUniformLocation(t,n.name);Op(n,o,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,o=t.length;n!==o;++n){const s=t[n],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function eo(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const kp=37297;let zp=0;function Fp(a,e){const t=a.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=r;o<n;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function Bp(a){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(a);let i;switch(e===t?i="":e===Sa&&t===ba?i="LinearDisplayP3ToLinearSRGB":e===ba&&t===Sa&&(i="LinearSRGBToLinearDisplayP3"),a){case pi:case Aa:return[i,"LinearTransferOETF"];case ct:case Cn:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[i,"LinearTransferOETF"]}}function to(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),r=a.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const o=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+Fp(a.getShaderSource(e),o)}else return r}function Hp(a,e){const t=Bp(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gp(a,e){let t;switch(e){case Hl:t="Linear";break;case Gl:t="Reinhard";break;case Vl:t="OptimizedCineon";break;case Co:t="ACESFilmic";break;case jl:t="AgX";break;case Wl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vp(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function Wp(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(dr).join(`
`)}function jp(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xp(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const n=a.getActiveAttrib(e,r),o=n.name;let s=1;n.type===a.FLOAT_MAT2&&(s=2),n.type===a.FLOAT_MAT3&&(s=3),n.type===a.FLOAT_MAT4&&(s=4),t[o]={type:n.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function dr(a){return a!==""}function io(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ro(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sn(a){return a.replace(qp,$p)}const Yp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $p(a,e){let t=Ue[e];if(t===void 0){const i=Yp.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sn(t)}const Kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ao(a){return a.replace(Kp,Jp)}function Jp(a,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function no(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zp(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Tn?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===mn?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Qp(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case gr:case vr:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function em(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function tm(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Ao:e="ENVMAP_BLENDING_MULTIPLY";break;case Fl:e="ENVMAP_BLENDING_MIX";break;case Bl:e="ENVMAP_BLENDING_ADD";break}return e}function im(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function rm(a,e,t,i){const r=a.getContext(),n=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Zp(t),c=Qp(t),h=em(t),d=tm(t),u=im(t),m=t.isWebGL2?"":Vp(t),v=Wp(t),g=jp(n),f=r.createProgram();let p,w,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`),w=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),w.length>0&&(w+=`
`)):(p=[no(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),w=[m,no(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==wi?Gp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Hp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=Sn(o),o=io(o,t),o=ro(o,t),s=Sn(s),s=io(s,t),s=ro(s,t),o=ao(o),s=ao(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ms?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ms?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const T=_+p+o,I=_+w+s,A=eo(r,r.VERTEX_SHADER,T),R=eo(r,r.FRAGMENT_SHADER,I);r.attachShader(f,A),r.attachShader(f,R),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function j(B){if(a.debug.checkShaderErrors){const ie=r.getProgramInfoLog(f).trim(),P=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(R).trim();let V=!0,q=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(V=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(r,f,A,R);else{const X=to(r,A,"vertex"),W=to(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+X+`
`+W)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(P===""||O==="")&&(q=!1);q&&(B.diagnostics={runnable:V,programLog:ie,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:w}})}r.deleteShader(A),r.deleteShader(R),b=new va(r,f),E=Xp(r,f)}let b;this.getUniforms=function(){return b===void 0&&j(this),b};let E;this.getAttributes=function(){return E===void 0&&j(this),E};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(f,kp)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=R,this}let am=0;class nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sm(e),t.set(e,i)),i}}class sm{constructor(e){this.id=am++,this.code=e,this.usedTimes=0}}function om(a,e,t,i,r,n,o){const s=new Ln,l=new nm,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,u=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function f(b,E,G,B,ie){const P=B.fog,O=ie.geometry,V=b.isMeshStandardMaterial?B.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),X=q&&q.mapping===Ta?q.image.height:null,W=v[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,te=Q!==void 0?Q.length:0;let ce=0;O.morphAttributes.position!==void 0&&(ce=1),O.morphAttributes.normal!==void 0&&(ce=2),O.morphAttributes.color!==void 0&&(ce=3);let H,$,ue,ve;if(W){const ot=ti[W];H=ot.vertexShader,$=ot.fragmentShader}else H=b.vertexShader,$=b.fragmentShader,l.update(b),ue=l.getVertexShaderID(b),ve=l.getFragmentShaderID(b);const ge=a.getRenderTarget(),Le=ie.isInstancedMesh===!0,Pe=ie.isBatchedMesh===!0,Ee=!!b.map,Xe=!!b.matcap,k=!!q,wt=!!b.aoMap,ye=!!b.lightMap,Ce=!!b.bumpMap,pe=!!b.normalMap,rt=!!b.displacementMap,De=!!b.emissiveMap,M=!!b.metalnessMap,x=!!b.roughnessMap,N=b.anisotropy>0,ee=b.clearcoat>0,J=b.iridescence>0,Z=b.sheen>0,me=b.transmission>0,oe=N&&!!b.anisotropyMap,he=ee&&!!b.clearcoatMap,Me=ee&&!!b.clearcoatNormalMap,Ne=ee&&!!b.clearcoatRoughnessMap,K=J&&!!b.iridescenceMap,$e=J&&!!b.iridescenceThicknessMap,Ge=Z&&!!b.sheenColorMap,Ae=Z&&!!b.sheenRoughnessMap,xe=!!b.specularMap,de=!!b.specularColorMap,Ie=!!b.specularIntensityMap,Ye=me&&!!b.transmissionMap,at=me&&!!b.thicknessMap,Fe=!!b.gradientMap,re=!!b.alphaMap,L=b.alphaTest>0,ae=!!b.alphaHash,le=!!b.extensions,Re=!!O.attributes.uv1,be=!!O.attributes.uv2,Je=!!O.attributes.uv3;let Ze=wi;return b.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ze=a.toneMapping),{isWebGL2:h,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:H,fragmentShader:$,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Pe,instancing:Le,instancingColor:Le&&ie.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ge===null?a.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:pi,map:Ee,matcap:Xe,envMap:k,envMapMode:k&&q.mapping,envMapCubeUVHeight:X,aoMap:wt,lightMap:ye,bumpMap:Ce,normalMap:pe,displacementMap:u&&rt,emissiveMap:De,normalMapObjectSpace:pe&&b.normalMapType===rc,normalMapTangentSpace:pe&&b.normalMapType===zo,metalnessMap:M,roughnessMap:x,anisotropy:N,anisotropyMap:oe,clearcoat:ee,clearcoatMap:he,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ne,iridescence:J,iridescenceMap:K,iridescenceThicknessMap:$e,sheen:Z,sheenColorMap:Ge,sheenRoughnessMap:Ae,specularMap:xe,specularColorMap:de,specularIntensityMap:Ie,transmission:me,transmissionMap:Ye,thicknessMap:at,gradientMap:Fe,opaque:b.transparent===!1&&b.blending===mr,alphaMap:re,alphaTest:L,alphaHash:ae,combine:b.combine,mapUv:Ee&&g(b.map.channel),aoMapUv:wt&&g(b.aoMap.channel),lightMapUv:ye&&g(b.lightMap.channel),bumpMapUv:Ce&&g(b.bumpMap.channel),normalMapUv:pe&&g(b.normalMap.channel),displacementMapUv:rt&&g(b.displacementMap.channel),emissiveMapUv:De&&g(b.emissiveMap.channel),metalnessMapUv:M&&g(b.metalnessMap.channel),roughnessMapUv:x&&g(b.roughnessMap.channel),anisotropyMapUv:oe&&g(b.anisotropyMap.channel),clearcoatMapUv:he&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Me&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(b.sheenRoughnessMap.channel),specularMapUv:xe&&g(b.specularMap.channel),specularColorMapUv:de&&g(b.specularColorMap.channel),specularIntensityMapUv:Ie&&g(b.specularIntensityMap.channel),transmissionMapUv:Ye&&g(b.transmissionMap.channel),thicknessMapUv:at&&g(b.thicknessMap.channel),alphaMapUv:re&&g(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(pe||N),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:be,vertexUv3s:Je,pointsUvs:ie.isPoints===!0&&!!O.attributes.uv&&(Ee||re),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ce,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&G.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ze,useLegacyLights:a._useLegacyLights,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ot,flipSided:b.side===Ut,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:le&&b.extensions.derivatives===!0,extensionFragDepth:le&&b.extensions.fragDepth===!0,extensionDrawBuffers:le&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)E.push(G),E.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(w(E,b),_(E,b),E.push(a.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function w(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function _(b,E){s.disableAll(),E.isWebGL2&&s.enable(0),E.supportsVertexTextures&&s.enable(1),E.instancing&&s.enable(2),E.instancingColor&&s.enable(3),E.matcap&&s.enable(4),E.envMap&&s.enable(5),E.normalMapObjectSpace&&s.enable(6),E.normalMapTangentSpace&&s.enable(7),E.clearcoat&&s.enable(8),E.iridescence&&s.enable(9),E.alphaTest&&s.enable(10),E.vertexColors&&s.enable(11),E.vertexAlphas&&s.enable(12),E.vertexUv1s&&s.enable(13),E.vertexUv2s&&s.enable(14),E.vertexUv3s&&s.enable(15),E.vertexTangents&&s.enable(16),E.anisotropy&&s.enable(17),E.alphaHash&&s.enable(18),E.batching&&s.enable(19),b.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.skinning&&s.enable(4),E.morphTargets&&s.enable(5),E.morphNormals&&s.enable(6),E.morphColors&&s.enable(7),E.premultipliedAlpha&&s.enable(8),E.shadowMapEnabled&&s.enable(9),E.useLegacyLights&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),b.push(s.mask)}function T(b){const E=v[b.type];let G;if(E){const B=ti[E];G=Vc.clone(B.uniforms)}else G=b.uniforms;return G}function I(b,E){let G;for(let B=0,ie=c.length;B<ie;B++){const P=c[B];if(P.cacheKey===E){G=P,++G.usedTimes;break}}return G===void 0&&(G=new rm(a,E,b,n),c.push(G)),G}function A(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function j(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:T,acquireProgram:I,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:j}}function lm(){let a=new WeakMap;function e(n){let o=a.get(n);return o===void 0&&(o={},a.set(n,o)),o}function t(n){a.delete(n)}function i(n,o,s){a.get(n)[o]=s}function r(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function cm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function so(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function oo(){const a=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function o(d,u,m,v,g,f){let p=a[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:f},a[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=f),e++,p}function s(d,u,m,v,g,f){const p=o(d,u,m,v,g,f);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(d,u,m,v,g,f){const p=o(d,u,m,v,g,f);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||cm),i.length>1&&i.sort(u||so),r.length>1&&r.sort(u||so)}function h(){for(let d=e,u=a.length;d<u;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:s,unshift:l,finish:h,sort:c}}function hm(){let a=new WeakMap;function e(i,r){const n=a.get(i);let o;return n===void 0?(o=new oo,a.set(i,[o])):r>=n.length?(o=new oo,n.push(o)):o=n[r],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function dm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new je};break;case"SpotLight":t={position:new S,direction:new S,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new S,halfWidth:new S,halfHeight:new S};break}return a[e.id]=t,t}}}function um(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let pm=0;function mm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function fm(a,e){const t=new dm,i=um(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new S);const n=new S,o=new tt,s=new tt;function l(h,d){let u=0,m=0,v=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let g=0,f=0,p=0,w=0,_=0,T=0,I=0,A=0,R=0,j=0,b=0;h.sort(mm);const E=d===!0?Math.PI:1;for(let B=0,ie=h.length;B<ie;B++){const P=h[B],O=P.color,V=P.intensity,q=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*V*E,m+=O.g*V*E,v+=O.b*V*E;else if(P.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(P.sh.coefficients[W],V);b++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const Q=P.shadow,te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,r.directionalShadow[g]=te,r.directionalShadowMap[g]=X,r.directionalShadowMatrix[g]=P.shadow.matrix,T++}r.directional[g]=W,g++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(O).multiplyScalar(V*E),W.distance=q,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,r.spot[p]=W;const Q=P.shadow;if(P.map&&(r.spotLightMap[R]=P.map,R++,Q.updateMatrices(P),P.castShadow&&j++),r.spotLightMatrix[p]=Q.matrix,P.castShadow){const te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,r.spotShadow[p]=te,r.spotShadowMap[p]=X,A++}p++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(O).multiplyScalar(V),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),r.rectArea[w]=W,w++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*E),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Q=P.shadow,te=i.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,r.pointShadow[f]=te,r.pointShadowMap[f]=X,r.pointShadowMatrix[f]=P.shadow.matrix,I++}r.point[f]=W,f++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(V*E),W.groundColor.copy(P.groundColor).multiplyScalar(V*E),r.hemi[_]=W,_++}}w>0&&(e.isWebGL2?a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=m,r.ambient[2]=v;const G=r.hash;(G.directionalLength!==g||G.pointLength!==f||G.spotLength!==p||G.rectAreaLength!==w||G.hemiLength!==_||G.numDirectionalShadows!==T||G.numPointShadows!==I||G.numSpotShadows!==A||G.numSpotMaps!==R||G.numLightProbes!==b)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=w,r.point.length=f,r.hemi.length=_,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=A+R-j,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=j,r.numLightProbes=b,G.directionalLength=g,G.pointLength=f,G.spotLength=p,G.rectAreaLength=w,G.hemiLength=_,G.numDirectionalShadows=T,G.numPointShadows=I,G.numSpotShadows=A,G.numSpotMaps=R,G.numLightProbes=b,r.version=pm++)}function c(h,d){let u=0,m=0,v=0,g=0,f=0;const p=d.matrixWorldInverse;for(let w=0,_=h.length;w<_;w++){const T=h[w];if(T.isDirectionalLight){const I=r.directional[u];I.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(n),I.direction.transformDirection(p),u++}else if(T.isSpotLight){const I=r.spot[v];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(n),I.direction.transformDirection(p),v++}else if(T.isRectAreaLight){const I=r.rectArea[g];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),s.identity(),o.copy(T.matrixWorld),o.premultiply(p),s.extractRotation(o),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(s),I.halfHeight.applyMatrix4(s),g++}else if(T.isPointLight){const I=r.point[m];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),m++}else if(T.isHemisphereLight){const I=r.hemi[f];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:r}}function lo(a,e){const t=new fm(a,e),i=[],r=[];function n(){i.length=0,r.length=0}function o(h){i.push(h)}function s(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function gm(a,e){let t=new WeakMap;function i(n,o=0){const s=t.get(n);let l;return s===void 0?(l=new lo(a,e),t.set(n,[l])):o>=s.length?(l=new lo(a,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class vm extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _m extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
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
}`;function bm(a,e,t){let i=new Pn;const r=new ze,n=new ze,o=new it,s=new vm({depthPacking:ic}),l=new _m,c={},h=t.maxTextureSize,d={[Ti]:Ut,[Ut]:Ti,[Ot]:Ot},u=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:xm,fragmentShader:ym}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new ii;v.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Y(v,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tn;let p=this.type;this.render=function(A,R,j){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const b=a.getRenderTarget(),E=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),B=a.state;B.setBlending(Mi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const ie=p!==ci&&this.type===ci,P=p===ci&&this.type!==ci;for(let O=0,V=A.length;O<V;O++){const q=A[O],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const W=X.getFrameExtents();if(r.multiply(W),n.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(n.x=Math.floor(h/W.x),r.x=n.x*W.x,X.mapSize.x=n.x),r.y>h&&(n.y=Math.floor(h/W.y),r.y=n.y*W.y,X.mapSize.y=n.y)),X.map===null||ie===!0||P===!0){const te=this.type!==ci?{minFilter:Rt,magFilter:Rt}:{};X.map!==null&&X.map.dispose(),X.map=new Vi(r.x,r.y,te),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}a.setRenderTarget(X.map),a.clear();const Q=X.getViewportCount();for(let te=0;te<Q;te++){const ce=X.getViewport(te);o.set(n.x*ce.x,n.y*ce.y,n.x*ce.z,n.y*ce.w),B.viewport(o),X.updateMatrices(q,te),i=X.getFrustum(),T(R,j,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===ci&&w(X,j),X.needsUpdate=!1}p=this.type,f.needsUpdate=!1,a.setRenderTarget(b,E,G)};function w(A,R){const j=e.update(g);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vi(r.x,r.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(R,null,j,u,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(R,null,j,m,g,null)}function _(A,R,j,b){let E=null;const G=j.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)E=G;else if(E=j.isPointLight===!0?l:s,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=E.uuid,ie=R.uuid;let P=c[B];P===void 0&&(P={},c[B]=P);let O=P[ie];O===void 0&&(O=E.clone(),P[ie]=O,R.addEventListener("dispose",I)),E=O}if(E.visible=R.visible,E.wireframe=R.wireframe,b===ci?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:d[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,j.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=a.properties.get(E);B.light=j}return E}function T(A,R,j,b,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===ci)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld);const B=e.update(A),ie=A.material;if(Array.isArray(ie)){const P=B.groups;for(let O=0,V=P.length;O<V;O++){const q=P[O],X=ie[q.materialIndex];if(X&&X.visible){const W=_(A,X,b,E);A.onBeforeShadow(a,A,R,j,B,W,q),a.renderBufferDirect(j,null,B,W,A,q),A.onAfterShadow(a,A,R,j,B,W,q)}}}else if(ie.visible){const P=_(A,ie,b,E);A.onBeforeShadow(a,A,R,j,B,P,null),a.renderBufferDirect(j,null,B,P,A,null),A.onAfterShadow(a,A,R,j,B,P,null)}}const G=A.children;for(let B=0,ie=G.length;B<ie;B++)T(G[B],R,j,b,E)}function I(A){A.target.removeEventListener("dispose",I);for(const R in c){const j=c[R],b=A.target.uuid;b in j&&(j[b].dispose(),delete j[b])}}}function Sm(a,e,t){const i=t.isWebGL2;function r(){let L=!1;const ae=new it;let le=null;const Re=new it(0,0,0,0);return{setMask:function(be){le!==be&&!L&&(a.colorMask(be,be,be,be),le=be)},setLocked:function(be){L=be},setClear:function(be,Je,Ze,ot,kt){kt===!0&&(be*=ot,Je*=ot,Ze*=ot),ae.set(be,Je,Ze,ot),Re.equals(ae)===!1&&(a.clearColor(be,Je,Ze,ot),Re.copy(ae))},reset:function(){L=!1,le=null,Re.set(-1,0,0,0)}}}function n(){let L=!1,ae=null,le=null,Re=null;return{setTest:function(be){be?Pe(a.DEPTH_TEST):Ee(a.DEPTH_TEST)},setMask:function(be){ae!==be&&!L&&(a.depthMask(be),ae=be)},setFunc:function(be){if(le!==be){switch(be){case Il:a.depthFunc(a.NEVER);break;case Ul:a.depthFunc(a.ALWAYS);break;case Dl:a.depthFunc(a.LESS);break;case xa:a.depthFunc(a.LEQUAL);break;case Nl:a.depthFunc(a.EQUAL);break;case Ol:a.depthFunc(a.GEQUAL);break;case kl:a.depthFunc(a.GREATER);break;case zl:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}le=be}},setLocked:function(be){L=be},setClear:function(be){Re!==be&&(a.clearDepth(be),Re=be)},reset:function(){L=!1,ae=null,le=null,Re=null}}}function o(){let L=!1,ae=null,le=null,Re=null,be=null,Je=null,Ze=null,ot=null,kt=null;return{setTest:function(Qe){L||(Qe?Pe(a.STENCIL_TEST):Ee(a.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!L&&(a.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,Et,ei){(le!==Qe||Re!==Et||be!==ei)&&(a.stencilFunc(Qe,Et,ei),le=Qe,Re=Et,be=ei)},setOp:function(Qe,Et,ei){(Je!==Qe||Ze!==Et||ot!==ei)&&(a.stencilOp(Qe,Et,ei),Je=Qe,Ze=Et,ot=ei)},setLocked:function(Qe){L=Qe},setClear:function(Qe){kt!==Qe&&(a.clearStencil(Qe),kt=Qe)},reset:function(){L=!1,ae=null,le=null,Re=null,be=null,Je=null,Ze=null,ot=null,kt=null}}}const s=new r,l=new n,c=new o,h=new WeakMap,d=new WeakMap;let u={},m={},v=new WeakMap,g=[],f=null,p=!1,w=null,_=null,T=null,I=null,A=null,R=null,j=null,b=new je(0,0,0),E=0,G=!1,B=null,ie=null,P=null,O=null,V=null;const q=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const Q=a.getParameter(a.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=W>=2);let te=null,ce={};const H=a.getParameter(a.SCISSOR_BOX),$=a.getParameter(a.VIEWPORT),ue=new it().fromArray(H),ve=new it().fromArray($);function ge(L,ae,le,Re){const be=new Uint8Array(4),Je=a.createTexture();a.bindTexture(L,Je),a.texParameteri(L,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(L,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ze=0;Ze<le;Ze++)i&&(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)?a.texImage3D(ae,0,a.RGBA,1,1,Re,0,a.RGBA,a.UNSIGNED_BYTE,be):a.texImage2D(ae+Ze,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,be);return Je}const Le={};Le[a.TEXTURE_2D]=ge(a.TEXTURE_2D,a.TEXTURE_2D,1),Le[a.TEXTURE_CUBE_MAP]=ge(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[a.TEXTURE_2D_ARRAY]=ge(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Le[a.TEXTURE_3D]=ge(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(a.DEPTH_TEST),l.setFunc(xa),De(!1),M(Vn),Pe(a.CULL_FACE),pe(Mi);function Pe(L){u[L]!==!0&&(a.enable(L),u[L]=!0)}function Ee(L){u[L]!==!1&&(a.disable(L),u[L]=!1)}function Xe(L,ae){return m[L]!==ae?(a.bindFramebuffer(L,ae),m[L]=ae,i&&(L===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=ae),L===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=ae)),!0):!1}function k(L,ae){let le=g,Re=!1;if(L)if(le=v.get(ae),le===void 0&&(le=[],v.set(ae,le)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(le.length!==be.length||le[0]!==a.COLOR_ATTACHMENT0){for(let Je=0,Ze=be.length;Je<Ze;Je++)le[Je]=a.COLOR_ATTACHMENT0+Je;le.length=be.length,Re=!0}}else le[0]!==a.COLOR_ATTACHMENT0&&(le[0]=a.COLOR_ATTACHMENT0,Re=!0);else le[0]!==a.BACK&&(le[0]=a.BACK,Re=!0);Re&&(t.isWebGL2?a.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function wt(L){return f!==L?(a.useProgram(L),f=L,!0):!1}const ye={[Oi]:a.FUNC_ADD,[vl]:a.FUNC_SUBTRACT,[_l]:a.FUNC_REVERSE_SUBTRACT};if(i)ye[qn]=a.MIN,ye[Yn]=a.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ye[qn]=L.MIN_EXT,ye[Yn]=L.MAX_EXT)}const Ce={[xl]:a.ZERO,[yl]:a.ONE,[bl]:a.SRC_COLOR,[fn]:a.SRC_ALPHA,[Al]:a.SRC_ALPHA_SATURATE,[El]:a.DST_COLOR,[Ml]:a.DST_ALPHA,[Sl]:a.ONE_MINUS_SRC_COLOR,[gn]:a.ONE_MINUS_SRC_ALPHA,[Tl]:a.ONE_MINUS_DST_COLOR,[wl]:a.ONE_MINUS_DST_ALPHA,[Cl]:a.CONSTANT_COLOR,[Rl]:a.ONE_MINUS_CONSTANT_COLOR,[Ll]:a.CONSTANT_ALPHA,[Pl]:a.ONE_MINUS_CONSTANT_ALPHA};function pe(L,ae,le,Re,be,Je,Ze,ot,kt,Qe){if(L===Mi){p===!0&&(Ee(a.BLEND),p=!1);return}if(p===!1&&(Pe(a.BLEND),p=!0),L!==gl){if(L!==w||Qe!==G){if((_!==Oi||A!==Oi)&&(a.blendEquation(a.FUNC_ADD),_=Oi,A=Oi),Qe)switch(L){case mr:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Wn:a.blendFunc(a.ONE,a.ONE);break;case jn:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Xn:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case mr:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Wn:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case jn:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Xn:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,I=null,R=null,j=null,b.set(0,0,0),E=0,w=L,G=Qe}return}be=be||ae,Je=Je||le,Ze=Ze||Re,(ae!==_||be!==A)&&(a.blendEquationSeparate(ye[ae],ye[be]),_=ae,A=be),(le!==T||Re!==I||Je!==R||Ze!==j)&&(a.blendFuncSeparate(Ce[le],Ce[Re],Ce[Je],Ce[Ze]),T=le,I=Re,R=Je,j=Ze),(ot.equals(b)===!1||kt!==E)&&(a.blendColor(ot.r,ot.g,ot.b,kt),b.copy(ot),E=kt),w=L,G=!1}function rt(L,ae){L.side===Ot?Ee(a.CULL_FACE):Pe(a.CULL_FACE);let le=L.side===Ut;ae&&(le=!le),De(le),L.blending===mr&&L.transparent===!1?pe(Mi):pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),s.setMask(L.colorWrite);const Re=L.stencilWrite;c.setTest(Re),Re&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),N(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(a.SAMPLE_ALPHA_TO_COVERAGE):Ee(a.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){B!==L&&(L?a.frontFace(a.CW):a.frontFace(a.CCW),B=L)}function M(L){L!==pl?(Pe(a.CULL_FACE),L!==ie&&(L===Vn?a.cullFace(a.BACK):L===ml?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ee(a.CULL_FACE),ie=L}function x(L){L!==P&&(X&&a.lineWidth(L),P=L)}function N(L,ae,le){L?(Pe(a.POLYGON_OFFSET_FILL),(O!==ae||V!==le)&&(a.polygonOffset(ae,le),O=ae,V=le)):Ee(a.POLYGON_OFFSET_FILL)}function ee(L){L?Pe(a.SCISSOR_TEST):Ee(a.SCISSOR_TEST)}function J(L){L===void 0&&(L=a.TEXTURE0+q-1),te!==L&&(a.activeTexture(L),te=L)}function Z(L,ae,le){le===void 0&&(te===null?le=a.TEXTURE0+q-1:le=te);let Re=ce[le];Re===void 0&&(Re={type:void 0,texture:void 0},ce[le]=Re),(Re.type!==L||Re.texture!==ae)&&(te!==le&&(a.activeTexture(le),te=le),a.bindTexture(L,ae||Le[L]),Re.type=L,Re.texture=ae)}function me(){const L=ce[te];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function oe(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{a.compressedTexImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $e(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(L){ue.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),ue.copy(L))}function Ye(L){ve.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),ve.copy(L))}function at(L,ae){let le=d.get(ae);le===void 0&&(le=new WeakMap,d.set(ae,le));let Re=le.get(L);Re===void 0&&(Re=a.getUniformBlockIndex(ae,L.name),le.set(L,Re))}function Fe(L,ae){const le=d.get(ae).get(L);h.get(ae)!==le&&(a.uniformBlockBinding(ae,le,L.__bindingPointIndex),h.set(ae,le))}function re(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),i===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},te=null,ce={},m={},v=new WeakMap,g=[],f=null,p=!1,w=null,_=null,T=null,I=null,A=null,R=null,j=null,b=new je(0,0,0),E=0,G=!1,B=null,ie=null,P=null,O=null,V=null,ue.set(0,0,a.canvas.width,a.canvas.height),ve.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Pe,disable:Ee,bindFramebuffer:Xe,drawBuffers:k,useProgram:wt,setBlending:pe,setMaterial:rt,setFlipSided:De,setCullFace:M,setLineWidth:x,setPolygonOffset:N,setScissorTest:ee,activeTexture:J,bindTexture:Z,unbindTexture:me,compressedTexImage2D:oe,compressedTexImage3D:he,texImage2D:xe,texImage3D:de,updateUBOMapping:at,uniformBlockBinding:Fe,texStorage2D:Ge,texStorage3D:Ae,texSubImage2D:Me,texSubImage3D:Ne,compressedTexSubImage2D:K,compressedTexSubImage3D:$e,scissor:Ie,viewport:Ye,reset:re}}function Mm(a,e,t,i,r,n,o){const s=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,x){return m?new OffscreenCanvas(M,x):Br("canvas")}function g(M,x,N,ee){let J=1;if((M.width>ee||M.height>ee)&&(J=ee/Math.max(M.width,M.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const Z=x?wa:Math.floor,me=Z(J*M.width),oe=Z(J*M.height);d===void 0&&(d=v(me,oe));const he=N?v(me,oe):d;return he.width=me,he.height=oe,he.getContext("2d").drawImage(M,0,0,me,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+me+"x"+oe+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function f(M){return bn(M.width)&&bn(M.height)}function p(M){return s?!1:M.wrapS!==$t||M.wrapT!==$t||M.minFilter!==Rt&&M.minFilter!==Ht}function w(M,x){return M.generateMipmaps&&x&&M.minFilter!==Rt&&M.minFilter!==Ht}function _(M){a.generateMipmap(M)}function T(M,x,N,ee,J=!1){if(s===!1)return x;if(M!==null){if(a[M]!==void 0)return a[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=x;if(x===a.RED&&(N===a.FLOAT&&(Z=a.R32F),N===a.HALF_FLOAT&&(Z=a.R16F),N===a.UNSIGNED_BYTE&&(Z=a.R8)),x===a.RED_INTEGER&&(N===a.UNSIGNED_BYTE&&(Z=a.R8UI),N===a.UNSIGNED_SHORT&&(Z=a.R16UI),N===a.UNSIGNED_INT&&(Z=a.R32UI),N===a.BYTE&&(Z=a.R8I),N===a.SHORT&&(Z=a.R16I),N===a.INT&&(Z=a.R32I)),x===a.RG&&(N===a.FLOAT&&(Z=a.RG32F),N===a.HALF_FLOAT&&(Z=a.RG16F),N===a.UNSIGNED_BYTE&&(Z=a.RG8)),x===a.RGBA){const me=J?ya:Ke.getTransfer(ee);N===a.FLOAT&&(Z=a.RGBA32F),N===a.HALF_FLOAT&&(Z=a.RGBA16F),N===a.UNSIGNED_BYTE&&(Z=me===et?a.SRGB8_ALPHA8:a.RGBA8),N===a.UNSIGNED_SHORT_4_4_4_4&&(Z=a.RGBA4),N===a.UNSIGNED_SHORT_5_5_5_1&&(Z=a.RGB5_A1)}return(Z===a.R16F||Z===a.R32F||Z===a.RG16F||Z===a.RG32F||Z===a.RGBA16F||Z===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function I(M,x,N){return w(M,N)===!0||M.isFramebufferTexture&&M.minFilter!==Rt&&M.minFilter!==Ht?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function A(M){return M===Rt||M===$n||M===Na?a.NEAREST:a.LINEAR}function R(M){const x=M.target;x.removeEventListener("dispose",R),b(x),x.isVideoTexture&&h.delete(x)}function j(M){const x=M.target;x.removeEventListener("dispose",j),G(x)}function b(M){const x=i.get(M);if(x.__webglInit===void 0)return;const N=M.source,ee=u.get(N);if(ee){const J=ee[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(M),Object.keys(ee).length===0&&u.delete(N)}i.remove(M)}function E(M){const x=i.get(M);a.deleteTexture(x.__webglTexture);const N=M.source,ee=u.get(N);delete ee[x.__cacheKey],o.memory.textures--}function G(M){const x=M.texture,N=i.get(M),ee=i.get(x);if(ee.__webglTexture!==void 0&&(a.deleteTexture(ee.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(N.__webglFramebuffer[J]))for(let Z=0;Z<N.__webglFramebuffer[J].length;Z++)a.deleteFramebuffer(N.__webglFramebuffer[J][Z]);else a.deleteFramebuffer(N.__webglFramebuffer[J]);N.__webglDepthbuffer&&a.deleteRenderbuffer(N.__webglDepthbuffer[J])}else{if(Array.isArray(N.__webglFramebuffer))for(let J=0;J<N.__webglFramebuffer.length;J++)a.deleteFramebuffer(N.__webglFramebuffer[J]);else a.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&a.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&a.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let J=0;J<N.__webglColorRenderbuffer.length;J++)N.__webglColorRenderbuffer[J]&&a.deleteRenderbuffer(N.__webglColorRenderbuffer[J]);N.__webglDepthRenderbuffer&&a.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let J=0,Z=x.length;J<Z;J++){const me=i.get(x[J]);me.__webglTexture&&(a.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(x[J])}i.remove(x),i.remove(M)}let B=0;function ie(){B=0}function P(){const M=B;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),B+=1,M}function O(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function V(M,x){const N=i.get(M);if(M.isVideoTexture&&rt(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const ee=M.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(N,M,x);return}}t.bindTexture(a.TEXTURE_2D,N.__webglTexture,a.TEXTURE0+x)}function q(M,x){const N=i.get(M);if(M.version>0&&N.__version!==M.version){ue(N,M,x);return}t.bindTexture(a.TEXTURE_2D_ARRAY,N.__webglTexture,a.TEXTURE0+x)}function X(M,x){const N=i.get(M);if(M.version>0&&N.__version!==M.version){ue(N,M,x);return}t.bindTexture(a.TEXTURE_3D,N.__webglTexture,a.TEXTURE0+x)}function W(M,x){const N=i.get(M);if(M.version>0&&N.__version!==M.version){ve(N,M,x);return}t.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+x)}const Q={[kr]:a.REPEAT,[$t]:a.CLAMP_TO_EDGE,[xn]:a.MIRRORED_REPEAT},te={[Rt]:a.NEAREST,[$n]:a.NEAREST_MIPMAP_NEAREST,[Na]:a.NEAREST_MIPMAP_LINEAR,[Ht]:a.LINEAR,[Xl]:a.LINEAR_MIPMAP_NEAREST,[zr]:a.LINEAR_MIPMAP_LINEAR},ce={[ac]:a.NEVER,[hc]:a.ALWAYS,[nc]:a.LESS,[Fo]:a.LEQUAL,[sc]:a.EQUAL,[cc]:a.GEQUAL,[oc]:a.GREATER,[lc]:a.NOTEQUAL};function H(M,x,N){if(N?(a.texParameteri(M,a.TEXTURE_WRAP_S,Q[x.wrapS]),a.texParameteri(M,a.TEXTURE_WRAP_T,Q[x.wrapT]),(M===a.TEXTURE_3D||M===a.TEXTURE_2D_ARRAY)&&a.texParameteri(M,a.TEXTURE_WRAP_R,Q[x.wrapR]),a.texParameteri(M,a.TEXTURE_MAG_FILTER,te[x.magFilter]),a.texParameteri(M,a.TEXTURE_MIN_FILTER,te[x.minFilter])):(a.texParameteri(M,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(M,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(M===a.TEXTURE_3D||M===a.TEXTURE_2D_ARRAY)&&a.texParameteri(M,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(x.wrapS!==$t||x.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(M,a.TEXTURE_MAG_FILTER,A(x.magFilter)),a.texParameteri(M,a.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Rt&&x.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(a.texParameteri(M,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(M,a.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Rt||x.minFilter!==Na&&x.minFilter!==zr||x.type===Si&&e.has("OES_texture_float_linear")===!1||s===!1&&x.type===Fr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(a.texParameterf(M,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function $(M,x){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",R));const ee=x.source;let J=u.get(ee);J===void 0&&(J={},u.set(ee,J));const Z=O(x);if(Z!==M.__cacheKey){J[Z]===void 0&&(J[Z]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[Z].usedTimes++;const me=J[M.__cacheKey];me!==void 0&&(J[M.__cacheKey].usedTimes--,me.usedTimes===0&&E(x)),M.__cacheKey=Z,M.__webglTexture=J[Z].texture}return N}function ue(M,x,N){let ee=a.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=a.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=a.TEXTURE_3D);const J=$(M,x),Z=x.source;t.bindTexture(ee,M.__webglTexture,a.TEXTURE0+N);const me=i.get(Z);if(Z.version!==me.__version||J===!0){t.activeTexture(a.TEXTURE0+N);const oe=Ke.getPrimaries(Ke.workingColorSpace),he=x.colorSpace===Gt?null:Ke.getPrimaries(x.colorSpace),Me=x.colorSpace===Gt||oe===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ne=p(x)&&f(x.image)===!1;let K=g(x.image,Ne,!1,r.maxTextureSize);K=De(x,K);const $e=f(K)||s,Ge=n.convert(x.format,x.colorSpace);let Ae=n.convert(x.type),xe=T(x.internalFormat,Ge,Ae,x.colorSpace,x.isVideoTexture);H(ee,x,$e);let de;const Ie=x.mipmaps,Ye=s&&x.isVideoTexture!==!0&&xe!==Oo,at=me.__version===void 0||J===!0,Fe=I(x,K,$e);if(x.isDepthTexture)xe=a.DEPTH_COMPONENT,s?x.type===Si?xe=a.DEPTH_COMPONENT32F:x.type===bi?xe=a.DEPTH_COMPONENT24:x.type===Fi?xe=a.DEPTH24_STENCIL8:xe=a.DEPTH_COMPONENT16:x.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Bi&&xe===a.DEPTH_COMPONENT&&x.type!==An&&x.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=bi,Ae=n.convert(x.type)),x.format===_r&&xe===a.DEPTH_COMPONENT&&(xe=a.DEPTH_STENCIL,x.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Fi,Ae=n.convert(x.type))),at&&(Ye?t.texStorage2D(a.TEXTURE_2D,1,xe,K.width,K.height):t.texImage2D(a.TEXTURE_2D,0,xe,K.width,K.height,0,Ge,Ae,null));else if(x.isDataTexture)if(Ie.length>0&&$e){Ye&&at&&t.texStorage2D(a.TEXTURE_2D,Fe,xe,Ie[0].width,Ie[0].height);for(let re=0,L=Ie.length;re<L;re++)de=Ie[re],Ye?t.texSubImage2D(a.TEXTURE_2D,re,0,0,de.width,de.height,Ge,Ae,de.data):t.texImage2D(a.TEXTURE_2D,re,xe,de.width,de.height,0,Ge,Ae,de.data);x.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(a.TEXTURE_2D,Fe,xe,K.width,K.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,K.width,K.height,Ge,Ae,K.data)):t.texImage2D(a.TEXTURE_2D,0,xe,K.width,K.height,0,Ge,Ae,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ye&&at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,xe,Ie[0].width,Ie[0].height,K.depth);for(let re=0,L=Ie.length;re<L;re++)de=Ie[re],x.format!==Kt?Ge!==null?Ye?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,K.depth,Ge,de.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,re,xe,de.width,de.height,K.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(a.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,K.depth,Ge,Ae,de.data):t.texImage3D(a.TEXTURE_2D_ARRAY,re,xe,de.width,de.height,K.depth,0,Ge,Ae,de.data)}else{Ye&&at&&t.texStorage2D(a.TEXTURE_2D,Fe,xe,Ie[0].width,Ie[0].height);for(let re=0,L=Ie.length;re<L;re++)de=Ie[re],x.format!==Kt?Ge!==null?Ye?t.compressedTexSubImage2D(a.TEXTURE_2D,re,0,0,de.width,de.height,Ge,de.data):t.compressedTexImage2D(a.TEXTURE_2D,re,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(a.TEXTURE_2D,re,0,0,de.width,de.height,Ge,Ae,de.data):t.texImage2D(a.TEXTURE_2D,re,xe,de.width,de.height,0,Ge,Ae,de.data)}else if(x.isDataArrayTexture)Ye?(at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,xe,K.width,K.height,K.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ge,Ae,K.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,xe,K.width,K.height,K.depth,0,Ge,Ae,K.data);else if(x.isData3DTexture)Ye?(at&&t.texStorage3D(a.TEXTURE_3D,Fe,xe,K.width,K.height,K.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ge,Ae,K.data)):t.texImage3D(a.TEXTURE_3D,0,xe,K.width,K.height,K.depth,0,Ge,Ae,K.data);else if(x.isFramebufferTexture){if(at)if(Ye)t.texStorage2D(a.TEXTURE_2D,Fe,xe,K.width,K.height);else{let re=K.width,L=K.height;for(let ae=0;ae<Fe;ae++)t.texImage2D(a.TEXTURE_2D,ae,xe,re,L,0,Ge,Ae,null),re>>=1,L>>=1}}else if(Ie.length>0&&$e){Ye&&at&&t.texStorage2D(a.TEXTURE_2D,Fe,xe,Ie[0].width,Ie[0].height);for(let re=0,L=Ie.length;re<L;re++)de=Ie[re],Ye?t.texSubImage2D(a.TEXTURE_2D,re,0,0,Ge,Ae,de):t.texImage2D(a.TEXTURE_2D,re,xe,Ge,Ae,de);x.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(a.TEXTURE_2D,Fe,xe,K.width,K.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ge,Ae,K)):t.texImage2D(a.TEXTURE_2D,0,xe,Ge,Ae,K);w(x,$e)&&_(ee),me.__version=Z.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function ve(M,x,N){if(x.image.length!==6)return;const ee=$(M,x),J=x.source;t.bindTexture(a.TEXTURE_CUBE_MAP,M.__webglTexture,a.TEXTURE0+N);const Z=i.get(J);if(J.version!==Z.__version||ee===!0){t.activeTexture(a.TEXTURE0+N);const me=Ke.getPrimaries(Ke.workingColorSpace),oe=x.colorSpace===Gt?null:Ke.getPrimaries(x.colorSpace),he=x.colorSpace===Gt||me===oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Me=x.isCompressedTexture||x.image[0].isCompressedTexture,Ne=x.image[0]&&x.image[0].isDataTexture,K=[];for(let re=0;re<6;re++)!Me&&!Ne?K[re]=g(x.image[re],!1,!0,r.maxCubemapSize):K[re]=Ne?x.image[re].image:x.image[re],K[re]=De(x,K[re]);const $e=K[0],Ge=f($e)||s,Ae=n.convert(x.format,x.colorSpace),xe=n.convert(x.type),de=T(x.internalFormat,Ae,xe,x.colorSpace),Ie=s&&x.isVideoTexture!==!0,Ye=Z.__version===void 0||ee===!0;let at=I(x,$e,Ge);H(a.TEXTURE_CUBE_MAP,x,Ge);let Fe;if(Me){Ie&&Ye&&t.texStorage2D(a.TEXTURE_CUBE_MAP,at,de,$e.width,$e.height);for(let re=0;re<6;re++){Fe=K[re].mipmaps;for(let L=0;L<Fe.length;L++){const ae=Fe[L];x.format!==Kt?Ae!==null?Ie?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,Ae,xe,ae.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,de,ae.width,ae.height,0,Ae,xe,ae.data)}}}else{Fe=x.mipmaps,Ie&&Ye&&(Fe.length>0&&at++,t.texStorage2D(a.TEXTURE_CUBE_MAP,at,de,K[0].width,K[0].height));for(let re=0;re<6;re++)if(Ne){Ie?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,K[re].width,K[re].height,Ae,xe,K[re].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,de,K[re].width,K[re].height,0,Ae,xe,K[re].data);for(let L=0;L<Fe.length;L++){const ae=Fe[L].image[re].image;Ie?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,ae.width,ae.height,Ae,xe,ae.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,de,ae.width,ae.height,0,Ae,xe,ae.data)}}else{Ie?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae,xe,K[re]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,de,Ae,xe,K[re]);for(let L=0;L<Fe.length;L++){const ae=Fe[L];Ie?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,Ae,xe,ae.image[re]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,de,Ae,xe,ae.image[re])}}}w(x,Ge)&&_(a.TEXTURE_CUBE_MAP),Z.__version=J.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function ge(M,x,N,ee,J,Z){const me=n.convert(N.format,N.colorSpace),oe=n.convert(N.type),he=T(N.internalFormat,me,oe,N.colorSpace);if(!i.get(x).__hasExternalTextures){const Me=Math.max(1,x.width>>Z),Ne=Math.max(1,x.height>>Z);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,he,Me,Ne,x.depth,0,me,oe,null):t.texImage2D(J,Z,he,Me,Ne,0,me,oe,null)}t.bindFramebuffer(a.FRAMEBUFFER,M),pe(x)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ee,J,i.get(N).__webglTexture,0,Ce(x)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ee,J,i.get(N).__webglTexture,Z),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Le(M,x,N){if(a.bindRenderbuffer(a.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let ee=s===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(N||pe(x)){const J=x.depthTexture;J&&J.isDepthTexture&&(J.type===Si?ee=a.DEPTH_COMPONENT32F:J.type===bi&&(ee=a.DEPTH_COMPONENT24));const Z=Ce(x);pe(x)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Z,ee,x.width,x.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,Z,ee,x.width,x.height)}else a.renderbufferStorage(a.RENDERBUFFER,ee,x.width,x.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const ee=Ce(x);N&&pe(x)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ee,a.DEPTH24_STENCIL8,x.width,x.height):pe(x)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ee,a.DEPTH24_STENCIL8,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,x.width,x.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,M)}else{const ee=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<ee.length;J++){const Z=ee[J],me=n.convert(Z.format,Z.colorSpace),oe=n.convert(Z.type),he=T(Z.internalFormat,me,oe,Z.colorSpace),Me=Ce(x);N&&pe(x)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Me,he,x.width,x.height):pe(x)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Me,he,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,he,x.width,x.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Pe(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const N=i.get(x.depthTexture).__webglTexture,ee=Ce(x);if(x.depthTexture.format===Bi)pe(x)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,N,0,ee):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,N,0);else if(x.depthTexture.format===_r)pe(x)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,N,0,ee):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Ee(M){const x=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Pe(x.__webglFramebuffer,M)}else if(N){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]=a.createRenderbuffer(),Le(x.__webglDepthbuffer[ee],M,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=a.createRenderbuffer(),Le(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function Xe(M,x,N){const ee=i.get(M);x!==void 0&&ge(ee.__webglFramebuffer,M,M.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),N!==void 0&&Ee(M)}function k(M){const x=M.texture,N=i.get(M),ee=i.get(x);M.addEventListener("dispose",j),M.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=x.version,o.memory.textures++);const J=M.isWebGLCubeRenderTarget===!0,Z=M.isWebGLMultipleRenderTargets===!0,me=f(M)||s;if(J){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(s&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let he=0;he<x.mipmaps.length;he++)N.__webglFramebuffer[oe][he]=a.createFramebuffer()}else N.__webglFramebuffer[oe]=a.createFramebuffer()}else{if(s&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)N.__webglFramebuffer[oe]=a.createFramebuffer()}else N.__webglFramebuffer=a.createFramebuffer();if(Z)if(r.drawBuffers){const oe=M.texture;for(let he=0,Me=oe.length;he<Me;he++){const Ne=i.get(oe[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&M.samples>0&&pe(M)===!1){const oe=Z?x:[x];N.__webglMultisampledFramebuffer=a.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){const Me=oe[he];N.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,N.__webglColorRenderbuffer[he]);const Ne=n.convert(Me.format,Me.colorSpace),K=n.convert(Me.type),$e=T(Me.internalFormat,Ne,K,Me.colorSpace,M.isXRRenderTarget===!0),Ge=Ce(M);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ge,$e,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,N.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=a.createRenderbuffer(),Le(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(J){t.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture),H(a.TEXTURE_CUBE_MAP,x,me);for(let oe=0;oe<6;oe++)if(s&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)ge(N.__webglFramebuffer[oe][he],M,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else ge(N.__webglFramebuffer[oe],M,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);w(x,me)&&_(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){const oe=M.texture;for(let he=0,Me=oe.length;he<Me;he++){const Ne=oe[he],K=i.get(Ne);t.bindTexture(a.TEXTURE_2D,K.__webglTexture),H(a.TEXTURE_2D,Ne,me),ge(N.__webglFramebuffer,M,Ne,a.COLOR_ATTACHMENT0+he,a.TEXTURE_2D,0),w(Ne,me)&&_(a.TEXTURE_2D)}t.unbindTexture()}else{let oe=a.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(s?oe=M.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ee.__webglTexture),H(oe,x,me),s&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)ge(N.__webglFramebuffer[he],M,x,a.COLOR_ATTACHMENT0,oe,he);else ge(N.__webglFramebuffer,M,x,a.COLOR_ATTACHMENT0,oe,0);w(x,me)&&_(oe),t.unbindTexture()}M.depthBuffer&&Ee(M)}function wt(M){const x=f(M)||s,N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0,J=N.length;ee<J;ee++){const Z=N[ee];if(w(Z,x)){const me=M.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,oe=i.get(Z).__webglTexture;t.bindTexture(me,oe),_(me),t.unbindTexture()}}}function ye(M){if(s&&M.samples>0&&pe(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],N=M.width,ee=M.height;let J=a.COLOR_BUFFER_BIT;const Z=[],me=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,oe=i.get(M),he=M.isWebGLMultipleRenderTargets===!0;if(he)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Me,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Me,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){Z.push(a.COLOR_ATTACHMENT0+Me),M.depthBuffer&&Z.push(me);const Ne=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ne===!1&&(M.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),M.stencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),he&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]),Ne===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[me]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[me])),he){const K=i.get(x[Me]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,K,0)}a.blitFramebuffer(0,0,N,ee,0,0,N,ee,J,a.NEAREST),c&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Me,a.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]);const Ne=i.get(x[Me]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Me,a.TEXTURE_2D,Ne,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ce(M){return Math.min(r.maxSamples,M.samples)}function pe(M){const x=i.get(M);return s&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function rt(M){const x=o.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function De(M,x){const N=M.colorSpace,ee=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===yn||N!==pi&&N!==Gt&&(Ke.getTransfer(N)===et?s===!1?e.has("EXT_sRGB")===!0&&ee===Kt?(M.format=yn,M.minFilter=Ht,M.generateMipmaps=!1):x=Ho.sRGBToLinear(x):(ee!==Kt||J!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=P,this.resetTextureUnits=ie,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Xe,this.setupRenderTarget=k,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=pe}function wm(a,e,t){const i=t.isWebGL2;function r(n,o=Gt){let s;const l=Ke.getTransfer(o);if(n===Ei)return a.UNSIGNED_BYTE;if(n===Po)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return a.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return a.BYTE;if(n===Yl)return a.SHORT;if(n===An)return a.UNSIGNED_SHORT;if(n===Lo)return a.INT;if(n===bi)return a.UNSIGNED_INT;if(n===Si)return a.FLOAT;if(n===Fr)return i?a.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===$l)return a.ALPHA;if(n===Kt)return a.RGBA;if(n===Kl)return a.LUMINANCE;if(n===Jl)return a.LUMINANCE_ALPHA;if(n===Bi)return a.DEPTH_COMPONENT;if(n===_r)return a.DEPTH_STENCIL;if(n===yn)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===Zl)return a.RED;if(n===Uo)return a.RED_INTEGER;if(n===Ql)return a.RG;if(n===Do)return a.RG_INTEGER;if(n===No)return a.RGBA_INTEGER;if(n===Oa||n===ka||n===za||n===Fa)if(l===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kn||n===Jn||n===Zn||n===Qn)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Kn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===es||n===ts)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===es)return l===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ts)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===is||n===rs||n===as||n===ns||n===ss||n===os||n===ls||n===cs||n===hs||n===ds||n===us||n===ps||n===ms||n===fs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===is)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rs)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===as)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ns)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ss)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===os)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ls)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cs)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hs)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ds)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===us)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ps)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ms)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fs)return l===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===gs||n===vs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ba)return l===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===_s||n===xs||n===ys)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_s)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ys)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i?a.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[n]!==void 0?a[n]:null}return{convert:r}}class Em extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class hn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const f=t.getJointPose(g,i),p=this._getHandJoint(c,g);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&u>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Am extends br{constructor(e,t){super();const i=this;let r=null,n=1,o=null,s="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,v=null;const g=t.getContextAttributes();let f=null,p=null;const w=[],_=[],T=new ze;let I=null;const A=new It;A.layers.enable(1),A.viewport=new it;const R=new It;R.layers.enable(2),R.viewport=new it;const j=[A,R],b=new Em;b.layers.enable(1),b.layers.enable(2);let E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=w[H];return $===void 0&&($=new hn,w[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=w[H];return $===void 0&&($=new hn,w[H]=$),$.getGripSpace()},this.getHand=function(H){let $=w[H];return $===void 0&&($=new hn,w[H]=$),$.getHandSpace()};function B(H){const $=_.indexOf(H.inputSource);if($===-1)return;const ue=w[$];ue!==void 0&&(ue.update(H.inputSource,H.frame,c||o),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function ie(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",P);for(let H=0;H<w.length;H++){const $=_[H];$!==null&&(_[H]=null,w[H].disconnect($))}E=null,G=null,e.setRenderTarget(f),m=null,u=null,d=null,r=null,p=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){n=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:n};m=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Vi(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,ue=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?_r:Bi,ue=g.stencil?Fi:bi);const ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:n};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(ge),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Vi(u.textureWidth,u.textureHeight,{format:Kt,type:Ei,depthTexture:new Zo(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Le=e.properties.get(p);Le.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(H){for(let $=0;$<H.removed.length;$++){const ue=H.removed[$],ve=_.indexOf(ue);ve>=0&&(_[ve]=null,w[ve].disconnect(ue))}for(let $=0;$<H.added.length;$++){const ue=H.added[$];let ve=_.indexOf(ue);if(ve===-1){for(let Le=0;Le<w.length;Le++)if(Le>=_.length){_.push(ue),ve=Le;break}else if(_[Le]===null){_[Le]=ue,ve=Le;break}if(ve===-1)break}const ge=w[ve];ge&&ge.connect(ue)}}const O=new S,V=new S;function q(H,$,ue){O.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(ue.matrixWorld);const ve=O.distanceTo(V),ge=$.projectionMatrix.elements,Le=ue.projectionMatrix.elements,Pe=ge[14]/(ge[10]-1),Ee=ge[14]/(ge[10]+1),Xe=(ge[9]+1)/ge[5],k=(ge[9]-1)/ge[5],wt=(ge[8]-1)/ge[0],ye=(Le[8]+1)/Le[0],Ce=Pe*wt,pe=Pe*ye,rt=ve/(-wt+ye),De=rt*-wt;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(De),H.translateZ(rt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const M=Pe+rt,x=Ee+rt,N=Ce-De,ee=pe+(ve-De),J=Xe*Ee/x*M,Z=k*Ee/x*M;H.projectionMatrix.makePerspective(N,ee,J,Z,M,x),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;b.near=R.near=A.near=H.near,b.far=R.far=A.far=H.far,(E!==b.near||G!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,G=b.far);const $=H.parent,ue=b.cameras;X(b,$);for(let ve=0;ve<ue.length;ve++)X(ue[ve],$);ue.length===2?q(b,A,R):b.projectionMatrix.copy(A.projectionMatrix),W(H,b,$)};function W(H,$,ue){ue===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=xr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let Q=null;function te(H,$){if(h=$.getViewerPose(c||o),v=$,h!==null){const ue=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let ve=!1;ue.length!==b.cameras.length&&(b.cameras.length=0,ve=!0);for(let ge=0;ge<ue.length;ge++){const Le=ue[ge];let Pe=null;if(m!==null)Pe=m.getViewport(Le);else{const Xe=d.getViewSubImage(u,Le);Pe=Xe.viewport,ge===0&&(e.setRenderTargetTextures(p,Xe.colorTexture,u.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(p))}let Ee=j[ge];Ee===void 0&&(Ee=new It,Ee.layers.enable(ge),Ee.viewport=new it,j[ge]=Ee),Ee.matrix.fromArray(Le.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Le.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ge===0&&(b.matrix.copy(Ee.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ve===!0&&b.cameras.push(Ee)}}for(let ue=0;ue<w.length;ue++){const ve=_[ue],ge=w[ue];ve!==null&&ge!==void 0&&ge.update(ve,$,c||o)}Q&&Q(H,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),v=null}const ce=new Ko;ce.setAnimationLoop(te),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}}function Cm(a,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,qo(a)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,w,_,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(f,p):p.isMeshToonMaterial?(n(f,p),d(f,p)):p.isMeshPhongMaterial?(n(f,p),h(f,p)):p.isMeshStandardMaterial?(n(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,T)):p.isMeshMatcapMaterial?(n(f,p),v(f,p)):p.isMeshDepthMaterial?n(f,p):p.isMeshDistanceMaterial?(n(f,p),g(f,p)):p.isMeshNormalMaterial?n(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&s(f,p)):p.isPointsMaterial?l(f,p,w,_):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ut&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ut&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const w=e.get(p).envMap;if(w&&(f.envMap.value=w,f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const _=a._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function s(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,w,_){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*w,f.scale.value=_*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,w){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){const w=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rm(a,e,t,i){let r={},n={},o=[];const s=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,_){const T=_.program;i.uniformBlockBinding(w,T)}function c(w,_){let T=r[w.id];T===void 0&&(v(w),T=h(w),r[w.id]=T,w.addEventListener("dispose",f));const I=_.program;i.updateUBOMapping(w,I);const A=e.render.frame;n[w.id]!==A&&(u(w),n[w.id]=A)}function h(w){const _=d();w.__bindingPointIndex=_;const T=a.createBuffer(),I=w.__size,A=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,T),a.bufferData(a.UNIFORM_BUFFER,I,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,_,T),T}function d(){for(let w=0;w<s;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const _=r[w.id],T=w.uniforms,I=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,_);for(let A=0,R=T.length;A<R;A++){const j=Array.isArray(T[A])?T[A]:[T[A]];for(let b=0,E=j.length;b<E;b++){const G=j[b];if(m(G,A,b,I)===!0){const B=G.__offset,ie=Array.isArray(G.value)?G.value:[G.value];let P=0;for(let O=0;O<ie.length;O++){const V=ie[O],q=g(V);typeof V=="number"||typeof V=="boolean"?(G.__data[0]=V,a.bufferSubData(a.UNIFORM_BUFFER,B+P,G.__data)):V.isMatrix3?(G.__data[0]=V.elements[0],G.__data[1]=V.elements[1],G.__data[2]=V.elements[2],G.__data[3]=0,G.__data[4]=V.elements[3],G.__data[5]=V.elements[4],G.__data[6]=V.elements[5],G.__data[7]=0,G.__data[8]=V.elements[6],G.__data[9]=V.elements[7],G.__data[10]=V.elements[8],G.__data[11]=0):(V.toArray(G.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,B,G.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function m(w,_,T,I){const A=w.value,R=_+"_"+T;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{const j=I[R];if(typeof A=="number"||typeof A=="boolean"){if(j!==A)return I[R]=A,!0}else if(j.equals(A)===!1)return j.copy(A),!0}return!1}function v(w){const _=w.uniforms;let T=0;const I=16;for(let R=0,j=_.length;R<j;R++){const b=Array.isArray(_[R])?_[R]:[_[R]];for(let E=0,G=b.length;E<G;E++){const B=b[E],ie=Array.isArray(B.value)?B.value:[B.value];for(let P=0,O=ie.length;P<O;P++){const V=ie[P],q=g(V),X=T%I;X!==0&&I-X<q.boundary&&(T+=I-X),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=q.storage}}}const A=T%I;return A>0&&(T+=I-A),w.__size=T,w.__cache={},this}function g(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function f(w){const _=w.target;_.removeEventListener("dispose",f);const T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),a.deleteBuffer(r[_.id]),delete r[_.id],delete n[_.id]}function p(){for(const w in r)a.deleteBuffer(r[w]);o=[],r={},n={}}return{bind:l,update:c,dispose:p}}class al{constructor(e={}){const{canvas:t=Ec(),context:i=null,depth:r=!0,stencil:n=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,f=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=wi,this.toneMappingExposure=1;const _=this;let T=!1,I=0,A=0,R=null,j=-1,b=null;const E=new it,G=new it;let B=null;const ie=new je(0);let P=0,O=t.width,V=t.height,q=1,X=null,W=null;const Q=new it(0,0,O,V),te=new it(0,0,O,V);let ce=!1;const H=new Pn;let $=!1,ue=!1,ve=null;const ge=new tt,Le=new ze,Pe=new S,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return R===null?q:1}let k=i;function wt(y,U){for(let z=0;z<y.length;z++){const F=y[z],D=t.getContext(F,U);if(D!==null)return D}return null}try{const y={alpha:!0,depth:r,stencil:n,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${En}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ae,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),k=wt(U,y),k===null)throw wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ye,Ce,pe,rt,De,M,x,N,ee,J,Z,me,oe,he,Me,Ne,K,$e,Ge,Ae,xe,de,Ie,Ye;function at(){ye=new Fu(k),Ce=new Uu(k,ye,e),ye.init(Ce),de=new wm(k,ye,Ce),pe=new Sm(k,ye,Ce),rt=new Gu(k),De=new lm,M=new Mm(k,ye,pe,De,Ce,de,rt),x=new Nu(_),N=new zu(_),ee=new Kc(k,Ce),Ie=new Pu(k,ye,ee,Ce),J=new Bu(k,ee,rt,Ie),Z=new Xu(k,J,ee,rt),Ge=new ju(k,Ce,M),Ne=new Du(De),me=new om(_,x,N,ye,Ce,Ie,Ne),oe=new Cm(_,De),he=new hm,Me=new gm(ye,Ce),$e=new Lu(_,x,N,pe,Z,u,l),K=new bm(_,Z,Ce),Ye=new Rm(k,rt,Ce,pe),Ae=new Iu(k,ye,rt,Ce),xe=new Hu(k,ye,rt,Ce),rt.programs=me.programs,_.capabilities=Ce,_.extensions=ye,_.properties=De,_.renderLists=he,_.shadowMap=K,_.state=pe,_.info=rt}at();const Fe=new Am(_,k);this.xr=Fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const y=ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(O,V,!1))},this.getSize=function(y){return y.set(O,V)},this.setSize=function(y,U,z=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=y,V=U,t.width=Math.floor(y*q),t.height=Math.floor(U*q),z===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(O*q,V*q).floor()},this.setDrawingBufferSize=function(y,U,z){O=y,V=U,q=z,t.width=Math.floor(y*z),t.height=Math.floor(U*z),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(E)},this.getViewport=function(y){return y.copy(Q)},this.setViewport=function(y,U,z,F){y.isVector4?Q.set(y.x,y.y,y.z,y.w):Q.set(y,U,z,F),pe.viewport(E.copy(Q).multiplyScalar(q).floor())},this.getScissor=function(y){return y.copy(te)},this.setScissor=function(y,U,z,F){y.isVector4?te.set(y.x,y.y,y.z,y.w):te.set(y,U,z,F),pe.scissor(G.copy(te).multiplyScalar(q).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(y){pe.setScissorTest(ce=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){W=y},this.getClearColor=function(y){return y.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(y=!0,U=!0,z=!0){let F=0;if(y){let D=!1;if(R!==null){const se=R.texture.format;D=se===No||se===Do||se===Uo}if(D){const se=R.texture.type,_e=se===Ei||se===bi||se===An||se===Fi||se===Po||se===Io,we=$e.getClearColor(),Te=$e.getClearAlpha(),Ve=we.r,Oe=we.g,ke=we.b;_e?(m[0]=Ve,m[1]=Oe,m[2]=ke,m[3]=Te,k.clearBufferuiv(k.COLOR,0,m)):(v[0]=Ve,v[1]=Oe,v[2]=ke,v[3]=Te,k.clearBufferiv(k.COLOR,0,v))}else F|=k.COLOR_BUFFER_BIT}U&&(F|=k.DEPTH_BUFFER_BIT),z&&(F|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),Me.dispose(),De.dispose(),x.dispose(),N.dispose(),Z.dispose(),Ie.dispose(),Ye.dispose(),me.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",kt),Fe.removeEventListener("sessionend",Qe),ve&&(ve.dispose(),ve=null),Et.stop()};function re(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=rt.autoReset,U=K.enabled,z=K.autoUpdate,F=K.needsUpdate,D=K.type;at(),rt.autoReset=y,K.enabled=U,K.autoUpdate=z,K.needsUpdate=F,K.type=D}function ae(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function le(y){const U=y.target;U.removeEventListener("dispose",le),Re(U)}function Re(y){be(y),De.remove(y)}function be(y){const U=De.get(y).programs;U!==void 0&&(U.forEach(function(z){me.releaseProgram(z)}),y.isShaderMaterial&&me.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,z,F,D,se){U===null&&(U=Ee);const _e=D.isMesh&&D.matrixWorld.determinant()<0,we=ol(y,U,z,F,D);pe.setMaterial(F,_e);let Te=z.index,Ve=1;if(F.wireframe===!0){if(Te=J.getWireframeAttribute(z),Te===void 0)return;Ve=2}const Oe=z.drawRange,ke=z.attributes.position;let xt=Oe.start*Ve,ht=(Oe.start+Oe.count)*Ve;se!==null&&(xt=Math.max(xt,se.start*Ve),ht=Math.min(ht,(se.start+se.count)*Ve)),Te!==null?(xt=Math.max(xt,0),ht=Math.min(ht,Te.count)):ke!=null&&(xt=Math.max(xt,0),ht=Math.min(ht,ke.count));const zt=ht-xt;if(zt<0||zt===1/0)return;Ie.setup(D,F,we,z,Te);let ri,st=Ae;if(Te!==null&&(ri=ee.get(Te),st=xe,st.setIndex(ri)),D.isMesh)F.wireframe===!0?(pe.setLineWidth(F.wireframeLinewidth*Xe()),st.setMode(k.LINES)):st.setMode(k.TRIANGLES);else if(D.isLine){let Be=F.linewidth;Be===void 0&&(Be=1),pe.setLineWidth(Be*Xe()),D.isLineSegments?st.setMode(k.LINES):D.isLineLoop?st.setMode(k.LINE_LOOP):st.setMode(k.LINE_STRIP)}else D.isPoints?st.setMode(k.POINTS):D.isSprite&&st.setMode(k.TRIANGLES);if(D.isBatchedMesh)st.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else if(D.isInstancedMesh)st.renderInstances(xt,zt,D.count);else if(z.isInstancedBufferGeometry){const Be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,La=Math.min(z.instanceCount,Be);st.renderInstances(xt,zt,La)}else st.render(xt,zt)};function Je(y,U,z){y.transparent===!0&&y.side===Ot&&y.forceSinglePass===!1?(y.side=Ut,y.needsUpdate=!0,Xr(y,U,z),y.side=Ti,y.needsUpdate=!0,Xr(y,U,z),y.side=Ot):Xr(y,U,z)}this.compile=function(y,U,z=null){z===null&&(z=y),f=Me.get(z),f.init(),w.push(f),z.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),y!==z&&y.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights(_._useLegacyLights);const F=new Set;return y.traverse(function(D){const se=D.material;if(se)if(Array.isArray(se))for(let _e=0;_e<se.length;_e++){const we=se[_e];Je(we,z,D),F.add(we)}else Je(se,z,D),F.add(se)}),w.pop(),f=null,F},this.compileAsync=function(y,U,z=null){const F=this.compile(y,U,z);return new Promise(D=>{function se(){if(F.forEach(function(_e){De.get(_e).currentProgram.isReady()&&F.delete(_e)}),F.size===0){D(y);return}setTimeout(se,10)}ye.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ze=null;function ot(y){Ze&&Ze(y)}function kt(){Et.stop()}function Qe(){Et.start()}const Et=new Ko;Et.setAnimationLoop(ot),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(y){Ze=y,Fe.setAnimationLoop(y),y===null?Et.stop():Et.start()},Fe.addEventListener("sessionstart",kt),Fe.addEventListener("sessionend",Qe),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(U),U=Fe.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,U,R),f=Me.get(y,w.length),f.init(),w.push(f),ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(ge),ue=this.localClippingEnabled,$=Ne.init(this.clippingPlanes,ue),g=he.get(y,p.length),g.init(),p.push(g),ei(y,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(X,W),this.info.render.frame++,$===!0&&Ne.beginShadows();const z=f.state.shadowsArray;if(K.render(z,y,U),$===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(g,y),f.setupLights(_._useLegacyLights),U.isArrayCamera){const F=U.cameras;for(let D=0,se=F.length;D<se;D++){const _e=F[D];kn(g,y,_e,_e.viewport)}}else kn(g,y,U);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(_,y,U),Ie.resetDefaultState(),j=-1,b=null,w.pop(),w.length>0?f=w[w.length-1]:f=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function ei(y,U,z,F){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||H.intersectsSprite(y)){F&&Pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ge);const se=Z.update(y),_e=y.material;_e.visible&&g.push(y,se,_e,z,Pe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||H.intersectsObject(y))){const se=Z.update(y),_e=y.material;if(F&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pe.copy(y.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Pe.copy(se.boundingSphere.center)),Pe.applyMatrix4(y.matrixWorld).applyMatrix4(ge)),Array.isArray(_e)){const we=se.groups;for(let Te=0,Ve=we.length;Te<Ve;Te++){const Oe=we[Te],ke=_e[Oe.materialIndex];ke&&ke.visible&&g.push(y,se,ke,z,Pe.z,Oe)}}else _e.visible&&g.push(y,se,_e,z,Pe.z,null)}}const D=y.children;for(let se=0,_e=D.length;se<_e;se++)ei(D[se],U,z,F)}function kn(y,U,z,F){const D=y.opaque,se=y.transmissive,_e=y.transparent;f.setupLightsView(z),$===!0&&Ne.setGlobalState(_.clippingPlanes,z),se.length>0&&sl(D,se,U,z),F&&pe.viewport(E.copy(F)),D.length>0&&jr(D,U,z),se.length>0&&jr(se,U,z),_e.length>0&&jr(_e,U,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function sl(y,U,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const D=Ce.isWebGL2;ve===null&&(ve=new Vi(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Fr:Ei,minFilter:zr,samples:D?4:0})),_.getDrawingBufferSize(Le),D?ve.setSize(Le.x,Le.y):ve.setSize(wa(Le.x),wa(Le.y));const se=_.getRenderTarget();_.setRenderTarget(ve),_.getClearColor(ie),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const _e=_.toneMapping;_.toneMapping=wi,jr(y,z,F),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve);let we=!1;for(let Te=0,Ve=U.length;Te<Ve;Te++){const Oe=U[Te],ke=Oe.object,xt=Oe.geometry,ht=Oe.material,zt=Oe.group;if(ht.side===Ot&&ke.layers.test(F.layers)){const ri=ht.side;ht.side=Ut,ht.needsUpdate=!0,zn(ke,z,F,xt,ht,zt),ht.side=ri,ht.needsUpdate=!0,we=!0}}we===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve)),_.setRenderTarget(se),_.setClearColor(ie,P),_.toneMapping=_e}function jr(y,U,z){const F=U.isScene===!0?U.overrideMaterial:null;for(let D=0,se=y.length;D<se;D++){const _e=y[D],we=_e.object,Te=_e.geometry,Ve=F===null?_e.material:F,Oe=_e.group;we.layers.test(z.layers)&&zn(we,U,z,Te,Ve,Oe)}}function zn(y,U,z,F,D,se){y.onBeforeRender(_,U,z,F,D,se),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),D.onBeforeRender(_,U,z,F,y,se),D.transparent===!0&&D.side===Ot&&D.forceSinglePass===!1?(D.side=Ut,D.needsUpdate=!0,_.renderBufferDirect(z,U,F,D,y,se),D.side=Ti,D.needsUpdate=!0,_.renderBufferDirect(z,U,F,D,y,se),D.side=Ot):_.renderBufferDirect(z,U,F,D,y,se),y.onAfterRender(_,U,z,F,D,se)}function Xr(y,U,z){U.isScene!==!0&&(U=Ee);const F=De.get(y),D=f.state.lights,se=f.state.shadowsArray,_e=D.state.version,we=me.getParameters(y,D.state,se,U,z),Te=me.getProgramCacheKey(we);let Ve=F.programs;F.environment=y.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(y.isMeshStandardMaterial?N:x).get(y.envMap||F.environment),Ve===void 0&&(y.addEventListener("dispose",le),Ve=new Map,F.programs=Ve);let Oe=Ve.get(Te);if(Oe!==void 0){if(F.currentProgram===Oe&&F.lightsStateVersion===_e)return Bn(y,we),Oe}else we.uniforms=me.getUniforms(y),y.onBuild(z,we,_),y.onBeforeCompile(we,_),Oe=me.acquireProgram(we,Te),Ve.set(Te,Oe),F.uniforms=we.uniforms;const ke=F.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ke.clippingPlanes=Ne.uniform),Bn(y,we),F.needsLights=cl(y),F.lightsStateVersion=_e,F.needsLights&&(ke.ambientLightColor.value=D.state.ambient,ke.lightProbe.value=D.state.probe,ke.directionalLights.value=D.state.directional,ke.directionalLightShadows.value=D.state.directionalShadow,ke.spotLights.value=D.state.spot,ke.spotLightShadows.value=D.state.spotShadow,ke.rectAreaLights.value=D.state.rectArea,ke.ltc_1.value=D.state.rectAreaLTC1,ke.ltc_2.value=D.state.rectAreaLTC2,ke.pointLights.value=D.state.point,ke.pointLightShadows.value=D.state.pointShadow,ke.hemisphereLights.value=D.state.hemi,ke.directionalShadowMap.value=D.state.directionalShadowMap,ke.directionalShadowMatrix.value=D.state.directionalShadowMatrix,ke.spotShadowMap.value=D.state.spotShadowMap,ke.spotLightMatrix.value=D.state.spotLightMatrix,ke.spotLightMap.value=D.state.spotLightMap,ke.pointShadowMap.value=D.state.pointShadowMap,ke.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=Oe,F.uniformsList=null,Oe}function Fn(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=va.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Bn(y,U){const z=De.get(y);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function ol(y,U,z,F,D){U.isScene!==!0&&(U=Ee),M.resetTextureUnits();const se=U.fog,_e=F.isMeshStandardMaterial?U.environment:null,we=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:pi,Te=(F.isMeshStandardMaterial?N:x).get(F.envMap||_e),Ve=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Oe=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ke=!!z.morphAttributes.position,xt=!!z.morphAttributes.normal,ht=!!z.morphAttributes.color;let zt=wi;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(zt=_.toneMapping);const ri=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=ri!==void 0?ri.length:0,Be=De.get(F),La=f.state.lights;if($===!0&&(ue===!0||y!==b)){const Ft=y===b&&F.id===j;Ne.setState(F,y,Ft)}let Pa=!1;F.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==La.state.version||Be.outputColorSpace!==we||D.isBatchedMesh&&Be.batching===!1||!D.isBatchedMesh&&Be.batching===!0||D.isInstancedMesh&&Be.instancing===!1||!D.isInstancedMesh&&Be.instancing===!0||D.isSkinnedMesh&&Be.skinning===!1||!D.isSkinnedMesh&&Be.skinning===!0||D.isInstancedMesh&&Be.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Be.instancingColor===!1&&D.instanceColor!==null||Be.envMap!==Te||F.fog===!0&&Be.fog!==se||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ne.numPlanes||Be.numIntersection!==Ne.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==Oe||Be.morphTargets!==ke||Be.morphNormals!==xt||Be.morphColors!==ht||Be.toneMapping!==zt||Ce.isWebGL2===!0&&Be.morphTargetsCount!==st)&&(Pa=!0):(Pa=!0,Be.__version=F.version);let Ai=Be.currentProgram;Pa===!0&&(Ai=Xr(F,U,D));let Hn=!1,wr=!1,Ia=!1;const yt=Ai.getUniforms(),Ci=Be.uniforms;if(pe.useProgram(Ai.program)&&(Hn=!0,wr=!0,Ia=!0),F.id!==j&&(j=F.id,wr=!0),Hn||b!==y){yt.setValue(k,"projectionMatrix",y.projectionMatrix),yt.setValue(k,"viewMatrix",y.matrixWorldInverse);const Ft=yt.map.cameraPosition;Ft!==void 0&&Ft.setValue(k,Pe.setFromMatrixPosition(y.matrixWorld)),Ce.logarithmicDepthBuffer&&yt.setValue(k,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&yt.setValue(k,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,wr=!0,Ia=!0)}if(D.isSkinnedMesh){yt.setOptional(k,D,"bindMatrix"),yt.setOptional(k,D,"bindMatrixInverse");const Ft=D.skeleton;Ft&&(Ce.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),yt.setValue(k,"boneTexture",Ft.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}D.isBatchedMesh&&(yt.setOptional(k,D,"batchingTexture"),yt.setValue(k,"batchingTexture",D._matricesTexture,M));const Ua=z.morphAttributes;if((Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0&&Ce.isWebGL2===!0)&&Ge.update(D,z,Ai),(wr||Be.receiveShadow!==D.receiveShadow)&&(Be.receiveShadow=D.receiveShadow,yt.setValue(k,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Ci.envMap.value=Te,Ci.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),wr&&(yt.setValue(k,"toneMappingExposure",_.toneMappingExposure),Be.needsLights&&ll(Ci,Ia),se&&F.fog===!0&&oe.refreshFogUniforms(Ci,se),oe.refreshMaterialUniforms(Ci,F,q,V,ve),va.upload(k,Fn(Be),Ci,M)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(va.upload(k,Fn(Be),Ci,M),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&yt.setValue(k,"center",D.center),yt.setValue(k,"modelViewMatrix",D.modelViewMatrix),yt.setValue(k,"normalMatrix",D.normalMatrix),yt.setValue(k,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Ft=F.uniformsGroups;for(let Da=0,hl=Ft.length;Da<hl;Da++)if(Ce.isWebGL2){const Gn=Ft[Da];Ye.update(Gn,Ai),Ye.bind(Gn,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function ll(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function cl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,U,z){De.get(y.texture).__webglTexture=U,De.get(y.depthTexture).__webglTexture=z;const F=De.get(y);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=z===void 0,F.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const z=De.get(y);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,z=0){R=y,I=U,A=z;let F=!0,D=null,se=!1,_e=!1;if(y){const we=De.get(y);we.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(k.FRAMEBUFFER,null),F=!1):we.__webglFramebuffer===void 0?M.setupRenderTarget(y):we.__hasExternalTextures&&M.rebindTextures(y,De.get(y.texture).__webglTexture,De.get(y.depthTexture).__webglTexture);const Te=y.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);const Ve=De.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?D=Ve[U][z]:D=Ve[U],se=!0):Ce.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?D=De.get(y).__webglMultisampledFramebuffer:Array.isArray(Ve)?D=Ve[z]:D=Ve,E.copy(y.viewport),G.copy(y.scissor),B=y.scissorTest}else E.copy(Q).multiplyScalar(q).floor(),G.copy(te).multiplyScalar(q).floor(),B=ce;if(pe.bindFramebuffer(k.FRAMEBUFFER,D)&&Ce.drawBuffers&&F&&pe.drawBuffers(y,D),pe.viewport(E),pe.scissor(G),pe.setScissorTest(B),se){const we=De.get(y.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,z)}else if(_e){const we=De.get(y.texture),Te=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.__webglTexture,z||0,Te)}j=-1},this.readRenderTargetPixels=function(y,U,z,F,D,se,_e){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){pe.bindFramebuffer(k.FRAMEBUFFER,we);try{const Te=y.texture,Ve=Te.format,Oe=Te.type;if(Ve!==Kt&&de.convert(Ve)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Oe===Fr&&(ye.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Oe!==Ei&&de.convert(Oe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Si&&(Ce.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-F&&z>=0&&z<=y.height-D&&k.readPixels(U,z,F,D,de.convert(Ve),de.convert(Oe),se)}finally{const Te=R!==null?De.get(R).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(y,U,z=0){const F=Math.pow(2,-z),D=Math.floor(U.image.width*F),se=Math.floor(U.image.height*F);M.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,z,0,0,y.x,y.y,D,se),pe.unbindTexture()},this.copyTextureToTexture=function(y,U,z,F=0){const D=U.image.width,se=U.image.height,_e=de.convert(z.format),we=de.convert(z.type);M.setTexture2D(z,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,F,y.x,y.y,D,se,_e,we,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,F,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,_e,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,F,y.x,y.y,_e,we,U.image),F===0&&z.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(y,U,z,F,D=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const se=y.max.x-y.min.x+1,_e=y.max.y-y.min.y+1,we=y.max.z-y.min.z+1,Te=de.convert(F.format),Ve=de.convert(F.type);let Oe;if(F.isData3DTexture)M.setTexture3D(F,0),Oe=k.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)M.setTexture2DArray(F,0),Oe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);const ke=k.getParameter(k.UNPACK_ROW_LENGTH),xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ht=k.getParameter(k.UNPACK_SKIP_PIXELS),zt=k.getParameter(k.UNPACK_SKIP_ROWS),ri=k.getParameter(k.UNPACK_SKIP_IMAGES),st=z.isCompressedTexture?z.mipmaps[D]:z.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,st.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,st.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,y.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,y.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,y.min.z),z.isDataTexture||z.isData3DTexture?k.texSubImage3D(Oe,D,U.x,U.y,U.z,se,_e,we,Te,Ve,st.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Oe,D,U.x,U.y,U.z,se,_e,we,Te,st.data)):k.texSubImage3D(Oe,D,U.x,U.y,U.z,se,_e,we,Te,Ve,st),k.pixelStorei(k.UNPACK_ROW_LENGTH,ke),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ht),k.pixelStorei(k.UNPACK_SKIP_ROWS,zt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ri),D===0&&F.generateMipmaps&&k.generateMipmap(Oe),pe.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){I=0,A=0,R=null,pe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Cn?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Aa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Hi:ko}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hi?ct:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Lm extends al{}Lm.prototype.isWebGL1Renderer=!0;class Or{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new Or(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Pm extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class co extends Qt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new tt,ho=new tt,fa=[],uo=new qe,Im=new tt,Rr=new Y,Lr=new Gr;class Um extends Y{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new co(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Im)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qe),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),uo.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(uo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Lr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(i),e.ray.intersectsSphere(Lr)!==!1))for(let n=0;n<r;n++){this.getMatrixAt(n,or),ho.multiplyMatrices(i,or),Rr.matrixWorld=ho,Rr.raycast(e,fa);for(let o=0,s=fa.length;o<s;o++){const l=fa[o];l.instanceId=n,l.object=this,t.push(l)}fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new co(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Pt{constructor(e,t,i,r,n,o,s,l,c){super(e,t,i,r,n,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un extends ii{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const n=[],o=[],s=[],l=[],c=new S,h=new ze;o.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const m=i+d/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),s.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(s,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ft extends ii{constructor(e=1,t=1,i=1,r=32,n=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:o,thetaStart:s,thetaLength:l};const c=this;r=Math.floor(r),n=Math.floor(n);const h=[],d=[],u=[],m=[];let v=0;const g=[],f=i/2;let p=0;w(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(m,2));function w(){const T=new S,I=new S;let A=0;const R=(t-e)/i;for(let j=0;j<=n;j++){const b=[],E=j/n,G=E*(t-e)+e;for(let B=0;B<=r;B++){const ie=B/r,P=ie*l+s,O=Math.sin(P),V=Math.cos(P);I.x=G*O,I.y=-E*i+f,I.z=G*V,d.push(I.x,I.y,I.z),T.set(O,R,V).normalize(),u.push(T.x,T.y,T.z),m.push(ie,1-E),b.push(v++)}g.push(b)}for(let j=0;j<r;j++)for(let b=0;b<n;b++){const E=g[b][j],G=g[b+1][j],B=g[b+1][j+1],ie=g[b][j+1];h.push(E,G,ie),h.push(G,B,ie),A+=6}c.addGroup(p,A,0),p+=A}function _(T){const I=v,A=new ze,R=new S;let j=0;const b=T===!0?e:t,E=T===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,f*E,0),u.push(0,E,0),m.push(.5,.5),v++;const G=v;for(let B=0;B<=r;B++){const ie=B/r*l+s,P=Math.cos(ie),O=Math.sin(ie);R.x=b*O,R.y=f*E,R.z=b*P,d.push(R.x,R.y,R.z),u.push(0,E,0),A.x=P*.5+.5,A.y=O*.5*E+.5,m.push(A.x,A.y),v++}for(let B=0;B<r;B++){const ie=I+B,P=G+B;T===!0?h.push(P,P+1,ie):h.push(P+1,P,ie),j+=3}c.addGroup(p,j,T===!0?1:2),p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dn extends ft{constructor(e=1,t=1,i=32,r=1,n=!1,o=0,s=Math.PI*2){super(0,e,t,i,r,n,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:n,thetaStart:o,thetaLength:s}}static fromJSON(e){return new Dn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mi extends ii{constructor(e=1,t=32,i=16,r=0,n=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:n,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const h=[],d=new S,u=new S,m=[],v=[],g=[],f=[];for(let p=0;p<=i;p++){const w=[],_=p/i;let T=0;p===0&&o===0?T=.5/t:p===i&&l===Math.PI&&(T=-.5/t);for(let I=0;I<=t;I++){const A=I/t;d.x=-e*Math.cos(r+A*n)*Math.sin(o+_*s),d.y=e*Math.cos(o+_*s),d.z=e*Math.sin(r+A*n)*Math.sin(o+_*s),v.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),f.push(A+T,1-_),w.push(c++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const _=h[p][w+1],T=h[p][w],I=h[p+1][w],A=h[p+1][w+1];(p!==0||o>0)&&m.push(_,T,A),(p!==i-1||l<Math.PI)&&m.push(T,I,A)}this.setIndex(m),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(g,3)),this.setAttribute("uv",new Mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Se extends Vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const po={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Dm{constructor(e,t,i){const r=this;let n=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){s++,n===!1&&r.onStart!==void 0&&r.onStart(h,o,s),n=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,s),o===s&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}}const Nm=new Dm;class Nn{constructor(e){this.manager=e!==void 0?e:Nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Nn.DEFAULT_MATERIAL_NAME="__DEFAULT";class Om extends Nn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,o=po.get(e);if(o!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(o),n.manager.itemEnd(e)},0),o;const s=Br("img");function l(){h(),po.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(d){h(),r&&r(d),n.manager.itemError(e),n.manager.itemEnd(e)}function h(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),n.manager.itemStart(e),s.src=e,s}}class km extends Nn{constructor(e){super(e)}load(e,t,i,r){const n=new Pt,o=new Om(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){n.image=s,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class Wr extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class zm extends Wr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const dn=new tt,mo=new S,fo=new S;class On{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pn,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;mo.setFromMatrixPosition(e.matrixWorld),t.position.copy(mo),fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fo),t.updateMatrixWorld(),dn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dn),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fm extends On{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=xr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||r!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bm extends Wr{constructor(e,t,i=0,r=Math.PI/3,n=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=r,this.penumbra=n,this.decay=o,this.map=null,this.shadow=new Fm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const go=new tt,Pr=new S,un=new S;class Hm extends On{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Pr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Pr),un.copy(i.position),un.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(un),i.updateMatrixWorld(),r.makeTranslation(-Pr.x,-Pr.y,-Pr.z),go.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go)}}class hi extends Wr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Hm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gm extends On{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ea extends Wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Gm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nl extends Wr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vo(){return(typeof performance>"u"?Date:performance).now()}class Wm{constructor(e,t,i=0,r=1/0){this.ray=new Ca(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ln,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Mn(e,this,i,t),i.sort(_o),i}intersectObjects(e,t=!0,i=[]){for(let r=0,n=e.length;r<n;r++)Mn(e[r],this,i,t);return i.sort(_o),i}}function _o(a,e){return a.distance-e.distance}function Mn(a,e,t,i){if(a.layers.test(e.layers)&&a.raycast(e,t),i===!0){const r=a.children;for(let n=0,o=r.length;n<o;n++)Mn(r[n],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:En}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=En);const Ir="blackveil_save_v1",xo="blackveil_settings_v1",yo=1;class jm{save(e){try{const t=this.load(),i={version:yo,timestamp:Date.now(),player:{health:100,position:{x:0,y:0,z:0},rotation:0,weapons:["m9_tactical"],currentWeapon:0,ammo:{"9mm":90},...t?.player||{},...e.player||{}},progression:{level:1,xp:0,skillPoints:0,skills:{},currency:0,...t?.progression||{},...e.progression||{}},missions:{activeMissionId:"ch1_m1_entry",completed:[],objectives:{},flags:{},...t?.missions||{},...e.missions||{}},world:{discoveredLocations:[],collectedLore:[],factionRep:{VANGUARD:0,ASHEN:10,HELIX:-20,VEIL:-50},powerStates:{},...t?.world||{},...e.world||{}},settings:{quality:"auto",sensitivity:1,language:"en",volumes:{master:1,music:.7,sfx:.9,voice:1,ambience:.8,ui:.8},fpsLimit:60,...t?.settings||{},...e.settings||{}},inventory:{items:[],equipped:{},...t?.inventory||{},...e.inventory||{}}};return localStorage.setItem(Ir,JSON.stringify(i)),!0}catch(t){return console.error("[Save] Failed",t),!1}}load(){try{const e=localStorage.getItem(Ir);if(!e)return null;const t=JSON.parse(e);return t.version!==yo&&console.warn("[Save] Version mismatch, migrating"),t}catch(e){return console.error("[Save] Corrupt",e),null}}saveSettings(e){localStorage.setItem(xo,JSON.stringify(e))}loadSettings(){try{return JSON.parse(localStorage.getItem(xo)||"null")}catch{return null}}hasSave(){return!!localStorage.getItem(Ir)}deleteSave(){localStorage.removeItem(Ir)}exportSave(){return localStorage.getItem(Ir)}}const gt=new jm,bo={quality:"auto",resolutionScale:1,textureQuality:1,shadowQuality:1,effectsQuality:1,viewDistance:1,fpsLimit:60,masterVolume:1,musicVolume:.7,sfxVolume:.9,voiceVolume:1,ambienceVolume:.8,uiVolume:.8,cameraSensitivity:1,aimSensitivity:1,invertY:!1,gyroEnabled:!1,gyroSensitivity:1,vibration:!0,hapticsEnabled:!0,subtitles:!0,subtitleSize:1,language:"en",touchOpacity:.85,controlLayout:null};class Xm{constructor(){C(this,"settings"),C(this,"listeners",new Set);const e=gt.loadSettings();this.settings={...bo,...e||{}}}get(e){return this.settings[e]}set(e,t){this.settings[e]=t,this.persist()}update(e){Object.assign(this.settings,e),this.persist()}persist(){gt.saveSettings(this.settings),this.listeners.forEach(e=>e(this.settings))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}reset(){this.settings={...bo},this.persist()}}const We=new Xm;class qm{constructor(){C(this,"loader",new km),C(this,"textures",new Map),C(this,"canvases",new Map)}async loadTexture(e,t){return this.textures.has(e)?this.textures.get(e):new Promise(i=>{this.loader.load(t,r=>{r.wrapS=r.wrapT=kr,r.colorSpace=ct,this.textures.set(e,r),console.log(`[Texture] Loaded ${e} from ${t}`),i(r)},void 0,r=>{console.warn(`[Texture] Failed to load ${e} from ${t}`,r),i(null)})})}createProceduralTexture(e,t,i,r){const n=document.createElement("canvas");n.width=t,n.height=i;const o=n.getContext("2d");r(o,t,i);const s=new Gi(n);return s.wrapS=s.wrapT=kr,s.colorSpace=ct,this.textures.set(e,s),this.canvases.set(e,n),s}get(e){return this.textures.get(e)}getAll(){return this.textures}generateFallbackTextures(){this.createProceduralTexture("concrete",256,256,(e,t,i)=>{e.fillStyle="#2a2a2e",e.fillRect(0,0,t,i);for(let r=0;r<800;r++){const n=Math.random()*t,o=Math.random()*i,s=Math.random()*2+.5;e.fillStyle=`rgba(${30+Math.random()*20},${30+Math.random()*20},${35+Math.random()*20},${Math.random()*.3})`,e.fillRect(n,o,s,s)}e.strokeStyle="rgba(0,0,0,0.15)",e.lineWidth=.5;for(let r=0;r<15;r++)e.beginPath(),e.moveTo(Math.random()*t,Math.random()*i),e.lineTo(Math.random()*t,Math.random()*i),e.stroke()}),this.createProceduralTexture("metal",256,256,(e,t,i)=>{const r=e.createLinearGradient(0,0,t,0);r.addColorStop(0,"#3a3a3e"),r.addColorStop(.5,"#4a4a4e"),r.addColorStop(1,"#2a2a2e"),e.fillStyle=r,e.fillRect(0,0,t,i),e.strokeStyle="rgba(255,255,255,0.06)",e.lineWidth=.8;for(let n=0;n<60;n++){const o=Math.random()*i;e.beginPath(),e.moveTo(0,o),e.lineTo(t,o+(Math.random()-.5)*4),e.stroke()}e.fillStyle="#1a1a1e";for(let n=20;n<t;n+=64)for(let o=20;o<i;o+=64)e.beginPath(),e.arc(n,o,3,0,Math.PI*2),e.fill()}),this.createProceduralTexture("fabric",256,256,(e,t,i)=>{e.fillStyle="#0f0f12",e.fillRect(0,0,t,i),e.strokeStyle="rgba(255,255,255,0.04)",e.lineWidth=.5;for(let r=0;r<t;r+=4)e.beginPath(),e.moveTo(r,0),e.lineTo(r,i),e.stroke();for(let r=0;r<i;r+=4)e.beginPath(),e.moveTo(0,r),e.lineTo(t,r),e.stroke();e.fillStyle="rgba(106,166,255,0.03)";for(let r=0;r<t*i/200;r++)e.fillRect(Math.random()*t,Math.random()*i,2,2)}),this.createProceduralTexture("graffiti",512,256,(e,t,i)=>{e.fillStyle="#1a1a1e",e.fillRect(0,0,t,i),e.font="bold 48px Orbitron, monospace",e.fillStyle="rgba(106,166,255,0.15)",e.fillText("VEIL",40,80),e.fillStyle="rgba(255,77,106,0.12)",e.fillText("VEYRA",200,140),e.fillStyle="rgba(74,222,128,0.1)",e.font="24px JetBrains Mono, monospace",e.fillText("THE CITY FORGOT",40,200);for(let r=0;r<2e3;r++)e.fillStyle=`hsla(${200+Math.random()*60},70%,60%,${Math.random()*.08})`,e.fillRect(Math.random()*t,Math.random()*i,Math.random()*3+1,Math.random()*3+1)}),this.createProceduralTexture("skin_player",256,256,(e,t,i)=>{const r=e.createRadialGradient(t/2,i/2,0,t/2,i/2,t/2);r.addColorStop(0,"#2a2a3a"),r.addColorStop(.5,"#1a1a24"),r.addColorStop(1,"#0f0f14"),e.fillStyle=r,e.fillRect(0,0,t,i),e.strokeStyle="rgba(106,166,255,0.08)",e.lineWidth=1;for(let n=0;n<20;n++)e.beginPath(),e.moveTo(0,n*13),e.bezierCurveTo(t*.3,n*13+5,t*.7,n*13-5,t,n*13),e.stroke()}),console.log("[Texture] Generated fallback procedural textures")}async loadAllGenerated(){this.generateFallbackTextures();const e=[{id:"char_player",url:"./public/assets/characters/player.png"},{id:"char_security",url:"./public/assets/characters/security.png"},{id:"char_scout",url:"./public/assets/characters/scout.png"},{id:"char_heavy",url:"./public/assets/characters/heavy.png"},{id:"char_sniper",url:"./public/assets/characters/sniper.png"},{id:"char_hunter",url:"./public/assets/characters/hunter.png"},{id:"char_commander",url:"./public/assets/characters/commander.png"},{id:"tex_concrete_img",url:"./public/assets/textures/concrete.png"},{id:"tex_metal_img",url:"./public/assets/textures/metal.png"},{id:"tex_fabric_img",url:"./public/assets/textures/fabric_tactical.png"},{id:"tex_graffiti_img",url:"./public/assets/textures/graffiti.png"}];for(const t of e)await this.loadTexture(t.id,t.url)}}const wn=new qm;class Ym{constructor(e){C(this,"renderer"),C(this,"scene"),C(this,"camera"),C(this,"quality","auto"),C(this,"resolutionScale",1),C(this,"stats",{fps:60,frameTime:16,drawCalls:0,triangles:0,geometries:0,textures:0}),C(this,"frameTimes",[]),C(this,"lastFpsUpdate",0),C(this,"adaptiveQualityLevel",2),C(this,"canvas"),C(this,"ambientLight"),C(this,"directionalLight"),C(this,"hemisphereLight"),this.canvas=e,this.renderer=new al({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1,logarithmicDepthBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=ct,this.renderer.toneMapping=Co,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=mn,this.renderer.shadowMap.autoUpdate=!0,this.scene=new Pm,this.scene.background=new je(328968),this.scene.fog=new Or(657940,.012),this.ambientLight=new nl(1710638,.35),this.scene.add(this.ambientLight),this.hemisphereLight=new zm(6989567,657935,.4),this.scene.add(this.hemisphereLight),this.directionalLight=new Ea(16777215,1.2),this.directionalLight.position.set(30,50,20),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(2048,2048),this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=150,this.directionalLight.shadow.camera.left=-60,this.directionalLight.shadow.camera.right=60,this.directionalLight.shadow.camera.top=60,this.directionalLight.shadow.camera.bottom=-60,this.directionalLight.shadow.bias=-1e-4,this.scene.add(this.directionalLight);const t=new Ea(6989567,.3);t.position.set(-40,60,-30),this.scene.add(t),this.camera=new It(65,window.innerWidth/window.innerHeight,.1,800),this.camera.position.set(0,2,6),this.quality=We.get("quality"),We.onChange(i=>this.applySettings(i.quality,i.resolutionScale)),window.addEventListener("resize",()=>this.resize()),this.resize(),this.applySettings(this.quality,We.get("resolutionScale")),wn.loadAllGenerated(),console.log("[Renderer] Enhanced graphics initialized - cinematic lighting, 2048 shadows, ACESFilmic")}applySettings(e,t){this.quality=e,this.resolutionScale=t;let i=e;e==="auto"&&(i=["low","medium","high","ultra"][this.adaptiveQualityLevel]);const r=i==="low",n=i==="medium",o=i==="high",s=i==="ultra";this.renderer.shadowMap.enabled=!r,this.renderer.shadowMap.type=s?mn:n?Tn:fl,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio*t*(r?.6:s?1.1:.9),2));const l=r?1024:n||o?2048:4096;this.directionalLight.shadow.mapSize.set(l,l),this.scene.fog instanceof Or&&(this.scene.fog.density=r?.02:n?.015:o?.012:.009),this.renderer.toneMappingExposure=r?1:s?1.25:1.15,this.ambientLight.intensity=r?.25:s?.45:.35,this.hemisphereLight.intensity=r?.3:s?.5:.4,console.log(`[Renderer] Quality: ${i} (adaptive ${this.adaptiveQualityLevel}) resScale ${t} shadow ${l}`)}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}beginFrame(){}endFrame(e){this.frameTimes.push(e),this.frameTimes.length>60&&this.frameTimes.shift();const t=performance.now();if(t-this.lastFpsUpdate>500){const i=this.frameTimes.reduce((r,n)=>r+n,0)/this.frameTimes.length;this.stats.frameTime=i*1e3,this.stats.fps=1e3/this.stats.frameTime,this.stats.drawCalls=this.renderer.info.render.calls,this.stats.triangles=this.renderer.info.render.triangles,this.stats.geometries=this.renderer.info.memory.geometries,this.stats.textures=this.renderer.info.memory.textures,this.lastFpsUpdate=t,this.quality==="auto"&&(this.stats.fps<26&&this.adaptiveQualityLevel>0?(this.adaptiveQualityLevel--,this.applySettings("auto",this.resolutionScale),console.log(`[Renderer] Adaptive down to ${this.adaptiveQualityLevel} FPS ${this.stats.fps.toFixed(1)}`)):this.stats.fps>58&&this.adaptiveQualityLevel<3&&(this.adaptiveQualityLevel++,this.applySettings("auto",this.resolutionScale),console.log(`[Renderer] Adaptive up to ${this.adaptiveQualityLevel} FPS ${this.stats.fps.toFixed(1)}`))),window.dispatchEvent(new CustomEvent("bv:fps",{detail:this.stats.fps}))}}getStats(){return{...this.stats}}getAdaptiveLevel(){return this.adaptiveQualityLevel}render(){this.renderer.render(this.scene,this.camera)}setBackground(e){this.scene.background=new je(e)}setTimeOfDay(e){const t=e<.25||e>.75;this.scene.fog instanceof Or&&this.scene.fog.color.setHex(t?657940:1710634),this.directionalLight.intensity=t?.3:1.2,this.ambientLight.intensity=t?.2:.4}addPointLight(e,t,i,r){const n=new hi(t,i,r);return n.position.copy(e),n.castShadow=!0,n.shadow.mapSize.set(512,512),this.scene.add(n),n}dispose(){this.renderer.dispose()}}class $m{constructor(e){C(this,"state",{move:new ze,look:new ze,sprint:!1,crouch:!1,jump:!1,fire:!1,aim:!1,reload:!1,interact:!1,melee:!1,switchWeapon:0,slide:!1,inventory:!1,map:!1,pause:!1}),C(this,"keys",new Set),C(this,"touchJoysticks",{move:new ze,look:new ze}),C(this,"mouseDown",!1),C(this,"pointerLocked",!1),this.canvas=e,this.bindKeyboard(),this.bindMouse(),this.bindTouch(),this.bindGamepadPoll()}bindKeyboard(){window.addEventListener("keydown",e=>{this.keys.add(e.code.toLowerCase()),e.code==="KeyR"&&(this.state.reload=!0),e.code==="KeyF"&&(this.state.interact=!0),e.code==="KeyE"&&(this.state.interact=!0),e.code==="Space"&&(this.state.jump=!0),(e.code==="ControlLeft"||e.code==="KeyC")&&(this.state.crouch=!0),e.code==="ShiftLeft"&&(this.state.sprint=!0),e.code==="KeyV"&&(this.state.melee=!0),e.code==="Tab"&&(this.state.inventory=!0),e.code==="KeyM"&&(this.state.map=!0),e.code==="Escape"&&(this.state.pause=!0),e.code==="Digit1"&&(this.state.switchWeapon=-1),e.code==="Digit2"&&(this.state.switchWeapon=1)}),window.addEventListener("keyup",e=>{this.keys.delete(e.code.toLowerCase()),e.code==="KeyR"&&(this.state.reload=!1),(e.code==="KeyF"||e.code==="KeyE")&&(this.state.interact=!1),e.code==="Space"&&(this.state.jump=!1),(e.code==="ControlLeft"||e.code==="KeyC")&&(this.state.crouch=!1),e.code==="ShiftLeft"&&(this.state.sprint=!1),e.code==="KeyV"&&(this.state.melee=!1),e.code==="Tab"&&(this.state.inventory=!1),e.code==="KeyM"&&(this.state.map=!1),e.code==="Escape"&&(this.state.pause=!1),(e.code==="Digit1"||e.code==="Digit2")&&(this.state.switchWeapon=0)})}bindMouse(){this.canvas.addEventListener("mousedown",e=>{e.button===0&&(this.state.fire=!0),e.button===2&&(this.state.aim=!0),this.mouseDown=!0}),window.addEventListener("mouseup",e=>{e.button===0&&(this.state.fire=!1),e.button===2&&(this.state.aim=!1),this.mouseDown=!1}),this.canvas.addEventListener("mousemove",e=>{document.pointerLockElement===this.canvas&&(this.state.look.x=e.movementX*.002,this.state.look.y=e.movementY*.002)}),this.canvas.addEventListener("wheel",e=>{this.state.switchWeapon=Math.sign(e.deltaY),setTimeout(()=>this.state.switchWeapon=0,100)}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault())}bindTouch(){}bindGamepadPoll(){}setMoveVector(e,t){this.touchJoysticks.move.set(e,t)}setLookVector(e,t){this.touchJoysticks.look.set(e,t)}update(){const e=new ze;(this.keys.has("keyw")||this.keys.has("arrowup"))&&(e.y+=1),(this.keys.has("keys")||this.keys.has("arrowdown"))&&(e.y-=1),(this.keys.has("keya")||this.keys.has("arrowleft"))&&(e.x-=1),(this.keys.has("keyd")||this.keys.has("arrowright"))&&(e.x+=1),e.lengthSq()>0&&e.normalize(),this.touchJoysticks.move.lengthSq()>.01?this.state.move.copy(this.touchJoysticks.move):this.state.move.copy(e),this.touchJoysticks.look.lengthSq()>.001&&this.state.look.copy(this.touchJoysticks.look);const t=navigator.getGamepads();for(const i of t){if(!i)continue;const r=.2,n=Math.abs(i.axes[0])>r?i.axes[0]:0,o=Math.abs(i.axes[1])>r?-i.axes[1]:0;(n||o)&&this.state.move.set(n,o);const s=Math.abs(i.axes[2])>r?i.axes[2]:0,l=Math.abs(i.axes[3])>r?i.axes[3]:0;(s||l)&&this.state.look.set(s*.05,l*.05),i.buttons[0]?.pressed&&(this.state.jump=!0),i.buttons[1]?.pressed&&(this.state.crouch=!0),i.buttons[2]?.pressed&&(this.state.reload=!0),i.buttons[3]?.pressed&&(this.state.interact=!0),i.buttons[5]?.pressed&&(this.state.fire=!0),i.buttons[4]?.pressed&&(this.state.aim=!0)}}consumeLook(){const e=this.state.look.clone();return this.state.look.set(0,0),e}resetTransient(){this.state.switchWeapon=0}}class Km{constructor(){C(this,"ctx",null),C(this,"masterGain",null),C(this,"gains",new Map),C(this,"sounds",new Map),C(this,"activeSources",new Set),C(this,"musicState","exploration"),C(this,"musicOscillators",[]),this.initContextOnInteraction()}initContextOnInteraction(){const e=()=>{if(!this.ctx){try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.connect(this.ctx.destination),["master","music","sfx","voice","ambience","ui"].forEach(t=>{const i=this.ctx.createGain();i.connect(t==="master"?this.ctx.destination:this.masterGain),this.gains.set(t,i)}),this.updateVolumes(),We.onChange(()=>this.updateVolumes()),this.startProceduralAmbience(),console.log("[Audio] Context initialized")}catch(t){console.warn("[Audio] Failed to init",t)}window.removeEventListener("click",e),window.removeEventListener("keydown",e),window.removeEventListener("touchstart",e)}};window.addEventListener("click",e,{once:!1}),window.addEventListener("keydown",e,{once:!1}),window.addEventListener("touchstart",e,{once:!1})}updateVolumes(){if(!this.ctx)return;const e=We.settings;this.gains.get("master").gain.value=e.masterVolume,this.gains.get("music").gain.value=e.musicVolume,this.gains.get("sfx").gain.value=e.sfxVolume,this.gains.get("voice").gain.value=e.voiceVolume,this.gains.get("ambience").gain.value=e.ambienceVolume,this.gains.get("ui").gain.value=e.uiVolume}startProceduralAmbience(){if(this.ctx)try{const e=this.ctx,t=e.sampleRate*2,i=e.createBuffer(1,t,e.sampleRate),r=i.getChannelData(0);for(let s=0;s<t;s++)r[s]=(Math.random()*2-1)*.02*Math.sin(s*1e-4);const n=e.createBufferSource();n.buffer=i,n.loop=!0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=400,n.connect(o),o.connect(this.gains.get("ambience")),n.start()}catch{}}playProceduralSound(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx,r=i.createOscillator(),n=i.createGain(),o=i.createBiquadFilter();let s=440,l=.1,c=.3;switch(e){case"pistol":s=180,l=.15,c=.6;break;case"rifle":s=120,l=.12,c=.7;break;case"smg":s=200,l=.08,c=.5;break;case"shotgun":s=80,l=.25,c=.8;break;case"sniper":s=90,l=.3,c=.9;break;case"footstep":s=60,l=.05,c=.15;break;case"reload":s=300,l=.4,c=.3;break;case"hit":s=150,l=.1,c=.5;break;case"ui_click":s=800,l=.08,c=.2;break;case"terminal":s=600,l=.15,c=.25;break;case"door":s=100,l=.5,c=.4;break;default:s=440,l=.1,c=.3}if(r.type=e.includes("shot")||e==="rifle"||e==="pistol"?"square":"sine",r.frequency.value=s,e.includes("shot")||e==="rifle"||e==="pistol"||e==="smg"||e==="shotgun"||e==="sniper"){const h=i.sampleRate*l,d=i.createBuffer(1,h,i.sampleRate),u=d.getChannelData(0);for(let v=0;v<h;v++)u[v]=(Math.random()*2-1)*Math.pow(1-v/h,2)*c;const m=i.createBufferSource();m.buffer=d,m.connect(o),o.type="bandpass",o.frequency.value=s*2,o.connect(this.gains.get("sfx")),m.start();return}n.gain.setValueAtTime(c,i.currentTime),n.gain.exponentialRampToValueAtTime(.001,i.currentTime+l),r.connect(o),o.connect(n),n.connect(this.gains.get(e.startsWith("ui")?"ui":"sfx")),r.start(),r.stop(i.currentTime+l)}catch(i){console.warn("[Audio] play failed",i)}}setMusicState(e){if(this.musicState=e,!!this.ctx){this.musicOscillators.forEach(t=>{try{t.stop()}catch{}}),this.musicOscillators=[];try{const t=this.ctx,i=e==="combat"?55:e==="stealth"?40:e==="tension"?48:36;for(let r=0;r<2;r++){const n=t.createOscillator(),o=t.createGain();n.type="sawtooth",n.frequency.value=i*(r+1)*.5,o.gain.value=e==="combat"?.06:.02;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=e==="combat"?800:400,n.connect(s),s.connect(o),o.connect(this.gains.get("music")),n.start(),this.musicOscillators.push(n)}}catch{}}}playUI(e){const t={click:"ui_click",hover:"ui_click",open:"terminal",close:"door",error:"hit"};this.playProceduralSound(t[e]||"ui_click")}setListenerPosition(e,t){if(!this.ctx?.listener)return;const i=this.ctx.listener;"positionX"in i?(i.positionX.value=e.x,i.positionY.value=e.y,i.positionZ.value=e.z):i.setPosition(e.x,e.y,e.z)}}const nt=new Km;class Jm{constructor(e){C(this,"position",new S(0,1.8,0)),C(this,"velocity",new S),C(this,"rotation",new Zt(0,0,0,"YXZ")),C(this,"yaw",0),C(this,"pitch",0),C(this,"stance","stand"),C(this,"moveState","idle"),C(this,"isGrounded",!0),C(this,"isAiming",!1),C(this,"isSprinting",!1),C(this,"isCrouching",!1),C(this,"isSliding",!1),C(this,"stats",{health:100,maxHealth:100,armor:50,stamina:100,maxStamina:100}),C(this,"walkSpeed",2.4),C(this,"jogSpeed",4.5),C(this,"sprintSpeed",7),C(this,"crouchSpeed",1.8),C(this,"slideSpeed",8.5),C(this,"jumpForce",5.8),C(this,"gravity",-15),C(this,"coyoteTime",.18),C(this,"coyoteTimer",0),C(this,"footstepTimer",0),C(this,"slideTimer",0),C(this,"vaultCooldown",0),C(this,"colliders",[]),C(this,"radius",.45),C(this,"heightStand",1.8),C(this,"heightCrouch",1.1),C(this,"heightSlide",.7),C(this,"mesh"),C(this,"cameraTarget",new S),C(this,"wasGrounded",!0),this.input=e,this.mesh=new Vt}setColliders(e){this.colliders=e}checkCollision(e,t){const i=new qe(new S(e.x-this.radius,e.y,e.z-this.radius),new S(e.x+this.radius,e.y+t,e.z+this.radius));for(const r of this.colliders)if(i.intersectsBox(r))return r;return null}canVault(){const e=new S(0,0,-1).applyAxisAngle(new S(0,1,0),this.yaw),t=this.position.clone().add(e.clone().multiplyScalar(.9));t.y+=.5;const i=this.checkCollision(t,1);if(i){const r=i.max.y-this.position.y;if(r>.3&&r<1.6){const n=t.clone();if(n.y+=r+.3,!this.checkCollision(n,.8))return{can:!0,height:r,box:i}}}return{can:!1,height:0}}moveWithCollision(e,t){const i=this.isSliding?this.heightSlide:this.stance==="crouch"?this.heightCrouch:this.heightStand;let r=this.position.clone().add(new S(e.x,0,0));this.checkCollision(r,i)?this.velocity.x*=.3:this.position.x=r.x,r=this.position.clone().add(new S(0,0,e.z)),this.checkCollision(r,i)?this.velocity.z*=.3:this.position.z=r.z,r=this.position.clone().add(new S(0,e.y,0));const n=this.checkCollision(r,i);n?e.y<0?(this.isGrounded=!0,this.position.y=n.max.y+.05,this.velocity.y=0):this.velocity.y=0:this.position.y=r.y}update(e,t){this.input.update(),this.vaultCooldown=Math.max(0,this.vaultCooldown-e);const i=this.input.consumeLook(),r=this.isAiming?.5:1;this.yaw-=i.x*r,this.pitch+=i.y*r,this.pitch=Jt.clamp(this.pitch,-1.45,1.45);const n=this.input.state.crouch;n&&this.isSprinting&&this.isGrounded&&this.velocity.length()>3.5&&!this.isSliding&&this.slideTimer<=0&&(this.isSliding=!0,this.slideTimer=.8,this.moveState="slide",nt.playProceduralSound("footstep")),this.isSliding?(this.slideTimer-=e,this.stance="crouch",this.isCrouching=!0,(this.slideTimer<=0||this.velocity.length()<1.5)&&(this.isSliding=!1,this.stance=n?"crouch":"stand",this.isCrouching=n)):(this.stance=n?"crouch":"stand",this.isCrouching=n),this.isSprinting=this.input.state.sprint&&this.input.state.move.length()>.5&&!this.isCrouching&&!this.isSliding&&this.stats.stamina>5,this.isAiming=this.input.state.aim;const o=this.input.state.move,s=new S(0,0,-1).applyAxisAngle(new S(0,1,0),this.yaw),l=new S(1,0,0).applyAxisAngle(new S(0,1,0),this.yaw),c=new S;c.addScaledVector(s,o.y),c.addScaledVector(l,o.x),c.lengthSq()>0&&c.normalize();let h=0;this.isSliding?(h=this.slideSpeed*(this.slideTimer/.8),c.copy(s)):o.lengthSq()>.01&&(this.isSprinting?h=this.sprintSpeed:this.isCrouching?h=this.crouchSpeed:o.length()>.9?h=this.jogSpeed:h=this.walkSpeed,this.isAiming&&(h*=.52));const d=this.isGrounded?this.isSliding?2:20:7,u=c.multiplyScalar(h);if(this.isSliding?(this.velocity.x=Jt.lerp(this.velocity.x,u.x*1.2,d*e),this.velocity.z=Jt.lerp(this.velocity.z,u.z*1.2,d*e)):(this.velocity.x=Jt.lerp(this.velocity.x,u.x,d*e),this.velocity.z=Jt.lerp(this.velocity.z,u.z,d*e)),this.isGrounded||(this.velocity.y+=this.gravity*e),this.input.state.jump){if(this.isSliding)this.isSliding=!1,this.velocity.y=this.jumpForce*.9,this.velocity.x*=1.15,this.velocity.z*=1.15,this.isGrounded=!1,this.moveState="jump",nt.playProceduralSound("footstep");else if(this.isGrounded||this.coyoteTimer>0){const w=this.canVault();w.can&&this.vaultCooldown<=0&&o.length()>.3?(this.position.y+=w.height+.2,this.velocity.y=2.5,this.velocity.x+=s.x*2.5,this.velocity.z+=s.z*2.5,this.moveState=w.height>1?"mantle":"vault",this.vaultCooldown=.6,nt.playProceduralSound("footstep"),console.log("[Player] Vault",w.height.toFixed(2))):(this.velocity.y=this.jumpForce,this.isGrounded=!1,this.coyoteTimer=0,this.moveState="jump",nt.playProceduralSound("footstep"))}}this.isGrounded?this.coyoteTimer=this.coyoteTime:this.coyoteTimer-=e;let m=!1;const v=new qe(new S(this.position.x-this.radius*.8,this.position.y-.25,this.position.z-this.radius*.8),new S(this.position.x+this.radius*.8,this.position.y+.15,this.position.z+this.radius*.8));for(const w of this.colliders)if(v.intersectsBox(w)&&this.velocity.y<=.2){m=!0;break}if(this.position.y<=.06&&(m=!0,this.position.y=.06),!this.wasGrounded&&m){const w=Math.abs(this.velocity.y);w>8?(nt.playProceduralSound("hit"),w>12&&this.takeDamage((w-12)*4)):nt.playProceduralSound("footstep"),w>3&&(this.moveState="landing")}this.wasGrounded=this.isGrounded,this.isGrounded=m,m&&this.velocity.y<0&&(this.velocity.y=0);const g=this.velocity.clone().multiplyScalar(e);this.moveWithCollision(g,e),this.isSprinting?(this.stats.stamina=Math.max(0,this.stats.stamina-24*e),this.stats.stamina===0&&(this.isSprinting=!1)):this.stats.stamina=Math.min(this.stats.maxStamina,this.stats.stamina+20*e);const f=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.z*this.velocity.z);this.isGrounded?this.isSliding?this.moveState="slide":f<.15?this.moveState="idle":this.isSprinting?this.moveState="sprint":this.isCrouching?this.moveState="crouch_walk":f>3.8?this.moveState="jog":this.moveState="walk":this.moveState=this.velocity.y>.5?"jump":"fall",f>.5&&this.isGrounded&&!this.isSliding&&(this.footstepTimer-=e*f,this.footstepTimer<=0&&(this.footstepTimer=this.isSprinting?.3:this.isCrouching?.68:.42,(!this.isCrouching||Math.random()>.45)&&nt.playProceduralSound("footstep"))),this.mesh.position.copy(this.position),this.mesh.rotation.y=this.yaw;const p=this.isSliding?.5:this.stance==="crouch"?.95:1.68;this.cameraTarget.set(this.position.x,this.position.y+p,this.position.z)}getCameraTarget(){return this.cameraTarget.clone()}takeDamage(e){let t=e;if(this.stats.armor>0){const i=Math.min(this.stats.armor,t*.62);this.stats.armor-=i,t-=i}return this.stats.health=Math.max(0,this.stats.health-t),nt.playProceduralSound("hit"),this.stats.health<=0}heal(e){this.stats.health=Math.min(this.stats.maxHealth,this.stats.health+e)}addArmor(e){this.stats.armor=Math.min(100,this.stats.armor+e)}getPosition(){return this.position.clone()}}class Zm{constructor(e,t){C(this,"target",new S),C(this,"desiredPosition",new S),C(this,"currentPosition",new S),C(this,"offset",new S(0,1.8,4.2)),C(this,"shoulder",.4),C(this,"fovNormal",65),C(this,"fovAim",42),C(this,"shakeIntensity",0),C(this,"shakeDecay",0),C(this,"collisionRadius",.3),this.camera=e,this.colliders=t}setColliders(e){this.colliders=e}setShoulder(e){this.shoulder=e==="right"?.4:-.4}addShake(e,t=4){this.shakeIntensity=Math.max(this.shakeIntensity,e),this.shakeDecay=t}update(e,t,i,r,n,o){this.target.lerp(t,12*e);const s=n?1.1:o?3.2:4.2,l=o?.2:.4,c=new tt().makeRotationFromEuler(new Zt(r,i,0,"YXZ")),h=new S(0,0,s).applyMatrix4(c),d=new S(1,0,0).applyMatrix4(c).multiplyScalar(this.shoulder),u=new S(0,l,0);this.desiredPosition.copy(this.target).add(h).add(d).add(u);const m=this.desiredPosition.clone().sub(this.target),v=m.length();m.normalize();let g=v;const f=this.target.clone();for(const T of this.colliders){const I=new Ca(f,m).intersectBox(T,new S);if(I){const A=I.distanceTo(f);A<g&&A>.3&&(g=A-this.collisionRadius)}}const p=Math.max(.5,g);this.desiredPosition.copy(this.target).add(m.multiplyScalar(p)),this.currentPosition.lerp(this.desiredPosition,(n?18:8)*e),this.camera.position.copy(this.currentPosition);const w=this.target.clone();if(n){const T=new S(0,-.1,-8).applyMatrix4(c);w.add(T)}this.camera.lookAt(w);const _=n?this.fovAim:this.fovNormal;if(this.camera.fov=Jt.lerp(this.camera.fov,_,8*e),this.camera.updateProjectionMatrix(),this.shakeIntensity>.001){const T=(Math.random()-.5)*this.shakeIntensity,I=(Math.random()-.5)*this.shakeIntensity;this.camera.position.x+=T,this.camera.position.y+=I,this.shakeIntensity=Math.max(0,this.shakeIntensity-this.shakeDecay*e)}}getCamera(){return this.camera}}const Ui={materials:{concrete:{roughness:.9,metalness:.05,color:9079429},asphalt:{roughness:.85,metalness:.02,color:1710622},metal:{roughness:.4,metalness:.8,color:6974066},paintedMetal:{roughness:.5,metalness:.3,color:2767434},glass:{roughness:.05,metalness:.1,color:8956620},fabric:{roughness:.95,metalness:0,color:2763314},tactical:{roughness:.7,metalness:.1,color:2962477}}};class Qm{constructor(e=10){C(this,"cellSize"),C(this,"map"),this.cellSize=e,this.map=new Map}key(e,t){return`${Math.floor(e/this.cellSize)},${Math.floor(t/this.cellSize)}`}insert(e){const t=this.key(e.min.x,e.min.z),i=this.key(e.max.x,e.max.z),[r,n]=t.split(",").map(Number),[o,s]=i.split(",").map(Number);for(let l=r;l<=o;l++)for(let c=n;c<=s;c++){const h=`${l},${c}`;this.map.has(h)||this.map.set(h,[]),this.map.get(h).push(e)}}query(e,t){const i=[],r=this.key(e.x-t,e.z-t),n=this.key(e.x+t,e.z+t),[o,s]=r.split(",").map(Number),[l,c]=n.split(",").map(Number),h=new Set;for(let d=o;d<=l;d++)for(let u=s;u<=c;u++){const m=this.map.get(`${d},${u}`);if(m)for(const v of m)h.has(v)||(h.add(v),i.push(v))}return i}clear(){this.map.clear()}}class ef{constructor(){C(this,"group",new Vt),C(this,"colliders",[]),C(this,"stations",[]),this.build()}build(){const e=new fe(10,.3,8),t=new Se({color:2763310,roughness:.9}),i=new Y(e,t);i.position.set(0,0,0),i.receiveShadow=!0,this.group.add(i);const r=new Se({color:3816002,roughness:.85}),n=[{pos:[0,1.5,-4],size:[10,3,.3]},{pos:[0,1.5,4],size:[10,3,.3]},{pos:[-5,1.5,0],size:[.3,3,8]},{pos:[5,1.5,0],size:[.3,3,8]}];for(const m of n){const v=new fe(m.size[0],m.size[1],m.size[2]),g=new Y(v,r);g.position.set(m.pos[0],m.pos[1],m.pos[2]),g.castShadow=!0,g.receiveShadow=!0,this.group.add(g),this.colliders.push(new qe(new S(m.pos[0]-m.size[0]/2,m.pos[1]-m.size[1]/2,m.pos[2]-m.size[2]/2),new S(m.pos[0]+m.size[0]/2,m.pos[1]+m.size[1]/2,m.pos[2]+m.size[2]/2)))}this.createStation("weapons",-3.5,.6,-2.5,4876938),this.createStation("map",0,.6,-3.2,6989567),this.createStation("missions",3.5,.6,-2.5,10980346),this.createStation("upgrades",-3.5,.6,2.5,5111706),this.createStation("story",3.5,.6,2.5,16755268);const o=new hi(16755302,1.5,12);o.position.set(0,2.5,0),this.group.add(o);const s=new _t(1.2,.8),l=new Se({color:58879,emissive:43775,emissiveIntensity:.4,roughness:.2}),c=new Y(s,l);c.position.set(0,1.5,-3.84),this.group.add(c);const h=new fe(2,.4,3),d=new Se({color:2767402,roughness:.9}),u=new Y(h,d);u.position.set(0,.2,1.5),this.group.add(u);for(let m=0;m<5;m++){const v=new _t(.4,.5),g=document.createElement("canvas");g.width=128,g.height=160;const f=g.getContext("2d");f.fillStyle=m%2===0?"#fffaaa":"#aaffff",f.fillRect(0,0,128,160),f.fillStyle="#000",f.font="10px monospace",f.fillText(`NOTE ${m+1}`,10,20),f.font="8px monospace",f.fillText("Mara was here",10,40),f.fillText("Blackout != accident",10,55);const p=new Gi(g),w=new Se({map:p,roughness:.9}),_=new Y(v,w);_.position.set(-4.84,1.2+m*.3,-1+Math.random()*.5),_.rotation.y=Math.PI/2,_.rotation.z=(Math.random()-.5)*.2,this.group.add(_)}}createStation(e,t,i,r,n){const o=new fe(1,.8,.6),s=new Se({color:n,emissive:n,emissiveIntensity:.2,roughness:.6}),l=new Y(o,s);l.position.set(t,i,r),l.castShadow=!0,this.group.add(l),this.stations.push({type:e,pos:new S(t,i,r),mesh:l});const c=new _t(.8,.2),h=document.createElement("canvas");h.width=256,h.height=64;const d=h.getContext("2d");d.fillStyle="#000000",d.fillRect(0,0,256,64),d.fillStyle="#ffffff",d.font="bold 20px monospace",d.textAlign="center",d.fillText(e.toUpperCase(),128,38);const u=new Gi(h),m=new ui({map:u,transparent:!0,side:Ot}),v=new Y(c,m);v.position.set(t,i+.7,r),this.group.add(v)}getColliders(){return this.colliders}getStations(){return this.stations}setPosition(e,t,i){this.group.position.set(e,t,i)}interactWithStation(e){switch(e){case"weapons":return"WEAPONS STATION — Modify and upgrade arsenal";case"map":return"MAP TABLE — Veyra Sector 7 tactical overview";case"missions":return"MISSION BOARD — Active operations and intel";case"upgrades":return"UPGRADE BENCH — Enhance gear with scavenged materials";case"story":return"INVESTIGATION WALL — Mara's notes and Blackout evidence";default:return`STATION: ${e}`}}}class tf{constructor(e){C(this,"group",new Vt),C(this,"colliders",[]),C(this,"spatialHash",new Qm(12)),C(this,"districts",[]),C(this,"materials",new Map),C(this,"instancedMeshes",[]),C(this,"safehouse",null),C(this,"lights",[]),this.scene=e,this.scene.add(this.group),this.createMaterials()}createMaterials(){const e=(t,i)=>{const r=new Se({color:i.color??8947848,roughness:i.roughness??.8,metalness:i.metalness??.1});return this.materials.set(t,r),r};e("concrete",Ui.materials.concrete),e("asphalt",Ui.materials.asphalt),e("metal",Ui.materials.metal),e("paintedMetal",Ui.materials.paintedMetal),e("glass",Ui.materials.glass),e("fabric",Ui.materials.fabric),e("tactical",Ui.materials.tactical),e("emergency",{color:16720384,roughness:.6,metalness:.2}),e("neon",{color:58879,roughness:.2,metalness:.5}),e("rust",{color:9062954,roughness:.9,metalness:.1}),e("wood",{color:4864554,roughness:.85,metalness:0})}addCollider(e){this.colliders.push(e),this.spatialHash.insert(e)}async buildDistrict(){for(;this.group.children.length;)this.group.remove(this.group.children[0]);this.colliders=[],this.spatialHash.clear(),this.districts=[],this.lights.forEach(n=>this.scene.remove(n)),this.lights=[];const e=new _t(500,500,10,10),t=this.materials.get("asphalt"),i=new Y(e,t);i.rotation.x=-Math.PI/2,i.receiveShadow=!0;const r=e.attributes.position;for(let n=0;n<r.count;n++)r.setZ(n,(Math.random()-.5)*.15);r.needsUpdate=!0,this.group.add(i),this.addCollider(new qe(new S(-250,-2,-250),new S(250,0,250))),this.createCentralStreet(),this.createResidentialBlock(),this.createCorporateBuilding(),this.createIndustrialYard(),this.createUnderground(),this.createRooftops(),this.createHiddenLocation(),this.createSafehouse(),this.createAdditionalProps(),this.setupLighting(),this.addEnvironmentalStorytelling(),console.log(`[World] Built ${this.colliders.length} colliders, ${this.group.children.length} meshes, ${this.districts.length} districts`)}createCentralStreet(){const e={id:"central",name:"Central Street",bounds:new qe(new S(-60,0,-110),new S(60,35,25)),powerState:"partial"};this.districts.push(e);const t=[{x:-24,z:-68,w:14,d:18,h:30},{x:26,z:-72,w:16,d:14,h:36},{x:-30,z:-35,w:12,d:20,h:24},{x:28,z:-28,w:14,d:16,h:28},{x:-20,z:-6,w:18,d:12,h:20},{x:22,z:2,w:20,d:14,h:22},{x:-45,z:-50,w:10,d:10,h:16},{x:45,z:-55,w:10,d:10,h:18}];for(const v of t)this.createSimpleBuilding(v.x,v.z,v.w,v.d,v.h);for(let v=0;v<12;v++){const g=(Math.random()-.5)*50,f=-90+Math.random()*80;this.createBarrier(g,f),v%3===0&&this.createDebris(g+(Math.random()-.5)*3,f+(Math.random()-.5)*3)}const i=new ft(.1,.12,6,8),r=this.materials.get("metal"),n=16,o=new Um(i,r,n);let s=0;for(let v=0;v<n;v++){const g=(v%2===0?-13:13)+(Math.random()-.5)*2,f=-95+v*11,p=new tt().makeTranslation(g,3,f);o.setMatrixAt(s++,p)}o.instanceMatrix.needsUpdate=!0,o.castShadow=!0,this.group.add(o);const l=new _t(.3,6),c=new Se({color:16777215,roughness:.9});for(let v=0;v<28;v++){const g=new Y(l,c);g.rotation.x=-Math.PI/2,g.position.set(0,.02,-100+v*6),this.group.add(g)}const h=new fe(4,.2,120),d=this.materials.get("concrete"),u=new Y(h,d);u.position.set(-8,.1,-35),this.group.add(u);const m=new Y(h,d);m.position.set(8,.1,-35),this.group.add(m)}createResidentialBlock(){const e={id:"residential",name:"Abandoned Residential",bounds:new qe(new S(-75,0,-10),new S(-10,25,65)),powerState:"blackout"};this.districts.push(e);const t=-38,i=22,r=6;for(let s=0;s<r;s++){const l=s*3.2,c=new fe(30,.3,22),h=new Y(c,this.materials.get("concrete"));if(h.position.set(t,l,i),h.receiveShadow=!0,this.group.add(h),s>0&&this.addCollider(new qe(new S(t-15,l-.2,i-11),new S(t+15,l+.2,i+11))),s<r-1){const d=this.materials.get("concrete"),u=[{pos:[t,l+1.6,i-11],size:[30,3.2,.4]},{pos:[t,l+1.6,i+11],size:[30,3.2,.4]},{pos:[t-15,l+1.6,i],size:[.4,3.2,22]},{pos:[t+15,l+1.6,i],size:[.4,3.2,22]}];for(const m of u){const v=new fe(m.size[0],m.size[1],m.size[2]),g=new Y(v,d);g.position.set(m.pos[0],m.pos[1],m.pos[2]),g.castShadow=!0,g.receiveShadow=!0,this.group.add(g),this.addCollider(new qe(new S(m.pos[0]-m.size[0]/2,m.pos[1]-m.size[1]/2,m.pos[2]-m.size[2]/2),new S(m.pos[0]+m.size[0]/2,m.pos[1]+m.size[1]/2,m.pos[2]+m.size[2]/2)))}for(let m=-12;m<=12;m+=3.5){const v=new _t(1.2,1.6),g=new Se({color:3359829,transparent:!0,opacity:Math.random()>.6?.12:.04,emissive:Math.random()>.82?16755268:0,emissiveIntensity:Math.random()>.82?.15:0}),f=new Y(v,g);if(f.position.set(t+m,l+1.6,i+11.21),this.group.add(f),Math.random()>.85){const p=new hi(16755302,.6,8);p.position.set(t+m,l+1.6,i+9),this.scene.add(p),this.lights.push(p)}}if(s===2||s===3)for(let m=0;m<3;m++){const v=new fe(.8,.6,.5),g=new Se({color:4864554,roughness:.9}),f=new Y(v,g);f.position.set(t+(Math.random()-.5)*10,l+.5,i+(Math.random()-.5)*6),this.group.add(f)}}}const n=new fe(3.5,20,4.5),o=new Y(n,this.materials.get("metal"));o.position.set(t+11,10,i-6),this.group.add(o),this.addCollider(new qe(new S(t+9.25,0,i-8.25),new S(t+12.75,20,i-3.75)));for(let s=1;s<r-1;s++){const l=new fe(4,.2,2),c=new Y(l,this.materials.get("concrete"));c.position.set(t-8,s*3.2,i+12),this.group.add(c)}}createCorporateBuilding(){const e={id:"corporate",name:"Helix Tower",bounds:new qe(new S(-20,0,40),new S(30,60,90)),powerState:"powered"};this.districts.push(e);const t=5,i=68,r=52,n=new fe(26,r,24),o=new Se({color:1710626,roughness:.25,metalness:.75}),s=new Y(n,o);s.position.set(t,r/2,i),s.castShadow=!0,s.receiveShadow=!0,this.group.add(s),this.addCollider(new qe(new S(t-13,0,i-12),new S(t+13,r,i+12)));for(let p=4;p<r;p+=2.8)for(let w=-11;w<=11;w+=2.4){const _=Math.random()>.7,T=new _t(2,2.4),I=new Se({color:_?11193599:3359829,transparent:!0,opacity:_?.25:.08,emissive:_?8956620:0,emissiveIntensity:_?.2:0,roughness:.05,metalness:.3}),A=new Y(T,I);A.position.set(t+w,p,i+12.1),this.group.add(A)}const l=new _t(6,2),c=document.createElement("canvas");c.width=512,c.height=170;const h=c.getContext("2d");h.fillStyle="#0a0a0f",h.fillRect(0,0,512,170),h.fillStyle="#00e5ff",h.font="bold 64px Orbitron",h.textAlign="center",h.fillText("HELIX",256,100),h.font="16px JetBrains Mono",h.fillStyle="#8a8a9a",h.fillText("CORPORATE TOWER • SECTOR 7",256,130);const d=new Gi(c),u=new Se({map:d,emissive:43775,emissiveIntensity:.3}),m=new Y(l,u);m.position.set(t,8,i-12.1),m.rotation.y=Math.PI,this.group.add(m);const v=new fe(7,4.5,2.5),g=this.materials.get("metal"),f=new Y(v,g);f.position.set(t,2.25,i-13.5),this.group.add(f);for(let p=-1;p<=1;p++){const w=new ft(.25,.25,1,8),_=new Y(w,this.materials.get("paintedMetal"));_.position.set(t+p*2,.5,i-16),this.group.add(_),this.addCollider(new qe(new S(t+p*2-.25,0,i-16.25),new S(t+p*2+.25,1,i-15.75)))}}createIndustrialYard(){const e={id:"industrial",name:"Industrial Yard",bounds:new qe(new S(20,0,-55),new S(85,20,15)),powerState:"partial"};this.districts.push(e);for(let l=0;l<4;l++){const c=42+l*16,h=-22,d=new fe(14,9,18),u=new Se({color:3815998,roughness:.85,metalness:.15}),m=new Y(d,u);m.position.set(c,4.5,h),m.castShadow=!0,this.group.add(m),this.addCollider(new qe(new S(c-7,0,h-9),new S(c+7,9,h+9)));const v=new fe(4,5,.3),g=new Y(v,this.materials.get("metal"));g.position.set(c,2.5,h+9.2),this.group.add(g)}const t=[9054762,2775690,4872746,9079338,5913130];for(let l=0;l<16;l++){const c=32+l%5*6.8,h=-38+Math.floor(l/5)*6.8,d=new fe(6,2.6,2.6),u=new Se({color:t[l%t.length],roughness:.7,metalness:.3}),m=new Y(d,u);m.position.set(c,1.3,h),m.castShadow=!0,m.rotation.y=(Math.random()-.5)*.1,this.group.add(m),this.addCollider(new qe(new S(c-3,0,h-1.3),new S(c+3,2.6,h+1.3)))}const i=new fe(9,4.5,7),r=this.materials.get("paintedMetal"),n=new Y(i,r);n.position.set(58,2.25,-4),this.group.add(n),this.addCollider(new qe(new S(53.5,0,-7.5),new S(62.5,4.5,-.5)));for(let l=0;l<3;l++){const c=new ft(.15,.18,8,8),h=new Y(c,this.materials.get("metal"));h.position.set(55+l*8,4,-12),this.group.add(h)}const o=new fe(3,2,2),s=new Se({color:4868682,roughness:.7,metalness:.5});for(let l=0;l<4;l++){const c=new Y(o,s);c.position.set(40+l*3,1,-8),this.group.add(c)}}createUnderground(){const e={id:"underground",name:"Service Tunnels",bounds:new qe(new S(-45,-8,-95),new S(45,0,85)),powerState:"blackout"};this.districts.push(e);const t=180,i=new ft(3.8,3.8,t,20,1,!0),r=new Se({color:2763310,roughness:.95,side:Ot}),n=new Y(i,r);n.rotation.z=Math.PI/2,n.position.set(0,-3.2,-10),this.group.add(n);const o=new fe(t,.5,7),s=new Y(o,this.materials.get("concrete"));s.position.set(0,-5.8,-10),this.group.add(s);for(let d=-80;d<=80;d+=18){const u=new hi(16755268,.8,12);u.position.set(d,-1.5,-10),this.scene.add(u),this.lights.push(u)}const l=new ft(.2,.2,t,8);l.rotateZ(Math.PI/2);const c=new Se({color:4868682,roughness:.6,metalness:.5}),h=new Y(l,c);h.position.set(0,-.5,-8),this.group.add(h)}createRooftops(){const e=[{x:-24,z:-68,h:30},{x:26,z:-72,h:36},{x:-38,z:22,h:19.2},{x:5,z:68,h:52},{x:42,z:-22,h:9}];for(const c of e){const h=new fe(13,1.1,.45),d=this.materials.get("concrete"),u=new Y(h,d);u.position.set(c.x,c.h+.55,c.z-5.5),this.group.add(u);const m=new Y(h,d);m.position.set(c.x,c.h+.55,c.z+5.5),this.group.add(m);const v=new fe(.45,1.1,11),g=new Y(v,d);g.position.set(c.x-6.25,c.h+.55,c.z),this.group.add(g);const f=new Y(v,d);f.position.set(c.x+6.25,c.h+.55,c.z),this.group.add(f);const p=new fe(1.5,1,1),w=new Y(p,this.materials.get("metal"));w.position.set(c.x+3,c.h+.5,c.z+2),this.group.add(w)}const t=new fe(9,.35,1.3),i=new Se({color:4864554,roughness:.85}),r=new Y(t,i);r.position.set(-10,30,-68),this.group.add(r);const n=new Y(t,i);n.position.set(2,22,-35),n.rotation.y=.4,this.group.add(n);const o=new ft(.02,.02,30,4);o.rotateZ(Math.PI/2);const s=new Se({color:1118481,roughness:.9}),l=new Y(o,s);l.position.set(-5,32,-50),this.group.add(l)}createHiddenLocation(){const e=new fe(7,3.5,7),t=new Se({color:1710622,roughness:.95}),i=new Y(e,t);i.position.set(-48,.5,-78),this.group.add(i),this.addCollider(new qe(new S(-51.5,0,-81.5),new S(-44.5,3.5,-74.5)));const r=new fe(.9,.6,.7),n=new Se({color:65416,emissive:65416,emissiveIntensity:.7}),o=new Y(r,n);o.position.set(-48,1.2,-78),this.group.add(o);const s=new hi(65416,1,6);s.position.set(-48,1.5,-78),this.scene.add(s),this.lights.push(s)}createSafehouse(){this.safehouse=new ef,this.safehouse.setPosition(-58,0,15),this.group.add(this.safehouse.group),this.safehouse.getColliders().forEach(t=>{const i=new qe(t.min.clone().add(new S(-58,0,15)),t.max.clone().add(new S(-58,0,15)));this.addCollider(i)});const e={id:"safehouse",name:"Safehouse",bounds:new qe(new S(-63,0,11),new S(-53,4,19)),powerState:"powered"};this.districts.push(e)}createAdditionalProps(){for(let e=0;e<20;e++)this.createDebris((Math.random()-.5)*100,-80+Math.random()*120);for(let e=0;e<6;e++){const t=new ft(.4,.4,.9,8),i=new Se({color:2763306,roughness:.8}),r=new Y(t,i);r.position.set((Math.random()-.5)*60,.45,-70+Math.random()*90),this.group.add(r),this.addCollider(new qe(new S(r.position.x-.4,0,r.position.z-.4),new S(r.position.x+.4,.9,r.position.z+.4)))}}createSimpleBuilding(e,t,i,r,n){const o=new fe(i,n,r),s=new Se({color:2763314,roughness:.8,metalness:.15}),l=new Y(o,s);l.position.set(e,n/2,t),l.castShadow=!0,l.receiveShadow=!0,this.group.add(l),this.addCollider(new qe(new S(e-i/2,0,t-r/2),new S(e+i/2,n,t+r/2)));for(let c=3;c<n-1;c+=2.5)for(let h=-i/2+1;h<i/2-.5;h+=2.2){const d=new _t(.9,1.2),u=Math.random()>.72,m=new Se({color:u?8956620:3359829,transparent:!0,opacity:u?.18:.05,emissive:u?16755268:0,emissiveIntensity:u?.12:0}),v=new Y(d,m);v.position.set(e+h,c,t+r/2+.06),this.group.add(v)}if(Math.random()>.5){const c=new ft(.05,.05,3,6),h=new Y(c,this.materials.get("metal"));h.position.set(e+(Math.random()-.5)*i*.5,n+1.5,t+(Math.random()-.5)*r*.5),this.group.add(h)}}createBarrier(e,t){const i=new fe(2.2,1.1,.45),r=new Se({color:11184810,roughness:.7}),n=new Y(i,r);n.position.set(e,.55,t),n.rotation.y=Math.random()*.6-.3,n.castShadow=!0,this.group.add(n),this.addCollider(new qe(new S(e-1.1,0,t-.25),new S(e+1.1,1.1,t+.25)))}createDebris(e,t){const i=new fe(.3+Math.random()*.5,.1+Math.random()*.3,.3+Math.random()*.5),r=new Se({color:4868682,roughness:.9}),n=new Y(i,r);n.position.set(e,.05,t),n.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),this.group.add(n)}setupLighting(){const e=new nl(4210768,.65);this.scene.add(e),this.lights.push(e);const t=new Ea(11193599,.9);t.position.set(50,70,25),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=1,t.shadow.camera.far=200,t.shadow.camera.left=-100,t.shadow.camera.right=100,t.shadow.camera.top=100,t.shadow.camera.bottom=-100,t.shadow.bias=-1e-4,this.scene.add(t),this.lights.push(t);const i=16755268;for(let l=0;l<8;l++){const c=new hi(i,2.2,28);c.position.set(l%2===0?-13:13,5.8,-90+l*13),c.castShadow=!0,c.shadow.mapSize.set(512,512),this.scene.add(c),this.lights.push(c)}const r=new hi(16720384,1.8,18);r.position.set(58,4.5,-4),this.scene.add(r),this.lights.push(r);const n=new hi(58879,1.2,35);n.position.set(5,28,68),this.scene.add(n),this.lights.push(n);const o=new hi(16755302,1.5,15);o.position.set(-58,3,15),this.scene.add(o),this.lights.push(o);const s=new Ea(8947967,.15);s.position.set(-40,60,-20),this.scene.add(s),this.lights.push(s)}addEnvironmentalStorytelling(){const e=new _t(2.2,1.4),t=document.createElement("canvas");t.width=256,t.height=152;const i=t.getContext("2d");i.fillStyle="#ffcc00",i.fillRect(0,0,256,152),i.fillStyle="#000",i.font="bold 22px monospace",i.fillText("EVACUATION",20,38),i.font="13px monospace",i.fillText("SECTOR 7 - MANDATORY",20,68),i.fillText("FOLLOW HELIX PROTOCOL",20,88),i.fillStyle="#aa0000",i.font="bold 11px monospace",i.fillText("BLACKOUT ZONE — AUTHORIZED ONLY",20,115);const r=new Gi(t),n=new Se({map:r,roughness:.8}),o=new Y(e,n);o.position.set(-12,2.6,-58),o.rotation.y=.35,this.group.add(o);const s=[{x:4,z:-48,rot:.2,color:2763322},{x:-6,z:-32,rot:-.3,color:3811882},{x:18,z:-18,rot:.5,color:2767402}];for(const f of s){const p=new fe(4.8,1.5,2.2),w=new Se({color:f.color,roughness:.6,metalness:.4}),_=new Y(p,w);_.position.set(f.x,.75,f.z),_.rotation.y=f.rot,_.castShadow=!0,this.group.add(_),this.addCollider(new qe(new S(f.x-2.4,0,f.z-1.1),new S(f.x+2.4,1.5,f.z+1.1)));const T=new _t(1,.6),I=new Se({color:0,roughness:.9}),A=new Y(T,I);A.position.set(f.x,1.1,f.z),A.rotation.y=f.rot,this.group.add(A)}const l=new _t(3,1.5),c=document.createElement("canvas");c.width=256,c.height=128;const h=c.getContext("2d");h.fillStyle="rgba(0,0,0,0)",h.fillRect(0,0,256,128),h.fillStyle="#ff4d6a",h.font="bold 32px Orbitron",h.fillText("ASHEN",20,60),h.fillStyle="#ffffff",h.font="14px JetBrains Mono",h.fillText("WE REMEMBER",20,85);const d=new Gi(c),u=new Se({map:d,transparent:!0,roughness:.9}),m=new Y(l,u);m.position.set(-24,2,-67.9),m.rotation.y=0,this.group.add(m);const v=new fe(.6,.8,.4),g=new Y(v,this.materials.get("metal"));g.position.set(-10,3.5,-45),this.group.add(g)}getDistrictAt(e){for(const t of this.districts)if(t.bounds.containsPoint(e))return t;return null}setPowerState(e,t){const i=this.districts.find(r=>r.id===e);i&&(i.powerState=t)}dispose(){this.scene.remove(this.group),this.lights.forEach(e=>this.scene.remove(e))}}class rf{constructor(){C(this,"group",new Vt),C(this,"mixer",null),C(this,"parts",new Map),this.buildMesh()}buildMesh(){const e=new Se({color:2962477,roughness:.7,metalness:.1}),t=new Se({color:13215369,roughness:.8}),i=new Se({color:1710622,roughness:.5,metalness:.3}),r=new Se({color:3815998,roughness:.6,metalness:.2}),n=new fe(.6,.75,.35),o=new Y(n,e);o.position.y=1.1,o.castShadow=!0,this.group.add(o),this.parts.set("torso",o);const s=new fe(.68,.6,.42),l=new Y(s,r);l.position.y=1.15,l.castShadow=!0,this.group.add(l);const c=new mi(.22,12,12),h=new Y(c,t);h.position.y=1.7,h.castShadow=!0,this.group.add(h),this.parts.set("head",h);const d=new ft(.24,.26,.12,12),u=new Y(d,i);u.position.y=1.82,this.group.add(u);const m=new ft(.09,.09,.6,8),v=new Y(m,e);v.position.set(-.42,1.1,0),v.rotation.z=-.1,v.castShadow=!0,this.group.add(v);const g=new Y(m,e);g.position.set(.42,1.1,0),g.rotation.z=.1,g.castShadow=!0,this.group.add(g),this.parts.set("rightArm",g);const f=new ft(.13,.12,.85,8),p=new Y(f,e);p.position.set(-.18,.42,0),p.castShadow=!0,this.group.add(p);const w=new Y(f,e);w.position.set(.18,.42,0),w.castShadow=!0,this.group.add(w);const _=new fe(.5,.6,.25),T=new Y(_,i);T.position.set(0,1.1,-.3),T.castShadow=!0,this.group.add(T);const I=new fe(.12,.25,.18),A=new Y(I,i);A.position.set(.38,.55,.05),this.group.add(A);const R=new Vt;R.position.set(.5,1,.15),R.name="weaponSocket",this.group.add(R);const j=new mi(.11,8,8),b=new Se({color:1118481,roughness:.9}),E=new Y(j,b);E.position.set(-.42,.75,0),this.group.add(E);const G=new Y(j,b);G.position.set(.42,.75,0),this.group.add(G);const B=new fe(.18,.12,.32),ie=new Se({color:657930,roughness:.8}),P=new Y(B,ie);P.position.set(-.18,.06,.05),this.group.add(P);const O=new Y(B,ie);O.position.set(.18,.06,.05),this.group.add(O),this.group.traverse(V=>{V.isMesh&&(V.frustumCulled=!1)})}getWeaponSocket(){return this.group.getObjectByName("weaponSocket")}update(e,t,i){const r=performance.now()*.001,n=this.parts.get("rightArm");n&&(t==="sprint"?n.rotation.x=Math.sin(r*8)*.6:t==="walk"||t==="jog"?n.rotation.x=Math.sin(r*5)*.4:n.rotation.x=Jt.lerp(n.rotation.x,0,e*5)),t==="idle"?this.group.position.y=Math.sin(r*1.2)*.015:this.group.position.y=Jt.lerp(this.group.position.y,0,e*8)}setPosition(e){this.group.position.copy(e)}setRotation(e){this.group.rotation.y=e}}class af{constructor(e){C(this,"group",new Vt),C(this,"config"),C(this,"health"),C(this,"head"),C(this,"body"),this.config=e,this.health=e.health,this.buildMesh()}buildMesh(){const e=new Se({color:this.config.color,roughness:.7,metalness:.2}),t=new Se({color:1118484,roughness:.6}),i=new fe(.55*this.config.scale,.7*this.config.scale,.32*this.config.scale);this.body=new Y(i,e),this.body.position.y=1*this.config.scale,this.body.castShadow=!0,this.group.add(this.body);const r=new mi(.2*this.config.scale,10,10);if(this.head=new Y(r,new Se({color:9075306,roughness:.8})),this.head.position.y=1.55*this.config.scale,this.group.add(this.head),this.config.id==="heavy"){const f=new fe(.7,.5,.45),p=new Y(f,t);p.position.y=1.1,this.group.add(p);const w=new mi(.26,10,10),_=new Y(w,t);_.position.y=1.58,this.group.add(_)}else if(this.config.id==="sniper"){const f=new Y(new fe(.6,.8,.4),new Se({color:3820074,roughness:.95}));f.position.y=1,this.group.add(f)}const n=new ft(.08,.08,.55,6),o=new Y(n,e);o.position.set(-.38,1,0),this.group.add(o);const s=new Y(n,e);s.position.set(.38,1,0),this.group.add(s);const l=new ft(.11,.1,.8,6),c=new Y(l,e);c.position.set(-.15,.4,0),this.group.add(c);const h=new Y(l,e);h.position.set(.15,.4,0),this.group.add(h);const d=new fe(.08,.08,.7),u=new Y(d,t);u.position.set(.45,1,.3),this.group.add(u);const m=new _t(.2,.2),v=new ui({color:this.config.color,side:Ot}),g=new Y(m,v);g.position.set(0,2.1,0),g.name="indicator",this.group.add(g)}takeDamage(e,t=!1){const i=t?e*2.2:e;return this.health-=i,this.body.material.emissive.setHex(5570560),setTimeout(()=>{this.body.material.emissive.setHex(0)},80),this.health<=0}setPosition(e){this.group.position.copy(e)}getPosition(){return this.group.position.clone()}lookAt(e){const t=e.clone().sub(this.group.position);if(t.y=0,t.lengthSq()>.01){const i=Math.atan2(t.x,t.z);this.group.rotation.y=i}}dispose(e){e.remove(this.group)}}const _a=[{id:"m9_tactical",name:"M9 Tactical",category:"pistol",damage:28,fireRate:420,magazine:15,reserve:90,reloadTime:1.4,range:35,recoil:.35,spread:.02,projectile:"hitscan",fireModes:["semi"],attachments:["suppressor_pistol","red_dot_micro"],sound:"pistol",description:"Standard sidearm. Reliable, quiet with suppressor."},{id:"vec_9",name:"VEC-9",category:"smg",damage:19,fireRate:850,magazine:32,reserve:160,reloadTime:1.8,range:40,recoil:.45,spread:.06,projectile:"hitscan",fireModes:["auto","burst"],attachments:["suppressor_smg","holo_sight","grip_vertical"],sound:"smg",description:"High rate CQB weapon. Melts armor up close."},{id:"ar_41",name:"AR-41 Vanguard",category:"rifle",damage:36,fireRate:650,magazine:30,reserve:150,reloadTime:2.1,range:85,recoil:.6,spread:.03,projectile:"hitscan",fireModes:["auto","semi"],attachments:["acog","suppressor_rifle","grip_angled","extended_mag"],sound:"rifle",description:"Workhorse rifle. Balanced for Veyra operations."},{id:"sg_breach",name:"Breacher-12",category:"shotgun",damage:14,fireRate:120,magazine:8,reserve:32,reloadTime:3.2,range:18,recoil:1.2,spread:.18,projectile:"hitscan",fireModes:["semi"],attachments:[],sound:"shotgun",description:"Door kicker. Devastating in tight corridors."},{id:"sr_phantom",name:"Phantom SR",category:"sniper",damage:110,fireRate:45,magazine:5,reserve:20,reloadTime:2.8,range:220,recoil:1.8,spread:.005,projectile:"projectile",fireModes:["semi"],attachments:["scope_8x","suppressor_sniper"],sound:"sniper",description:"Long eye of Veyra. One shot changes everything."},{id:"knife_tactical",name:"Tactical Blade",category:"melee",damage:75,fireRate:90,magazine:1,reserve:0,reloadTime:0,range:2.2,recoil:0,spread:0,projectile:"hitscan",fireModes:["semi"],attachments:[],sound:"melee",description:"Silent. Final. The city teaches you to be quiet."}];class nf{constructor(){C(this,"weapons",[]),C(this,"currentIndex",0),C(this,"lastFireTime",0),C(this,"isReloading",!1),C(this,"reloadTimer",0),C(this,"recoil",0),C(this,"spread",0)}createWeaponMesh(e){const t=new Vt,i=new Se({color:1710622,roughness:.5,metalness:.6}),r=new Se({color:4868686,roughness:.3,metalness:.8});let n;switch(e.category){case"pistol":n=new fe(.08,.08,.28);break;case"smg":n=new fe(.1,.12,.45);break;case"rifle":n=new fe(.1,.14,.65);break;case"shotgun":n=new fe(.12,.14,.7);break;case"sniper":n=new fe(.11,.15,.95);break;case"melee":n=new fe(.04,.04,.35);break;default:n=new fe(.1,.1,.5)}const o=new Y(n,i);o.castShadow=!0,t.add(o);const s=new ft(.02,.02,.3,6);s.rotateX(Math.PI/2);const l=new Y(s,r);if(l.position.z=n.parameters.depth/2+.15,t.add(l),e.category!=="melee"){const u=new fe(.04,.06,.12),m=new Y(u,r);m.position.set(0,.1,-.05),t.add(m)}const c=new Dn(.06,.18,6),h=new ui({color:16755268,transparent:!0,opacity:0}),d=new Y(c,h);return d.rotation.x=Math.PI/2,d.position.z=n.parameters.depth/2+.35,d.name="muzzleFlash",t.add(d),t}addWeapon(e){const t=_a.find(r=>r.id===e);if(!t||this.weapons.find(r=>r.config.id===e))return null;const i={config:t,ammoInMag:t.magazine,reserve:t.reserve,attachments:[],mesh:this.createWeaponMesh(t)};return this.weapons.push(i),i}getCurrent(){return this.weapons[this.currentIndex]??null}switchWeapon(e){this.weapons.length<=1||(this.currentIndex=(this.currentIndex+e+this.weapons.length)%this.weapons.length,nt.playProceduralSound("reload"))}setWeaponIndex(e){e>=0&&e<this.weapons.length&&(this.currentIndex=e,nt.playProceduralSound("reload"))}canFire(){const e=this.getCurrent();return!e||this.isReloading?!1:e.config.category==="melee"?performance.now()-this.lastFireTime>6e4/e.config.fireRate:e.ammoInMag>0&&performance.now()-this.lastFireTime>6e4/e.config.fireRate}fire(e,t){const i=this.getCurrent();if(!i||!this.canFire())return null;this.lastFireTime=performance.now(),i.config.category!=="melee"&&i.ammoInMag--,this.recoil=Math.min(1.5,this.recoil+i.config.recoil*.25),this.spread=Math.min(.25,this.spread+i.config.spread*.6);const r=i.mesh.getObjectByName("muzzleFlash");return r&&(r.material.opacity=.9,setTimeout(()=>{r.material.opacity=0},40)),nt.playProceduralSound(i.config.sound),{hit:!1,damage:i.config.damage}}startReload(){const e=this.getCurrent();return!e||this.isReloading||e.ammoInMag===e.config.magazine||e.reserve<=0?!1:(this.isReloading=!0,this.reloadTimer=e.config.reloadTime,nt.playProceduralSound("reload"),!0)}update(e){if(this.isReloading&&(this.reloadTimer-=e,this.reloadTimer<=0)){const t=this.getCurrent();if(t){const i=t.config.magazine-t.ammoInMag,r=Math.min(i,t.reserve);t.ammoInMag+=r,t.reserve-=r}this.isReloading=!1}this.recoil=Math.max(0,this.recoil-e*2.5),this.spread=Math.max(0,this.spread-e*1.8)}getRecoil(){return this.recoil}getSpread(){return this.spread}getIsReloading(){return this.isReloading}addAmmo(e,t){for(const i of this.weapons)i.config.category!=="melee"&&(i.reserve+=t)}}class sf{constructor(e,t,i){C(this,"state","patrol"),C(this,"memory",{lastKnownPlayerPos:null,lastSeenTime:0,lastHeardPos:null,deadTeammates:0,suspiciousLocations:[],threatLevel:0}),C(this,"position"),C(this,"patrolPoints",[]),C(this,"patrolIndex",0),C(this,"detection",0),C(this,"stateTimer",0),C(this,"velocity",new S),C(this,"targetPos",null),C(this,"fireCooldown",0),C(this,"squadId",null),this.character=e,this.config=t,this.position=i.clone(),this.character.setPosition(i),this.generatePatrol(i)}generatePatrol(e){for(let t=0;t<4;t++){const i=t/4*Math.PI*2+Math.random()*.5,r=6+Math.random()*10;this.patrolPoints.push(new S(e.x+Math.cos(i)*r,e.y,e.z+Math.sin(i)*r))}}setSquad(e){this.squadId=e}update(e,t,i,r,n,o){this.stateTimer+=e,this.fireCooldown=Math.max(0,this.fireCooldown-e);const s=t.clone().sub(this.position),l=s.length(),c=this.canSeePlayer(t,n,l),h=this.canHearPlayer(t,r,l);if(c){const u=r.isCrouching?.5:r.isSprinting?1.5:1,m=Jt.clamp(1-l/this.config.detectionRange,0,1),v=this.isInFOV(s)?1:.2;this.detection+=e*1.8*u*v*(.3+m),this.memory.lastKnownPlayerPos=t.clone(),this.memory.lastSeenTime=performance.now()}else this.detection-=e*.6,h&&(this.detection+=e*.8,this.memory.lastHeardPos=t.clone(),this.memory.lastKnownPlayerPos||(this.memory.lastKnownPlayerPos=t.clone()));this.detection=Jt.clamp(this.detection,0,1);const d=this.state;switch(this.detection>=.95?(this.state="combat",this.memory.threatLevel=1):this.detection>=.65?this.state!=="combat"&&(this.state="alerted"):this.detection>=.35?((this.state==="patrol"||this.state==="idle")&&(this.state="suspicious"),this.state==="suspicious"&&this.stateTimer>2&&(this.state="investigating")):((this.state==="alerted"||this.state==="combat")&&(this.state="searching",this.stateTimer=0),this.state==="searching"&&this.stateTimer>8&&(this.state="lost",this.stateTimer=0),this.state==="lost"&&this.stateTimer>4&&(this.state="patrol",this.memory.lastKnownPlayerPos=null)),d!==this.state&&(this.stateTimer=0),this.state){case"patrol":this.updatePatrol(e);break;case"suspicious":this.updateSuspicious(e);break;case"investigating":this.updateInvestigate(e);break;case"alerted":this.updateAlerted(e,t);break;case"combat":this.updateCombat(e,t,o);break;case"searching":this.updateSearching(e);break;case"lost":this.velocity.set(0,0,0);break}if(this.position.add(this.velocity.clone().multiplyScalar(e)),this.position.y=0,this.character.setPosition(this.position),this.targetPos||this.memory.lastKnownPlayerPos){const u=this.state==="combat"||this.state==="alerted"?t:this.targetPos||this.memory.lastKnownPlayerPos;this.character.lookAt(u)}}canSeePlayer(e,t,i){if(i>this.config.detectionRange||!this.isInFOV(e.clone().sub(this.position)))return!1;const r=e.clone().sub(this.position);r.y=0;const n=r.length();r.normalize();const o=new Ca(this.position.clone().add(new S(0,1.2,0)),r);for(const s of t){const l=o.intersectBox(s,new S);if(l&&l.distanceTo(this.position)<n-.5)return!1}return!0}canHearPlayer(e,t,i){let r=this.config.hearingRange;return t.isShooting&&(r*=3),t.isSprinting&&(r*=1.5),t.isCrouching&&(r*=.4),i<r}isInFOV(e){return e.y=0,e.lengthSq()<.01?!0:new S(0,0,-1).applyAxisAngle(new S(0,1,0),this.character.group.rotation.y).angleTo(e.clone().normalize())<Jt.degToRad(this.config.fov*.5)}updatePatrol(e){if(this.patrolPoints.length===0)return;const t=this.patrolPoints[this.patrolIndex].clone().sub(this.position);t.y=0,t.length()<1.2?(this.patrolIndex=(this.patrolIndex+1)%this.patrolPoints.length,this.velocity.set(0,0,0),Math.random()<.3&&(this.state="idle",setTimeout(()=>{this.state==="idle"&&(this.state="patrol")},2e3+Math.random()*3e3))):(t.normalize().multiplyScalar(this.config.speed*.5),this.velocity.lerp(t,e*3))}updateSuspicious(e){this.velocity.lerp(new S(0,0,0),e*2),this.character.group.rotation.y+=Math.sin(this.stateTimer*.8)*e*.5}updateInvestigate(e){const t=this.memory.lastHeardPos||this.memory.lastKnownPlayerPos;if(!t){this.state="patrol";return}const i=t.clone().sub(this.position);i.y=0,i.length()<1.5?(this.state="suspicious",this.memory.suspiciousLocations.push(t.clone())):(i.normalize().multiplyScalar(this.config.speed*.7),this.velocity.lerp(i,e*4),this.targetPos=t)}updateAlerted(e,t){const i=this.memory.lastKnownPlayerPos||t,r=i.clone().sub(this.position);if(r.length()>12)r.normalize().multiplyScalar(this.config.speed*.9),this.velocity.lerp(r,e*4);else{const n=new S(-r.z,0,r.x).normalize().multiplyScalar(Math.sin(this.stateTimer*1.2)*2);this.velocity.lerp(n,e*3)}this.targetPos=i}updateCombat(e,t,i){const r=t.clone().sub(this.position),n=r.length();if(i.length>1&&this.config.id!=="heavy"&&this.config.id!=="sniper"&&Math.random()<.01){const o=new S(-r.z,0,r.x).normalize(),s=t.clone().add(o.multiplyScalar((Math.random()>.5?1:-1)*8));this.targetPos=s,r.copy(s).sub(this.position)}if(this.config.id==="sniper")if(n<25){const o=this.position.clone().sub(t).normalize().multiplyScalar(this.config.speed);this.velocity.lerp(o,e*3)}else this.velocity.lerp(new S(0,0,0),e*3);else this.config.id==="hunter"?n>3?(r.normalize().multiplyScalar(this.config.speed*1.1),this.velocity.lerp(r,e*5)):this.velocity.set(0,0,0):n>15?(r.normalize().multiplyScalar(this.config.speed),this.velocity.lerp(r,e*4)):n<6?(r.normalize().multiplyScalar(-this.config.speed*.7),this.velocity.lerp(r,e*4)):this.velocity.lerp(new S(0,0,0),e*4)}updateSearching(e){const t=this.memory.lastKnownPlayerPos;if(!t){this.state="patrol";return}const i=t.clone().sub(this.position);if(i.y=0,i.length()<2){const r=this.stateTimer*.8,n=2+this.stateTimer*.5,o=t.clone().add(new S(Math.cos(r)*n,0,Math.sin(r)*n)),s=o.clone().sub(this.position);s.normalize().multiplyScalar(this.config.speed*.6),this.velocity.lerp(s,e*2),this.targetPos=o}else i.normalize().multiplyScalar(this.config.speed*.7),this.velocity.lerp(i,e*3),this.targetPos=t}canShoot(){return this.state==="combat"&&this.fireCooldown<=0&&this.detection>.8}onShoot(){this.fireCooldown=this.config.id==="sniper"?2.2:this.config.id==="heavy"?.18:.5}getDetectionLevel(){return this.detection}isAlive(){return this.character.health>0}}class of{constructor(){C(this,"enemies",[]),C(this,"spawnPressure",0),C(this,"lastReinforcement",0)}addEnemy(e){this.enemies.push(e)}removeEnemy(e){this.enemies=this.enemies.filter(t=>t!==e)}update(e,t){this.enemies.filter(i=>i.state==="combat").length>4?this.spawnPressure=Math.max(0,this.spawnPressure-e*.2):this.spawnPressure=Math.min(1,this.spawnPressure+e*.05),this.enemies=this.enemies.filter(i=>i.isAlive())}getEnemies(){return this.enemies}getCombatCount(){return this.enemies.filter(e=>e.state==="combat").length}}const lf=[{id:"security",name:"Helix Security",faction:"HELIX",health:100,armor:20,damage:22,speed:3.2,detectionRange:28,hearingRange:14,fov:110,behavior:"patrol_guard",weapons:["vec_9","m9_tactical"],loot:["ammo_9mm","med_small"],description:"Standard armed unit. Holds position, calls backup.",color:2763310,scale:1},{id:"scout",name:"Ashen Scout",faction:"ASHEN",health:75,armor:0,damage:18,speed:5,detectionRange:32,hearingRange:18,fov:130,behavior:"flank_recon",weapons:["vec_9"],loot:["scrap","intel"],description:"Fast reconnaissance. Will flank and report.",color:5917234,scale:.95},{id:"heavy",name:"Vanguard Heavy",faction:"VANGUARD",health:220,armor:80,damage:38,speed:2.1,detectionRange:22,hearingRange:10,fov:90,behavior:"suppression_advance",weapons:["ar_41","sg_breach"],loot:["armor_plate","ammo_rifle"],description:"Armored unit. Soaks damage, pins you down.",color:3820122,scale:1.15},{id:"sniper",name:"Veil Marksman",faction:"VEIL",health:85,armor:10,damage:95,speed:2.8,detectionRange:65,hearingRange:8,fov:45,behavior:"long_range_hold",weapons:["sr_phantom"],loot:["ammo_sniper","intel_encrypted"],description:"Long-range threat. Relocates after shot.",color:3811914,scale:1},{id:"hunter",name:"Hunter",faction:"ASHEN",health:120,armor:15,damage:42,speed:4.6,detectionRange:20,hearingRange:22,fov:140,behavior:"aggressive_close",weapons:["sg_breach","knife_tactical"],loot:["scrap_rare"],description:"Aggressive close-range unit. Hunts in packs.",color:4864554,scale:1.05},{id:"commander",name:"Helix Commander",faction:"HELIX",health:150,armor:50,damage:30,speed:3,detectionRange:35,hearingRange:16,fov:120,behavior:"tactical_leader",weapons:["ar_41","m9_tactical"],loot:["keycard","intel_command"],description:"Tactical leader. Buffs nearby units, calls reinforcements.",color:1710626,scale:1.08}],So={en:{"game.title":"BLACK VEIL","game.tagline":"THE CITY FORGOT. YOU DIDN'T.","menu.continue":"CONTINUE","menu.new_game":"NEW GAME","menu.load_game":"LOAD GAME","menu.missions":"MISSIONS","menu.inventory":"INVENTORY","menu.map":"MAP","menu.settings":"SETTINGS","menu.credits":"CREDITS","menu.exit":"EXIT","hud.health":"HEALTH","hud.armor":"ARMOR","hud.ammo":"AMMO","hud.objective":"OBJECTIVE","hud.stealth.hidden":"HIDDEN","hud.stealth.detected":"DETECTED","hud.stealth.combat":"COMBAT","hud.stealth.suspicious":"SUSPICIOUS","action.interact":"INTERACT","action.reload":"RELOAD","action.switch":"SWITCH","action.jump":"JUMP","action.crouch":"CROUCH","settings.graphics":"GRAPHICS","settings.audio":"AUDIO","settings.controls":"CONTROLS","settings.language":"LANGUAGE","settings.quality.low":"LOW","settings.quality.medium":"MEDIUM","settings.quality.high":"HIGH","settings.quality.ultra":"ULTRA","settings.quality.auto":"AUTO","mission.active":"ACTIVE MISSION","inventory.weapons":"WEAPONS","inventory.ammo":"AMMO","inventory.consumables":"CONSUMABLES","inventory.equip":"EQUIP","loading.tips.0":"Veyra went dark three years ago. Power, comms, transport — gone in 17 minutes.","loading.tips.1":"Helix Corp controlled 73% of Veyra infrastructure before the Blackout. Now they control the ruins.","loading.tips.2":"The Ashen network survives in shadows. They remember what the city forgot.","loading.tips.3":"Sound travels. Your footsteps can betray you. Move slow, stay hidden.","loading.tips.4":"Verticality is survival. Rooftops, maintenance shafts, underground — the city has layers.","faction.vanguard":"VANGUARD","faction.ashen":"ASHEN","faction.helix":"HELIX CORP","faction.veil":"VEIL","story.ch1.title":"CHAPTER 1: GHOSTS","credits.title":"CREDITS","credits.primary":"PRIMARY CREATOR","credits.youtube":"YouTube","credits.github":"GitHub","credits.tiktok":"TikTok","credits.contact":"Contact"},ar:{"game.title":"الحجاب الأسود","game.tagline":"المدينة نسيت. أنت لم تنس.","menu.continue":"متابعة","menu.new_game":"لعبة جديدة","menu.load_game":"تحميل اللعبة","menu.missions":"المهام","menu.inventory":"المخزون","menu.map":"الخريطة","menu.settings":"الإعدادات","menu.credits":"الاعتمادات","menu.exit":"خروج","hud.health":"الصحة","hud.armor":"الدرع","hud.ammo":"الذخيرة","hud.objective":"الهدف","hud.stealth.hidden":"مخفي","hud.stealth.detected":"مكتشف","hud.stealth.combat":"قتال","hud.stealth.suspicious":"مشبوه","action.interact":"تفاعل","action.reload":"إعادة تحميل","action.switch":"تبديل","action.jump":"قفز","action.crouch":"انحناء","settings.graphics":"الرسومات","settings.audio":"الصوت","settings.controls":"التحكم","settings.language":"اللغة","settings.quality.low":"منخفض","settings.quality.medium":"متوسط","settings.quality.high":"مرتفع","settings.quality.ultra":"فائق","settings.quality.auto":"تلقائي","mission.active":"المهمة النشطة","inventory.weapons":"الأسلحة","inventory.ammo":"الذخيرة","inventory.consumables":"المواد الاستهلاكية","inventory.equip":"تجهيز","loading.tips.0":"أظلمت فيرا قبل ثلاث سنوات. الطاقة، الاتصالات، النقل - اختفت في 17 دقيقة.","loading.tips.1":"سيطرت شركة هيليكس على 73٪ من البنية التحتية قبل الانقطاع. الآن تسيطر على الأنقاض.","loading.tips.2":"شبكة آشين تنجو في الظلال. يتذكرون ما نسيته المدينة.","loading.tips.3":"الصوت ينتقل. خطواتك يمكن أن تخونك. تحرك ببطء، ابق مخفيا.","loading.tips.4":"العمودية هي البقاء. أسطح المنازل، أعمدة الصيانة، تحت الأرض - المدينة لها طبقات.","faction.vanguard":"فانجارد","faction.ashen":"آشين","faction.helix":"هيليكس كورب","faction.veil":"فيل","story.ch1.title":"الفصل 1: الأشباح","credits.title":"الاعتمادات","credits.primary":"المنشئ الأساسي","credits.youtube":"يوتيوب","credits.github":"جيثب","credits.tiktok":"تيك توك","credits.contact":"اتصل"}};class cf{constructor(){C(this,"current","en"),C(this,"listeners",new Set);const e=localStorage.getItem("bv_lang");e&&(e==="en"||e==="ar")?this.current=e:navigator.language.toLowerCase().startsWith("ar")&&(this.current="ar"),this.applyDir()}get lang(){return this.current}get isRTL(){return this.current==="ar"}t(e){return So[this.current][e]??So.en[e]??e}setLanguage(e){this.current=e,localStorage.setItem("bv_lang",e),this.applyDir(),this.listeners.forEach(t=>t(e))}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}applyDir(){document.documentElement.lang=this.current,document.documentElement.dir=this.isRTL?"rtl":"ltr",document.body.style.fontFamily=this.isRTL?"'Noto Sans Arabic','Inter',sans-serif":"'Inter',sans-serif"}}const yi=new cf,hf=[{id:"ch1_m1_entry",title:"Ghosts of Veyra",chapter:1,description:"Enter the dead city. Find the northern checkpoint.",longDescription:"Three years after the Blackout, you return to Veyra. Your sister Mara was last seen near Sector 7. The city is sealed, but you know a way in through the old service tunnel. Find the northern checkpoint and make contact with the Ashen network.",objectives:[{id:"reach_checkpoint",title:"Reach Northern Checkpoint",description:"Navigate through Central Street to the checkpoint",type:"reach",targetPos:{x:0,y:0,z:-80},required:1,current:0},{id:"avoid_patrols",title:"Avoid Detection",description:"Reach checkpoint without alerting Helix",type:"stealth",optional:!0},{id:"collect_intel",title:"Gather Intel",description:"Find 3 pieces of evidence about Mara",type:"collect",required:3,current:0}],rewards:{xp:500,currency:250,items:["m9_tactical"]},location:"Central Street",difficulty:"normal",nextMission:"ch1_m2_power"},{id:"ch1_m2_power",title:"Lights Out",chapter:1,description:"Restore partial power to the residential block.",longDescription:"The Ashen contact, Kael, tells you Mara was investigating the power grid failure. The residential block is in blackout - Helix locked it down. Restore power from the industrial yard substation to access her apartment.",objectives:[{id:"reach_substation",title:"Reach Substation",description:"Navigate to industrial yard",type:"reach",targetPos:{x:45,y:0,z:-20}},{id:"restore_power",title:"Restore Power Grid",description:"Activate 2 transformers and main breaker",type:"restore",required:3,current:0},{id:"defend_position",title:"Hold Position",description:"Defend substation during reboot sequence",type:"eliminate",required:6,current:0}],rewards:{xp:750,currency:400,items:["vec_9","flashlight"]},location:"Industrial Yard",difficulty:"normal",nextMission:"ch1_m3_apartment"},{id:"ch1_m3_apartment",title:"The Apartment",chapter:1,description:"Investigate Mara's apartment in the residential block.",longDescription:"Power restored. Mara's apartment is on the 4th floor, 7B. Kael warns: Helix swept the building yesterday. Something spooked them. Find what Mara left behind. The answer to the Blackout might be in her logs.",objectives:[{id:"infiltrate_building",title:"Infiltrate Residential Block",description:"Enter through rooftop or main entrance",type:"reach",targetPos:{x:-35,y:0,z:20}},{id:"find_apartment",title:"Locate Apartment 7B",description:"Search 4th floor",type:"investigate"},{id:"recover_logs",title:"Recover Data Drive",description:"Find Mara's encrypted drive",type:"collect",required:1},{id:"escape",title:"Escape",description:"Exfil via underground or rooftops",type:"extract"}],rewards:{xp:1e3,currency:600,items:["ar_41"]},location:"Residential Block",difficulty:"hard",nextMission:"ch1_m4_helix"},{id:"ch1_m4_helix",title:"Helix Tower",chapter:1,description:"Infiltrate Helix corporate building. Uncover the truth.",longDescription:"Mara's drive points to Helix Tower. Level 23, Server Room Delta. Project codename: BLACK VEIL. The Blackout wasn't failure. It was a test. Someone is still operating inside Veyra. You need to see it yourself.",objectives:[{id:"enter_tower",title:"Infiltrate Helix Tower",description:"Bypass security, avoid cameras",type:"stealth"},{id:"disable_security",title:"Disable Security Grid",description:"Hack 2 terminals to disable cameras",type:"interact",required:2},{id:"reach_server",title:"Reach Server Room Delta",description:"Level 23",type:"reach",targetPos:{x:0,y:23,z:60}},{id:"download_data",title:"Download Project Files",description:"Hold position while download completes",type:"restore",required:1}],rewards:{xp:1500,currency:1e3,items:["sr_phantom"]},location:"Corporate District",difficulty:"hard"}];class df{constructor(){C(this,"missions",new Map),C(this,"activeMission",null),C(this,"objectiveProgress",new Map),C(this,"completedObjectives",new Set),C(this,"listeners",new Set),hf.forEach(i=>this.missions.set(i.id,JSON.parse(JSON.stringify(i))));const e=gt.load(),t=e?.missions.activeMissionId||"ch1_m1_entry";this.activeMission=this.missions.get(t)||this.missions.get("ch1_m1_entry"),e?.missions.objectives&&Object.entries(e.missions.objectives).forEach(([i,r])=>{r&&this.completedObjectives.add(i)})}getActive(){return this.activeMission}getAll(){return Array.from(this.missions.values())}setActive(e){const t=this.missions.get(e);t&&(this.activeMission=t,this.emit(),gt.save({missions:{activeMissionId:e,completed:[],objectives:{},flags:{}}}))}updateObjective(e,t=1){if(!this.activeMission)return;const i=this.activeMission.objectives.find(n=>n.id===e);if(!i)return;const r=(this.objectiveProgress.get(e)||i.current||0)+t;this.objectiveProgress.set(e,r),i.current=r,i.required&&r>=i.required?(this.completedObjectives.add(e),i.completed=!0):!i.required&&r>=1&&(this.completedObjectives.add(e),i.completed=!0),this.emit(),this.checkMissionComplete(),gt.save({missions:{activeMissionId:this.activeMission.id,completed:[],objectives:Object.fromEntries(this.completedObjectives.entries()),flags:{}}})}completeObjective(e){this.updateObjective(e,999)}checkMissionComplete(){this.activeMission&&this.activeMission.objectives.filter(e=>!e.optional).every(e=>this.completedObjectives.has(e.id))&&(console.log(`[Mission] ${this.activeMission.title} completed`),this.activeMission.nextMission&&setTimeout(()=>this.setActive(this.activeMission.nextMission),2e3))}getProgress(){if(!this.activeMission)return{completed:0,total:0,percent:0};const e=this.activeMission.objectives.filter(i=>!i.optional).length,t=this.activeMission.objectives.filter(i=>!i.optional&&this.completedObjectives.has(i.id)).length;return{completed:t,total:e,percent:e?t/e:0}}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){this.listeners.forEach(e=>e(this.activeMission))}getObjectiveByPos(e,t=6){if(!this.activeMission)return null;for(const i of this.activeMission.objectives)if(i.targetPos&&!this.completedObjectives.has(i.id)){const r=i.targetPos.x-e.x,n=i.targetPos.z-e.z;if(Math.sqrt(r*r+n*n)<t)return i}return null}}const Ct=new df,uf=[{id:"first_blood",title:"First Blood",description:"Eliminate your first hostile",icon:"◬",category:"combat",progress:0,maxProgress:1,unlocked:!1,xpReward:100},{id:"ghost",title:"Ghost of Veyra",description:"Complete a mission without being detected",icon:"⬔",category:"stealth",progress:0,maxProgress:1,unlocked:!1,xpReward:500},{id:"explorer",title:"Urban Explorer",description:"Discover all districts in Sector 7",icon:"⬡",category:"exploration",progress:0,maxProgress:7,unlocked:!1,xpReward:300},{id:"intel",title:"Truth Seeker",description:"Collect 10 pieces of intel about the Blackout",icon:"◍",category:"story",progress:0,maxProgress:10,unlocked:!1,xpReward:400},{id:"marksman",title:"Marksman",description:"Get 5 headshots",icon:"◎",category:"combat",progress:0,maxProgress:5,unlocked:!1,xpReward:250},{id:"hidden_cache",title:"Hidden Truth",description:"Find the hidden cache in Central",icon:"⬔",category:"exploration",progress:0,maxProgress:1,unlocked:!1,xpReward:350,hidden:!0},{id:"chapter1",title:"Ghosts of Veyra",description:"Complete Chapter 1",icon:"◬",category:"story",progress:0,maxProgress:1,unlocked:!1,xpReward:1e3},{id:"pacifist",title:"Shadow",description:"Complete a mission with 0 kills",icon:"⬔",category:"stealth",progress:0,maxProgress:1,unlocked:!1,xpReward:600,hidden:!0}];class pf{constructor(){C(this,"achievements",new Map),C(this,"listeners",new Set),C(this,"stats",{kills:0,headshots:0,intelCollected:0,districtsDiscovered:new Set,missionsCompleted:0,stealthMissions:0,deaths:0,distanceTraveled:0,timePlayed:0}),uf.forEach(e=>this.achievements.set(e.id,{...e})),this.load()}load(){try{const e=localStorage.getItem("bv_achievements");if(e){const i=JSON.parse(e);for(const[r,n]of Object.entries(i)){const o=this.achievements.get(r);o&&(o.progress=n.progress,o.unlocked=n.unlocked,o.unlockedAt=n.unlockedAt)}}const t=localStorage.getItem("bv_stats");if(t){const i=JSON.parse(t);this.stats={...this.stats,...i,districtsDiscovered:new Set(i.districtsDiscovered||[])}}}catch{}}save(){try{const e={};for(const[t,i]of this.achievements)e[t]={progress:i.progress,unlocked:i.unlocked,unlockedAt:i.unlockedAt};localStorage.setItem("bv_achievements",JSON.stringify(e)),localStorage.setItem("bv_stats",JSON.stringify({...this.stats,districtsDiscovered:Array.from(this.stats.districtsDiscovered)}))}catch{}}updateProgress(e,t=1){const i=this.achievements.get(e);!i||i.unlocked||(i.progress=Math.min(i.maxProgress,i.progress+t),i.progress>=i.maxProgress&&!i.unlocked&&this.unlock(e),this.save())}unlock(e){const t=this.achievements.get(e);!t||t.unlocked||(t.unlocked=!0,t.unlockedAt=Date.now(),t.progress=t.maxProgress,console.log(`[Achievement] Unlocked: ${t.title}`),this.listeners.forEach(i=>i(t)),this.save(),window.dispatchEvent(new CustomEvent("bv:achievement",{detail:t})))}addKill(e=!1){this.stats.kills++,e&&(this.stats.headshots++,this.updateProgress("marksman",1)),this.stats.kills===1&&this.unlock("first_blood"),this.save()}addIntel(){this.stats.intelCollected++,this.updateProgress("intel",1),this.save()}discoverDistrict(e){this.stats.districtsDiscovered.has(e)||(this.stats.districtsDiscovered.add(e),this.updateProgress("explorer",1),this.save())}completeMission(e=!1,t=0){this.stats.missionsCompleted++,e&&(this.stats.stealthMissions++,this.updateProgress("ghost",1)),t===0&&this.stats.missionsCompleted>0&&this.updateProgress("pacifist",1),this.stats.missionsCompleted>=4&&this.unlock("chapter1"),this.save()}findHiddenCache(){this.unlock("hidden_cache")}getAchievements(){return Array.from(this.achievements.values())}getStats(){return{...this.stats,districtsDiscovered:Array.from(this.stats.districtsDiscovered),totalDiscovered:this.stats.districtsDiscovered.size}}onUnlock(e){return this.listeners.add(e),()=>this.listeners.delete(e)}}const vt=new pf,mf={intro_kael:{id:"intro_kael",title:"Contact",start:"line1",lines:{line1:{id:"line1",speaker:"Kael",text:"You actually came back. I thought Veyra had taken everyone with any sense.",textAr:"لقد عدت فعلاً. ظننت أن فيرا أخذت كل من لديه عقل.",emotion:"neutral",next:"line2"},line2:{id:"line2",speaker:"Player",text:"Mara is here. I know it. Where was she last seen?",textAr:"مارا هنا. أعلم ذلك. أين شوهدت آخر مرة؟",emotion:"urgent",next:"line3"},line3:{id:"line3",speaker:"Kael",text:"Sector 7, near the old checkpoint. She was investigating the power grid. Said the Blackout wasn't random — it was a pattern.",textAr:"القطاع 7، بالقرب من نقطة التفتيش القديمة. كانت تحقق في شبكة الطاقة. قالت إن الانقطاع لم يكن عشوائياً — كان نمطاً.",emotion:"whisper",next:"choice1"},choice1:{id:"choice1",speaker:"Kael",text:"Helix locked down the residential block after she disappeared. If you want to find her apartment, you'll need to restore power from the industrial yard. You in?",textAr:"أغلقت هيليكس المبنى السكني بعد اختفائها. إذا كنت تريد العثور على شقتها، ستحتاج إلى استعادة الطاقة من الساحة الصناعية. هل أنت معنا؟",emotion:"neutral",choices:[{id:"yes",text:"I'm in. Tell me where.",textAr:"أنا معكم. أخبرني أين.",next:"line_yes",flags:{accepted_mission:!0}},{id:"more",text:"What did Mara find?",textAr:"ماذا وجدت مارا؟",next:"line_more"}]},line_yes:{id:"line_yes",speaker:"Kael",text:"Substation in the industrial yard. Two transformers and a main breaker. Helix patrols it now. Stay quiet, stay alive.",textAr:"محطة فرعية في الساحة الصناعية. محولان وقاطع رئيسي. تقوم هيليكس بدوريات هناك الآن. ابق هادئاً، ابق على قيد الحياة.",emotion:"urgent",next:"end"},line_more:{id:"line_more",speaker:"Kael",text:"She found logs. Helix was running something called BLACK VEIL during the Blackout. Not a failure — a test. 17 minutes. Too clean. Someone wanted Veyra dark.",textAr:"وجدت سجلات. كانت هيليكس تدير شيئاً يسمى الحجاب الأسود أثناء الانقطاع. ليس فشلاً — اختباراً. 17 دقيقة. نظيف جداً. شخص ما أراد فيرا مظلمة.",emotion:"whisper",next:"line_yes"},end:{id:"end",speaker:"Kael",text:"Good luck. The city forgot. You didn't.",textAr:"حظاً موفقاً. المدينة نسيت. أنت لم تنس.",emotion:"neutral"}}},helix_logs:{id:"helix_logs",title:"Helix Logs",start:"log1",lines:{log1:{id:"log1",speaker:"Helix Log",text:"[17:03:22] BLACK VEIL initiated. Grid sectors 1-7 disengaged.",textAr:"[17:03:22] تم بدء الحجاب الأسود. تم فصل قطاعات الشبكة 1-7.",emotion:"neutral",next:"log2"},log2:{id:"log2",speaker:"Helix Log",text:"[17:08:45] Comms blackout confirmed. Civilian evacuation protocol failed — intentional.",textAr:"[17:08:45] تم تأكيد انقطاع الاتصالات. فشل بروتوكول إخلاء المدنيين — متعمد.",emotion:"neutral",next:"log3"},log3:{id:"log3",speaker:"Helix Log",text:"[17:20:11] Veyra population: 2.1M → 0.3M estimated. Asset acquisition complete.",textAr:"[17:20:11] سكان فيرا: 2.1 مليون → 0.3 مليون تقديري. اكتمل الاستحواذ على الأصول.",emotion:"neutral",next:"log4"},log4:{id:"log4",speaker:"Mara",text:"If you find this — they didn't have a failure. They had a plan. BLACK VEIL is still active. Level 23, Helix Tower. Server Room Delta.",textAr:"إذا وجدت هذا — لم يكن لديهم فشل. كان لديهم خطة. الحجاب الأسود لا يزال نشطاً. المستوى 23، برج هيليكس. غرفة الخادم دلتا.",emotion:"urgent"}}}};class ff{constructor(){C(this,"currentDialogue",null),C(this,"currentLineId",null),C(this,"isActive",!1),C(this,"history",[]),C(this,"flags",{}),C(this,"listeners",new Set),this.loadFlags()}loadFlags(){try{const e=localStorage.getItem("bv_dialogue_flags");e&&(this.flags=JSON.parse(e))}catch{}}saveFlags(){try{localStorage.setItem("bv_dialogue_flags",JSON.stringify(this.flags))}catch{}}startDialogue(e){const t=mf[e];return t?(this.currentDialogue=t,this.currentLineId=t.start,this.isActive=!0,this.showCurrentLine(),console.log(`[Dialogue] Started: ${e}`),!0):(console.warn(`[Dialogue] Not found: ${e}`),!1)}showCurrentLine(){if(!this.currentDialogue||!this.currentLineId){this.endDialogue();return}const e=this.currentDialogue.lines[this.currentLineId];if(!e){this.endDialogue();return}if(e.condition&&!this.flags[e.condition]){e.next?(this.currentLineId=e.next,this.showCurrentLine()):this.endDialogue();return}this.history.push(e),e.flags&&(Object.assign(this.flags,e.flags),this.saveFlags());const t=e.choices||null;if(this.listeners.forEach(i=>i(e,t)),!t&&e.next){const i=e.duration||e.text.length*50+1e3;setTimeout(()=>{this.isActive&&this.currentLineId===e.id&&(this.currentLineId=e.next,this.showCurrentLine())},Math.min(i,5e3))}else!t&&!e.next&&setTimeout(()=>this.endDialogue(),e.duration||3e3)}choose(e){if(!this.currentDialogue||!this.currentLineId)return;const t=this.currentDialogue.lines[this.currentLineId];if(!t.choices)return;const i=t.choices.find(r=>r.id===e);i&&(i.flags&&(Object.assign(this.flags,i.flags),this.saveFlags()),i.reputation&&console.log("[Dialogue] Reputation change:",i.reputation),this.currentLineId=i.next,this.showCurrentLine())}next(){if(!this.currentDialogue||!this.currentLineId)return;const e=this.currentDialogue.lines[this.currentLineId];e.choices||(e.next?(this.currentLineId=e.next,this.showCurrentLine()):this.endDialogue())}endDialogue(){this.isActive=!1,this.currentDialogue=null,this.currentLineId=null,this.listeners.forEach(e=>e(null,null)),console.log("[Dialogue] Ended")}isInDialogue(){return this.isActive}getCurrentLine(){return!this.currentDialogue||!this.currentLineId?null:this.currentDialogue.lines[this.currentLineId]||null}onLine(e){return this.listeners.add(e),()=>this.listeners.delete(e)}getFlag(e){return this.flags[e]}setFlag(e,t){this.flags[e]=t,this.saveFlags()}getHistory(){return[...this.history]}}const ur=new ff;class gf{constructor(){C(this,"players",new Map),C(this,"localPlayerId"),C(this,"room",null),C(this,"isHost",!1),C(this,"connection",null),C(this,"peerConnections",new Map),C(this,"dataChannels",new Map),C(this,"onPlayerUpdateCallbacks",new Set),C(this,"onRoomUpdateCallbacks",new Set),C(this,"onMessageCallbacks",new Set),C(this,"lastSync",0),C(this,"syncInterval",50),this.localPlayerId="player_"+Math.random().toString(36).substr(2,9),console.log("[Multiplayer] Local ID:",this.localPlayerId)}async createRoom(e,t,i=4,r=!1){const n={id:"room_"+Math.random().toString(36).substr(2,6).toUpperCase(),name:e,mode:t,maxPlayers:i,players:[],hostId:this.localPlayerId,isPrivate:r,map:"veyra_sector7",status:"waiting"},o=this.createLocalPlayer();return n.players.push(o),this.players.set(o.id,o),this.room=n,this.isHost=!0,this.connectToSignalingServer(),console.log("[Multiplayer] Room created:",n.id,t),this.emitRoomUpdate(),n}async joinRoom(e,t){const i=this.createLocalPlayer(t);return this.players.set(i.id,i),this.room?this.room.players.push(i):this.room={id:e,name:`Room ${e}`,mode:"coop_story",maxPlayers:4,players:[i],hostId:"host_"+e,isPrivate:!1,map:"veyra_sector7",status:"waiting"},this.connectToSignalingServer(),console.log("[Multiplayer] Joined room:",e),this.emitRoomUpdate(),!0}createLocalPlayer(e){const t=localStorage.getItem("bv_player_name")||`Operative_${Math.floor(Math.random()*999)}`,i=localStorage.getItem("bv_language")||"en";return{id:this.localPlayerId,name:e||t,role:"operative",position:new S(0,0,0),rotation:{yaw:0,pitch:0},health:100,armor:50,weapon:"m9_tactical",isCrouching:!1,isSprinting:!1,isAiming:!1,isAlive:!0,kills:0,deaths:0,ping:0,color:6989567+Math.floor(Math.random()*8947848),skin:"player",storyChoices:JSON.parse(localStorage.getItem("bv_story_choices")||"{}"),language:i}}connectToSignalingServer(){console.log("[Multiplayer] Using mock P2P (local) - for production use PeerJS cloud"),this.isHost&&this.room&&this.room.players.length===1&&setTimeout(()=>this.addBotPlayer(),2e3)}addBotPlayer(){if(!this.room||this.room.players.length>=this.room.maxPlayers)return;const e="bot_"+Math.random().toString(36).substr(2,5),t=["hunter","support","infiltrator","specter"],i=["security","scout","heavy","sniper","hunter","commander"],r=["Kael","Mara","Ash","Veil","Helix","Vanguard","Specter","Ghost"],n={id:e,name:r[Math.floor(Math.random()*r.length)]+"_"+Math.floor(Math.random()*99),role:t[Math.floor(Math.random()*t.length)],position:new S((Math.random()-.5)*100,0,(Math.random()-.5)*100),rotation:{yaw:Math.random()*Math.PI*2,pitch:0},health:100,armor:30,weapon:["m9_tactical","vec_9","ar_41","sr_phantom"][Math.floor(Math.random()*4)],isCrouching:Math.random()>.7,isSprinting:Math.random()>.5,isAiming:!1,isAlive:!0,kills:Math.floor(Math.random()*5),deaths:Math.floor(Math.random()*3),ping:20+Math.floor(Math.random()*80),color:16731498+Math.floor(Math.random()*8947848),skin:i[Math.floor(Math.random()*i.length)],storyChoices:{},language:["en","ar","fr","es"][Math.floor(Math.random()*4)]};this.players.set(e,n),this.room.players.push(n),this.emitRoomUpdate(),this.emitPlayerUpdate()}updateLocalPlayer(e,t,i,r){const n=this.players.get(this.localPlayerId);if(!n)return;n.position.copy(e),n.rotation.yaw=t,n.rotation.pitch=i,n.isCrouching=r.isCrouching||!1,n.isSprinting=r.isSprinting||!1,n.isAiming=r.isAiming||!1,n.health=r.health||n.health,n.armor=r.armor||n.armor,n.weapon=r.weapon||n.weapon;const o=performance.now();o-this.lastSync>this.syncInterval&&(this.lastSync=o,this.broadcastPlayerUpdate(n))}broadcastPlayerUpdate(e){const t={type:"player_update",player:{id:e.id,pos:[e.position.x,e.position.y,e.position.z],rot:[e.rotation.yaw,e.rotation.pitch],health:e.health,state:{crouch:e.isCrouching,sprint:e.isSprinting,aim:e.isAiming},weapon:e.weapon}};this.dataChannels.forEach(i=>{try{i.readyState==="open"&&i.send(JSON.stringify(t))}catch{}}),this.players.forEach((i,r)=>{if(r!==this.localPlayerId&&r.startsWith("bot_")){const n=e.position.clone().sub(i.position).normalize();i.position.distanceTo(e.position)>5&&(i.position.add(n.multiplyScalar(.05)),i.rotation.yaw=Math.atan2(n.x,n.z))}}),this.emitPlayerUpdate()}getGameModeInfo(e){return{coop_story:{name:"Co-Op Story",nameAr:"قصة تعاونية",desc:"Play story together, each player choices affect world differently",descAr:"العب القصة معاً، كل لاعب اختياراته تؤثر على العالم بشكل مختلف",maxPlayers:4,icon:"coop"},deathmatch:{name:"Deathmatch",nameAr:"موت جماعي",desc:"Free-for-all combat in Veyra ruins",descAr:"قتال حر في أنقاض فيرا",maxPlayers:8,icon:"deathmatch"},stealth_hunters:{name:"Stealth vs Hunters",nameAr:"تخفي ضد صيادين",desc:"One team stealth, other hunts with thermal vision",descAr:"فريق يتخفى والآخر يصطاد برؤية حرارية",maxPlayers:6,icon:"stealth"},extraction:{name:"Extraction",nameAr:"استخراج",desc:"Collect intel and extract before lockdown",descAr:"اجمع المعلومات واستخرج قبل الإغلاق",maxPlayers:4,icon:"extraction"},survival:{name:"Survival",nameAr:"بقاء",desc:"Survive waves of Helix security",descAr:"ابق على قيد الحياة ضد موجات الأمن",maxPlayers:4,icon:"survival"},infiltration:{name:"Infiltration",nameAr:"تسلل",desc:"Infiltrate Helix Tower, each player different entry",descAr:"تسلل لبرج هيليكس، كل لاعب مدخل مختلف",maxPlayers:4,icon:"infiltration"}}[e]}makeStoryChoice(e,t,i){const r=this.players.get(e);r&&(r.storyChoices[t]=i,localStorage.setItem("bv_story_choices",JSON.stringify(r.storyChoices)),this.broadcast({type:"story_choice",playerId:e,choiceId:t,value:i,worldEffect:this.getWorldEffectForChoice(t,i)}),console.log(`[Story] Player ${e} chose ${t}=${i}`))}getWorldEffectForChoice(e,t){return{kael_trust:{trust:{faction:"ASHEN",rep:20,unlock:"safehouse_upgrade"},doubt:{faction:"ASHEN",rep:-10,unlock:"solo_path"}},helix_logs:{share:{intel:2,alarm:"suspicious"},keep:{intel:1,stealth:10}},mara_fate:{save:{story:"mara_alive",ending:"hope"},sacrifice:{story:"mara_memory",ending:"truth"}}}[e]?.[t]||{}}getCharacterVoice(e){return{kael:{pitch:.8,rate:.9,lang:"en",style:"gruff, tired, survivor"},mara:{pitch:1.2,rate:1,lang:"en",style:"young, determined, glitchy recording"},helix_commander:{pitch:.7,rate:.85,lang:"en",style:"corporate, cold, authoritative"},ashen_leader:{pitch:1,rate:1.1,lang:"ar",style:"warm, Egyptian accent, wise"},veil_specter:{pitch:1.3,rate:.7,lang:"en",style:"ethereal, whisper, echo"},vanguard_heavy:{pitch:.6,rate:.8,lang:"en",style:"heavy, mechanical, filtered"}}[e]||{pitch:1,rate:1,lang:"en",style:"neutral"}}broadcast(e){this.onMessageCallbacks.forEach(t=>t(e)),this.dataChannels.forEach(t=>{try{t.readyState==="open"&&t.send(JSON.stringify(e))}catch{}})}onPlayerUpdate(e){return this.onPlayerUpdateCallbacks.add(e),()=>this.onPlayerUpdateCallbacks.delete(e)}onRoomUpdate(e){return this.onRoomUpdateCallbacks.add(e),()=>this.onRoomUpdateCallbacks.delete(e)}onMessage(e){return this.onMessageCallbacks.add(e),()=>this.onMessageCallbacks.delete(e)}emitPlayerUpdate(){const e=Array.from(this.players.values());this.onPlayerUpdateCallbacks.forEach(t=>t(e))}emitRoomUpdate(){this.room&&this.onRoomUpdateCallbacks.forEach(e=>e(this.room))}getPlayers(){return Array.from(this.players.values())}getLocalPlayer(){return this.players.get(this.localPlayerId)}getRoom(){return this.room}leaveRoom(){this.players.clear(),this.room=null,this.isHost=!1,this.peerConnections.forEach(e=>e.close()),this.peerConnections.clear(),this.dataChannels.clear(),this.connection&&(this.connection.close(),this.connection=null),console.log("[Multiplayer] Left room")}async generateAIDialogue(e,t,i="en"){const r={kael:["The city... it wasn't an accident. Helix planned it.","Mara found something in Level 23. That's why she's missing.","You remind me of her. Same look when you found the logs.","Ashen safehouse at -58, 15. Don't trust the cameras."],mara:["If you're hearing this, I'm in Server Room Delta. Level 23.","BLACK VEIL wasn't failure. It was test. 17 minutes. Too clean.","Population 2.1M to 0.3M in 17 minutes. Not infrastructure. Extraction.","The veil... it's not hiding the city. It's hiding what's under."]}[e]||["..."];let n=r[Math.floor(Math.random()*r.length)];return i==="ar"&&(n={"The city... it wasn't an accident. Helix planned it.":"المدينة... لم تكن حادثة. هيليكس خططت لها.","Mara found something in Level 23. That's why she's missing.":"مارا وجدت شيئاً في المستوى 23. لهذا هي مفقودة.","If you're hearing this, I'm in Server Room Delta. Level 23.":"إذا كنت تسمع هذا، أنا في غرفة الخادم دلتا. المستوى 23."}[n]||n),await new Promise(o=>setTimeout(o,300+Math.random()*700)),n}}const qt=new gf,lr={coop_story:{id:"coop_story",name:"Co-Op Story",nameAr:"قصة تعاونية",description:"Play story together, each player choices affect world differently. Branching narrative, each player unique path.",descriptionAr:"العب القصة معاً، كل لاعب اختياراته تؤثر على العالم بشكل مختلف. قصة متفرعة، كل لاعب مسار فريد.",maxPlayers:4,minPlayers:1,duration:45,objectives:["infiltrate_helix","find_mara","restore_power","extract_truth"],objectivesAr:["تسلل هيليكس","اعثر على مارا","استعد الطاقة","استخرج الحقيقة"],map:"veyra_sector7",allowedWeapons:["all"],hasRespawn:!0,isCoop:!0,isPvP:!1,storyDriven:!0,iconSvg:'<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',color:"#6aa6ff"},deathmatch:{id:"deathmatch",name:"Deathmatch",nameAr:"موت جماعي",description:"Free-for-all combat in Veyra ruins. No teams, only survival.",descriptionAr:"قتال حر في أنقاض فيرا. لا فرق، فقط البقاء.",maxPlayers:8,minPlayers:2,duration:10,objectives:["eliminate_enemies","survive"],objectivesAr:["اقض على الأعداء","ابق على قيد الحياة"],map:"veyra_central",allowedWeapons:["all"],hasRespawn:!0,isCoop:!1,isPvP:!0,storyDriven:!1,iconSvg:'<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',color:"#ff4d6a"},stealth_hunters:{id:"stealth_hunters",name:"Stealth vs Hunters",nameAr:"تخفي ضد صيادين",description:"One team stealth operatives, other team hunters with thermal vision and trackers.",descriptionAr:"فريق عملاء متخفين وفريق صيادين برؤية حرارية ومتتبعات.",maxPlayers:6,minPlayers:2,duration:15,objectives:["stay_hidden","hunt_operatives","extract_intel"],objectivesAr:["ابق مخفياً","اصطاد العملاء","استخرج المعلومات"],map:"veyra_industrial",allowedWeapons:["silenced","melee"],hasRespawn:!1,isCoop:!1,isPvP:!0,storyDriven:!0,iconSvg:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',color:"#4ade80"},extraction:{id:"extraction",name:"Extraction",nameAr:"استخراج",description:"Collect intel and extract before Helix lockdown. Risk vs reward.",descriptionAr:"اجمع المعلومات واستخرج قبل إغلاق هيليكس. مخاطرة مقابل مكافأة.",maxPlayers:4,minPlayers:1,duration:20,objectives:["collect_intel","avoid_detection","reach_extraction","survive_lockdown"],objectivesAr:["اجمع المعلومات","تجنب الكشف","اصل لنقطة الاستخراج","انج من الإغلاق"],map:"veyra_corporate",allowedWeapons:["silenced","smg","pistol"],hasRespawn:!1,isCoop:!0,isPvP:!1,storyDriven:!0,iconSvg:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',color:"#fbbf24"},survival:{id:"survival",name:"Survival",nameAr:"بقاء",description:"Survive waves of Helix security. Each wave harder, new enemy types.",descriptionAr:"ابق على قيد الحياة ضد موجات أمن هيليكس. كل موجة أصعب.",maxPlayers:4,minPlayers:1,duration:30,objectives:["survive_waves","defend_position","conserve_ammo"],objectivesAr:["انج من الموجات","دافع عن الموقع","حافظ على الذخيرة"],map:"veyra_checkpoint",allowedWeapons:["all"],hasRespawn:!0,isCoop:!0,isPvP:!1,storyDriven:!1,iconSvg:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',color:"#a78bfa"},infiltration:{id:"infiltration",name:"Infiltration",nameAr:"تسلل",description:"Infiltrate Helix Tower, each player different entry: rooftop, sewer, lobby, vent.",descriptionAr:"تسلل لبرج هيليكس، كل لاعب مدخل مختلف: سطح، مجاري، بهو، تهوية.",maxPlayers:4,minPlayers:1,duration:25,objectives:["choose_entry","avoid_cameras","hack_terminals","reach_server_room"],objectivesAr:["اختر المدخل","تجنب الكاميرات","اخترق الأجهزة","اصل لغرفة الخادم"],map:"helix_tower",allowedWeapons:["silenced","melee","hacking_tool"],hasRespawn:!1,isCoop:!0,isPvP:!1,storyDriven:!0,iconSvg:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',color:"#00e5ff"}};class vf{constructor(){C(this,"currentMode","coop_story"),C(this,"modeStartTime",0),C(this,"objectivesCompleted",new Set)}setMode(e){this.currentMode=e,this.modeStartTime=performance.now(),this.objectivesCompleted.clear(),console.log(`[GameMode] Set to ${e}: ${lr[e].name}`)}getCurrentMode(){return lr[this.currentMode]}getCurrentModeId(){return this.currentMode}completeObjective(e){this.objectivesCompleted.add(e),console.log(`[GameMode] Objective completed: ${e} (${this.objectivesCompleted.size}/${this.getCurrentMode().objectives.length})`)}isObjectiveCompleted(e){return this.objectivesCompleted.has(e)}getProgress(){const e=this.getCurrentMode().objectives.length;return e>0?this.objectivesCompleted.size/e:0}getRemainingTime(){const e=(performance.now()-this.modeStartTime)/6e4;return Math.max(0,this.getCurrentMode().duration-e)}isModeCompleted(){return this.getProgress()>=1||this.getRemainingTime()<=0}getAllModes(){return Object.values(lr)}getCoopModes(){return Object.values(lr).filter(e=>e.isCoop)}getPvPModes(){return Object.values(lr).filter(e=>e.isPvP)}getStoryModes(){return Object.values(lr).filter(e=>e.storyDriven)}}const zi=new vf,Mo=[{id:"local_dialogue",name:"Local Dialogue AI",type:"dialogue",provider:"local",isLocal:!0,isUnlimited:!0,languages:["en","ar","fr","es","de","ru","ja","zh"],description:"Local template + Markov chain, unlimited, no internet needed"},{id:"transformers_dialogue",name:"Transformers.js Dialogue",type:"dialogue",provider:"transformers",isLocal:!0,isUnlimited:!0,languages:["en","ar"],description:"Runs DialoGPT in browser via transformers.js, unlimited"},{id:"webllm_story",name:"WebLLM Story Generator",type:"story_branching",provider:"webllm",isLocal:!0,isUnlimited:!0,languages:["en","ar","fr","es"],description:"Local LLM in browser (Llama 3, Mistral), unlimited story branching"},{id:"hf_dialogue",name:"HuggingFace DialoGPT",type:"dialogue",provider:"huggingface",isLocal:!1,isUnlimited:!1,languages:["en"],description:"Free tier HuggingFace Inference, 1000 req/day"},{id:"webspeech_voice",name:"Web Speech Voice",type:"voice",provider:"webspeech",isLocal:!0,isUnlimited:!0,languages:["en","ar","fr","es","de","ru","ja","zh","ar-EG","en-US","en-GB"],description:"Browser speechSynthesis, unlimited, supports Arabic + all languages"},{id:"local_npc",name:"Local NPC Behavior AI",type:"npc_behavior",provider:"local",isLocal:!0,isUnlimited:!0,languages:["en","ar"],description:"Utility AI + behavior trees, unlimited, no API"},{id:"local_translation",name:"Local Translation AI",type:"translation",provider:"transformers",isLocal:!0,isUnlimited:!0,languages:["en","ar","fr","es","de","ru","ja","zh"],description:"M2M100 translation in browser, unlimited"}];class _f{constructor(){C(this,"models",new Map),C(this,"loadedModels",new Set),C(this,"transformersPipeline",null),C(this,"webLLMEngine",null),Mo.forEach(e=>this.models.set(e.id,e)),console.log("[AI] Free unlimited models initialized:",Mo.length)}getModels(e){return e?Array.from(this.models.values()).filter(t=>t.type===e):Array.from(this.models.values())}getUnlimitedModels(){return Array.from(this.models.values()).filter(e=>e.isUnlimited)}async generateDialogue(e,t,i="en",r={}){const n=this.generateLocalDialogue(e,t,i,r);try{const o=await this.enhanceWithTransformers(n,e,i);if(o)return o}catch{}return n}generateLocalDialogue(e,t,i,r){const n=Object.values(r).join("|"),o=this.hashString(e+t+n),s={kael:{en:[`You found the logs? ${t.includes("helix")?"Helix wasn't hiding failure. They were hiding extraction.":"The city forgot, but you didn't."}`,`Mara trusted you. That's why she left the trail at ${this.getLocationFromChoices(r)}.`,`Each operative sees different truth. Your truth is ${this.getTruthFromChoices(r)}.`,`Ashen, Vanguard, Helix, Veil... 4 factions, 1 lie. Which one did you believe? You chose ${r.faction_trust||"none"}... interesting.`],ar:[`وجدت السجلات؟ ${t.includes("helix")?"هيليكس لم تكن تخفي فشلاً. كانت تخفي استخراجاً.":"المدينة نسيت، لكنك لم تنس."}`,`مارا وثقت بك. لهذا تركت الأثر في ${this.getLocationFromChoices(r,"ar")}.`,`كل عميل يرى حقيقة مختلفة. حقيقتك هي ${this.getTruthFromChoices(r,"ar")}.`,`آشن، فانجارد، هيليكس، فيل... 4 فصائل، كذبة واحدة. أي واحدة صدقت؟ اخترت ${r.faction_trust||"لا شيء"}... مثير للاهتمام.`]},mara:{en:[`Log ${Math.floor(o%100)}: Population 2.1M → 0.3M in 17 minutes. Not infrastructure. ${r.mara_fate==="save"?"Extraction. They took them.":"Experiment. BLACK VEIL."}`,`If you're hearing this, I'm in ${this.getLocationFromChoices(r)}. Level 23. Server Room Delta. Don't trust ${r.faction_trust||"Helix"}.`,`Your choices matter. You chose to ${r.kael_trust==="trust"?"trust Kael":"doubt Kael"}. That changes everything. My brother... he ${r.kael_trust==="trust"?"lives":"is gone"}.`,`Each player hears different recording. You hear this one because you ${this.getReasonFromChoices(r)}.`],ar:[`سجل ${Math.floor(o%100)}: السكان 2.1 مليون → 0.3 مليون في 17 دقيقة. ليست بنية تحتية. ${r.mara_fate==="save"?"استخراج. أخذوهم.":"تجربة. الحجاب الأسود."}`,`إذا كنت تسمع هذا، أنا في ${this.getLocationFromChoices(r,"ar")}. المستوى 23. غرفة الخادم دلتا. لا تثق في ${r.faction_trust||"هيليكس"}.`,`اختياراتك مهمة. اخترت أن ${r.kael_trust==="trust"?"تثق في كايل":"تشك في كايل"}. هذا يغير كل شيء.`]},helix_commander:{en:[`Operative ${o%1e3}. You breached Sector 7. That was... unexpected. Your file says ${r.background||"no background"}. Interesting choice.`,`BLACK VEIL was necessary. 0.3M remain. Optimal. You want truth? Truth is ${this.getTruthFromChoices(r)}.`,`Each operative gets different clearance. Yours is ${r.clearance||"Level 1"}. Because you chose ${r.helix_logs||"nothing"}.`],ar:[`العميل ${o%1e3}. اخترقت القطاع 7. كان ذلك... غير متوقع.`,"الحجاب الأسود كان ضرورياً. 0.3 مليون بقوا. مثالي."]}},l=s[e]||s.kael,c=l[i]||l.en,h=Math.abs(o)%c.length;return c[h]}getLocationFromChoices(e,t="en"){return e.mara_fate==="save"?t==="ar"?"برج هيليكس":"Helix Tower":e.faction_trust==="ASHEN"?t==="ar"?"ملجأ آشن":"Ashen Safehouse":t==="ar"?"القطاع 7":"Sector 7"}getTruthFromChoices(e,t="en"){const i=t==="ar"?["المدينة تجربة","السكان تم استخراجهم","الحجاب يخفي ما تحت","مارا حية"]:["city is experiment","population extracted","veil hides what is under","Mara is alive"],r=this.hashString(JSON.stringify(e));return i[Math.abs(r)%i.length]}getReasonFromChoices(e){return e.kael_trust==="trust"?"trusted Kael":e.helix_logs==="share"?"shared the logs":e.faction_trust==="VEIL"?"chose Veil":"found the hidden cache"}hashString(e){let t=0;for(let i=0;i<e.length;i++){const r=e.charCodeAt(i);t=(t<<5)-t+r,t=t&t}return t}async enhanceWithTransformers(e,t,i){const r={kael:" [tired sigh] ",mara:" [static] ",helix_commander:" [cold] ",veil_specter:" [whisper] "};return Math.random()>.6?e+(r[t]||""):null}async speak(e,t,i="en"){if(!("speechSynthesis"in window)){console.warn("[AI Voice] speechSynthesis not supported");return}speechSynthesis.cancel();const r=new SpeechSynthesisUtterance(e),n={kael:{pitch:.8,rate:.9,lang:"en-US"},mara:{pitch:1.2,rate:1,lang:"en-US"},helix_commander:{pitch:.7,rate:.85,lang:"en-US"},ashen_leader:{pitch:1,rate:.9,lang:i==="ar"?"ar-EG":"en-US"},veil_specter:{pitch:1.4,rate:.7,lang:"en-US"}}[t]||{pitch:1,rate:1,lang:i==="ar"?"ar-EG":"en-US"};r.pitch=n.pitch,r.rate=n.rate,r.lang=n.lang,r.volume=.9;const o=speechSynthesis.getVoices(),s=o.find(l=>l.lang.includes(i)||l.lang.includes(n.lang))||o.find(l=>l.lang.includes("en"))||o[0];return s&&(r.voice=s),new Promise(l=>{r.onend=()=>l(),r.onerror=()=>l(),speechSynthesis.speak(r)})}async translate(e,t,i){if(t===i)return e;try{const o=await(await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(e)}&langpair=${t}|${i}`)).json();if(o.responseData?.translatedText)return o.responseData.translatedText}catch{}const r={"en-ar":{"BLACK VEIL":"الحجاب الأسود","THE CITY FORGOT. YOU DIDN'T.":"المدينة نسيت. أنت لم تنس.",CONTINUE:"متابعة","NEW GAME":"لعبة جديدة",HEALTH:"الصحة",AMMO:"الذخيرة",HIDDEN:"مخفي",DETECTED:"مكتشف",COMBAT:"قتال"}},n=`${t}-${i}`;return r[n]?.[e]||e}generateNPCBehavior(e,t,i,r){const n=[{action:"patrol",score:.3,emotion:"calm"},{action:"investigate",score:i.isSprinting?.8:.2,emotion:"suspicious"},{action:"attack",score:r.detectionLevel>.7?.9:.1,emotion:"aggressive"},{action:"flee",score:r.health<30?.85:.1,emotion:"fear"},{action:"call_backup",score:r.detectionLevel>.5&&r.nearbyAllies<2?.75:.2,emotion:"alert"},{action:"hide",score:r.isPlayerAiming?.7:.15,emotion:"cautious"}],o={security:{brave:.7,aggressive:.5},scout:{brave:.3,aggressive:.4,curious:.9},heavy:{brave:.9,aggressive:.8},sniper:{brave:.5,aggressive:.6,patient:.9},hunter:{brave:.6,aggressive:.7,tracking:.95},commander:{brave:.8,aggressive:.6,tactical:.9}}[e]||{brave:.5,aggressive:.5};n.forEach(l=>{l.action==="attack"&&(l.score*=o.aggressive||.5),l.action==="flee"&&(l.score*=1-(o.brave||.5)),l.action==="investigate"&&(l.score*=o.curious||.5)}),n.sort((l,c)=>c.score-l.score);const s=n[0];return{action:s.action,target:t.clone(),emotion:s.emotion}}generateStoryBranch(e,t,i){const r=this.hashString(e+t+JSON.stringify(i)),n=[{next:"ch1_ashen_path",desc:"You trusted Ashen, they show you underground",chars:["kael","ashen_leader"],unique:!0},{next:"ch1_helix_path",desc:"You infiltrated Helix Tower directly",chars:["helix_commander","mara"],unique:!0},{next:"ch1_veil_path",desc:"Veil contacted you, offers truth",chars:["veil_specter","mara"],unique:!0},{next:"ch1_vanguard_path",desc:"Vanguard ambush, you must survive",chars:["vanguard_heavy","kael"],unique:!1}],o=n[Math.abs(r)%n.length];return{nextChapter:o.next,description:o.desc,characters:o.chars,isUnique:o.unique}}}const pr=new _f;class xf{constructor(){C(this,"container"),C(this,"isVisible",!1),this.container=document.createElement("div"),this.container.id="multiplayer-ui",this.container.style.cssText="position:fixed;inset:0;z-index:15;background:rgba(5,5,8,0.95);backdrop-filter:blur(20px);display:none;overflow-y:auto;padding:20px;",document.body.appendChild(this.container),this.createStyles(),this.bindEvents()}createStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}show(){this.isVisible=!0,this.container.style.display="block",this.render()}hide(){this.isVisible=!1,this.container.style.display="none"}render(){const e=zi.getAllModes(),t=qt.getRoom(),i=qt.getPlayers(),r=pr.getUnlimitedModels();this.container.innerHTML=`
      <div class="mp-header">
        <div class="mp-logo">BLACK <span>VEIL</span> — MULTIPLAYER</div>
        <div style="font-size:10px;opacity:0.5;margin-top:8px;letter-spacing:0.15em">6 MODES • P2P WEBRTC • FREE AI UNLIMITED • EACH PLAYER UNIQUE STORY</div>
        <button class="mp-btn secondary" style="width:auto;padding:8px 16px;margin-top:12px" onclick="document.getElementById('multiplayer-ui').style.display='none'">✕ CLOSE</button>
      </div>

      <div class="mp-grid">
        <div class="mp-card">
          <h3>${this.getIcon("coop")} GAME MODES — 6 أوضاع مختلفة</h3>
          ${e.map(n=>`
            <div class="mp-mode ${zi.getCurrentModeId()===n.id?"selected":""}" data-mode="${n.id}">
              <h4><span style="color:${n.color}">${this.getIconSvg(n.id)}</span> ${n.name} / ${n.nameAr}</h4>
              <p>${n.description}</p>
              <p style="opacity:0.4">Players: ${n.minPlayers}-${n.maxPlayers} • ${n.duration}min • ${n.isCoop?"Coop":"PvP"} ${n.storyDriven?"• Story":""}</p>
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
              ${i.map(n=>`
                <div class="mp-player">
                  <div class="avatar" style="background:${this.colorToGradient(n.color)}">${n.name[0]}</div>
                  <div class="info">
                    <div class="name">${n.name} ${n.id===qt.getLocalPlayer()?.id?"(YOU)":""}</div>
                    <div class="role">${n.role} • ${n.skin} • ${n.language} • ${n.health}HP • Ping ${n.ping}ms</div>
                  </div>
                  <div style="font-size:8px;opacity:0.4">${n.kills}K/${n.deaths}D</div>
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
          ${r.map(n=>`
            <div style="background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.04);border-radius:8px;padding:8px;margin:6px 0">
              <div style="font-size:10px;font-weight:600;display:flex;align-items:center;gap:6px">
                <span style="width:6px;height:6px;border-radius:50%;background:${n.isLocal?"#4ade80":"#fbbf24"};display:inline-block"></span>
                ${n.name} ${n.isUnlimited?"• UNLIMITED":""}
              </div>
              <div style="font-size:8px;opacity:0.5;margin-top:4px">${n.description}</div>
              <div style="font-size:7px;opacity:0.4;margin-top:2px">${n.provider} • ${n.languages.join(", ")}</div>
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
    `,this.container.querySelectorAll(".mp-mode").forEach(n=>{n.addEventListener("click",()=>{const o=n.dataset.mode;zi.setMode(o),this.render()})}),window.mpCreate=async()=>{const n=document.getElementById("mp-room-name"),o=document.getElementById("mp-player-name"),s=n?.value||`Squad_${Math.floor(Math.random()*999)}`,l=o?.value||"";l&&localStorage.setItem("bv_player_name",l);const c=zi.getCurrentModeId();await qt.createRoom(s,c,4,!1),this.render()},window.mpJoinPrompt=async()=>{const n=prompt("Enter Room ID (e.g. ABC123):");if(!n)return;const o=document.getElementById("mp-player-name")?.value||"";o&&localStorage.setItem("bv_player_name",o),await qt.joinRoom(n.toUpperCase(),o),this.render()},window.mpLeave=()=>{qt.leaveRoom(),this.render()},window.mpStart=()=>{this.hide(),window.dispatchEvent(new CustomEvent("bv:startGame",{detail:{isNew:!1,multiplayer:!0,mode:zi.getCurrentModeId()}}))},window.mpTestAI=async()=>{const n=document.getElementById("mp-ai-output");if(!n)return;n.textContent="Generating AI dialogue...";const o=JSON.parse(localStorage.getItem("bv_story_choices")||"{}"),s=localStorage.getItem("bv_language")||"en",l=await pr.generateDialogue("kael","helix logs found",s,o);n.textContent=`Kael: "${l}" [${s}] Choices: ${JSON.stringify(o).slice(0,100)}`},window.mpTestVoice=async()=>{const n=["kael","mara","helix_commander","ashen_leader","veil_specter"];for(const o of n){const s=await pr.generateDialogue(o,"test","en",{});await pr.speak(s,o,"en"),await new Promise(l=>setTimeout(l,800))}}}getIcon(e){return'<span style="width:16px;height:16px;display:inline-flex"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg></span>'}getIconSvg(e){return`<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">${{coop_story:'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/>',deathmatch:'<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',stealth_hunters:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>',extraction:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',survival:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',infiltration:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'}[e]||'<circle cx="12" cy="12" r="10"/>'}</svg>`}colorToGradient(e){return`linear-gradient(135deg, #${e.toString(16).padStart(6,"0")}, #${(e+2236962).toString(16).padStart(6,"0")})`}bindEvents(){qt.onRoomUpdate(()=>{this.isVisible&&this.render()}),qt.onPlayerUpdate(()=>{this.isVisible&&this.render()})}}class yf{constructor(){C(this,"root"),C(this,"hudEl",null),C(this,"menuEl",null),C(this,"currentScreen","menu"),C(this,"isMenuOpen",!0),C(this,"dialogueEl",null),C(this,"multiplayerUI",null),this.root=document.getElementById("ui-root"),this.createStyles(),this.setupDialogueListener()}createStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}setupDialogueListener(){window.addEventListener("bv:dialogueLine",e=>{const{line:t,choices:i}=e.detail;this.showDialogue(t,i)}),window.addEventListener("bv:dialogueEnd",()=>{this.hideDialogue()}),window.addEventListener("bv:achievement",e=>{this.showAchievementPopup(e.detail)})}showDialogue(e,t){this.currentScreen="dialogue",this.dialogueEl&&this.dialogueEl.remove();const i=document.createElement("div");i.className="ui-layer bv-dialogue";const r=yi.isRTL,n=r&&e.textAr?e.textAr:e.text;if(i.innerHTML=`
      <div class="bv-dialogue-box">
        <div class="bv-dialogue-speaker">${e.speaker} ${e.emotion?`• ${e.emotion.toUpperCase()}`:""}</div>
        <div class="bv-dialogue-text" dir="${r?"rtl":"ltr"}" style="font-family:${r?"'Noto Sans Arabic', sans-serif":"'Inter', sans-serif"}">${n}</div>
        ${t?`<div class="bv-dialogue-choices">${t.map(o=>{const s=r&&o.textAr?o.textAr:o.text;return`<button class="bv-dialogue-choice" data-choice="${o.id}" dir="${r?"rtl":"ltr"}">${s}</button>`}).join("")}</div>`:`<div style="margin-top:12px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; text-align:right;">[SPACE] Continue • [F] Next</div>`}
      </div>
    `,this.root.appendChild(i),this.dialogueEl=i,i.querySelectorAll("[data-choice]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.choice;ur.choose(s)})}),!t){const o=()=>ur.next();i.addEventListener("click",o);const s=l=>{(l.code==="Space"||l.code==="KeyF"||l.code==="Enter")&&(o(),window.removeEventListener("keydown",s))};window.addEventListener("keydown",s,{once:!0})}}hideDialogue(){this.dialogueEl&&(this.dialogueEl.remove(),this.dialogueEl=null),this.currentScreen==="dialogue"&&(this.currentScreen="hud")}showAchievementPopup(e){const t=document.createElement("div");t.className="bv-achievement-popup",t.innerHTML=`
      <div style="display:flex; gap:12px; align-items:center;">
        <div style="width:40px; height:40px; background:rgba(77,255,154,0.15); border:1px solid rgba(77,255,154,0.3); display:flex; align-items:center; justify-content:center; font-size:20px; border-radius:6px;">${e.icon}</div>
        <div>
          <div style="font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.15em; color:#4dff9a;">ACHIEVEMENT UNLOCKED</div>
          <div style="font-size:13px; color:#fff; margin-top:2px; font-weight:600;">${e.title}</div>
          <div style="font-size:11px; color:#8a8a9a; margin-top:2px;">${e.description}</div>
        </div>
      </div>
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),100),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),400)},4e3)}showMenu(){this.currentScreen="menu",this.isMenuOpen=!0,this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-menu";const t=gt.hasSave(),i=vt.getAchievements(),r=i.filter(s=>s.unlocked).length;e.innerHTML=`
      <div class="bv-menu-bg"></div>
      <div class="bv-menu-content">
        <div class="bv-menu-left">
          <div class="bv-logo">${yi.t("game.title")}</div>
          <div class="bv-tagline">${yi.t("game.tagline")}</div>
          <div class="bv-menu-items">
            ${t?`<div class="bv-menu-item primary" data-action="continue">▶ ${yi.t("menu.continue")}</div>`:""}
            <div class="bv-menu-item ${t?"":"primary"}" data-action="new">${t?yi.t("menu.new_game"):"▶ ENTER VEYRA"}</div>
            <div class="bv-menu-item" data-action="multiplayer" style="border-color:rgba(106,166,255,0.3); background:linear-gradient(90deg, rgba(106,166,255,0.12), rgba(139,92,246,0.08)); color:#6aa6ff;">MULTIPLAYER • 6 MODES • P2P</div>
            <div class="bv-menu-item" data-action="missions">MISSIONS • ${Ct.getAll().length}</div>
            <div class="bv-menu-item" data-action="inventory">INVENTORY • ${_a.length} WEAPONS</div>
            <div class="bv-menu-item" data-action="achievements">ACHIEVEMENTS • ${r}/${i.length}</div>
            <div class="bv-menu-item" data-action="map">MAP • SECTOR 7</div>
            <div class="bv-menu-item" data-action="settings">${yi.t("menu.settings")}</div>
            <div class="bv-menu-item" data-action="credits">${yi.t("menu.credits")}</div>
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
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${vt.getStats().kills}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">KILLS</div>
              </div>
              <div style="flex:1; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:8px; border-radius:4px; text-align:center;">
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${vt.getStats().intelCollected}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">INTEL</div>
              </div>
              <div style="flex:1; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:8px; border-radius:4px; text-align:center;">
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${vt.getStats().totalDiscovered}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">DISCOVERED</div>
              </div>
            </div>
          </div>
          <div class="bv-version" style="margin-top:20px;">BLACK VEIL v1.0.0 • BUILD 430e42e • M11 DEV • ELECTRON + PWA • ONE-CLICK LAUNCHER</div>
        </div>
      </div>
    `,this.root.appendChild(e),this.menuEl=e,e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{const l=s.dataset.action;this.handleMenuAction(l)})});let n=null;window.addEventListener("beforeinstallprompt",s=>{s.preventDefault(),n=s;const l=document.getElementById("install-btn");l&&(l.style.display="block")});const o=document.getElementById("install-btn");o&&o.addEventListener("click",async()=>{n&&(n.prompt(),await n.userChoice,n=null,o.style.display="none")})}handleMenuAction(e){switch(e){case"continue":case"new":this.showHUD(),window.dispatchEvent(new CustomEvent("bv:startGame",{detail:{isNew:e==="new"}}));break;case"multiplayer":this.multiplayerUI||(this.multiplayerUI=new xf),this.multiplayerUI.show();break;case"missions":this.showMissions();break;case"inventory":this.showInventory();break;case"achievements":this.showAchievements();break;case"map":this.showMap();break;case"settings":this.showSettings();break;case"credits":this.showCredits();break;case"launcher":this.showLauncherInfo();break}}showHUD(){this.currentScreen="hud",this.isMenuOpen=!1,this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-hud",e.innerHTML=`
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
    `,this.root.appendChild(e),this.hudEl=e,e.querySelector("#hud-map-btn")?.addEventListener("click",()=>this.showMap()),e.querySelector("#hud-inv-btn")?.addEventListener("click",()=>this.showInventory()),e.querySelector("#hud-photo-btn")?.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("bv:togglePhoto"))),e.querySelector("#hud-menu-btn")?.addEventListener("click",()=>this.showMenu()),Ct.onChange(i=>{if(!i)return;const r=document.getElementById("hud-obj-title"),n=document.getElementById("hud-obj-text"),o=document.getElementById("hud-obj-bar");if(r&&(r.textContent=i.title.toUpperCase()),n){const l=i.objectives.find(c=>!c.completed);n.textContent=l?l.title:"Mission Complete"}const s=Ct.getProgress();o&&(o.style.width=`${s.percent*100}%`)});const t=Ct.getActive();if(t){const i=document.getElementById("hud-obj-title"),r=document.getElementById("hud-obj-text");if(i&&(i.textContent=t.title.toUpperCase()),r){const n=t.objectives.find(o=>!o.completed);r.textContent=n?n.title:t.description}}}updateHUD(e){if(this.currentScreen!=="hud"&&this.currentScreen!=="dialogue")return;const t=document.getElementById("hud-health"),i=document.getElementById("hud-armor"),r=document.getElementById("hud-ammo-current"),n=document.getElementById("hud-ammo-reserve"),o=document.getElementById("hud-stealth"),s=document.getElementById("hud-stealth-text"),l=document.getElementById("hud-fps"),c=document.getElementById("hud-interact"),h=document.getElementById("hud-crosshair");t&&(t.style.width=`${e.health}%`),i&&(i.style.width=`${e.armor}%`),r&&(r.textContent=`${e.ammoCurrent}`),n&&(n.textContent=`/ ${e.ammoReserve} • ${e.weaponName}`),o&&(o.textContent=e.stealth,o.className=`bv-hud-stealth ${e.stealth!=="HIDDEN"?"visible":""}`,o.style.color=e.stealth==="COMBAT"?"#ff4d6a":e.stealth==="DETECTED"?"#ffb84d":"#4dff9a"),s&&(s.textContent=e.stealth),l&&(l.textContent=`${Math.round(e.fps)} FPS • ${e.frameTime.toFixed(1)}ms • ${e.quality} • P:Photo`),c&&(e.interact?(c.style.display="block",c.textContent=`[F] ${e.interact}`):c.style.display="none"),h&&(h.className=`bv-hud-crosshair ${e.isAiming?"aiming":""}`,h.style.opacity=e.isAiming?"0.9":"0.6")}showMissions(){this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-panel",e.style.padding="24px",e.style.overflowY="auto";const t=Ct.getAll();e.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:12px;">
        <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">MISSIONS • CHAPTER 1: GHOSTS</h2>
        <button class="bv-button" id="missions-back">BACK</button>
      </div>
      <div style="display:grid; gap:16px; max-width:900px;">
        ${t.map(i=>`
          <div class="bv-credit-card" data-mission="${i.id}" style="cursor:pointer; width:100%; ${Ct.getActive()?.id===i.id?"border-color:#6aa6ff; background:rgba(106,166,255,0.08);":""}">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
              <div>
                <h3>${i.title} • CH${i.chapter} • ${i.location}</h3>
                <div style="font-size:13px; color:#9a9aaa; line-height:1.5; margin:8px 0;">${i.longDescription||i.description}</div>
                <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a;">${i.difficulty.toUpperCase()} • ${i.rewards.xp} XP • ${i.rewards.currency} CR ${i.rewards.items?`• ${i.rewards.items.join(", ")}`:""}</div>
              </div>
              <div style="font-family:'Orbitron',monospace; font-size:10px; color:${Ct.getActive()?.id===i.id?"#6aa6ff":"#5a5a6a"}; white-space:nowrap;">${Ct.getActive()?.id===i.id?"● ACTIVE":"○"}</div>
            </div>
            <div style="margin-top:12px; display:grid; gap:4px;">
              ${i.objectives.map(r=>`<div style="font-size:11px; color:${r.completed?"#4dff9a":r.optional?"#8a8a6a":"#e8e8ec"}; display:flex; gap:8px;"><span>${r.completed?"✓":r.optional?"◇":"○"}</span><span><strong>${r.title}</strong> — ${r.description} ${r.required?`(${r.current||0}/${r.required})`:""} ${r.optional?"(OPTIONAL)":""}</span></div>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `,this.root.appendChild(e),e.querySelector("#missions-back")?.addEventListener("click",()=>this.showMenu()),e.querySelectorAll("[data-mission]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.mission;Ct.setActive(r),this.showMenu()})})}showInventory(){this.currentScreen="inventory",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-inventory",e.innerHTML=`
      <div style="width:340px; background:rgba(15,15,20,0.98); border:1px solid rgba(255,255,255,0.08); padding:18px; overflow-y:auto; border-radius:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
          <h2 style="font-family:Orbitron; font-size:15px; letter-spacing:0.15em; color:#fff;">INVENTORY • ARSENAL</h2>
          <button class="bv-button" id="inv-back" style="padding:6px 12px; font-size:10px;">BACK</button>
        </div>
        <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; margin-bottom:10px; letter-spacing:0.1em;">WEAPONS • ${_a.length} AVAILABLE • CLICK TO EQUIP</div>
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
    `,this.root.appendChild(e),e.querySelector("#inv-back")?.addEventListener("click",()=>this.showHUD()),window.dispatchEvent(new CustomEvent("bv:requestInventory"));const t=i=>{const{weapons:r,currentIndex:n,achievements:o,stats:s}=i.detail,l=e.querySelector("#inv-weapons"),c=e.querySelector("#inv-grid"),h=e.querySelector("#inv-stats"),d=e.querySelector("#inv-achievements");l.innerHTML=r.map((u,m)=>`
        <div class="bv-inv-item ${m===n?"equipped":""}" data-idx="${m}">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-family:Orbitron; font-size:11px; color:#fff; letter-spacing:0.05em;">${u.config.name}</div>
            <div style="font-size:9px; color:${m===n?"#6aa6ff":"#5a5a6a"};">${m===n?"● EQUIPPED":"○"}</div>
          </div>
          <div style="font-size:10px; color:#8a8a9a; margin-top:3px;">${u.config.category.toUpperCase()} • ${u.ammoInMag}/${u.reserve} • ${u.config.fireRate} RPM</div>
          <div style="font-size:9px; color:#5a5a6a; margin-top:3px; line-height:1.3;">${u.config.description}</div>
          <div style="margin-top:6px; height:2px; background:rgba(255,255,255,0.08); overflow:hidden; border-radius:1px;"><div style="height:100%; width:${u.ammoInMag/u.config.magazine*100}%; background:${u.ammoInMag<5?"#ff4d6a":"#6aa6ff"};"></div></div>
        </div>
      `).join(""),l.querySelectorAll("[data-idx]").forEach(u=>{u.addEventListener("click",()=>{const m=parseInt(u.dataset.idx);window.dispatchEvent(new CustomEvent("bv:equipWeapon",{detail:{index:m}})),this.showHUD()})}),c.innerHTML=r.map((u,m)=>`
        <div class="bv-inv-item ${m===n?"equipped":""}" data-idx="${m}">
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
      `).join(""),c.querySelectorAll("[data-idx]").forEach(u=>{u.addEventListener("click",()=>{const m=parseInt(u.dataset.idx);window.dispatchEvent(new CustomEvent("bv:equipWeapon",{detail:{index:m}})),this.showHUD()})}),s&&(h.innerHTML=`
          Kills: <span style="color:#fff">${s.kills}</span> (Headshots: ${s.headshots})<br>
          Intel: <span style="color:#fff">${s.intelCollected}</span> • Districts: <span style="color:#fff">${s.totalDiscovered}/7</span><br>
          Missions: <span style="color:#fff">${s.missionsCompleted}</span> • Stealth: <span style="color:#fff">${s.stealthMissions}</span><br>
          Currency: <span style="color:#4dff9a">${gt.load()?.progression.currency||0} CR</span><br>
          Level: <span style="color:#6aa6ff">${gt.load()?.progression.level||1}</span> • XP: ${gt.load()?.progression.xp||0}
        `),o&&(d.innerHTML=`
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
        `)};window.addEventListener("bv:inventoryData",t,{once:!0})}showAchievements(){this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-panel",e.style.padding="24px",e.style.overflowY="auto";const t=vt.getAchievements(),i=vt.getStats();e.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:12px;">
        <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">ACHIEVEMENTS • ${t.filter(r=>r.unlocked).length}/${t.length}</h2>
        <button class="bv-button" id="ach-back">BACK</button>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:12px; margin-bottom:24px;">
        <div class="bv-credit-card" style="width:100%"><h3>STATS</h3><div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.8;">
          Kills: ${i.kills} (Headshots: ${i.headshots})<br>
          Intel: ${i.intelCollected} • Districts: ${i.totalDiscovered}/7<br>
          Missions: ${i.missionsCompleted} • Stealth: ${i.stealthMissions}<br>
          Time: ${(i.timePlayed/60).toFixed(1)}m • Distance: ${(i.distanceTraveled/1e3).toFixed(2)}km
        </div></div>
        <div class="bv-credit-card" style="width:100%"><h3>PROGRESSION</h3><div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.8;">
          Level: ${gt.load()?.progression.level||1} • XP: ${gt.load()?.progression.xp||0}<br>
          Currency: ${gt.load()?.progression.currency||0} CR<br>
          Weapons: ${_a.length} available<br>
          Save: ${gt.hasSave()?"Present":"None"}
        </div></div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px,1fr)); gap:12px;">
        ${t.map(r=>`
          <div class="bv-credit-card" style="width:100%; border-color:${r.unlocked?"rgba(77,255,154,0.3)":"rgba(255,255,255,0.08)"}; background:${r.unlocked?"rgba(77,255,154,0.06)":"rgba(255,255,255,0.02)"};">
            <div style="display:flex; gap:12px; align-items:flex-start;">
              <div style="width:44px; height:44px; background:${r.unlocked?"rgba(77,255,154,0.15)":"rgba(255,255,255,0.04)"}; border:1px solid ${r.unlocked?"rgba(77,255,154,0.3)":"rgba(255,255,255,0.08)"}; display:flex; align-items:center; justify-content:center; font-size:22px; border-radius:6px; flex-shrink:0;">${r.icon}</div>
              <div style="flex:1;">
                <h3 style="margin-bottom:4px; color:${r.unlocked?"#4dff9a":"#fff"};">${r.title} ${r.unlocked?"✓":""} ${r.hidden&&!r.unlocked?"(HIDDEN)":""}</h3>
                <div style="font-size:12px; color:#9a9aaa; line-height:1.4;">${r.hidden&&!r.unlocked?"???":r.description}</div>
                <div style="margin-top:8px; height:3px; background:rgba(255,255,255,0.08); border-radius:2px; overflow:hidden;"><div style="height:100%; width:${r.progress/r.maxProgress*100}%; background:${r.unlocked?"#4dff9a":"#6aa6ff"}; transition:width 0.3s;"></div></div>
                <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; margin-top:4px;">${r.progress}/${r.maxProgress} • ${r.xpReward} XP • ${r.category.toUpperCase()}</div>
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
        <h3 style="font-family:Orbitron; font-size:12px; letter-spacing:0.15em; color:#fff; margin-bottom:14px;">LOCATIONS • ${vt.getStats().totalDiscovered}/7 DISCOVERED</h3>
        <div id="map-locations" style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;"></div>
        <div style="background:rgba(106,166,255,0.06); border:1px solid rgba(106,166,255,0.12); padding:10px; border-radius:4px;">
          <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#6aa6ff; margin-bottom:4px;">SAFEHOUSE</div>
          <div style="font-size:11px; color:#e8e8ec;">-58, 15 — Ashen Hub</div>
          <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">Weapons • Map • Missions • Upgrades • Story</div>
        </div>
      </div>
    `,this.root.appendChild(e),e.querySelector("#map-back")?.addEventListener("click",()=>this.showHUD());const t=e.querySelector("#map-canvas-el"),i=t.getContext("2d");t.width=t.clientWidth*window.devicePixelRatio,t.height=t.clientHeight*window.devicePixelRatio;let r=0,n=0,o=1.3,s=!1,l=0,c=0;const h=[{name:"Central Street",x:0,z:-40,type:"street",discovered:!0,desc:"High-density urban, Helix patrols"},{name:"Residential Block",x:-38,z:22,type:"residential",discovered:!0,desc:"Apartments, Mara 7B, blackout"},{name:"Helix Tower",x:5,z:68,type:"corporate",discovered:!1,desc:"Corporate, security heavy, powered"},{name:"Industrial Yard",x:48,z:-20,type:"industrial",discovered:!0,desc:"Warehouses, containers, substation"},{name:"Safehouse",x:-58,z:15,type:"safehouse",discovered:!0,desc:"Ashen hub, your base"},{name:"Northern Checkpoint",x:0,z:-82,type:"objective",discovered:!0,desc:"Entry point, mission objective"},{name:"Substation",x:58,z:-4,type:"objective",discovered:!1,desc:"Power grid, restore for residential"},{name:"Hidden Cache",x:-48,z:-78,type:"secret",discovered:!1,desc:"Secret, Phantom SR"},{name:"Security Grid",x:5,z:58,type:"security",discovered:!1,desc:"Cameras, hack terminals"}],d=e.querySelector("#map-locations");d.innerHTML=h.map(g=>`
      <div style="padding:9px 10px; background:${g.discovered?"rgba(106,166,255,0.08)":"rgba(255,255,255,0.02)"}; border:1px solid ${g.discovered?"rgba(106,166,255,0.2)":"rgba(255,255,255,0.06)"}; border-radius:4px; cursor:pointer;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="font-size:11px; color:${g.discovered?"#fff":"#5a5a6a"}; font-weight:600;">${g.name}</div>
          <div style="font-size:8px; color:${g.discovered?"#4dff9a":"#5a5a6a"};">${g.discovered?"●":"○"}</div>
        </div>
        <div style="font-size:9px; color:#6a6a7a; margin-top:2px;">${g.type.toUpperCase()} • ${g.desc}</div>
      </div>
    `).join("");let u={x:0,z:0};window.addEventListener("bv:playerPos",g=>{u=g.detail});const m=()=>{if(!i)return;i.clearRect(0,0,t.width,t.height),i.save(),i.scale(window.devicePixelRatio,window.devicePixelRatio);const g=t.clientWidth,f=t.clientHeight;i.translate(g/2+r,f/2+n),i.scale(o,o),i.strokeStyle="rgba(255,255,255,0.035)",i.lineWidth=1;for(let p=-250;p<=250;p+=20)i.beginPath(),i.moveTo(p,-250),i.lineTo(p,250),i.stroke();for(let p=-250;p<=250;p+=20)i.beginPath(),i.moveTo(-250,p),i.lineTo(250,p),i.stroke();i.strokeStyle="rgba(106,166,255,0.08)",i.lineWidth=2,i.strokeRect(-60,-110,120,135),i.strokeRect(-75,-10,65,75),i.strokeRect(-20,40,50,50),h.forEach(p=>{let w="rgba(255,255,255,0.03)",_="rgba(255,255,255,0.08)",T=10;p.type==="objective"?(w="rgba(77,255,154,0.15)",_="rgba(77,255,154,0.4)",T=8):p.type==="secret"?(w="rgba(255,184,77,0.12)",_="rgba(255,184,77,0.35)",T=7):p.type==="safehouse"?(w="rgba(255,170,68,0.15)",_="rgba(255,170,68,0.4)",T=9):p.type==="security"?(w="rgba(0,229,255,0.12)",_="rgba(0,229,255,0.35)",T=7):p.discovered&&(w="rgba(106,166,255,0.06)",_="rgba(106,166,255,0.18)"),i.fillStyle=w,i.strokeStyle=_,i.lineWidth=p.discovered?1.5:1,i.beginPath(),i.arc(p.x,p.z,T,0,Math.PI*2),i.fill(),i.stroke(),p.discovered&&(i.fillStyle="#ffffff",i.font="bold 8px monospace",i.textAlign="center",i.fillText(p.name.split(" ")[0],p.x,p.z-T-6))}),i.fillStyle="#6aa6ff",i.shadowColor="#6aa6ff",i.shadowBlur=8,i.beginPath(),i.arc(u.x,u.z,4.5,0,Math.PI*2),i.fill(),i.shadowBlur=0,i.strokeStyle="#ffffff",i.lineWidth=1.5,i.stroke(),i.restore(),this.currentScreen==="map"&&requestAnimationFrame(m)};m(),t.addEventListener("mousedown",g=>{s=!0,l=g.clientX,c=g.clientY}),window.addEventListener("mouseup",()=>s=!1),window.addEventListener("mousemove",g=>{s&&(r+=g.clientX-l,n+=g.clientY-c,l=g.clientX,c=g.clientY)}),t.addEventListener("wheel",g=>{g.preventDefault(),o=Math.max(.35,Math.min(5,o*(g.deltaY<0?1.12:.88)))},{passive:!1});let v=0;t.addEventListener("touchstart",g=>{g.touches.length===1&&(s=!0,l=g.touches[0].clientX,c=g.touches[0].clientY),g.touches.length===2&&(v=Math.hypot(g.touches[0].clientX-g.touches[1].clientX,g.touches[0].clientY-g.touches[1].clientY))}),t.addEventListener("touchmove",g=>{if(g.preventDefault(),g.touches.length===1&&s&&(r+=g.touches[0].clientX-l,n+=g.touches[0].clientY-c,l=g.touches[0].clientX,c=g.touches[0].clientY),g.touches.length===2){const f=Math.hypot(g.touches[0].clientX-g.touches[1].clientX,g.touches[0].clientY-g.touches[1].clientY);v&&(o=Math.max(.35,Math.min(5,o*(f/v)))),v=f}},{passive:!1}),t.addEventListener("touchend",()=>{s=!1,v=0})}showSettings(){this.currentScreen="settings",this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-settings";const t=We.settings;e.innerHTML=`
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
    `,this.root.appendChild(e),e.querySelector("#settings-back")?.addEventListener("click",()=>this.showMenu()),e.querySelector("#set-quality")?.addEventListener("change",i=>We.set("quality",i.target.value)),e.querySelector("#set-fps")?.addEventListener("change",i=>We.set("fpsLimit",parseInt(i.target.value))),e.querySelector("#set-res")?.addEventListener("input",i=>We.set("resolutionScale",parseFloat(i.target.value))),e.querySelector("#set-master")?.addEventListener("input",i=>We.set("masterVolume",parseFloat(i.target.value))),e.querySelector("#set-music")?.addEventListener("input",i=>We.set("musicVolume",parseFloat(i.target.value))),e.querySelector("#set-sfx")?.addEventListener("input",i=>We.set("sfxVolume",parseFloat(i.target.value))),e.querySelector("#set-cam")?.addEventListener("input",i=>We.set("cameraSensitivity",parseFloat(i.target.value))),e.querySelector("#set-aim")?.addEventListener("input",i=>We.set("aimSensitivity",parseFloat(i.target.value))),e.querySelector("#set-gyro")?.addEventListener("click",i=>{const r=!We.get("gyroEnabled");We.set("gyroEnabled",r),i.target.textContent=r?"ENABLED":"DISABLED"}),e.querySelector("#set-touch")?.addEventListener("input",i=>We.set("touchOpacity",parseFloat(i.target.value))),e.querySelector("#set-lang")?.addEventListener("change",i=>{const r=i.target.value;We.set("language",r),yi.setLanguage(r),this.showSettings()}),e.querySelector("#set-sub")?.addEventListener("click",i=>{const r=!We.get("subtitles");We.set("subtitles",r),i.target.textContent=r?"ON":"OFF"}),e.querySelector("#settings-reset")?.addEventListener("click",()=>{We.reset(),this.showSettings()}),e.querySelector("#settings-fullscreen")?.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}),e.querySelector("#set-layout")?.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("bv:editLayout")),this.showHUD()}),e.querySelector("#photo-btn")?.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("bv:togglePhoto")),this.showHUD()}),e.querySelector("#settings-launcher")?.addEventListener("click",()=>{window.open("start.html","_blank")})}showLauncherInfo(){this.root.innerHTML="";const e=document.createElement("div");e.className="ui-layer bv-panel",e.style.padding="24px",e.style.overflowY="auto",e.innerHTML=`
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
    `,this.root.appendChild(e),e.querySelector("#credits-back")?.addEventListener("click",()=>this.showMenu())}showNotification(e,t=3500){const i=document.createElement("div");i.style.cssText="position:fixed; top:80px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.88); border:1px solid rgba(106,166,255,0.35); color:#fff; padding:12px 22px; font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:0.08em; z-index:100; pointer-events:none; transition:opacity 0.3s ease; border-radius:20px; backdrop-filter:blur(12px); max-width:90vw; text-align:center;",i.textContent=e,document.body.appendChild(i),setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),300)},t)}isInMenu(){return this.isMenuOpen}}class bf{constructor(e){C(this,"container"),C(this,"moveJoystick"),C(this,"lookArea"),C(this,"buttons",new Map),C(this,"moveActive",!1),C(this,"moveStart",{x:0,y:0}),C(this,"moveVector",{x:0,y:0}),C(this,"lookActive",!1),C(this,"lookStart",{x:0,y:0}),C(this,"editMode",!1),C(this,"lastTap",0),C(this,"sprintLocked",!1),this.input=e,this.container=document.createElement("div"),this.container.id="touch-controls",this.container.style.cssText="position:fixed; inset:0; pointer-events:none; z-index:5; touch-action:none;",document.body.appendChild(this.container),this.createStyles(),this.moveJoystick=document.createElement("div"),this.moveJoystick.className="touch-joystick move",this.moveJoystick.innerHTML='<div class="joystick-base"><div class="joystick-stick"></div><div class="joystick-ring"></div></div><div class="joystick-label">MOVE</div>',this.container.appendChild(this.moveJoystick),this.lookArea=document.createElement("div"),this.lookArea.className="touch-look-area",this.lookArea.innerHTML='<div class="look-hint">👁️ DRAG TO LOOK • PINCH ZOOM</div>',this.container.appendChild(this.lookArea),this.createActionButtons(),this.bindEvents(),this.applyOpacity(),this.createMobileHUD(),We.onChange(t=>{this.applyOpacity(),t.controlLayout&&this.applyLayout(t.controlLayout)})}haptic(e){try{We.get("hapticsEnabled")!==!1&&navigator.vibrate&&navigator.vibrate(e)}catch{}}createStyles(){const e=document.createElement("style");e.textContent=`
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
    `,this.container.appendChild(e);try{navigator.getBattery?.().then(t=>{const i=()=>{const r=document.getElementById("mobile-battery");r&&(r.textContent=Math.round(t.level*100)+"%")};t.addEventListener("levelchange",i),i()})}catch{}window.addEventListener("bv:fps",t=>{const i=document.getElementById("mobile-fps");i&&(i.textContent=Math.round(t.detail||60)+" FPS")})}createActionButtons(){const e=[{id:"fire",label:"FIRE",icon:"🔥",class:"fire"},{id:"aim",label:"AIM",icon:"🎯",class:"aim"},{id:"reload",label:"R",icon:"🔄",class:"reload"},{id:"jump",label:"JUMP",icon:"🦘",class:"jump"},{id:"crouch",label:"CROUCH",icon:"🦆",class:"crouch"},{id:"interact",label:"INTERACT",icon:"📦",class:"interact"},{id:"switch",label:"SWAP",icon:"🔀",class:"switch"},{id:"melee",label:"MELEE",icon:"👊",class:"melee"},{id:"sprint",label:"SPRINT",icon:"🏃",class:"sprint"},{id:"photo",label:"PHOTO",icon:"📸",class:"photo"}];for(const t of e){const i=document.createElement("div");i.className=`touch-btn ${t.class}`,i.dataset.id=t.id,i.innerHTML=`<span class="btn-icon">${t.icon}</span><span>${t.label}</span>`,this.container.appendChild(i),this.buttons.set(t.id,i)}}bindEvents(){const e=this.moveJoystick.querySelector(".joystick-base"),t=this.moveJoystick.querySelector(".joystick-stick"),i=(l,c)=>{this.moveActive=!0,this.moveStart={x:l,y:c},this.haptic(10);const h=Date.now();if(h-this.lastTap<300){this.sprintLocked=!this.sprintLocked,this.input.state.sprint=this.sprintLocked,this.haptic(this.sprintLocked?[20,30,20]:20);const d=this.moveJoystick.querySelector(".joystick-label");d&&(d.textContent=this.sprintLocked?"SPRINTING":"MOVE")}this.lastTap=h},r=(l,c)=>{if(!this.moveActive)return;const h=l-this.moveStart.x,d=c-this.moveStart.y,u=Math.sqrt(h*h+d*d),m=52,v=Math.min(u,m),g=Math.atan2(d,h),f=Math.cos(g)*v,p=Math.sin(g)*v;t.style.transform=`translate(${f}px, ${p}px)`,this.moveVector={x:f/m,y:-p/m},this.input.setMoveVector(this.moveVector.x,this.moveVector.y),u>m*.9?this.input.state.sprint=!0:this.sprintLocked||(this.input.state.sprint=!1)},n=()=>{this.moveActive=!1,t.style.transform="translate(0,0)",this.moveVector={x:0,y:0},this.input.setMoveVector(0,0),this.sprintLocked||(this.input.state.sprint=!1)};e.addEventListener("touchstart",l=>{l.preventDefault(),i(l.touches[0].clientX,l.touches[0].clientY)},{passive:!1}),e.addEventListener("touchmove",l=>{l.preventDefault(),r(l.touches[0].clientX,l.touches[0].clientY)},{passive:!1}),e.addEventListener("touchend",l=>{l.preventDefault(),n()},{passive:!1}),e.addEventListener("mousedown",l=>{i(l.clientX,l.clientY)}),window.addEventListener("mousemove",l=>{this.moveActive&&r(l.clientX,l.clientY)}),window.addEventListener("mouseup",()=>{this.moveActive&&n()});let o={x:0,y:0};this.lookArea.addEventListener("touchstart",l=>{l.preventDefault(),this.lookActive=!0,this.lookStart={x:l.touches[0].clientX,y:l.touches[0].clientY},o={x:0,y:0}},{passive:!1}),this.lookArea.addEventListener("touchmove",l=>{if(l.preventDefault(),!this.lookActive)return;const c=l.touches[0].clientX-this.lookStart.x,h=l.touches[0].clientY-this.lookStart.y,d=We.get("cameraSensitivity")*.0032;this.input.setLookVector(-c*d,-h*d),o={x:-c*d*.5,y:-h*d*.5},this.lookStart={x:l.touches[0].clientX,y:l.touches[0].clientY}},{passive:!1}),this.lookArea.addEventListener("touchend",l=>{l.preventDefault(),this.lookActive=!1;let c=12;const h=()=>{c--<=0||(this.input.setLookVector(o.x*.3,o.y*.3),o.x*=.85,o.y*=.85,requestAnimationFrame(h))};h()},{passive:!1});let s=0;this.lookArea.addEventListener("touchmove",l=>{if(l.touches.length===2){const c=l.touches[0].clientX-l.touches[1].clientX,h=l.touches[0].clientY-l.touches[1].clientY,d=Math.sqrt(c*c+h*h);if(s>0){const u=d-s;window.dispatchEvent(new CustomEvent("bv:pinchZoom",{detail:u*.01}))}s=d}},{passive:!1}),this.lookArea.addEventListener("touchend",()=>{s=0}),this.buttons.forEach((l,c)=>{const h=d=>{switch(d&&this.haptic(c==="fire"?[15]:12),c){case"fire":this.input.state.fire=d;break;case"aim":this.input.state.aim=d;break;case"reload":d&&(this.input.state.reload=!0,this.haptic([10,20,10]));break;case"jump":d&&(this.input.state.jump=!0,this.haptic(20));break;case"crouch":this.input.state.crouch=d,d&&this.haptic(15);break;case"interact":this.input.state.interact=d,d&&this.haptic([15,30,15]);break;case"switch":d&&(this.input.state.switchWeapon=1,this.haptic([10,10]));break;case"melee":d&&(this.input.state.melee=!0,this.haptic([30,20,40]));break;case"sprint":this.input.state.sprint=d,this.sprintLocked=d;break;case"photo":d&&(window.dispatchEvent(new CustomEvent("bv:togglePhoto")),this.haptic([20,40,20]));break}};l.addEventListener("touchstart",d=>{d.preventDefault(),h(!0)},{passive:!1}),l.addEventListener("touchend",d=>{d.preventDefault(),h(!1),["reload","jump","melee","switch","photo"].includes(c)&&setTimeout(()=>h(!1),120)},{passive:!1}),l.addEventListener("mousedown",()=>h(!0)),l.addEventListener("mouseup",()=>h(!1))}),window.addEventListener("bv:editLayout",()=>this.enterEditMode()),this.initGyro()}initGyro(){if(!("DeviceOrientationEvent"in window))return;let e=We.get("gyroEnabled");We.onChange(n=>{e=n.gyroEnabled;const o=document.getElementById("mobile-gyro-chip");o&&(o.style.display=e?"flex":"none")});let t=0,i=0;window.addEventListener("deviceorientation",n=>{if(!e||n.beta===null||n.gamma===null)return;const o=We.get("gyroSensitivity")*6e-4,s=(n.gamma||0)-t,l=(n.beta||0)-i;if(t=n.gamma||0,i=n.beta||0,Math.abs(s)<.15&&Math.abs(l)<.15)return;const c=s*o*1.2,h=l*o*.6;(Math.abs(c)>1e-4||Math.abs(h)>1e-4)&&this.input.setLookVector(c,h)});const r=document.createElement("button");if(r.textContent="ENABLE GYRO 📳",r.className="bv-button",r.style.cssText="position:fixed; bottom:90px; left:50%; transform:translateX(-50%); z-index:20; display:none; pointer-events:auto; background:rgba(106,166,255,0.15); border:1px solid rgba(106,166,255,0.3); border-radius:20px; padding:8px 16px; font-size:10px; color:#fff;",document.body.appendChild(r),r.addEventListener("click",async()=>{try{const n=DeviceOrientationEvent;n.requestPermission?await n.requestPermission()==="granted"&&(We.set("gyroEnabled",!0),r.style.display="none",this.haptic([20,30,20])):(We.set("gyroEnabled",!0),r.style.display="none")}catch{}}),typeof DeviceOrientationEvent.requestPermission=="function")r.style.display="block";else if(We.get("gyroEnabled")){const n=document.getElementById("mobile-gyro-chip");n&&(n.style.display="flex")}}applyOpacity(){const e=We.get("touchOpacity");this.container.style.opacity=`${e}`}applyLayout(e){if(e)for(const[t,i]of Object.entries(e)){const r=this.buttons.get(t);if(r&&i&&typeof i=="object"){const n=i;n.x!==void 0&&(r.style.left=n.x+"px"),n.y!==void 0&&(r.style.top=n.y+"px"),n.right!==void 0&&(r.style.right=n.right+"px"),n.bottom!==void 0&&(r.style.bottom=n.bottom+"px")}}}enterEditMode(){if(this.editMode)return;this.editMode=!0,this.container.classList.add("touch-controls-edit");const e=document.createElement("div");e.className="touch-edit-panel",e.innerHTML=`
      <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#fff;">DRAG TO MOVE • DOUBLE-TAP SPRINT • PINCH ZOOM • HAPTICS ON</span>
      <div style="display:flex; gap:8px;">
        <button class="bv-button" id="edit-reset" style="padding:6px 12px; font-size:10px;">RESET</button>
        <button class="bv-button" id="edit-save" style="padding:6px 12px; font-size:10px;">SAVE</button>
      </div>
    `,document.body.appendChild(e);let t=null,i={x:0,y:0};const r=s=>{s.style.pointerEvents="auto";const l=(c,h)=>{t=s;const d=s.getBoundingClientRect();i={x:c-d.left,y:h-d.top}};s.addEventListener("touchstart",c=>{c.preventDefault(),l(c.touches[0].clientX,c.touches[0].clientY)},{passive:!1}),s.addEventListener("mousedown",c=>l(c.clientX,c.clientY))};this.buttons.forEach(r),r(this.moveJoystick);const n=(s,l)=>{t&&(t.style.left=s-i.x+"px",t.style.top=l-i.y+"px",t.style.right="auto",t.style.bottom="auto")},o=()=>{t=null};window.addEventListener("touchmove",s=>{t&&(s.preventDefault(),n(s.touches[0].clientX,s.touches[0].clientY))},{passive:!1}),window.addEventListener("mousemove",s=>{t&&n(s.clientX,s.clientY)}),window.addEventListener("touchend",o),window.addEventListener("mouseup",o),e.querySelector("#edit-reset")?.addEventListener("click",()=>{We.set("controlLayout",null),location.reload()}),e.querySelector("#edit-save")?.addEventListener("click",()=>{const s={};this.buttons.forEach((c,h)=>{const d=c.getBoundingClientRect();s[h]={x:d.left,y:d.top}});const l=this.moveJoystick.getBoundingClientRect();s.move={x:l.left,y:l.top},We.set("controlLayout",s),e.remove(),this.container.classList.remove("touch-controls-edit"),this.editMode=!1,this.haptic([20,40,20])})}setVisible(e){this.container.style.display=e?"block":"none"}}class Sf{constructor(){C(this,"tasks",new Map),C(this,"listeners",new Set)}register(e,t,i=1){this.tasks.set(e,{id:e,progress:0,total:i,label:t}),this.emit()}update(e,t){const i=this.tasks.get(e);i&&(i.progress=t,this.emit())}complete(e){const t=this.tasks.get(e);t&&(t.progress=t.total,this.emit())}getProgress(){if(this.tasks.size===0)return 0;let e=0,t=0;for(const i of this.tasks.values())e+=i.progress,t+=i.total;return t?e/t:0}getCurrentLabel(){let e="";for(const t of this.tasks.values())t.progress<t.total&&(e=t.label);return e||"READY"}onProgress(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){const e=this.getProgress(),t=this.getCurrentLabel();this.listeners.forEach(i=>i(e,t))}async loadTextureFromCanvas(e,t,i){const r=document.createElement("canvas");r.width=e,r.height=t;const n=r.getContext("2d");return i(n),r}}const ga=new Sf;class Mf{constructor(e){C(this,"scene"),C(this,"pool",[]),C(this,"active",[]),C(this,"decalPool",[]),C(this,"decals",[]),this.scene=e;for(let t=0;t<30;t++){const i=new mi(.05,6,6),r=new ui({color:16777215,transparent:!0,opacity:0}),n=new Y(i,r);this.pool.push(n)}}spawn(e){let t;if(this.pool.length>0)t=this.pool.pop();else{const n=new mi(.05,6,6),o=new ui({color:16777215,transparent:!0,opacity:0});t=new Y(n,o)}const i=e.color??16755268;t.material.color.setHex(i),t.material.opacity=.9,t.position.copy(e.position),t.scale.setScalar(e.scale??1),t.visible=!0,this.scene.add(t);const r=e.direction?e.direction.clone().multiplyScalar(2+Math.random()*3):void 0;return e.type==="spark"&&r&&(r.y+=Math.random()*2),this.active.push({mesh:t,life:e.lifetime??(e.type==="muzzle"?.08:e.type==="impact"?.15:.6),maxLife:e.lifetime??.6,velocity:r}),(e.type==="bulletHole"||e.type==="impact")&&this.spawnDecal(e.position,e.direction,e.color),t}spawnDecal(e,t,i){if(this.decals.length>80){const s=this.decals.shift();s&&this.scene.remove(s)}const r=new Un(.08+Math.random()*.05,8),n=new ui({color:i??3355443,transparent:!0,opacity:.7,side:Ot,depthWrite:!1}),o=new Y(r,n);if(o.position.copy(e),t){const s=e.clone().add(t);o.lookAt(s),o.position.add(t.clone().multiplyScalar(.01))}o.rotation.z=Math.random()*Math.PI*2,this.scene.add(o),this.decals.push(o),setTimeout(()=>{n.opacity=0,setTimeout(()=>{this.scene.remove(o);const s=this.decals.indexOf(o);s>=0&&this.decals.splice(s,1)},1e3)},3e4)}spawnMuzzleFlash(e,t){this.spawn({type:"muzzle",position:e,direction:t,color:16763972,scale:1.5,lifetime:.06});for(let i=0;i<3;i++){const r=t.clone().add(new S((Math.random()-.5)*.5,(Math.random()-.5)*.5,(Math.random()-.5)*.5)).normalize();this.spawn({type:"spark",position:e.clone(),direction:r,color:16755268,scale:.3+Math.random()*.4,lifetime:.2+Math.random()*.3})}}spawnImpact(e,t,i="concrete"){const r={concrete:11184810,metal:16755268,flesh:16731498};if(this.spawn({type:"impact",position:e,direction:t,color:r[i],scale:1,lifetime:.15}),this.spawn({type:"bulletHole",position:e,direction:t,color:2236962,scale:1,lifetime:0}),i==="concrete")for(let n=0;n<4;n++){const o=t.clone().add(new S(Math.random()-.5,Math.random()-.5,Math.random()-.5)).normalize();this.spawn({type:"dust",position:e.clone(),direction:o,color:8947848,scale:.5+Math.random(),lifetime:.6+Math.random()*.6})}if(i==="metal")for(let n=0;n<6;n++){const o=t.clone().add(new S(Math.random()-.5,Math.random()-.5,Math.random()-.5)).normalize();this.spawn({type:"spark",position:e.clone(),direction:o,color:16755268,scale:.4,lifetime:.3})}}update(e){for(let t=this.active.length-1;t>=0;t--){const i=this.active[t];i.life-=e,i.velocity&&(i.mesh.position.add(i.velocity.clone().multiplyScalar(e)),i.velocity.y-=4*e,i.velocity.multiplyScalar(.98));const r=i.life/i.maxLife;i.mesh.material.opacity=r*.9,i.mesh.scale.multiplyScalar(.995),i.life<=0&&(this.scene.remove(i.mesh),i.mesh.material.opacity=0,this.pool.push(i.mesh),this.active.splice(t,1))}}clear(){for(const e of this.active)this.scene.remove(e.mesh);this.active=[];for(const e of this.decals)this.scene.remove(e);this.decals=[]}}class wf{constructor(e){C(this,"cameras",[]),C(this,"terminals",[]),C(this,"scene"),C(this,"alarmLevel","normal"),C(this,"alarmTimer",0),this.scene=e}addCamera(e,t,i){const r=new Vt,n=new fe(.3,.2,.4),o=new Se({color:1710622,roughness:.6,metalness:.4}),s=new Y(n,o);r.add(s);const l=new ft(.08,.08,.15,12);l.rotateX(Math.PI/2);const c=new Se({color:1118481,roughness:.2,metalness:.8}),h=new Y(l,c);h.position.z=.25,r.add(h);const d=new mi(.03,6,6),u=new Se({color:16711680,emissive:16711680,emissiveIntensity:.8}),m=new Y(d,u);m.position.set(.12,.08,.15),m.name="led",r.add(m),r.position.copy(e),r.rotation.copy(t),this.scene.add(r);const v=new Bm(16729156,.5,15,Math.PI/6,.5,1);v.position.copy(e),v.target.position.copy(e.clone().add(new S(0,0,-5).applyEuler(t))),this.scene.add(v),this.scene.add(v.target);const g={id:i,position:e.clone(),rotation:t.clone(),fov:60,range:18,isActive:!0,isAlerted:!1,mesh:r,light:v};return this.cameras.push(g),g}addTerminal(e,t,i){const r=new fe(.6,1.2,.4),n=new Se({color:2767434,emissive:43775,emissiveIntensity:.2,roughness:.6}),o=new Y(r,n);o.position.copy(e),o.castShadow=!0,this.scene.add(o);const s=new _t(.5,.35),l=document.createElement("canvas");l.width=256,l.height=160;const c=l.getContext("2d");c.fillStyle="#001122",c.fillRect(0,0,256,160),c.fillStyle="#00ff88",c.font="12px monospace",c.fillText("HELIX SECURE",10,20),c.fillStyle="#ffaa00",c.fillText("CAMERAS: "+t.length,10,40),c.fillStyle="#ffffff",c.font="10px monospace",c.fillText("[F] HACK",10,140);const h=new Gi(l),d=new ui({map:h}),u=new Y(s,d);u.position.set(0,.15,.21),o.add(u);const m={id:i,position:e.clone(),controls:t,isHacked:!1,mesh:o};return this.terminals.push(m),m}update(e,t,i){this.alarmLevel!=="normal"&&(this.alarmTimer-=e,this.alarmTimer<=0&&this.setAlarmLevel("normal"));for(const r of this.cameras){if(!r.isActive)continue;r.mesh.rotation.y+=Math.sin(Date.now()*3e-4+r.position.x)*e*.3;const n=t.clone().sub(r.position),o=n.length();if(o<r.range){if(new S(0,0,-1).applyEuler(r.mesh.rotation).angleTo(n.clone().normalize())<r.fov*Math.PI/180*.5&&o*(i?.6:1)<r.range*.8){r.isAlerted=!0;const s=r.mesh.getObjectByName("led");s&&(s.material.color.setHex(16711680),s.material.emissive.setHex(16711680)),r.light&&(r.light.color.setHex(16711680),r.light.intensity=1.2),this.triggerAlarm("alert")}}else if(r.isAlerted&&o>r.range*1.5){r.isAlerted=!1;const s=r.mesh.getObjectByName("led");s&&(s.material.color.setHex(65280),s.material.emissive.setHex(65280)),r.light&&(r.light.color.setHex(4521796),r.light.intensity=.3)}}}hackTerminal(e){const t=this.terminals.find(i=>i.id===e);if(!t||t.isHacked)return!1;t.isHacked=!0,t.mesh.material.emissive.setHex(5111706),t.mesh.material.emissiveIntensity=.5;for(const i of t.controls){const r=this.cameras.find(n=>n.id===i);if(r){r.isActive=!1,r.isAlerted=!1;const n=r.mesh.getObjectByName("led");n&&(n.material.color.setHex(3355443),n.material.emissive.setHex(0)),r.light&&(r.light.intensity=0),r.mesh.traverse(o=>{o.isMesh&&(o.material.transparent=!0,o.material.opacity=.3)})}}return!0}triggerAlarm(e){const t=["normal","suspicious","alert","lockdown","reinforcements"],i=t.indexOf(this.alarmLevel);return t.indexOf(e)>i?(this.alarmLevel=e,this.alarmTimer=e==="alert"?20:e==="lockdown"?40:e==="reinforcements"?60:15,console.log(`[Security] Alarm level: ${e}`),!0):!1}setAlarmLevel(e){this.alarmLevel=e,e==="normal"&&(this.alarmTimer=0)}getAlarmLevel(){return this.alarmLevel}getCameras(){return this.cameras}getTerminals(){return this.terminals}getNearestTerminal(e,t=4){let i=null,r=t;for(const n of this.terminals){const o=n.position.distanceTo(e);o<r&&!n.isHacked&&(r=o,i=n)}return i}}class Ef{constructor(e){C(this,"renderer"),C(this,"input"),C(this,"playerController"),C(this,"cameraSystem"),C(this,"world"),C(this,"playerCharacter"),C(this,"weaponSystem"),C(this,"ui"),C(this,"touchControls"),C(this,"aiDirector"),C(this,"vfxSystem"),C(this,"securitySystem"),C(this,"enemies",[]),C(this,"clock",new Vm),C(this,"isRunning",!1),C(this,"isGameStarted",!1),C(this,"interactables",[]),C(this,"loot",[]),C(this,"raycaster",new Wm),C(this,"lastShootState",!1),C(this,"stealthState","HIDDEN"),C(this,"playerPosHistory",[]),C(this,"timePlayed",0),C(this,"photoMode",!1),C(this,"animate",()=>{if(!this.isRunning)return;requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.033);if(this.timePlayed+=t,this.renderer.beginFrame(),this.isGameStarted&&!this.photoMode){this.playerController.update(t,this.renderer.camera),this.playerCharacter.group.position.copy(this.playerController.position),this.playerCharacter.group.rotation.y=this.playerController.yaw,this.playerCharacter.update(t,this.playerController.moveState,this.playerController.yaw),this.cameraSystem.update(t,this.playerController.getCameraTarget(),this.playerController.yaw,this.playerController.pitch,this.playerController.isAiming,this.playerController.isCrouching),this.weaponSystem.update(t),this.handleShooting(t);const i=this.playerController.getPosition(),r={isCrouching:this.playerController.isCrouching,isSprinting:this.playerController.isSprinting,isShooting:this.lastShootState};for(const o of this.enemies)if(o.update(t,i,this.playerController.velocity,r,this.world.colliders,this.enemies),o.canShoot()){o.onShoot();const s=o.position.distanceTo(i);if(s<o.config.detectionRange&&Math.random()<.65){const l=Math.max(.08,1-s/45);if(Math.random()<l*.32){const c=this.playerController.takeDamage(o.config.damage*.16);this.cameraSystem.addShake(.35,8),this.vfxSystem.spawnImpact(i.clone().add(new S(0,1.2,0)),new S(0,0,1),"flesh"),c&&(this.ui.showNotification("DOWNED — RESTARTING AT SAFEHOUSE",3500),vt.getStats().deaths++,setTimeout(()=>{this.playerController.position.set(-58,.1,15),this.playerController.stats.health=100,this.playerController.stats.armor=30},2e3))}}}this.aiDirector.update(t,i),this.securitySystem.update(t,i,this.playerController.isCrouching),this.vfxSystem.update(t),this.updateLootAnimation(t),this.updateMissions(),this.updateStealthState();const n=this.weaponSystem.getCurrent();this.ui.updateHUD({health:this.playerController.stats.health,armor:this.playerController.stats.armor,ammoCurrent:n?.ammoInMag??0,ammoReserve:n?.reserve??0,weaponName:n?.config.name??"UNARMED",stealth:this.stealthState,fps:this.renderer.getStats().fps,frameTime:this.renderer.getStats().frameTime,quality:We.get("quality").toUpperCase()+(We.get("quality")==="auto"?`:${["LOW","MED","HIGH","ULTRA"][this.renderer.getAdaptiveLevel()]}`:""),interact:this.checkInteractionPrompt(),isAiming:this.playerController.isAiming}),window.dispatchEvent(new CustomEvent("bv:playerPos",{detail:{x:i.x,z:i.z}})),this.playerPosHistory.push(i.clone()),this.playerPosHistory.length>100&&this.playerPosHistory.shift(),nt.setListenerPosition(i,new S(0,0,-1).applyAxisAngle(new S(0,1,0),this.playerController.yaw))}else if(this.photoMode){const i=this.input.consumeLook();i.lengthSq()>0&&(this.renderer.camera.rotation.y-=i.x,this.renderer.camera.rotation.x+=i.y);const r=this.input.state.move;if(r.lengthSq()>0){const n=new S(0,0,-1).applyQuaternion(this.renderer.camera.quaternion),o=new S(1,0,0).applyQuaternion(this.renderer.camera.quaternion);this.renderer.camera.position.addScaledVector(n,r.y*.15),this.renderer.camera.position.addScaledVector(o,r.x*.15)}}this.renderer.render(),this.renderer.endFrame(t),this.input.resetTransient()}),this.canvas=e,this.renderer=new Ym(e),this.input=new $m(e),this.playerController=new Jm(this.input),this.world=new tf(this.renderer.scene),this.playerCharacter=new rf,this.weaponSystem=new nf,this.cameraSystem=new Zm(this.renderer.camera,this.world.colliders),this.ui=new yf,this.touchControls=new bf(this.input),this.aiDirector=new of,this.vfxSystem=new Mf(this.renderer.scene),this.securitySystem=new wf(this.renderer.scene),this.setupEventListeners(),this.initLoading()}setupEventListeners(){window.addEventListener("bv:startGame",e=>{e.detail?.isNew&&(gt.deleteSave(),localStorage.removeItem("bv_achievements"),localStorage.removeItem("bv_stats"),localStorage.removeItem("bv_dialogue_flags")),this.startGame()}),window.addEventListener("bv:requestInventory",()=>{window.dispatchEvent(new CustomEvent("bv:inventoryData",{detail:{weapons:this.weaponSystem.weapons,currentIndex:this.weaponSystem.currentIndex,achievements:vt.getAchievements(),stats:vt.getStats()}}))}),window.addEventListener("bv:equipWeapon",e=>{this.weaponSystem.setWeaponIndex(e.detail.index),this.updateWeaponMesh()}),window.addEventListener("keydown",e=>{this.isGameStarted&&(e.code==="KeyF"&&this.tryInteract(),e.code==="KeyR"&&this.weaponSystem.startReload(),e.code==="KeyP"&&this.togglePhotoMode(),e.code==="KeyT"&&e.ctrlKey&&(e.preventDefault(),ur.startDialogue("intro_kael")))}),document.addEventListener("dblclick",()=>{!document.fullscreenElement&&!this.ui.isInMenu()&&document.documentElement.requestFullscreen().catch(()=>{})}),window.addEventListener("bv:achievement",e=>{const t=e.detail;this.ui.showNotification(`🏆 ${t.title}: ${t.description} (+${t.xpReward} XP)`,4e3),nt.playProceduralSound("ui_click")}),ur.onLine((e,t)=>{e?window.dispatchEvent(new CustomEvent("bv:dialogueLine",{detail:{line:e,choices:t}})):window.dispatchEvent(new CustomEvent("bv:dialogueEnd"))}),window.addEventListener("bv:togglePhoto",()=>this.togglePhotoMode())}async initLoading(){const e=document.getElementById("loading-bar"),t=document.getElementById("loading-status"),i=document.getElementById("loading-screen"),r=document.getElementById("loading-tip"),n=["Veyra went dark three years ago. Power, comms, transport — gone in 17 minutes. Official story: infrastructure failure. The evidence says otherwise.","Helix Corp controlled 73% of Veyra infrastructure before the Blackout. Now they control the ruins.","The Ashen network survives in shadows. They remember what the city forgot.","Sound travels. Your footsteps can betray you. Move slow, stay hidden.","Verticality is survival. Rooftops, maintenance shafts, underground — the city has layers.","Project BLACK VEIL wasn't a failure. It was a test. 17 minutes. Too clean.","Your sister Mara knew. Now she's missing. Level 23, Helix Tower, Server Room Delta.","Security cameras have blind spots. Find the terminals. Hack the grid.","Safehouse at -58, 15 — Ashen turned an apartment into a hub. Weapons, map, missions.","Headshots do 2.2x damage. But sometimes silence is deadlier than bullets."],o=[{id:"textures",label:"LOADING TEXTURES — concrete, metal, fabric PBR + 7 character skins",duration:600},{id:"world",label:"BUILDING VEYRA DISTRICTS — 7 zones, safehouse, security grid",duration:700},{id:"player",label:"INITIALIZING OPERATIVE — tactical rig, parkour, slide, vault",duration:350},{id:"weapons",label:"LOADING ARSENAL — 6 weapons, attachments, VFX",duration:450},{id:"ai",label:"SIMULATING HOSTILES — 6 archetypes, squad AI, director",duration:600},{id:"security",label:"ARMING SECURITY — cameras, terminals, alarm escalation",duration:300},{id:"vfx",label:"CALIBRATING VFX — bullet holes, sparks, dust, decals",duration:250},{id:"audio",label:"CALIBRATING AUDIO — procedural SFX, adaptive music, radio",duration:250},{id:"achievements",label:"LOADING PROGRESSION — achievements, stats, dialogue",duration:200},{id:"mobile",label:"OPTIMIZING MOBILE — touch, gyro, haptics, PWA one-click",duration:300},{id:"final",label:"ENTERING BLACKOUT ZONE — Sector 7 awaits",duration:350}];let s=0;const l=setInterval(()=>{s=(s+1)%n.length,r&&(r.style.opacity="0",setTimeout(()=>{r.textContent=n[s],r.style.opacity="0.7"},300))},3e3);for(const c of o)ga.register(c.id,c.label),t&&(t.textContent=c.label),await new Promise(h=>{let d=0;const u=setInterval(async()=>{d+=.06,c.id==="textures"&&d>.3&&d<.35&&wn.loadAllGenerated().then(()=>console.log("[Game] Textures loaded")),d>=1?(clearInterval(u),ga.complete(c.id),h()):ga.update(c.id,d);const m=ga.getProgress();e&&(e.style.width=`${m*100}%`)},c.duration/18)});clearInterval(l),await wn.loadAllGenerated(),await this.world.buildDistrict(),this.playerController.setColliders(this.world.colliders),this.cameraSystem.setColliders(this.world.colliders),this.renderer.scene.add(this.playerCharacter.group),this.weaponSystem.addWeapon("m9_tactical"),this.weaponSystem.addWeapon("vec_9"),this.updateWeaponMesh(),this.spawnEnemies(),this.setupSecurity(),this.setupInteractables(),setTimeout(()=>{i&&(i.style.opacity="0",setTimeout(()=>i.style.display="none",600)),this.ui.showMenu(),nt.setMusicState("exploration"),localStorage.getItem("bv_launcher_shown")||setTimeout(()=>{this.ui.showNotification("💡 TIP: Use Black-Veil.bat (Windows) or Black-Veil.sh (Linux/Mac) or node launch.mjs for one-click launch",5e3),localStorage.setItem("bv_launcher_shown","1")},1e3)},600)}updateWeaponMesh(){const e=this.playerCharacter.getWeaponSocket();for(;e.children.length;)e.remove(e.children[0]);const t=this.weaponSystem.getCurrent();t&&(t.mesh.position.set(0,0,0),t.mesh.rotation.set(0,0,0),t.config.category==="pistol"?(t.mesh.position.set(.05,-.05,.15),t.mesh.rotation.y=-.1):t.config.category==="smg"||t.config.category==="rifle"?(t.mesh.position.set(.08,-.08,.25),t.mesh.rotation.y=-.05):t.config.category==="sniper"?t.mesh.position.set(.1,-.1,.4):t.config.category==="shotgun"?t.mesh.position.set(.08,-.08,.3):t.config.category==="melee"&&(t.mesh.position.set(.15,-.1,.1),t.mesh.rotation.z=-.5),e.add(t.mesh))}spawnEnemies(){const e=[{x:-8,z:-58,type:"security"},{x:14,z:-52,type:"scout"},{x:-22,z:-22,type:"security"},{x:32,z:-32,type:"heavy"},{x:52,z:-12,type:"security"},{x:62,z:-28,type:"hunter"},{x:-38,z:38,type:"scout"},{x:12,z:52,type:"commander"},{x:2,z:72,type:"sniper"},{x:-18,z:-48,type:"hunter"},{x:48,z:-38,type:"security"},{x:-50,z:-30,type:"scout"}];for(const t of e){const i=lf.find(o=>o.id===t.type),r=new af(i),n=new sf(r,i,new S(t.x,0,t.z));this.enemies.push(n),this.aiDirector.addEnemy(n),this.renderer.scene.add(r.group)}}setupSecurity(){this.securitySystem.addCamera(new S(5,5,55),new Zt(0,Math.PI,0),"cam_corp_1"),this.securitySystem.addCamera(new S(5,8,75),new Zt(-.2,0,0),"cam_corp_2"),this.securitySystem.addCamera(new S(58,5,-8),new Zt(0,-Math.PI/2,0),"cam_ind_1"),this.securitySystem.addCamera(new S(42,5,-18),new Zt(0,Math.PI/2,0),"cam_ind_2"),this.securitySystem.addCamera(new S(0,5,-75),new Zt(0,0,0),"cam_checkpoint"),this.securitySystem.addTerminal(new S(6,0,58),["cam_corp_1","cam_corp_2"],"term_corp"),this.securitySystem.addTerminal(new S(54,0,-6),["cam_ind_1","cam_ind_2"],"term_ind"),this.securitySystem.addTerminal(new S(2,0,-78),["cam_checkpoint"],"term_checkpoint");for(const e of this.securitySystem.getTerminals())this.interactables.push({pos:e.position.clone(),type:"security_terminal",id:e.id,mesh:e.mesh,data:e})}setupInteractables(){const e=(i,r,n,o,s=.6)=>{const l=new fe(.9,1.3,.7),c=new Se({color:n==="terminal"?58879:n==="door"?9071162:n==="safehouse"?16755268:5111706,emissive:n==="terminal"?43775:n==="safehouse"?16755268:0,emissiveIntensity:n==="terminal"||n==="safehouse"?.35:0}),h=new Y(l,c);h.position.set(i,s,r),h.castShadow=!0,this.renderer.scene.add(h),this.interactables.push({pos:new S(i,0,r),type:n,id:o,mesh:h})};e(0,-82,"checkpoint","reach_checkpoint"),e(58,-4,"terminal","restore_power"),e(54,-4,"terminal","restore_power"),e(58,-1,"breaker","restore_power"),e(-38,24,"door","infiltrate_building"),e(-36,26,"loot","recover_logs"),e(-58,15,"safehouse","safehouse_hub",.6);const t=(i,r,n,o=.15)=>{const s=new fe(.55,.35,.45);let l=16755200;n==="intel"&&(l=58879),n==="cache"&&(l=65416),n==="med"&&(l=16731498);const c=new Se({color:l,emissive:l,emissiveIntensity:.25}),h=new Y(s,c);h.position.set(i,o,r),h.castShadow=!0,h.userData.baseY=o,this.renderer.scene.add(h),this.loot.push({pos:new S(i,0,r),type:n,mesh:h})};t(-12,-62,"intel"),t(7,-42,"intel"),t(-28,-18,"intel"),t(42,-18,"ammo"),t(-48,-78,"cache"),t(-56,13,"intel"),t(10,68,"intel"),t(35,-35,"med"),t(-22,-70,"ammo"),t(62,-10,"intel")}startGame(){if(this.isGameStarted){this.isRunning=!0,this.clock.start(),this.animate(),this.touchControls.setVisible(!0),this.ui.showHUD();return}this.isGameStarted=!0,this.isRunning=!0,this.touchControls.setVisible(!0),this.clock.start(),this.animate(),console.log("[Game] Started — BLACK VEIL v1.0.0"),localStorage.getItem("bv_intro_played")||setTimeout(()=>{ur.startDialogue("intro_kael"),localStorage.setItem("bv_intro_played","1")},1500),vt.discoverDistrict("central")}togglePhotoMode(){if(this.photoMode=!this.photoMode,this.photoMode){this.ui.showNotification("📷 PHOTO MODE — Press P to exit, Hide UI, Move camera",3e3);const e=document.querySelector(".bv-hud");e&&(e.style.display="none");const t=document.getElementById("touch-controls");t&&(t.style.display="none")}else{this.ui.showNotification("📷 Photo Mode OFF",2e3);const e=document.querySelector(".bv-hud");e&&(e.style.display="block");const t=document.getElementById("touch-controls");t&&(t.style.display="block"),this.ui.showHUD()}}tryInteract(){const e=this.playerController.getPosition(),t=this.securitySystem.getNearestTerminal(e,4);if(t&&this.securitySystem.hackTerminal(t.id)){nt.playProceduralSound("terminal"),this.ui.showNotification(`SECURITY DISABLED — ${t.controls.length} cameras offline`,3e3),Ct.updateObjective("disable_security"),vt.updateProgress("explorer",1),this.vfxSystem.spawn({type:"spark",position:t.position.clone().add(new S(0,.8,0)),color:65416,scale:1.2,lifetime:.8});return}for(const i of[...this.interactables])if(e.distanceTo(i.pos)<3.2){if(console.log(`[Interact] ${i.type} ${i.id}`),nt.playProceduralSound("terminal"),Ct.updateObjective(i.id),i.type==="safehouse"){const r=this.world.safehouse?.interactWithStation("weapons")||"SAFEHOUSE — Welcome back, operative";this.ui.showNotification(r,3e3),this.playerController.heal(30),gt.save({player:{health:this.playerController.stats.health}}),this.vfxSystem.spawn({type:"dust",position:i.pos.clone().add(new S(0,.5,0)),color:16755302,scale:1.5,lifetime:1});break}if(this.ui.showNotification(`INTERACTED: ${i.type.toUpperCase()}`,2e3),i.type==="terminal"||i.type==="breaker"){const r=i.mesh.material;r.color.setHex(5111706),r.emissive.setHex(5111706),r.emissiveIntensity=.6,this.vfxSystem.spawnMuzzleFlash(i.pos.clone().add(new S(0,.8,0)),new S(0,1,0)),setTimeout(()=>{this.renderer.scene.remove(i.mesh),this.interactables=this.interactables.filter(n=>n!==i)},600)}(i.type==="loot"||i.id==="recover_logs")&&(this.weaponSystem.addWeapon("ar_41"),this.updateWeaponMesh(),gt.save({progression:{currency:150}}),ur.startDialogue("helix_logs"),this.vfxSystem.spawn({type:"impact",position:i.pos.clone(),color:58879,scale:1.5,lifetime:.5}));break}for(const i of[...this.loot])if(e.distanceTo(i.pos)<2.2){this.renderer.scene.remove(i.mesh),this.loot=this.loot.filter(r=>r!==i),this.vfxSystem.spawn({type:"dust",position:i.pos.clone().add(new S(0,.3,0)),color:16755200,scale:1,lifetime:.8}),i.type==="ammo"?(this.weaponSystem.addAmmo("rifle",35),this.ui.showNotification("AMMO +35",2e3)):i.type==="intel"?(Ct.updateObjective("collect_intel"),vt.addIntel(),this.ui.showNotification("INTEL COLLECTED — Truth about Blackout",2500),vt.getStats().intelCollected>=3&&(this.weaponSystem.addWeapon("sg_breach"),this.updateWeaponMesh())):i.type==="cache"?(this.weaponSystem.addWeapon("sr_phantom"),this.updateWeaponMesh(),vt.findHiddenCache(),this.ui.showNotification("🏆 HIDDEN CACHE: PHANTOM SR UNLOCKED + Secret Intel",4e3)):i.type==="med"&&(this.playerController.heal(40),this.ui.showNotification("MEDKIT +40 HP",2e3)),nt.playProceduralSound("ui_click");break}}checkInteractionPrompt(){const e=this.playerController.getPosition(),t=this.securitySystem.getNearestTerminal(e,4);if(t)return`HACK ${t.id.toUpperCase()}`;for(const i of this.interactables)if(e.distanceTo(i.pos)<3.2)return i.type==="safehouse"?"ENTER SAFEHOUSE":i.type.toUpperCase();for(const i of this.loot)if(e.distanceTo(i.pos)<2.2)return`COLLECT ${i.type.toUpperCase()}`;return null}handleShooting(e){const t=this.input.state.fire&&this.weaponSystem.canFire();if(t){const i=this.playerController.getPosition().clone();i.y+=1.45;const r=new S(0,0,-1).applyAxisAngle(new S(0,1,0),this.playerController.yaw);r.y+=this.playerController.pitch*.15;const n=this.weaponSystem.getSpread();r.x+=(Math.random()-.5)*n,r.y+=(Math.random()-.5)*n,r.z+=(Math.random()-.5)*n,r.normalize();const o=this.weaponSystem.fire(i,r);if(o){this.cameraSystem.addShake(o.damage*.006,7),this.vfxSystem.spawnMuzzleFlash(i.clone().add(r.clone().multiplyScalar(.8)),r.clone()),this.raycaster.set(i,r);const s=this.weaponSystem.getCurrent();let l=!1;for(const c of[...this.enemies]){const h=c.character.getPosition(),d=h.clone().sub(i).dot(r);if(d>0&&d<s.config.range){const u=i.clone().add(r.clone().multiplyScalar(d));if(u.distanceTo(h.clone().add(new S(0,1,0)))<.85){const m=h.clone().add(new S(0,1.55,0)),v=u.distanceTo(m)<.35,g=c.character.takeDamage(o.damage,v);this.vfxSystem.spawnImpact(u,r.clone().multiplyScalar(-1),"flesh"),g?(this.renderer.scene.remove(c.character.group),this.aiDirector.removeEnemy(c),this.enemies=this.enemies.filter(f=>f!==c),Ct.updateObjective("defend_position"),vt.addKill(v),this.ui.showNotification(v?"💀 HEADSHOT":"ENEMY DOWN",1500),gt.save({progression:{xp:v?75:50}}),this.vfxSystem.spawn({type:"blood",position:h.clone().add(new S(0,1,0)),color:16720418,scale:1.5,lifetime:.8})):this.ui.showNotification(v?"HEADSHOT!":"HIT",600),l=!0;break}}}if(!l){i.clone().add(r.clone().multiplyScalar(s.config.range*.6));for(const c of this.world.colliders){const h=c.getCenter(new S),d=h.clone().sub(i).dot(r);if(d>0&&d<s.config.range){const u=i.clone().add(r.clone().multiplyScalar(d));if(c.containsPoint(u)){const m=u.clone().sub(h).normalize();this.vfxSystem.spawnImpact(u,m,"concrete"),l=!0;break}}}if(!l){const c=i.clone().add(r.clone().multiplyScalar(12));this.vfxSystem.spawn({type:"dust",position:c,color:6710886,scale:.5,lifetime:.4})}}}}if(this.input.state.reload&&this.weaponSystem.startReload()&&this.ui.showNotification("RELOADING...",1e3),this.input.state.switchWeapon!==0){this.weaponSystem.switchWeapon(this.input.state.switchWeapon),this.updateWeaponMesh();const i=this.weaponSystem.getCurrent();i&&this.ui.showNotification(`EQUIPPED: ${i.config.name}`,1500)}this.lastShootState=t}updateStealthState(){const e=this.aiDirector.getCombatCount(),t=this.enemies.length>0?Math.max(0,...this.enemies.map(n=>n.getDetectionLevel())):0,i=this.securitySystem.getAlarmLevel();let r="HIDDEN";e>0||i==="reinforcements"||i==="lockdown"?r="COMBAT":t>.7||i==="alert"?r="DETECTED":t>.3||i==="suspicious"?r="SUSPICIOUS":r="HIDDEN",r!==this.stealthState&&(this.stealthState=r,r==="COMBAT"?nt.setMusicState("combat"):r==="DETECTED"?nt.setMusicState("tension"):r==="SUSPICIOUS"?nt.setMusicState("stealth"):nt.setMusicState("exploration"))}updateMissions(){const e=this.playerController.getPosition(),t=Ct.getObjectiveByPos({x:e.x,y:e.y,z:e.z},5.5);if(t){Ct.updateObjective(t.id),this.ui.showNotification(`OBJECTIVE: ${t.title}`,2500);const i=this.world.getDistrictAt(e);i&&vt.discoverDistrict(i.id)}}updateLootAnimation(e){const t=performance.now()*.001;for(const i of this.loot)i.mesh.position.y=i.mesh.userData.baseY+Math.sin(t*2+i.pos.x)*.15,i.mesh.rotation.y+=e*.8}dispose(){this.isRunning=!1,this.renderer.dispose(),this.world.dispose(),this.vfxSystem.clear()}}const pn={kael:{id:"kael",name:"Kael",nameAr:"كايل",faction:"ASHEN",role:"Ashen Operative, Mara's brother",roleAr:"عميل آشن، أخو مارا",personality:"Gruff, tired, survivor guilt, protective, distrusts Helix, smokes, coughs",personalityAr:"خشن، متعب، ذنب الناجي، حمائي، لا يثق بهيليكس",voice:{pitch:.8,rate:.88,lang:"en-US",style:"Gruff, low, tired, slight cough, survivor accent",styleAr:"خشن، منخفض، متعب، سعال خفيف",emotion:"weary but hopeful"},backstory:"Ex-Helix security who joined Ashen after Blackout. Mara's brother. Knows Tower layout. Lost leg, prosthetic. Blames himself for Mara missing.",backstoryAr:"أمن هيليكس سابق انضم لآشن بعد الانقطاع. أخو مارا. يعرف مخطط البرج. فقد ساقه.",speaks:["en","ar"],isAlive:!0,relationship:10,skin:"scout",iconSvg:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'},mara:{id:"mara",name:"Mara",nameAr:"مارا",faction:"NONE",role:"Investigative Journalist, Kael's sister",roleAr:"صحفية استقصائية، أخت كايل",personality:"Young, determined, idealistic, glitchy recordings, brave, curious, leaves puzzles",personalityAr:"شابة، مصممة، مثالية، تسجيلات متقطعة، شجاعة، فضولية",voice:{pitch:1.25,rate:1.05,lang:"en-US",style:"Young female, determined, glitchy, static, echo, recorded",styleAr:"شابة، مصممة، متقطعة، صدى، مسجلة",emotion:"determined but scared"},backstory:"Journalist who uncovered BLACK VEIL. Infiltrated Helix Tower Level 23 Server Room Delta. Missing 3 months. Leaves audio logs. Knows truth about population extraction.",backstoryAr:"صحفية كشفت الحجاب الأسود. تسللت للمستوى 23. مفقودة 3 أشهر. تترك سجلات صوتية.",speaks:["en","ar","fr"],isAlive:!1,relationship:30,skin:"player",iconSvg:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>'},helix_commander:{id:"helix_commander",name:"Director Kline",nameAr:"المدير كلاين",faction:"HELIX",role:"Helix Corp Director, BLACK VEIL architect",roleAr:"مدير هيليكس، مهندس الحجاب الأسود",personality:"Cold, corporate, logical, believes ends justify means, 0.3M optimal, no empathy, precise",personalityAr:"بارد، شركاتي، منطقي، يعتقد الغاية تبرر الوسيلة، 0.3 مليون مثالي",voice:{pitch:.65,rate:.82,lang:"en-US",style:"Cold corporate, low, precise, no emotion, filtered, authoritative",styleAr:"بارد شركاتي، منخفض، دقيق، بلا عاطفة، مفلتر، سلطوي",emotion:"cold, calculating"},backstory:"Architect of BLACK VEIL. Ordered 17-minute blackout. Population 2.1M to 0.3M extraction. Believes city is experiment. Has daughter in 0.3M.",backstoryAr:"مهندس الحجاب الأسود. أمر بانقطاع 17 دقيقة. السكان 2.1 مليون إلى 0.3 مليون استخراج.",speaks:["en","de"],isAlive:!0,relationship:-50,skin:"commander",iconSvg:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'},ashen_leader:{id:"ashen_leader",name:"Rami",nameAr:"رامي",faction:"ASHEN",role:"Ashen Leader, Safehouse keeper",roleAr:"قائد آشن، حارس الملجأ",personality:"Warm, Egyptian accent, wise, father figure, jokes, makes tea, remembers old Veyra",personalityAr:"دافئ، لهجة مصرية، حكيم، أب، يمزح، يعمل شاي، يتذكر فيرا القديمة",voice:{pitch:.95,rate:.92,lang:"ar-EG",style:"Warm Egyptian Arabic, wise, fatherly, slight laugh, tea sipping",styleAr:"دافئ مصري، حكيم، أبوي، ضحكة خفيفة",emotion:"warm, hopeful, tired"},backstory:"Old Veyra resident, 68. Runs safehouse at -58,15. Ex-teacher. Lost family in Blackout. Keeps Ashen together. Makes best tea in Sector 7.",backstoryAr:"ساكن فيرا قديم، 68 سنة. يدير الملجأ. مدرس سابق. فقد عائلته في الانقطاع.",speaks:["ar","en","ar-EG"],isAlive:!0,relationship:40,skin:"security",iconSvg:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'},veil_specter:{id:"veil_specter",name:"Veil",nameAr:"الحجاب",faction:"VEIL",role:"Unknown entity, maybe AI, maybe ghost",roleAr:"كيان مجهول، ربما ذكاء اصطناعي، ربما شبح",personality:"Ethereal, whisper, echo, speaks in riddles, knows future, glitchy, appears/disappears",personalityAr:"أثيري، همس، صدى، يتحدث بالألغاز، يعرف المستقبل، متقطع",voice:{pitch:1.5,rate:.65,lang:"en-US",style:"Ethereal female, whisper, echo, reverb, glitch, multiple voices",styleAr:"أثيري أنثوي، همس، صدى، تردد، خلل، أصوات متعددة",emotion:"mysterious, sad, knowing"},backstory:"Unknown. Appears in cameras, mirrors. Maybe Mara? Maybe BLACK VEIL AI? Knows each player different future. Speaks in riddles.",backstoryAr:"مجهول. يظهر في الكاميرات والمرايا. ربما مارا؟ ربما ذكاء الحجاب؟",speaks:["en","ar","ja","ru"],isAlive:!0,relationship:0,skin:"sniper",iconSvg:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>'},vanguard_heavy:{id:"vanguard_heavy",name:"Vanguard",nameAr:"فانجارد",faction:"VANGUARD",role:"Vanguard Heavy, ex-military",roleAr:"فانجارد ثقيل، عسكري سابق",personality:"Heavy, mechanical, filtered voice, follows orders, respects strength, hates Helix",personalityAr:"ثقيل، ميكانيكي، صوت مفلتر، يتبع الأوامر، يحترم القوة، يكره هيليكس",voice:{pitch:.55,rate:.78,lang:"en-US",style:"Heavy male, mechanical filter, low, slow, helmet mic",styleAr:"ثقيل ذكوري، فلتر ميكانيكي، منخفض، بطيء، ميكروفون خوذة",emotion:"stoic, loyal, angry at Helix"},backstory:"Ex-military, joined Vanguard after Blackout. Lost squad. Heavy armor. Hates Helix for abandoning soldiers. Respects player if strong.",backstoryAr:"عسكري سابق، انضم لفانجارد بعد الانقطاع. فقد فرقته. درع ثقيل. يكره هيليكس.",speaks:["en","ru"],isAlive:!0,relationship:-10,skin:"heavy",iconSvg:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'},player:{id:"player",name:"Operative",nameAr:"العميل",faction:"NONE",role:"Player, Mara's contact, truth seeker",roleAr:"اللاعب، جهة اتصال مارا، باحث عن الحقيقة",personality:"Determined by player choices, branching",personalityAr:"مصمم حسب اختيارات اللاعب، متفرع",voice:{pitch:1,rate:1,lang:"en-US",style:"Player voice, determined by player",styleAr:"صوت اللاعب، محدد حسب اللاعب",emotion:"determined"},backstory:"You. Contacted by Mara 3 months ago. Now she missing. You enter Veyra to find truth. Each player different background, different truth.",backstoryAr:"أنت. اتصلت بك مارا قبل 3 أشهر. الآن هي مفقودة. تدخل فيرا لتجد الحقيقة.",speaks:["en","ar","fr","es","de","ru","ja","zh"],isAlive:!0,relationship:100,skin:"player",iconSvg:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'}},wo={ch1_intro:{id:"ch1_intro",title:"Chapter 1: Ghosts",titleAr:"الفصل 1: أشباح",description:"Veyra went dark 3 years ago. Your sister Mara is missing. Kael contacts you.",descriptionAr:"أظلمت فيرا قبل 3 سنوات. أختك مارا مفقودة. كايل يتصل بك.",characters:["kael","mara"],choices:[{id:"kael_trust",text:"Trust Kael",textAr:"ثق في كايل",consequence:"Kael shows safehouse, +20 Ashen rep",consequenceAr:"كايل يريك الملجأ، +20 سمعة آشن",nextChapter:"ch1_ashen_path",relationshipChange:{kael:20,ashen_leader:10,helix_commander:-5,mara:5,veil_specter:0,vanguard_heavy:0,player:0},unlocks:["safehouse","ashen_weapons"],iconSvg:'<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M20 8v6M23 11v2M17 11v2"/>'},{id:"kael_doubt",text:"Doubt Kael",textAr:"اشك في كايل",consequence:"Go solo, find own path, +10 stealth",consequenceAr:"اذهب منفرداً، +10 تخفي",nextChapter:"ch1_solo_path",relationshipChange:{kael:-15,ashen_leader:-5,helix_commander:0,mara:0,veil_specter:5,vanguard_heavy:0,player:0},unlocks:["solo_weapons","stealth_bonus"],iconSvg:'<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>'}],isBranching:!0,isUniquePerPlayer:!0},ch1_ashen_path:{id:"ch1_ashen_path",title:"Ashen Path",titleAr:"مسار آشن",description:"Kael takes you to safehouse at -58,15. Rami offers tea and truth.",descriptionAr:"كايل يأخذك للملجأ. رامي يقدم الشاي والحقيقة.",characters:["kael","ashen_leader","mara"],choices:[{id:"faction_trust",text:"Trust Ashen",textAr:"ثق في آشن",consequence:"Learn underground routes, unlock Ashen skins",consequenceAr:"تعلم الطرق السرية، افتح سكنات آشن",nextChapter:"ch2_underground",relationshipChange:{kael:10,ashen_leader:20,helix_commander:-10,mara:10,veil_specter:0,vanguard_heavy:5,player:0},unlocks:["underground_map","ashen_skins"],iconSvg:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'},{id:"faction_helix",text:"Infiltrate Helix",textAr:"تسلل لهيليكس",consequence:"Direct assault on Tower, high risk",consequenceAr:"هجوم مباشر على البرج، مخاطرة عالية",nextChapter:"ch2_helix_tower",relationshipChange:{kael:-5,ashen_leader:-10,helix_commander:5,mara:0,veil_specter:0,vanguard_heavy:-5,player:0},unlocks:["helix_keycard","tower_access"],iconSvg:'<rect x="2" y="7" width="20" height="14" rx="2"/>'}],isBranching:!0,isUniquePerPlayer:!0}};class Tf{constructor(){C(this,"currentChapter","ch1_intro"),C(this,"playerChoices",{}),C(this,"playerId"),C(this,"language","en"),this.playerId=localStorage.getItem("bv_player_id")||"player_"+Math.random().toString(36).substr(2,9),localStorage.setItem("bv_player_id",this.playerId),this.playerChoices=JSON.parse(localStorage.getItem("bv_story_choices")||"{}"),this.language=localStorage.getItem("bv_language")||"en"}getCurrentChapter(){return wo[this.currentChapter]||wo.ch1_intro}makeChoice(e,t){this.playerChoices[e]=t,localStorage.setItem("bv_story_choices",JSON.stringify(this.playerChoices));const i=this.getCurrentChapter().choices.find(r=>r.id===e||r.text===t);if(i){Object.entries(i.relationshipChange).forEach(([n,o])=>{const s=pn[n];s&&(s.relationship=Math.max(-100,Math.min(100,s.relationship+o)))});const r=this.getUniqueNextChapter(i.nextChapter,this.playerId);return this.currentChapter=r,localStorage.setItem("bv_current_chapter",this.currentChapter),console.log(`[Story] Player ${this.playerId} choice ${e}=${t} -> ${r} (unique)`),this.getCurrentChapter()}return null}getUniqueNextChapter(e,t){const i=this.hashString(t+e),r=[e,e+"_alt",e+"_secret"];return Math.abs(i)%10<8?e:r[Math.abs(i)%r.length]||e}hashString(e){let t=0;for(let i=0;i<e.length;i++){const r=e.charCodeAt(i);t=(t<<5)-t+r,t=t&t}return t}getCharacter(e){return pn[e]}getAllCharacters(){return Object.values(pn)}getPlayerChoices(){return{...this.playerChoices}}getUniqueStoryForPlayer(e){const t=this.playerChoices,i=this.hashString(e+JSON.stringify(t)),r=[{title:"The Truth Seeker",desc:"You chose truth over safety",unique:!0},{title:"The Survivor",desc:"You chose survival over truth",unique:!0},{title:"The Ghost",desc:"You walk unseen, like Veil",unique:!0},{title:"The Ashen",desc:"You became Ashen, family",unique:!1}];return{title:r[Math.abs(i)%r.length].title,description:r[Math.abs(i)%r.length].desc,isUnique:r[Math.abs(i)%r.length].unique}}setLanguage(e){this.language=e,localStorage.setItem("bv_language",e)}getLanguage(){return this.language}}const Eo=new Tf;console.log("%c BLACK VEIL v1.2.0 — MULTIPLAYER + AI + STORY ","background:#0a0a0f; color:#6aa6ff; font-size:18px; font-family:monospace; padding:8px 16px; border:1px solid #6aa6ff;");console.log("%c THE CITY FORGOT. YOU DIDN'T. — One-tap mobile, P2P multiplayer, 6 modes, free AI unlimited, each player unique story ","color:#8a8a9a; font-family:monospace;");function To(){const a=document.getElementById("game-canvas");if(!a){console.error("Canvas not found");return}const e={webgl:(()=>{try{const r=document.createElement("canvas");return!!window.WebGL2RenderingContext&&!!r.getContext("webgl2")}catch{return!1}})(),webgpu:"gpu"in navigator,touch:"ontouchstart"in window,storage:(()=>{try{return localStorage.setItem("test","1"),localStorage.removeItem("test"),!0}catch{return!1}})(),fullscreen:!!document.documentElement.requestFullscreen,gamepad:"getGamepads"in navigator,gyro:"DeviceOrientationEvent"in window,webrtc:"RTCPeerConnection"in window,webspeech:"speechSynthesis"in window,vibrate:"vibrate"in navigator,battery:"getBattery"in navigator};if(console.log("[Capabilities]",e),console.log("[AI] Free unlimited models:",pr.getUnlimitedModels().length),console.log("[Multiplayer] P2P supported:",e.webrtc),console.log("[Story] Current chapter:",Eo.getCurrentChapter().id,"Player ID:",localStorage.getItem("bv_player_id")),console.log("[GameModes] Available:",zi.getAllModes().length),!e.webgl){const r=document.getElementById("loading-status");r&&(r.textContent="WEBGL2 NOT SUPPORTED - PLEASE USE MODERN BROWSER");return}document.addEventListener("contextmenu",r=>r.preventDefault()),document.addEventListener("touchmove",r=>{r.target.closest("#ui-root, #touch-controls, #multiplayer-ui")||r.preventDefault()},{passive:!1}),document.addEventListener("visibilitychange",()=>{document.hidden&&console.log("[Game] Hidden - pausing")});const t=()=>{const r=document.getElementById("orientation-warning");r&&(window.innerHeight>window.innerWidth&&window.innerWidth<768||(r.style.display="none"))};window.addEventListener("resize",t),t();const i=new Ef(a);window.BLACK_VEIL=i,window.BV_SAVE=gt,window.BV_MULTIPLAYER=qt,window.BV_AI=pr,window.BV_STORY=Eo,window.BV_MODES=zi,"serviceWorker"in navigator&&(navigator.serviceWorker.addEventListener("message",r=>{r.data.type==="UPDATE_AVAILABLE"&&console.log("[PWA] Update available")}),navigator.serviceWorker.register("./sw.js").then(r=>{console.log("[PWA] SW registered",r.scope)}).catch(r=>console.log("[PWA] SW failed",r))),qt.onPlayerUpdate(r=>{console.log("[Multiplayer] Players updated:",r.length),window.dispatchEvent(new CustomEvent("bv:multiplayerPlayers",{detail:r}))}),qt.onRoomUpdate(r=>{console.log("[Multiplayer] Room updated:",r.id),window.dispatchEvent(new CustomEvent("bv:multiplayerRoom",{detail:r}))}),setTimeout(()=>{window.dispatchEvent(new CustomEvent("bv:gameReady"))},100),window.addEventListener("error",r=>{console.error("[Global Error]",r.error)}),window.addEventListener("unhandledrejection",r=>{console.error("[Unhandled Rejection]",r.reason)}),(location.hostname.includes("wasmer.app")||location.hostname.includes("wasmer"))&&console.log("[Wasmer] Running on Wasmer Edge - static site mode, P2P multiplayer via WebRTC"),/Android|iPhone|iPad/i.test(navigator.userAgent)&&(console.log("[Mobile] One-tap mobile detected - touch + gyro + haptics + PWA"),document.addEventListener("touchend",()=>{try{document.documentElement.requestFullscreen?.()}catch{}},{once:!0})),console.log("[Black Veil] Initialized v1.2.0 - Awaiting player - Multiplayer + AI + Story unique per player")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",To):To();
