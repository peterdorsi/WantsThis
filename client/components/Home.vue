<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
        <li><router-link to="/login">/</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'WantsThis.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>
