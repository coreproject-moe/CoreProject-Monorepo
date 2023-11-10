/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/easytimer@1.1.3/src/easytimer.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function e(e){return e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};function n(){}function r(){r.init.call(this)}function s(e){return void 0===e._maxListeners?r.defaultMaxListeners:e._maxListeners}function i(e,t,r,i){var o,u,a,c;if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');if((u=e._events)?(u.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),u=e._events),a=u[t]):(u=e._events=new n,e._eventsCount=0),a){if("function"==typeof a?a=u[t]=i?[r,a]:[a,r]:i?a.unshift(r):a.push(r),!a.warned&&(o=s(e))&&o>0&&a.length>o){a.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=e,f.type=t,f.count=a.length,c=f,"function"==typeof console.warn?console.warn(c):console.log(c)}}else a=u[t]=r,++e._eventsCount;return e}function o(e,t,n){var r=!1;function s(){e.removeListener(t,s),r||(r=!0,n.apply(e,arguments))}return s.listener=n,s}function u(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function a(e,t){for(var n=new Array(t);t--;)n[t]=e[t];return n}n.prototype=Object.create(null),r.EventEmitter=r,r.usingDomains=!1,r.prototype.domain=void 0,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.init=function(){this.domain=null,r.usingDomains&&undefined.active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new n,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},r.prototype.getMaxListeners=function(){return s(this)},r.prototype.emit=function(e){var t,n,r,s,i,o,u,c="error"===e;if(o=this._events)c=c&&null==o.error;else if(!c)return!1;if(u=this.domain,c){if(t=arguments[1],!u){if(t instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=u,t.domainThrown=!1,u.emit("error",t),!1}if(!(n=o[e]))return!1;var h="function"==typeof n;switch(r=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var r=e.length,s=a(e,r),i=0;i<r;++i)s[i].call(n)}(n,h,this);break;case 2:!function(e,t,n,r){if(t)e.call(n,r);else for(var s=e.length,i=a(e,s),o=0;o<s;++o)i[o].call(n,r)}(n,h,this,arguments[1]);break;case 3:!function(e,t,n,r,s){if(t)e.call(n,r,s);else for(var i=e.length,o=a(e,i),u=0;u<i;++u)o[u].call(n,r,s)}(n,h,this,arguments[1],arguments[2]);break;case 4:!function(e,t,n,r,s,i){if(t)e.call(n,r,s,i);else for(var o=e.length,u=a(e,o),c=0;c<o;++c)u[c].call(n,r,s,i)}(n,h,this,arguments[1],arguments[2],arguments[3]);break;default:for(s=new Array(r-1),i=1;i<r;i++)s[i-1]=arguments[i];!function(e,t,n,r){if(t)e.apply(n,r);else for(var s=e.length,i=a(e,s),o=0;o<s;++o)i[o].apply(n,r)}(n,h,this,s)}return!0},r.prototype.addListener=function(e,t){return i(this,e,t,!1)},r.prototype.on=r.prototype.addListener,r.prototype.prependListener=function(e,t){return i(this,e,t,!0)},r.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,o(this,e,t)),this},r.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,o(this,e,t)),this},r.prototype.removeListener=function(e,t){var r,s,i,o,u;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(s=this._events))return this;if(!(r=s[e]))return this;if(r===t||r.listener&&r.listener===t)0==--this._eventsCount?this._events=new n:(delete s[e],s.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,o=r.length;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){u=r[o].listener,i=o;break}if(i<0)return this;if(1===r.length){if(r[0]=void 0,0==--this._eventsCount)return this._events=new n,this;delete s[e]}else!function(e,t){for(var n=t,r=n+1,s=e.length;r<s;n+=1,r+=1)e[n]=e[r];e.pop()}(r,i);s.removeListener&&this.emit("removeListener",e,u||t)}return this},r.prototype.off=function(e,t){return this.removeListener(e,t)},r.prototype.removeAllListeners=function(e){var t,r;if(!(r=this._events))return this;if(!r.removeListener)return 0===arguments.length?(this._events=new n,this._eventsCount=0):r[e]&&(0==--this._eventsCount?this._events=new n:delete r[e]),this;if(0===arguments.length){for(var s,i=Object.keys(r),o=0;o<i.length;++o)"removeListener"!==(s=i[o])&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=new n,this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},r.prototype.listeners=function(e){var t,n=this._events;return n&&(t=n[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(t):[]},r.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):u.call(e,t)},r.prototype.listenerCount=u,r.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var c=e(Object.freeze({__proto__:null,default:r,EventEmitter:r}));!function(e){var t="undefined"!=typeof window?window.CustomEvent:void 0;"undefined"!=typeof window&&"function"!=typeof t&&((t=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}).prototype=window.Event.prototype,window.CustomEvent=t);var n=10,r=60,s=60,i=24,o="secondTenths",u="seconds",a="minutes",f="hours",h="days",l={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},d=e&&e.exports?c:void 0;function p(){return"undefined"!=typeof document}function v(){return d}function m(e,t){return(e%t+t)%t}function y(e,t,n){var r,s="";for(r=0;r<t;r+=1)s+=String(n);return(s+e).slice(-s.length)}function w(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0,this.toString=function(e,t,n){e=e||["hours","minutes","seconds"],t=t||":",n=n||2;var r,s=[];for(r=0;r<n;r+=1);for(r=0;r<e.length;r+=1)void 0!==this[e[r]]&&s.push(y(this[e[r]],n,"0"));return s.join(t)}}function g(){var e,c,y,g,b,L,_,E=new w,T=new w,x=p()?document.createElement("span"):v()?new d.EventEmitter:void 0,C=!1,k=!1,j={};function A(){return j.countdown}function M(e,t){E[e]+=t,T[e]+=t}function O(e){M(h,e),K("daysUpdated")}function U(e){M(f,e),E.hours=m(E.hours,24),(A()&&23===E.hours||!A()&&0===E.hours)&&O(e),c===f&&(T[a]+=A()?-60:s,T[u]+=A()?-3600:3600,T[o]+=A()?-36e3:36e3),K("hoursUpdated")}function P(e){M(a,e),E.minutes=m(E.minutes,s),(A()&&59===E.minutes||!A()&&0===E.minutes)&&U(e),c===a&&(T[u]+=A()?-60:r,T[o]+=A()?-600:600),K("minutesUpdated")}function V(e){M(u,e),E.seconds=m(E.seconds,r),(A()&&59===E.seconds||!A()&&0===E.seconds)&&P(e),c===u&&(T[o]+=A()?-10:n),K("secondsUpdated")}function N(e){M(o,e),E.secondTenths=m(E.secondTenths,n),(A()&&9===E.secondTenths||!A()&&0===E.secondTenths)&&V(e),K("secondTenthsUpdated")}function R(){clearInterval(e),e=void 0,C=!1,k=!1}function z(){return b instanceof Array&&(j.countdown&&(E.hours<b[3]||E.hours===b[3]&&(E.minutes<b[2]||E.minutes===b[2]&&(E.seconds<b[1]||E.seconds===b[1]&&(E.secondTenths<b[0]||E.secondTenths===b[0]))))||!j.countdown&&(E.hours>b[3]||E.hours===b[3]&&(E.minutes>b[2]||E.minutes===b[2]&&E.seconds>=b[1])))}function D(e){var t,o;c=e&&"string"==typeof e.precision?e.precision:u,g=e&&"function"==typeof e.callback?e.callback:function(){},y=e&&!0===e.countdown?-1:1,_=e&&1==e.countdown,e&&"object"==typeof e.target&&(t=e.target,b=I(t)),e&&"object"==typeof e.startValues&&(o=e.startValues,L=I(o),E.secondTenths=L[0],E.seconds=L[1],E.minutes=L[2],E.hours=L[3],E.days=L[4],T.days=E.days,T.hours=T.days*i+E.hours,T.minutes=T.hours*s+E.minutes,T.seconds=T.minutes*r+E.seconds,T.secondTenths=T.seconds*n+E.secondTenths),b=b||!_?b:[0,0,0,0,0],j={precision:c,callback:g,countdown:"object"==typeof e&&1==e.countdown,target:b,startValues:L}}function I(e){var t,o,u,a,c,f;if("object"==typeof e)if(e instanceof Array){if(5!=e.length)throw new Error("Array size not valid");f=e}else f=[e.secondTenths||0,e.seconds||0,e.minutes||0,e.hours||0,e.days||0];for(var h=0;h<e.length;h+=1)e[h]<0&&(e[h]=0);return t=f[0],o=f[1]+Math.floor(t/n),u=f[2]+Math.floor(o/r),a=f[3]+Math.floor(u/s),c=f[4]+Math.floor(a/i),f[0]=t%n,f[1]=o%r,f[2]=u%s,f[3]=a%i,f[4]=c,f}function S(){R(),function(){for(var e in E)E.hasOwnProperty(e)&&"number"==typeof E[e]&&(E[e]=0);for(var e in T)T.hasOwnProperty(e)&&"number"==typeof T[e]&&(T[e]=0)}(),K("stopped")}function K(e){p()?x.dispatchEvent(new t(e)):v()&&x.emit(e)}void 0!==this&&(this.start=function(t){if(this.isRunning())throw new Error("Timer already running");this.isPaused()||D(t),z()||(function(){var t,n=l[c];switch(c){case h:t=O;break;case f:t=U;break;case a:t=P;break;case o:t=N;break;default:t=V}e=setInterval((function(){t(y),g(E),z()&&(K("targetAchieved"),S())}),n),C=!0,k=!1}(),K("started"))},this.pause=function(){R(),k=!0,K("paused")},this.stop=S,this.isRunning=function(){return C},this.isPaused=function(){return k},this.getTimeValues=function(){return E},this.getTotalTimeValues=function(){return T},this.getConfig=function(){return j},this.addEventListener=function(e,t){p()?x.addEventListener(e,t):v()&&x.on(e,t)},this.removeEventListener=function(e,t){p()?x.removeEventListener(e,t):v()&&x.removeListener(e,t)})}e&&e.exports&&(e.exports=g)}(undefined);export{t as default};
//# sourceMappingURL=/sm/4585a39b76a2c9ec73cf1464907e7e75bc023f8dcb3964742e627c94b8f07b32.map