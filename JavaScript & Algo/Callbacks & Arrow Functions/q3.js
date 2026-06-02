const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const logData = (data) => console.log(data) ;
    
displayData(console.error, logData, "I like to party")
