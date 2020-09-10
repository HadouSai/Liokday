import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

export const ALL_LINKS_QUER = gql`
  query Profile {
    Profile {
      id,
      name
    }
  }
`;

export const ALL_LINKS_QUER2 = gql`
  query users {
    users {
      username
    }
  }
`;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  private querySubscription: Subscription;

  data: any[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: ALL_LINKS_QUER2
    }).valueChanges.subscribe((response) => {
      //this.data = response.data[`Profile`]
      console.log(response)

    })
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
