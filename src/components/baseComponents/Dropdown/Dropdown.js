import React, { Component } from 'react';
import DropdownContent from './DropdownContent';
import DropdownAnchor from './DropdownAnchor';

class Dropdown extends Component {
  static Content = DropdownContent;
  static Anchor = DropdownAnchor;

  state = {
    position: {
      top: 10,
      width: 10,
      bottom: 10,
      height: 10,
      left: 10,
    },
  };

  updatePosition = ({
    top, height, bottom, left, width,
  }) => {
    this.setState({
      position: {
        top,
        bottom,
        height,
        left,
        width,
      },
    });
  };

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, { updatePosition: this.updatePosition, ...this.state }));
  }
}

export default Dropdown;
