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
          classes:{
            'vnext-platform-main-hd':true
          },
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
            classes:{
              'vnext-platform-main-menu':true
            },
            compact: true,
            ref: (c) => {
              mainMenuRef = c
            },
            itemSelectable: {
              byClick: true,
            },
            items: items,
            keyField: 'key',
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