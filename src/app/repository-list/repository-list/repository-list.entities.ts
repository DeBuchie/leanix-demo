import {Language, Repository} from '../../../generated/graphql';

export interface RepositoryView extends Repository {
  primaryLanguage: Language;
}
