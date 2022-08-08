import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'



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
