// 需要动态导入一下，不然build的时候，图标不显示，因为图标文件未被打包
// import('@chenwei02/qy-element/_virtual/virtual_svg-icons-register')
import DefaultTheme from 'vitepress/theme'
// import QyElement from '@chenwei02/element'
import QyElement from '@chenwei02/qy-element'
import '@chenwei02/qy-element/theme/index.css'

import QyElementWrap from '../../vitepress/vp-wrap.vue'
import QyElementTip from '../../vitepress/vp-tip.vue'
import QyElementDemo from '../../vitepress/vp-demo.vue'
import CommentGiscus from '../../vitepress/comment-giscus.vue'

import './main.css'

export default {
  ...DefaultTheme,
  enhanceApp(context) {
    const { app } = context
    app.component('QyElementWrap', QyElementWrap)
    app.component('QyElementEnum', QyElementTip)
    app.component('Demo', QyElementDemo)
    app.component('Giscus', CommentGiscus)
    app.use(QyElement)
  }
}
