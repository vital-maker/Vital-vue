<template>
  <button type="button"
          class="dropdown-toggle"
          :class="[btnColor,btnSize,btnBlock,btnRounded]"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
    <slot>{{ value }}</slot>
  </button>
</template>

<script>
export default {
  name: 'VTButtonToggle',
  props: {
    value: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style scoped>

</style>
