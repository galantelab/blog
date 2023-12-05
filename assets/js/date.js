//
// date.js: update dynamically the date
//

function getFormattedCurDate() {
  const date = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('pt-BR', options);
}

function updateDate() {
  const element = document.getElementById('curDate');
  if (element) {
    element.textContent = getFormattedCurDate();
  }
}

window.onload = function() {
  updateDate();
};
