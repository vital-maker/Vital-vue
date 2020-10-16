<template>
  <div class="btn-group" role="group">
    <slot name="VTToggle"></slot>
    <div class="dropdown-menu">
      <slot name="VTDropDownItem"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTButtonDropDown',
  props: {}
}
</script>

<style scoped>

</style>
