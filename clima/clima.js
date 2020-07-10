const axios = require('axios');

// 
const getClima = async (lat,lon)=>{
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a9dbc6cc3324fb6fc5adf6af03e49a7a`); 
  return resp.data.main.temp;
}

module.exports={
    getClima
}