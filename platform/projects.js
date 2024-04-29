define([], function () {

    const refs = {}
  
   const renderProjectGrid = ()=>{
    const data=[
        {
            projectNo:'WT001',
            projectName:'拉布拉多赞片(ZIGJ1104)用于胃痛',
            status:'进行中',
            stage:'准备阶段',
            percent:40,
            inGroup:22,
            orgs:100,
            trialStage:'II期'
        },
        {
            projectNo:'WT002',
            projectName:'拉布拉多赞片(ZIGJ1104)用于胃痛',
            status:'进行中',
            stage:'准备阶段',
            percent:24,
            inGroup:56,
            orgs:100,
            trialStage:'I期'
        },
        {
            projectNo:'WT003',
            projectName:'拉布拉多赞片(ZIGJ1104)用于胃痛',
            status:'进行中',
            stage:'准备阶段',
            percent:55,
            inGroup:13,
            orgs:100,
            trialStage:'II期'
        },
        {
            projectNo:'WT005',
            projectName:'拉布拉多赞片(ZIGJ1104)用于胃痛',
            status:'进行中',
            stage:'准备阶段',
            percent:36,
            inGroup:45,
            orgs:100,
            trialStage:'II期'
        },
        {
            projectNo:'WT005',
            projectName:'拉布拉多赞片(ZIGJ1104)用于胃痛',
            status:'进行中',
            stage:'准备阶段',
            percent:76,
            inGroup:90,
            orgs:100,
            trialStage:'III期'
        },
        {
            projectNo:'WT006',
            projectName:'拉布拉多赞片(ZIGJ1104)用于胃痛',
            status:'进行中',
            stage:'准备阶段',
            percent:10,
            inGroup:9,
            orgs:100,
            trialStage:'I期'
        },
        {
            projectNo:'WT007',
            projectName:'拉布拉多赞片(ZIGJ1104)用于胃痛',
            status:'进行中',
            stage:'准备阶段',
            percent:45,
            inGroup:68,
            orgs:100,
            trialStage:'II期'
        },
        {
            projectNo:'WT008',
            projectName:'拉布拉多赞片(ZIGJ1104)用于胃痛',
            status:'进行中',
            stage:'准备阶段',
            percent:23,
            inGroup:13,
            orgs:100,
            trialStage:'III期'
        },
        {
            projectNo:'WT009',
            projectName:'拉布拉多赞片(ZIGJ1104)用于胃痛',
            status:'进行中',
            stage:'准备阶段',
            percent:89,
            inGroup:121,
            orgs:100,
            trialStage:'II期'
        },
        {
            projectNo:'WT0010',
            projectName:'拉布拉多赞片(ZIGJ1104)用于胃痛',
            status:'进行中',
            stage:'准备阶段',
            percent:35,
            inGroup:26,
            orgs:100,
            trialStage:'III期'
        },

    ]
    return {
        component:'Grid',
        columns:[
            {
                field:'index',
                title:'序号',
                width:60,
                cellRender:({row})=>{
                    return row.props.index+1
                }
            },
            {
                field:'projectNo',
                title:'项目编号',
                width:120,
                cellRender:({cellData})=>{
                    return {
                        component:'Button',
                        inline:true,
                        text:cellData,
                        type:'link',
                        onClick:()=>{
                            nomapp.currentRoute.push('!app!drug-manage/home')
                        }
                    }
                }
            },
            {
                field:'projectName',
                title:'项目名称',
                width:220,
                ellipsis:true,
               
            },
            {
                field:'status',
                title:'项目状态',
            },
            {
                field:'stage',
                title:'当前阶段',
            },
            {
                field:'percent',
                title:'完工百分比',
                width:190,
                cellRender:({cellData})=>{
                    return {
                        component:'Progress',
                        percent:cellData,
                        strokeColor:cellData>50?'var(--nom-color-success)':'var(--nom-color-warning)'
                    }
                }
            },
            {
                field:'inGroup',
                title:'实际入组',
            },
            {
                field:'orgs',
                title:'参与中心',
            },
            {
                field:'trialStage',
                title:'试验分期',
            },
        ],
        data:data
    }
    
   }
  
  
    return ({ route, context, router, app }) => {
        return {
            title: '项目中心', // 页面标题
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
                            'vnext-layout-panel':true
                        },
                        body:{
                            styles:{
                                padding:2
                            },
                            children: renderProjectGrid()
                        },
                        footer:{
                            children:{
                                component:'Flex',
                                fit:true,
                                justify:'end',
                                align:'center',
                                cols:[
                                    {
                                        children:{
                                            component:'Pager',
                                            totalCount: 100,
                                        }
                                    }
                                ]
                            }
                        }
                    }
                },
            },
        }
    }
  
  })
  