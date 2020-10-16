<template>
  <div :class="[typeAlert,dismissible]" role="alert">
    <slot>{{ value }}</slot>
    <button v-if="dismiss" type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'VTAlert',
  props: {
    alert: {
      type: String,
      default: ''
    },
    value: {
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
