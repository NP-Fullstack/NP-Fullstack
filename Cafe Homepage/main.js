let cafeMake =document.getElementById('Cafe-make');
let resetBtn =document.getElementById('reset-btn');
let  ourService =document.getElementById('OurService-btn');
let moreBtn = document.getElementById('More-button');
let imgCafe =document.getElementById('img-preview')
let  UserName = document.getElementById('UserName');
let  password = document.getElementById('Password');
let  btnInput =document.getElementById('btn-Input');







ourService.addEventListener('click', function(){
    console.log('Active Form')
    console.log('Fill the form')
    imgCafe.style.zIndex = 0 ;

   
})

resetBtn.addEventListener('click', function(){
    imgCafe.style.zIndex = 1 ;
    console.log('Off the   form');
    console.log('form street');
});

// Apis rest with   fech











