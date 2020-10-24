<template>
  <VTFluid>
    <VTRow>
      <VTCol md="12">
        <VTText words="1" end-point="..." word-separator="-" text="mohamed elnagar" />
      </VTCol>
      <VTCol md="4">
        <VTInput label="username" label-position="top" input-style="borderStartBottom" input-lg squared placeholder="enter username" name="username"/>
      </VTCol>
    </VTRow>
  </VTFluid>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data () {
    return {
      action: true
    }
  },
  methods: {}
}
</script>

<style lang="scss">

</style>
