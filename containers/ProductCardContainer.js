import React, { Fragment } from "react";
import ProductCard from "../components/ProductCard";
import colors from './../assets/styles/colors';

export default function ProductCardContainer(props) {

  const containerData = props.containerData;
  const category = containerData?.category;
  const allProducts = containerData?.allProducts;
  return (
    <Fragment>
      <div className="productCardContainer scrollX primary2Background">
        <div className="productCategory primaryFont marginTB1">{category}</div>
        <hr className="primaryHr" />
        <div className="allProductsContainer subtleBlackBackground">
          {allProducts?.map((singleProduct,index) => {
            return (
              <div key={`${category}${index}`} className="singleCardPadding subtleBlackBackground">
                <ProductCard componentData={singleProduct} />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
        .productCardContainer{
            max-width:100vw;
        }
       
        .singleCardPadding{
            padding-top: 2rem;
            padding-bottom: 2rem;
            padding-left: 1rem;
            padding-right:1rem
        }
        
          .productCategory {
            font-size: 20px;
            font-weight: 500;
          }
          .allProductsContainer {
            border-radius: 15px;
            padding-left:1rem;
            padding-right:1rem;
            display:flex;
            // overflow-x: auto;
            // white-space:nowrap;
          }
        `}
      </style>
    </Fragment>
  );
}
