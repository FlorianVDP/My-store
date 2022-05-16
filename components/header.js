import Link from "next/link";
import {MdShoppingCart, MdFavorite} from "react-icons/md";
//TODO Search bar
export default function Header() {
    return (
        <header>
            <div className="wrapper-header">
                <Link href={"/"}>
                    <a title={"Homepage"} target={"_self"}>My store logo</a>
                </Link>
                <nav>
                    <Link href={"/store"}>
                        <a title={"Store"} target={"_self"}>Store</a>
                    </Link>
                    <Link href={"/checkout"}>
                        <a title={"Checkout"} target={"_self"}><MdShoppingCart/></a>
                    </Link>
                    <Link href={"/wishlist"}>
                        <a title={"Wishlist"} target={"_self"}><MdFavorite/></a>
                    </Link>
                    <p className="search">
                        <input type="search" placeholder={"Search..."}/>
                    </p>
                </nav>
            </div>
        </header>
    )
}