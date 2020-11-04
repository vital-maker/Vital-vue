<template>
  <div class="rhombuses">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'VTRhombusesSpin'
}
</script>

<style scoped>
/*
 * rhombuses
 */
.rhombuses {
  height: 15px;
  width: calc((15px + 15px * 1.125) * 3);
  display: flex;
  align-items: center;
  justify-content: center
}

.rhombuses div {
  height: 15px;
  width: 15px;
  margin-left: calc(15px * 1.125);
  transform: rotate(45deg);
  border-radius: 10%;
  border: 3px solid #ff1d5e;
  overflow: hidden;
  background: transparent;
  animation: rhombusesLoad 1200ms linear infinite;
}

.rhombuses div:nth-child(1) {
  animation-delay: calc(150ms * 1);
  margin-left: 0
}

.rhombuses div:nth-child(2) {
  animation-delay: calc(150ms * 2);
}

.rhombuses div:nth-child(3) {
  animation-delay: calc(150ms * 3);
}

@keyframes rhombusesLoad {
  0% {
    border-radius: 10%;
  }

  17.5% {
    border-radius: 10%;
  }

  50% {
    border-radius: 100%;
  }
  93.5% {
    border-radius: 10%;
  }

  100% {
    border-radius: 10%;
  }
}
</style>
