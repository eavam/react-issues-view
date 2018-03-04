import { compose } from 'recompose';
import AutocompleteInput from './AutocompleteInput';
import withConnect from '../../hocs/withConnect';

export default compose(withConnect(['isOpenContent']))(AutocompleteInput);
