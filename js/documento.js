document.getElementById('bt_mostrar').addEventListener('click',mostrar);

function mostrar(){
    document.getElementById('parrafo').style.display="block";
    document.getElementById('bt_ocultar').style.display="block";
    document.getElementById('bt_mostrar').style.display="none";
}

document.getElementById('bt_ocultar').addEventListener('click',ocultar);

function ocultar(){
    document.getElementById('parrafo').style.display="none";
    document.getElementById('bt_ocultar').style.display="none";
    document.getElementById('bt_mostrar').style.display="block";
}

