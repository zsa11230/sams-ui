// org config options

const columnsMap = [
  {
    prop: 'title',
    label: '所属学院',
  },
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
  {
    prop: 'profession',
    label: '专业',
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