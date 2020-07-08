<template>
  <div class="home">
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
