<template>
  <div class="row" :class="[rowGridSystem,alignItem,justifyContent]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VTRow',
  props: {

  },
  data () {
    return {
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
