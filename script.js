function highlight() {
    //Write your code here
const highlight	=document.getElementsByTagName("strong")
for(let i = 0; i < highlight.length; i++) {
        highlight[i].style.color = "green";
    }	


}


function return_normal() {
    //Write your code here
const highlight =document.getElementsByTagName("strong")
for(let i = 0; i < highlight.length; i++) {
        highlight[i].style.color = "black";
    }
    
}
