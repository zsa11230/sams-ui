<template>
  <e-dialog :dialog-show="dialogShow" title="课表" width="520px" @close="resetForm('form')">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="可选课程">
        <el-select v-model="form.course" placeholder="请选择可选课程">
          <el-option label="语文" value="语文"></el-option>
          <el-option label="数学" value="数学"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template name="footer">
      <el-button @click="handleSubmit">保存</el-button>
    </template>
  </e-dialog>
</template>
<script>
export default {
  data () {
    return {
      dialogShow: false,
      form: {
        course: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('submit', this.form.course)
      this.dialogShow = false
    },
    loadPage () {

    },
    resetForm () {
      this.dialogShow = false
    }
  }
}
</script>