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
        { text: '🟥CSS盒子模型', link: '/CSS/CSS盒子模型' }
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
          text: '🟨class类',
          link: '/JavaScript/JavaScript的类'
        },
        {
          text: '🟨递归',
          link: '/JavaScript/JavaScript递归'
        }
      ]
    }
  ]
}