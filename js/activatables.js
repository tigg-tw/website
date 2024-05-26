/*
Activatables -- Make sets of elements active/inactive through anchors.
Copyright (c) 2009 Andreas Blixt
MIT license

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var activatables=function(){function l(n,r){var i=n.className.split(/\s+/);var s=r?e:t,o=false;for(var u=0;u<i.length;u++){if(i[u]==e||i[u]==t){if(!o){i[u]=s;o=true}else{delete i[u--]}}}if(!o)i.push(s);n.className=i.join(" ")}function c(){var e=location.hash||"#";var t=e.substring(1).split("&");var n={};for(var r=0;r<t.length;r++){var i=t[r].split("=");if(!i[0])continue;n[i[0]]=i[1]||null}return n}function h(e){var t=[];for(var n in e){if(e[n])t.push(n+"="+e[n])}location.hash=p="#"+t.join("&")}function d(){var e=location.hash;if(e!=p){var t=c();for(var n in t){if(!(n in r))continue;r[n](t[n])}p=e}}function v(e){var t=c();return t[e]}function m(e,t){var n=c();n[e]=t;h(n)}function y(e,t){function o(t){if(!(t in i))return false;for(var n in i){if(n==t)continue;for(var r=0;r<i[n].length;r++){l(i[n][r],false)}}for(var r=0;r<i[t].length;r++){l(i[t][r],true)}m(e,t);return true}function u(e,t){if(e instanceof Array){for(var r=0;r<e.length;r++){u(e[r],t)}}else if(typeof e=="object"){for(var a in e){var f=u(a,t);u(e[a],f)}}else if(typeof e=="string"){var f=t?t.slice(0):[];var l=document.getElementById(e);if(!l)throw'Could not find "'+e+'".';f.push(l);if(!s)s=e;i[e]=f;if(e in n){var c=function(e){return function(t){o(e);if(!t)t=window.event;if(t.preventDefault)t.preventDefault();t.returnValue=false;return false}}(e);for(var r=0;r<n[e].length;r++){var h=n[e][r];if(h.addEventListener){h.addEventListener("click",c,false)}else if(h.attachEvent){h.attachEvent("onclick",c)}else{throw"Unsupported event model."}i[e].push(h)}}return f}else{throw"Unexpected type."}return t}var i={},s=g;r[e]=o;u(t);if(s)o(v(e))||o(s)}var e="active";var t="inactive";var n={},r={};var i=/#([A-Za-z][A-Za-z0-9:._-]*)$/;var s=document.getElementsByTagName("a");for(var o=0;o<s.length;o++){var u=s[o];if(u.pathname!=location.pathname&&"/"+u.pathname!=location.pathname||u.search!=location.search)continue;var a=i.exec(u.href);if(!a)continue;var f=a[1];if(f in n)n[f].push(u);else n[f]=[u]}var p=location.hash;setInterval(d,250);var g=null;var a=i.exec(p);if(a){g=a[1]}return y}()