exports.id = "store_index_js";
exports.ids = ["store_index_js"];
exports.modules = {

/***/ "./services/apiService.js":
/*!********************************!*\
  !*** ./services/apiService.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const apiService = {
  BASE: 'https://assessment.api.vweb.app/',
  LOGIN: 'login',
  WEBSTORE: 'store'
};
/* harmony default export */ __webpack_exports__["default"] = (apiService);

/***/ }),

/***/ "./services/networkCallService.js":
/*!****************************************!*\
  !*** ./services/networkCallService.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(/*! axios */ "axios");

const commonApiService = async data => {
  const concurrent = data !== null && data !== void 0 && data.concurrent ? data === null || data === void 0 ? void 0 : data.concurrent : false;
  const urlData = data !== null && data !== void 0 && data.urlData ? data === null || data === void 0 ? void 0 : data.urlData : [];
  let responseData = null;

  if (concurrent === true) {
    responseData = await Promise.allSettled(urlData === null || urlData === void 0 ? void 0 : urlData.map(urlObj => {
      return makeSingleApiCall(urlObj);
    }));
  } else {
    responseData = makeSingleApiCall(data);
  }

  return responseData;
};

const makeSingleApiCall = urlObj => {
  const type = urlObj !== null && urlObj !== void 0 && urlObj.type ? urlObj === null || urlObj === void 0 ? void 0 : urlObj.type : "get";

  switch (type) {
    case "get":
      return getApiService(urlObj);

    case "post":
      return postApiService(urlObj);

    default:
      return getApiService(urlObj);
  }
};

const getApiService = urlObj => {
  console.log(urlObj);
  const url = urlObj.url;
  const headers = urlObj.headers ? urlObj.headers : {};
  return axios.get(url, {
    headers
  }).then(response => {
    return {
      success: true,
      data: response.data,
      statusCode: response.status
    };
  }).catch(error => {
    return {
      success: false,
      data: null,
      error: error
    };
  });
};

const postApiService = urlObj => {
  const url = urlObj.url;
  const body = urlObj.body;
  const headers = urlObj.headers ? urlObj.headers : {};
  return axios.post(url, body, {
    headers
  }).then(response => {
    return {
      success: true,
      data: response.data,
      statusCode: response.status
    };
  }).catch(error => {
    return {
      success: false,
      data: error
    };
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  postApiService: postApiService,
  getApiService: getApiService,
  commonApiService: commonApiService
});

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortByDate": function() { return /* binding */ sortByDate; },
/* harmony export */   "filterByValue": function() { return /* binding */ filterByValue; },
/* harmony export */   "sortByTime": function() { return /* binding */ sortByTime; },
/* harmony export */   "loadData": function() { return /* binding */ loadData; }
/* harmony export */ });
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/apiService */ "./services/apiService.js");
/* harmony import */ var _services_networkCallService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/networkCallService */ "./services/networkCallService.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SORT_BY_DATE = "SORT_BY_DATE";
const SORT_BY_TIME = "SORT_BY_TIME";
const LOAD_DATA = "LOAD_DATA";
const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const sortByDate = payload => ({
  type: SORT_BY_DATE,
  payload
});
const filterByValue = payload => ({
  type: FILTER_BY_VALUE,
  payload
});
const sortByTime = payload => ({
  type: SORT_BY_TIME,
  payload
});
const loadData = payload => ({
  type: LOAD_DATA,
  payload
});
const initialState = {};

