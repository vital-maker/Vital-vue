<template>
  <dl :class="[gridSystem,textStyleValue,rowClass]">
    <slot></slot>
  </dl>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTDl',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
