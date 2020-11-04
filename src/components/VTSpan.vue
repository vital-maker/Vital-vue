<template>
  <span :class="[btnBadge,dropdownTextClass]"><slot>{{ text }}</slot></span>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTSpan',
  mixins: [mixins],
  props: {
    badge: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'span'
    },
    dropdownText: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dropdownTextClass: function () {
      if (this.dropdownText) {
        return 'dropdown-item-text'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
