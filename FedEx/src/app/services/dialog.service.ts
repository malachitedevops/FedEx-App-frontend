import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) { }

  openError(errorMessage: string, errorCode: number) {
    this.dialog.open(ErrorDialogComponent, {
      data: {message: errorMessage, code: errorCode},
      panelClass: 'popup-dialog'
    });
  }
}
