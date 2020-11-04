<template>
  <div class="circleLazy"></div>
</template>

<script>
export default {
  name: 'VTCircleLazySpin'
}
</script>

<style scoped>
/*
 * circle Lazy
 */
.circleLazy,
.circleLazy:before,
.circleLazy:after {
  border-radius: 50%;
}

.circleLazy {
  color: #ffffff;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}

.circleLazy:before,
.circleLazy:after {
  position: absolute;
  content: '';
}

.circleLazy:before {
  width: 5.2em;
  height: 10.2em;
  background: #007bff;
  border-radius: 10.2em 0 0 10.2em;
  top: -0.1em;
  left: -0.1em;
  -webkit-transform-origin: 5.1em 5.1em;
  transform-origin: 5.1em 5.1em;
  -webkit-animation: circleRotate 2s infinite ease 1.5s;
  animation: circleRotate 2s infinite ease 1.5s;
}

.circleLazy:after {
  width: 5.2em;
  height: 10.2em;
  background: #007bff;
  border-radius: 0 10.2em 10.2em 0;
  top: -0.1em;
  left: 4.9em;
  -webkit-transform-origin: 0.1em 5.1em;
  transform-origin: 0.1em 5.1em;
  -webkit-animation: circleRotate 2s infinite ease;
  animation: circleRotate 2s infinite ease;
}
</style>
