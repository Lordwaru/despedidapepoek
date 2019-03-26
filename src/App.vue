<template>
  <v-app>
    <Admin/>
  </v-app>
</template>

<script>
import Admin from './components/admin-status'

export default {
  name: 'App',
  components: {
    Admin
  },
  data () {
    return {
      //
    }
  }
}
</script>
