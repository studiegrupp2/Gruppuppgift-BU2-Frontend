import { useParams } from "react-router-dom";
import ProductCards from "../components/ProductCards";

export function Categories ({data})
{
    const { category } = useParams();
    console.log(data);
    const products = [];
    // data.map((items) => (
    //     products.Push(items.find(product => product.category === category ))
    // ))
    //     console.log(products)

    // data.forEach(item in data => item.category === category) {
    //     products.push(item)
    // };
    console.log(category)
    return(
        <div>
            {data.length === 0 ?
                <p>loading</p> : (
                <ul>
                    {data.map((product) => (
                        <div>
                            {product.category === category ?
                            <ProductCards key={product.id} product={product}/> : null
                        }
                        </div>

                    ))}
                </ul>)}
        </div>
    )
}