<template>
  <div id="app">
    <div class="header">
      <div class="inner">
        <router-link to="/" exact>
          <img class="logo" src="./assets/logo.png" alt="logo">
        </router-link>
        <router-link to="/login">Login</router-link>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>

</script>

<style>
    body {
        font-family: Roboto, Helvetica, sans-serif;
        font-size: 15px;
        background-color: lighten(#eceef1, 30%);
        margin: 0;
        padding-top: 55px;
        color: #34495e;
    }

    .logo {
        height: 35px;
    }

    a {
        color: #34495e;
        text-decoration: none;
    }


    .fade-enter-active,
    .fade-leave-active {
        transition: all .2s ease;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }

</style>
