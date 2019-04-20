<template>
  <e-dialog :dialog-show="dialogShow" title="课表" width="520px" @close="resetForm('form')">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="可选课程">
        <el-select v-model="form.classId" placeholder="请选择可选课程">
          <el-option :label="item.name" :value="item.id" :key="item.id" v-for="item in courseOption"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template name="footer">
      <el-button @click="handleSubmit">保存</el-button>
    </template>
  </e-dialog>
</template>
<script>
import { postCourseList, postCourseUpdate } from '@/api/admin/class'
export default {
  data () {
    return {
      dialogShow: false,
      id: null,
      subjectTime: null,
      courseOption: [],
      form: {
        id: '',
        classId: '',
        subjectTime: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.form.subjectTime = this.subjectTime
      postCourseUpdate(this.form).then(({ data }) => {
        this.$emit('submit', data.data)
        this.form = {
          id: '',
          classId: '',
          subjectTime: ''
        }
        this.dialogShow = false
      })
    },
    loadPage () {
      this.form.id = this.id
      postCourseList(
        this.id
      ).then(({ data }) => {
        this.courseOption = data.data
      })
    },
    resetForm () {
      this.dialogShow = false
    }
  }
}
</script>