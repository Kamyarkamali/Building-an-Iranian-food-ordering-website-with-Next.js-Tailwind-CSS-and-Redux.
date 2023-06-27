import { createSlice } from '@reduxjs/toolkit';
import foods from "../../data"

const initialItems = [...foods];

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        shooping:[],
    },
    reducers:{
        addItem:(state,action)=>{
           const itemIncart=state.shooping.find((item)=>item.id===action.payload.id)
           if(itemIncart){
            itemIncart.quantity++
           }else{
            state.shooping.push({...action.payload,quantity:1})
           }
        },

        incrementQuantity:(state,action)=>{
            const item=state.shooping.find((item)=>item.id===action.payload);
            if(item){
                item.quantity++
            }   
        },

        removeItem:(state,action)=>{
            const index=state.shooping.findIndex(item=>item.id===action.payload)
            if(index!==-1){
                state.shooping.splice(index,1)
            }
        }
    }
})

function calculateTotalPrice(shoppingitems){
    return shoppingitems.reduce((total,item)=>total+item.price*item.quantity,0)
}

export default CartSlice.reducer
export const {addItem,removeItem,incrementQuantity}=CartSlice.actions