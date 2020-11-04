<template>
  <div :class="[
    gridSystem,
    responsiveClass,
    responsiveSmClass,
    responsiveMdClass,
    responsiveLgClass,
    responsiveXlClass,
    textStyleValue,
    listGroupClass,
    horizontalClass,
    groupHorizontalClass
    ]">
    <slot></slot>
  </div>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTCol',
  mixins: [mixins],
  props: {
    listGroup: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listGroupClass: function () {
      if (this.listGroup) {
        return 'list-group'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
