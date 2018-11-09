
function change_color(height){
    if(height<500){
        document.getElementById('tool-bar').style.backgroundColor='teal';
        document.getElementById('tool-bar').style.color='snow';
    }
    else if(height<1100){
        document.getElementById('tool-bar').style.backgroundColor='cadetblue';
        document.getElementById('tool-bar').style.color='snow';
    }
    else if(height<1800){
        document.getElementById('tool-bar').style.backgroundColor='tomato';
        document.getElementById('tool-bar').style.color='snow';
    }
    else if(height<2700){
        document.getElementById('tool-bar').style.backgroundColor='wheat';
        document.getElementById('tool-bar').style.color='slategray';
    }
    else{
        document.getElementById('tool-bar').style.backgroundColor='snow';
        document.getElementById('tool-bar').style.color='slategray';
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
document.onscroll = function(){
    console.log(getScrollTop());
    change_color(getScrollTop());
}