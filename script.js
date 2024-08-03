let next = document.getElementById('next');
let prev = document.getElementById('prev');

let fullscreen = document.querySelector('.main');
let screenlist = document.querySelector('.main .list');
let thumbnaillist = document.querySelector('.main .thumbnail');

next.onclick = function(){
    slider('next');
}
prev.onclick = function(){
    slider('prev');
}
let timeRunning =3000;
let runTimeOut;
function slider(type){
    let screenItem = document.querySelectorAll('.main .list .item');
    let thumbnailItem = document.querySelectorAll('.main .thumbnail .item');
    if(type==='next'){
        screenlist.appendChild(screenItem[0]);
        thumbnaillist.appendChild(thumbnailItem[0]);
        fullscreen.classList.add('next');
    }
    else{
        screenlist.prepend(screenItem[screenItem.length-1]);
        thumbnaillist.prepend(thumbnailItem[thumbnailItem.length-1]);
        fullscreen.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        fullscreen.classList.remove('next');
        fullscreen.classList.remove('prev');
    }, timeRunning);
}