<template>
  <div class="hello">
    <h1>{{ heading }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            heading: ''
        }
    },
    mounted: function() {
        this.fetchHeading();
    },
    methods: {
        fetchHeading: function() {
            this.$http.get('api/message').then(function (response) {
                this.heading = response.data
            });
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>
