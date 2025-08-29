import {create} from 'zustand';


export const useCartStore = create((set) => ({
    cart : JSON.parse(localStorage.getItem('my-cart')) || [],
    addCart : (item) => set((state) => {
        const newCart = [...state.cart,item];
        localStorage.setItem('my-cart',JSON.stringify(newCart));
        return {cart : newCart};
    }),
    deleteCart : (id) => set((state) => {
        const updatedCart = state.cart.filter((c) => c.id !== id);
        localStorage.setItem('my-cart',JSON.stringify(updatedCart));
        return {cart : updatedCart};
    }),
}))