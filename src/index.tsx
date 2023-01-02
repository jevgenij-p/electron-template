import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './services/redux/store'
import App from './layouts/App'
import './assets/css/index.css'
import './assets/sass/custom.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
