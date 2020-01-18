import request from '@/utils/request'
const querystring = require('querystring')

// 新的请求函数， 获取服务器列表请求
export function apiListMachine() {
  return new Promise((resolve, reject) => {
    request({
      url: 'listmachine',
      method: 'get'
    }).then((res) => {
      resolve(res)
    }).catch((e) => {
      reject(e)
    })
  })
}

// 添加服务器
export function apiAddmachine(machine) {
  return new Promise((resolve, reject) => {
    request({
      url: 'addmachine',
      method: 'post',
      data: querystring.stringify({
        server_ip: machine.server_ip,
        server_status: machine.server_status,
        is_master: machine.is_master
      })
    }).then((res) => {
      resolve(res)
    }).catch((e) => {
      reject(e)
    })
  })
}

// 删除服务器
export function apiDelMachine(id) {
  return new Promise((resolve, reject) => {
    request({
      url: 'delmachine',
      method: 'get',
      params: {
        id
      }
    }).then((res) => {
      resolve(res)
    }).catch((e) => {
      reject(e)
    })
  })
}

// {
//   id: machine.id,
//   server_ip: machine.server_ip,
//   server_status: machine.server_status,
//   is_master: machine.is_master,
//   new_id: machine.new_id,
//   new_server_ip: machine.new_server_ip,
//   new_server_status: machine.new_server_status,
//   new_is_master: machine.new_is_master
// }
// 编辑服务器
export function apiEditMachine(machine) {
  return new Promise((resolve, reject) => {
    request({
      url: 'editmachine',
      method: 'post',
      data: querystring.stringify(machine)
    }).then((res) => {
      resolve(res)
    }).catch((e) => {
      reject(e)
    })
  })
}
