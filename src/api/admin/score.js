import request from '@/router/axios'

export function getTableData (params) {
  return request({
    url: '/admin/score/page',
    method: 'get',
    params: params,
  })
}
export function getElectiveData (params) {
  return request({
    url: '/admin/score/elective/page',
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

export function getElectiveScoreById (params) {
  return request({
    url: '/admin/score/elective/student',
    method: 'get',
    params: params
  })
}

export function postStudentScore (data) {
  return request({
    url: '/admin/score/update',
    method: 'post',
    data: data
  })
}
