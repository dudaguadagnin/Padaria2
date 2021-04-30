<template>
  <input type="number"
    class="form-control"
    :id="id"
    v-on:input="$emit('input', $event.target.value)">
</template>
<script>
export default{
  name: 'ed',
  props: {
    id: ''
  }
}
</script>
