import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'categoriesSlice/getCategories',
    async function(){
        const response = await fetch('https://api.escuelajs.co/api/v1/categories/?limit=10');
        const data = await response.json();
        return data
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        status: null
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {
            // Add user to the state array
            // state.categories.push(action.payload);
            state.status = 'loading!'
          })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getCategories.fulfilled, (state, action) => {
          // Add user to the state array
          state.categories = (action.payload);
          state.status = 'ok!'
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            // Add user to the state array
            state.status = 'error!'
        })
      },
});


export default categoriesSlice.reducer;