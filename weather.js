// - A page with a heading and sections separating your content

// - The page must be styled either using a CSS framework or your own custom CSS

// - You must make an API call to the service and get the weather data

// - You must accept input from the user asking for the zip code they would like the weather of

// - You must display the following data points on the page from the API:

//   Current Date, City from the zipcode, Current temperature in ferinheight, current conditions, Temp Hi/Lo

// - Host using GitHub Pages
function getWeatherData() {
    var x = document.getElementById('zip').value;
    let url = 'https://api.openweathermap.org/data/2.5/weather?zip=' + x + '&appid=4186ec99e03b98e19d1463ac32357880&units=imperial';
    getapi(url);
    document.getElementById('zip').value = '';
}
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    display(data);
}

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function display(data) {
    let date = new Date();
    let datee = date.toDateString();
    document.getElementById('currentDate').innerHTML = 'Current Date: ' + datee;
    let currentTemp = data.main.temp;
    document.getElementById('currentTemp').innerHTML = 'Current Temp: ' + currentTemp + ' \xB0F';
    let feelsLike = data.main.feels_like;
    document.getElementById('feelsLike').innerHTML = 'Feels Like: ' + feelsLike + ' \xB0F'; 
    let city = data.name;
    document.getElementById('currentCity').innerHTML = 'City: ' + city;
    let currentConditions = data.weather[0].description;
    let currentConditions2 = currentConditions.charAt(0).toUpperCase() + currentConditions.slice(1);
    document.getElementById('currentCond').innerHTML = 'Current Conditions: ' + currentConditions2;
    let humidity = data.main.humidity;
    document.getElementById('humidity').innerHTML = 'Humidity: ' + humidity + ' \xB0F';
    let tempHi = data.main.temp_max;
    document.getElementById('currentTempHi').innerHTML = 'Current Temp Highs: ' + tempHi + ' \xB0F';
    let tempLo = data.main.temp_min;
    document.getElementById('currentTempLo').innerHTML = 'Current Temp Lows: ' + tempLo + ' \xB0F';
}

function celsius () {
   
}
    


