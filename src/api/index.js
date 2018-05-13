import axios from 'axios'

// 获取所有日记
// 跨域获取: localhost:3000/api/getMemories
export const getMemories = params => {
  const url = '/api/getMemories'
  // const url = 'https://www.easy-mock.com/mock/5af04dc9d71ec96a76df8b68/example/getlist'

  return axios.get(url, {
    params: params
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

// 删除一篇日记
// localhost:3000/api/delMemory
export const delMemory = params => {
  const url = `/api/delMemory/${params.mid}`

  return axios.delete(url)
}

// 修改日记
// localhost:3000/api/updateMemory
export const updateMemory = data => {
  const url = `/api/updateMemory/${data.mid}`

  return axios.patch(url, data)
}
