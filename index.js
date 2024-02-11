// JS TIMER
// Create a timer.html page
// Create input boxes which accepts time. (minutes, seconds and hours should be taken)
// have the following buttons start, pause, reset
// on start, the countdown should start
// on pause the timer should be pause
// on reset reset and stop the timer
// You can have a look at for reference. https://www.google.com/search?q=timer
let show_screen = document.getElementsByClassName('show_screen')[0]
let hower = document.getElementById('hower_input');
let minut = document.getElementById('minut_input');
let second = document.getElementById('second_input');

// for changing the display to input box

function dis_play() {
  show_screen.style.display = 'none';
  hower.style.display = 'block';
  minut.style.display = 'block';
  second.style.display = 'block';
}

show_screen.addEventListener('click', dis_play)

// start the process hear

let timer = null;

document.getElementsByClassName('start')[0].addEventListener('click', () => {
  // changing the screen to input tag
  hower.style.display = 'none';
  minut.style.display = 'none';
  second.style.display = 'none';
  show_screen.style.display = 'block';

// acces the value from user  to set timer
  let hower_value = document.getElementById('hower_input').value;
  let minut_value = document.getElementById('minut_input').value;
  let second_value = document.getElementById('second_input').value;
   let a=0;
  // show the content to the screen from starting
 let h1=document.createElement('h1');
   h1.innerText= hower_value + 'h' + '  ' + minut_value + 'm' + '  ' + second_value + ' s';
   h1.style.fontSize='larger'
   show_screen.innerHTML=h1.innerText
  show_screen.style.fontSize='larger'
  if (timer == null) {
    timer = setInterval(() => {
      a+=1;
      if(a==100){
        second_value-=1;
        a=0;
      }
      if(second_value==0){
        if(minut_value != 0){ 
        minut_value-=1;
        
      } 
      second_value=60;
    }
      if(minut_value==0){
        if(second_value==0){ 
        hower_value-=1;
        minut_value=60;
      } }
      if(hower_value==0 && minut_value==0 && second_value===0){
        h1.innerHTML='0' + '0' +' 0';
      }
      h1.innerText= hower_value + 'h' + '  ' + minut_value + 'm' + '  ' + second_value + ' s';
      h1.style.fontSize='larger'
      show_screen.innerHTML=h1.innerText
     show_screen.style.fontSize='larger'
    },10)
  }
})
document.getElementsByClassName('pause')[0].addEventListener('click',()=>{
  clearInterval(timer);
  timer=null;
})
document.getElementsByClassName('stop')[0].addEventListener('click',()=>{
  clearInterval(timer);
  timer =null;
  dis_play();
})