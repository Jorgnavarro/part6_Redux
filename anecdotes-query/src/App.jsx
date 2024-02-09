
import './App.css'
import { useQuery } from 'react-query'
import { getAnecdotes }  from './requests'

function App() {

  const result = useQuery('anecdotes', getAnecdotes, {
    refetchOnWindowFocus: false
  })

  if(result.isLoading){
    return <div>
      <span>Loading</span>
      <div className="spinner-grow text-light" role="status">
      </div> 
    </div>
  }

  const anecdotes = result.data
  console.log(anecdotes)

  return (
    <div>
      <h1>Anecdotes React Query</h1>
      <form id="createAnecdote" className="mt-5">
      <div id="containerInBtn" className="row align-items-center">
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            placeholder="Write a new note here..."
            id="addNote"
            name="anecdote"
          />
        </div>
        <div className="col-2">
          <button type="submit">Save</button>
        </div>
      </div>
    </form>

    <ul id='ulAnecdotes' className='containerList mt-5'>
      {anecdotes.map(anecdote => {
        return <li key={anecdote.id}>
          <div className='containerAnecdote'>
            <h5 className='anecdoteTitle'>{anecdote.content}</h5>
            <p className='anecdoteVotes'>Has: {anecdote.votes} <button onClick={() => handleClick(anecdote)}>vote</button></p>
          </div>
        </li>
      })}
    </ul>
      
    </div>
  )
}

export default App
