import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'


export const getAnecdotes = () => {
    return axios.get(baseUrl).then(res => res.data)
}

export const createAnecdote = (anecdote) => {
    if(anecdote.content.length>=5){
        return axios.post(baseUrl, anecdote).then(res => res.data)
    }
    return axios.AxiosError.ERR_BAD_REQUEST
}

export const updateAnAnecdote = (updatedAnecdote) => {
    return axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote).then(res => res.data)
}
