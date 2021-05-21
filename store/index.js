import apiService from "../services/apiService";
import networkCallService from "../services/networkCallService";

const SORT_BY_DATE = "SORT_BY_DATE";
const SORT_BY_TIME = "SORT_BY_TIME";
const LOAD_DATA = "LOAD_DATA";
const FILTER_BY_VALUE = "FILTER_BY_VALUE";

export const sortByDate = (payload) => ({
  type: SORT_BY_DATE,
  payload,
});
export const filterByValue = (payload) => ({
  type: FILTER_BY_VALUE,
  payload,
});
export const sortByTime = (payload) => ({
  type: SORT_BY_TIME,
  payload,
});
export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

const initialState = {};


const sortFunction = (arr, sortKey, sortValue) => {
  let newData = arr.map((singleCategory) => {
    let newSingleCategory = [];
    if (sortValue === "Ascending") {
      newSingleCategory = singleCategory.sort(function (a, b) {
        return new Date(b[sortKey]) - new Date(a[sortKey]);
      });
    } else {
      newSingleCategory = singleCategory.sort(function (a, b) {
        return new Date(a[sortKey]) - new Date(b[sortKey]);
      });
    }

    return newSingleCategory;
  });
  return newData;
};

const filterStore = async (state = initialState, action) => {
  const result = await state;
  let currentFilterState = result?.currentFilterState;
  let sortState= result?.sortState;
  let newData = [];
  let sortValue = action?.payload?.sortValue;
  switch (action.type) {
    case SORT_BY_DATE:
      //sort date

      let dateCopyArray = [...result.products];
      newData = sortFunction(dateCopyArray,'date',sortValue)

      return {
        ...state,
        originalProducts: result.originalProducts,
        currentFilterState: currentFilterState,
        products: newData,
        sortState:{sortkey:'date',sortValue:sortValue}
      };
    case SORT_BY_TIME:
      //sort by time
      let timeCopyArray = [...result.products];
      //since now key of time is present in the products data, functionlity is similar to sort by date
      newData = sortFunction(timeCopyArray,'date',sortValue)


      return {
        ...state,
        originalProducts: result.originalProducts,
        currentFilterState: currentFilterState,
        products: newData,
        sortState:{sortkey:'date',sortValue:sortValue}
      };
    case FILTER_BY_VALUE:
      //filter by value
      let value = action.payload.value;
      let key = action.payload.key;
      console.log(key, value);

      currentFilterState = {
        ...currentFilterState,
        [key]: value,
      };

      result.originalProducts.forEach((singleCategory) => {
        let newSingleCategory = singleCategory;

        for (const key in currentFilterState) {
          if (currentFilterState[key] !== "All") {
            if (key === "category") {
              newSingleCategory = newSingleCategory.filter(
                (product) => product.category === currentFilterState[key]
              );
            } else if (key === "city") {
              newSingleCategory = newSingleCategory.filter(
                (product) => product.location.city === currentFilterState[key]
              );
            } else if (key === "state") {
              newSingleCategory = newSingleCategory.filter(
                (product) => product.location.state === currentFilterState[key]
              );
            }
          }
        }
        if (newSingleCategory.length > 0) {
          newData.push(newSingleCategory);
        }
      });

      if(!(sortState && Object.keys(sortState).length === 0 && sortState.constructor === Object))
      {
            newData = sortFunction(newData,sortState.sortKey,sortState.sortValue);
      }

      return {
        ...state,
        products: newData,
        originalProducts: result.originalProducts,
        currentFilterState: currentFilterState,
        sortState:sortState
      };

    case LOAD_DATA:
      let products = action.payload.products;
      let originalProducts = action.payload.originalProducts;
      return {
        ...state,
        products,
        originalProducts,
        currentFilterState: {},
        sortState: {},
      };

    default:
      return state;
  }
};
export default filterStore;
