(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(22),a(12)),s=a(13),i=a(16),m=a(15),u=a(14),p=a.n(u),h=function(){return p.a.get("https://randomuser.me/api/?results=30")},f=function(e){if(""===e.search)return r.a.createElement("tbody",null,e.people.map((function(e){return r.a.createElement("tr",{key:e.cell},r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.thumbnail,alt:e.name.first})))})));if("string"===typeof e.search){var t=e.people.filter((function(t){return(t.name.first+" "+t.name.last).substring(0,e.search.length).toLowerCase()===e.search.toLowerCase()}));return r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.cell},r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.thumbnail,alt:e.name.first})))})))}},d=function(e){var t=e.sortByFirstName,a=e.sortByLastName;return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},r.a.createElement("a",{href:"#SortFirst",onClick:function(){return t()}},"First")),r.a.createElement("th",{scope:"col"},r.a.createElement("a",{href:"#SortLast",onClick:function(){return a()}},"Last")),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Phone Number"),r.a.createElement("th",{scope:"col"},"Picture")))};var E=function(e){var t=e.children;return r.a.createElement("div",{className:"wrapper"},t)},v=(a(40),function(e){var t=e.handleInputChange;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("h1",null,"Employee Search"),r.a.createElement("form",{className:"form my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search by first name","aria-label":"Search",onChange:t})))}),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={people:[],search:""},e.handleSubmit=function(t){e.setState({search:t})},e.handleInputChange=function(t){e.handleSubmit(t.target.value)},e.renderSingleView=function(){},e.sortByFirstName=function(){var t=e.state.people.sort((function(e,t){var a=e.name.first.toUpperCase(),n=t.name.first.toUpperCase(),r=0;a>n?r=1:a<n&&(r=-1);return r}));e.setState({people:t})},e.sortByLastName=function(){var t=e.state.people.sort((function(e,t){var a=e.name.last.toUpperCase(),n=t.name.last.toUpperCase(),r=0;a>n?r=1:a<n&&(r=-1);return r}));e.setState({people:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().then((function(t){return e.setState({people:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null,r.a.createElement(v,{handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit}),r.a.createElement("table",{className:"table table-dark"},r.a.createElement(d,{sortByFirstName:this.sortByFirstName,sortByLastName:this.sortByLastName}),r.a.createElement(f,{people:this.state.people,search:this.state.search}))))}}]),a}(n.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e948c368.chunk.js.map