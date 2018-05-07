import axios from 'axios'

// 获取后台数据
// 此处暂时使用mock数据
export const getMemories = params => {
  const url = 'https://www.easy-mock.com/mock/5af04dc9d71ec96a76df8b68/example/getlist'

  return axios.get(url, {
    params: params
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
