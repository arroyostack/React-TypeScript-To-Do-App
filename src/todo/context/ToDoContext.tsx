import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
    todoState: TodoState;
};

export const ToDoContext = createContext<TodoContextProps>( {} as TodoContextProps );