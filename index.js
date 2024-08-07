var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik="7a2f4fb62fdc341f8abb70a009a605d"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())
    
    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['deacription']
        var tempature = data['main']['temp']
        var wndspeed = data['wind']['speed']

        city.innerHTML=`weather of <span>${nameval}<span>`
        temp.innerHTML = `Temperature: <span>${ convertion(tempature)} c</span>`
        description.innerHTML = `sky conditions: <span>${descrip}<span>`
        wind.innerHTML = `wind speed: <span>${windspeed} km/h<span>`


    })

    .catch(err => alert('you entered wrong city name'))

})

    
