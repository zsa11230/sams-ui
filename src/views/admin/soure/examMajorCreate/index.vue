<template>
  <div class="user">
    <basic-container>
      <operation-container>
        <template slot="right">
          <operation-search @search-page="searchPage">
          </operation-search>
        </template>
      </operation-container>
      <e-table :isLoadTable="isLoadTable" :pagination="pagination" :columnsMap="columnsMap" :pagedTable="pagedTable" @size-change="handleSizeChange" @current-change="handleCurrentChange" @selection-change="handleSelectionChange" is-mutiple-selection>
        <el-table-column prop="operation" label="操作" width="280">
          <template slot-scope="scope">
            <operation-wrapper>
              <el-button size="small" @click="handleEdit(scope.row)">添加学生成绩111</el-button>
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
import { getMajorData, addScore, getScore, delScore, putScore } from '@/api/admin/score'
import { columnsMap, initMemberForm } from './options'
import DialogForm from './DialogForm'
export default {
  mixins: [mixins],
  data () {
    return {
      columnsMap,
    }
  },
  components: { DialogForm },
  created () {
    this.loadPage()
  },
  methods: {
    loadPage (param) {
      this.loadTable(param, getMajorData)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val.map(m => m.userId)
    },
    handleDelete (row) {
      this._handleGlobalDeleteById(row.id, delScore)
    },
    handleEdit (row) {
      this.$refs['DialogForm'].courseId = row.id
      this.$refs['DialogForm'].credits = row.credits
      this.$refs['DialogForm'].courseTeacher = row.courseTeacher
      this.$refs['DialogForm'].courseName = row.courseName
      this.$refs['DialogForm'].loadPage()
      this.$refs['DialogForm'].dialogShow = true
    },
  },
}
</script>