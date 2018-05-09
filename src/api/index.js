import axios from 'axios'

// 获取后台数据
// 此处暂时使用mock数据
export const getMemories = params => {
  const url = '/api/getMemories'

  return axios.get(url, {
    params: params
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
