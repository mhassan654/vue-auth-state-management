<template>
  <div>
    <header-login />
    <div class="container-login">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginLayout' // id of the layout
  }
</script>

<style>
/* your style */
</style>
