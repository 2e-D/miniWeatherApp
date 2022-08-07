window.addEventListener('load',()=> {
    let long;
    let lat;
    let temperatureDesc = document.querySelector('.temperature-description');

    let tempDegree = document.querySelector('.degree')
    let locationTimeZone = document.querySelector('.LocationTZ')
    if (navigator.geolocation){  // gets location
navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;

    const api = `http://api.weatherapi.com/v1/current.json?key=94a233c5fe3d4ce4859151708220608&q=London`

    fetch(api) // fetches the data from the api
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            const {temp_c,text} = data.current; // pulls all the  data you need out of current
        })
});

}

})