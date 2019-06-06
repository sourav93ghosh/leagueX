
const genericApiService = (function() {
    return {
        get: function(url) {
            return fetch(url, {
                method: 'GET'
            }).then(
                data => data.json(),
                err => console.log(err)
            )
        }
    }
})();

export default genericApiService;