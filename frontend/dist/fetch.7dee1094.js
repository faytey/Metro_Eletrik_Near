var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r=e.parcelRequiref931;r.register("jezKP",function(e,t){var n=e.exports&&e.exports.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e.exports,"__esModule",{value:!0});let o=n(r("dQaoa")),i=n(r("4r6Dt")),a=n(r("ah6Tu")),s=new i.default.Agent({keepAlive:!0}),l=new a.default.Agent({keepAlive:!0});e.exports.default=function(e,t){return(0,o.default)(e,Object.assign({agent:"http:"===new URL(e.toString()).protocol?s:l},t))}}),r.register("dQaoa",function(t,r){var n=function(){// the only reliable means to get the global object is
// `Function('return this')()`
// However, this causes CSP violations in Chrome apps.
if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw Error("unable to locate global object")}();t.exports=r=n.fetch,n.fetch&&(r.default=n.fetch.bind(n)),r.Headers=n.Headers,r.Request=n.Request,r.Response=n.Response}),r.register("4r6Dt",function(t,n){var o=r("beyFQ"),i=r("iiJHK"),a=r("axiyR"),s=r("l3iXw"),l=r("eAyj5"),u=t.exports;u.request=function(t,r){t="string"==typeof t?l.parse(t):a(t);// Normally, the page is loaded from http or https, so not specifying a protocol
// will result in a (valid) protocol-relative url. However, this won't work if
// the protocol is something else, like 'file:'
var n=-1===e.location.protocol.search(/^https?:$/)?"http:":"",i=t.protocol||n,s=t.hostname||t.host,u=t.port,f=t.path||"/";s&&-1!==s.indexOf(":")&&(s="["+s+"]"),// This may be a relative url. The browser should always be able to interpret it correctly.
t.url=(s?i+"//"+s:"")+(u?":"+u:"")+f,t.method=(t.method||"GET").toUpperCase(),t.headers=t.headers||{};// Also valid opts.auth, opts.mode
var c=new o(t);return r&&c.on("response",r),c},u.get=function(e,t){var r=u.request(e,t);return r.end(),r},u.ClientRequest=o,u.IncomingMessage=i.IncomingMessage,u.Agent=function(){},u.Agent.defaultMaxSockets=4,u.globalAgent=new u.Agent,u.STATUS_CODES=s,u.METHODS=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"]}),r.register("beyFQ",function(t,n){var o=r("bdjQ6").Buffer,i=r("4ZL0H"),a=r("7zO5M"),s=r("dhT4G"),l=r("iiJHK"),u=r("dFZZW"),f=l.IncomingMessage,c=l.readyStates,p=t.exports=function(e){var t,r,n,i=this;u.Writable.call(i),i._opts=e,i._body=[],i._headers={},e.auth&&i.setHeader("Authorization","Basic "+o.from(e.auth).toString("base64")),Object.keys(e.headers).forEach(function(t){i.setHeader(t,e.headers[t])});var s=!0;if("disable-fetch"===e.mode||"requestTimeout"in e&&!a.abortController)// If the use of XHR should be preferred. Not typically needed.
s=!1,n=!0;else if("prefer-streaming"===e.mode)// the accuracy of the 'content-type' header aren't
n=!1;else if("allow-wrong-content-type"===e.mode)n=!a.overrideMimeType;else if(e.mode&&"default"!==e.mode&&"prefer-fast"!==e.mode)throw Error("Invalid value for opts.mode");else n=!0;i._mode=(t=n,r=s,a.fetch&&r?"fetch":a.mozchunkedarraybuffer?"moz-chunked-arraybuffer":a.msstream?"ms-stream":a.arraybuffer&&t?"arraybuffer":"text"),i._fetchTimer=null,i._socketTimeout=null,i._socketTimer=null,i.on("finish",function(){i._onFinish()})};s(p,u.Writable),p.prototype.setHeader=function(e,t){var r=e.toLowerCase();// This check is not necessary, but it prevents warnings from browsers about setting unsafe
// headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
// http-browserify did it, so I will too.
-1===h.indexOf(r)&&(this._headers[r]={name:e,value:t})},p.prototype.getHeader=function(e){var t=this._headers[e.toLowerCase()];return t?t.value:null},p.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},p.prototype._onFinish=function(){var t=this;if(!t._destroyed){var r=t._opts;"timeout"in r&&0!==r.timeout&&t.setTimeout(r.timeout);var n=t._headers,o=null;"GET"!==r.method&&"HEAD"!==r.method&&(o=new Blob(t._body,{type:(n["content-type"]||{}).value||""}));// create flattened list of headers
var s=[];if(Object.keys(n).forEach(function(e){var t=n[e].name,r=n[e].value;Array.isArray(r)?r.forEach(function(e){s.push([t,e])}):s.push([t,r])}),"fetch"===t._mode){var l=null;if(a.abortController){var u=new AbortController;l=u.signal,t._fetchAbortController=u,"requestTimeout"in r&&0!==r.requestTimeout&&(t._fetchTimer=e.setTimeout(function(){t.emit("requestTimeout"),t._fetchAbortController&&t._fetchAbortController.abort()},r.requestTimeout))}e.fetch(t._opts.url,{method:t._opts.method,headers:s,body:o||void 0,mode:"cors",credentials:r.withCredentials?"include":"same-origin",signal:l}).then(function(e){t._fetchResponse=e,t._resetTimers(!1),t._connect()},function(e){t._resetTimers(!0),t._destroyed||t.emit("error",e)})}else{var f=t._xhr=new e.XMLHttpRequest;try{f.open(t._opts.method,t._opts.url,!0)}catch(e){i.nextTick(function(){t.emit("error",e)});return}"responseType"in f&&(f.responseType=t._mode),"withCredentials"in f&&(f.withCredentials=!!r.withCredentials),"text"===t._mode&&"overrideMimeType"in f&&f.overrideMimeType("text/plain; charset=x-user-defined"),"requestTimeout"in r&&(f.timeout=r.requestTimeout,f.ontimeout=function(){t.emit("requestTimeout")}),s.forEach(function(e){f.setRequestHeader(e[0],e[1])}),t._response=null,f.onreadystatechange=function(){switch(f.readyState){case c.LOADING:case c.DONE:t._onXHRProgress()}},"moz-chunked-arraybuffer"===t._mode&&(f.onprogress=function(){t._onXHRProgress()}),f.onerror=function(){t._destroyed||(t._resetTimers(!0),t.emit("error",Error("XHR error")))};try{f.send(o)}catch(e){i.nextTick(function(){t.emit("error",e)});return}}}},p.prototype._onXHRProgress=function(){this._resetTimers(!1),/**
 * Checks if xhr.status is readable and non-zero, indicating no error.
 * Even though the spec says it should be available in readyState 3,
 * accessing it throws an exception in IE8
 */function(e){try{var t=e.status;return null!==t&&0!==t}catch(e){return!1}}(this._xhr)&&!this._destroyed&&(this._response||this._connect(),this._response._onXHRProgress(this._resetTimers.bind(this)))},p.prototype._connect=function(){var e=this;e._destroyed||(e._response=new f(e._xhr,e._fetchResponse,e._mode,e._resetTimers.bind(e)),e._response.on("error",function(t){e.emit("error",t)}),e.emit("response",e._response))},p.prototype._write=function(e,t,r){this._body.push(e),r()},p.prototype._resetTimers=function(t){var r=this;e.clearTimeout(r._socketTimer),r._socketTimer=null,t?(e.clearTimeout(r._fetchTimer),r._fetchTimer=null):r._socketTimeout&&(r._socketTimer=e.setTimeout(function(){r.emit("timeout")},r._socketTimeout))},p.prototype.abort=p.prototype.destroy=function(e){this._destroyed=!0,this._resetTimers(!0),this._response&&(this._response._destroyed=!0),this._xhr?this._xhr.abort():this._fetchAbortController&&this._fetchAbortController.abort(),e&&this.emit("error",e)},p.prototype.end=function(e,t,r){"function"==typeof e&&(r=e,e=void 0),u.Writable.prototype.end.call(this,e,t,r)},p.prototype.setTimeout=function(e,t){t&&this.once("timeout",t),this._socketTimeout=e,this._resetTimers(!1)},p.prototype.flushHeaders=function(){},p.prototype.setNoDelay=function(){},p.prototype.setSocketKeepAlive=function(){};// Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
