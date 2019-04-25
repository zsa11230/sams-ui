<template>
  <e-dialog :dialog-show="dialogShow" title="修改成绩" width="520px" @close="close">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="考试成绩">
        <el-input v-model="form.examGrade"></el-input>
      </el-form-item>
      <el-form-item label="平时成绩">
        <el-input v-model="form.partGrade"></el-input>
      </el-form-item>
      <el-form-item label="期评">
        <el-input v-model="form.grade"></el-input>
      </el-form-item>
    </el-form>
    <template slot="footer">
      <el-button type="primary" @click="submitForm('form')">保存</el-button>
      <el-button @click="close">取消</el-button>
    </template>
  </e-dialog>
</template>
<script>
import { putScore } from '@/api/admin/score'
export default {
  data () {
    return {
      dialogShow: false,
      form: {
        courseTeacher: '',
        credits: '',
        courseId: '',
        courseName: '',
        userId: '',
        examGrade: '',
        partGrade: '',
        grade: '',
        id: ''
      }
    }
  },
  methods: {
    submitForm () {
      putScore(this.form).then(() => {
        this.close()
      })
    },
    close () {
      this.form = {}
      this.dialogShow = false
      this.$emit('load-page')
    }
  }
}
</script>
