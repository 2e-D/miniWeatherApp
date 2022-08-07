window.addEventListener('load',()=> {
    let long;
    let lat;
    let temperatureDesc = document.querySelector('.temperature-description');

    let tempDegree = document.querySelector('.degree')
    let locationTimeZone = document.querySelector('.location-TZ')
// gets all the classes from index.html

    if (navigator.geolocation){  // gets location
navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;

    const api = `http://api.weatherapi.com/v1/current.json?key=94a233c5fe3d4ce4859151708220608&q=Lancashire`

    fetch(api) // fetches the data from the api
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data) // can see data in the console
            const {temp_c,feelslike_f} = data.current; // pulls all the  data you need out of current
            const {tz_id} = data.location;
            const {icon} = data.current

            // sett DOM elements pulled from api

            tempDegree.textContent = temp_c;
            temperatureDesc.textContent = feelslike_f;
            locationTimeZone.textContent = tz_id;
            
        })
});

}

})