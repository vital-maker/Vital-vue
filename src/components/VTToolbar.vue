<template>
  <div class="btn-toolbar" role="toolbar" :aria-label="label">
    <slot></slot>
  </div>
</template>

<script>
import mixins from '@/data'
export default {
  name: 'VTToolbar',
  mixins: [mixins],
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
