function D(){}function ye(e,t){for(const n in t)e[n]=t[n];return e}function be(e){return e&&typeof e=="object"&&typeof e.then=="function"}function z(e){return e()}function K(){return Object.create(null)}function M(e){e.forEach(z)}function pe(e){return typeof e=="function"}function _e(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Y;function an(e,t){return Y||(Y=document.createElement("a")),Y.href=t,e===Y.href}function Te(e){return Object.keys(e).length===0}function on(e,t,n,r){if(e){const a=Z(e,t,n,r);return e[0](a)}}function Z(e,t,n,r){return e[1]&&r?ye(n.ctx.slice(),e[1](r(t))):n.ctx}function un(e,t,n,r){if(e[2]&&r){const a=e[2](r(n));if(t.dirty===void 0)return a;if(typeof a=="object"){const i=[],o=Math.max(t.dirty.length,a.length);for(let s=0;s<o;s+=1)i[s]=t.dirty[s]|a[s];return i}return t.dirty|a}return t.dirty}function sn(e,t,n,r,a,i){if(a){const o=Z(t,n,r,i);e.p(o,a)}}function cn(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}let N=!1;function xe(){N=!0}function Ce(){N=!1}function De(e,t,n,r){for(;e<t;){const a=e+(t-e>>1);n(a)<=r?e=a+1:t=a}return e}function Me(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const u=[];for(let c=0;c<t.length;c++){const d=t[c];d.claim_order!==void 0&&u.push(d)}t=u}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let a=0;for(let u=0;u<t.length;u++){const c=t[u].claim_order,d=(a>0&&t[n[a]].claim_order<=c?a+1:De(1,a,m=>t[n[m]].claim_order,c))-1;r[u]=n[d]+1;const f=d+1;n[f]=u,a=Math.max(f,a)}const i=[],o=[];let s=t.length-1;for(let u=n[a]+1;u!=0;u=r[u-1]){for(i.push(t[u-1]);s>=u;s--)o.push(t[s]);s--}for(;s>=0;s--)o.push(t[s]);i.reverse(),o.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<o.length;u++){for(;c<i.length&&o[u].claim_order>=i[c].claim_order;)c++;const d=c<i.length?i[c]:null;e.insertBefore(o[u],d)}}function ke(e,t){if(N){for(Me(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Pe(e,t,n){e.insertBefore(t,n||null)}function Oe(e,t,n){N&&!n?ke(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function F(e){e.parentNode.removeChild(e)}function ln(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function ee(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function fn(){return j(" ")}function dn(){return j("")}function hn(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Se(e){return Array.from(e.childNodes)}function te(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function ne(e,t,n,r,a=!1){te(e);const i=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const s=e[o];if(t(s)){const u=n(s);return u===void 0?e.splice(o,1):e[o]=u,a||(e.claim_info.last_index=o),s}}for(let o=e.claim_info.last_index-1;o>=0;o--){const s=e[o];if(t(s)){const u=n(s);return u===void 0?e.splice(o,1):e[o]=u,a?u===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,s}}return r()})();return i.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,i}function We(e,t,n,r){return ne(e,a=>a.nodeName===t,a=>{const i=[];for(let o=0;o<a.attributes.length;o++){const s=a.attributes[o];n[s.name]||i.push(s.name)}i.forEach(o=>a.removeAttribute(o))},()=>r(t))}function mn(e,t,n){return We(e,t,n,ee)}function Ee(e,t){return ne(e,n=>n.nodeType===3,n=>{const r=""+t;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>j(t),!0)}function gn(e){return Ee(e," ")}function re(e,t,n){for(let r=n;r<e.length;r+=1){const a=e[r];if(a.nodeType===8&&a.textContent.trim()===t)return r}return e.length}function vn(e){const t=re(e,"HTML_TAG_START",0),n=re(e,"HTML_TAG_END",t);if(t===n)return new ae;te(e);const r=e.splice(t,n+1);F(r[0]),F(r[r.length-1]);const a=r.slice(1,r.length-1);for(const i of a)i.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new ae(a)}function wn(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function yn(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function bn(e,t=document.body){return Array.from(t.querySelectorAll(e))}class Ue{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,n,r=null){this.e||(this.e=ee(n.nodeName),this.t=n,this.c(t)),this.i(r)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)Pe(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(F)}}class ae extends Ue{constructor(t){super();this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let n=0;n<this.n.length;n+=1)Oe(this.t,this.n[n],t)}}let q;function b(e){q=e}function k(){if(!q)throw new Error("Function called outside component initialization");return q}function pn(e){k().$$.on_mount.push(e)}function _n(e){k().$$.after_update.push(e)}function Tn(e,t){k().$$.context.set(e,t)}function xn(e){return k().$$.context.get(e)}const P=[],ie=[],H=[],oe=[],Ye=Promise.resolve();let I=!1;function Ne(){I||(I=!0,Ye.then(X))}function Q(e){H.push(e)}let R=!1;const B=new Set;function X(){if(!R){R=!0;do{for(let e=0;e<P.length;e+=1){const t=P[e];b(t),Fe(t.$$)}for(b(null),P.length=0;ie.length;)ie.pop()();for(let e=0;e<H.length;e+=1){const t=H[e];B.has(t)||(B.add(t),t())}H.length=0}while(P.length);for(;oe.length;)oe.pop()();I=!1,R=!1,B.clear()}}function Fe(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}const A=new Set;let _;function qe(){_={r:0,c:[],p:_}}function He(){_.r||M(_.c),_=_.p}function ue(e,t){e&&e.i&&(A.delete(e),e.i(t))}function Ae(e,t,n,r){if(e&&e.o){if(A.has(e))return;A.add(e),_.c.push(()=>{A.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function Cn(e,t){const n=t.token={};function r(a,i,o,s){if(t.token!==n)return;t.resolved=s;let u=t.ctx;o!==void 0&&(u=u.slice(),u[o]=s);const c=a&&(t.current=a)(u);let d=!1;t.block&&(t.blocks?t.blocks.forEach((f,m)=>{m!==i&&f&&(qe(),Ae(f,1,1,()=>{t.blocks[m]===f&&(t.blocks[m]=null)}),He())}):t.block.d(1),c.c(),ue(c,1),c.m(t.mount(),t.anchor),d=!0),t.block=c,t.blocks&&(t.blocks[i]=c),d&&X()}if(be(e)){const a=k();if(e.then(i=>{b(a),r(t.then,1,t.value,i),b(null)},i=>{if(b(a),r(t.catch,2,t.error,i),b(null),!t.hasCatch)throw i}),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,e),!0;t.resolved=e}}function Dn(e,t,n){const r=t.slice(),{resolved:a}=e;e.current===e.then&&(r[e.value]=a),e.current===e.catch&&(r[e.error]=a),e.block.p(r,n)}function Mn(e,t){const n={},r={},a={$$scope:1};let i=e.length;for(;i--;){const o=e[i],s=t[i];if(s){for(const u in o)u in s||(r[u]=1);for(const u in s)a[u]||(n[u]=s[u],a[u]=1);e[i]=s}else for(const u in o)a[u]=1}for(const o in r)o in n||(n[o]=void 0);return n}function kn(e){return typeof e=="object"&&e!==null?e:{}}function Pn(e){e&&e.c()}function On(e,t){e&&e.l(t)}function Le(e,t,n,r){const{fragment:a,on_mount:i,on_destroy:o,after_update:s}=e.$$;a&&a.m(t,n),r||Q(()=>{const u=i.map(z).filter(pe);o?o.push(...u):M(u),e.$$.on_mount=[]}),s.forEach(Q)}function $e(e,t){const n=e.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function je(e,t){e.$$.dirty[0]===-1&&(P.push(e),Ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Sn(e,t,n,r,a,i,o,s=[-1]){const u=q;b(e);const c=e.$$={fragment:null,ctx:null,props:i,update:D,not_equal:a,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:K(),dirty:s,skip_bound:!1,root:t.target||u.$$.root};o&&o(c.root);let d=!1;if(c.ctx=n?n(e,t.props||{},(f,m,...W)=>{const E=W.length?W[0]:m;return c.ctx&&a(c.ctx[f],c.ctx[f]=E)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](E),d&&je(e,f)),m}):[],c.update(),d=!0,M(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){xe();const f=Se(t.target);c.fragment&&c.fragment.l(f),f.forEach(F)}else c.fragment&&c.fragment.c();t.intro&&ue(e.$$.fragment),Le(e,t.target,t.anchor,t.customElement),Ce(),X()}b(u)}class Wn{$destroy(){$e(this,1),this.$destroy=D}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}$set(t){this.$$set&&!Te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const x=[];function En(e,t=D){let n;const r=new Set;function a(s){if(_e(e,s)&&(e=s,n)){const u=!x.length;for(const c of r)c[1](),x.push(c,e);if(u){for(let c=0;c<x.length;c+=2)x[c][0](x[c+1]);x.length=0}}}function i(s){a(s(e))}function o(s,u=D){const c=[s,u];return r.add(c),r.size===1&&(n=t(a)||D),s(e),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:a,update:i,subscribe:o}}function w(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function v(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function Ie(e,t){h(2,arguments);var n=v(e).getTime(),r=w(t);return new Date(n+r)}function G(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function se(e){h(1,arguments);var t=v(e);return t.setHours(0,0,0,0),t}var Qe=864e5;function Re(e,t){h(2,arguments);var n=se(e),r=se(t),a=n.getTime()-G(n),i=r.getTime()-G(r);return Math.round((a-i)/Qe)}function Be(e){return h(1,arguments),e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Xe(e){if(h(1,arguments),!Be(e)&&typeof e!="number")return!1;var t=v(e);return!isNaN(Number(t))}function ce(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function Un(e,t){h(2,arguments);var n=v(e),r=v(t),a=ce(n,r),i=Math.abs(Re(n,r));n.setDate(n.getDate()-a*i);var o=Number(ce(n,r)===-a),s=a*(i-o);return s===0?0:s}var Ge={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ve=function(e,t,n){var r,a=Ge[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},Je=Ve;function V(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var ze={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ke={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ze={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},et={date:V({formats:ze,defaultWidth:"full"}),time:V({formats:Ke,defaultWidth:"full"}),dateTime:V({formats:Ze,defaultWidth:"full"})},tt=et,nt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},rt=function(e,t,n,r){return nt[e]},at=rt;function O(e){return function(t,n){var r=n||{},a=r.context?String(r.context):"standalone",i;if(a==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,s=r.width?String(r.width):o;i=e.formattingValues[s]||e.formattingValues[o]}else{var u=e.defaultWidth,c=r.width?String(r.width):e.defaultWidth;i=e.values[c]||e.values[u]}var d=e.argumentCallback?e.argumentCallback(t):t;return i[d]}}var it={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ot={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ut={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},st={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ct={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},lt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ft=function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},dt={ordinalNumber:ft,era:O({values:it,defaultWidth:"wide"}),quarter:O({values:ot,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:O({values:ut,defaultWidth:"wide"}),day:O({values:st,defaultWidth:"wide"}),dayPeriod:O({values:ct,defaultWidth:"wide",formattingValues:lt,defaultFormattingWidth:"wide"})},ht=dt;function S(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?gt(s,function(f){return f.test(o)}):mt(s,function(f){return f.test(o)}),c;c=e.valueCallback?e.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;var d=t.slice(o.length);return{value:c,rest:d}}}function mt(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function gt(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function vt(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var a=r[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var s=t.slice(a.length);return{value:o,rest:s}}}var wt=/^(\d+)(th|st|nd|rd)?/i,yt=/\d+/i,bt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},pt={any:[/^b/i,/^(a|c)/i]},_t={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Tt={any:[/1/i,/2/i,/3/i,/4/i]},xt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ct={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Dt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Mt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},kt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Pt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ot={ordinalNumber:vt({matchPattern:wt,parsePattern:yt,valueCallback:function(e){return parseInt(e,10)}}),era:S({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),quarter:S({matchPatterns:_t,defaultMatchWidth:"wide",parsePatterns:Tt,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:S({matchPatterns:xt,defaultMatchWidth:"wide",parsePatterns:Ct,defaultParseWidth:"any"}),day:S({matchPatterns:Dt,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:kt,defaultMatchWidth:"any",parsePatterns:Pt,defaultParseWidth:"any"})},St=Ot,Wt={code:"en-US",formatDistance:Je,formatLong:tt,formatRelative:at,localize:ht,match:St,options:{weekStartsOn:0,firstWeekContainsDate:1}},Et=Wt;function Ut(e,t){h(2,arguments);var n=w(t);return Ie(e,-n)}function l(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var Yt={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return l(t==="yy"?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return t==="M"?String(n+1):l(n+1,2)},d:function(e,t){return l(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(e,t){return l(e.getUTCHours()%12||12,t.length)},H:function(e,t){return l(e.getUTCHours(),t.length)},m:function(e,t){return l(e.getUTCMinutes(),t.length)},s:function(e,t){return l(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds(),a=Math.floor(r*Math.pow(10,n-3));return l(a,t.length)}},p=Yt,Nt=864e5;function Ft(e){h(1,arguments);var t=v(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/Nt)+1}function L(e){h(1,arguments);var t=1,n=v(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function le(e){h(1,arguments);var t=v(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=L(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=L(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function qt(e){h(1,arguments);var t=le(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=L(n);return r}var Ht=6048e5;function At(e){h(1,arguments);var t=v(e),n=L(t).getTime()-qt(t).getTime();return Math.round(n/Ht)+1}function $(e,t){h(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=a==null?0:w(a),o=n.weekStartsOn==null?i:w(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=v(e),u=s.getUTCDay(),c=(u<o?7:0)+u-o;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function fe(e,t){h(1,arguments);var n=v(e,t),r=n.getUTCFullYear(),a=t||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,s=o==null?1:w(o),u=a.firstWeekContainsDate==null?s:w(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,u),c.setUTCHours(0,0,0,0);var d=$(c,t),f=new Date(0);f.setUTCFullYear(r,0,u),f.setUTCHours(0,0,0,0);var m=$(f,t);return n.getTime()>=d.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function Lt(e,t){h(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=a==null?1:w(a),o=n.firstWeekContainsDate==null?i:w(n.firstWeekContainsDate),s=fe(e,t),u=new Date(0);u.setUTCFullYear(s,0,o),u.setUTCHours(0,0,0,0);var c=$(u,t);return c}var $t=6048e5;function jt(e,t){h(1,arguments);var n=v(e),r=$(n,t).getTime()-Lt(n,t).getTime();return Math.round(r/$t)+1}var C={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},It={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return p.y(e,t)},Y:function(e,t,n,r){var a=fe(e,r),i=a>0?a:1-a;if(t==="YY"){var o=i%100;return l(o,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):l(i,t.length)},R:function(e,t){var n=le(e);return l(n,t.length)},u:function(e,t){var n=e.getUTCFullYear();return l(n,t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return l(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return l(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return p.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return l(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=jt(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):l(a,t.length)},I:function(e,t,n){var r=At(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):l(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):p.d(e,t)},D:function(e,t,n){var r=Ft(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):l(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return l(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return l(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return l(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours(),a=r/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r=e.getUTCHours(),a;switch(r===12?a=C.noon:r===0?a=C.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r=e.getUTCHours(),a;switch(r>=17?a=C.evening:r>=12?a=C.afternoon:r>=4?a=C.morning:a=C.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){var r=e.getUTCHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return p.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):p.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):l(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):l(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):p.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):p.s(e,t)},S:function(e,t){return p.S(e,t)},X:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return he(i);case"XXXX":case"XX":return T(i);case"XXXXX":case"XXX":default:return T(i,":")}},x:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"x":return he(i);case"xxxx":case"xx":return T(i);case"xxxxx":case"xxx":default:return T(i,":")}},O:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+de(i,":");case"OOOO":default:return"GMT"+T(i,":")}},z:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+de(i,":");case"zzzz":default:return"GMT"+T(i,":")}},t:function(e,t,n,r){var a=r._originalDate||e,i=Math.floor(a.getTime()/1e3);return l(i,t.length)},T:function(e,t,n,r){var a=r._originalDate||e,i=a.getTime();return l(i,t.length)}};function de(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(i===0)return n+String(a);var o=t||"";return n+String(a)+o+l(i,2)}function he(e,t){if(e%60==0){var n=e>0?"-":"+";return n+l(Math.abs(e)/60,2)}return T(e,t)}function T(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e),i=l(Math.floor(a/60),2),o=l(a%60,2);return r+i+n+o}var Qt=It;function me(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function ge(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}function Rt(e,t){var n=e.match(/(P+)(p+)?/),r=n[1],a=n[2];if(!a)return me(e,t);var i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",me(r,t)).replace("{{time}}",ge(a,t))}var Bt={p:ge,P:Rt},Xt=Bt,Gt=["D","DD"],Vt=["YY","YYYY"];function Jt(e){return Gt.indexOf(e)!==-1}function zt(e){return Vt.indexOf(e)!==-1}function ve(e,t,n){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Kt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Zt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,en=/^'([^]*?)'?$/,tn=/''/g,nn=/[a-zA-Z]/;function Yn(e,t,n){h(2,arguments);var r=String(t),a=n||{},i=a.locale||Et,o=i.options&&i.options.firstWeekContainsDate,s=o==null?1:w(o),u=a.firstWeekContainsDate==null?s:w(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,d=c==null?0:w(c),f=a.weekStartsOn==null?d:w(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var m=v(e);if(!Xe(m))throw new RangeError("Invalid time value");var W=G(m),E=Ut(m,W),J={firstWeekContainsDate:u,weekStartsOn:f,locale:i,_originalDate:m},we=r.match(Zt).map(function(g){var y=g[0];if(y==="p"||y==="P"){var U=Xt[y];return U(g,i.formatLong,J)}return g}).join("").match(Kt).map(function(g){if(g==="''")return"'";var y=g[0];if(y==="'")return rn(g);var U=Qt[y];if(U)return!a.useAdditionalWeekYearTokens&&zt(g)&&ve(g,t,e),!a.useAdditionalDayOfYearTokens&&Jt(g)&&ve(g,t,e),U(E,g,i.localize,J);if(y.match(nn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return g}).join("");return we}function rn(e){return e.match(en)[1].replace(tn,"'")}export{pn as A,ye as B,En as C,on as D,sn as E,cn as F,un as G,ke as H,D as I,Cn as J,bn as K,Dn as L,Yn as M,ln as N,Un as O,an as P,yn as Q,ae as R,Wn as S,vn as T,xn as U,Se as a,hn as b,mn as c,F as d,ee as e,Oe as f,Ee as g,wn as h,Sn as i,Pn as j,fn as k,dn as l,On as m,gn as n,Le as o,Mn as p,kn as q,qe as r,_e as s,j as t,Ae as u,$e as v,He as w,ue as x,Tn as y,_n as z};
