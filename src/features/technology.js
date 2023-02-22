import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {name: "", description: "", url: "", allSource: []};

const userSlice =createSlice({
    name: "technology",
    initialState: { value: initialStateValue },
    reducers: {
        submit: (state, action) =>{
            state.value = action.payload;
        },

        
    },
});

export const { submit } = userSlice.actions;

export default userSlice.reducer;