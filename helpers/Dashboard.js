import React, { useState, useEffect, Fragment } from "react";
import FilterSortContainer from "../components/FilterSortContainer";
import Filter from "../components/FilterSortContainer";
import SideNavBar from "../components/SideNavBar";
import ProductCardContainer from "../containers/ProductCardContainer";
import apiService from "../services/apiService";
import networkCallService from "../services/networkCallService";
import { connect } from "react-redux";
import { loadData } from "../store";
import About from "../components/About";
import AllCategoriesContainer from "../containers/AllCategoriesContainer";
import useWindowSize from "./../custom-hooks/useWindowSize";
import Profile from "../components/Profile";
import Copyright from "../components/Copyright";

function Dashboard(props) {
  const { height, width } = useWindowSize();

  let data = props.data?.data?.data;
  let shopNameList = data?.shop;
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState(false);
  const [selectedShop, setSelectedShop] = useState(shopNameList[0]);
  const [productsData, setProductsData] = useState(false);
  const [showProfileComponent, setShowProfileComponent] = useState(false);

  props.state.then((result) => {
    console.log(result);
    setProductsData(result.products);
  });

  const getMappedFilterData = (data) => {
    let categories = ["All"];
    let cities = ["All"];
    let states = ["All"];
    data.forEach((category) => {
      category.forEach((singleProduct) => {
        if (categories.indexOf(singleProduct.category) === -1) {
          categories.push(singleProduct.category);
        }
        if (cities.indexOf(singleProduct.location.city) === -1) {
          cities.push(singleProduct.location.city);
        }
        if (states.indexOf(singleProduct.location.state) === -1) {
          states.push(singleProduct.location.state);
        }
      });
    });

    let categoriesSelect = {
      itemsList: categories,
      placeholder: "Products",
      type: "category",
      key: `categories${categories.length}`,
      showPlaceholder: true,
      showDefault: false,
      handleSelect: function (value) {
        console.log(value);
      },
    };
    let citiesSelect = {
      itemsList: cities,
      placeholder: "City",
      type: "city",
      showPlaceholder: true,
      key: `cities${cities.length}`,
      showDefault: false,
      handleSelect: function (value) {
        console.log(value);
      },
    };
    let statesSelect = {
      itemsList: states,
      placeholder: "State",
      type: "state",
      showPlaceholder: true,
      key: `states${states.length}`,
      showDefault: false,
      handleSelect: function (value) {
        console.log(value);
      },
    };

    setFilterData({
      filterArray: [categoriesSelect, citiesSelect, statesSelect],
      allProducts: data,
      setProductsData: setProductsData,
    });
    setLoading(false);
  };
  const webstoreNetworkCall = async (shopName) => {
    let webstoreUrlObj = {
      url: `${apiService.BASE}${apiService.WEBSTORE}?shop_name=${shopName}`,
      type: "get",
    };

    let responseData = await networkCallService.commonApiService(
      webstoreUrlObj
    );

    console.log(responseData);
    // setOriginalProducts(responseData?.data?.data);
    props.dispatch(
      loadData({
        products: responseData?.data?.data,
        originalProducts: responseData?.data?.data,
      })
    );
    // setProductsData(responseData?.data?.data);
    getMappedFilterData(responseData?.data?.data);
  };

  //do not delete
  useEffect(() => {
    webstoreNetworkCall(selectedShop?.shop_name);
  }, [selectedShop]);

  return (
    <div className="fontRoboto">
      {!loading ? (
        <div className="dashBoardContainer flexRowStart primary2Background">
          <SideNavBar
            componentData={{
              shopNameList: shopNameList,
              selectedShop: selectedShop,
              setSelectedShop: setSelectedShop,
              filterData: filterData,
              setShowProfileComponent: setShowProfileComponent,
            }}
          />
          {showProfileComponent ? (
            <Fragment>
              <Profile componentData={data.user} />
            </Fragment>
          ) : (
            <Fragment>
              {width > 600 ? (
                <div className="flexColStart padding1">
                  {filterData && (
                    <div className="marginTB1">
                      <FilterSortContainer componentData={filterData} />
                    </div>
                  )}
                  <div className="marginTB1">
                    <About />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="allCategoriesContainer scrollY padding1 flexColStart">
                <div className="primaryFontLarge paddingTopBottom1">Edvora</div>
                {productsData && (
                  <AllCategoriesContainer
                    containerData={{ productsData: productsData }}
                  />
                )}
                
              </div>

             
            </Fragment>
          )}
        </div>
      ) : (
        ""
      )}

      <style jsx>
        {`
          .allCategoriesContainer {
            margin-top: 1.5rem;
          }
        `}
      </style>
    </div>
  );
}
function mapStateToProps(state, products) {
  console.log(state, products);
  return { state };
}

export default connect(mapStateToProps)(Dashboard);
