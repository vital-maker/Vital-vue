<template>
  <li :class="[breadcrumb,activeCrumb]" :aria-current="active === true ? 'page' : ''">
    <slot v-if="active === false">
      <VTLink :href="href" v-if="href !== false">{{ text }}</VTLink>
      <VTRoute :to="to" v-else>{{ text }}</VTRoute>
    </slot>
    <slot v-else>{{ text }}</slot>
  </li>
</template>

<script>
export default {
  name: 'VTLi',
  props: {
    crumb: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    href: {
      type: [String, Boolean],
      default: false
    },
    to: {
      type: [String, Boolean],
      default: false
    },
    text: {
      type: String,
      default: 'example 1'
    }
  },
  computed: {
    breadcrumb: function () {
      let crumb = null
      if (this.crumb) {
        crumb = 'breadcrumb-item'
      }
      return crumb
    },
    activeCrumb: function () {
      let active = null
      if (this.active) {
        active = 'active'
      }
      return active
    }
  }
}
</script>

<style scoped>

</style>
