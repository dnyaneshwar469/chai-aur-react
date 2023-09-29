import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
    const [count, setCount] = useState(0)

    let myObj = {
        name : "Hitesh",
        age: 23
    }

    return (
        <>
            <h1 className='bg-green-400 p-8 text-white font-bold rounded-xl mb-6'>Tailwind Test</h1>
            <Card username='ChaiaurCode' someObj = {myObj} btnText='Visit Us'/>
            <Card username='My Name'/>
        </>
    )
}

export default App
