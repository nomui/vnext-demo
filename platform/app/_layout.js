define(['css!app.css'], function () {
   
    const refs = {}

    const menuData =[{
      text: "概览",
      icon: "gailan",
    },
    {
      text: "任务",
      icon: "renwu",
    },
    {
      text: "发现",
      icon: "faxian",
    },
    {
      text: "报告",
      icon: "baobiao",
    },
    {
      text: "受试者",
      icon: "shoushizhe",
    },
    {
      text: "SAE",
      icon: "sae",
    },
    {
      text: "文档",
      icon: "wendang",
    },
    {
      text: "财务",
      icon: "caiwu",
    },
    {
      text: "统计",
      icon: "tongji",
    },
    {
      text: "更多",
      icon: "gengduo",
    },
  ]

    const subMenuData = [{
      text: "里程碑",
      icon: "xiangmu",
      // url: "#!overview",
      key: "#!overview",
    },
    {
      text: "入组",
      icon: "xiangmuruzu",
      // url: "#!tasks",
      key: "#!tasks",
    },
    {
      text: "质量",
      icon: "zhiliang2",
      // url: "#!sae",
      key: "#!sae",
      
    },
    {
      text: "文档",
      icon: "wendang",
      // url: "#!overview",
      key: "#!overview",
      items:[
        {
          text:'所有文档'
        },
        {
          text:'待审批'
        }
      ]
    },
    {
      text: "财务",
      icon: "caiwu",
      // url: "#!tasks",
      key: "#!tasks",
    },
    {
      text: "团队",
      icon: "tuandui",
      // url: "#!sae",
      key: "#!sae",
    },
    {
      text: "设置",
      icon: "shezhi",
      // url: "#!sae",
      key: "#!sae",
    },]



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
                    items: menuData,
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
                    classes:{
                      'vnext-app-sub-menu':true
                    },
                    itemSelectable: {
                      byClick: true,
                    },
                    keyField: 'key',
                    items:subMenuData
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