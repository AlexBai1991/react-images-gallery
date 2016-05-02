export default function (state = [], action) {
  switch (action.type) {
    case 'IMAGE_CENTER': 
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], { isCenter: true }),
        ...state.slice(action.index + 1)
      ];
    case 'IMAGE_INVERSE': 
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], { isInverse: true }),
        ...state.slice(action.index + 1)
      ];
    default: 
      return state;
  }
}

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
