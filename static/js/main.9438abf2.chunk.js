(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__GtaC5",BreadTop:"BurgerIngredient_BreadTop__2G6_c",Seeds1:"BurgerIngredient_Seeds1__2tRy7",Seeds2:"BurgerIngredient_Seeds2__2uyKO",Meat:"BurgerIngredient_Meat__1xXaf",Cheese:"BurgerIngredient_Cheese__1OD8L",Salad:"BurgerIngredient_Salad__1fppi",Bacon:"BurgerIngredient_Bacon__2nsHm"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__1bjcA",Open:"SideDrawer_Open__2i927",Close:"SideDrawer_Close__3Emct",Logo:"SideDrawer_Logo__3vDQ1"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__3RJ5T",Label:"BuildControl_Label__3nlr-",Count:"BuildControl_Count__3McJ3",Less:"BuildControl_Less__glBXi",More:"BuildControl_More__o0Jx-"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__1fpL0",Logo:"Toolbar_Logo__3-td3",DesktopOnly:"Toolbar_DesktopOnly__1OHeG"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__OTqGs",active:"NavigationItem_active__1qvht"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__2wh4l",OrderButton:"BuildControls_OrderButton__14epf",enable:"BuildControls_enable__9iiL3"}},function(e,t,a){e.exports={Button:"Button_Button__9s0Pb",Success:"Button_Success__1P2Uf",Danger:"Button_Danger__1CsFH"}},,,,,,,,,,,function(e,t,a){e.exports={Content:"Layout_Content__3YVjP"}},function(e,t,a){e.exports={Logo:"Logo_Logo__1NhK6"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__2M_8i"}},function(e,t,a){e.exports={SideDrawerToggle:"SideDrawerToggle_SideDrawerToggle__2PSBc"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__16tT1"}},function(e,t,a){e.exports={Burger:"Burger_Burger__Lf7vT"}},,function(e,t,a){e.exports={Modal:"Modal_Modal__2F9NP"}},function(e,t,a){e.exports={Loader:"spinner_Loader__2DTZv",load3:"spinner_load3__TfAX-"}},,,function(e,t,a){e.exports=a(61)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),i=(a(41),a(2)),c=a(3),s=a(5),u=a(4),d=function(e){return e.children},m=a(24),p=a.n(m),h=a(9),g=a.n(h),_=a(25),f=a.n(_),b=a(26),v=a.n(b),E=function(){return r.a.createElement("div",{className:f.a.Logo},r.a.createElement("img",{src:v.a,alt:"My Burger"}))},y=a(27),C=a.n(y),S=a(11),w=a.n(S),B=function(e){return r.a.createElement("li",{className:w.a.NavigationItem},r.a.createElement("a",{className:e.active?w.a.active:null,href:e.link},e.children))},k=function(e){return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(B,{link:"/",active:!0},"Burger Builder"),r.a.createElement(B,null,"Checkout"))},O=a(28),D=a.n(O),N=function(e){return r.a.createElement("div",{className:D.a.SideDrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},I=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(N,{clicked:e.showSideDrawer}),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(k,null)))},j=a(7),P=a.n(j),L=a(29),T=a.n(L),x=function(e){return e.show?r.a.createElement("div",{className:T.a.Backdrop,onClick:e.clicked}):null},M=function(e){var t=[P.a.SideDrawer,P.a.Close];return e.show&&(t=[P.a.SideDrawer,P.a.Open]),r.a.createElement(d,null,r.a.createElement(x,{show:e.show,clicked:e.clicked}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:P.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",null,r.a.createElement(k,null))))},R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDrawer:!1},e.BackdropCancelled=function(){e.setState({showDrawer:!1})},e.toggleSideDrawer=function(){e.setState((function(e){return{showDrawer:!e.showDrawer}}))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(I,{showSideDrawer:this.toggleSideDrawer}),r.a.createElement(M,{show:this.state.showDrawer,clicked:this.BackdropCancelled}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),a}(r.a.Component),A=a(10),U=a(35),q=a(30),H=a.n(q),J=a(31),W=a.n(J),F=a(6),G=a.n(F),Y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:G.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:G.a.BreadTop},r.a.createElement("div",{className:G.a.Seeds1}),r.a.createElement("div",{className:G.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:G.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:G.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:G.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:G.a.Bacon});break;default:e=null}return e}}]),a}(r.a.Component);Y.PropType={type:W.a.string.isRequired};var X=Y,z=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(U.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(X,{key:t+a,type:t})}))}));return 0===(t=t.reduce((function(e,t){return e.concat(t)}),[])).length&&(t=r.a.createElement("p",null,"Please start adding Ingredients!")),r.a.createElement("div",{className:H.a.Burger},r.a.createElement(X,{type:"bread-top"}),t,r.a.createElement(X,{type:"bread-bottom"}))},K=a(12),V=a.n(K),Q=a(8),Z=a.n(Q),$=function(e){return r.a.createElement("div",{className:Z.a.BuildControl},r.a.createElement("div",{className:Z.a.Label},e.label),r.a.createElement("button",{className:Z.a.Less,onClick:e.Remove,disabled:e.DisabledInfo},"Less"),r.a.createElement("div",{className:Z.a.Count},e.Count),r.a.createElement("button",{className:Z.a.More,onClick:e.Add},"More"))},ee=[{label:"Salad",type:"salad"},{label:"Meat",type:"meat"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"}],te=function(e){return r.a.createElement("div",{className:V.a.BuildControls},r.a.createElement("p",null,"TOTAL PRICE : \u20b9 ",r.a.createElement("strong",null,e.Price.toFixed(2))),ee.map((function(t){return r.a.createElement($,{key:t.label,label:t.label,Count:e.Count[t.type],Add:function(){e.AddIngr(t.type)},Remove:function(){e.RemoveIngr(t.type)},DisabledInfo:e.DisabledInfo[t.type]})})),r.a.createElement("button",{className:V.a.OrderButton,disabled:!e.Purchasable,onClick:e.DispSummary},"ORDER NOW"))},ae=a(32),ne=a.n(ae),re=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"shouldComponentUpdate",value:function(e){return this.props.show!==e.show||this.props.children!==e.children}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(x,{show:this.props.show,clicked:this.props.clicked}),r.a.createElement("div",{className:ne.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-300%)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),a}(n.Component),oe=a(13),le=a.n(oe),ie=function(e){return r.a.createElement("button",{className:[le.a.Button,le.a[e.btntype]].join(" "),onClick:e.clicked},e.children)},ce=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{transform:"capitalize"}},t),": ",e.ingredients[t])}));return r.a.createElement(d,null,r.a.createElement("h3",null,"Your Order Summary"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price : \u20b9 ",e.totalPrice.toFixed(2))),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement(ie,{btntype:"Danger",clicked:e.purchaseCancelled},"Cancel"),r.a.createElement(ie,{btntype:"Success",clicked:e.purchaseContinue},"Confirm"))},se=a(33),ue=a.n(se),de=function(){return r.a.createElement("div",{className:ue.a.Loader},"Loading...")},me=function(e,t){return function(a){Object(s.a)(o,a);var n=Object(u.a)(o);function o(){var e;Object(i.a)(this,o);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={error:null},e.showHandler=function(){e.setState({error:null})},e}return Object(c.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t}),(function(t){e.setState({error:t})})),this.resInterceptor=t.interceptors.response.use((function(e){return"post"===e.config.method&&200===e.status&&alert("ORDER RECIEVED"),e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(re,{show:this.state.error,clicked:this.showHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(n.Component)},pe=a(34),he=a.n(pe).a.create({baseURL:"https://burger-builder-db-131c5.firebaseio.com/"}),ge=null,_e=me(function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,totalPrice:0,purchasable:!1,dispSummary:!1,showSpinner:!1,error:!1},e.componentDidMount=function(){he.get("loadData.json").then((function(t){ge=t.data.CURR_PRICE,e.setState({ingredients:t.data.ingredients});var a=100;for(var n in t.data.ingredients)a+=t.data.ingredients[n]*ge[n];e.setState({totalPrice:a})})).catch((function(){e.setState({error:!0})}))},e.DisplaySummary=function(){e.setState({dispSummary:!0})},e.purchaseCancelled=function(){e.setState({dispSummary:!1})},e.purchaseContinue=function(){e.setState({showSpinner:!0});var t={totalPrice:e.state.totalPrice,ingredients:e.state.ingredients,date:new Date,customer:{name:"abc",address:{street:"xyz rd",pin:"1234",country:"india"},email:"123abc@123.com"},deliveryMethod:"fast"};he.post("orders-ghub.json",t).then((function(t){e.setState({showSpinner:!1,dispSummary:!1}),console.log("resp:",t)})).catch((function(){e.setState({showSpinner:!1})}))},e.UpdatePurchasable=function(t){var a=Object.keys(t).map((function(e){return t[e]})).reduce((function(e,t){return e+t}),0);e.setState({purchasable:a>0})},e.AddIngredient=function(t){var a=e.state.ingredients[t]+1,n=Object(A.a)({},e.state.ingredients);n[t]=a;var r=e.state.totalPrice+ge[t];e.setState({ingredients:n,totalPrice:r}),e.UpdatePurchasable(n)},e.RemoveIngredient=function(t){if(!(e.state.ingredients[t]<=0)){var a=e.state.ingredients[t]-1,n=Object(A.a)({},e.state.ingredients);n[t]=a;var r=e.state.totalPrice-ge[t];e.setState({ingredients:n,totalPrice:r}),e.UpdatePurchasable(n)}},e}return Object(c.a)(a,[{key:"render",value:function(){var e=Object(A.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=this.state.error?r.a.createElement("h1",null,"ingredients can't be loaded."):r.a.createElement(de,null),n=null;return this.state.ingredients&&(n=this.state.showSpinner?r.a.createElement(de,null):r.a.createElement(ce,{ingredients:this.state.ingredients,purchaseContinue:this.purchaseContinue,purchaseCancelled:this.purchaseCancelled,totalPrice:this.state.totalPrice}),a=r.a.createElement(d,null,r.a.createElement(re,{show:this.state.dispSummary,clicked:this.purchaseCancelled},n),r.a.createElement(z,{ingredients:this.state.ingredients}),r.a.createElement(te,{AddIngr:this.AddIngredient,RemoveIngr:this.RemoveIngredient,DisabledInfo:e,Price:this.state.totalPrice,Count:this.state.ingredients,Purchasable:this.state.purchasable,DispSummary:this.DisplaySummary}))),r.a.createElement(d,null,a)}}]),a}(r.a.Component),he);var fe=function(){return r.a.createElement(R,null,r.a.createElement(_e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[36,1,2]]]);
//# sourceMappingURL=main.9438abf2.chunk.js.map