import { createSelector } from 'reselect';

export const getFieldUserName = ({ fields }) => fields.userName;
export const getFieldRepoName = ({ fields }) => fields.repoName;
export const getAutocompliteIds = ({ autocomplite }) => autocomplite.autocompliteIds;
export const getAutocompliteItemById = ({ autocomplite }) => id =>
  autocomplite.response.entities.items[id];
export const getAutocompliteListIsLoading = ({ autocomplite }) => autocomplite.loading;
export const getDisabledFieldRepoName = ({ fields }) => !fields.userName;
export const getIsOpenContent = ({ fields }) => !!fields.repoName;

export const getIssuesIsLoading = ({ issues }) => issues.loading;
export const getIssuesResponse = ({ issues }) => issues.response;
export const getIssuesIds = ({ issues }) => issues.issuesIds;

export const getIssues = createSelector([getIssuesResponse, getIssuesIds], (response, ids) => {
  if (!response) return [];

  const { items } = response.entities;
  return ids.map(id => items[id]);
});
