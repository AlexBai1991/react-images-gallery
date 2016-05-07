import React, { Component } from 'react';

export default class ImageFigure extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const target = e.currentTarget;
    console.log(target);
    if (this.props.image.isCenter) {
      this.props.inverse();
    } else {
      this.props.center();
    }
    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    let styleObj = {};
    if (this.props.image.pos) {
      styleObj.left = this.props.image.pos.left;
      styleObj.top = this.props.image.pos.top;
    }
    if (this.props.image.rotate) {
      styleObj['transform'] = `rotate(${this.props.image.rotate}deg)`;
    }
    if (this.props.image.isCenter) {
      styleObj['zIndex'] = 11;
    }
    console.log(styleObj);
    let imageFigureclassName = 'image-figure';
    imageFigureclassName += this.props.image.isInverse ? ' is-inverse' : '';
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
