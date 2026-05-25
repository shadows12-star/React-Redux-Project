import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
const initialState = {
   items:JSON.parse(localStorage.getItem('collections')) || []
}
const collectionSlice = createSlice({
  name:'collection',
  initialState,

    reducers:{
        addToCollection:(state,action) => {
            const item = action.payload
             if(!state.items.some(i => i.id === item.id)){
                state.items.push(item)
                localStorage.setItem('collections', JSON.stringify(state.items))
                toast.success('Added to collection!')
              } else {
                toast.error('Already in collection!')
              }     

        },
        removeFromCollection:(state,action) => {
            const id = action.payload
            state.items = state.items.filter(i => i.id !== id)
            localStorage.setItem('collections', JSON.stringify(state.items))
            toast.info('Removed from collection!')
        },
        clearCollection:(state) => {
            state.items = []
            localStorage.removeItem('collections')
            toast.info('Collection cleared!')
        }

    }

})


export const {addToCollection, clearCollection,   removeFromCollection} = collectionSlice.actions
export default collectionSlice.reducer