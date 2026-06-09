const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}
//'Bob' or 'Ted';
let name = "Bob";

name = name.toLowerCase();
name = name[0].toUpperCase() + name.slice(1);

if(name in reservations){
    if(reservations[name].claimed == false){
        console.log(`Welcome ${name}`);
    }
    else{
        console.log("Hmm, someone already claimed this reservation");
    }
}
else{
    // 3.1
    console.log("You have no reservation but no worry prince we gotcha");
    reservations[name] = {claimed:true}
}




