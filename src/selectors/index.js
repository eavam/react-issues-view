export const getFieldUserName = ({ fields }) => fields.userName;
export const getFieldRepoName = ({ fields }) => fields.repoName;
export const getAutocompliteList = ({ autocomplite }) => autocomplite.autocompliteList;
export const getAutocompliteListIsLoading = ({ autocomplite }) => autocomplite.loading;
export const getDisabledFieldRepoName = ({ fields }) => !fields.userName;
export const getIsOpenContent = ({ fields }) => !!fields.repoName;
