<template>
  <div class="cubeGrid">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'VTCubeGridSpin'
}
</script>

<style scoped>
/*
 * cubeGrid
 */
.cubeGrid {
  width: 40px;
  height: 40px;
  /*margin: 100px auto;*/
}

.cubeGrid div {
  width: 33%;
  height: 33%;
  background-color: #ffffff;
  float: left;
  -webkit-animation: cubeGridLoad 1.3s infinite ease-in-out;
  animation: cubeGridLoad 1.3s infinite ease-in-out;
}

.cubeGrid div:nth-child(1) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

.cubeGrid div:nth-child(2) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.cubeGrid div:nth-child(3) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.cubeGrid div:nth-child(4) {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

.cubeGrid div:nth-child(5) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

.cubeGrid div:nth-child(6) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.cubeGrid div:nth-child(7) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

.cubeGrid div:nth-child(8) {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

.cubeGrid div:nth-child(9) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@-webkit-keyframes cubeGridLoad {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}

@keyframes cubeGridLoad {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}
</style>
