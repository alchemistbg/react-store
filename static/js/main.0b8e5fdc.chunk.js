(this["webpackJsonpreact-store-javascript"]=this["webpackJsonpreact-store-javascript"]||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('{"products":[{"id":1,"manufacturer":"New Balance","name":"Liverpool 6 Times","sizes":["XS","S","M","L","XL","XXL"],"description":"Remember that magnificent night in Madrid with this Junior New Balance Liverpool 6 Times Football Shirt which is a replica of the jersey worn at the Wanda Metropolitano Stadium, however the top features six stars and the years The Reds have triumphed on Europe\'s biggest stage. The shirt also benefits from being engineered with NBdry technology which wicks sweat away from your skin to keep you feeling fresh and comfortable and the New Balance branding adds the finishing touch. ","images":["37861608_l-1.jpg","37861608_l-2.jpg"],"price":529,"timesSold":10},{"id":2,"manufacturer":"Adidas","name":"Manchester United Home Shirt 2019/2020","sizes":["XS","S","M","L","XL","XXL"],"description":"Cheer on The Red Devils in style with the adidas Manchester United Home Shirt for the 2019/2020 campaign which features the iconic crest in gold which stands out against the black background so you can highlight your admiration for the Old Trafford club. The shirt benefits from being constructed with Climalite technology which wicks moisture away from your skin to keep you feeling fresh from the first whistle to the last and the iconic adidas branding completes the on-pitch look.","images":["37724808_l-1.jpg","37724808_l-2.jpg"],"price":629,"timesSold":19},{"id":3,"manufacturer":"Nike","name":"Barcelona Home Vapor Shirt 2019/2020","sizes":["XS","S","M","L","XL","XXL"],"description":"This Nike Barcelona Home Vapor Shirt 2019 2020 has been been developed with Vaporknit technology which wicks sweat away from your skin and dries extremely fast which allows you to reach the top of your game with ease. The shirt introduces a new check design for the 19/20 season which has taken inspiration for the iconic grid layout of the city, whilst the team crest and Nike Swoosh branding completes the Nou Camp look. ","images":["37714721_l-1.jpg","37714721_l-2.jpg"],"price":429,"timesSold":51},{"id":4,"manufacturer":"Adidas","name":"Real Madrid Home Shirt 2019/2020","sizes":["XS","S","M","L","XL","XXL"],"description":"Show your support for Los Blancos with pride with this adidas Real Madrid Home Shirt 2019 2020 which benefits from being developed with Climalite technology which wicks sweat away from your skin to keep you feeling fresh and comfortable, whilst the iconic white shirt with gold detailing delivers a classically stylish look perfect for any fan of the Spanish capital club.","images":["37721501_l-1.jpg","37721501_l-2.jpg"],"price":579,"timesSold":42},{"id":5,"manufacturer":"Adidas","name":"Bayern Munich Home Shirt 2019/2020","sizes":["XS","S","M","L","XL","XXL"],"description":"Support the Bavarian giants in style for the season ahead with this adidas Bayern Munich Home Shirt 2019 2020 which benefits from being crafted with Climalite technology which sweeps moisture away from your skin to maximise comfort throughout the entire game. The shirt features the iconic team crest of The FCB so all those around you know that your heart belongs in Munich and the adidas branding completes the on-pitch look. ","images":["37720708_l-1.jpg","37720708_l-2.jpg"],"price":479,"timesSold":99},{"id":6,"manufacturer":"Puma","name":"Borussia Dortmund Home Shirt 2019/2020","sizes":["XS","S","M","L","XL","XXL"],"description":"Cheer on The BVB in style with this Puma Borussia Dortmund Home Shirt 2019 2020 which benefits from being developed with dryCELL technology which wicks sweat away from your skin and dry\'s quickly to maximises comfort all-game long. The shirt features a stylish print on the sleeves to assist the team crest and Puma branding to deliver a fashionable look for the season ahead. ","images":["37713513_l-1.jpg","37713513_l-2.jpg","37713513_l-3.jpg","37713513_l-4.jpg"],"price":599,"timesSold":39}]}')},,,,,,,,,,function(e,t,a){e.exports=a(46)},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(22);var r=a(0),c=a.n(r),n=a(18),i=a.n(n),s=a(11),o=(a(27),a(5)),l=a(1),m=a(3),u=(a(28),a(10)),d=a.n(u),p={closeButton:!0,newestOnTop:!1,timeOut:1e3,progressBar:!0},h="/react-store-javascript/";function f(e,t){d.a.remove(),"success"!==e?"simpleError"!==e?Object.keys(t).forEach((function(a){t[a].length>0&&d.a[e](t[a].join("\n"),"Invalid ".concat(a),p)})):d.a.error(t.message,t.title,p):d.a[e](t.message,t.title,p)}var E=function(){return c.a.createElement("div",{className:"site-logo"},c.a.createElement("img",{className:"logo-img",src:"".concat(h,"static/images/logo.png"),alt:""}),c.a.createElement("div",{className:"logo-wrapper"},c.a.createElement("h2",{className:"logo-text"},"Compass Shop"),c.a.createElement("h6",{className:"logo-subtext"},"for DEDICATED fans")))},g=c.a.createContext(),b=g.Provider,y=(g.Consumer,g);var v=function(){var e=Object(r.useContext)(y),t=Object(m.a)(e,1)[0].cart;return c.a.createElement("nav",{className:"nav nav-header"},c.a.createElement("ul",{className:"nav-list"},c.a.createElement("li",{className:"nav-item cart"},c.a.createElement(o.b,{to:"".concat(h,"cart")},c.a.createElement("i",{className:"fas fa-shopping-cart",htmlFor:"cart-cb"},c.a.createElement("span",{className:"cart-size"},t.reduce((function(e,t){return e+t.productQty}),0)))))))};var N=function(){var e=Object(r.useContext)(y),t=Object(m.a)(e,2),a=(t[0].cart,t[1]);return c.a.createElement("header",null,c.a.createElement("div",{className:"site-header",onLoad:function(){null!==JSON.parse(localStorage.getItem("cartData"))&&a({type:"LOAD_CART_FROM_STORAGE",item:JSON.parse(localStorage.getItem("cartData"))})}},c.a.createElement(o.b,{to:"/react-store-javascript"},c.a.createElement(E,null)),c.a.createElement(v,null)))};a(36);var S=function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"site-footer"},"Footer"))};a(37),a(38);a(39);var w=function(e){var t=e.image,a=e.imageClass;return c.a.createElement("span",{className:a},c.a.createElement("img",{src:"/react-store-javascript/static/images/"+t,alt:"",onError:function(e){e.target.src="/react-store-javascript/static/images/error.png"}}))};var C=function(e){var t=e.product;return c.a.createElement(o.b,{className:"product-card",to:"/react-store-javascript/products/".concat(t.id)},c.a.createElement("span",{className:"card-inner"},c.a.createElement("div",{className:"details"},"Details"),c.a.createElement(w,{image:t.images[0],imageClass:"card-media"}),c.a.createElement("span",{className:"card-meta"},c.a.createElement("p",{className:"manufacturer"},t.manufacturer),c.a.createElement("h6",null,t.name)),c.a.createElement("span",{className:"card-footer"},c.a.createElement("h6",{className:"price"},t.price," DKK"))))},O=c.a.createContext(),T=O.Provider,j=(O.Consumer,O);var k=function(e){document.title="Compass Store";var t=e.products,a=Object(r.useContext)(j),n=Object(m.a)(a,2),i=n[0].sort,s=n[1],o=Object(r.useState)(i.criteria),l=Object(m.a)(o,2),u=l[0],d=l[1],p=Object(r.useState)(i.direction),h=Object(m.a)(p,2),f=h[0],E=h[1],g=function(){t.sort((function(e,t){return"desc"===f?t[u]-e[u]:e[u]-t[u]}))};return g(),c.a.createElement("div",{className:"product-list-container",onLoad:function(){null!==localStorage.getItem("sortData")&&s({type:"LOAD_SORT_FROM_STORAGE",data:localStorage.getItem("sortData")}),d(i.criteria),E(i.direction)}},c.a.createElement("h1",{className:"list-title"},"Our Products"),c.a.createElement("div",{className:"sort-wrapper"},c.a.createElement("label",{className:"sort-label",htmlFor:"sort-options"},"Sort by:"),c.a.createElement("select",{value:u+"-"+f,className:"sort-options",id:"sort-options",onChange:function(e){var t=e.target.value.split("-"),a=Object(m.a)(t,2),r=a[0],c=a[1];d(r),E(c),s({type:"SORT",criteria:r,direction:c}),g()}},c.a.createElement("option",{value:"timesSold-desc"},"by Popularity (Desc)"),c.a.createElement("option",{value:"timesSold-asc"},"by Popularity (Asc)"),c.a.createElement("option",{value:"price-desc"},"by Price (Desc)"),c.a.createElement("option",{value:"price-asc"},"by Price (Asc)")),c.a.createElement("div",{htmlFor:"sort-options",className:"arrow"},c.a.createElement("i",{className:"fas fa-sort-down"}))),c.a.createElement("div",{className:"product-list"},t.map((function(e){return c.a.createElement(C,{key:e.id,product:e})}))))};a(40);var D=function(e){var t=e.images,a=e.handleThumbImageClick;return c.a.createElement("span",{className:"image-thumbs"},t.map((function(e,t){return c.a.createElement("label",{key:e,className:"image-label"},0===t?c.a.createElement("input",{className:"image-radio",type:"radio",name:"image-radio",id:e,defaultChecked:!0}):c.a.createElement("input",{className:"image-radio",type:"radio",name:"image-radio",id:e}),c.a.createElement("div",{className:"image-placeholder",onClick:function(){return a(e)}},c.a.createElement(w,{image:e,imageClass:"image-thumb",htmlFor:"image-radio"})))})))};a(41);var R=function(e){var t=e.sizes,a=e.handleSizeSelection;return c.a.createElement("div",{className:"size-list"},c.a.createElement("h6",{className:"size-list-title"},"This product is available in:"),c.a.createElement("div",{className:"label-list"},t.map((function(e){return c.a.createElement("label",{key:e,className:"size-label",id:e,onClick:function(){return a(e)}},c.a.createElement("button",{className:"size-radio",type:"radio",name:"size-radio",id:e}),c.a.createElement("span",{className:"size-item",htmlFor:"size-radio"},e))}))),c.a.createElement("div",{id:"size-warning"},"Please select a size"))};a(42);var z=function(e){var t=e.dataTestId,a=e.isDisabled,r=e.className,n=e.onClick,i=e.btnText,s=e.icon;return c.a.createElement("button",{"data-testid":t,disabled:a,className:r,onClick:n},s," ",i)},_=(a(43),function(e){var t,a=e.product,r=e.productQty,n=e.handleDecrement,i=e.handleIncrement;return t=a?a.productQty:r,c.a.createElement("span",{className:"product-item-qty"},t<2?c.a.createElement(z,{dataTestId:"decr",isDisabled:!0,className:"form-button product-table",onClick:function(){return n(a)},btnText:c.a.createElement("i",{className:"far fa-minus-square"})}):c.a.createElement(z,{dataTestId:"decr",isDisabled:!1,className:"form-button product-table",onClick:function(){return n(a)},btnText:c.a.createElement("i",{className:"far fa-minus-square"})}),c.a.createElement("span",{className:"qty-number"},t),c.a.createElement(z,{dataTestId:"incr",isDisabled:!1,className:"form-button product-table",onClick:function(){return i(a)},btnText:c.a.createElement("i",{className:"far fa-plus-square"})}))});var x=function(e){var t=e.match.params.id,a=s.products.filter((function(e){return e.id===+t}))[0];document.title="".concat(a.manufacturer," | ").concat(a.name);var n=Object(r.useState)(1),i=Object(m.a)(n,2),o=i[0],l=i[1],u=Object(r.useContext)(y),d=Object(m.a)(u,2),p=(d[0].cart,d[1]),h=Object(r.useState)(""),E=Object(m.a)(h,2),g=E[0],b=E[1],v=Object(r.useState)(a.images[0]),N=Object(m.a)(v,2),S=N[0],C=N[1];return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"product-details"},c.a.createElement("h3",{className:"manufacturer"},a.manufacturer),c.a.createElement("span",{className:"images"},c.a.createElement(w,{image:S,imageClass:"image-main"}),c.a.createElement(D,{images:a.images,handleThumbImageClick:function(e){C(e)}})),c.a.createElement("span",{className:"wrapper"},c.a.createElement("span",{className:"info-wrapper"},c.a.createElement("h5",null,a.name),c.a.createElement("h4",null,a.price," DKK"),c.a.createElement("h6",null,"Description"),c.a.createElement("p",null,a.description),c.a.createElement(R,{sizes:a.sizes,handleSizeSelection:function(e){b(e),document.getElementById("size-warning").classList.remove("visible"),Array.from(document.getElementsByClassName("size-label")).map((function(e){return e.classList.remove("selected")})),document.getElementById("".concat(e)).classList.add("selected")}})),c.a.createElement("span",{className:"qty-wrapper"},c.a.createElement(_,{productQty:o,handleDecrement:function(){o>1&&l(o-=1)},handleIncrement:function(){l(o+=1)}}),c.a.createElement(z,{isDisabled:!1,className:"form-button cart",onClick:function(){if(!g)return document.getElementById("size-warning").classList.add("visible"),void f("simpleError",{title:"Please select a size!"});f("success",{title:"".concat(a.name," added successfully to your cart.")}),p({type:"ADD_TO_CART",item:a,productQty:o,productSize:g})},btnText:"Add to cart"})))))},L=(a(44),a(45),function(e){return c.a.createElement("li",{className:"product-item header"},c.a.createElement("span",{className:"product-item-title"},"Product details"),c.a.createElement("span",{className:"product-item-sprice"},"Unit price"),c.a.createElement("span",{className:"product-item-qty"},"Quantity"),c.a.createElement("span",{className:"product-item-tprice"},"Total price"))}),I=function(e){var t=e.productTable,a=e.handleDecrement,r=e.handleIncrement;return c.a.createElement("ul",{className:"product-list-table"},c.a.createElement(L,null),t.map((function(t){return c.a.createElement("li",{key:t.id+t.productSize,className:"product-item data-row"},c.a.createElement("span",{className:"product-item-title"},c.a.createElement(o.b,{to:"/react-store/products/"+t.id},c.a.createElement(w,{image:t.images[0],imageClass:"cart-image"}),c.a.createElement("div",{className:"title-info"},c.a.createElement("span",null,"Manufacturer:"," ",c.a.createElement("span",{className:"manufacturer"},t.manufacturer)),c.a.createElement("span",{className:"name"},t.name),c.a.createElement("span",null,"Size:"," ",c.a.createElement("span",{className:"size"},t.productSize)))),c.a.createElement(z,{isDisabled:!1,className:"form-button button-delete product-table",onClick:function(){return e.handleRemoveFromCart(t)},icon:c.a.createElement("i",{className:"far fa-trash-alt"}),btnText:"Remove this product"})),c.a.createElement("span",{className:"product-item-sprice"},t.price.toFixed(2)," DKK"),c.a.createElement(_,{product:t,handleDecrement:a,handleIncrement:r}),c.a.createElement("span",{className:"product-item-tprice"},t.totalPrice," DKK"))})))},M=function(){document.title="Compass Store | Cart";var e=Object(r.useContext)(y),t=Object(m.a)(e,2),a=t[0].cart,n=t[1],i=function(){n({type:"CHECKOUT"});var e=0;a.map((function(t){return e+=+t.totalPrice}))};return c.a.createElement("div",{className:"cart-wrapper"},0!==a.length?c.a.createElement(r.Fragment,null,c.a.createElement("h1",null,"Your shopping cart"),c.a.createElement(I,{source:"cart",productTable:a,handleRemoveFromCart:function(e){n({type:"REMOVE_FROM_CART",item:e})},handleCheckout:i,handleIncrement:function(e){n({type:"INCREMENT",item:e})},handleDecrement:function(e){n({type:"DECREMENT",item:e})}}),c.a.createElement("div",{className:"total-price-wrapper"},c.a.createElement("h4",null,c.a.createElement("span",{className:"text"},"Total Price: "),c.a.createElement("span",{className:"price"},function(e){var t=0;return e.map((function(e){return t+=+e.totalPrice})),t}(a).toFixed(2)," DKK")),c.a.createElement(z,{isDisabled:!1,className:"form-button cart",onClick:i,btnText:"Proceed to Checkout"}))):c.a.createElement(r.Fragment,null,c.a.createElement("h1",null,"Your cart is empty"),c.a.createElement(o.b,{to:"/react-store"},c.a.createElement("h4",null,"Start shopping"))))},A=a(20),F={cart:[]},X=function(e,t){var a;t.item&&(a="ADD_TO_CART"===t.type?e.cart.findIndex((function(e){return e.id===t.item.id&&e.productSize===t.productSize})):e.cart.findIndex((function(e){return e.id===t.item.id&&e.productSize===t.item.productSize})));var r=function(){localStorage.removeItem("cartData")},c=function(e){localStorage.setItem("cartData",JSON.stringify(e))};switch(t.type){case"LOAD_CART_FROM_STORAGE":return e.cart=t.item,{cart:e.cart};case"ADD_TO_CART":if(a>-1)return e.cart[a].productQty+=t.productQty,e.cart[a].totalPrice=(e.cart[a].productQty*e.cart[a].price).toFixed(2),c(e.cart),{cart:e.cart};var n=Object(A.a)({},t.item);return n.productSize=t.productSize,n.productQty=t.productQty,n.totalPrice=(n.productQty*n.price).toFixed(2),e.cart.push(n),c(e.cart),{cart:e.cart};case"INCREMENT":return e.cart[a].productQty+=1,e.cart[a].totalPrice=(e.cart[a].productQty*e.cart[a].price).toFixed(2),c(e.cart),{cart:e.cart};case"DECREMENT":return e.cart[a].productQty>1&&(e.cart[a].productQty-=1,e.cart[a].totalPrice=(e.cart[a].productQty*e.cart[a].price).toFixed(2)),c(e.cart),{cart:e.cart};case"REMOVE_FROM_CART":return e.cart=e.cart.filter((function(e,t){return t!==a&&e})),e.cart.length>0?c(e.cart):r(),{cart:e.cart};case"CHECKOUT":return r(),{cart:[]};default:return e}},B={sort:{}},P=function(e,t){var a;switch(t.type){case"LOAD_SORT_FROM_STORAGE":return e.sort=JSON.parse(t.data),{sort:e.sort};case"SORT":return e.sort.criteria=t.criteria,e.sort.direction=t.direction,a=e.sort,localStorage.setItem("sortData",JSON.stringify(a)),{sort:e.sort};default:return e}};var Q=function(){var e=Object(r.useReducer)(X,F),t=Object(r.useReducer)(P,B);return c.a.createElement("div",{className:"site-container"},c.a.createElement(o.a,null,c.a.createElement(b,{value:e},c.a.createElement(T,{value:t},c.a.createElement(N,null),c.a.createElement("main",{className:"site-main"},c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/react-store-javascript",render:function(){return c.a.createElement(k,{products:s.products})}}),c.a.createElement(l.a,{exact:!0,path:"/react-store-javascript/products/:id",component:x}),c.a.createElement(l.a,{exact:!0,path:"/react-store-javascript/cart",component:M}))),c.a.createElement(S,null)))))};i.a.render(c.a.createElement(Q,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.0b8e5fdc.chunk.js.map