<template>
  <label :for="labelFor">
    <slot>{{ text }}</slot>
  </label>
</template>

<script>
export default {
  name: 'VTLabel',
  props: {
    text: {
      type: String,
      default: 'label'
    },
    labelFor: {
      type: String,
      default: null
    },
    for: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
