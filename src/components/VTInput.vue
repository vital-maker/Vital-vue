<template>
  <div class="input-group-content">
    <div class="form-content">
      <VTLabel class="mb-0" v-if="labelPos === 'top' && labelVisible" :class="[labelClassChange]"
               :label-for="labelFor === null ? label : labelFor">
        {{ label }}
      </VTLabel>
      <div class="input-content">
        <input :class="[inputClass,btnSquared,inputSize]" :type="type" :id="id === null ? label : id"
               :placeholder="placeholder"
               :name="name"
               :value="value" :autocomplete="autocomplete">
        <span :class="[afterStyle]"></span>
      </div>
      <VTLabel v-if="labelPos === 'bottom' && labelVisible" :class="[labelClassChange]"
               :label-for="labelFor === null ? label : labelFor">
        {{ label }}
      </VTLabel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    labelPosition: {
      type: String,
      default: 'top'
    },
    labelClass: {},
    labelVisible: {
      type: Boolean,
      default: true
    },
    inputStyle: {
      type: String,
      default: 'basic'
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    labelFor: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    inputSm: {
      type: Boolean,
      default: false
    },
    inputLg: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      style: ['no-style', 'basic', 'borderBottomLeft', 'borderBottomCenter', 'borderBottomRight', 'borderStartBottom'],
      afterStyles: ['borderBottomLeft', 'borderBottomCenter', 'borderBottomRight', 'borderStartBottom'],
      position: ['top', 'bottom']
    }
  },
  computed: {
    labelClassChange: function () {
      if (this.style.includes(this.inputStyle)) {
        return `label-${this.inputStyle}-control`
      } else {
        return 'label-basic-control'
      }
    },
    inputClass: function () {
      if (this.style.includes(this.inputStyle)) {
        return `input-${this.inputStyle}-control`
      } else {
        return 'input-basic-control'
      }
    },
    afterStyle: function () {
      if (this.afterStyles.includes(this.inputStyle)) {
        return `borderStyle-${this.inputStyle}`
      } else {
        return null
      }
    },
    labelPos: function () {
      if (this.position.includes(this.labelPosition)) {
        return this.labelPosition
      } else {
        return 'top'
      }
    },
    inputSize: function () {
      if (this.style.includes(this.inputStyle)) {
        if (this.inputSm) {
          return `input-${this.inputStyle}-sm`
        }
        if (this.inputLg) {
          return `input-${this.inputStyle}-lg`
        }
        return null
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>
.form-content {
  width: 100%;
}

.input-content {
  width: 100%;
  position: relative;
  margin-top: 5px;
}

.input-group-content {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.input-group-content label.label-basic-control {
  width: 100%;
}

.input-group-content input.input-basic-control {
  padding: .375rem .75rem;
  border-radius: 5px;
  border: 1px solid #ced4da;
  width: 100%;
  /*margin-top: 5px;*/
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

input.input-basic-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
}

.input-group-content input.input-borderBottomLeft-control {
  padding: .375rem 0;
  border: 0;
  border-bottom: 1px solid #ced4da;
  width: 100%;
  /*margin-top: 2px;*/
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  color: #495057;
  outline: 0;
}

.borderStyle-borderBottomLeft {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  width: 0;
  background: rgb(0, 123, 255);
  transition: all .3s;
}

input.input-borderLeft-control:focus ~ .borderStyle-borderBottomLeft {
  color: #495057;
  width: 100%;
}

.input-group-content input.input-borderBottomCenter-control {
  padding: .375rem 0;
  border: 0;
  border-bottom: 1px solid #ced4da;
  width: 100%;
  /*margin-top: 5px;*/
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  color: #495057;
  outline: 0;
}

.borderStyle-borderBottomCenter {
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 1px;
  width: 0;
  background: rgb(0, 123, 255);
  transition: all .3s;
}

input.input-borderCenter-control:focus ~ .borderStyle-borderBottomCenter {
  color: #495057;
  width: 100%;
  left: 0;
}

.input-group-content input.input-borderBottomRight-control {
  padding: .375rem 0;
  border: 0;
  border-bottom: 1px solid #ced4da;
  width: 100%;
  /*margin-top: 5px;*/
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  color: #495057;
  outline: 0;
}

.borderStyle-borderBottomRight {
  position: absolute;
  left: 100%;
  bottom: 0;
  height: 1px;
  width: 0;
  background: rgb(0, 123, 255);
  transition: all .3s;
}

input.input-borderRight-control:focus ~ .borderStyle-borderBottomRight {
  color: #495057;
  width: 100%;
  left: 0;
}

.input-group-content input.input-borderStartBottom-control {
  padding: .375rem 0;
  border: 1px solid transparent;
  border-bottom: 1px solid #ced4da;
  width: 100%;
  /*margin-top: 2px;*/
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  color: #495057;
  outline: 0;
  transition: all .3s;
}

.borderStyle-borderStartBottom {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  border: 1px solid transparent;
  background: transparent;
  transition: all .3s;
  z-index: 1;
}

input.input-borderStartBottom-control:focus{
  padding: .375rem .75rem;
  transition: all .3s;
}

input.input-borderStartBottom-control:focus ~ .borderStyle-borderStartBottom {
  height: 100%;
  border: 2px solid rgb(0, 123, 255);
  transition: all .3s;
  color: #495057;
}

.input-group-content input.input-basic-sm {
  padding: .25rem .5rem;
  font-size: .875rem;
}

.input-group-content input.input-basic-lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
}

.input-group-content input.input-borderLeft-sm {
  padding: .25rem 0;
  font-size: .875rem;
}

.input-group-content input.input-borderLeft-lg {
  padding: .5rem 0;
  font-size: 1.25rem;
}

.input-group-content input.input-borderCenter-sm {
  padding: .25rem 0;
  font-size: .875rem;
}

.input-group-content input.input-borderCenter-lg {
  padding: .5rem 0;
  font-size: 1.25rem;
}

.input-group-content input.input-borderRight-sm {
  padding: .25rem 0;
  font-size: .875rem;
}

.input-group-content input.input-borderRight-lg {
  padding: .5rem 0;
  font-size: 1.25rem;
}

</style>
