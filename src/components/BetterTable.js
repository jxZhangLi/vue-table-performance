import { Table, TableColumn } from 'element-ui'

function renderColumn (h, { prop, label, columns, render, header, ...args }) {
  const scopedSlotsProp = this.$scopedSlots[prop]
  const props = {
    props: args,
    scopedSlots: {
      header
    }
  }

  if (scopedSlotsProp || render) {
    props.scopedSlots.default = (row) => {
      return (scopedSlotsProp && scopedSlotsProp(row)) || (render && render(row))
    }
  }
  // const on = {
  //   on: this.$listeners this.$scopedSlots[prop] || render
  // }
  return (
    <el-table-column
      {...props}
      prop={prop}
      label={label}>
      {
        columns && columns.length && (
          getAllColumn.call(this, h, columns)
        )
      }
    </el-table-column>
  )
}

function getAllColumn (h, columns) {
  const res = []

  columns.forEach(item => {
    res.push(
      renderColumn.call(this, h, item)
    )
  })

  return res
}


export default {
  inheritAttrs: false,

  name: 'BetterTable',

  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    columns: {
      type: Array,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    }
  },

  data () {
    return {
      loading: true,
    }
  },

  created () {
    console.log(this)
    // setTimeout(() => {
    //   this.loading = false
    // }, 1000)
  },

  render: function (h) {
    const props = {
      props: this.$attrs,
      // directives: [
      //   {
      //     name: 'loading',
      //     value: this.loading
      //   }
      // ]
    }
    const on = {
      on: this.$listeners
    }

    return (
      <div>
        <el-table
          {...props}
          {...on}
          data={this.data}
          style={this.tableWidth}>
          {getAllColumn.call(this, h, this.columns)}
          {this.$slots.default}
        </el-table>
      </div>
    )
  },

  computed: {
    tableWidth () {
      return {
        width: `${this.width}`
      }
    }
  },

  methods: {
    
  },

  components: {
    ElTable: Table,
    ElTableColumn: TableColumn
  }
}
