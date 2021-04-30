<template>
  <textarea
    v-on:input="$emit('input', $event.target.value)"
    class="form-control" rows="3">
  </textarea>
</template>
