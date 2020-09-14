import { createReducer, Action, on } from '@ngrx/store';
import { AsideState } from './aside.interface';
import { asideClosed, asideOpened } from './aside.actions';



const initialState: AsideState = {
  opened: false
}

const AsideReducer = createReducer(
  initialState,
  on(asideClosed, (state, { asideState }) => ({ ...state, opened: asideState.opened })),
  on(asideOpened, (state, { asideState }) => ({ ...state, opened: asideState.opened })),
)

export function reducer(state: AsideState | undefined, action: Action) { return AsideReducer(state, action); }
