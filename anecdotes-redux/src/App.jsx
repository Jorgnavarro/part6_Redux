import './App.css'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteForm from './components/AnecdoteForm'
import VisibilityFilter from './components/VisibilityFilter'
import Notification from './components/Notification'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(initializeAnecdotes())
  },[dispatch])

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
