<template>
  <nav>
    <v-app-bar
      app
      flat
      color="grey lighten-4"
      >
      <v-toolbar-title class="font-weight-light.font-italic light-blue--text pl-10" >
                Health Care Application
      </v-toolbar-title>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn text white--text router to="/">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="light-blue">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
           { icon: 'mdi-history', text: 'Patient History', route: '/view-records' },
           { icon: 'mdi-account-plus', text: 'Appointments', route: '/appointments' },
           { icon: 'mdi-logout', text: 'Logout', route:'/'}
      ]
    }
  }
}
</script>

<style>
</style>
