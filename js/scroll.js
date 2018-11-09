function change_color(height){
    var bar=document.getElementById('tool-bar');
    var menu=document.getElementById('menu');
    var h1=document.getElementsByClassName('tip1')[0].offsetTop;
    var h2=document.getElementsByClassName('tip2')[0].offsetTop;
    var h3=document.getElementsByClassName('tip3')[0].offsetTop;
    var h4=document.getElementsByClassName('tip4')[0].offsetTop;

    if(height<h1){
        bar.style.backgroundColor='teal';
        bar.style.color='snow';
        barColor(0);
        menu.setAttribute('src','img/menu_white.png');
    }
    else if(height<h2){
        bar.style.backgroundColor='cadetblue';
        bar.style.color='snow';
        barColor(1);
        menu.setAttribute('src','img/menu_white.png');
    }
    else if(height<h3){
        bar.style.backgroundColor='tomato';
        bar.style.color='snow';
        barColor(2);
        menu.setAttribute('src','img/menu_white.png');
    }
    else if(height<h4){
        bar.style.backgroundColor='wheat';
        bar.style.color='slategray';
        barColor(3);
        menu.setAttribute('src','img/menu_grey.png');
    }
    else{
        bar.style.backgroundColor='snow';
        bar.style.color='slategray';
        barColor(4);
        menu.setAttribute('src','img/menu_grey.png');
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