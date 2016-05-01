import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import ImageFigure from './ImageFigure';

export default class ImageFigures extends Component {
  constructor(props) {
    super(props);
    // Constant
    this.Constant = {
      centerPos: {
        left: 0,
        top: 0
      },
      hPosRange: {
        leftSecX: [0, 0],
        rightSecX: [0, 0],
        y: [0, 0]
      },
      vPosRange: {
        x: [0, 0],
        topY: [0, 0]
      }
    };
    // State
    this.state = {
      imgPosArr: []
    };  
  }
  getRandom([low, high]) {
    return Math.floor(Math.random() * (high - low) + low);
  }
  getRandomRotate() {
    return (Math.random() > 0.5 ? '' : '-') + Math.floor(Math.random() * 30);
  }
  center(index) {
    return () => {
      this.reArrange(index);
    };
  }
  inverse(index) {
    return () => {
      let imgPosArr = this.state.imgPosArr;
      imgPosArr[index].isInverse = !imgPosArr[index].isInverse;
      this.setState({
        imgPosArr
      });
    };
  }
  reArrange(centerIndex) {
    let imgPosArr = this.state.imgPosArr;
    const centerPos = this.Constant.centerPos,
      hPosRange = this.Constant.hPosRange,
      vPosRange = this.Constant.vPosRange,
      leftSecX = hPosRange.leftSecX,
      rightSecX = hPosRange.rightSecX,
      hSectY = hPosRange.y,
      vSectX = vPosRange.x,
      topY = vPosRange.topY;
    let centerImagePosArr = imgPosArr.splice(centerIndex, 1),
      topImageNum = Math.floor(Math.random() * 2),
      topSpliceImageIndex = Math.floor(Math.random() * (imgPosArr.length - topImageNum)), 
      topImagePosArr = imgPosArr.splice(topSpliceImageIndex, topImageNum);
    // 布局中间位置图片
    centerImagePosArr[0] = {
      pos: centerPos,
      rotate: 0,
      isCenter: true
    };
    console.log(topImageNum);
    // 布局上方位置图片
    topImagePosArr.forEach((imgPos, index) => {
      imgPos.pos = {
        left: this.getRandom(vSectX),
        top: this.getRandom(topY)
      };
      imgPos.rotate = this.getRandomRotate();
      imgPos.isCenter = false;
    });
    const imgPosArrLen = imgPosArr.length;
    // 布局左右两侧位置图片
    imgPosArr.forEach((imgPos, index) => {
      let leftOrRightSecX = null;
      if (index < imgPosArrLen / 2) {
        leftOrRightSecX = leftSecX;
      } else {
        leftOrRightSecX = rightSecX;
      }
      imgPos.pos = {
        left: this.getRandom(leftOrRightSecX),
        top: this.getRandom(hSectY)
      };
      imgPos.rotate = this.getRandomRotate();
      imgPos.isCenter = false;
    });
    if (topImagePosArr && topImagePosArr[0]) {
      imgPosArr.splice(topSpliceImageIndex, 0, topImagePosArr[0]);
    }
    imgPosArr.splice(centerIndex, 0, centerImagePosArr[0]);
    // 设置state状态，触发重新渲染
    this.setState({
      imgPosArr
    });
  } 
  componentDidMount() {
    const stageDOM = findDOMNode(this).parentNode;
    const stageW = stageDOM.scrollWidth,
      stageH = stageDOM.scrollHeight,
      halfStageW = Math.floor(stageW / 2),
      halfStageH = Math.floor(stageH / 2);
    const imageFigureDOM = findDOMNode(this.refs.imageFigure0);
    const imageFigureW = imageFigureDOM.scrollWidth,
      imageFigureH = imageFigureDOM.offsetHeight,
      halfImageFigureW = Math.floor(imageFigureW / 2),
      halfImageFigureH = Math.floor(imageFigureH / 2);
    this.Constant.centerPos = {
      left: halfStageW - halfImageFigureW,
      top: halfStageH - halfImageFigureH
    };
    this.Constant.hPosRange = {
      leftSecX: [0 - halfImageFigureW, halfStageW - halfImageFigureW * 3],
      rightSecX: [halfStageW + halfImageFigureW, stageW - halfImageFigureW],
      y: [0 - halfImageFigureH, stageH - halfImageFigureH]
    };
    this.Constant.vPosRange = {
      x: [halfStageW - imageFigureW, halfStageW],
      topY: [0 - halfImageFigureH, halfStageH - halfImageFigureH * 3]
    };
    this.reArrange(1);
  }
  render() {
    let imagesArr = [];
    this.props.images.forEach((image, index) => {
      if (!this.state.imgPosArr[index]) {
        this.state.imgPosArr[index] = {
          pos: {
            left: 0,
            top: 0
          },
          rotate: 0,
          isCenter: false,
          isInverse: false
        };
      }
      imagesArr.push(<ImageFigure image={image} arrange={this.state.imgPosArr[index]} key={index} ref={'imageFigure' + index} inverse={this.inverse(index)} center={this.center(index)} />);
    });
    return (
      <section className="image-sec">
        {imagesArr}
      </section>
    );
  }
}