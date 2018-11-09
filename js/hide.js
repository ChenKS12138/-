function disp(){
    var hide=document.getElementById('hide');
    if(hide.style.display=='none'){
        OpaNum=0;
        hide.style.display="flex";
        hide.style.opacity=OpaNum;
        t=setInterval(function(){
            hide.style.opacity=OpaNum;
            OpaNum+=0.1;
            if(OpaNum>=1){
                clearInterval(t);
            }
        },25);
    }
    else{
        OpaNum=1;
        hide.style.opacity=OpaNum;
        tt=setInterval(function(){
            hide.style.opacity=OpaNum;
            OpaNum-=0.1;
            if(OpaNum<=0.1){
                clearInterval(tt);
                hide.style.display='none';
            }
        },25);
    };
}