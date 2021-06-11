<template>
  <div id="admin">
    <vue-headful title="Mayorista - Productos" description="Administrar productos"/>
    <img style="height:100px;width:100px;margin:20px auto;"
     src="https://storage.cloud.google.com/el-conjunto.appspot.com/icons/logoconjuro.png" alt="">
    <div id="nav">
     <router-link to="/admin">Productos</router-link>
     <router-link to="/ventas">Pedidos mayoristas</router-link>
     <router-link to="/ventasminoristas">Pedidos minoristas</router-link>
     <router-link to="/totals">Totales</router-link>
     <router-link to="/historiales">HIst</router-link>
     <router-link to="/login" id="logout" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <h1>Admin</h1>
    <div class="addProduct">
      <table >
        <tr>
          <th>Nombre</th>
          <th>Productor</th>
          <th>Imagen</th>
          <th>Costo May.</th>
          <th>Unidad May.</th>
          <th>Activo</th>
        </tr>
        <tr>
          <td>
            <input id="name" type="text" v-model="name"/>
          </td>
          <td>
            <input id="nameP" type="text" v-model="productor"/>
          </td>
          <td>
            <input id="image" style="display:none" type="file"
              ref="imageSelect" @change="onFileSelected($event)"/>
            <button @click="$refs.imageSelect.click()">Subir Imagen</button>
          </td>
          <td>
            <input class="number" type="text" v-model="priceCosto"/>
          </td>
          <td>
            <select class="unidad" v-model="unidadM">
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
           <input id="active" type="checkbox" v-model="active"/>
          </td>
        </tr>
        <tr>
          <th>Categoria</th>
          <th>Subcategoria</th>
          <th>Vistas</th>
          <th>Cant. May.</th>
          <th>Stock Campo </th>
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
            <select id="subcategory" v-model="subtype">
              <option disable value="">Seleccionar</option>
              <option value="Legumbres">Legumbres</option>
              <option value="Lácteos">Lacteos</option>
              <option value="Dulces">Dulces</option>
              <option value="Panificados">Panificados</option>
              <option value="Verdes">Verdes</option>
              <option value="Cítricos">Citricos</option>
            </select>
          </td>
          <td>
           <select id="category" v-model="view">
             <option  value="Todas">Todas las paginas</option>
             <option value="Comunitaria">Comunitaria</option>
             <option value="Mayorista">Mayorista</option>
             <option value="Vrde">Vrde</option>
           </select>
          </td>
          <td>
            <input class="number" type="text" v-model="cantidad"/>
          </td>
          <td>
            <input id="stock" type="text" v-model="stock"/>
          </td>
          <td>
            <button id="addProduct" class="greenBtn" @click="onUpload()">Add</button>
          </td>
        </tr>
        <tr>
          <th>Venta Mayorista</th>
          <th>Venta Minorista</th>
        </tr>
          <tr>
            <td><input class="number" type="text" v-model="priceMay" /></td>
            <td><input class="number" type="text" v-model="priceMin" /></td>
          </tr>
        <tr>
          
        </tr>
        <tr></tr>
      </table>
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
        <h4> >> Agregar Costo productos al nuevo campo.</h4>
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
    <table class="staticProd" >
      <tr>
        <th>Foto</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Proveedor</th>
        <th>Cantidad May.</th>
        <th>Costo</th>
        <th>Categoria</th>
        <th>Subcategoria</th>
        <th>Venta May.</th>
        <th>Venta Min.</th>
        <th>Active</th>
        <th>Editar</th>
        
      </tr>
      <tr v-for="product in orderBy(filteredProducts, prodType, prodTypeReverse)"
          v-bind:key="product['.key']"
          v-bind:style="product.stock==0?'color:red':''"
          v-bind:class="{ editing: product.edit, active: product.active, hidden: !toggleHide,}">
        <td>
          <div v-if="product.image != '' " >
            <img class="productImage" :src="product.image" alt=''/>
            <button style="margin-left: 20px;" @click="deleteImage(product['.key'])">Borrar imagen</button>
          </div>
          <div v-else>
          <input id="image" style="display" type="file"
              ref="imageSelect2" @change="onFileSelected2($event, product['.key'])"/>
            <!--<button @click="$refs.imageSelect2.click()">Subir Imagen</button>-->
            </div>
        </td>
        <td>
          <div class="view">{{product.name}}</div>
          <div class="edit">
            <input id="name" type="text" v-model="product.name"/>
          </div>
        </td>
        <td>
          <div class="view">
            {{product.stock}}
          </div>
          <div class="edit">
            Vistas
           <select id="category" v-model="product.view">
             <option value="Todas">Todas las paginas</option>
             <option value="Comunitaria">Comunitaria</option>
             <option value="Mayorista">Mayorista</option>
             <option value="Vrde">Vrde</option>
           </select>
              Stock
            <input id="stock" type="text" v-model="product.stock"/>
          </div>
        </td>
        <td>
          <div class="view">
            {{product.productor}}
          </div>
          <div class="edit">
            <input id="nameP" type="text" v-model="product.productor"/>
          </div>
        </td>
        <td>
          <div class="view">
            {{product.cantidad}}{{product.unidadM}}
          </div>
          <div class="edit">
            <input class="number" type="text" v-model="product.cantidad"/>
            <select class="unidad" v-model="product.unidadM">
              <option disabled value>Unidad Mayorista</option>
              <option value="Kg" >Kg</option>
              <option value="Gr" >Gr</option>
              <option value="Caja" >Caja</option>
              <option value="Cajon" >Cajon</option>
              <option value="Jaula" >Jaula</option>
              <option value="Unidades" >Unidades</option>
            </select>
          </div>
        </td>
        <td>
          <div class="view">
            ${{product.priceCosto}}
          </div>
          <div class="edit">
            <input class="number" type="text" v-model="product.priceCosto"/>
          </div>
        </td>
        <td>
          <div class="view">
            {{product.type}}
          </div>
          <div class="edit">
            <select id="category" v-model="product.type">
              <option disabled value>Categoria</option>
              <option value="verdura" >Verdura</option>
              <option value="fruta" >Fruta</option>
              <option value="almacen" >Almacen</option>
              <option value="vinos" >Vinos</option>
              <option value="medicina" >Medicina</option>
              <option value="comida" >Comida</option>
            </select>
          </div>
        </td>
        <td>
          <div class="view">
            {{product.subtype}}
          </div>
          <div class="edit">
            <select id="subcategory" v-model="product.subtype">
              <option disable value="">Seleccionar</option>
              <option value="Legumbres">Legumbres</option>
              <option value="Lácteos">Lacteos</option>
              <option value="Dulces">Dulces</option>
              <option value="Panificados">Panificados</option>
              <option value="Verdes">Verdes</option>
              <option value="Cítricos">Citricos</option>
            </select>
          </div>
        </td>
        <td>
          <div class="view">
            ${{product.priceMay}}
          </div>
          <div class="edit">
            <input class="number" type="text" v-model="product.priceMay"/>
          </div>
        </td>
        <td>
          <div class="view">
            ${{product.priceMin}}
          </div>
          <div class="edit">
            <input class="number" type="text" v-model="product.priceMin"/>
          </div>
        </td>
        <td>
          <div class="view">
            <input type="checkbox" v-model="product.active" disabled/>
          </div>
          <div class="edit">
            <input type="checkbox" v-model="product.active" />
          </div>
        </td>
        <td>
          <div class="view">
          <button class="roundBtn" @click="setEditName(product.name, product['.key'])">Edit</button>
          </div>
          <div class="edit">
          <button class="greenBtn" @click="saveEdit(product)">Save</button>
          <vue-confirmation-button
            class="rdBtn"
            :messages="customMessages"
            v-on:confirmation-success="removeProductName(product['.key'])">
          </vue-confirmation-button>
          </div>
        </td>

      </tr>
    </table>
  </div>
