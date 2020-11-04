<template>
  <div class="ripple"></div>
</template>

<script>
export default {
  name: 'VTRippleSpin'
}
</script>

<style scoped>
/*
 * ripple
 */
.ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.ripple:before,
.ripple:after {
  content: '';
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: rippleLoad 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.ripple:before {
  animation-delay: -0.5s;
}

@keyframes rippleLoad {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
