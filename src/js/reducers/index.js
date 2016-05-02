import { combineReducers } from 'redux';
import images from './images';

const rootReducers = combineReducers({
  imageInfo: images
});

export default rootReducers;

/*export default function rootReducers (state = {}, action) {
  switch (action.type) {
    case 'IMAGE_CENTER': 
      return {
        imageInfo: [
          ...state.imageInfo.slice(0, action.index),
          Object.assign({}, state.imageInfo[action.index], { isCenter: true }),
          ...state.imageInfo.slice(action.index + 1)
        ]
      };
    case 'IMAGE_INVERSE': 
      return {
        imageInfo: [
          ...state.imageInfo.slice(0, action.index),
          Object.assign({}, state.imageInfo[action.index], { isInverse: !state.imageInfo[action.index].isInverse }),
          ...state.imageInfo.slice(action.index + 1)
        ]
      };
    case 'INIT_IMAGES': 
      const images = action.images;

      let imageInfo = images.map((image, index) => {
        return Object.assign({}, image, {
          pos: {
            left: 0,
            top: 0
          },
          rotate: 0,
          isCenter: false,
          isInverse: 0
        });
      });
      return {
        imageInfo
      };
    case 'REARRANGE_IMAGES': 
      return Object.assign({}, {
        imageInfo: action.images
      });
    default: 
      return state;
  }
}
*/
/*
let initialState = {
  imageInfo: [{
    pos: {
      left: 0,
      top: 0
    },
    rotate: 0,
    isCenter: false,
    isInverse: false
  }, {
  
  }]
}
 */

// test
