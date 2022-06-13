<template>
  <v-row align="center" justify="center" style="height: 80vh" class="ma-8">
    <v-col cols="12" sm="8" md="6" lg="5">
      <v-carousel
      height="600"
      cycle
      interval="3000"
      show-arrows>
        <v-carousel-item
        v-for="(item,index) in this.projects"
        :key="index"
        class="mt-0 mt-sm-10 pt-sm-10"
        >
          <Project_Card
              class="ml-0 mr-0 ml-sm-4 mr-sm-4"
              :name=item.name
              :description=item.description
              :code=item.code
              :website=item.website
              :image = item.image></Project_Card>
        </v-carousel-item>
      </v-carousel>

    </v-col>
  </v-row>
</template>

<script>
import Project_Card from "@/components/cards/Project_Card";
import firebase from 'firebase'
export default {
  name: "Projects_View",
  components: {
    Project_Card
  },
  mounted(){
    this.getProjects()
  },
  methods:{
    getProjects(){
      this.projects = []
      firebase.firestore().collection('projects').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.projects.push(doc.data())
        });
      });
    }
  },
  data(){
    return{
      projects: null
    }
  }

}
</script>

<style scoped>
</style>