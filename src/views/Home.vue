<template>
  <VTFluid>
    <VTRow>
      <VTCol col>
<!--        <VTProgress height="60" stripe stripe-animate progress-bottom bolder italic progress-bar-bg="dark" :text-style="['dark','uppercase','center']" bg-color="warning" :value="progress" value-min="0" value-max="200"/>-->
      </VTCol>
    </VTRow>
  </VTFluid>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      action: true,
      progress: 0
    }
  },
  methods: {},
  mounted () {
    setInterval(() => {
      this.progress++
    }, 200)
  }
}
</script>

<style scoped>

</style>
