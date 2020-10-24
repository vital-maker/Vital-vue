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
import VTHead from '@/components/VTHead'
import VTTransition from '@/components/VTTransition'
import VTText from '@/components/VTText'
import VTInput from '@/components/VTInput'
import '@/assets/scss/styles.scss'
import '@/assets/css/animate.css'
import mixins from '@/data'
const vital = {
  VTButton,
  VTButtonGroup,
  VTFluid,
  VTContainer,
  VTRow,
  VTButtonDropDown,
  VTLink,
  VTSpan,
  VTAlert,
  VTButtonToggle,
  VTCol,
  VTRoute,
  VTBreadcrumb,
  VTLi,
  VTToolbar,
  VTCard,
  VTCardBody,
  VTCardTitle,
  VTCardSubTitle,
  VTCardText,
  VTLabel,
  VTHead,
  VTTransition,
  VTText,
  VTInput
}

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.mixin(mixins)
  Object.keys(vital).forEach(name => {
    Vue.component(name, vital[name])
  })
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

vital.install = install

export {
  VTButton,
  VTButtonGroup,
  VTFluid,
  VTContainer,
  VTRow,
  VTButtonDropDown,
  VTLink,
  VTSpan,
  VTAlert,
  VTButtonToggle,
  VTCol,
  VTRoute,
  VTBreadcrumb,
  VTLi,
  VTToolbar,
  VTCard,
  VTCardBody,
  VTCardTitle,
  VTCardSubTitle,
  VTCardText,
  VTLabel,
  VTHead,
  VTTransition,
  VTText,
  VTInput
}

export default vital
