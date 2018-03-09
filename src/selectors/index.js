export const getFieldUserName = ({ fields }) => fields.userName;
export const getFieldRepoName = ({ fields }) => fields.repoName;
export const getAutocompliteIds = ({ autocomplite }) => autocomplite.autocompliteIds;
export const getAutocompliteItemById = ({ autocomplite }) => id =>
  autocomplite.response.entities.items[id];
export const getAutocompliteListIsLoading = ({ autocomplite }) => autocomplite.loading;
export const getDisabledFieldRepoName = ({ fields }) => !fields.userName;
export const getIsOpenContent = ({ fields }) => !!fields.repoName;
