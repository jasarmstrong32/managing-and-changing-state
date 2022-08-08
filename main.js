$ = (q) => {
  const els = document.querySelectorAll(q);
  if (els.length > 1) {
    return els;
  } else if (els.length = 1) {
    return els[0];
  }
}

state = {
  name: 'Some Name'
}

function renderDOM() {
  $('#app').innerHTML = '';
  $('#app').innerHTML = `
  <button class="pretty" id="btn">${state.name}</button>
  `;
}

function setState(callback) {
  callback();
  renderDOM();
}

// setTimeout(() => {
//   setState(() => {
//     state.name = 'Some Other Name';
//   });
// }, 3000);

$('#changer').onclick = () => {
  setState(() => {
    state.name = 'Yet Another Name'
  });
}

renderDOM();