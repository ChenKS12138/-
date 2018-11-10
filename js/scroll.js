function change_color(height){
    var bar=document.getElementById('tool-bar');
    var nvBar=document.getElementById('navigation-bar');
    var menu=document.getElementById('menu');
    var barTitle=document.getElementById('bar-title');

    var h1=document.getElementsByClassName('tip1')[0].offsetTop-50;
    var h2=document.getElementsByClassName('tip2')[0].offsetTop-50;
    var h3=document.getElementsByClassName('tip3')[0].offsetTop-50;
    var h4=document.getElementsByClassName('tip4')[0].offsetTop-50;
    var h5=document.getElementsByClassName('tip5')[0].offsetTop-50;
    if(height!=0){
        nvBar.style.fontSize='1.2rem';
        nvBar.style.height='3rem';
        bar.style.boxShadow='';
    }
    else{
        nvBar.style.fontSize='1.5rem';
        nvBar.style.height='4rem';
        bar.style.boxShadow='none';
    }
    if(height<h1){
        bar.style.backgroundColor='teal';
        bar.style.color='snow';
        barColor(0);
        menu.setAttribute('src','img/menu_white.png');
        if(height<h1/3*2){
            barTitle.style.display='none';
        }
        else{
            barTitle.style.display='flex';
        }
        
    }
    else if(height<h2){
        bar.style.backgroundColor='cadetblue';
        bar.style.color='snow';
        barColor(1);
        menu.setAttribute('src','img/menu_white.png');
        barTitle.style.display='flex';
    }
    else if(height<h3){
        bar.style.backgroundColor='tomato';
        bar.style.color='snow';
        barColor(2);
        menu.setAttribute('src','img/menu_white.png');
        barTitle.style.display='flex';
    }
    else if(height<h4){
        bar.style.backgroundColor='wheat';
        bar.style.color='slategray';
        barColor(3);
        menu.setAttribute('src','img/menu_grey.png');
        barTitle.style.display='flex';
    }
    else if(height<h5){
        bar.style.backgroundColor='snow';
        bar.style.color='slategray';
        barColor(4);
        menu.setAttribute('src','img/menu_grey.png');
        barTitle.style.display='flex';
    }
    else{
        bar.style.backgroundColor='#ff4081';
        bar.style.color='snow';
        barColor(5);
        menu.setAttribute('src','img/menu_white.png');
        barTitle.style.display='flex';
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
    for(i=0;i<6;i++){
        bar[i].style.color='';
    }
    bar[id].style.color='black';
}





document.onscroll = function(){
    var h1=document.getElementsByClassName('tip1')[0].offsetTop-50;
    var h2=document.getElementsByClassName('tip2')[0].offsetTop-50;
    var h3=document.getElementsByClassName('tip3')[0].offsetTop-50;
    var h4=document.getElementsByClassName('tip4')[0].offsetTop-50;
    var h5=document.getElementsByClassName('tip5')[0].offsetTop-50;


    var height=getScrollTop();
    change_color(height);
    
}