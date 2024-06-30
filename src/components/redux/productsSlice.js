import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getProducts = createAsyncThunk(
//     'categoriesSlice/getProducts',
//     async function(){
//         const response = await fetch('https://api.escuelajs.co/api/v1/products/?limit=20');
//         const data = await response.json();
//         return data
//     }
// )

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
            {
                "id": 1,
                "title": "Handmade Fresh Table 1",
                "price": 687,
                "description": "Andy shoes are designed to keeping in...",
                "category": {
                  "id": 5,
                  "name": "Others",
                  "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
                },
                "images": [
                  "https://i.imgur.com/cHddUCu.jpeg",
                  "https://placeimg.com/640/480/any?r=0.9300320592588625",
                  "https://placeimg.com/640/480/any?r=0.8807778235430017"
                ]
              },
              {
                "id": 2,
                "title": "Handmade Fresh Table 2",
                "price": 687,
                "description": "Andy shoes are designed to keeping in...",
                "category": {
                  "id": 5,
                  "name": "Others",
                  "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
                },
                "images": [
                    "https://i.imgur.com/cHddUCu.jpeg",
                  "https://placeimg.com/640/480/any?r=0.9300320592588625",
                  "https://placeimg.com/640/480/any?r=0.8807778235430017"
                ]
              },
              {
                "id": 3,
                "title": "Handmade Fresh Table 3",
                "price": 687,
                "description": "Andy shoes are designed to keeping in...",
                "category": {
                  "id": 5,
                  "name": "Others",
                  "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
                },
                "images": [
                    "https://i.imgur.com/cHddUCu.jpeg",
                  "https://placeimg.com/640/480/any?r=0.9300320592588625",
                  "https://placeimg.com/640/480/any?r=0.8807778235430017"
                ]
              },
              {
                "id": 4,
                "title": "Handmade Fresh Table 4",
                "price": 687,
                "description": "Andy shoes are designed to keeping in...",
                "category": {
                  "id": 5,
                  "name": "Others",
                  "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
                },
                "images": [
                    "https://i.imgur.com/cHddUCu.jpeg",
                  "https://placeimg.com/640/480/any?r=0.9300320592588625",
                  "https://placeimg.com/640/480/any?r=0.8807778235430017"
                ]
              },
              {
                "id": 5,
                "title": "Handmade Fresh Table 5",
                "price": 687,
                "description": "Andy shoes are designed to keeping in...",
                "category": {
                  "id": 5,
                  "name": "Others",
                  "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
                },
                "images": [
                    "https://i.imgur.com/cHddUCu.jpeg",
                  "https://placeimg.com/640/480/any?r=0.9300320592588625",
                  "https://placeimg.com/640/480/any?r=0.8807778235430017"
                ]
              },

        ],
        status: null
    },
    reducers: {
        
    },
    // extraReducers: (builder) => {
    //     builder.addCase(getProducts.pending, (state, action) => {
    //         // Add user to the state array
    //         // state.categories.push(action.payload);
    //         state.status = 'loading!'
    //       })
    //     // Add reducers for additional action types here, and handle loading state as needed
    //     builder.addCase(getProducts.fulfilled, (state, action) => {
    //       // Add user to the state array
    //       state.products = (action.payload);
    //       state.status = 'ok!'
    //     })
    //     builder.addCase(getProducts.rejected, (state, action) => {
    //         // Add user to the state array
    //         state.status = 'error!'
    //     })
    //   },
});


export default productsSlice.reducer;


