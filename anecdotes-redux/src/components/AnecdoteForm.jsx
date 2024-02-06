import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { addAnecdoteNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'
const AnecdoteForm = () => {

  const dispatch = useDispatch()
  const addAnecdote = async (e) => {
    e.preventDefault()
    const title = e.target.anecdote.value
    e.target.anecdote.value = ''

    const newAnecdote = await anecdoteService.createNewAnecdote({
      title,
      votes: 0
    })
    dispatch(createAnecdote(newAnecdote))
    dispatch(addAnecdoteNotification(title))
    setTimeout(() => {
      dispatch(addAnecdoteNotification(null))
    }, 5000)
  }

  return (
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
  )
}

export default AnecdoteForm