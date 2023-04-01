(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(73),s=c.n(r),i=(c(88),c(7)),o=c(16),l=c(6),d=c(77),j=c(117),u=c(119),b=c(116),O=c(75),m=c(8);function p(e,t,c){return new Promise((function(n,a){var r,s,i,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,s=r.transaction(e,"readwrite"),i=s.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":i.put(c),n(c);break;case"get":var l=i.getAll();l.onsuccess=function(){n(l.result)};break;case"delete":i.delete(c._id);break;default:console.log("No valid method")}s.oncomplete=function(){r.close()}}}))}var h=c(79),g=c(17),x="UPDATE_PRODUCTS",f="ADD_TO_CART",v="ADD_MULTIPLE_TO_CART",y="REMOVE_FROM_CART",N="UPDATE_CART_QUANTITY",w="TOGGLE_CART",_="UPDATE_CATEGORIES",k="UPDATE_CURRENT_CATEGORY",S=function(e,t){switch(t.type){case x:return Object(i.a)(Object(i.a)({},e),{},{products:Object(g.a)(t.products)});case f:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(g.a)(e.cart),[t.product])});case v:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(g.a)(e.cart),Object(g.a)(t.products))});case N:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case y:var c=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:c.length>0,cart:c});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case w:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});case _:return Object(i.a)(Object(i.a)({},e),{},{categories:Object(g.a)(t.categories)});case k:return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var C=c(0),E=["value"],I=Object(n.createContext)(),T=I.Provider,A=function(e){e.value;var t,c=Object(h.a)(e,E),a=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(S,t)),r=Object(m.a)(a,2),s=r[0],o=r[1];return Object(C.jsx)(T,Object(i.a)({value:[s,o]},c))},P=function(){return Object(n.useContext)(I)};c(90);var D,R,$,F,Q,U,q=function(e){var t=P(),c=Object(m.a)(t,2),n=c[0],a=(c[1],e.image),r=e.name,s=e._id,i=e.price;return e.quantity,n.cart,Object(C.jsx)("div",{className:"card",children:Object(C.jsxs)(o.b,{to:"/menuDetail/".concat(s),children:[Object(C.jsx)("div",{className:"img-container",children:Object(C.jsx)("img",{alt:r,src:"/images/".concat(a)})}),Object(C.jsxs)("div",{className:"product-info",children:[Object(C.jsx)("p",{className:"product-name",children:r}),Object(C.jsxs)("p",{className:"product-price",children:["$",i]})]})]})})},W=c(80),L=c(29),B=c(118),H=Object(B.a)(D||(D=Object(L.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),Y=Object(B.a)(R||(R=Object(L.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),M=(Object(B.a)($||($=Object(L.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(B.a)(F||(F=Object(L.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),G=Object(B.a)(Q||(Q=Object(L.a)(["\n  {\n    user {\n      firstName\n      lastName\n      employee\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),K=(Object(B.a)(U||(U=Object(L.a)(["\nquery {\n  users {\n    email\n    firstName\n    lastName\n    employee\n  }\n}\n"]))),c.p+"static/media/spinner.7e729fec.gif");var V=function(){var e=P(),t=Object(m.a)(e,2),c=t[0],a=t[1],r=c.currentCategory,s=Object(W.b)(H),i=s.loading,o=s.data;return console.log(o),Object(n.useEffect)((function(){o?(a({type:x,products:o.products}),o.products.forEach((function(e){p("products","put",e)}))):i||p("products","get").then((function(e){a({type:x,products:e})}))}),[o,i,a]),Object(C.jsxs)("div",{className:"my-2",children:[Object(C.jsx)("h2",{children:"Our Products:"}),c.products.length?Object(C.jsx)("div",{className:"flex-row",children:(r?c.products.filter((function(e){return e.category._id===r})):c.products).map((function(e){return Object(C.jsx)(q,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(C.jsx)("h3",{children:"You haven't added any products yet!"}),i?Object(C.jsx)("img",{src:K,alt:"loading"}):null]})};c(91);var z=function(){var e=P(),t=Object(m.a)(e,2),c=t[0],a=t[1],r=c.categories,s=Object(W.b)(M),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(a({type:_,categories:o.categories}),o.categories.forEach((function(e){p("categories","put",e)}))):i||p("categories","get").then((function(e){a({type:_,categories:e})}))}),[o,i,a]),Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{className:"category-menu",children:"Our Menu"}),Object(C.jsx)("div",{className:"whole-category",children:r.map((function(e){return Object(C.jsx)("button",{onClick:function(){var t;t=e._id,a({type:k,currentCategory:t})},className:"category-btn",children:e.name},e._id)}))})]})},J=c(9),Z=c(13),X=c(74),ee=c(112),te=function(e){var t=e.item,c=P(),n=Object(m.a)(c,2)[1];return Object(C.jsxs)("div",{className:"flex-row",children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(C.jsxs)("div",{className:"cart-item",children:[Object(C.jsxs)("div",{children:[t.name," $",t.price]}),Object(C.jsxs)("div",{className:"quantity-remove",children:[Object(C.jsxs)("div",{className:"quantity",children:[Object(C.jsx)("span",{children:"Qty:"}),Object(C.jsx)("input",{type:"number",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(n({type:y,_id:t._id}),p("cart","delete",Object(i.a)({},t))):(n({type:N,_id:t._id,purchaseQuantity:parseInt(c)}),p("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(c)})))}})]}),Object(C.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:y,_id:e._id}),p("cart","delete",Object(i.a)({},e))}(t)},className:"remove",children:"Remove"})]})]})]})},ce=c(26),ne=c(25),ae=c(63),re=c.n(ae),se=new(function(){function e(){Object(ce.a)(this,e)}return Object(ne.a)(e,[{key:"getProfile",value:function(){return re()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return re()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e);var t=localStorage.getItem("tableId"),c=localStorage.getItem("employee");console.log(c),"true"==c?(console.log("Employee!!"),window.location.assign("/admin")):null===t||void 0===t||""===t?(console.log("No TABLE!!"),window.location.assign("/")):window.location.assign("/tableOrder")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),localStorage.removeItem("tableId"),localStorage.removeItem("employee"),window.location.assign("/")}}]),e}());c(94);c(95).config();var ie=Object(X.a)(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STRIPE_KEY),oe=function(){var e=P(),t=Object(m.a)(e,2),c=t[0],a=t[1],r=Object(ee.a)(Y),s=Object(m.a)(r,2),i=s[0],o=s[1].data;function l(){a({type:w})}return Object(n.useEffect)((function(){o&&ie.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(n.useEffect)((function(){function e(){return(e=Object(Z.a)(Object(J.a)().mark((function e(){var t;return Object(J.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:t=e.sent,a({type:v,products:Object(g.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.cart.length||function(){e.apply(this,arguments)}()}),[c.cart.length,a]),c.cartOpen?Object(C.jsxs)("div",{className:"cart",children:[Object(C.jsx)("div",{className:"close",onClick:l,children:"x"}),Object(C.jsx)("h2",{children:"Shopping Cart"}),c.cart.length?Object(C.jsxs)("div",{children:[c.cart.map((function(e){return Object(C.jsx)(te,{item:e},e._id)})),Object(C.jsx)("div",{className:"total",children:Object(C.jsxs)("strong",{children:["Total: $",function(){var e=0;return c.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]})}),se.loggedIn()?Object(C.jsx)("button",{onClick:function(){var e=[];c.cart.forEach((function(t){for(var c=0;c<t.purchaseQuantity;c++)e.push(t._id)})),i({variables:{products:e}})},className:"checkout-btn",children:"Checkout"}):Object(C.jsx)("span",{children:"(log in to check out)"})]}):Object(C.jsxs)("h7",{children:[Object(C.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your plate yet!"]})]}):Object(C.jsx)("div",{className:"cart-closed",onClick:l,children:Object(C.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83c\udf7d\ufe0f"})})},le=function(){return Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)(z,{}),Object(C.jsx)(V,{})]})};c(71);var de=function(){var e=P(),t=Object(m.a)(e,2),c=t[0],a=t[1],r=Object(l.o)().id,s=Object(n.useState)({}),d=Object(m.a)(s,2),j=d[0],u=d[1],b=Object(W.b)(H),O=b.loading,h=b.data,g=c.products,v=c.cart;return Object(n.useEffect)((function(){g.length?u(g.find((function(e){return e._id===r}))):h?(a({type:x,products:h.products}),h.products.forEach((function(e){p("products","put",e)}))):O||p("products","get").then((function(e){a({type:x,products:e})}))}),[g,h,O,a,r]),Object(C.jsxs)(C.Fragment,{children:[j&&v?Object(C.jsxs)("div",{className:"container my-1",children:[Object(C.jsx)(o.b,{to:"/tableOrder",className:"links-to-go",children:"\u2190 Back to Products"}),Object(C.jsxs)("div",{className:"detail-container",children:[Object(C.jsx)("div",{className:"image-container",children:Object(C.jsx)("img",{className:"product-image",src:"/images/".concat(j.image),alt:j.name})}),Object(C.jsxs)("div",{className:"actions",children:[Object(C.jsx)("h2",{className:"product-name",children:j.name}),Object(C.jsxs)("p",{className:"product-price",children:[Object(C.jsx)("strong",{children:"Price:"}),"$",j.price]}),Object(C.jsx)("p",{className:"product-description",children:j.description}),Object(C.jsx)("button",{className:"add-to-cart-btn",onClick:function(){var e=v.find((function(e){return e._id===r}));e?(a({type:N,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),p("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:f,product:Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})}),p("cart","put",Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(C.jsx)("button",{className:"remove-from-cart-btn",disabled:!v.find((function(e){return e._id===j._id})),onClick:function(){a({type:y,_id:j._id}),p("cart","delete",Object(i.a)({},j))},children:"Remove from Cart"})]})]})]}):null,O?Object(C.jsx)("img",{src:K,alt:"loading"}):null,Object(C.jsx)(oe,{})]})};c(100);var je,ue,be,Oe=function(e){var t=e.children;return Object(C.jsx)("div",{style:{height:260,clear:"both",textAlign:"center"},children:t})},me=function(){return Object(C.jsx)("div",{children:Object(C.jsxs)(Oe,{children:[Object(C.jsx)("h1",{children:"404 Page Not Found"}),Object(C.jsx)("h1",{children:Object(C.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},pe=c(15),he=c(113),ge=Object(B.a)(je||(je=Object(L.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        employee\n      }\n    }\n  }\n"]))),xe=Object(B.a)(ue||(ue=Object(L.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),fe=Object(B.a)(be||(be=Object(L.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ve=(c(72),localStorage.getItem("tableId"));var ye=function(e){console.log("tableId is already set = "+ve);var t=Object(l.o)().tablesId;t>0&&(ve=t,localStorage.setItem("tableId",ve)),null!==ve&&void 0!==ve&&""!==ve||(ve=""),console.log("tempTableId="+t),console.log(ve);var c=Object(n.useState)({email:"",password:""}),a=Object(m.a)(c,2),r=a[0],s=a[1],d=Object(he.a)(ge),j=Object(m.a)(d,2),u=j[0],b=j[1].error,O=function(){var e=Object(Z.a)(Object(J.a)().mark((function e(t){var c,n;return Object(J.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u({variables:{email:r.email,password:r.password}});case 4:c=e.sent,n=c.data.login.token,console.log(c.data.login.user.employee),localStorage.setItem("employee",c.data.login.user.employee),se.login(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,c=t.name,n=t.value;s(Object(i.a)(Object(i.a)({},r),{},Object(pe.a)({},c,n)))};return Object(C.jsxs)("div",{className:"container my-1",children:[Object(C.jsx)(o.b,{to:"/signup",className:"links-to-go",children:"\u2190 Go to Signup"}),Object(C.jsxs)("div",{className:"signup",children:[Object(C.jsx)("h2",{children:"Welcome Back!"}),b?Object(C.jsx)("div",{children:Object(C.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null]}),Object(C.jsxs)("form",{onSubmit:O,children:[Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(C.jsx)("input",{name:"email",type:"email",id:"email",onChange:p})]}),Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(C.jsx)("input",{name:"password",type:"password",id:"pwd",onChange:p})]}),Object(C.jsx)("div",{className:"flex-row flex-end",children:Object(C.jsx)("button",{type:"submit",className:"submit",children:"Submit"})})]})]})};var Ne=function(e){var t=Object(n.useState)({email:"",password:""}),c=Object(m.a)(t,2),a=c[0],r=c[1],s=Object(he.a)(fe),l=Object(m.a)(s,1)[0],d=function(){var e=Object(Z.a)(Object(J.a)().mark((function e(t){var c,n;return Object(J.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:c=e.sent,n=c.data.addUser.token,se.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,c=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(pe.a)({},c,n)))};return Object(C.jsxs)("div",{className:"container my-1",children:[Object(C.jsx)(o.b,{to:"/login",className:"links-to-go",children:"\u2190 Go to Login"}),Object(C.jsx)("div",{children:Object(C.jsx)("h2",{className:"signup",children:"Hello, Friend!"})}),Object(C.jsxs)("form",{onSubmit:d,children:[Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(C.jsx)("input",{name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(C.jsx)("input",{name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(C.jsx)("input",{name:"email",type:"email",id:"email",onChange:j})]}),Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(C.jsx)("input",{name:"password",type:"password",id:"pwd",onChange:j})]}),Object(C.jsx)("div",{className:"flex-row flex-end",children:Object(C.jsx)("button",{type:"submit",className:"submit",children:"Submit"})})]})]})};c(101);var we=function(){return Object(C.jsxs)("header",{className:"nav-header flex-row",children:[Object(C.jsxs)("div",{className:"logo-container",children:[Object(C.jsx)("div",{className:"logo-circle"}),Object(C.jsx)("h1",{children:Object(C.jsx)(o.b,{to:"/tableOrder",children:"JACE"})})]}),Object(C.jsx)("nav",{children:se.loggedIn()?Object(C.jsxs)("ul",{className:"nav-links flex-row",children:[Object(C.jsx)("li",{className:"mx-1",children:Object(C.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object(C.jsx)("li",{className:"mx-1",children:Object(C.jsx)("a",{href:"/",onClick:function(){return se.logout()},children:"Logout"})}),Object(C.jsx)("li",{className:"mx-1",children:Object(C.jsx)(o.b,{to:"/contact",children:"Contact"})})]}):Object(C.jsxs)("ul",{className:"nav-links flex-row",children:[Object(C.jsx)("li",{className:"mx-1",children:Object(C.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(C.jsx)("li",{className:"mx-1",children:Object(C.jsx)(o.b,{to:"/login",children:"Login"})}),Object(C.jsx)("li",{className:"mx-1",children:Object(C.jsx)(o.b,{to:"/contact",children:"Contact"})})]})})]})};c(102);var _e=function(){var e=localStorage.getItem("tableId");return e=null===e||void 0===e||""===e?"":"Table "+e,se.loggedIn()||(e=""),Object(C.jsx)("footer",{className:"footer",children:Object(C.jsxs)("div",{className:"footer-content",children:[Object(C.jsx)("h2",{children:e}),Object(C.jsxs)("p",{children:["Want to learn more? ",Object(C.jsx)(o.b,{to:"/contact",children:"Contact Us Here!"})]})]})})},ke=c(78);c(103);var Se=function(){var e=e,t=t,c=c,a=function(e){return new Promise((function(t){return setTimeout(t,e)}))},r=Object(n.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],l=Object(n.useRef)(),d=function(e){e.preventDefault(),o(""),console.log(e.target.value)},j=function(t){var c;(t.preventDefault(),console.log(e),c=t.target.value,console.log(c),void 0!==c&&null!==c&&void 0!==c&&""!==c)?console.log(t.target.value):o("Please enter a valid input!")},u=function(){l.current.reset()};return Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{className:"contact-us",children:"Contact Us"}),Object(C.jsxs)("div",{className:"contact",children:[Object(C.jsx)("div",{className:"contact-left-container",children:Object(C.jsx)("img",{className:"map",src:"/images/map.png",alt:"map"})}),Object(C.jsxs)("div",{className:"contact-right-container",children:[Object(C.jsx)("p",{children:"Phone: 123-456-7890"}),Object(C.jsxs)("p",{children:["Email: ",Object(C.jsx)("a",{href:"mailto:jace1971@yahoo.com",children:"jace1971@yahoo.com"})]}),Object(C.jsx)("p",{children:"Address: 130 St George St, Toronto"}),Object(C.jsxs)("form",{className:"contact-form",ref:l,onSubmit:function(n){return n.preventDefault(),e?/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())?c?void ke.a.sendForm("service_93p5os3","template_x3tk4je",l.current,"5vCxrVoi6nK138Vam").then(function(){var e=Object(Z.a)(Object(J.a)().mark((function e(t){return Object(J.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.text),console.log(l),o("Message sent, We will get back to you shortly!"),e.next=5,a(2e3);case 5:return u(),e.abrupt("return",o(""));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log(e.text)})):(o("Message is missing, please provide a message!"),n.target.reset()):(o("Email is invalid"),n.target.reset()):(o("Name is missing, please provide your name!"),n.target.reset())},children:[Object(C.jsx)("label",{className:"label",children:"Name"}),Object(C.jsx)("input",{type:"text",name:"user_name",className:"input",onChange:function(t){return t.preventDefault(),e=t.target.value},onFocus:d,onBlur:j}),Object(C.jsx)("label",{children:"Email"}),Object(C.jsx)("input",{type:"email",name:"user_email",className:"input",onChange:function(e){return e.preventDefault(),t=e.target.value},onFocus:d,onBlur:j}),Object(C.jsx)("label",{children:"Message"}),Object(C.jsx)("textarea",{placeholder:"Enter message",name:"message",className:"input message-box",onChange:function(e){return e.preventDefault(),c=e.target.value},onFocus:d,onBlur:j}),Object(C.jsx)("input",{className:"submit",type:"submit",value:"Send"})]}),i&&Object(C.jsx)("div",{children:Object(C.jsx)("p",{className:"error-message",children:i})})]})]})]})};var Ce=function(){var e=Object(he.a)(xe),t=Object(m.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(Z.a)(Object(J.a)().mark((function e(){var c,n,a,r;return Object(J.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:if(c=e.sent,!(n=c.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){p("cart","delete",e)}));case 11:setTimeout((function(){console.log("Order placed! You will now be redirected to the home page."),localStorage.setItem("tableId",""),console.log(localStorage.getItem("tableId")),window.location.assign("/")}),4e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(C.jsx)("div",{className:"success-children",children:Object(C.jsxs)(Oe,{children:[Object(C.jsx)("h2",{children:"\ud83d\udcb8\ud83d\udc4d"}),Object(C.jsx)("h2",{children:"Your server will bring your order when ready!"}),Object(C.jsx)("h4",{children:"You will now be redirected to the home page"})]})})};c(104);var Ee=function(){var e,t=Object(W.b)(G).data;return t&&(e=t.user),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"container my-1",children:[Object(C.jsx)(o.b,{to:"/",className:"links-to-go",children:"\u2190 Back to Products"}),e?Object(C.jsxs)("div",{className:"space-between my-2 order-history",children:[Object(C.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(C.jsxs)("div",{className:"my-2",children:[Object(C.jsx)("h5",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(C.jsx)("div",{className:"history",children:e.products.map((function(e,t){var c=e._id,n=e.image,a=e.name,r=e.price;return Object(C.jsxs)("div",{className:"card px-1 py-1",children:[Object(C.jsxs)(o.b,{to:"/products/".concat(c),children:[Object(C.jsx)("img",{alt:a,src:"/images/".concat(n)}),Object(C.jsx)("p",{children:a})]}),Object(C.jsx)("div",{children:Object(C.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})};c(105);var Ie=function(e){var t=P(),c=Object(m.a)(t,2),n=c[0],a=c[1],r=e.image,s=e.name,l=e._id,d=e.price,j=(e.quantity,n.cart);return Object(C.jsxs)("div",{className:"card",children:[Object(C.jsxs)(o.b,{to:"/products/".concat(l),children:[Object(C.jsx)("div",{className:"img-container",children:Object(C.jsx)("img",{alt:s,src:"/images/".concat(r)})}),Object(C.jsxs)("div",{className:"product-info",children:[Object(C.jsx)("p",{className:"product-name",children:s}),Object(C.jsxs)("p",{className:"product-price",children:["$",d]})]})]}),Object(C.jsx)("button",{onClick:function(){var t=j.find((function(e){return e._id===l}));t?(a({type:N,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),p("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:f,product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),p("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))},className:"add-to-cart-btn",children:"Add to cart"})]})};var Te=function(){var e=P(),t=Object(m.a)(e,2),c=t[0],a=t[1],r=c.currentCategory,s=Object(W.b)(H),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(a({type:x,products:o.products}),o.products.forEach((function(e){p("products","put",e)}))):i||p("products","get").then((function(e){a({type:x,products:e})}))}),[o,i,a]),Object(C.jsxs)("div",{className:"my-2",children:[Object(C.jsx)("h2",{children:"Our Products:"}),c.products.length?Object(C.jsx)("div",{className:"flex-row",children:(r?c.products.filter((function(e){return e.category._id===r})):c.products).map((function(e){return Object(C.jsx)(Ie,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(C.jsx)("h3",{children:"You haven't added any products yet!"}),i?Object(C.jsx)("img",{src:K,alt:"loading"}):null]})},Ae=function(){var e=localStorage.getItem("tableId");return void 0!==e&&null!==e&&""!==e||window.location.assign("/"),se.loggedIn()||window.location.assign("/"),Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)(z,{}),Object(C.jsx)(Te,{}),Object(C.jsx)(oe,{})]})};var Pe=function(){var e=P(),t=Object(m.a)(e,2),c=t[0],a=t[1],r=Object(l.o)().id,s=Object(n.useState)({}),i=Object(m.a)(s,2),d=i[0],j=i[1],u=Object(W.b)(H),b=u.loading,O=u.data,h=c.products,g=c.cart;return Object(n.useEffect)((function(){h.length?j(h.find((function(e){return e._id===r}))):O?(a({type:x,products:O.products}),O.products.forEach((function(e){p("products","put",e)}))):b||p("products","get").then((function(e){a({type:x,products:e})}))}),[h,O,b,a,r]),Object(C.jsxs)(C.Fragment,{children:[d&&g?Object(C.jsxs)("div",{className:"container my-1",children:[Object(C.jsx)(o.b,{to:"/",className:"links-to-go",children:"\u2190 Back to Products "}),Object(C.jsxs)("div",{className:"detail-container",children:[Object(C.jsx)("div",{className:"image-container",children:Object(C.jsx)("img",{className:"product-image",src:"/images/".concat(d.image),alt:d.name})}),Object(C.jsxs)("div",{className:"actions",children:[Object(C.jsx)("h2",{className:"product-name",children:d.name}),Object(C.jsxs)("p",{className:"product-price",children:[Object(C.jsx)("strong",{children:"Price:"}),"$",d.price]}),Object(C.jsx)("p",{className:"product-description",children:d.description})]})]})]}):null,b?Object(C.jsx)("img",{src:K,alt:"loading"}):null]})},De=Object(d.a)({uri:"/graphql"}),Re=Object(O.a)((function(e,t){var c=t.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},c),{},{authorization:n?"Bearer ".concat(n):""})}})),$e=new j.a({link:Re.concat(De),cache:new u.a});var Fe=function(){return Object(C.jsx)(b.a,{client:$e,children:Object(C.jsx)(o.a,{children:Object(C.jsx)("div",{children:Object(C.jsxs)(A,{children:[Object(C.jsx)(we,{}),Object(C.jsxs)(l.c,{children:[Object(C.jsx)(l.a,{path:"/",element:Object(C.jsx)(le,{})}),Object(C.jsx)(l.a,{path:"/login",element:Object(C.jsx)(ye,{})}),Object(C.jsx)(l.a,{path:"/signup",element:Object(C.jsx)(Ne,{})}),Object(C.jsx)(l.a,{path:"/success",element:Object(C.jsx)(Ce,{})}),Object(C.jsx)(l.a,{path:"/orderHistory",element:Object(C.jsx)(Ee,{})}),Object(C.jsx)(l.a,{path:"/products/:id",element:Object(C.jsx)(de,{})}),Object(C.jsx)(l.a,{path:"/menuDetail/:id",element:Object(C.jsx)(Pe,{})}),Object(C.jsx)(l.a,{path:"/contact",element:Object(C.jsx)(Se,{})}),Object(C.jsx)(l.a,{path:"/tables/:tablesId",element:Object(C.jsx)(ye,{})}),Object(C.jsx)(l.a,{path:"/tableOrder",element:Object(C.jsx)(Ae,{})}),Object(C.jsx)(l.a,{path:"*",element:Object(C.jsx)(me,{})})]}),Object(C.jsx)(_e,{})]})})})})},Qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(Fe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","./serviceWorker.js");Qe?(!function(e,t){fetch(e,{headers:{ServiceWorker:"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ue(t,e)}))}}()},71:function(e,t,c){},72:function(e,t,c){},88:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},94:function(e,t,c){}},[[106,1,2]]]);
//# sourceMappingURL=main.60b265f6.chunk.js.map