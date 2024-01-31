import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './reducers/counterReducer'


const mainElement = ReactDOM.createRoot(document.getElementById('root'))

const main = () => {
  mainElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
}

main()

store.subscribe(main)

