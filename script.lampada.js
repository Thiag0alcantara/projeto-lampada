let lampada = window.document.getElementById('lamp')
let lampon = window.document.getElementById('lig')
let lampoff = window.document.getElementById('des')

function verfLamp(){
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function turnon(){
    if( !verfLamp() ){

        lamp.src = 'ligada.jpg'
    }
}


function turnoff(){
    if( !verfLamp() ){
        
        lamp.src = `desligada.jpg` 
    }
}

function lampbroken(){
    lamp.src = 'quebrada.jpg'
}
lampon.addEventListener('click',turnon);
lampoff.addEventListener('click',turnoff);
lampada.addEventListener('mouseover',turnon);
lampada.addEventListener('mouseleave',turnoff);
lampada.addEventListener('dblclick',lampbroken);

