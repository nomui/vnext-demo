'use strict'
  ; (function (win) {
    requirejs.onError = function (err) {
      console.log(err)
      console.log('modules: ' + err.requireModules)
    }

    requirejs.config({

      map: {
        '*': {
          css: 'libs/require-css.min.js',
        },
      },
      baseUrl: '/',
      waitSeconds: 15, //超时时间
      paths: {
        'jquery':'libs/jquery-3.7.1.min',
        'jquery-migrate':'libs/jquery-migrate-1.4.1.min',
        'jquery-gridster':'libs/gridster/jquery.gridster',
        "dragula":'libs/dragula/dragula.min',
        "menu-service":'libs/menu-service',
        "icons":'libs/icons',
        'wetrial-echart': 'components/wetrial-chart/echarts', // Echarts图表
        'grid-layout': 'components/grid-layout/index', // 栅格布局
        FullCalendar: 'libs/fullcalendar/main', // 日历
      },
      shim: {
        FullCalendar: {
          exports: 'FullCalendar',
          deps: ['css!libs/fullcalendar/main.css'],
      },
      },
    })

    require([], function () {


      win.nomapp = new nomui.App({
        viewsDir: 'platform',
        defaultPath: '_layout',
        isFixedLayout: false,

      })

    })

  })(window)
