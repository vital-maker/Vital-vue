import { createApp } from 'vue'
import App from './App.vue'
import mixins from './data'
import router from '@/router'
import '@/assets/scss/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
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
import VTRoute from '@/components/VTRoute'
import VTBreadcrumb from '@/components/VTBreadcrumb'
import VTLi from '@/components/VTLi'
import VTToolbar from '@/components/VTToolbar'
import VTCard from '@/components/VTCard'
import VTCardBody from '@/components/VTCardBody'
import VTCardTitle from '@/components/VTCardTitle'
import VTCardSubTitle from '@/components/VTCardSubTitle'
import VTCardText from '@/components/VTCardText'
import VTLabel from '@/components/VTLabel'
// import {VTButton} from '@/index'
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
  .component('VTRoute', VTRoute)
  .component('VTBreadcrumb', VTBreadcrumb)
  .component('VTLi', VTLi)
  .component('VTToolbar', VTToolbar)
  .component('VTCard', VTCard)
  .component('VTCardBody', VTCardBody)
  .component('VTCardTitle', VTCardTitle)
  .component('VTCardSubTitle', VTCardSubTitle)
  .component('VTCardText', VTCardText)
  .component('VTLabel', VTLabel)
  .use(router)
  .mount('#app')
