import request from '@/router/axios'

export function getTableData (params) {
  return request({
    url: '/admin/course/page',
    method: 'get',
    params: params,
  })
}

export function getSelectPage (params) {
  return request({
    url: '/admin/course/personal/page',
    method: 'get',
    params: params,
  })
}

export function addCourse (obj) {
  return request({
    url: '/admin/course/create',
    method: 'post',
    data: obj
  })
}

export function getCourse (id) {
  return request({
    url: `/admin/course/${id}`,
    method: 'get'
  })
}

export function delCourse (id) {
  return request({
    url: '/admin/course/delete/' + id,
    method: 'post'
  })
}

export function putCourse (obj) {
  return request({
    url: '/admin/course/update',
    method: 'post',
    data: obj
  })
}
