<template>
  <figcaption :class="[textStyleValue,figureCaptionClass]">
    <slot>{{ text }}</slot>
  </figcaption>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTFigcaption',
  mixins: [mixins],
  props: {
    text: {
      type: String,
      default: 'A caption for the above image.'
    },
    figureCaption: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    figureCaptionClass: function () {
      if (this.figureCaption) {
        return 'figure-caption'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
