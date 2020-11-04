<template>
  <div
    class="btn-toolbar"
    :class="[
      justifyContent,
      justifyContentGrid,
      alignItemsClass,
      alignItemsGridClass,
      alignSelfClass,
      alignSelfGridClass,
      alignContentClass,
      alignContentGridClass
      ]" role="toolbar">
    <slot></slot>
  </div>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTButtonToolbar',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
