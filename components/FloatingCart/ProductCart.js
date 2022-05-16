export default function ProductCart(props){
    const {id, image, title, price, removeToCart, quantity, lowerPrice, raisePrice} = props
    return(
        <li className={"ProductCart"}>
            <div className="infos">
                <img src={image} alt={title}/>
                <div className="texte">
                    <a href={"store/"+id} className="title">{title}</a>
                    <span className={'price'}>{price} €</span>
                    <button onClick={removeToCart} title={"Remove product"}>remove</button>
                </div>
            </div>

            <div className="quantity">
                <button onClick={lowerPrice} title={"Remove one product"}>-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={raisePrice} title={"Add one product"}>+</button>
            </div>

        </li>
    )
}