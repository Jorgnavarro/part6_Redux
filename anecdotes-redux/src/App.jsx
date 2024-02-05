import './App.css'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteForm from './components/AnecdoteForm'
import VisibilityFilter from './components/VisibilityFilter'
import Notification from './components/Notification'
function App() {

  return (
    <div className="App container">
      <h2>Anecdotes</h2>
      <Notification/>
      <AnecdoteForm/>
      <VisibilityFilter/>
      <AnecdotesList/>
    </div>
  )
}

export default App
