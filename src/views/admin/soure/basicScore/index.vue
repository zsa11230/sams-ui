<template>
  <div class="user">
    <basic-container>
      <operation-container>
        <template slot="left">
        </template>
        <template slot="right">
          <operation-search @search-page="searchPage">
          </operation-search>
        </template>
      </operation-container>
      <e-table :isLoadTable="isLoadTable" :pagination="pagination" :columnsMap="columnsMap" :pagedTable="pagedTable">
        <el-table-column prop="operation" label="操作" width="280">
          <template slot-scope="scope">
            <operation-wrapper>
            </operation-wrapper>
          </template>
        </el-table-column>
      </e-table>
    </basic-container>
  </div>
</template>

<script>
import mixins from '@/mixins/mixins'
import { getTableData } from '@/api/admin/score'
import { columnsMap } from './options'
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
  },
}
</script>