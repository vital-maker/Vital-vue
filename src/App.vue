<template>
  <VTFluid>
    <VTRow>
      <button ref="test" @click="click" class="btn btn-danger error">error</button>
      <VTButton @click="show"></VTButton>
    </VTRow>
  </VTFluid>
</template>

<script>

// import { VTToast } from '@/index'

import VTToast from '@/components/toast/VTToast'

export default {
  name: 'App',
  data () {
    return {
      action: true,
      progress: 0,
      progress1: 0
    }
  },
  methods: {
    click: function () {
      alert('mohamed')
    },
    show: function () {
      // document.getElementsByClassName('error').forEach((item) => {
      //   item.addEventListener('click', () => {
      //     alert('mohamed')
      //   })
      // })
      VTToast({
        type: 'success',
        flat: true,
        header: true,
        position: 'bottom-center',
        timeOut: '15',
        // progressTimeout: true,
        // mode: 'bootstrap',
        // removeOnClick: true,
        message: 'message is updated successfully. upload your message in your desktop'
      })
      VTToast({
        type: 'error',
        // flat: true,
        header: false,
        timeOut: '15',
        position: 'top-right',
        progressTimeout: false,
        // mode: 'bootstrap',
        // removeOnClick: true,
        // appear: 'append',
        message: 'message is updated successfully. upload your message in your desktop'
      })
      VTToast({
        type: 'info',
        header: true,
        flat: true,
        timeOut: '15',
        // mode: 'bootstrap',
        // removeOnClick: true,
        position: 'bottom-right',
        message: 'message is updated successfully. upload your message in your desktop'
      })
      VTToast({
        type: 'warning',
        header: true,
        flat: true,
        timeOut: '15',
        // removeOnClick: true,
        // mode: 'bootstrap',
        position: 'bottom-left',
        message: 'message is updated successfully. upload your message in your desktop'
      })
      VTToast({
        type: 'default',
        header: true,
        flat: true,
        timeOut: '15',
        // removeOnClick: true,
        // mode: 'bootstrap',
        position: 'top-center',
        message: 'message is updated successfully. upload your message in your desktop'
      })
    }
  },
  mounted () {

    // setInterval(() => {
    //   this.progress = Math.floor(Math.random() * 200 - 1)
    //   this.progress1 = Math.floor(Math.random() * 200 - 1)
    // }, 500)
  }
}
</script>

<style lang="scss">
body {
  //background: #000000;
}
</style>
