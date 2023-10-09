import { ToDoContext } from "./ToDoContext";
import { TodoState } from "../interfaces/interfaces";
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
    return (
        <ToDoContext.Provider value={ {} }>
            { children }
        </ToDoContext.Provider>
    );
};
