
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationErrorsService {

  constructor() { }

  showSuccess(message: string): void {
    //this.snackBar.open(message);
    alert(message)
  }

  showError(message: string): void {
    // The second parameter is the text in the button.
    // In the third, we send in the css class for the snack bar.
    //this.snackBar.open(message, 'X', { panelClass: ['error'] });
    alert(message)
  }
}
