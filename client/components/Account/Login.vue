<template>
  <div class="view-login">
    login to your account
  </div>
</template>

<script>
export default {
  name: 'login-view',
  computed: {
    user () {
      return this.$store.state.users[this.$route.params.id]
    }
  },
  beforeMount () {
    //console.log(this.$store)
  }
}
</script>

<style>

</style>
