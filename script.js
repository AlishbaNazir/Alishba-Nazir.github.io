<!-- ================= script.js ================= -->
AOS.init({once:true});


const text = ["Full Stack Developer","AI & ML Enthusiast","React Native Developer"];
let index = 0, char = 0;
const typing = document.querySelector('.typing');


function type(){
if(char < text[index].length){
typing.textContent += text[index].charAt(char);
char++; setTimeout(type,100);
} else setTimeout(erase,1500);
}
function erase(){
if(char > 0){
typing.textContent = text[index].substring(0,char-1);
char--; setTimeout(erase,60);
} else{ index = (index+1)%text.length; setTimeout(type,300); }
}
type();
