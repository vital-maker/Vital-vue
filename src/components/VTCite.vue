<template>
  <cite :title="title">
    <slot></slot>
  </cite>
</template>

<script>
export default {
  name: 'VTCite',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
