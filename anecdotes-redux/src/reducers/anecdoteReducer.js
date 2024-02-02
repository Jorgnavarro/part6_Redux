import { createStore } from 'redux'

export const anecdoteReducer = ( state = [], action ) =>{

    switch(action.type){
      case 'NEW_ANECDOTE':
        console.log(action.data)
        return [...state, action.data]
      case 'ADD_VOTE':
        const id = action.data.id
        const anecdoteToUpdate = state.find( a => a.id === id)
        const updatedAnecdote = {
            ...anecdoteToUpdate,
            votes: anecdoteToUpdate.votes + 1,
        }
        return state.map(anecdote => 
            anecdote.id !== id ? anecdote : updatedAnecdote
        )
      default:
        return state
    }
} 

export const store = createStore(anecdoteReducer)

export const createAnecdote = (title) => ({
    type: 'NEW_ANECDOTE',
    data: {
        title,
        votes: 0,
        id: store.getState().length + 1
    }
})

export const voteAnAnecdote = (id) => ({
    type: 'ADD_VOTE',
    data: { id }
})


store.dispatch({
    type: 'NEW_ANECDOTE',
    data:{
        title: 'If it hurts, do it more often',
        votes: 0,
        id: 1
    }
})

store.dispatch({
    type:'NEW_ANECDOTE',
    data:{
        title: 'Adding manpower to a late software project makes it later!',
        votes: 0,
        id: 2
    }
})
store.dispatch({
    type:'NEW_ANECDOTE',
    data:{
        title: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        votes: 0,
        id: 3
    }
})
store.dispatch({
    type:'NEW_ANECDOTE',
    data:{
        title: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        votes: 0,
        id: 4
    }
})
store.dispatch({
    type:'NEW_ANECDOTE',
    data:{
        title: 'Premature optimization is the root of all evil.',
        votes: 0,
        id: 5
    }

})
store.dispatch({
    type:'NEW_ANECDOTE',
    data:{
        title: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        votes: 0,
        id: 6
    }
})

