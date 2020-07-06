<template>
  <v-container>
    <v-row>
      <v-col v-if="this.$store.getters.logged"
        cols="12"
        md="8"
        sm="12"
      >
        <v-row>
          <v-col cols="12" md="6" sm="12">
            <v-img :src="this.$store.getters.getUserData.userPic" height="100%"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-list>
              <v-list-item>User Name: {{this.$store.getters.getUserName}}</v-list-item>
              <v-list-item>Email: {{this.$store.getters.getUserData.email}}</v-list-item>

            </v-list>
          </v-col>
        </v-row>


      </v-col>
      <v-col v-else
             cols="12"
             md="4"
             sm="12"
      >
        Please, <nuxt-link to="/auth">sign in</nuxt-link> .
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {

  }
</script>
