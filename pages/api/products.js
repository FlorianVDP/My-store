
export default function Products(req, res){
    res.status(200).json(
        {
            products: "We have some products"
        }
    )
}