</template>

<script >
import { db } from "../firebase";
import { cloudStorage } from "../firebase";
import Vue2Filters from "vue2-filters";
import axios from "axios";
import vueConfirmationButton from "vue-confirmation-button";
const productsRef = db.ref("products");
const storageRef = cloudStorage.ref();

export default {
  data() {
    return {
      search: "",
      name: "",
      view: "Todas",
      unidadM: "",
      unidadMin: "",
      productor: "",
      cantidad: 0,
      edit: false,
      image: "",
      type: "",
      subtype: "",
      priceCosto: 0,
      priceMin: 0,
      priceMay: 0,
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
    products: productsRef,
	images: storageRef
  },
  mixins: [Vue2Filters.mixin],
  methods: {
    async updateImage(){
      debugger;
      var retUrl = "";
      storageRef.child("imagenes/" + this.selectedFile.name).put(this.selectedFile).then((snapshot) => {
		  console.log('Imagen cargada');
      storageRef.child("imagenes/" + this.selectedFile.name).getDownloadURL().then((url) => {
        console.log("URL: " + url);
        this.image = url;
        retUrl = url;
      });
		}); 
    return retUrl;
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      
    },
    async onFileSelected2(event, key) {
      console.log(key);
      this.selectedFile = event.target.files[0];

      storageRef.child("imagenes/" + this.selectedFile.name).put(this.selectedFile).then((snapshot) => {
		  console.log('Imagen cargada');
        storageRef.child("imagenes/" + this.selectedFile.name).getDownloadURL().then((url) => {
          productsRef.child(key).update({
            image: url
          });
        });
      });
    },
    deleteImage(key) {
      productsRef.child(key).update({
        image: ""
      });
    },
    onUpload() {
	  debugger;
	  storageRef.child("imagenes/" + this.selectedFile.name).put(this.selectedFile).then((snapshot) => {
		  console.log('Imagen cargada');
      storageRef.child("imagenes/" + this.selectedFile.name).getDownloadURL().then((url) => {
        console.log("URL: " + url);
        this.image = url;
        this.submitProduct();
      });
		});
	  return;
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
        edit: false,
        image: this.image,
        view: this.view,
        type: this.type,
        subtype: this.subtype,
        productor: this.productor,
        priceCosto: this.priceCosto,
        priceMay: this.priceMay,
        priceMin: this.priceMin,
        stock: this.stock,
        active: this.active,
        amount: 0
      });
      this.name = "";
      this.view = "";
      this.cantidad = "";
      this.unidadM = "";
      this.image = "";
      this.type = "";
      this.subtype = "";
      this.priceCosto = "";
      this.priceMay = "";
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
      //this.productEditName = name;
    },
    cancelEdit(key) {
      productsRef.child(key).update({ edit: false });
      //this.productEditName = "";
    },
    saveEdit(product) {
      const key = product[".key"];
      productsRef.child(key).set({
        name: product.name,
        cantidad: product.cantidad,
        edit: false,
        view: product.view,
        unidadM: product.unidadM,
        image: product.image,
        type: product.type,
        subtype: product.subtype,
        priceMay: product.priceMay,
        priceMin: product.priceMin,
        priceCosto: product.priceCosto,
        stock: product.stock,
        productor: product.productor,
        active: product.active,
        amount: 0
      });
      //this.productEditName = "";
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

[v-cloak] {
      display: none;
    }
    .edit {
      display: none;
    }
    .editing .edit {
      display: block
    }
    .editing .view {
      display: none;
    }

#app {
  font-family: sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1080px;
}
#nav {
  height: 30px;
  margin-top: 30px;
}
#logout {
  background-color: #cc3838;
}
th {
    padding: 2px;
  }
