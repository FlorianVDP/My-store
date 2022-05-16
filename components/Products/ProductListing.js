import Product from "./Product";

export default function ProductListing(props) {
    const {productsDatas, addToFavorites, addToCart, title} = props;

    let products = productsDatas.map(item => {

        return (
            <Product
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                addToFavorites={() => addToFavorites(item)}
                addToCart={() => addToCart(item)}

            />
        )
    })

    return (
        <section className={"allProduct"}>
            <div className="wrapper-section">
                <h1>{title}</h1>
                <ul className="ProductListing">
                    {products}
                </ul>
            </div>
        </section>
    )
}