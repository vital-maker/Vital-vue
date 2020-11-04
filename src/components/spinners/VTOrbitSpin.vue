<template>
  <div class="orbit">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'VTOrbitSpin'
}
</script>

<style scoped>
/*
 * orbit
 */
.orbit {
  position: relative;
  /*left: calc(50% - 31px);*/
  width: 62px;
  height: 62px;
  border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  perspective: 780px;
}

.orbit div {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
}

.orbit div:nth-child(1) {
  left: 0%;
  top: 0%;
  animation: orbitOneLoad 1.15s linear infinite;
  -o-animation: orbitOneLoad 1.15s linear infinite;
  -ms-animation: orbitOneLoad 1.15s linear infinite;
  -webkit-animation: orbitOneLoad 1.15s linear infinite;
  -moz-animation: orbitOneLoad 1.15s linear infinite;
  border-bottom: 3px solid rgb(255, 255, 255);
}

.orbit div:nth-child(2) {
  right: 0%;
  top: 0%;
  animation: orbitTwoLoad 1.15s linear infinite;
  -o-animation: orbitTwoLoad 1.15s linear infinite;
  -ms-animation: orbitTwoLoad 1.15s linear infinite;
  -webkit-animation: orbitTwoLoad 1.15s linear infinite;
  -moz-animation: orbitTwoLoad 1.15s linear infinite;
  border-right: 3px solid rgb(255, 255, 255);
}

.orbit div:nth-child(3) {
  right: 0%;
  bottom: 0%;
  animation: orbitThreeLoad 1.15s linear infinite;
  -o-animation: orbitThreeLoad 1.15s linear infinite;
  -ms-animation: orbitThreeLoad 1.15s linear infinite;
  -webkit-animation: orbitThreeLoad 1.15s linear infinite;
  -moz-animation: orbitThreeLoad 1.15s linear infinite;
  border-top: 3px solid rgb(255, 255, 255);
}

@keyframes orbitOneLoad {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-o-keyframes orbitOneLoad {
  0% {
    -o-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -o-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-ms-keyframes orbitOneLoad {
  0% {
    -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-webkit-keyframes orbitOneLoad {
  0% {
    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-moz-keyframes orbitOneLoad {
  0% {
    -moz-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -moz-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes orbitTwoLoad {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-o-keyframes orbitTwoLoad {
  0% {
    -o-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -o-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-ms-keyframes orbitTwoLoad {
  0% {
    -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-webkit-keyframes orbitTwoLoad {
  0% {
    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-moz-keyframes orbitTwoLoad {
  0% {
    -moz-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -moz-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes orbitThreeLoad {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-o-keyframes orbitThreeLoad {
  0% {
    -o-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -o-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-ms-keyframes orbitThreeLoad {
  0% {
    -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-webkit-keyframes orbitThreeLoad {
  0% {
    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-moz-keyframes orbitThreeLoad {
  0% {
    -moz-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -moz-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
