import React, { useState } from "react";
import apiService from "../services/apiService";
import networkCallService from "../services/networkCallService";

export default function Login(props) {
  const containerData = props.containerData;
  const setLoggedInData = containerData.setLoggedInData;
  const [showError, setShowError] = useState(false);

  const [formData, setFormData] = useState({
    company_id: "",
    access_key: "",
  });

  const { company_id, access_key } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    loginNetworkCall(formData);
  };

  const loginNetworkCall = async (body) => {
    let loginUrlObj = {
      url: `${apiService.BASE}${apiService.LOGIN}`,
      body: body,
      type: "post",
    };

    let responseData = await networkCallService.commonApiService(loginUrlObj);
    console.log(responseData);
    if (responseData.success) {
      setLoggedInData(responseData);
      setShowError(false);
      localStorage.setItem("loggedIn", JSON.stringify(responseData));
    } else {
      setShowError("Invalid Credentials");
    }
  };

  return (
    <div>
      <div
        style={{ width: "40%", padding: "4rem 1rem" }}
        className="marginAuto"
      >
        <h1 className="primaryFont">Login</h1>

        <form
          className="flexColStart paddingTopBottom1"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="form-group">
            <div className="font20 primaryFont paddingTopBottom1">
              Company ID
            </div>
            <input
              className="textInput"
              type="text"
              placeholder="Company ID"
              name="company_id"
              value={company_id}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <div className="font20 primaryFont paddingTopBottom1">
              Access Key
            </div>
            <input
              className="textInput"
              type="text"
              placeholder="Access Key"
              name="access_key"
              value={access_key}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <input type="submit" className="btn marginTB1" value="Register" />
          {showError && (
            <div className=" textCenter primaryFont font17">{showError}</div>
          )}
        </form>
      </div>
    </div>
  );
}
