<template>
  <RouterLink :to="to" :class="[btnColor,btnSize,btnBlock,btnRounded,dropdownLink,btnBadge,typeAlert,activeCardLink]">
    <slot>{{ text }}</slot>
  </RouterLink>
</template>

<script>
export default {
  name: 'VTRoute',
  props: {
    to: {
      type: String,
      default: '#'
    },
    href: {
      type: String,
      default: '#'
    },
    text: {
      type: String,
      default: 'route link'
    }
  }
}
</script>

<style scoped>

</style>
