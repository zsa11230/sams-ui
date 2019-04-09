import request from '@/router/axios'

export function getTableData (params) {
  return request({
    url: '/admin/classinfo/page',
    method: 'get',
    params: params,
  })
}

export function getClassPage (params) {
  return request({
    url: '/admin/classinfo/myClass/page',
    method: 'get',
    params: params,
  })
}

export function addClass (obj) {
  return request({
    url: '/admin/classinfo/create',
    method: 'post',
    data: obj
  })
}

export function addStudent (obj) {
  return request({
    url: '/admin/classrelation/create',
    method: 'post',
    data: obj
  })
}

export function getClass (id) {
  return request({
    url: `/admin/classinfo/${id}`,
    method: 'get'
  })
}

export function getClassList () {
  return request({
    url: `/admin/classinfo/list`,
    method: 'get'
  })
}

export function delClass (id) {
  return request({
    url: '/admin/classinfo/delete/' + id,
    method: 'post'
  })
}

export function putClass (obj) {
  return request({
    url: '/admin/classinfo/update',
    method: 'post',
    data: obj
  })
}
