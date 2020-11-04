<template>
  <div class="scale" :class="['scale-' + scaleType]"></div>
</template>

<script>
export default {
  name: 'VTScaleSpin',
  props: {
    scaleType: {
      type: String,
      default: 'in',
      validator: (value) => {
        return value.toLowerCase()
      }
    }
  }
}
</script>

<style scoped>
/*
 * scaleIn, scaleOut
 */
.scale {
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #ffffff;
  border-radius: 100%;
}

.scale-in {
  -webkit-animation: scaleLoad 1.0s infinite ease-in-out;
  animation: scaleLoad 1.0s infinite ease-in-out;
}

.scale-out {
  -webkit-animation: scaleLoad reverse 1.0s infinite ease-in-out;
  animation: scaleLoad reverse 1.0s infinite ease-in-out;
}

@-webkit-keyframes scaleLoad {
  0% {
    -webkit-transform: scale(0)
  }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes scaleLoad {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>
