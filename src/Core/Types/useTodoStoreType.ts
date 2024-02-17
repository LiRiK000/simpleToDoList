import { Todo } from "./TaskType";

export type TodoStore = {
    todos: Todo[];
    addTodo: (title: string) => void;
    changeCompleted: (id: number) => void;
    removeAllTodos: () => void;
    removeTodo: (id: number) => void;
};