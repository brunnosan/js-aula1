//alert('Estou conectado');

//Inserindo texto dinamicamente no HTML
document.write('<h1 id="t1">Hello world</h1>');
document.write('<h1>document write</h1>');
document.getElementById('container').innerHTML += '<h1>getElementById</h1>';
document.querySelector('#container').innerHTML += '<h1>querySelector</h1>';
document.getElementById('container').style.color = 'Red';

//Inserindo button via querySelector com HTML
document.querySelector('.containerClass').innerHTML += '<button id="btn1" class="envio">Click me</button>';
document.querySelector('#btn1').onclick = function(){
  alert('Clicou no botão 1');
}

//Inserindo button via querySelector com append
let button = document.createElement('button');
button.innerText = 'Outro botão';
button.setAttribute('id', 'btn2');
button.classList.add('envio');
document.querySelector('#container').append(button);
