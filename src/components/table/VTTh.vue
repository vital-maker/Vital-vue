<template>
  <th :class="[textStyleValue]">
    <slot></slot>
  </th>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTTh',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
