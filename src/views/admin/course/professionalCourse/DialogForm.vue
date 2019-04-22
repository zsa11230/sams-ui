<template>
  <e-dialog :dialog-show="dialogShow" :title="`${methodName}课程管理`" width="800px" @close="loadPage">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="24">
          <el-form-item label="所属班级">
            <el-select v-model="form.classId" placeholder="请选择">
              <el-option :label="item.className" :value="item.id" v-for="item in classList" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="课程名称">
            <el-input v-model="form.courseName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="班主任">
            <el-input v-model="form.courseTeacher"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="课程类型">
            <el-select v-model="form.courseType" placeholder="请选择">
              <el-option label="公共/必修课" value="公共/必修课"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="学分">
            <el-select v-model="form.credits" placeholder="请选择">
              <el-option label="1分" value="1分"></el-option>
              <el-option label="2分" value="2分"></el-option>
              <el-option label="3分" value="3分"></el-option>
              <el-option label="4分" value="4分"></el-option>
              <el-option label="5分" value="5分"></el-option>
            </el-select>
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
import { addClass, getClass, getClassList } from '@/api/admin/class'
import { initMemberForm } from '../options'
export default {
  data () {
    return {
      dialogShow: false,
      formRequestFn: () => { },
      form: initMemberForm(),
      methodName: '',
      classList: [],
    }
  },
  created () {
    getClassList().then(({ data }) => {
      console.log(data.data)
      this.classList = data.data
    })
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
