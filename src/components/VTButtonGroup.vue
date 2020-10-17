<template>
  <div
    :class="[vertical === false ? 'btn-group' : 'btn-group-vertical',btbGroupSize]"
    role="group" :aria-label="label">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VTButtonGroup',
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: null
    }
  },
  computed: {
    btbGroupSize: function () {
      let btnSize = ''
      if (this.btnSizeArray.includes(this.size)) {
        btnSize = `btn-group-${this.size}`
      } else {
        btnSize = null
      }
      return btnSize
    }
  }
}
</script>

<style scoped>

</style>
