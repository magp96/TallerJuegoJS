const up = document.querySelector('#up');
const down = document.querySelector('#down');
const right = document.querySelector('#right');
const left = document.querySelector('#left');
const canvas = document.querySelector('#screen');
const game = canvas.getContext('2d');
const playerPos = {
    x: undefined,
    y: undefined
};
let canvasSize;
let elementsSize;
let level = 0;


window.addEventListener('load',reloadScreen);
window.addEventListener('resize',reloadScreen);
window.addEventListener('keydown',(event)=>{
    const kName = event.key;
    switch(kName){
        case 'ArrowUp':
            forUp();
            break;
        case 'ArrowDown':
            forDown();
            break;
        case 'ArrowLeft':
            forLeft();
            break;
        case 'ArrowRight':
            forRight();
            break;
        default:

            break;
    }
});
up.addEventListener('click',forUp);
//kUp.addEventListener('click',forUp);
down.addEventListener('click',forDown);
right.addEventListener('click',forRight);
left.addEventListener('click',forLeft);

function forUp(){
    console.log('Click up');
    playerPos.x = playerPos.x-1;

}
function forRight(){
    console.log('Click Right');
}

function forLeft(){
    console.log('Click left');
}
function forDown(){
    console.log('Click down');
}

function startGame(lv){
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    const mapa = maps[lv];
    const mapaRows = mapa.trim().split('\n');
    const mapaRowCol =  mapaRows.map(row => row.trim().split(''));

    mapaRowCol.forEach((row, rowId) => {
        row.forEach((col, colId) => {
            const emoji = emojis[col];
            const posX = elementsSize* (colId+1);
            const posY = elementsSize* (rowId+1);
            game.fillText(emoji,posX, posY);
            if(col == 'O'){
                playerPos.x=posX;
                playerPos.y=posY;
                game.fillText(emojis['PLAYER'],posX,posY);
            }
        });
    });
}


function reloadScreen(){
    let sW = window.innerWidth;
    let sH = window.innerHeight;
    if(sW<sH){
        canvasSize = sW*0.8;
        canvas.setAttribute('width',canvasSize);
        canvas.setAttribute('height',canvasSize)
    }else{
        canvasSize = sH*0.8;
        canvas.setAttribute('width',canvasSize);
        canvas.setAttribute('height',canvasSize);
    }

    elementsSize = (canvasSize/10);
    startGame(level);
}
