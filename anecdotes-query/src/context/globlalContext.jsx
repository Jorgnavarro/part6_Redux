/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

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

export const useNotificationValue = () => {
    const [notification] = useContext(NotificationContext)
    return notification
}

export const useNotify = () => {
    const valueAndDispatch = useContext(NotificationContext)
    const dispatch = valueAndDispatch[1]

    return (payload) => {
        dispatch({type: 'INFO', payload })
        setTimeout( () => {
          dispatch({type: 'CLEAR'})
        }, 5000)
    }

}



export default NotificationContext