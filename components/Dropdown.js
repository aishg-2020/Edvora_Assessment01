import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import imageUrls from "./../assets/imageUrls";
import colors from "./../assets/styles/colors";

const Dropdown = (props) => {
  const componentData = props?.componentData;
  console.log(componentData);
  const placeholder = componentData?.placeholder || "Select";
  const [showPlaceholder, setShowPlaceholder] = useState(
    componentData?.showPlaceholder !== undefined
      ? componentData?.showPlaceholder
      : false
  );
  const uniqueKey =
    componentData?.key !== undefined ? componentData?.key : "select";
  const [itemsList, setItemsList] = useState(componentData?.itemsList);
  const showDefault = componentData?.showDefault;
  const defaultIndex =
    componentData?.defaultIndex !== undefined
      ? componentData?.defaultIndex
      : null;
  const defaultValue =
    componentData?.defaultValue !== undefined
      ? componentData?.defaultValue
      : defaultIndex !== null
      ? itemsList[defaultIndex]
      : null;
  const handleSelect =
    componentData?.handleSelect !== undefined
      ? componentData?.handleSelect
      : () => {};
  const isSearchable =
    componentData?.isSearchable !== undefined
      ? componentData?.isSearchable
      : false;
  // const renderJsx = componentData.renderJsx!==undefined?componentData.renderJsx:false;
  const isNested =
    componentData?.isNested !== undefined ? componentData?.isNested : false;
  const [nestedItems, setNestedItems] = useState(
    componentData?.nestedItems !== undefined ? componentData?.nestedItems : null
  );
  const nestedItemKey =
    componentData?.nestedItemKey !== undefined
      ? componentData?.nestedItemKey
      : null;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    showDefault === true ? defaultValue : null
  );

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => () => {
    setShowPlaceholder(false);
    setSelectedOption(value);
    setIsOpen(false);
    handleSelect(value);
  };
  // const onNestedOptionClicked = value => () => {
  //     setSelectedOption(value[nestedItemKey]);
  //     setIsOpen(false);
  //     handleSelect(value)
  // }

  function handleMouseLeave() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <div className="DropDownContainer primaryFont font17">
        <div className="DropDownHeader primary2Background" onClick={toggling}>
          {showPlaceholder === true ? placeholder : `${placeholder}: ${selectedOption}` || "None"}
        </div>

        <div
          className="DropDownList primary2Background"
          onMouseLeave={handleMouseLeave}
        >
          {isNested === true
            ? nestedItems &&
              Object.entries(nestedItems)?.map(([key, singleGroup]) => {
                return (
                  <Fragment key={key}>
                    <div className="singleGroup boldFont">{key}</div>
                    {singleGroup?.map((option, index) => {
                      return (
                        <div
                          className="ListItem"
                          style={{ paddingLeft: "1.5em" }}
                          onClick={onOptionClicked(option[nestedItemKey])}
                          key={`${uniqueKey}-${index}`}
                        >
                          {option[nestedItemKey]}
                          {selectedOption === option[nestedItemKey] ? (
                            <img
                              style={{ paddingLeft: "0.5rem" }}
                              className="icon-small"
                              src={imageUrls.greenTick}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </Fragment>
                );
              })
            : itemsList?.map((option, index) => (
                <div
                  className="ListItem"
                  onClick={onOptionClicked(option)}
                  key={`${uniqueKey}-${index}`}
                >
                  {option}
                  {selectedOption === option ? (
                    <img
                      style={{ height: "1rem", paddingLeft: "0.5rem" }}
                      src={imageUrls.greenTick}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
        </div>
      </div>
      <style jsx>
        {`
          .DropDownContainer{
            display: flex;
            width: 100%;
            min-width:200px;
            flex-direction: column;
            position: relative;
            border-radius: 5px;
            cursor: pointer;
          }
          .DropDownHeader{
            padding: 1em 1em;
            order: 1;
            cursor: pointer;
            font-size: 12px;
            font-family: Roboto;
            border-radius: 5px;
            
          }
          .DropDownHeader::after {
            content: "";
            background: url("https://image.flaticon.com/icons/png/512/566/566004.png");
            filter:invert(99%) sepia(99%) saturate(2%) hue-rotate(351deg) brightness(102%) contrast(101%);
            background-size: contain;
            background-repeat: no-repeat;
            position: absolute;
            height: 100%;
            width: 1em;
            right: 15px;
            top: ${!isOpen ? "12px" : "-10px"};
            transform: ${isOpen ? "rotateX(180deg)" : "none"};
            opacity: 40%;
            transition: all 0.4s;
          }

          .DropDownList{
            order: 2;
            // background: ${colors.Default};
            padding: 0;
            margin: 0;
            border-radius: 5px;
            box-sizing: border-box;
            position: absolute;
            z-index: 101;
            width:100%;
            cursor: pointer;
            -moz-transition: opacity 0.4s ease-in-out;
            -o-transition: opacity 0.4s ease-in-out;
            -webkit-transition: opacity 0.4s ease-in-out;
            transition: opacity 0.4s ease-in-out;
            max-height: 240px;
            opacity: ${isOpen ? "1" : "0"};
            display: ${isOpen ? "block" : "none"};
            overflow-y:scroll;
            top:100%;
        }
        .DropDownList::-webkit-scrollbar {
            width: 6px;
            background: ${colors.Secondary_4};
            border-radius: 0 8px 8px 0;
          }
          .DropDownList::-webkit-scrollbar-thumb {
            background: ${colors.Secondary_2};
            border-radius: 0 8px 8px 0;
          }
          }
          .ListItem{
            font-size: 12px;
            font-family: Roboto;
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            padding: 1em 1em;
            cursor: pointer;
            border-bottom: 1px solid ${colors.Secondary_4};
          }
          .singleGroup{
            font-size: 12px;
            font-family: Roboto;
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            padding: 1em 1em;
            cursor: pointer;
            
          }
          .ListItem:hover {
            background: ${colors.Primary_1};
            color: ${colors.Primary_3};
          }
          `}
      </style>
    </React.Fragment>
  );
};

export default Dropdown;
