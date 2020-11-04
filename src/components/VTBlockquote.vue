<template>
  <blockquote :class="[blockquoteClass,textStyleValue]">
    <slot>
      <VTText class="mb-0" :text="text"/>
    </slot>
    <slot name="blockquoteFooter">
      <VTFooter v-if="footerVisible" :blockquote="blockquote">
        {{ textFooter }}
        <VTCite :title="titleCite">{{ textCite }}</VTCite>
      </VTFooter>
    </slot>
  </blockquote>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTBlockquote',
  mixins: [mixins],
  props: {
    blockquote: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
    },
    textFooter: {
      type: String,
      default: 'Someone famous in'
    },
    titleCite: {
      type: String,
      default: 'Source Title'
    },
    textCite: {
      type: String,
      default: 'Source Title'
    },
    footerVisible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    blockquoteClass: function () {
      if (this.blockquote) {
        return 'blockquote'
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
