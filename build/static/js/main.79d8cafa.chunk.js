(this.webpackJsonpecommerce_app_frontend=this.webpackJsonpecommerce_app_frontend||[]).push([[0],{41:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),r=c(33),i=c.n(r),o=(c(41),c(6)),l=c.n(o),j=c(12),d=c(3),u=c(34),b=c.n(u),h=c(4),x=c(5),O=Object(s.createContext)(null);var m=function(e){var t=e.rating,c=e.numReviews;return Object(a.jsxs)("div",{className:"x-rating",children:[Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:t>=1?"fa fa-star":t>=.5?"fa fa-star-half-o":"fa fa-start-o"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:t>=2?"fa fa-star":t>=1.5?"fa fa-star-half-o":"fa fa-start-o"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:t>=3?"fa fa-star":t>=2.5?"fa fa-star-half-o":"fa fa-start-o"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:t>=4?"fa fa-star":t>=3.5?"fa fa-star-half-o":"fa fa-start-o"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:t>=5?"fa fa-star":t>=4.5?"fa fa-star-half-o":"fa fa-start-o"})}),Object(a.jsx)("span",{children:"".concat(c," reviews")})]})};function p(e){var t=e.product;return Object(a.jsxs)("div",{className:"x-card",children:[Object(a.jsx)(h.b,{to:"/product/".concat(t._id),children:Object(a.jsx)("img",{className:"x-medium",src:t.image,alt:t.model})}),Object(a.jsxs)("div",{className:"x-card-body",children:[Object(a.jsx)(h.b,{to:"/product/".concat(t._id),children:Object(a.jsx)("h2",{className:"x-card-link",children:t.model})}),Object(a.jsx)(m,{rating:t.rating,numReviews:t.numReviews}),Object(a.jsxs)("div",{className:"x-price",children:["$",t.price]})]})]},t._id)}var f=function(){var e=Object(s.useContext)(O).racquetData,t=Object(d.a)(e,1)[0];return Object(a.jsx)("div",{className:"x-row x-center",children:t.map((function(e){return Object(a.jsx)(p,{product:e},e._id)}))})},g=c(17);var v=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{className:"fa fa-spinner fa-spin"})," Picking up the tennis balls... \ud83c\udfbe \ud83c\udfbe \ud83c\udfbe"]})},w="https://racquetdash.herokuapp.com";console.log("APP_ENV is ".concat("production",", so base_url is connecting to ").concat(w));var N=function(e){var t=e.routerProps,c=Object(s.useContext)(O),n=c.racquetData,r=c.customerLoggedIn,i=c.tokenData,o=Object(d.a)(n,1)[0],u=Object(d.a)(i,1)[0],b=Object(d.a)(r,2),x=b[0],p=b[1],f=Object(s.useState)(1),N=Object(d.a)(f,2),k=N[0],y=N[1],C=o.find((function(e){return e._id===t.match.params.id}));if(!C)return Object(a.jsx)(v,{});var S=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,a,s,n,r,i,o,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=x._id,a=x.username,s=x.password,n=x.product_cart,r=[].concat(Object(g.a)(n),[C]),i=JSON.stringify({_id:c,username:a,password:s,product_cart:r}),e.prev=4,e.next=7,fetch("".concat(w,"/api/customers/productcart/").concat(c),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:u},body:i});case 7:return o=e.sent,e.next=10,o.json();case 10:j=e.sent,p(j),window.localStorage.setItem("currentCustomerLoggedIn",j),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)(h.b,{className:"back-btn",to:"/",children:" Back To Index Page of Tennis Racquets "}),Object(a.jsxs)("div",{className:"x-row x-top",children:[Object(a.jsx)("div",{className:"x-col-2",children:Object(a.jsx)("img",{className:"x-large",src:C.image,alt:C.model})}),Object(a.jsx)("div",{className:"x-col-1",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("h1",{children:C.model})}),Object(a.jsx)("li",{children:Object(a.jsx)(m,{rating:C.rating,numReviews:C.numReviews})}),Object(a.jsxs)("li",{className:"x-price",children:[Object(a.jsx)("span",{children:"Price:"})," $",C.price]}),Object(a.jsx)("li",{children:Object(a.jsx)("h2",{children:"Description:"})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{className:"show-description",children:C.description})}),Object(a.jsx)("li",{children:Object(a.jsx)("h2",{children:"Racquet Model Specifications:"})}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"Head Size: "}),C.head_size," in",Object(a.jsx)("sup",{children:"2"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"Swing Weight: "}),C.swingweight," RDC (Racquet Diagostic Centre)"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"Racquet Weight: "}),C.weight," oz"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"Racquet Balance: "}),C.balance]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"String Pattern: "}),C.pattern]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"String Tension: "}),C.tension]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"Stiffness Human: "}),C.stiffness_human]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"Stiffness: "}),C.stiffness," RA"]})]})}),Object(a.jsx)("div",{className:"x-col-1",children:Object(a.jsx)("div",{className:"x-card x-card-body",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)("div",{className:"x-row",children:[Object(a.jsx)("div",{className:"action-text",children:"Price"}),Object(a.jsxs)("div",{className:"x-price",children:["$",C.price]})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("div",{className:"x-row",children:[Object(a.jsx)("div",{className:"action-text",children:"Status"}),Object(a.jsx)("div",{children:C.countInStock>0?Object(a.jsx)("span",{className:"x-success",children:"In Stock"}):Object(a.jsx)("span",{className:"x-error",children:"Unavailable"})})]})}),x.username?x&&C.countInStock>0?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsxs)("div",{className:"x-row",children:[Object(a.jsx)("div",{className:"action-text",children:"Quantity:"}),Object(a.jsx)("div",{children:Object(a.jsxs)("select",{value:k,onChange:function(e){return y(e.target.value)},children:[Object(a.jsx)("option",{value:1,children:"1"}),Object(a.jsx)("option",{value:2,children:"2"}),Object(a.jsx)("option",{value:3,children:"3"}),Object(a.jsx)("option",{value:4,children:"4"}),Object(a.jsx)("option",{value:5,children:"5"})]})})]})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{name:"id",value:C._id,className:"x-primary x-block",onClick:function(e){return S(e)},children:" Add To Cart"})})]}):Object(a.jsx)("li",{className:"error-text x-error",children:"Currently Out of Stock: Please Revisit Racquet Page Later"}):Object(a.jsx)("div",{className:"login-text",children:Object(a.jsx)(h.b,{to:"/login",children:"Please Login to Add to Cart"})})]})})})]})]})},k=c(70),y=c(68),C=c(69);var S=function(e){return Object(a.jsx)("div",{className:"x-alert x-alert-".concat(e.variant||"info"),children:e.children})},P="https://racquetdash.herokuapp.com";console.log("APP_ENV is ".concat("production",", so base_url is connecting to ").concat(P));var R=function(e){var t=e.currRacquetData,c=e.index,n=t._id,r=t.model,i=t.image,o=t.price,u=Object(s.useContext)(O),b=u.customerLoggedIn,x=u.tokenData,m=Object(d.a)(b,2),p=m[0],f=m[1],v=Object(d.a)(x,1)[0],w=function(){var e=Object(j.a)(l.a.mark((function e(t){var a,s,n,r,i,o,j,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p._id,s=p.username,n=p.password,r=p.product_cart,i=[].concat(Object(g.a)(r.slice(0,c)),Object(g.a)(r.slice([c+1]))),o=JSON.stringify({_id:a,username:s,password:n,product_cart:i}),e.prev=4,e.next=7,fetch("".concat(P,"/api/customers/productcart/").concat(a),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:v},body:o});case 7:return j=e.sent,e.next=10,j.json();case 10:d=e.sent,f(d),window.localStorage.setItem("currentCustomerLoggedIn",d),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(y.a,{className:"cart-rows justify-content-md-center",children:[Object(a.jsxs)(C.a,{className:"col-10 mx-auto col-lg-2",children:[Object(a.jsx)("h2",{children:"Brand"}),Object(a.jsx)("img",{className:"img-fluid",src:i,style:{width:"10rem"},alt:r})]}),Object(a.jsxs)(C.a,{className:"col-10 mx-auto col-lg-2",children:[Object(a.jsx)("h2",{children:"Model"}),Object(a.jsx)("div",{className:"cart-text",children:Object(a.jsx)(h.b,{to:"/product/".concat(n),children:r})})]}),Object(a.jsxs)(C.a,{className:"col-10 mx-auto col-lg-2",children:[Object(a.jsx)("h2",{children:"Price"}),Object(a.jsxs)("div",{className:"cart-text x-price",children:["$",o]})]}),Object(a.jsxs)(C.a,{className:"col-10 mx-auto col-lg-2",children:[Object(a.jsx)("h2",{children:"Remove"}),Object(a.jsx)("div",{className:"cart-text",children:Object(a.jsx)("button",{onClick:w,children:Object(a.jsx)("i",{className:"fas fa-trash-alt"})})})]})]})};var _=function(e){e.totalPrice;var t=e.setTotalPrice,c=0,n=Object(s.useContext)(O).customerLoggedIn,r=Object(d.a)(n,1)[0];return Object(a.jsx)(k.a,{fluid:!0,className:"text-center d-lg-block",children:r.product_cart.map((function(e,s){return c+=e.price,t(Math.round(100*c)/100),Object(a.jsx)(R,{currRacquetData:e,index:s},e._id)}))})};var T=function(){var e=Object(s.useContext)(O).customerLoggedIn,t=Object(d.a)(e,1)[0],c=Object(s.useState)(0),n=Object(d.a)(c,2),r=n[0],i=n[1];return Object(a.jsx)(a.Fragment,{children:0===t.product_cart.length?Object(a.jsxs)(S,{children:["Cart is Empty. ",Object(a.jsx)(h.b,{to:"/",children:"Please Add Items to your cart."})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h.b,{className:"back-btn",to:"/",children:" Back To Index Page of Tennis Racquets "}),Object(a.jsx)("h1",{className:"text-center",children:"Currently Selected Tennis Racquets in Your Cart"}),Object(a.jsx)(k.a,{children:Object(a.jsxs)(y.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsx)(_,{totalPrice:r,setTotalPrice:i})}),Object(a.jsx)(C.a,{lg:"2",className:"",children:Object(a.jsx)("div",{className:"x-card x-card-body",style:{width:"30rem"},children:Object(a.jsxs)("div",{className:"x-price",children:[Object(a.jsxs)("div",{className:"checkout-text",children:["Total Price: $",r]}),Object(a.jsx)("a",{href:"javascript:void( window.open( 'https://form.jotform.com/210008460872146', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) ",children:Object(a.jsx)("button",{className:"checkout-text",children:"Checkout!"})})]})})})]})})]})})},I=function(e){return Object(a.jsxs)("div",{id:"about-container",children:[Object(a.jsx)("h1",{className:"about-heading",children:'"You only live once, but you get to serve twice." -- Founder Mike Truong \ud83c\udfbe '}),Object(a.jsx)("h2",{className:"about-heading",children:"What Drives Us At Racquet Dash"}),Object(a.jsx)("hr",{}),Object(a.jsx)("p",{className:"about-para",children:" We are based in Boston, Massachusetts, and we've welcomed customers from all over the World since opening our first store in 1991. Today we have expanded to several locations including Cambridge, MA, Providence, RI, Seattle, WA, and San Francisco, CA. Our e-comerce website www.racquetdash.herokuapp.com has helped supply professional tennis equipment for tennis players from all over the World. "}),Object(a.jsx)("p",{className:"about-para",children:" Aside from our commercial activity, Racquet Dash has helped sponser many premier tennis league tournaments in the Greater Boston Area such as the Cambridge Open, Junior Crimson Bowl, and the All-Paul-Revere Tennis Tournament amongst others. Needless to say that we are commited to promoting the sport of Tennis and contributing to its growth worldwide. "}),Object(a.jsx)("p",{className:"about-para",children:" We take pride in the tennis equipment we sell and providing our world-class selection of brand-named tennis equipment for pro and amateur players alike, so thank you for choosing Racquet Dash! "}),Object(a.jsx)(h.b,{to:"/",className:"about-link",children:Object(a.jsx)("button",{className:"about-btn",children:" Ready To Up Your Tennis Game? "})})]})},q=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"x-contact-details",children:[Object(a.jsx)("h1",{children:"Contact Us"}),Object(a.jsx)("h2",{children:"By Mail:"}),Object(a.jsx)("p",{children:"25 Paul Revere, Rd."}),Object(a.jsx)("p",{children:"Boston, MA"}),Object(a.jsx)("h2",{children:"By Phone:"}),Object(a.jsx)("p",{children:"123-456-7890"}),Object(a.jsx)("h2",{children:"By Email:"}),Object(a.jsx)("p",{children:"To contact us by email, please fill out the contact form below..."})]}),Object(a.jsx)("div",{className:"x-contact-container",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{htmlFor:"fname",children:"First Name"}),Object(a.jsx)("input",{type:"text",placeholder:"Your first name.."}),Object(a.jsx)("label",{htmlFor:"lname",children:"Last Name"}),Object(a.jsx)("input",{type:"text",placeholder:"Your last name.."}),Object(a.jsx)("label",{htmlFor:"email-address",children:"Email Address"}),Object(a.jsx)("input",{type:"text",placeholder:"Your email address.."}),Object(a.jsx)("label",{htmlFor:"country",children:"Country"}),Object(a.jsxs)("select",{children:[Object(a.jsx)("option",{value:"australia",children:"Australia"}),Object(a.jsx)("option",{value:"canada",children:"Canada"}),Object(a.jsx)("option",{value:"china",children:"China"}),Object(a.jsx)("option",{value:"england",children:"England"}),Object(a.jsx)("option",{value:"france",children:"France"}),Object(a.jsx)("option",{value:"japan",children:"Japan"}),Object(a.jsx)("option",{value:"usa",children:"USA"})]}),Object(a.jsx)("label",{htmlFor:"subject",children:"Subject"}),Object(a.jsx)("textarea",{placeholder:"Please add any information here...",style:{height:"200px"}}),Object(a.jsx)("button",{onClick:function(e){return function(e){e.preventDefault()}(e)},children:"Contact Us"})]})})]})},D="https://racquetdash.herokuapp.com";console.log("APP_ENV is ".concat("production",", so base_url is connecting to ").concat(D));var F=function(e){var t=Object(s.useRef)(null),c=Object(s.useRef)(null),n=function(){var e=Object(j.a)(l.a.mark((function e(a){var s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),s=JSON.stringify({username:t.current.value,password:c.current.value}),a.currentTarget.reset(),e.prev=3,e.next=6,fetch("".concat(D,"/api/customers/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:s});case 6:return n=e.sent,e.next=9,n.json();case 9:e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:return e.prev=15,console.log("check MongoDB Atlas if new Customer username was created..."),window.location.href="/login",e.finish(15);case 19:case"end":return e.stop()}}),e,null,[[3,12,15,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"x-form-container",children:[Object(a.jsx)("h2",{children:"Register New Customer Form"}),Object(a.jsxs)("form",{onSubmit:n,children:[Object(a.jsxs)("label",{children:[" New Username:",Object(a.jsx)("input",{type:"text",ref:t,placeholder:"New username login"})]}),Object(a.jsxs)("label",{children:[" New Password:",Object(a.jsx)("input",{type:"password",ref:c,placeholder:"New password login"})]}),Object(a.jsx)("button",{type:"submit",children:"Submit!"})]})]})})},A="https://racquetdash.herokuapp.com";console.log("APP_ENV is ".concat("production",", so base_url is connecting to ").concat(A));var L=function(){var e=Object(s.useContext)(O),t=e.customerLoggedIn,c=e.tokenData,n=Object(d.a)(t,2),r=(n[0],n[1]),i=Object(d.a)(c,2),o=(i[0],i[1]),u=Object(s.useRef)(null),b=Object(s.useRef)(null),h=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=JSON.stringify({username:u.current.value,password:b.current.value}),t.currentTarget.reset(),e.prev=3,e.next=6,fetch("".concat(A,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:c});case 6:return a=e.sent,e.next=9,a.json();case 9:s=e.sent,window.localStorage.setItem("token","Bearer ".concat(s.token)),window.localStorage.setItem("currentCustomerLoggedIn",s.user),r(s.user),o("Bearer ".concat(s.token)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.error(e.t0);case 19:return e.prev=19,console.log("check window.localStorage to see if user-token appears inside chrome dev tools..."),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[3,16,19,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"x-form-container",children:[Object(a.jsx)("h2",{children:"Login Existing Customer Form"}),Object(a.jsxs)("form",{onSubmit:h,children:[Object(a.jsxs)("label",{children:[" Username:",Object(a.jsx)("input",{type:"text",ref:u,placeholder:"Username login"})]}),Object(a.jsxs)("label",{children:[" Password:",Object(a.jsx)("input",{type:"password",ref:b,placeholder:"Password login"})]}),Object(a.jsx)("button",{type:"submit",children:"Submit!"})]})]})})},B=(c(66),"https://racquetdash.herokuapp.com");console.log("NODE_ENV is ".concat("production",", so base_url is connecting to ").concat(B));var E=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)({}),i=Object(d.a)(r,2),o=i[0],u=i[1],m=Object(s.useState)(""),p=Object(d.a)(m,2),g=p[0],w=p[1],k=Object(s.useState)(!1),y=Object(d.a)(k,2),C=y[0],P=y[1],R=Object(s.useState)(!1),_=Object(d.a)(R,2),D=_[0],A=_[1],E=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,b.a.get("".concat(B,"/api/racquets"));case 4:t=e.sent,c=t.data,P(!1),n(c),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),A(e.t0.message),P(!1);case 15:return e.prev=15,console.log("check browser if racquets were displayed correctly... "),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,10,15,18]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){E(),window.localStorage.getItem("token")&&w(window.localStorage.getItem("token")),window.localStorage.getItem("currentCustomerLoggedIn")&&u(window.localStorage.getItem("currentCustomerLoggedIn"))}),[]),Object(a.jsx)(a.Fragment,{children:C?Object(a.jsx)(v,{}):D?Object(a.jsx)(S,{variant:"danger",children:D}):Object(a.jsx)(O.Provider,{value:{racquetData:[c,n],customerLoggedIn:[o,u],tokenData:[g,w]},children:Object(a.jsxs)("div",{className:"x-grid-container",children:[Object(a.jsxs)("nav",{className:"x-row",children:[Object(a.jsx)("div",{children:Object(a.jsx)(h.b,{className:"x-brand",to:"/",children:"Racquet Dash \ud83c\udfbe"})}),Object(a.jsx)("div",{children:o.username?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("span",{className:"customer-username",children:["Welcome Back ",o.username,"! ",Object(a.jsx)("i",{class:"fas fa-user"})]}),Object(a.jsxs)(h.b,{className:"x-nav-link",to:"/cart",children:["Go To My Cart ",Object(a.jsx)("i",{className:"fa fa-shopping-cart"})]}),Object(a.jsx)("button",{href:"/",onClick:function(e){window.localStorage.clear(),w(""),u({}),window.location.href="/"},children:" Log Out "})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(h.b,{className:"x-nav-link",to:"/about",children:["Our Mission ",Object(a.jsx)("i",{class:"fas fa-check"})]}),Object(a.jsxs)(h.b,{className:"x-nav-link",to:"/contact",children:["Get In Touch ",Object(a.jsx)("i",{class:"fas fa-address-book"})]}),Object(a.jsxs)(h.b,{className:"x-nav-link",to:"/register",children:["New Customer Registration ",Object(a.jsx)("i",{class:"fas fa-registered"})]}),Object(a.jsxs)(h.b,{className:"x-nav-link",to:"/login",children:["Customer Sign In ",Object(a.jsx)("i",{class:"fas fa-sign-in-alt"})]})]})})]}),Object(a.jsx)("main",{children:Object(a.jsxs)(x.c,{children:[Object(a.jsx)(x.a,{path:"/about",component:I}),Object(a.jsx)(x.a,{path:"/contact",component:q}),Object(a.jsx)(x.a,{path:"/register",component:F}),Object(a.jsx)(x.a,{path:"/login",component:L}),Object(a.jsx)(x.a,{path:"/cart",component:T}),Object(a.jsx)(x.a,{path:"/product/:id",render:function(e){return Object(a.jsx)(N,{routerProps:e})}}),Object(a.jsx)(x.a,{exact:!0,path:"/",component:f})]})}),Object(a.jsx)("footer",{className:"x-row x-center",children:Object(a.jsx)(h.b,{className:"",to:"/",children:"Racquet Dash Store App \ud83c\udfbe made by Mike Truong"})})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))},U=document.getElementById("root");i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(h.a,{children:Object(a.jsx)(E,{})})}),U),M()}},[[67,1,2]]]);
//# sourceMappingURL=main.79d8cafa.chunk.js.map