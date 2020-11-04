<template>
  <div class="foldingCube">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'VTFoldingCubeSpin'
}
</script>

<style scoped>
/*
 * folding Cube
 */
.foldingCube {
  /*margin: 20px auto;*/
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

.foldingCube div {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.foldingCube div:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  -webkit-animation: foldingCubeLoad 2.4s infinite linear both;
  animation: foldingCubeLoad 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.foldingCube div:nth-child(2) {
  -webkit-transform: scale(1.1) rotateZ(90deg);
  transform: scale(1.1) rotateZ(90deg);
}

.foldingCube div:nth-child(3) {
  -webkit-transform: scale(1.1) rotateZ(270deg);
  transform: scale(1.1) rotateZ(270deg);
}

.foldingCube div:nth-child(4) {
  -webkit-transform: scale(1.1) rotateZ(180deg);
  transform: scale(1.1) rotateZ(180deg);
}

.foldingCube div:nth-child(2):before {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.foldingCube div:nth-child(3):before {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}

.foldingCube div:nth-child(4):before {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

@-webkit-keyframes foldingCubeLoad {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

@keyframes foldingCubeLoad {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
</style>
