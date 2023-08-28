<template>
  <section class="register-form">
    <h2 class="register-form__title">Cadastrar Empresas</h2>
    <form @submit.prevent="submitForm" class="form">
      <div class="left">
        <div class="form__field-container">
          <label for="nome">Nome</label><br />
          <input type="text" name="nome" />
        </div>
        <div class="form__field-container">
          <label for="cnpj">CNPJ</label><br />
          <input type="text" name="cnpj" />
        </div>
        <div class="form__field-container">
          <label for="email">E-mail</label><br />
          <input type="text" name="email" />
        </div>
        <div class="form__field-container">
          <label for="whatsapp">WhatsApp</label><br />
          <input type="text" name="whatsapp" />
        </div>
        <div class="form__field-container">
          <label for="representante">Representante</label><br />
          <input type="text" name="representante" />
        </div>
        <div class="form__field-container d-flex">
          <div class="half">
            <label for="latitude">Latitude</label><br />
            <input type="text" name="latitude" />
          </div>
          <div class="half">
            <label for="longitude">Longitude</label><br />
            <input type="text" name="longitude" />
          </div>
        </div>

        <div class="form__field-container d-flex">
          <!-- PLUGIN MULTISELECT -->
          <div class="half">
            <label for="estado">Estado</label><br />
            <input type="text" name="estado" />
          </div>
          <!-- PLUGIN MULTISELECT -->
          <div class="half">
            <label for="cidade">Cidade</label><br />
            <input type="text" name="cidade" />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="form__field-container">
          <label for="observacoes">Observações</label><br />
          <textarea name="observacoes"></textarea>
        </div>
        <!-- PLUGIN MULTISELECT -->
        <div class="form__field-container">
          <label for="categoria">Categoria</label><br />
          <input type="text" name="categoria" />
        </div>
      </div>
      <div class="buttons">
        <button @click="close">Cancelar</button>
        <button class="form__btn-submit primary" type="submit">Cadastrar Empresa</button>
      </div>
    </form>
  </section>
</template>

<script setup>
  import { useOffsetStore } from '@/stores/offsetStore.js'

  const { close } = useOffsetStore()
  const submitForm = () => {
    // POST STORE COMPANIES
    close()
  }
</script>

<style lang="scss" scoped>
  .register-form {
    &__title {
      font-size: 32px;
      font-weight: 700;
      width: 100%;
      text-align: center;
    }

    .form {
      width: 100%;
      display: flex;
      gap: 32px;
      flex-wrap: wrap;

      .left,
      .right {
        flex: 1;
        width: 50%;
      }

      .d-flex {
        display: flex;
        gap: 16px;
      }

      .half {
        flex: 1;
      }

      &__field-container {
        width: 100%;
        margin-bottom: 16px;
      }

      .buttons {
        width: 100%;
        display: flex;
        gap: 32px;
        justify-content: center;
      }
    }
  }
</style>
