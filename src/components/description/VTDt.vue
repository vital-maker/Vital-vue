<template>
  <dt :class="[gridSystem,textStyleValue]">
    <slot></slot>
  </dt>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTDt',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
