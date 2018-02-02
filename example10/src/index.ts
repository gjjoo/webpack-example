import './assets/styles/imageViewer.scss';

interface IImageObj {
  class: string;
  src: string;
}

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'World'].join(' ');
  console.log(element);

  return element;
}
document.body.appendChild(component());

function componentImage(imageObj: IImageObj) {
  const image = document.createElement('img');
  image.className = imageObj.class;
  image.src = imageObj.src;
  console.log(image);

  return image;
}

const imageObj = {
  class: 'image',
  src: require('./assets/images/ryan.jpg'),
};

document.body.appendChild(componentImage(imageObj));
