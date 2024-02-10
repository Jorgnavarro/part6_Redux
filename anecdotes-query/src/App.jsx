
import './App.css'
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { getAnecdotes, createAnecdote, updateAnAnecdote }  from './requests'

function App() {
  const result = useQuery('anecdotes', getAnecdotes, {
    refetchOnWindowFocus: false
  })

  const anecdotes = result.data

  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
        if(typeof newAnecdote === 'object'){
          const anecdotes = queryClient.getQueryData('anecdotes')
          queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
        }
    }
  })

  const addAnecdote = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    newAnecdoteMutation.mutate({
      content,
      votes: 0
    })
  } 

  const voteAnAnecdoteMutation = useMutation(updateAnAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    }
  })

  const handleClick = (anecdote) => {
    console.log(anecdote)
    voteAnAnecdoteMutation.mutate({
      ...anecdote,
      votes: anecdote.votes + 1
    })
  }


  console.log(result)

  if(result.isLoading){
    return <div>
      <span>Loading</span>
      <div className="spinner-grow text-light" role="status">
      </div> 
    </div>
  }else if(result.isError){
    return <div>
      <h1>Anecdote service not available due to problems in server</h1>
    </div>
  }

  
  console.log(anecdotes)

  return (
    <div>
      <h1>Anecdotes React Query</h1>
      <form onSubmit={addAnecdote} id="createAnecdote" className="mt-5">
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
