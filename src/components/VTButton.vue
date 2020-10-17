<template>
  <button type="button"
          :class="[btnColor,btnSize,btnBlock,btnRounded,btnSquared]"
          >
    <slot>{{ value }}</slot>
  </button>
</template>

<script>
export default {
  name: 'VTButton',
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
