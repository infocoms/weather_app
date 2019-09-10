//https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid={164e800c25b161aec80f82895b73feeb}


//5 day forecast


document.getElementById("search").addEventListener("click", function () {
    const ins = document.getElementById("Cityin").value;
    const api = "http://api.openweathermap.org/data/2.5/forecast?q="+ins+"&units=metric&APPID=187f5cff6273490bd0c8531fbde08689";
    const deg = "°";
    var img = document.getElementById("mainPic");
    var info = document.getElementById("temperaturedispInfo");
    console.log(img);

    axios
        .get(api)
        .then(response => {
            i = 0;
            cityName = response.data.city.name;
            currentTempIn = document.getElementById("temperaturedisp").innerHTML = response.data.list[i].main.temp+deg;
            currentTempMin = document.getElementById("temperaturedispMin").innerHTML = "Min "+response.data.list[i].main.temp_min+deg;
            currentTempMax = document.getElementById("temperaturedispMax").innerHTML = "Max "+response.data.list[i].main.temp_max+deg;
            info.innerHTML = response.data.list[i].weather[0].description;

            console.log(response.data);
            console.log(response.data.list[i].weather[0].description);
            iconcode = response.data.list[i].weather[0].icon;
            img.src = "http://openweathermap.org/img/w/" + iconcode + ".png";d
            console.log(img);
        })
        .catch(error => {
            console.log(error);
        });
} );



/*
let weatherApp = new Vue({
    el: '#app',
    data: {
        currentTemp: '',
        minTemp: '',
        maxTemp:'',
        sunrise: '',
        sunset: '',
        pressure: '',
        humidity: '',
        wind: '',
        overcast: '',
        icon: ''
    },
    methods: {
        getWeather() {
            let url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=187f5cff6273490bd0c8531fbde08689";
            axios
                .get(url)
                .then(response => {
                    this.currentTemp = response.data.main.temp;
                    this.minTemp = response.data.main.temp_min;
                    this.maxTemp = response.data.main.temp_max;
                    this.pressure = response.data.main.pressure;
                    this.humidity = response.data.main.humidity + '%';
                    this.wind = response.data.wind.speed + 'm/s';
                    this.overcast = response.data.weather[0].description;
                    this.icon = "images/" + response.data.weather[0].icon.slice(0, 2) + ".svg";
                    this.sunrise = new Date(response.data.sys.sunrise*1000).toLocaleTimeString("en-GB").slice(0,4);
                    this.sunset = new Date(response.data.sys.sunset*1000).toLocaleTimeString("en-GB").slice(0,4);
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
    beforeMount() {
        this.getWeather();
    },
});
*/







