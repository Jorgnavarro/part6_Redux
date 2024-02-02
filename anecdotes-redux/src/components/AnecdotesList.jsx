import { voteAnAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state )
    const handleClick = (id) => {
      console.log(id)
      dispatch(voteAnAnecdote(id))
    }
    
    const orderByVotes = [...anecdotes].sort(function(a, b){
       return b.votes - a.votes
    })

    console.log(orderByVotes)

    return (
        <ul id='ulAnecdotes' className='containerList mt-5'>
            {orderByVotes.map(anecdote => {
              return <li key={anecdote.id}>
                <div className='containerAnecdote'>
                  <h5 className='anecdoteTitle'>{anecdote.title}</h5>
                  <p className='anecdoteVotes'>Has: {anecdote.votes} <button onClick={()=>handleClick(anecdote.id)}>vote</button></p>
                </div>
              </li>
            })}
        </ul>
    )
}

export default Anecdotes