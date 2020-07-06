<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Cep msg="Welcome to mycep"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cep from '@/components/Cep.vue'

export default {
  name: 'Home',
  components: {
    Cep
  }
}
</script>
