<template>
  <div id="portal">
    <vue-headful title="Mayorista - Pedidos" description="Ver todos los pedidos"/>
    <div class="header">
        <img class="logo"
        src="https://storage.cloud.google.com/el-conjunto.appspot.com/icons/logoconjuro.png" alt=""/>
      <div class="navButtons">
        <router-link to="/admin">Productos</router-link>
        <router-link to="/ventas">Pedidos mayoristas</router-link>
        <router-link to="/ventasminoristas">Pedidos minoristas</router-link>
        <router-link to="/totals">Totales</router-link>
        <router-link to="/login" id="logout" v-on:click.native="logout()" replace>Logout</router-link>
      </div>
      <div class="navText">
      <p>Total Ventas : ${{salesTotalCount}}</p>
      <p>Total Costo : ${{totalCost}}</p>
      <p>Total Cantidades : {{totalAmount}}</p>
      </div>
    </div>
    <div class="search">
      <input type="text" v-model="search" placeholder="Buscar"/>
      <button style="margin-bottom:20px;" @click="scrollBottom">Ver ultimo</button>
    </div>

    <div class="sale" v-for="sale in filterBy(sales, search)" v-bind:key="sale['.key']">
      <div class="userData" @click="toggleCollapse($event)"><div>
    <b-card-group deck>
      <b-card bg-variant="light">
        <div class="line status" >
           <input type="radio" id="Pendiente" value="pendiente" v-model="sale[0].status"
            @change="updateUserInfo($event, sale['.key'], '0/status')">
           <label for="Pendiente">Pendiente</label>
           <input type="radio" id="Entregado" value="entregado" v-model="sale[0].status"
            @change="updateUserInfo($event, sale['.key'], '0/status')">
           <label for="Entregado">Entregado</label>
          </div>
          <b-form-group
            label-cols-sm="3"
            label="Fecha:"
            label-align-sm="right"
            label-for="nested-date">
            <b-form-input id="nested-date" type="text"
              v-model="sale[0].date"
              @change="updateUserInfo($event, sale['.key'], '0/date')"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Nombre:"
            label-align-sm="right"
            label-for="nested-name">
            <b-form-input id="nested-name" type="text"
              v-model="sale[0].name"
              @change="updateUserInfo($event, sale['.key'], '0/name')"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Dirección:"
            label-align-sm="right"
            label-for="nested-address">
            <b-form-input id="nested-direccion"
              type="text"
              v-model="sale[0].address"
              @change="updateUserInfo($event, sale['.key'], '0/address')"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Localidad:"
            label-align-sm="right"
            label-for="nested-localidad">
            <b-form-input id="nested-localidad"
              type="text"
              v-model="sale[0].localidad"
              @change="updateUserInfo($event, sale['.key'], '0/localidad')"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Cel:"
            label-align-sm="right"
            label-for="nested-cel">
            <b-form-input id="nested-cel"
              type="text"
              v-model="sale[0].phone"
              @change="updateUserInfo($event, sale['.key'], '0/phone')"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="3"
            label="Nodo:"
            label-align-sm="right"
            label-for="nested-nodo">
            <b-form-input id="nested-nodo"
              type="text"
              v-model="sale[0].email"
              @change="updateUserInfo($event, sale['.key'], '0/email')"></b-form-input>
          </b-form-group>
      </b-card>
      <b-card bg-variant="light">
        <b-form-group
          label-cols-sm="3"
          label="Total Venta:"
          label-align-sm="right"
          label-for="nested-totalventa">
          <b-form-input id="nested-totalventa"
            type="text"
            v-model="sale[0].total"
            @change="updateUserInfo($event, sale['.key'], '0/total')"></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label="Total Cantidad:"
          label-align-sm="right"
          label-for="nested-cantidad">
          <b-form-input id="nested-cantidad"
            type="text"
            v-model="sale[0].totalCantidad"
            @change="updateUserInfo($event, sale['.key'], '0/totalCantidad')"></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label="Total Costo:"
          label-align-sm="right"
          label-for="nested-totalcosto">
          <b-form-input id="nested-totalcosto"
            type="text"
            v-model="sale[0].totalCosto"
            @change="updateUserInfo($event, sale['.key'], '0/totalCosto')"></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label="Total Venta:"
          label-align-sm="right"
          label-for="nested-totalventa">
          <b-form-input id="nested-totalventa"
            type="text"
            v-model="sale[0].pago"
            @change="updateUserInfo($event, sale['.key'], '0/pago')"></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label="Notas:"
          label-align-sm="right"
          label-for="textarea-notas">
          <b-form-textarea
             id="textarea-notas"
             v-model="sale[0].preference"
             @change="updateUserInfo($event, sale['.key'], '0/preference')"
             placeholder="No hay comentarios del cliente."
             rows="3"
             max-rows="8"
             no-auto-shrink></b-form-textarea>
        </b-form-group>
      </b-card>
    </b-card-group>
