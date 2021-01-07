import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { UserProvider } from './context/UserContext'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
