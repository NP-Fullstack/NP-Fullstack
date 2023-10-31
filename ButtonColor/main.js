let btn = document.getElementById('random');
let bad = document.querySelector('body');
let ar =['red','blue','yellow','black','white']


btn.addEventListener('click',function(){
    bad.style.backgroundColor = ar[Math.floor(Math.random() * 5)]

})