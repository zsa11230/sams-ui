<template>
  <div class="user">
    <basic-container>
      <operation-container>
        <template slot="left">
          <el-button type="danger" size="small" @click="handleAdd()">新增班级</el-button>
        </template>
        <template slot="right">
          <operation-search @search-page="searchPage">
          </operation-search>
        </template>
      </operation-container>
      <e-table :isLoadTable="isLoadTable" :pagination="pagination" :columnsMap="columnsMap" :pagedTable="pagedTable" @size-change="handleSizeChange" @current-change="handleCurrentChange" @selection-change="handleSelectionChange" is-mutiple-selection>
        <el-table-column prop="operation" label="操作" width="350">
          <template slot-scope="scope">
            <operation-wrapper>
              <el-button size="small" @click="handleEdit(scope.row)">编辑信息</el-button>
              <el-button size="small" @click="handleView(scope.row)">查看班级成员</el-button>
              <el-button size="small" @click="handleAddStudent(scope.row)">添加人员</el-button>
              <el-button v-if="scope.row.schedule===0" size="small" @click="handleCreateCourse(scope.row)">创建课表</el-button>
              <el-button v-if="scope.row.schedule===1" size="small" @click="handleCourse(scope.row)">查看课表</el-button>
              <el-button size="small" @click="handleDelete(scope.row)">删除</el-button>
            </operation-wrapper>
          </template>
        </el-table-column>
      </e-table>
    </basic-container>
    <dialog-form ref="DialogForm" @load-page="loadPage"></dialog-form>
    <create-dialog ref="createDialog" @load-page="loadPage"></create-dialog>
    <course-dialog ref="courseDialog" @load-page="loadPage"></course-dialog>
    <student-dialog ref="studentDialog" @load-page="loadPage"></student-dialog>
  </div>
</template>

<script>
import { getClassList, addStudent } from '@/api/admin/class'
import mixins from '@/mixins/mixins'
import { getTableData, addClass, getClass, putClass, delClass, createCourse } from '@/api/admin/class'
import { columnsMap, initMemberForm } from './options'
import DialogForm from './DialogForm'
import createDialog from './createDialog'
import courseDialog from './courseDialog'
import studentDialog from './studentDialog'
export default {
  mixins: [mixins],
  data () {
    return {
      columnsMap,
    }
  },
  components: { DialogForm, createDialog, courseDialog, studentDialog },
  methods: {
    loadPage (param) {
      this.loadTable(param, getTableData)
    },
    handleCreateCourse (row) {
      createCourse(row.id).then(() => {
        this.loadPage()
      })
    },
    handleSelectionChange (val) {
      this.multipleSelection = val.map(m => m.serId)
    },
    handleDelete (row) {
      this._handleGlobalDeleteById(row.id, delClass)
    },
    handleAdd (row) {
      this.$refs['DialogForm'].form = initMemberForm(row)
      this.$refs['DialogForm'].methodName = '新增'
      this.$refs['DialogForm'].formRequestFn = addClass
      this.$refs['DialogForm'].dialogShow = true
    },
    handleEdit (row) {
      getClass(row.id).then(({ data }) => {
        this.$refs['DialogForm'].form = data.data
        this.$refs['DialogForm'].methodName = '修改'
        this.$refs['DialogForm'].formRequestFn = putClass
        this.$refs['DialogForm'].dialogShow = true
      })
    },
    handleView (row) {
      this.$refs['studentDialog'].classId = row.id
      this.$refs['studentDialog'].loadPage()
      this.$refs['studentDialog'].dialogShow = true
    },
    handleAddStudent (row) {
      this.$refs['createDialog'].classId = row.id
      this.$refs['createDialog'].loadPage()
      this.$refs['createDialog'].dialogShow = true
    },
    handleCourse (row) {
      this.$refs['courseDialog'].classId = row.id
      this.$refs['courseDialog'].loadPage()
      this.$refs['courseDialog'].dialogShow = true
    },
    selectProject (projectId, projectName) {
      this.dialogState = 'create'
    },
  },
}
</script>