var h=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"]}),r.register("7zO5M",function(r,n){var o,i,a,s,l,u,f,c;function p(){// Cache the xhr value
if(void 0!==c)return c;if(e.XMLHttpRequest){c=new e.XMLHttpRequest;// If XDomainRequest is available (ie only, where xhr might not work
// cross domain), use the page location. Otherwise use example.com
// Note: this doesn't actually make an http request.
try{c.open("GET",e.XDomainRequest?"/":"https://example.com")}catch(e){c=null}}else c=null;return c}function h(e){var t=p();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch(e){}return!1}function d(e){return"function"==typeof e}t(r.exports,"fetch",function(){return o},function(e){return o=e}),t(r.exports,"writableStream",function(){return i},function(e){return i=e}),t(r.exports,"abortController",function(){return a},function(e){return a=e}),t(r.exports,"arraybuffer",function(){return s},function(e){return s=e}),t(r.exports,"msstream",function(){return l},function(e){return l=e}),t(r.exports,"mozchunkedarraybuffer",function(){return u},function(e){return u=e}),t(r.exports,"overrideMimeType",function(){return f},function(e){return f=e}),o=d(e.fetch)&&d(e.ReadableStream),i=d(e.WritableStream),a=d(e.AbortController),s=o||h("arraybuffer"),l=!o&&h("ms-stream"),u=!o&&h("moz-chunked-arraybuffer"),f=o||!!p()&&d(p().overrideMimeType),c=null// Help gc
}),r.register("iiJHK",function(n,o){t(n.exports,"readyStates",function(){return i},function(e){return i=e}),t(n.exports,"IncomingMessage",function(){return a},function(e){return a=e});var i,a,s=r("4ZL0H"),l=r("bdjQ6").Buffer,u=r("7zO5M"),f=r("dhT4G"),c=r("dFZZW"),p=i={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},h=a=function(e,t,r,n){var o=this;if(c.Readable.call(o),o._mode=r,o.headers={},o.rawHeaders=[],o.trailers={},o.rawTrailers=[],// Fake the 'close' event, but only once 'end' fires
o.on("end",function(){// The nextTick is necessary to prevent the 'request' module from causing an infinite loop
s.nextTick(function(){o.emit("close")})}),"fetch"===r){if(o._fetchResponse=t,o.url=t.url,o.statusCode=t.status,o.statusMessage=t.statusText,t.headers.forEach(function(e,t){o.headers[t.toLowerCase()]=e,o.rawHeaders.push(t,e)}),u.writableStream){var i=new WritableStream({write:function(e){return n(!1),new Promise(function(t,r){o._destroyed?r():o.push(l.from(e))?t():o._resumeFetch=t})},close:function(){n(!0),o._destroyed||o.push(null)},abort:function(e){n(!0),o._destroyed||o.emit("error",e)}});try{t.body.pipeTo(i).catch(function(e){n(!0),o._destroyed||o.emit("error",e)});return}catch(e){}// pipeTo method isn't defined. Can't find a better way to feature test this
}// fallback for when writableStream or pipeTo aren't available
var a=t.body.getReader();!function e(){a.read().then(function(t){if(!o._destroyed){if(n(t.done),t.done){o.push(null);return}o.push(l.from(t.value)),e()}}).catch(function(e){n(!0),o._destroyed||o.emit("error",e)})}()}else if(o._xhr=e,o._pos=0,o.url=e.responseURL,o.statusCode=e.status,o.statusMessage=e.statusText,e.getAllResponseHeaders().split(/\r?\n/).forEach(function(e){var t=e.match(/^([^:]+):\s*(.*)/);if(t){var r=t[1].toLowerCase();"set-cookie"===r?(void 0===o.headers[r]&&(o.headers[r]=[]),o.headers[r].push(t[2])):void 0!==o.headers[r]?o.headers[r]+=", "+t[2]:o.headers[r]=t[2],o.rawHeaders.push(t[1],t[2])}}),o._charset="x-user-defined",!u.overrideMimeType){var f=o.rawHeaders["mime-type"];if(f){var p=f.match(/;\s*charset=([^;])(;|$)/);p&&(o._charset=p[1].toLowerCase())}o._charset||(o._charset="utf-8"// best guess
)}};f(h,c.Readable),h.prototype._read=function(){var e=this._resumeFetch;e&&(this._resumeFetch=null,e())},h.prototype._onXHRProgress=function(t){var r=this,n=r._xhr,o=null;switch(r._mode){case"text":if((o=n.responseText).length>r._pos){var i=o.substr(r._pos);if("x-user-defined"===r._charset){for(var a=l.alloc(i.length),s=0;s<i.length;s++)a[s]=255&i.charCodeAt(s);r.push(a)}else r.push(i,r._charset);r._pos=o.length}break;case"arraybuffer":if(n.readyState!==p.DONE||!n.response)break;o=n.response,r.push(l.from(new Uint8Array(o)));break;case"moz-chunked-arraybuffer":if(o=n.response,n.readyState!==p.LOADING||!o)break;r.push(l.from(new Uint8Array(o)));break;case"ms-stream":if(o=n.response,n.readyState!==p.LOADING)break;var u=new e.MSStreamReader;u.onprogress=function(){u.result.byteLength>r._pos&&(r.push(l.from(new Uint8Array(u.result.slice(r._pos)))),r._pos=u.result.byteLength)},u.onload=function(){t(!0),r.push(null)},// reader.onerror = ??? // TODO: this
u.readAsArrayBuffer(o)}// The ms-stream case handles end separately in reader.onload()
r._xhr.readyState===p.DONE&&"ms-stream"!==r._mode&&(t(!0),r.push(null))}}),r.register("dFZZW",function(e,t){(t=e.exports=r("g4ZW2")).Stream=t,t.Readable=t,t.Writable=r("g6cJS"),t.Duplex=r("hxbeF"),t.Transform=r("k0KBi"),t.PassThrough=r("jYFEV"),t.finished=r("b6CHN"),t.pipeline=r("gPAeR")}),r.register("g4ZW2",function(t,n){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var o,i,a,s,l,u=r("4ZL0H");t.exports=O,/*</replacement>*/O.ReadableState=A,r("fzCxw").EventEmitter;var f=function(e,t){return e.listeners(t).length},c=r("bSqQK"),p=r("bdjQ6").Buffer,h=(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},d=r("ifbub");i=d&&d.debuglog?d.debuglog("stream"):function(){};var y=r("9sE5l"),b=r("ktkM5"),g=r("feK8s").getHighWaterMark,m=r("h2o3J").codes,v=m.ERR_INVALID_ARG_TYPE,w=m.ERR_STREAM_PUSH_AFTER_EOF,_=m.ERR_METHOD_NOT_IMPLEMENTED,S=m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;r("dhT4G")(O,c);var E=b.errorOrDestroy,R=["error","close","destroy","pause","resume"];function A(e,t,n){o=o||r("hxbeF"),e=e||{},"boolean"!=typeof n&&(n=t instanceof o),// object stream flag. Used to make read(n) ignore n and to
// make all the buffer merging and length checks go away
this.objectMode=!!e.objectMode,n&&(this.objectMode=this.objectMode||!!e.readableObjectMode),// the point at which it stops calling _read() to fill the buffer
// Note: 0 is a valid value, means "don't call _read preemptively ever"
this.highWaterMark=g(this,e,"readableHighWaterMark",n),// A linked list is used to store data chunks instead of an array because the
// linked list can remove elements from the beginning faster than
// array.shift()
this.buffer=new y,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,// a flag to be able to tell if the event 'readable'/'data' is emitted
// immediately, or on a later tick.  We set this to true at first, because
// any actions that shouldn't happen until "later" should generally also
// not happen before the first read call.
this.sync=!0,// whenever we return null, then we set a flag to say
// that we're awaiting a 'readable' event emission.
this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,// Should close be emitted on destroy. Defaults to true.
this.emitClose=!1!==e.emitClose,// Should .destroy() be called after 'end' (and potentially 'finish')
this.autoDestroy=!!e.autoDestroy,// has it been destroyed
this.destroyed=!1,// Crypto is kind of old and crusty.  Historically, its default string
// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=e.defaultEncoding||"utf8",// the number of writers that are awaiting a drain event in .pipe()s
this.awaitDrain=0,// if true, a maybeReadMore has been scheduled
this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(a||(a=r("iGJyf").StringDecoder),this.decoder=new a(e.encoding),this.encoding=e.encoding)}function O(e){if(o=o||r("hxbeF"),!(this instanceof O))return new O(e);// Checking for a Stream.Duplex instance is faster here instead of inside
// the ReadableState constructor, at least with V8 6.5
var t=this instanceof o;this._readableState=new A(e,this,t),// legacy
this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),c.call(this)}function x(e,t,r,n,o){i("readableAddChunk",t);var a,s,l,u,f,c=e._readableState;if(null===t)c.reading=!1,function(e,t){if(i("onEofChunk"),!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,t.sync?// Otherwise we risk emitting data in the flow()
// the readable code triggers during a read() call
k(e):(// emit 'readable' now to make sure it gets picked up.
t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,P(e)))}}(e,c);else{if(o||(a=c,s=t,p.isBuffer(s)||s instanceof h||"string"==typeof s||void 0===s||a.objectMode||(l=new v("chunk",["string","Buffer","Uint8Array"],s)),f=l),f)E(e,f);else if(c.objectMode||t&&t.length>0){if("string"==typeof t||c.objectMode||Object.getPrototypeOf(t)===p.prototype||(u=t,t=p.from(u)),n)c.endEmitted?E(e,new S):T(e,c,t,!0);else if(c.ended)E(e,new w);else{if(c.destroyed)return!1;c.reading=!1,c.decoder&&!r?(t=c.decoder.write(t),c.objectMode||0!==t.length?T(e,c,t,!1):M(e,c)):T(e,c,t,!1)}}else n||(c.reading=!1,M(e,c))}// We can push more data if we are below the highWaterMark.
// Also, if we have no data yet, we can stand some more bytes.
// This is to work around cases where hwm=0, such as the repl.
return!c.ended&&(c.length<c.highWaterMark||0===c.length)}function T(e,t,r,n){t.flowing&&0===t.length&&!t.sync?(t.awaitDrain=0,e.emit("data",r)):(// update the buffer info.
t.length+=t.objectMode?1:r.length,n?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&k(e)),M(e,t)}// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function j(e,t){if(e<=0||0===t.length&&t.ended)return 0;if(t.objectMode)return 1;if(e!=e)return(// Only flow one buffer at a time
t.flowing&&t.length?t.buffer.head.data.length:t.length);// If we're asking for more than the current hwm, then raise the hwm.
if(e>t.highWaterMark){var r;t.highWaterMark=((r=e)>=1073741824?r=1073741824:(// Get the next highest power of 2 to prevent increasing hwm excessively in
// tiny amounts
r--,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r++),r)}return e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0)}// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function k(e){var t=e._readableState;i("emitReadable",t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(i("emitReadable",t.flowing),t.emittedReadable=!0,u.nextTick(P,e))}function P(e){var t=e._readableState;i("emitReadable_",t.destroyed,t.length,t.ended),!t.destroyed&&(t.length||t.ended)&&(e.emit("readable"),t.emittedReadable=!1),// The stream needs another readable event if
// 1. It is not flowing, as the flow mechanism will take
//    care of it.
// 2. It is not ended.
// 3. It is below the highWaterMark, so we can schedule
//    another readable later.
t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,I(e)}// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function M(e,t){t.readingMore||(t.readingMore=!0,u.nextTick(C,e,t))}function C(e,t){// Attempt to read more data if we should.
//
// The conditions for reading more data are (one of):
// - Not enough data buffered (state.length < state.highWaterMark). The loop
//   is responsible for filling the buffer with enough data if such data
//   is available. If highWaterMark is 0 and we are not in the flowing mode
//   we should _not_ attempt to buffer any extra data. We'll get more data
//   when the stream consumer calls read() instead.
// - No data in the buffer, and the stream is in flowing mode. In this mode
//   the loop below is responsible for ensuring read() is called. Failing to
//   call read here would abort the flow and there's no other mechanism for
//   continuing the flow if the stream consumer has just subscribed to the
//   'data' event.
//
// In addition to the above conditions to keep reading data, the following
// conditions prevent the data from being read:
// - The stream has ended (state.ended).
// - There is already a pending 'read' operation (state.reading). This is a
//   case where the the stream has called the implementation defined _read()
//   method, but they are processing the call asynchronously and have _not_
//   called push() with new data. In this case we skip performing more
//   read()s. The execution ends in this method again after the _read() ends
//   up calling push() with more data.
for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&0===t.length);){var r=t.length;if(i("maybeReadMore read 0"),e.read(0),r===t.length)break}t.readingMore=!1}function N(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0,t.resumeScheduled&&!t.paused?// the upcoming resume will not flow.
t.flowing=!0:e.listenerCount("data")>0&&e.resume()}function L(e){i("readable nexttick read 0"),e.read(0)}function D(e,t){i("resume",t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit("resume"),I(e),t.flowing&&!t.reading&&e.read(0)}function I(e){var t=e._readableState;for(i("flow",t.flowing);t.flowing&&null!==e.read(););}// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function F(e,t){var r;return(// nothing buffered
0===t.length?null:(t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):r=t.buffer.consume(e,t.decoder),r))}function q(e){var t=e._readableState;i("endReadable",t.endEmitted),t.endEmitted||(t.ended=!0,u.nextTick(U,t,e))}function U(e,t){// Check that we didn't get one last unshift.
if(i("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&0===e.length&&(e.endEmitted=!0,t.readable=!1,t.emit("end"),e.autoDestroy)){// In case of duplex streams we need a way to detect
// if the writable side is ready for autoDestroy as well
var r=t._writableState;(!r||r.autoDestroy&&r.finished)&&t.destroy()}}function H(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return -1}Object.defineProperty(O.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){// we ignore the value if the stream
// has not been initialized yet
this._readableState&&// backward compatibility, the user is explicitly
// managing destroyed
(this._readableState.destroyed=e)}}),O.prototype.destroy=b.destroy,O.prototype._undestroy=b.undestroy,O.prototype._destroy=function(e,t){t(e)},// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
O.prototype.push=function(e,t){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof e&&((t=t||n.defaultEncoding)!==n.encoding&&(e=p.from(e,t),t=""),r=!0),x(this,e,t,!1,r)},// Unshift should *always* be something directly out of read()
O.prototype.unshift=function(e){return x(this,e,null,!0,!1)},O.prototype.isPaused=function(){return!1===this._readableState.flowing},// backwards compatibility.
O.prototype.setEncoding=function(e){a||(a=r("iGJyf").StringDecoder);var t=new a(e);this._readableState.decoder=t,// If setEncoding(null), decoder.encoding equals utf8
this._readableState.encoding=this._readableState.decoder.encoding;for(// Iterate over current buffer to convert already stored Buffers:
var n=this._readableState.buffer.head,o="";null!==n;)o+=t.write(n.data),n=n.next;return this._readableState.buffer.clear(),""!==o&&this._readableState.buffer.push(o),this._readableState.length=o.length,this},// you can override either this method, or the async _read(n) below.
O.prototype.read=function(e){i("read",e),e=parseInt(e,10);var t,r=this._readableState,n=e;// if we're doing read(0) to trigger a readable event, but we
// already have a bunch of data in the buffer, then just trigger
// the 'readable' event and move on.
if(0!==e&&(r.emittedReadable=!1),0===e&&r.needReadable&&((0!==r.highWaterMark?r.length>=r.highWaterMark:r.length>0)||r.ended))return i("read: emitReadable",r.length,r.ended),0===r.length&&r.ended?q(this):k(this),null;// if we've ended, and we're now clear, then finish it up.
if(0===(e=j(e,r))&&r.ended)return 0===r.length&&q(this),null;// All the actual chunk generation logic needs to be
// *below* the call to _read.  The reason is that in certain
// synthetic stream cases, such as passthrough streams, _read
// may be a completely synchronous operation which may change
// the state of the read buffer, providing enough data when
// before there was *not* enough.
//
// So, the steps are:
// 1. Figure out what the state of things will be after we do
// a read from the buffer.
//
// 2. If that resulting state will trigger a _read, then call _read.
// Note that this may be asynchronous, or synchronous.  Yes, it is
// deeply ugly to write APIs this way, but that still doesn't mean
// that the Readable class should behave improperly, as streams are
// designed to be sync/async agnostic.
// Take note if the _read call is sync or async (ie, if the read call
// has returned yet), so that we know whether or not it's safe to emit
// 'readable' etc.
//
// 3. Actually pull the requested chunks out of the buffer and return.
// if we need a readable event, then we need to do some reading.
var o=r.needReadable;return i("need readable",o),(0===r.length||r.length-e<r.highWaterMark)&&i("length less than watermark",o=!0),r.ended||r.reading?i("reading or ended",o=!1):o&&(i("do read"),r.reading=!0,r.sync=!0,0===r.length&&(r.needReadable=!0),// call internal read method
this._read(r.highWaterMark),r.sync=!1,r.reading||(e=j(n,r))),null===(t=e>0?F(e,r):null)?(r.needReadable=r.length<=r.highWaterMark,e=0):(r.length-=e,r.awaitDrain=0),0===r.length&&(r.ended||(r.needReadable=!0),n!==e&&r.ended&&q(this)),null!==t&&this.emit("data",t),t},// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
O.prototype._read=function(e){E(this,new _("_read()"))},O.prototype.pipe=function(e,t){var r=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=e;break;case 1:n.pipes=[n.pipes,e];break;default:n.pipes.push(e)}n.pipesCount+=1,i("pipe count=%d opts=%j",n.pipesCount,t);var o=t&&!1===t.end||e===u.stdout||e===u.stderr?y:a;function a(){i("onend"),e.end()}n.endEmitted?u.nextTick(o):r.once("end",o),e.on("unpipe",function t(o,u){i("onunpipe"),o===r&&u&&!1===u.hasUnpiped&&(u.hasUnpiped=!0,i("cleanup"),// cleanup event handlers once the pipe is broken
e.removeListener("close",h),e.removeListener("finish",d),e.removeListener("drain",s),e.removeListener("error",p),e.removeListener("unpipe",t),r.removeListener("end",a),r.removeListener("end",y),r.removeListener("data",c),l=!0,n.awaitDrain&&(!e._writableState||e._writableState.needDrain)&&s())});// when the dest drains, it reduces the awaitDrain counter
// on the source.  This would be more elegant with a .once()
// handler in flow(), but adding and removing repeatedly is
// too slow.
var s=function(){var e=r._readableState;i("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&f(r,"data")&&(e.flowing=!0,I(r))};e.on("drain",s);var l=!1;function c(t){i("ondata");var o=e.write(t);i("dest.write",o),!1===o&&((1===n.pipesCount&&n.pipes===e||n.pipesCount>1&&-1!==H(n.pipes,e))&&!l&&(i("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause())}// if the dest has an error, then stop piping into it.
// however, don't suppress the throwing behavior for this.
function p(t){i("onerror",t),y(),e.removeListener("error",p),0===f(e,"error")&&E(e,t)}// Both close and finish should trigger unpipe, but only once.
function h(){e.removeListener("finish",d),y()}function d(){i("onfinish"),e.removeListener("close",h),y()}function y(){i("unpipe"),r.unpipe(e)}return r.on("data",c),// Make sure our error handler is attached before userland ones.
function(e,t,r){// Sadly this is not cacheable as some libraries bundle their own
// event emitter implementation with them.
if("function"==typeof e.prependListener)return e.prependListener(t,r);// This is a hack to make sure that our error handler is attached before any
// userland ones.  NEVER DO THIS. This is here only because this code needs
// to continue to work with older versions of Node.js that do not include
// the prependListener() method. The goal is to eventually remove this hack.
e._events&&e._events[t]?Array.isArray(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}(e,"error",p),e.once("close",h),e.once("finish",d),// tell the dest that it's being piped to
e.emit("pipe",r),n.flowing||(i("pipe resume"),r.resume()),e},O.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};// if we're not piping anywhere, then do nothing.
if(0===t.pipesCount)return this;// just one destination.  most common case.
if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),// got a match.
t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r)),this;// slow case. multiple pipe destinations.
if(!e){// remove all.
var n=t.pipes,o=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var i=0;i<o;i++)n[i].emit("unpipe",this,{hasUnpiped:!1});return this}// try to find the right one.
var a=H(t.pipes,e);return -1===a||(t.pipes.splice(a,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r)),this},// set up data events if they are asked for
// Ensure readable listeners eventually get something
O.prototype.on=function(e,t){var r=c.prototype.on.call(this,e,t),n=this._readableState;return"data"===e?(// update readableListening so that resume() may be a no-op
// a few lines down. This is needed to support once('readable').
n.readableListening=this.listenerCount("readable")>0,!1!==n.flowing&&this.resume()):"readable"!==e||n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.flowing=!1,n.emittedReadable=!1,i("on readable",n.length,n.reading),n.length?k(this):n.reading||u.nextTick(L,this)),r},O.prototype.addListener=O.prototype.on,O.prototype.removeListener=function(e,t){var r=c.prototype.removeListener.call(this,e,t);return"readable"===e&&// readable and reset the state. However this needs to happen
// after readable has been emitted but before I/O (nextTick) to
// support once('readable', fn) cycles. This means that calling
// resume within the same tick will have no
// effect.
u.nextTick(N,this),r},O.prototype.removeAllListeners=function(e){var t=c.prototype.removeAllListeners.apply(this,arguments);return("readable"===e||void 0===e)&&// readable and reset the state. However this needs to happen
// after readable has been emitted but before I/O (nextTick) to
// support once('readable', fn) cycles. This means that calling
// resume within the same tick will have no
// effect.
u.nextTick(N,this),t},// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
O.prototype.resume=function(){var e=this._readableState;return e.flowing||(i("resume"),// we flow only if there is no one listening
// for readable, but we still have to call
// resume()
e.flowing=!e.readableListening,e.resumeScheduled||(e.resumeScheduled=!0,u.nextTick(D,this,e))),e.paused=!1,this},O.prototype.pause=function(){return i("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(i("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
O.prototype.wrap=function(e){var t=this,r=this._readableState,n=!1;// proxy all the other methods.
// important when wrapping filters and duplexes.
for(var o in e.on("end",function(){if(i("wrapped end"),r.decoder&&!r.ended){var e=r.decoder.end();e&&e.length&&t.push(e)}t.push(null)}),e.on("data",function(o){// don't skip over falsy values in objectMode
i("wrapped data"),r.decoder&&(o=r.decoder.write(o)),(!r.objectMode||null!=o)&&(r.objectMode||o&&o.length)&&(t.push(o)||(n=!0,e.pause()))}),e)void 0===this[o]&&"function"==typeof e[o]&&(this[o]=function(t){return function(){return e[t].apply(e,arguments)}}(o));// proxy certain important events.
for(var a=0;a<R.length;a++)e.on(R[a],this.emit.bind(this,R[a]));return(// when we try to consume some more bytes, simply unpause the
// underlying stream.
this._read=function(t){i("wrapped _read",t),n&&(n=!1,e.resume())},this)},"function"==typeof Symbol&&(O.prototype[Symbol.asyncIterator]=function(){return void 0===s&&(s=r("iO1WB")),s(this)}),Object.defineProperty(O.prototype,"readableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(O.prototype,"readableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(O.prototype,"readableFlowing",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=e)}}),// exposed for testing purposes only.
O._fromList=F,Object.defineProperty(O.prototype,"readableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(O.from=function(e,t){return void 0===l&&(l=r("bcqRj")),l(O,e,t)})}),r.register("bSqQK",function(e,t){e.exports=r("fzCxw").EventEmitter}),r.register("9sE5l",function(e,t){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=a(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function a(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var s=r("bdjQ6").Buffer,l=r("ifbub").inspect,u=l&&l.custom||"inspect";e.exports=/*#__PURE__*/function(){var e,t;function r(){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,r),this.head=null,this.tail=null,this.length=0}return e=[{key:"push",value:function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length}},{key:"unshift",value:function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length}},{key:"shift",value:function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r}},{key:"concat",value:function(e){if(0===this.length)return s.alloc(0);for(var t,r,n=s.allocUnsafe(e>>>0),o=this.head,i=0;o;)t=o.data,r=i,s.prototype.copy.call(t,n,r),i+=o.data.length,o=o.next;return n}},{key:"consume",value:function(e,t){var r;return e<this.head.data.length?(// `slice` is the same for buffers and strings.
r=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):r=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(e){var t=this.head,r=1,n=t.data;for(e-=n.length;t=t.next;){var o=t.data,i=e>o.length?o.length:e;if(i===o.length?n+=o:n+=o.slice(0,e),0==(e-=i)){i===o.length?(++r,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=o.slice(i));break}++r}return this.length-=r,n}},{key:"_getBuffer",value:function(e){var t=s.allocUnsafe(e),r=this.head,n=1;for(r.data.copy(t),e-=r.data.length;r=r.next;){var o=r.data,i=e>o.length?o.length:e;if(o.copy(t,t.length-e,0,i),0==(e-=i)){i===o.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=o.slice(i));break}++n}return this.length-=n,t}},{key:u,value:function(e,t){return l(this,o(o({},t),{},{// Only inspect one level.
depth:0,// It should not recurse.
customInspect:!1}))}}],i(r.prototype,e),t&&i(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}()}),r.register("ktkM5",function(e,t){var n=r("4ZL0H");function o(e,t){a(e,t),i(e)}function i(e){(!e._writableState||e._writableState.emitClose)&&(!e._readableState||e._readableState.emitClose)&&e.emit("close")}function a(e,t){e.emit("error",t)}e.exports={destroy:// undocumented cb() API, needed for core, not for public API
function(e,t){var r=this,s=this._readableState&&this._readableState.destroyed,l=this._writableState&&this._writableState.destroyed;return s||l?t?t(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,n.nextTick(a,this,e)):n.nextTick(a,this,e)):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!t&&e?r._writableState?r._writableState.errorEmitted?n.nextTick(i,r):(r._writableState.errorEmitted=!0,n.nextTick(o,r,e)):n.nextTick(o,r,e):t?(n.nextTick(i,r),t(e)):n.nextTick(i,r)})),this},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(e,t){// We have tests that rely on errors being emitted
// in the same tick, so changing this is semver major.
// For now when you opt-in to autoDestroy we allow
// the error to be emitted nextTick. In a future
// semver major update we should change the default to this.
var r=e._readableState,n=e._writableState;r&&r.autoDestroy||n&&n.autoDestroy?e.destroy(t):e.emit("error",t)}}}),r.register("feK8s",function(e,t){var n=r("h2o3J").codes.ERR_INVALID_OPT_VALUE;e.exports={getHighWaterMark:function(e,t,r,o){var i=null!=t.highWaterMark?t.highWaterMark:o?t[r]:null;if(null!=i){if(!(isFinite(i)&&Math.floor(i)===i)||i<0){var a=o?r:"highWaterMark";throw new n(a,i)}return Math.floor(i)}// Default value
return e.objectMode?16:16384}}}),r.register("h2o3J",function(e,r){t(e.exports,"codes",function(){return n},function(e){return n=e});var n,o={};function i(e,t,r){r||(r=Error);var n=/*#__PURE__*/function(e){function r(r,n,o){return e.call(this,"string"==typeof t?t:t(r,n,o))||this}return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e,r}(r);n.prototype.name=r.name,n.prototype.code=e,o[e]=n}// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function a(e,t){if(!Array.isArray(e))return"of ".concat(t," ").concat(String(e));var r=e.length;return(e=e.map(function(e){return String(e)}),r>2)?"one of ".concat(t," ").concat(e.slice(0,r-1).join(", "),", or ")+e[r-1]:2===r?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
i("ERR_INVALID_OPT_VALUE",function(e,t){return'The value "'+t+'" is invalid for option "'+e+'"'},TypeError),i("ERR_INVALID_ARG_TYPE",function(e,t,r){if("string"==typeof t&&(n="not ",t.substr(!o||o<0?0:+o,n.length)===n)?(u="must not be",t=t.replace(/^not /,"")):u="must be",i=" argument",(void 0===s||s>e.length)&&(s=e.length),e.substring(s-i.length,s)===i)f="The ".concat(e," ").concat(u," ").concat(a(t,"type"));else{var n,o,i,s,l,u,f,c=("number"!=typeof l&&(l=0),l+1>e.length||-1===e.indexOf(".",l))?"argument":"property";f='The "'.concat(e,'" ').concat(c," ").concat(u," ").concat(a(t,"type"))}return f+". Received type ".concat(typeof r)},TypeError),i("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),i("ERR_METHOD_NOT_IMPLEMENTED",function(e){return"The "+e+" method is not implemented"}),i("ERR_STREAM_PREMATURE_CLOSE","Premature close"),i("ERR_STREAM_DESTROYED",function(e){return"Cannot call "+e+" after a stream was destroyed"}),i("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),i("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),i("ERR_STREAM_WRITE_AFTER_END","write after end"),i("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),i("ERR_UNKNOWN_ENCODING",function(e){return"Unknown encoding: "+e},TypeError),i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),n=o}),r.register("hxbeF",function(e,t){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
var n=r("4ZL0H"),o=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};/*</replacement>*/e.exports=f;var i=r("g4ZW2"),a=r("g6cJS");r("dhT4G")(f,i);for(var s=o(a.prototype),l=0;l<s.length;l++){var u=s[l];f.prototype[u]||(f.prototype[u]=a.prototype[u])}function f(e){if(!(this instanceof f))return new f(e);i.call(this,e),a.call(this,e),this.allowHalfOpen=!0,e&&(!1===e.readable&&(this.readable=!1),!1===e.writable&&(this.writable=!1),!1===e.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",c)))}// the no-half-open enforcer
function c(){// If the writable side ended, then we're ok.
this._writableState.ended||// no more data can be written.
// But allow more writes to happen in this tick.
n.nextTick(p,this)}function p(e){e.end()}Object.defineProperty(f.prototype,"writableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(f.prototype,"writableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(f.prototype,"writableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(f.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(e){// we ignore the value if the stream
// has not been initialized yet
void 0!==this._readableState&&void 0!==this._writableState&&(// backward compatibility, the user is explicitly
// managing destroyed
this._readableState.destroyed=e,this._writableState.destroyed=e)}})}),r.register("g6cJS",function(t,n){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
var o,i,a=r("4ZL0H");// It seems a linked list but it is not
// there will be only 2 of these for each stream
function s(e){var t=this;this.next=null,this.entry=null,this.finish=function(){(function(e,t,r){var n=e.entry;for(e.entry=null;n;){var o=n.callback;t.pendingcb--,o(void 0),n=n.next}// reuse the free corkReq.
t.corkedRequestsFree.next=e})(t,e)}}t.exports=O,/*</replacement>*/O.WritableState=A;/*<replacement>*/var l={deprecate:r("4SymK")},u=r("bSqQK"),f=r("bdjQ6").Buffer,c=(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},p=r("ktkM5"),h=r("feK8s").getHighWaterMark,d=r("h2o3J").codes,y=d.ERR_INVALID_ARG_TYPE,b=d.ERR_METHOD_NOT_IMPLEMENTED,g=d.ERR_MULTIPLE_CALLBACK,m=d.ERR_STREAM_CANNOT_PIPE,v=d.ERR_STREAM_DESTROYED,w=d.ERR_STREAM_NULL_VALUES,_=d.ERR_STREAM_WRITE_AFTER_END,S=d.ERR_UNKNOWN_ENCODING,E=p.errorOrDestroy;function R(){}function A(e,t,n){o=o||r("hxbeF"),e=e||{},"boolean"!=typeof n&&(n=t instanceof o),// object stream flag to indicate whether or not this stream
// contains buffers or objects.
this.objectMode=!!e.objectMode,n&&(this.objectMode=this.objectMode||!!e.writableObjectMode),// the point at which write() starts returning false
// Note: 0 is a valid value, means that we always return false if
// the entire buffer is not flushed immediately on write()
this.highWaterMark=h(this,e,"writableHighWaterMark",n),// if _final has been called
this.finalCalled=!1,// drain event flag.
this.needDrain=!1,// at the start of calling end()
this.ending=!1,// when end() has been called, and returned
this.ended=!1,// when 'finish' is emitted
this.finished=!1,// has it been destroyed
this.destroyed=!1;// should we decode strings into buffers before passing to _write?
// this is here so that some node-core streams can optimize string
// handling at a lower level.
var i=!1===e.decodeStrings;this.decodeStrings=!i,// Crypto is kind of old and crusty.  Historically, its default string
// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=e.defaultEncoding||"utf8",// not an actual buffer we keep track of, but a measurement
// of how much we're waiting to get pushed to some underlying
// socket or file.
this.length=0,// a flag to see when we're in the middle of a write.
this.writing=!1,// when true all writes will be buffered until .uncork() call
this.corked=0,// a flag to be able to tell if the onwrite cb is called immediately,
// or on a later tick.  We set this to true at first, because any
// actions that shouldn't happen until "later" should generally also
// not happen before the first write call.
this.sync=!0,// a flag to know if we're processing previously buffered items, which
// may call the _write() callback in the same tick, so that we don't
// end up in an overlapped onwrite situation.
this.bufferProcessing=!1,// the callback that's passed to _write(chunk,cb)
this.onwrite=function(e){(function(e,t){var r=e._writableState,n=r.sync,o=r.writecb;if("function"!=typeof o)throw new g;if(r.writing=!1,r.writecb=null,r.length-=r.writelen,r.writelen=0,t)--r.pendingcb,n?(// defer the callback if we are being called synchronously
// to avoid piling up things on the stack
a.nextTick(o,t),// this can emit finish, and it will always happen
// after error
a.nextTick(M,e,r),e._writableState.errorEmitted=!0,E(e,t)):(// the caller expect this to happen before if
// it is async
o(t),e._writableState.errorEmitted=!0,E(e,t),// this can emit finish, but finish must
// always follow error
M(e,r));else{// Check if we're actually ready to finish, but don't emit yet
var i=k(r)||e.destroyed;i||r.corked||r.bufferProcessing||!r.bufferedRequest||j(e,r),n?a.nextTick(T,e,r,i,o):T(e,r,i,o)}})(t,e)},// the callback that the user supplies to write(chunk,encoding,cb)
this.writecb=null,// the amount that is being written when _write is called.
this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,// number of pending user-supplied write callbacks
// this must be 0 before 'finish' can be emitted
this.pendingcb=0,// emit prefinish if the only thing we're waiting for is _write cbs
// This is relevant for synchronous Transform streams
this.prefinished=!1,// True if the error was already emitted and should not be thrown again
this.errorEmitted=!1,// Should close be emitted on destroy. Defaults to true.
this.emitClose=!1!==e.emitClose,// Should .destroy() be called after 'finish' (and potentially 'end')
this.autoDestroy=!!e.autoDestroy,// count buffered requests
this.bufferedRequestCount=0,// allocate the first CorkedRequest, there is always
// one allocated and free to use, and we maintain at most two
this.corkedRequestsFree=new s(this)}function O(e){// Writable ctor is applied to Duplexes, too.
// `realHasInstance` is necessary because using plain `instanceof`
// would return false, as no `_writableState` property is attached.
// Trying to use the custom `instanceof` for Writable here will also break the
// Node.js LazyTransform implementation, which has a non-trivial getter for
// `_writableState` that would lead to infinite recursion.
// Checking for a Stream.Duplex instance is faster here instead of inside
// the WritableState constructor, at least with V8 6.5
var t=this instanceof(o=o||r("hxbeF"));if(!t&&!i.call(O,this))return new O(e);this._writableState=new A(e,this,t),// legacy.
this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),u.call(this)}function x(e,t,r,n,o,i,a){t.writelen=n,t.writecb=a,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new v("write")):r?e._writev(o,t.onwrite):e._write(o,i,t.onwrite),t.sync=!1}function T(e,t,r,n){r||0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain")),t.pendingcb--,n(),M(e,t)}// if there's something in the buffer waiting, then process it
function j(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=Array(t.bufferedRequestCount),o=t.corkedRequestsFree;o.entry=r;for(var i=0,a=!0;r;)n[i]=r,r.isBuf||(a=!1),r=r.next,i+=1;n.allBuffers=a,x(e,t,!0,t.length,n,"",o.finish),// doWrite is almost always async, defer these to save a bit of time
// as the hot path ends with doWrite
t.pendingcb++,t.lastBufferedRequest=null,o.next?(t.corkedRequestsFree=o.next,o.next=null):t.corkedRequestsFree=new s(t),t.bufferedRequestCount=0}else{// Slow case, write chunks one-by-one
for(;r;){var l=r.chunk,u=r.encoding,f=r.callback,c=t.objectMode?1:l.length;// if we didn't call the onwrite immediately, then
// it means that we need to wait until it does.
// also, that means that the chunk and cb are currently
// being processed, so move the buffer counter past them.
if(x(e,t,!1,c,l,u,f),r=r.next,t.bufferedRequestCount--,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequest=r,t.bufferProcessing=!1}function k(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function P(e,t){e._final(function(r){t.pendingcb--,r&&E(e,r),t.prefinished=!0,e.emit("prefinish"),M(e,t)})}function M(e,t){var r=k(t);if(r&&(t.prefinished||t.finalCalled||("function"!=typeof e._final||t.destroyed?(t.prefinished=!0,e.emit("prefinish")):(t.pendingcb++,t.finalCalled=!0,a.nextTick(P,e,t))),0===t.pendingcb&&(t.finished=!0,e.emit("finish"),t.autoDestroy))){// In case of duplex streams we need a way to detect
// if the readable side is ready for autoDestroy as well
var n=e._readableState;(!n||n.autoDestroy&&n.endEmitted)&&e.destroy()}return r}r("dhT4G")(O,u),A.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(A.prototype,"buffer",{get:l.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(i=Function.prototype[Symbol.hasInstance],Object.defineProperty(O,Symbol.hasInstance,{value:function(e){return!!i.call(this,e)||this===O&&e&&e._writableState instanceof A}})):i=function(e){return e instanceof this},// Otherwise people can pipe Writable streams, which is just wrong.
O.prototype.pipe=function(){E(this,new m)},O.prototype.write=function(e,t,r){var n,o,i,s,l,u,p,h=this._writableState,d=!1,b=!h.objectMode&&(n=e,f.isBuffer(n)||n instanceof c);return b&&!f.isBuffer(e)&&(o=e,e=f.from(o)),("function"==typeof t&&(r=t,t=null),b?t="buffer":t||(t=h.defaultEncoding),"function"!=typeof r&&(r=R),h.ending)?(i=r,// TODO: defer error events consistently everywhere, not just the cb
E(this,s=new _),a.nextTick(i,s)):(b||(l=e,u=r,null===l?p=new w:"string"==typeof l||h.objectMode||(p=new y("chunk",["string","Buffer"],l)),!p||(E(this,p),a.nextTick(u,p),0)))&&(h.pendingcb++,d=// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function(e,t,r,n,o,i){if(!r){var a,s,l=(a=n,s=o,t.objectMode||!1===t.decodeStrings||"string"!=typeof a||(a=f.from(a,s)),a);n!==l&&(r=!0,o="buffer",n=l)}var u=t.objectMode?1:n.length;t.length+=u;var c=t.length<t.highWaterMark;if(c||(t.needDrain=!0),t.writing||t.corked){var p=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:o,isBuf:r,callback:i,next:null},p?p.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else x(e,t,!1,u,n,o,i);return c}(this,h,b,e,t,r)),d},O.prototype.cork=function(){this._writableState.corked++},O.prototype.uncork=function(){var e=this._writableState;!e.corked||(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||j(this,e))},O.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new S(e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(O.prototype,"writableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(O.prototype,"writableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.highWaterMark}}),O.prototype._write=function(e,t,r){r(new b("_write()"))},O.prototype._writev=null,O.prototype.end=function(e,t,r){var n,o=this._writableState;return"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!=e&&this.write(e,t),o.corked&&(o.corked=1,this.uncork()),o.ending||(n=r,o.ending=!0,M(this,o),n&&(o.finished?a.nextTick(n):this.once("finish",n)),o.ended=!0,this.writable=!1),this},Object.defineProperty(O.prototype,"writableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(O.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){// we ignore the value if the stream
// has not been initialized yet
this._writableState&&// backward compatibility, the user is explicitly
// managing destroyed
(this._writableState.destroyed=e)}}),O.prototype.destroy=p.destroy,O.prototype._undestroy=p.undestroy,O.prototype._destroy=function(e,t){t(e)}}),r.register("4SymK",function(t,r){/**
 * Module exports.
 */t.exports=/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */function(e,t){if(n("noDeprecation"))return e;var r=!1;return function(){if(!r){if(n("throwDeprecation"))throw Error(t);n("traceDeprecation")?console.trace(t):console.warn(t),r=!0}return e.apply(this,arguments)}};/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */function n(t){// accessing global.localStorage can trigger a DOMException in sandboxed iframes
try{if(!e.localStorage)return!1}catch(e){return!1}var r=e.localStorage[t];return null!=r&&"true"===String(r).toLowerCase()}}),r.register("iGJyf",function(e,n){t(e.exports,"StringDecoder",function(){return o},function(e){return o=e});var o,i=r("838j1").Buffer,a=i.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function s(e){var t;switch(this.encoding=// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function(e){var t=function(e){var t;if(!e)return"utf8";for(;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;// undefined
e=(""+e).toLowerCase(),t=!0}}(e);if("string"!=typeof t&&(i.isEncoding===a||!a(e)))throw Error("Unknown encoding: "+e);return t||e}(e),this.encoding){case"utf16le":this.text=f,this.end=c,t=4;break;case"utf8":this.fillLast=u,t=4;break;case"base64":this.text=p,this.end=h,t=3;break;default:this.write=d,this.end=y;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=i.allocUnsafe(t)}// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function l(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function u(e){var t=this.lastTotal-this.lastNeed,r=// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function(e,t,r){if((192&t[0])!=128)return e.lastNeed=0,"�";if(e.lastNeed>1&&t.length>1){if((192&t[1])!=128)return e.lastNeed=1,"�";if(e.lastNeed>2&&t.length>2&&(192&t[2])!=128)return e.lastNeed=2,"�"}}(this,e,0);return void 0!==r?r:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):void(e.copy(this.lastChar,t,0,e.length),this.lastNeed-=e.length)}// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function f(e,t){if((e.length-t)%2==0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function c(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function p(e,t){var r=(e.length-t)%3;return 0===r?e.toString("base64",t):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-r))}function h(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function d(e){return e.toString(this.encoding)}function y(e){return e&&e.length?this.write(e):""}o=s,s.prototype.write=function(e){var t,r;if(0===e.length)return"";if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""},s.prototype.end=// For UTF-8, a replacement character is added when ending on a partial
// character.
function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�":t},// Returns only complete characters in a Buffer
s.prototype.text=// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function(e,t){var r=// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function(e,t,r){var n=t.length-1;if(n<r)return 0;var o=l(t[n]);return o>=0?(o>0&&(e.lastNeed=o-1),o):--n<r||-2===o?0:(o=l(t[n]))>=0?(o>0&&(e.lastNeed=o-2),o):--n<r||-2===o?0:(o=l(t[n]))>=0?(o>0&&(2===o?o=0:e.lastNeed=o-3),o):0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);return e.copy(this.lastChar,0,n),e.toString("utf8",t,n)},// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
s.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}}),r.register("iO1WB",function(e,t){var n,o=r("4ZL0H");function i(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r("b6CHN"),s=Symbol("lastResolve"),l=Symbol("lastReject"),u=Symbol("error"),f=Symbol("ended"),c=Symbol("lastPromise"),p=Symbol("handlePromise"),h=Symbol("stream");function d(e,t){return{value:e,done:t}}function y(e){var t=e[s];if(null!==t){var r=e[h].read();// we defer if data is null
// we can be expecting either 'end' or
// 'error'
null!==r&&(e[c]=null,e[s]=null,e[l]=null,t(d(r,!1)))}}function b(e){// we wait for the next tick, because it might
// emit an error with process.nextTick
o.nextTick(y,e)}var g=Object.getPrototypeOf(function(){}),m=Object.setPrototypeOf((i(n={get stream(){return this[h]},next:function(){var e,t,r=this,n=this[u];if(null!==n)return Promise.reject(n);if(this[f])return Promise.resolve(d(void 0,!0));if(this[h].destroyed)// called, the error will be emitted via nextTick, and
// we cannot guarantee that there is no error lingering around
// waiting to be emitted.
return new Promise(function(e,t){o.nextTick(function(){r[u]?t(r[u]):e(d(void 0,!0))})});// if we have multiple next() calls
// we will wait for the previous Promise to finish
// this logic is optimized to support for await loops,
// where next() is only called once at a time
var i=this[c];if(i)t=new Promise((e=this,function(t,r){i.then(function(){if(e[f]){t(d(void 0,!0));return}e[p](t,r)},r)}));else{// fast path needed to support multiple this.push()
// without triggering the next() queue
var a=this[h].read();if(null!==a)return Promise.resolve(d(a,!1));t=new Promise(this[p])}return this[c]=t,t}},Symbol.asyncIterator,function(){return this}),i(n,"return",function(){var e=this;// destroy(err, cb) is a private API
// we can guarantee we have that here, because we control the
// Readable class this is attached to
return new Promise(function(t,r){e[h].destroy(null,function(e){if(e){r(e);return}t(d(void 0,!0))})})}),n),g);e.exports=function(e){var t,r=Object.create(m,(i(t={},h,{value:e,writable:!0}),i(t,s,{value:null,writable:!0}),i(t,l,{value:null,writable:!0}),i(t,u,{value:null,writable:!0}),i(t,f,{value:e._readableState.endEmitted,writable:!0}),i(t,p,{value:function(e,t){var n=r[h].read();n?(r[c]=null,r[s]=null,r[l]=null,e(d(n,!1))):(r[s]=e,r[l]=t)},writable:!0}),t));return r[c]=null,a(e,function(e){if(e&&"ERR_STREAM_PREMATURE_CLOSE"!==e.code){var t=r[l];null!==t&&(r[c]=null,r[s]=null,r[l]=null,t(e)),r[u]=e;return}var n=r[s];null!==n&&(r[c]=null,r[s]=null,r[l]=null,n(d(void 0,!0))),r[f]=!0}),e.on("readable",b.bind(null,r)),r}}),r.register("b6CHN",function(e,t){var n=r("h2o3J").codes.ERR_STREAM_PREMATURE_CLOSE;function o(){}e.exports=function e(t,r,i){if("function"==typeof r)return e(t,null,r);r||(r={}),a=i||o,s=!1,i=function(){if(!s){s=!0;for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];a.apply(this,t)}};var a,s,l=r.readable||!1!==r.readable&&t.readable,u=r.writable||!1!==r.writable&&t.writable,f=function(){t.writable||p()},c=t._writableState&&t._writableState.finished,p=function(){u=!1,c=!0,l||i.call(t)},h=t._readableState&&t._readableState.endEmitted,d=function(){l=!1,h=!0,u||i.call(t)},y=function(e){i.call(t,e)},b=function(){var e;return l&&!h?(t._readableState&&t._readableState.ended||(e=new n),i.call(t,e)):u&&!c?(t._writableState&&t._writableState.ended||(e=new n),i.call(t,e)):void 0},g=function(){t.req.on("finish",p)};return t.setHeader&&"function"==typeof t.abort?(t.on("complete",p),t.on("abort",b),t.req?g():t.on("request",g)):u&&!t._writableState&&(// legacy streams
t.on("end",f),t.on("close",f)),t.on("end",d),t.on("finish",p),!1!==r.error&&t.on("error",y),t.on("close",b),function(){t.removeListener("complete",p),t.removeListener("abort",b),t.removeListener("request",g),t.req&&t.req.removeListener("finish",p),t.removeListener("end",f),t.removeListener("close",f),t.removeListener("finish",p),t.removeListener("end",d),t.removeListener("error",y),t.removeListener("close",b)}}}),r.register("bcqRj",function(e,t){e.exports=function(){throw Error("Readable.from is not available in the browser")}}),r.register("k0KBi",function(e,t){e.exports=f;var n=r("h2o3J").codes,o=n.ERR_METHOD_NOT_IMPLEMENTED,i=n.ERR_MULTIPLE_CALLBACK,a=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=n.ERR_TRANSFORM_WITH_LENGTH_0,l=r("hxbeF");function u(e,t){var r=this._transformState;r.transforming=!1;var n=r.writecb;if(null===n)return this.emit("error",new i);r.writechunk=null,r.writecb=null,null!=t&&this.push(t),n(e);var o=this._readableState;o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&this._read(o.highWaterMark)}function f(e){if(!(this instanceof f))return new f(e);l.call(this,e),this._transformState={afterTransform:u.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},// start out asking for a readable event once data is transformed.
this._readableState.needReadable=!0,// we have implemented the _read method, and done the other things
// that Readable wants before the first _read call, so unset the
// sync guard flag.
this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),// When the writable side finishes, then flush out anything remaining.
this.on("prefinish",c)}function c(){var e=this;"function"!=typeof this._flush||this._readableState.destroyed?p(this,null,null):this._flush(function(t,r){p(e,t,r)})}function p(e,t,r){if(t)return e.emit("error",t);// TODO(BridgeAR): Write a test for these two error cases
// if there's nothing in the write buffer, then that means
// that nothing more will ever be provided
if(null!=r&&e.push(r),e._writableState.length)throw new s;if(e._transformState.transforming)throw new a;return e.push(null)}r("dhT4G")(f,l),f.prototype.push=function(e,t){return this._transformState.needTransform=!1,l.prototype.push.call(this,e,t)},// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
f.prototype._transform=function(e,t,r){r(new o("_transform()"))},f.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var o=this._readableState;(n.needTransform||o.needReadable||o.length<o.highWaterMark)&&this._read(o.highWaterMark)}},// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
f.prototype._read=function(e){var t=this._transformState;null===t.writechunk||t.transforming?// will get processed, now that we've asked for it.
t.needTransform=!0:(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform))},f.prototype._destroy=function(e,t){l.prototype._destroy.call(this,e,function(e){t(e)})}}),r.register("jYFEV",function(e,t){e.exports=o;var n=r("k0KBi");function o(e){if(!(this instanceof o))return new o(e);n.call(this,e)}r("dhT4G")(o,n),o.prototype._transform=function(e,t,r){r(null,e)}}),r.register("gPAeR",function(e,t){var n,o=r("h2o3J").codes,i=o.ERR_MISSING_ARGS,a=o.ERR_STREAM_DESTROYED;function s(e){// Rethrow the error if it exists to avoid swallowing it
if(e)throw e}function l(e){e()}function u(e,t){return e.pipe(t)}e.exports=function(){for(var e,t,o=arguments.length,f=Array(o),c=0;c<o;c++)f[c]=arguments[c];var p=(e=f).length&&"function"==typeof e[e.length-1]?e.pop():s;if(Array.isArray(f[0])&&(f=f[0]),f.length<2)throw new i("streams");var h=f.map(function(e,o){var i,s,u,c,d,y=o<f.length-1;return s=i=function(e){t||(t=e),e&&h.forEach(l),y||(h.forEach(l),p(t))},u=!1,i=function(){u||(u=!0,s.apply(void 0,arguments))},c=!1,e.on("close",function(){c=!0}),void 0===n&&(n=r("b6CHN")),n(e,{readable:y,writable:o>0},function(e){if(e)return i(e);c=!0,i()}),d=!1,function(t){if(!c&&!d){// request.destroy just do .end - .abort is what we want
if(d=!0,e.setHeader&&"function"==typeof e.abort)return e.abort();if("function"==typeof e.destroy)return e.destroy();i(t||new a("pipe"))}}});return f.reduce(u)}}),r.register("axiyR",function(e,t){e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)r.call(n,o)&&(e[o]=n[o])}return e};var r=Object.prototype.hasOwnProperty}),r.register("l3iXw",function(e,t){e.exports={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}}),r.register("eAyj5",function(e,n){t(e.exports,"parse",function(){return o},function(e){return o=e});var o,i=r("25rkr");function a(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}// Reference: RFC 3986, RFC 1808, RFC 2396
/*
 * define these here so at least they only have to be
 * compiled once on the first module load.
 */var s=/^([a-z0-9.+-]+:)/i,l=/:[0-9]*$/,u=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,f=["'"].concat(["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","	"])),/*
   * Characters that are never ever allowed in a hostname.
   * Note that any invalid chars are also handled, but these
   * are the ones that are *expected* to be seen, so we fast-path
   * them.
   */c=["%","/","?",";","#"].concat(f),p=["/","?","#"],h=/^[+a-z0-9A-Z_-]{0,63}$/,d=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,y={javascript:!0,"javascript:":!0},b={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},m=r("5dq8O");function v(e,t,r){if(e&&"object"==typeof e&&e instanceof a)return e;var n=new a;return n.parse(e,t,r),n}a.prototype.parse=function(e,t,r){if("string"!=typeof e)throw TypeError("Parameter 'url' must be a string, not "+typeof e);/*
   * Copy chrome, IE, opera backslash-handling behavior.
   * Back slashes before the query string get converted to forward slashes
   * See: https://code.google.com/p/chromium/issues/detail?id=25916
   */var n=e.indexOf("?"),o=-1!==n&&n<e.indexOf("#")?"?":"#",a=e.split(o);a[0]=a[0].replace(/\\/g,"/");var l=e=a.join(o);if(/*
   * trim before proceeding.
   * This is to support parse stuff like "  http://foo.com  \n"
   */l=l.trim(),!r&&1===e.split("#").length){// Try fast path regexp
var v=u.exec(l);if(v)return this.path=l,this.href=l,this.pathname=v[1],v[2]?(this.search=v[2],t?this.query=m.parse(this.search.substr(1)):this.query=this.search.substr(1)):t&&(this.search="",this.query={}),this}var w=s.exec(l);if(w){var _=(w=w[0]).toLowerCase();this.protocol=_,l=l.substr(w.length)}/*
   * figure out if it's got a host
   * user@server is *always* interpreted as a hostname, and url
   * resolution will treat //foo/bar as host=foo,path=bar because that's
   * how the browser resolves relative URLs.
   */if(r||w||l.match(/^\/\/[^@/]+@[^@/]+/)){var S="//"===l.substr(0,2);S&&!(w&&b[w])&&(l=l.substr(2),this.slashes=!0)}if(!b[w]&&(S||w&&!g[w])){for(var E,R,A=-1,O=0;O<p.length;O++){var x=l.indexOf(p[O]);-1!==x&&(-1===A||x<A)&&(A=x)}-1!==(R=-1===A?l.lastIndexOf("@"):l.lastIndexOf("@",A))&&(E=l.slice(0,R),l=l.slice(R+1),this.auth=decodeURIComponent(E)),// the host is the remaining to the left of the first non-host char
A=-1;for(var O=0;O<c.length;O++){var x=l.indexOf(c[O]);-1!==x&&(-1===A||x<A)&&(A=x)}-1===A&&(A=l.length),this.host=l.slice(0,A),l=l.slice(A),// pull out port.
this.parseHost(),/*
     * we've indicated that there is a hostname,
     * so even if it's empty, it has to be present.
     */this.hostname=this.hostname||"";/*
     * if hostname begins with [ and ends with ]
     * assume that it's an IPv6 address.
     */var T="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];// validate a little.
if(!T)for(var j=this.hostname.split(/\./),O=0,k=j.length;O<k;O++){var P=j[O];if(P&&!P.match(h)){for(var M="",C=0,N=P.length;C<N;C++)P.charCodeAt(C)>127?/*
               * we replace non-ASCII char with a temporary placeholder
               * we need this to make sure size of hostname is not
               * broken by replacing non-ASCII by nothing
               */M+="x":M+=P[C];// we test again with ASCII char only
if(!M.match(h)){var L=j.slice(0,O),D=j.slice(O+1),I=P.match(d);I&&(L.push(I[1]),D.unshift(I[2])),D.length&&(l="/"+D.join(".")+l),this.hostname=L.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),T||/*
       * IDNA Support: Returns a punycoded representation of "domain".
       * It only converts parts of the domain name that
       * have non-ASCII characters, i.e. it doesn't matter if
       * you call it with a domain that already is ASCII-only.
       */(this.hostname=i.toASCII(this.hostname));var F=this.port?":"+this.port:"",q=this.hostname||"";this.host=q+F,this.href+=this.host,T&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==l[0]&&(l="/"+l))}/*
   * now rest is set to the post-host stuff.
   * chop off any delim chars.
   */if(!y[_])/*
     * First, make 100% sure that any "autoEscape" chars get
     * escaped, even if encodeURIComponent doesn't think they
     * need to be.
     */for(var O=0,k=f.length;O<k;O++){var U=f[O];if(-1!==l.indexOf(U)){var H=encodeURIComponent(U);H===U&&(H=escape(U)),l=l.split(U).join(H)}}// chop off from the tail first.
var B=l.indexOf("#");-1!==B&&(// got a fragment string.
this.hash=l.substr(B),l=l.slice(0,B));var W=l.indexOf("?");// to support http.request
if(-1!==W?(this.search=l.substr(W),this.query=l.substr(W+1),t&&(this.query=m.parse(this.query)),l=l.slice(0,W)):t&&(// no query string, but parseQueryString still requested
this.search="",this.query={}),l&&(this.pathname=l),g[_]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var F=this.pathname||"",G=this.search||"";this.path=F+G}return(// finally, reconstruct the href based on what has been validated.
this.href=this.format(),this)},a.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":")+"@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,i="";this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&"object"==typeof this.query&&Object.keys(this.query).length&&(i=m.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var a=this.search||i&&"?"+i||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||g[t])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),t+o+(r=r.replace(/[?#]/g,function(e){return encodeURIComponent(e)}))+(a=a.replace("#","%23"))+n},a.prototype.resolve=function(e){return this.resolveObject(v(e,!1,!0)).format()},a.prototype.resolveObject=function(e){if("string"==typeof e){var t=new a;t.parse(e,!1,!0),e=t}for(var r=new a,n=Object.keys(this),o=0;o<n.length;o++){var i=n[o];r[i]=this[i]}// if the relative url is empty, then there's nothing left to do here.
if(/*
   * hash is always overridden, no matter what.
   * even href="" will remove it.
   */r.hash=e.hash,""===e.href)return r.href=r.format(),r;// hrefs like //foo/bar always cut to the protocol.
if(e.slashes&&!e.protocol){for(var s=Object.keys(e),l=0;l<s.length;l++){var u=s[l];"protocol"!==u&&(r[u]=e[u])}return g[r.protocol]&&r.hostname&&!r.pathname&&(r.pathname="/",r.path=r.pathname),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){/*
     * if it's a known url protocol, then changing
     * the protocol does weird things
     * first, if it's not file:, then we MUST have a host,
     * and if there was a path
     * to begin with, then we MUST have a path.
     * if it is file:, then the host is dropped,
     * because that's known to be hostless.
     * anything else is assumed to be absolute.
     */if(!g[e.protocol]){for(var f=Object.keys(e),c=0;c<f.length;c++){var p=f[c];r[p]=e[p]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||b[e.protocol])r.pathname=e.pathname;else{for(var h=(e.pathname||"").split("/");h.length&&!(e.host=h.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==h[0]&&h.unshift(""),h.length<2&&h.unshift(""),r.pathname=h.join("/")}// to support http.request
if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var d=r.pathname||"",y=r.search||"";r.path=d+y}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var m=r.pathname&&"/"===r.pathname.charAt(0),v=e.host||e.pathname&&"/"===e.pathname.charAt(0),w=v||m||r.host&&e.pathname,_=w,S=r.pathname&&r.pathname.split("/")||[],h=e.pathname&&e.pathname.split("/")||[],E=r.protocol&&!g[r.protocol];if(E&&(r.hostname="",r.port=null,r.host&&(""===S[0]?S[0]=r.host:S.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===h[0]?h[0]=e.host:h.unshift(e.host)),e.host=null),w=w&&(""===h[0]||""===S[0])),v)// it's absolute.
r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,S=h;else if(h.length)S||(S=[]),S.pop(),S=S.concat(h),r.search=e.search,r.query=e.query;else if(null!=e.search){/*
     * just pull out the search.
     * like href='?foo'.
     * Put this after the other two cases because it simplifies the booleans
     */if(E){r.host=S.shift(),r.hostname=r.host;/*
       * occationaly the auth can get stuck only in host
       * this especially happens in cases like
       * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
       */var R=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");R&&(r.auth=R.shift(),r.hostname=R.shift(),r.host=r.hostname)}return r.search=e.search,r.query=e.query,(null!==r.pathname||null!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!S.length)return(/*
     * no path at all.  easy.
     * we've already handled the other stuff above.
     */r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r);for(var A=S.slice(-1)[0],O=(r.host||e.host||S.length>1)&&("."===A||".."===A)||""===A,x=0,T=S.length;T>=0;T--)"."===(A=S[T])?S.splice(T,1):".."===A?(S.splice(T,1),x++):x&&(S.splice(T,1),x--);// if the path is allowed to go above the root, restore leading ..s
if(!w&&!_)for(;x--;x)S.unshift("..");w&&""!==S[0]&&(!S[0]||"/"!==S[0].charAt(0))&&S.unshift(""),O&&"/"!==S.join("/").substr(-1)&&S.push("");var j=""===S[0]||S[0]&&"/"===S[0].charAt(0);// put the host back
if(E){r.hostname=j?"":S.length?S.shift():"",r.host=r.hostname;/*
     * occationaly the auth can get stuck only in host
     * this especially happens in cases like
     * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
     */var R=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");R&&(r.auth=R.shift(),r.hostname=R.shift(),r.host=r.hostname)}return(w=w||r.host&&S.length)&&!j&&S.unshift(""),S.length>0?r.pathname=S.join("/"):(r.pathname=null,r.path=null),(null!==r.pathname||null!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},a.prototype.parseHost=function(){var e=this.host,t=l.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)},o=v}),r.register("25rkr",function(t,r){!function(n){/** Detect free variables */var o=r&&!r.nodeType&&r,i=t&&!t.nodeType&&t,a="object"==typeof e&&e;(a.global===a||a.window===a||a.self===a)&&(n=a);/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */var s,/** Temporary variable */l,/** Regular expressions */u=/^xn--/,f=/[^\x20-\x7E]/,c=/[\x2E\u3002\uFF0E\uFF61]/g,/** Error messages */p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},h=Math.floor,d=String.fromCharCode;/*--------------------------------------------------------------------------*//**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */function y(e){throw RangeError(p[e])}/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */function b(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */function g(e,t){var r=e.split("@"),n="";return r.length>1&&(// In email addresses, only the domain name should be punycoded. Leave
// the local part (i.e. everything up to `@`) intact.
n=r[0]+"@",e=r[1]),n+b(// Avoid `split(regex)` for IE8 compatibility. See #17.
(e=e.replace(c,".")).split("."),t).join(".")}/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */function m(e){for(var t,r,n=[],o=0,i=e.length;o<i;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<i?(64512&// high surrogate, and there is a next character
(r=e.charCodeAt(o++)))==56320?n.push(((1023&t)<<10)+(1023&r)+65536):(// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
n.push(t),o--):n.push(t);return n}/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */function v(e){return b(e,function(e){var t="";return e>65535&&(e-=65536,t+=d(e>>>10&1023|55296),e=56320|1023&e),t+=d(e)}).join("")}/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */function w(e,t){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return e+22+75*(e<26)-((0!=t)<<5)}/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */function _(e,t,r){var n=0;for(e=r?h(e/700):e>>1,e+=h(e/t);e>455;n+=36)e=h(e/35);return h(n+36*e/(e+38))}/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */function S(e){// Don't use UCS-2
var t,r,n,o,i,a,s,l,u,f,/** Cached calculation results */c,p=[],d=e.length,b=0,g=128,m=72;for(// Handle the basic code points: let `basic` be the number of input code
// points before the last delimiter, or `0` if there is none, then copy
// the first basic code points to the output.
(n=e.lastIndexOf("-"))<0&&(n=0),o=0;o<n;++o)e.charCodeAt(o)>=128&&y("not-basic"),p.push(e.charCodeAt(o));// Main decoding loop: start just after the last delimiter if any basic code
// points were copied; start at the beginning otherwise.
for(i=n>0?n+1:0;i<d;){// `index` is the index of the next character to be consumed.
// Decode a generalized variable-length integer into `delta`,
// which gets added to `i`. The overflow checking is easier
// if we increase `i` as we go, then subtract off its starting
// value at the end to obtain `delta`.
for(a=b,s=1,l=36;i>=d&&y("invalid-input"),((u=(t=e.charCodeAt(i++))-48<10?t-22:t-65<26?t-65:t-97<26?t-97:36)>=36||u>h((2147483647-b)/s))&&y("overflow"),b+=u*s,!(u<(f=l<=m?1:l>=m+26?26:l-m));l+=36)s>h(2147483647/(c=36-f))&&y("overflow"),s*=c;m=_(b-a,r=p.length+1,0==a),h(b/r)>2147483647-g&&y("overflow"),g+=h(b/r),b%=r,// Insert `n` at position `i` of the output
p.splice(b++,0,g)}return v(p)}/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */function E(e){var t,r,n,o,i,a,s,l,u,f,c,/** `inputLength` will hold the number of code points in `input`. */p,/** Cached calculation results */b,g,v,S=[];// Handle the basic code points
for(a=0,// Cache the length
p=// Convert the input in UCS-2 to Unicode
(e=m(e)).length,// Initialize the state
t=128,r=0,i=72;a<p;++a)(c=e[a])<128&&S.push(d(c));// Main encoding loop:
for(n=o=S.length,o&&S.push("-");n<p;){// All non-basic code points < n have been handled already. Find the next
// larger one:
for(s=2147483647,a=0;a<p;++a)(c=e[a])>=t&&c<s&&(s=c);for(s-t>h((2147483647-r)/// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
// but guard against overflow
(b=n+1))&&y("overflow"),r+=(s-t)*b,t=s,a=0;a<p;++a)if((c=e[a])<t&&++r>2147483647&&y("overflow"),c==t){// Represent delta as a generalized variable-length integer
for(l=r,u=36;!(l<(f=u<=i?1:u>=i+26?26:u-i));u+=36)v=l-f,g=36-f,S.push(d(w(f+v%g,0))),l=h(v/g);S.push(d(w(l,0))),i=_(r,b,n==o),r=0,++n}++r,++t}return S.join("")}/** Expose `punycode` */// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if(/*--------------------------------------------------------------------------*//** Define the public API */s={/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */version:"1.4.1",/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */ucs2:{decode:m,encode:v},decode:S,encode:E,toASCII:/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */function(e){return g(e,function(e){return f.test(e)?"xn--"+E(e):e})},toUnicode:/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */function(e){return g(e,function(e){return u.test(e)?S(e.slice(4).toLowerCase()):e})}},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return s});else if(o&&i){if(t.exports==o)i.exports=s;else for(l in s)s.hasOwnProperty(l)&&(o[l]=s[l])}else n.punycode=s}(this)}),r.register("5dq8O",function(e,t){var n=r("lMkYw"),o=r("4iVSP"),i=r("br3n2");e.exports={formats:i,parse:o,stringify:n}}),r.register("lMkYw",function(e,t){var n=r("1Tr1N"),o=r("2mSnl"),i=r("br3n2"),a=Object.prototype.hasOwnProperty,s={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},l=Array.isArray,u=Array.prototype.push,f=function(e,t){u.apply(e,l(t)?t:[t])},c=Date.prototype.toISOString,p=i.default,h={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:p,formatter:i.formatters[p],// deprecated
indices:!1,serializeDate:function(e){return c.call(e)},skipNulls:!1,strictNullHandling:!1},d={},y=function e(t,r,i,a,s,u,c,p,y,b,g,m,v,w,_,S){for(var E,R,A=t,O=S,x=0,T=!1;void 0!==(O=O.get(d))&&!T;){// Where object last appeared in the ref tree
var j=O.get(t);if(x+=1,void 0!==j){if(j===x)throw RangeError("Cyclic object value");// Break while
T=!0}void 0===O.get(d)&&(x=0)}if("function"==typeof p?A=p(r,A):A instanceof Date?A=g(A):"comma"===i&&l(A)&&(A=o.maybeMap(A,function(e){return e instanceof Date?g(e):e})),null===A){if(s)return c&&!w?c(r,h.encoder,_,"key",m):r;A=""}if("string"==typeof(E=A)||"number"==typeof E||"boolean"==typeof E||"symbol"==typeof E||"bigint"==typeof E||o.isBuffer(A))return c?[v(w?r:c(r,h.encoder,_,"key",m))+"="+v(c(A,h.encoder,_,"value",m))]:[v(r)+"="+v(String(A))];var k=[];if(void 0===A)return k;if("comma"===i&&l(A))w&&c&&(A=o.maybeMap(A,c)),R=[{value:A.length>0?A.join(",")||null:void 0}];else if(l(p))R=p;else{var P=Object.keys(A);R=y?P.sort(y):P}for(var M=a&&l(A)&&1===A.length?r+"[]":r,C=0;C<R.length;++C){var N=R[C],L="object"==typeof N&&void 0!==N.value?N.value:A[N];if(!u||null!==L){var D=l(A)?"function"==typeof i?i(M,N):M:M+(b?"."+N:"["+N+"]");S.set(t,x);var I=n();I.set(d,S),f(k,e(L,D,i,a,s,u,"comma"===i&&w&&l(A)?null:c,p,y,b,g,m,v,w,_,I))}}return k},b=function(e){if(!e)return h;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw TypeError("Encoder has to be a function.");var t=e.charset||h.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i.default;if(void 0!==e.format){if(!a.call(i.formatters,e.format))throw TypeError("Unknown format option provided.");r=e.format}var n=i.formatters[r],o=h.filter;return("function"==typeof e.filter||l(e.filter))&&(o=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:h.addQueryPrefix,allowDots:void 0===e.allowDots?h.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:h.charsetSentinel,delimiter:void 0===e.delimiter?h.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:h.encode,encoder:"function"==typeof e.encoder?e.encoder:h.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:h.encodeValuesOnly,filter:o,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:h.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:h.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:h.strictNullHandling}};e.exports=function(e,t){var r,o,i=e,a=b(t);"function"==typeof a.filter?i=(0,a.filter)("",i):l(a.filter)&&(r=a.filter);var u=[];if("object"!=typeof i||null===i)return"";o=t&&t.arrayFormat in s?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var c=s[o];if(t&&"commaRoundTrip"in t&&"boolean"!=typeof t.commaRoundTrip)throw TypeError("`commaRoundTrip` must be a boolean, or absent");var p="comma"===c&&t&&t.commaRoundTrip;r||(r=Object.keys(i)),a.sort&&r.sort(a.sort);for(var h=n(),d=0;d<r.length;++d){var g=r[d];a.skipNulls&&null===i[g]||f(u,y(i[g],g,c,p,a.strictNullHandling,a.skipNulls,a.encode?a.encoder:null,a.filter,a.sort,a.allowDots,a.serializeDate,a.format,a.formatter,a.encodeValuesOnly,a.charset,h))}var m=u.join(a.delimiter),v=!0===a.addQueryPrefix?"?":"";return a.charsetSentinel&&("iso-8859-1"===a.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),m.length>0?v+m:""}}),r.register("1Tr1N",function(e,t){var n=r("hkNzn"),o=r("42mQn"),i=r("6xIgw"),a=n("%TypeError%"),s=n("%WeakMap%",!0),l=n("%Map%",!0),u=o("WeakMap.prototype.get",!0),f=o("WeakMap.prototype.set",!0),c=o("WeakMap.prototype.has",!0),p=o("Map.prototype.get",!0),h=o("Map.prototype.set",!0),d=o("Map.prototype.has",!0),y=function(e,t){for(var r,n=e;null!==(r=n.next);n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r},b=function(e,t){var r=y(e,t);return r&&r.value},g=function(e,t,r){var n=y(e,t);n?n.value=r:e.next={key:t,next:e.next,value:r}};e.exports=function(){var e,t,r,n={assert:function(e){if(!n.has(e))throw new a("Side channel does not contain "+i(e))},get:function(n){if(s&&n&&("object"==typeof n||"function"==typeof n)){if(e)return u(e,n)}else if(l){if(t)return p(t,n)}else if(r)return b(r,n)},has:function(n){if(s&&n&&("object"==typeof n||"function"==typeof n)){if(e)return c(e,n)}else if(l){if(t)return d(t,n)}else if(r)return!!y(r,n);return!1},set:function(n,o){s&&n&&("object"==typeof n||"function"==typeof n)?(e||(e=new s),f(e,n,o)):l?(t||(t=new l),h(t,n,o)):(r||/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */(r={key:{},next:null}),g(r,n,o))}};return n}}),r.register("hkNzn",function(e,t){var n,o=SyntaxError,i=Function,a=TypeError,s=function(e){try{return i('"use strict"; return ('+e+").constructor;")()}catch(e){}},l=Object.getOwnPropertyDescriptor;if(l)try{l({},"")}catch(e){l=null;// this is IE 8, which has a broken gOPD
}var u=function(){throw new a},f=l?function(){try{return(// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
arguments.callee,u)}catch(e){try{// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
return l(arguments,"callee").get}catch(e){return u}}}():u,c=r("4qQ7b")(),p=r("hNVka")(),h=Object.getPrototypeOf||(p?function(e){return e.__proto__}// eslint-disable-line no-proto
:null),d={},y="undefined"!=typeof Uint8Array&&h?h(Uint8Array):n,b={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":c&&h?h([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":d,"%AsyncGenerator%":d,"%AsyncGeneratorFunction%":d,"%AsyncIteratorPrototype%":d,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?n:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":d,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":c&&h?h(h([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&c&&h?h(new Map()[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&c&&h?h(new Set()[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":c&&h?h(""[Symbol.iterator]()):n,"%Symbol%":c?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":f,"%TypedArray%":y,"%TypeError%":a,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet};if(h)try{null.error;// eslint-disable-line no-unused-expressions
}catch(e){// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
var g=h(h(e));b["%Error.prototype%"]=g}var m=function e(t){var r;if("%AsyncFunction%"===t)r=s("async function () {}");else if("%GeneratorFunction%"===t)r=s("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=s("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&h&&(r=h(o.prototype))}return b[t]=r,r},v={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},w=r("eQ7C3"),_=r("hAsRP"),S=w.call(Function.call,Array.prototype.concat),E=w.call(Function.apply,Array.prototype.splice),R=w.call(Function.call,String.prototype.replace),A=w.call(Function.call,String.prototype.slice),O=w.call(Function.call,RegExp.prototype.exec),x=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,T=/\\(\\)?/g,j=function(e){var t=A(e,0,1),r=A(e,-1);if("%"===t&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return R(e,x,function(e,t,r,o){n[n.length]=r?R(o,T,"$1"):t||e}),n},k=function(e,t){var r,n=e;if(_(v,n)&&(n="%"+(r=v[n])[0]+"%"),_(b,n)){var i=b[n];if(i===d&&(i=m(n)),void 0===i&&!t)throw new a("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:i}}throw new o("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new a("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new a('"allowMissing" argument must be a boolean');if(null===O(/^%?[^%]*%?$/,e))throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=j(e),n=r.length>0?r[0]:"",i=k("%"+n+"%",t),s=i.name,u=i.value,f=!1,c=i.alias;c&&(n=c[0],E(r,S([0,1],c)));for(var p=1,h=!0;p<r.length;p+=1){var d=r[p],y=A(d,0,1),g=A(d,-1);if(('"'===y||"'"===y||"`"===y||'"'===g||"'"===g||"`"===g)&&y!==g)throw new o("property names with quotes must have matching quotes");if("constructor"!==d&&h||(f=!0),n+="."+d,_(b,s="%"+n+"%"))u=b[s];else if(null!=u){if(!(d in u)){if(!t)throw new a("base intrinsic for "+e+" exists, but the property is not available.");return}if(l&&p+1>=r.length){var m=l(u,d);// By convention, when a data property is converted to an accessor
// property to emulate a data property that does not suffer from
// the override mistake, that accessor's getter is marked with
// an `originalValue` property. Here, when we detect this, we
// uphold the illusion by pretending to see that original data
// property, i.e., returning the value rather than the getter
// itself.
u=(h=!!m)&&"get"in m&&!("originalValue"in m.get)?m.get:u[d]}else h=_(u,d),u=u[d];h&&!f&&(b[s]=u)}}return u}}),r.register("4qQ7b",function(e,t){var n="undefined"!=typeof Symbol&&Symbol,o=r("f2BFz");e.exports=function(){return"function"==typeof n&&"function"==typeof Symbol&&"symbol"==typeof n("foo")&&"symbol"==typeof Symbol("bar")&&o()}}),r.register("f2BFz",function(e,t){/* eslint complexity: [2, 18], max-statements: [2, 33] */e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t||"[object Symbol]"!==Object.prototype.toString.call(t)||"[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;// eslint-disable-line no-restricted-syntax, no-unreachable-loop
if("function"==typeof Object.keys&&0!==Object.keys(e).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}}),r.register("hNVka",function(e,t){var r={foo:{}},n=Object;e.exports=function(){return({__proto__:r}).foo===r.foo&&!(({__proto__:null})instanceof n)}}),r.register("eQ7C3",function(e,t){var n=r("gfKZG");e.exports=Function.prototype.bind||n}),r.register("gfKZG",function(e,t){var r=Array.prototype.slice,n=Object.prototype.toString;e.exports=function(e){var t,o=this;if("function"!=typeof o||"[object Function]"!==n.call(o))throw TypeError("Function.prototype.bind called on incompatible "+o);for(var i=r.call(arguments,1),a=Math.max(0,o.length-i.length),s=[],l=0;l<a;l++)s.push("$"+l);if(t=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(!(this instanceof t))return o.apply(e,i.concat(r.call(arguments)));var n=o.apply(this,i.concat(r.call(arguments)));return Object(n)===n?n:this}),o.prototype){var u=function(){};u.prototype=o.prototype,t.prototype=new u,u.prototype=null}return t}}),r.register("hAsRP",function(e,t){var r={}.hasOwnProperty,n=Function.prototype.call;e.exports=n.bind?n.bind(r):function(e,t){return n.call(r,e,t)}}),r.register("42mQn",function(e,t){var n=r("hkNzn"),o=r("e6nwk"),i=o(n("String.prototype.indexOf"));e.exports=function(e,t){var r=n(e,!!t);return"function"==typeof r&&i(e,".prototype.")>-1?o(r):r}}),r.register("e6nwk",function(e,t){var n=r("eQ7C3"),o=r("hkNzn"),i=o("%Function.prototype.apply%"),a=o("%Function.prototype.call%"),s=o("%Reflect.apply%",!0)||n.call(a,i),l=o("%Object.getOwnPropertyDescriptor%",!0),u=o("%Object.defineProperty%",!0),f=o("%Math.max%");if(u)try{u({},"a",{value:1})}catch(e){// IE 8 has a broken defineProperty
u=null}e.exports=function(e){var t=s(n,a,arguments);return l&&u&&l(t,"length").configurable&&u(t,"length",{value:1+f(0,e.length-(arguments.length-1))}),t};var c=function(){return s(n,i,arguments)};u?u(e.exports,"apply",{value:c}):e.exports.apply=c}),r.register("6xIgw",function(e,t){var n="function"==typeof Map&&Map.prototype,o=Object.getOwnPropertyDescriptor&&n?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,i=n&&o&&"function"==typeof o.get?o.get:null,a=n&&Map.prototype.forEach,s="function"==typeof Set&&Set.prototype,l=Object.getOwnPropertyDescriptor&&s?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,u=s&&l&&"function"==typeof l.get?l.get:null,f=s&&Set.prototype.forEach,c="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,p="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,h="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,d=Boolean.prototype.valueOf,y=Object.prototype.toString,b=Function.prototype.toString,g=String.prototype.match,m=String.prototype.slice,v=String.prototype.replace,w=String.prototype.toUpperCase,_=String.prototype.toLowerCase,S=RegExp.prototype.test,E=Array.prototype.concat,R=Array.prototype.join,A=Array.prototype.slice,O=Math.floor,x="function"==typeof BigInt?BigInt.prototype.valueOf:null,T=Object.getOwnPropertySymbols,j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,k="function"==typeof Symbol&&"object"==typeof Symbol.iterator,P="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===k?"object":"symbol")?Symbol.toStringTag:null,M=Object.prototype.propertyIsEnumerable,C=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype// eslint-disable-line no-proto
?function(e){return e.__proto__;// eslint-disable-line no-proto
}:null);function N(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||S.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var n=e<0?-O(-e):O(e);// trunc(num)
if(n!==e){var o=String(n),i=m.call(t,o.length+1);return v.call(o,r,"$&_")+"."+v.call(v.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return v.call(t,r,"$&_")}var L=r("ifbub"),D=L.custom,I=H(D)?D:null;function F(e,t,r){var n="double"===(r.quoteStyle||t)?'"':"'";return n+e+n}function q(e){return"[object Array]"===G(e)&&(!P||!("object"==typeof e&&P in e))}function U(e){return"[object RegExp]"===G(e)&&(!P||!("object"==typeof e&&P in e))}// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function H(e){if(k)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return!0;if(!e||"object"!=typeof e||!j)return!1;try{return j.call(e),!0}catch(e){}return!1}e.exports=function e(t,r,n,o){var s=r||{};if(W(s,"quoteStyle")&&"single"!==s.quoteStyle&&"double"!==s.quoteStyle)throw TypeError('option "quoteStyle" must be "single" or "double"');if(W(s,"maxStringLength")&&("number"==typeof s.maxStringLength?s.maxStringLength<0&&s.maxStringLength!==1/0:null!==s.maxStringLength))throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var l=!W(s,"customInspect")||s.customInspect;if("boolean"!=typeof l&&"symbol"!==l)throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(W(s,"indent")&&null!==s.indent&&"	"!==s.indent&&!(parseInt(s.indent,10)===s.indent&&s.indent>0))throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(W(s,"numericSeparator")&&"boolean"!=typeof s.numericSeparator)throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');var y=s.numericSeparator;if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return function e(t,r){if(t.length>r.maxStringLength){var n=t.length-r.maxStringLength;return e(m.call(t,0,r.maxStringLength),r)+"... "+n+" more character"+(n>1?"s":"")}return F(v.call(v.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,V),"single",r)}(t,s);if("number"==typeof t){if(0===t)return 1/0/t>0?"0":"-0";var w=String(t);return y?N(t,w):w}if("bigint"==typeof t){var S=String(t)+"n";return y?N(t,S):S}var O=void 0===s.depth?5:s.depth;if(void 0===n&&(n=0),n>=O&&O>0&&"object"==typeof t)return q(t)?"[Array]":"[Object]";var T=function(e,t){var r;if("	"===e.indent)r="	";else{if("number"!=typeof e.indent||!(e.indent>0))return null;r=R.call(Array(e.indent+1)," ")}return{base:r,prev:R.call(Array(t+1),r)}}(s,n);if(void 0===o)o=[];else if(z(o,t)>=0)return"[Circular]";function D(t,r,i){if(r&&(o=A.call(o)).push(r),i){var a={depth:s.depth};return W(s,"quoteStyle")&&(a.quoteStyle=s.quoteStyle),e(t,a,n+1,o)}return e(t,s,n+1,o)}if("function"==typeof t&&!U(t)){var B=function(e){if(e.name)return e.name;var t=g.call(b.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),Y=Z(t,D);return"[Function"+(B?": "+B:" (anonymous)")+"]"+(Y.length>0?" { "+R.call(Y,", ")+" }":"")}if(H(t)){var X=k?v.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):j.call(t);return"object"!=typeof t||k?X:Q(X)}if(t&&"object"==typeof t&&("undefined"!=typeof HTMLElement&&t instanceof HTMLElement||"string"==typeof t.nodeName&&"function"==typeof t.getAttribute)){for(var ee,et="<"+_.call(String(t.nodeName)),er=t.attributes||[],en=0;en<er.length;en++)et+=" "+er[en].name+"="+F((ee=er[en].value,v.call(String(ee),/"/g,"&quot;")),"double",s);return et+=">",t.childNodes&&t.childNodes.length&&(et+="..."),et+="</"+_.call(String(t.nodeName))+">"}if(q(t)){if(0===t.length)return"[]";var eo=Z(t,D);return T&&!function(e){for(var t=0;t<e.length;t++)if(z(e[t],"\n")>=0)return!1;return!0}(eo)?"["+$(eo,T)+"]":"[ "+R.call(eo,", ")+" ]"}if("[object Error]"===G(t)&&(!P||!("object"==typeof t&&P in t))){var ei=Z(t,D);return"cause"in Error.prototype||!("cause"in t)||M.call(t,"cause")?0===ei.length?"["+String(t)+"]":"{ ["+String(t)+"] "+R.call(ei,", ")+" }":"{ ["+String(t)+"] "+R.call(E.call("[cause]: "+D(t.cause),ei),", ")+" }"}if("object"==typeof t&&l){if(I&&"function"==typeof t[I]&&L)return L(t,{depth:O-n});if("symbol"!==l&&"function"==typeof t.inspect)return t.inspect()}if(function(e){if(!i||!e||"object"!=typeof e)return!1;try{i.call(e);try{u.call(e)}catch(e){return!0}return e instanceof Map;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t)){var ea=[];return a&&a.call(t,function(e,r){ea.push(D(r,t,!0)+" => "+D(e,t))}),J("Map",i.call(t),ea,T)}if(function(e){if(!u||!e||"object"!=typeof e)return!1;try{u.call(e);try{i.call(e)}catch(e){return!0}return e instanceof Set;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t)){var es=[];return f&&f.call(t,function(e){es.push(D(e,t))}),J("Set",u.call(t),es,T)}if(function(e){if(!c||!e||"object"!=typeof e)return!1;try{c.call(e,c);try{p.call(e,p)}catch(e){return!0}return e instanceof WeakMap;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t))return K("WeakMap");if(function(e){if(!p||!e||"object"!=typeof e)return!1;try{p.call(e,p);try{c.call(e,c)}catch(e){return!0}return e instanceof WeakSet;// core-js workaround, pre-v2.5.0
}catch(e){}return!1}(t))return K("WeakSet");if(function(e){if(!h||!e||"object"!=typeof e)return!1;try{return h.call(e),!0}catch(e){}return!1}(t))return K("WeakRef");if("[object Number]"===G(t)&&(!P||!("object"==typeof t&&P in t)))return Q(D(Number(t)));if(function(e){if(!e||"object"!=typeof e||!x)return!1;try{return x.call(e),!0}catch(e){}return!1}(t))return Q(D(x.call(t)));if("[object Boolean]"===G(t)&&(!P||!("object"==typeof t&&P in t)))return Q(d.call(t));if("[object String]"===G(t)&&(!P||!("object"==typeof t&&P in t)))return Q(D(String(t)));if(!("[object Date]"===G(t)&&(!P||!("object"==typeof t&&P in t)))&&!U(t)){var el=Z(t,D),eu=C?C(t)===Object.prototype:t instanceof Object||t.constructor===Object,ef=t instanceof Object?"":"null prototype",ec=!eu&&P&&Object(t)===t&&P in t?m.call(G(t),8,-1):ef?"Object":"",ep=(eu||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(ec||ef?"["+R.call(E.call([],ec||[],ef||[]),": ")+"] ":"");return 0===el.length?ep+"{}":T?ep+"{"+$(el,T)+"}":ep+"{ "+R.call(el,", ")+" }"}return String(t)};var B=Object.prototype.hasOwnProperty||function(e){return e in this};function W(e,t){return B.call(e,t)}function G(e){return y.call(e)}function z(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return -1}function V(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+w.call(t.toString(16))}function Q(e){return"Object("+e+")"}function K(e){return e+" { ? }"}function J(e,t,r,n){return e+" ("+t+") {"+(n?$(r,n):R.call(r,", "))+"}"}function $(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+R.call(e,","+r)+"\n"+t.prev}function Z(e,t){var r,n=q(e),o=[];if(n){o.length=e.length;for(var i=0;i<e.length;i++)o[i]=W(e,i)?t(e[i],e):""}var a="function"==typeof T?T(e):[];if(k){r={};for(var s=0;s<a.length;s++)r["$"+a[s]]=a[s]}for(var l in e)if(W(e,l)&&(!n||String(Number(l))!==l||!(l<e.length))){// eslint-disable-line no-restricted-syntax, no-continue
if(k&&r["$"+l]instanceof Symbol)continue;// eslint-disable-line no-restricted-syntax, no-continue
S.call(/[^\w$]/,l)?o.push(t(l,e)+": "+t(e[l],e)):o.push(l+": "+t(e[l],e))}if("function"==typeof T)for(var u=0;u<a.length;u++)M.call(e,a[u])&&o.push("["+t(a[u])+"]: "+t(e[a[u]],e));return o}}),r.register("2mSnl",function(e,t){var n=r("br3n2"),o=Object.prototype.hasOwnProperty,i=Array.isArray,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),s=function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}},l=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:l,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],a=Object.keys(i),l=0;l<a.length;++l){var u=a[l],f=i[u];"object"==typeof f&&null!==f&&-1===r.indexOf(f)&&(t.push({obj:i,prop:u}),r.push(f))}return s(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);// utf-8
try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,o,i){// This code was originally written by Brian White (mscdex) for the io.js core querystring library.
// It has been adapted here for stricter adherence to RFC 3986
if(0===e.length)return e;var s=e;if("symbol"==typeof e?s=Symbol.prototype.toString.call(e):"string"!=typeof e&&(s=String(e)),"iso-8859-1"===r)return escape(s).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var l="",u=0;u<s.length;++u){var f=s.charCodeAt(u);if(45// -
===f||46// .
===f||95// _
===f||126// ~
===f||f>=48&&f<=57// 0-9
||f>=65&&f<=90// a-z
||f>=97&&f<=122// A-Z
||i===n.RFC1738&&(40===f||41// ( )
===f)){l+=s.charAt(u);continue}if(f<128){l+=a[f];continue}if(f<2048){l+=a[192|f>>6]+a[128|63&f];continue}if(f<55296||f>=57344){l+=a[224|f>>12]+a[128|f>>6&63]+a[128|63&f];continue}u+=1,/* eslint operator-linebreak: [2, "before"] */l+=a[240|(f=65536+((1023&f)<<10|1023&s.charCodeAt(u)))>>18]+a[128|f>>12&63]+a[128|f>>6&63]+a[128|63&f]}return l},isBuffer:function(e){return!!e&&"object"==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(i(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){/* eslint no-param-reassign: 0 */if(!r)return t;if("object"!=typeof r){if(i(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var a=t;return(i(t)&&!i(r)&&(a=l(t,n)),i(t)&&i(r))?(r.forEach(function(r,i){if(o.call(t,i)){var a=t[i];a&&"object"==typeof a&&r&&"object"==typeof r?t[i]=e(a,r,n):t.push(r)}else t[i]=r}),t):Object.keys(r).reduce(function(t,i){var a=r[i];return o.call(t,i)?t[i]=e(t[i],a,n):t[i]=a,t},a)}}}),r.register("br3n2",function(e,t){var r=String.prototype.replace,n=/%20/g,o={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports={default:o.RFC3986,formatters:{RFC1738:function(e){return r.call(e,n,"+")},RFC3986:function(e){return String(e)}},RFC1738:o.RFC1738,RFC3986:o.RFC3986}}),r.register("4iVSP",function(e,t){var n=r("2mSnl"),o=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l=function(e,t){var r={__proto__:null},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,u=t.parameterLimit===1/0?void 0:t.parameterLimit,f=l.split(t.delimiter,u),c=-1,p=t.charset;if(t.charsetSentinel)for(h=0;h<f.length;++h)0===f[h].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[h]?p="utf-8":"utf8=%26%2310003%3B"===f[h]&&(p="iso-8859-1"),c=h,h=f.length);for(h=0;h<f.length;++h)if(h!==c){var h,d,y,b=f[h],g=b.indexOf("]="),m=-1===g?b.indexOf("="):g+1;-1===m?(d=t.decoder(b,a.decoder,p,"key"),y=t.strictNullHandling?null:""):(d=t.decoder(b.slice(0,m),a.decoder,p,"key"),y=n.maybeMap(s(b.slice(m+1),t),function(e){return t.decoder(e,a.decoder,p,"value")})),y&&t.interpretNumericEntities&&"iso-8859-1"===p&&(y=y.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})),b.indexOf("[]=")>-1&&(y=i(y)?[y]:y),o.call(r,d)?r[d]=n.combine(r[d],y):r[d]=y}return r},u=function(e,t,r,n){for(var o=n?t:s(t,r),i=e.length-1;i>=0;--i){var a,l=e[i];if("[]"===l&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var u="["===l.charAt(0)&&"]"===l.charAt(l.length-1)?l.slice(1,-1):l,f=parseInt(u,10);r.parseArrays||""!==u?!isNaN(f)&&l!==u&&String(f)===u&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(a=[])[f]=o:"__proto__"!==u&&(a[u]=o):a={0:o}}o=a}return o},f=function(e,t,r,n){if(e){// Transform dot notation to bracket notation
var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,s=r.depth>0&&/(\[[^[\]]*])/.exec(i),l=s?i.slice(0,s.index):i,f=[];if(l){// If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;f.push(l)}for(// Loop through children appending to the array until we hit depth
var c=0;r.depth>0&&null!==(s=a.exec(i))&&c<r.depth;){if(c+=1,!r.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(s[1])}return s&&f.push("["+i.slice(s.index)+"]"),u(f,t,r,n)}},c=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return{allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:a.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,// eslint-disable-next-line no-implicit-coercion, no-extra-parens
depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}};e.exports=function(e,t){var r=c(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?l(e,r):e,i=r.plainObjects?Object.create(null):{},a=Object.keys(o),s=0;s<a.length;++s){var u=a[s],p=f(u,o[u],r,"string"==typeof e);i=n.merge(i,p,r)}return!0===r.allowSparse?i:n.compact(i)}}),r.register("ah6Tu",function(e,t){var n=r("4r6Dt"),o=r("eAyj5"),i=e.exports;for(var a in n)n.hasOwnProperty(a)&&(i[a]=n[a]);function s(e){if("string"==typeof e&&(e=o.parse(e)),e.protocol||(e.protocol="https:"),"https:"!==e.protocol)throw Error('Protocol "'+e.protocol+'" not supported. Expected "https:"');return e}i.request=function(e,t){return e=s(e),n.request.call(this,e,t)},i.get=function(e,t){return e=s(e),n.get.call(this,e,t)}});//# sourceMappingURL=fetch.7dee1094.js.map

//# sourceMappingURL=fetch.7dee1094.js.map
