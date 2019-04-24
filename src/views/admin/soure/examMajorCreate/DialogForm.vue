<template>
  <e-dialog :dialog-show="dialogShow" title="添加成绩" width="800px" @close="close">
    <e-table :isLoadTable="isLoadTable" :pagination="pagination" :columnsMap="columnsMap" :pagedTable="pagedTable" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      <el-table-column prop="operation" label="操作" width="100">
        <template slot-scope="scope">
          <operation-wrapper>
            <el-button size="small" @click="handleAdd(scope.row)">添加成绩</el-button>
          </operation-wrapper>
        </template>
      </el-table-column>
    </e-table>
    <GradeDialogForm ref="GradeDialogForm" @load-page="loadPage"></GradeDialogForm>
    <template slot="footer">
      <!-- <el-button type="primary" @click="submitForm('form')">保存</el-button> -->
      <el-button @click="close">取消</el-button>
    </template>
  </e-dialog>
</template>
<script>
import mixins from '@/mixins/mixins'
import GradeDialogForm from './GradeDialogForm'
import { getMajorScoreById } from '@/api/admin/score'
export default {
  components: { GradeDialogForm },
  mixins: [mixins],
  data () {
    return {
      courseId: '',
      courseName: '',
      dialogShow: false,
      formRequestFn: () => { },
      form: {},
      columnsMap: [
        {
          prop: 'realName',
          label: '姓名',
        },
        {
          prop: 'courseName',
          label: '课程',
        },
        {
          prop: 'courseType',
          label: '课程类型',
        },
        {
          prop: 'examGrade',
          label: '考试成绩',
        },
        {
          prop: 'partGrade',
          label: '平时成绩',
        },
        {
          prop: 'grade',
          label: '期评',
        },
      ]
    }
  },
  methods: {
    handleAdd (row) {
      this.$refs['GradeDialogForm'].form.id = row.id
      this.$refs['GradeDialogForm'].form.credits = this.credits
      this.$refs['GradeDialogForm'].form.courseTeacher = this.courseTeacher
      this.$refs['GradeDialogForm'].form.courseId = this.courseId
      this.$refs['GradeDialogForm'].form.userId = row.studentId
      this.$refs['GradeDialogForm'].form.courseName = this.courseName
      this.$refs['GradeDialogForm'].form.examGrade = row.examGrade
      this.$refs['GradeDialogForm'].form.partGrade = row.partGrade
      this.$refs['GradeDialogForm'].form.grade = row.grade
      this.$refs['GradeDialogForm'].form.courseType = "公共/必修课"
      this.$refs['GradeDialogForm'].dialogShow = true
    },
    loadPage (param) {
      this.loadTable({ courseId: this.courseId, ...param }, getMajorScoreById)
    },
    close () {
      this.form = {}
      this.dialogShow = false
      this.$emit('load-page')
    }
  }
}
</script>
