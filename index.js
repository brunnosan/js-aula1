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
};

//Inserindo button via querySelector com append
let button = document.createElement('button');
button.innerText = 'Outro botão';
button.setAttribute('id', 'btn2');
button.classList.add('envio');
button.addEventListener('click', function(){
  alert('Clicou no botão 2');
});
button.addEventListener('mouseover',function(){
  alert('Passou o mouse por cima do botão 2');
});
document.querySelector('#container').append(button);

//Inserindo mensagem ao deixar a página
// window.addEventListener('mouseout', function(){
//   alert('Volte aqui');
// });

//Inserindo evento pra mostrar o que está sendo digitado
// document.querySelector('#nom e').onkeyup = function(){
//   let valor = document.querySelector('#nome').value;
//   document.querySelector('#resultado').innerHTML = valor; 
// }

//Versão do mesmo código acima em ArrowFunction (a ser vista em outra aula)
//Quando se usa ID, o JS já permite referência direta (usar como variável)
nome.onkeyup = () => {
  resultado.innerHTML = nome.value;
};

//A referência direta funciona mesmo que o elemento seja criado dinamicamente
btn1.onclick = () => {
  alert(`Seja bem vindo(a) ${nome.value}`);
}