var person={
    name:"Ryan",
    age:24,
    occupation:"Developer"
}

function ageCheck(){
    
    if (person["age"]>=20 && person["age"] <=40){
        return true;
    }
    else{
        return false;
    }
}