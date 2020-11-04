<template>
  <div ref="VTTooltip" class="VTTooltip" role="tooltip">
    <div class="VTTooltip-arrow"></div>
    <div class="VTTooltip-content">
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTTooltip',
  props: {
    target: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: 'some text'
    },
    position: {
      type: String,
      default: null
    }
  },
  methods: {
    opacityHide: function (event) {
      const el = this.$refs.VTTooltip
      if (event.toElement !== el) {
        el.style.opacity = 0
        setTimeout(() => {
          el.style = ''
        }, 300)
      }
    }
  },
  data () {
    return {
      active: false
    }
  },
  mounted () {
    const el = this.$refs.VTTooltip
    const target = document.querySelectorAll(`[data-tooltip='${this.target}']`)
    target.forEach((item) => {
      document.body.appendChild(el)
      el.addEventListener('mouseover', () => {
        el.style.opacity = 1
      })

      item.addEventListener('mouseover', () => {
        const rect = item.getBoundingClientRect()
        const win = item.ownerDocument.defaultView
        el.style.top = '0'
        el.style.left = '0'
        el.style.opacity = 1
        if (this.position === 'top-left') {
          el.children[0].classList.add('top')
          el.children[0].style.left = 'unset'
          el.style.transform = `translate3d(${(rect.left)}px, ${(rect.top - el.getBoundingClientRect().height) + win.pageYOffset}px, 0px)`
        } else if (this.position === 'top-right') {
          el.children[0].classList.add('top')
          el.children[0].style.left = 'calc(100% - 25px)'
          el.style.transform = `translate3d(${(rect.left + (rect.width)) - el.getBoundingClientRect().width}px, ${(rect.top - el.getBoundingClientRect().height) + win.pageYOffset}px, 0px)`
        } else if (this.position === 'bottom') {
          el.children[0].classList.add('bottom')
          el.style.transform = `translate3d(${(rect.left + (rect.width / 2)) - el.getBoundingClientRect().width / 2}px, ${(rect.top + rect.height) + win.pageYOffset}px, 0px)`
        } else if (this.position === 'bottom-left') {
          el.children[0].style.left = 'unset'
          el.children[0].classList.add('bottom')
          el.style.transform = `translate3d(${(rect.left)}px, ${(rect.top + rect.height) + win.pageYOffset}px, 0px)`
        } else if (this.position === 'bottom-right') {
          el.children[0].style.left = 'calc(100% - 25px)'
          el.children[0].classList.add('bottom')
          el.style.transform = `translate3d(${(rect.left + (rect.width)) - el.getBoundingClientRect().width}px, ${(rect.top + rect.height) + win.pageYOffset}px, 0px)`
        } else if (this.position === 'right') {
          el.children[0].classList.add('right')
          el.style.transform = `translate3d(${(rect.left + (rect.width))}px, ${(rect.top + rect.height / 2 - el.getBoundingClientRect().height / 2) + win.pageYOffset}px, 0px)`
        } else if (this.position === 'right-top') {
          el.children[0].classList.add('right')
          el.children[0].style.top = 'unset'
          el.style.transform = `translate3d(${(rect.left + (rect.width))}px, ${(rect.top) + win.pageYOffset}px, 0px)`
        } else if (this.position === 'right-bottom') {
          el.children[0].classList.add('right')
          el.children[0].style.top = 'calc(100% - 25px)'
          el.style.transform = `translate3d(${(rect.left + (rect.width))}px, ${(rect.top + rect.height - el.getBoundingClientRect().height) + win.pageYOffset}px, 0px)`
        } else if (this.position === 'left') {
          el.children[0].classList.add('left')
          el.style.transform = `translate3d(${(rect.left - el.getBoundingClientRect().width)}px, ${(rect.top + rect.height / 2 - el.getBoundingClientRect().height / 2) + win.pageYOffset}px, 0px)`
        } else if (this.position === 'left-top') {
          el.children[0].classList.add('left')
          el.children[0].style.top = 'unset'
          el.style.transform = `translate3d(${(rect.left - el.getBoundingClientRect().width)}px, ${(rect.top) + win.pageYOffset}px, 0px)`
        } else if (this.position === 'left-bottom') {
          el.children[0].classList.add('left')
          el.children[0].style.top = 'calc(100% - 25px)'
          el.style.transform = `translate3d(${(rect.left - el.getBoundingClientRect().width)}px, ${(rect.top + rect.height - el.getBoundingClientRect().height) + win.pageYOffset}px, 0px)`
        } else {
          el.children[0].classList.add('top')
          el.style.transform = `translate3d(${(rect.left + (rect.width / 2)) - el.getBoundingClientRect().width / 2}px, ${(rect.top - el.getBoundingClientRect().height) + win.pageYOffset}px, 0px)`
        }
      })
      item.addEventListener('mouseleave', this.opacityHide)
      el.addEventListener('mouseleave', (e) => {
        if (e.toElement !== item) {
          if (this.active === false) {
            el.style.opacity = 0
            setTimeout(() => {
              el.style = ''
            }, 300)
          }
        }
      })
      item.addEventListener('click', () => {
        item.removeEventListener('mouseleave', this.opacityHide)
      })
      window.addEventListener('click', (e) => {
        if (item.contains(e.target) || el.contains(e.target)) {
          el.style.opacity = 1
          this.active = true
        } else {
          el.style.opacity = 0
          this.active = false
          setTimeout(() => {
            el.style = ''
          }, 300)
          item.addEventListener('mouseleave', this.opacityHide)
          // item.addEventListener('mouseleave', this.opacityHide)
        }
      })
    })
  }
}
</script>

<style scoped>
.VTTooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  top: -10000px;
  left: -10000px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: .875rem;
  word-wrap: break-word;
  opacity: 0;
  padding: 6px;
  transition: opacity .3s linear;
}

.VTTooltip .VTTooltip-arrow {
  position: absolute;
  display: block;
  width: .8rem;
  height: .4rem;
  margin: 0 5px;
  left: calc(50% - 10px);
}

.VTTooltip .VTTooltip-arrow:before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.VTTooltip .VTTooltip-arrow.top {
  bottom: 0;
  left: calc(50% - 10px);
}

.VTTooltip .VTTooltip-arrow.top:before {
  border-width: .4rem .4rem 0;
  border-top-color: #000;
}

.VTTooltip .VTTooltip-arrow.bottom {
  top: 0;
  bottom: unset;
}

.VTTooltip .VTTooltip-arrow.bottom:before {
  border-bottom-color: black;
  border-width: 0 .4rem .4rem;
}

.VTTooltip .VTTooltip-arrow.right {
  left: 0;
  width: .4rem;
  height: .8rem;
  margin: 5px 0;
  top: calc(50% - 10px);
  /*bottom: unset;*/
}

.VTTooltip .VTTooltip-arrow.right:before {
  border-right-color: black;
  border-width: .4rem .4rem .4rem 0;
  right: 0;
}

.VTTooltip .VTTooltip-arrow.left {
  right: 0;
  width: .4rem;
  height: .8rem;
  margin: 5px 0;
  top: calc(50% - 10px);
  left: unset;
  /*bottom: unset;*/
}

.VTTooltip .VTTooltip-arrow.left:before {
  border-left-color: black;
  border-width: .4rem 0 .4rem .4rem;
  left: 0;
}

.VTTooltip .VTTooltip-content {
  max-width: 200px;
  padding: .25rem .5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: .25rem;
}
</style>
