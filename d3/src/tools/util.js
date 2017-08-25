/**
 * Created by dw on 2017/8/3.
 */
import Mock from 'mockjs'
export function gItem(key) {
  return localStorage.getItem(key)
}
export function mock(template) {
  return Mock.mock(template)
}
export function getState() {
  return this.$store.state.login
}

