const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const leads = document.getElementById('leads');

document.getElementById('search-btn').addEventListener('click', function () {

    const input = document.getElementById('search-field');

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + ' &units=metric' + '&appid=0a9c5f97c5df02d8463cef8b9cc89688')
        .then(res => res.json())
        .then(data => {

            const nameValue = data['name'];
            const tempValue = data['main']['temp'];
            const descValue = data['weather'][0]['description'];


            cityName.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            leads.innerHTML = descValue;
        })

        .catch(err => alert("wrong city name"))

})

