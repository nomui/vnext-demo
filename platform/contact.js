define([], function () {

    const refs = {}
  
  
    const renderContactTypes = ({data})=>{
        return {
            component:'Tree',
            classes:{
                'vnext-platform-contact-type-tree':true
            },
            expandable:{
                byClick:false,
            },
            nodeDefaults: {
                _config: (inst) => {
                    
                    const {data}=inst.props
                  inst.setProps({
                
                    data: {
                      icon: {
                        type: inst.level>0?'minus':data.icon,
                      },
                    },
                  })
                },
              },
              data:data
        }

    }

    const renderContactList = ({data})=>{
        return {
            component:'List',
            cols:1,
            data:data,
            gutter:'md',
            itemRender:({itemData})=>{
                return {
                    component:'Flex',
                    align:'center',
                    classes:{
                        'vnext-contact-list-item':true
                    },
                    gutter:'small',
                    cols:[
                        {
                            children:{
                                component:'Avatar',
                                src:itemData.avatar,
                                text:itemData.text
                            }
                        },
                        {
                            rows:[
                                {
                                    align:'center',
                                    gutter:'medium',
                                    cols:[
                                        {
                                            tag:'h5',
                                    children:itemData.text
                                        },
                                        itemData.tag && {
                                            component:'List',
                                            gutter:'sm',
                                            items:itemData.tag.map(n=>{
                                                return {
                                                    component:'Tag',
                                                    color: 'blue',
                                                    size:'xs',
                                                    text:n.text
                                                }
                                            })
                                        }
                                    ]
                                },
                                {
                                    align:'center',
                                    classes:{
                                        'muted':true
                                    },
                                    cols:[
                                        {
                                            children:itemData.role
                                        },
                                        {
                                            component:'Divider',
                                            type: 'vertical',
                                        },
                                        {
                                            children:itemData.location
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        }

    }
  
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
                                children: renderContactTypes({
                                    data:[
                                        {
                                            text: '组织架构',
                                            icon:'edit',
                                            children: [
                                                { text: '产品' }, 
                                                { text: '研发' }
                                            ],
                                          },
                                          { text: '外部联系人' , icon:'edit',}, 
                                          { text: '新的联系人' , icon:'edit',}, 
                                          { text: '星标联系人', icon:'edit', }, 
                                          { text: '邮件联系人' , icon:'edit',}, 
                                          { text: '我的群组', icon:'edit', }, 
                                    ]
                                })
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
                                styles:{
                                    padding:2,
                                },
                                children:renderContactList({
                                    data:[
                                        {
                                            text:'李玲玲',
                                            role:'开发中心副总监',
                                            location:'安徽',
                                            tag:[
                                                {
                                                    text:'管理员'
                                                },
                                                {
                                                    text:'负责人'
                                                }
                                            ],
                                        },
                                        {
                                            text:'郭宁霞',
                                            role:'产品副总监',
                                            location:'长沙',
                                            tag:[
                
                                                {
                                                    text:'负责人'
                                                }
                                            ],
                                        },
                                        {
                                            text:'夏月',
                                            role:'UI设计师',
                                            location:'长沙',
                                        },
                                        {
                                            text:'王玲玲',
                                            role:'产品经理',
                                            location:'安徽',
                                        },
                                    ]
                                })
                            }
                        }
                      }
                    }
                },
            },
        }
    }
  
  })
  