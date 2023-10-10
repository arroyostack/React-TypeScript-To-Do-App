import { Todo } from "../interfaces/interfaces";

interface props {
    todo: Todo;
}


export const TodoItem = ( { todo }: props ) => {
    const handleDoubleClick = () => {
        console.log( "🚀 ~ file: TodoItem.tsx:11 ~ handleDoubleClick ~ todo.description:", todo.description );
    };


    return (
        <li onDoubleClick={ handleDoubleClick }>
            { todo.description }
        </li>
    );
};
