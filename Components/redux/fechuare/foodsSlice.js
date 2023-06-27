import { createSlice } from '@reduxjs/toolkit';
import foods from "../../data"

const initialItems = [...foods];

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        shooping:[],
        items:foods
    },
    reducers:{
        addItem:(state,action)=>{
            const {id}=action.payload
            state.shooping.push({...action.payload,selected:true})
            const itemIndex=state.items.findIndex((item)=>item.id===id)

            if(itemIndex!==-1){
                state.items[itemIndex].selected=true
            }
        },
        removeItem:(state,action)=>{
            const index=state.items.findIndex(item=>item.id===action.payload)
            if(index!==-1){
                state.items.splice(index,1)
            }
        }
    }
})


export default CartSlice.reducer
export const {addItem,removeItem}=CartSlice.actions