export const getFieldUserName = ({ fields }) => fields.userName;
export const getFieldRepoName = ({ fields }) => fields.repoName;
export const getDisabledFieldRepoName = ({ fields }) => !fields.userName;
export const getIsOpenContent = ({ fields }) => !!fields.repoName;

export const getAutocompliteIds = ({ autocomplite }) => autocomplite.autocompliteIds;
export const getAutocompliteItemById = ({ autocomplite }) => id =>
  autocomplite.response.entities.items[id];
export const getAutocompliteListIsLoading = ({ autocomplite }) => autocomplite.loading;

export const getIssuesIsLoading = ({ issues }) => issues.loading;
export const getIssuesResponse = ({ issues }) => issues.issuesItems;
export const getIssuesIds = ({ issues }) => issues.issuesIds;
export const getInfinityScrollIsLoading = ({ issues }) => issues.loadingScroll;
export const getPage = ({ issues }) => issues.page;
export const getIssueById = ({ issues }) => id => issues.issuesItems[id];

export const getIssuePage = ({ issuePage }) => issuePage.issue;
export const getIssuePageIsLoading = ({ issuePage }) => issuePage.loading;
