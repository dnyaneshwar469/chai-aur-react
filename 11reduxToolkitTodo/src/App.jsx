import { useState } from 'react';
import AddTodo from './component/AddTodo';
import Todo from './component/Todo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center'>Learn About Redux Toolkit</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
