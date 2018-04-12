function printList(){
    for (var i=1;i<101;i++){
        if (i%3==0&&i%5==0){
            document.write("FizzBuzz"+"\t\t");
        }
        else if (i%5==0){
            document.write("Buzz"+"\t\t");
        }
        else if(i%3==0){
            document.write("Fizz"+"\t\t");
        }
        
        else{
            document.write(i+"\t\t");
        }
        
    }
}

function printListAdv(limit,fizz,buzz){
    for (var i=1;i<limit+1;i++){
        if (i%3==0&&i%5==0){
            document.write(fizz+buzz+"\t\t");
        }
        else if (i%5==0){
            document.write(buzz+"\t\t");
        }
        else if(i%3==0){
            document.write(fizz+"\t\t");
        }
        
        else{
            document.write(i+"\t\t");
        }
        
    }
}