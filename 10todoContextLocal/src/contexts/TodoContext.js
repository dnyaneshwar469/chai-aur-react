import React, {createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const TodoProvoider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext) 
}