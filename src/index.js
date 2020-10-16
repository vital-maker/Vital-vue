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
import './assets/scss/styles.scss'
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
  VTCol
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
  VTCol
}
export default vital
