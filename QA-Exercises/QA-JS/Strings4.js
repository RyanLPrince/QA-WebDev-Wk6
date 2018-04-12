function triple(word){
    var count=0;
    for(var i =0; i<word.length-2;i++){
            if (word[i]==word[i+1]&&word[i]==word[i+2]){
                ++count;
            }
    }
    window.alert(count);    
}