const sortFunction = (arr, sortKey, sortValue) => {
  let newData = arr.map(singleCategory => {
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
  var _action$payload;

  const result = await state;
  let currentFilterState = result === null || result === void 0 ? void 0 : result.currentFilterState;
  let sortState = result === null || result === void 0 ? void 0 : result.sortState;
  let newData = [];
  let sortValue = action === null || action === void 0 ? void 0 : (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.sortValue;

  switch (action.type) {
    case SORT_BY_DATE:
      //sort date
      let dateCopyArray = [...result.products];
      newData = sortFunction(dateCopyArray, 'date', sortValue);
      return _objectSpread(_objectSpread({}, state), {}, {
        originalProducts: result.originalProducts,
        currentFilterState: currentFilterState,
        products: newData,
        sortState: {
          sortkey: 'date',
          sortValue: sortValue
        }
      });

    case SORT_BY_TIME:
      //sort by time
      let timeCopyArray = [...result.products]; //since now key of time is present in the products data, functionlity is similar to sort by date

      newData = sortFunction(timeCopyArray, 'date', sortValue);
      return _objectSpread(_objectSpread({}, state), {}, {
        originalProducts: result.originalProducts,
        currentFilterState: currentFilterState,
        products: newData,
        sortState: {
          sortkey: 'date',
          sortValue: sortValue
        }
      });

    case FILTER_BY_VALUE:
      //filter by value
      let value = action.payload.value;
      let key = action.payload.key;
      console.log(key, value);
      currentFilterState = _objectSpread(_objectSpread({}, currentFilterState), {}, {
        [key]: value
      });
      result.originalProducts.forEach(singleCategory => {
        let newSingleCategory = singleCategory;

        for (const key in currentFilterState) {
          if (currentFilterState[key] !== "All") {
            if (key === "category") {
              newSingleCategory = newSingleCategory.filter(product => product.category === currentFilterState[key]);
            } else if (key === "city") {
              newSingleCategory = newSingleCategory.filter(product => product.location.city === currentFilterState[key]);
            } else if (key === "state") {
              newSingleCategory = newSingleCategory.filter(product => product.location.state === currentFilterState[key]);
            }
          }
        }

        if (newSingleCategory.length > 0) {
          newData.push(newSingleCategory);
        }
      });

      if (!(sortState && Object.keys(sortState).length === 0 && sortState.constructor === Object)) {
        newData = sortFunction(newData, sortState.sortKey, sortState.sortValue);
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        products: newData,
        originalProducts: result.originalProducts,
        currentFilterState: currentFilterState,
        sortState: sortState
      });

    case LOAD_DATA:
      let products = action.payload.products;
      let originalProducts = action.payload.originalProducts;
      return _objectSpread(_objectSpread({}, state), {}, {
        products,
        originalProducts,
        currentFilterState: {},
        sortState: {}
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (filterStore);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Nlc21lbnQwMS8uL3NlcnZpY2VzL2FwaVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYXNzZXNtZW50MDEvLi9zZXJ2aWNlcy9uZXR3b3JrQ2FsbFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYXNzZXNtZW50MDEvLi9zdG9yZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcGlTZXJ2aWNlIiwiQkFTRSIsIkxPR0lOIiwiV0VCU1RPUkUiLCJheGlvcyIsInJlcXVpcmUiLCJjb21tb25BcGlTZXJ2aWNlIiwiZGF0YSIsImNvbmN1cnJlbnQiLCJ1cmxEYXRhIiwicmVzcG9uc2VEYXRhIiwiUHJvbWlzZSIsImFsbFNldHRsZWQiLCJtYXAiLCJ1cmxPYmoiLCJtYWtlU2luZ2xlQXBpQ2FsbCIsInR5cGUiLCJnZXRBcGlTZXJ2aWNlIiwicG9zdEFwaVNlcnZpY2UiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiaGVhZGVycyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJzdGF0dXNDb2RlIiwic3RhdHVzIiwiY2F0Y2giLCJlcnJvciIsImJvZHkiLCJwb3N0IiwiU09SVF9CWV9EQVRFIiwiU09SVF9CWV9USU1FIiwiTE9BRF9EQVRBIiwiRklMVEVSX0JZX1ZBTFVFIiwic29ydEJ5RGF0ZSIsInBheWxvYWQiLCJmaWx0ZXJCeVZhbHVlIiwic29ydEJ5VGltZSIsImxvYWREYXRhIiwiaW5pdGlhbFN0YXRlIiwic29ydEZ1bmN0aW9uIiwiYXJyIiwic29ydEtleSIsInNvcnRWYWx1ZSIsIm5ld0RhdGEiLCJzaW5nbGVDYXRlZ29yeSIsIm5ld1NpbmdsZUNhdGVnb3J5Iiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImZpbHRlclN0b3JlIiwic3RhdGUiLCJhY3Rpb24iLCJyZXN1bHQiLCJjdXJyZW50RmlsdGVyU3RhdGUiLCJzb3J0U3RhdGUiLCJkYXRlQ29weUFycmF5IiwicHJvZHVjdHMiLCJvcmlnaW5hbFByb2R1Y3RzIiwic29ydGtleSIsInRpbWVDb3B5QXJyYXkiLCJ2YWx1ZSIsImtleSIsImZvckVhY2giLCJmaWx0ZXIiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJsb2NhdGlvbiIsImNpdHkiLCJsZW5ndGgiLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUc7QUFDZkMsTUFBSSxFQUFDLGtDQURVO0FBRWZDLE9BQUssRUFBQyxPQUZTO0FBR2ZDLFVBQVEsRUFBQztBQUhNLENBQW5CO0FBS0EsK0RBQWVILFVBQWYsRTs7Ozs7Ozs7Ozs7O0FDTEEsTUFBTUksS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFELENBQXJCOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLE1BQU9DLElBQVAsSUFBZ0I7QUFDckMsUUFBTUMsVUFBVSxHQUFHRCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLElBQUFBLElBQUksQ0FBRUMsVUFBTixHQUFtQkQsSUFBbkIsYUFBbUJBLElBQW5CLHVCQUFtQkEsSUFBSSxDQUFFQyxVQUF6QixHQUFzQyxLQUF6RDtBQUNBLFFBQU1DLE9BQU8sR0FBR0YsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixJQUFBQSxJQUFJLENBQUVFLE9BQU4sR0FBZ0JGLElBQWhCLGFBQWdCQSxJQUFoQix1QkFBZ0JBLElBQUksQ0FBRUUsT0FBdEIsR0FBZ0MsRUFBaEQ7QUFDQSxNQUFJQyxZQUFZLEdBQUcsSUFBbkI7O0FBQ0EsTUFBSUYsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQ3JCRSxnQkFBWSxHQUFHLE1BQU1DLE9BQU8sQ0FBQ0MsVUFBUixDQUNqQkgsT0FEaUIsYUFDakJBLE9BRGlCLHVCQUNqQkEsT0FBTyxDQUFFSSxHQUFULENBQWNDLE1BQUQsSUFBWTtBQUNyQixhQUFPQyxpQkFBaUIsQ0FBQ0QsTUFBRCxDQUF4QjtBQUNILEtBRkQsQ0FEaUIsQ0FBckI7QUFLSCxHQU5ELE1BT0s7QUFDREosZ0JBQVksR0FBR0ssaUJBQWlCLENBQUNS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QUFSLENBQWlCaEIsS0FBakIsS0FBMkJHLGtCQUFrQixDQUFDUSxHQUFELENBRHhDLENBQXBCO0FBR0Q7QUFDRjtBQUNGOztBQUNELFlBQUlqQixpQkFBaUIsQ0FBQ3dCLE1BQWxCLEdBQTJCLENBQS9CLEVBQWtDO0FBQ2hDMUIsaUJBQU8sQ0FBQzJCLElBQVIsQ0FBYXpCLGlCQUFiO0FBQ0Q7QUFDRixPQXZCRDs7QUF5QkEsVUFBRyxFQUFFVSxTQUFTLElBQUlnQixNQUFNLENBQUNDLElBQVAsQ0FBWWpCLFNBQVosRUFBdUJjLE1BQXZCLEtBQWtDLENBQS9DLElBQW9EZCxTQUFTLENBQUNrQixXQUFWLEtBQTBCRixNQUFoRixDQUFILEVBQ0E7QUFDTTVCLGVBQU8sR0FBR0osWUFBWSxDQUFDSSxPQUFELEVBQVNZLFNBQVMsQ0FBQ2QsT0FBbkIsRUFBMkJjLFNBQVMsQ0FBQ2IsU0FBckMsQ0FBdEI7QUFDTDs7QUFFRCw2Q0FDS1MsS0FETDtBQUVFTSxnQkFBUSxFQUFFZCxPQUZaO0FBR0VlLHdCQUFnQixFQUFFTCxNQUFNLENBQUNLLGdCQUgzQjtBQUlFSiwwQkFBa0IsRUFBRUEsa0JBSnRCO0FBS0VDLGlCQUFTLEVBQUNBO0FBTFo7O0FBUUYsU0FBS3hCLFNBQUw7QUFDRSxVQUFJMEIsUUFBUSxHQUFHTCxNQUFNLENBQUNsQixPQUFQLENBQWV1QixRQUE5QjtBQUNBLFVBQUlDLGdCQUFnQixHQUFHTixNQUFNLENBQUNsQixPQUFQLENBQWV3QixnQkFBdEM7QUFDQSw2Q0FDS1AsS0FETDtBQUVFTSxnQkFGRjtBQUdFQyx3QkFIRjtBQUlFSiwwQkFBa0IsRUFBRSxFQUp0QjtBQUtFQyxpQkFBUyxFQUFFO0FBTGI7O0FBUUY7QUFDRSxhQUFPSixLQUFQO0FBekZKO0FBMkZELENBakdEOztBQWtHQSwrREFBZUQsV0FBZixFIiwiZmlsZSI6InN0b3JlX2luZGV4X2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpU2VydmljZSA9IHtcclxuICAgIEJBU0U6J2h0dHBzOi8vYXNzZXNzbWVudC5hcGkudndlYi5hcHAvJyxcclxuICAgIExPR0lOOidsb2dpbicsXHJcbiAgICBXRUJTVE9SRTonc3RvcmUnXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXBpU2VydmljZTsiLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcblxyXG5jb25zdCBjb21tb25BcGlTZXJ2aWNlID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGNvbmN1cnJlbnQgPSBkYXRhPy5jb25jdXJyZW50ID8gZGF0YT8uY29uY3VycmVudCA6IGZhbHNlO1xyXG4gICAgY29uc3QgdXJsRGF0YSA9IGRhdGE/LnVybERhdGEgPyBkYXRhPy51cmxEYXRhIDogW107XHJcbiAgICBsZXQgcmVzcG9uc2VEYXRhID0gbnVsbDtcclxuICAgIGlmIChjb25jdXJyZW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmVzcG9uc2VEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxyXG4gICAgICAgICAgICB1cmxEYXRhPy5tYXAoKHVybE9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VTaW5nbGVBcGlDYWxsKHVybE9iaik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlc3BvbnNlRGF0YSA9IG1ha2VTaW5nbGVBcGlDYWxsKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxufTtcclxuXHJcbmNvbnN0IG1ha2VTaW5nbGVBcGlDYWxsID0gKHVybE9iaikgPT4ge1xyXG4gICAgY29uc3QgdHlwZSA9IHVybE9iaj8udHlwZSA/IHVybE9iaj8udHlwZSA6IFwiZ2V0XCI7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiZ2V0XCI6IHJldHVybiBnZXRBcGlTZXJ2aWNlKHVybE9iaik7XHJcbiAgICAgICAgY2FzZSBcInBvc3RcIjogcmV0dXJuIHBvc3RBcGlTZXJ2aWNlKHVybE9iailcclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gZ2V0QXBpU2VydmljZSh1cmxPYmopO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0QXBpU2VydmljZSA9ICh1cmxPYmopID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHVybE9iaik7XHJcbiAgICBjb25zdCB1cmwgPSB1cmxPYmoudXJsO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHVybE9iai5oZWFkZXJzID8gdXJsT2JqLmhlYWRlcnMgOiB7fTtcclxuICAgIHJldHVybiBheGlvcy5nZXQodXJsLCB7IGhlYWRlcnMgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiByZXNwb25zZS5zdGF0dXNcclxuICAgICAgICB9O1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvclxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07XHJcblxyXG5jb25zdCBwb3N0QXBpU2VydmljZSA9ICh1cmxPYmopID0+IHtcclxuICAgIGNvbnN0IHVybCA9IHVybE9iai51cmw7XHJcbiAgICBjb25zdCBib2R5ID0gdXJsT2JqLmJvZHk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gdXJsT2JqLmhlYWRlcnMgPyB1cmxPYmouaGVhZGVycyA6IHt9O1xyXG5cclxuICAgIHJldHVybiBheGlvcy5wb3N0KHVybCwgYm9keSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiByZXNwb25zZS5zdGF0dXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZXJyb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcG9zdEFwaVNlcnZpY2U6IHBvc3RBcGlTZXJ2aWNlLFxyXG4gICAgZ2V0QXBpU2VydmljZTogZ2V0QXBpU2VydmljZSxcclxuICAgIGNvbW1vbkFwaVNlcnZpY2U6IGNvbW1vbkFwaVNlcnZpY2VcclxufTtcclxuIiwiaW1wb3J0IGFwaVNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVNlcnZpY2VcIjtcclxuaW1wb3J0IG5ldHdvcmtDYWxsU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvbmV0d29ya0NhbGxTZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBTT1JUX0JZX0RBVEUgPSBcIlNPUlRfQllfREFURVwiO1xyXG5jb25zdCBTT1JUX0JZX1RJTUUgPSBcIlNPUlRfQllfVElNRVwiO1xyXG5jb25zdCBMT0FEX0RBVEEgPSBcIkxPQURfREFUQVwiO1xyXG5jb25zdCBGSUxURVJfQllfVkFMVUUgPSBcIkZJTFRFUl9CWV9WQUxVRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvcnRCeURhdGUgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBTT1JUX0JZX0RBVEUsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeVZhbHVlID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogRklMVEVSX0JZX1ZBTFVFLFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc29ydEJ5VGltZSA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IFNPUlRfQllfVElNRSxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvYWREYXRhID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogTE9BRF9EQVRBLFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcblxyXG5cclxuY29uc3Qgc29ydEZ1bmN0aW9uID0gKGFyciwgc29ydEtleSwgc29ydFZhbHVlKSA9PiB7XHJcbiAgbGV0IG5ld0RhdGEgPSBhcnIubWFwKChzaW5nbGVDYXRlZ29yeSkgPT4ge1xyXG4gICAgbGV0IG5ld1NpbmdsZUNhdGVnb3J5ID0gW107XHJcbiAgICBpZiAoc29ydFZhbHVlID09PSBcIkFzY2VuZGluZ1wiKSB7XHJcbiAgICAgIG5ld1NpbmdsZUNhdGVnb3J5ID0gc2luZ2xlQ2F0ZWdvcnkuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiW3NvcnRLZXldKSAtIG5ldyBEYXRlKGFbc29ydEtleV0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1NpbmdsZUNhdGVnb3J5ID0gc2luZ2xlQ2F0ZWdvcnkuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShhW3NvcnRLZXldKSAtIG5ldyBEYXRlKGJbc29ydEtleV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3U2luZ2xlQ2F0ZWdvcnk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld0RhdGE7XHJcbn07XHJcblxyXG5jb25zdCBmaWx0ZXJTdG9yZSA9IGFzeW5jIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RhdGU7XHJcbiAgbGV0IGN1cnJlbnRGaWx0ZXJTdGF0ZSA9IHJlc3VsdD8uY3VycmVudEZpbHRlclN0YXRlO1xyXG4gIGxldCBzb3J0U3RhdGU9IHJlc3VsdD8uc29ydFN0YXRlO1xyXG4gIGxldCBuZXdEYXRhID0gW107XHJcbiAgbGV0IHNvcnRWYWx1ZSA9IGFjdGlvbj8ucGF5bG9hZD8uc29ydFZhbHVlO1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU09SVF9CWV9EQVRFOlxyXG4gICAgICAvL3NvcnQgZGF0ZVxyXG5cclxuICAgICAgbGV0IGRhdGVDb3B5QXJyYXkgPSBbLi4ucmVzdWx0LnByb2R1Y3RzXTtcclxuICAgICAgbmV3RGF0YSA9IHNvcnRGdW5jdGlvbihkYXRlQ29weUFycmF5LCdkYXRlJyxzb3J0VmFsdWUpXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG9yaWdpbmFsUHJvZHVjdHM6IHJlc3VsdC5vcmlnaW5hbFByb2R1Y3RzLFxyXG4gICAgICAgIGN1cnJlbnRGaWx0ZXJTdGF0ZTogY3VycmVudEZpbHRlclN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RzOiBuZXdEYXRhLFxyXG4gICAgICAgIHNvcnRTdGF0ZTp7c29ydGtleTonZGF0ZScsc29ydFZhbHVlOnNvcnRWYWx1ZX1cclxuICAgICAgfTtcclxuICAgIGNhc2UgU09SVF9CWV9USU1FOlxyXG4gICAgICAvL3NvcnQgYnkgdGltZVxyXG4gICAgICBsZXQgdGltZUNvcHlBcnJheSA9IFsuLi5yZXN1bHQucHJvZHVjdHNdO1xyXG4gICAgICAvL3NpbmNlIG5vdyBrZXkgb2YgdGltZSBpcyBwcmVzZW50IGluIHRoZSBwcm9kdWN0cyBkYXRhLCBmdW5jdGlvbmxpdHkgaXMgc2ltaWxhciB0byBzb3J0IGJ5IGRhdGVcclxuICAgICAgbmV3RGF0YSA9IHNvcnRGdW5jdGlvbih0aW1lQ29weUFycmF5LCdkYXRlJyxzb3J0VmFsdWUpXHJcblxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBvcmlnaW5hbFByb2R1Y3RzOiByZXN1bHQub3JpZ2luYWxQcm9kdWN0cyxcclxuICAgICAgICBjdXJyZW50RmlsdGVyU3RhdGU6IGN1cnJlbnRGaWx0ZXJTdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogbmV3RGF0YSxcclxuICAgICAgICBzb3J0U3RhdGU6e3NvcnRrZXk6J2RhdGUnLHNvcnRWYWx1ZTpzb3J0VmFsdWV9XHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEZJTFRFUl9CWV9WQUxVRTpcclxuICAgICAgLy9maWx0ZXIgYnkgdmFsdWVcclxuICAgICAgbGV0IHZhbHVlID0gYWN0aW9uLnBheWxvYWQudmFsdWU7XHJcbiAgICAgIGxldCBrZXkgPSBhY3Rpb24ucGF5bG9hZC5rZXk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGtleSwgdmFsdWUpO1xyXG5cclxuICAgICAgY3VycmVudEZpbHRlclN0YXRlID0ge1xyXG4gICAgICAgIC4uLmN1cnJlbnRGaWx0ZXJTdGF0ZSxcclxuICAgICAgICBba2V5XTogdmFsdWUsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXN1bHQub3JpZ2luYWxQcm9kdWN0cy5mb3JFYWNoKChzaW5nbGVDYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdTaW5nbGVDYXRlZ29yeSA9IHNpbmdsZUNhdGVnb3J5O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdXJyZW50RmlsdGVyU3RhdGUpIHtcclxuICAgICAgICAgIGlmIChjdXJyZW50RmlsdGVyU3RhdGVba2V5XSAhPT0gXCJBbGxcIikge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcImNhdGVnb3J5XCIpIHtcclxuICAgICAgICAgICAgICBuZXdTaW5nbGVDYXRlZ29yeSA9IG5ld1NpbmdsZUNhdGVnb3J5LmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmNhdGVnb3J5ID09PSBjdXJyZW50RmlsdGVyU3RhdGVba2V5XVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImNpdHlcIikge1xyXG4gICAgICAgICAgICAgIG5ld1NpbmdsZUNhdGVnb3J5ID0gbmV3U2luZ2xlQ2F0ZWdvcnkuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QubG9jYXRpb24uY2l0eSA9PT0gY3VycmVudEZpbHRlclN0YXRlW2tleV1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJzdGF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgbmV3U2luZ2xlQ2F0ZWdvcnkgPSBuZXdTaW5nbGVDYXRlZ29yeS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5sb2NhdGlvbi5zdGF0ZSA9PT0gY3VycmVudEZpbHRlclN0YXRlW2tleV1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdTaW5nbGVDYXRlZ29yeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBuZXdEYXRhLnB1c2gobmV3U2luZ2xlQ2F0ZWdvcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZighKHNvcnRTdGF0ZSAmJiBPYmplY3Qua2V5cyhzb3J0U3RhdGUpLmxlbmd0aCA9PT0gMCAmJiBzb3J0U3RhdGUuY29uc3RydWN0b3IgPT09IE9iamVjdCkpXHJcbiAgICAgIHtcclxuICAgICAgICAgICAgbmV3RGF0YSA9IHNvcnRGdW5jdGlvbihuZXdEYXRhLHNvcnRTdGF0ZS5zb3J0S2V5LHNvcnRTdGF0ZS5zb3J0VmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RzOiBuZXdEYXRhLFxyXG4gICAgICAgIG9yaWdpbmFsUHJvZHVjdHM6IHJlc3VsdC5vcmlnaW5hbFByb2R1Y3RzLFxyXG4gICAgICAgIGN1cnJlbnRGaWx0ZXJTdGF0ZTogY3VycmVudEZpbHRlclN0YXRlLFxyXG4gICAgICAgIHNvcnRTdGF0ZTpzb3J0U3RhdGVcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIExPQURfREFUQTpcclxuICAgICAgbGV0IHByb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQucHJvZHVjdHM7XHJcbiAgICAgIGxldCBvcmlnaW5hbFByb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQub3JpZ2luYWxQcm9kdWN0cztcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0cyxcclxuICAgICAgICBvcmlnaW5hbFByb2R1Y3RzLFxyXG4gICAgICAgIGN1cnJlbnRGaWx0ZXJTdGF0ZToge30sXHJcbiAgICAgICAgc29ydFN0YXRlOiB7fSxcclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJTdG9yZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==