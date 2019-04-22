<template>
  <div class="user">
    <basic-container>
      <e-table :isLoadTable="isLoadTable" :pagination="pagination" :columnsMap="columnsMap" :pagedTable="pagedTable">
      </e-table>
    </basic-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mixins from '@/mixins/mixins'
import { getClassPage } from '@/api/admin/class'
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
      this.loadTable(param, getClassPage)
    },
  },
  created () {
    this.loadPage()
  }
}
</script>