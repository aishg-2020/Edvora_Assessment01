import React, { Fragment, useEffect, useState } from "react";
import imageUrls from "./../assets/imageUrls";
import useWindowSize from "./../custom-hooks/useWindowSize";
import FilterSortContainer from "./FilterSortContainer";
import OutsideClickAlert from "./../helpers/OutSideClickAlert";

export default function SideNavBar(props) {
  const { height, width } = useWindowSize();

  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.remove("light-mode");
    } else {
      localStorage.setItem("Theme", "light");
      document.body.classList.add("light-mode");
    }
  };
  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") return document.body.classList.add("dark-mode");
  }, []);

  const componentData = props.componentData;
  const setShowProfileComponent = componentData.setShowProfileComponent;
  const shopNameList = componentData.shopNameList;
  const setSelectedShop = componentData.setSelectedShop;
  const selectedShop = componentData.selectedShop;
  const filterData = componentData.filterData;
  const filterRef = React.createRef();
  const sideNavMenuRef = React.createRef();
  console.log(shopNameList);

  const removeSideMenu = () => {
    let sideNavMenu = sideNavMenuRef.current;
    sideNavMenu?.classList?.add("displayNone");
  };
  const ShopListContainer = ({ shopNameList }) => {
    return (
      <Fragment>
        <div className="shopNamesListContainer sideNavBackGround">
          {shopNameList.map((single) => {
            return selectedShop.shop_name === single.shop_name ? (
              <div
                key={single.shop_name}
                className="singleShopList cursorPointer marginTB1 highlighted primaryFont boldText"
                onClick={() => {
                  setSelectedShop(single);
                  setShowProfileComponent(false);
                  removeSideMenu();
                }}
              >
                {single.shop_name}
              </div>
            ) : (
              <div
                key={single.shop_name}
                className="singleShopList cursorPointer marginTB1 primaryFont boldText"
                onClick={() => {
                  setSelectedShop(single);
                  setShowProfileComponent(false);
                  removeSideMenu();
                }}
              >
                {single.shop_name}
              </div>
            );
          })}
        </div>
        <style jsx>
          {`.shopNamesListContainer{
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        .singleShopList {
            padding:1rem;
            font-size: 22px;
        }

        `}
        </style>
      </Fragment>
    );
  };

  const MobileViewShopListContainer = ({ shopNameList }) => {
    return (
      <div
        style={{ width: "50vw", height: "95vh" }}
        className="flexColStart sideNavBackGround"
      >
        <div className="flexRowSpc padding1">
          <div className="primaryFont font17">Edvora</div>
          <div>
            <img
              className="whiteIcon"
              onClick={removeSideMenu}
              src={imageUrls.hamburgerIcon}
            />
          </div>
        </div>
        <ShopListContainer shopNameList={shopNameList} />;
        <style jsx>
          {`
            .whiteIcon {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              filter: invert(99%) sepia(99%) saturate(2%) hue-rotate(351deg)
                brightness(102%) contrast(101%);
              width: 1.5rem;
              height: 1.5rem;
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <Fragment>
      {width > 600 ? (
        <div className="sideNavBar sideNavBackGround">
          <div className="cursorPointer">
            <img
              onClick={handleChange}
              className="edvoraLogo"
              src={imageUrls.edvoraLogo}
            />
          </div>
          <hr className="primaryHr" />
          <div className="flexColSpc">
            <ShopListContainer shopNameList={shopNameList} />
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "0",
                left: "0",
              }}
              className="cursorPointer"
            >
              <img
                onClick={() => {
                  setShowProfileComponent(true);
                }}
                className="profileIconLarge circularImage"
                src={imageUrls.thomYorkeProfile}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="navBarTop primary2Background flexRowSpc alignCenter">
          {/* <div className="flexRowSpc"> */}
          <div className="flexRowStart">
            <div className="hamburger cursorPointer">
              <img
                className="whiteIcon"
                onClick={() => {
                  let sideNavMenu = sideNavMenuRef.current;
                  sideNavMenu.classList.remove("displayNone");
                }}
                src={imageUrls.hamburgerIcon}
              />
              <span
                ref={sideNavMenuRef}
                className="sideMenuToolTip displayNone"
              >
                <MobileViewShopListContainer shopNameList={shopNameList} />
              </span>
            </div>
            <div className="primaryFont font20">Dashboard</div>
          </div>
          <div style={{padding: '0 1rem'}} className="flexRowStart alignCenter">
            <div className="filter ">
              <img
                onClick={() => {
                  let filter = filterRef.current;
                  console.log(filter);
                  filter.classList.toggle("displayNone");
                  // filter.classList.toggle("visibilityVisible");
                }}
                className="filterIcon cursorPointer"
                src={imageUrls.filterIcon}
              />
              <OutsideClickAlert
                handleOutsideClick={() => {
                  console.log("clicked");
                  let filter = filterRef.current;
                  filter.classList.add("displayNone");
                }}
              >
                <span ref={filterRef} className="toolTip displayNone">
                  {filterData && (
                    <div className="marginTB1">
                      <FilterSortContainer componentData={filterData} />
                    </div>
                  )}
                </span>
              </OutsideClickAlert>
            </div>

            <div className="">
              <img
                onClick={() => {
                  setShowProfileComponent(true);
                }}
                className="profileIcon circularImage"
                src={imageUrls.thomYorkeProfile}
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      )}
      <style jsx>
        {`
          .navBarTop {
            position: fixed;
            top: 0;
            width: 100%;
            display: flex;
            padding: 1rem 0.5rem;
            z-index: 50;
          }
          .filter {
            position: relative;
            // order:1;
          }
          .visibilityHidden {
            visibility: hidden;
          }
          .visibilityVisible {
            visibility: visible;
          }
          .displayNone {
            display: none;
          }
          .hamburger {
            position: relative;
          }
          .sideMenuToolTip {
            order: 2;
            padding: 0.5rem 0.5rem;
            position: absolute;
            z-index: 100;
            top: -1rem;
            left: 0;
          }
          .toolTip {
            order: 2;
            padding: 0.5rem 0.5rem;
            /* Position the tooltip */
            position: absolute;
            z-index: 100;
            top: 150%;
            right: 0%;
          }
          .filterIcon {
            height: 1rem;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            filter: invert(99%) sepia(99%) saturate(2%) hue-rotate(351deg)
              brightness(102%) contrast(101%);
          }
          .whiteIcon {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            filter: invert(99%) sepia(99%) saturate(2%) hue-rotate(351deg)
              brightness(102%) contrast(101%);
            width: 1.5rem;
            height: 1.5rem;
          }
          .navBarIcon {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            width: 2.5rem;
            height: 1.5rem;
          }

          .sideNavBar {
            width: 200px;
            padding: 1rem;

            text-align: center;
            height: 100vh;
            top: 0;
            position: sticky;
            z-index: 50;
          }
          .edvoraLogo {
            width: 30px;
            margin: 1rem;
          }

          @media screen and (max-width: 600px) {
            .sideNavBar {
              height: 60px;
              width: 100%;
              display: flex;
              flex-direction: row;
            }
            .shopNamesListContainer {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </Fragment>
  );
}
