<template>
  <label :for="labelFor">
    <slot>{{ text }}</slot>
  </label>
</template>

<script>
import mixins from '@/data'
export default {
  name: 'VTLabel',
  mixins: [mixins],
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
