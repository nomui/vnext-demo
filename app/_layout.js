define(['menu-data.js', 'css!../theme.css', 'css!app.css'], function (mainMenuData) {
    const { items, highlightMap } = mainMenuData()
    const refs = {}

    
  
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
  
    return {
      component: 'Layout',
      fit: true,
      header: {
        classes: {
          'vnext-app-status-bar': true
        },
        children: {
          component: 'Flex',
          align: 'center',
          fit: true,
          gap:'medium',
          cols: [
            {
              grow: true,
              children: {
                component: 'Flex',
                align: 'center',
                cols: [
                  {
                    classes: {
                      'vnext-platform-org-title': true
                    },
                    children: '微试云（安徽）医疗信息有限公司'
                  },
                  {
                    component: 'Icon',
                    type: 'down'
                  }
                ]
              }
            },
            {
              align: 'center',
              gap: 'small',
              cols: [
                {
                  component: 'Avatar',
                  text: '张三'
                },
                {
                  children: '张三'
                },
                {
                  children: {
                    classes: {
                      'vnext-platform-role-tag': true
                    },
                    children: '管理员',
                  }
                },
                {
                  children: {
                    component: 'Icon',
                    type: 'down'
                  }
                }
              ]
            },
            {
              children: {
                component: 'Divider',
                type: 'vertical',
              }
            },
            {
              align: 'center',
              gap: 'medium',
              cols: [
                {
                  component:'Icon',
                  type:'edit'
                },
                {
                  component:'Icon',
                  type:'edit'
                },
              ]

            }
          ]

        }
      },
    body:{
      children:{
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
                defaultPath: '../drug-manage/home',
              },
            }
          }
        },
      }
    }
  
    }
  })