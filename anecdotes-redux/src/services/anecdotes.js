import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNewAnecdote = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const updateVoteAnecdote = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

export default { getAll, createNewAnecdote, updateVoteAnecdote }