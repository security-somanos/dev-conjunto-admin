<template>
  
  <div id="admin">
   <vue-headful title="Mayorista - Productos" description="Administrar productos"/>
    <img style="height:100px;width:100px;margin:20px auto;" src="https://storage.cloud.google.com/el-conjunto.appspot.com/icons/logoconjuro.png" alt="">
    <div id="nav">
      <router-link to="/admin">Productos</router-link>
      <router-link to="/ventas">Pedidos</router-link>
      <router-link to="/totals">Totales</router-link>
      <router-link to="/login" id="logout" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <h1>Admin</h1>

    <div class="addProduct">
      <table>
        <tr>
          <th>Nombre</th>
          <th>Productor</th>
          <th>Cantidad</th>
          <th>Costo May.</th>
          <th>Costo Min.</th>
          <th>Unidad May.</th>
          <th>Unidad Min.</th>
        </tr>
        <tr>
          <td><input id="name" type="text" v-model="name" /></td>
          <td><input id="nameP" type="text" v-model="productor" /></td>
          <td><input class="number" type="text" v-model="cantidad" /></td>
          <td><input class="number" type="text" v-model="priceCost" /></td>
          <td><input class="number" type="text" v-model="priceMin" /></td>
          <td>        
            <select id="unidadM" v-model="unidadM">
              <option disabled value>Unidad Mayorista</option>
              <option value="Kg" >Kg</option>
              <option value="Gr" >Gr</option>
              <option value="Caja" >Caja</option>
              <option value="Cajon" >Cajon</option>
              <option value="Jaula" >Jaula</option>
              <option value="Unidades" >Unidades</option>
            </select>
          </td>
          <td>
            <select id="unidadMin" v-model="unidadMin">
              <option disabled value>Unidad Minorista</option>
              <option value="Kg">Kg</option>
              <option value="Gr">Gr</option>
              <option value="Caja">Caja</option>
              <option value="Cc">Cc</option>
              <option value="Lt">Lt</option>
              <option value="Unidad">Unidad</option>

            </select>
          </td>
        </tr>
        <tr>
          <th>Categoria</th>
          <th>Subcategoria</th>
          <th>Vistas</th>
          <th>Imagen</th>
          <th>Stock </th>
          <th>Activo</th>
          <th>Confirmar</th>
        </tr>
        <tr>
          <td>
            <select id="category" v-model="type">
              <option disabled value>Categoria</option>
              <option value="verdura" >Verdura</option>
              <option value="fruta" >Fruta</option>
              <option value="almacen" >Almacen</option>
              <option value="vinos" >Vinos</option>
              <option value="medicina" >Medicina</option>
              <option value="comida" >Comida</option>
            </select>
          </td>
          <td>
            <select id="category">
              <option disable value="">Seleccionar</option>
              <option value="">Legumbres</option>
              <option value="">Lacteos</option>
              <option value="">Dulces</option>
              <option value="">Panificados</option>
              <option value="">Verdes</option>
              <option value="">Citricos</option>
            </select>
          </td>
          <td>
           <select id="category">
             <option disable value="Todas las paginas"> Seleccionar Pagina</option>
             <option value="">Todas las paginas</option>
             <option value="">Comunitaria</option>
             <option value="">Mayorista</option>
             <option value="">Vrde</option>
           </select>
          </td>
          <td>
            <button @click="$refs.imageSelect.click()">Subir Imagen</button>
          </td>
          <td>
            <input id="stock" type="text" v-model="stock" />
          </td>
          <td>
           <input id="active" type="checkbox" v-model="active" />
          </td>
          <td>
            <button id="addProduct" class="greenBtn" @click="onUpload()">Add</button> 
          </td>
        </tr>
      </table>
      <!-- <div class="productBox">
        <label for="name">Nombre</label>
        <input id="name" type="text" v-model="name" />
      </div>

      <div class="productBox">
        <label for="cantidad">Cantidad Mayorista</label>
        <input id="cantidad" type="text" v-model="cantidad" />
      </div>

      <div class="productBox">
        <label for="nameP">Productor</label>
        <input id="nameP" type="text" v-model="productor" />
      </div>
      
      <div class="productBox">
        <input
          id="image"
          style="display:none"
          type="file"
          ref="imageSelect"
          @change="onFileSelected($event)"
        />
        <button @click="$refs.imageSelect.click()">Subir Imagen</button>
      </div>

      <div class="productBox">
        <select id="category" v-model="type">
          <option disabled value>Categoria</option>
          <option value="verdura" >Verdura</option>
          <option value="fruta" >Fruta</option>
          <option value="almacen" >Almacen</option>
          <option value="vinos" >Vinos</option>
          <option value="medicina" >Medicina</option>
          <option value="comida" >Comida</option>
        </select>
      </div>

      <div class="productBox">
        <select id="unidadM" v-model="unidadM">
          <option disabled value>Unidad Mayorista</option>
          <option value="Kg" >Kg</option>
          <option value="Gr" >Gr</option>
          <option value="Caja" >Caja</option>
          <option value="Cajon" >Cajon</option>
          <option value="Jaula" >Jaula</option>
          <option value="Unidades" >Unidades</option>
        </select>
      </div>

      <div class="productBox">
        <label for="price">Precio Mayorista</label>
        <input id="price" type="text" v-model="price" />
      </div>

      <div class="productBox">
        <label for="price">Precio Costo</label>
        <input id="priceC" type="text" v-model="priceCost" />
      </div>

      <div class="productBox">
        <label for="priceMin">Precio Costo</label>
        <input id="priceMin" type="text" v-model="priceMin" />
      </div>
      
      <div class="productBox">
        <label for="stock">Stock</label>
        <input id="stock" type="text" v-model="stock" />
      </div>

      <div class="productBox">
        <label for="active">Active</label>
        <input id="active" type="checkbox" v-model="active" />
      </div>

      <button id="addProduct" class="greenBtn" @click="onUpload()">Add</button> -->

    </div> 

    <div class="search">
      <div class="reverse">
        <div class="reverseProdType" @click="reverseProdType($event, prodTypeReverse)"></div>
        <select id="prodType" v-model="prodType">
          <option disabled value>Ordenar por</option>
          <option value="name">Nombre</option>
          <option value="productor">Productor</option>
          <option value="stock">Stock</option>
          <option value="type">Categoria</option>
          <option value="active">Active</option>
        </select>

        <input type="Search" v-model="search" placeholder="buscar" />
      </div>
      <div class="hideActive">
        <div class="hideActive">
          <label for="toggleHide">
            <strong>Mostrar desactivados</strong>
          </label>
          <input id="toggleHide" type="checkbox" v-model="toggleHide" />
        </div>
      </div>
    </div>
    <div class="itemBin">
      <div
        class="item"
        v-for="product in orderBy(filteredProducts, prodType, prodTypeReverse)"
        v-bind:key="product['.key']"
        v-bind:class="{ active: product.active, hidden: !toggleHide }"
      >
        <div class="static" v-if="!product.edit">
          <img class="productImage" :src="product.image" alt />
          <div class="box product">{{product.name}}</div>
          <div class="box product">{{product.productor}}</div>
          <div class="box product">{{product.cantidad}}</div>
          <div class="box category">Cat: {{product.type}}</div>
          <div class="box category">Medida Mayorista: {{product.unidadM}}</div>
          <div class="box category">Medida Minorista: {{product.unidadMin}}</div>
          <div class="box price">Precio Mayorista: ${{product.price}}</div>
          <div class="box price">Precio Minorista: ${{product.priceMin}}</div>
          <div class="box price">Precio Costo: ${{product.priceCost}}</div>
          <div class="box stock">Stock: {{product.stock}}</div>
          <button class="greenBtn" @click="setEditName(product.name, product['.key'])">Edit</button>
        </div>
        <div class="edit" v-else>
          <div class="element">
            <label for="name">Name</label>
            <input id="name" type="text" v-model="product.name" />
          </div>
          <div class="element">
            <label for="nameP">Productor</label>
            <input id="nameP" type="text" v-model="product.productor" />
          </div>
          <div class="element">
            <label for="cantidad">Cantidad Mayorista</label>
            <input id="cantidad" type="text" v-model="product.cantidad" />
          </div>
          <div class="element">
            <label for="image">Image Url</label>
            <input id="image" type="text" v-model="product.image" />
          </div>
          <div class="element">
            <label for="category">Categoria</label>
            <select v-model="product.type">
              <option disabled value>Categoria</option>
              <option>verdura</option>
              <option>fruta</option>
              <option>almacen</option>
              <option>vinos</option>
              <option>medicina</option>
              <option>comida</option>
            </select>
          </div>          
          <div class="element">
            <label for="category">Uni/Mayorista</label>
            <select v-model="product.unidadM">
              <option disabled value>Unidades</option>
              <option>Kg</option>
              <option>Gr</option>
              <option>Caja</option>
              <option>Cajon</option>
              <option>Jaula</option>
              <option>Unidades</option>
            </select>
          </div>      
          <div class="element">
            <label for="category">Uni/Minorista</label>
            <select v-model="product.unidadMin">
              <option disabled value>Unidades</option>
              <option>Kg</option>
              <option>Gr</option>
              <option>Caja</option>
              <option>Cc</option>
              <option>Lt</option>
              <option>Unidad</option>
            </select>
          </div>
          <div class="element">
            <label for="price">Precio Mayorista</label>
            <input id="price" type="text" v-model="product.price" />
          </div>
          <div class="element">
            <label for="priceM">Precio Minorista</label>
            <input id="priceM" type="text" v-model="product.priceMin" />
          </div>
         <div class="element">
            <label for="priceP">Precio Costo</label>
            <input id="priceP" type="text" v-model="product.priceCost" />
          </div>
          <div class="element">
            <label for="stock">Stock</label>
            <input id="stock" type="text" v-model="product.stock" />
          </div>
          <div class="element">
            <label for="active">Active</label>
            <input id="active" type="checkbox" v-model="product.active" />
          </div>
          <button class="greenBtn" @click="saveEdit(product)">Save</button>
          <div>
            <vue-confirmation-button
              class="rdBtn"
              :messages="customMessages"
              v-on:confirmation-success="removeProductName(product['.key'])"
            ></vue-confirmation-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import Vue2Filters from "vue2-filters";
