let count = 0 ;
document.querySelector("input").value = count ;

document.querySelector(".b-add").onclick = function(){
    document.querySelector("input").value = ++ count ;
}

document.querySelector(".b-del").onclick = function(){
    count = 0 ;
    document.querySelector("input").value = count ;
}


