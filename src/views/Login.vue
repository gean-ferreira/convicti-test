<template>
  <div class="login">
    <div class="login__container">
      <LoginLogo />
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
  import LoginLogo from '@/components/logos/LoginLogo.vue'
  import LoginForm from '@/components/forms/LoginForm.vue'
</script>

<style lang="scss" setup>
  .login {
    height: 100vh;
    background-color: $BackgroundPrimary;
    display: flex;
    justify-content: center;
    align-items: center;

    &__container {
      width: 100%;
      max-width: 450px;
      display: flex;
      flex-direction: column;
      gap: 92px;
    }
  }
</style>
