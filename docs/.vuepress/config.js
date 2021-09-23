const nav = require('./nav.js')
const sidebar = require('./sidebar')
module.exports = {
  title: '小蜗牛慢慢爬',
  description:'只要从现在开始行动，就不算是在原地踏步',
  // theme: 'ktquez',
  markdown:{
    lineNumbers: true
  },
  head: [
    [
      'link',
      {rel: 'icon', href: '/images/logo.png'}
    ]
  ],
  // 主题配置
  themeConfig: {
    nav:nav,
    // 侧栏
    sidebar:sidebar,
    logo: '/images/logo.png', //logo
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestions: 10,
    ServiceWorker: {
      message: "有新的内容",
      buttonText: '更新'
    },
    editLinks: true,
    editLinkText: '爱在哪里就在哪里编辑'
  }
}