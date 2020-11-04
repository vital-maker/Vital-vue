<template>
  <div class="card" :class="[gridSystem,textStyleValue,backGroundColor,borderClass]">
    <slot name="imgTop"></slot>
    <slot></slot>
    <slot name="imgBottom"></slot>
  </div>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTCard',
  mixins: [mixins],
  props: {
    tag: {
      type: String,
      default: 'article'
    },
    src: {
      type: String,
      default: ''
    },
    cardImgTop: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cartTagTarget: ['article', 'div']
    }
  },
  computed: {
    cardTag: function () {
      if (this.cartTagTarget.includes(this.tag)) {
        return this.tag
      } else {
        return 'article'
      }
    }
  }
}
</script>

<style scoped>

</style>
