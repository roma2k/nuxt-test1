<template>

  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append v-if="this.$store.getters.logged">
        <div class="pa-2">
          <v-btn block @click="logout()">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>

      <v-toolbar-title v-text="title"/>
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    methods: {
      logout() {
        this.drawer = false
        this.$store.dispatch('logout')
        this.$router.push('/auth')
      }
    },
    data: () => ({
      drawer: false,
      items: [
        {
          icon: 'mdi-card-account-details ',
          title: 'Profile',
          to: '/'
        },
        {
          icon: 'mdi-login-variant',
          title: 'Authorization',
          to: '/auth'
        }
      ],
      title: 'Test Nuxt App',
      logged: false
    })
  }
</script>
