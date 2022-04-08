const inText = document.getElementById('carta-texto');
const btGerarCarta = document.getElementById('criar-carta');
const outElementDady = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

function createClass() {
  const style = Math.floor(Math.random() * 3);
  const size = Math.floor(Math.random() * 3);
  const rotation = Math.floor(Math.random() * 2);
  const inclination = Math.floor(Math.random() * 2);
  const addStyleClass = `${inclinationGroup[inclination]} ${styleGroup[style]} ${sizeGroup[size]}
  ${rotationGroup[rotation]}`;

  return addStyleClass;
}

function createSpas(palavra) {
  const word = document.createElement('span');
  outElementDady.appendChild(word);
  word.textContent = palavra;
  word.className = createClass();
}

function createWords() {
  outElementDady.innerText = '';
  const inTextValue = inText.value.split(' ');
  contador.innerText = inTextValue.length;
  if (inText.value === '' || inText.value === ' ') {
    outElementDady.textContent = 'Por favor, digite o conteúdo da carta.';
  }
  for (let i = 0; i < inTextValue.length; i += 1) {
    createSpas(inTextValue[i]);
  }
}

btGerarCarta.addEventListener('click', createWords);
outElementDady.addEventListener('click', (event) => {
  event.target.className = createClass();
});
