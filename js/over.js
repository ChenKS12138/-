
var icons=document.getElementsByClassName("icon");
var icon_black=["img/shouye_black.png","img/qita_black.png","img/lishi_black.png","img/ganxiang_black.png","img/jingdian_black.png","img/meishi_black.png"];
var icon_white=["img/shouye_white.png","img/qita_white.png","img/lishi_white.png","img/ganxiang_white.png","img/jingdian_white.png","img/meishi_white.png"];
function over(i){
    icons[i].setAttribute("src",icon_black[i]);
}//当鼠标移入时，改变图标
function out(i){
    icons[i].setAttribute("src",icon_white[i]);
}//当鼠标移出时，改变图标