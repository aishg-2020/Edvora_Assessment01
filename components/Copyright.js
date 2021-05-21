import React, { Fragment } from "react";
import imageUrls from "./../assets/imageUrls";

export default function Copyright() {
  return (
    <Fragment>
      <div  className="primaryFont boldText font12 flexRowCenter textCenter padding1">
        <span className="flexRowCenter">
          <span>
            <img
              style={{ width: "11.46px" }}
              className="whiteIconClass"
              src={imageUrls.copyRightIcon}
            />
          </span>
          <span>
            Ed
            <span>
              <img style={{ width: "11.46px" }} src={imageUrls.edvoraLogo} />
            </span>
            ora . All rights reserved | 2021
          </span>

        </span>
      </div>
    </Fragment>
  );
}