import axios from "axios";
import vueConfirmationButton from "vue-confirmation-button";
const productsRef = db.ref("products/mayorista");

export default {
  data() {
    return {
      search: "",
      name: "",
      unidadM: "",
      unidadMin: "",
      productor: "",
      cantidad: 0,
      edit: false,
      image: "",
      type: "",
      price: 0,
      priceCost: 0,
      priceMin: 0,
      stock: 0,
      active: true,
      customMessages: ["Borrar", "Estas seguro?","Exito"],
      selectedFile: null,
      products: [],
      toggleHide: true,
      prodType: "name",
      prodTypeReverse: 1,
      productEditName: ""
    };
  },
  components: {
    "vue-confirmation-button": vueConfirmationButton,
  },
  firebase: {
    products: productsRef
  },
  mixins: [Vue2Filters.mixin],
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const fd = new FormData();
      this.image =
        "https://storage.cloud.google.com/el-conjunto.appspot.com/" +
        this.selectedFile.name;
      fd.append("image", this.selectedFile, this.selectedFile.name);
      axios
        .post(
          "https://us-central1-el-conjunto.cloudfunctions.net/uploadFile",
          fd
        )
        .then(res => {
          this.submitProduct();
        });
    },
    submitProduct() {
      productsRef.push({
        search: "",
        name: this.name,
        cantidad: this.cantidad,
        unidadM: this.unidadM,
        unidadMin: this.unidadMin,
        edit: false,
        image: this.image,
        type: this.type,
        productor: this.productor,
        price: this.price,
        priceCost: this.priceCost,
        priceMin: this.priceMin,
        stock: this.stock,
        active: this.active,
        amount: 0
      });
      this.name = "";
      this.cantidad= "";
      this.unidadM= "";
      this.image = "";
      this.type = "";
      this.price = "";
      this.priceCost = "";
      this.productor = "";
      this.stock = 0;
      this.active = false;
    },
    setProdType(type) {
      this.prodType = type;
    },
    reverseProdType(event, toggle) {
      event.target.classList.toggle("collapsed");
      if (toggle == 1) {
        this.prodTypeReverse = -1;
      }
      if (toggle == -1) {
        this.prodTypeReverse = 1;
      }
    },
    removeProductName(key) {
      productsRef.child(key).remove();
    },
    setEditName(name, key) {
      productsRef.child(key).update({ edit: true });
      this.productEditName = name;
    },
    cancelEdit(key) {
      productsRef.child(key).update({ edit: false });
      this.productEditName = "";
    },
    saveEdit(product) {
      const key = product[".key"];
      productsRef.child(key).set({
        name: product.name,
        cantidad: product.cantidad,
        edit: false,
        unidadM: product.unidadM,
        unidadMin: product.unidadMin,
        image: product.image,
        type: product.type,
        price: product.price,
        priceCost: product.priceCost,
        stock: product.stock,
        productor: product.productor,
        active: product.active,
        amount: 0
      });
    }
  },
  computed: {
    filteredProducts() {
      var self = this;
      return self.products.filter(
        product => product.name && product.name.toLowerCase().indexOf(self.search) !== -1 
      );  
    }
  }
};
</script>

