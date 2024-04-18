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
                            data:[
                                {
                                    title:'咨询通过',
                                    number:64,
                                    
                                }
                            ]
                        }
                    }
                }
            ]
        }
    }
  
  })
  