define([], function () {

    const refs = {}
  
  
  
  
    return ({ route, context, router, app }) => {
        return {
            title: '联系人', // 页面标题
            onRendered: () => { }, // 视图组件渲染完成后调用
            onHashChange: ({ route }) => { }, // 页面 url 的 hash 部分更改时调用
            onSubpathChange: ({ route }) => { }, // 该页面所渲染的路由器所在的路径的子路径变更时调用
            onQueryChange: ({ route }) => { }, // 页面 url 的 hash 部分的查询字符串部分更改时调用
            view: {
                // 视图组件
                component: 'Layout',
                classes: {
                    'vnext-workspace-conainer': true
                },
                body: {
                    children: {
                      component:'Layout',
                      classes:{
                        'vnext-platform-contact':true
                      },
                      sider:{
                        classes:{
                            'vnext-platform-contact-sider':true

                        },
                        children:{
                            component:'Layout',
                            header:{
                                styles:{
                                    border:'none'
                                },
                                children:{
                                    component:'Flex',
                                    classes:{
                                        'vnext-platform-contact-title':true
                                    },
                                    align:'center',
                                    fit:true,
                                    gap:'small',
                                    cols:[
                                        {
                                            component:'Avatar',
                                            text:'微'
                                        },
                                      {  
                                       
                                        component:'Ellipsis',
                                        text:'微试云(安徽)医疗信息有限公司'
                                    }
                                    ]
                                }
                            },
                            body:{
                                children:'333'
                            }
                        }
                      },
                      body:{
                        children:{
                            component:'Layout',
                            header:{
                                children:{
                                    component:'Flex',
                                    align:'center',
                                    fit:true,
                                    cols:[
                                      {  
                                        classes:{
                                            'vnext-platform-contact-subtitle':true
                                        },
                                        children:'组织架构'
                                    }
                                    ]
                                }
                            },
                            body:{
                                children:'333'
                            }
                        }
                      }
                    }
                },
            },
        }
    }
  
  })
  