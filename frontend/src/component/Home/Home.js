import React, { Fragment, useEffect } from "react";
import {CgMouse} from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";



const product ={
  name: "Blue Tshirt",
  images: [{ url: "https://media.istockphoto.com/id/465485415/photo/blue-t-shirt-clipping-path.jpg?s=1024x1024&w=is&k=20&c=aHSQPbV7yEYB-xhrf2mwBaSZlSxNdXiaO5KliStWEYg="}],
  price: "Rs 1300",
  _id: "Muski",
};
const Home = () => {
  const dispatch = useDispatch();
  const {  } = useSelector((state) => state.products);

  useEffect(() => {
   
    dispatch(getProduct());
  }, [dispatch]);

    return (
      <Fragment>

<MetaData title="MUSK-ART" />

             <div className="banner">
            <p>Welcome to MUSK-ART</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
          <Product product={product} />
          </div>
          
      </Fragment>
    );
  };
  
  export default Home;