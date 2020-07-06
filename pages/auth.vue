<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col v-if="!this.$store.getters.logged"
               cols="12"
               md="4"
               sm="12"
        >
          <v-text-field
            v-model="username"
            label="User name"
            :rules="usernameRules"
            :disabled="isLoading"
            required
            placeholder="User name"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="password"
            required
            :disabled="isLoading"
            placeholder="Password"
            :type="'password'"
          ></v-text-field>
          <v-btn
            block
            @click="login()"
            :loading="isLoading"
          >
            Login
          </v-btn>
        </v-col>
        <v-col v-else
               cols="12"
               md="4"
               sm="12"
        >
          You are logged.
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      username: '',
      usernameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 6) || 'Name must be at least 6 characters',
      ],
      password: '',
      isLoading: false,
    }),
    methods: {
      login() {
        this.$store.dispatch('login', this.username)
        //this.$router.push('/')
        this.isLoading = true
      }
    }
  }
</script>
