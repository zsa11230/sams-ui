import request from '@/router/axios'

export function getTableData (params) {
  return request({
    url: '/admin/major/page',
    method: 'get',
    params: params,
  })
}


export function addCourse (obj) {
  return request({
    url: '/admin/major/create',
    method: 'post',
    data: obj
  })
}

export function getCourse (id) {
  return request({
    url: `/admin/major/${id}`,
    method: 'get'
  })
}

export function delCourse (id) {
  return request({
    url: '/admin/major/delete/' + id,
    method: 'post'
  })
}

export function putCourse (obj) {
  return request({
    url: '/admin/major/update',
    method: 'post',
    data: obj
  })
}
