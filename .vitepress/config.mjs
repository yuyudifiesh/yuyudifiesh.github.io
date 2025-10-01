import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yuyudifiesh",
  base: '/',
  description: "Yuyudifiesh 的个人主页",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects' },
      { text: '关于我', link: '/about' },
    ],

    outlineTitle: '页面大纲',
    outline: [2,6],
    darkModeSwitchTitle: '切换深色主题',
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换浅色主题',
    lightModeSwitchLabel: '切换主题',
    returnToTopLabel: '返回顶部',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuyudifiesh' },
      { icon: 'npm', link: 'https://www.npmjs.com/~yuyudifiesh' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/514522120' },
    ]
  }
})
