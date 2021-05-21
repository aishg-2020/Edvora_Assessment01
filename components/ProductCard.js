import React, { Fragment } from "react";
import moment from "moment";
import imageUrls from "./../assets/imageUrls";
import colors from "./../assets/styles/colors";
export default function ProductCard(props) {
  const componentData = props.componentData;
  return (
    <Fragment>
      <div className="productCard cursorPointer primary2Background">
        <div
          style={{ height: "120px" }}
          className="padding1 flexRowSpcAround wrap"
        >
          <div className="padddingRight1">
            <img
              className="productImage"
              src={
                componentData?.image
                  ? componentData?.image
                  : imageUrls.thomYorkeProfile
              }
            />
          </div>
          <div className="flexColStart wrap">
            {componentData?.name && (
              <div className="productName primaryFont">
                {componentData?.name}
              </div>
            )}
            {componentData?.brand && (
              <div className="brandName primarySubtleFont">
                {componentData?.brand}
              </div>
            )}
            {componentData?.price && (
              <div className="price primaryFont">$ {componentData?.price}</div>
            )}
          </div>
        </div>
        <div
          style={{ height: "60px" }}
          className="padding1 flexRowSpcAround wrap "
        >
          {componentData?.location && (
            <div className="brandName wor primarySubtleFont">
              {componentData?.location?.city}, {componentData?.location?.state}
            </div>
          )}
          {componentData?.date && (
            <div className="brandName primarySubtleFont">
              Date: {moment(componentData?.date).format("DD MMM YY")}
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .productCard {
            width: 300px;
            // height: 250px;
            border-radius: 5px;
            // flex:0 0 auto;
            display: inline-block;
          }
          .productImage {
            width: 70px;
            height: 70px;
          }
          .productName {
            font-size: 15px;
            font-weight: 400;
          }
          .brandName {
            font-size: 13px;
            font-weight: 400;
          }
          @media (hover: hover) {
            .productCard :hover {
              transform: scale(1.01);
              transition: all 0.2s ease-in-out;
              box-shadow: 0 0 8px #232323;
              z-index: 2;
            }
          }
        `}
      </style>
    </Fragment>
  );
}
