import { createSlice } from '@reduxjs/toolkit'



const notificationSlice = createSlice({
  name: 'notifications',
  initialState: null,
  reducers: {
    addAnecdoteNotification(state, action){
      const config = {
        message: action.payload,
        styleNotification: 'alert-success'
      }
      return config
    },
    addVoteNotification(state, action){
      const config = {
        message: action.payload,
        styleNotification: 'alert-light'
      }
      return config
    }
  }
})

export const { addAnecdoteNotification, addVoteNotification } = notificationSlice.actions

export default notificationSlice.reducer