import{j as K,$ as Gl,_ as $i,b as Zn,M as Kl,c as gi}from"./index-BFfEtNw2.js";const Wl=()=>K.jsx(K.Fragment,{children:K.jsx("div",{children:K.jsx("div",{className:"absolute top-0 right-0 bottom-0 left-0 m-auto h-screen z-50 bg-indigo-300 bg-opacity-10 flex items-center justify-center",children:K.jsx("div",{children:K.jsx(Gl,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})})})});var po={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ql=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],c=n[t++],u=n[t++],h=((s&7)<<18|(o&63)<<12|(c&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],c=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|c&63)}}return e.join("")},ma={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],c=s+1<n.length,u=c?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,y=o>>2,A=(o&3)<<4|u>>4;let P=(u&15)<<2|f>>6,C=f&63;h||(C=64,c||(P=64)),r.push(t[y],t[A],t[P],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ga(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ql(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const A=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||u==null||f==null||A==null)throw new Jl;const P=o<<2|u>>4;if(r.push(P),f!==64){const C=u<<4&240|f>>2;if(r.push(C),A!==64){const k=f<<6&192|A;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xl=function(n){const e=ga(n);return ma.encodeByteArray(e,!0)},fr=function(n){return Xl(n).replace(/\./g,"")},_a=function(n){try{return ma.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=()=>Yl().__FIREBASE_DEFAULTS__,eu=()=>{if(typeof process>"u"||typeof po>"u")return;const n=po.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_a(n[1]);return e&&JSON.parse(e)},Dr=()=>{try{return Zl()||eu()||tu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ya=n=>{var e,t;return(t=(e=Dr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},nu=n=>{const e=ya(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},va=()=>{var n;return(n=Dr())===null||n===void 0?void 0:n.config},Ea=n=>{var e;return(e=Dr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fr(JSON.stringify(t)),fr(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function su(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function ou(){var n;const e=(n=Dr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function au(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lu(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function uu(){return!ou()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hu(){try{return typeof indexedDB=="object"}catch{return!1}}function du(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="FirebaseError";class He extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=fu,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rn.prototype.create)}}class Rn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],c=o?pu(o,r):"Error",u=`${this.serviceName}: ${c} (${s}).`;return new He(s,u,r)}}function pu(n,e){return n.replace(gu,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gu=/\{\$([^}]+)}/g;function mu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],c=e[s];if(go(o)&&go(c)){if(!pr(o,c))return!1}else if(o!==c)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function go(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _u(n,e){const t=new yu(n,e);return t.subscribe.bind(t)}class yu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");vu(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=mi),s.error===void 0&&(s.error=mi),s.complete===void 0&&(s.complete=mi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function mi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n){return n&&n._delegate?n._delegate:n}class gt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ru;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tu(e))try{this.getOrInitializeService({instanceIdentifier:ht})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ht){return this.instances.has(e)}getOptions(e=ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&c.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&e(c,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Iu(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ht){return this.component?this.component.multipleInstances?e:ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iu(n){return n===ht?void 0:n}function Tu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Eu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const Au={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Ru=x.INFO,Pu={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Su=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Pu[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hi{constructor(e){this.name=e,this._logLevel=Ru,this._logHandler=Su,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Au[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const bu=(n,e)=>e.some(t=>n instanceof t);let mo,_o;function Cu(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ku(){return _o||(_o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ia=new WeakMap,Pi=new WeakMap,Ta=new WeakMap,_i=new WeakMap,qi=new WeakMap;function Du(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{t(Ze(n.result)),s()},c=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Ia.set(t,n)}).catch(()=>{}),qi.set(e,n),e}function Nu(n){if(Pi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{t(),s()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});Pi.set(n,e)}let Si={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Pi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ta.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ze(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ou(n){Si=n(Si)}function Vu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(yi(this),e,...t);return Ta.set(r,e.sort?e.sort():[e]),Ze(r)}:ku().includes(n)?function(...e){return n.apply(yi(this),e),Ze(Ia.get(this))}:function(...e){return Ze(n.apply(yi(this),e))}}function Mu(n){return typeof n=="function"?Vu(n):(n instanceof IDBTransaction&&Nu(n),bu(n,Cu())?new Proxy(n,Si):n)}function Ze(n){if(n instanceof IDBRequest)return Du(n);if(_i.has(n))return _i.get(n);const e=Mu(n);return e!==n&&(_i.set(n,e),qi.set(e,n)),e}const yi=n=>qi.get(n);function Lu(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const c=indexedDB.open(n,e),u=Ze(c);return r&&c.addEventListener("upgradeneeded",h=>{r(Ze(c.result),h.oldVersion,h.newVersion,Ze(c.transaction),h)}),t&&c.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const xu=["get","getKey","getAll","getAllKeys","count"],Uu=["put","add","delete","clear"],vi=new Map;function yo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vi.get(e))return vi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Uu.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xu.includes(t)))return;const o=async function(c,...u){const h=this.transaction(c,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),s&&h.done]))[0]};return vi.set(e,o),o}Ou(n=>({...n,get:(e,t,r)=>yo(e,t)||n.get(e,t,r),has:(e,t)=>!!yo(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ju(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ju(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bi="@firebase/app",vo="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Hi("@firebase/app"),Bu="@firebase/app-compat",$u="@firebase/analytics-compat",Hu="@firebase/analytics",qu="@firebase/app-check-compat",zu="@firebase/app-check",Gu="@firebase/auth",Ku="@firebase/auth-compat",Wu="@firebase/database",Qu="@firebase/database-compat",Ju="@firebase/functions",Xu="@firebase/functions-compat",Yu="@firebase/installations",Zu="@firebase/installations-compat",eh="@firebase/messaging",th="@firebase/messaging-compat",nh="@firebase/performance",rh="@firebase/performance-compat",ih="@firebase/remote-config",sh="@firebase/remote-config-compat",oh="@firebase/storage",ah="@firebase/storage-compat",ch="@firebase/firestore",lh="@firebase/vertexai-preview",uh="@firebase/firestore-compat",hh="firebase",dh="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="[DEFAULT]",fh={[bi]:"fire-core",[Bu]:"fire-core-compat",[Hu]:"fire-analytics",[$u]:"fire-analytics-compat",[zu]:"fire-app-check",[qu]:"fire-app-check-compat",[Gu]:"fire-auth",[Ku]:"fire-auth-compat",[Wu]:"fire-rtdb",[Qu]:"fire-rtdb-compat",[Ju]:"fire-fn",[Xu]:"fire-fn-compat",[Yu]:"fire-iid",[Zu]:"fire-iid-compat",[eh]:"fire-fcm",[th]:"fire-fcm-compat",[nh]:"fire-perf",[rh]:"fire-perf-compat",[ih]:"fire-rc",[sh]:"fire-rc-compat",[oh]:"fire-gcs",[ah]:"fire-gcs-compat",[ch]:"fire-fst",[uh]:"fire-fst-compat",[lh]:"fire-vertex","fire-js":"fire-js",[hh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map,ph=new Map,ki=new Map;function Eo(n,e){try{n.container.addComponent(e)}catch(t){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Vt(n){const e=n.name;if(ki.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;ki.set(e,n);for(const t of gr.values())Eo(t,n);for(const t of ph.values())Eo(t,n);return!0}function zi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ve(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},et=new Rn("app","Firebase",gh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw et.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=dh;function wa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ci,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw et.create("bad-app-name",{appName:String(s)});if(t||(t=va()),!t)throw et.create("no-options");const o=gr.get(s);if(o){if(pr(t,o.options)&&pr(r,o.config))return o;throw et.create("duplicate-app",{appName:s})}const c=new wu(s);for(const h of ki.values())c.addComponent(h);const u=new mh(t,r,c);return gr.set(s,u),u}function Aa(n=Ci){const e=gr.get(n);if(!e&&n===Ci&&va())return wa();if(!e)throw et.create("no-app",{appName:n});return e}function tt(n,e,t){var r;let s=(r=fh[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const u=[`Unable to register library "${s}" with version "${e}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&u.push("and"),c&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(u.join(" "));return}Vt(new gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="firebase-heartbeat-database",yh=1,_n="firebase-heartbeat-store";let Ei=null;function Ra(){return Ei||(Ei=Lu(_h,yh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_n)}catch(t){console.warn(t)}}}}).catch(n=>{throw et.create("idb-open",{originalErrorMessage:n.message})})),Ei}async function vh(n){try{const t=(await Ra()).transaction(_n),r=await t.objectStore(_n).get(Pa(n));return await t.done,r}catch(e){if(e instanceof He)mt.warn(e.message);else{const t=et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mt.warn(t.message)}}}async function Io(n,e){try{const r=(await Ra()).transaction(_n,"readwrite");await r.objectStore(_n).put(e,Pa(n)),await r.done}catch(t){if(t instanceof He)mt.warn(t.message);else{const r=et.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mt.warn(r.message)}}}function Pa(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=1024,Ih=30*24*60*60*1e3;class Th{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ah(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=To();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const u=new Date(c.date).valueOf();return Date.now()-u<=Ih}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=To(),{heartbeatsToSend:r,unsentEntries:s}=wh(this._heartbeatsCache.heartbeats),o=fr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function To(){return new Date().toISOString().substring(0,10)}function wh(n,e=Eh){const t=[];let r=n.slice();for(const s of n){const o=t.find(c=>c.agent===s.agent);if(o){if(o.dates.push(s.date),wo(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wo(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ah{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hu()?du().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Io(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wo(n){return fr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(n){Vt(new gt("platform-logger",e=>new Fu(e),"PRIVATE")),Vt(new gt("heartbeat",e=>new Th(e),"PRIVATE")),tt(bi,vo,n),tt(bi,vo,"esm2017"),tt("fire-js","")}Rh("");var Ph="firebase",Sh="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(Ph,Sh,"app");var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function m(){}m.prototype=p.prototype,E.D=p.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(_,v,T){for(var g=Array(arguments.length-2),De=2;De<arguments.length;De++)g[De-2]=arguments[De];return p.prototype[v].apply(_,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,m){m||(m=0);var _=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)_[v]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(v=0;16>v;++v)_[v]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=E.g[0],m=E.g[1],v=E.g[2];var T=E.g[3],g=p+(T^m&(v^T))+_[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+_[1]+3905402710&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+_[2]+606105819&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+_[3]+3250441966&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(T^m&(v^T))+_[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+_[5]+1200080426&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+_[6]+2821735955&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+_[7]+4249261313&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(T^m&(v^T))+_[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+_[9]+2336552879&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+_[10]+4294925233&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+_[11]+2304563134&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(T^m&(v^T))+_[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+_[13]+4254626195&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+_[14]+2792965006&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+_[15]+1236535329&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(v^T&(m^v))+_[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+_[6]+3225465664&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+_[11]+643717713&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+_[0]+3921069994&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(m^v))+_[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+_[10]+38016083&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+_[15]+3634488961&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+_[4]+3889429448&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(m^v))+_[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+_[14]+3275163606&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+_[3]+4107603335&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+_[8]+1163531501&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(m^v))+_[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+_[2]+4243563512&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+_[7]+1735328473&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+_[12]+2368359562&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(m^v^T)+_[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+_[8]+2272392833&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+_[11]+1839030562&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+_[14]+4259657740&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^T)+_[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+_[4]+1272893353&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+_[7]+4139469664&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+_[10]+3200236656&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^T)+_[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+_[0]+3936430074&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+_[3]+3572445317&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+_[6]+76029189&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^T)+_[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+_[12]+3873151461&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+_[15]+530742520&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+_[2]+3299628645&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(v^(m|~T))+_[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+_[7]+1126891415&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+_[14]+2878612391&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+_[5]+4237533241&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~T))+_[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+_[3]+2399980690&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+_[10]+4293915773&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+_[1]+2240044497&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~T))+_[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+_[15]+4264355552&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+_[6]+2734768916&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+_[13]+1309151649&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~T))+_[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+_[11]+3174756917&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+_[2]+718787259&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+T&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var m=p-this.blockSize,_=this.B,v=this.h,T=0;T<p;){if(v==0)for(;T<=m;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<p;)if(_[v++]=E.charCodeAt(T++),v==this.blockSize){s(this,_),v=0;break}}else for(;T<p;)if(_[v++]=E[T++],v==this.blockSize){s(this,_),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var m=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=m&255,m/=256;for(this.u(E),E=Array(16),p=m=0;4>p;++p)for(var _=0;32>_;_+=8)E[m++]=this.g[p]>>>_&255;return E};function o(E,p){var m=u;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=p(E)}function c(E,p){this.h=p;for(var m=[],_=!0,v=E.length-1;0<=v;v--){var T=E[v]|0;_&&T==p||(m[v]=T,_=!1)}this.g=m}var u={};function h(E){return-128<=E&&128>E?o(E,function(p){return new c([p|0],0>p?-1:0)}):new c([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return N(f(-E));for(var p=[],m=1,_=0;E>=m;_++)p[_]=E/m|0,m*=4294967296;return new c(p,0)}function y(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return N(y(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),_=A,v=0;v<E.length;v+=8){var T=Math.min(8,E.length-v),g=parseInt(E.substring(v,v+T),p);8>T?(T=f(Math.pow(p,T)),_=_.j(T).add(f(g))):(_=_.j(m),_=_.add(f(g)))}return _}var A=h(0),P=h(1),C=h(16777216);n=c.prototype,n.m=function(){if(L(this))return-N(this).m();for(var E=0,p=1,m=0;m<this.g.length;m++){var _=this.i(m);E+=(0<=_?_:4294967296+_)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(L(this))return"-"+N(this).toString(E);for(var p=f(Math.pow(E,6)),m=this,_="";;){var v=Z(m,p).g;m=q(m,v.j(p));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=v,k(m))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function L(E){return E.h==-1}n.l=function(E){return E=q(this,E),L(E)?-1:k(E)?0:1};function N(E){for(var p=E.g.length,m=[],_=0;_<p;_++)m[_]=~E.g[_];return new c(m,~E.h).add(P)}n.abs=function(){return L(this)?N(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],_=0,v=0;v<=p;v++){var T=_+(this.i(v)&65535)+(E.i(v)&65535),g=(T>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);_=g>>>16,T&=65535,g&=65535,m[v]=g<<16|T}return new c(m,m[m.length-1]&-2147483648?-1:0)};function q(E,p){return E.add(N(p))}n.j=function(E){if(k(this)||k(E))return A;if(L(this))return L(E)?N(this).j(N(E)):N(N(this).j(E));if(L(E))return N(this.j(N(E)));if(0>this.l(C)&&0>E.l(C))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,m=[],_=0;_<2*p;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var v=0;v<E.g.length;v++){var T=this.i(_)>>>16,g=this.i(_)&65535,De=E.i(v)>>>16,qt=E.i(v)&65535;m[2*_+2*v]+=g*qt,$(m,2*_+2*v),m[2*_+2*v+1]+=T*qt,$(m,2*_+2*v+1),m[2*_+2*v+1]+=g*De,$(m,2*_+2*v+1),m[2*_+2*v+2]+=T*De,$(m,2*_+2*v+2)}for(_=0;_<p;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=p;_<2*p;_++)m[_]=0;return new c(m,0)};function $(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function z(E,p){this.g=E,this.h=p}function Z(E,p){if(k(p))throw Error("division by zero");if(k(E))return new z(A,A);if(L(E))return p=Z(N(E),p),new z(N(p.g),N(p.h));if(L(p))return p=Z(E,N(p)),new z(N(p.g),p.h);if(30<E.g.length){if(L(E)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var m=P,_=p;0>=_.l(E);)m=Se(m),_=Se(_);var v=te(m,1),T=te(_,1);for(_=te(_,2),m=te(m,2);!k(_);){var g=T.add(_);0>=g.l(E)&&(v=v.add(m),T=g),_=te(_,1),m=te(m,1)}return p=q(E,v.j(p)),new z(v,p)}for(v=A;0<=E.l(p);){for(m=Math.max(1,Math.floor(E.m()/p.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=f(m),g=T.j(p);L(g)||0<g.l(E);)m-=_,T=f(m),g=T.j(p);k(T)&&(T=P),v=v.add(T),E=q(E,g)}return new z(v,E)}n.A=function(E){return Z(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)&E.i(_);return new c(m,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)|E.i(_);return new c(m,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)^E.i(_);return new c(m,this.h^E.h)};function Se(E){for(var p=E.g.length+1,m=[],_=0;_<p;_++)m[_]=E.i(_)<<1|E.i(_-1)>>>31;return new c(m,E.h)}function te(E,p){var m=p>>5;p%=32;for(var _=E.g.length-m,v=[],T=0;T<_;T++)v[T]=0<p?E.i(T+m)>>>p|E.i(T+m+1)<<32-p:E.i(T+m);return new c(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=y,Sa=c}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});var er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ba,Ca,hn,ka,or,Di,Da,Na,Oa;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof er=="object"&&er];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function s(i,a){if(a)e:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var I=i[d];if(!(I in l))break e;l=l[I]}i=i[i.length-1],d=l[i],a=a(d),a!=d&&a!=null&&e(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,d=!1,I={next:function(){if(!d&&l<i.length){var w=l++;return{value:a(w,i[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},u=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function y(i,a,l){return i.call.apply(i.bind,arguments)}function A(i,a,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),i.apply(a,I)}}return function(){return i.apply(a,arguments)}}function P(i,a,l){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:A,P.apply(null,arguments)}function C(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function k(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,I,w){for(var b=Array(arguments.length-2),B=2;B<arguments.length;B++)b[B-2]=arguments[B];return a.prototype[I].apply(d,b)}}function L(i){const a=i.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=i[d];return l}return[]}function N(i,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=i.length||0,w=d.length||0;i.length=I+w;for(let b=0;b<w;b++)i[I+b]=d[b]}else i.push(d)}}class q{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function $(i){return/^[\s\xa0]*$/.test(i)}function z(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function Z(i){return Z[" "](i),i}Z[" "]=function(){};var Se=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function te(i,a,l){for(const d in i)a.call(l,i[d],d,i)}function E(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function p(i){const a={};for(const l in i)a[l]=i[l];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,a){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)i[l]=d[l];for(let w=0;w<m.length;w++)l=m[w],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function v(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function T(i){u.setTimeout(()=>{throw i},0)}function g(){var i=zr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class De{constructor(){this.h=this.g=null}add(a,l){const d=qt.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var qt=new q(()=>new hl,i=>i.reset());class hl{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let zt,Gt=!1,zr=new De,fs=()=>{const i=u.Promise.resolve(void 0);zt=()=>{i.then(dl)}};var dl=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){T(l)}var a=qt;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Gt=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var fl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,a),u.removeEventListener("test",l,a)}catch{}return i}();function Kt(i,a){if(ue.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Se){e:{try{Z(a.nodeName);var I=!0;break e}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:pl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Kt.aa.h.call(this)}}k(Kt,ue);var pl={2:"touch",3:"pen",4:"mouse"};Kt.prototype.h=function(){Kt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Mn="closure_listenable_"+(1e6*Math.random()|0),gl=0;function ml(i,a,l,d,I){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=I,this.key=++gl,this.da=this.fa=!1}function Ln(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function xn(i){this.src=i,this.g={},this.h=0}xn.prototype.add=function(i,a,l,d,I){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var b=Kr(i,a,d,I);return-1<b?(a=i[b],l||(a.fa=!1)):(a=new ml(a,this.src,w,!!d,I),a.fa=l,i.push(a)),a};function Gr(i,a){var l=a.type;if(l in i.g){var d=i.g[l],I=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=I)&&Array.prototype.splice.call(d,I,1),w&&(Ln(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Kr(i,a,l,d){for(var I=0;I<i.length;++I){var w=i[I];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return I}return-1}var Wr="closure_lm_"+(1e6*Math.random()|0),Qr={};function ps(i,a,l,d,I){if(Array.isArray(a)){for(var w=0;w<a.length;w++)ps(i,a[w],l,d,I);return null}return l=_s(l),i&&i[Mn]?i.K(a,l,f(d)?!!d.capture:!!d,I):_l(i,a,l,!1,d,I)}function _l(i,a,l,d,I,w){if(!a)throw Error("Invalid event type");var b=f(I)?!!I.capture:!!I,B=Xr(i);if(B||(i[Wr]=B=new xn(i)),l=B.add(a,l,d,b,w),l.proxy)return l;if(d=yl(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)fl||(I=b),I===void 0&&(I=!1),i.addEventListener(a.toString(),d,I);else if(i.attachEvent)i.attachEvent(ms(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function yl(){function i(l){return a.call(i.src,i.listener,l)}const a=vl;return i}function gs(i,a,l,d,I){if(Array.isArray(a))for(var w=0;w<a.length;w++)gs(i,a[w],l,d,I);else d=f(d)?!!d.capture:!!d,l=_s(l),i&&i[Mn]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],l=Kr(w,l,d,I),-1<l&&(Ln(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=Xr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Kr(a,l,d,I)),(l=-1<i?a[i]:null)&&Jr(l))}function Jr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[Mn])Gr(a.i,i);else{var l=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(l,d,i.capture):a.detachEvent?a.detachEvent(ms(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Xr(a))?(Gr(l,i),l.h==0&&(l.src=null,a[Wr]=null)):Ln(i)}}}function ms(i){return i in Qr?Qr[i]:Qr[i]="on"+i}function vl(i,a){if(i.da)i=!0;else{a=new Kt(a,this);var l=i.listener,d=i.ha||i.src;i.fa&&Jr(i),i=l.call(d,a)}return i}function Xr(i){return i=i[Wr],i instanceof xn?i:null}var Yr="__closure_events_fn_"+(1e9*Math.random()>>>0);function _s(i){return typeof i=="function"?i:(i[Yr]||(i[Yr]=function(a){return i.handleEvent(a)}),i[Yr])}function he(){qe.call(this),this.i=new xn(this),this.M=this,this.F=null}k(he,qe),he.prototype[Mn]=!0,he.prototype.removeEventListener=function(i,a,l,d){gs(this,i,a,l,d)};function ye(i,a){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new ue(a,i);else if(a instanceof ue)a.target=a.target||i;else{var I=a;a=new ue(d,i),_(a,I)}if(I=!0,l)for(var w=l.length-1;0<=w;w--){var b=a.g=l[w];I=Un(b,d,!0,a)&&I}if(b=a.g=i,I=Un(b,d,!0,a)&&I,I=Un(b,d,!1,a)&&I,l)for(w=0;w<l.length;w++)b=a.g=l[w],I=Un(b,d,!1,a)&&I}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],d=0;d<l.length;d++)Ln(l[d]);delete i.g[a],i.h--}}this.F=null},he.prototype.K=function(i,a,l,d){return this.i.add(String(i),a,!1,l,d)},he.prototype.L=function(i,a,l,d){return this.i.add(String(i),a,!0,l,d)};function Un(i,a,l,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,w=0;w<a.length;++w){var b=a[w];if(b&&!b.da&&b.capture==l){var B=b.listener,se=b.ha||b.src;b.fa&&Gr(i.i,b),I=B.call(se,d)!==!1&&I}}return I&&!d.defaultPrevented}function ys(i,a,l){if(typeof i=="function")l&&(i=P(i,l));else if(i&&typeof i.handleEvent=="function")i=P(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(i,a||0)}function vs(i){i.g=ys(()=>{i.g=null,i.i&&(i.i=!1,vs(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class El extends qe{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:vs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wt(i){qe.call(this),this.h=i,this.g={}}k(Wt,qe);var Es=[];function Is(i){te(i.g,function(a,l){this.g.hasOwnProperty(l)&&Jr(a)},i),i.g={}}Wt.prototype.N=function(){Wt.aa.N.call(this),Is(this)},Wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zr=u.JSON.stringify,Il=u.JSON.parse,Tl=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function ei(){}ei.prototype.h=null;function Ts(i){return i.h||(i.h=i.i())}function ws(){}var Qt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ti(){ue.call(this,"d")}k(ti,ue);function ni(){ue.call(this,"c")}k(ni,ue);var at={},As=null;function Fn(){return As=As||new he}at.La="serverreachability";function Rs(i){ue.call(this,at.La,i)}k(Rs,ue);function Jt(i){const a=Fn();ye(a,new Rs(a))}at.STAT_EVENT="statevent";function Ps(i,a){ue.call(this,at.STAT_EVENT,i),this.stat=a}k(Ps,ue);function ve(i){const a=Fn();ye(a,new Ps(a,i))}at.Ma="timingevent";function Ss(i,a){ue.call(this,at.Ma,i),this.size=a}k(Ss,ue);function Xt(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},a)}function Yt(){this.g=!0}Yt.prototype.xa=function(){this.g=!1};function wl(i,a,l,d,I,w){i.info(function(){if(i.g)if(w)for(var b="",B=w.split("&"),se=0;se<B.length;se++){var j=B[se].split("=");if(1<j.length){var de=j[0];j=j[1];var fe=de.split("_");b=2<=fe.length&&fe[1]=="type"?b+(de+"="+j+"&"):b+(de+"=redacted&")}}else b=null;else b=w;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+a+`
`+l+`
`+b})}function Al(i,a,l,d,I,w,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+a+`
`+l+`
`+w+" "+b})}function At(i,a,l,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+Pl(i,l)+(d?" "+d:"")})}function Rl(i,a){i.info(function(){return"TIMEOUT: "+a})}Yt.prototype.info=function(){};function Pl(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var w=I[0];if(w!="noop"&&w!="stop"&&w!="close")for(var b=1;b<I.length;b++)I[b]=""}}}}return Zr(l)}catch{return a}}var jn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ri;function Bn(){}k(Bn,ei),Bn.prototype.g=function(){return new XMLHttpRequest},Bn.prototype.i=function(){return{}},ri=new Bn;function ze(i,a,l,d){this.j=i,this.i=a,this.l=l,this.R=d||1,this.U=new Wt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cs}function Cs(){this.i=null,this.g="",this.h=!1}var ks={},ii={};function si(i,a,l){i.L=1,i.v=zn(Ne(a)),i.m=l,i.P=!0,Ds(i,null)}function Ds(i,a){i.F=Date.now(),$n(i),i.A=Ne(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),zs(l.i,"t",d),i.C=0,l=i.j.J,i.h=new Cs,i.g=lo(i.j,l?a:null,!i.m),0<i.O&&(i.M=new El(P(i.Y,i,i.g),i.O)),a=i.U,l=i.g,d=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(Es[0]=I.toString()),I=Es);for(var w=0;w<I.length;w++){var b=ps(l,I[w],d||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Jt(),wl(i.i,i.u,i.A,i.l,i.R,i.m)}ze.prototype.ca=function(i){i=i.target;const a=this.M;a&&Oe(i)==3?a.j():this.Y(i)},ze.prototype.Y=function(i){try{if(i==this.g)e:{const fe=Oe(this.g);var a=this.g.Ba();const St=this.g.Z();if(!(3>fe)&&(fe!=3||this.g&&(this.h.h||this.g.oa()||Ys(this.g)))){this.J||fe!=4||a==7||(a==8||0>=St?Jt(3):Jt(2)),oi(this);var l=this.g.Z();this.X=l;t:if(Ns(this)){var d=Ys(this.g);i="";var I=d.length,w=Oe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ct(this),Zt(this);var b="";break t}this.h.i=new u.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(w&&a==I-1)});d.length=0,this.h.g+=i,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,Al(this.i,this.u,this.A,this.l,this.R,fe,l),this.o){if(this.T&&!this.K){t:{if(this.g){var B,se=this.g;if((B=se.g?se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(B)){var j=B;break t}}j=null}if(l=j)At(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ai(this,l);else{this.o=!1,this.s=3,ve(12),ct(this),Zt(this);break e}}if(this.P){l=!0;let Te;for(;!this.J&&this.C<b.length;)if(Te=Sl(this,b),Te==ii){fe==4&&(this.s=4,ve(14),l=!1),At(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==ks){this.s=4,ve(15),At(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else At(this.i,this.l,Te,null),ai(this,Te);if(Ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||b.length!=0||this.h.h||(this.s=1,ve(16),l=!1),this.o=this.o&&l,!l)At(this.i,this.l,b,"[Invalid Chunked Response]"),ct(this),Zt(this);else if(0<b.length&&!this.W){this.W=!0;var de=this.j;de.g==this&&de.ba&&!de.M&&(de.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),fi(de),de.M=!0,ve(11))}}else At(this.i,this.l,b,null),ai(this,b);fe==4&&ct(this),this.o&&!this.J&&(fe==4?so(this.j,this):(this.o=!1,$n(this)))}else ql(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,ve(12)):(this.s=0,ve(13)),ct(this),Zt(this)}}}catch{}finally{}};function Ns(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Sl(i,a){var l=i.C,d=a.indexOf(`
`,l);return d==-1?ii:(l=Number(a.substring(l,d)),isNaN(l)?ks:(d+=1,d+l>a.length?ii:(a=a.slice(d,d+l),i.C=d+l,a)))}ze.prototype.cancel=function(){this.J=!0,ct(this)};function $n(i){i.S=Date.now()+i.I,Os(i,i.I)}function Os(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Xt(P(i.ba,i),a)}function oi(i){i.B&&(u.clearTimeout(i.B),i.B=null)}ze.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Rl(this.i,this.A),this.L!=2&&(Jt(),ve(17)),ct(this),this.s=2,Zt(this)):Os(this,this.S-i)};function Zt(i){i.j.G==0||i.J||so(i.j,i)}function ct(i){oi(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Is(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function ai(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||ci(l.h,i))){if(!i.K&&ci(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Jn(l),Wn(l);else break e;di(l),ve(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Xt(P(l.Za,l),6e3));if(1>=Ls(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ut(l,11)}else if((i.K||l.g==i)&&Jn(l),!$(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let j=I[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const de=j[3];de!=null&&(l.la=de,l.j.info("VER="+l.la));const fe=j[4];fe!=null&&(l.Aa=fe,l.j.info("SVER="+l.Aa));const St=j[5];St!=null&&typeof St=="number"&&0<St&&(d=1.5*St,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Te=i.g;if(Te){const Yn=Te.g?Te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yn){var w=d.h;w.g||Yn.indexOf("spdy")==-1&&Yn.indexOf("quic")==-1&&Yn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(li(w,w.h),w.h=null))}if(d.D){const pi=Te.g?Te.g.getResponseHeader("X-HTTP-Session-Id"):null;pi&&(d.ya=pi,G(d.I,d.D,pi))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var b=i;if(d.qa=co(d,d.J?d.ia:null,d.W),b.K){xs(d.h,b);var B=b,se=d.L;se&&(B.I=se),B.B&&(oi(B),$n(B)),d.g=b}else ro(d);0<l.i.length&&Qn(l)}else j[0]!="stop"&&j[0]!="close"||ut(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?ut(l,7):hi(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}Jt(4)}catch{}}var bl=class{constructor(i,a){this.g=i,this.map=a}};function Vs(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ms(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ls(i){return i.h?1:i.g?i.g.size:0}function ci(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function li(i,a){i.g?i.g.add(a):i.h=a}function xs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Vs.prototype.cancel=function(){if(this.i=Us(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Us(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return L(i.i)}function Cl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],l=i.length,d=0;d<l;d++)a.push(i[d]);return a}a=[],l=0;for(d in i)a[l++]=i[d];return a}function kl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const d in i)a[l++]=d;return a}}}function Fs(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=kl(i),d=Cl(i),I=d.length,w=0;w<I;w++)a.call(void 0,d[w],l&&l[w],i)}var js=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dl(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),I=null;if(0<=d){var w=i[l].substring(0,d);I=i[l].substring(d+1)}else w=i[l];a(w,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function lt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof lt){this.h=i.h,Hn(this,i.j),this.o=i.o,this.g=i.g,qn(this,i.s),this.l=i.l;var a=i.i,l=new nn;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Bs(this,l),this.m=i.m}else i&&(a=String(i).match(js))?(this.h=!1,Hn(this,a[1]||"",!0),this.o=en(a[2]||""),this.g=en(a[3]||"",!0),qn(this,a[4]),this.l=en(a[5]||"",!0),Bs(this,a[6]||"",!0),this.m=en(a[7]||"")):(this.h=!1,this.i=new nn(null,this.h))}lt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(tn(a,$s,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(tn(a,$s,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(tn(l,l.charAt(0)=="/"?Vl:Ol,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",tn(l,Ll)),i.join("")};function Ne(i){return new lt(i)}function Hn(i,a,l){i.j=l?en(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function qn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Bs(i,a,l){a instanceof nn?(i.i=a,xl(i.i,i.h)):(l||(a=tn(a,Ml)),i.i=new nn(a,i.h))}function G(i,a,l){i.i.set(a,l)}function zn(i){return G(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function en(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function tn(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,Nl),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Nl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var $s=/[#\/\?@]/g,Ol=/[#\?:]/g,Vl=/[#\?]/g,Ml=/[#\?@]/g,Ll=/#/g;function nn(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Ge(i){i.g||(i.g=new Map,i.h=0,i.i&&Dl(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=nn.prototype,n.add=function(i,a){Ge(this),this.i=null,i=Rt(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function Hs(i,a){Ge(i),a=Rt(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function qs(i,a){return Ge(i),a=Rt(i,a),i.g.has(a)}n.forEach=function(i,a){Ge(this),this.g.forEach(function(l,d){l.forEach(function(I){i.call(a,I,d,this)},this)},this)},n.na=function(){Ge(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const I=i[d];for(let w=0;w<I.length;w++)l.push(a[d])}return l},n.V=function(i){Ge(this);let a=[];if(typeof i=="string")qs(this,i)&&(a=a.concat(this.g.get(Rt(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},n.set=function(i,a){return Ge(this),this.i=null,i=Rt(this,i),qs(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function zs(i,a,l){Hs(i,a),0<l.length&&(i.i=null,i.g.set(Rt(i,a),L(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var I=w;b[d]!==""&&(I+="="+encodeURIComponent(String(b[d]))),i.push(I)}}return this.i=i.join("&")};function Rt(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function xl(i,a){a&&!i.j&&(Ge(i),i.i=null,i.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(Hs(this,d),zs(this,I,l))},i)),i.j=a}function Ul(i,a){const l=new Yt;if(u.Image){const d=new Image;d.onload=C(Ke,l,"TestLoadImage: loaded",!0,a,d),d.onerror=C(Ke,l,"TestLoadImage: error",!1,a,d),d.onabort=C(Ke,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(Ke,l,"TestLoadImage: timeout",!1,a,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function Fl(i,a){const l=new Yt,d=new AbortController,I=setTimeout(()=>{d.abort(),Ke(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(w=>{clearTimeout(I),w.ok?Ke(l,"TestPingServer: ok",!0,a):Ke(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Ke(l,"TestPingServer: error",!1,a)})}function Ke(i,a,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function jl(){this.g=new Tl}function Bl(i,a,l){const d=l||"";try{Fs(i,function(I,w){let b=I;f(I)&&(b=Zr(I)),a.push(d+w+"="+encodeURIComponent(b))})}catch(I){throw a.push(d+"type="+encodeURIComponent("_badmap")),I}}function rn(i){this.l=i.Ub||null,this.j=i.eb||!1}k(rn,ei),rn.prototype.g=function(){return new Gn(this.l,this.j)},rn.prototype.i=function(i){return function(){return i}}({});function Gn(i,a){he.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Gn,he),n=Gn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,on(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,on(this)),this.g&&(this.readyState=3,on(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gs(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gs(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?sn(this):on(this),this.readyState==3&&Gs(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,sn(this))},n.Qa=function(i){this.g&&(this.response=i,sn(this))},n.ga=function(){this.g&&sn(this)};function sn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,on(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function on(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ks(i){let a="";return te(i,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function ui(i,a,l){e:{for(d in l){var d=!1;break e}d=!0}d||(l=Ks(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):G(i,a,l))}function J(i){he.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(J,he);var $l=/^https?$/i,Hl=["POST","PUT"];n=J.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ri.g(),this.v=this.o?Ts(this.o):Ts(ri),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){Ws(this,w);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),I=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Hl,a,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,b]of l)this.g.setRequestHeader(w,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xs(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){Ws(this,w)}};function Ws(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Qs(i),Kn(i)}function Qs(i){i.A||(i.A=!0,ye(i,"complete"),ye(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,ye(this,"complete"),ye(this,"abort"),Kn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Js(this):this.bb())},n.bb=function(){Js(this)};function Js(i){if(i.h&&typeof c<"u"&&(!i.v[1]||Oe(i)!=4||i.Z()!=2)){if(i.u&&Oe(i)==4)ys(i.Ea,0,i);else if(ye(i,"readystatechange"),Oe(i)==4){i.h=!1;try{const b=i.Z();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var l;if(!(l=a)){var d;if(d=b===0){var I=String(i.D).match(js)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),d=!$l.test(I?I.toLowerCase():"")}l=d}if(l)ye(i,"complete"),ye(i,"success");else{i.m=6;try{var w=2<Oe(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",Qs(i)}}finally{Kn(i)}}}}function Kn(i,a){if(i.g){Xs(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||ye(i,"ready");try{l.onreadystatechange=d}catch{}}}function Xs(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Oe(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Oe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Il(a)}};function Ys(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ql(i){const a={};i=(i.g&&2<=Oe(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if($(i[d]))continue;var l=v(i[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[I]||[];a[I]=w,w.push(l)}E(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function an(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function Zs(i){this.Aa=0,this.i=[],this.j=new Yt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=an("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=an("baseRetryDelayMs",5e3,i),this.cb=an("retryDelaySeedMs",1e4,i),this.Wa=an("forwardChannelMaxRetries",2,i),this.wa=an("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Vs(i&&i.concurrentRequestLimit),this.Da=new jl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Zs.prototype,n.la=8,n.G=1,n.connect=function(i,a,l,d){ve(0),this.W=i,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=co(this,null,this.W),Qn(this)};function hi(i){if(eo(i),i.G==3){var a=i.U++,l=Ne(i.I);if(G(l,"SID",i.K),G(l,"RID",a),G(l,"TYPE","terminate"),cn(i,l),a=new ze(i,i.j,a),a.L=2,a.v=zn(Ne(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=a.v,l=!0),l||(a.g=lo(a.j,null),a.g.ea(a.v)),a.F=Date.now(),$n(a)}ao(i)}function Wn(i){i.g&&(fi(i),i.g.cancel(),i.g=null)}function eo(i){Wn(i),i.u&&(u.clearTimeout(i.u),i.u=null),Jn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Qn(i){if(!Ms(i.h)&&!i.s){i.s=!0;var a=i.Ga;zt||fs(),Gt||(zt(),Gt=!0),zr.add(a,i),i.B=0}}function zl(i,a){return Ls(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Xt(P(i.Ga,i,a),oo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new ze(this,this.j,i);let w=this.o;if(this.S&&(w?(w=p(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(I.H=w,w=null),this.P)e:{for(var a=0,l=0;l<this.i.length;l++){t:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break e}if(a===4096||l===this.i.length-1){a=l+1;break e}}a=1e3}else a=1e3;a=no(this,I,a),l=Ne(this.I),G(l,"RID",i),G(l,"CVER",22),this.D&&G(l,"X-HTTP-Session-Id",this.D),cn(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Ks(w)))+"&"+a:this.m&&ui(l,this.m,w)),li(this.h,I),this.Ua&&G(l,"TYPE","init"),this.P?(G(l,"$req",a),G(l,"SID","null"),I.T=!0,si(I,l,null)):si(I,l,a),this.G=2}}else this.G==3&&(i?to(this,i):this.i.length==0||Ms(this.h)||to(this))};function to(i,a){var l;a?l=a.l:l=i.U++;const d=Ne(i.I);G(d,"SID",i.K),G(d,"RID",l),G(d,"AID",i.T),cn(i,d),i.m&&i.o&&ui(d,i.m,i.o),l=new ze(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=no(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),li(i.h,l),si(l,d,a)}function cn(i,a){i.H&&te(i.H,function(l,d){G(a,d,l)}),i.l&&Fs({},function(l,d){G(a,d,l)})}function no(i,a,l){l=Math.min(i.i.length,l);var d=i.l?P(i.l.Na,i.l,i):null;e:{var I=i.i;let w=-1;for(;;){const b=["count="+l];w==-1?0<l?(w=I[0].g,b.push("ofs="+w)):w=0:b.push("ofs="+w);let B=!0;for(let se=0;se<l;se++){let j=I[se].g;const de=I[se].map;if(j-=w,0>j)w=Math.max(0,I[se].g-100),B=!1;else try{Bl(de,b,"req"+j+"_")}catch{d&&d(de)}}if(B){d=b.join("&");break e}}}return i=i.i.splice(0,l),a.D=i,d}function ro(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;zt||fs(),Gt||(zt(),Gt=!0),zr.add(a,i),i.v=0}}function di(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Xt(P(i.Fa,i),oo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,io(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Xt(P(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ve(10),Wn(this),io(this))};function fi(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function io(i){i.g=new ze(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Ne(i.qa);G(a,"RID","rpc"),G(a,"SID",i.K),G(a,"AID",i.T),G(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&G(a,"TO",i.ja),G(a,"TYPE","xmlhttp"),cn(i,a),i.m&&i.o&&ui(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=zn(Ne(a)),l.m=null,l.P=!0,Ds(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Wn(this),di(this),ve(19))};function Jn(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function so(i,a){var l=null;if(i.g==a){Jn(i),fi(i),i.g=null;var d=2}else if(ci(i.h,a))l=a.D,xs(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=i.B;d=Fn(),ye(d,new Ss(d,l)),Qn(i)}else ro(i);else if(I=a.s,I==3||I==0&&0<a.X||!(d==1&&zl(i,a)||d==2&&di(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),I){case 1:ut(i,5);break;case 4:ut(i,10);break;case 3:ut(i,6);break;default:ut(i,2)}}}function oo(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function ut(i,a){if(i.j.info("Error code "+a),a==2){var l=P(i.fb,i),d=i.Xa;const I=!d;d=new lt(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Hn(d,"https"),zn(d),I?Ul(d.toString(),l):Fl(d.toString(),l)}else ve(2);i.G=0,i.l&&i.l.sa(a),ao(i),eo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function ao(i){if(i.G=0,i.ka=[],i.l){const a=Us(i.h);(a.length!=0||i.i.length!=0)&&(N(i.ka,a),N(i.ka,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.ra()}}function co(i,a,l){var d=l instanceof lt?Ne(l):new lt(l);if(d.g!="")a&&(d.g=a+"."+d.g),qn(d,d.s);else{var I=u.location;d=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var w=new lt(null);d&&Hn(w,d),a&&(w.g=a),I&&qn(w,I),l&&(w.l=l),d=w}return l=i.D,a=i.ya,l&&a&&G(d,l,a),G(d,"VER",i.la),cn(i,d),d}function lo(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new J(new rn({eb:l})):new J(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uo(){}n=uo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xn(){}Xn.prototype.g=function(i,a){return new Ie(i,a)};function Ie(i,a){he.call(this),this.g=new Zs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!$(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!$(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new Pt(this)}k(Ie,he),Ie.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ie.prototype.close=function(){hi(this.g)},Ie.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Zr(i),i=l);a.i.push(new bl(a.Ya++,i)),a.G==3&&Qn(a)},Ie.prototype.N=function(){this.g.l=null,delete this.j,hi(this.g),delete this.g,Ie.aa.N.call(this)};function ho(i){ti.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){e:{for(const l in a){i=l;break e}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}k(ho,ti);function fo(){ni.call(this),this.status=1}k(fo,ni);function Pt(i){this.g=i}k(Pt,uo),Pt.prototype.ua=function(){ye(this.g,"a")},Pt.prototype.ta=function(i){ye(this.g,new ho(i))},Pt.prototype.sa=function(i){ye(this.g,new fo)},Pt.prototype.ra=function(){ye(this.g,"b")},Xn.prototype.createWebChannel=Xn.prototype.g,Ie.prototype.send=Ie.prototype.o,Ie.prototype.open=Ie.prototype.m,Ie.prototype.close=Ie.prototype.close,Oa=function(){return new Xn},Na=function(){return Fn()},Da=at,Di={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jn.NO_ERROR=0,jn.TIMEOUT=8,jn.HTTP_ERROR=6,or=jn,bs.COMPLETE="complete",ka=bs,ws.EventType=Qt,Qt.OPEN="a",Qt.CLOSE="b",Qt.ERROR="c",Qt.MESSAGE="d",he.prototype.listen=he.prototype.K,hn=ws,Ca=rn,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ba=J}).apply(typeof er<"u"?er:typeof self<"u"?self:typeof window<"u"?window:{});const Ro="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ge.UNAUTHENTICATED=new ge(null),ge.GOOGLE_CREDENTIALS=new ge("google-credentials-uid"),ge.FIRST_PARTY=new ge("first-party-uid"),ge.MOCK_USER=new ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Hi("@firebase/firestore");function ln(){return _t.logLevel}function D(n,...e){if(_t.logLevel<=x.DEBUG){const t=e.map(Gi);_t.debug(`Firestore (${Bt}): ${n}`,...t)}}function yt(n,...e){if(_t.logLevel<=x.ERROR){const t=e.map(Gi);_t.error(`Firestore (${Bt}): ${n}`,...t)}}function mr(n,...e){if(_t.logLevel<=x.WARN){const t=e.map(Gi);_t.warn(`Firestore (${Bt}): ${n}`,...t)}}function Gi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n="Unexpected state"){const e=`FIRESTORE (${Bt}) INTERNAL ASSERTION FAILED: `+n;throw yt(e),new Error(e)}function ie(n,e){n||U()}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends He{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ge.UNAUTHENTICATED))}shutdown(){}}class Ch{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class kh{constructor(e){this.t=e,this.currentUser=ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new ft;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ft,e.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),c()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ft)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new Va(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new ge(e)}}class Dh{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ge.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nh{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Dh(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string"),this.R=t.token,new Oh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Mh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%e.length))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function Mt(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ee(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ee(0,0))}static max(){return new Q(new ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof yn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=e.get(s),c=t.get(s);if(o<c)return-1;if(o>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class X extends yn{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new X(t)}static emptyPath(){return new X([])}}const Lh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends yn{construct(e,t,r){return new ce(e,t,r)}static isValidIdentifier(e){return Lh.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ce(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else u==="`"?(c=!c,s++):u!=="."||c?(r+=u,s++):(o(),s++)}if(o(),c)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(X.fromString(e))}static fromName(e){return new M(X.fromString(e).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new X(e.slice()))}}function xh(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new it(s,M.empty(),e)}function Uh(n){return new it(n.readTime,n.key,-1)}class it{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new it(Q.min(),M.empty(),-1)}static max(){return new it(Q.max(),M.empty(),-1)}}function Fh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==jh)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let s=0,o=0,c=!1;e.forEach(u=>{++s,u.next(()=>{++o,c&&o===s&&t()},h=>r(h))}),c=!0,o===s&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(s=>s?R.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new R((r,s)=>{const o=e.length,c=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;t(e[f]).next(y=>{c[f]=y,++u,u===o&&r(c)},y=>s(y))}})}static doWhile(e,t){return new R((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function $h(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Nr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xa.oe=-1;function Ki(n){return n==null}function _r(n){return n===0&&1/n==-1/0}function Hh(n){return typeof n=="number"&&Number.isInteger(n)&&!_r(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Sn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ua(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||oe.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,oe.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tr(this.root,e,this.comparator,!1)}getReverseIterator(){return new tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tr(this.root,e,this.comparator,!0)}}class tr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class oe{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??oe.RED,this.left=s??oe.EMPTY,this.right=o??oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new oe(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return oe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}oe.EMPTY=null,oe.RED=!0,oe.BLACK=!1;oe.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,s,o){return this}insert(e,t,r){return new oe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new So(this.data.getIterator())}getIteratorFrom(e){return new So(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class So{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new Re([])}unionWith(e){let t=new _e(ce.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Re(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new qh("Invalid base64 string: "+o):o}}(e);return new je(t)}static fromUint8Array(e){const t=function(s){let o="";for(let c=0;c<s.length;++c)o+=String.fromCharCode(s[c]);return o}(e);return new je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const zh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(n){if(ie(!!n),typeof n=="string"){let e=0;const t=zh.exec(n);if(ie(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function vn(n){return typeof n=="string"?je.fromBase64String(n):je.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Fa(n){const e=n.mapValue.fields.__previous_value__;return Wi(e)?Fa(e):e}function yr(n){const e=vt(n.mapValue.fields.__local_write_time__.timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t,r,s,o,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}class vr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new vr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Lt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wi(n)?4:Kh(n)?9007199254740991:10:U()}function ke(n,e){if(n===e)return!0;const t=Lt(n);if(t!==Lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yr(n).isEqual(yr(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const c=vt(s.timestampValue),u=vt(o.timestampValue);return c.seconds===u.seconds&&c.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return vn(s.bytesValue).isEqual(vn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return ae(s.geoPointValue.latitude)===ae(o.geoPointValue.latitude)&&ae(s.geoPointValue.longitude)===ae(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ae(s.integerValue)===ae(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const c=ae(s.doubleValue),u=ae(o.doubleValue);return c===u?_r(c)===_r(u):isNaN(c)&&isNaN(u)}return!1}(n,e);case 9:return Mt(n.arrayValue.values||[],e.arrayValue.values||[],ke);case 10:return function(s,o){const c=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Po(c)!==Po(u))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(u[h]===void 0||!ke(c[h],u[h])))return!1;return!0}(n,e);default:return U()}}function En(n,e){return(n.values||[]).find(t=>ke(t,e))!==void 0}function xt(n,e){if(n===e)return 0;const t=Lt(n),r=Lt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(o,c){const u=ae(o.integerValue||o.doubleValue),h=ae(c.integerValue||c.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return bo(n.timestampValue,e.timestampValue);case 4:return bo(yr(n),yr(e));case 5:return H(n.stringValue,e.stringValue);case 6:return function(o,c){const u=vn(o),h=vn(c);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,c){const u=o.split("/"),h=c.split("/");for(let f=0;f<u.length&&f<h.length;f++){const y=H(u[f],h[f]);if(y!==0)return y}return H(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,c){const u=H(ae(o.latitude),ae(c.latitude));return u!==0?u:H(ae(o.longitude),ae(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(o,c){const u=o.values||[],h=c.values||[];for(let f=0;f<u.length&&f<h.length;++f){const y=xt(u[f],h[f]);if(y)return y}return H(u.length,h.length)}(n.arrayValue,e.arrayValue);case 10:return function(o,c){if(o===nr.mapValue&&c===nr.mapValue)return 0;if(o===nr.mapValue)return 1;if(c===nr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=c.fields||{},y=Object.keys(f);h.sort(),y.sort();for(let A=0;A<h.length&&A<y.length;++A){const P=H(h[A],y[A]);if(P!==0)return P;const C=xt(u[h[A]],f[y[A]]);if(C!==0)return C}return H(h.length,y.length)}(n.mapValue,e.mapValue);default:throw U()}}function bo(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=vt(n),r=vt(e),s=H(t.seconds,r.seconds);return s!==0?s:H(t.nanos,r.nanos)}function Ut(n){return Ni(n)}function Ni(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=vt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return vn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=Ni(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const c of r)o?o=!1:s+=",",s+=`${c}:${Ni(t.fields[c])}`;return s+"}"}(n.mapValue):U()}function Oi(n){return!!n&&"integerValue"in n}function Qi(n){return!!n&&"arrayValue"in n}function ar(n){return!!n&&"mapValue"in n}function dn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Sn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=dn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=dn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Kh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ar(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=dn(t)}setAll(e){let t=ce.emptyPath(),r={},s=[];e.forEach((c,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=u.popLast()}c?r[u.lastSegment()]=dn(c):s.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());ar(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ar(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Sn(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Ae(dn(this.value))}}function ja(n){const e=[];return Sn(n.fields,(t,r)=>{const s=new ce([t]);if(ar(r)){const o=ja(r.mapValue).fields;if(o.length===0)e.push(s);else for(const c of o)e.push(s.child(c))}else e.push(s)}),new Re(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t,r,s,o,c,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=c,this.documentState=u}static newInvalidDocument(e){return new we(e,0,Q.min(),Q.min(),Q.min(),Ae.empty(),0)}static newFoundDocument(e,t,r,s){return new we(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new we(e,2,t,Q.min(),Q.min(),Ae.empty(),0)}static newUnknownDocument(e,t){return new we(e,3,t,Q.min(),Q.min(),Ae.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof we&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t){this.position=e,this.inclusive=t}}function Co(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],c=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(c.referenceValue),t.key):r=xt(c,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ko(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ke(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t="asc"){this.field=e,this.dir=t}}function Wh(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{}class re extends Ba{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Jh(e,t,r):t==="array-contains"?new Zh(e,r):t==="in"?new ed(e,r):t==="not-in"?new td(e,r):t==="array-contains-any"?new nd(e,r):new re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Xh(e,r):new Yh(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(xt(t,this.value)):t!==null&&Lt(this.value)===Lt(t)&&this.matchesComparison(xt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class st extends Ba{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new st(e,t)}matches(e){return $a(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $a(n){return n.op==="and"}function Ha(n){return Qh(n)&&$a(n)}function Qh(n){for(const e of n.filters)if(e instanceof st)return!1;return!0}function Vi(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+Ut(n.value);if(Ha(n))return n.filters.map(e=>Vi(e)).join(",");{const e=n.filters.map(t=>Vi(t)).join(",");return`${n.op}(${e})`}}function qa(n,e){return n instanceof re?function(r,s){return s instanceof re&&r.op===s.op&&r.field.isEqual(s.field)&&ke(r.value,s.value)}(n,e):n instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,c,u)=>o&&qa(c,s.filters[u]),!0):!1}(n,e):void U()}function za(n){return n instanceof re?function(t){return`${t.field.canonicalString()} ${t.op} ${Ut(t.value)}`}(n):n instanceof st?function(t){return t.op.toString()+" {"+t.getFilters().map(za).join(" ,")+"}"}(n):"Filter"}class Jh extends re{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Xh extends re{constructor(e,t){super(e,"in",t),this.keys=Ga("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Yh extends re{constructor(e,t){super(e,"not-in",t),this.keys=Ga("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ga(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Zh extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qi(t)&&En(t.arrayValue,this.value)}}class ed extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&En(this.value.arrayValue,t)}}class td extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(En(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!En(this.value.arrayValue,t)}}class nd extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>En(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t=null,r=[],s=[],o=null,c=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=c,this.endAt=u,this.ue=null}}function Do(n,e=null,t=[],r=[],s=null,o=null,c=null){return new rd(n,e,t,r,s,o,c)}function Ji(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Vi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ki(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ut(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ut(r)).join(",")),e.ue=t}return e.ue}function Xi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Wh(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qa(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ko(n.startAt,e.startAt)&&ko(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t=null,r=[],s=[],o=null,c="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=c,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function id(n,e,t,r,s,o,c,u){return new Or(n,e,t,r,s,o,c,u)}function sd(n){return new Or(n)}function No(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function od(n){return n.collectionGroup!==null}function fn(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let u=new _e(ce.comparator);return c.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ir(o,r))}),t.has(ce.keyField().canonicalString())||e.ce.push(new Ir(ce.keyField(),r))}return e.ce}function pt(n){const e=W(n);return e.le||(e.le=ad(e,fn(n))),e.le}function ad(n,e){if(n.limitType==="F")return Do(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Ir(s.field,o)});const t=n.endAt?new Er(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Er(n.startAt.position,n.startAt.inclusive):null;return Do(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Mi(n,e,t){return new Or(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ka(n,e){return Xi(pt(n),pt(e))&&n.limitType===e.limitType}function Wa(n){return`${Ji(pt(n))}|lt:${n.limitType}`}function un(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>za(s)).join(", ")}]`),Ki(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ut(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ut(s)).join(",")),`Target(${r})`}(pt(n))}; limitType=${n.limitType})`}function Yi(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of fn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(c,u,h){const f=Co(c,u,h);return c.inclusive?f<=0:f<0}(r.startAt,fn(r),s)||r.endAt&&!function(c,u,h){const f=Co(c,u,h);return c.inclusive?f>=0:f>0}(r.endAt,fn(r),s))}(n,e)}function cd(n){return(e,t)=>{let r=!1;for(const s of fn(n)){const o=ld(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function ld(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(o,c,u){const h=c.data.field(o),f=u.data.field(o);return h!==null&&f!==null?xt(h,f):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sn(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return Ua(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=new Ee(M.comparator);function Tr(){return ud}const Qa=new Ee(M.comparator);function rr(...n){let e=Qa;for(const t of n)e=e.insert(t.key,t);return e}function Ja(n){let e=Qa;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function dt(){return pn()}function Xa(){return pn()}function pn(){return new $t(n=>n.toString(),(n,e)=>n.isEqual(e))}const hd=new Ee(M.comparator),dd=new _e(M.comparator);function me(...n){let e=dd;for(const t of n)e=e.add(t);return e}const fd=new _e(H);function pd(){return fd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_r(e)?"-0":e}}function Za(n){return{integerValue:""+n}}function gd(n,e){return Hh(e)?Za(e):Ya(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this._=void 0}}function md(n,e,t){return n instanceof wr?function(s,o){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Wi(o)&&(o=Fa(o)),o&&(c.fields.__previous_value__=o),{mapValue:c}}(t,e):n instanceof In?tc(n,e):n instanceof Tn?nc(n,e):function(s,o){const c=ec(s,o),u=Oo(c)+Oo(s.Pe);return Oi(c)&&Oi(s.Pe)?Za(u):Ya(s.serializer,u)}(n,e)}function _d(n,e,t){return n instanceof In?tc(n,e):n instanceof Tn?nc(n,e):t}function ec(n,e){return n instanceof Ar?function(r){return Oi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class wr extends Vr{}class In extends Vr{constructor(e){super(),this.elements=e}}function tc(n,e){const t=rc(e);for(const r of n.elements)t.some(s=>ke(s,r))||t.push(r);return{arrayValue:{values:t}}}class Tn extends Vr{constructor(e){super(),this.elements=e}}function nc(n,e){let t=rc(e);for(const r of n.elements)t=t.filter(s=>!ke(s,r));return{arrayValue:{values:t}}}class Ar extends Vr{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Oo(n){return ae(n.integerValue||n.doubleValue)}function rc(n){return Qi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function yd(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof In&&s instanceof In||r instanceof Tn&&s instanceof Tn?Mt(r.elements,s.elements,ke):r instanceof Ar&&s instanceof Ar?ke(r.Pe,s.Pe):r instanceof wr&&s instanceof wr}(n.transform,e.transform)}class vd{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mr{}function ic(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new oc(n.key,Ue.none()):new bn(n.key,n.data,Ue.none());{const t=n.data,r=Ae.empty();let s=new _e(ce.comparator);for(let o of e.fields)if(!s.has(o)){let c=t.field(o);c===null&&o.length>1&&(o=o.popLast(),c=t.field(o)),c===null?r.delete(o):r.set(o,c),s=s.add(o)}return new Tt(n.key,r,new Re(s.toArray()),Ue.none())}}function Ed(n,e,t){n instanceof bn?function(s,o,c){const u=s.value.clone(),h=Mo(s.fieldTransforms,o,c.transformResults);u.setAll(h),o.convertToFoundDocument(c.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Tt?function(s,o,c){if(!cr(s.precondition,o))return void o.convertToUnknownDocument(c.version);const u=Mo(s.fieldTransforms,o,c.transformResults),h=o.data;h.setAll(sc(s)),h.setAll(u),o.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(n,e,t):function(s,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function gn(n,e,t,r){return n instanceof bn?function(o,c,u,h){if(!cr(o.precondition,c))return u;const f=o.value.clone(),y=Lo(o.fieldTransforms,h,c);return f.setAll(y),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Tt?function(o,c,u,h){if(!cr(o.precondition,c))return u;const f=Lo(o.fieldTransforms,h,c),y=c.data;return y.setAll(sc(o)),y.setAll(f),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,e,t,r):function(o,c,u){return cr(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):u}(n,e,t)}function Id(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=ec(r.transform,s||null);o!=null&&(t===null&&(t=Ae.empty()),t.set(r.field,o))}return t||null}function Vo(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Mt(r,s,(o,c)=>yd(o,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class bn extends Mr{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Tt extends Mr{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function sc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Mo(n,e,t){const r=new Map;ie(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],c=o.transform,u=e.data.field(o.field);r.set(o.field,_d(c,u,t[s]))}return r}function Lo(n,e,t){const r=new Map;for(const s of n){const o=s.transform,c=t.data.field(s.field);r.set(s.field,md(o,c,e))}return r}class oc extends Mr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Td extends Mr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Ed(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=gn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=gn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Xa();return this.mutations.forEach(s=>{const o=e.get(s.key),c=o.overlayedDocument;let u=this.applyToLocalView(c,o.mutatedFields);u=t.has(s.key)?null:u;const h=ic(c,u);h!==null&&r.set(s.key,h),c.isValidDocument()||c.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),me())}isEqual(e){return this.batchId===e.batchId&&Mt(this.mutations,e.mutations,(t,r)=>Vo(t,r))&&Mt(this.baseMutations,e.baseMutations,(t,r)=>Vo(t,r))}}class Zi{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ie(e.mutations.length===r.length);let s=function(){return hd}();const o=e.mutations;for(let c=0;c<o.length;c++)s=s.insert(o[c].key,r[c].version);return new Zi(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y,F;function Rd(n){switch(n){default:return U();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Pd(n){if(n===void 0)return yt("GRPC error has no .code"),S.UNKNOWN;switch(n){case Y.OK:return S.OK;case Y.CANCELLED:return S.CANCELLED;case Y.UNKNOWN:return S.UNKNOWN;case Y.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Y.INTERNAL:return S.INTERNAL;case Y.UNAVAILABLE:return S.UNAVAILABLE;case Y.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Y.NOT_FOUND:return S.NOT_FOUND;case Y.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Y.ABORTED:return S.ABORTED;case Y.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Y.DATA_LOSS:return S.DATA_LOSS;default:return U()}}(F=Y||(Y={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Sa([4294967295,4294967295],0);class Sd{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Li(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Cd(n,e){return Li(n,e.toTimestamp())}function kt(n){return ie(!!n),Q.fromTimestamp(function(t){const r=vt(t);return new ee(r.seconds,r.nanos)}(n))}function ac(n,e){return xi(n,e).canonicalString()}function xi(n,e){const t=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function kd(n){const e=X.fromString(n);return ie(Ud(e)),e}function Ui(n,e){return ac(n.databaseId,e.path)}function Dd(n){const e=kd(n);return e.length===4?X.emptyPath():Od(e)}function Nd(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Od(n){return ie(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xo(n,e,t){return{name:Ui(n,e),fields:t.value.mapValue.fields}}function Vd(n,e){let t;if(e instanceof bn)t={update:xo(n,e.key,e.value)};else if(e instanceof oc)t={delete:Ui(n,e.key)};else if(e instanceof Tt)t={update:xo(n,e.key,e.data),updateMask:xd(e.fieldMask)};else{if(!(e instanceof Td))return U();t={verify:Ui(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,c){const u=c.transform;if(u instanceof wr)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof In)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Tn)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ar)return{fieldPath:c.field.canonicalString(),increment:u.Pe};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Cd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(n,e.precondition)),t}function Md(n,e){return n&&n.length>0?(ie(e!==void 0),n.map(t=>function(s,o){let c=s.updateTime?kt(s.updateTime):kt(o);return c.isEqual(Q.min())&&(c=kt(o)),new vd(c,s.transformResults||[])}(t,e))):[]}function Ld(n){let e=Dd(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ie(r===1);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(A){const P=cc(A);return P instanceof st&&Ha(P)?P.getFilters():[P]}(t.where));let c=[];t.orderBy&&(c=function(A){return A.map(P=>function(k){return new Ir(bt(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(P))}(t.orderBy));let u=null;t.limit&&(u=function(A){let P;return P=typeof A=="object"?A.value:A,Ki(P)?null:P}(t.limit));let h=null;t.startAt&&(h=function(A){const P=!!A.before,C=A.values||[];return new Er(C,P)}(t.startAt));let f=null;return t.endAt&&(f=function(A){const P=!A.before,C=A.values||[];return new Er(C,P)}(t.endAt)),id(e,s,c,o,u,"F",h,f)}function cc(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=bt(t.unaryFilter.field);return re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=bt(t.unaryFilter.field);return re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=bt(t.unaryFilter.field);return re.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=bt(t.unaryFilter.field);return re.create(c,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(t){return re.create(bt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return st.create(t.compositeFilter.filters.map(r=>cc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(n):U()}function bt(n){return ce.fromServerFormat(n.fieldPath)}function xd(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ud(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.ct=e}}function jd(n){const e=Ld({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this._n=new $d}addToCollectionParentIndex(e,t){return this._n.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(it.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(it.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class $d{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new _e(X.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _e(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ft(0)}static Ln(){return new Ft(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.changes=new $t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,we.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&gn(r.mutation,s,Re.empty(),ee.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,t,r=me()){const s=dt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let c=rr();return o.forEach((u,h)=>{c=c.insert(u,h.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=dt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,me()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((c,u)=>{t.set(c,u)})})}computeViews(e,t,r,s){let o=Tr();const c=pn(),u=function(){return pn()}();return t.forEach((h,f)=>{const y=r.get(f.key);s.has(f.key)&&(y===void 0||y.mutation instanceof Tt)?o=o.insert(f.key,f):y!==void 0?(c.set(f.key,y.mutation.getFieldMask()),gn(y.mutation,f,y.mutation.getFieldMask(),ee.now())):c.set(f.key,Re.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((f,y)=>c.set(f,y)),t.forEach((f,y)=>{var A;return u.set(f,new qd(y,(A=c.get(f))!==null&&A!==void 0?A:null))}),u))}recalculateAndSaveOverlays(e,t){const r=pn();let s=new Ee((c,u)=>c-u),o=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const u of c)u.keys().forEach(h=>{const f=t.get(h);if(f===null)return;let y=r.get(h)||Re.empty();y=u.applyToLocalView(f,y),r.set(h,y);const A=(s.get(u.batchId)||me()).add(h);s=s.insert(u.batchId,A)})}).next(()=>{const c=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,y=h.value,A=Xa();y.forEach(P=>{if(!o.has(P)){const C=ic(t.get(P),r.get(P));C!==null&&A.set(P,C),o=o.add(P)}}),c.push(this.documentOverlayCache.saveOverlays(e,f,A))}return R.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(c){return M.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):od(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const c=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):R.resolve(dt());let u=-1,h=o;return c.next(f=>R.forEach(f,(y,A)=>(u<A.largestBatchId&&(u=A.largestBatchId),o.get(y)?R.resolve():this.remoteDocumentCache.getEntry(e,y).next(P=>{h=h.insert(y,P)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,h,f,me())).next(y=>({batchId:u,changes:Ja(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=rr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let c=rr();return this.indexManager.getCollectionParents(e,o).next(u=>R.forEach(u,h=>{const f=function(A,P){return new Or(P,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(y=>{y.forEach((A,P)=>{c=c.insert(A,P)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(c=>{o.forEach((h,f)=>{const y=f.getKey();c.get(y)===null&&(c=c.insert(y,we.newInvalidDocument(y)))});let u=rr();return c.forEach((h,f)=>{const y=o.get(h);y!==void 0&&gn(y.mutation,f,Re.empty(),ee.now()),Yi(t,f)&&(u=u.insert(h,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return R.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:kt(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:jd(s.bundledQuery),readTime:kt(s.readTime)}}(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.overlays=new Ee(M.comparator),this.hr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=dt();return R.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.ht(e,t,o)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=dt(),o=t.length+1,c=new M(t.child("")),u=this.overlays.getIteratorFrom(c);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new Ee((f,y)=>f-y);const c=this.overlays.getIterator();for(;c.hasNext();){const f=c.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let y=o.get(f.largestBatchId);y===null&&(y=dt(),o=o.insert(f.largestBatchId,y)),y.set(f.getKey(),f)}}const u=dt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,y)=>u.set(f,y)),!(u.size()>=s)););return R.resolve(u)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const c=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Ad(t,r));let o=this.hr.get(t);o===void 0&&(o=me(),this.hr.set(t,o)),this.hr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.Pr=new _e(ne.Ir),this.Tr=new _e(ne.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new ne(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new ne(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new M(new X([])),r=new ne(t,e),s=new ne(t,e+1),o=[];return this.Tr.forEachInRange([r,s],c=>{this.Ar(c),o.push(c.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new M(new X([])),r=new ne(t,e),s=new ne(t,e+1);let o=me();return this.Tr.forEachInRange([r,s],c=>{o=o.add(c.key)}),o}containsKey(e){const t=new ne(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ne{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return M.comparator(e.key,t.key)||H(e.pr,t.pr)}static Er(e,t){return H(e.pr,t.pr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new _e(ne.Ir)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new wd(o,t,r,s);this.mutationQueue.push(c);for(const u of s)this.wr=this.wr.add(new ne(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return R.resolve(c)}lookupMutationBatch(e,t){return R.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.br(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ne(t,0),s=new ne(t,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],c=>{const u=this.Sr(c.pr);o.push(u)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new _e(H);return t.forEach(s=>{const o=new ne(s,0),c=new ne(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,c],u=>{r=r.add(u.pr)})}),R.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const c=new ne(new M(o),0);let u=new _e(H);return this.wr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(h.pr)),!0)},c),R.resolve(this.Dr(u))}Dr(e){const t=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ie(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return R.forEach(t.mutations,s=>{const o=new ne(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new ne(t,0),s=this.wr.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.vr=e,this.docs=function(){return new Ee(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,c=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():we.newInvalidDocument(t))}getEntries(e,t){let r=Tr();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():we.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=Tr();const c=t.path,u=new M(c.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:y}}=h.getNext();if(!c.isPrefixOf(f.path))break;f.path.length>c.length+1||Fh(Uh(y),r)<=0||(s.has(y.key)||Yi(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(e,t,r,s){U()}Fr(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Jd(this)}getSize(e){return R.resolve(this.size)}}class Jd extends Hd{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.persistence=e,this.Mr=new $t(t=>Ji(t),Xi),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new es,this.targetCount=0,this.Lr=Ft.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),R.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Ft(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.qn(t),R.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.Mr.forEach((c,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Mr.delete(c),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(c=>{o.push(s.markPotentiallyOrphaned(e,c))}),R.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t){this.Br={},this.overlays={},this.kr=new xa(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Xd(this),this.indexManager=new Bd,this.remoteDocumentCache=function(s){return new Qd(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Fd(t),this.$r=new Gd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Kd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new Wd(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const s=new Zd(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(e,t){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class Zd extends Bh{constructor(e){super(),this.currentSequenceNumber=e}}class ts{constructor(e){this.persistence=e,this.zr=new es,this.jr=null}static Hr(e){return new ts(e)}get Jr(){if(this.jr)return this.jr;throw U()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),R.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,r=>{const s=M.fromPath(r);return this.Yr(e,s).next(o=>{o||t.removeEntry(s,Q.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return R.or([()=>R.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=s}static Ki(e,t){let r=me(),s=me();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ns(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return uu()?8:$h(le())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.ji(e,t).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.Hi(e,t,s,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new ef;return this.Ji(e,t,c).next(u=>{if(o.result=u,this.Ui)return this.Yi(e,t,c,u.size)})}).next(()=>o.result)}Yi(e,t,r,s){return r.documentReadCount<this.Wi?(ln()<=x.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(ln()<=x.DEBUG&&D("QueryEngine","Query:",un(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(ln()<=x.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pt(t))):R.resolve())}ji(e,t){if(No(t))return R.resolve(null);let r=pt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Mi(t,null,"F"),r=pt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const c=me(...o);return this.zi.getDocuments(e,c).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const f=this.Zi(t,u);return this.Xi(t,f,c,h.readTime)?this.ji(e,Mi(t,null,"F")):this.es(e,f,t,h)}))})))}Hi(e,t,r,s){return No(t)||s.isEqual(Q.min())?R.resolve(null):this.zi.getDocuments(e,r).next(o=>{const c=this.Zi(t,o);return this.Xi(t,c,r,s)?R.resolve(null):(ln()<=x.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),un(t)),this.es(e,c,t,xh(s,-1)).next(u=>u))})}Zi(e,t){let r=new _e(cd(e));return t.forEach((s,o)=>{Yi(e,o)&&(r=r.add(o))}),r}Xi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(e,t,r){return ln()<=x.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",un(t)),this.zi.getDocumentsMatchingQuery(e,t,it.min(),r)}es(e,t,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,r,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new Ee(H),this.rs=new $t(o=>Ji(o),Xi),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zd(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function rf(n,e,t,r){return new nf(n,e,t,r)}async function lc(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],u=[];let h=me();for(const f of s){c.push(f.batchId);for(const y of f.mutations)h=h.add(y.key)}for(const f of o){u.push(f.batchId);for(const y of f.mutations)h=h.add(y.key)}return t.localDocuments.getDocuments(r,h).next(f=>({us:f,removedBatchIds:c,addedBatchIds:u}))})})}function sf(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.os.newChangeBuffer({trackRemovals:!0});return function(u,h,f,y){const A=f.batch,P=A.keys();let C=R.resolve();return P.forEach(k=>{C=C.next(()=>y.getEntry(h,k)).next(L=>{const N=f.docVersions.get(k);ie(N!==null),L.version.compareTo(N)<0&&(A.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),y.addEntry(L)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,A))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=me();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function of(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function af(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Uo{constructor(){this.activeTargetIds=pd()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cf{constructor(){this.no=new Uo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Uo,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir=null;function Ii(){return ir===null?ir=function(){return 268435456+Math.round(2147483648*Math.random())}():ir++,"0x"+ir.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="WebChannelConnection";class df extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(t,r,s,o,c){const u=Ii(),h=this.vo(t,r.toUriEncodedString());D("RestConnection",`Sending RPC '${t}' ${u}:`,h,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,c),this.Mo(t,h,f,s).then(y=>(D("RestConnection",`Received RPC '${t}' ${u}: `,y),y),y=>{throw mr("RestConnection",`RPC '${t}' ${u} failed with error: `,y,"url: ",h,"request:",s),y})}xo(t,r,s,o,c,u){return this.Co(t,r,s,o,c)}Fo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bt}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,c)=>t[c]=o),s&&s.headers.forEach((o,c)=>t[c]=o)}vo(t,r){const s=uf[t];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,s){const o=Ii();return new Promise((c,u)=>{const h=new ba;h.setWithCredentials(!0),h.listenOnce(ka.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case or.NO_ERROR:const y=h.getResponseJson();D(pe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),c(y);break;case or.TIMEOUT:D(pe,`RPC '${e}' ${o} timed out`),u(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case or.HTTP_ERROR:const A=h.getStatus();if(D(pe,`RPC '${e}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let P=h.getResponseJson();Array.isArray(P)&&(P=P[0]);const C=P==null?void 0:P.error;if(C&&C.status&&C.message){const k=function(N){const q=N.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(q)>=0?q:S.UNKNOWN}(C.status);u(new O(k,C.message))}else u(new O(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new O(S.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{D(pe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);D(pe,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,r,15)})}Oo(e,t,r){const s=Ii(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Oa(),u=Na(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new Ca({})),this.Fo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const y=o.join("");D(pe,`Creating RPC '${e}' stream ${s}: ${y}`,h);const A=c.createWebChannel(y,h);let P=!1,C=!1;const k=new hf({lo:N=>{C?D(pe,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(P||(D(pe,`Opening RPC '${e}' stream ${s} transport.`),A.open(),P=!0),D(pe,`RPC '${e}' stream ${s} sending:`,N),A.send(N))},ho:()=>A.close()}),L=(N,q,$)=>{N.listen(q,z=>{try{$(z)}catch(Z){setTimeout(()=>{throw Z},0)}})};return L(A,hn.EventType.OPEN,()=>{C||(D(pe,`RPC '${e}' stream ${s} transport opened.`),k.mo())}),L(A,hn.EventType.CLOSE,()=>{C||(C=!0,D(pe,`RPC '${e}' stream ${s} transport closed`),k.po())}),L(A,hn.EventType.ERROR,N=>{C||(C=!0,mr(pe,`RPC '${e}' stream ${s} transport errored:`,N),k.po(new O(S.UNAVAILABLE,"The operation could not be completed")))}),L(A,hn.EventType.MESSAGE,N=>{var q;if(!C){const $=N.data[0];ie(!!$);const z=$,Z=z.error||((q=z[0])===null||q===void 0?void 0:q.error);if(Z){D(pe,`RPC '${e}' stream ${s} received error:`,Z);const Se=Z.status;let te=function(m){const _=Y[m];if(_!==void 0)return Pd(_)}(Se),E=Z.message;te===void 0&&(te=S.INTERNAL,E="Unknown error status: "+Se+" with message "+Z.message),C=!0,k.po(new O(te,E)),A.close()}else D(pe,`RPC '${e}' stream ${s} received:`,$),k.yo($)}}),L(u,Da.STAT_EVENT,N=>{N.stat===Di.PROXY?D(pe,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Di.NOPROXY&&D(pe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function Ti(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){return new Sd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,r=1e3,s=1.5,o=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,t-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,r,s,o,c,u,h){this.oi=e,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new uc(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(yt(t.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===t&&this.u_(r,s)},r=>{e(()=>{const s=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pf extends ff{constructor(e,t,r,s,o,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,c),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Md(e.writeResults,e.commitTime),r=kt(e.commitTime);return this.listener.A_(r,t)}return ie(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Nd(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Vd(this.serializer,r))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,xi(t,r),s,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(S.UNKNOWN,o.toString())})}xo(e,t,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,u])=>this.connection.xo(e,xi(t,r),s,c,u,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new O(S.UNKNOWN,c.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class mf{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(yt(t),this.y_=!1):D("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(c=>{r.enqueueAndForget(async()=>{kn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=W(h);f.M_.add(4),await Cn(f),f.N_.set("Unknown"),f.M_.delete(4),await xr(f)}(this))})}),this.N_=new mf(r,s)}}async function xr(n){if(kn(n))for(const e of n.x_)await e(!0)}async function Cn(n){for(const e of n.x_)await e(!1)}function kn(n){return W(n).M_.size===0}async function hc(n,e,t){if(!Nr(e))throw e;n.M_.add(1),await Cn(n),n.N_.set("Offline"),t||(t=()=>of(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await xr(n)})}function dc(n,e){return e().catch(t=>hc(n,t,e))}async function Ur(n){const e=W(n),t=ot(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;yf(e);)try{const s=await af(e.localStore,r);if(s===null){e.v_.length===0&&t.n_();break}r=s.batchId,vf(e,s)}catch(s){await hc(e,s)}fc(e)&&pc(e)}function yf(n){return kn(n)&&n.v_.length<10}function vf(n,e){n.v_.push(e);const t=ot(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function fc(n){return kn(n)&&!ot(n).Zo()&&n.v_.length>0}function pc(n){ot(n).start()}async function Ef(n){ot(n).V_()}async function If(n){const e=ot(n);for(const t of n.v_)e.d_(t.mutations)}async function Tf(n,e,t){const r=n.v_.shift(),s=Zi.from(r,e,t);await dc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ur(n)}async function wf(n,e){e&&ot(n).E_&&await async function(r,s){if(function(c){return Rd(c)&&c!==S.ABORTED}(s.code)){const o=r.v_.shift();ot(r).t_(),await dc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Ur(r)}}(n,e),fc(n)&&pc(n)}async function jo(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=kn(t);t.M_.add(3),await Cn(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await xr(t)}async function Af(n,e){const t=W(n);e?(t.M_.delete(2),await xr(t)):e||(t.M_.add(2),await Cn(t),t.N_.set("Unknown"))}function ot(n){return n.k_||(n.k_=function(t,r,s){const o=W(t);return o.f_(),new pf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Ef.bind(null,n),Ao:wf.bind(null,n),R_:If.bind(null,n),A_:Tf.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await Ur(n)):(await n.k_.stop(),n.v_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const c=Date.now()+r,u=new rs(e,t,c,s,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gc(n,e){if(yt("AsyncQueue",`${e}: ${n}`),Nr(n))return new O(S.UNAVAILABLE,`${e}: ${n}`);throw n}class Rf{constructor(){this.queries=new $t(e=>Wa(e),Ka),this.onlineState="Unknown",this.z_=new Set}}function Pf(n){n.z_.forEach(e=>{e.next()})}var Bo,$o;($o=Bo||(Bo={})).J_="default",$o.Cache="cache";class Sf{constructor(e,t,r,s,o,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Sa={},this.ba=new $t(u=>Wa(u),Ka),this.Da=new Map,this.Ca=new Set,this.va=new Ee(M.comparator),this.Fa=new Map,this.Ma=new es,this.xa={},this.Oa=new Map,this.Na=Ft.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function bf(n,e,t){const r=Nf(n);try{const s=await function(c,u){const h=W(c),f=ee.now(),y=u.reduce((C,k)=>C.add(k.key),me());let A,P;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=Tr(),L=me();return h.os.getEntries(C,y).next(N=>{k=N,k.forEach((q,$)=>{$.isValidDocument()||(L=L.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,k)).next(N=>{A=N;const q=[];for(const $ of u){const z=Id($,A.get($.key).overlayedDocument);z!=null&&q.push(new Tt($.key,z,ja(z.value.mapValue),Ue.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,q,u)}).next(N=>{P=N;const q=N.applyToLocalDocumentSet(A,L);return h.documentOverlayCache.saveOverlays(C,N.batchId,q)})}).then(()=>({batchId:P.batchId,changes:Ja(A)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(c,u,h){let f=c.xa[c.currentUser.toKey()];f||(f=new Ee(H)),f=f.insert(u,h),c.xa[c.currentUser.toKey()]=f}(r,s.batchId,t),await Fr(r,s.changes),await Ur(r.remoteStore)}catch(s){const o=gc(s,"Failed to persist write");t.reject(o)}}function Ho(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ba.forEach((o,c)=>{const u=c.view.j_(e);u.snapshot&&s.push(u.snapshot)}),function(c,u){const h=W(c);h.onlineState=u;let f=!1;h.queries.forEach((y,A)=>{for(const P of A.U_)P.j_(u)&&(f=!0)}),f&&Pf(h)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Cf(n,e){const t=W(n),r=e.batch.batchId;try{const s=await sf(t.localStore,e);_c(t,r,null),mc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Fr(t,s)}catch(s){await La(s)}}async function kf(n,e,t){const r=W(n);try{const s=await function(c,u){const h=W(c);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let y;return h.mutationQueue.lookupMutationBatch(f,u).next(A=>(ie(A!==null),y=A.keys(),h.mutationQueue.removeMutationBatch(f,A))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,y,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,y)).next(()=>h.localDocuments.getDocuments(f,y))})}(r.localStore,e);_c(r,e,t),mc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Fr(r,s)}catch(s){await La(s)}}function mc(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function _c(n,e,t){const r=W(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}async function Fr(n,e,t){const r=W(n),s=[],o=[],c=[];r.ba.isEmpty()||(r.ba.forEach((u,h)=>{c.push(r.Ba(h,e,t).then(f=>{if((f||t)&&r.isPrimaryClient){const y=f&&!f.fromCache;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(f){s.push(f);const y=ns.Ki(h.targetId,f);o.push(y)}}))}),await Promise.all(c),r.Sa.h_(s),await async function(h,f){const y=W(h);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(f,P=>R.forEach(P.qi,C=>y.persistence.referenceDelegate.addReference(A,P.targetId,C)).next(()=>R.forEach(P.Qi,C=>y.persistence.referenceDelegate.removeReference(A,P.targetId,C)))))}catch(A){if(!Nr(A))throw A;D("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const P=A.targetId;if(!A.fromCache){const C=y.ns.get(P),k=C.snapshotVersion,L=C.withLastLimboFreeSnapshotVersion(k);y.ns=y.ns.insert(P,L)}}}(r.localStore,o))}async function Df(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await lc(t.localStore,e);t.currentUser=e,function(o,c){o.Oa.forEach(u=>{u.forEach(h=>{h.reject(new O(S.CANCELLED,c))})}),o.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fr(t,r.us)}}function Nf(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cf.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kf.bind(null,e),e}class qo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Lr(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return rf(this.persistence,new tf,e.initialUser,this.serializer)}createPersistence(e){return new Yd(ts.Hr,this.serializer)}createSharedClientState(e){return new cf}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Of{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ho(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Df.bind(null,this.syncEngine),await Af(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Rf}()}createDatastore(e){const t=Lr(e.databaseInfo.databaseId),r=function(o){return new df(o)}(e.databaseInfo);return function(o,c,u,h){return new gf(o,c,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,c,u){return new _f(r,s,o,c,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Ho(this.syncEngine,t,0),function(){return Fo.D()?new Fo:new lf}())}createSyncEngine(e,t){return function(s,o,c,u,h,f,y){const A=new Sf(s,o,c,u,h,f);return y&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const s=W(r);D("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Cn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ge.UNAUTHENTICATED,this.clientId=Ma.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=gc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wi(n,e){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await lc(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function zo(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Lf(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>jo(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>jo(e.remoteStore,s)),n._onlineComponents=e}function Mf(n){return n.name==="FirebaseError"?n.code===S.FAILED_PRECONDITION||n.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Lf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await wi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Mf(t))throw t;mr("Error using user provided cache. Falling back to memory cache: "+t),await wi(n,new qo)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await wi(n,new qo);return n._offlineComponents}async function xf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await zo(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await zo(n,new Of))),n._onlineComponents}function Uf(n){return xf(n).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n,e,t){if(!t)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ff(n,e,t,r){if(e===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ko(n){if(!M.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wo(n){if(M.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function is(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function Ec(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=is(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ff("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yc((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jr{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qo(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bh;switch(r.type){case"firstParty":return new Nh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Go.get(t);r&&(D("ComponentProvider","Removing Datastore"),Go.delete(t),r.terminate())}(this),Promise.resolve()}}function jf(n,e,t,r={}){var s;const o=(n=Ec(n,jr))._getSettings(),c=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==c&&mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:c,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=ge.MOCK_USER;else{u=iu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new ge(f)}n._authCredentials=new Ch(new Va(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ss(this.firestore,e,this._query)}}class Fe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class nt extends ss{constructor(e,t,r){super(e,t,sd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new M(e))}withConverter(e){return new nt(this.firestore,e,this._path)}}function Bf(n,e,...t){if(n=Pe(n),vc("collection","path",e),n instanceof jr){const r=X.fromString(e,...t);return Wo(r),new nt(n,null,r)}{if(!(n instanceof Fe||n instanceof nt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Wo(r),new nt(n.firestore,null,r)}}function $f(n,e,...t){if(n=Pe(n),arguments.length===1&&(e=Ma.newId()),vc("doc","path",e),n instanceof jr){const r=X.fromString(e,...t);return Ko(r),new Fe(n,null,new M(r))}{if(!(n instanceof Fe||n instanceof nt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Ko(r),new Fe(n.firestore,n instanceof nt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new uc(this,"async_queue_retry"),this.hu=()=>{const t=Ti();t&&D("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=Ti();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=Ti();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new ft;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Nr(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(c){let u=c.message||"";return c.stack&&(u=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),u}(r);throw yt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const s=rs.createAndSchedule(this,e,t,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&U()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class Ic extends jr{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new Hf}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tc(this),this._firestoreClient.terminate()}}function qf(n,e){const t=typeof n=="object"?n:Aa(),r=typeof n=="string"?n:"(default)",s=zi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=nu("firestore");o&&jf(s,...o)}return s}function zf(n){return n._firestoreClient||Tc(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Tc(n){var e,t,r;const s=n._freezeSettings(),o=function(u,h,f,y){return new Gh(u,h,f,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,yc(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Vf(n._authCredentials,n._appCheckCredentials,n._queue,o),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(je.fromBase64String(e))}catch(t){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wn(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=/^__.*__$/;class Kf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Tt(e,this.data,this.fieldMask,t,this.fieldTransforms):new bn(e,this.data,t,this.fieldTransforms)}}function Pc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class os{constructor(e,t,r,s,o,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new os(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Rr(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Pc(this.fu)&&Gf.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Wf{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Lr(e)}Fu(e,t,r,s=!1){return new os({fu:e,methodName:t,vu:r,path:ce.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qf(n){const e=n._freezeSettings(),t=Lr(n._databaseId);return new Wf(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Jf(n,e,t,r,s,o={}){const c=n.Fu(o.merge||o.mergeFields?2:0,e,t,s);kc("Data must be an object, but it was:",c,r);const u=bc(r,c);let h,f;if(o.merge)h=new Re(c.fieldMask),f=c.fieldTransforms;else if(o.mergeFields){const y=[];for(const A of o.mergeFields){const P=Xf(e,A,t);if(!c.contains(P))throw new O(S.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);ep(y,P)||y.push(P)}h=new Re(y),f=c.fieldTransforms.filter(A=>h.covers(A.field))}else h=null,f=c.fieldTransforms;return new Kf(new Ae(u),h,f)}function Sc(n,e){if(Cc(n=Pe(n)))return kc("Unsupported field value:",e,n),bc(n,e);if(n instanceof Ac)return function(r,s){if(!Pc(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const o=[];let c=0;for(const u of r){let h=Sc(u,s.bu(c));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),c++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ee.fromDate(r);return{timestampValue:Li(s.serializer,o)}}if(r instanceof ee){const o=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Li(s.serializer,o)}}if(r instanceof Rc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wn)return{bytesValue:bd(s.serializer,r._byteString)};if(r instanceof Fe){const o=s.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw s.Du(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ac(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${is(r)}`)}(n,e)}function bc(n,e){const t={};return Ua(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sn(n,(r,s)=>{const o=Sc(s,e.pu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Cc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof Rc||n instanceof wn||n instanceof Fe||n instanceof Ac)}function kc(n,e,t){if(!Cc(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=is(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function Xf(n,e,t){if((e=Pe(e))instanceof wc)return e._internalPath;if(typeof e=="string")return Zf(n,e);throw Rr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Yf=new RegExp("[~\\*/\\[\\]]");function Zf(n,e,t){if(e.search(Yf)>=0)throw Rr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new wc(...e.split("."))._internalPath}catch{throw Rr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Rr(n,e,t,r,s){const o=r&&!r.isEmpty(),c=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||c)&&(h+=" (found",o&&(h+=` in field ${r}`),c&&(h+=` in document ${s}`),h+=")"),new O(S.INVALID_ARGUMENT,u+n+h)}function ep(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n,e,t){let r;return r=n?n.toFirestore(e):e,r}function np(n,e){const t=Ec(n.firestore,Ic),r=$f(n),s=tp(n.converter,e);return rp(t,[Jf(Qf(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ue.exists(!1))]).then(()=>r)}function rp(n,e){return function(r,s){const o=new ft;return r.asyncQueue.enqueueAndForget(async()=>bf(await Uf(r),s,o)),o.promise}(zf(n),e)}(function(e,t=!0){(function(s){Bt=s})(jt),Vt(new gt("firestore",(r,{instanceIdentifier:s,options:o})=>{const c=r.getProvider("app").getImmediate(),u=new Ic(new kh(r.getProvider("auth-internal")),new Vh(r.getProvider("app-check-internal")),function(f,y){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vr(f.options.projectId,y)}(c,s),c);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),tt(Ro,"4.6.3",e),tt(Ro,"4.6.3","esm2017")})();function Dc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ip=Dc,Nc=new Rn("auth","Firebase",Dc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Hi("@firebase/auth");function sp(n,...e){Pr.logLevel<=x.WARN&&Pr.warn(`Auth (${jt}): ${n}`,...e)}function lr(n,...e){Pr.logLevel<=x.ERROR&&Pr.error(`Auth (${jt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,...e){throw as(n,...e)}function be(n,...e){return as(n,...e)}function Oc(n,e,t){const r=Object.assign(Object.assign({},ip()),{[e]:t});return new Rn("auth","Firebase",r).create(e,{appName:n.name})}function rt(n){return Oc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function as(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Nc.create(n,...e)}function V(n,e,...t){if(!n)throw as(e,...t)}function Me(n){const e="INTERNAL ASSERTION FAILED: "+n;throw lr(e),new Error(e)}function $e(n,e){n||Me(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function op(){return Jo()==="http:"||Jo()==="https:"}function Jo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(op()||au()||"connection"in navigator)?navigator.onLine:!0}function cp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.shortDelay=e,this.longDelay=t,$e(t>e,"Short delay should be less than long delay!"),this.isMobile=su()||cu()}get(){return ap()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(n,e){$e(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new Dn(3e4,6e4);function Nn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function wt(n,e,t,r,s={}){return Mc(n,s,async()=>{let o={},c={};r&&(e==="GET"?c=r:o={body:JSON.stringify(r)});const u=Pn(Object.assign({key:n.config.apiKey},c)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),Vc.fetch()(xc(n,n.config.apiHost,t,u),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function Mc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},lp),e);try{const s=new dp(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const c=await o.json();if("needConfirmation"in c)throw sr(n,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{const u=o.ok?c.errorMessage:c.error.message,[h,f]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw sr(n,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw sr(n,"email-already-in-use",c);if(h==="USER_DISABLED")throw sr(n,"user-disabled",c);const y=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Oc(n,y,f);Be(n,y)}}catch(s){if(s instanceof He)throw s;Be(n,"network-request-failed",{message:String(s)})}}async function Lc(n,e,t,r,s={}){const o=await wt(n,e,t,r,s);return"mfaPendingCredential"in o&&Be(n,"multi-factor-auth-required",{_serverResponse:o}),o}function xc(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?cs(n.config,s):`${n.config.apiScheme}://${s}`}function hp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(be(this.auth,"network-request-failed")),up.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=be(n,e,r);return s.customData._tokenResponse=t,s}function Xo(n){return n!==void 0&&n.enterprise!==void 0}class fp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return hp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pp(n,e){return wt(n,"GET","/v2/recaptchaConfig",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gp(n,e){return wt(n,"POST","/v1/accounts:delete",e)}async function Uc(n,e){return wt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mp(n,e=!1){const t=Pe(n),r=await t.getIdToken(e),s=ls(r);V(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,c=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:mn(Ai(s.auth_time)),issuedAtTime:mn(Ai(s.iat)),expirationTime:mn(Ai(s.exp)),signInProvider:c||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ai(n){return Number(n)*1e3}function ls(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return lr("JWT malformed, contained fewer than 3 sections"),null;try{const s=_a(t);return s?JSON.parse(s):(lr("Failed to decode base64 JWT payload"),null)}catch(s){return lr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Yo(n){const e=ls(n);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof He&&_p(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _p({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mn(this.lastLoginAt),this.creationTime=mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(n){var e;const t=n.auth,r=await n.getIdToken(),s=await An(n,Uc(t,{idToken:r}));V(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const c=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Fc(o.providerUserInfo):[],u=Ep(n.providerData,c),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),y=h?f:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ji(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,A)}async function vp(n){const e=Pe(n);await Sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ep(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fc(n){return n.map(e=>{var{providerId:t}=e,r=$i(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(n,e){const t=await Mc(n,{},async()=>{const r=Pn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,c=xc(n,s,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Vc.fetch()(c,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Tp(n,e){return wt(n,"POST","/v2/accounts:revokeToken",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){V(e.length!==0,"internal-error");const t=Yo(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await Ip(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,c=new Dt;return r&&(V(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),o&&(V(typeof o=="number","internal-error",{appName:e}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dt,this.toJSON())}_performRefresh(){return Me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,e){V(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Le{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,o=$i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ji(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await An(this,this.stsTokenManager.getToken(this.auth,e));return V(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mp(this,e)}reload(){return vp(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Sr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await An(this,gp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,o,c,u,h,f,y;const A=(r=t.displayName)!==null&&r!==void 0?r:void 0,P=(s=t.email)!==null&&s!==void 0?s:void 0,C=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(c=t.photoURL)!==null&&c!==void 0?c:void 0,L=(u=t.tenantId)!==null&&u!==void 0?u:void 0,N=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,q=(f=t.createdAt)!==null&&f!==void 0?f:void 0,$=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:z,emailVerified:Z,isAnonymous:Se,providerData:te,stsTokenManager:E}=t;V(z&&E,e,"internal-error");const p=Dt.fromJSON(this.name,E);V(typeof z=="string",e,"internal-error"),We(A,e.name),We(P,e.name),V(typeof Z=="boolean",e,"internal-error"),V(typeof Se=="boolean",e,"internal-error"),We(C,e.name),We(k,e.name),We(L,e.name),We(N,e.name),We(q,e.name),We($,e.name);const m=new Le({uid:z,auth:e,email:P,emailVerified:Z,displayName:A,isAnonymous:Se,photoURL:k,phoneNumber:C,tenantId:L,stsTokenManager:p,createdAt:q,lastLoginAt:$});return te&&Array.isArray(te)&&(m.providerData=te.map(_=>Object.assign({},_))),N&&(m._redirectEventId=N),m}static async _fromIdTokenResponse(e,t,r=!1){const s=new Dt;s.updateFromServerResponse(t);const o=new Le({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Sr(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];V(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Fc(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),u=new Dt;u.updateFromIdToken(r);const h=new Le({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:c}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ji(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map;function xe(n){$e(n instanceof Function,"Expected a class definition");let e=Zo.get(n);return e?($e(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Zo.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jc.type="NONE";const ea=jc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(n,e,t){return`firebase:${n}:${e}:${t}`}class Nt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=ur(this.userKey,s.apiKey,o),this.fullPersistenceKey=ur("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Nt(xe(ea),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||xe(ea);const c=ur(r,e.config.apiKey,e.name);let u=null;for(const f of t)try{const y=await f._get(c);if(y){const A=Le._fromJSON(e,y);f!==o&&(u=A),o=f;break}}catch{}const h=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Nt(o,e,r):(o=h[0],u&&await o._set(c,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(c)}catch{}})),new Nt(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zc(e))return"Blackberry";if(Gc(e))return"Webos";if(us(e))return"Safari";if((e.includes("chrome/")||$c(e))&&!e.includes("edge/"))return"Chrome";if(qc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bc(n=le()){return/firefox\//i.test(n)}function us(n=le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $c(n=le()){return/crios\//i.test(n)}function Hc(n=le()){return/iemobile/i.test(n)}function qc(n=le()){return/android/i.test(n)}function zc(n=le()){return/blackberry/i.test(n)}function Gc(n=le()){return/webos/i.test(n)}function Br(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wp(n=le()){var e;return Br(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ap(){return lu()&&document.documentMode===10}function Kc(n=le()){return Br(n)||qc(n)||Gc(n)||zc(n)||/windows phone/i.test(n)||Hc(n)}function Rp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n,e=[]){let t;switch(n){case"Browser":t=ta(le());break;case"Worker":t=`${ta(le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((c,u)=>{try{const h=e(o);c(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(n,e={}){return wt(n,"GET","/v2/passwordPolicy",Nn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=6;class Cp{constructor(e){var t,r,s,o;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:bp,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,o,c,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(c=h.containsNumericCharacter)!==null&&c!==void 0?c:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new na(this),this.idTokenSubscription=new na(this),this.beforeStateQueue=new Pp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xe(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Nt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uc(this,{idToken:e}),r=await Le._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===u)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(rt(this));const t=e?Pe(e):null;return t&&V(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sp(this),t=new Cp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xe(e)||this._popupRedirectResolver;V(t,this,"argument-error"),this.redirectPersistenceManager=await Nt.create(this,[xe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let c=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(u,this,"internal-error"),u.then(()=>{c||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{c=!0,h()}}else{const h=e.addObserver(t);return()=>{c=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&sp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ht(n){return Pe(n)}class na{constructor(e){this.auth=e,this.observer=null,this.addObserver=_u(t=>this.observer=t)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dp(n){$r=n}function Qc(n){return $r.loadJS(n)}function Np(){return $r.recaptchaEnterpriseScript}function Op(){return $r.gapiScript}function Vp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Mp="recaptcha-enterprise",Lp="NO_RECAPTCHA";class xp{constructor(e){this.type=Mp,this.auth=Ht(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(c,u)=>{pp(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const f=new fp(h);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,c(f.siteKey)}}).catch(h=>{u(h)})})}function s(o,c,u){const h=window.grecaptcha;Xo(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(f=>{c(f)}).catch(()=>{c(Lp)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,c)=>{r(this.auth).then(u=>{if(!t&&Xo(window.grecaptcha))s(u,o,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Np();h.length!==0&&(h+=u),Qc(h).then(()=>{s(u,o,c)}).catch(f=>{c(f)})}}).catch(u=>{c(u)})})}}async function ra(n,e,t,r=!1){const s=new xp(n);let o;try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c=Object.assign({},e);return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Up(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ra(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ra(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n,e){const t=zi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(pr(o,e??{}))return s;Be(s,"already-initialized")}return t.initialize({options:e})}function jp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(xe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Bp(n,e,t){const r=Ht(n);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=Jc(e),{host:c,port:u}=$p(e),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${c}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:c,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),Hp()}function Jc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function $p(n){const e=Jc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:ia(r.substr(o.length+1))}}else{const[o,c]=r.split(":");return{host:o,port:ia(c)}}}function ia(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Hp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Me("not implemented")}_getIdTokenResponse(e){return Me("not implemented")}_linkToIdToken(e,t){return Me("not implemented")}_getReauthenticationResolver(e){return Me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(n,e){return Lc(n,"POST","/v1/accounts:signInWithIdp",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="http://localhost";class Et extends Xc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,o=$i(t,["providerId","signInMethod"]);if(!r||!s)return null;const c=new Et(r,s);return c.idToken=o.idToken||void 0,c.accessToken=o.accessToken||void 0,c.secret=o.secret,c.nonce=o.nonce,c.pendingToken=o.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ot(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ot(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ot(e,t)}buildRequest(){const e={requestUri:qp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Yc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends On{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch{return null}}}Qe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends On{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Et._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Je.credential(t,r)}catch{return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com";Je.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends On{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com";Xe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends On{constructor(){super("twitter.com")}static credential(e,t){return Et._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ye.credential(t,r)}catch{return null}}}Ye.TWITTER_SIGN_IN_METHOD="twitter.com";Ye.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(n,e){return Lc(n,"POST","/v1/accounts:signUp",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await Le._fromIdTokenResponse(e,r,s),c=sa(r);return new It({user:o,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=sa(r);return new It({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function sa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends He{constructor(e,t,r,s){var o;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,br.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new br(e,t,r,s)}}function Zc(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?br._fromErrorAndOperation(n,o,e,r):o})}async function Gp(n,e,t=!1){const r=await An(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return It._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(n,e,t=!1){const{auth:r}=n;if(Ve(r.app))return Promise.reject(rt(r));const s="reauthenticate";try{const o=await An(n,Zc(r,s,e,n),t);V(o.idToken,r,"internal-error");const c=ls(o.idToken);V(c,r,"internal-error");const{sub:u}=c;return V(n.uid===u,r,"user-mismatch"),It._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(n,e,t=!1){if(Ve(n.app))return Promise.reject(rt(n));const r="signIn",s=await Zc(n,r,e),o=await It._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(n){const e=Ht(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Jp(n,e,t){if(Ve(n.app))return Promise.reject(rt(n));const r=Ht(n),c=await Up(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zp).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Qp(n),h}),u=await It._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(u.user),u}function Xp(n,e,t,r){return Pe(n).onIdTokenChanged(e,t,r)}function Yp(n,e,t){return Pe(n).beforeAuthStateChanged(e,t)}const Cr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cr,"1"),this.storage.removeItem(Cr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(){const n=le();return us(n)||Br(n)}const eg=1e3,tg=10;class tl extends el{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zp()&&Rp(),this.fallbackToPolling=Kc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,u,h)=>{this.notifyListeners(c,h)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(r);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},o=this.storage.getItem(r);Ap()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},eg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tl.type="LOCAL";const ng=tl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends el{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nl.type="SESSION";const rl=nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Hr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(c).map(async f=>f(t.origin,o)),h=await rg(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,c;return new Promise((u,h)=>{const f=hs("",20);s.port1.start();const y=setTimeout(()=>{h(new Error("unsupported_event"))},r);c={messageChannel:s,onMessage(A){const P=A;if(P.data.eventId===f)switch(P.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(P.data.response);break;default:clearTimeout(y),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function sg(n){Ce().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function og(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ag(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function cg(){return il()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="firebaseLocalStorageDb",lg=1,kr="firebaseLocalStorage",ol="fbase_key";class Vn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qr(n,e){return n.transaction([kr],e?"readwrite":"readonly").objectStore(kr)}function ug(){const n=indexedDB.deleteDatabase(sl);return new Vn(n).toPromise()}function Bi(){const n=indexedDB.open(sl,lg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(kr,{keyPath:ol})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(kr)?e(r):(r.close(),await ug(),e(await Bi()))})})}async function oa(n,e,t){const r=qr(n,!0).put({[ol]:e,value:t});return new Vn(r).toPromise()}async function hg(n,e){const t=qr(n,!1).get(e),r=await new Vn(t).toPromise();return r===void 0?null:r.value}function aa(n,e){const t=qr(n,!0).delete(e);return new Vn(t).toPromise()}const dg=800,fg=3;class al{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>fg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return il()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hr._getInstance(cg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await og(),!this.activeServiceWorker)return;this.sender=new ig(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ag()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bi();return await oa(e,Cr,"1"),await aa(e,Cr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>oa(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>hg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>aa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=qr(s,!1).getAll();return new Vn(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}al.type="LOCAL";const pg=al;new Dn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n,e){return e?xe(e):(V(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Xc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mg(n){return Wp(n.auth,new ds(n),n.bypassAuthState)}function _g(n){const{auth:e,user:t}=n;return V(t,e,"internal-error"),Kp(t,new ds(n),n.bypassAuthState)}async function yg(n){const{auth:e,user:t}=n;return V(t,e,"internal-error"),Gp(t,new ds(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:c,type:u}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mg;case"linkViaPopup":case"linkViaRedirect":return yg;case"reauthViaPopup":case"reauthViaRedirect":return _g;default:Be(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new Dn(2e3,1e4);class Ct extends cl{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Ct.currentPopupAction&&Ct.currentPopupAction.cancel(),Ct.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ct.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vg.get())};e()}}Ct.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="pendingRedirect",hr=new Map;class Ig extends cl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=hr.get(this.auth._key());if(!e){try{const r=await Tg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}hr.set(this.auth._key(),e)}return this.bypassAuthState||hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tg(n,e){const t=Rg(e),r=Ag(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function wg(n,e){hr.set(n._key(),e)}function Ag(n){return xe(n._redirectPersistence)}function Rg(n){return ur(Eg,n.config.apiKey,n.name)}async function Pg(n,e,t=!1){if(Ve(n.app))return Promise.reject(rt(n));const r=Ht(n),s=gg(r,e),c=await new Ig(r,s,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=10*60*1e3;class bg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ll(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(be(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ca(e))}saveEventToCache(e){this.cachedEventUids.add(ca(e)),this.lastProcessedEventTime=Date.now()}}function ca(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ll({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Cg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ll(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(n,e={}){return wt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ng=/^https?/;async function Og(n){if(n.config.emulator)return;const{authorizedDomains:e}=await kg(n);for(const t of e)try{if(Vg(t))return}catch{}Be(n,"unauthorized-domain")}function Vg(n){const e=Fi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!Ng.test(t))return!1;if(Dg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new Dn(3e4,6e4);function la(){const n=Ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Lg(n){return new Promise((e,t)=>{var r,s,o;function c(){la(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{la(),t(be(n,"network-request-failed"))},timeout:Mg.get()})}if(!((s=(r=Ce().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Ce().gapi)===null||o===void 0)&&o.load)c();else{const u=Vp("iframefcb");return Ce()[u]=()=>{gapi.load?c():t(be(n,"network-request-failed"))},Qc(`${Op()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw dr=null,e})}let dr=null;function xg(n){return dr=dr||Lg(n),dr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=new Dn(5e3,15e3),Fg="__/auth/iframe",jg="emulator/auth/iframe",Bg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$g=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hg(n){const e=n.config;V(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?cs(e,jg):`https://${n.config.authDomain}/${Fg}`,r={apiKey:e.apiKey,appName:n.name,v:jt},s=$g.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Pn(r).slice(1)}`}async function qg(n){const e=await xg(n),t=Ce().gapi;return V(t,n,"internal-error"),e.open({where:document.body,url:Hg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bg,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const c=be(n,"network-request-failed"),u=Ce().setTimeout(()=>{o(c)},Ug.get());function h(){Ce().clearTimeout(u),s(r)}r.ping(h).then(h,()=>{o(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gg=500,Kg=600,Wg="_blank",Qg="http://localhost";class ua{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jg(n,e,t,r=Gg,s=Kg){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},zg),{width:r.toString(),height:s.toString(),top:o,left:c}),f=le().toLowerCase();t&&(u=$c(f)?Wg:t),Bc(f)&&(e=e||Qg,h.scrollbars="yes");const y=Object.entries(h).reduce((P,[C,k])=>`${P}${C}=${k},`,"");if(wp(f)&&u!=="_self")return Xg(e||"",u),new ua(null);const A=window.open(e||"",u,y);V(A,n,"popup-blocked");try{A.focus()}catch{}return new ua(A)}function Xg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="__/auth/handler",Zg="emulator/auth/handler",em=encodeURIComponent("fac");async function ha(n,e,t,r,s,o){V(n.config.authDomain,n,"auth-domain-config-required"),V(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:jt,eventId:s};if(e instanceof Yc){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",mu(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,A]of Object.entries({}))c[y]=A}if(e instanceof On){const y=e.getScopes().filter(A=>A!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const u=c;for(const y of Object.keys(u))u[y]===void 0&&delete u[y];const h=await n._getAppCheckToken(),f=h?`#${em}=${encodeURIComponent(h)}`:"";return`${tm(n)}?${Pn(u).slice(1)}${f}`}function tm({config:n}){return n.emulator?cs(n,Zg):`https://${n.authDomain}/${Yg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="webStorageSupport";class nm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rl,this._completeRedirectFn=Pg,this._overrideRedirectResult=wg}async _openPopup(e,t,r,s){var o;$e((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const c=await ha(e,t,r,Fi(),s);return Jg(e,c,hs())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await ha(e,t,r,Fi(),s);return sg(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):($e(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await qg(e),r=new bg(e);return t.register("authEvent",s=>(V(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ri,{type:Ri},s=>{var o;const c=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Ri];c!==void 0&&t(!!c),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Og(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kc()||us()||Br()}}const rm=nm;var da="@firebase/auth",fa="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function om(n){Vt(new gt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:c,authDomain:u}=r.options;V(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:c,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wc(n)},f=new kp(r,s,o,h);return jp(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Vt(new gt("auth-internal",e=>{const t=Ht(e.getProvider("auth").getImmediate());return(r=>new im(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(da,fa,sm(n)),tt(da,fa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=5*60,cm=Ea("authIdTokenMaxAge")||am;let pa=null;const lm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>cm)return;const s=t==null?void 0:t.token;pa!==s&&(pa=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function um(n=Aa()){const e=zi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Fp(n,{popupRedirectResolver:rm,persistence:[pg,ng,rl]}),r=Ea("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const c=lm(o.toString());Yp(t,c,()=>c(t.currentUser)),Xp(t,u=>c(u))}}const s=ya("auth");return s&&Bp(t,`http://${s}`),t}function hm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Dp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=be("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",hm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});om("Browser");const dm={apiKey:"AIzaSyAByIxscsDz34bZPjGgHHni9zby-p-sEeE",authDomain:"campusebay-eb4c6.firebaseapp.com",projectId:"campusebay-eb4c6",storageBucket:"campusebay-eb4c6.appspot.com",messagingSenderId:"90517882541",appId:"1:90517882541:web:1f51fad1fb04fa42a4a824"},ul=wa(dm),fm=qf(ul),pm=um(ul),vm=()=>{const[n,e]=Zn.useState(""),[t,r]=Zn.useState(""),[s,o]=Zn.useState(""),c=Zn.useContext(Kl),{loading:u,setLoading:h}=c,f=async()=>{if(h(!0),console.log("Clicked"),n===""||t===""||s==="")return gi.error("All fields are required");try{const y=await Jp(pm,t,s),A={username:n,uid:y.user.uid,email:y.user.email,time:ee.now()},P=Bf(fm,"users");await np(P,A),gi.success("Signup Succesfully"),e(""),r(""),o(""),h(!1)}catch(y){return h(!1),gi.error(y.message)}};return K.jsx("div",{className:"w-full border h-[100vh]",children:K.jsxs("div",{className:"flex items-center justify-center h-full",children:[u&&K.jsx(Wl,{}),K.jsxs("div",{className:"w-1/4 mx-auto  flex flex-col gap-y-5 border rounded-xl py-10 px-10 shadow-xl",children:[K.jsxs("label",{className:"input input-bordered flex items-center gap-2",children:[K.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"w-4 h-4 opacity-70",children:[K.jsx("path",{d:"M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"}),K.jsx("path",{d:"M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"})]}),K.jsx("input",{type:"text",className:"grow",placeholder:"Email",value:t,onChange:y=>{r(y.target.value)}})]}),K.jsxs("label",{className:"input input-bordered flex items-center gap-2",children:[K.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"w-4 h-4 opacity-70",children:K.jsx("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"})}),K.jsx("input",{type:"text",className:"grow",placeholder:"Username",value:n,onChange:y=>{e(y.target.value)}})]}),K.jsxs("label",{className:"input input-bordered flex items-center gap-2",children:[K.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"w-4 h-4 opacity-70",children:K.jsx("path",{fillRule:"evenodd",d:"M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",clipRule:"evenodd"})}),K.jsx("input",{type:"password",className:"grow",placeholder:"Password",value:s,onChange:y=>{o(y.target.value)}})]}),K.jsx("div",{className:" flex justify-center mb-3",children:K.jsx("button",{onClick:f,className:" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg",children:"SignUp"})})]})]})})};export{vm as default};
