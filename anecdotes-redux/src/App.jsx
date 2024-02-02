import './App.css'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteForm from './components/AnecdoteForm'

function App() {

  return (
    <div className="App container">
        <h2>Anecdotes</h2>
        <AnecdoteForm/>
        <AnecdotesList/>
    </div>
  );
}

export default App
