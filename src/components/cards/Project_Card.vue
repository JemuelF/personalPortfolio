<template>
  <v-sheet outlined color="orange100" class="rounded-lg pa-1">
    <v-card color="black80" class="rounded-lg pl-10 pr-10">
      <p class="white--text font-weight-regular text-center text-h5 pt-6">{{ this.name }}</p>
      <v-img
          :src=this.image
          max-height="150px"
          max-width="450px"></v-img>
      <v-card-text class=" pl-0 pr-0">
        <p class="white--text text-justify text-body-1">{{description}}</p>
      </v-card-text>
      <v-card-subtitle>
        <v-row>
          <v-col cols="6" align="center" class="pl-xs-0 pr-xs-0">
            <v-btn
              block
              color="black"
              elevation="4"
              class="white--text text-caption text-sm-caption"
              :href=this.code
              target="_blank"
              v-if="this.code===''"
              disabled
              >Code</v-btn>
            <v-btn
                block
                color="black"
                elevation="4"
                class="white--text text-caption text-sm-subtitle-2"
                :href=this.code
                target="_blank"
                v-else
            >Code</v-btn>
          </v-col>
          <v-col cols="6" align="center" class="pl-xs-0 pr-xs-0">
            <v-btn
                block
                color="black"
                elevation="4"
                class="white--text text-caption text-sm-subtitle-2 "
                :href=this.website
                target="_blank"
                v-if="this.website===''"
                disabled
            >Website</v-btn>
            <v-btn
                block
                color="black"
                elevation="4"
                class="white--text text-caption text-sm-subtitle-2 "
                :href=this.website
                target="_blank"
                v-else
            >Website</v-btn>
          </v-col>
        </v-row>
      </v-card-subtitle>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "Project_Card",
  props: {
    name: null,
    image: null,
    description: null,
    code: null,
    website: null
  }
}
</script>

<style scoped>

</style>