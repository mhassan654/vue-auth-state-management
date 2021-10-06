<template>
  <div class="row">
    <div class="col text-center">
      <img alt="Vue logo" src="../assets/logo.png">

      <h4 class="mt-5">   {{ user.name }}</h4>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    //
  },

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
