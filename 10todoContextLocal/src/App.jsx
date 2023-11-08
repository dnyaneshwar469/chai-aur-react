import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvoider } from './contexts'
import { TodoForm, TodoItem } from './components';

function App() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        // setTodos((prev) => ([...prev, {id: Math.random().toString(36).substring(2), ...todo}]))

        setTodos((prev) => {
            return [...prev, {id: Date.now(), ...todo}]
        })
    }

    const updatedTodo = (id, todo) => {
        // setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
        console.log(todo)
        setTodos((prev) => {
            return prev.map((prevTodo) => {
                if(prevTodo.id === id) {
                    return todo;
                }else {
                    return prevTodo
                }
            })
        })
    }

    const deleteTodo = (id) => {
        // setTodos((prev) => prev.filter((todo) => todo.id !== id))

        setTodos((prev) => {
            return prev.filter((todo) => {
                return todo.id !== id;
            })
        })
    }

    const toggleComplete = (id) => {
        console.log(id)
        // setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo ))

        setTodos((prev) => {
            return prev.map((prevTodo) => {
                if(prevTodo.id === id) {
                    console.log(prevTodo.id)
                    return {...prevTodo, completed: !prevTodo.completed}
                }else {
                    return prevTodo
                }
            })
        })
    } 

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));

        if(todos && todos.length > 0){
            setTodos(todos)
        }
    }, [])
    
    useEffect( () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoProvoider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
           <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                            todos.map((todo) => (
                                <div className='w-full' key={todo.id}>
                                    <TodoItem todo={todo}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </TodoProvoider>
    )
}

export default App
