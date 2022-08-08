import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

/**
 * 参考：https://vitepress.vuejs.org/config/app-configs.html
 * 
 * 修改这里需要重启项目才可以生效
 */

const config = defineConfig({
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
    sidebar
  }
})

export default config
