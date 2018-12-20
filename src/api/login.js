import request from '@/utils/request'
// import qs from "qs"
export function login(account, password) {
  // const qw = { account:account, password:password}
  // const data = qs.stringify()
  return request({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
