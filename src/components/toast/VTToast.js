import successFlat from '@/assets/svg/successFlat.svg'
import errorFlat from '@/assets/svg/errorFlat.svg'
import warningFlat from '@/assets/svg/warningFlat.svg'
import infoFlat from '@/assets/svg/infoFlat.svg'
import success from '@/assets/svg/success.svg'
import error from '@/assets/svg/error.svg'
import warning from '@/assets/svg/warning.svg'
import info from '@/assets/svg/info.svg'

const arrayPosition = [
  'top-right',
  'bottom-right',
  'top-left',
  'bottom-left',
  'top-center',
  'bottom-center',
  'top-full',
  'bottom-full'
]

// function isString (string) {
//   return typeof string === 'string'
// }
//
// function isBoolean (boolean) {
//   return typeof boolean === 'boolean'
// }

function VTToast ({
  type = 'success',
  header = true,
  headMessage = '',
  message = 'this is an amazing toast',
  enter = 'fadeIn',
  leave = 'fadeOut',
  close = true,
  removeOnClick = false,
  method = 'clone',
  appear = 'before',
  timeOut = '1',
  icon = true,
  progressTimeout = true,
  position = 'top-right',
  mode = 'toast',
  flat = false,
  click
}) {
  if (arrayPosition.includes(position)) {
    const container = document.querySelector(`.container-toast.${position}`)
    if (!container) {
      createToastContainer(position)
    }
  } else {
    console.error(`this position ${position} is not defined`)
    return
  }
  let el
  let time
  if (mode === 'toast') {
    if (removeOnClick) {
      progressTimeout = false
    }
    el = toast(
      headMessage,
      message,
      header,
      type,
      close,
      method,
      progressTimeout,
      enter,
      leave,
      timeOut,
      icon,
      flat
    )
    el.classList.add('animated', enter)
    if (flat) {
      el.classList.add(`VTToast-flat-${type}`)
    } else {
      el.classList.add(`VTToast-${type}`)
    }
    el.addEventListener('click', click)
    if (removeOnClick) {
      el.addEventListener('click', () => {
        el.classList.remove(enter)
        el.classList.add(leave)
        setTimeout(() => {
          el.remove()
        }, 1000)
      })
    } else {
      time = timeIsOut(el, enter, leave, timeOut)
      el.addEventListener('mouseenter', () => {
        resetAnimation(el.querySelector('.progress-timeout div'))
        clearTimeout(time)
      })
      el.addEventListener('mouseleave', () => {
        time = timeIsOut(el, enter, leave, 1)
      })
    }
  } else if (mode === 'bootstrap') {
    el = bootstrap(headMessage, message, enter, leave, type)
    el.classList.add('animated', enter)
    el.classList.add(`VTToast-${type}`)
    el.querySelector('.toast-header').classList.add(`VTToast-${type}`)
    if (removeOnClick) {
      el.addEventListener('click', () => {
        el.classList.remove(enter)
        el.classList.add(leave)
        setTimeout(() => {
          el.remove()
        }, 1000)
      })
    } else {
      time = removeToast(el, enter, leave, timeOut)
      el.addEventListener('mouseenter', () => {
        clearTimeout(time)
      })
      el.addEventListener('mouseleave', () => {
        time = removeToast(el, enter, leave, 1)
      })
    }
  }
  switch (appear) {
    case 'before':
      document.querySelector(`.container-toast.${position}`).prepend(el)
      break
    case 'after':
      document.querySelector(`.container-toast.${position}`).append(el)
      break
    default:
      document.querySelector(`.container-toast.${position}`).prepend(el)
  }
  // console.log(el.querySelector('.progress-timeout').style.width = '100%')
}

