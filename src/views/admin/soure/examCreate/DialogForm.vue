<template>
  <e-dialog :dialog-show="dialogShow" :title="`${methodName}课程管理`" width="800px" @close="loadPage">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="24">
          <el-form-item label="班级名称">
            <el-input v-model="form.className"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="年制">
            <el-select v-model="form.yearSystem" placeholder="请选择">
              <el-option label="二年" value="二年"></el-option>
              <el-option label="三年" value="三年"></el-option>
              <el-option label="四年" value="四年"></el-option>
              <el-option label="五年" value="五年"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="班主任">
            <el-input v-model="form.headmaster"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="所属学院">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="学期">
            <el-input v-model="form.semester"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="所属专业">
            <el-input v-model="form.profession"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="备注">
            <el-input v-model="form.remarks"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template slot="footer">
      <el-button type="primary" @click="submitForm('form')">保存</el-button>
      <el-button @click="loadPage">取消</el-button>
    </template>
  </e-dialog>
</template>
<script>
import { addClass, getClass } from '@/api/admin/class'
import { initMemberForm } from '../options'
export default {
  data () {
    return {
      dialogShow: false,
      formRequestFn: () => { },
      form: initMemberForm(),
      methodName: ''
    }
  },
  created () {
    this.loadPage()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.formRequestFn(this.form).then(() => {
            this.$notify({
              title: '成功',
              message: `${this.methodName}成功`,
              type: 'success',
              duration: 2000,
            })
            this.loadPage()
          })
        } else {
          return false
        }
      })
    },
    loadPage () {
      this.form = {}
      this.dialogShow = false
      this.$emit('load-page')
    },
  }
}
</script>
