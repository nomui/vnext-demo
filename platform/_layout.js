define([ 'menu-data.js','css!main.css'], function (menuData) {
  const { items, highlightMap } = menuData()
  let mainMenuRef = null


    return {
        component: 'Layout',
        fit:true,
    
        sider:{
          classes:{
            'vnext-platform-main-menu':true
          },
            children:{
              component:'Menu',
              ref:(c)=>{
                mainMenuRef = c
              },
              items:items,
              itemSelectable:true,
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