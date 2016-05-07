export function initImages(images) {
  return {
    type: 'INIT_IMAGES',
    images
  }
}

export function centerImage(index) {
  return {
    type: 'CENTER_IMAGE',
    index
  };
}

export function inverseImage(index) {
  return {
    type: 'INVERSE_IMAGE',
    index
  };
}

export function rearrangeImages(images) {
  return {
    type: 'REARRANGE_IMAGES',
    images
  };
}
