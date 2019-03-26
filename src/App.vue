<template>
  <v-app>
    <Admin/>
    <Navbar/>
    <Organizadores/>
  </v-app>
</template>

<script>
import Admin from './components/admin-status'
import Navbar from './components/navbar'
// import Pepo from './components/pepoek'
import Organizadores from './components/organizadores'

export default {
  name: 'App',
  components: {
    Admin,
    Navbar,
    // Pepo,
    Organizadores
  },
  data () {
    return {
      //
    }
  }
}
</script>
