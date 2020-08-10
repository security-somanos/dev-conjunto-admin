<template>
  <div id="portal">
    <vue-headful title="Mayorista - Pedidos" description="Ver todos los pedidos"/>
    <div class="header">
        <img class="logo"
        src="https://storage.cloud.google.com/el-conjunto.appspot.com/icons/logoconjuro.png" alt=""/>
      <div class="navButtons">
        <router-link to="/admin">Productos</router-link>
        <router-link to="/ventas">Pedidos</router-link>
        <router-link to="/totals">Totales</router-link>
        <router-link to="/login" id="logout" v-on:click.native="logout()" replace>Logout</router-link>
      </div>
      <div class="navText">
      <p>Total Ventas : ${{salesTotalCount}}</p>
      <p>Total Cantidades : {{totalAmount}}</p>
      </div>    
    </div>
    <div class="search">
      <input type="text" v-model="search" placeholder="Buscar"/>
      <button style="margin-bottom:20px;" @click="scrollBottom">Ver ultimo</button>
    </div>

    <div class="sale" v-for="sale in filterBy(sales, search)" v-bind:key="sale['.key']">
     <div class="userData" @click="toggleCollapse($event)">
      <div class="line status" >
       <input type="radio" id="Pendiente" value="pendiente" v-model="sale[0].status"
        @change="updateUserInfo($event, sale['.key'], '0/status')">
       <label for="Pendiente">Pendiente</label>
       <input type="radio" id="Entregado" value="entregado" v-model="sale[0].status"
        @change="updateUserInfo($event, sale['.key'], '0/status')">
       <label for="Entregado">Entregado</label>
      </div>
      <div class="line date">
        <div class="lineTitle">Fecha</div>
        <input
          type="text"
          v-model="sale[0].date"
          @change="updateUserInfo($event, sale['.key'], '0/date')"/>
      </div>
      <div class="line name">
        <div class="lineTitle">Nombre</div>
        <input
          type="text"
          v-model="sale[0].name"
          @change="updateUserInfo($event, sale['.key'], '0/name')"/>
      </div>
      <div class="line address">
        <div class="lineTitle">Direccion</div>
        <input
          type="text"
          v-model="sale[0].address"
          @change="updateUserInfo($event, sale['.key'], '0/address')"/>
      </div>

        <div class="line localidad">
          <div class="lineTitle">Localidad</div>
          <input
            type="text"
            v-model="sale[0].localidad"
            @change="updateUserInfo($event, sale['.key'], '0/localidad')"/>
        </div>

        <div class="line phone">
          <div class="lineTitle">Cel</div>
          <input
            type="text"
            v-model="sale[0].phone"
            @change="updateUserInfo($event, sale['.key'], '0/phone')"/>
        </div>

        <div class="line email">
          <div class="lineTitle">Nodo</div>
          <input
            type="text"
            v-model="sale[0].email"
            @change="updateUserInfo($event, sale['.key'], '0/email')"/>
        </div>
        <div class="line total">
          <div class="lineTitle">Total Venta</div>
          <input
            type="text"
            v-model="sale[0].total"
            @change="updateUserInfo($event, sale['.key'], '0/total')"/>
        </div>
        <div class="line total">
          <div class="lineTitle">Total Costo</div>
          <input
            type="text"
            v-model="sale[0].totalCosto"
            @change="updateUserInfo($event, sale['.key'], '0/totalCosto')"/>
        </div>
        <div class="line total">
          <div class="lineTitle">Total Cantidad</div>
          <input
            type="text"
            v-model="sale[0].cantidadTotal"
            @change="updateUserInfo($event, sale['.key'], '0/cantidadTotal')"/>
        </div>
        <div class="line pago">
          <div class="lineTitle">Pago</div>
          <input
            type="text"
            v-model="sale[0].pago"
            @change="updateUserInfo($event, sale['.key'], '0/pago')"/>
        </div>
        <div class="line preference">
          <div class="lineTitle">Pref</div>
          <textarea
            name
            id
            v-model="sale[0].preference"
            @change="updateUserInfo($event, sale['.key'], '0/preference')">
          </textarea>
        </div>

              <!-- <tr v-for="(item, index) in sale [0].items" v-bind:key="index">
                <td > {{item.variedad}} </td>
                <td contenteditable="true"> {{item.cantidad}}  </td>
                <td > {{item.pago}} </td>
                <td > {{item.precio}} </td>
              </tr> -->

        <div class="items">
         <table id="pedido">
          <tr>
           <th>Nombre</th>
           <th>Cantidad</th>
           <th>Pago</th>
           <th colspan="2">Precio May.</th>
           <th>Costo</th>
          </tr>
          <tr v-for="(item, index) in sale [0].items" v-bind:key="index" >
            <td>
              {{item.variedad}}
            </td>
            <td>
              <div class="row amount">
                <input
                  type="text"
                  id="amount"
                  v-model="item.cantidad"
                  @change="updateItems($event, sale['.key'], index, 'cantidad', item, sale[0])"/>
               </div>
            </td>
            <td>
             <div class="row payment">
                <input
                type="text"
                id="numb"
                v-model="item.pago"
                @change="updateItems($event, sale['.key'], index, 'pago', item, sale[0])"/>
              </div>
            <td/>
            <td>
              <div class="row price">
                <input
                type="text"
                id="price"
                v-model="item.precioMay"
                @change="updateItems($event, sale['.key'], index, 'precioMay', item, sale[0])"/>
              </div>
            </td>
            <td>
              <div class="row price">
                <input
                type="text"
                class="numb"
                v-model="item.precioCosto"
                @change="updateItems($event, sale['.key'], index, 'precioCosto', item, sale[0])"/>
              </div>
            </td>
          </tr>
        </table>
      </div>
           <vue-confirmation-button
            class="rdBtn"
            ref="confirmationButton"
            :messages="customMessages"
            v-on:confirmation-success="removeSale(sale['.key'])">
            </vue-confirmation-button>
    </div>
    <button style="margin-bottom:40px;" @click="scrollTop">Volver</button>
          </div>

  </div>
