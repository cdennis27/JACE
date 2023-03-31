(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(72),s=c.n(r),i=(c(87),c(7)),o=c(16),l=c(6),d=c(76),j=c(113),u=c(115),b=c(112),O=c(74),p=c(8);function h(e,t,c){return new Promise((function(n,a){var r,s,i,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,s=r.transaction(e,"readwrite"),i=s.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":i.put(c),n(c);break;case"get":var l=i.getAll();l.onsuccess=function(){n(l.result)};break;case"delete":i.delete(c._id);break;default:console.log("No valid method")}s.oncomplete=function(){r.close()}}}))}var m=c(78),x=c(17),f="UPDATE_PRODUCTS",g="ADD_TO_CART",v="ADD_MULTIPLE_TO_CART",y="REMOVE_FROM_CART",N="UPDATE_CART_QUANTITY",w="TOGGLE_CART",_="UPDATE_CATEGORIES",k="UPDATE_CURRENT_CATEGORY",C=function(e,t){switch(t.type){case f:return Object(i.a)(Object(i.a)({},e),{},{products:Object(x.a)(t.products)});case g:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(x.a)(e.cart),[t.product])});case v:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(x.a)(e.cart),Object(x.a)(t.products))});case N:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case y:var c=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:c.length>0,cart:c});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case w:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});case _:return Object(i.a)(Object(i.a)({},e),{},{categories:Object(x.a)(t.categories)});case k:return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var S=c(0),E=["value"],T=Object(n.createContext)(),I=T.Provider,A=function(e){e.value;var t,c=Object(m.a)(e,E),a=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(C,t)),r=Object(p.a)(a,2),s=r[0],o=r[1];return Object(S.jsx)(I,Object(i.a)({value:[s,o]},c))},P=function(){return Object(n.useContext)(T)};c(89);var D,R,$,F,Q,L=function(e){var t=P(),c=Object(p.a)(t,2),n=c[0],a=(c[1],e.image),r=e.name,s=e._id,i=e.price;return e.quantity,n.cart,Object(S.jsx)("div",{className:"card",children:Object(S.jsxs)(o.b,{to:"/menuDetail/".concat(s),children:[Object(S.jsx)("div",{className:"img-container",children:Object(S.jsx)("img",{alt:r,src:"/images/".concat(a)})}),Object(S.jsxs)("div",{className:"product-info",children:[Object(S.jsx)("p",{className:"product-name",children:r}),Object(S.jsxs)("p",{className:"product-price",children:["$",i]})]})]})})},U=c(79),W=c(30),q=c(114),B=Object(q.a)(D||(D=Object(W.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),H=Object(q.a)(R||(R=Object(W.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),Y=(Object(q.a)($||($=Object(W.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(q.a)(F||(F=Object(W.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),M=Object(q.a)(Q||(Q=Object(W.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),G=c.p+"static/media/spinner.7e729fec.gif";var J=function(){var e=P(),t=Object(p.a)(e,2),c=t[0],a=t[1],r=c.currentCategory,s=Object(U.b)(B),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(a({type:f,products:o.products}),o.products.forEach((function(e){h("products","put",e)}))):i||h("products","get").then((function(e){a({type:f,products:e})}))}),[o,i,a]),Object(S.jsxs)("div",{className:"my-2",children:[Object(S.jsx)("h2",{children:"Our Products:"}),c.products.length?Object(S.jsx)("div",{className:"flex-row",children:(r?c.products.filter((function(e){return e.category._id===r})):c.products).map((function(e){return Object(S.jsx)(L,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(S.jsx)("h3",{children:"You haven't added any products yet!"}),i?Object(S.jsx)("img",{src:G,alt:"loading"}):null]})};var K=function(){var e=P(),t=Object(p.a)(e,2),c=t[0],a=t[1],r=c.categories,s=Object(U.b)(Y),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(a({type:_,categories:o.categories}),o.categories.forEach((function(e){h("categories","put",e)}))):i||h("categories","get").then((function(e){a({type:_,categories:e})}))}),[o,i,a]),Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"Choose a Category:"}),r.map((function(e){return Object(S.jsx)("button",{onClick:function(){var t;t=e._id,a({type:k,currentCategory:t})},children:e.name},e._id)}))]})},V=c(9),z=c(13),Z=c(73),X=c(108),ee=function(e){var t=e.item,c=P(),n=Object(p.a)(c,2)[1];return Object(S.jsxs)("div",{className:"flex-row",children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[t.name,", $",t.price]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{children:"Qty:"}),Object(S.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(n({type:y,_id:t._id}),h("cart","delete",Object(i.a)({},t))):(n({type:N,_id:t._id,purchaseQuantity:parseInt(c)}),h("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(c)})))}}),Object(S.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:y,_id:e._id}),h("cart","delete",Object(i.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},te=c(26),ce=c(25),ne=c(63),ae=c.n(ne),re=new(function(){function e(){Object(te.a)(this,e)}return Object(ce.a)(e,[{key:"getProfile",value:function(){return ae()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ae()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e);var t=localStorage.getItem("tableId");null===t||void 0===t||""===t?(console.log("No TABLE!!!!!!!!"),window.location.assign("/")):window.location.assign("/tableOrder")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),localStorage.removeItem("tableId"),window.location.assign("/")}}]),e}());c(92);c(93).config();var se=Object(Z.a)(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STRIPE_KEY),ie=function(){var e=P(),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(X.a)(H),s=Object(p.a)(r,2),i=s[0],o=s[1].data;function l(){a({type:w})}return Object(n.useEffect)((function(){o&&se.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(n.useEffect)((function(){function e(){return(e=Object(z.a)(Object(V.a)().mark((function e(){var t;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("cart","get");case 2:t=e.sent,a({type:v,products:Object(x.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.cart.length||function(){e.apply(this,arguments)}()}),[c.cart.length,a]),c.cartOpen?Object(S.jsxs)("div",{className:"cart",children:[Object(S.jsx)("div",{className:"close",onClick:l,children:"[close]"}),Object(S.jsx)("h2",{children:"Shopping Cart"}),c.cart.length?Object(S.jsxs)("div",{children:[c.cart.map((function(e){return Object(S.jsx)(ee,{item:e},e._id)})),Object(S.jsxs)("div",{className:"flex-row space-between",children:[Object(S.jsxs)("strong",{children:["Total: $",function(){var e=0;return c.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),re.loggedIn()?Object(S.jsx)("button",{onClick:function(){var e=[];c.cart.forEach((function(t){for(var c=0;c<t.purchaseQuantity;c++)e.push(t._id)})),i({variables:{products:e}})},children:"Checkout"}):Object(S.jsx)("span",{children:"(log in to check out)"})]})]}):Object(S.jsxs)("h3",{children:[Object(S.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(S.jsx)("div",{className:"cart-closed",onClick:l,children:Object(S.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},oe=function(){return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(K,{}),Object(S.jsx)(J,{})]})};c(71);var le=function(){var e=P(),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(l.o)().id,s=Object(n.useState)({}),d=Object(p.a)(s,2),j=d[0],u=d[1],b=Object(U.b)(B),O=b.loading,m=b.data,x=c.products,v=c.cart;return Object(n.useEffect)((function(){x.length?u(x.find((function(e){return e._id===r}))):m?(a({type:f,products:m.products}),m.products.forEach((function(e){h("products","put",e)}))):O||h("products","get").then((function(e){a({type:f,products:e})}))}),[x,m,O,a,r]),Object(S.jsxs)(S.Fragment,{children:[j&&v?Object(S.jsxs)("div",{className:"detail-container",children:[Object(S.jsx)(o.b,{to:"/tableOrder",children:Object(S.jsx)("button",{className:"back-to-products-btn",children:"\u2190 Back to Products"})}),Object(S.jsx)("h2",{className:"product-name",children:j.name}),Object(S.jsx)("p",{className:"product-description",children:j.description}),Object(S.jsx)("div",{className:"image-container",children:Object(S.jsx)("img",{className:"product-image",src:"/images/".concat(j.image),alt:j.name})}),Object(S.jsxs)("div",{className:"actions",children:[Object(S.jsxs)("p",{className:"product-price",children:[Object(S.jsx)("strong",{children:"Price:"}),"$",j.price]}),Object(S.jsx)("button",{className:"add-to-cart-btn",onClick:function(){var e=v.find((function(e){return e._id===r}));e?(a({type:N,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),h("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:g,product:Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})}),h("cart","put",Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(S.jsx)("button",{className:"remove-from-cart-btn",disabled:!v.find((function(e){return e._id===j._id})),onClick:function(){a({type:y,_id:j._id}),h("cart","delete",Object(i.a)({},j))},children:"Remove from Cart"})]})]}):null,O?Object(S.jsx)("img",{src:G,alt:"loading"}):null,Object(S.jsx)(ie,{})]})};var de,je,ue,be=function(e){var t=e.children;return Object(S.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},Oe=function(){return Object(S.jsx)("div",{children:Object(S.jsxs)(be,{children:[Object(S.jsx)("h1",{children:"404 Page Not Found"}),Object(S.jsx)("h1",{children:Object(S.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},pe=c(15),he=c(109),me=Object(q.a)(de||(de=Object(W.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),xe=Object(q.a)(je||(je=Object(W.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),fe=Object(q.a)(ue||(ue=Object(W.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ge=localStorage.getItem("tableId");var ve=function(e){console.log("tableId is already set = "+ge);var t=Object(l.o)().tablesId;t>0&&(ge=t,localStorage.setItem("tableId",ge)),null!==ge&&void 0!==ge&&""!==ge||(ge=""),console.log("tempTableId="+t),console.log(ge);var c=Object(n.useState)({email:"",password:""}),a=Object(p.a)(c,2),r=a[0],s=a[1],d=Object(he.a)(me),j=Object(p.a)(d,2),u=j[0],b=j[1].error,O=function(){var e=Object(z.a)(Object(V.a)().mark((function e(t){var c,n;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u({variables:{email:r.email,password:r.password}});case 4:c=e.sent,n=c.data.login.token,re.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.target,c=t.name,n=t.value;s(Object(i.a)(Object(i.a)({},r),{},Object(pe.a)({},c,n)))};return Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(S.jsx)("h2",{children:"Login"}),Object(S.jsxs)("form",{onSubmit:O,children:[Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(S.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:h})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(S.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:h})]}),Object(S.jsx)("div",{className:"flex-row flex-end",children:Object(S.jsx)("h3",{children:"Thank you for coming!"})}),b?Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(S.jsx)("div",{className:"flex-row flex-end",children:Object(S.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ye=function(e){var t=Object(n.useState)({email:"",password:""}),c=Object(p.a)(t,2),a=c[0],r=c[1],s=Object(he.a)(fe),l=Object(p.a)(s,1)[0],d=function(){var e=Object(z.a)(Object(V.a)().mark((function e(t){var c,n;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:c=e.sent,n=c.data.addUser.token,re.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,c=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(pe.a)({},c,n)))};return Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(S.jsx)("h2",{children:"Signup"}),Object(S.jsxs)("form",{onSubmit:d,children:[Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(S.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(S.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(S.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(S.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(S.jsx)("div",{className:"flex-row flex-end",children:Object(S.jsx)("button",{type:"submit",children:"Submit"})})]})]})};c(98);var Ne=function(){return Object(S.jsxs)("header",{className:"nav-header flex-row",children:[Object(S.jsxs)("div",{className:"logo-container",children:[Object(S.jsx)("div",{className:"logo-circle"}),Object(S.jsx)("h1",{children:Object(S.jsx)(o.b,{to:"/tableOrder",children:"JACE"})})]}),Object(S.jsx)("nav",{children:re.loggedIn()?Object(S.jsxs)("ul",{className:"nav-links flex-row",children:[Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)("a",{href:"/",onClick:function(){return re.logout()},children:"Logout"})}),Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)(o.b,{to:"/contact",children:"Contact"})})]}):Object(S.jsxs)("ul",{className:"nav-links flex-row",children:[Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)(o.b,{to:"/login",children:"Login"})}),Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)(o.b,{to:"/contact",children:"Contact"})})]})})]})};c(99);var we=function(){var e=localStorage.getItem("tableId");return e=null===e||void 0===e||""===e?"":"Table "+e,re.loggedIn()||(e=""),Object(S.jsx)("footer",{className:"footer",children:Object(S.jsxs)("div",{className:"footer-content",children:[Object(S.jsx)("h2",{children:e}),Object(S.jsx)("h2",{children:"JACE"}),Object(S.jsxs)("p",{children:["Want to learn more? ",Object(S.jsx)(o.b,{to:"/contact",children:"Contact Us Here!"})]})]})})},_e=c(77);c(100);var ke=function(){var e=e,t=t,c=c,a=function(e){return new Promise((function(t){return setTimeout(t,e)}))},r=Object(n.useState)(""),s=Object(p.a)(r,2),i=s[0],o=s[1],l=Object(n.useRef)(),d=function(e){e.preventDefault(),o(""),console.log(e.target.value)},j=function(t){var c;(t.preventDefault(),console.log(e),c=t.target.value,console.log(c),void 0!==c&&null!==c&&void 0!==c&&""!==c)?console.log(t.target.value):o("Please enter a valid input!")},u=function(){l.current.reset()};return Object(S.jsxs)("section",{className:"contact",children:[Object(S.jsx)("a",{className:"contact-left-container",children:Object(S.jsx)("img",{className:"map",src:"/images/map.png",alt:"map"})}),Object(S.jsxs)("div",{className:"contact-right-container",children:[Object(S.jsx)("h1",{children:"JACE"}),Object(S.jsx)("p",{children:"Feel free to contact me with any questions or comments you may have. I will get back to you as soon as possible."}),Object(S.jsx)("p",{children:"Phone: 123-456-7890"}),Object(S.jsxs)("p",{children:["Email: ",Object(S.jsx)("a",{href:"mailto:jace1971@yahoo.com",children:"jace1971@yahoo.com"})]}),Object(S.jsx)("p",{children:"Address: 100 Queen St W, Toronto"}),Object(S.jsx)("h1",{children:"Contact form"}),Object(S.jsxs)("form",{className:"contact-form",ref:l,onSubmit:function(n){return n.preventDefault(),e?/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())?c?void _e.a.sendForm("service_93p5os3","template_x3tk4je",l.current,"5vCxrVoi6nK138Vam").then(function(){var e=Object(z.a)(Object(V.a)().mark((function e(t){return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.text),console.log(l),o("Message sent, We will get back to you shortly!"),e.next=5,a(5e3);case 5:return u(),e.abrupt("return",o(""));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log(e.text)})):(o("Message is missing, please provide a message!"),n.target.reset()):(o("Email is invalid"),n.target.reset()):(o("Name is missing, please provide your name!"),n.target.reset())},children:[Object(S.jsx)("label",{className:"label",children:"Name"}),Object(S.jsx)("input",{placeholder:"Name",type:"text",name:"user_name",className:"input",onChange:function(t){return t.preventDefault(),e=t.target.value},onFocus:d,onBlur:j}),Object(S.jsx)("label",{children:"Email"}),Object(S.jsx)("input",{placeholder:"Email",type:"email",name:"user_email",className:"input",onChange:function(e){return e.preventDefault(),t=e.target.value},onFocus:d,onBlur:j}),Object(S.jsx)("label",{children:"Message"}),Object(S.jsx)("textarea",{placeholder:"Place your message here.",name:"message",className:"input message-box",onChange:function(e){return e.preventDefault(),c=e.target.value},onFocus:d,onBlur:j}),Object(S.jsx)("input",{className:"submit",type:"submit",value:"Send"})]}),i&&Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:"error-message",children:i})})]})]})};var Ce=function(){var e=Object(he.a)(xe),t=Object(p.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(z.a)(Object(V.a)().mark((function e(){var c,n,a,r;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("cart","get");case 2:if(c=e.sent,!(n=c.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){h("cart","delete",e)}));case 11:setTimeout((function(){console.log("Order placed! You will now be redirected to the home page."),localStorage.setItem("tableId",""),console.log(localStorage.getItem("tableId")),window.location.assign("/")}),7e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(S.jsx)("div",{children:Object(S.jsxs)(be,{children:[Object(S.jsx)("h1",{children:"Success!"}),Object(S.jsx)("h2",{children:"Thank you for your purchase!"}),Object(S.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var Se=function(){var e,t=Object(U.b)(M).data;return t&&(e=t.user),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(S.jsxs)("div",{className:"my-2",children:[Object(S.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(S.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var c=e._id,n=e.image,a=e.name,r=e.price;return Object(S.jsxs)("div",{className:"card px-1 py-1",children:[Object(S.jsxs)(o.b,{to:"/products/".concat(c),children:[Object(S.jsx)("img",{alt:a,src:"/images/".concat(n)}),Object(S.jsx)("p",{children:a})]}),Object(S.jsx)("div",{children:Object(S.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})};c(101);var Ee=function(e){var t=P(),c=Object(p.a)(t,2),n=c[0],a=c[1],r=e.image,s=e.name,l=e._id,d=e.price,j=(e.quantity,n.cart);return Object(S.jsxs)("div",{className:"card",children:[Object(S.jsxs)(o.b,{to:"/products/".concat(l),children:[Object(S.jsx)("div",{className:"img-container",children:Object(S.jsx)("img",{alt:s,src:"/images/".concat(r)})}),Object(S.jsxs)("div",{className:"product-info",children:[Object(S.jsx)("p",{className:"product-name",children:s}),Object(S.jsxs)("p",{className:"product-price",children:["$",d]})]})]}),Object(S.jsx)("button",{onClick:function(){var t=j.find((function(e){return e._id===l}));t?(a({type:N,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),h("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:g,product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),h("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))},className:"add-to-cart-btn",children:"Add to cart"})]})};var Te=function(){var e=P(),t=Object(p.a)(e,2),c=t[0],a=t[1],r=c.currentCategory,s=Object(U.b)(B),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(a({type:f,products:o.products}),o.products.forEach((function(e){h("products","put",e)}))):i||h("products","get").then((function(e){a({type:f,products:e})}))}),[o,i,a]),Object(S.jsxs)("div",{className:"my-2",children:[Object(S.jsx)("h2",{children:"Our Products:"}),c.products.length?Object(S.jsx)("div",{className:"flex-row",children:(r?c.products.filter((function(e){return e.category._id===r})):c.products).map((function(e){return Object(S.jsx)(Ee,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(S.jsx)("h3",{children:"You haven't added any products yet!"}),i?Object(S.jsx)("img",{src:G,alt:"loading"}):null]})},Ie=function(){var e=localStorage.getItem("tableId");return void 0!==e&&null!==e&&""!==e||window.location.assign("/"),re.loggedIn()||window.location.assign("/"),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(K,{}),Object(S.jsx)(Te,{}),Object(S.jsx)(ie,{})]})};var Ae=function(){var e=P(),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(l.o)().id,s=Object(n.useState)({}),i=Object(p.a)(s,2),d=i[0],j=i[1],u=Object(U.b)(B),b=u.loading,O=u.data,m=c.products,x=c.cart;return Object(n.useEffect)((function(){m.length?j(m.find((function(e){return e._id===r}))):O?(a({type:f,products:O.products}),O.products.forEach((function(e){h("products","put",e)}))):b||h("products","get").then((function(e){a({type:f,products:e})}))}),[m,O,b,a,r]),Object(S.jsxs)(S.Fragment,{children:[d&&x?Object(S.jsxs)("div",{className:"detail-container",children:[Object(S.jsx)(o.b,{to:"/",children:Object(S.jsx)("button",{className:"back-to-products-btn",children:"\u2190 Back to Products"})}),Object(S.jsx)("h2",{className:"product-name",children:d.name}),Object(S.jsx)("p",{className:"product-description",children:d.description}),Object(S.jsx)("div",{className:"image-container",children:Object(S.jsx)("img",{className:"product-image",src:"/images/".concat(d.image),alt:d.name})}),Object(S.jsx)("div",{className:"actions",children:Object(S.jsxs)("p",{className:"product-price",children:[Object(S.jsx)("strong",{children:"Price:"}),"$",d.price]})})]}):null,b?Object(S.jsx)("img",{src:G,alt:"loading"}):null]})},Pe=Object(d.a)({uri:"/graphql"}),De=Object(O.a)((function(e,t){var c=t.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},c),{},{authorization:n?"Bearer ".concat(n):""})}})),Re=new j.a({link:De.concat(Pe),cache:new u.a});var $e=function(){return Object(S.jsx)(b.a,{client:Re,children:Object(S.jsx)(o.a,{children:Object(S.jsx)("div",{children:Object(S.jsxs)(A,{children:[Object(S.jsx)(Ne,{}),Object(S.jsxs)(l.c,{children:[Object(S.jsx)(l.a,{path:"/",element:Object(S.jsx)(oe,{})}),Object(S.jsx)(l.a,{path:"/login",element:Object(S.jsx)(ve,{})}),Object(S.jsx)(l.a,{path:"/signup",element:Object(S.jsx)(ye,{})}),Object(S.jsx)(l.a,{path:"/success",element:Object(S.jsx)(Ce,{})}),Object(S.jsx)(l.a,{path:"/orderHistory",element:Object(S.jsx)(Se,{})}),Object(S.jsx)(l.a,{path:"/products/:id",element:Object(S.jsx)(le,{})}),Object(S.jsx)(l.a,{path:"/menuDetail/:id",element:Object(S.jsx)(Ae,{})}),Object(S.jsx)(l.a,{path:"/contact",element:Object(S.jsx)(ke,{})}),Object(S.jsx)(l.a,{path:"/tables/:tablesId",element:Object(S.jsx)(ve,{})}),Object(S.jsx)(l.a,{path:"/tableOrder",element:Object(S.jsx)(Ie,{})}),Object(S.jsx)(l.a,{path:"*",element:Object(S.jsx)(Oe,{})})]}),Object(S.jsx)(we,{})]})})})})},Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Qe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)($e,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Qe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Qe(t,e)}))}}()},71:function(e,t,c){},87:function(e,t,c){},89:function(e,t,c){},92:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.83b65725.chunk.js.map