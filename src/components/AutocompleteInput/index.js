import { compose, withHandlers, withState, mapProps, lifecycle } from 'recompose';
import AutocompleteInput from './AutocompleteInput';
import withConnect from '../../hocs/withConnect';

let node$ = null;

export default compose(
  withConnect(['isOpenContent']),
  withState('isOpen', 'isOpenUpdate', false),
  withHandlers({
    onRef: () => (ref) => {
      node$ = ref;
    },

    handlerBlur: props => (event) => {
      if (node$ && node$.contains(event.target)) {
        props.isOpenUpdate(false);
      }
    },

    onFocus: props => () => {
      props.isOpenUpdate(true);
    },
  }),
  lifecycle({
    componentDidMount() {
      document.addEventListener('click', this.props.handlerBlur);
    },

    componentWillUnmount() {
      document.removeEventListener('click', this.props.handlerBlur);
    },
  }),
  mapProps(({ isOpen, isOpenContent, ...props }) => ({
    isOpen: isOpen && isOpenContent,
    ...props,
  })),
)(AutocompleteInput);