<style scoped>
#app {
  font-family: sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1080px;
  margin: 0 auto;
}
#nav {
  height: 30px;
  margin-top: 30px;
}
#logout {
  background-color: #cc3838;
}
input {
  padding: 5px;
}
input#price,input#priceC,input#cantidad,
input#stock {
  padding: 5px;
  width: 40px;
}
input.number{
  padding: 5px;
  width: 40px;
}
select {
  height: 29px;
  padding: 0px 10px;
  margin: 0 10px;
}
.productBox button,
.productBox select {
  height: 30px;
  position: relative;
  top: 10px;
}

.reverse {
  display: flex;
  align-items: center;
}

.reverse .reverseProdType {
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid #a53179;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.reverse .reverseProdType {
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid #a53179;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.reverse .reverseProdType.collapsed {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid #a53179;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

#category {
  margin-left: 20px;
}

.search {
  height: 20px;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;
}

.search label {
  padding-right: 15px;
}

#toggleHide {
  position: relative;
  top: 2px;
  right: 8px;
}

.productImage {
  height: 50px;
  width: 60px;
  position: relative;
  right: 26px;
}
.addProduct {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #a531797a;
  margin-bottom: 20px;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.16);
  padding: 20px 10px;
  border-left: 2px solid #a53179;
  flex-wrap: wrap  ;
  min-width: 966px;
}
.addProduct .productBox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.addProduct .productBox label {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 5px;
}

