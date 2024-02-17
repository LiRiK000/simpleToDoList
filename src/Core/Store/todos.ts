import { create } from 'zustand';
import { TodoStore } from '../Types/useTodoStoreType';
import type { } from '@redux-devtools/extension'
import { devtools, persist } from 'zustand/middleware';

export const useTodoStore = create<TodoStore>()(
    devtools(
        persist(
            (set) => ({
                todos: [],
                addTodo: (title) => {
                    set((state) => ({
                        todos: [
                            ...state.todos,
                            {
                                id: state.todos.length + 1,
                                title,
                                completed: false,
                            },
                        ],
                    }));
                },
                changeCompleted: (id) => {
                    set((state) => ({
                        todos: state.todos.map((todo) => {
                            if (todo.id === id) {
                                return {
                                    ...todo,
                                    completed: !todo.completed,
                                };
                            }
                            return todo;
                        }),
                    }));
                },
                removeAllTodos: () => { set({ todos: [] }); },
                removeTodo: (id) => {
                    set((state) => ({
                        todos: state.todos.filter((todo) => todo.id !== id),
                    }));
                },
            }),
            {
                name: 'ToDoStore',
            },
        ),
    ),
);