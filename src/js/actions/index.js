export function init() {

}

export function center(index) {
  return {
    type: 'IMAGE_CENTER',
    index
  };
}

export function inverse(index) {
  return {
    type: 'IMAGE_INVERSE',
    index
  };
}
