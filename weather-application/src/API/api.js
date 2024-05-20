const apikey = '980b9e7296a52eef29e8c9c5d120c12d';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`).then((res) => res.json()).then((json) => {
        return json;
    })
}

export default getWeather;