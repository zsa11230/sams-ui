// org config options

const columnsMap = [
  {
    prop: 'className',
    label: '班级名称',
  },
  {
    prop: 'yearSystem',
    label: '年制',
  },
  {
    prop: 'headmaster',
    label: '班主任',
  },
  {
    prop: 'semester',
    label: '学期',
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