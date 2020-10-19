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
import '@/assets/scss/styles.scss'
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
  VTHead
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

export { default as VTButton } from '@/components/VTButton'
export { default as VTButtonGroup } from '@/components/VTButtonGroup'
export { default as VTFluid } from '@/components/VTFluid'
export { default as VTContainer } from '@/components/VTContainer'
export { default as VTRow } from '@/components/VTRow'
export { default as VTButtonDropDown } from '@/components/VTButtonDropDown'
export { default as VTLink } from '@/components/VTLink'
export { default as VTSpan } from '@/components/VTSpan'
export { default as VTAlert } from '@/components/VTAlert'
export { default as VTButtonToggle } from '@/components/VTButtonToggle'
export { default as VTCol } from '@/components/VTCol'
export { default as VTRoute } from '@/components/VTRoute'
export { default as VTBreadcrumb } from '@/components/VTBreadcrumb'
export { default as VTLi } from '@/components/VTLi'
export { default as VTToolbar } from '@/components/VTToolbar'
export { default as VTCard } from '@/components/VTCard'
export { default as VTCardBody } from '@/components/VTCardBody'
export { default as VTCardTitle } from '@/components/VTCardTitle'
export { default as VTCardSubTitle } from '@/components/VTCardSubTitle'
export { default as VTCardText } from '@/components/VTCardText'
export { default as VTLabel } from '@/components/VTLabel'
export { default as VTHead } from '@/components/VTHead'

export default vital
