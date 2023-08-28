<template>
  <form @submit.prevent="submitForm" class="login-form">
    <div class="login-form__field-container">
      <label for="email">E-mail</label><br />
      <input type="text" name="email" v-bind="" />
    </div>
    <div class="login-form__field-container">
      <label for="password">Senha</label><br />
      <input type="password" name="password" />
    </div>
    <button class="login-form__btn-submit secondary" type="submit">Entrar</button>
  </form>
</template>

<script setup>
  // USAR VEEVALIDATE FORM LIB
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const submitForm = () => {
    router.push({ name: 'home' })
  }
</script>

<style lang="scss" scoped>
  .login-form {
    &__field-container {
      margin-bottom: 24px;

      label {
        color: white;
      }
    }

    &__btn-submit {
      width: 100%;
      margin-top: 15px;
    }
  }
</style>
