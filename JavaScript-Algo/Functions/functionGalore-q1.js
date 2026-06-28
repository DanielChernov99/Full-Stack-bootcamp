const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()
  capitalizedStr += str.slice(1)
  return capitalizedStr
}

const getAge = function(age){   
    if (age < 21){
        return "Underage"
    }
    else if(age > 55){
        return "55+"
    }
    else{
        return age + " year old"
    }
}

const capitalizeProfession = function(profession){
    const words = profession.split(" ")
    let result = []

    for (const word of words){
        result.push(capitalize(word))
    }

    return result.join(" ")
}

const capitalizeCatchphrase = function(catchphrase){
    return capitalize(catchphrase)
}

const combineCityAndCountry = function(city, country){
    return capitalize(city) + ", " + capitalize(country)
}

const getSummary = function(person){
  let summary = ""

  const name = capitalize(person.name)

  summary += name
  summary += ` is ${getAge(person.age)} `
  summary += capitalizeProfession(person.profession)
  summary += ` from ${combineCityAndCountry(person.city, person.country)}. `
  summary += `${name} loves to say "${capitalizeCatchphrase(person.catchphrase)}".`

  return summary
}
