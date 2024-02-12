import { useQueryClient, useMutation } from 'react-query'
import { createAnecdote }  from '../requests'
import { useContext } from "react"
import NotificationContext from "../context/globlalContext"

const AddNewAnecdoteForm = () => {

  const queryClient = useQueryClient()

  // eslint-disable-next-line no-unused-vars
  const [notification, dispatch] = useContext(NotificationContext)

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
        if(typeof newAnecdote === 'object'){
          const anecdotes = queryClient.getQueryData('anecdotes')
          queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
        }else{
            dispatch({ type: 'INFO', payload: 'Too short anecdote, have length 5 or more ❌'})
            setTimeout(()=> dispatch({type: 'CLEAR'}), 5000)
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
    dispatch({ type: 'INFO', payload: `Your anecdote: "${content}" was added ✅`})
    setTimeout(()=> dispatch({type:'CLEAR'}), 5000)
  } 

  return (
    <>
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
    </>
  )
}

export default AddNewAnecdoteForm

