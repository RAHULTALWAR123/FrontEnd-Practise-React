import {create} from 'zustand';


export const useCartStore = create((set) => ({
    cart : [],
    addCart : (item) => set((state) => ({cart : [...state.cart,item]})),
    deleteCart : (id) => set((state) => ({cart : state.cart.filter(item => item.id !== id)})),
}))