import { useContext } from "react"
import NotificationContext from "../context/globlalContext"
const Notification = () => {

    // eslint-disable-next-line no-unused-vars
    const [notification, dispatch] = useContext(NotificationContext)

    if(!notification){
        return null
    }

    const styleNotification = notification.includes('was added')
      ? 'alert-success'
      : notification.includes('You voted') ? 'alert-light' : 'alert-danger'

    return (
    <>
      {notification && <div className={`alert ${styleNotification} text-center`} role="alert" id="container-error">
        <strong>  {notification} </strong>
      </div>}
    </>
    )
}

export default Notification