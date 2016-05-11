import React, { Component, PropTypes } from 'react';

export default class ControllerNavs extends Component {
  constructor(props, context) {
    super(props, context);
    this.centerImage = this.centerImage.bind(this);
  }

  centerImage(index) {
    return (e) => {
        e.preventDefault();
        this.props.center(index)();
    };
  }

  render() {
    let navs = this.props.navs.map((nav, index) => {
        let isCenter = nav.isCenter;
        let spanClass = 'nav-item';
        isCenter && (spanClass += ' active');

        return (
            <a href="" key={index} className={spanClass} onClick={this.centerImage(index)}></a>
        );
    });

    return (
      <section className="controller-sec">
        {navs}
      </section>
    );
  }
}

ControllerNavs.propTypes = {
    navs: PropTypes.array.isRequired,
    center: PropTypes.func.isRequired
};