.item {
  margin-bottom: 10px;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.16);
  padding: 0px;
  background-color: #d8d8d8;
  color: #999;
  padding-left: 10px;
}

.item.hidden {
  display: none;
}
.item.active {
  padding-left: 10px;
  background-color: white;
  color: #444;
  display: block;
}
.item .static {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item .static .box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
}
.item .static .box.product {
  width: 350px;
  padding-right: 0px;
  position: relative;
  right: 20px;
}
.item .static .box.url {
  width: 200px;
}
.item .static .box.price {
  width: 80px;
}
.item .static .box.status {
  width: 90px;
}
.item .static .box.category {
  width: 120px;
}
.edit {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  padding-left: 0px;
  flex-wrap: wrap;
}
.edit .element {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
.edit .element label {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 5px;
}

.greenBtn {
  height: 30px;
  width: 80px;
  background-color: #a53179;
  border: none;
  color: white;
  position: relative;
  left: 2px;
}
.redBtn {
  height: 30px;
  width: 80px;
  background-color: #fe5046;
  border: none;
  color: white;
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
}
@media (max-width: 680px) {
  #app {
    font-family: sans-serif;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    max-width: 1080px;
    margin: 0 auto;
  }
  .productImage {
    height: 140px;
    width: auto;
    max-width:249px;
    position: relative;
    right: 0px;
  }
  .confirmation__button {
    background: #cf2218;
    font-weight: 700;
    color: #ffffff;
    border-radius: 50px;
    height: 30px;
    min-width: 70px;
    outline: 0;
    cursor: pointer;
    text-transform: capitalize;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: background 0.3s ease-in, min-width 0.1s linear,
      box-shadow 0.2s ease-in;
  }
  #nav {
    height: 30px;
    margin-top: 30px;
  }

  #prodType {
    margin-left: 20px;
  }

  input {
    padding: 5px;
  }
  input#price,input#priceC,
  input#stock {
    padding: 5px;
    width: 40px;
  }
  select {
    height: 29px;
    padding: 0px 10px;
  }

  .reverse {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 80px;
  }

  .reverse .reverseProdType {
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid #a53179;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  .reverse .reverseProdType {
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid #a53179;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  .reverse .reverseProdType.collapsed {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid #a53179;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  #category ,  #unidadM{
    margin-left: 20px;
    position: relative;
    top: 10px;
  }

  .search {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    margin-bottom: 10px;
    padding: 0 30px;
  }

  .search label {
    padding-right: 15px;
  }

  #toggleHide {
    position: relative;
    top: 2px;
    right: 8px;
  }

  .addProduct {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    background-color: #fff;
    margin-bottom: 20px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.16);
    padding: 20px 10px;
  }
  .addProduct .productBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom:20px;
  }
  .addProduct .productBox label {
    font-family: sans-serif;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 5px;
  }

  #admin.itemBin {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    flex-wrap: wrap;
  }

  .itemBin .item {
    margin-bottom: 10px;
    box-shadow: 0 5px 23px rgba(0, 0, 0, 0.16);
    padding: 0px;
    max-width: 250px;
    border-radius: 10px;
    display: block;
    min-width: 250px;
    background-color: #d4d4d4;
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .item.hidden {
    display: none !important;
  }
  .item .static {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    max-width:230px;
  }
  .item.active {
    background-color: white;
    color: #444;
    display: flex !important;
  }
  .item .edit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;
  }
  .item .static .box {
    margin: 4px;
    text-align: center;
  }
  .item .static .box.product {
    margin-top: 10px;
    padding: 0 20px;
    line-height: 21px;
    width: 180px;
    position: relative;
    left:0px;
    font-weight:bold
  }
  .item .static .box.url {
    width: 200px;
  }
  .item .static .box.price {
    width: 90px;
  }
  .item .static .box.stock {
    width: 90px;
    position: relative;
    left: 6px;
  }
  .item .static .box.status {
    width: 90px;
  }
  .item .static .box.category {
    width: 80px;
  }
  .edit {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    padding-left: 0px;
  }
  .edit .element {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding-bottom: 10px;
  }
  .edit .element label {
    font-family: sans-serif;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .greenBtn {
    height: 30px;
    width: 60px;
    margin: 0 20px;
    background-color: #a53179;
    border: none;
    color: white;
    position: relative;
    right: 5px;
  }
  .redBtn {
    height: 30px;
    width: 80px;
    background-color: #fe5046;
    border: none;
    color: white;
  }
  .addProduct {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    background-color: #fff;
    margin-bottom: 20px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.16);
    padding: 20px 10px;
    border-left: 2px solid #a53179;
  }
}
</style>



