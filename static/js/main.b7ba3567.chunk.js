(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(20),r=n.n(o),i=n(13),u=n(6),c=n(7),l=n(10),m=n(9),g=n(11),h=n(8),d=(n(30),n(2)),p={appId:"3167bd9cb0f2d0",apiKey:"13a262935b4d394f0d1d12f6039c1cbc0f5322e2",GUID:"testgroup"},E=function(){function e(){Object(u.a)(this,e)}return Object(c.a)(e,null,[{key:"init",value:function(){return d.CometChat.init(e.appId)}},{key:"getTextMessage",value:function(e,t,n){return"user"===n?new d.CometChat.TextMessage(e,t,d.CometChat.MESSAGE_TYPE.TEXT,d.CometChat.RECEIVER_TYPE.USER):new d.CometChat.TextMessage(e,t,d.CometChat.MESSAGE_TYPE.TEXT,d.CometChat.RECEIVER_TYPE.GROUP)}},{key:"getLoggedinUser",value:function(){return d.CometChat.getLoggedinUser()}},{key:"login",value:function(e){return console.log(this.apiKey),d.CometChat.login(e,this.apiKey)}},{key:"getGroupMessages",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,a=(new d.CometChat.MessagesRequestBuilder).setGUID(e).setLimit(n).build();return t(),a.fetchPrevious()}},{key:"sendGroupMessage",value:function(e,t){var n=this.getTextMessage(e,t,"group");return d.CometChat.sendMessage(n)}},{key:"joinGroup",value:function(e){return d.CometChat.joinGroup(e,d.CometChat.GROUP_TYPE.PUBLIC,"")}},{key:"addMessageListener",value:function(e){d.CometChat.addMessageListener(this.LISTENER_KEY_MESSAGE,new d.CometChat.MessageListener({onTextMessageReceived:function(t){e(t)}}))}}]),e}();E.LISTENER_KEY_MESSAGE="msglistener",E.appId=p.appId,E.apiKey=p.apiKey,E.LISTENER_KEY_GROUP="grouplistener";var f=n(21),C=n.n(f),v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){""!==n.state.username&&(e.preventDefault(),n.login())},n.login=function(){n.toggleIsSubmitting(),E.login(n.state.username).then(function(e){n.setState({user:e,isAuthenticated:!0}),console.log(n.state.username)}).catch(function(e){n.setState({errorMessage:"Please enter a valid username"}),n.toggleIsSubmitting(),console.log(e)})},n.toggleIsSubmitting=function(){n.setState(function(e){return{isSubmitting:!e.isSubmitting}})},n.handleInput=function(e){n.setState({username:e.target.value})},n.state={username:"",isAuthenticated:!1,user:null,isSubmitting:!1,errorMessage:""},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.isAuthenticated?s.a.createElement(h.a,{to:{pathname:"/chat",state:{user:this.state.user}}}):s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"COMETCHAT"),s.a.createElement("p",null,"Create an account through your CometChat dashboard or login with one of our test users, superhero1, superhero2, etc."),s.a.createElement("form",{onSubmit:this.onSubmit,className:"form"},s.a.createElement("input",{onChange:this.handleInput,type:"text"}),s.a.createElement("span",{className:"error"},this.state.errorMessage),this.state.isSubmitting?s.a.createElement("img",{src:C.a,alt:"Spinner component",className:"App-logo"}):s.a.createElement("input",{type:"submit",disabled:""===this.state.username,value:"LOGIN"})))}}]),t}(a.Component),b=n(24),S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).sendMessage=function(){E.sendGroupMessage(n.GUID,n.state.messageText).then(function(e){console.log("Message sent successfully:",e),n.setState({messageText:null})},function(e){"ERR_NOT_A_MEMBER"===e.code&&E.joinGroup(n.GUID).then(function(e){n.sendMessage()})})},n.scrollToBottom=function(){var e=document.getElementById("chatList");e.scrollTop=e.scrollHeight},n.handleSubmit=function(e){e.preventDefault(),n.sendMessage(),e.target.reset()},n.handleChange=function(e){n.setState({messageText:e.target.value})},n.getUser=function(){E.getLoggedinUser().then(function(e){console.log("user details:",{user:e}),n.setState({user:e})}).catch(function(e){"USER_NOT_LOGED_IN"===e.error.code&&n.setState({isAuthenticated:!1})})},n.messageListener=function(){E.addMessageListener(function(e,t){if(t)return console.log("error: ".concat(t));n.setState(function(t){return{groupMessage:[].concat(Object(b.a)(t.groupMessage),[e])}},function(){n.scrollToBottom()})})},n.state={receiverID:"",messageText:null,groupMessage:[],user:{},isAuthenticated:!0},n.GUID=p.GUID,n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getUser(),this.messageListener()}},{key:"render",value:function(){var e=this;return this.state.isAuthenticated?s.a.createElement("div",{className:"chatWindow"},s.a.createElement("ul",{className:"chat",id:"chatList"},this.state.groupMessage.map(function(t){return s.a.createElement("div",{key:t.id},e.state.user.uid===t.sender.uid?s.a.createElement("li",{className:"self"},s.a.createElement("div",{className:"msg"},s.a.createElement("p",null,t.sender.uid),s.a.createElement("div",{className:"message"}," ",t.data.text))):s.a.createElement("li",{className:"other"},s.a.createElement("div",{className:"msg"},s.a.createElement("p",null,t.sender.uid),s.a.createElement("div",{className:"message"}," ",t.data.text," "))))})),s.a.createElement("div",{className:"chatInputWrapper"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{className:"textarea input",type:"text",placeholder:"Enter your message...",onChange:this.handleChange})))):s.a.createElement(h.a,{to:"/"})}}]),t}(s.a.Component),M=function(e){function t(e){var n;return Object(u.a)(this,t),n=Object(l.a)(this,Object(m.a)(t).call(this,e)),E.init(),n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(h.d,null,s.a.createElement(h.a,{exact:!0,from:"/",to:"/login"}),s.a.createElement(h.b,{path:"/login",component:v}),s.a.createElement(h.b,{path:"/chat",component:S}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(i.a,null,s.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.b7ba3567.chunk.js.map