const API_key = `aebdd3f5c7fae4d6b3c580249b13df42`;

const data=fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi &appid=${API_key}&units=metric`)
.then(res=>res.json())
.then(data=>console.log(data))
  
console.log(data.main.temp)
