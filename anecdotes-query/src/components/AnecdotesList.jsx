import { useQuery, useQueryClient, useMutation } from "react-query"
import { getAnecdotes, updateAnAnecdote } from "../requests"
import { useContext } from "react"
import NotificationContext from "../context/globlalContext"


// eslint-disable-next-line react/prop-types
const AnecdotesList = () => {

    const queryClient = useQueryClient()

    // eslint-disable-next-line no-unused-vars
    const [notification, dispatch] = useContext(NotificationContext)

    const voteAnAnecdoteMutation = useMutation(updateAnAnecdote, {
        onSuccess: () => {
          queryClient.invalidateQueries('anecdotes')
        }
      })

    const result = useQuery('anecdotes', getAnecdotes, {
        refetchOnWindowFocus: false
    })

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


      const voteAnAnecdote = (anecdote) => {
        console.log(anecdote)
        voteAnAnecdoteMutation.mutate({
          ...anecdote,
          votes: anecdote.votes + 1
        })
        dispatch({type: 'INFO', payload: `You voted 👌🏽 ${anecdote.content}`})
        
        setTimeout(() => dispatch({type: 'CLEAR'}), 5000)
      }
    
    const anecdotes = result.data



    return(
        <ul id='ulAnecdotes' className='containerList mt-5'>
         {anecdotes.map(anecdote => {
           return <li key={anecdote.id}>
          <div className='containerAnecdote'>
            <h5 className='anecdoteTitle'>{anecdote.content}</h5>
            <p className='anecdoteVotes'>Has: {anecdote.votes} <button onClick={() => voteAnAnecdote(anecdote)}>vote</button></p>
          </div>
        </li>
      })}
    </ul>
    )
}



export default AnecdotesList