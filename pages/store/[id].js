import {useRouter} from "next/router";
import {useEffect, useState} from "react";
//TODO Finish this page
export default function ProductSingle(){
    const [productDatas, setProductDatas] = useState([]);
    const router = useRouter();
    const {id} = router.query;

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json())
            .then(
                json => setProductDatas(json)
            )
            .catch(e=>console.error(e))
    })

    return(
        <>
            <h1>{productDatas.title}</h1>
            <p>
                {productDatas.description}
            </p>
        </>
    )
}