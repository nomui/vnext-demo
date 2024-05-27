define(['jquery-gridster', 'css!libs/gridster/style.css'], function (Gridster) {
  window.gridster = Gridster
  class GridLayout extends nomui.Component {
    constructor(props, ...mixins) {
      const defaults = {
        layoutProps: {
          min_cols: 1,
          helper: 'clone',
          shift_widgets_up: true,
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
      if (this.grid) {
        this.grid.destroy()
      }
      this.setProps({
        classes: {
          'gridster': true,
          'editing': !this.props.readonly
        },
        children: [
          // {
          //   component: 'List',
          //   itemRender: ({ itemData, item }) => {
          //     item.setProps({
          //       attrs: {
          //         'data-key': itemData.key,
          //         'data-row': itemData.row,
          //         'data-col': itemData.col,
          //         'data-sizex': itemData.size_x,
          //         'data-sizey': itemData.size_y,
          //       }
          //     })
          //     return {
          //       children: [itemData.itemRender ? itemData.itemRender() : '', {
          //         classes: {
          //           'gridster-drag-handler': true
          //         }
          //       }],

          //     }
          //   },
          //   data: this.props.data
          // }
          {
            tag:'ul',
            classes:{
              'gridster-list':true
            },
        
          }
        ]
      })

    }

    _renderList() {
      this.grid.remove_all_widgets();
 
            this.props.data.forEach(n=>{
              this.addItem(n)
            })


      // const data = this.props.data.map(itemData=>{
      //   return {
      //     classes:{
      //       'gridster-item':true
      //     },
      //     attrs: {
      //       'data-key': itemData.key,
      //       'data-row': itemData.row,
      //       'data-col': itemData.col,
      //       'data-sizex': itemData.size_x,
      //       'data-sizey': itemData.size_y,
      //     },
      //     children:[itemData.itemRender ? itemData.itemRender() : '', {
      //       classes: {
      //         'gridster-drag-handler': true
      //       }
      //     }]
      //   }
      // })
          
      // return data
      
    }

    edit() {
      this.props.readonly = false
      this.element.classList.add('editing')
    }

    endEdit() {
      this.props.readonly = true
      this.element.classList.remove('editing')
    }

    _serialize() {
      return this.grid.serialize()
    }

    _serializeData() {
      const arr = this._serialize()
      const m = {}
      arr.forEach(n => {
        m[n.key] = n
      })
      for (let i = 0; i < this.props.data.length; i++) {
        const c = m[this.props.data[i].key]
        this.props.data[i] = { ...this.props.data[i], ...c }
      }
    }

    getData() {
      this._serializeData()
      return this.props.data
    }

    clear() {
      this.grid.remove_all_widgets()
    }

    _getlastPosition() {
      const arr = this._serialize()
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

    addItem(item,prepend) {
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
        let flag = false
        for (let _row in pos) {
          if (this.props.cols - pos[_row] >=size_x) {

            flag = true
            row = _row
            col = this.props.cols - pos[_row]
          }
          if (!flag) {
            row = _row+1
            col = 1
          }
          
        }
        if (prepend) {
          row =1
          col =1
        }
      }

      const ele = this.grid.add_widget(`<li data-key="${key}"><div class="gridster-drag-handler"></div></li>`, size_x, size_y, col, row)
      new nomui.Component({
        reference:ele[0],
        attrs:{
          style:{
            height:'100%'
          }
        },
        children:[item.itemRender?item.itemRender():'',{
          classes: {
            'gridster-drag-handler': true
          }
        }]
      })

      // todo 更新props.data
      

    }

    remove() {
      this.grid.destroy()
      this.replace({
        children:''
      })
    }

    removeItem(key) {
      this.grid.remove_widget($(this.element).find(`ul > [data-key=${key}]`))
      this.onRemove && this._callHandler(this.props.onRemove,{key})
    }

    _rendered() {
      if (this.firstRender) {
        setTimeout(() => {
          this.grid = $(".gridster .gridster-list").gridster({
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
          }).data('gridster')

          this._renderList()

          
        }, 500)
 
  
      }
      // setTimeout(() => {
      //   this.grid = $(".gridster .gridster-list").gridster({
      //     max_cols: this.props.cols,
      //     widget_base_dimensions: ['auto', this.props.widgetHeightBase],
      //     widget_margins: [this.props.gutter, this.props.gutter],
      //     draggable: {
      //       handle: '.gridster-drag-handler'
      //     },
      //     resize: {
      //       enabled: this.props.widgetResizable
      //     },
      //     ...this.props.layoutProps
      //   }).data('gridster');
      // }, this.firstRender?500:200)

    }
  }
  return GridLayout
})
