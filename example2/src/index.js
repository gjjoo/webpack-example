import _ from 'lodash';
import './assets/styles/imageViewer.css';

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
  image.src = 'http://img.seoul.co.kr/img/upload/2017/10/07/SSI_20171007154542_V.jpg';
  console.log(image);
  return image;
}
document.body.appendChild(componentImage());