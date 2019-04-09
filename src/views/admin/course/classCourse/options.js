// org config options

const columnsMap = [
  {
    prop: 'realName',
    label: '真实姓名',
  },
  {
    prop: 'studentId',
    label: '学号',
  },
  {
    prop: 'enrollment',
    label: '入学日期',
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