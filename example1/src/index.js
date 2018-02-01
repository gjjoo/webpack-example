import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'World'], ' ');
  // element.innerHTML = ['Hello', 'World'].join(' ');
  console.log(element);
  return element;
}

document.body.appendChild(component());