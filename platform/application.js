define([], function () {

    const refs = {}

    const appArr1 = [
        {
            icon:'image/app-icons/1.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/2.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/3.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/4.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/5.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/6.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/7.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/1.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/2.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/3.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/4.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/5.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/6.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
        },
        {
            icon:'image/app-icons/7.png',
            text: '药物管理',
            url: '!app!drug-manage/home'
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
            gap:'small',
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
                        padding:1,
                        cursor:'pointer'
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
                        gap:'medium',
                        cols: [
                            {
                                children: {
                                    component: 'Image',
                                    src: itemData.icon
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
                            'vnext-platform-application-tabs': true
                        },
                        uistyle: 'card',
                        tabs: [
                            {
                                key: '1',
                                item: { text: renderTabTitle({ icon: 'tab-quanbu', text: '全部' }) },
                                panel: {
                                    children: {
                                        component: 'Flex',
                                        rows: [
                                            {
                                                children: renderAppList(appArr1)
                                            },
                                            {
                                                tag:'h5',
                                                classes:{
                                                    'vnext-platform-application-group-title':true
                                                },
                                                children:'热门推荐'
                                            },
                                            {
                                                children: renderAppList(appArr1)
                                            },
                                        ]
                                    }
                                },
                            },
                            {
                                key: '2',
                                item: { text: renderTabTitle({ icon: 'tab-tongji', text: '临床运营' }) },
                                panel: {
                                    children: {
                                        component: 'Flex',
                                        rows: [
                                            {
                                                children: renderAppList(appArr1)
                                            },
                                            
                                        ]
                                    }
                                },
                            },
                            {
                                key: 'contact',
                                item: { text: renderTabTitle({ icon: 'tab-yonghu', text: '药物警戒' }) },
                                panel: {
                                    children: {
                                        component: 'Flex',
                                        rows: [
                                            {
                                                children: renderAppList(appArr1)
                                            },
                                            
                                        ]
                                    }
                                },
                            },
                        ],


                    }
                },
            },
        }
    }

})
