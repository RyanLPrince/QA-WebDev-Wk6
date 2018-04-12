function snake(num){
    while(num>1){
        if(num%3==0){
            document.write(num +" "+ num/3+"\t");
            num=num/3;
        }else if((num+1)%3==0){
            document.write("("+num+"+1)/3="+((num+1)/3)+"\t")
            num=(num+1)/3;
        }
        else{
            document.write("("+num+"-1)/3="+((num-1)/3)+"\t")
            num=(num-1)/3;
        }
        
        
    }
}