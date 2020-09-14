import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackbarComponent } from './snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationErrorsService } from 'src/app/errors/notifications-errors.service';


@NgModule({
  declarations: [SnackbarComponent],
  imports: [CommonModule, MatSnackBarModule],
  exports: [SnackbarComponent],
  providers: [],
})
export class SnackbarModule { }
