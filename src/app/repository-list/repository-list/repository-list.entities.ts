import {IssueConnection, Language, License, Repository, RepositoryTopicConnection, StargazerConnection} from '../../../generated/graphql';

export interface RepositoryView extends Repository {
  primaryLanguage: Language;
  issues: IssueConnection;
  licenseInfo: License;
  stargazers: StargazerConnection;
  repositoryTopics: RepositoryTopicConnection;
}


