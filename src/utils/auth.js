// import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
  // return Cookies.set(TokenKey, token)
  // return Cookies.set(TokenKey, token, { expires: 0.01 }) // js-cookie1为一天(0.01即为14.4分钟)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
  // return Cookies.remove(TokenKey)
}
