define(['menu-data.js', 'css!theme.css', 'css!main.css'], function (menuData) {
  const { items, highlightMap } = menuData()
  const refs = {}

  const toogleMainSider = ()=>{
    refs.mainMenu.update({
      compact:!refs.mainMenu.props.compact
    })

    if (document.querySelector('.vnext-platform-main-sider-toogle').classList.contains('mini')) {
      document.querySelector('.vnext-platform-main-sider-toogle').classList.remove('mini')
    }
    else {
      document.querySelector('.vnext-platform-main-sider-toogle').classList.add('mini')
    }
    

    
  }

  return {
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
              src: '/image/wetrial-logo.png',
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
        header: {
          classes: {
            'vnext-platform-status-bar': true
          },
          children: {
            component: 'Flex',
            align: 'center',
            fit: true,
            gutter:'medium',
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
                gutter: 'small',
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
                gutter: 'medium',
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
        body: {
          classes:{
            'vnext-platform-workspace':true
          },
          children: {
            component: 'Router',
            defaultPath: 'pro-list',
          },
        }
      }
    },

  }
})