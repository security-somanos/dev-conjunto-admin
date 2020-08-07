<template>
  <div id="portal">
   <vue-headful title="Mayorista - Totales" description="Todos los pedidos"/>
    <img style="height:100px;margin:0 auto;margin-bottom:20px;" src="https://storage.cloud.google.com/el-conjunto.appspot.com/icons/logoconjuro.png" alt="">
    <div id="nav">
      <router-link to="/admin">Productos</router-link>
      <router-link to="/ventas">Pedidos</router-link>
      <router-link to="/totals">Totales</router-link>
      <router-link to="/login" id="logout" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <h1>Total</h1>
    <select id="category" v-model="salesType">
      <option value="type">Nombre</option>
      <option value="amount">Cantidad</option>
    </select>
    <div class="count">
      <div
        class="row"
        v-for="item in orderBy(salesTotalCount, salesType)"
        v-bind:key="item['.key']"
      >
        <div class="name">{{item.name}}</div>
        <div class="amount">{{item.amount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import Vue2Filters from "vue2-filters";
const salesRef = db.ref("sales/mayorista");

export default {
  data() {
    return {
      sales: [],
      totalSales: 0,
      pago: "",
      salesType: "amount",
      search:null,
    };
  },
  firebase: {
    sales: salesRef
  },
  mixins: [Vue2Filters.mixin],
  methods: {},
  computed: {
    salesTotalCount: function() {
      var self = this;
      var s = self.sales;
      var c = {};
      self.totalSales = 0;
      for (var i in s) {
        var items = s[i][0].items;
        for (var o in items) {
          var name = items[o].variedad.toString();
          self.totalSales += parseInt(items[o].pago);
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
      return this.count;
    }
  }
};
</script>

<style scoped>
#nav {
  height: 30px;
  margin-top: 30px;
}
.sale {
  margin-bottom: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
  position: relative;
  border-left: 2px solid #41b883;
  width: 470px;
}
.sale .userData {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
}
.sale .userData.collapsed {
  max-height: 258px;
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
  width: 350px;
  height: 36px;
  margin-right: 30px;
  justify-content: space-between;
}
.sale .userData:after {
  content: "";
  display: block;
  position: absolute;
  right: 30px;
  top: 20px;
  width: 0;
  height: 0;
  border-bottom: 10px solid #41b883;
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
.sale .userData.collapsed:after {
  content: "";
  display: block;
  position: absolute;
  right: 30px;
  top: 20px;
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid #41b883;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
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
  padding: 4px;
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
  background-color: #41b883;
  border: none;
  color: white;
}
.redBtn {
  height: 30px;
  width: 80px;
  background-color: #41b883;
  border: none;
  color: white;
  position: absolute;
  right: 42px;
  top: 224px;
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
  margin-bottom: 7px;
}
.count .row .name {
  text-align: left;
}

#portal input {
  padding: 5px;
  border: none;
  background-color: #f1f1f1;
  margin-right: 2px;
  width: 200px;
}

#portal .item input {
  max-width: 70px;
}
</style>
