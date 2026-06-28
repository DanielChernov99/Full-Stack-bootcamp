let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},
  { name : "Alice" , id: 7 , age: null},
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}
  ]

employeesArr.forEach(u =>{
    let idCheck = u.id ?? "missing"
    let ageCheck = u.age ?? "missing"
    if (idCheck === "missing" || ageCheck === "missing"){
        console.log(`${u.name} has missing data`);
    }

})
