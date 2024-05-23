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

    add(item) {
      this.grid.add_widget('<li />', item.size_x, item.size_y, item.col, item.row)
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
