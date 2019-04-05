<template>
  <div>
    <el-card class="box-card">
      <div class="user">
        <basic-container>
          <el-form ref="form" :model="form" label-width="80px" :disabled="true">
            <el-row :gutter="100">
              <el-col :span="12">
                <el-form-item label="真实姓名">
                  <el-input v-model="form.realName"></el-input>
                </el-form-item>
                <el-form-item label="民族">
                  <el-input v-model="form.nation"></el-input>
                </el-form-item>
                <el-form-item label="学号">
                  <el-input v-model="form.studentId"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <!-- <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                  <img v-if="headImage" :src="headImage" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload> -->
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="性别">
                  <el-select v-model="form.sex" placeholder="请选择">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="出生年月">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.birthDate" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="家庭地址">
                  <el-input v-model="form.contactAddress"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="入学日期">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.enrollment" style="width: 100%;"></el-date-picker>
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
        </basic-container>
      </div>
    </el-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { getStudent } from '@/api/admin/archives'
export default {
  data () {
    return {
      form: {
        realName: '',
        nation: '',
        studentId: '',
        birthDate: '',
        enrollment: '',
        personalInformation: '',
        honor: '',
        sex: ''
      }
    }
  },
  computed: {
    ...mapState({
      userId: state => state.user.userInfo.userId
    })
  },
  created () {
    this.load()
  },
  methods: {
    load () {
      getStudent(this.userId).then((res) => {
        this.form = res.data.data
      })
    }
  }
}
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: auto;
}
</style>