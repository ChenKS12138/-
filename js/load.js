function display(){
    var b=document.body;
    var Opanum=0;
    b.style.opacity=Opanum;
    ttt=setInterval(function(){
        b.style.opacity=Opanum;
        Opanum+=0.1;
        if(Opanum>=1){
            clearInterval(ttt);
        }
    },25);
}
