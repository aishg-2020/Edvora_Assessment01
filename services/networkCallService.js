const axios = require('axios');

const commonApiService = async (data) => {
    const concurrent = data?.concurrent ? data?.concurrent : false;
    const urlData = data?.urlData ? data?.urlData : [];
    let responseData = null;
    if (concurrent === true) {
        responseData = await Promise.allSettled(
            urlData?.map((urlObj) => {
                return makeSingleApiCall(urlObj);
            })
        );
    }
    else {
        responseData = makeSingleApiCall(data);
    }
    return responseData;
};

const makeSingleApiCall = (urlObj) => {
    const type = urlObj?.type ? urlObj?.type : "get";
    switch (type) {
        case "get": return getApiService(urlObj);
        case "post": return postApiService(urlObj)
        default: return getApiService(urlObj);
    }
};

const getApiService = (urlObj) => {
    console.log(urlObj);
    const url = urlObj.url;
    const headers = urlObj.headers ? urlObj.headers : {};
    return axios.get(url, { headers }).then((response) => {
        return {
            success: true,
            data: response.data,
            statusCode: response.status
        };
    }).catch((error) => {
        return {
            success: false,
            data: null,
            error: error
        }
    })
};

const postApiService = (urlObj) => {
    const url = urlObj.url;
    const body = urlObj.body;
    const headers = urlObj.headers ? urlObj.headers : {};

    return axios.post(url, body, { headers })
        .then((response) => {
            
            return {
                success: true,
                data: response.data,
                statusCode: response.status
            };
        })
        .catch((error) => {
            return {
                success: false,
                data: error
            }
        })
}
export default {
    postApiService: postApiService,
    getApiService: getApiService,
    commonApiService: commonApiService
};
