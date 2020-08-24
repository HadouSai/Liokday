//import { link } from './types';
import gql from 'graphql-tag'


export const ALL_LINKS_QUER = gql`
  query Profile {
    Profile {
      id,
      name
    }
  }
`;

/* response interface */
export interface testInterfaceQuer {
  Profile: any;
  loading: boolean;
}
