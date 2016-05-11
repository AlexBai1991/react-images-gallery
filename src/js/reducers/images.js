'use strict';

const initialState = [{
  imageUrl: '',
  desc: '',
  pos: {
    left: 0,
    top: 0
  },
  rotate: 0,
  isCenter: false,
  isInverse: false
}];

export default function images(state = initialState, action) {
  switch (action.type) {
    // 初始化图片信息
    case 'INIT_IMAGES':
      const images = action.images;
      return images.map((image, index) => {
        return Object.assign({}, image, {
          pos: {
            left: 0,
            top: 0
          },
          rotate: 0,
          isCenter: false,
          isInverse: false
        });
      });
    case 'REARRANGE_IMAGES': 
      return [...action.images];
    case 'CENTER_IMAGE':
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], { isCenter: !state[action.index].isCenter }),
        ...state.slice(action.index + 1)
      ];
    case 'INVERSE_IMAGE': 
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], { isInverse: !state[action.index].isInverse }),
        ...state.slice(action.index + 1)
      ];
    default: 
      return state;
  }
}
