import { compose, mapProps } from 'recompose';
import AutocompleteItem from './AutocompleteItem';
import withConnect from '../../hocs/withConnect';
import { requestIssues } from '../../ducks/issues';

export default compose(
  withConnect(['autocompliteItemById'], { onClick: requestIssues }),
  mapProps(({ id, onClick, autocompliteItemById }) => ({
    onClick,
    ...autocompliteItemById(id),
  })),
)(AutocompleteItem);
