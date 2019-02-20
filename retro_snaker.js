window.onload = function(){


var divSn = document.getElementById("divSnId");
var divWall = document.getElementById("divWallId");
//存放生成猎物
var arrFood = [];
var arr = [divSn]; // 存储每个元素
var direction = "top"; // 默认向上移动
var flagStop = true;
var preDire = null;
var prePreDir = "top";
// 总时钟！！
var timerSn = setInterval( main,10);
//随机生成猎物的时钟
var timerRan =  setInterval(random,1000);

// main 函数
function main(){
//console.log(divSn.offsetTop+"    "+divSn.offsetLeft);

keyPressMove(direction);
isEat()
changeLoaction();
border();
isEatIt();
}
 
//判断是否吃到自己
function isEatIt(){
for(var i=2;i<arr.length;i++){

if(Math.abs(divSn.offsetTop-arr[i].offsetTop)<=0 && Math.abs(divSn.offsetLeft-arr[i].offsetLeft)<=0){
alert("GeeeeeAME OVER");
clearInterval(timerSn);
clearInterval(timerRan);
}
}
}
 
//判断是否吃掉
function isEat(){
for(var i=0;i<arrFood.length;i++){
if(Math.abs(divSn.offsetTop-arrFood[i].offsetTop)<=10 && Math.abs(divSn.offsetLeft-arrFood[i].offsetLeft)<=10){
//调用函数 长大
changeBiger(i);
// 移除food
divWall.removeChild(arrFood[i]);
// 移除数组中元素
arrFood.splice(i,1);
// 每个元素位置变化；
}
}
}
 
// 设置边界
function border(){
if(divSn.offsetTop-divWall.offsetTop<=0 || divSn.offsetTop+10-(divWall.offsetTop+divWall.offsetHeight)>=-3){
alert("GAME OVER");
clearInterval(timerSn);
clearInterval(timerRan);
}
if(divSn.offsetLeft-divWall.offsetLeft<=0 || divSn.offsetLeft+10-divWall.offsetLeft-divWall.offsetWidth>=-3){
alert("GAME OVER");
clearInterval(timerSn);
clearInterval(timerRan);
}
}
 
//随机生成猎物
function random(){
var foodTop = Math.floor(Math.random()*590)+3+"px";
var foodLeft = Math.floor(Math.random()*990)+3+"px";

var subFood = document.createElement("div");
subFood.style.width = "10px";
subFood.style.height = "10px";
subFood.style.backgroundColor = "red";
subFood.style.position = "absolute";
subFood.style.top = foodTop;
subFood.style.left = foodLeft;

divWall.appendChild(subFood);
arrFood.push(subFood);
}

// 移动每一个元素的位置
function changeLoaction(){

for(var i=arr.length-1;i>0;i--){
arr[i].style.top= arr[i-1].offsetTop+"px";
arr[i].style.left = arr[i-1].offsetLeft+"px";
}
}

// 吃一个长一个
function changeBiger(num){
var arrLen = arr.length;
var subFood = document.createElement("div");
subFood.style.width = "10px";
subFood.style.height = "10px";
subFood.style.backgroundColor = "darkblue";
subFood.style.position = "absolute";
subFood.style.top = arrFood[num].offsetTop+"px";
subFood.style.left = arrFood[num].offsetLeft+"px";
// 添加到数组中
arr.push(subFood);
divWall.appendChild(subFood);
//alert(arr.length);
}


//判断按键
document.onkeydown = function (event){
switch(event.keyCode){
case 37:{
if(direction!="right"){
direction = "left";
}
break;
}
case 38:{
if(direction!="bottom"){
direction = "top";
}
break;
}
case 39:{
if(direction!="left"){
direction = "right";
}
break;
}
case 40:{
if(direction!="top"){
direction = "bottom";
}
break;
}
case 32:{
if(direction!="space"){
preDire = direction;
}
direction = "space";
break;
}
}
}

// 暂停功能
document.onkeypress = function (event){
if(event.keyCode==32){
if(flagStop == true){
clearInterval(timerSn);
clearInterval(timerRan);
flagStop = false;
//alert(flagStop);
}else{
// 总时钟！！
direction = preDire;
//alert(direction);
timerSn = setInterval( main,10);
timerRan =setInterval(random,1000);
flagStop = true;
}
}
}

// 根据按下的键盘决定移动的方向
function keyPressMove(fangXiang){
//alert(fangXiang)
//console.log(divSn.offsetTop+"    "+divSn.offsetLeft);
switch(fangXiang){
case "top":{
divSn.style.top = divSn.offsetTop-1+"px";
break;
}
case "left":{
divSn.style.left = divSn.offsetLeft-1+"px";
break;
}
case "right":{
divSn.style.left = divSn.offsetLeft+1+"px";
break;
}
case "bottom":{
divSn.style.top = divSn.offsetTop+1+"px";
break;
}

}
}
}
