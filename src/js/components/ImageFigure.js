'use strict';

import React, { Component } from 'react';

export default class ImageFigure extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // 取消默认行为，阻止冒泡
    e.preventDefault();
    e.stopPropagation();

    const target = e.currentTarget;
    if (this.props.image.isCenter) {
      this.props.inverse();
    } else {
      this.props.center();
    }
  }

  render() {
    let styleObj = {};
    if (this.props.image.pos) {
      styleObj.left = this.props.image.pos.left;
      styleObj.top = this.props.image.pos.top;
    }
    if (this.props.image.rotate) {
      styleObj.transform = `rotate(${this.props.image.rotate}deg)`;
      styleObj.WebkitTransform = `rotate(${this.props.image.rotate}deg)`;
    }
    if (this.props.image.isCenter) {
      styleObj.zIndex = 11;
    }

    let imageFigureclassName = 'image-figure';
    imageFigureclassName += this.props.image.isInverse ? ' is-inverse' : '';
    imageFigureclassName += this.props.image.isCenter ? ' is-center' : '';
    
    return (
      <figure className={imageFigureclassName} style={styleObj} onClick={this.handleClick} >
        <img src={this.props.image.imageUrl} alt={this.props.image.desc} />
        <figcaption>
          <h2 className="image-title">{this.props.image.desc}</h2>
          <div className="image-back">
            <p>{this.props.image.desc}</p>
          </div>
        </figcaption>
      </figure>
    );
  }
}
