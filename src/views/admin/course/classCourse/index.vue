<template>
  <div class="user">
    <basic-container>
      <operation-container>
        <template slot="left">
          <el-button type="danger" size="small" @click="handleAdd()">新增选修课程</el-button>
        </template>
        <template slot="right">
          <operation-search @search-page="searchPage">
          </operation-search>
        </template>
      </operation-container>
      <e-table :isLoadTable="isLoadTable" :pagination="pagination" :columnsMap="columnsMap" :pagedTable="pagedTable" @size-change="handleSizeChange" @current-change="handleCurrentChange" @selection-change="handleSelectionChange" is-mutiple-selection>
        <el-table-column prop="operation" label="操作" width="280">
          <template slot-scope="scope">
            <operation-wrapper>
              <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="small" @click="handleDelete(scope.row)">删除</el-button>
            </operation-wrapper>
          </template>
        </el-table-column>
      </e-table>
    </basic-container>
    <dialog-form ref="DialogForm" @load-page="loadPage"></dialog-form>
  </div>
</template>

<script>
import mixins from '@/mixins/mixins'
import { getTableData, addCourse, getCourse, delCourse, putCourse } from '@/api/admin/course'
import { columnsMap, initMemberForm } from '../options'
import DialogForm from './DialogForm'
export default {
  mixins: [mixins],
  data () {
    return {
      columnsMap,
    }
  },
  components: { DialogForm },
  methods: {
    loadPage (param) {
      this.loadTable(param, getTableData)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val.map(m => m.userId)
    },
    handleDelete (row) {
      this._handleGlobalDeleteById(row.id, delCourse)
    },
    handleAdd (row) {
      this.$refs['DialogForm'].form = initMemberForm(row)
      this.$refs['DialogForm'].methodName = '新增'
      this.$refs['DialogForm'].formRequestFn = addCourse
      this.$refs['DialogForm'].dialogShow = true
    },
    handleEdit (row) {
      getCourse(row.id).then(({ data }) => {
        this.$refs['DialogForm'].form = data.data
        this.$refs['DialogForm'].methodName = '修改'
        this.$refs['DialogForm'].formRequestFn = putCourse
        this.$refs['DialogForm'].dialogShow = true

      })
    },
  },
}
</script>