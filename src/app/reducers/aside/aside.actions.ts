import { createAction, props } from '@ngrx/store';
import { AsideState } from './aside.interface';

const group = '[AsideState]';

const ASIDE_OPENED = group + ' Opened';
const ASIDE_CLOSED = group + ' Closed';

export const asideOpened = createAction(
  ASIDE_OPENED,
  props<{ asideState: AsideState }>()
);

export const asideClosed = createAction(
  ASIDE_CLOSED,
  props<{ asideState: AsideState }>()
);
