(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(2),c=n.n(s),r=(n(12),n(3)),i=n(4),l=n(6),u=n(5),d=(n(13),function(){return o.a.createElement("h1",null,"Drum Machine")}),m=function(e){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6 row",style:{height:200}},e.keystrokes.map((function(t,n){return o.a.createElement("button",{className:"col-4 drum-pad",id:e.sounds[n],onClick:e.sound,key:t},t,o.a.createElement("audio",{src:"./sounds/".concat(e.sounds[n],".wav"),className:e.sounds[n],id:t}))}))),o.a.createElement("div",{className:"col-6"},o.a.createElement("h2",null,"Now playing:"),o.a.createElement("h3",{id:"display"},e.name))))},h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).handleClick=function(t){new Audio("./sounds/".concat(t.target.id,".wav")).play(),e.setState({name:t.target.id})},e.state={sounds:["bongo","dirtyhat","ghost","kick","pop","quartertone","snare","subbasesoft","wip"],keystrokes:["Q","W","E","A","S","D","Z","X","C"],name:""},e}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App",id:"drum-machine"},o.a.createElement(d,null),o.a.createElement(m,{sound:this.handleClick,sounds:this.state.sounds,name:this.state.name,keystrokes:this.state.keystrokes}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.7991d53b.chunk.js.map