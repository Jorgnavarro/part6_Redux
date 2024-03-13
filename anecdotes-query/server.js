/*Esta es la solución para controlar la creación desde el servidor
lo que haría falta sería configurar la función que crea la anecdota

const anecdoteMutation = useMutation(createAnecdote, {
    onSuccess: ({ content }) => {
      queryClient.invalidateQueries('anecdotes')
      notifyWith(`anecdote '${content}' created`)
    },
    onError: (error) => {
      notifyWith(error.response.data.error)
    }
  })

se debería entonces agregar onError, que desde acá, desde el server suele estar configurado


*/

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const validator = (request, response, next) => {
  console.log()

  const { content } = request.body

  if (request.method==='POST' && (!content || content.length<5) ) {
    return response.status(400).json({
      error: 'too short anecdote, must have length 5 or more'
    })
  } else {
    next()
  }
}

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(validator)
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running')
})