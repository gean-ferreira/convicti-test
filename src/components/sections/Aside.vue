<template>
  <aside class="aside">
    <LoginLogo />
    <Navbar />
    <LogoutButton />
  </aside>
</template>

<script setup>
  import LoginLogo from '@/components/logos/LoginLogo.vue'
  import Navbar from '@/components/sections/Navbar.vue'
  import LogoutButton from '@/components/elements/buttons/LogoutButton.vue'
</script>

<style lang="scss" scoped>
  .aside {
    display: flex;
    flex-direction: column;
    background-color: $BackgroundPrimary;
    align-items: center;
    width: 350px;
    padding: 48px 0;
    gap: 88px;
  }
</style>
