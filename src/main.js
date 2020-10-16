import { createApp } from 'vue'
import App from './App.vue'
import mixins from './data'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/scss/styles.scss'
import VTButton from '@/components/VTButton'
import VTButtonGroup from '@/components/VTButtonGroup'
import VTFluid from '@/components/VTFluid'
import VTContainer from '@/components/VTContainer'
import VTRow from '@/components/VTRow'
import VTButtonDropDown from '@/components/VTButtonDropDown'
import VTLink from '@/components/VTLink'
import VTSpan from '@/components/VTSpan'
import VTAlert from '@/components/VTAlert'
import VTButtonToggle from '@/components/VTButtonToggle'
import VTCol from '@/components/VTCol'

window.$ = require('jquery')
createApp(App)
  .mixin(mixins)
  .component('VTButton', VTButton)
  .component('VTButtonToggle', VTButtonToggle)
  .component('VTButtonGroup', VTButtonGroup)
  .component('VTFluid', VTFluid)
  .component('VTContainer', VTContainer)
  .component('VTRow', VTRow)
  .component('VTCol', VTCol)
  .component('VTButtonDropDown', VTButtonDropDown)
  .component('VTLink', VTLink)
  .component('VTSpan', VTSpan)
  .component('VTAlert', VTAlert)
  .mount('#app')
