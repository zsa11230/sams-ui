<template>
  <div class="user">
    <basic-container>
      <operation-container>
        <template slot="left">
          <!-- <el-button type="danger" size="small" @click="handleAdd()">新增班级</el-button> -->
        </template>
        <template slot="right">
          <!-- <operation-search @search-page="searchPage">
          </operation-search> -->
        </template>
      </operation-container>
      <e-table :isLoadTable="isLoadTable" :pagination="pagination" :columnsMap="columnsMap" :pagedTable="pagedTable">
      </e-table>
    </basic-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mixins from '@/mixins/mixins'
import { getTableData, addClass, getClass, putClass, delClass } from '@/api/admin/class'
import { columnsMap, initMemberForm } from './options'
export default {
  mixins: [mixins],
  data () {
    return {
      columnsMap,
    }
  },
  computed: {
    ...mapState({
      userId: state => state.user.userInfo.userId
    })
  },
  methods: {
    loadPage (param = { ...this.searchForm, id: this.userId }) {
      this.loadTable(param, getTableData)
    },
  },
  created () {
    this.loadPage()
  }
}
</script>