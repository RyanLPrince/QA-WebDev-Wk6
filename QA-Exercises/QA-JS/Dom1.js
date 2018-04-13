function createPara(t){
    var para=document.createElement("p");
    para.setAttribute("id","paragraphID")
    var text=document.createTextNode(t)
    para.appendChild(text);
    var element=document.getElementById("newContent");
    element.appendChild(para);
    //document.body.appendChild(text);
}
function writePara(){
    var t=document.getElementById("paragraph").value;
    createPara(t);
}

function editPara(){
    var nt=document.getElementById("newParagraph").value;
    //var temp=document.getElementById("paragraphID").id;
    //document.getElementById("paragraphID").innerHTML=nt;
    document.getElementById("newContent").innerHTML=nt;
    
}
