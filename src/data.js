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
    justify: {
      type: String,
      default: null
    },
    justifySm: {
      type: String,
      default: null
    },
    justifyMd: {
      type: String,
      default: null
    },
    justifyLg: {
      type: String,
      default: null
    },
    justifyXl: {
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
    },
    bold: {
      type: Boolean,
      default: false
    },
    italic: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    bolder: {
      type: Boolean,
      default: false
    },
    normal: {
      type: Boolean,
      default: false
    },
    lighter: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: null
    },
    textStyle: {
      type: [Array, String],
      default: () => {
        return []
      }
    },
    textLast: {
      type: String,
      default: null
    },
    decoration: {
      type: String,
      default: null
    },
    textShadow: {
      type: Object,
      default: function () {
        return null
      }
    },
    display: {
      type: [String, Number],
      default: null,
      validator: (value) => {
        return String(value)
      }
    },
    lead: {
      type: Boolean,
      default: false
    },
    row: {
      type: Boolean,
      default: false
    },
    float: {
      type: String,
      default: null
    },
    roundedLeft: {
      type: Boolean,
      default: false
    },
    roundedRight: {
      type: Boolean,
      default: false
    },
    roundedTop: {
      type: Boolean,
      default: false
    },
    roundedBottom: {
      type: Boolean,
      default: false
    },
    roundedCircle: {
      type: Boolean,
      default: false
    },
    responsive: {
      type: Boolean,
      default: false
    },
    responsiveSm: {
      type: Boolean,
      default: false
    },
    responsiveMd: {
      type: Boolean,
      default: false
    },
    responsiveLg: {
      type: Boolean,
      default: false
    },
    responsiveXl: {
      type: Boolean,
      default: false
    },
    d: {
      type: String,
      default: null
    },
    border: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    groupItem: {
      type: Boolean,
      default: false
    },
    groupHorizontal: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: String,
      default: null
    },
    groupAction: {
      type: Boolean,
      default: false
    },
    groupItemColor: {
      type: String,
      default: null
    },
    align: {
      type: String,
      default: null
    },
    alignSelf: {
      type: String,
      default: null
    },
    alignContent: {
      type: String,
      default: null
    },
    alignItems: {
      type: String,
      default: null
    },
    alignItemsSm: {
      type: String,
      default: null
    },
    alignItemsMd: {
      type: String,
      default: null
    },
    alignItemsLg: {
      type: String,
      default: null
    },
    alignItemsXl: {
      type: String,
      default: null
    },
    alignSelfSm: {
      type: String,
      default: null
    },
    alignSelfMd: {
      type: String,
      default: null
    },
    alignSelfLg: {
      type: String,
      default: null
    },
    alignSelfXl: {
      type: String,
      default: null
    },
    alignContentSm: {
      type: String,
      default: null
    },
    alignContentMd: {
      type: String,
      default: null
    },
    alignContentLg: {
      type: String,
      default: null
    },
    alignContentXl: {
      type: String,
      default: null
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
      alignOptions: ['baseline', 'bottom', 'middle', 'top'],
      alignItemsOptions: ['start', 'center', 'end', 'baseline', 'stretch', 'flex-start', 'flex-end', 'unset'],
      alignSelfOptions: ['start', 'center', 'end', 'stretch', 'auto', 'baseline', 'flex-start', 'flex-end', 'unset'],
      alignContentOptions: ['start', 'center', 'end', 'around', 'between', 'stretch', 'flex-start', 'flex-end', 'unset'],
      justifyOptions: ['start', 'center', 'end', 'around', 'between', 'evenly'],
      headTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      target: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      bgColorOptions: ['secondary', 'light', 'danger', 'dark', 'info', 'primary', 'success', 'warning', 'transparent', 'white'],
      textColors: ['white', 'danger', 'info', 'light', 'primary', 'dark', 'secondary', 'success', 'warning'],
      textPositions: ['center', 'left', 'right', 'justify', 'end', 'start'],
      textPositionLast: ['auto'],
      textDecoration: ['none', 'unset', 'through', 'overline', 'underline'],
      textTypes: ['body', 'uppercase', 'reset', 'truncate', 'break', 'capitalize', 'hide', 'lowercase', 'monospace', 'wrap', 'nowrap', 'muted'],
      cssUnits: ['cm', 'mm', 'in', 'px', 'pt', 'pc'],
      displayOption: ['1', '2', '3', '4'],
      dOptions: ['flex', 'block', 'inline', 'none', 'table', 'inline-block', 'inline-flex'],
      floatOptions: ['left', 'right'],
      borderOptions: ['secondary', 'light', 'danger', 'dark', 'info', 'primary', 'success', 'warning'],
      horizontalOptions: ['sm', 'md', 'lg', 'xl'],
      groupItemColorOptions: ['secondary', 'light', 'danger', 'dark', 'info', 'primary', 'success', 'warning']
    }
  },
  mounted () {
    // console.log(this.$refs.animation.innerHTML)
  },
  methods: {
    matchUnits: function (key) {
      const match = String(key).match(/(\d*\.?\d*)(.*)/)
      let value = ''
      if (match[1]) {
        value = match[1]
      } else {
        value = 0
      }
      if (this.cssUnits.includes(match[2])) {
        value += match[2]
      } else {
        value += 'px'
      }
      return value
    },
    matchColor: function (strColor) {
      const s = new Option().style
      s.color = strColor
      const color = s.color === strColor
      const hex = /(^#[0-9A-Fa-f]{3}$)|(^#[0-9A-Fa-f]{6}$)|(^#[0-9A-Fa-f]{8}$)/i.test(
        strColor
      )
      const rgbOrRgba = /(^rgb\((\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1}(\s{1}|,{1})(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1}(\s{1}|,{1})(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1}\))|(^rgb\((\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1},{1}(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1},{1}(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1},{1}?(\s*((0|1)|(0)?\.\d*|[0-9]{1,2}%)\s*){1}?\))|(^rgb\((\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1}\s{1}(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1}\s{1}(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1}\/{1}?(\s*((0|1)|(0)?\.\d*|[0-9]{1,2}%)\s*){1}?\))|(^rgba\((\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1}(\s{1}|,{1})(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1}(\s{1}|,{1})(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1}\/{1}(\s*((0|1)|(0)?\.\d*|[0-9]{1,2}%)\s*){1})\)|(^rgba\((\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1},{1}(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1},{1}(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*){1},{1}(\s*((0|1)|(0)?\.\d*|[0-9]{1,2}%)\s*){1})\)/i.test(
        strColor
      )
      if (color === true || hex === true || rgbOrRgba === true) {
        return strColor
      } else {
        console.error('invalid color ' + strColor)
        return 'black'
      }
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
    justifyContentGrid: function () {
      let justify = null
      if (this.justifyOptions.includes(this.justifySm)) {
        justify += `justify-content-sm-${this.justifySm} `
      }
      if (this.justifyOptions.includes(this.justifyMd)) {
        justify += `justify-content-md-${this.justifyMd} `
      }
      if (this.justifyOptions.includes(this.justifyLg)) {
        justify += `justify-content-lg-${this.justifyLg} `
      }
      if (this.justifyOptions.includes(this.justifyXl)) {
        justify += `justify-content-xl-${this.justifyXl}`
      }
      return justify
    },
    alignClass: function () {
      let align = null
      if (this.alignOptions.includes(this.align)) {
        align = `align-${this.align}`
      }
      return align
    },
    alignItemsClass: function () {
      let align = null
      if (this.alignItemsOptions.includes(this.alignItems)) {
        align = `align-items-${this.alignItems}`
      }
      return align
    },
    alignItemsGridClass: function () {
      let grid = null
      if (this.alignItemsOptions.includes(this.alignItemsSm)) {
        grid += `align-items-sm-${this.alignItemsSm} `
      }
      if (this.alignItemsOptions.includes(this.alignItemsMd)) {
        grid += `align-items-md-${this.alignItemsMd} `
      }
      if (this.alignItemsOptions.includes(this.alignItemsLg)) {
        grid += `align-items-lg-${this.alignItemsLg} `
      }
      if (this.alignItemsOptions.includes(this.alignItemsXl)) {
        grid += `align-items-xl-${this.alignItemsXl}`
      }
      return grid
    },
    alignSelfClass: function () {
      let align = null
      if (this.alignSelfOptions.includes(this.alignSelf)) {
        align = `align-self-${this.alignSelf}`
      }
      return align
    },
    alignSelfGridClass: function () {
      let grid = null
      if (this.alignSelfOptions.includes(this.alignSelfSm)) {
        grid += `align-self-sm-${this.alignSelfSm} `
      }
      if (this.alignSelfOptions.includes(this.alignSelfMd)) {
        grid += `align-self-md-${this.alignSelfMd} `
      }
      if (this.alignSelfOptions.includes(this.alignSelfLg)) {
        grid += `align-self-lg-${this.alignSelfLg} `
      }
      if (this.alignSelfOptions.includes(this.alignSelfXl)) {
        grid += `align-self-xl-${this.alignSelfXl}`
      }
      return grid
    },
    alignContentClass: function () {
      let align = null
      if (this.alignContentOptions.includes(this.alignContent)) {
        align = `align-content-${this.alignContent}`
      }
      return align
    },
    alignContentGridClass: function () {
      let grid = null
      if (this.alignContentOptions.includes(this.alignContentSm)) {
        grid += `align-content-sm-${this.alignContentSm} `
      }
      if (this.alignContentOptions.includes(this.alignContentMd)) {
        grid += `align-content-md-${this.alignContentMd} `
      }
      if (this.alignContentOptions.includes(this.alignContentLg)) {
        grid += `align-content-lg-${this.alignContentLg} `
      }
      if (this.alignContentOptions.includes(this.alignContentXl)) {
        grid += `align-content-xl-${this.alignContentXl}`
      }
      return grid
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
    },
    fontBold: function () {
      if (this.bold) {
        return 'font-weight-bold'
      } else {
        return null
      }
    },
    fontItalic: function () {
      if (this.italic) {
        return 'font-italic'
      } else {
        return null
      }
    },
    fontLight: function () {
      if (this.light) {
        return 'font-weight-light'
      } else {
        return null
      }
    },
    fontBolder: function () {
      if (this.bolder) {
        return 'font-weight-bolder'
      } else {
        return null
      }
    },
    fontNormal: function () {
      if (this.normal) {
        return 'font-weight-normal'
      } else {
        return null
      }
    },
    fontLighter: function () {
      if (this.lighter) {
        return 'font-weight-lighter'
      } else {
        return null
      }
    },
    backGroundColor: function () {
      if (this.bgColorOptions.includes(this.bgColor)) {
        return `bg-${this.bgColor}`
      } else {
        return null
      }
    },
    textOptions: function () {
      return [...this.textColors, ...this.textPositions, ...this.textTypes]
    },
    textLastStyle: function () {
      return [...this.textPositions, ...this.textPositionLast]
    },
    textStyleValue: function () {
      let style = ''
      let parse = []
      if (typeof this.textStyle === 'string') {
        parse = JSON.parse(this.textStyle)
      } else {
        parse = this.textStyle
      }
      parse.forEach((item) => {
        if (this.textOptions.includes(item)) {
          style += `text-${item} `
        }
      })
      return style
    },
    textStyleLast: function () {
      if (this.textLastStyle.includes(this.textLast)) {
        return `text-last-${this.textLast}`
      } else {
        return null
      }
    },
    textStyleDecoration: function () {
      if (this.textDecoration.includes(this.decoration)) {
        return `text-decoration-${this.decoration}`
      } else {
        return null
      }
    },
    textStyleShadow: function () {
      if (this.textShadow !== null) {
        const x = this.matchUnits(this.textShadow.x)
        const y = this.matchUnits(this.textShadow.y)
        const blur = this.matchUnits(this.textShadow.blur)
        const color = this.matchColor(this.textShadow.color)
        return `text-shadow: ${x} ${y} ${this.textShadow.blur ? blur : '1px'} ${color}`
      } else {
        return null
      }
    },
    headTagsTarget: function () {
      if (this.headTags.includes(this.tag)) {
        return this.tag
      } else {
        console.error(`invalid head tag name '${this.tag}'`)
        return 'h3'
      }
    },
    displayClass: function () {
      if (this.displayOption.includes(this.display)) {
        return `display-${this.display}`
      } else {
        return null
      }
    },
    leadClass: function () {
      if (this.lead) {
        return 'lead'
      } else {
        return null
      }
    },
    rowClass: function () {
      if (this.row) {
        return 'row'
      } else {
        return null
      }
    },
    floatClass: function () {
      if (this.floatOptions.includes(this.float)) {
        return `float-${this.float}`
      } else {
        return null
      }
    },
    roundedClass: function () {
      if (this.rounded) {
        return 'rounded '
      } else {
        return null
      }
    },
    roundedLeftClass: function () {
      if (this.roundedLeft) {
        return 'rounded-left'
      } else {
        return null
      }
    },
    roundedRightClass: function () {
      if (this.roundedRight) {
        return 'rounded-right'
      } else {
        return null
      }
    },
    roundedTopClass: function () {
      if (this.roundedTop) {
        return 'rounded-top'
      } else {
        return null
      }
    },
    roundedBottomClass: function () {
      if (this.roundedBottom) {
        return 'rounded-bottom'
      } else {
        return null
      }
    },
    roundedCircleClass: function () {
      if (this.roundedCircle) {
        return 'rounded-circle'
      } else {
        return null
      }
    },
    responsiveClass: function () {
      if (this.responsive) {
        return 'table-responsive'
      } else {
        return null
      }
    },
    responsiveSmClass: function () {
      if (this.responsiveSm) {
        return 'table-responsive-sm'
      } else {
        return null
      }
    },
    responsiveMdClass: function () {
      if (this.responsiveMd) {
        return 'table-responsive-md'
      } else {
        return null
      }
    },
    responsiveLgClass: function () {
      if (this.responsiveLg) {
        return 'table-responsive-lg'
      } else {
        return null
      }
    },
    responsiveXlClass: function () {
      if (this.responsiveXl) {
        return 'table-responsive-xl'
      } else {
        return null
      }
    },
    dClass: function () {
      if (this.dOptions.includes(this.d)) {
        return `d-${this.d}`
      } else {
        return null
      }
    },
    borderClass: function () {
      if (this.borderOptions.includes(this.border)) {
        return `border-${this.border}`
      } else {
        return null
      }
    },
    activeClass: function () {
      if (this.active) {
        return 'active'
      } else {
        return null
      }
    },
    disableClass: function () {
      if (this.disabled) {
        return 'disabled'
      } else {
        return null
      }
    },
    groupItemClass: function () {
      if (this.groupItem) {
        return 'list-group-item'
      } else {
        return null
      }
    },
    groupHorizontalClass: function () {
      if (this.groupHorizontal) {
        return 'list-group-horizontal'
      } else {
        return null
      }
    },
    horizontalClass: function () {
      if (this.horizontalOptions.includes(this.horizontal)) {
        return `list-group-horizontal-${this.horizontal}`
      } else {
        return null
      }
    },
    groupActionClass: function () {
      if (this.groupAction) {
        return 'list-group-item-action'
      } else {
        return null
      }
    },
    groupItemColorClass: function () {
      if (this.groupItemColorOptions.includes(this.groupItemColor)) {
        return `list-group-item-${this.groupItemColor}`
      } else {
        return null
      }
    }
  }
}

export default mixins
