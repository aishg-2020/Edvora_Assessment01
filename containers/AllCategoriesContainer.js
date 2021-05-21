import React, { Fragment } from "react";
import ProductCardContainer from "./ProductCardContainer";

export default function AllCategoriesContainer(props) {
  const containerData = props.containerData;
  const productsData = containerData.productsData;
  return (
    <Fragment>
      <div className="primarySubtleFont font25">Products</div>
      <div className="height100vh">
        {productsData &&
          productsData.map((singleCategory, index) => {
            let containerData = {
              category: singleCategory[0]?.category,
              allProducts: singleCategory,
            };
            return (
              <ProductCardContainer
                key={`singleCategory${index}`}
                containerData={containerData}
              />
            );
          })}
      </div>
    </Fragment>
  );
}
