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
    fetch("http://localhost:5000/manager/delete"+ productId,
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
            return res.json()
            .then(console.log(res))
        }
    })
    .catch((err) => {
        console.log(Object.keys(err));
        console.log(err);
    });
}

export const updateProduct = (productId, title, description, category, size, color, price, thumbnail) => {
    fetch("http://localhost:5000/manager/delete"+ productId,
    {
        method: "PUT",
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
}

export const getAllOrders = () => {
    fetch("http://localhost:5000/manager/orders", {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        }
    })
    .then((res) => {
        if(res.status === 404) {
            alert("Orders not found")
        }
        else {
            return res.json()
            .then(console.log(res))
        }
    })
    .catch((err) => {
        console.log(Object.keys(err));
        console.log(err);
    });
}
