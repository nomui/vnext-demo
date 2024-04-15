define(['menu-data.js', 'css!main.css'], function (menuData) {
  const { items, highlightMap } = menuData()
  let mainMenuRef = null
  const refs = {}


  return {
    component: 'Layout',
    fit: true,

    sider: {
      classes: {
        'vnext-platform-main-sider': true
      },
      children: {
        component: 'Layout',
        body: {
          children: [
           {
            children: {
              component: 'Image',
              ref:(c)=>{
                refs.mainLogo = c
              },
              src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              width:70,
              height:70,
              alt:'VNext',
             
            },
           },
            {
              component: 'Menu',
              compact: true,
              ref: (c) => {
                mainMenuRef = c
              },
              items: items,
              itemSelectable: true,
            }
          ]
        },
        footer: {
          children: {
            component: 'Icon',
            type: 'times'
          }
        }
      }
    },

    body: {
      children: {
        component: 'Router',
        defaultPath: 'pro-list',
      },
    },

  }
})