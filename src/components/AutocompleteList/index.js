import { compose, branch, renderComponent, mapProps, lifecycle } from 'recompose';
import AutocompleteList from './AutocompleteList';
import Loading from '../Loading';
import withConnect from '../../hocs/withConnect';
import { resetAutocompliteList } from '../../ducks/autocomplite';

export default compose(
  withConnect(['fieldUserName'], { onReset: resetAutocompliteList }),
  lifecycle({
    componentWillUnmount() {
      const { fieldUserName, onReset } = this.props;
      if (fieldUserName.length < 2) onReset();
    },
  }),
  branch(({ isLoading }) => isLoading, renderComponent(Loading)),
  mapProps(({
    isLoading, onReset, fieldUserName, ...props
  }) => props),
)(AutocompleteList);
