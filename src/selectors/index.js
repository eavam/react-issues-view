export const getFieldUserName = ({ fields }) => fields.userName;
export const getFieldRepoName = ({ fields }) => fields.repoName;
export const getAutocompliteList = ({ fields }) => fields.autocompliteList;
export const getAutocompliteListIsLoading = ({ fields }) => fields.loading;
export const getDisabledFieldRepoName = ({ fields }) => !fields.userName;
