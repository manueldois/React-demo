(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{133:function(e,t,a){},134:function(e,t,a){},293:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},l=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),l.forEach(function(t){n(e,t,a[t])})}return e}a.r(t);var o=a(12),r=a(13),i=a(15),s=a(14),c=a(16),m=a(0),h=a.n(m),u=(a(133),a(134),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"Slider"},h.a.createElement("input",{name:this.props.name,type:"range",min:this.props.min,max:this.props.max,value:this.props.value,onChange:this.props.onChange}))}}]),t}(m.Component));a.d(t,"default",function(){return d});var d=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).componentDidMount=function(){fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(e){return e.data.memes}).then(function(t){e.setState({all_memes:t})}).then(function(){return e.setRandomMeme()})},e.handleChange=function(t){var a=t.target,n=a.type,o=a.name,r=a.value,i=a.checked;"checkbox"===n&&("bold"===o&&e.setState({text_style:l({},e.state.text_style,{fontWeight:i?"bold":"normal"})}),"italic"===o&&e.setState({text_style:l({},e.state.text_style,{fontStyle:i?"italic":"normal"})})),"color"===n&&"color"===o&&e.setState({text_style:l({},e.state.text_style,{color:r})}),"range"===n&&"size"===o&&e.setState({text_style:l({},e.state.text_style,{fontSize:"".concat(r,"px")})}),"text"===n&&("top_text"===o&&e.setState({top_text:r}),"bottom_text"===o&&e.setState({bottom_text:r}))},e.handleLoad=function(t){e.setState({loaded_image:!0}),document.getElementById("meme-editor").focus()},e.setRandomMeme=function(){var t=Math.floor(Math.random()*e.state.all_memes.length),a=e.state.all_memes[t];e.setState({current_meme:a,loaded_image:!1})},e.state={all_memes:[null],current_meme:{id:null,name:null,url:"",width:null,height:null},loaded_image:!1,top_text:"Top text",bottom_text:"Bottom text",text_style:{color:"#FFFFFF",fontSize:"30px",fontWeight:"bold",fontStyle:"normal"}},e}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"page MemeGeneratorPage"},h.a.createElement("h1",null,"MemeGenerator"),h.a.createElement("div",{className:"controls"},h.a.createElement("button",{name:"rnd_meme",className:"lg",onClick:this.setRandomMeme},"Random Meme"),h.a.createElement("div",null,h.a.createElement("label",null,h.a.createElement("input",{name:"bold",type:"checkbox",checked:"bold"===this.state.text_style.fontWeight,onChange:this.handleChange}),"Bold"),h.a.createElement("label",null,h.a.createElement("input",{name:"italic",type:"checkbox",checked:"italic"===this.state.text_style.fontStyle,onChange:this.handleChange}),"Italic"),h.a.createElement("label",null,h.a.createElement("input",{name:"color",type:"color",value:this.state.text_style.color,onChange:this.handleChange}),"Color")),h.a.createElement(u,{name:"size",id:"size",min:"20",max:"70",onChange:this.handleChange}),h.a.createElement("label",{htmlFor:"size"},"Font size")),!this.state.loaded_image&&h.a.createElement("h3",{className:"loading"},"Loading.."),h.a.createElement("div",{className:"editor",id:"meme-editor",style:{opacity:this.state.loaded_image?"1":"0.2"}},h.a.createElement("img",{id:"meme",src:this.state.current_meme.url,alt:"meme",onLoad:this.handleLoad}),h.a.createElement("input",{type:"text",style:this.state.text_style,name:"top_text",value:this.state.top_text,placeholder:"Edit Top Text",onChange:this.handleChange}),h.a.createElement("input",{type:"text",style:this.state.text_style,name:"bottom_text",value:this.state.bottom_text,placeholder:"Edit Bottom Text",onChange:this.handleChange})),h.a.createElement("small",null,"Saving would require a CORS enabled server"))}}]),t}(m.Component)}}]);
//# sourceMappingURL=8.4b884651.chunk.js.map