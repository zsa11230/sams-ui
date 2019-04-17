// org config options

const columnsMap = [
  {
    prop: 'courseName',
    label: '课程名称',
  },
  {
    prop: 'courseTeacher',
    label: '教学老师',
  },
  {
    prop: 'courseType',
    label: '课程类型',
  },
  {
    prop: 'credits',
    label: '学分',
  },
]

const initMemberForm = () => {
  return {
    className: '',
    yearSystem: '',
    headmaster: '',
    semester: '',
    title: '',
    profession: '',
    remarks: ''
  }
}


const initSearchForm = () => {
  return {
    name: '',
  }
}


export { columnsMap, initSearchForm, initMemberForm }