import React, { Component } from 'react';

class DropdownAnchor extends Component {
  static defaultProps = {
    refPropName: 'ref',
  };

  componentDidMount() {
    if (React.Children.toArray(this.props.children).length !== 1) {
      throw new Error('DropdownAnchor need only 1 children');
    }
    this.bindUpdatePosition();
    window.addEventListener('scroll', this.bindUpdatePosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.bindUpdatePosition);
  }

  bindUpdatePosition = () => {
    this.props.updatePosition(this.$anchor.getBoundingClientRect());
  };

  bindNode = ($anchor) => {
    this.$anchor = $anchor;
  };

  render() {
    const { children, refPropName } = this.props;
    return React.cloneElement(children, {
      [refPropName]: this.bindNode,
    });
  }
}

export default DropdownAnchor;
