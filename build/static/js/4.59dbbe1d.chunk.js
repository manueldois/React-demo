(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{130:function(e){e.exports={apple:{colors:["#FF0000","#00FF00","#bb3f82"]},banana:{colors:["#ffe135","#704400"]}}},274:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(13),c=n(15),o=n(14),l=n(16),i=n(0),u=n.n(i),s=(n(274),u.a.createContext("orange")),m=(n(275),function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"FruitColorComponent",style:{backgroundColor:this.props.color}},"apple"===this.context&&u.a.createElement("img",{src:"apple.svg"}),"banana"===this.context&&u.a.createElement("img",{src:"banana.svg"}))}}]),t}(u.a.Component));m.contextType=s;n(276);var p=n(130),f=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).call(this,e))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=p[this.context];if(!e)return u.a.createElement("div",null);console.log(e);var t=e.colors.map(function(e){return u.a.createElement("div",{key:e},u.a.createElement(m,{color:e}),u.a.createElement("span",null,e.toUpperCase()))});return u.a.createElement("div",{className:"FruitColorsComponent"},u.a.createElement("h2",null,"Fruit: ",this.context),u.a.createElement("div",{className:"colors"},t))}}]),t}(u.a.Component);f.contextType=s,n.d(t,"default",function(){return h});var h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.type,r=t.name,c=t.value;t.checked;"select-one"===a&&"fruit"===r&&n.setState({fruit:c})},n.state={fruit:Object.keys(p)[0]},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=Object.keys(p).map(function(e){return u.a.createElement("option",{value:e},e)});return u.a.createElement("div",{className:"page ContextPage"},u.a.createElement("h1",null,"ContextPage"),u.a.createElement("section",null,u.a.createElement("form",null,u.a.createElement("select",{name:"fruit",value:this.state.fruit,onChange:this.handleChange},e)),u.a.createElement(s.Provider,{value:this.state.fruit},u.a.createElement(f,null))))}}]),t}(u.a.Component)}}]);
//# sourceMappingURL=4.59dbbe1d.chunk.js.map