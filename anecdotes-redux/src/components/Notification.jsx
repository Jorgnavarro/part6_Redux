import { useSelector } from 'react-redux'


const Notification = () => {

  const message = useSelector(({ notification }) => {
    return notification
  })

  //Esto es necesario para que cuando se haga la desestructuración el componente no arroje problemas al estar en un estado inicial null
  if(!message){
    return null
  }

  //const { message, styleNotification } = notificationConfig

  const styleNotification = message.includes('was added')
    ? 'alert-success'
    : 'alert-light'

  return (
    <>
      {message && <div className={`alert ${styleNotification} text-center`} role="alert" id="container-error">
        <strong>  {message} </strong>
      </div>}
    </>
  )
}

export default Notification