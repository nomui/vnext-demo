define(['menu-data.js','icons' ,'css!theme.css', 'css!main.css'], function (menuData) {
  const { items, highlightMap } = menuData()
  let stillShowNavi = false
  const refs = {}

  const initEvents = ()=>{
    mainNaviMouseEvent()
  }

  const mainNaviMouseEvent = ()=>{
    document.querySelector('.vnext-platform-main-sider').addEventListener('mouseenter', function() {
      stillShowNavi = true
    })
    document.querySelector('.vnext-platform-main-sider').addEventListener('mouseleave', function() {
      stillShowNavi = false
      delayHideNavi(1.5)
    })
  }

  const handleMainNaviSize = () => {
    if (document.querySelector('.vnext-platform-main-menu').classList.contains('nom-menu-compact')) {
      document.querySelector('.vnext-platform-main-menu').classList.remove('nom-menu-compact')
      document.querySelector('body').classList.add('large-navi')
    }
    else {
      document.querySelector('.vnext-platform-main-menu').classList.add('nom-menu-compact')
      document.querySelector('body').classList.remove('large-navi')
    }
  }

  const isAppPage = ()=>{
    return nomapp.currentRoute.hash.includes('#!app!')
  }


  const showOrHidePlatformNavi = () => {
    if (isAppPage()) {
      document.querySelector('body').classList.remove('show-platform-navi')
    }
    else {
      document.querySelector('body').classList.add('show-platform-navi')
    }
  }

  const delayHideNavi = (sec=5)=>{
    setTimeout(()=>{
      if (!stillShowNavi && isAppPage()) {
        document.querySelector('body').classList.remove('show-platform-navi')
      }
    },sec*1000)
  }

  const handleNaviVisibility = ()=>{
    if ( document.querySelector('body').classList.contains('show-platform-navi')) {
      document.querySelector('body').classList.remove('show-platform-navi')
      delayHideNavi()
    }
    else {
      document.querySelector('body').classList.add('show-platform-navi')
    }
  }

  return ({ route, context, router, app }) => {
    return {
      onRendered: () => {
        showOrHidePlatformNavi()
        initEvents()
      }, // 视图组件渲染完成后调用
      onHashChange: ({ route }) => { 
        showOrHidePlatformNavi()
      }, // 页面 url 的 hash 部分更改时调用
      onSubpathChange: ({ route }) => { }, // 该页面所渲染的路由器所在的路径的子路径变更时调用
      onQueryChange: ({ route }) => { }, // 页面 url 的 hash 部分的查询字符串部分更改时调用
      title: '工作台',
      view: {
        component: 'Layout',
        fit: true,

        sider: {
          classes: {
            'vnext-platform-main-sider': true
          },
          children: {
            component: 'Layout',
            header: {
              classes: {
                'vnext-platform-main-hd': true
              },
              children: {
                classes: {
                  'vnext-platform-main-sider-logo': true
                },
                children: {
                  component: 'Image',
                  ref: (c) => {
                    refs.mainLogo = c
                  },
                  src: '../image/wetrial-logo.png',
                  width: 60,
                  alt: 'VNext',

                },
              },
            },
            body: {
              children: {
                component: 'Menu',
                classes: {
                  'vnext-platform-main-menu': true
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
                classes: {
                  'vnext-platform-main-sider-toogle': true
                },
                onClick: () => {
                  handleMainNaviSize()
                },
                type: 'edit'
              }
            }
          }
        },

        body: {
          classes: {
            'vnext-platform-container': true
          },
          children: {
            component: 'Layout',
            header: {
              classes: {
                'vnext-platform-status-bar': true
              },
              children: {
                component: 'Flex',
                align: 'center',
                fit: true,
                gap: 'medium',
                cols: [
                  {
                    children: {
                      classes:{
                        'vnext-main-bar-trigger':true
                      },
                      onClick:()=>{
                        handleNaviVisibility()
                      },
                      children:{
                        component: 'Icon',
                        type: 'drag',
                        
                      }
                    }
                  },
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
                        component: 'Icon',
                        type: 'edit'
                      },
                      {
                        component: 'Icon',
                        type: 'edit'
                      },
                    ]

                  }
                ]

              }
            },
            body: {
              classes: {
                'vnext-platform-workspace': true
              },
              children: {
                component: 'Router',
                defaultPath: 'home',
              },
            }
          }
        },

      }
    }
  }

})