import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from 'apollo-angular/http';

// const uri = 'https://relieved-jay-42.hasura.app/v1/graphql';
const uri = 'https://liookday.herokuapp.com/graphql'

export function provideApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      'x-hasura-admin-secret': '&PCk]K=qWxTF3x3{,!:2T&',
      'authorization': localStorage.getItem('token')
    }
  }));

  const link = ApolloLink.from([basic, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  }
}
