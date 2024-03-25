export const createNewProduct = (title, description, category, size, color, price, thumbnail) => {
    fetch("http://localhost:5000/manager/create",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
            title: title,
            description: description,
            category: category,
            size: size,
            color: color,
            price: price,
            thumbnail: thumbnail
        }),
    })
    .then((res) => {
        if(res.status === 400) {
            alert("You must enter all fields")
        }
        else{
            return res.json()
            .then(console.log(res))
        }
    })
    .catch((err) => {
        console.log(Object.keys(err));
        console.log(err);
    });
};


export const deleteProduct = (productId) => {
    fetch("http://localhost:5000/manager/delete/"+ productId,
    {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        }, 
    })
    .then((res) => {
        if(res.status === 404) {
            alert("Product not found")
        }
        else{
            alert("product with id " + productId + "deleted!")
            return res.json()
            .then(console.log(res))
        }
    })
    .catch((err) => {
        console.log(Object.keys(err));
        console.log(err);
    });
}

export const updateProduct = (updateProductDetails, idInput) => {
    fetch("http://localhost:5000/manager/update/"+ idInput,
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(updateProductDetails),
    })
    .then((res) => {
        if(res.status === 400) {
            alert("You must enter all fields")
        }
        else{
            alert("Product Updated!")
            return res.json()
            .then(console.log(res))
            
        }
    })
    .catch((err) => {
        console.log(Object.keys(err));
        console.log(err);
    });
}

export const getAllOrders = async () => {

    const response = await fetch("http://localhost:5000/manager/orders" ,
    {
        "method": "GET",
        "headers":{
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    });
    if(response.status !== 200){
        console.log("No Orders Found..")
    }
    const result = await response.json();
    return result;
    // const options = {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + localStorage.getItem("token"),
    //     }
    // };

    // let result = await fetch("http://localhost:5000/manager/orders", options);
    // return await result.json();
     
    


    // .then((res) => {
    //     if(res.status === 404) {
    //         alert("Orders not found")
    //     }
    //     else {
    //         return res.json()
    //         .then(console.log(res))
    //     }
    // })
    // .catch((err) => {
    //     console.log(Object.keys(err));
    //     console.log(err);
    // });
}
