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
        header:{
          children:{
            classes:{
              'vnext-platform-main-sider-logo':true
            },
            children: {
              component: 'Image',
              ref:(c)=>{
                refs.mainLogo = c
              },
              src: '/image/wetrial-logo.png',
              width:60,
              alt:'VNext',
             
            },
           },
        },
        body: {
          children: {
            component: 'Menu',
            compact: true,
            ref: (c) => {
              mainMenuRef = c
            },
            items: items,
            itemSelectable: true,
          }
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