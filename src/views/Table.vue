<template>
  <div>
    <div style="margin-bottom: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
    <div>{{ renderTime }}</div>
    <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
        label="日期"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        width="120">
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
        </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
  export default {
    name: 'Table',
    data() {
      return {
        renderTime: '',
        tableData: [],
        multipleSelection: []
      }
    },
    created() {
      for (let i = 0; i < 1000; i++) {
        this.tableData.push({
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        })
      }
    },
    methods: {
      toggleSelection(rows) {
        const preTime = window.performance.now()
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
          setTimeout(() => {
            this.renderTime = (window.performance.now() - preTime).toFixed(2) + 'ms'
          })
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style>

</style>