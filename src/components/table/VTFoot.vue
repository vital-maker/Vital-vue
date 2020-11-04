<template>
  <tfoot :class="[textStyleValue]">
  <slot></slot>
  </tfoot>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTFoot',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
