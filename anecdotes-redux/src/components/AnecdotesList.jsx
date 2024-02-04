import { voteAnAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'

const AnecdotesList = () => {
    const dispatch = useDispatch()
    const anecdotesList = useSelector(({filter, anecdotes}) => {
      let updatedList = []
      if(filter === 'NORMAL'){
        return anecdotes
      }else if(filter === 'MOST_VOTED'){
        return updatedList = [...anecdotes].sort(function(a, b){
          return b.votes - a.votes
        })
      }else{
        return updatedList = [...anecdotes].sort(function(a, b){
          return a.votes - b.votes
        })
      }
      
    })
    console.log(anecdotesList)
    const handleClick = (id) => {
      console.log(id)
      dispatch(voteAnAnecdote(id))
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
                  <p className='anecdoteVotes'>Has: {anecdote.votes} <button onClick={()=>handleClick(anecdote.id)}>vote</button></p>
                </div>
              </li>
            })}
        </ul>
    )
}

export default AnecdotesList