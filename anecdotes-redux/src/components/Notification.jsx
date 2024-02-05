import { useSelector } from 'react-redux'


const Notification = () => {
  const notificationMessage = useSelector(({ notification }) => {
    if(notification !== null){
      return notification
    }
  })

  if(!notificationMessage){
    return null
  }

  return (
    <div className={'alert alert-success text-center'} role="alert" id="container-error">
      <strong>  {notificationMessage} </strong>
    </div>
  )
}

export default Notification