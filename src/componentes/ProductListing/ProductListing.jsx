
import React from 'react';
import { ProductCard } from '../../ProductCard/ProductCard';
import tenis from '../../assets/img/Layer-1aa-2.png';  

const products = [
    {
        name: "Tênis",
        image: tenis,
        price: 100,
        showDiscount: true,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image: tenis,
        price: 200,
        showDiscount: true,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image: tenis,
        price: 300,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image: tenis,
        price: 400,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image: tenis,
        price: 500,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image: tenis,
        price: 600,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image: tenis,
        price: 700,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image: tenis,
        price: 800,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image: tenis,
        price: 900,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image: tenis,
        price: 1000,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image:  tenis,
        price: 1100,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image:  tenis,
        price: 1200,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image:  tenis,
        price: 1300,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image: tenis,
        price: 1400,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image:  tenis,
        price: 1500,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    },
    {
        name: "Tênis",
        image:  tenis,
        price: 1500,
        title: "K-Swiss V8 - Masculino",
        priceDiscount: 200
    }
]


export function ProductListing(){

    return(
        <>
        <div className="products-list">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    showDiscount={product.showDiscount}
                    title={product.title}
                    priceDiscount={product.priceDiscount}
                />
            ))}
        </div>
        </>
    )
}