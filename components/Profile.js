import React from "react";
import imageUrls from "./../assets/imageUrls";

export default function Profile(props) {
  let componentData = props.componentData;
  let name = componentData.name;
  let email = componentData.email;
  let mobile_number = componentData.mobile_number;
  let userImage = imageUrls.thomYorkeProfile;
  return (
    <div style={{ width: "80%", padding: "4rem 1rem" }} className="marginAuto">
      <div className="flexRowSpcAround wrap">
        <div className="flexColStart">
          <div className="form-group">
            <div className="font20 primaryFont paddingTopBottom1">Username</div>
            <input
              className="textInput"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              required
            />
          </div>
          <div className="form-group">
            <div className="font20 primaryFont paddingTopBottom1">
              Email Address
            </div>
            <input
              className="textInput"
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              required
            />
          </div>
          <div className="form-group">
            <div className="font20 primaryFont paddingTopBottom1">
              Mobile Number
            </div>
            <input
              className="textInput"
              type="email"
              placeholder="Mobile Number"
              name="email"
              value={mobile_number}
              required
            />
          </div>
        </div>
        <div className="flexColCenter alignCenter">
          <div className="cursorPointer paddingTopBottom1">
            <img className="profileIconLarge circularImage" src={userImage} />
          </div>
          <div className="primaryFont font30 paddingTopBottom1">{name}</div>
        </div>
      </div>
      
    </div>
  );
}
