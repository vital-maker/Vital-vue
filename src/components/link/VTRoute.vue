<template>
  <RouterLink
    :to="to"
    :class="[
      btnColor,
      btnSize,
      btnBlock,
      btnRounded,
      dropdownLink,
      btnBadge,
      typeAlert,
      activeCardLink,
      activeClass,
      disableClass,
      groupActionClass,
      groupItemColorClass
      ]">
    <slot>{{ text }}</slot>
  </RouterLink>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTRoute',
  mixins: [mixins],
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
