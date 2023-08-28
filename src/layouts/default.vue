<template>
  <section class="app">
    <Aside />
    <section class="app__content">
      <router-view></router-view>
    </section>
  </section>
</template>

<script setup>
  import Aside from '@/components/sections/Aside.vue'
</script>

<style lang="scss" setup>
  .app {
    display: flex;
    height: 100vh;

    &__content {
      background-color: $Background;
      flex: 1;
      padding: 32px;
    }
  }
</style>
