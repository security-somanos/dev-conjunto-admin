(function(t){function e(e){for(var o,n,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},i={app:0},s=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("85ec"),i=a.n(o);i.a},"052d":function(t,e,a){"use strict";var o=a("acca"),i=a.n(o);i.a},1654:function(t,e,a){"use strict";var o=a("504d"),i=a.n(o);i.a},1853:function(t,e,a){"use strict";var o=a("b504"),i=a.n(o);i.a},"504d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("8aa5");var o=a("2b0e"),i=a("5f5b"),s=a("b1e0"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("HomeNavigation"),a("router-view",{on:{authenticated:t.setAuthenticated}})],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Sitios")]),a("nav",[a("router-link",{attrs:{to:"/home"}},[t._v("Home")])],1)])},c=[],u=a("2877"),d={},p=Object(u["a"])(d,l,c,!1,null,null,null),v=p.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Sitios")]),a("nav",[a("a",{attrs:{id:"comu",href:"https://amigues.netlify.app"}},[t._v("Comunitaria")]),a("a",{staticStyle:{"background-color":"#00cc65"},attrs:{href:"https://adminvrde.netlify.app"}},[t._v("Minorista")]),a("a",{staticStyle:{"background-color":"cornflowerblue"},attrs:{href:"https://adminmayorista.netlify.app"}},[t._v("Mayorista")])])])}],f=(a("aa76"),{}),h=Object(u["a"])(f,m,g,!1,null,null,null),_=h.exports,y={name:"App",components:{Navigation:v,HomeNavigation:_},data(){return{authenticated:!1,mockAccount:{username:"mayorista",password:"puerro"}}},mounted(){this.authenticated||(this.$router.replace({name:"login"}),this.$router.push({path:"login"}))},methods:{setAuthenticated(t){this.authenticated=t},logout(){this.authenticated=!1}}},C=y,b=(a("034f"),Object(u["a"])(C,n,r,!1,null,null,null)),x=b.exports,w=a("a7c6"),k=a.n(w),P=a("0ff2"),T=a("ec02"),M=a.n(T),N=a("8c4f"),$=(a("f669"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("vue-headful",{attrs:{title:"Mayorista - Ingreso",description:"Ingreso"}}),a("img",{staticStyle:{height:"100px",margin:"0 auto","margin-bottom":"20px"},attrs:{src:"https://storage.cloud.google.com/el-conjunto.appspot.com/icons/logoconjuro.png",alt:""}}),a("h1",[t._v("Admin Mayorista")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.input.username},on:{input:function(e){e.target.composing||t.$set(t.input,"username",e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}}),a("br"),a("button",{attrs:{type:"button"},on:{click:function(e){return t.login()}}},[t._v("Login")])],1)}),A=[],S={name:"Login",data(){return{input:{username:"",password:""}}},methods:{login(){""!=this.input.username&&""!=this.input.password?this.input.username==this.$parent.mockAccount.username&&this.input.password==this.$parent.mockAccount.password?(this.$emit("authenticated",!0),this.$router.push({path:"admin"})):console.log("The username and / or password is incorrect"):console.log("A username and password must be present")}}},j=S,I=(a("1853"),Object(u["a"])(j,$,A,!1,null,"01335722",null)),E=I.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"admin"}},[a("vue-headful",{attrs:{title:"Mayorista - Productos",description:"Administrar productos"}}),a("img",{staticStyle:{height:"100px",width:"100px",margin:"20px auto"},attrs:{src:"https://storage.cloud.google.com/el-conjunto.appspot.com/icons/logoconjuro.png",alt:""}}),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/admin"}},[t._v("Productos")]),a("router-link",{attrs:{to:"/ventas"}},[t._v("Pedidos")]),a("router-link",{attrs:{to:"/totals"}},[t._v("Totales")]),a("router-link",{attrs:{to:"/login",id:"logout",replace:""},nativeOn:{click:function(e){return t.logout()}}},[t._v("Logout")])],1),a("h1",[t._v("Admin")]),a("div",{staticClass:"addProduct"},[a("table",[t._m(0),a("tr",[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"name",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.productor,expression:"productor"}],attrs:{id:"nameP",type:"text"},domProps:{value:t.productor},on:{input:function(e){e.target.composing||(t.productor=e.target.value)}}})]),a("td",[a("input",{ref:"imageSelect",staticStyle:{display:"none"},attrs:{id:"image",type:"file"},on:{change:function(e){return t.onFileSelected(e)}}}),a("button",{on:{click:function(e){return t.$refs.imageSelect.click()}}},[t._v("Subir Imagen")])]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.priceCosto,expression:"priceCosto"}],staticClass:"number",attrs:{type:"text"},domProps:{value:t.priceCosto},on:{input:function(e){e.target.composing||(t.priceCosto=e.target.value)}}})]),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.unidadM,expression:"unidadM"}],staticClass:"unidad",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.unidadM=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Unidad Mayorista")]),a("option",{attrs:{value:"Kg"}},[t._v("Kg")]),a("option",{attrs:{value:"Gr"}},[t._v("Gr")]),a("option",{attrs:{value:"Caja"}},[t._v("Caja")]),a("option",{attrs:{value:"Cajon"}},[t._v("Cajon")]),a("option",{attrs:{value:"Jaula"}},[t._v("Jaula")]),a("option",{attrs:{value:"Unidades"}},[t._v("Unidades")])])]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.active,expression:"active"}],attrs:{id:"active",type:"checkbox"},domProps:{checked:Array.isArray(t.active)?t._i(t.active,null)>-1:t.active},on:{change:function(e){var a=t.active,o=e.target,i=!!o.checked;if(Array.isArray(a)){var s=null,n=t._i(a,s);o.checked?n<0&&(t.active=a.concat([s])):n>-1&&(t.active=a.slice(0,n).concat(a.slice(n+1)))}else t.active=i}}})])]),t._m(1),a("tr",[a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{id:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Categoria")]),a("option",{attrs:{value:"verdura"}},[t._v("Verdura")]),a("option",{attrs:{value:"fruta"}},[t._v("Fruta")]),a("option",{attrs:{value:"almacen"}},[t._v("Almacen")]),a("option",{attrs:{value:"vinos"}},[t._v("Vinos")]),a("option",{attrs:{value:"medicina"}},[t._v("Medicina")]),a("option",{attrs:{value:"comida"}},[t._v("Comida")])])]),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.subtype,expression:"subtype"}],attrs:{id:"subcategory"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.subtype=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disable:"",value:""}},[t._v("Seleccionar")]),a("option",{attrs:{value:"Legumbres"}},[t._v("Legumbres")]),a("option",{attrs:{value:"Lácteos"}},[t._v("Lacteos")]),a("option",{attrs:{value:"Dulces"}},[t._v("Dulces")]),a("option",{attrs:{value:"Panificados"}},[t._v("Panificados")]),a("option",{attrs:{value:"Verdes"}},[t._v("Verdes")]),a("option",{attrs:{value:"Cítricos"}},[t._v("Citricos")])])]),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.view,expression:"view"}],attrs:{id:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.view=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disable:"",value:"Todas las paginas"}},[t._v(" Seleccionar Pagina")]),a("option",{attrs:{value:"Todas"}},[t._v("Todas las paginas")]),a("option",{attrs:{value:"Comunitaria"}},[t._v("Comunitaria")]),a("option",{attrs:{value:"Mayorista"}},[t._v("Mayorista")]),a("option",{attrs:{value:"Vrde"}},[t._v("Vrde")])])]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cantidad,expression:"cantidad"}],staticClass:"number",attrs:{type:"text"},domProps:{value:t.cantidad},on:{input:function(e){e.target.composing||(t.cantidad=e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.stock,expression:"stock"}],attrs:{id:"stock",type:"text"},domProps:{value:t.stock},on:{input:function(e){e.target.composing||(t.stock=e.target.value)}}})]),a("td",[a("button",{staticClass:"greenBtn",attrs:{id:"addProduct"},on:{click:function(e){return t.onUpload()}}},[t._v("Add")])])]),t._m(2),a("tr",[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.priceMay,expression:"priceMay"}],staticClass:"number",attrs:{type:"text"},domProps:{value:t.priceMay},on:{input:function(e){e.target.composing||(t.priceMay=e.target.value)}}})])])])]),a("div",{staticClass:"search"},[a("div",{staticClass:"reverse"},[a("div",{staticClass:"reverseProdType",on:{click:function(e){return t.reverseProdType(e,t.prodTypeReverse)}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.prodType,expression:"prodType"}],attrs:{id:"prodType"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.prodType=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Ordenar por")]),a("option",{attrs:{value:"name"}},[t._v("Nombre")]),a("option",{attrs:{value:"productor"}},[t._v("Productor")]),a("option",{attrs:{value:"stock"}},[t._v("Stock")]),a("option",{attrs:{value:"type"}},[t._v("Categoria")]),a("option",{attrs:{value:"active"}},[t._v("Active")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"Search",placeholder:"buscar"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("h4",[t._v(" >> Agregar Costo productos al nuevo campo.")])]),a("div",{staticClass:"hideActive"},[a("div",{staticClass:"hideActive"},[t._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:t.toggleHide,expression:"toggleHide"}],attrs:{id:"toggleHide",type:"checkbox"},domProps:{checked:Array.isArray(t.toggleHide)?t._i(t.toggleHide,null)>-1:t.toggleHide},on:{change:function(e){var a=t.toggleHide,o=e.target,i=!!o.checked;if(Array.isArray(a)){var s=null,n=t._i(a,s);o.checked?n<0&&(t.toggleHide=a.concat([s])):n>-1&&(t.toggleHide=a.slice(0,n).concat(a.slice(n+1)))}else t.toggleHide=i}}})])])]),a("table",{staticClass:"staticProd"},[t._m(4),t._l(t.orderBy(t.filteredProducts,t.prodType,t.prodTypeReverse),(function(e){return a("tr",{key:e[".key"],class:{editing:t.productEditName==e.name,active:e.active,hidden:!t.toggleHide}},[a("td",[a("img",{staticClass:"productImage",attrs:{src:e.image,alt:""}})]),a("td",[a("div",{staticClass:"view"},[t._v(t._s(e.name))]),a("div",{staticClass:"edit"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"product.name"}],attrs:{id:"name",type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}})])]),a("td",[a("div",{staticClass:"view"},[t._v(" "+t._s(e.stock)+" ")]),a("div",{staticClass:"edit"},[t._v(" Vistas "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.view,expression:"product.view"}],attrs:{id:"category"},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"view",a.target.multiple?o:o[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v(" Seleccionar Pagina")]),a("option",{attrs:{value:"Todas"}},[t._v("Todas las paginas")]),a("option",{attrs:{value:"Comunitaria"}},[t._v("Comunitaria")]),a("option",{attrs:{value:"Mayorista"}},[t._v("Mayorista")]),a("option",{attrs:{value:"Vrde"}},[t._v("Vrde")])]),t._v(" Stock "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.stock,expression:"product.stock"}],attrs:{id:"stock",type:"text"},domProps:{value:e.stock},on:{input:function(a){a.target.composing||t.$set(e,"stock",a.target.value)}}})])]),a("td",[a("div",{staticClass:"view"},[t._v(" "+t._s(e.productor)+" ")]),a("div",{staticClass:"edit"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.productor,expression:"product.productor"}],attrs:{id:"nameP",type:"text"},domProps:{value:e.productor},on:{input:function(a){a.target.composing||t.$set(e,"productor",a.target.value)}}})])]),a("td",[a("div",{staticClass:"view"},[t._v(" "+t._s(e.cantidad)+t._s(e.unidadM)+" ")]),a("div",{staticClass:"edit"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.cantidad,expression:"product.cantidad"}],staticClass:"number",attrs:{type:"text"},domProps:{value:e.cantidad},on:{input:function(a){a.target.composing||t.$set(e,"cantidad",a.target.value)}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:e.unidadM,expression:"product.unidadM"}],staticClass:"unidad",on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"unidadM",a.target.multiple?o:o[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Unidad Mayorista")]),a("option",{attrs:{value:"Kg"}},[t._v("Kg")]),a("option",{attrs:{value:"Gr"}},[t._v("Gr")]),a("option",{attrs:{value:"Caja"}},[t._v("Caja")]),a("option",{attrs:{value:"Cajon"}},[t._v("Cajon")]),a("option",{attrs:{value:"Jaula"}},[t._v("Jaula")]),a("option",{attrs:{value:"Unidades"}},[t._v("Unidades")])])])]),a("td",[a("div",{staticClass:"view"},[t._v(" $"+t._s(e.priceCosto)+" ")]),a("div",{staticClass:"edit"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.priceCosto,expression:"product.priceCosto"}],staticClass:"number",attrs:{type:"text"},domProps:{value:e.priceCosto},on:{input:function(a){a.target.composing||t.$set(e,"priceCosto",a.target.value)}}})])]),a("td",[a("div",{staticClass:"view"},[t._v(" "+t._s(e.type)+" ")]),a("div",{staticClass:"edit"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"product.type"}],attrs:{id:"category"},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"type",a.target.multiple?o:o[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Categoria")]),a("option",{attrs:{value:"verdura"}},[t._v("Verdura")]),a("option",{attrs:{value:"fruta"}},[t._v("Fruta")]),a("option",{attrs:{value:"almacen"}},[t._v("Almacen")]),a("option",{attrs:{value:"vinos"}},[t._v("Vinos")]),a("option",{attrs:{value:"medicina"}},[t._v("Medicina")]),a("option",{attrs:{value:"comida"}},[t._v("Comida")])])])]),a("td",[a("div",{staticClass:"view"},[t._v(" "+t._s(e.subtype)+" ")]),a("div",{staticClass:"edit"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.subtype,expression:"product.subtype"}],attrs:{id:"subcategory"},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"subtype",a.target.multiple?o:o[0])}}},[a("option",{attrs:{disable:"",value:""}},[t._v("Seleccionar")]),a("option",{attrs:{value:"Legumbres"}},[t._v("Legumbres")]),a("option",{attrs:{value:"Lácteos"}},[t._v("Lacteos")]),a("option",{attrs:{value:"Dulces"}},[t._v("Dulces")]),a("option",{attrs:{value:"Panificados"}},[t._v("Panificados")]),a("option",{attrs:{value:"Verdes"}},[t._v("Verdes")]),a("option",{attrs:{value:"Cítricos"}},[t._v("Citricos")])])])]),a("td",[a("div",{staticClass:"view"},[t._v(" $"+t._s(e.priceMay)+" ")]),a("div",{staticClass:"edit"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.priceMay,expression:"product.priceMay"}],staticClass:"number",attrs:{type:"text"},domProps:{value:e.priceMay},on:{input:function(a){a.target.composing||t.$set(e,"priceMay",a.target.value)}}})])]),a("td",[a("div",{staticClass:"view"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active,expression:"product.active"}],attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(e.active)?t._i(e.active,null)>-1:e.active},on:{change:function(a){var o=e.active,i=a.target,s=!!i.checked;if(Array.isArray(o)){var n=null,r=t._i(o,n);i.checked?r<0&&t.$set(e,"active",o.concat([n])):r>-1&&t.$set(e,"active",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(e,"active",s)}}})]),a("div",{staticClass:"edit"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active,expression:"product.active"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.active)?t._i(e.active,null)>-1:e.active},on:{change:function(a){var o=e.active,i=a.target,s=!!i.checked;if(Array.isArray(o)){var n=null,r=t._i(o,n);i.checked?r<0&&t.$set(e,"active",o.concat([n])):r>-1&&t.$set(e,"active",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(e,"active",s)}}})])]),a("td",[a("div",{staticClass:"view"},[a("button",{staticClass:"roundBtn",on:{click:function(a){return t.setEditName(e.name,e[".key"])}}},[t._v("Edit")])]),a("div",{staticClass:"edit"},[a("button",{staticClass:"greenBtn",on:{click:function(a){return t.saveEdit(e)}}},[t._v("Save")]),a("vue-confirmation-button",{staticClass:"rdBtn",attrs:{messages:t.customMessages},on:{"confirmation-success":function(a){return t.removeProductName(e[".key"])}}})],1)])])}))],2)],1)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Nombre")]),a("th",[t._v("Productor")]),a("th",[t._v("Imagen")]),a("th",[t._v("Costo May.")]),a("th",[t._v("Unidad May.")]),a("th",[t._v("Activo")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Categoria")]),a("th",[t._v("Subcategoria")]),a("th",[t._v("Vistas")]),a("th",[t._v("Cant. May.")]),a("th",[t._v("Stock Campo ")]),a("th",[t._v("Confirmar")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Venta Mayorista ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"toggleHide"}},[a("strong",[t._v("Mostrar desactivados")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Foto")]),a("th",[t._v("Nombre")]),a("th",[t._v("Stock")]),a("th",[t._v("Proveedor")]),a("th",[t._v("Cantidad May.")]),a("th",[t._v("Costo")]),a("th",[t._v("Categoria")]),a("th",[t._v("Subcategoria")]),a("th",[t._v("Venta May.")]),a("th",[t._v("Active")]),a("th",[t._v("Editar")])])}],O=a("59ca"),H=a.n(O);a("66ce");const L=H.a.initializeApp({apiKey:"AIzaSyBvYdUi3Ydfl1_HCDNjiOQdjqtyrFIcM2U",authDomain:"el-conjunto.firebaseapp.com",databaseURL:"https://el-conjunto.firebaseio.com",projectId:"el-conjunto",storageBucket:"el-conjunto.appspot.com",messagingSenderId:"506296486519",appId:"1:506296486519:web:4a7e691e275ee14047d472",measurementId:"G-0JT0Z4J3TT"}).database();var B=a("bc3a"),F=a.n(B),D=a("a277");const J=L.ref("products/mayorista");var R={data(){return{search:"",name:"",view:"",unidadM:"",unidadMin:"",productor:"",cantidad:0,edit:!1,image:"",type:"",subtype:"",priceCosto:0,priceMin:0,priceMay:0,stock:0,active:!0,customMessages:["Borrar","Estas seguro?","Exito"],selectedFile:null,products:[],toggleHide:!0,prodType:"name",prodTypeReverse:1,productEditName:""}},components:{"vue-confirmation-button":D["a"]},firebase:{products:J},mixins:[k.a.mixin],methods:{onFileSelected(t){this.selectedFile=t.target.files[0]},onUpload(){const t=new FormData;this.image="https://storage.cloud.google.com/el-conjunto.appspot.com/"+this.selectedFile.name,t.append("image",this.selectedFile,this.selectedFile.name),F.a.post("https://us-central1-el-conjunto.cloudfunctions.net/uploadFile",t).then(t=>{this.submitProduct()})},submitProduct(){J.push({search:"",name:this.name,cantidad:this.cantidad,unidadM:this.unidadM,edit:!1,image:this.image,view:this.view,type:this.type,subtype:this.subtype,productor:this.productor,priceCosto:this.priceCosto,priceMay:this.priceMay,stock:this.stock,active:this.active,amount:0}),this.name="",this.view="",this.cantidad="",this.unidadM="",this.image="",this.type="",this.subtype="",this.priceCosto="",this.priceMay="",this.productor="",this.stock=0,this.active=!1},setProdType(t){this.prodType=t},reverseProdType(t,e){t.target.classList.toggle("collapsed"),1==e&&(this.prodTypeReverse=-1),-1==e&&(this.prodTypeReverse=1)},removeProductName(t){J.child(t).remove()},setEditName(t,e){J.child(e).update({edit:!0}),this.productEditName=t},cancelEdit(t){J.child(t).update({edit:!1}),this.productEditName=""},saveEdit(t){const e=t[".key"];J.child(e).set({name:t.name,cantidad:t.cantidad,edit:!1,view:t.view,unidadM:t.unidadM,image:t.image,type:t.type,subtype:t.subtype,priceMay:t.priceMay,priceCosto:t.priceCosto,stock:t.stock,productor:t.productor,active:t.active,amount:0}),this.productEditName=""}},computed:{filteredProducts(){var t=this;return t.products.filter(e=>e.name&&-1!==e.name.toLowerCase().indexOf(t.search))}}},G=R,K=(a("1654"),Object(u["a"])(G,U,V,!1,null,"fe077d86",null)),q=K.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"portal"}},[a("vue-headful",{attrs:{title:"Mayorista - Pedidos",description:"Ver todos los pedidos"}}),a("div",{staticClass:"header"},[a("img",{staticClass:"logo",attrs:{src:"https://storage.cloud.google.com/el-conjunto.appspot.com/icons/logoconjuro.png",alt:""}}),a("div",{staticClass:"navButtons"},[a("router-link",{attrs:{to:"/admin"}},[t._v("Productos")]),a("router-link",{attrs:{to:"/ventas"}},[t._v("Pedidos")]),a("router-link",{attrs:{to:"/totals"}},[t._v("Totales")]),a("router-link",{attrs:{to:"/login",id:"logout",replace:""},nativeOn:{click:function(e){return t.logout()}}},[t._v("Logout")])],1),a("div",{staticClass:"navText"},[a("p",[t._v("Total Ventas : $"+t._s(t.salesTotalCount))]),a("p",[t._v("Total Costo : $"+t._s(t.totalCost))]),a("p",[t._v("Total Cantidades : "+t._s(t.totalAmount))])])]),a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Buscar"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("button",{staticStyle:{"margin-bottom":"20px"},on:{click:t.scrollBottom}},[t._v("Ver ultimo")])]),t._l(t.filterBy(t.sales,t.search),(function(e){return a("div",{key:e[".key"],staticClass:"sale"},[a("div",{staticClass:"userData",on:{click:function(e){return t.toggleCollapse(e)}}},[a("div",{staticClass:"line status"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].status,expression:"sale[0].status"}],attrs:{type:"radio",id:"Pendiente",value:"pendiente"},domProps:{checked:t._q(e[0].status,"pendiente")},on:{change:[function(a){return t.$set(e[0],"status","pendiente")},function(a){return t.updateUserInfo(a,e[".key"],"0/status")}]}}),a("label",{attrs:{for:"Pendiente"}},[t._v("Pendiente")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].status,expression:"sale[0].status"}],attrs:{type:"radio",id:"Entregado",value:"entregado"},domProps:{checked:t._q(e[0].status,"entregado")},on:{change:[function(a){return t.$set(e[0],"status","entregado")},function(a){return t.updateUserInfo(a,e[".key"],"0/status")}]}}),a("label",{attrs:{for:"Entregado"}},[t._v("Entregado")])]),a("div",{staticClass:"line date"},[a("div",{staticClass:"lineTitle"},[t._v("Fecha")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].date,expression:"sale[0].date"}],attrs:{type:"text"},domProps:{value:e[0].date},on:{change:function(a){return t.updateUserInfo(a,e[".key"],"0/date")},input:function(a){a.target.composing||t.$set(e[0],"date",a.target.value)}}})]),a("div",{staticClass:"line name"},[a("div",{staticClass:"lineTitle"},[t._v("Nombre")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].name,expression:"sale[0].name"}],attrs:{type:"text"},domProps:{value:e[0].name},on:{change:function(a){return t.updateUserInfo(a,e[".key"],"0/name")},input:function(a){a.target.composing||t.$set(e[0],"name",a.target.value)}}})]),a("div",{staticClass:"line address"},[a("div",{staticClass:"lineTitle"},[t._v("Direccion")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].address,expression:"sale[0].address"}],attrs:{type:"text"},domProps:{value:e[0].address},on:{change:function(a){return t.updateUserInfo(a,e[".key"],"0/address")},input:function(a){a.target.composing||t.$set(e[0],"address",a.target.value)}}})]),a("div",{staticClass:"line localidad"},[a("div",{staticClass:"lineTitle"},[t._v("Localidad")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].localidad,expression:"sale[0].localidad"}],attrs:{type:"text"},domProps:{value:e[0].localidad},on:{change:function(a){return t.updateUserInfo(a,e[".key"],"0/localidad")},input:function(a){a.target.composing||t.$set(e[0],"localidad",a.target.value)}}})]),a("div",{staticClass:"line phone"},[a("div",{staticClass:"lineTitle"},[t._v("Cel")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].phone,expression:"sale[0].phone"}],attrs:{type:"text"},domProps:{value:e[0].phone},on:{change:function(a){return t.updateUserInfo(a,e[".key"],"0/phone")},input:function(a){a.target.composing||t.$set(e[0],"phone",a.target.value)}}})]),a("div",{staticClass:"line email"},[a("div",{staticClass:"lineTitle"},[t._v("Nodo")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].email,expression:"sale[0].email"}],attrs:{type:"text"},domProps:{value:e[0].email},on:{change:function(a){return t.updateUserInfo(a,e[".key"],"0/email")},input:function(a){a.target.composing||t.$set(e[0],"email",a.target.value)}}})]),a("div",{staticClass:"line total"},[a("div",{staticClass:"lineTitle"},[t._v("Total Venta")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].total,expression:"sale[0].total"}],attrs:{type:"text"},domProps:{value:e[0].total},on:{change:function(a){return t.updateUserInfo(a,e[".key"],"0/total")},input:function(a){a.target.composing||t.$set(e[0],"total",a.target.value)}}})]),a("div",{staticClass:"line total"},[a("div",{staticClass:"lineTitle"},[t._v("Total Costo")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].totalCosto,expression:"sale[0].totalCosto"}],attrs:{type:"text"},domProps:{value:e[0].totalCosto},on:{change:function(a){return t.updateUserInfo(a,e[".key"],"0/totalCosto")},input:function(a){a.target.composing||t.$set(e[0],"totalCosto",a.target.value)}}})]),a("div",{staticClass:"line total"},[a("div",{staticClass:"lineTitle"},[t._v("Total Cantidad")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].totalCantidad,expression:"sale[0].totalCantidad"}],attrs:{type:"text"},domProps:{value:e[0].totalCantidad},on:{change:function(a){return t.updateUserInfo(a,e[".key"],"0/totalCantidad")},input:function(a){a.target.composing||t.$set(e[0],"totalCantidad",a.target.value)}}})]),a("div",{staticClass:"line pago"},[a("div",{staticClass:"lineTitle"},[t._v("Pago")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e[0].pago,expression:"sale[0].pago"}],attrs:{type:"text"},domProps:{value:e[0].pago},on:{change:function(a){return t.updateUserInfo(a,e[".key"],"0/pago")},input:function(a){a.target.composing||t.$set(e[0],"pago",a.target.value)}}})]),a("div",{staticClass:"line preference"},[a("div",{staticClass:"lineTitle"},[t._v("Pref")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e[0].preference,expression:"sale[0].preference"}],attrs:{name:"",id:""},domProps:{value:e[0].preference},on:{change:function(a){return t.updateUserInfo(a,e[".key"],"0/preference")},input:function(a){a.target.composing||t.$set(e[0],"preference",a.target.value)}}})]),a("table",{attrs:{id:"pedido"}},[t._m(0,!0),t._l(e[0].items,(function(o,i){return a("tr",{key:i},[a("td",[t._v(" "+t._s(o.variedad)+" ")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:o.cantidad,expression:"item.cantidad"}],attrs:{type:"text",id:"amount"},domProps:{value:o.cantidad},on:{change:function(a){return t.updateItems(a,e[".key"],i,"cantidad",o,e[0])},input:function(e){e.target.composing||t.$set(o,"cantidad",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:o.precioMay,expression:"item.precioMay"}],staticClass:"numb",attrs:{type:"text",disabled:""},domProps:{value:o.precioMay},on:{change:function(a){return t.updateItems(a,e[".key"],i,"precioMay",o,e[0])},input:function(e){e.target.composing||t.$set(o,"precioMay",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:o.pago,expression:"item.pago"}],staticClass:"numb",attrs:{type:"text",disabled:""},domProps:{value:o.pago},on:{change:function(a){return t.updateItems(a,e[".key"],i,"pago",o,e[0])},input:function(e){e.target.composing||t.$set(o,"pago",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:o.precioCosto,expression:"item.precioCosto"}],staticClass:"numb",attrs:{type:"text",disabled:""},domProps:{value:o.precioCosto},on:{change:function(a){return t.updateItems(a,e[".key"],i,"precioCosto",o,e[0])},input:function(e){e.target.composing||t.$set(o,"precioCosto",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:o.subTotalCosto,expression:"item.subTotalCosto"}],staticClass:"numb",attrs:{type:"text",disabled:""},domProps:{value:o.subTotalCosto},on:{change:function(a){return t.updateItems(a,e[".key"],i,"subTotalCosto",o,e[0])},input:function(e){e.target.composing||t.$set(o,"subTotalCosto",e.target.value)}}})])])}))],2),a("vue-confirmation-button",{ref:"confirmationButton",refInFor:!0,staticClass:"rdBtn",attrs:{messages:t.customMessages},on:{"confirmation-success":function(a){return t.removeSale(e[".key"])}}}),a("button",{staticStyle:{"margin-bottom":"40px"},on:{click:t.scrollTop}},[t._v("Volver")])],1)])}))],2)},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Nombre")]),a("th",[t._v("Cantidad")]),a("th",[t._v("Precio Venta")]),a("th",[t._v("Subtotal Venta")]),a("th",[t._v("Costo")]),a("th",[t._v("Subtotal Costo")])])}];const Q=L.ref("sales/mayorista");var Z={data(){return{sales:[],search:"",totalSales:0,totalAmount:0,customMessages:["Borrar","Estas seguro?","Exito"],pago:""}},firebase:{sales:Q},filters:{reverse:function(t){return t.slice().reverse()}},mixins:[k.a.mixin],components:{"vue-confirmation-button":D["a"]},methods:{scrollBottom(){window.scrollTo(0,document.body.scrollHeight)},scrollTop(){window.scrollTo(0,0)},removeSale(t){Q.child(t).remove()},updateUserInfo(t,e,a){var o={[a]:t.target.value};Q.child(e).update(o)},updateItems(t,e,a,o,i,s){var n="0/items/"+a+"/"+o,r="0/items/"+a+"/pago",l="0/items/"+a+"/subTotalCosto";"cantidad"==o&&(i.pago=i.precioMay*i.cantidad,i.subTotalCosto=i.precioCosto*i.cantidad);var c=0,u=0,d=0;for(var p in s.items)u+=parseInt(s.items[p].pago),c+=parseInt(s.items[p].cantidad),d+=parseInt(s.items[p].subTotalCosto);console.log(t.target.value);let v={"0/total":u,"0/totalCantidad":c,"0/totalCosto":d,[l]:i.subTotalCosto,[r]:i.pago,[n]:t.target.value};Q.child(e).update(v)},toggleCollapse(t){console.log(t.target),t.target.classList.toggle("collapsed")}},computed:{salesTotalCount:function(){var t=this,e=t.sales,a={};for(var o in t.totalSales=0,t.totalAmount=0,t.totalCost=0,e){var i=e[o][0].items;for(var s in i){var n=i[s].variedad.toString();t.totalSales+=parseInt(i[s].pago),t.totalAmount+=parseInt(i[s].cantidad),t.totalCost+=parseInt(i[s].precioCosto),a[n]||(a[n]=0),a[n]+=parseInt(i[s].cantidad)}}var r=[];for(var o in a)r.push({name:o,amount:a[o]});return r.sort((function(t,e){var a=t.name.toUpperCase(),o=e.name.toUpperCase();return a<o?-1:a>o?1:0})),this.count=r,this.totalSales}}},W=Z,X=(a("7ca2"),Object(u["a"])(W,z,Y,!1,null,"ff5f509e",null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"portal"}},[a("vue-headful",{attrs:{title:"Mayorista - Totales",description:"Todos los pedidos"}}),a("img",{staticStyle:{height:"100px",margin:"0 auto","margin-bottom":"20px"},attrs:{src:"https://storage.cloud.google.com/el-conjunto.appspot.com/icons/logoconjuro.png",alt:""}}),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/admin"}},[t._v("Productos")]),a("router-link",{attrs:{to:"/ventas"}},[t._v("Pedidos")]),a("router-link",{attrs:{to:"/totals"}},[t._v("Totales")]),a("router-link",{attrs:{to:"/login",id:"logout",replace:""},nativeOn:{click:function(e){return t.logout()}}},[t._v("Logout")])],1),a("h1",[t._v("Total "+t._s(t.totalSales))]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.salesType,expression:"salesType"}],attrs:{id:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.salesType=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"type"}},[t._v("Nombre")]),a("option",{attrs:{value:"amount"}},[t._v("Cantidad")])]),a("div",{staticClass:"count"},[a("table",{staticClass:"totales"},[t._m(0),t._l(t.orderBy(t.salesTotalCount,t.salesType),(function(e){return a("tr",{key:e[".key"]},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.cantidadMay)+" "+t._s(e.unidadMay)+" *")]),a("td",[t._v(t._s(e.amount))]),a("td",[t._v("= totales vendidos")])])}))],2)])],1)},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Variedad")]),a("th",[t._v("Unidad Mayorista")]),a("th",[t._v("Cantidades Vendidas")]),a("th",[t._v("Totales Vendidos")])])}];const ot=L.ref("sales/mayorista");var it={data(){return{sales:[],totalSales:0,pago:"",salesType:"amount",search:null}},firebase:{sales:ot},mixins:[k.a.mixin],methods:{},computed:{salesTotalCount:function(){var t=this,e=t.sales,a={};for(var o in t.totalSales=0,e){var i=e[o][0].items;for(var s in i){console.log(i[s]);var n=i[s].variedad.toString();i[s].cantidadMay&&console.log("nombre"),console.log(n),console.log(i[s]),t.totalSales+=parseInt(i[s].pago),a[n]||(a[n]=0),a[n]+=parseInt(i[s].cantidad)}}var r=[];for(var o in a)r.push({name:o,amount:a[o]});return r.sort((function(t,e){var a=t.name.toUpperCase(),o=e.name.toUpperCase();return a<o?-1:a>o?1:0})),this.count=r,this.count}}},st=it,nt=(a("052d"),Object(u["a"])(st,et,at,!1,null,"2acbb0bf",null)),rt=nt.exports;o["default"].component("vue-headful",M.a),o["default"].use(i["a"]),o["default"].use(s["a"]),o["default"].use(N["a"]),o["default"].use(k.a),o["default"].use(P["a"]);const lt=[{path:"/admin",component:q},{path:"/ventas",component:tt},{path:"/totals",component:rt},{path:"/login",component:E},{path:"/",component:E}],ct=new N["a"]({routes:lt});new o["default"]({el:"#app",router:ct,render:t=>t(x)})},"7ca2":function(t,e,a){"use strict";var o=a("7f45"),i=a.n(o);i.a},"7f45":function(t,e,a){},"85ec":function(t,e,a){},aa76:function(t,e,a){"use strict";var o=a("c879"),i=a.n(o);i.a},acca:function(t,e,a){},b504:function(t,e,a){},c879:function(t,e,a){},f669:function(t,e,a){}});
//# sourceMappingURL=app.1ab273fd.js.map