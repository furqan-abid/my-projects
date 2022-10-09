import React, { useEffect } from "react";
import styled from "styled-components";
import MetaData from "./layout/MetaData.js";
import { clearError, getProductDetail } from "../redux/ActionCreators";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./loader.js";
import { useMatch } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const match = useMatch({
      path:'/products/:id',
      end:true,
      caseSensitive:true
  });
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
      if(error){
          alert.error(error)
          dispatch(clearError())
      }
    dispatch(getProductDetail(match.params.id));
  }, [dispatch,match.params.id,error]);

  return (
      <>
      {loading?(
          <Loader/>
      ):(
          <></>
      )}
      </>
  )
};

export default ProductDetails;
