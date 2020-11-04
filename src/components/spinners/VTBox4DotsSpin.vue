<template>
  <div class="box4Dots"></div>
</template>

<script>
export default {
  name: 'VTBox4DotsSpin'
}
</script>

<style scoped>
/*
 * box4Dots
 */
.box4Dots {
  /*position: absolute;*/
  /*margin: auto;*/
  /*left: 50%;*/
  /*top: 50%;*/
  /*transform: translate(-50%,-50%);*/
  width: 9px;
  height: 9px;
  border-radius: 100%;
  box-shadow: 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223);
  -o-box-shadow: 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223);
  -ms-box-shadow: 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223);
  -webkit-box-shadow: 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223);
  -moz-box-shadow: 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223);
  animation: box4DotsLoad ease infinite 4.6s;
  -o-animation: box4DotsLoad ease infinite 4.6s;
  -ms-animation: box4DotsLoad ease infinite 4.6s;
  -webkit-animation: box4DotsLoad ease infinite 4.6s;
  -moz-animation: box4DotsLoad ease infinite 4.6s;
}

@keyframes box4DotsLoad {
  0%,
  100% {
    box-shadow: 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223);
  }
  25% {
    box-shadow: -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223), 9px 9px rgb(79, 77, 73);
  }
  50% {
    box-shadow: -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223), 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223);
  }
  75% {
    box-shadow: 9px -9px #dfdfdf, 9px 9px #4f4d49, -9px 9px #dfdfdf, -9px -9px #4f4d49;
  }
}

@-o-keyframes box4DotsLoad {
  0%,
  100% {
    box-shadow: 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223);
  }
  25% {
    box-shadow: -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223), 9px 9px rgb(79, 77, 73);
  }
  50% {
    box-shadow: -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223), 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223);
  }
  75% {
    box-shadow: 9px -9px #dfdfdf, 9px 9px #4f4d49, -9px 9px #dfdfdf, -9px -9px #4f4d49;
  }
}

@-ms-keyframes box4DotsLoad {
  0%,
  100% {
    box-shadow: 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223);
  }
  25% {
    box-shadow: -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223), 9px 9px rgb(79, 77, 73);
  }
  50% {
    box-shadow: -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223), 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223);
  }
  75% {
    box-shadow: 9px -9px #dfdfdf, 9px 9px #4f4d49, -9px 9px #dfdfdf, -9px -9px #4f4d49;
  }
}

@-webkit-keyframes box4DotsLoad {
  0%,
  100% {
    box-shadow: 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223);
  }
  25% {
    box-shadow: -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223), 9px 9px rgb(79, 77, 73);
  }
  50% {
    box-shadow: -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223), 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223);
  }
  75% {
    box-shadow: 9px -9px #dfdfdf, 9px 9px #4f4d49, -9px 9px #dfdfdf, -9px -9px #4f4d49;
  }
}

@-moz-keyframes box4DotsLoad {
  0%,
  100% {
    box-shadow: 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223);
  }
  25% {
    box-shadow: -9px 9px rgb(223, 223, 223), -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223), 9px 9px rgb(79, 77, 73);
  }
  50% {
    box-shadow: -9px -9px rgb(79, 77, 73), 9px -9px rgb(223, 223, 223), 9px 9px rgb(79, 77, 73), -9px 9px rgb(223, 223, 223);
  }
  75% {
    box-shadow: 9px -9px #dfdfdf, 9px 9px #4f4d49, -9px 9px #dfdfdf, -9px -9px #4f4d49;
  }
}
</style>
