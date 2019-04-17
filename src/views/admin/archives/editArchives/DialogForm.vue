<template>
  <e-dialog :dialog-show="dialogShow" :title="`${methodName}个人档案信息`" width="800px" @close="loadPage">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-row>
        <el-col :span="24">
          <el-form-item label="头像">
            <el-upload class="avatar-uploader" action="/admin/file/upload" :headers="headers" :show-file-list="false" :on-success="handleAvatarSuccess">
              <img id="avatar" v-if="form.headImage" :src="avatarUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="真实姓名" prop="realName">
            <el-input v-model="form.realName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="!isEdit">
        <el-col :span="24">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="!isEdit">
        <el-col :span="24">
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="!isEdit">
        <el-col :span="24">
          <el-form-item label="状态" prop="lockFlag">
            <el-select v-model="form.lockFlag" placeholder="请选择状态">
              <el-option v-for="item in statusDict" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item v-if="isEdit" label="学号">
            <el-input v-model="form.studentId" :disabled="isEdit"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="民族">
            <el-input v-model="form.nation"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别">
            <el-select v-model="form.sex" placeholder="请选择">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="出生年月">
            <el-input v-model="form.birthDate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="入学日期">
            <el-input v-model="form.enrollment"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="家庭地址">
            <el-input v-model="form.contactAddress"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="个人信息">
        <el-input type="textarea" v-model="form.personalInformation"></el-input>
      </el-form-item>
      <el-form-item label="个人荣誉">
        <el-input type="textarea" v-model="form.honor"></el-input>
      </el-form-item>
    </el-form>
    <template slot="footer">
      <el-button type="primary" @click="submitForm('form')">保存</el-button>
      <el-button @click="loadPage">取消</el-button>
    </template>
  </e-dialog>
</template>
<script>
import { getArchives } from '@/api/admin/archives'
import { initMemberForm } from './options'
import { getDetails } from '@/api/admin/user'
import { handleImg } from '@/util/util'
import store from '@/store'

var validateUsername = (rule, value, callback) => {
  getDetails(value).then(response => {
    if (window.boxType === 'edit') callback()
    let result = response.data.data
    if (result !== null) {
      callback(new Error('用户名已经存在'))
    } else {
      callback()
    }
  })
}
export default {
  data () {
    return {
      isEdit: false,
      dialogShow: false,
      formRequestFn: () => { },
      form: initMemberForm(),
      methodName: '',
      avatarUrl: '',
      headers: {
        Authorization: 'Bearer ' + store.getters.access_token,
      },
      statusDict: [{
        label: '有效',
        value: '0'
      }, {
        label: '锁定',
        value: '9'
      }],
      rules: {
        realName: [
          { required: true, message: '请输入真实姓名', trigger: 'change' }
        ],
        username: [
          { required: true, validator: validateUsername, trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入用户登录密码', trigger: 'change' }
        ],
        lockFlag: [
          { required: true, message: '请选择用户状态', trigger: 'change' }
        ],
      }
    }
  },
  created () {
    this.loadPage()
  },
  methods: {
    loadImg () {
      handleImg(this.form.headImage, 'avatar')
    },
    handleAvatarSuccess (res, file) {
      this.avatarUrl = URL.createObjectURL(file.raw)
      this.form.headImage = res.data.bucketName + '-' + res.data.fileName
    },
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
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px !important;
  color: #8c939d !important;
  width: 178px !important;
  height: 178px !important;
  line-height: 178px !important;
  text-align: center !important;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
