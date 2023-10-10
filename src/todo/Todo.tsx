import { TodoList } from "./components/TodoList";
import { ToDoProvider } from "./context/ToDoProvider";

// We import the context provider here since this is the root app and all children components will need the data.
export const Todo = () => {
    return (
        <ToDoProvider>

            <h1>Todo: </h1>

            <TodoList />

        </ToDoProvider>
    );
};
