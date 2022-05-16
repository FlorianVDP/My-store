import {MdOutlineFavoriteBorder, MdOutlineShoppingCart} from "react-icons/md";
import slugify from "slugify";
export default function Product(props){
    const {id, image, title, price, addToFavorites, addToCart} = props
    // MdOutlineFavorite
    const slug = slugify(title);
    //Todo slug dans URL
    //Todo SEO
    return(
        <li className="Product" id={id}>
            <div className="infos">
                <picture>
                    <img src={image} alt={title}/>
                </picture>
                <span className="title">{title}</span>
                <span className="price">{price}<bdi>€</bdi></span>
            </div>
            <button className="addToCart" title={"Add to cart"} onClick={addToCart}>
                <MdOutlineShoppingCart />
            </button>
            <button className="addToFavorites" title={"Add to favorites"} onClick={addToFavorites}>
                <MdOutlineFavoriteBorder />
            </button>

            <a href={"store/"+id} className={"button-fill"} title={"See more"}>See more</a>

        </li>
    )
}