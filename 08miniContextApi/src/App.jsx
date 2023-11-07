import { useState, React } from 'react'
import { UserContext } from './context/UserContext'
import UserComponent from './components/UserComponent'

function App() {
  const [text, setText] = useState("Welcome")

  return (
    <>
      <UserContext.Provider value={{text, setText}}>
        <UserComponent/>
      </UserContext.Provider>
    </>
  )
}

export default App
