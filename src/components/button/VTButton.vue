<template>
  <button
    type="button"
    :class="[
      btnColor,
      btnSize,
      btnBlock,
      btnRounded,
      btnSquared,
      dropdownLink,
      groupItemClass,
      justifyContent,
      justifyContentGrid,
      alignContentClass,
      alignContentGridClass,
      alignSelfGridClass,
      alignSelfClass,
      alignItemsClass,
      alignItemsGridClass
      ]">
    <slot>{{ value }}</slot>
  </button>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTButton',
  mixins: [mixins],
  props: {
    value: {
      type: String,
      default: 'button'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
