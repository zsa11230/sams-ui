import request from '@/router/axios'

export function getTableData (params) {
  return request({
    url: '/admin/score/page',
    method: 'get',
    params: params,
  })
}

export function addScore (obj) {
  return request({
    url: '/admin/score/create',
    method: 'post',
    data: obj
  })
}

export function getScore (id) {
  return request({
    url: `/admin/score/get/${id}`,
    method: 'get'
  })
}

export function delScore (id) {
  return request({
    url: '/admin/score/delete/' + id,
    method: 'post'
  })
}

export function putScore (obj) {
  return request({
    url: '/admin/score/update',
    method: 'post',
    data: obj
  })
}
