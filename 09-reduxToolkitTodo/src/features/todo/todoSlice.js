import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
    ]
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload //if the key of the object is same as assigning object you can write only once eg text: action.payload.text,
            }
            state.todos.push(todo);
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;