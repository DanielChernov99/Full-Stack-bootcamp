const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}
// debug
// const commentOnWeather = (data) => console.log(`It's ${determineWeather(data)}`)
const commentOnWeather = (data) => `It's  ${determineWeather(data)}`


commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"
