import { createSlice } from '@reduxjs/toolkit'



const notificationSlice = createSlice({
  name: 'notifications',
  initialState: null,
  reducers: {
    addNoteNotification(state, action){
      return action.payload
    },
    addVoteNotification(state, action){
      return action.payload
    }
  }
})

export const { addNoteNotification } = notificationSlice.actions

export default notificationSlice.reducer