import { useSelector} from 'react-redux'


const Notification = () => {

  const notificationConfig = useSelector(({ notification }) => {
    return notification
  })

  //Esto es necesario para que cuando se haga la desestructuración el componente no arroje problemas al estar en un estado inicial null
  if(!notificationConfig){
    return null
  }
  
  
  const { message, styleNotification } = notificationConfig
  
  const template = styleNotification === 'alert-success'
    ? `The anecdote: "${message}" was added ✅`
    : `You voted 👌🏽 "${message}"`
  
  return (
    <>
    {message && <div className={`alert ${styleNotification} text-center`} role="alert" id="container-error">
      <strong>  {template} </strong>
    </div>}
    </>
  )
}

export default Notification