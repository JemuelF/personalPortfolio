<template>
  <v-row align="center" style="height: 100%" class="ma-8">
    <v-col cols="12" md="6" justify="center">
      <v-row align="center" class="mt-14 pt-14">
        <p class="white--text text-h6 text-center">{{this.description}}</p>
      </v-row>
      <v-row justify="center" class="mt-12">
        <v-col cols="12">
          <p class="white--text text-h4 text-sm-h3 text-md-h2">Who am I?</p>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6" align="center" justify="center" class="d-none d-sm-none d-md-inline">
      <v-icon
      color="orange100"
      size="200px">
        mdi-laptop
      </v-icon>
    </v-col>
  </v-row>
</template>

<script>

import firebase from "firebase";

export default {
  name: "WhoAmI_View",
  data(){
    return{
      description: null
    }
  },
  mounted(){
    this.getDescription()
  },
  methods: {
    getDescription() {
      this.projects = []
      firebase.firestore().collection('myProfile').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.description = (doc.data().description)
        });
      });
    }
  }
}
</script>

<style scoped>

</style>