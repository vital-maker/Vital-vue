<template>
  <button type="button"
          class="dropdown-toggle"
          :class="[btnColor,btnSize,btnBlock,btnRounded,toggleSpillClass]"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
    <slot v-if="toggleSpill === false">{{ value }}</slot>
  </button>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTButtonToggle',
  mixins: [mixins],
  props: {
    value: {
      type: String,
      default: 'button'
    },
    toggleSpill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    toggleSpillClass: function () {
      if (this.toggleSpill) {
        return 'dropdown-toggle-split'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
