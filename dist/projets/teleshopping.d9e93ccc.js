var e;e=function(){var e,t,n,r={};r.version="0.2.0";var i=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};/**
   * Helpers
   */function s(e,t,n){return e<t?t:e>n?n:e}/**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */r.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(i[t]=n);return this},/**
   * Last number.
   */r.status=null,/**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */r.set=function(e){var t=r.isStarted();e=s(e,i.minimum,1),r.status=1===e?null:e;var n=r.render(!t),u=n.querySelector(i.barSelector),c=i.speed,l=i.easing;return n.offsetWidth,o(function(t){var s,o;""===i.positionUsing&&(i.positionUsing=r.getPositioningCSS()),// Add transition
a(u,(s=e,(o="translate3d"===i.positionUsing?{transform:"translate3d("+(-1+s)*100+"%,0,0)"}:"translate"===i.positionUsing?{transform:"translate("+(-1+s)*100+"%,0)"}:{"margin-left":(-1+s)*100+"%"}).transition="all "+c+"ms "+l,o)),1===e?(// Fade out
a(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){a(n,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){r.remove(),t()},c)},c)):setTimeout(t,c)}),this},r.isStarted=function(){return"number"==typeof r.status},/**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */r.start=function(){r.status||r.set(0);var e=function(){setTimeout(function(){r.status&&(r.trickle(),e())},i.trickleSpeed)};return i.trickle&&e(),this},/**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */r.done=function(e){return e||r.status?r.inc(.3+.5*Math.random()).set(1):this},/**
   * Increments by a random amount.
   */r.inc=function(e){var t=r.status;return t?("number"!=typeof e&&(e=(1-t)*s(Math.random()*t,.1,.95)),t=s(t+e,0,.994),r.set(t)):r.start()},r.trickle=function(){return r.inc(Math.random()*i.trickleRate)},e=0,t=0,r.promise=function(n){return n&&"resolved"!==n.state()&&(0===t&&r.start(),e++,t++,n.always(function(){0==--t?(e=0,r.done()):r.set((e-t)/e)})),this},/**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=i.template;var n,s,o=t.querySelector(i.barSelector),u=e?"-100":(-1+(r.status||0))*100,l=document.querySelector(i.parent);return a(o,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),!i.showSpinner&&(s=t.querySelector(i.spinnerSelector))&&f(s),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(t),t},/**
   * Removes the element. Opposite of render().
   */r.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(i.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},/**
   * Checks if the progress bar is rendered.
   */r.isRendered=function(){return!!document.getElementById("nprogress")},/**
   * Determine which positioning CSS rule to use.
   */r.getPositioningCSS=function(){// Sniff on document.body.style
var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};/**
   * (Internal) Queues a function to be executed.
   */var o=(n=[],function(e){n.push(e),1==n.length&&function e(){var t=n.shift();t&&t(e)}()}),a=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n,r,i){var s;r=t[s=(s=r).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[s]=function(t){var n=document.body.style;if(t in n)return t;for(var r,i=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);i--;)if((r=e[i]+s)in n)return r;return t}(s)),n.style[r]=i}return function(e,t){var r,i,s=arguments;if(2==s.length)for(r in t)void 0!==(i=t[r])&&t.hasOwnProperty(r)&&n(e,r,i);else n(e,s[1],s[2])}}();/**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */function u(e,t){return("string"==typeof e?e:d(e)).indexOf(" "+t+" ")>=0}/**
   * (Internal) Adds a class to an element.
   */function c(e,t){var n=d(e),r=n+t;u(n,t)||// Trim the opening space.
(e.className=r.substring(1))}/**
   * (Internal) Removes a class from an element.
   */function l(e,t){var n,r=d(e);u(e,t)&&(// Replace the class name.
n=r.replace(" "+t+" "," "),// Trim the opening and closing spaces.
e.className=n.substring(1,n.length-1))}/**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */function d(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}/**
   * (Internal) Removes an element from the DOM.
   */function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r},"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():this.NProgress=e();//# sourceMappingURL=teleshopping.d9e93ccc.js.map

//# sourceMappingURL=teleshopping.d9e93ccc.js.map
