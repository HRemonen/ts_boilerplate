import React from 'react'
import logo from './assets/toscalogo_color.svg'
import './App.css'
import axios from 'axios'

const basePath = process.env.PUBLIC_URL || ''
const apiClient = axios.create({ baseURL: `${basePath}/api` })

const App = () => {
  const [response, setResponse] = React.useState({
    message: '...',
    timeoutId: 0,
  })

  const handleClick = async () => {
    if (response.timeoutId) {
      clearTimeout(response.timeoutId)
    }
    const { data } = await apiClient.get('/kliks')
    const timeoutId = setTimeout(
      () => setResponse({ message: '...', timeoutId: 0 }),
      3000
    ) as unknown as number
    setResponse({ message: data, timeoutId: timeoutId })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Kliksutin</h1>
        <button
          onClick={handleClick}
          className="App-button"
          data-cy="theButton"
        >
          Click to klik
        </button>
        <p>kliksutin says: {response.message}</p>
      </header>
    </div>
  )
}

export default App