</template>

<script>
import { db } from "../firebase";
import Vue2Filters from "vue2-filters";
import VueConfirmationButton from "vue-confirmation-button";
const salesRef = db.ref("sales/mayorista");

export default {
  data() {
    return {
      sales: [],
      search: "",
      totalSales: 0,
      totalAmount: 0,
      customMessages: ["Borrar", "Estas seguro?", "Exito"],
      pago: ""
    };
  },
  firebase: {
    sales: salesRef
  },
  filters: {
    reverse: function(array) {
      return array.slice().reverse();
    }
  },
  mixins: [Vue2Filters.mixin],
  components: {
    "vue-confirmation-button": VueConfirmationButton
  },
  methods: {
    scrollBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
    removeSale(key) {
      salesRef.child(key).remove();
    },
    updateUserInfo(event, key, name) {
      var updateObject = {
        [name]: event.target.value
      };
      salesRef.child(key).update(updateObject);
    },
    updateItems(event, key, index, name, item, sale) {
      var n = "0/items/" + index + "/" + name;
      var p = "0/items/" + index + "/pago";
      // var c = "0/items/" + index + "/" + cantidad;
    
      if (name == "cantidad") {
        item.pago = item.precioMay * item.cantidad;
      }

      var saleTotal = 0;
      for (var i in sale.items) {
        saleTotal += parseInt(sale.items[i].pago);
      }
      // var cantidadTotal = 0;
      // for (var i in sale.items) {
      //   cantidadTotal += parseInt(sale.items[i].cantidad)
      // }

      let updateObject = {
        "0/total": saleTotal,
        // "0/cantidadTotal": cantidadTotal,
        [c]: item.cantidad,
        [p]: item.pago,
        [n]: event.target.value
      };
      salesRef.child(key).update(updateObject);
    },
    toggleCollapse(event) {
      console.log(event.target);
      event.target.classList.toggle("collapsed");
    }
  },
  computed: {
    salesTotalCount: function() {
      var self = this;
      var s = self.sales;
      var c = {};
      self.totalSales = 0;
      self.totalAmount = 0;
      for (var i in s) {
        // Create items local.
        var items = s[i][0].items;
        for (var o in items) {
          var name = items[o].variedad.toString();
          self.totalSales += parseInt(items[o].pago);
          self.totalAmount += parseInt(items[o].cantidad)
          if (!c[name]) {
            c[name] = 0;
          }
          c[name] += parseInt(items[o].cantidad);
        }
      }
      var n = [];
      for (var i in c) {
        n.push({ name: i, amount: c[i] });
      }
      n.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      this.count = n;
      return this.totalSales;
    },
    // getTotal: function () {
    //         var s = this.sales;
    //         var c = {};
    //         s.amountTotal = 0;
    //   for (var i in s) {
    //     // Create items local.
    //     var items = s[i][0].items;
    //     for (var o in items) {
    //       var name = items[o].variedad.toString();
    //       self.amountTotal += parseInt(items[o].cantidad);
    //       if (!c[name]) {
    //         c[name] = 0;
    //       }
    //       c[name] += parseInt(items[o].cantidad);
    //     }
    //   }
    //   var n = [];
    //   for (var i in c) {
    //     n.push({ name: i, amount: c[i] });
    //   }
    //   n.sort(function(a, b) {
    //     var textA = a.name.toUpperCase();
    //     var textB = b.name.toUpperCase();
    //     return textA < textB ? -1 : textA > textB ? 1 : 0;
    //   });
    //   this.count = n;
    //   return this.totalSales;
    // }
    //         this.cart = this.productList.filter(function (item) {
    //             return item.total > 0;
    //         });

    //         for (var item in this.cart) {
    //             this.cart[item].total = this.cart[item].amount
    //             this.cart[item].total = parseFloat(this.cart[item].total.toFixed(2))
    //             this.amountTotal += this.cart[item].total;
    //             this.amountTotal = parseFloat(this.amountTotal.toFixed(2))
    //         }
    //     },
  }
};
</script>