</div>
      <table id="pedido">
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio Venta</th>
          <th>Subtotal Venta</th>
          <th>Costo</th>
          <th>Subtotal Costo</th>
        </tr>
        <tr v-for="(item, index) in sale [0].items" v-bind:key="index" v-bind:style="item.cantidad==0?'color:red':''">
          <td> {{item.variedad}} </td>
          <td>
            <input type="text" id="amount" v-model="item.cantidad"
                @change="updateItems($event, sale['.key'], index, 'cantidad', item, sale[0])"/>
          </td>
          <td>
            <input type="text" class="numb" v-model="item.precioMay" disabled
              @change="updateItems($event, sale['.key'], index, 'precioMay', item, sale[0])"/>
          </td>
          <td>
            <input type="text" class="numb" v-model="item.pago" disabled
              @change="updateItems($event, sale['.key'], index, 'pago', item, sale[0])"/>
          </td>
          <td>
            <input type="text" class="numb" v-model="item.precioCosto" disabled
              @change="updateItems($event, sale['.key'], index, 'precioCosto', item, sale[0])"/>
          </td>
          <td>
            <input type="text" class="numb" v-model="item.subTotalCosto" disabled
              @change="updateItems($event, sale['.key'], index, 'subTotalCosto', item, sale[0])"/>
          </td>
        </tr>
      </table>
        <vue-confirmation-button
          class="rdBtn" ref="confirmationButton"
          :messages="customMessages" v-on:confirmation-success="removeSale(sale['.key'])">
        </vue-confirmation-button>
        <button style="margin-bottom:40px;" @click="scrollTop">Volver</button>
    </div>
  </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import Vue2Filters from "vue2-filters";
import VueConfirmationButton from "vue-confirmation-button";
const salesRef = db.ref("sales/minorista");

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
      var precioc = "0/items/" + index + "/subTotalCosto";

      if (name == "cantidad") {
        item.pago = item.precioMay * item.cantidad;
        item.subTotalCosto = item.precioCosto * item.cantidad;
      }

      var totalCantidad = 0;
      var saleTotal = 0;
      var totalCosto = 0;

      for (var i in sale.items) {
        saleTotal += parseInt(sale.items[i].pago);
        totalCantidad += parseInt(sale.items[i].cantidad)
        totalCosto += parseInt(sale.items[i].subTotalCosto)
      }
      let updateObject = {
        "0/total": saleTotal,
        "0/totalCantidad": totalCantidad,
        "0/totalCosto": totalCosto,

        [precioc]: item.subTotalCosto,
        [p]: item.pago,
        [n]: event.target.value,
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
      self.totalCost = 0;
      for (var i in s) {
        // Create items local.
        var items = s[i][0].items;
        for (var o in items) {
          var name = items[o].variedad.toString();
          self.totalSales += parseInt(items[o].pago);
          self.totalCost += (items[o].subTotalCosto > 0) ? parseInt(items[o].subTotalCosto):0;
          self.totalAmount += parseInt(items[o].cantidad);
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
  }
};
</script>

<style scoped>
.header{
  border-radius: 10px;
  width: 86%;
}
.header .logo{
  margin-bottom: 24px;
}
.navText{
  font-size: 20px;
  font-weight: bolder;
  margin-top: 20px;
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
  box-shadow: 4px 1px 20px 5px #8eb4f6;
  position: relative;
  border-left: 2px solid #5b64b4;

  border-radius: 20px;
  background-color: #8eb4f6;
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
#textarea{
  width: 400px;
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
input.numb{
  color:black;
  max-width: 50px;
  min-width: 50px;
}
input#price{
  color:black;
  max-width: 38px;
}
input#amount{
  max-width: 32px;
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
