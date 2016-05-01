import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import ImageFigures from './components/ImageFigures';
import ControllerNavs from './components/ControllerNavs';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <section className="images-figures" ref="stage">
        <ImageFigures images={this.props.data} ref="imageFigures" />
        <ControllerNavs />
      </section> 
    );
  }
}
