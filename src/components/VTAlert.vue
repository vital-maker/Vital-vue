<template>
  <div :class="[typeAlert,dismissible]" role="alert">
    <slot name="alertHeading">
      <VTHead v-if="heading" :tag="headTag" alert-heading>{{ headingText }}</VTHead>
    </slot>
    <slot>{{ text }}</slot>
    <button v-if="dismiss" type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
import mixins from '@/data'

export default {
  name: 'VTAlert',
  mixins: [mixins],
  props: {
    alert: {
      type: String,
      default: ''
    },
    headTag: {
      type: String,
      default: ''
    },
    heading: {
      type: Boolean,
      default: false
    },
    headingText: {
      type: String,
      default: 'Well done!'
    },
    text: {
      type: String,
      default: 'Some of content'
    },
    dismiss: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    dismissible: function () {
      let dismiss = ''
      switch (this.dismiss) {
        case true:
          dismiss = 'alert-dismissible fade show'
          break
        default:
          dismiss = ''
      }
      return dismiss
    },
    typeAlert: function () {
      let alert = ''
      if (this.btnColorClasses.includes(this.alert)) {
        alert = `alert alert-${this.alert}`
      } else {
        alert = 'alert alert-primary'
      }
      return alert
    }
  }
}
</script>

<style scoped>

</style>
