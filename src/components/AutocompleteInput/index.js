import { compose, withHandlers, withState, mapProps } from 'recompose';
import AutocompleteInput from './AutocompleteInput';
import withConnect from '../../hocs/withConnect';

export default compose(
  withConnect(['isOpenContent']),
  withState('isOpen', 'isOpenUpdate', false),
  withHandlers({
    onBlur: props => () => {
      props.isOpenUpdate(false);
    },
    onFocus: props => () => {
      props.isOpenUpdate(true);
    },
  }),
  mapProps(({ isOpen, isOpenContent, ...props }) => ({
    isOpen: isOpen && isOpenContent,
    ...props,
  })),
)(AutocompleteInput);
