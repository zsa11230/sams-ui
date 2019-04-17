<template>
  <e-dialog :dialog-show="dialogShow" title="课表" width="80%" @close="resetForm('form')">
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
          <div class="title-item">5</div>
        </div>
      </div>
      <div class="item item-4">
        <div class="content-container">
          <div v-for="(item,i) in courseList" :key="i" @click="handleSelect(i)">{{item}}</div>
        </div>
      </div>
    </div>
    <selectCourseDialog ref="selectCourseDialog" @submit="handleSelectSubmit"></selectCourseDialog>
  </e-dialog>
</template>
<script>
import selectCourseDialog from './selectCourseDialog'
export default {
  components: { selectCourseDialog },
  data () {
    return {
      dialogShow: false,
      classId: null,
      courseList: ['物理', '语文', '英语', '物理', '语文', '数学', '语文', '物理', '物理', '语文', '语文', '数学', '英语', '物理', '数学', '数学', '语文', '物理', '物理', '语文', '语文', '数学', '英语', '物理', '语文'],
      selectId: null,
    }
  },
  methods: {
    handleSelect (i) {
      this.selectId = i
      this.$refs['selectCourseDialog'].dialogShow = true
    },
    handleSelectSubmit (name) {
      const { courseList } = this
      courseList[this.selectId] = name
      console.log(courseList)
      this.$set(this, 'courseList', courseList)
      console.log(this.courseList)
    },
    loadPage () {

    },
    resetForm () {
      this.dialogShow = false
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 30px 1fr;
  .title-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  .time-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }
  .content-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }
}

.item {
  text-align: center;
  font-size: 20px;
  border: 1px solid #e5e4e9;
}

.item-1 {
  background-color: #e69894;
}

.item-2 {
  background-color: #f8cda2;
}

.item-3 {
  background-color: #8eaa8d;
}

.item-4 {
  background-color: #fff;
}
</style>
