define(['platform/app/drug-manage/sample.js'], function (Sample) {
    const sampleData = Sample()

    const refs = {}
  
  
  
  
    return ({ route, context, router, app }) => {
        return {
            title: '应用框架', // 页面标题
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
                    children: sampleData
                },
            },
        }
    }
  
  })
  