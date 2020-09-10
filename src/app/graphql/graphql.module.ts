import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { provideApollo } from './provide-apollo';



@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: provideApollo,
      deps: [HttpLink],
    }],
})
export class GraphqlModule { }
