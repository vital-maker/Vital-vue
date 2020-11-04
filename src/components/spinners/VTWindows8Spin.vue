<template>
  <div class="windows8">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'VTWindows8Spin'
}
</script>

<style scoped>
/*
 * windows8
 */
.windows8 {
  position: relative;
  width: 110px;
  height: 110px;
}

.windows8 div {
  position: absolute;
  width: 74px;
  height: 74px;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: rotate(225deg);
  -o-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  animation: orbit 6.96s infinite;
  -o-animation: orbit 6.96s infinite;
  -ms-animation: orbit 6.96s infinite;
  -webkit-animation: orbit 6.96s infinite;
  -moz-animation: orbit 6.96s infinite;
}

.windows8 div:before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #000000;
  left: 0;
  top: 0;
  border-radius: 50%;
}

.windows8 div:nth-child(1) {
  animation-delay: 1.52s;
  -o-animation-delay: 1.52s;
  -ms-animation-delay: 1.52s;
  -webkit-animation-delay: 1.52s;
  -moz-animation-delay: 1.52s;
}

.windows8 div:nth-child(2) {
  animation-delay: 0.3s;
  -o-animation-delay: 0.3s;
  -ms-animation-delay: 0.3s;
  -webkit-animation-delay: 0.3s;
  -moz-animation-delay: 0.3s;
}

.windows8 div:nth-child(3) {
  animation-delay: 0.61s;
  -o-animation-delay: 0.61s;
  -ms-animation-delay: 0.61s;
  -webkit-animation-delay: 0.61s;
  -moz-animation-delay: 0.61s;
}

.windows8 div:nth-child(4) {
  animation-delay: 0.91s;
  -o-animation-delay: 0.91s;
  -ms-animation-delay: 0.91s;
  -webkit-animation-delay: 0.91s;
  -moz-animation-delay: 0.91s;
}

.windows8 div:nth-child(5) {
  animation-delay: 1.22s;
  -o-animation-delay: 1.22s;
  -ms-animation-delay: 1.22s;
  -webkit-animation-delay: 1.22s;
  -moz-animation-delay: 1.22s;
}

@keyframes orbit {
  0% {
    opacity: 1;
    z-index: 99;
    transform: translate(-50%, -50%) rotate(180deg);
    animation-timing-function: ease-out;
  }

  7% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(300deg);
    animation-timing-function: linear;
    origin: 0%;
  }

  30% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(410deg);
    animation-timing-function: ease-in-out;
    origin: 7%;
  }

  39% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(645deg);
    animation-timing-function: linear;
    origin: 30%;
  }

  70% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(770deg);
    animation-timing-function: ease-out;
    origin: 39%;
  }

  75% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(900deg);
    animation-timing-function: ease-out;
    origin: 70%;
  }

  76% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(900deg);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(900deg);
  }
}

@-o-keyframes orbit {
  0% {
    opacity: 1;
    z-index: 99;
    -o-transform: translate(-50%, -50%) rotate(180deg);
    -o-animation-timing-function: ease-out;
  }

  7% {
    opacity: 1;
    -o-transform: translate(-50%, -50%) rotate(300deg);
    -o-animation-timing-function: linear;
    -o-origin: 0%;
  }

  30% {
    opacity: 1;
    -o-transform: translate(-50%, -50%) rotate(410deg);
    -o-animation-timing-function: ease-in-out;
    -o-origin: 7%;
  }

  39% {
    opacity: 1;
    -o-transform: translate(-50%, -50%) rotate(645deg);
    -o-animation-timing-function: linear;
    -o-origin: 30%;
  }

  70% {
    opacity: 1;
    -o-transform: translate(-50%, -50%) rotate(770deg);
    -o-animation-timing-function: ease-out;
    -o-origin: 39%;
  }

  75% {
    opacity: 1;
    -o-transform: translate(-50%, -50%) rotate(900deg);
    -o-animation-timing-function: ease-out;
    -o-origin: 70%;
  }

  76% {
    opacity: 0;
    -o-transform: translate(-50%, -50%) rotate(900deg);
  }

  100% {
    opacity: 0;
    -o-transform: translate(-50%, -50%) rotate(900deg);
  }
}

