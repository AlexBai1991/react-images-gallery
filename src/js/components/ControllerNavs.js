import React, { Component, PropTypes } from 'react';

export default class ControllerNavs extends Component {
  render() {
    let navs = this.props.navs.map((nav, index) => {
        let isCenter = nav.isCenter;
        let spanClass = 'nav-item';
        isCenter && (spanClass += ' active');
        return (
            <span key={index} className={spanClass}></span>
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
    navs: PropTypes.array.isRequired
};
