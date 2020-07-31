<template>
  <div id="app">
    <HomeNavigation></HomeNavigation>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>

import Navigation from '@/components/Navigation'
import HomeNavigation from '@/components/HomeNavigation'

export default {
  name: 'App',
  components: {
    'Navigation': Navigation,
    'HomeNavigation': HomeNavigation
  },  
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "mayorista",
        password: "puerro",
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
      this.$router.push({ path: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style>
html,
body {
  font-family: "Ubuntu", sans-serif;
  color: #333;
}
.nav {
  height: 30px;
  margin-top: 30px;
}
#logout {
  background-color: #cc3838;
}
#app {
  font-size: 14px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1080px;
  margin: 0 auto;
}
#portal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
}

input {
  padding: 5px;
}
select {
  height: 29px;
  padding: 0px 10px;
}

button {
  font-weight: bold;
}
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  padding: 10px 20px;
  margin: 0px 5px;
  text-decoration: none;
  font-weight: bold;
  background-color: #a53179;
  color: white;
  font-size: 14px;
  border-radius: 8px;
}
</style>