@-ms-keyframes orbit {
  0% {
    opacity: 1;
    z-index: 99;
    -ms-transform: translate(-50%, -50%) rotate(180deg);
    -ms-animation-timing-function: ease-out;
  }

  7% {
    opacity: 1;
    -ms-transform: translate(-50%, -50%) rotate(300deg);
    -ms-animation-timing-function: linear;
    -ms-origin: 0%;
  }

  30% {
    opacity: 1;
    -ms-transform: translate(-50%, -50%) rotate(410deg);
    -ms-animation-timing-function: ease-in-out;
    -ms-origin: 7%;
  }

  39% {
    opacity: 1;
    -ms-transform: translate(-50%, -50%) rotate(645deg);
    -ms-animation-timing-function: linear;
    -ms-origin: 30%;
  }

  70% {
    opacity: 1;
    -ms-transform: translate(-50%, -50%) rotate(770deg);
    -ms-animation-timing-function: ease-out;
    -ms-origin: 39%;
  }

  75% {
    opacity: 1;
    -ms-transform: translate(-50%, -50%) rotate(900deg);
    -ms-animation-timing-function: ease-out;
    -ms-origin: 70%;
  }

  76% {
    opacity: 0;
    -ms-transform: translate(-50%, -50%) rotate(900deg);
  }

  100% {
    opacity: 0;
    -ms-transform: translate(-50%, -50%) rotate(900deg);
  }
}

@-webkit-keyframes orbit {
  0% {
    opacity: 1;
    z-index: 99;
    -webkit-transform: translate(-50%, -50%) rotate(180deg);
    -webkit-animation-timing-function: ease-out;
  }

  7% {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(300deg);
    -webkit-animation-timing-function: linear;
    -webkit-origin: 0%;
  }

  30% {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(410deg);
    -webkit-animation-timing-function: ease-in-out;
    -webkit-origin: 7%;
  }

  39% {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(645deg);
    -webkit-animation-timing-function: linear;
    -webkit-origin: 30%;
  }

  70% {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(770deg);
    -webkit-animation-timing-function: ease-out;
    -webkit-origin: 39%;
  }

  75% {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(900deg);
    -webkit-animation-timing-function: ease-out;
    -webkit-origin: 70%;
  }

  76% {
    opacity: 0;
    -webkit-transform: translate(-50%, -50%) rotate(900deg);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate(-50%, -50%) rotate(900deg);
  }
}

@-moz-keyframes orbit {
  0% {
    opacity: 1;
    z-index: 99;
    -moz-transform: translate(-50%, -50%) rotate(180deg);
    -moz-animation-timing-function: ease-out;
  }

  7% {
    opacity: 1;
    -moz-transform: translate(-50%, -50%) rotate(300deg);
    -moz-animation-timing-function: linear;
    -moz-origin: 0%;
  }

  30% {
    opacity: 1;
    -moz-transform: translate(-50%, -50%) rotate(410deg);
    -moz-animation-timing-function: ease-in-out;
    -moz-origin: 7%;
  }

  39% {
    opacity: 1;
    -moz-transform: translate(-50%, -50%) rotate(645deg);
    -moz-animation-timing-function: linear;
    -moz-origin: 30%;
  }

  70% {
    opacity: 1;
    -moz-transform: translate(-50%, -50%) rotate(770deg);
    -moz-animation-timing-function: ease-out;
    -moz-origin: 39%;
  }

  75% {
    opacity: 1;
    -moz-transform: translate(-50%, -50%) rotate(900deg);
    -moz-animation-timing-function: ease-out;
    -moz-origin: 70%;
  }

  76% {
    opacity: 0;
    -moz-transform: translate(-50%, -50%) rotate(900deg);
  }

  100% {
    opacity: 0;
    -moz-transform: translate(-50%, -50%) rotate(900deg);
  }
}
</style>