const toast = (
  headMessage,
  message,
  header,
  type,
  close,
  method,
  progressTimeout,
  enter,
  leave,
  timeOut,
  icon,
  flatImg
) => {
  // variables
  const VTToast = createElement('div')
  const VTClose = createElement('span')
  const VTProgressContainer = createElement('div')
  const VTProgress = createElement('div')
  const mode = createElement('div')
  const modeImg = createElement('img')
  const VTToastContainer = createElement('div')
  const VTToastHeader = createElement('div')
  const h5 = createElement('h5')
  const VTToastContent = createElement('div')
  const VTToastMessage = createElement('p')

  // add classes
  VTToast.classList.add('VTToast')
  VTClose.classList.add('close-toast')
  VTProgressContainer.classList.add('progress-timeout')
  mode.classList.add('mode')
  modeImg.width = '35'
  switch (type) {
    case 'success':
      modeImg.src = isFlat(flatImg, successFlat, success)
      break
    case 'error':
      modeImg.src = isFlat(flatImg, errorFlat, error)
      break
    case 'warning':
      modeImg.src = isFlat(flatImg, warningFlat, warning)
      break
    case 'info':
      modeImg.src = isFlat(flatImg, infoFlat, info)
      break
    case 'default':
      icon = false
      break
    default:
      icon = false
    // modeImg.src = success
  }
  VTToastContainer.classList.add('VTToast-container')
  VTToastHeader.classList.add('VTToast-header')
  VTToastContent.classList.add('VTToast-content')
  VTToastMessage.classList.add('message')
  if (headMessage === '') {
    h5.innerText = type
  } else {
    h5.innerText = headMessage
  }
  if (typeof message === 'object') {
    if (method === 'clone') {
      VTToastMessage.appendChild(message.cloneNode(true))
    } else if (method === 'append') {
      VTToastMessage.append(message)
    }
  } else if (typeof message === 'string') {
    VTToastMessage.append(message)
  }

  //  append children
  VTToastHeader.appendChild(h5)
  VTToastContent.appendChild(VTToastMessage)
  mode.appendChild(modeImg)
  VTProgress.classList.add('width-animation')
  VTProgressContainer.append(VTProgress)
  if (header) {
    VTToastContainer.append(VTToastHeader, VTToastContent)
  } else {
    VTToastContainer.append(VTToastContent)
  }
  if (close) {
    VTToast.append(VTClose)
  }
  if (progressTimeout) {
    VTToast.append(VTProgressContainer)
  }
  if (icon) {
    VTToast.append(mode)
  }
  VTToast.append(VTToastContainer)
  VTClose.addEventListener('click', () => {
    removeToast(VTToast, enter, leave, 0)
  })
  return VTToast
}

const bootstrap = (headMessage, message, enter, leave, type) => {
  const toast = createElement('div')
  const toastHeader = createElement('div')
  // const toastImg = createElement('img')
  const toastHead = createElement('strong')
  const toastSmall = createElement('small')
  const toastClose = createElement('button')
  const toastIcon = createElement('span')
  const toastBody = createElement('div')

  //  add classes
  toast.classList.add('toast', 'b-toast-success')
  toast.setAttribute('role', 'alert')
  toast.setAttribute('aria-live', 'assertive')
  toast.setAttribute('aria-atomic', 'true')

  toastHeader.classList.add('toast-header')

  // toastImg.src = error
  // toastImg.classList.add('rounded', 'mr-2')
  // toastImg.width = '20'

  toastHead.classList.add('mr-auto')
  if (headMessage === '') {
    toastHead.innerText = type
  } else {
    toastHead.innerText = headMessage
  }

  toastSmall.innerText = '11 mins ago'

  toastClose.classList.add('ml-2', 'mb-1', 'close')
  toastClose.setAttribute('type', 'button')
  toastClose.setAttribute('data-dismiss', 'toast')
  toastClose.setAttribute('aria-label', 'close')

  toastIcon.setAttribute('aria-hidden', 'true')
  toastIcon.innerHTML = '×'

  toastBody.classList.add('toast-body')
  toastBody.append(message)

  //  append children
  toastClose.append(toastIcon)
  toastHeader.append(
    // toastImg,
    toastHead,
    toastSmall,
    toastClose
  )
  toast.append(toastHeader, toastBody)
  toastClose.addEventListener('click', () => {
    removeToast(toast, enter, leave, 0)
  })
  return toast
}

function createElement (element) {
  return document.createElement(element)
}

function isFlat (flat, imgFlat, img) {
  if (flat) {
    return imgFlat
  } else {
    return img
  }
}

function removeToast (el, enter = 'fadeIn', leave = 'fadeOut', timeOut = 5) {
  return setTimeout(() => {
    el.classList.remove(enter)
    el.classList.add(leave)
    setTimeout(() => {
      el.remove()
    }, 1000)
  }, Number(timeOut) * 1000)
}

function timeIsOut (el, enter = 'fadeIn', leave = 'fadeOut', timeOut = 5) {
  setTimeout(() => {
    el.querySelector('.progress-timeout div').classList.add('width-animation')
    el.querySelector('.progress-timeout div').style.animationDuration = timeOut + 's'
  }, 100)
  return removeToast(el, enter, leave, timeOut)
}

function resetAnimation (el) {
  el.classList.remove('width-animation')
}

function createToastContainer (toastPosition) {
  const container = createElement('div')
  container.classList.add('container-toast', toastPosition)
  document.body.appendChild(container)
}

export default VTToast
