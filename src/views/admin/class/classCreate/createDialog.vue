<template>
  <e-dialog :dialog-show="dialogShow" title="选择学生" width="80%" @close="resetForm('form')">

    <div class="form">
      <div class="title">请从列表中选择学生</div>
      <e-table :isLoadTable="isLoadTable" :pagination="pagination" :columnsMap="columnsMap" :pagedTable="pagedTable" @size-change="handleSizeChange" @current-change="handleCurrentChange" @selection-change="handleSelectionChange" is-mutiple-selection>
      </e-table>
    </div>

    <template slot="footer">
      <el-button type="primary" @click="submitForm('form')">{{methodName}}</el-button>
      <el-button @click="resetForm('form')">取消</el-button>
    </template>
  </e-dialog>
</template>
<script>
import mixins from '@/mixins/mixins'
import { getStudentPage } from '@/api/admin/archives'
import { addStudent } from '@/api/admin/class'
export default {
  mixins: [mixins],
  data () {
    return {
      columnsMap: [
        {
          prop: 'id',
          label: 'ID'
        },
        {
          prop: 'name',
          label: '姓名'
        }
      ],
      dialogShow: false,
      formRequestFn: () => { },
      methodName: '确定',
      classId: null,
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val.map(m => m.id)
    },
    loadPage (param) {
      this.loadTable(param, getStudentPage)
    },
    resetForm () {
      this.searchDatas = ''
      this.dialogShow = false
    },
    submitForm () {
      addStudent({
        classId: this.classId,
        studentIds: this.multipleSelection
      }).then(({ data }) => {
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        });
        this.dialogShow = false
        this.$emit('load-page')
      })
    },
    changeVal (id, name) {
      this.selectId = id
      this.selectName = name
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  padding: 0 20px 0 30px;
  .select-content {
    border-top: 1px solid #eee;
    padding-top: 20px;
    margin-top: 20px;
    .title {
      margin-bottom: 20px;
    }
    .select-ul {
      .select-li {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
