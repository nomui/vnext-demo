define(['css!app.css'], function () {
   
    const refs = {}

    const items =[{
      text: "概览",
      icon: "edit",
      url: "#!overview",
      key: "#!overview",
    },
    {
      text: "任务",
      icon: "edit",
      url: "#!tasks",
      key: "#!tasks",
    },
    {
      text: "发现",
      icon: "edit",
      url: "#!sae",
      key: "#!sae",
    },]



    const renderMainMenu=()=>{

    }

    const renderSubMenu = ()=>{

    }
  
    return ({ route, context, router, app }) => {
 
      return {
        onRendered: () => {
      
         }, // 视图组件渲染完成后调用
        onHashChange: ({ route }) => { }, // 页面 url 的 hash 部分更改时调用
        onSubpathChange: ({ route }) => { }, // 该页面所渲染的路由器所在的路径的子路径变更时调用
        onQueryChange: ({ route }) => { }, // 页面 url 的 hash 部分的查询字符串部分更改时调用
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
                    // items:renderSubMenu()
                  }
                },
                body: {
                  classes:{
                    'vnext-platform-workspace':true
                  },
                  children: {
                    component: 'Router',
                    defaultPath: 'drug-manage/home',
                  },
                }
              }
            },
          }
      }
    }
    
  })