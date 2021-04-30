<template>
  <a class="nav-link" :href="href">
    <slot />
  </a>
</template>

<script>
export default{
  props: {
    href: {
      type: String
    }
  }
}
</script>
