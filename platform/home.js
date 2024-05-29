define(['grid-layout',], function (GridLayout) {

    const refs = {}

    return ({ route, context, router, app }) => {
        return {
            title: '工作台', // 页面标题
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
                        component: 'Layout',
                        header: {
                            children: {
                                component: 'Flex',
                                fit: true,
                                align: 'center',
                                gutter: 'small',
                                cols: [
                                    {
                                        component: 'Button',
                                        text: '添加组件',
                                        onClick:()=>{
                                            refs.gridLayout.addItem({
                                                // key:'10', // 默认不传入key则组件自动生成一个Guid
                                                size_x:2,
                                                size_y:2,
                                                itemRender: () => {
                                                    return {
                                                        component: 'Panel',
                                                        fit: true,
                                                        header: {
                                                            caption: {
                                                                title: '组件标题'
                                                            }
                                                        },
                                                        body: {
                                                            children: '我是新增组件'
                                                        }
                                                    }
                                                }
                                            })
                                        }
                                    },
                                    {
                                        component: 'Button',
                                        text: '在首位添加组件',
                                        onClick:()=>{
                                            refs.gridLayout.addItem({
                                                size_x:2,
                                                size_y:2,
                                                itemRender: () => {
                                                    return {
                                                        component: 'Panel',
                                                        fit: true,
                                                        header: {
                                                            caption: {
                                                                title: '组件标题'
                                                            }
                                                        },
                                                        body: {
                                                            children: '我是新增组件'
                                                        }
                                                    }
                                                }
                                            },true)
                                        }
                                    },
                                    {
                                        component: 'Button',
                                        text: '移除组件',
                                        onClick:()=>{
                                            // 传入组件key
                                            refs.gridLayout.removeItem('1')
                                        }
                                    },
                                    {
                                        component: 'Button',
                                        text: 'getData',
                                        onClick: () => {
                                            console.log(refs.gridLayout.getData())
                                        }
                                    },
                                    {
                                        component: 'Button',
                                        text: '只读模式',
                                        onClick: () => {
                                            refs.gridLayout.endEdit()
                                        }
                                    },
                                    {
                                        component: 'Button',
                                        text: '编辑模式',
                                        onClick: () => {
                                            refs.gridLayout.edit()
                                        }
                                    },
                                ]
                            }
                        },
                        body: {
                            children: {
                                component: GridLayout,
                                ref: (c) => {
                                    window.grid = c
                                    refs.gridLayout = c
                                },
                                cols:window.innerWidth < 1000?2:6,
                                data: [
                                    {
                                        key: '1',
                                        row: 1,
                                        col: 1,
                                        size_x: 2,
                                        size_y: 2,
                                        itemRender: () => {
                                            return {
                                                component: 'Panel',
                                                fit: true,
                                                header: {
                                                    caption: {
                                                        title: '面板标题'
                                                    }
                                                },
                                                body: {
                                                    children: '面板内容'
                                                }
                                            }
                                        }
                                    },
                                    {
                                        key: '2',
                                        row: 1,
                                        col: 3,
                                        size_x: 1,
                                        size_y: 2,
                                        itemRender: () => {
                                            return {
                                                component: 'Panel',
                                                fit: true,
                                                header: {
                                                    caption: {
                                                        title: '面板标题'
                                                    }
                                                },
                                                body: {
                                                    children: '面板内容'
                                                }
                                            }
                                        }
                                    },
                                 
                                ]
                            }
                        }
                    }
                },
            },
        }
    }

})
