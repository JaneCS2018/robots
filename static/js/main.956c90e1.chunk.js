(this.webpackJsonprobot=this.webpackJsonprobot||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t(3),r=t.n(i),s=(t(12),t(4)),c=t(5),o=t(7),l=t(6),h=t(0),m=function(e){var n=e.name,t=e.id,a=e.email;return Object(h.jsx)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(t,"200x200"),alt:"robots"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:n}),Object(h.jsx)("p",{children:a})]})]})})},u=function(e){var n=e.robots;return Object(h.jsx)("div",{children:n.map((function(e,n){return Object(h.jsx)(m,{id:e.id,name:e.name,email:e.email},n)}))})},d=function(e){e.searchfield;var n=e.searchChange;return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],j=(t(14),function(e){return Object(h.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})}),f=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n})})),this.setState({robots:b})}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"f1",children:"RobotFriends"}),Object(h.jsx)(d,{searchChange:this.onSearchChange}),Object(h.jsx)(j,{children:Object(h.jsx)(u,{robots:a})})]}):Object(h.jsx)("h1",{children:"Loading"})}}]),t}(a.Component),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),i(e),r(e),s(e)}))};t(15);r.a.render(Object(h.jsx)(f,{}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.956c90e1.chunk.js.map