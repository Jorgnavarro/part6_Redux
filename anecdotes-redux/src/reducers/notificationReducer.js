import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
  name: 'notifications',
  initialState: null,
  reducers: {
    sendNotification (state, action){
      return action.payload
    },
    clearNotification (state, action){
      return null
    }
  }
})

export const {sendNotification, clearNotification} = notificationSlice.actions

export const setNotification = (message, time) =>{
  return async dispatch =>{
    dispatch(sendNotification(message))
    const seconds = time * 1000
    setTimeout(()=> {
      dispatch(clearNotification())
    }, seconds)
  }
}

export default notificationSlice.reducer