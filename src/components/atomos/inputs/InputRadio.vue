<template>
<div>
  <div class="form-check">
    <input value="ofertas" v-model="categoria" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault">
    <label class="form-check-label" for="flexRadioDefault">
      Ofertas
    </label>
  </div>
  <div class="form-check">
    <input value="doces" v-model="categoria" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
    <label class="form-check-label" for="flexRadioDefault2">
      Doces
    </label>
  </div>
  <div class="form-check">
    <input value="salgados" v-model="categoria" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
    <label class="form-check-label" for="flexRadioDefault2">
      Salgados
    </label>
  </div>
  <div class="form-check">
    <input value="pratos" v-model="categoria" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
    <label class="form-check-label" for="flexRadioDefault2">
      Pratos
    </label>
  </div>
  </div>
</template>
<script>
export default {
  props: {
    categoria: {}
  }
}
</script>
