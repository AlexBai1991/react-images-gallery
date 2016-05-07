import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';

import ImageFigure from './ImageFigure';
import * as Actions from '../actions';

class ImageFigures extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    this.imageFigure0 = this.refs.imageFigure0;
  }
  render() {
    let imagesArr = [];
    this.props.images.forEach((image, index) => {
      imagesArr.push(<ImageFigure image={image} key={index} ref={'imageFigure' + index} center={this.props.onCenter(index)} inverse={this.props.onInverse(index)} />);
    });
    return (
      <section className="image-sec">
        {imagesArr}
      </section>
    );
  }
}

export default ImageFigures;
