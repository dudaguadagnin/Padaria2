<template>
  <input
    type="text"
    class="form-control mr-sm-2"
    v-on:input="$emit('input', $event.target.value)">
</template>
