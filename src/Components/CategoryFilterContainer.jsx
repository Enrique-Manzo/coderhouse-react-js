import "./CategoryFilterContainer.css";
import { products } from "../api/product";
import Item from "./Item";
import { useState } from "react";

export default function CategoryFilterContainer () {

    const [currentProducts, setCurrentProducts] = useState(products.slice(13, 16));

    const mostExpensive = () => {
        
        const mostExpensiveProducts = products.sort(function (a, b) {
            if (a.price < b.price) {
              return 1;
            }
            if (a.price > b.price) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });

        setCurrentProducts(mostExpensiveProducts.slice(0, 3))
    }

    const mostPopular = () => {
        
        const mostPopularProducts = products.sort(function (a, b) {
            if (a.stock > b.stock) {
              return 1;
            }
            if (a.stock < b.stock) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });

        setCurrentProducts(mostPopularProducts.slice(0, 3))
    }

    const newestItems = () => {
        
        setCurrentProducts(products.slice(-4, -1))
        
    }

    return (
        <div className="constainer category-filter-container">
            <div className="category-filters">
                <ul>
                    <li onMouseEnter={mostPopular}>Most popular</li>
                    <li onMouseEnter={mostExpensive}>Most expensive</li>
                    <li onMouseEnter={newestItems}>Newest items</li>
                </ul>
            </div>
            <div>
                <div className="d-flex justify-content-between align-items-center flex-column flex-sm-column flex-md-row flex-lg-row flex-wrap">
                    { 
                    currentProducts.map(item =><Item key={item.id} productKey={item.id} title={item.title} category={item.category} price={item.price} image={item.imageURL}></Item>)
                    }
                </div>
            </div>
        </div>           
        
    )
}