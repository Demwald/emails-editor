!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.chars="abcdefghijklmnopqrstuvwxyz1234567890",this.tlds=["org","com","ru","gov","edu","uk"]}var e,n,o;return e=t,(n=[{key:"getRandomInt",value:function(t){var e=t.min,n=t.max;return Math.floor(Math.random()*(n-e))+e}},{key:"getRandomWord",value:function(t){for(var e=t.wordLength,n="",r=0;r<e;r++)n+=this.chars[this.getRandomInt({min:0,max:this.chars.length})];return n}},{key:"getRandomEmail",value:function(){var t=this.getRandomInt({min:4,max:this.chars.length});return this.getRandomWord({wordLength:t})+"@"+this.getRandomWord({wordLength:this.getRandomInt({min:4,max:8})})+"."+this.getRandomTld()}},{key:"getRandomTld",value:function(){return this.tlds[this.getRandomInt({min:0,max:this.tlds.length})]}}])&&r(e.prototype,n),o&&r(e,o),t}(),a=document.getElementById("container"),i=EmailsEditor({container:a});i.on("change",function(t){console.log(t)});var u=new o;document.getElementById("btn-random-email").addEventListener("click",function(t){var e=u.getRandomEmail();i.addEmails([e])}),document.getElementById("btn-emails-cnt-alert").addEventListener("click",function(t){var e=i.getEmails().filter(function(t){return t.valid}).length;alert("Total vaild emails: "+e)})}]);