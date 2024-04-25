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
      refs.naviCollapse.update({
        type:'shouqi'
      })
    }
    else {
      document.querySelector('.vnext-platform-main-menu').classList.add('nom-menu-compact')
      document.querySelector('body').classList.remove('large-navi')
      refs.naviCollapse.update({
        type:'zhankai'
      })
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

  const renderNaviTitle = ()=>{

    const data1 = [
      {
        text:'微试云(安徽)医疗信息有限公司'
      },
      {text:'浙江太美医疗科技股份有限公司'},
     
      {
        text:'山东绿叶制药有限公司'
      },
      {
        text:'江苏恒瑞医药股份有限公司'
      },
      {
        text:'用天士力医药集团股份有限公司'
      }
    ]

    const data2 = [
      {text:'拉布拉多赞片（ZJGJ1104）用于胃痛'},
      {
        text:'CTS5063 单克抗体注射剂'
      },
      {
        text:'用于肌营养不良症的CRISPR-Cas9'
      },
      {
        text:'糖尿病药物Exenatide用于治疗帕金'
      },
      {
        text:'用于肌营养不良症的CRISPR-Cas9'
      }
    ]




    refs.naviTitle.update({
      children:{
        component: 'Flex',
        align: 'center',
        gap:'small',
        cols: [
          {
            classes: {
              'vnext-platform-org-title': true
            },
            ref:(c)=>{
              refs.naviTitleText = c
            },
            children: isAppPage()?data2[0].text:data1[0].text
          },
          {
            component: 'Icon',
            styles:{
              cursor:'pointer'
            },
            type: 'down',
            popup: {
              classes:{
                'vnext-navi-select-pop':true
              },
              ref:(c)=>{
                refs.naviTitlePop = c
              },
              children: {
                component:'Flex',
                rows:[
                  {
                    component:'Textbox',
                    rightIcon:'search'
                  },
                  {
                    component:'List',
                    cols:1,
                    itemRender:({itemData})=>{
                      return {
                        component:'Ellipsis',
                        text:itemData.text,
                        onClick:()=>{
                          currentTitleText = itemData.text
                          refs.naviTitleText.update({
                            children:itemData.text
                          })
                          refs.naviTitlePop.hide()
                        }
                      }
                    },
                    data: isAppPage()?data2:data1
                  }
                ]
              },
            },
          }
        ]
      }
    }) 
  }

  return ({ route, context, router, app }) => {
    return {
      onRendered: () => {
        showOrHidePlatformNavi()
        initEvents()
      }, // 视图组件渲染完成后调用
      onHashChange: ({ route }) => { 
        if (nomapp.lastPageType !== isAppPage()) {
          renderNaviTitle()
        }
        nomapp.lastPageType = isAppPage()
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
                // itemDefaults:{
                //   onSelect:()=>{
                //     debugger
                //   }
                // },
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
                ref:(c)=>{
                  refs.naviCollapse = c
                },
                onClick: () => {
                  handleMainNaviSize()
                },
                type: 'zhankai'
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
                        type: 'yingyongcaidan',
                        
                      }
                    }
                  },
                  {
                    grow: true,
                    children: {
                      ref:(c)=>{
                        refs.naviTitle = c
                      },
                      onCreated:()=>{
                        renderNaviTitle()
                      }
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
                        styles:{
                          cursor:'pointer'
                        },
                        type: 'bell'
                      },
                      {
                        component: 'Icon',
                        styles:{
                          cursor:'pointer'
                        },
                        type: 'tuichu'
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