import join from 'lodash/join';

function component() {
  const element = document.createElement('div');
  element.innerHTML = join(['Hello', 'World'], ' ');
  // element.innerHTML = ['Hello', 'World'].join(' ');
  console.log(element);
  return element;
}
document.body.appendChild(component());