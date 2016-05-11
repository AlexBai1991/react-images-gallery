'use strict';

import React, { Component, PropTypes } from 'react';

import ImageFigure from './ImageFigure';

class ImageFigures extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.imageFigure0 = this.refs.imageFigure0;
  }

  render() {
    let imagesArr = this.props.images.map((image, index) => {
      return (
        <ImageFigure 
          image={image} 
          key={index} 
          ref={'imageFigure' + index} 
          center={this.props.onCenter(index)}
          inverse={this.props.onInverse(index)}
          />
      );
    });

    return (
      <section className="image-sec">
        {imagesArr}
      </section>
    );
  }
}
ImageFigures.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageFigures;
