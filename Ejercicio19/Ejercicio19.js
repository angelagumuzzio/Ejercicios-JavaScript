// Al hacer click sobre el botón de Guardar salta un alert
document.querySelector(".guardar").addEventListener("click", saveData);

function saveData() {
  alert('Los datos se han guardado con éxito');
};

// Cuando hagamos foco sobre el input del nombre el fondo será morado y cuando se lo quitemos será gris.

const inputName = document.querySelector(".nombre");

inputName.addEventListener('focus', changeColorFocus);
function changeColorFocus() {
  inputName.style.backgroundColor = '#7B49BB';
};

inputName.addEventListener('focusout', changeColorNoFocus);
function changeColorNoFocus() {
  inputName.style.backgroundColor = '#E8E8EC';
};

// Si escribimos una vocal está será roja y si es consonante será azul
const inputRandom = document.querySelector('.Letra');

inputRandom.addEventListener('keypress', checkLetter);
function checkLetter(event){
  const currentLetter = event.which;
  if (currentLetter === 97 || currentLetter === 101 || currentLetter === 105 || currentLetter === 111 || currentLetter === 117) {
    inputRandom.style.color = '#B7120D';
  } else {
    inputRandom.style.color = '#1625E5';
  }
};
