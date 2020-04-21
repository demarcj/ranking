(this.webpackJsonprankings=this.webpackJsonprankings||[]).push([[0],{13:function(e,t,a){},17:function(e,t,a){},26:function(e,t,a){e.exports=a(55)},31:function(e,t,a){},34:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),o=(a(31),a(1)),u=a.n(o),l=a(3),i=a(9),m=a(10),p=a(7),h=(a(17),function(){return r.a.createElement("header",null,r.a.createElement("aside",null),r.a.createElement("h1",{className:"site_header"},"Welcome to Fighter Stats"),r.a.createElement("aside",null))}),f=a(22),g=a.n(f),b=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("h3",{className:"copyright"},"\xa9 ",g()().year()," DeMarc Johnson"))},v=(a(13),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"content_header header"},"Select the Tournament"))}),d=function(e){return r.a.createElement("form",{id:"tournamentSearch",className:"form",onSubmit:e.submit_search},r.a.createElement("div",{className:"inputgrg"},r.a.createElement("label",{htmlFor:"player",className:"label"},"Player"),r.a.createElement("input",{type:"text",name:"player",id:"player",className:"input",onChange:e.input_change,value:e.player}),r.a.createElement("button",{className:"button",type:"submit"},"Search Player")))},y=function(e){return r.a.createElement("form",{onSubmit:e.tournament_submit,className:"form"},r.a.createElement("label",{htmlFor:"tournament",className:"label"},"Tournament"),r.a.createElement("input",{type:"text",name:"tournament",id:"tournament",className:"input",onChange:e.input_change,value:e.tournament}),r.a.createElement("button",{className:"button",type:"submit"},"Search"),r.a.createElement("select",{className:"game_form input",name:"game",onChange:e.input_change,value:e.game},e.event_list.map((function(e,t){return r.a.createElement("option",{key:t.toString()},e)}))))},E=(a(34),function(){return r.a.createElement("nav",{className:"nav_link"},r.a.createElement("ul",{className:"nav_list"},r.a.createElement("li",{className:"nav_list_item"},r.a.createElement(m.b,{className:"nav_list_link",to:"/fightStats"},"Home")),r.a.createElement("li",{className:"nav_list_item"},r.a.createElement(m.b,{className:"nav_list_link",to:"/about"},"About")),r.a.createElement("li",{className:"nav_list_item"},r.a.createElement(m.b,{className:"nav_list_link",to:"/help"},"Help")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav_list_link",href:"https://demarcj.github.io/portfolio/",target:"_blank"},"Portfolio"))))}),_=a(25),N=a.n(_),k=(a(51),function(){var e=[N()('To test the form go to <a href="https://smash.gg" target="_blank">smash.gg</a> and copy and paste the name of the tournament in the first'),"Select a game","Type a player's name in the Player field to see if that person attended the tournament"];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"content_header header"},"Help"),e.map((function(e,t){return r.a.createElement("p",{className:"body_test",key:t},t+1,".",e)})))}),j=(a(52),function(e){return r.a.createElement("aside",{className:"stats_aside"},r.a.createElement("h2",{className:"header stats_header"},"Stats"),r.a.createElement("p",{className:"body_text"},e.results),r.a.createElement("p",{className:"errot_text"},e.error))}),w=(a(53),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"content_header header"},"About Fight Stat"),r.a.createElement("p",{className:"body_text"},"Are you tired of the work of searching top 8 results in\xa0",r.a.createElement("a",{href:"https://smash.gg",target:"_blank"},"smash.gg"),". I like that site a lot but it take some work to get tournament result. Fight Stats uses the smash.gg api to get the tournament result in a faster by typing in the tournament, game and player tag name"))}),x=function(){var e=Object(l.a)(u.a.mark((function e(t,a,n,r){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){var e=Object(l.a)(u.a.mark((function e(){var c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Array(t).fill(void 0),s=c.map(function(){var e=Object(l.a)(u.a.mark((function e(t,c){var s,o,l,i,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="https://cors-anywhere.herokuapp.com/https://api.smash.gg/tournament/".concat(n.split(" ").join("-")),o="/event/".concat(r.split(" ").join("-"),"/standings?entityType=event&expand[]=entrants&mutations[]=playerData&mutations[]=standingLosses&page=").concat(c,"&per_page=100"),e.next=4,fetch(s+o);case 4:return l=e.sent,e.next=7,l.json();case 7:return i=e.sent,m=i.items.entities.entrants.map((function(e){return Object.values(e.mutations.participants)[0].gamerTag})).filter((function(e){return F(e)===F(a)})),e.abrupt("return",0===m.length?"Player Not Found!":m[0]);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),e.abrupt("return",s[0]);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.abrupt("return",c());case 2:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(u.a.mark((function e(t,a,n){var r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:return r=e.sent,e.next=5,O(r,n);case 5:return c=e.sent,s=Math.ceil(Number(c.total_count)/100),e.abrupt("return",x(s,a,t,n));case 8:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(t,a){var n,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://cors-anywhere.herokuapp.com/https://api.smash.gg/tournament/".concat(t),r="/event/".concat(a.split(" ").join("-"),"/standings?entityType=event&expand[]=entrants&mutations[]=playerData"),e.next=4,fetch(n+r);case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),F=function(e){return e.toLowerCase().split(" ").join("")},T=function(e){return e.toLowerCase().split(".").join("").split(" ").join("-")},P=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n,r,c,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=T(t),"https://cors-anywhere.herokuapp.com/",n="https://api.smash.gg/tournament/".concat(a,"?expand[]=event"),e.next=5,fetch("https://cors-anywhere.herokuapp.com/"+n);case 5:return r=e.sent,e.next=8,r.json();case 8:return c=e.sent,e.next=11,Object.values(c.entities.event);case 11:return s=e.sent,(o=s.map((function(e){return e.name}))).unshift("Select Game"),e.abrupt("return",o);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){return""===e||"Select Game"===e?"":e};a(54);function C(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),f=o[0],g=o[1],_=Object(n.useState)(""),N=Object(i.a)(_,2),x=N[0],O=N[1],F=Object(n.useState)(""),T=Object(i.a)(F,2),C=T[0],A=T[1],G=Object(n.useState)(""),H=Object(i.a)(G,2),J=H[0],L=H[1],M=Object(n.useState)(["Select Game"]),W=Object(i.a)(M,2),B=W[0],I=W[1],U=function(e){e.preventDefault(),"tournament"===e.target.name?g(e.target.value):"game"===e.target.name?L(e.target.value):O(e.target.value)},$=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n,r,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=D(J),e.next=4,S(f,x,a);case 4:n=e.sent,r="".concat(n," did play in ").concat(f.toUpperCase()," for ").concat(a),"Player Not Found! To check for players from this tournament check.",s="Player Not Found!"===n?"".concat("Player Not Found! To check for players from this tournament check."):r,o="Player Not Found!"===n?"smash.gg":"",A(s),c(o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,P(f);case 3:a=e.sent,I(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=f?$:function(e){e.preventDefault(),c(function(e,t){return""===e&&""===t?"All fields are empty":""===e?"The tournament field is empty":""}(f,x))};return r.a.createElement(m.a,null,r.a.createElement(h,null),r.a.createElement("main",{className:"main"},r.a.createElement(E,null),r.a.createElement("section",{className:"center_section"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/help",component:k}),r.a.createElement(p.a,{path:"/about",component:w}),r.a.createElement(p.a,{path:"/"},r.a.createElement(v,null),r.a.createElement(y,{input_change:U,tournament_submit:q,event_list:B,tournament:f,game:J}),r.a.createElement(d,{input_change:U,player:x,submit_search:z})))),r.a.createElement(j,{results:C,error:a})),r.a.createElement(b,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.7188ad79.chunk.js.map