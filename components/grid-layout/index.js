define(['jquery-gridster', 'css!libs/gridster/style.css'], function (Gridster) {
  window.gridster = Gridster
  class GridLayout extends nomui.Component {
    constructor(props, ...mixins) {
      const defaults = {
        layoutProps: {
          min_cols: 1,
          helper: 'clone',
          shift_widgets_up: false,
          shift_larger_widgets_down: false,
          collision: {
            wait_for_mouseup: true
          },
        },
        gutter: 10,
        cols: 6,
        widgetHeightBase: 100,
        widgetResizable: true,
        readonly: false,
        data: []
      }
      super(nomui.Component.extendProps(defaults, props), ...mixins)
    }

    _config() {
      this.setProps({
        classes: {
          'gridster': true,
          'editing': !this.props.readonly
        },
        children: [
          {
            component: 'List',
            itemRender: ({ itemData, item }) => {
              item.setProps({
                attrs: {
                  'data-key': itemData.key,
                  'data-row': itemData.row,
                  'data-col': itemData.col,
                  'data-sizex': itemData.size_x,
                  'data-sizey': itemData.size_y,
                }
              })
              return {
                children: [itemData.itemRender ? itemData.itemRender() : '', {
                  classes: {
                    'gridster-drag-handler': true
                  }
                }],

              }
            },
            data: this.props.data
          }
        ]
      })

    }

    edit() {
      this.props.readonly = false
      this.element.classList.add('editing')
    }

    endEdit() {
      this.props.readonly = true
      this.element.classList.remove('editing')
    }

    serialize() {
      return this.grid.serialize()

    }

    getData() {
      const arr = this.serialize()
      const m = {}
      arr.forEach(n => {
        m[n.key] = n
      })
      for (let i = 0; i < this.props.data.length; i++) {
        const c = m[this.props.data[i].key]
        this.props.data[i] = { ...this.props.data[i], ...c }
      }
      return this.props.data
    }

    clear() {
      this.grid.remove_all_widgets()
    }

    _getlastPosition() {
      const arr = this.serialize()
      const map = {}
      arr.forEach(n=>{
        const {col,row,size_x,size_y} = n
        if (!map[row]) {
          map[row] = 0
        }
        map[row] += size_x
        for (let i=1;i<size_y;i++) {
          if (!map[row+i]) {
            map[row+i] = 0
          }
          map[row+i] += size_x
        }
      })
      return map
    }

    add(item,prepend) {
      let {col=1,row=1,size_x=1,size_y=1,key=nomui.utils.newGuid()} = item

      if (size_x > this.props.cols) {
        new nomui.Alert({
          type: 'info',
          title: `组件横向尺寸不能超过${this.props.cols}`,
        })
        return
      }

      if (!item.col || !item.row) {
        const pos = this._getlastPosition()
        for (let _row in pos) {
          row = _row+1
        }
        if (prepend) {
          row =1
          col =1
        }
      }
      
      const data = this.getData()
      data.push({...item,key,row,col,size_x,size_y})

      this.update({
        data:data
      })
      
    }

    remove(key) {
      const arr = this.props.data.filter(n=>{
        return n.key !==key
      })
      this.update({
        data:arr
      })
      this.onRemove && this._callHandler(this.props.onRemove)
    }

    _rendered() {
      setTimeout(() => {
        this.grid = $(".gridster ul").gridster({
          max_cols: this.props.cols,
          widget_base_dimensions: ['auto', this.props.widgetHeightBase],
          widget_margins: [this.props.gutter, this.props.gutter],
          draggable: {
            handle: '.gridster-drag-handler'
          },
          resize: {
            enabled: this.props.widgetResizable
          },
          ...this.props.layoutProps
        }).data('gridster');
      }, 300)

    }
  }
  return GridLayout
})
