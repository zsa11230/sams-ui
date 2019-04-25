<template>
  <e-dialog :dialog-show="dialogShow" title="查看" width="80%" @close="close">

    <div class="form">
      <div class="title">班级学生</div>
      <e-table :isLoadTable="isLoadTable" :pagination="pagination" :columnsMap="columnsMap" :pagedTable="pagedTable" @size-change="handleSizeChange" @current-change="handleCurrentChange" @selection-change="handleSelectionChange">
      </e-table>
    </div>

  </e-dialog>
</template>
<script>
import mixins from '@/mixins/mixins'
import { getClassStudentPage } from '@/api/admin/class'
export default {
  mixins: [mixins],
  data () {
    return {
      columnsMap: [
        {
          prop: 'userId',
          label: 'ID'
        },
        {
          prop: 'studentId',
          label: '学号'
        },
        {
          prop: 'realName',
          label: '姓名'
        }
      ],
      dialogShow: false,
      classId: "",
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val.map(m => m.id)
    },
    loadPage (param) {
      this.loadTable({ classId: this.classId, ...param }, getClassStudentPage)
    },
    close () {
      this.form = {}
      this.dialogShow = false
      this.$emit('load-page')
    }
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
