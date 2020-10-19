<template>
  <p
    class="card-text"
    :class="[fontBold,fontItalic,fontLight,fontBolder,backGroundColor,textStyleValue,textStyleDecoration]"
    :style="[textStyleShadow]"
  >
    <slot>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
      congue tellus, vel pretium lorem dapibus a.
    </slot>
  </p>
</template>

<script>
export default {
  name: 'VTCardText'
}
</script>

<style scoped>

</style>
