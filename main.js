const canvas = document.querySelector('#screen');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize;
let level = 0;


window.addEventListener('load',reloadScreen);
window.addEventListener('resize',reloadScreen);


function startGame(lv){
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    const mapa = maps[lv];
    const mapaRows = mapa.trim().split('\n');
    const mapaRowCol =  mapaRows.map(row => row.trim().split(''));
    console.log({mapa,mapaRows,mapaRowCol});

    for(let x=1;x<11;x++){
        for(let y=1;y<11;y++){
            game.fillText(emojis[mapaRowCol[y-1][x-1]],elementsSize*x,elementsSize*y);
        }
    }
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
