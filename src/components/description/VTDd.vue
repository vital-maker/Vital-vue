<template>
  <dd :class="[gridSystem,textStyleValue]">
    <slot></slot>
  </dd>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTDd',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
