import React, { Fragment } from "react";
import Dropdown from "./Dropdown";
import { connect } from "react-redux";
import { sortByDate, sortByTime } from "../store";

function Sort(props) {
  
  let itemsList = ["Ascending", "Descending"];
  let datesSelect = {
    itemsList: itemsList,
    placeholder: "Date",
    showPlaceholder: true,
    key: `dates${itemsList.length}`,
    showDefault: false,
    handleSelect: function (value) {
      props.dispatch(sortByDate({ sortValue: value }));
    //   getSortedData(value);
    },
  };
  let timesSelect = {
    itemsList: itemsList,
    placeholder: "Time",
    showPlaceholder: true,
    key: `times${itemsList.length}`,
    showDefault: false,
    handleSelect: function (value) {
        props.dispatch(sortByTime({ sortValue: value }));
    },
  };
  return (
    <Fragment>
      <div className="primary8Font font20">Sort By</div>
      <hr className="primaryHr" />
      <div className="flexColStart marginTop1">
        <div style={{ paddingBottom: "0.5rem" }}>
          <Dropdown componentData={datesSelect} />
        </div>
        <div style={{ paddingBottom: "0.5rem" }}>
          <Dropdown componentData={timesSelect} />
        </div>

      </div>
    </Fragment>
  )
}
function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps)(Sort);
