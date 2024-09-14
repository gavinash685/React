import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state, action) =>{
            state.status= true,
            state.userData = action.payload.userData //As this state and payload have same parameter userData we can write it as below as well
            // state.userData = action.payload
        },
        logout:(state)=>{
            state.status = false
            state.userData = null
        }
    }
})
export const {login, logout} = authSlice.actions 
export default authSlice.reducer;