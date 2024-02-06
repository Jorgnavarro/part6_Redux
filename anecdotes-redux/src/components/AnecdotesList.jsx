/* eslint-disable no-unused-vars */
import { voteAnAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'
import { addVoteNotification } from '../reducers/notificationReducer'
const AnecdotesList = () => {
  const dispatch = useDispatch()
  const anecdotesList = useSelector(({ filter, anecdotes }) => {
    let updatedList = []
    if(filter === 'NORMAL'){
      return anecdotes
    }
    return filter === 'MOST_VOTED'
      ? updatedList = [...anecdotes].sort(function(a, b){
        return b.votes - a.votes
      })
      : updatedList = [...anecdotes].sort(function(a, b){
        return a.votes - b.votes
      })
  })
  
  const handleClick = ({id, title}) => {
    dispatch(voteAnAnecdote(id))
    dispatch(addVoteNotification(title))
    setTimeout(()=> {
      dispatch(addVoteNotification(null))
    }, 5000)
  }

  // const orderByVotes = [...anecdotes.anecdotes].sort(function(a, b){
  //    return b.votes - a.votes
  // })

  // console.log(orderByVotes)

  return (
    <ul id='ulAnecdotes' className='containerList mt-5'>
      {anecdotesList.map(anecdote => {
        return <li key={anecdote.id}>
          <div className='containerAnecdote'>
            <h5 className='anecdoteTitle'>{anecdote.title}</h5>
            <p className='anecdoteVotes'>Has: {anecdote.votes} <button onClick={() => handleClick(anecdote)}>vote</button></p>
          </div>
        </li>
      })}
    </ul>
  )
}

export default AnecdotesList