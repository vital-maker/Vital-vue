<template>
  <div class="pixel"></div>
</template>

<script>
export default {
  name: 'VTPixelSpin'
}
</script>

<style scoped>
/*
 * pixel
 */
.pixel {
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.pixel:before {
  content: '';
  width: calc(70px / 7);
  height: calc(70px / 7);
  background-color: #ff1d5e;
  color: #ff1d5e;
  box-shadow: 15px 15px  0 0,
  -15px -15px  0 0,
  15px -15px  0 0,
  -15px 15px  0 0,
  0 15px  0 0,
  15px 0  0 0,
  -15px 0  0 0,
  0 -15px 0 0;
  animation: pixelLoad 2000ms linear infinite;
}

@keyframes pixelLoad {
  50% {
    box-shadow: 20px 20px 0 0,
    -20px -20px 0 0,
    20px -20px 0 0,
    -20px 20px 0 0,
    0 10px 0 0,
    10px 0 0 0,
    -10px 0 0 0,
    0 -10px 0 0;
  }
  75% {
    box-shadow: 20px 20px 0 0,
    -20px -20px 0 0,
    20px -20px 0 0,
    -20px 20px 0 0,
    0 10px 0 0,
    10px 0 0 0,
    -10px 0 0 0,
    0 -10px 0 0;
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
