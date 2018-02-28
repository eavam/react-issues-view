import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'react-emotion';

const modalRoot = document.body;

const Wrapper = styled('div')`
  position: fixed;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  top: ${props => `${props.bottom}px`};
  left: ${props => `${props.left}px`};
  width: ${props => `${props.width}px`};
  max-height: 16rem;
  overflow-y: scroll;
`;

class DropdownContent extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
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
    const { position } = this.props;
    return ReactDOM.createPortal(<Wrapper {...position}>{this.props.children}</Wrapper>, this.el);
  }
}

export default DropdownContent;
