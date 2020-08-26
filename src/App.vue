<template>
  <div id="app" class="pb-5">
    <ticket-form formTitle="Agregar Incidente"></ticket-form>
  </div>
</template>

<script>
import TicketForm from './components/TicketForm.vue'

export default {
  name: 'App',
  components: {
    TicketForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
