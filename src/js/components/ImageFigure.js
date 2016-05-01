import React, { Component } from 'react';

export default class ImageFigure extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const target = e.currentTarget;
    console.log(target);
    if (this.props.arrange.isCenter) {
      this.props.inverse();
    } else {
      this.props.center();
    }
    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    let styleObj = {};
    if (this.props.arrange.pos) {
      styleObj = this.props.arrange.pos;
    }
    if (this.props.arrange.rotate) {
      styleObj['transform'] = `rotate(${this.props.arrange.rotate}deg)`;
    }
    if (this.props.arrange.isCenter) {
      styleObj['zIndex'] = 11;
    }
    let imageFigureclassName = 'image-figure';
    imageFigureclassName += this.props.arrange.isInverse ? ' is-inverse' : '';
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
