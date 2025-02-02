import { createSlice } from "@reduxjs/toolkit";

//creating slice
const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state,action) {
            state.push(action.payload)
            
        },

        
    remove(state, action) {
        return state.filter(item => item.imgURL !== action.payload);

    }
    }
})

export const {add,remove} = cartSlice.actions;

export default cartSlice.reducer