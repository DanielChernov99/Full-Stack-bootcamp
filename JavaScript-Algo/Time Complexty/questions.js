// ------------Q1---------------------------------------------------
const getBalance = function (bankOperations) {
  let balance = 0
  for (let op of bankOperations) {
    balance += op
   }
   return balance
}
    
getBalance([-27, -43, -2400, -700, 15000, 58])

// O(n)
// when n is size of BankOperations
// but if you you know for sure that we will use this fixed size array then O(1)


// ------------Q2---------------------------------------------------
const printSome = function (complaints) {
  for (let i = 1; i < complaints.length; i = i * 2)
    console.log(complaints[i].text);
}

// O(log n)
// because we grow i by double each time with i = i * 2




// ------------Q3---------------------------------------------------
const allSides = [
  { a: 3, b: 4 },
  { a: 15, b: 21 },
  { a: 41, b: 8 },
  { a: 12, b: 6 }
]
    
const relevantSides = allSides.filter(s => s.a % 3 == 0)
for (let sides of relevantSides) {
  console.log(getHype(sides))
}
    
const getHype = function (sides) {
  let a = sides.a 
  let b = sides.b
  let sumOfSquares = a * a + b * b
  return Math.sqrt(sumOfSquares)
}


//Total is O(n) where n is the size of allSides
// relevantSides is O(n) where n size on allSides
//the for loop is O(n)*O(1)
// getHype is O(1)



// ------------Q4---------------------------------------------------
const studentAnswers = {   // size: n
  brBlds: {
    1: "a",
    2: "a",
    3: "c"
  },
  dvOna: {
    1: "a",
    2: "c",
    3: "c"
  },
  nmPrz: {
    1: "a",
    2: "b",
    3: "a"
  }
}
const studentGithubs = ["brBlds", "dvOna", "nmPrz"]  //size m
    
const distributions = { //size k
  1: {},
  2: {},
  3: {}
}
    
const getDistributions = function (studentAnswers) {
  studentGithubs.forEach(sg => {
  // runs m times where m number of students   
    let answers = studentAnswers[sg]
    // O(1) 
    Object.keys(answers).forEach(questionNumber => {
    //we have only 3 answers alayws but if change then O(q) where q number of questions
      let letterAnswer = answers[questionNumber]
      //O(1)
    
      distributions[questionNumber][letterAnswer] ?  //O(1) this chunk
        distributions[questionNumber][letterAnswer]++ :
        distributions[questionNumber][letterAnswer] = 1
    })
  })
    
  return distributions
}
    
getDistributions(studentAnswers)


// so in total we have O(m*q) but if q is fixed at 3 then we have O(m)



// ------------Q5---------------------------------------------------
const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email)) 
    
const emailManager = function () {
  let email = generateEmail()
    
  $.get('/recepients', function (recepients) {
      sendEmails(email, recepients)
  })
}
//size of recepient : n
// for every recepient we send mail once so 1*O(n)
// Total O(n)



// ------------Q6---------------------------------------------------
const findDuplicates= function(arr){
    let seen = {}
    let dupes = {}
    arr.forEach(r =>{
        seen[r] = (seen[r] || 0) +1
        if(seen[r] > 1) dupes[r] = (dupes[r] || 0) + 1
    })
    if (Object.keys(dupes).length > 0){
        console.log("There is a dupeps");
        
    }
}

// i know that is more than they asked but the complexity is the same O(n) so you can also know who dupes and how much, youre welcome





// ------------Q7---------------------------------------------------

//    _id     |name   |age    |salary
//     --------------------------------
//     ax01    |Ray    |28     |1300
//     qs84    |Lucius |31     |840
//     bg33    |Taylor |18     |2700
// 
// In reality, you have 320,000 employees, and you need to be able to find the salary of any employee very fast.

// You need to decide how you're going to store this data, such that the function findEmployeeSalary(employeeID) runs in O( 1 ) - constant time.

// Then, of course, write the findEmployeeSalary(employeeID) function.


// i will save it as key which is the id and then the value will be object with the {name,age,salary}

const findEmployeeSalary = function(employeeID){
    return workers[employeeID].salary
    
}



// ------------Q8---------------------------------------------------

// Earlier in this lesson we discussed what a binary search is and how we can use it to find something in a sorted array in O( log(n) ) time.

// Using the visuals and explanations from earlier, write a findIndex(numbers, num)function that finds the index of num in the given numbers array in O( log(n) ).

// Use the following sorted array to determine what the index of the number 2630 is - you should find it to be 86:

const findIndex = function(numbers, num){
    let left = 0
    let right = numbers.length - 1;
    let i = Math.floor(right / 2)
    while (left <= right){
        if(numbers[i] === num){
            return i;
        }
        else if(numbers[i] < num){
            left = i + 1
            i = Math.floor((right - left)/2) + left
        }
        else{
            right = i -1
            i = Math.floor((right - left)/2) + left
        }
    }
}

// ------------Q9---------------------------------------------------

// O(1) - green
// O(n) - blue
// O(logn) - yellow
// O(n^2) - red

