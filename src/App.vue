<template>
  <v-app id="app">
    <v-container class="app container--fluid">
      <v-row id="nav" align="center" class="ml-10 mr-10">
        <v-col cols="8" sm="4" md="2">
          <router-link  to="/">Who Am I?</router-link> |
        </v-col>
        <v-col cols="4" sm="4" md="2">
          <router-link  to="/projects">Projects</router-link>
        </v-col>
        <v-col cols="12" sm="4" md="8" align="end" class="white--text text-h6 d-none d-sm-inline">
          Jemuel Flores
        </v-col>


      </v-row>
      <router-view/>
    </v-container>
  </v-app>
</template>
<script>
export default {
  mounted() {
    this.styleActive()
  },
  data(){
    return{
      activeTab: 0
    }
  },
  methods:{
    styleActive(){
      console.log(this.activeTab)
    }
  }
}
</script>
<style>

#app{
  background: black;
}
#nav a{
  font-weight: bold;
  font-size: 20px;
  color: white;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #F19100;
  text-decoration-thickness: 3px;
}
</style>
