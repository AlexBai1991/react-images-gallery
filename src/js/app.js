'use strict';

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ImageFigures from './components/ImageFigures';
import ControllerNavs from './components/ControllerNavs';

import * as Actions from './actions';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.center = this.center.bind(this);
    this.inverse = this.inverse.bind(this);

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
  }
  
  getRandom([low, high]) {
    return Math.floor(Math.random() * (high - low) + low);
  }

  getRandomRotate() {
    return (Math.random() > 0.5 ? '' : '-') + Math.floor(Math.random() * 30);
  }
  
  center(index) {
    return () => {
      const { centerImage } = this.props.actions;
      // 好像并没有起作用。。。然而并不知道为什么
      // centerImage(index);
      this.reArrange(index);
    };
  }
  
  inverse(index) {
    return () => {
      const { inverseImage } = this.props.actions;
      inverseImage(index);
    };
  }

  reArrange(centerIndex) {
    const { imageInfo, actions } = this.props;
    let imgPosArr = imageInfo;
    const centerPos = this.Constant.centerPos;
    const hPosRange = this.Constant.hPosRange;
    const vPosRange = this.Constant.vPosRange;
    const leftSecX = hPosRange.leftSecX;
    const rightSecX = hPosRange.rightSecX;
    const hSectY = hPosRange.y;
    const vSectX = vPosRange.x;
    const topY = vPosRange.topY;
    let centerImagePosArr = imgPosArr.splice(centerIndex, 1);
    let topImageNum = Math.floor(Math.random() * 2);
    let topSpliceImageIndex = Math.floor(Math.random() * (imgPosArr.length - topImageNum));
    let topImagePosArr = imgPosArr.splice(topSpliceImageIndex, topImageNum);

    // 布局中间位置图片
    centerImagePosArr[0] = Object.assign({}, centerImagePosArr[0], {
      pos: centerPos,
      rotate: 0,
      isCenter: true
    });

    // 布局上方位置图片
    topImagePosArr.forEach((imgPos, index) => {
      imgPos.pos = {
        left: this.getRandom(vSectX),
        top: this.getRandom(topY)
      };
      imgPos.rotate = this.getRandomRotate();
      imgPos.isCenter = false;
    });

    // 布局左右两侧位置图片
    const imgPosArrLen = imgPosArr.length;
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

    const { rearrangeImages } = actions;
    rearrangeImages(imgPosArr);    
  } 
  
  componentWillMount() {
  }

  componentDidMount() {
    const stageDOM = findDOMNode(this.refs.stage);
    const stageW = stageDOM.scrollWidth;
    const stageH = stageDOM.scrollHeight;
    const halfStageW = Math.floor(stageW / 2);
    const halfStageH = Math.floor(stageH / 2);
    const imageFigureDOM = findDOMNode(this.refs.imageFigures.imageFigure0);
    const imageFigureW = imageFigureDOM.scrollWidth;
    const imageFigureH = imageFigureDOM.offsetHeight;
    const halfImageFigureW = Math.floor(imageFigureW / 2);
    const halfImageFigureH = Math.floor(imageFigureH / 2);

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
    const { imageInfo, navs, actions } = this.props;

    return (
      <section className="images-figures" ref="stage">
        <ImageFigures 
          images={imageInfo} 
          actions={actions}
          ref="imageFigures" 
          onCenter={this.center} 
          onInverse={this.inverse}
          />
        <ControllerNavs 
          navs={navs} 
          center={this.center}
          />
      </section> 
    );
  }
}

function mapStateToProps(state) {
  let navs = state.imageInfo.map((image) => {
    return { isCenter: image.isCenter };
  });
  return {
    imageInfo: state.imageInfo,
    navs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
