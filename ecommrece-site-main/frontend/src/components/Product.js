import styled from "styled-components";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function Product({ product }) {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  return (
      <ProductCard to={`/products/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <div>
          <ReactStars {...options} />
          <span>{product.numOfReviews}</span>
        </div>
        <span>{`${product.price}pkr`}</span>
      </ProductCard>
  );
}

export default Product;

const ProductCard = styled(Link)`
  width: 14vmax;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: rgb(48, 48, 48);
  margin: 2vmax;
  transition: all 0.5s;
  padding-bottom: 0.5vmax;
  img {
    width: 100%;
  }
  div {
    span {
      margin: 0.5vmax;
      font: 300 0.7vmax "Roboto";
    }
  }
  p {
    font-family: "Roboto";
    font-size: 1.2vmax;
    margin: 1vmax 0.5vmax;
    margin-bottom: 0;
  }
  span {
    margin: 0.5vmax;
    color: tomato;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1vmax;
  }
  :hover {
    box-shadow: 0 0 5px rgba(15, 15, 15, 0.26);

    transform: translateY(-1vmax);
  }
  @media screen and (max-width: 600px) {
    p {
      font-size: 1.7vmax;
    }
    div {
      margin: 0vmax;
      display: block;
      span {
        margin: 0 0.5vmax;
        font: 300 1vmax "Roboto";
      }
    }
    span {
      font-size: 1.5vmax;
    }
  }
`;
