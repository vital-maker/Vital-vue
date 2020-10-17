const mixins = {
  props: {
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    badge: {
      type: String,
      default: ''
    },
    squared: {
      type: Boolean,
      default: false
    },
    col: {
      type: Boolean,
      default: false
    },
    xs: {
      type: [String, Number],
      default: ''
    },
    sm: {
      type: [String, Number],
      default: ''
    },
    md: {
      type: [String, Number],
      default: ''
    },
    lg: {
      type: [String, Number],
      default: ''
    },
    xl: {
      type: [String, Number],
      default: ''
    },
    align: {
      type: String,
      default: null
    },
    justify: {
      type: String,
      default: null
    },
    colsXs: {
      type: [String, Number],
      default: null
    },
    colsSm: {
      type: [String, Number],
      default: null
    },
    colsMd: {
      type: [String, Number],
      default: null
    },
    colsLg: {
      type: [String, Number],
      default: null
    },
    colsXl: {
      type: [String, Number],
      default: null
    },
    alert: {
      type: Boolean,
      default: false
    },
    dropdown: {
      type: Boolean,
      default: false
    },
    cardLink: {
      type: Boolean,
      default: false
    },
    muted: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'h6'
    }
  },
  data () {
    return {
      btnColorClasses: [
        'info',
        'danger',
        'primary',
        'warning',
        'success',
        'secondary',
        'light',
        'black',
        'aqua',
        'dark'
      ],
      btnColorLink: ['link'],
      btnOutlineColorClasses: [
        'outline-primary',
        'outline-secondary',
        'outline-success',
        'outline-danger',
        'outline-warning',
        'outline-info',
        'outline-light',
        'outline-dark'
      ],
      btnSizeArray: [
        'sm', 'lg'
      ],
      rowColumns: ['1', '2', '3', '4', '5', '6'],
      columns: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'],
      gridValues: ['sm', 'md', 'lg', 'xl'],
      alignOptions: ['start', 'center', 'end'],
      justifyOptions: ['start', 'center', 'end', 'around', 'between', 'evenly'],
      target: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    }
  },
  computed: {
    btnColorArray: function () {
      return [...this.btnColorClasses, ...this.btnColorLink, ...this.btnOutlineColorClasses]
    },
    btnToggle: function () {
      let toggle = ''
      switch (this.toggle) {
        case true:
          toggle = 'dropdown-toggle'
          break
        default:
          toggle = null
      }
      return toggle
    },
    btnSquared: function () {
      let squared = ''
      switch (this.squared) {
        case true:
          squared = 'rounded-0'
          break
        default:
          squared = null
      }
      return squared
    },
    btnRounded: function () {
      let rounded = ''
      switch (this.rounded) {
        case true:
          rounded = 'rounded-pill'
          break
        default:
          rounded = null
      }
      return rounded
    },
    btnBlock: function () {
      let block = ''
      switch (this.block) {
        case true:
          block = 'btn-block'
          break
        default:
          block = null
      }
      return block
    },
    btnSize: function () {
      let size = ''
      if (this.btnSizeArray.includes(this.size)) {
        size = `btn-${this.size}`
      } else {
        size = null
      }
      return size
    },
    btnColor: function () {
      let color = ''
      if (this.btnColorArray.includes(this.color)) {
        color = `btn btn-${this.color}`
      } else {
        color = null
      }
      return color
    },
    btnBadge: function () {
      let badge = ''
      if (this.btnColorClasses.includes(this.badge)) {
        badge = `badge badge-${this.badge}`
      } else {
        badge = null
      }
      return badge
    },
    gridSystem: function () {
      let grid = ''
      if (this.col === true) {
        grid += 'col '
      }
      if ([...this.columns, ...this.gridValues].includes(String(this.xs))) {
        grid += `col-${this.xs} `
      }
      if (this.columns.includes(String(this.sm))) {
        grid += `col-sm-${this.sm} `
      }
      if (this.columns.includes(String(this.md))) {
        grid += `col-md-${this.md} `
      }
      if (this.columns.includes(String(this.lg))) {
        grid += `col-lg-${this.lg} `
      }
      if (this.columns.includes(String(this.xl))) {
        grid += `col-xl-${this.xl}`
      }
      return grid
    },
    justifyContent: function () {
      let justify = null
      if (this.justifyOptions.includes(this.justify)) {
        justify = `justify-content-${this.justify}`
      }
      return justify
    },
    alignItem: function () {
      let align = null
      if (this.alignOptions.includes(this.align)) {
        align = `align-items-${this.align}`
      }
      return align
    },
    rowGridSystem: function () {
      let grid = ''
      if (this.rowColumns.includes(String(this.colsXs))) {
        grid += `row-cols-${this.colsXs} `
      }
      if (this.rowColumns.includes(String(this.colsSm))) {
        grid += `row-cols-sm-${this.colsSm} `
      }
      if (this.rowColumns.includes(String(this.colsMd))) {
        grid += `row-cols-md-${this.colsMd} `
      }
      if (this.rowColumns.includes(String(this.colsLg))) {
        grid += `row-cols-lg-${this.colsLg} `
      }
      if (this.rowColumns.includes(String(this.colsXl))) {
        grid += `row-cols-xl-${this.colsXl}`
      }
      return grid
    },
    typeAlert: function () {
      let alert = ''
      switch (this.alert) {
        case true:
          alert = 'alert-link'
          break
        default:
          alert = null
      }
      return alert
    },
    dropdownLink: function () {
      let dropDown = ''
      switch (this.dropdown) {
        case true:
          dropDown = 'dropdown-item'
          break
        default:
          dropDown = null
      }
      return dropDown
    },
    activeCardLink: function () {
      let link = null
      if (this.cardLink === true) {
        link = 'card-link'
      }
      return link
    },
    tagTarget: function () {
      if (this.target.includes(this.tag)) {
        return this.tag
      } else {
        return 'h5'
      }
    },
    titleMuted: function () {
      let mute = null
      if (this.muted) {
        mute = 'text-muted'
      }
      return mute
    }
  }
}

export default mixins
