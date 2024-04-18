define([], function () {

    const refs = {}
  
  
  
  
    return function () {
        return {
            component:'Flex',
            gap:'small',
            rows:[
                {
                    component:'Panel',
                    classes:{
                        'vnext-default-panel':true
                    },
                    header: {

                        caption: {  
                            title: '项目进展概况'
                        },
                        tools: [ 
                            {
                            component:'Select',
                            controlWidth:100,
                            value:1,
                            allowClear:false,
                            options:[
                                {
                                    text:'本月',
                                    value:1
                                }
                            ]
                        }
                    ]
                        
                    },
                    body: {
                        children: {
                            component:'List',
                            gutter:'md',
                            cols:4,
                            itemRender:({itemData})=>{
                                return {
                                    attrs:{
                                        style:{
                                            background:'#F7F8FA',
                                            borderRadius:'4px',
                                            padding:'1.5rem',
                                        }
                                    },
                                    children:{
                                        component:'Flex',
                                        rows:[
                                            {
                                                align:'center',
                                                gutter:'small',
                                                attrs:{
                                                    style:{
                                                        color:'#919AA7'
                                                    }
                                                },
                                                cols:[
                                                   { children:itemData.title},
                                                   {
                                                    component:'Icon',
                                                    type:'question-circle'
                                                   }
                                                ]
                                            },
                                            {
                                                align:'end',
                                                gutter:'large',
                                                cols:[
                                                    {
                                                        grow:true,
                                                        children:{
                                                            attrs:{
                                                                style:{
                                                                    fontSize:'28px',
                                                                    fontWeight:'bold'
                                                                }
                                                            },
                                                            children:itemData.number
                                                        }
                                                    },
                                                    {
                                                        children:'较同期'
                                                    },
                                                   
                                                    {
                                                        attrs:{
                                                            style:{
                                                                color:itemData.extra==0?'#0062D6':itemData.extra>0?'#009A29':'#F53F3F'
                                                            }
                                                        },
                                                        cols:[
                                                            {
                                                                children:itemData.extra==0?'持平':itemData.extra>0?'多':'少'
                                                            },
                                                            itemData.extra !=0 && {
                                                                children:`${Math.abs(itemData.extra)}项`
                                                            }
                                    
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            },
                            data:[
                                {
                                    title:'咨询通过',
                                    number:64,
                                    extra:2
                                },
                                {
                                    title:'受理通过',
                                    number:23,
                                    extra:5
                                },
                                {
                                    title:'立项完成',
                                    number:31,
                                    extra:-3
                                },
                                {
                                    title:'伦理完成',
                                    number:50,
                                    extra:0
                                },
                                {
                                    title:'合同签署',
                                    number:42,
                                    extra:-1
                                },
                                {
                                    title:'项目启动',
                                    number:59,
                                    extra:0
                                },
                                {
                                    title:'中心关闭',
                                    number:35,
                                    extra:4
                                },
                                {
                                    title:'暂停项目',
                                    number:22,
                                    extra:-4
                                },
                            ]
                        }
                    }
                }
            ]
        }
    }
  
  })
  