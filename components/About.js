import React, { Fragment } from "react";
import imageUrls from './../assets/imageUrls';

export default function About() {
  return (
    <Fragment>
      <div
        style={{ borderRadius: "15px" }}
        className="subtleBlackBackground padding1"
      >
        <div className="font25 primary8Font paddingTopBottom1 textCenter">About Company</div>
        <div className="logoDiscription paddingBottom1">
          <div>
            <img className="edvoraLogo" src={imageUrls.edvoraLogo} />
          </div>
          <div className="primaryFont font17">
            An ecommerce platform at your ease
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logoDiscription {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          }
          .edvoraLogo {
            width: 30px;
            margin: 1rem;
          }
        `}
      </style>
    </Fragment>
  );
}
