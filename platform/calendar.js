define(['FullCalendar'], function (FullCalendar) {


    
      const refs = {}
    
    
    
    
      return ({ route, context, router, app }) => {
          return {
              title: '日历', // 页面标题
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
                    children:{
                        component:'Layout',
                        classes:{
                            'vnext-layout-panel':true
                        },
                        body:{
                            children: {
                                styles:{
                                    padding:2
                                },
                                onRendered:({inst})=>{
                                    
                                    let calendarInstance = new FullCalendar.Calendar(inst.element, {
                                        headerToolbar: {
                                            left: "prev,today,next",
                                            center: "title",
                                            right: "",
                                        },
                                        initialView: "dayGridMonth",
                                        initialDate: new Date(),
                                        selectable: true,
                                        selectMirror: true,
                                        expandRows: true,
                                        height: "auto",
                                        fixedWeekCount: true,
                                        nowIndicator: true,
                                        dayMaxEventRows: 8,
                                      
                                        progressiveEventRendering: true,
                                      
                                        eventContent: function ({ event }, element) {
                                            return {
                                                html: `<div style="overflow: hidden;" title="${event.title}">${event.title}</div>`,
                                            };
                                        },
                                    });

                                    calendarInstance.render();
                                }
                            }
                        },
                      
                    }
                  }
              },
          }
      }
    
    })
    