<style scoped>
.header{
  background-color: lightgrey;
  border-radius: 10px;
  width: 86%;
}
.header .logo{
  display: flex;
}
.navButtons{
  display: flex;
}
.confirmation__button {
  background: #cf2218;
  font-weight: 700;
  color: #ffffff;
  border-radius: 50px;
  height: 30px;
  min-width: 50px;
  outline: 0;
  cursor: pointer;
  text-transform: capitalize;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: background 0.3s ease-in, min-width 0.1s linear,
    box-shadow 0.2s ease-in;
  position: relative;
  left: 0px;
  box-shadow: none;
  margin: 20px;
}
table{
  border-collapse: collapse;
}
#pedido{
  width: 100%;
}
#pedido th, #pedido td {
  border: 1px solid #ddd;
  padding: 8px;
}
.sale .userData:after {
  content: "";
  display: block;
  position: absolute;
  right: 20px;
  top: 10px;
  width: 0;
  height: 0;
  border-bottom: 10px solid #a53179;
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.sale .userData.collapsed:after {
  border-bottom: 10px solid transparent;
  border-top: 10px solid #a53179;
  top: 20px;
}

#nav {
  height: 30px;
  margin-top: 30px;
}
.sale {
  margin-bottom: 30px;
  box-shadow: 4px 1px 20px 5px #6f09cc73;
  position: relative;
  border-left: 2px solid #a53179;
  width: 470px;
  border-radius: 20px;
  background-color: #b938a361;
}
.search {
  margin-bottom: 40px;
}
.sale .userData {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
}
.sale .userData.collapsed {
  max-height: 226px;
  overflow: hidden;
}
.sale .userData .line {
  padding: 4px;
  width: 300px;
  text-align: left;
  padding-left: 10px;
  color: #333;
  font-weight: bold;
}
.sale .userData .line.status {
  color: black;
  margin-bottom: 10px;

}
.line {
  padding: 4px;
  width: 300px;
  text-align: left;
  padding-left: 10px;
  color: #333;
  font-weight: 700;
  display: flex;
  justify-content: center;
}
.line .lineTitle {
  position: relative;
  top: 6px;
  width: 70px;
}

.count {
  min-height: 150px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  margin-top: 40px;
}
.count .row {
  display: flex;
  max-width: 180px;
  width: 170px;
  height: 36px;
  margin-right: 30px;
}
.sale .userData .items {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.sale .userData .items .item {
  display: flex;
  flex: 1 100%;
}
.sale .userData .items .item .row {
  padding: 1px;
  text-align: left;
}

.sale .userData .items .item .row.name {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sale .userData .items .item .row.amount {
  width: 100px;
}
.sale .userData .items .item .row.payment {
  width: 100px;
}
.sale .userData .items .item .row.price {
  width: 100px;
}

.greenBtn {
  height: 30px;
  width: 80px;
  background-color: #a53179;
  border: none;
  color: white;
}
.redBtn {
  height: 30px;
  width: 80px;
  background-color: red;
  border: none;
  color: white;
  margin: 20px;
}

.collapse {
  transform: rotate(90deg);
  font-size: 30px;
  color: #b2b2b2;
  position: absolute;
  cursor: pointer;
  padding: 20px;
  right: 10px;
}

.count .row {
  display: flex;
  border-bottom: 0.5px solid #e2e2e2;
  max-width: 180px;
  margin-bottom: 7px;
}
.count .row .name {
  width: 180px;
  text-align: left;
}

#portal input,
#portal textarea {
  padding: 5px;
  border: none;
  background-color: #f1f1f1;
  margin-right: 2px;
  width: 200px;
}
input#numb{
  color:black;
  max-width: 38px;
}
input.numb{
  color:black;
  max-width: 38px;
}
input#price{
  color:black;
  max-width: 38px;
}
input#amount{
  max-width: 10px;
}
#portal .item input {
  max-width: 38px;
}

@media (max-width: 680px) {
  .sale {
    width: 240px;
  }
  input .text {
    width: 100px;
  }
  .sale .userData .line {
    width: 180px;
  }
  .price,
  .payment {
    display: none;
  }
  #portal input {
    width: 100px;
  }
}
</style>
