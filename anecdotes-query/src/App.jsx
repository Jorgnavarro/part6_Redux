
import './App.css'
import AnecdotesList from './components/AnecdotesList'
import AddNewAnecdoteForm from './components/AddNewAnecdoteForm'
import { NotificationContextProvider } from './context/globlalContext'
import Notification from './components/Notification'


function App() {
  

  return (
    <NotificationContextProvider>
     <div>
     <h1>Anecdotes React Query</h1>
      <Notification/>
      <AddNewAnecdoteForm/>
      <AnecdotesList/>
     </div>
    </NotificationContextProvider>
  )
}

export default App
