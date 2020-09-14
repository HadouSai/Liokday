import * as asideReducer from './aside/aside.reducer';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { AsideState } from './aside/aside.interface';


export interface State {
  asideState: AsideState
}

export const reducers: ActionReducerMap<State> = {
  asideState: asideReducer.reducer,

}

