function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'World'].join(' ');
  console.log(element);
  return element;
}
document.body.appendChild(component());