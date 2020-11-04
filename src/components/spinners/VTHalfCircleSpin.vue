<template>
  <div class="halfCircle">
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'VTHalfCircleSpin'
}
</script>

<style scoped>
/*
 * halfCircle
 */
.halfCircle {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: relative;
}

.halfCircle div:before,
.halfCircle div:after{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(60px / 10) solid transparent;
}

.halfCircle div:before {
  border-top-color: #ff1d5e;
  animation: halfCircleLoad 1s infinite;
}

.halfCircle div:after {
  border-bottom-color: #ff1d5e;
  animation: halfCircleLoad 1s infinite alternate;
}

@keyframes halfCircleLoad {
  0% {
    transform: rotate(0deg);

  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
