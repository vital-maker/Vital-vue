<script>
import { h } from 'vue'

export default {
  name: 'VTTag',
  render () {
    return h(this.powerTag, { class: [this.gridSystem] }, this.$slots)
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    powerTag: function () {
      if (this.tagsOptions.includes(this.tag)) {
        return this.tag
      }else {
        return 'div'
      }
    }
  },
  data () {
    return {
      tagsOptions: [
        'div',
        'nav',
        'section',
        'label',
        'address',
        'aside',
        'header',
        'footer',
        'article',
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'span',
        'ul',
        'li',
        'ol',
        'abbr',
        'br',
        'hr',
        'table',
        'td',
        'tr',
        'th',
        'tbody',
        'thead',
        'tfoot',
        'strong',
        'blockquote',
        'code',
        'cite',
        'q',
        'pre',
        'del',
        'em',
        'acronym', // (Not supported in HTML5)
        'bdo',
        'ins',
        'dfn',
        'kbd',
        'samp',
        'var',
        'img',
        'area',
        'map',
        'param',
        'object',
        'dl',
        'dt',
        'dd',
        'col',
        'colgroup',
        'caption',
        'form',
        'input',
        'textarea',
        'select',
        'option',
        'optgroup',
        'button',
        'fieldset',
        'legend',
        'audio',
        'b',
        'applet', // (Not supported in HTML5)
        'big', // (Not supported in HTML5)
        'body',
        'html',
        'title',
        'meta',
        'canvas',
        'center', // (Not supported in HTML5)
        'data',
        'datalist',
        'embed',
        'figcaption',
        'figure',
        'font', // (Not supported in HTML5)
        'frame', // (Not supported in HTML5)
        'frameset', // (Not supported in HTML5)
        'i',
        'iframe',
        'img',
        'isindex', // (Not supported in HTML5)
        'dir', // (Not supported in HTML5)
        'basefont', // (Not supported in HTML5)
        'head',
        'link',
        'main',
        'mark',
        'marquee',
        'menu',
        'meter',
        'noframes', // (Not supported in HTML5)
        'noscript',
        'output',
        'picture',
        'progress',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'small',
        'strike', // (Not supported in HTML5)
        'style',
        'sub',
        'summary',
        'sup',
        'svg',
        'template',
        'time',
        'track',
        'tt', // (Not supported in HTML5)
        'u',
        'video',
        'wbr'
      ]
    }
  }
}
</script>

<style scoped>

</style>
