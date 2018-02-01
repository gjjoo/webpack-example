import _ from 'lodash';
import './assets/styles/imageViewer.scss';
import ryan from './assets/images/ryan.jpg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'World'], ' ');
  // element.innerHTML = ['Hello', 'World'].join(' ');
  console.log(element);
  return element;
}
document.body.appendChild(component());

function componentImage() {
  const image = document.createElement('img');
  image.className = 'image';
  image.src = ryan;
  console.log(image);
  return image;
}
document.body.appendChild(componentImage());