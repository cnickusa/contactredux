import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        oneTodo: null
    },
    reducers: {
        addTodo: (state, action) => {
            console.log(state, action.payload);
            state.todos.push(action.payload);
        },
        changeTodoStatus: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            todo.status = !todo.status;
        },
        getOneTodo: (state, action) => {
            const oneTodo = state.todos.find(todo => todo.id == action.payload);
            state.oneTodo = oneTodo;
        },
        saveChanges: (state, action) => {
            console.log(action.payload);
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload.id) return action.payload;
                return todo;
            });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, changeTodoStatus, getOneTodo, saveChanges, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;