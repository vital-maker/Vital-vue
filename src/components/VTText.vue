<template>
  <p
    :class="[fontBold,fontItalic,fontLight,fontBolder,backGroundColor,textStyleValue,textStyleDecoration]"
    :style="[textStyleShadow]"
  >
    {{ allTextWords }}
  </p>
</template>

<script>
export default {
  name: 'VTText',
  props: {
    text: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar congue tellus, vel pretium lorem dapibus a.'
    },
    words: {
      type: [String, Number],
      default: null,
      validator (value) {
        return Number(value)
      }
    },
    character: {
      type: [String, Number],
      default: null,
      validator (value) {
        return Number(value)
      }
    },
    endPoint: {
      type: String,
      default: ''
    },
    wordSeparator: {
      type: String,
      default: ' '
    },
    charSeparator: {
      type: String,
      default: ''
    }
  },
  computed: {
    allTextWords: function () {
      if (this.words !== null) {
        return this.text.split(' ').splice(0, this.words).join(this.wordSeparator) + this.endPoint
      } else if (this.character !== null) {
        return this.text.split('').splice(0, this.character).join(this.charSeparator) + this.endPoint
      } else {
        return this.text + this.endPoint
      }
    }
  }
}
</script>

<style scoped>

</style>
