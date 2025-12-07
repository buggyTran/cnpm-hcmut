import axios from './axios.config'

export const userService = {
  getMe: async () => {
    const response = await axios.get('/users/get-me')
    return response
  },

  postProgram: async (data) => {
    const response = await axios.post('/users/post-reqprogram', data)
    return response
  },

  updateUserInfo: async (data) => {
    const response = await axios.patch('/users/update-user-infor', data)
    return response
  }
}
