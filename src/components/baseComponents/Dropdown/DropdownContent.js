import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'react-emotion';

const modalRoot = document.body;

const Wrapper = styled('div')`
  position: fixed;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  top: ${props => `${props.position.bottom}px`};
  left: ${props => `${props.position.left}px`};
  width: ${props => `${props.position.width}px`};
  max-height: 16rem;
  overflow-y: scroll;
  z-index: ${props => props.zIndex + 1000};
`;

class DropdownContent extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.zIndex = document.body.children.length;
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const {
      children, position, isOpen, onRef, ...props
    } = this.props;

    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <Wrapper position={position} zIndex={this.zIndex} innerRef={onRef}>
        {React.cloneElement(children, props)}
      </Wrapper>,
      this.el,
    );
  }
}

export default DropdownContent;
