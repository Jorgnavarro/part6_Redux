import './App.css'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteForm from './components/AnecdoteForm'
import VisibilityFilter from './components/VisibilityFilter';

function App() {

  return (
    <div className="App container">
        <h2>Anecdotes</h2>
        <AnecdoteForm/>
        <VisibilityFilter/>
        <AnecdotesList/>
    </div>
  );
}

export default App
