<template>
 <div class="box"></div>
</template>

<script>
export default {
  name: 'VTCircleBoxSpin'
}
</script>

<style scoped>
/*
 * box
 */
.box {
  position: relative;
  width: 150px;
  height: 150px;
  /*left: 50%;*/
  /*margin-left: -39px;*/
  /*margin-top: -39px;*/
}

.box:before {
  content: '';
  position: absolute;
  width: 150px;
  height: 150px;
  float: left;
  /* top: 50%; */
  /* margin-top: -18px; */
  left: 0;
  /* margin-left: -18px; */
  border-width: 2px 1px;
  border-style: solid;
  border-color: rgb(221, 187, 0) rgba(221, 187, 0, 0.3);
  border-radius: 50%;
  /* -o-border-radius: 50%; */
  /* -ms-border-radius: 50%; */
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  box-sizing: border-box;
  /* -o-box-sizing: border-box; */
  /* -ms-box-sizing: border-box; */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  animation: spin-a85c3394 3.45s infinite;
  /* -o-animation: spin 3.45s infinite; */
  /* -ms-animation: spin 3.45s infinite; */
  -webkit-animation: spin-a85c3394 3.45s infinite;
  -moz-animation: spin-a85c3394 3.45s infinite;
}

.box:after {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  /* margin-top: -3px; */
  left: 50%;
  transform: translate(-50%, -50%);
  /* margin-left: -3px; */
  background-color: rgb(221, 187, 0);
  border-radius: 50%;
  /* -o-border-radius: 50%; */
  /* -ms-border-radius: 50%; */
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  box-sizing: border-box;
  /* -o-box-sizing: border-box; */
  /* -ms-box-sizing: border-box; */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  animation: pulse-a85c3394 6.9s infinite, borderPulse-a85c3394 6.9s infinite;
  /* -o-animation: pulse 6.9s infinite, borderPulse 6.9s infinite; */
  /* -ms-animation: pulse 6.9s infinite, borderPulse 6.9s infinite; */
  -webkit-animation: pulse-a85c3394 6.9s infinite, borderPulse-a85c3394 6.9s infinite;
  -moz-animation: pulse-a85c3394 6.9s infinite, borderPulse-a85c3394 6.9s infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}

@-o-keyframes spin {
  0% {
    -o-transform: rotate(0deg);
  }
  50% {
    -o-transform: rotate(360deg);
  }
  100% {
    -o-transform: rotate(1080deg);
  }
}

@-ms-keyframes spin {
  0% {
    -ms-transform: rotate(0deg);
  }
  50% {
    -ms-transform: rotate(360deg);
  }
  100% {
    -ms-transform: rotate(1080deg);
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(1080deg);
  }
}

@-moz-keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
  }
  50% {
    -moz-transform: rotate(360deg);
  }
  100% {
    -moz-transform: rotate(1080deg);
  }
}

@keyframes pulse {
  0% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  13% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  15% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  28% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  30% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  43% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  45% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  70% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  74% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  100% {
    background-color: rgba(255, 234, 119, 0.9);
  }
}

@-o-keyframes pulse {
  0% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  13% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  15% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  28% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  30% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  43% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  45% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  70% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  74% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  100% {
    background-color: rgba(255, 234, 119, 0.9);
  }
}

@-ms-keyframes pulse {
  0% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  13% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  15% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  28% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  30% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  43% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  45% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  70% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  74% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  100% {
    background-color: rgba(255, 234, 119, 0.9);
  }
}

@-webkit-keyframes pulse {
  0% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  13% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  15% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  28% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  30% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  43% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  45% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  70% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  74% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  100% {
    background-color: rgba(255, 234, 119, 0.9);
  }
}

@-moz-keyframes pulse {
  0% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  13% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  15% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  28% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  30% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  43% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  45% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  70% {
    background-color: rgba(255, 234, 119, 0.9);
  }
  74% {
    background-color: rgba(221, 187, 0, 0.2);
  }
  100% {
    background-color: rgba(255, 234, 119, 0.9);
  }
}

@keyframes borderPulse {
  0% {
    box-shadow: 0 0 0 0 rgb(255, 255, 255), 0 0 0 1px rgba(221, 187, 0, 0.8);
  }
  40% {
    box-shadow: 0 0 0 1px rgb(255, 255, 255), 0 0 0 2px rgba(221, 187, 0, 0.8);
  }
  80% {
    box-shadow: 0 0 0 3px #FFF, 0 0 1px 3px rgba(221, 187, 0, 0.8);
  }
}

@-o-keyframes borderPulse {
  0% {
    box-shadow: 0 0 0 0 rgb(255, 255, 255), 0 0 0 1px rgba(221, 187, 0, 0.8);
  }
  40% {
    box-shadow: 0 0 0 1px rgb(255, 255, 255), 0 0 0 2px rgba(221, 187, 0, 0.8);
  }
  80% {
    box-shadow: 0 0 0 3px #FFF, 0 0 1px 3px rgba(221, 187, 0, 0.8);
  }
}

@-ms-keyframes borderPulse {
  0% {
    box-shadow: 0 0 0 0 rgb(255, 255, 255), 0 0 0 1px rgba(221, 187, 0, 0.8);
  }
  40% {
    box-shadow: 0 0 0 1px rgb(255, 255, 255), 0 0 0 2px rgba(221, 187, 0, 0.8);
  }
  80% {
    box-shadow: 0 0 0 3px #FFF, 0 0 1px 3px rgba(221, 187, 0, 0.8);
  }
}

@-webkit-keyframes borderPulse {
  0% {
    box-shadow: 0 0 0 0 rgb(255, 255, 255), 0 0 0 1px rgba(221, 187, 0, 0.8);
  }
  40% {
    box-shadow: 0 0 0 1px rgb(255, 255, 255), 0 0 0 2px rgba(221, 187, 0, 0.8);
  }
  80% {
    box-shadow: 0 0 0 3px #FFF, 0 0 1px 3px rgba(221, 187, 0, 0.8);
  }
}

@-moz-keyframes borderPulse {
  0% {
    box-shadow: 0 0 0 0 rgb(255, 255, 255), 0 0 0 1px rgba(221, 187, 0, 0.8);
  }
  40% {
    box-shadow: 0 0 0 1px rgb(255, 255, 255), 0 0 0 2px rgba(221, 187, 0, 0.8);
  }
  80% {
    box-shadow: 0 0 0 3px #FFF, 0 0 1px 3px rgba(221, 187, 0, 0.8);
  }
}
</style>
