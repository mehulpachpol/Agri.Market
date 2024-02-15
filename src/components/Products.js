import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
    // console.log(product)

    handleSubmit(product);

  }



  const handleSubmit = async (product) => {
    console.log("Inside Submit");
    console.log(product.id);

    try {
      const id = sessionStorage['id']
      const apiEndpoint = `http://localhost:8080/cart/user/${id}/product/${product.id}`;  
      const requestOptions = {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(apiEndpoint, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Product Added successfully:', data);

    } catch (error) {
      console.error('Error saving data:', error);
    }
  };








  

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:8080/product/all");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  // const filterProduct = (cat) => {
  //   console.log(cat)
  //   console.log(data);
  //   const updatedList = data.filter((item) => item.category === cat);
  //   setFilter(updatedList);
  //   console.log(updatedList);
  //   console.log(filter);
  // }
  const filterProduct = (cat) => {
    if (cat === "All") {
      setFilter(data);
    } else {
      const updatedList = data.filter((item) => item.category === cat);
      setFilter(updatedList);
    }
  };
  
  const ShowProducts = () => {

    const categories = [
      { name: 'All', imageSrc: "./assets/farm2.jpg" },
      { name: "Fertillizer", imageSrc: "./assets/fert.png" },
      { name: "Pesticides", imageSrc: "./assets/pest.jpg" },
      { name: 'Equipments', imageSrc: "./assets/acc.png" },
      { name: 'Boosters', imageSrc: "./assets/boost.jpg" },
    ];



    return (
      <>


          <div className="buttons text-center py-5">
                {categories.map((category, index) => (
                  
                  <button
                    key={index}
                    className="btn btn-outline-dark btn-sm m-2"

                    onClick={() => setFilter(index === 0 ? data : filterProduct(category.name))}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <img
                        src={category.imageSrc}
                        alt={category.name}
                        style={{ width: '50px', height: '50px', borderRadius: '50%', marginBottom: '5px' }}
                      />
                      <span>{category.name}</span>
                    </div>
                  </button>
                ))}
              </div>



        {/* <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div> */}
{/* 
[
  {
    "id": 0,
    "productName": "string",
    "description": "string",
    "price": 0,
    "stockQuantity": 0,
    "imgURL": "string",
    "dateAdded": "2024-02-10"
  }
] */}

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
              {/* style={{boxShadow: "5px 5px rgba(0, 0, 0, 0.4)"}} */}
                <img
                  className="card-img-top p-3"
                  src={product.imgURL}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.productName.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">₹ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                  <hr style={{ color: '#06d47b', border: 'solid', borderWidth: '2px', opacity: '0.7', width: '100%' }} />
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
