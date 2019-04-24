// org config options

const columnsMap = [
  {
    prop: 'courseName',
    label: '课程名称',
  },
  {
    prop: 'courseType',
    label: '课程类型',
  },
  {
    prop: 'credits',
    label: '学分',
  },
  {
    prop: 'courseTeacher',
    label: '课程老师',
  },
]

const initMemberForm = () => {
  return {
    deptId: 1,
    role: [3],
    username: '',
    userId: '',
    realName: '',
    studentId: '',
    enrollment: '',
    nation: '',
    sex: '',
    birthDate: '',
    contactAddress: '',
    personalInformation: '',
    honor: ''
  }
}


const initSearchForm = () => {
  return {
    name: '',
  }
}


export { columnsMap, initSearchForm, initMemberForm }