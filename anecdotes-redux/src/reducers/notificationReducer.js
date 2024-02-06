import { createSlice } from '@reduxjs/toolkit'



const notificationSlice = createSlice({
  name: 'notifications',
  initialState: null,
  reducers: {
    addNoteNotification(state, action){
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

export const { addNoteNotification, addVoteNotification } = notificationSlice.actions

export default notificationSlice.reducer