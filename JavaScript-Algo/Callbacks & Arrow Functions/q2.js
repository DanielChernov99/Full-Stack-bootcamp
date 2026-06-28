const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

const getTime = (func) =>{
    const time = new Date()
    func(time)
}

getTime(returnTime)
