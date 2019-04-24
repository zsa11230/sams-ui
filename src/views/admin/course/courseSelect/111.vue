<template>
  <div class="user">
    <basic-container>
      <operation-container>
        <!-- <template slot="left">
        </template> -->
        <template slot="right">
          <operation-search @search-page="searchPage">
          </operation-search>
        </template>
      </operation-container>
      <e-table :isLoadTable="isLoadTable" :pagination="pagination" :columnsMap="columnsMap" :pagedTable="pagedTable" @size-change="handleSizeChange" @current-change="handleCurrentChange" @selection-change="handleSelectionChange">
        <el-table-column prop="operation" label="操作" width="280">
          <template slot-scope="scope">
            <operation-wrapper>
              <el-button size="small" @click="handleAdd(scope.row)">选择课程</el-button>
            </operation-wrapper>
          </template>
        </el-table-column>
      </e-table>
    </basic-container>
  </div>
</template>

<script>
import mixins from '@/mixins/mixins'
import { getTableData, addCourse, getCourse, delCourse, putCourse } from '@/api/admin/course'
import { columnsMap, initMemberForm } from '../options'
export default {
  mixins: [mixins],
  data () {
    return {
      columnsMap,
    }
  },
  methods: {
    loadPage (param) {
      this.loadTable(param, getTableData)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val.map(m => m.userId)
    },
  },
}
</script>