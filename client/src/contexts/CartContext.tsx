import { createContext, useEffect, useState } from "react";
import type { Product } from "../types/products";

type CartItem = Product & {
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
};

// array of object type
export const CartContext = createContext<CartContextType | null>(null);


const CartProvider = ({ children }: { children: React.ReactNode }) => {
    // cart is also array of object <CartItem>
    const [cart, setCart] = useState<CartItem[]>([]);

    // fetch cart from localStorage
    useEffect(() => {
        const localCart: CartItem[] = JSON.parse(localStorage.getItem("e-store-cart") || "[]");
        setCart(localCart);
    }, [])

    // update everytime cart (state) is change
    useEffect(() => {
        localStorage.setItem("e-store-cart", JSON.stringify(cart));
        }, [cart]);

    const addToCart = (product: Product) => {
        setCart(prev => {
        const existing = prev.find(item => item.id === product.id);

        if (existing) {
            return prev.map(item =>
            item.id === product.id
                ? { ...item, qty: item.qty + 1 }
                : item
            );
        }

        return [...prev, { ...product, qty: 1 }];
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;