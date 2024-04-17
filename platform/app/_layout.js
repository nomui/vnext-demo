define([], function () {
    const { items, highlightMap } = mainMenuData()
    const refs = {}
debugger
    
  
    const toogleMainSider = ()=>{
      if (document.querySelector('.vnext-platform-main-menu').classList.contains('nom-menu-compact')) {
        document.querySelector('.vnext-platform-main-menu').classList.remove('nom-menu-compact')
        // document.querySelector('.vnext-platform-main-sider-toogle').classList.add('mini')
      }
      else {
        document.querySelector('.vnext-platform-main-menu').classList.add('nom-menu-compact')
        // document.querySelector('.vnext-platform-main-sider-toogle').classList.remove('mini')
      }
      
    }

    const renderMainMenu=()=>{

    }

    const renderSubMenu = ()=>{

    }
  
    return ({ route, context, router, app }) => {
      return {
          title: '工作台', 
          view: {
            component:'Layout',
            sider: {
              classes: {
                'vnext-app-main-sider': true
              },
              children: {
                component: 'Layout',
                body: {
                  children: {
                    component: 'Menu',
                    classes: {
                      'vnext-app-main-menu': true
                    },
                    compact: true,
                    ref: (c) => {
                      refs.mainMenu = c
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
                    classes:{
                      'vnext-platform-main-sider-toogle':true
                    },
                    onClick:()=>{
                      toogleMainSider()
                    },
                    type: 'edit'
                  }
                }
              }
            },
        
            body: {
              children: {
                component: 'Layout',
              
                sider:{
                  classes:{
                    'vnext-app-sub-sider':true
                  },
                  children:{
                    component:'Menu',
                    items:renderSubMenu()
                  }
                },
                body: {
                  classes:{
                    'vnext-platform-workspace':true
                  },
                  children: {
                    component: 'Router',
                    defaultPath: '!drug-manage',
                  },
                }
              }
            },
          }
      }
    }
    
  })