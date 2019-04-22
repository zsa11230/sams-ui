<template>
  <div class="user">
    <basic-container>
      <operation-container>
        <!-- <template slot="left">
          <el-button type="danger" size="small" @click="handleAdd()">新增</el-button>
        </template> -->
        <template slot="right">
          <operation-search @search-page="searchPage">
          </operation-search>
        </template>
      </operation-container>
      <e-table :isLoadTable="isLoadTable" :pagination="pagination" :columnsMap="columnsMap" :pagedTable="pagedTable" @size-change="handleSizeChange" @current-change="handleCurrentChange" @selection-change="handleSelectionChange">
        <!-- <el-table-column prop="operation" label="操作" width="280">
          <template slot-scope="scope">
            <operation-wrapper>
              <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="small" @click="handleDelete(scope.row)">删除</el-button>
            </operation-wrapper>
          </template>
        </el-table-column> -->
      </e-table>
    </basic-container>
  </div>
</template>

<script>
import mixins from '@/mixins/mixins'
import { addObj } from "@/api/admin/user";
import { getTableData, getArchives, putArchives } from '@/api/admin/score'
import { columnsMap, initMemberForm } from './options'
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
  created () {
    this.loadPage()
  }
}
</script>