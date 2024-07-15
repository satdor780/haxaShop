import { useState } from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { useLocalStorage } from "../utils/useLocalStorage.jsx"

// const [userLogined, setUserLogined] = useLocalStorage('user', 'false')

export const signUp = createAsyncThunk(
    'userSlice/signUp',
    async function (payload) {
        try{
            const res = await axios.post('https://api.escuelajs.co/api/v1/users/', payload);
            return res.data
        }catch{
            console.log(err)
        }
        
    }
)

export const signIn = createAsyncThunk(
  'userSlice/signIn',
  async function (payload, thunkAPI) {
    try {
      const res = await axios.post('https://api.escuelajs.co/api/v1/auth/login', payload);
      const login = await axios('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: {
          Authorization: `Bearer ${res.data.access_token}` // Обратите внимание на res.data.access_token
        }
      });
      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data); // Возвращаем ошибку с помощью rejectWithValue
    }
  }
);


const fulfilled = (state, action) => {
    state.user = (action.payload);
    // setUserLogined(() => {
    //     return payload
    // })
    state.userState = true
    state.showForm = false
}
    

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        userState: false,
        showForm: false,
        notifications: false,
        formType: 'signUp',
        card: [],
    },
    reducers: {
        addToCard: (state, {payload}) => {
            let newCard = [...state.card];
            
            const existingCard = newCard.find(card => card.id === payload.product.id);

            if (existingCard) {
                
                existingCard.quantity += payload.orders;
            } else {
                newCard.push({ ...payload.product, quantity: payload.orders });
            }
            payload.type !== 'cart' ? state.notifications = true: null
            
            state.card = newCard;
        },
        hideNotifications: (state) => {
            state.notifications = false
        },
        removeCart: (state, {payload}) => {
            state.card = state.card.filter((item) => item.id !== payload);
        },
        toggleModal: (state, payload) =>{
            state.showForm = payload
        },
        toggleModalType: (state, payload) =>{
            state.formType = payload
        },
        setUser: (state, payload) => {
            state.user = payload.payload
           
            state.userState = true
        }
    },
     extraReducers: (builder) => {

        builder.addCase(signUp.fulfilled, fulfilled)
        builder.addCase(signIn.fulfilled, fulfilled)
      },
})

export const {addToCard, toggleModal, removeCart, toggleModalType, setUser, hideNotifications} = userSlice.actions;

export default userSlice.reducer;