td {
  padding: 2px;
  overflow: hidden;
}
.staticProd tr:nth-child(even),
.editProd tr:nth-child(even) {
  background-color: #e4e4e4cf;
  }


.productBox button,
.productBox select {
  height: 30px;
  position: relative;
  top: 10px;
}
select.unidad{
 height: 25px;
 padding: 0px;
 width: 80px;
}

.reverse {
  display: flex;
  align-items: center;
}

.reverse .reverseProdType {
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid #8eb4f6;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.reverse .reverseProdType {
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid #8eb4f6;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.reverse .reverseProdType.collapsed {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid #8eb4f6;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

#category {
  color:black;
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
  margin: 0px -20px 0px -20px;
}
.addProduct {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #8eb4f6;
  margin-bottom: 20px;
  box-shadow: 0 11px 22px rgb(0 0 23);
  padding: 20px 10px;
  border-left: 2px solid #8eb4f6;
  flex-wrap: wrap  ;
  min-width: 966px;
  border-radius: 18px;
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
/* .edit {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  padding-left: 0px;
  flex-wrap: wrap;
} */
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
  height: 34px;
  width: 66px;
  background-color: #5b64b4;
  border: none;
  color: white;
  position: relative;
  left: 2px;
  border: none;
  border-radius: 21px;
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
@media (max-width: 350px) {
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
    #prodType {
    margin-left: 20px;
  }

    input {
  padding: 5px;
  margin: 10px 5px 10px 5px;
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
  height: 27px;
  padding: 0px 10px;
  margin: 10px 5px 10px 5px;
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

  select {
    height: 29px;
    padding: 0px 0px 10px 2px;
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

  .roundBtn {
    background-color: #a53179;
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



