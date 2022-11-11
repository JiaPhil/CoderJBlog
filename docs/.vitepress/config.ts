import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'



const config = defineConfig({
  lang: 'zh-CN',
  title: 'CoderJ',
  titleTemplate: 'CoderJ',
  // base: '/',
  base: '/CoderJBlog/',
  outDir: '../dist',
  head: [
    ['link', { rel: 'icon', href: '/images/iconfont.png', crossorigin: '' }]
  ],
  themeConfig: {
    logo: 'images/iconfont.png',
    nav,
    sidebar,
    outlineTitle: '目录',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 JiaHao'
    },
    // algolia // 搜索，

  }
})

export default config
