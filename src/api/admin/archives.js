import request from '@/router/axios'

export function getTableData (params) {
  return request({
    url: '/admin/archives/page',
    method: 'get',
    params: params,
  })
}

export function addArchives (obj) {
  return request({
    url: '/admin/archives/create',
    method: 'post',
    data: obj
  })
}

export function getArchives (id) {
  return request({
    url: `/admin/archives/get/${id}`,
    method: 'get'
  })
}
export function getStudent (id) {
  return request({
    url: `/admin/archives/getStudent/${id}`,
    method: 'get'
  })
}

export function delArchives (id) {
  return request({
    url: '/admin/archives/delete/' + id,
    method: 'post'
  })
}

export function putArchives (obj) {
  return request({
    url: '/admin/archives/update',
    method: 'post',
    data: obj
  })
}
