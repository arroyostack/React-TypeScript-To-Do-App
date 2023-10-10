import { Todo, TodoState } from '../interfaces/interfaces';

type ToDoActions =
    | { type: 'addTodo', payload: Todo; }
    | { type: 'toggleTodo', payload: { id: string; }; };

export const todoReducers = ( state: TodoState, action: ToDoActions ) => {
    switch ( action.type ) {
        case 'addTodo':
            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            };

        default:
            return state;

    }



};
