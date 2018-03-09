import { compose, branch, renderComponent, mapProps, lifecycle } from 'recompose';
import AutocompleteList from './AutocompleteList';
import Loading from '../Loading';
import withConnect from '../../hocs/withConnect';
import { resetAutocompliteList } from '../../ducks/autocomplite';

export default compose(
  withConnect(['fieldRepoName'], { onReset: resetAutocompliteList }),
  lifecycle({
    componentWillUnmount() {
      const { fieldRepoName, onReset } = this.props;
      if (fieldRepoName.length < 2) onReset();
    },
  }),
  branch(({ isLoading }) => isLoading, renderComponent(Loading)),
  mapProps(({
    isLoading, onReset, fieldRepoName, ...props
  }) => ({
    ...props,
  })),
)(AutocompleteList);
