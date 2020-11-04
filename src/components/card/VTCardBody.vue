<template>
  <div
    class="card-body"
    :class="[
      imgOverlayClass,
      textStyleValue,
      fontBold,
      fontBolder,
      fontItalic,
      fontLight,
      fontLighter,
      fontNormal,
      borderClass,
      backGroundColor
      ]">
    <slot>This is some text within a card body.</slot>
  </div>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTCardBody',
  mixins: [mixins],
  props: {
    imgOverlay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imgOverlayClass: function () {
      if (this.imgOverlay) {
        return 'card-img-overlay'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
