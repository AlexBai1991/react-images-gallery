import React from 'react';
import { render } from 'react-dom';

import App from './app';

const IMAGES = [{
  desc: '图片1',
  imageUrl: '//img.alicdn.com/imgextra/i3/2428574094/TB2nnUgmpXXXXbgXXXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '图片2',
  imageUrl: '//img.alicdn.com/imgextra/i3/256780581/TB2mozHmpXXXXbFXpXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '图片3',
  imageUrl: '//img.alicdn.com/imgextra/i1/97456466/TB2jcIampXXXXX9XXXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '图片4',
  imageUrl: '//img.alicdn.com/imgextra/i3/63247110/TB2amnGmpXXXXaoXpXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '',
  imageUrl: '//img.alicdn.com/imgextra/i3/612762391/TB2GYlUmpXXXXaDXXXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '',
  imageUrl: '//img.alicdn.com/imgextra/i1/71513572/TB2w2DxmXXXXXa.XpXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '',
  imageUrl: '//img.alicdn.com/imgextra/i4/71513572/TB23y2xmXXXXXa6XpXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '',
  imageUrl: '//img.alicdn.com/imgextra/i2/612762391/TB26iMXmpXXXXatXXXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '',
  imageUrl: '//img.alicdn.com/imgextra/i1/106207503/TB2KrI4mVXXXXXXXpXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '',
  imageUrl: '//img.alicdn.com/imgextra/i1/167983944/TB2v3kCmFXXXXaHXpXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '',
  imageUrl: '//img.alicdn.com/imgextra/i3/808724521/TB2cbYwmFXXXXcyXpXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '',
  imageUrl: '//img.alicdn.com/imgextra/i3/63790814/TB2TyqRmFXXXXclXXXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '',
  imageUrl: '//img.alicdn.com/imgextra/i4/28078254/TB2rH2emFXXXXcLXXXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}, {
  desc: '',
  imageUrl: '//img.alicdn.com/imgextra/i2/909190383/TB29KyGmFXXXXafXXXXXXXXXXXX_!!0-ifashion.jpg_350x350'
}];

render(
  <App data={IMAGES} />,
  document.querySelector('#app')
);
