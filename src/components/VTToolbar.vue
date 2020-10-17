<template>
  <div class="btn-toolbar" role="toolbar" :aria-label="label">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VTToolbar',
  props: {
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
