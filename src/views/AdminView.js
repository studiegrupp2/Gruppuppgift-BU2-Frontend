import { useState } from "react";

export function AdminView ()
{
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState(null);

    // const handleChange = (event) => {
    //     const { title , value} = event.target;
    //     const { description, value } = event.target.description;
    //     const category = event.target.category;
    //     const size = event.target.size;
    //     const color = event.target.color;
    //     const price = event.target.price;
    //     const thumbnail = event.target.thumbnail;
    //     setInputs((values) => ({.}))
    // }
    return(
        <>
            <div>
                <h1>Create a new product</h1>

            </div>


            


        </>
    )
}