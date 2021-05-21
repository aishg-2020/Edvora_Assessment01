import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Sort from "./Sort";

export default function FilterSortContainer(props) {
  const componentData = props.componentData;
  const filterArray = componentData?.filterArray;

  return (
    <div
      style={{ borderRadius: "15px" }}
      className="subtleBlackBackground padding1"
    >
      <Filter
        componentData={{
          filterArray: filterArray,
        }}
      />
      <Sort />
    </div>
  )
}
