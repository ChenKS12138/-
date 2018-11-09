
function change_color(height){
    if(height<500){
        document.getElementById('tool-bar').style.backgroundColor='teal';
        document.getElementById('tool-bar').style.color='snow';
        barColor(0);
    }
    else if(height<1100){
        document.getElementById('tool-bar').style.backgroundColor='cadetblue';
        document.getElementById('tool-bar').style.color='snow';
        barColor(1);
    }
    else if(height<1800){
        document.getElementById('tool-bar').style.backgroundColor='tomato';
        document.getElementById('tool-bar').style.color='snow';
        barColor(2);
    }
    else if(height<2700){
        document.getElementById('tool-bar').style.backgroundColor='wheat';
        document.getElementById('tool-bar').style.color='slategray';
        barColor(3);
    }
    else{
        document.getElementById('tool-bar').style.backgroundColor='snow';
        document.getElementById('tool-bar').style.color='slategray';
        barColor(4);
    }
}

function getScrollTop(){ 
	var scrollTop=0; 
	if(document.documentElement&&document.documentElement.scrollTop){ 
		scrollTop=document.documentElement.scrollTop; 
	}else if(document.body){ 
		scrollTop=document.body.scrollTop; 
	} 
	return scrollTop; 
} 
function barColor(id){
    var i;
    var bar=document.getElementsByClassName("color-change");
    for(i=0;i<5;i++){
        bar[i].style.color='';
    }
    bar[id].style.color='black';
}



document.onscroll = function(){
    var height=getScrollTop();
    change_color(height);
}