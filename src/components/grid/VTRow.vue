<template>
  <div
    class="row"
    :class="[
      rowGridSystem,
      alignItemsClass,
      alignItemsGridClass,
      alignContentClass,
      alignContentGridClass,
      alignSelfClass,
      alignSelfGridClass,
      justifyContent,
      responsiveClass,
      responsiveSmClass,
      responsiveMdClass,
      responsiveLgClass,
      responsiveXlClass,
      noGuttersClass
      ]">
    <slot></slot>
  </div>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTRow',
  mixins: [mixins],
  props: {
    noGutters: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    noGuttersClass: function () {
      if (this.noGutters) {
        return 'no-gutters'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
