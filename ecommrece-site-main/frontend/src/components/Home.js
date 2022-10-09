import React,{useEffect} from "react";
import styled from "styled-components";
import MetaData from "./layout/MetaData.js";
import Product from "./Product.js";
import {clearError, getProduct} from '../redux/ActionCreators';
import {useSelector,useDispatch} from 'react-redux'
import Loader from "./loader.js";


const Home=()=> {
  const dispatch=useDispatch();
  const {loading,error,product,productCount}=useSelector((state)=>state.products)
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  
  return (
    <>
    {loading?(
      <Loader/>
    ):(
      <>
      <MetaData title="Ecommerece"/>
        <Banner>
          <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>
          <a href="#container">
            <button>Scroll</button>
          </a>
        </Banner>
        <HomeHeading>featured products</HomeHeading>
        <ProductContainer id="container">
          {product && product.map((product)=><Product product={product} key={product._id}/>)}
        </ProductContainer>
      </>
    )}
    </>
  );
}

export default Home;

const Banner = styled.div`
  background-image: url("../../images/cover.jfif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vmin;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  h1 {
    margin: 5vmax;

    font: 600 2.5vmax "Roboto";
  }
  p {
    font: 300 1.4vmax "Lucida Sans";
  }
  a {
    button {
      margin-bottom: 5vmax;
      cursor: pointer;
      background-color: white;
      border: 1px solid white;
      border-radius: 0;
      padding: 1vmax;
      transition: all 0.5s;
      width: 9vmax;
      font: 500 1vmax "Roboto";
    }
    button:hover {
      background-color: rgba(255, 255, 255, 0);
      color: white;
    }
  }
  ::after {
    content: "";
    width: 100vw;
    height: 100vmin;
    background-color: #ffffff;
    position: absolute;
    top: 0%;
    left: 0;
    clip-path: polygon(100% 68%, 0 100%, 100% 100%);
    max-width: 100%;
  }
`;

const HomeHeading = styled.h2`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.4vmax;
  border-bottom: 1px solid rgba(21, 21, 21, 0.5);
  width: 20vmax;
  padding: 1vmax;
  margin: 5vmax auto;
  color: rgba(0, 0, 0, 0.7);
`;

const ProductContainer = styled.div`
   display: flex;
  margin: 2vmax auto;
  width: 80vw;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
`;

