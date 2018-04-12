var person={
    name:"--",
    age:0,
    occupation:"--"
}
function createPerson(){
    person.name=document.getElementById("name").value;
    person.age=document.getElementById("age").value;
    person.occupation=document.getElementById("occupation").value;
    window.alert(person.name+" "+ person.age+" "+person.occupation);
}
