const apiKey = "73a40a61ea6eb086e113ffd1662cee64";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityName = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clear"){
            weather_icon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weather_icon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weather_icon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Rain"){
            weather_icon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Mist"){
            weather_icon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weather_icon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(cityName.value);
});
