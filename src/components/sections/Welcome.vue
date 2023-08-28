<template>
  <main class="welcome">
    <h1 class="welcome__title">
      Bem vindo, <strong>{{ username }}</strong
      >!
    </h1>
  </main>
</template>

<script setup>
  import { ref } from 'vue'

  // COMPUTED USERNAME STORE

  const username = ref('Fulano')
</script>

<style lang="scss" scoped>
  .welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &__title {
      font-size: 56px;
    }
  }
</style>
