import { ToDoContext } from "./ToDoContext";
import { TodoState } from "../interfaces/interfaces";
import { useReducer } from "react";
import { todoReducers } from "./todoReducers";


const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            description: 'Collect carrots for the rabbit',
            completed: false
        },
        {
            id: '1',
            description: 'Collect carrots for the rabbit',
            completed: false
        }
    ],
    completed: 0,
    pending: 0
};

interface toDoProviderProps {
    // here we are specifying that a single  'JSX.Element' or multiple can be received. 
    children: JSX.Element | JSX.Element[];
}

export const ToDoProvider = ( { children }: toDoProviderProps ) => {
    const [ todoState, dispatch ] = useReducer( todoReducers, INITIAL_STATE );

    return (
        <ToDoContext.Provider value={ {
            todoState
        } }>
            { children }
        </ToDoContext.Provider>
    );
};
