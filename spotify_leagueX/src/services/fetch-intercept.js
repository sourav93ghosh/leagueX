import fetchIntercept from 'fetch-intercept';

const unregister = fetchIntercept.register({
    request: function (url, config) {
        const queryParam = JSON.parse(window.sessionStorage.getItem("queryParam"));
        if (queryParam.access_token) {
            config.headers = {
                'Authorization': 'Bearer ' + queryParam.access_token
            }
        }
        return [url, config];
    },
 
    requestError: function (error) {
        return Promise.reject(error);
    },
 
    response: function (response) {
        return response;
    },
 
    responseError: function (error) {
        return Promise.reject(error);
    }
});

export default unregister