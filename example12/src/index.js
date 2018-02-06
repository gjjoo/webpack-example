import './assets/styles/imageViewer.scss';
import ryan from './assets/images/ryan.jpg';
import MySharedTemplate from './shared/my-shared-template.hbs';

function component() {
  const templateData = {
    items: [
      { name: 'A', age: 34 },
      { name: 'B', age: 40 },
    ],
  };
  const element = MySharedTemplate(templateData);
  console.log(element);

  return element;
}
document.body.insertAdjacentHTML('beforeend', component());

function componentImage() {
  const image = document.createElement('img');
  image.className = 'image';
  image.src = ryan;
  console.log(image);

  return image;
}
document.body.appendChild(componentImage());
