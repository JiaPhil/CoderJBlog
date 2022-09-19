export const sidebar = {
  '/HTML/': [
    {
      text: '🟧HTML',
      collapsible: true,
      // link:'/docs/docs/JavaScript/JavaScript递归.md',
      items: [
        {
          text: '🟧邂逅前端开发',
          link: '/HTML/邂逅前端开发'
        },
        {
          text: '🟧HTML结构',
          link: '/HTML/HTML结构'
        },
        {
          text: '🟧HTML元素',
          link: '/HTML/HTML元素'
        },
        {
          text: '🟧HTML全局属性',
          link: '/HTML/HTML全局属性'
        },

      ]
    },
    {
      title: "🟧其他",
      items: [
        {
          text: '🟧补充知识',
          link: '/HTML/补充知识'
        }
      ]
    }
  ],
  '/CSS/': [
    {
      text: '🟥CSS',
      collapsible: true,
      items: [
        { text: '🟥认识CSS', link: '/CSS/认识CSS' },
      ]
    },
    {
      text: '🟥CSS基础',
      collapsible: true,
      items: [
        { text: '🟥CSS文本', link: '/CSS/CSS文本' },
        { text: '🟥CSS字体', link: '/CSS/CSS字体' },
        { text: '🟥CSS选择器', link: '/CSS/CSS选择器' },
        { text: '🟥CSS层叠与继承', link: '/CSS/CSS继承与层叠' },
        { text: '🟥CSS盒子模型', link: '/CSS/CSS盒子模型' },
        { text: '🟥CSS背景设置', link: '/CSS/CSS背景设置' },
        { text: '🟥CSS结构伪类', link: '/CSS/CSS-结构伪类' },
        { text: '🟥CSS定位', link: '/CSS/CSS定位' },
        { text: '🟥CSS浮动', link: '/CSS/float浮动' },
        { text: '🟥CSS-flex布局', link: '/CSS/flex布局' },
      ]
    },
    {
      text: '🟥CSS补充',
      link: '/CSS/CSS补充知识',
      items: [
        { text: '🟥CSS补充知识', link: '/CSS/CSS补充知识' }
      ]
    }
  ],
  '/JavaScript/': [
    {
      text: '🟨JavaScript',
      collapsible: true,
      // link:'/docs/docs/JavaScript/JavaScript递归.md',
      items: [
        {
          text: '🟨函数式编程',
          link: '/JavaScript/函数式编程'
        },
        {
          text: '🟨异步编程',
          link: '/JavaScript/异步编程'
        },

        {
          text: '🟨Promise源码解析',
          link: '/JavaScript/Promise源码'
        },

      ]
    }
  ],
  '/Vue/': [
    {
      text: '🟩Vue',
      collapsible: true,
      items: [
        {
          text: '🟩监听',
          link: '/Vue/api/监听'
        },
        {
          text: '🟩provide-inject',
          link: '/Vue/api/provide-inject'
        },
        {
          text: '🟩生命周期',
          link: '/Vue/api/生命周期'
        },
      ]
    },
    {
      text: '🟩Vue组件',
      collapsible: true,
      items: [
        {
          text: '🟩按钮组事件',
          link: '/Vue/组件/按钮组事件'
        }
      ]
    }
  ]
}