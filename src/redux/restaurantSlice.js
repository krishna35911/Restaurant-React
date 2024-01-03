import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//api call using thunk
export const fetchrestaurant=createAsyncThunk('restaurantlist/fetchrestaurant',()=>{
    const result=axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log(result);
    return result
})
const restaurantSlice=createSlice({
    name:'restaurantlist',
    initialState:{
        loading:false, //pending state
        allRestaurant:[],  //resolve state
        allSearch:[],
        error:""  //reject state  
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchrestaurant.pending,(state)=>{ // if the state of fetchrestaurant thunk is pending change the stae of loading is true
            state.loading=true 
        })
        builder.addCase(fetchrestaurant.fulfilled,(state,action)=>{ //if state is fulfilled/resolved allrestaurant state should get the value of action and it is in action.payload
            state.loading=false
            state.allRestaurant=action.payload
            state.allSearch=action.payload
            state.error=""
        })
        builder.addCase(fetchrestaurant.rejected,(state,action)=>{ //if state is rejected
            state.loading=false
            state.allRestaurant=""
            state.error=action.error.message
        })

    },
    reducers:{
        search:(state,action)=>{
          state.allRestaurant =state.allSearch.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})
export const {search}=restaurantSlice.actions
export default restaurantSlice.reducer