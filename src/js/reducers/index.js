import { combineReducers } from 'redux';
import images from './images';

const rootReducers = combineReducers({
  imageInfo: images
});

export default rootReducers;
