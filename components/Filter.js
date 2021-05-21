import React, { Fragment, useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import { connect } from "react-redux";
import { filterByValue } from "../store";
function Filter(props) {
  const componentData = props.componentData;
  const filterArray = componentData?.filterArray;


  return (
    <Fragment>
      <div className="primary8Font font20">Filters</div>
      <hr className="primaryHr" />
      <div className="flexColStart marginTB1">
        {filterArray.map((single, index) => {
          let newObj = {
            ...single,
            handleSelect: function (value) {
              props.dispatch(filterByValue({ key: single.type, value: value }));
            },
          };
          return (
            <div key={single.key} style={{ paddingBottom: "0.5rem" }}>
              <Dropdown componentData={newObj} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Filter);
