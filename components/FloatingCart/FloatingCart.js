import ProductCart from "./ProductCart";
import {useEffect, useState} from "react";
import Link from "next/link";
import {MdShoppingCart} from "react-icons/md";

export default function FloatingCart(props) {
    const {cartList, toggleCart, removeToCart, lowerPrice, raisePrice} = props
    const [totalPrice, setTotalPrice] = useState(100)

   // Update total price



    let products = cartList.map(item => {
        return (
            <ProductCart
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                quantity={item.quantity}
                removeToCart={() => removeToCart(item)}
                raisePrice={()=>raisePrice(item)}
                lowerPrice={()=>lowerPrice(item)}
            />
        )
    })

    function showTotalPrice() {
        if (totalPrice !== 0) {
            return (
                <div className="totalCart">
                    <span className="price">
                        {totalPrice} €
                    </span>
                    <Link href={"/cart"}>
                        <a>Checkout</a>
                    </Link>
                </div>
            )
        } else {
            return (
                <>
                    nothing
                </>
            )
        }
    }

    return (
        <aside>
            <div className="wrapper-aside">
                <div className="wrapper">
                    <button className="close" title={"Close cart"} onClick={() => toggleCart()}>
                        X
                    </button>
                    <span className="titleH2">Your cart</span>
                    <ul className="listing-cart">
                        {products}
                    </ul>
                </div>
                {showTotalPrice()}
            </div>
        </aside>
    )
}