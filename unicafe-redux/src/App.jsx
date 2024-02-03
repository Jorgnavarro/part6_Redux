import { StatisticsLine } from './Statistics'
import { Button } from './Button'
import './App.css'
import { store } from './reducers/counterReducer'


function App() {
  let arrCalification = Object.values(store.getState()).find(value => value !== 0)
  console.log(arrCalification)
  const {good, ok, bad} = store.getState()
  
  const handleClick = (e) => {
    console.log("hola")
    store.dispatch({ type: e.target.value})
  }
  console.log(store.getState())
  return (
    <div className="App container">
      <h1>UNICAFE🪄💭</h1>
      <h3>Give feedback</h3>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <Button text="Bad 👎🏽" className="btn btn-danger btn-lg" handleClick={handleClick} value={'BAD'} />
          <Button text="Ok 😑" className="btn btn-warning btn-lg" handleClick={handleClick} value={'OK'} />
          <Button text="Good 👍🏽" className="btn btn-success btn-lg" handleClick={handleClick} value={'GOOD'}/>
          <Button text="Reset stats 🗑️" className="btn btn-light btn-lg" handleClick={handleClick} value={'ZERO'} />
      </div>
      {arrCalification?
      <div className="container mt-3">
            <table className="table table-bordered hidden-element">
                  <StatisticsLine text="Good" value={good} />
                  <StatisticsLine text="Neutral" value={ok} />
                  <StatisticsLine text="Bad" value={bad}/>
            </table>
      </div> 
      :
      <h4 id='initial-message' className='show-element'>No feedback given</h4>
      }
      
      
    </div>
  )
}



export default App
