import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { UserProvider } from './context/UserContext'
import { FormProvider } from './context/FormContext'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
