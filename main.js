const API_KEY = `e91f86aeec38c1c6325ad41f53a31835`;

const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');

const getWeather = async(city) =>{
    weather.innerHTML = `<h2> Loading.... </h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`; 
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return showWeather(data);
}

const showWeather = (data) => {
    if(data.cod === '404'){
        weather.innerHTML = `<h2> City not found!</h2>`;
        return ;
    }
    const num = data.main.temp - 273.16;
    weather.innerHTML = `
    <div>
        <img width="100px" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${(Math.round(num * 100) / 100).toFixed(1)} ℃</h2>
        <h4>${data.weather[0].main}</h4>
    </div>    
    `
}

form.addEventListener(
    "submit",
    function(event){
        // console.log(search.value);
        getWeather(search.value);
        event.preventDefault();
    }
)

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

// const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`