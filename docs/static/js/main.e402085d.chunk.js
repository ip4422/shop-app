(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a(198)},116:function(e,t,a){},118:function(e,t,a){},154:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),i=(a(116),a(2)),s=a(3),l=a(5),u=a(4),m=a(6),p=(a(118),a(202)),d=a(200),h=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.to,a=e.caption;return r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{className:"nav-link",to:t},a))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarToggler"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement(h,{to:"/login",caption:"Login"}),r.a.createElement(h,{to:"/signup",caption:"Signup"}),r.a.createElement(h,{to:"/search",caption:"Search"}),r.a.createElement(h,{to:"/logout",caption:"Logout"}),r.a.createElement(h,{to:"/cart",caption:"Cart"}))))))}}]),t}(n.Component),b=a(204),g=a(203),v=a(201),O=a(19),E="LOG_IN",j="LOG_OUT",y="LOG_IN_FAIL",C="SIGN_UP";var k=a(45),N=a(13),S=a(109),w=function(e){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e)},F=function(e){return"string"===typeof e?JSON.parse(e.toLowerCase().trim()):e},D=function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t&=t}return String(t)},T=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.onChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email","data-field-name":"email",onChange:e,className:"form-control",name:"email","aria-describedby":"emailHelp",placeholder:"Enter email"}))}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,a=e.caption,n=e.name;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"InputPassword"},a),r.a.createElement("input",{type:"password","data-field-name":"password",onChange:t,className:"form-control",name:n,placeholder:"Password"}))}}]),t}(n.Component),M=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password,o=t.confirmPassword,c=a.props,i=c.isSignup,s=c.logIn,l=c.signUp;return i&&r!==o?(a.setState(function(e){return Object(N.a)({},e,{errorMsg:"password didn't match"})}),null):w(n)?void(i?l({email:n,password:D(r)},function(){a.setState({redirectBack:!0})}):s({email:n,password:D(r),admin:a.state.admin},function(){a.setState({redirectBack:!0})})):(a.setState(function(e){return Object(N.a)({},e,{errorMsg:"email address incorrect"})}),null)},a.handleChange=function(e){var t=e.currentTarget.value,n=e.currentTarget.name;a.setState(function(e){return Object(N.a)({},e,Object(k.a)({},n,t))})};var n=a.props,r=n.isSignup,o=n.admin,c=n.errorMsg,s=n.isAuthorized;return a.state={email:"",password:"",confirmPassword:"",errorMsg:c,isSignup:r,admin:o,redirectBack:s},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getAlert",value:function(e){return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},e)}},{key:"render",value:function(){var e=this.props.errorMsg||this.state.errorMsg,t=this.props,a=t.location,n=t.isSignup,o=(a.state||{from:{pathname:"/search"}}).from;return this.state.redirectBack?r.a.createElement(S.a,{to:o}):r.a.createElement("div",{className:"container"},e&&this.getAlert(e),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(T,{onChange:this.handleChange}),r.a.createElement(x,{onChange:this.handleChange,caption:"Password",name:"password"}),n?r.a.createElement(x,{onChange:this.handleChange,caption:"Confirm Password",name:"confirmPassword"}):"",r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}}]),t}(n.Component),I=Object(O.b)(function(e){return{isAuthorized:""!==e.sessionStore.user.email,errorMsg:e.sessionStore.errorMsg,user:e.sessionStore.user,admin:e.sessionStore.admin}},function(e){return{logIn:function(t,a){return e(function(e,t){return function(a){!function(e){return e.admin.password===e.password}(e)?a({type:y,payload:"Wrong Username or Password"}):(a({type:E,payload:{email:e.email,password:e.password}}),t())}}(t,a))},signUp:function(t,a){return e(function(e,t){return function(a){a({type:C,payload:{email:e.email,password:e.password}}),t()}}(t,a))}}})(M),_="SET_ITEMS",A="SET_FILTER",P="SET_INSTOCK";var L=a(8),B=a.n(L),z=a(21),Y={colors:z.c,items:z.f,filter:z.e,cart:z.b};function H(e,t){return e.map(function(e,a){return function(e,t){var a=e;a.isFiltered=!1;var n=B()(e.issueDate,"MM-DD-YYYY");return t.fromDate&&n.diff(t.fromDate)<0?a.isFiltered=!0:t.toDate&&t.toDate.diff(n)<0&&(a.isFiltered=!0),t.inStockOnly&&F(e.inStock)!==t.inStockOnly&&(a.isFiltered=!0),t.priceFrom&&e.price<t.priceFrom?a.isFiltered=!0:t.priceTo&&e.price>t.priceTo&&(a.isFiltered=!0),t.color&&t.color!==e.color&&(a.isFiltered=!0),a}(e,t)})}a(126),a(152),a(154);var G=a(107),U=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.date,a=e.onDateChange,n=e.focused,o=e.onFocusChange,c=e.id;return r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"from-date-label"},"From:")),r.a.createElement(G.SingleDatePicker,{date:t,numberOfMonths:1,isOutsideRange:function(){return!1},onDateChange:a,focused:n,onFocusChange:o,id:c})))}}]),t}(n.Component),J=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.caption,a=e.value,n=e.onChange,o=e.name;return r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},o?r.a.createElement("input",{type:"checkbox",name:o,"aria-label":"Checkbox for ".concat(t),onChange:n,checked:F(a)}):r.a.createElement("input",{type:"checkbox","aria-label":"Checkbox for ".concat(t),onChange:n,checked:F(a)}))),r.a.createElement("div",{className:"form-control form-control_left-border text-left bd-highlight"},t)))}}]),t}(n.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.onChange,n=e.caption;return r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},n," $")),r.a.createElement("input",{name:t,type:"text",className:"form-control","aria-label":"Amount (to the nearest dollar)",onChange:a})))}}]),t}(n.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getListItems",value:function(e,t,a){return r.a.createElement("select",{name:t,onChange:a},e&&e.map(function(e){return r.a.createElement("option",{value:e.toLowerCase(),key:e},e)}))}},{key:"render",value:function(){var e=this.props,t=e.caption,a=e.items,n=e.name,o=e.onChange;return r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"form-control text-right bd-highlight form-control_right-border"},t),r.a.createElement("div",{className:"input-group-append"},this.getListItems(a,n,o))))}}]),t}(n.Component),Z="in-stock-only",$="from-amount-id",K="to-amount-id",q="color-id",Q=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChangeHandler=function(e){switch(e.currentTarget.name){case Z:a.state.setFilter({inStockOnly:e.currentTarget.checked});break;case q:a.state.setFilter({color:e.currentTarget.value});break;case $:a.state.setFilter({priceFrom:parseFloat(e.currentTarget.value)});break;case K:a.state.setFilter({priceTo:parseFloat(e.currentTarget.value)})}};var n=a.props,r=n.colors,o=n.errorMsg,c=n.setFilter,s=n.filter;return a.state={focusedFromDate:null,focusedToDate:null,fromDate:s.fromDate,toDate:s.toDate,filter:s,colors:r,errorMsg:o,setFilter:c},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"pt-3 pb-3 mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(U,{date:this.state.fromDate,onDateChange:function(t){e.state.setFilter({fromDate:t}),e.setState({fromDate:t})},focused:this.state.focusedFromDate,onFocusChange:function(t){var a=t.focused;return e.setState({focusedFromDate:a})},id:"from-date-id"}),r.a.createElement(U,{date:this.state.toDate,onDateChange:function(t){e.state.setFilter({ToDate:t}),e.setState({ToDate:t})},focused:this.state.focusedToDate,onFocusChange:function(t){var a=t.focused;return e.setState({focusedToDate:a})},id:"to-date-id"}),r.a.createElement(J,{name:Z,caption:"In Stock only",onChange:this.onChangeHandler,checked:this.state.filter.inStockOnly})),r.a.createElement("div",{className:"row"}," ",r.a.createElement("div",{className:"col"}," Price ")," ")," ",r.a.createElement("div",{className:"row"},r.a.createElement(R,{name:$,caption:"From",onChange:this.onChangeHandler}),r.a.createElement(R,{name:K,caption:"To",onChange:this.onChangeHandler}),r.a.createElement(W,{name:q,caption:"Color",onChange:this.onChangeHandler,items:this.state.colors})))))}}]),t}(n.Component),V=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.imageSrc,a=e.name;return r.a.createElement("div",{className:"col-xs-6 col-sm-5 col-md-3 col-lg-3"},r.a.createElement("img",{src:t,alt:a,style:{maxWidth:"150px"}}))}}]),t}(n.Component),X=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.caption,a=e.value;return r.a.createElement("div",{className:"col-3 "},r.a.createElement("p",{className:"card-text"},t,":"),r.a.createElement("p",{className:"card-text"},a))}}]),t}(n.Component),ee=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.caption,a=e.onClick;return r.a.createElement("div",{className:"col-3 pt-3"},r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:a},t))}}]),t}(n.Component),te=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.onChange;return r.a.createElement("div",{className:"card border-secondary mb-3",key:t.id},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement(V,{imageSrc:t.image,name:t.name}),r.a.createElement("div",{className:"col-xs-6 col-sm-7 col-md-9 col-lg-9"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pt-3"},r.a.createElement(X,{caption:"Name",value:t.name}),r.a.createElement(X,{caption:"Issue Date",value:t.issueDate}),r.a.createElement(X,{caption:"Price",value:t.price})),r.a.createElement("div",{className:"row pt-3"},r.a.createElement(X,{caption:"Color",value:t.color}),r.a.createElement(J,{caption:"In Stock Only",value:t.inStock,onChange:function(e){a({id:t.id,inStock:e.currentTarget.checked})}}),r.a.createElement(ee,{caption:"Order",onClick:null})))))))}}]),t}(n.Component),ae=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(Q,this.props),r.a.createElement("div",{className:"container"},t&&t.map(function(t){return t.isFiltered?"":r.a.createElement(te,{item:t,key:t.id,onChange:e.props.setItems})})))}}]),t}(r.a.Component),ne=Object(O.b)(function(e){return{colors:e.productStore.colors,filter:e.productStore.filter,items:function(e){return H(e.productStore.items,e.productStore.filter)}(e),errorMsg:e.sessionStore.errorMsg}},function(e){return{setFilter:function(t){return e({type:A,payload:t})},setItems:function(t){return e(function(e){return{type:_,payload:e}}(t))}}})(ae),re=a(110),oe=Object(O.b)(function(e){return{isAuthorized:""!==e.sessionStore.user.email}})(function(e){var t=e.component,a=Object(re.a)(e,["component"]);return r.a.createElement(g.a,Object.assign({},a,{render:function(e){return a.isAuthorized?r.a.createElement(t,e):r.a.createElement(v.a,{to:{pathname:"/login",state:{from:"/search"}}})}}))}),ce=function(e){var t=e.logOut,a=e.user;return r.a.createElement("div",{className:"container"},a.email?r.a.createElement("div",null,r.a.createElement("p",null,"You are logged in, ",a.email)):r.a.createElement("div",null,r.a.createElement("p",null,"You should login first")),r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:t},"Logout page"))},ie=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.logOut,a=e.user;return r.a.createElement(ce,{logOut:t,user:a})}}]),t}(r.a.Component),se=Object(O.b)(function(e){return{user:e.sessionStore.user}},function(e){return{logOut:function(){return e({type:j})}}})(ie),le=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"NotFound page"),r.a.createElement("p",null,"under construction"))},ue=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Cart page"),r.a.createElement("p",null,"under construction"))},me=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement(v.a,{to:"/login"})}}),r.a.createElement(g.a,{path:"/login",component:I}),r.a.createElement(g.a,{path:"/signup",render:function(e){return r.a.createElement(I,Object.assign({},e,{isSignup:!0}))}}),r.a.createElement(oe,{path:"/search",component:ne}),r.a.createElement(oe,{path:"/cart",component:ue}),r.a.createElement(g.a,{path:"/logout",component:se}),r.a.createElement(g.a,{component:le}))}}]),t}(n.Component),pe=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(me,null)))}}]),t}(n.Component),de=a(108),he=(a(197),a(25)),fe={user:z.g,admin:z.a,errorMsg:z.d},be=Object(he.c)({sessionStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:case C:return Object(N.a)({},e,{user:{email:t.payload.email,password:t.payload.password},errorMsg:""});case j:return Object(N.a)({},e,{user:{email:"",password:""},errorMsg:""});case y:return Object(N.a)({},e,{errorMsg:t.payload});default:return e}},productStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(N.a)({},e,{items:e.items.map(function(e){return Object(N.a)({},e,{inStock:e.id===t.payload.id?t.payload.inStock:e.inStock})})});case P:return Object(N.a)({},e,{items:e.items.map(function(e,a){return Object(N.a)({},e,{inStock:t.payload[a].inStock})})});case A:return Object(N.a)({},e,{filter:Object(N.a)({},e.filter,t.payload)});default:return e}}}),ge=[de.a];var ve=Object(he.d)(be,he.a.apply(void 0,ge));c.a.render(r.a.createElement(O.a,{store:ve},r.a.createElement(pe,null)),document.getElementById("root"))},21:function(e){e.exports={a:{email:"ya@ya.ru",password:"92668751"},g:{email:"",password:""},d:"",c:["","Red","White","Black","Blue","Yellow","Green"],f:[{id:"1",name:"Trejo Priest",color:"black",issueDate:"10.22.2018",price:"4.99",rating:"4.00",inStock:"false",image:"./images/trejo_priest.jpg",isFiltered:"false"},{id:"2",name:"Trejo Bathrobe",color:"blue",issueDate:"11.03.2018",price:"9.95",rating:"2.00",inStock:"true",image:"./images/trejo_bathrobe.jpg",isFiltered:"false"},{id:"3",name:"Alien Tourists",color:"green",issueDate:"06.09.2018",price:"15.99",rating:"5.00",inStock:"true",image:"./images/alien_tourists.jpg",isFiltered:"false"}],e:{fromDate:null,toDate:null,inStockOnly:!1,priceFrom:null,proceTo:null,color:null},b:[]}}},[[111,2,1]]]);
//# sourceMappingURL=main.e402085d.chunk.js.map