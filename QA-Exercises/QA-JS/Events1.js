var person={
    name:"Ryan",
    age:24,
    occupation:"Developer"
};

function incrementAge(){
    ++person["age"];
}

function showAge(){
    window.alert("New age is "+person["age"]);
}