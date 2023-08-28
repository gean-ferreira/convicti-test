<template>
  <button @click="logout" class="logout"><Power /> Sair</button>
</template>

<script setup>
  import Power from '@/components/icons/Power.vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  // STORE LOGOUT
  const logout = () => router.push({ name: 'login' })
</script>

<style lang="scss" setup>
  .logout {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    color: white;
  }
</style>
