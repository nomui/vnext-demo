define(['libs/echarts/echarts.min.js', 'libs/echarts/china.js'], function (echarts, china) {
  class WetrialEchart extends nomui.Component {
    constructor(props, ...mixins) {
      const defaults = { empty: false, description: '暂无内容', image: nomui.Empty.PRESENTED_IMAGE_DEFAULT }
      super(nomui.Component.extendProps(defaults, props), ...mixins)
    }

    // 获取当前实例参数
    getOption() {
      return this.chart.getOption()
    }

    // 增量的更新图表配置
    setOption(options) {
      this.chart.setOption(options)
    }

    // 获取容器宽度
    getWidth() {
      return this.chart.getWidth()
    }

    // 获取容器高度
    getHeight() {
      return this.chart.getHeight()
    }

    // 重设尺寸，如果不配置width height则自动根据容器尺寸适配
    resize(option) {
      const { width, height } = option
      this.element.style.width = nomui.utils.isString(width) ? width : `${width}px`
      this.element.style.height = nomui.utils.isString(height) ? height : `${height}px`

      this.chart.resize(option)
    }

    // 触发图表行为
    dispatchAction(option) {
      this.chart.dispatchAction(option)
    }

    //插入数据，注意！仅部分图表类型支持此方法，详情看Echarts官方文档
    appendData(option) {
      this.chart.appendData(option)
    }

    // 清空实例数据，但不销毁实例
    clear() {
      this.chart.clear()
    }

    // 销毁实例
    _removeCore() {
      this.chart && this.chart.dispose()
      return this.element
    }

    _handleEmptyDisplay(ele) {
      const { image, description, empty } = this.props
      const container_ele = ele.firstChild
      if (empty) {
        ele.style['pointer-events'] = 'none'
      } else {
        ele.style['pointer-events'] = 'auto'
      }

      const canvas_ele = container_ele.querySelector('canvas')

      if (this.firstRender) {
        this.emptyContainerEle = document.createElement('div')
        this.emptyContainerEle.classList.add('u-width-full', 'u-height-full', 'u-flex-column', 'u-flex-center')

        const empty_container = document.createElement('div')

        const empty_img_ele = document.createElement('div')
        empty_img_ele.innerHTML = image.slice(1)
        empty_img_ele.classList.add('nom-empty-image')

        const description_container = document.createElement('div')
        description_container.innerHTML = description
        description_container.classList.add('u-text-center')

        empty_container.appendChild(empty_img_ele)
        empty_container.appendChild(description_container)
        this.emptyContainerEle.appendChild(empty_container)
        container_ele.appendChild(this.emptyContainerEle)
      }

      if (canvas_ele) {
        canvas_ele.style['display'] = empty ? 'none' : 'block'
      }

      if (empty && this.emptyContainerEle) {
        this.emptyContainerEle.classList.contains('s-hidden') && this.emptyContainerEle.classList.remove('s-hidden')
      } else {
        !this.emptyContainerEle.classList.contains('s-hidden') && this.emptyContainerEle.classList.add('s-hidden')
      }
    }

    _rendered() {
      const { size, chartProps, chartClick } = this.props
      if (size) {
        this.element.style.width = nomui.utils.isString(size.width) ? size.width : `${size.width}px`
        this.element.style.height = nomui.utils.isString(size.height) ? size.height : `${size.height}px`
      }
      this.element.removeAttribute('_echarts_instance_')
      const chart = echarts.init(this.element)
      this.chart = chart
      chart.setOption(chartProps)
      chart.off('click').on('click', function (params) {
        chartClick && chartClick(params)
      })

      this._handleEmptyDisplay(this.element)
    }
  }
  return WetrialEchart
})
