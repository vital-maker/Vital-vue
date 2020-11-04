<template>
  <li
    :class="[
      breadcrumb,
      activeClass,
      disableClass,
      inlineItemClass,
      groupItemClass,
      groupItemColorClass,
      dClass,
      justifyContent,
      alignItemsClass,
      alignItemsGridClass,
      alignContentClass,
      alignContentGridClass,
      alignSelfClass,
      alignSelfGridClass,
      mediaClass
      ]" :aria-current="active === true ? 'page' : ''">
    <slot v-if="active === false || link">
      <VTLink :href="hrefValidator" v-if="href !== false">{{ text }}</VTLink>
      <VTRoute :to="toValidator" v-else>{{ text }}</VTRoute>
    </slot>
    <slot v-else>{{ text }}</slot>
  </li>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTLi',
  mixins: [mixins],
  props: {
    crumb: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    inlineItem: {
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
    },
    media: {
      type: Boolean,
      default: false
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
    inlineItemClass: function () {
      if (this.inlineItem) {
        return 'list-inline-item'
      } else {
        return null
      }
    },
    hrefValidator: function () {
      if (this.href === false) {
        return '#'
      } else {
        return this.href
      }
    },
    toValidator: function () {
      if (this.to === false) {
        return '#'
      } else {
        return this.to
      }
    },
    mediaClass: function () {
      if (this.media) {
        return 'media'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
