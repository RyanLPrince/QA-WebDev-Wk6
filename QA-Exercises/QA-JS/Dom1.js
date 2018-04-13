function createPara(t){
    var para=document.createElement("p");
    //para.setAttribute("id","paragraph");
    var text=document.createTextNode(t)
    para.appendChild(text);
    document.body.appendChild(para);
}
function writePara(){
    var t=document.getElementById("paragraph").value;
    createPara(t);
}

