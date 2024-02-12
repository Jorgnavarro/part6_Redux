/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"

const NotificationContext = createContext()


const notificationReducer = ( state, action ) => {
    
    switch(action.type){
        case 'INFO':
         return action.payload
        case 'CLEAR':
         return null
        default: 
         return state
    }
}

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, null)

    return(
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}


export default NotificationContext