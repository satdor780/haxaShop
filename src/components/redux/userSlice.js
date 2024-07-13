import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
    'userSlice/signUp',
    async function (payload) {
        try{
            const res = await axios.post('https://api.escuelajs.co/api/v1/users/', payload)
            return res.data
        }catch{
            console.log(err)
        }
        
    }
)

export const signIn = createAsyncThunk(
    'userSlice/signIn',
    async function (payload) {
        try{
            const res = await axios.post('https://api.escuelajs.co/api/v1/auth/login', payload)
            const login = await axios('https://api.escuelajs.co/api/v1/auth/profile', {
                headers: {
                    Authorization: `Bearer ${res.access_token}`
                }
            })
            return login.data
        }catch{
            console.log(err)
        }
        
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        userState: false,
        showForm: false,
        formType: 'signUp',
        card: [],
    },
    reducers: {
        addToCard: (state, {payload}) => {
            let newCard = [...state.card];
            
            const existingCard = newCard.find(card => card.id === payload.product.id);

            if (existingCard) {
                console.log('eto ', existingCard.quantity)
                existingCard.quantity += payload.orders;
            } else {
                newCard.push({ ...payload.product, quantity: payload.orders });
            }

            state.card = newCard;
        },
        removeCart: (state, {payload}) => {
            state.card = state.card.filter((item) => item.id !== payload);
        },
        toggleModal: (state, payload) =>{
            state.showForm = payload
        },
        toggleModalType: (state, payload) =>{
            state.formType = payload
        }
    },
     extraReducers: (builder) => {
        // builder.addCase(getProducts.pending, (state, action) => {
        //     // Add user to the state array
        //     // state.categories.push(action.payload);
        //     state.status = 'loading!'
        //   })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(signUp.fulfilled, (state, action) => {
          // Add user to the state array
          state.user = (action.payload);
          state.userState = true
        })
        builder.addCase(signIn.fulfilled, (state, action) => {
            // Add user to the state array
            state.user = (action.payload);
            state.userState = true
        })
        // builder.addCase(getProducts.rejected, (state, action) => {
        //     // Add user to the state array
        //     state.status = 'error!'
        // })
      },
})

export const {addToCard, toggleModal, removeCart, toggleModalType} = userSlice.actions;

export default userSlice.reducer;


// export const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         card: ,
//     },
//     reducers: {
//         addToCard: (state, { payload }) => {
//             state.card.push(payload);
//         },
//     },
// });

