import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import ProductListing from "../components/Products/ProductListing";
import {GridLoader} from "react-spinners";
import {MdShoppingCart} from "react-icons/md";
import FloatingCart from "../components/FloatingCart/FloatingCart";

export default function Home() {
    const [productsDatas, setProductsDatas] = useState([])
    const [favoriteList, setFavoriteList] = useState([])
    const [cartList, setCartList] = useState([])
    const [loader, setLoader] = useState(true)
    const [showCart, setShowCart] = useState(false)

    useEffect(
        () => {
            fetch('https://fakestoreapi.com/products')
                .then(
                    res => res.json()
                )
                .then(
                    json => {
                        setProductsDatas(json);
                        setLoader(false)
                    }
                )
                .catch(
                    e => console.error(e)
                )
        }
    )
    useEffect(
        () => {
            localStorage.setItem('favorites', JSON.stringify(favoriteList))
            localStorage.setItem('cart', JSON.stringify(cartList))
        }
    )
    /*
    FAVORITES
     */
    function addToFavorites(product) {
        //TODO Fixe this, and add class

        //FIX Mistake when product === item on update
        if (favoriteList.length > 0) {
            favoriteList.forEach(item => {
                if (product.id !== item.id) {
                    setFavoriteList(
                        [...favoriteList, {...product, addedDate: Date.now()}]
                    )
                }
            })
        } else {
            setFavoriteList(
                [...favoriteList, {...product, addedDate: Date.now()}]
            )
        }

    }

    /*
    CART
     */
    function addToCart(product) {
        if (cartList.length > 0) {
            cartList.forEach((item, key) => {
                if (product.id === item.id) {
                    let quantity = item.quantity;
                    let filter = cartList.filter(item => item.id !== product.id);
                    setCartList(
                        [...filter, {...product, quantity: quantity + 1}]
                    )

                } else {
                    setCartList(
                        [...cartList, {...product, quantity: 1}]
                    )
                }
            })
        } else {
            setCartList(
                [...cartList, {...product, quantity: 1}]
            )
        }


    }

    function removeToCart(product) {
        setCartList(
            cartList.filter(item => item !== product)
        )
    }

    function raisePrice(product) {
        let found = cartList.find(item => item.id === product.id)
        let quantity = found.quantity;
        found.quantity = quantity + 1;
    }

    function lowerPrice(product) {
        let found = cartList.find(item => item.id === product.id)
        let quantity = found.quantity;
        found.quantity = quantity - 1;
        if (quantity - 1 <= 0){
            removeToCart(product)
        }
    }

    function toggleCart() {
        if (showCart) {
            setShowCart(false)
        } else {
            setShowCart(true)
        }
    }

    /*
    DISPLAY
     */
    function productsList() {
        if (loader) {
            return (
                <section className="loader">
                    <div className="wrapper-section">
                        <GridLoader color={"#FF4B2B"}/>
                    </div>
                </section>
            )
        } else {
            return (
                <ProductListing
                    productsDatas={productsDatas}
                    addToFavorites={addToFavorites}
                    addToCart={addToCart}
                    title={"Popular products"}
                />
            )
        }
    }

    return (
    //TODO Add filters option
        //TODO First section
        <>
            <main className={showCart ? "showedCart" : "unshowedCart"}>
                {productsList()}
                {showCart ? null :
                    <button className={"cartFloatingButton"} title={"Open cart"} onClick={toggleCart}>
                        <div className="wrapper">
                            {cartList.length > 0 ?<span className="nbProduct">{cartList.length}</span> : null}
                            <MdShoppingCart/>
                        </div>
                    </button>
                }
            </main>
            {showCart ?
                <FloatingCart
                    cartList={cartList}
                    removeToCart={removeToCart}
                    toggleCart={toggleCart}
                    raisePrice={raisePrice}
                    lowerPrice={lowerPrice}
                />
                : null}
        </>
    )
}