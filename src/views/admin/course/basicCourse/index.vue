<template>
  <el-card title="课表" width="100%" :disabled="true">
    <div class="container">
      <div class="item item-1"></div>
      <div class="item item-2">
        <div class="title-container">
          <div class="title-item">周一</div>
          <div class="title-item">周二</div>
          <div class="title-item">周3</div>
          <div class="title-item">周4</div>
          <div class="title-item">周5</div>
        </div>
      </div>
      <div class="item item-3">
        <div class="time-container">
          <div class="title-item">1</div>
          <div class="title-item">2</div>
          <div class="title-item">3</div>
          <div class="title-item">4</div>
        </div>
      </div>
      <div class="item item-4">
        <div class="content-container">
          <div class="item" v-for="(item,i) in courseList" :key="i">{{item}}</div>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script>
import { getSchedule } from '@/api/admin/class'
export default {
  data () {
    return {
      dialogShow: true,
      classId: null,
      courseList: [],
      selectId: null,
    }
  },
  created () {
    this.loadPage()
  },
  methods: {
    loadPage () {
      getSchedule().then(({ data }) => {
        this.courseList = data.data.map(m => m.className)
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: 30px 1fr;
  .title-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  .time-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  .content-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    .item {
      text-align: center;
      font-size: 25px;
      height: 40px;
      border: 1px solid #666;
    }
  }
}

.item {
  text-align: center;
  font-size: 25px;
  border: 1px solid #fff;
  height: 40px;
}

.item-1 {
  background-color: #e69894;
}

.item-2 {
  background-color: #f8cda2;
}

.item-3 {
  background-color: #8eaa8d;
  height: 170px;
  .title-item {
    height: 45px;
  }
}

.item-4 {
  background-color: #fff;
}
</style>
