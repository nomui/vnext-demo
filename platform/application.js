define([], function () {

    const refs = {}

    const appArr1 = [
        {
            icon: 'edit',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon: 'edit',
            text: '药物管理',
            url: 'app/drug-manage'
        },
        {
            icon: 'edit',
            text: '药物管理',
            url: 'app/drug-manage'
        },
        {
            icon: 'edit',
            text: '药物管理',
            url: 'app/drug-manage'
        },
        {
            icon: 'edit',
            text: '药物管理',
            url: 'app/drug-manage'
        },
        {
            icon: 'edit',
            text: '药物管理',
            url: 'app/drug-manage'
        },
        {
            icon: 'edit',
            text: '药物管理',
            url: 'app/drug-manage'
        },
        {
            icon: 'edit',
            text: '药物管理',
            url: 'app/drug-manage'
        },
        {
            icon: 'edit',
            text: '药物管理',
            url: 'app/drug-manage'
        },
        {
            icon: 'edit',
            text: '药物管理',
            url: 'app/drug-manage'
        },
        {
            icon: 'edit',
            text: '药物管理',
            url: 'app/drug-manage'
        },
        {
            icon: 'edit',
            text: '药物管理',
            url: 'app/drug-manage'
        },
    ]

    const renderTabTitle = ({ icon, text }) => {
        return {
            component: 'Flex',
            align: 'center',
            attrs: {
                style: {
                    width: '120px'
                }
            },
            cols: [
                {
                    children: {
                        component: 'Icon',
                        type: icon
                    },
                },
                {
                    children: text
                }
            ]
        }
    }

    const renderAppList = (data) => {
        return {
            component: 'List',
            // gutter: 'sm',
            data: data,
            itemRender: ({ list, item, itemData }) => {
                return {
                    styles:{
                        padding:1
                    },
                    children: {
                        component: 'Flex',
                        align:'center',
                        classes: {
                            'vnext-application-item': true
                        },
                        onClick: () => {
                            nomapp.currentRoute.push(itemData.url)
                        },
                        cols: [
                            {
                                children: {
                                    component: 'Icon',
                                    type: itemData.icon
                                }
                            },
                            {
                                children: itemData.text
                            }
                        ]
                    }
                }
            }
        }

    }


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
                        component: 'Tabs',
                        onTabSelectionChange: ({ key }) => {
                            console.log(`选中的key:${key}`)
                        },
                        classes: {
                            'vnext-platform-dashboard-tabs': true
                        },
                        uistyle: 'card',
                        tabs: [
                            {
                                key: '1',
                                item: { text: renderTabTitle({ icon: 'edit', text: '全部' }) },
                                panel: {
                                    children: {
                                        component: 'Flex',
                                        rows: [
                                            {
                                                children: renderAppList(appArr1)
                                            }
                                        ]
                                    }
                                },
                            },
                            {
                                key: '2',
                                item: { text: renderTabTitle({ icon: 'edit', text: '临床运营' }) },
                                panel: {
                                    children: 'profile content',
                                },
                            },
                            {
                                key: 'contact',
                                item: { text: renderTabTitle({ icon: 'edit', text: '药物警戒' }) },
                                panel: {
                                    children: 'contact content',
                                },
                            },
                        ],


                    }
                },
            },
        }
    }

})
