
const resourceFactoryProvider = (function() {
    const BASE_URL = 'https://api.spotify.com/v1';
    return {
        artists: BASE_URL + '/artists',
        albums: BASE_URL + '/albums',
        search: BASE_URL + '/search',
        audioFeatures: BASE_URL + '/audio-features'
    }
})();

export default resourceFactoryProvider;