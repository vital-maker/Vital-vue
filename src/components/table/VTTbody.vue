<template>
  <tbody :class="[textStyleValue]">
  <slot></slot>
  </tbody>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTTbody',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
