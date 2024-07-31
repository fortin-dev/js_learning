function changeColor (){
    const code = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6 ; i++){
        color+= code[Math.floor(Math.random()*16)];
    }
    return color;
}

let interval;

const startChange = function (){
    if(!interval){
        interval = setInterval(() => {
            document.body.style.backgroundColor = changeColor();
        }, 1000);
    }
};

const stopChange = function(){
    clearInterval(interval);
    interval = null;
};

document.querySelector('#start').addEventListener('click',startChange);
document.querySelector('#stop').addEventListener('click',stopChange);