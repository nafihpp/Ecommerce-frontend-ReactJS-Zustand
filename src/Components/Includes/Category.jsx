import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Category() {
    const { category } = useParams();
    const [categoryItem, setCategoryItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/category/${category}`)
            .then(function (response) {
                setCategoryItem(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(category);

    return (
        <>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <div>
                    {categoryItem.map((item) => (
                        <>
                            <h1>{item.title}</h1>
                            <h2>{item.category}</h2>
                            <h3>{item.price}</h3>
                            <img src={item.image} />
                        </>
                    ))}
                </div>
            )}
        </>
    );
}

export default Category;
