<template>
  <section
    class="container-fluid"
    :class="[
      responsiveClass,
      responsiveSmClass,
      responsiveMdClass,
      responsiveLgClass,
      responsiveXlClass
    ]">
    <slot></slot>
  </section>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTFluid',
  mixins: [mixins]
}
</script>

<style scoped>

</style>
