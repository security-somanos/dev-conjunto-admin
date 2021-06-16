<template>
  <div id="login">
    <vue-headful title="Ingreso Back" description="Ingreso"/>
    <img style="height:100px;margin:0 auto;margin-bottom:20px;" src="https://storage.cloud.google.com/el-conjunto.appspot.com/icons/logoconjuro.png" alt="">
    <h1>Admin Mayorista</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username"/>
    <br/>
    <input type="password" name="password" v-model="input.password" placeholder="Password"/>
    <br/>
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.push({ path: "admin" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 500px;
  background-color: #ffffff;
  margin: auto;
  margin-top: 50px;
  padding: 20px;
}
input {
    margin-bottom:10px;
}
button {
  width: 171px;
  height: 30px;
  margin-bottom: 10px;
}
</style>
