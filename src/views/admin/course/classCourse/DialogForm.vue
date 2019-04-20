<template>
  <e-dialog :dialog-show="dialogShow" :title="`${methodName}课程管理`" width="800px" @close="loadPage">
    <el-form ref="form" :model="form" label-width="80px">
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
              <el-option label="公共/选修课" value="公共/选修课"></el-option>
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
      <el-row>
        <el-col :span="12">
          <el-form-item label="教学时长">
            <el-input v-model="form.duration"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="课程人数">
            <el-input v-model="form.number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="上课时间">
            <el-select v-model="form.subjectTime" placeholder="请选择">
              <el-option label="星期一-12节" :value="0"></el-option>
              <el-option label="星期一-34节" :value="1"></el-option>
              <el-option label="星期一-56节" :value="2"></el-option>
              <el-option label="星期一-78节" :value="3"></el-option>
              <el-option label="星期二-12节" :value="4"></el-option>
              <el-option label="星期二-34节" :value="5"></el-option>
              <el-option label="星期二-56节" :value="6"></el-option>
              <el-option label="星期二-78节" :value="7"></el-option>
              <el-option label="星期三-12节" :value="8"></el-option>
              <el-option label="星期三-34节" :value="9"></el-option>
              <el-option label="星期三-56节" :value="10"></el-option>
              <el-option label="星期三-78节" :value="11"></el-option>
              <el-option label="星期四-12节" :value="12"></el-option>
              <el-option label="星期四-34节" :value="13"></el-option>
              <el-option label="星期四-56节" :value="14"></el-option>
              <el-option label="星期四-78节" :value="15"></el-option>
              <el-option label="星期五-12节" :value="16"></el-option>
              <el-option label="星期五-34节" :value="17"></el-option>
              <el-option label="星期五-56节" :value="18"></el-option>
              <el-option label="星期五-78节" :value="19"></el-option>
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
import { addClass, getClass } from '@/api/admin/class'
import { initMemberForm } from '../options'
export default {
  data () {
    return {
      dialogShow: false,
      formRequestFn: () => { },
      form: initMemberForm(),
      methodName: '',
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
