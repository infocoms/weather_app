//https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid={164e800c25b161aec80f82895b73feeb}


//5 day forecast


document.getElementById("search").addEventListener("click", function () {
    const ins = document.getElementById("Cityin").value;
    const api = "http://api.openweathermap.org/data/2.5/forecast?q=" + ins + "&units=metric&APPID=187f5cff6273490bd0c8531fbde08689";
    const deg = "°";
    var img = document.getElementById("mainPic");
    var info = document.getElementById("temperaturedispInfo");
    var test = document.getElementById("Test");
    console.log(img);


    axios
        .get(api)
        .then(response => {
            var get = [];
            get.push(response.data);
            i = 0;
            info.innerHTML = response.data.list[i].weather[0].description;

            console.log(response.data);
            console.log(response.data.list[i].weather[0].description);
            iconcode = response.data.list[i].weather[0].icon;
            img.src = "http://openweathermap.org/img/w/" + iconcode + ".png";
            console.log(get);


            let D1 = [];
            let D2 = [];
            let D3 = [];
            let D4 = [];
            let D5 = [];
            let indexes = [];
            const repeated_days = [];


            for (var i = 0; i < get[0].list.length; i++) {
                date = new Date(get[0].list[i].dt_txt);
                repeated_days.push(date.getDay());
                indexes.push(i);
            }

            var daysSet = new Set(repeated_days);
            var days = Array.from(daysSet);


            var amount_counted = {};

            repeated_days.forEach(function (rep) {
                amount_counted[rep] = (amount_counted[rep] || 0) + 1;
            });

            numof = days[0];
            First_day = amount_counted[numof];

            numof = days[1];
            Second_day = amount_counted[numof];

            numof = days[2];
            Third_day = amount_counted[numof];

            numof = days[3];
            Fourth_day = amount_counted[numof];

            numof = days[4];
            Fifth_day = amount_counted[numof];


            for (i = 0; i < First_day; i++) {
                D1.push(indexes[i]);
            }
            for (i = 0; i < Second_day; i++) {
                D2.push(indexes[D1.length + i]);
            }
            for (i = 0; i < Third_day; i++) {
                D3.push(indexes[D1.length + D2.length + i]);
            }
            for (i = 0; i < Fourth_day; i++) {
                D4.push(indexes[D1.length + D2.length + D3.length + i]);
            }
            for (i = 0; i < Fifth_day; i++) {
                D5.push(indexes[D1.length + D2.length + D3.length + D4.length + i]);
            }


            function getWeekDay(date) {
                var daysOfweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                return daysOfweek[date];
            }

            function averageTmp(n, p) {
                const num1 = n * Math.pow(10, p + 1);
                const num2 = Math.floor(num1 / 10);
                if (num1 >= (num2 * 10 + 5)) {
                    return (num2 + 1) / Math.pow(10, p);
                }
                return num2 / Math.pow(10, p);
            }


            /* Which day of the week */
            day_title1c = new Date(get[0].list[D1[0]].dt_txt);
            day_title1b = day_title1c.getDay();
            day_title1 = getWeekDay(day_title1b);
            console.log("Today is = ", day_title1);


            day_title2c = new Date(get[0].list[D2[0]].dt_txt);
            day_title2b = day_title2c.getDay();
            day_title2 = getWeekDay(day_title2b);
            console.log("Tomorrow is =", day_title2);


            day_title3c = new Date(get[0].list[D3[0]].dt_txt);
            day_title3b = day_title3c.getDay();
            day_title3 = getWeekDay(day_title3b);
            console.log("day3", day_title3);


            day_title4c = new Date(get[0].list[D4[0]].dt_txt);
            day_title4b = day_title4c.getDay();
            day_title4 = getWeekDay(day_title4b);
            console.log("day4", day_title4);


            day_title5c = new Date(get[0].list[D5[0]].dt_txt);
            day_title5b = day_title5c.getDay();
            day_title5 = getWeekDay(day_title5b);
            console.log("day5", day_title5);


            sum = 0;
            for (i = 0; i < D1.length; i++) {
                sum += parseFloat(get[0].list[D1[i]].main.temp);
            }
            many = D1.length;
            day_1_tmp_b = sum / many;
            day_1_tmp = averageTmp(day_1_tmp_b, 2);

            sum = 0;
            for (i = 0; i < D2.length; i++) {
                sum += parseFloat(get[0].list[D2[i]].main.temp);
            }
            many = D2.length;
            day_2_tmp_b = sum / many;
            day_2_tmp = averageTmp(day_2_tmp_b, 2);

            sum = 0;
            for (i = 0; i < D3.length; i++) {
                sum += parseFloat(get[0].list[D3[i]].main.temp);
            }
            many = D3.length;
            day_3_tmp_b = sum / many;
            day_3_tmp = averageTmp(day_3_tmp_b, 2);

            sum = 0;
            for (i = 0; i < D4.length; i++) {
                sum += parseFloat(get[0].list[D4[i]].main.temp);
            }
            many = D4.length;
            day_4_tmp_b = sum / many;
            day_4_tmp = averageTmp(day_4_tmp_b, 2);

            sum = 0;
            for (i = 0; i < D5.length; i++) {
                sum += parseFloat(get[0].list[D5[i]].main.temp);
            }
            many = D5.length;
            day_5_tmp_b = sum / many;
            day_5_tmp = averageTmp(day_5_tmp_b, 2);

            sum = 0;
            for (i = 0; i < D1.length; i++) {
                sum += parseFloat(get[0].list[D1[i]].main.temp_min);
            }
            many = D1.length;
            day_1_tmp_min_b = sum / many;
            day_1_tmp_min = averageTmp(day_1_tmp_min_b, 2);

            sum = 0;
            for (i = 0; i < D2.length; i++) {
                sum += parseFloat(get[0].list[D2[i]].main.temp_min);
            }
            many = D2.length;
            day_2_tmp_min_b = sum / many;
            day_2_tmp_min = averageTmp(day_2_tmp_min_b, 2);

            sum = 0;
            for (i = 0; i < D3.length; i++) {
                sum += parseFloat(get[0].list[D3[i]].main.temp_min);
            }
            many = D3.length;
            day_3_tmp_min_b = sum / many;
            day_3_tmp_min = averageTmp(day_3_tmp_min_b, 2);

            sum = 0;
            for (i = 0; i < D4.length; i++) {
                sum += parseFloat(get[0].list[D4[i]].main.temp_min);
            }
            many = D4.length;
            day_4_tmp_min_b = sum / many;
            day_4_tmp_min = averageTmp(day_4_tmp_min_b, 2);

            sum = 0;
            for (i = 0; i < D5.length; i++) {
                sum += parseFloat(get[0].list[D5[i]].main.temp_min);
            }
            many = D5.length;
            day_5_tmp_min_b = sum / many;
            day_5_tmp_min = averageTmp(day_5_tmp_min_b, 2);

            sum = 0;
            for (i = 0; i < D1.length; i++) {
                sum += parseFloat(get[0].list[D1[i]].main.temp_max);
            }

            many = D1.length;
            day_1_tmp_max_b = sum / many;
            day_1_tmp_max = averageTmp(day_1_tmp_max_b, 2);

            sum = 0;
            for (i = 0; i < D2.length; i++) {
                sum += parseFloat(get[0].list[D2[i]].main.temp_max);
            }

            many = D2.length;
            day_2_tmp_max_b = sum / many;
            day_2_tmp_max = averageTmp(day_2_tmp_max_b, 2);

            sum = 0;
            for (i = 0; i < D3.length; i++) {
                sum += parseFloat(get[0].list[D3[i]].main.temp_max);
            }
            many = D3.length;
            day_3_tmp_max_b = sum / many;
            day_3_tmp_max = averageTmp(day_3_tmp_max_b, 2);

            sum = 0;
            for (i = 0; i < D4.length; i++) {
                sum += parseFloat(get[0].list[D4[i]].main.temp_max);
            }
            many = D4.length;
            day_4_tmp_max_b = sum / many;
            day_4_tmp_max = averageTmp(day_4_tmp_max_b, 2);


            for (i = 0; i < D5.length; i++) {
                sum += parseFloat(get[0].list[D5[i]].main.temp_max);
            }
            many = D5.length;
            day_5_tmp_max_b = sum / many;
            day_5_tmp_max = averageTmp(day_5_tmp_max_b, 2);





            currentTempIn = document.getElementById("temperaturedisp").innerHTML =  day_1_tmp + deg;
            currentTempMin = document.getElementById("temperaturedispMin").innerHTML = "Min "+day_1_tmp_min + deg;
            currentTempMax = document.getElementById("temperaturedispMax").innerHTML = "Max "+day_1_tmp_max + deg;
            info.innerHTML = response.data.list[i].weather[0].description;

            currentTempIn2 = document.getElementById("temperaturedisp2").innerHTML =  day_2_tmp;
            currentTempMin2 = document.getElementById("temperaturedispMin2").innerHTML = "Min "+day_2_tmp_min + deg;
            currentTempMax2 = document.getElementById("temperaturedispMax2").innerHTML = "Max "+day_2_tmp_max + deg;
            info.innerHTML = response.data.list[i].weather[0].description;

            currentTempIn3 = document.getElementById("temperaturedisp3").innerHTML =  day_3_tmp + deg;
            currentTempMin3 = document.getElementById("temperaturedispMin3").innerHTML = "Min "+ day_3_tmp_min + deg;
            currentTempMax3 = document.getElementById("temperaturedispMax3").innerHTML = "Max "+day_3_tmp_max + deg;
            info.innerHTML = response.data.list[i].weather[0].description;

            currentTempIn4 = document.getElementById("temperaturedisp4").innerHTML =  day_4_tmp + deg;
            currentTempMin4 = document.getElementById("temperaturedispMin4").innerHTML = "Min "+ day_4_tmp_min + deg;
            currentTempMax4 = document.getElementById("temperaturedispMax4").innerHTML = "Max "+day_4_tmp_max + deg;
            info.innerHTML = response.data.list[i].weather[0].description;

            currentTempIn5 = document.getElementById("temperaturedisp5").innerHTML =  day_5_tmp + deg;
            currentTempMin5 = document.getElementById("temperaturedispMin5").innerHTML = "Min "+ day_5_tmp_min + deg;
            currentTempMax5 = document.getElementById("temperaturedispMax5").innerHTML = "Max "+day_5_tmp_max + deg;
            info.innerHTML = response.data.list[i].weather[0].description;







        })
        .catch(error => {
            console.log(error);
        });
});











